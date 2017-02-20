const rewire = require('rewire');
const util = rewire('../src/utilTool.js');



describe('Util Tool DEBUG', () => {
  it('Should write to file', () => {});
  describe('No Output When DEBUG false.', () => {
    it('No message should be output', () => {
      util.debug('test', { test: 'object' });
    });
  });
  describe('Output Message Test When DEBUG True.', () => {
    beforeEach(() => {
      util.__set__('process.env.DEBUG', 'true');
    });
    it('Output a message.', () => {
      util.debug('test'.update, { test: 'object' });
      util.debug('test'.error, { test: 'object' });
    });
  });
});
