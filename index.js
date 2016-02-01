const { Cu } = require('chrome');
module.exports = () => {
  /* global Services:false */
  Cu.import('resource://gre/modules/Services.jsm');
  return Services.wm.getMostRecentWindow('navigator:browser');
};
