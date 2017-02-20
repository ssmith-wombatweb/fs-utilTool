const rewire = require('rewire');
const expect = require('chai').expect;
const sinon = require('sinon');

const util = rewire('../src/utilTool.js');

describe('Util Tool DEBUG', () => {
  it('Should write to file', () => { });
  describe('No Output When DEBUG false.', () => {
    it('No message should be output', () => {
      util.debug('test', { test: 'object' });
    });
  });
  describe('Output Message Test When DEBUG True.', () => {
    beforeEach(() => {
      util.__set__('process.env.DEBUG', 'true');
    });
    it('Output messages.', () => {
      util.debug('test'.update, { test: 'object' });
      util.debug('test'.error, { test: 'object' });
    });
  });
  describe('Check Message Output', () => {
    beforeEach(() => {
      this.console = {
        log: sinon.spy(),
        error: sinon.spy(),
      };

      util.__set__('console', this.console);
    });
    it('Output an error and delete message', () => {
      const t = this;

      util.debug('test'.error, { test: 'object' });
      util.debug('test'.delete, { test: 'object' });

      expect(t.console.error.callCount).to.equal(2);
      t.console.log.args.forEach((arg) => {
        expect(arg[0]).to.contain('test');
        expect(arg[0]).to.contain('{"test":"object"}');
      });
    });
    it('Output create, read, update and delete message', () => {
      const t = this;

      util.debug('test'.create, { test: 'object' });
      util.debug('test'.read, { test: 'object' });
      util.debug('test'.update, { test: 'object' });

      expect(t.console.log.callCount).to.equal(3);
      t.console.log.args.forEach((arg) => {
        expect(arg[0]).to.contain('test');
        expect(arg[0]).to.contain('{"test":"object"}');
      });
    });
  });
  const version = util.updateVersion;

  describe('TynyVersion Utility Test', () => {
    describe('Test Version Change Function', () => {
      it('Update the major version.', () => {
        const newVer = version('1.3.2', 'major');

        expect(newVer).to.equal('2.0.0');
      });
      it('Update the minor version.', () => {
        const newVer = version('1.3.2', 'minor');

        expect(newVer).to.equal('1.4.0');
      });
      it('Update the patch version.', () => {
        const newVer = version('1.3.2', 'patch');

        expect(newVer).to.equal('1.3.3');
      });
      it('Bad release type entered.', () => {
        const newVer = version('1.3.2', 'match');

        expect(newVer).to.equal('Invalid release type.');
      });
      it('Bad version number entered.', () => {
        const newVer = version('1.3.2.3', 'match');

        expect(newVer).to.equal('Invalid version number.');
      });
    });
  });
});