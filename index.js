const { Cu } = require('chrome');
/**
  * get current browser window for firefox addon
  *
  * @returns {ChromeWindow|null} browser window
  * @see https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWindowMediator#getMostRecentWindow()
  */
module.exports = () => {
  /* global Services:false */
  Cu.import('resource://gre/modules/Services.jsm');
  return Services.wm.getMostRecentWindow('navigator:browser');
};
