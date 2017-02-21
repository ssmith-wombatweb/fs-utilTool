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
      util.debug('test'.delete, { test: 'object' });
    });
  });
  describe('Check Message Output', () => {
    beforeEach(() => {
      this.console = {
        log: sinon.spy(),
        error: sinon.spy(),
        warn: sinon.spy(),
      };

      util.__set__('console', this.console);
    });
    it('Output an delete message to the warn log.', () => {
      const t = this;

      util.debug('test'.delete, { test: 'object' });

      expect(t.console.warn.callCount).to.equal(1);
      t.console.log.args.forEach((arg) => {
        expect(arg[0]).to.contain('test');
        expect(arg[0]).to.contain('{"test":"object"}');
      });
    });
    it('Output an error message to the error log.', () => {
      const t = this;

      util.debug('test'.error, { test: 'object' });

      expect(t.console.error.callCount).to.equal(1);
      t.console.log.args.forEach((arg) => {
        expect(arg[0]).to.contain('test');
        expect(arg[0]).to.contain('{"test":"object"}');
      });
    });
    it('Output create, read, and update to the regular log.', () => {
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
});
