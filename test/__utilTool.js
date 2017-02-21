const expect = require('chai').expect;
const sinon = require('sinon');

const util = require('../src/utilTool.js');

describe('Util Tool DEBUG', () => {
  it('Should write to file', () => {});

  const version = util.updateVersion;
  describe('Version Utility Test', () => {
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
