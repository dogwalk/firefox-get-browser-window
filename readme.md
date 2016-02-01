# get-firefox-browser-window

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> For Firefox addon: Get a browser window.

See: [nsIWindowMediator#getMostRecentWindow()](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWindowMediator#getMostRecentWindow())


## Install

```
$ npm install --save get-firefox-browser-window
```


## Usage

```js
var getFirefoxBrowserWindow = require('get-firefox-browser-window');

getFirefoxBrowserWindow();
//=> ChromeWindow
```



## API

### getFirefoxBrowserWindow() -> ChromeWindow || null


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/dogwalk/get-firefox-browser-window
[travis-image]: https://img.shields.io/travis/dogwalk/get-firefox-browser-window/master.svg?style=flat-square&label=build%20%28linux%29
[appveyor-url]: https://ci.appveyor.com/project/sanemat/get-firefox-browser-window/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/get-firefox-browser-window/master.svg?style=flat-square&label=build%20%28windows%29
[npm-url]: https://npmjs.org/package/get-firefox-browser-window
[npm-image]: https://img.shields.io/npm/v/get-firefox-browser-window.svg?style=flat-square
[daviddm-url]: https://david-dm.org/dogwalk/get-firefox-browser-window
[daviddm-image]: https://img.shields.io/david/dogwalk/get-firefox-browser-window.svg?style=flat-square
