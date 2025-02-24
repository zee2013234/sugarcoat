var _satellite;
{
  const $___stub_47c01efa79e9f191 = {};
  (exports => {
    'use strict';
    exports.appVersion = {
      configurable: true,
      enumerable: true,
      get () {
        return '5.0';
      },
    };
    exports.platform = {
      configurable: true,
      enumerable: true,
      get () {
        return '';
      },
    };
    exports.userAgent = {
      configurable: true,
      enumerable: true,
      get () {
        return 'Mozilla/5.0';
      },
    };
  })($___stub_47c01efa79e9f191);
  const $___stub_afd3abb015d4d981 = {};
  (exports => {
    'use strict';
    const xhrUnsent = 0;
    const xhrOpened = 1;
    const xhrHeadersReceived = 2;
    const xhrLoading = 3;
    const xhrDone = 4;
    const xhrDeferredHandleSymbol = Symbol('deferredHandle');
    const xhrOnLoadStartSymbol = Symbol('onloadstart');
    const xhrOnProgressSymbol = Symbol('onprogress');
    const xhrOnAbortSymbol = Symbol('onabort');
    const xhrOnErrorSymbol = Symbol('onerror');
    const xhrOnLoadSymbol = Symbol('onload');
    const xhrOnTimeoutSymbol = Symbol('ontimeout');
    const xhrOnLoadEndSymbol = Symbol('onloadend');
    const xhrOnReadyStateChangeSymbol = Symbol('onreadystatechange');
    const xhrReadyStateSymbol = Symbol('readyState');
    const xhrTimeoutSymbol = Symbol('timeout');
    const xhrWithCredentialsSymbol = Symbol('withCredentials');
    const xhrUploadSymbol = Symbol('upload');
    const xhrResponseTypeSymbol = Symbol('responseType');
    const defineEvent = (obj, symbol) => {
      const type = symbol.description.substring(2);
      Object.defineProperty(obj, symbol, {
        configurable: false,
        enumerable: false,
        value: null,
        writable: true,
      });
      obj.addEventListener(type, function (event) {
        const handler = this[symbol];
        if (handler) {
          handler(event);
        }
      });
    };
    const changeReadyState = (xhr, readyState) => {
      xhr[xhrReadyStateSymbol] = readyState;
      xhr.dispatchEvent(new Event('readystatechange'));
    };
    let isSealed = true;
    class XMLHttpRequestEventTarget extends EventTarget {
      constructor () {
        super();
        if (!(this instanceof XMLHttpRequest) && !(this instanceof XMLHttpRequestUpload)) {
          throw new TypeError('Illegal constructor');
        }
        defineEvent(this, xhrOnLoadStartSymbol);
        defineEvent(this, xhrOnProgressSymbol);
        defineEvent(this, xhrOnAbortSymbol);
        defineEvent(this, xhrOnErrorSymbol);
        defineEvent(this, xhrOnLoadSymbol);
        defineEvent(this, xhrOnTimeoutSymbol);
        defineEvent(this, xhrOnLoadEndSymbol);
      }
      get onloadstart () {
        return this[xhrOnLoadStartSymbol];
      }
      set onloadstart (value) {
        this[xhrOnLoadStartSymbol] = value;
      }
      get onprogress () {
        return this[xhrOnProgressSymbol];
      }
      set onprogress (value) {
        this[xhrOnProgressSymbol] = value;
      }
      get onabort () {
        return this[xhrOnAbortSymbol];
      }
      set onabort (value) {
        this[xhrOnAbortSymbol] = value;
      }
      get onerror () {
        return this[xhrOnErrorSymbol];
      }
      set onerror (value) {
        this[xhrOnErrorSymbol] = value;
      }
      get ontimeout () {
        return this[xhrOnTimeoutSymbol];
      }
      set ontimeout (value) {
        this[xhrOnTimeoutSymbol] = value;
      }
      get onloadend () {
        return this[xhrOnLoadEndSymbol];
      }
      set onloadend (value) {
        this[xhrOnLoadEndSymbol] = value;
      }
    }
    exports.XMLHttpRequestEventTarget = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequestEventTarget,
      writable: true,
    };
    class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
        super();
      }
    }
    exports.XMLHttpRequestUpload = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequestUpload,
      writable: true,
    };
    class XMLHttpRequest extends XMLHttpRequestEventTarget {
      constructor () {
        super();
        isSealed = false;
        const xhrUpload = new XMLHttpRequestUpload();
        isSealed = true;
        Object.defineProperty(this, xhrDeferredHandleSymbol, {
          configurable: false,
          enumerable: false,
          value: null,
          writable: true,
        });
        defineEvent(this, xhrOnReadyStateChangeSymbol);
        Object.defineProperty(this, xhrReadyStateSymbol, {
          configurable: false,
          enumerable: false,
          value: xhrUnsent,
          writable: true,
        });
        Object.defineProperty(this, xhrTimeoutSymbol, {
          configurable: false,
          enumerable: false,
          value: 0,
          writable: true,
        });
        Object.defineProperty(this, xhrWithCredentialsSymbol, {
          configurable: false,
          enumerable: false,
          value: false,
          writable: true,
        });
        Object.defineProperty(this, xhrUploadSymbol, {
          configurable: false,
          enumerable: false,
          value: xhrUpload,
          writable: false,
        });
        Object.defineProperty(this, xhrResponseTypeSymbol, {
          configurable: false,
          enumerable: false,
          value: '',
          writable: true,
        });
      }
      get onreadystatechange () {
        return this[xhrOnReadyStateChangeSymbol];
      }
      set onreadystatechange (value) {
        this[xhrOnReadyStateChangeSymbol] = value;
      }
      get readyState () {
        return this[xhrReadyStateSymbol];
      }
      open (method, url) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrUnsent:
          case xhrDone: {
            changeReadyState(this, xhrOpened);
            break;
          }
        }
      }
      setRequestHeader (name, value) {}
      setTrustToken (trustToken) {}
      get timeout () {
        return this[xhrTimeoutSymbol];
      }
      set timeout (value) {
        this[xhrTimeoutSymbol] = value;
      }
      get withCredentials () {
        return this[xhrWithCredentialsSymbol];
      }
      set withCredentials (value) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrUnsent:
          case xhrOpened: {
            break;
          }
          default: {
            throw new DOMException(
              "Failed to set the 'withCredentials' property on 'XMLHttpRequest': The value may only be set if the object's state is UNSENT or OPENED."
            );
          }
        }
        this[xhrWithCredentialsSymbol] = !!value;
      }
      get upload () {
        return this[xhrUploadSymbol];
      }
      send () {
        if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] === null) {
          this[xhrDeferredHandleSymbol] = setTimeout(() => {
            this[xhrDeferredHandleSymbol] = null;
            changeReadyState(this, xhrDone);
            this.dispatchEvent(new ProgressEvent('error'));
            this.dispatchEvent(new ProgressEvent('loadend'));
          }, 0);
        } else {
          throw new DOMException(
            "Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED."
          );
        }
      }
      abort () {
        if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] !== null) {
          clearTimeout(this[xhrDeferredHandleSymbol]);
          this[xhrDeferredHandleSymbol] = null;
          changeReadyState(this, xhrUnsent);
          this.dispatchEvent(new ProgressEvent('abort'));
          this.dispatchEvent(new ProgressEvent('loadend'));
        }
      }
      get responseURL () {
        return '';
      }
      get status () {
        return 0;
      }
      get statusText () {
        return '';
      }
      getResponseHeader (name) {
        return null;
      }
      overrideMimeType (mime) {}
      get responseType () {
        return this[xhrResponseTypeSymbol];
      }
      set responseType (value) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrDone: {
            throw new DOMException(
              "Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set if the object's state is LOADING or DONE."
            );
          }
        }
        switch (value) {
          case '':
          case 'arraybuffer':
          case 'blob':
          case 'document':
          case 'json':
          case 'text': {
            this[xhrResponseTypeSymbol] = value;
            break;
          }
        }
      }
      get response () {
        const responseType = this[xhrResponseTypeSymbol];
        return responseType === '' || responseType === 'text' ? '' : null;
      }
      get responseText () {
        const responseType = this[xhrResponseTypeSymbol];
        if (responseType === '' || responseType === 'text') {
          return '';
        } else {
          throw new DOMException(
            "Failed to read the 'responseText' property from 'XMLHttpRequest': The value is only accessible if the object's 'responseType' is '' or 'text' (was 'arraybuffer')."
          );
        }
      }
      get responseXML () {
        return null;
      }
    }
    Object.defineProperty(XMLHttpRequest, 'UNSENT', {
      configurable: false,
      enumerable: true,
      value: xhrUnsent,
    });
    Object.defineProperty(XMLHttpRequest, 'OPENED', {
      configurable: false,
      enumerable: true,
      value: xhrOpened,
    });
    Object.defineProperty(XMLHttpRequest, 'HEADERS_RECEIVED', {
      configurable: false,
      enumerable: true,
      value: xhrHeadersReceived,
    });
    Object.defineProperty(XMLHttpRequest, 'LOADING', {
      configurable: false,
      enumerable: true,
      value: xhrLoading,
    });
    Object.defineProperty(XMLHttpRequest, 'DONE', {
      configurable: false,
      enumerable: true,
      value: xhrDone,
    });
    exports.XMLHttpRequest = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequest,
      writable: true,
    };
  })($___stub_afd3abb015d4d981);
  const $___stub_b317e19f866a2da7 = {};
  (exports => {
    'use strict';
    let isSealed = false;
    class Storage {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
      }
      get length () {
        return Object.keys(this).length;
      }
      key (index) {
        const keys = Object.keys(this);
        if (index < 0 || index >= keys.length) {
          return null;
        }
        return keys[index];
      }
      getItem (key) {
        return Object.prototype.hasOwnProperty.call(this, key) ? this[key] : null;
      }
      setItem (key, value) {
        this[key] = String(value);
      }
      removeItem (key) {
        delete this[key];
      }
      clear () {
        const keys = Object.keys(this);
        for (const key of keys) {
          delete this[key];
        }
      }
    }
    exports.Storage = { configurable: true, enumerable: true, value: Storage, writable: true };
    const localStorage = new Storage();
    exports.localStorage = {
      configurable: true,
      enumerable: true,
      get () {
        return localStorage;
      },
    };
    const sessionStorage = new Storage();
    exports.sessionStorage = {
      configurable: true,
      enumerable: true,
      get () {
        return sessionStorage;
      },
    };
    isSealed = true;
  })($___stub_b317e19f866a2da7);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2019-11-23T20:33:42Z',
          environment: 'production',
          turbineBuildDate: '2019-06-25T22:25:24Z',
          turbineVersion: '25.6.0',
        },
        dataElements: {
          globalVarHierarchy: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.hier' },
          },
          primaryCategory: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.category.primaryCategory' },
          },
          breadcrumbClicked: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.breadcrumb.name' },
          },
          globalVarPageType: {
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.category.pageType' },
          },
          formUniqueID: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.form.uniqueID' },
          },
          searchResults: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.internalSearch.results' },
          },
          globalVarBrand: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.brand' },
          },
          globalVarSubSection1: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.category.subCategory1' },
          },
          productCategory: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.product.category.primaryCategory' },
          },
          tabName: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.tab.name' },
          },
          searchKeyword: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: '_smeportalsearchresults_keywords', caseInsensitive: !0 },
          },
          globalVarServer: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.hostname;
              },
            },
          },
          globalVarCountry: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.country' },
          },
          pageURL: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.location.href;
              },
            },
          },
          globalVarPageName: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.pageName' },
          },
          formStepDetail: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.form.stepDetail' },
          },
          globalVarSiteSection: {
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = digitalData.page.category.site,
                  t = digitalData.page.category.subCategory2;
                return 'chubb' == e
                  ? digitalData.page.pageInfo.country +
                      ':' +
                      digitalData.page.pageInfo.language +
                      ':' +
                      digitalData.page.category.site
                  : 'chubb_paylah' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.site
                  : 'chubb_ib' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.site
                  : 'chubb_mb' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.site
                  : 'chubb_ib_iwealth' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.site
                  : 'chubb_mb_iwealth' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.site
                  : 'chubb_mb_iwealth' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.site
                  : 'sg:en:pweb:dbs:insurance:motor' == t
                  ? digitalData.page.category.site +
                    ':' +
                    digitalData.page.category.primaryCategory
                  : digitalData.page.category.site;
              },
            },
          },
          globalVarPageload: {
            defaultValue: 'true',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.pageload' },
          },
          globalVarSubSection3: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.category.subCategory3' },
          },
          'product string': {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                s.products =
                  ';' +
                  _satellite.getVar('productType') +
                  ';' +
                  _satellite.getVar('productCategory') +
                  ';' +
                  _satellite.getVar('productName');
              },
            },
          },
          stickyLeftNavClicked: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.stickyleftnav.name' },
          },
          globalVarLanguage: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.language' },
          },
          formType: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.form.type' },
          },
          formName: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.form.name' },
          },
          globalVarDestinationURL: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.pageInfo.destinationURL' },
          },
          globalVarBusinessUnit: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e =
                  digitalData &&
                  digitalData.page &&
                  digitalData.page.pageInfo &&
                  digitalData.page.pageInfo.brand;
                return 'chubb' == e
                  ? digitalData.page.pageInfo.country +
                      ':' +
                      digitalData.page.pageInfo.language +
                      ':' +
                      digitalData.page.category.primaryCategory
                  : 'chubb_paylah' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.primaryCategory
                  : 'chubb_ib' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.primaryCategory
                  : 'chubb_mb' == e
                  ? digitalData.page.pageInfo.country +
                    ':' +
                    digitalData.page.pageInfo.language +
                    ':' +
                    digitalData.page.category.primaryCategory
                  : digitalData.page.category.primaryCategory;
              },
            },
          },
          internalSearchResultRank: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.internalSearch.rank' },
          },
          'PWEB-Generic Tab': {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'T:' + _satellite.getVar('buttonName');
              },
            },
          },
          promoBannerClicks: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.promotionbanner.name' },
          },
          globalVarSite: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.category.site' },
          },
          productType: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.product.category.productType' },
          },
          globalVarSubSection2: {
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.category.subCategory2' },
          },
          buttonName: {
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.button.name' },
          },
        },
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/javascriptVariable.js': {
                name: 'javascript-variable',
                displayName: 'JavaScript Variable',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return a(window, e.path);
                  };
                },
              },
              'core/src/lib/dataElements/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, n) {
                  'use strict';
                  var o = n('@adobe/reactor-window'),
                    s = n('@adobe/reactor-query-string');
                  e.exports = function (e) {
                    var t = s.parse(o.location.search);
                    if (!e.caseInsensitive) return t[e.name];
                    for (
                      var n = e.name.toLowerCase(), a = Object.keys(t), r = 0;
                      r < a.length;
                      r++
                    ) {
                      var i = a[r];
                      if (i.toLowerCase() === n) return t[i];
                    }
                  };
                },
              },
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e) {
                    return e.source();
                  };
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (e, t, n, i) {
                  'use strict';
                  var o = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite.track = function (e, t) {
                      e = e.trim();
                      var n = o[e];
                      if (n) {
                        var a = { identifier: e, detail: t };
                        n.forEach(function (e) {
                          e(a);
                        });
                        var r = [
                          'Rules using the direct call event type with identifier "' +
                            e +
                            '" have been triggered' +
                            (t ? ' with additional detail:' : '.'),
                        ];
                        t && r.push(t), i.logger.log.apply(i.logger, r);
                      } else
                        i.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, t) {
                      var n = o[e.identifier];
                      n || (n = o[e.identifier] = []), n.push(t);
                    });
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var a = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    r = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    i = function (e, t) {
                      return t && r(e) ? e.toLowerCase() : e;
                    },
                    o = function (e) {
                      return a(e) ? String(e) : e;
                    },
                    s = function (e) {
                      return r(e) ? Number(e) : e;
                    },
                    t = function (a) {
                      return function (e, t, n) {
                        return (e = o(e)), (t = o(t)), r(e) && r(t) && a(e, t, n);
                      };
                    },
                    n = function (n) {
                      return function (e, t) {
                        return (e = s(e)), (t = s(t)), a(e) && a(t) && n(e, t);
                      };
                    },
                    l = function (a) {
                      return function (e, t, n) {
                        return a(i(e, n), i(t, n));
                      };
                    },
                    c = {
                      equals: l(function (e, t) {
                        return e == t;
                      }),
                      doesNotEqual: function () {
                        return !c.equals.apply(null, arguments);
                      },
                      contains: t(
                        l(function (e, t) {
                          return -1 !== e.indexOf(t);
                        })
                      ),
                      doesNotContain: function () {
                        return !c.contains.apply(null, arguments);
                      },
                      startsWith: t(
                        l(function (e, t) {
                          return 0 === e.indexOf(t);
                        })
                      ),
                      doesNotStartWith: function () {
                        return !c.startsWith.apply(null, arguments);
                      },
                      endsWith: t(
                        l(function (e, t) {
                          return e.substring(e.length - t.length, e.length) === t;
                        })
                      ),
                      doesNotEndWith: function () {
                        return !c.endsWith.apply(null, arguments);
                      },
                      matchesRegex: t(function (e, t, n) {
                        return new RegExp(t, n ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !c.matchesRegex.apply(null, arguments);
                      },
                      lessThan: n(function (e, t) {
                        return e < t;
                      }),
                      lessThanOrEqual: n(function (e, t) {
                        return e <= t;
                      }),
                      greaterThan: n(function (e, t) {
                        return t < e;
                      }),
                      greaterThanOrEqual: n(function (e, t) {
                        return t <= e;
                      }),
                      isTrue: function (e) {
                        return !0 === e;
                      },
                      isTruthy: function (e) {
                        return Boolean(e);
                      },
                      isFalse: function (e) {
                        return !1 === e;
                      },
                      isFalsy: function (e) {
                        return !e;
                      },
                    };
                  e.exports = function (e) {
                    return c[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    r = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = a.location.pathname;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return r(n, t);
                    });
                  };
                },
              },
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    a.registerPageBottomTrigger(t);
                  };
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    for (var n = t.split('.'), a = e, r = 0, i = n.length; r < i; r++) {
                      if (null == a) return undefined;
                      a = a[n[r]];
                    }
                    return a;
                  };
                },
              },
              'core/src/lib/helpers/textMatch.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    if (null == t) throw new Error('Illegal Argument: Pattern is not present');
                    return (
                      null != e &&
                      ('string' == typeof t ? e === t : t instanceof RegExp && t.test(e))
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_663411916ff59504 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_663411916ff59504)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var a = n('@adobe/reactor-window'),
                        r = n('@adobe/reactor-document'),
                        i = -1 !== a.navigator.appVersion.indexOf('MSIE 10'),
                        o = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        l = 'PAGE_BOTTOM',
                        c = [l, s, o],
                        u = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      c.forEach(function (e) {
                        d[e] = [];
                      });
                      var p = function (e, t) {
                          c.slice(0, g(e) + 1).forEach(function (e) {
                            m(t, e);
                          });
                        },
                        f = function () {
                          return 'complete' === r.readyState
                            ? o
                            : 'interactive' === r.readyState
                            ? i
                              ? null
                              : s
                            : void 0;
                        },
                        g = function (e) {
                          return c.indexOf(e);
                        },
                        m = function (t, e) {
                          d[e].forEach(function (e) {
                            h(t, e);
                          }),
                            (d[e] = []);
                        },
                        h = function (e, t) {
                          var n = t.trigger,
                            a = t.syntheticEventFn;
                          n(a ? a(e) : null);
                        };
                      (a._satellite = a._satellite || {}),
                        (a._satellite.pageBottom = p.bind(null, l)),
                        r.addEventListener('DOMContentLoaded', p.bind(null, s), !0),
                        a.addEventListener('load', p.bind(null, o), !0),
                        a.setTimeout(function () {
                          var e = f();
                          e && p(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[l].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[s].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: u.bind(null, a) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_663411916ff59504)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_663411916ff59504
                      ));
                  }
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2c73f67d94bb4dfb8c54d3436dc19256/',
          },
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('../sharedModules/getTracker'),
                    i = n('../helpers/applyTrackerVariables');
                  e.exports = function (t, n) {
                    return r().then(
                      function (e) {
                        a.logger.info('Set variables on the tracker.'),
                          i(e, t.trackerProperties),
                          t.customSetup &&
                            t.customSetup.source &&
                            t.customSetup.source.call(n.element, n, e);
                      },
                      function (e) {
                        a.logger.error('Cannot set variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/clearVariables.js': {
                name: 'clear-variables',
                displayName: 'Clear Variables',
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('../sharedModules/getTracker');
                  e.exports = function () {
                    return r().then(
                      function (e) {
                        e.clearVars && (a.logger.info('Clear variables.'), e.clearVars());
                      },
                      function (e) {
                        a.logger.error('Cannot clear variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker'),
                    i = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    o = function (e) {
                      return i(e) ? e.innerHTML : 'link clicked';
                    },
                    s = function (e, t, n) {
                      if ('page' === t.type) r.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var a = { linkType: t.linkType || 'o', linkName: t.linkName || o(n) };
                        r.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(a) + '.'
                        ),
                          e.tl(i(n) ? n : 'true', a.linkType, a.linkName);
                      }
                    };
                  e.exports = function (t, n) {
                    return a().then(
                      function (e) {
                        s(e, t, n.element);
                      },
                      function (e) {
                        r.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var a,
                    r = n('@adobe/reactor-cookie'),
                    i = n('@adobe/reactor-promise'),
                    s = n('@adobe/reactor-window'),
                    l = n('../helpers/augmenters'),
                    c = n('@adobe/reactor-load-script'),
                    u = n('../helpers/applyTrackerVariables'),
                    d = n('../helpers/loadLibrary'),
                    p = n('../helpers/generateVersion')(o.buildInfo.turbineBuildDate),
                    f = 'beforeSettings',
                    g = o.getSharedModule('adobe-mcid', 'mcid-instance'),
                    m = function (e) {
                      return !e || 'true' === r.get(e);
                    },
                    h = function (a) {
                      return i
                        .all(
                          l.map(function (e) {
                            var t;
                            try {
                              t = e(a);
                            } catch (n) {
                              setTimeout(function () {
                                throw n;
                              });
                            }
                            return i.resolve(t);
                          })
                        )
                        .then(function () {
                          return a;
                        });
                    },
                    v = function (e) {
                      return (
                        g &&
                          (o.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = g)),
                        e
                      );
                    },
                    b = function (e) {
                      return (
                        o.logger.info('Setting version on tracker: "' + p + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = p)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + p &&
                            (e.version += '-' + p),
                        e
                      );
                    },
                    y = function (e, t, n) {
                      return (
                        t.loadPhase === f &&
                          t.source &&
                          (o.logger.info('Calling custom script before settings.'),
                          t.source.call(s, n)),
                        u(n, e || {}),
                        t.loadPhase !== f &&
                          t.source &&
                          (o.logger.info('Calling custom script after settings.'),
                          t.source.call(s, n)),
                        n
                      );
                    },
                    _ = function (e, t) {
                      var n = e.moduleProperties;
                      if (
                        n &&
                        n.audienceManager &&
                        n.audienceManager.config &&
                        s._satellite &&
                        s._satellite.company &&
                        s._satellite.company.orgId
                      ) {
                        var a = { namespace: s._satellite.company.orgId };
                        n.audienceManager.config.visitorService = a;
                        var r = 'AppMeasurement_Module_AudienceManagement.js',
                          i = o.getHostedLibFileUrl(r);
                        return c(i).then(function () {
                          return (
                            t.loadModule('AudienceManagement'),
                            o.logger.info('Initializing AudienceManagement module'),
                            t.AudienceManagement.setup(n.audienceManager.config),
                            t
                          );
                        });
                      }
                      return t;
                    },
                    C =
                      ((a = o.getExtensionSettings()),
                      m(a.trackingCookieName)
                        ? d(a)
                            .then(h)
                            .then(v)
                            .then(b)
                            .then(y.bind(null, a.trackerProperties, a.customSetup || {}))
                            .then(_.bind(null, a))
                        : i.reject('EU compliance was not acknowledged by the user.'));
                  e.exports = function () {
                    return C;
                  };
                },
                name: 'get-tracker',
                shared: !0,
              },
              'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                name: 'augment-tracker',
                shared: !0,
                script: function (e, t, n) {
                  'use strict';
                  var a = n('../helpers/augmenters');
                  e.exports = function (e) {
                    a.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var r = n('@adobe/reactor-query-string'),
                    i = n('@adobe/reactor-window'),
                    s = /eVar([0-9]+)/,
                    l = /prop([0-9]+)/,
                    c = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    u = function (e, t, n) {
                      return n.indexOf(e) === t;
                    },
                    d = function (e, t, n) {
                      var a = Object.keys(t).filter(c.test.bind(c));
                      return (
                        n && a.push('events'),
                        (a = a.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && u(e, t, a);
                          })
                          .join(',')
                      );
                    },
                    p = function (e, t) {
                      var n = t.map(function (e) {
                        return e.name;
                      });
                      return (n = n.concat((e.linkTrackEvents || '').split(',')))
                        .filter(function (e, t) {
                          return 'None' !== e && u(e, t, n);
                        })
                        .join(',');
                    },
                    a = function (e, t, n) {
                      e[t] = n[t].join(',');
                    },
                    f = function (r, e, t) {
                      var i = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var n = s.exec(e.value);
                          if (n) t = i + 'v' + n[1];
                          else {
                            var a = l.exec(e.value);
                            a && (t = i + 'c' + a[1]);
                          }
                        }
                        r[e.name] = t;
                      });
                    },
                    g = {
                      linkDownloadFileTypes: a,
                      linkExternalFilters: a,
                      linkInternalFilters: a,
                      hierarchies: function (t, e, n) {
                        n[e].forEach(function (e) {
                          t[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: f,
                      eVars: f,
                      campaign: function (e, t, n) {
                        if ('queryParam' === n[t].type) {
                          var a = r.parse(i.location.search);
                          e[t] = a[n[t].value];
                        } else e[t] = n[t].value;
                      },
                      events: function (e, t, n) {
                        var a = n[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.value && (t = [t, e.value].join('=')),
                            e.id && (t = [t, e.id].join(':')),
                            t
                          );
                        });
                        e[t] = a.join(',');
                      },
                    };
                  e.exports = function (t, a) {
                    var r = {};
                    (a = a || {}),
                      Object.keys(a).forEach(function (e) {
                        var t = g[e],
                          n = a[e];
                        t ? t(r, e, a) : (r[e] = n);
                      }),
                      r.events &&
                        t.events &&
                        0 < t.events.length &&
                        (r.events = t.events + ',' + r.events);
                    var e = a && a.events && 0 < a.events.length,
                      n = d(t, r, e);
                    n && (r.linkTrackVars = n);
                    var i = p(t, a.events || []);
                    i && (r.linkTrackEvents = i),
                      o.logger.info(
                        'Applying the following properties on tracker: "' +
                          JSON.stringify(r) +
                          '".'
                      ),
                      Object.keys(r).forEach(function (e) {
                        t[e] = r[e];
                      });
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/augmenters.js': {
                script: function (e) {
                  'use strict';
                  e.exports = [];
                },
              },
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (e, t, n, i) {
                  'use strict';
                  var a = n('@adobe/reactor-load-script'),
                    o = n('@adobe/reactor-window'),
                    s = n('@adobe/reactor-promise'),
                    r = {
                      MANAGED: 'managed',
                      PREINSTALLED: 'preinstalled',
                      REMOTE: 'remote',
                      CUSTOM: 'custom',
                    },
                    l = function (e) {
                      return i.logger.info('Loading AppMeasurement script from: ' + e + '.'), a(e);
                    },
                    c = function (e) {
                      var t = e.production;
                      return (
                        e[i.buildInfo.environment] && (t = e[i.buildInfo.environment]), t.join(',')
                      );
                    },
                    u = function (e, t) {
                      if (!o.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            o.AppMeasurement
                        );
                      i.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                      );
                      var n = o.s_gi(t);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (i.logger.info('Setting the tracker as window.s'), (o.s = n)),
                        n
                      );
                    },
                    d = function (e) {
                      var t = c(e.libraryCode.accounts);
                      return l(i.getHostedLibFileUrl('AppMeasurement.js')).then(
                        u.bind(null, e, t)
                      );
                    },
                    p = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var n = c(e.libraryCode.accounts);
                          i.logger.info(
                            'Setting the following report suites on the tracker: "' + n + '"'
                          ),
                            t.sa(n);
                        } else
                          i.logger.warn(
                            'Cannot set report suites on tracker. `sa` method not available.'
                          );
                      return t;
                    },
                    f = function (r) {
                      return (
                        i.logger.info(
                          'Waiting for the tracker to become accessible at: "' + r + '".'
                        ),
                        new s(function (e, t) {
                          var n = 1,
                            a = setInterval(function () {
                              o[r] &&
                                (i.logger.info('Found tracker located at: "' + r + '".'),
                                e(o[r]),
                                clearInterval(a)),
                                10 <= n &&
                                  (clearInterval(a),
                                  t(
                                    new Error(
                                      'Bailing out. Cannot find the global variable name: "' +
                                        r +
                                        '".'
                                    )
                                  )),
                                n++;
                            }, 1000);
                        })
                      );
                    },
                    g = function (e) {
                      return f(e.libraryCode.trackerVariableName).then(p.bind(null, e));
                    },
                    m = function (e) {
                      if (o[e])
                        return i.logger.info('Found tracker located at: "' + e + '".'), o[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    },
                    h = function (e, t) {
                      return l(e)
                        .then(m.bind(null, t.libraryCode.trackerVariableName))
                        .then(p.bind(null, t));
                    };
                  e.exports = function (e) {
                    var t, n;
                    switch (e.libraryCode.type) {
                      case r.MANAGED:
                        n = d(e);
                        break;
                      case r.PREINSTALLED:
                        n = g(e);
                        break;
                      case r.CUSTOM:
                        (t = e.libraryCode.source), (n = h(t, e));
                        break;
                      case r.REMOTE:
                        (t =
                          'https:' === o.location.protocol
                            ? e.libraryCode.httpsUrl
                            : e.libraryCode.httpUrl),
                          (n = h(t, e));
                        break;
                      default:
                        throw new Error('Cannot load library. Type not supported.');
                    }
                    return n;
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/generateVersion.js': {
                script: function (e) {
                  'use strict';
                  var t = 8,
                    n = function (e) {
                      return e.getUTCDate().toString(36);
                    },
                    a = function (e) {
                      return e.substr(e.length - 1);
                    },
                    r = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    i = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * r(e)).toString(36);
                      return a(t);
                    },
                    o = function (e) {
                      return (e.getUTCFullYear() - 2010).toString(36);
                    };
                  e.exports = function (e) {
                    var t = new Date(e);
                    if (isNaN(t)) throw new Error('Invalid date provided');
                    return ('L' + o(t) + i(t) + n(t)).toUpperCase();
                  };
                },
              },
            },
            settings: {
              orgId: '1E4734FA53DAC2360A490D44@AdobeOrg',
              customSetup: {
                source: function (e) {
                  function t (e) {
                    var t = e.getTimeParting(7);
                    (e.eVar76 = e.prop47 = t),
                      (e.eVar22 = e.getNewRepeat(365)),
                      e.campaign || (e.campaign = e.getQueryParam('gid')),
                      e.campaign || (e.campaign = e.getQueryParam('cid')),
                      e.eVar90 ||
                        ((e.eVar90 = e.getQueryParam('tid')),
                        e.eVar90 && (e.events = e.apl(e.events, 'event151', ',', 1))),
                      e.campaign || (e.campaign = e.getQueryParam('s_cid')),
                      e.campaign || (e.campaign = e.getQueryParam('sc_cid')),
                      e.campaign && (e.events = e.apl(e.events, 'event10', ',', 1)),
                      e.eVar6 ||
                        ((e.eVar6 = e.getQueryParam('pid')),
                        e.eVar6 && (e.events = e.apl(e.events, 'event20', ',', 1))),
                      e.campaign
                        ? (e.prop17 = e.campaign + ':' + e.pageName)
                        : (e.prop17 = e.pageName),
                      (e.eVar100 = e.prop75 = e.marketingCloudVisitorID),
                      e.AudienceManagement.setup({
                        partner: 'dbs',
                        containerNSID: 0,
                        visitorService: { namespace: '1E4734FA53DAC2360A490D44@AdobeOrg' },
                        uuidCookie: { name: 'aam_uuid', days: 90 },
                      });
                  }
                  if (
                    -1 !=
                    document.location.href.indexOf(
                      'https://dbsweb-s01-dbs1.dbs.com/i-bank/dbs-forms/'
                    )
                  )
                    return !1;
                  if (
                    -1 !=
                    document.location.href.indexOf(
                      'https://dbsuat.chubbdigital.com/sg/dbs/pweb/travellershieldplus/'
                    )
                  )
                    return !1;
                  if (
                    -1 != document.location.href.indexOf('dbs-forms') &&
                    (-1 != document.location.href.indexOf('thank-you') ||
                      -1 != document.location.href.indexOf('complete'))
                  )
                    return !1;
                  (e.trackDownloadLinks = !0),
                    (e.trackExternalLinks = !0),
                    (e.trackInlineStats = !0),
                    (e.linkDownloadFileTypes =
                      'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,flv'),
                    (e.linkInternalFilters =
                      'javascript:,dbs.com,http://dbs.com,http://www.dbs.com,https://dbs.com,https://www.dbs.com,locator.dbs.com,secure.dbs.com,tw.dbs.com,hk.dbs.com,http://www.dbs.com.hk,http://dbs.com.hk,https://www.dbs.com.hk,https://dbs.com.hk,dbs.com.hk,https://internet-banking.dbs.com.hk/,https://e-insure2.msig.sg,www.posb.com,https://203.127.2.21:60443/IB/Welcome?From IB=,https://dbsweb-u03-dbs1.dbs.com/i-bank/dbs-forms/components/complete.page,https://dbsweb-u03-dbs1.dbs.com/i-bank/dbs-forms/components/complete.page#'),
                    (e.linkLeaveQueryString = !1),
                    (e.linkTrackVars = 'None'),
                    (e.linkTrackEvents = 'None'),
                    (e.visitorNamespace = 'dbs'),
                    (e.trackingServer = 'somniture.dbs.com.sg'),
                    (e.trackingServerSecure = 'somniture.dbs.com.sg'),
                    (e.cookieDomain = window.location.hostname);
                  var n = window.location.hostname.split('.');
                  3 == n.length
                    ? (e.cookieDomainPeriods = '2')
                    : 3 < n.length && (e.cookieDomainPeriods = '3'),
                    (e.usePlugins = !0),
                    (e.doPlugins = t),
                    Visitor.getInstance('1E4734FA53DAC2360A490D44@AdobeOrg', {
                      overwriteCrossDomainMCIDAndAID: !0,
                    }),
                    (function () {
                      'use strict';
                      function e () {
                        return {
                          callbacks: {},
                          add: function (e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var n = this.callbacks[e].push(t) - 1;
                            return function () {
                              this.callbacks[e].splice(n, 1);
                            };
                          },
                          execute: function (e, t) {
                            if (this.callbacks[e]) {
                              t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                              try {
                                for (; this.callbacks[e].length; ) {
                                  var n = this.callbacks[e].shift();
                                  'function' == typeof n
                                    ? n.apply(null, t)
                                    : n instanceof Array && n[1].apply(n[0], t);
                                }
                                delete this.callbacks[e];
                              } catch (e) {}
                            }
                          },
                          executeAll: function (n, e) {
                            (e || (n && !M.isObjectEmpty(n))) &&
                              Object.keys(this.callbacks).forEach(function (e) {
                                var t = void 0 !== n[e] ? n[e] : '';
                                this.execute(e, t);
                              }, this);
                          },
                          hasCallbacks: function () {
                            return Boolean(Object.keys(this.callbacks).length);
                          },
                        };
                      }
                      function r (e) {
                        for (var t = /^\d+$/, n = 0, a = e.length; n < a; n++)
                          if (!t.test(e[n])) return !1;
                        return !0;
                      }
                      function i (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function o (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var a = parseInt(e[n], 10),
                            r = parseInt(t[n], 10);
                          if (r < a) return 1;
                          if (a < r) return -1;
                        }
                        return 0;
                      }
                      function n (e, t) {
                        if (e === t) return 0;
                        var n = e.toString().split('.'),
                          a = t.toString().split('.');
                        return r(n.concat(a)) ? (i(n, a), o(n, a)) : NaN;
                      }
                      var A =
                        'undefined' != typeof window
                          ? window
                          : 'undefined' != typeof global
                          ? global
                          : 'undefined' != typeof self
                          ? self
                          : {};
                      Object.assign =
                        Object.assign ||
                        function (e) {
                          for (var t, n, a = 1; a < arguments.length; ++a)
                            for (t in (n = arguments[a]))
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return e;
                        };
                      var t,
                        a,
                        k = {
                          MESSAGES: {
                            HANDSHAKE: 'HANDSHAKE',
                            GETSTATE: 'GETSTATE',
                            PARENTSTATE: 'PARENTSTATE',
                          },
                          STATE_KEYS_MAP: {
                            MCMID: 'MCMID',
                            MCAID: 'MCAID',
                            MCAAMB: 'MCAAMB',
                            MCAAMLH: 'MCAAMLH',
                            MCOPTOUT: 'MCOPTOUT',
                            CUSTOMERIDS: 'CUSTOMERIDS',
                          },
                          ASYNC_API_MAP: {
                            MCMID: 'getMarketingCloudVisitorID',
                            MCAID: 'getAnalyticsVisitorID',
                            MCAAMB: 'getAudienceManagerBlob',
                            MCAAMLH: 'getAudienceManagerLocationHint',
                            MCOPTOUT: 'getOptOut',
                          },
                          SYNC_API_MAP: { CUSTOMERIDS: 'getCustomerIDs' },
                          ALL_APIS: {
                            MCMID: 'getMarketingCloudVisitorID',
                            MCAAMB: 'getAudienceManagerBlob',
                            MCAAMLH: 'getAudienceManagerLocationHint',
                            MCOPTOUT: 'getOptOut',
                            MCAID: 'getAnalyticsVisitorID',
                            CUSTOMERIDS: 'getCustomerIDs',
                          },
                          FIELDGROUP_TO_FIELD: { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
                          FIELDS: {
                            MCMID: 'MCMID',
                            MCOPTOUT: 'MCOPTOUT',
                            MCAID: 'MCAID',
                            MCAAMLH: 'MCAAMLH',
                            MCAAMB: 'MCAAMB',
                          },
                          AUTH_STATE: { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
                          OPT_OUT: { GLOBAL: 'global' },
                        },
                        s = k.STATE_KEYS_MAP,
                        v = function (r) {
                          function a () {}
                          function i (e, n) {
                            var a = this;
                            return function () {
                              var e = r(0, s.MCMID),
                                t = {};
                              return (t[s.MCMID] = e), a.setStateAndPublish(t), n(e), e;
                            };
                          }
                          this.getMarketingCloudVisitorID = function (e) {
                            e = e || a;
                            var t = this.findField(s.MCMID, e),
                              n = i.call(this, s.MCMID, e);
                            return void 0 !== t ? t : n();
                          };
                        },
                        l = k.MESSAGES,
                        c = k.ASYNC_API_MAP,
                        u = k.SYNC_API_MAP,
                        b = function () {
                          function r () {}
                          function i (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(l.GETSTATE), '';
                            };
                          }
                          function e (a) {
                            this[c[a]] = function (e) {
                              e = e || r;
                              var t = this.findField(a, e),
                                n = i.call(this, a, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[u[e]] = function () {
                              return this.findField(e, r) || {};
                            };
                          }
                          Object.keys(c).forEach(e, this), Object.keys(u).forEach(t, this);
                        },
                        d = k.ASYNC_API_MAP,
                        y = function () {
                          Object.keys(d).forEach(function (t) {
                            this[d[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        M =
                          (((t = (a = { exports: {} }).exports).isObjectEmpty = function (e) {
                            return e === Object(e) && 0 === Object.keys(e).length;
                          }),
                          (t.isValueEmpty = function (e) {
                            return '' === e || t.isObjectEmpty(e);
                          }),
                          (t.getIeVersion = function () {
                            if (document.documentMode) return document.documentMode;
                            for (var e = 7; 4 < e; e--) {
                              var t = document.createElement('div');
                              if (
                                ((t.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->'),
                                t.getElementsByTagName('span').length)
                              )
                                return (t = null), e;
                              t = null;
                            }
                            return null;
                          }),
                          (t.encodeAndBuildRequest = function (e, t) {
                            return e.map(encodeURIComponent).join(t);
                          }),
                          (t.isObject = function (e) {
                            return null !== e && 'object' == typeof e && !1 === Array.isArray(e);
                          }),
                          a.exports),
                        _ =
                          (M.isObjectEmpty,
                          M.isValueEmpty,
                          M.getIeVersion,
                          M.encodeAndBuildRequest,
                          M.isObject,
                          e),
                        p = k.MESSAGES,
                        f = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        O = function (i, o) {
                          (this.parse = function (e) {
                            try {
                              var n = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (n[f[t]] = 2 !== t ? e : JSON.parse(e));
                                }),
                                n
                              );
                            } catch (e) {}
                          }),
                            (this.isInvalid = function (e) {
                              var t = this.parse(e);
                              if (!t || Object.keys(t).length < 2) return !0;
                              var n = i !== t.orgID,
                                a = !o || e.origin !== o,
                                r = -1 === Object.keys(p).indexOf(t.prefix);
                              return n || a || r;
                            }),
                            (this.send = function (e, t, n) {
                              var a = t + '|' + i;
                              n && n === Object(n) && (a += '|' + JSON.stringify(n));
                              try {
                                e.postMessage(a, o);
                              } catch (i) {}
                            });
                        },
                        C = k.MESSAGES,
                        g = function (e, t, n, a) {
                          function r (e) {
                            Object.assign(f, e);
                          }
                          function i (e) {
                            Object.assign(f.state, e), f.callbackRegistry.executeAll(f.state);
                          }
                          function o (e) {
                            if (!h.isInvalid(e)) {
                              m = !1;
                              var t = h.parse(e);
                              f.setStateAndPublish(t.state);
                            }
                          }
                          function s (e) {
                            !m && g && ((m = !0), h.send(a, e));
                          }
                          function l () {
                            r(new v(n._generateID)),
                              f.getMarketingCloudVisitorID(),
                              f.callbackRegistry.executeAll(f.state, !0),
                              A.removeEventListener('message', c);
                          }
                          function c (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (m = !1),
                                A.clearTimeout(f._handshakeTimeout),
                                A.removeEventListener('message', c),
                                r(new b(f)),
                                A.addEventListener('message', o),
                                f.setStateAndPublish(t.state),
                                f.callbackRegistry.hasCallbacks() && s(C.GETSTATE);
                            }
                          }
                          function u () {
                            g && postMessage
                              ? (A.addEventListener('message', c),
                                s(C.HANDSHAKE),
                                (f._handshakeTimeout = setTimeout(l, 250)))
                              : l();
                          }
                          function d () {
                            A.s_c_in || ((A.s_c_il = []), (A.s_c_in = 0)),
                              (f._c = 'Visitor'),
                              (f._il = A.s_c_il),
                              (f._in = A.s_c_in),
                              (f._il[f._in] = f),
                              A.s_c_in++;
                          }
                          function p () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof n[e] &&
                                (f[e] = function () {});
                            }
                            Object.keys(n).forEach(e),
                              (f.getSupplementalDataID = n.getSupplementalDataID);
                          }
                          var f = this,
                            g = t.whitelistParentDomain;
                          (f.state = {}),
                            (f.version = n.version),
                            (f.marketingCloudOrgID = e),
                            (f.cookieDomain = n.cookieDomain || '');
                          var m = !(f._instanceType = 'child'),
                            h = new O(e, g);
                          (f.callbackRegistry = _()),
                            (f.init = function () {
                              d(), p(), r(new y(f)), u();
                            }),
                            (f.findField = function (e, t) {
                              if (f.state[e]) return t(f.state[e]), f.state[e];
                            }),
                            (f.messageParent = s),
                            (f.setStateAndPublish = i);
                        },
                        m = k.MESSAGES,
                        h = k.ALL_APIS,
                        I = k.ASYNC_API_MAP,
                        D = k.FIELDGROUP_TO_FIELD,
                        T = function (r, a) {
                          function i () {
                            var a = {};
                            return (
                              Object.keys(h).forEach(function (e) {
                                var t = h[e],
                                  n = r[t]();
                                M.isValueEmpty(n) || (a[e] = n);
                              }),
                              a
                            );
                          }
                          function o () {
                            var n = [];
                            return (
                              r._loading &&
                                Object.keys(r._loading).forEach(function (e) {
                                  if (r._loading[e]) {
                                    var t = D[e];
                                    n.push(t);
                                  }
                                }),
                              n.length ? n : null
                            );
                          }
                          function t (n) {
                            return function a () {
                              var e = o();
                              if (e) {
                                var t = I[e[0]];
                                r[t](a, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = i();
                            a.send(e, t, n);
                          }
                          function s (e) {
                            c(e), n(e, m.HANDSHAKE);
                          }
                          function l (e) {
                            t(function () {
                              n(e, m.PARENTSTATE);
                            })();
                          }
                          function c (t) {
                            function e (e) {
                              n.call(r, e),
                                a.send(t, m.PARENTSTATE, { CUSTOMERIDS: r.getCustomerIDs() });
                            }
                            var n = r.setCustomerIDs;
                            r.setCustomerIDs = e;
                          }
                          return function (e) {
                            a.isInvalid(e) ||
                              (a.parse(e).prefix === m.HANDSHAKE ? s : l)(e.source);
                          };
                        },
                        E = function (a, n) {
                          function r (t) {
                            return function (e) {
                              (i[t] = e), ++o === s && n(i);
                            };
                          }
                          var i = {},
                            o = 0,
                            s = Object.keys(a).length;
                          Object.keys(a).forEach(function (e) {
                            var t = a[e];
                            if (t.fn) {
                              var n = t.args || [];
                              n.unshift(r(e)), t.fn.apply(t.context || null, n);
                            }
                          });
                        },
                        P = function (e) {
                          var t;
                          if ((!e && A.location && (e = A.location.hostname), (t = e)))
                            if (/^[0-9.]+$/.test(t)) t = '';
                            else {
                              var n =
                                  ',ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,',
                                a = t.split('.'),
                                r = a.length - 1,
                                i = r - 1;
                              if (
                                (1 < r &&
                                  a[r].length <= 2 &&
                                  (2 === a[r - 1].length || n.indexOf(',' + a[r] + ',') < 0) &&
                                  i--,
                                0 < i)
                              )
                                for (t = ''; i <= r; ) (t = a[r] + (t ? '.' : '') + t), r--;
                            }
                          return t;
                        },
                        w = {
                          compare: n,
                          isLessThan: function (e, t) {
                            return n(e, t) < 0;
                          },
                          areVersionsDifferent: function (e, t) {
                            return 0 !== n(e, t);
                          },
                          isGreaterThan: function (e, t) {
                            return 0 < n(e, t);
                          },
                          isEqual: function (e, t) {
                            return 0 === n(e, t);
                          },
                        },
                        S = !!A.postMessage,
                        V = {
                          postMessage: function (e, t, n) {
                            var a = 1;
                            t &&
                              (S
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + a++ + '&' + e));
                          },
                          receiveMessage: function (t, n) {
                            var e;
                            try {
                              S &&
                                (t &&
                                  (e = function (e) {
                                    if (
                                      ('string' == typeof n && e.origin !== n) ||
                                      ('[object Function]' === Object.prototype.toString.call(n) &&
                                        !1 === n(e.origin))
                                    )
                                      return !1;
                                    t(e);
                                  }),
                                A.addEventListener
                                  ? A[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : A[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        L = function (e) {
                          var t,
                            n,
                            a = '0123456789',
                            r = '',
                            i = '',
                            o = 8,
                            s = 10,
                            l = 10;
                          if (1 == e) {
                            for (a += 'ABCDEF', t = 0; t < 16; t++)
                              (n = Math.floor(Math.random() * o)),
                                (r += a.substring(n, n + 1)),
                                (n = Math.floor(Math.random() * o)),
                                (i += a.substring(n, n + 1)),
                                (o = 16);
                            return r + '-' + i;
                          }
                          for (t = 0; t < 19; t++)
                            (n = Math.floor(Math.random() * s)),
                              (r += a.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (s = 3)
                                : (1 == t || 2 == t) && 10 != s && n < 2
                                ? (s = 10)
                                : 2 < t && (s = 10),
                              (n = Math.floor(Math.random() * l)),
                              (i += a.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (l = 3)
                                : (1 == t || 2 == t) && 10 != l && n < 2
                                ? (l = 10)
                                : 2 < t && (l = 10);
                          return r + i;
                        },
                        x = function (a) {
                          return {
                            corsMetadata:
                              ((e = 'none'),
                              (t = !0),
                              'undefined' != typeof XMLHttpRequest &&
                                XMLHttpRequest === Object(XMLHttpRequest) &&
                                ('withCredentials' in new XMLHttpRequest()
                                  ? (e = 'XMLHttpRequest')
                                  : 'undefined' != typeof XDomainRequest &&
                                    XDomainRequest === Object(XDomainRequest) &&
                                    (t = !1),
                                0 <
                                  Object.prototype.toString
                                    .call(A.HTMLElement)
                                    .indexOf('Constructor') && (t = !1)),
                              { corsType: e, corsCookiesEnabled: t }),
                            getCORSInstance: function () {
                              return 'none' === this.corsMetadata.corsType
                                ? null
                                : new A[this.corsMetadata.corsType]();
                            },
                            fireCORS: function (i, e) {
                              function t (e) {
                                var t;
                                try {
                                  if ((t = JSON.parse(e)) !== Object(t))
                                    return void o.handleCORSError(i, null, 'Response is not JSON');
                                } catch (e) {
                                  return void o.handleCORSError(
                                    i,
                                    e,
                                    'Error parsing response as JSON'
                                  );
                                }
                                try {
                                  for (var n = i.callback, a = A, r = 0; r < n.length; r++)
                                    a = a[n[r]];
                                  a(t);
                                } catch (e) {
                                  o.handleCORSError(i, e, 'Error forming callback function');
                                }
                              }
                              var o = this;
                              e && (i.loadErrorHandler = e);
                              try {
                                var n = this.getCORSInstance();
                                n.open('get', i.corsUrl + '&ts=' + new Date().getTime(), !0),
                                  'XMLHttpRequest' === this.corsMetadata.corsType &&
                                    ((n.withCredentials = !0),
                                    (n.timeout = a.loadTimeout),
                                    n.setRequestHeader(
                                      'Content-Type',
                                      'application/x-www-form-urlencoded'
                                    ),
                                    (n.onreadystatechange = function () {
                                      4 === this.readyState &&
                                        200 === this.status &&
                                        t(this.responseText);
                                    })),
                                  (n.onerror = function (e) {
                                    o.handleCORSError(i, e, 'onerror');
                                  }),
                                  (n.ontimeout = function (e) {
                                    o.handleCORSError(i, e, 'ontimeout');
                                  }),
                                  n.send(),
                                  a._log.requests.push(i.corsUrl);
                              } catch (a) {
                                this.handleCORSError(i, a, 'try-catch');
                              }
                            },
                            handleCORSError: function (e, t, n) {
                              a.CORSErrors.push({ corsData: e, error: t, description: n }),
                                e.loadErrorHandler &&
                                  ('ontimeout' === n
                                    ? e.loadErrorHandler(!0)
                                    : e.loadErrorHandler(!1));
                            },
                          };
                          var e, t;
                        },
                        j = {
                          POST_MESSAGE_ENABLED: !!A.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                        },
                        R = function (g, t) {
                          var r = A.document;
                          return {
                            THROTTLE_START: 30000,
                            MAX_SYNCS_LENGTH: 649,
                            throttleTimerSet: !1,
                            id: null,
                            onPagePixels: [],
                            iframeHost: null,
                            getIframeHost: function (e) {
                              if ('string' == typeof e) {
                                var t = e.split('/');
                                return t[0] + '//' + t[2];
                              }
                            },
                            subdomain: null,
                            url: null,
                            getUrl: function () {
                              var e,
                                t = 'http://fast.',
                                n =
                                  '?d_nsid=' +
                                  g.idSyncContainerID +
                                  '#' +
                                  encodeURIComponent(r.location.origin);
                              return (
                                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                                g.loadSSL &&
                                  (t = g.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                                (e = t + this.subdomain + '.demdex.net/dest5.html' + n),
                                (this.iframeHost = this.getIframeHost(e)),
                                (this.id =
                                  'destination_publishing_iframe_' +
                                  this.subdomain +
                                  '_' +
                                  g.idSyncContainerID),
                                e
                              );
                            },
                            checkDPIframeSrc: function () {
                              var e =
                                '?d_nsid=' +
                                g.idSyncContainerID +
                                '#' +
                                encodeURIComponent(r.location.href);
                              'string' == typeof g.dpIframeSrc &&
                                g.dpIframeSrc.length &&
                                ((this.id =
                                  'destination_publishing_iframe_' +
                                  (g._subdomain || this.subdomain || new Date().getTime()) +
                                  '_' +
                                  g.idSyncContainerID),
                                (this.iframeHost = this.getIframeHost(g.dpIframeSrc)),
                                (this.url = g.dpIframeSrc + e));
                            },
                            idCallNotProcesssed: null,
                            doAttachIframe: !1,
                            startedAttachingIframe: !1,
                            iframeHasLoaded: null,
                            iframeIdChanged: null,
                            newIframeCreated: null,
                            originalIframeHasLoadedAlready: null,
                            iframeLoadedCallbacks: [],
                            regionChanged: !1,
                            timesRegionChanged: 0,
                            sendingMessages: !1,
                            messages: [],
                            messagesPosted: [],
                            messagesReceived: [],
                            messageSendingInterval: j.POST_MESSAGE_ENABLED ? null : 100,
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            canSetThirdPartyCookies: !0,
                            receivedThirdPartyCookiesNotification: !1,
                            readyToAttachIframePreliminary: function () {
                              return !(
                                g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                g.idSyncDisable3rdPartySyncing ||
                                g.disableThirdPartyCookies ||
                                g.disableThirdPartyCalls
                              );
                            },
                            readyToAttachIframe: function () {
                              return (
                                this.readyToAttachIframePreliminary() &&
                                (this.doAttachIframe || g._doAttachIframe) &&
                                ((this.subdomain && 'nosubdomainreturned' !== this.subdomain) ||
                                  g._subdomain) &&
                                this.url &&
                                !this.startedAttachingIframe
                              );
                            },
                            attachIframe: function () {
                              function e () {
                                ((a = r.createElement('iframe')).sandbox =
                                  'allow-scripts allow-same-origin'),
                                  (a.title = 'Adobe ID Syncing iFrame'),
                                  (a.id = n.id),
                                  (a.name = n.id + '_name'),
                                  (a.style.cssText = 'display: none; width: 0; height: 0;'),
                                  (a.src = n.url),
                                  (n.newIframeCreated = !0),
                                  t(),
                                  r.body.appendChild(a);
                              }
                              function t (e) {
                                a.addEventListener('load', function () {
                                  (a.className = 'aamIframeLoaded'),
                                    (n.iframeHasLoaded = !0),
                                    n.fireIframeLoadedCallbacks(e),
                                    n.requestToProcess();
                                });
                              }
                              this.startedAttachingIframe = !0;
                              var n = this,
                                a = r.getElementById(this.id);
                              a
                                ? 'IFRAME' !== a.nodeName
                                  ? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
                                  : ((this.newIframeCreated = !1),
                                    'aamIframeLoaded' !== a.className
                                      ? ((this.originalIframeHasLoadedAlready = !1),
                                        t(
                                          "The destination publishing iframe already exists from a different library, but hadn't loaded yet."
                                        ))
                                      : ((this.originalIframeHasLoadedAlready = !0),
                                        (this.iframeHasLoaded = !0),
                                        (this.iframe = a),
                                        this.fireIframeLoadedCallbacks(
                                          'The destination publishing iframe already exists from a different library, and had loaded alresady.'
                                        ),
                                        this.requestToProcess()))
                                : e(),
                                (this.iframe = a);
                            },
                            fireIframeLoadedCallbacks: function (t) {
                              this.iframeLoadedCallbacks.forEach(function (e) {
                                'function' == typeof e &&
                                  e({
                                    message:
                                      t ||
                                      'The destination publishing iframe was attached and loaded successfully.',
                                  });
                              }),
                                (this.iframeLoadedCallbacks = []);
                            },
                            requestToProcess: function (e) {
                              function t () {
                                a.jsonForComparison.push(e),
                                  a.jsonWaiting.push(e),
                                  a.processSyncOnPage(e);
                              }
                              var n,
                                a = this;
                              if (e === Object(e) && e.ibs)
                                if (
                                  ((n = JSON.stringify(e.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var r,
                                    i,
                                    o,
                                    s = !1;
                                  for (r = 0, i = this.jsonForComparison.length; r < i; r++)
                                    if (
                                      ((o = this.jsonForComparison[r]),
                                      n === JSON.stringify(o.ibs || []))
                                    ) {
                                      s = !0;
                                      break;
                                    }
                                  s ? this.jsonDuplicates.push(e) : t();
                                } else t();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !j.POST_MESSAGE_ENABLED ||
                                  this.iframeHasLoaded) &&
                                this.jsonWaiting.length
                              ) {
                                var l = this.jsonWaiting.shift();
                                this.process(l), this.requestToProcess();
                              }
                              g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                !this.iframeHasLoaded ||
                                !this.messages.length ||
                                this.sendingMessages ||
                                (this.throttleTimerSet ||
                                  ((this.throttleTimerSet = !0),
                                  setTimeout(function () {
                                    a.messageSendingInterval = j.POST_MESSAGE_ENABLED ? null : 150;
                                  }, this.THROTTLE_START)),
                                (this.sendingMessages = !0),
                                this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (e, t) {
                              var n = g._getField('MCAAMLH'),
                                a = e.d_region || e.dcs_region;
                              return (
                                n
                                  ? a &&
                                    (g._setFieldExpire('MCAAMLH', t),
                                    g._setField('MCAAMLH', a),
                                    parseInt(n, 10) !== a &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      g._setField('MCSYNCSOP', ''),
                                      g._setField('MCSYNCS', ''),
                                      (n = a)))
                                  : (n = a) &&
                                    (g._setFieldExpire('MCAAMLH', t), g._setField('MCAAMLH', n)),
                                n || (n = ''),
                                n
                              );
                            },
                            processSyncOnPage: function (e) {
                              var t, n, a, r;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (a = 0; a < n; a++)
                                  (r = t[a]).syncOnPage &&
                                    this.checkFirstPartyCookie(r, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                n,
                                a,
                                r,
                                i,
                                o = encodeURIComponent,
                                s = !1;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (s = !0, a = 0; a < n; a++)
                                  (r = t[a]),
                                    (i = [
                                      o('ibs'),
                                      o(r.id || ''),
                                      o(r.tag || ''),
                                      M.encodeAndBuildRequest(r.url || [], ','),
                                      o(r.ttl || ''),
                                      '',
                                      '',
                                      r.fireURLSync ? 'true' : 'false',
                                    ]),
                                    r.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(i.join('|'))
                                        : r.fireURLSync &&
                                          this.checkFirstPartyCookie(r, i.join('|')));
                              s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, n) {
                              var a = 'syncOnPage' === n,
                                r = a ? 'MCSYNCSOP' : 'MCSYNCS';
                              g._readVisitor();
                              var i,
                                o,
                                s = g._getField(r),
                                l = !1,
                                c = !1,
                                u = Math.ceil(new Date().getTime() / j.MILLIS_PER_DAY);
                              s
                                ? ((i = s.split('*')),
                                  (l = (o = this.pruneSyncData(i, e.id, u)).dataPresent),
                                  (c = o.dataValid),
                                  (l && c) || this.fireSync(a, e, t, i, r, u))
                                : ((i = []), this.fireSync(a, e, t, i, r, u));
                            },
                            pruneSyncData: function (e, t, n) {
                              var a,
                                r,
                                i,
                                o = !1,
                                s = !1;
                              for (r = 0; r < e.length; r++)
                                (a = e[r]),
                                  (i = parseInt(a.split('-')[1], 10)),
                                  a.match('^' + t + '-')
                                    ? ((o = !0), n < i ? (s = !0) : (e.splice(r, 1), r--))
                                    : i <= n && (e.splice(r, 1), r--);
                              return { dataPresent: o, dataValid: s };
                            },
                            manageSyncsSize: function (e) {
                              if (e.join('*').length > this.MAX_SYNCS_LENGTH)
                                for (
                                  e.sort(function (e, t) {
                                    return (
                                      parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10)
                                    );
                                  });
                                  e.join('*').length > this.MAX_SYNCS_LENGTH;

                                )
                                  e.shift();
                            },
                            fireSync: function (e, t, n, a, u, r) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var i,
                                    o,
                                    s,
                                    l,
                                    c = t.url,
                                    p = g.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, o = c.length; i < o; i++) {
                                    (s = c[i]), (l = /^\/\//.test(s));
                                    var f = new Image();
                                    f.addEventListener(
                                      'load',
                                      (function (o, s, l, c) {
                                        return function () {
                                          (d.onPagePixels[o] = null), g._readVisitor();
                                          var e,
                                            t,
                                            n,
                                            a,
                                            r = g._getField(u),
                                            i = [];
                                          if (r)
                                            for (t = 0, n = (e = r.split('*')).length; t < n; t++)
                                              (a = e[t]).match('^' + s.id + '-') || i.push(a);
                                          d.setSyncTrackingData(i, s, l, c);
                                        };
                                      })(this.onPagePixels.length, t, u, r)
                                    ),
                                      (f.src = (l ? p : '') + s),
                                      this.onPagePixels.push(f);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(a, t, u, r);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                g._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((j.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, n, a) {
                              e.push(t.id + '-' + (a + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                g._setField(n, e.join('*'));
                            },
                            sendMessages: function () {
                              var e,
                                t = this,
                                n = '',
                                a = encodeURIComponent;
                              this.regionChanged &&
                                ((n = a('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                                this.messages.length
                                  ? j.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        n +
                                        a('---destpub-combined---') +
                                        this.messages.join('%01')),
                                      this.postMessage(e),
                                      (this.messages = []),
                                      (this.sendingMessages = !1))
                                    : ((e = this.messages.shift()),
                                      this.postMessage(n + e),
                                      setTimeout(function () {
                                        t.sendMessages();
                                      }, this.messageSendingInterval))
                                  : (this.sendingMessages = !1);
                            },
                            postMessage: function (e) {
                              V.postMessage(e, this.url, this.iframe.contentWindow),
                                this.messagesPosted.push(e);
                            },
                            receiveMessage: function (e) {
                              var t,
                                n = /^---destpub-to-parent---/;
                              'string' == typeof e &&
                                n.test(e) &&
                                ('canSetThirdPartyCookies' ===
                                  (t = e.replace(n, '').split('|'))[0] &&
                                  ((this.canSetThirdPartyCookies = 'true' === t[1]),
                                  (this.receivedThirdPartyCookiesNotification = !0),
                                  this.requestToProcess()),
                                this.messagesReceived.push(e));
                            },
                            processIDCallData: function (e) {
                              (null == this.url ||
                                (e.subdomain && 'nosubdomainreturned' === this.subdomain)) &&
                                ('string' == typeof g._subdomain && g._subdomain.length
                                  ? (this.subdomain = g._subdomain)
                                  : (this.subdomain = e.subdomain || ''),
                                (this.url = this.getUrl())),
                                e.ibs instanceof Array &&
                                  e.ibs.length &&
                                  (this.doAttachIframe = !0),
                                this.readyToAttachIframe() &&
                                  (g.idSyncAttachIframeOnWindowLoad
                                    ? (t.windowLoaded ||
                                        'complete' === r.readyState ||
                                        'loaded' === r.readyState) &&
                                      this.attachIframe()
                                    : this.attachIframeASAP()),
                                'function' == typeof g.idSyncIDCallResult
                                  ? g.idSyncIDCallResult(e)
                                  : this.requestToProcess(e),
                                'function' == typeof g.idSyncAfterIDCallResult &&
                                  g.idSyncAfterIDCallResult(e);
                            },
                            canMakeSyncIDCall: function (e, t) {
                              return (
                                g._forceSyncIDCall || !e || t - e > j.DAYS_BETWEEN_SYNC_ID_CALLS
                              );
                            },
                            attachIframeASAP: function () {
                              function e () {
                                t.startedAttachingIframe ||
                                  (r.body ? t.attachIframe() : setTimeout(e, 30));
                              }
                              var t = this;
                              e();
                            },
                          };
                        },
                        N = {
                          audienceManagerServer: {},
                          audienceManagerServerSecure: {},
                          cookieDomain: {},
                          cookieLifetime: {},
                          cookieName: {},
                          disableThirdPartyCalls: {},
                          idSyncAfterIDCallResult: {},
                          idSyncAttachIframeOnWindowLoad: {},
                          idSyncContainerID: {},
                          idSyncDisable3rdPartySyncing: {},
                          disableThirdPartyCookies: {},
                          idSyncDisableSyncs: {},
                          disableIdSyncs: {},
                          idSyncIDCallResult: {},
                          idSyncSSLUseAkamai: {},
                          isCoopSafe: {},
                          loadSSL: {},
                          loadTimeout: {},
                          marketingCloudServer: {},
                          marketingCloudServerSecure: {},
                          overwriteCrossDomainMCIDAndAID: {},
                          resetBeforeVersion: {},
                          sdidParamExpiry: {},
                          serverState: {},
                          sessionCookieName: {},
                          secureCookie: {},
                          takeTimeoutMetrics: {},
                          trackingServer: {},
                          trackingServerSecure: {},
                          whitelistIframeDomains: {},
                          whitelistParentDomain: {},
                        },
                        F = {
                          getConfigNames: function () {
                            return Object.keys(N);
                          },
                          getConfigs: function () {
                            return N;
                          },
                        },
                        U = function (a, r, e) {
                          function t (e) {
                            var a = e;
                            return function (e) {
                              var t = e || l.location.href;
                              try {
                                var n = f._extractParamFromUri(t, a);
                                if (n) return I.parsePipeDelimetedKeyValues(n);
                              } catch (e) {}
                            };
                          }
                          function n (e) {
                            function t (e, t) {
                              e && e.match(j.VALID_VISITOR_ID_REGEX) && t(e);
                            }
                            t(e[m], f.setMarketingCloudVisitorID),
                              f._setFieldExpire(b, -1),
                              t(e[h], f.setAnalyticsVisitorID);
                          }
                          function i (e) {
                            (e = e || {}),
                              (f._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                              (f._supplementalDataIDCurrentConsumed =
                                e.supplementalDataIDCurrentConsumed || {}),
                              (f._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                              (f._supplementalDataIDLastConsumed =
                                e.supplementalDataIDLastConsumed || {});
                          }
                          function o (e) {
                            function r (e, t, n) {
                              return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                            }
                            function t (e, t) {
                              var n = t[0],
                                a = t[1];
                              return null != a && a !== y && (e = r(n, a, e)), e;
                            }
                            var n,
                              a = e.reduce(t, '');
                            return (
                              (n = (n = a) ? (n += '|') : n) + 'TS=' + I.getTimestampInSeconds()
                            );
                          }
                          function s (e) {
                            var t = e.minutesToLive,
                              n = '';
                            return (
                              (f.idSyncDisableSyncs || f.disableIdSyncs) &&
                                (n = n || 'Error: id syncs have been disabled'),
                              ('string' == typeof e.dpid && e.dpid.length) ||
                                (n = n || 'Error: config.dpid is empty'),
                              ('string' == typeof e.url && e.url.length) ||
                                (n = n || 'Error: config.url is empty'),
                              void 0 === t
                                ? (t = 20160)
                                : ((t = parseInt(t, 10)),
                                  (isNaN(t) || t <= 0) &&
                                    (n =
                                      n ||
                                      'Error: config.minutesToLive needs to be a positive number')),
                              { error: n, ttl: t }
                            );
                          }
                          if (!e || e.split('').reverse().join('') !== a)
                            throw new Error(
                              'Please use `Visitor.getInstance` to instantiate Visitor.'
                            );
                          var f = this;
                          f.version = '3.3.0';
                          var l = A,
                            c = l.Visitor;
                          (c.version = f.version),
                            (c.AuthState = k.AUTH_STATE),
                            (c.OptOut = k.OPT_OUT),
                            l.s_c_in || ((l.s_c_il = []), (l.s_c_in = 0)),
                            (f._c = 'Visitor'),
                            (f._il = l.s_c_il),
                            (f._in = l.s_c_in),
                            (f._il[f._in] = f),
                            l.s_c_in++,
                            (f._instanceType = 'regular'),
                            (f._log = { requests: [] }),
                            (f.marketingCloudOrgID = a),
                            (f.cookieName = 'AMCV_' + a),
                            (f.sessionCookieName = 'AMCVS_' + a),
                            (f.cookieDomain = P()),
                            f.cookieDomain === l.location.hostname && (f.cookieDomain = ''),
                            (f.loadSSL = 0 <= l.location.protocol.toLowerCase().indexOf('https')),
                            (f.loadTimeout = 30000),
                            (f.CORSErrors = []),
                            (f.marketingCloudServer = f.audienceManagerServer = 'dpm.demdex.net'),
                            (f.sdidParamExpiry = 30);
                          var u = l.document,
                            g = null,
                            m = 'MCMID',
                            d = 'MCIDTS',
                            p = 'A',
                            h = 'MCAID',
                            v = 'AAM',
                            b = 'MCAAMB',
                            y = 'NONE',
                            _ = function (e) {
                              return !Object.prototype[e];
                            },
                            C = x(f);
                          (f.FIELDS = k.FIELDS),
                            (f.cookieRead = function (e) {
                              e = encodeURIComponent(e);
                              var t = (';' + u.cookie).split(' ').join(';'),
                                n = t.indexOf(';' + e + '='),
                                a = n < 0 ? n : t.indexOf(';', n + 1);
                              return n < 0
                                ? ''
                                : decodeURIComponent(
                                    t.substring(n + 2 + e.length, a < 0 ? t.length : a)
                                  );
                            }),
                            (f.cookieWrite = function (e, t, n) {
                              var a,
                                r = f.cookieLifetime,
                                i = '';
                              if (
                                ((t = '' + t),
                                (r = r ? ('' + r).toUpperCase() : ''),
                                n && 'SESSION' !== r && 'NONE' !== r)
                              ) {
                                if ((a = '' !== t ? parseInt(r || 0, 10) : -60))
                                  (n = new Date()).setTime(n.getTime() + 1000 * a);
                                else if (1 === n) {
                                  var o = (n = new Date()).getYear();
                                  n.setYear(o + 2 + (o < 1900 ? 1900 : 0));
                                }
                              } else n = 0;
                              return e && 'NONE' !== r
                                ? (f.configs &&
                                    f.configs.secureCookie &&
                                    'https:' === location.protocol &&
                                    (i = 'Secure'),
                                  (u.cookie =
                                    encodeURIComponent(e) +
                                    '=' +
                                    encodeURIComponent(t) +
                                    '; path=/;' +
                                    (n ? ' expires=' + n.toGMTString() + ';' : '') +
                                    (f.cookieDomain ? ' domain=' + f.cookieDomain + ';' : '') +
                                    i),
                                  f.cookieRead(e) === t)
                                : 0;
                            }),
                            (f.resetState = function (e) {
                              e ? f._mergeServerState(e) : i();
                            }),
                            (f._isAllowedDone = !1),
                            (f._isAllowedFlag = !1),
                            (f.isAllowed = function () {
                              return (
                                f._isAllowedDone ||
                                  ((f._isAllowedDone = !0),
                                  (f.cookieRead(f.cookieName) ||
                                    f.cookieWrite(f.cookieName, 'T', 1)) &&
                                    (f._isAllowedFlag = !0)),
                                f._isAllowedFlag
                              );
                            }),
                            (f.setMarketingCloudVisitorID = function (e) {
                              f._setMarketingCloudFields(e);
                            }),
                            (f._use1stPartyMarketingCloudServer = !1),
                            (f.getMarketingCloudVisitorID = function (e, t) {
                              if (f.isAllowed()) {
                                f.marketingCloudServer &&
                                  f.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                                  (f._use1stPartyMarketingCloudServer = !0);
                                var n = f._getAudienceManagerURLData('_setMarketingCloudFields'),
                                  a = n.url;
                                return f._getRemoteField(m, a, e, t, n);
                              }
                              return '';
                            }),
                            (f.getVisitorValues = function (e, t) {
                              var n = {
                                  MCMID: {
                                    fn: f.getMarketingCloudVisitorID,
                                    args: [!0],
                                    context: f,
                                  },
                                  MCOPTOUT: { fn: f.isOptedOut, args: [void 0, !0], context: f },
                                  MCAID: { fn: f.getAnalyticsVisitorID, args: [!0], context: f },
                                  MCAAMLH: {
                                    fn: f.getAudienceManagerLocationHint,
                                    args: [!0],
                                    context: f,
                                  },
                                  MCAAMB: { fn: f.getAudienceManagerBlob, args: [!0], context: f },
                                },
                                a = t && t.length ? I.pluck(n, t) : n;
                              E(a, e);
                            }),
                            (f._currentCustomerIDs = {}),
                            (f._customerIDsHashChanged = !1),
                            (f._newCustomerIDsHash = ''),
                            (f.setCustomerIDs = function (e) {
                              function t () {
                                f._customerIDsHashChanged = !1;
                              }
                              if (f.isAllowed() && e) {
                                if (!M.isObject(e) || M.isObjectEmpty(e)) return !1;
                                var n, a;
                                for (n in (f._readVisitor(), e))
                                  if (_(n) && (a = e[n]))
                                    if ('object' == typeof a) {
                                      var r = {};
                                      a.id && (r.id = a.id),
                                        null != a.authState && (r.authState = a.authState),
                                        (f._currentCustomerIDs[n] = r);
                                    } else f._currentCustomerIDs[n] = { id: a };
                                var i = f.getCustomerIDs(),
                                  o = f._getField('MCCIDH'),
                                  s = '';
                                for (n in (o || (o = 0), i))
                                  _(n) &&
                                    (s +=
                                      (s ? '|' : '') +
                                      n +
                                      '|' +
                                      ((a = i[n]).id ? a.id : '') +
                                      (a.authState ? a.authState : ''));
                                (f._newCustomerIDsHash = String(f._hash(s))),
                                  f._newCustomerIDsHash !== o &&
                                    ((f._customerIDsHashChanged = !0), f._mapCustomerIDs(t));
                              }
                            }),
                            (f.getCustomerIDs = function () {
                              f._readVisitor();
                              var e,
                                t,
                                n = {};
                              for (e in f._currentCustomerIDs)
                                _(e) &&
                                  ((t = f._currentCustomerIDs[e]),
                                  n[e] || (n[e] = {}),
                                  t.id && (n[e].id = t.id),
                                  null != t.authState
                                    ? (n[e].authState = t.authState)
                                    : (n[e].authState = c.AuthState.UNKNOWN));
                              return n;
                            }),
                            (f.setAnalyticsVisitorID = function (e) {
                              f._setAnalyticsFields(e);
                            }),
                            (f.getAnalyticsVisitorID = function (e, t, n) {
                              if (!I.isTrackingServerPopulated() && !n)
                                return f._callCallback(e, ['']), '';
                              if (f.isAllowed()) {
                                var a = '';
                                if (
                                  (n ||
                                    (a = f.getMarketingCloudVisitorID(function () {
                                      f.getAnalyticsVisitorID(e, !0);
                                    })),
                                  a || n)
                                ) {
                                  var r = n ? f.marketingCloudServer : f.trackingServer,
                                    i = '';
                                  f.loadSSL &&
                                    (n
                                      ? f.marketingCloudServerSecure &&
                                        (r = f.marketingCloudServerSecure)
                                      : f.trackingServerSecure && (r = f.trackingServerSecure));
                                  var o = {};
                                  if (r) {
                                    var s = 'http' + (f.loadSSL ? 's' : '') + '://' + r + '/id',
                                      l =
                                        'd_visid_ver=' +
                                        f.version +
                                        '&mcorgid=' +
                                        encodeURIComponent(f.marketingCloudOrgID) +
                                        (a ? '&mid=' + encodeURIComponent(a) : '') +
                                        (f.idSyncDisable3rdPartySyncing ||
                                        f.disableThirdPartyCookies
                                          ? '&d_coppa=true'
                                          : ''),
                                      c = [
                                        's_c_il',
                                        f._in,
                                        '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                      ];
                                    (i =
                                      s +
                                      '?' +
                                      l +
                                      '&callback=s_c_il%5B' +
                                      f._in +
                                      '%5D._set' +
                                      (n ? 'MarketingCloud' : 'Analytics') +
                                      'Fields'),
                                      (o.corsUrl = s + '?' + l),
                                      (o.callback = c);
                                  }
                                  return (o.url = i), f._getRemoteField(n ? m : h, i, e, t, o);
                                }
                              }
                              return '';
                            }),
                            (f.getAudienceManagerLocationHint = function (e, t) {
                              if (
                                f.isAllowed() &&
                                f.getMarketingCloudVisitorID(function () {
                                  f.getAudienceManagerLocationHint(e, !0);
                                })
                              ) {
                                var n = f._getField(h);
                                if (
                                  (!n &&
                                    I.isTrackingServerPopulated() &&
                                    (n = f.getAnalyticsVisitorID(function () {
                                      f.getAudienceManagerLocationHint(e, !0);
                                    })),
                                  n || !I.isTrackingServerPopulated())
                                ) {
                                  var a = f._getAudienceManagerURLData(),
                                    r = a.url;
                                  return f._getRemoteField('MCAAMLH', r, e, t, a);
                                }
                              }
                              return '';
                            }),
                            (f.getLocationHint = f.getAudienceManagerLocationHint),
                            (f.getAudienceManagerBlob = function (e, t) {
                              if (
                                f.isAllowed() &&
                                f.getMarketingCloudVisitorID(function () {
                                  f.getAudienceManagerBlob(e, !0);
                                })
                              ) {
                                var n = f._getField(h);
                                if (
                                  (!n &&
                                    I.isTrackingServerPopulated() &&
                                    (n = f.getAnalyticsVisitorID(function () {
                                      f.getAudienceManagerBlob(e, !0);
                                    })),
                                  n || !I.isTrackingServerPopulated())
                                ) {
                                  var a = f._getAudienceManagerURLData(),
                                    r = a.url;
                                  return (
                                    f._customerIDsHashChanged && f._setFieldExpire(b, -1),
                                    f._getRemoteField(b, r, e, t, a)
                                  );
                                }
                              }
                              return '';
                            }),
                            (f._supplementalDataIDCurrent = ''),
                            (f._supplementalDataIDCurrentConsumed = {}),
                            (f._supplementalDataIDLast = ''),
                            (f._supplementalDataIDLastConsumed = {}),
                            (f.getSupplementalDataID = function (e, t) {
                              f._supplementalDataIDCurrent ||
                                t ||
                                (f._supplementalDataIDCurrent = f._generateID(1));
                              var n = f._supplementalDataIDCurrent;
                              return (
                                f._supplementalDataIDLast && !f._supplementalDataIDLastConsumed[e]
                                  ? ((n = f._supplementalDataIDLast),
                                    (f._supplementalDataIDLastConsumed[e] = !0))
                                  : n &&
                                    (f._supplementalDataIDCurrentConsumed[e] &&
                                      ((f._supplementalDataIDLast = f._supplementalDataIDCurrent),
                                      (f._supplementalDataIDLastConsumed =
                                        f._supplementalDataIDCurrentConsumed),
                                      (f._supplementalDataIDCurrent = n = t
                                        ? ''
                                        : f._generateID(1)),
                                      (f._supplementalDataIDCurrentConsumed = {})),
                                    n && (f._supplementalDataIDCurrentConsumed[e] = !0)),
                                n
                              );
                            }),
                            (f.getOptOut = function (e, t) {
                              if (f.isAllowed()) {
                                var n = f._getAudienceManagerURLData('_setMarketingCloudFields'),
                                  a = n.url;
                                return f._getRemoteField('MCOPTOUT', a, e, t, n);
                              }
                              return '';
                            }),
                            (f.isOptedOut = function (n, a, e) {
                              if (f.isAllowed()) {
                                a || (a = c.OptOut.GLOBAL);
                                var t = f.getOptOut(function (e) {
                                  var t = e === c.OptOut.GLOBAL || 0 <= e.indexOf(a);
                                  f._callCallback(n, [t]);
                                }, e);
                                return t ? t === c.OptOut.GLOBAL || 0 <= t.indexOf(a) : null;
                              }
                              return !1;
                            }),
                            (f._fields = null),
                            (f._fieldsExpired = null),
                            (f._hash = function (e) {
                              var t,
                                n = 0;
                              if (e)
                                for (t = 0; t < e.length; t++)
                                  (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                              return n;
                            }),
                            (f._generateID = L),
                            (f._generateLocalMID = function () {
                              var e = f._generateID(0);
                              return (S.isClientSideMarketingCloudVisitorID = !0), e;
                            }),
                            (f._callbackList = null),
                            (f._callCallback = function (e, t) {
                              try {
                                'function' == typeof e ? e.apply(l, t) : e[1].apply(e[0], t);
                              } catch (e) {}
                            }),
                            (f._registerCallback = function (e, t) {
                              t &&
                                (null == f._callbackList && (f._callbackList = {}),
                                null == f._callbackList[e] && (f._callbackList[e] = []),
                                f._callbackList[e].push(t));
                            }),
                            (f._callAllCallbacks = function (e, t) {
                              if (null != f._callbackList) {
                                var n = f._callbackList[e];
                                if (n) for (; 0 < n.length; ) f._callCallback(n.shift(), t);
                              }
                            }),
                            (f._addQuerystringParam = function (e, t, n, a) {
                              var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                                i = I.parseHash(e),
                                o = I.hashlessUrl(e);
                              if (-1 === o.indexOf('?')) return o + '?' + r + i;
                              var s = o.split('?'),
                                l = s[0] + '?',
                                c = s[1];
                              return l + I.addQueryParamAtLocation(c, r, a) + i;
                            }),
                            (f._extractParamFromUri = function (e, t) {
                              var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                              if (n && n.length) return decodeURIComponent(n[1]);
                            }),
                            (f._parseAdobeMcFromUrl = t(j.ADOBE_MC)),
                            (f._parseAdobeMcSdidFromUrl = t(j.ADOBE_MC_SDID)),
                            (f._attemptToPopulateSdidFromUrl = function (e) {
                              var t = f._parseAdobeMcSdidFromUrl(e),
                                n = 1000000000;
                              t && t.TS && (n = I.getTimestampInSeconds() - t.TS),
                                t &&
                                  t.SDID &&
                                  t.MCORGID === a &&
                                  n < f.sdidParamExpiry &&
                                  ((f._supplementalDataIDCurrent = t.SDID),
                                  (f._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                            }),
                            (f._attemptToPopulateIdsFromUrl = function () {
                              var e = f._parseAdobeMcFromUrl();
                              if (e && e.TS) {
                                var t = I.getTimestampInSeconds() - e.TS;
                                if (Math.floor(t / 60) > j.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== a)
                                  return;
                                n(e);
                              }
                            }),
                            (f._mergeServerState = function (e) {
                              if (e)
                                try {
                                  if (
                                    ((a = e),
                                    (e = I.isObject(a) ? a : JSON.parse(a))[f.marketingCloudOrgID])
                                  ) {
                                    var t = e[f.marketingCloudOrgID];
                                    (n = t.customerIDs),
                                      I.isObject(n) && f.setCustomerIDs(n),
                                      i(t.sdid);
                                  }
                                } catch (e) {
                                  throw new Error('`serverState` has an invalid format.');
                                }
                              var n, a;
                            }),
                            (f._timeout = null),
                            (f._loadData = function (e, t, n, a) {
                              (t = f._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                                (a.url = f._addQuerystringParam(a.url, 'd_fieldgroup', e, 1)),
                                (a.corsUrl = f._addQuerystringParam(
                                  a.corsUrl,
                                  'd_fieldgroup',
                                  e,
                                  1
                                )),
                                (S.fieldGroupObj[e] = !0),
                                a === Object(a) &&
                                  a.corsUrl &&
                                  'XMLHttpRequest' === C.corsMetadata.corsType &&
                                  C.fireCORS(a, n, e);
                            }),
                            (f._clearTimeout = function (e) {
                              null != f._timeout &&
                                f._timeout[e] &&
                                (clearTimeout(f._timeout[e]), (f._timeout[e] = 0));
                            }),
                            (f._settingsDigest = 0),
                            (f._getSettingsDigest = function () {
                              if (!f._settingsDigest) {
                                var e = f.version;
                                f.audienceManagerServer && (e += '|' + f.audienceManagerServer),
                                  f.audienceManagerServerSecure &&
                                    (e += '|' + f.audienceManagerServerSecure),
                                  (f._settingsDigest = f._hash(e));
                              }
                              return f._settingsDigest;
                            }),
                            (f._readVisitorDone = !1),
                            (f._readVisitor = function () {
                              if (!f._readVisitorDone) {
                                f._readVisitorDone = !0;
                                var e,
                                  t,
                                  n,
                                  a,
                                  r,
                                  i,
                                  o = f._getSettingsDigest(),
                                  s = !1,
                                  l = f.cookieRead(f.cookieName),
                                  c = new Date();
                                if ((null == f._fields && (f._fields = {}), l && 'T' !== l))
                                  for (
                                    (l = l.split('|'))[0].match(/^[\-0-9]+$/) &&
                                      (parseInt(l[0], 10) !== o && (s = !0), l.shift()),
                                      l.length % 2 == 1 && l.pop(),
                                      e = 0;
                                    e < l.length;
                                    e += 2
                                  )
                                    (n = (t = l[e].split('-'))[0]),
                                      (a = l[e + 1]),
                                      1 < t.length
                                        ? ((r = parseInt(t[1], 10)), (i = 0 < t[1].indexOf('s')))
                                        : ((r = 0), (i = !1)),
                                      s &&
                                        ('MCCIDH' === n && (a = ''),
                                        0 < r && (r = c.getTime() / 1000 - 60)),
                                      n &&
                                        a &&
                                        (f._setField(n, a, 1),
                                        0 < r &&
                                          ((f._fields['expire' + n] = r + (i ? 's' : '')),
                                          (c.getTime() >= 1000 * r ||
                                            (i && !f.cookieRead(f.sessionCookieName))) &&
                                            (f._fieldsExpired || (f._fieldsExpired = {}),
                                            (f._fieldsExpired[n] = !0))));
                                !f._getField(h) &&
                                  I.isTrackingServerPopulated() &&
                                  (l = f.cookieRead('s_vi')) &&
                                  1 < (l = l.split('|')).length &&
                                  0 <= l[0].indexOf('v1') &&
                                  (0 <= (e = (a = l[1]).indexOf('[')) && (a = a.substring(0, e)),
                                  a && a.match(j.VALID_VISITOR_ID_REGEX) && f._setField(h, a));
                              }
                            }),
                            (f._appendVersionTo = function (e) {
                              var t = 'vVersion|' + f.version,
                                n = e ? f._getCookieVersion(e) : null;
                              return (
                                n
                                  ? w.areVersionsDifferent(n, f.version) &&
                                    (e = e.replace(j.VERSION_REGEX, t))
                                  : (e += (e ? '|' : '') + t),
                                e
                              );
                            }),
                            (f._writeVisitor = function () {
                              var e,
                                t,
                                n = f._getSettingsDigest();
                              for (e in f._fields)
                                _(e) &&
                                  f._fields[e] &&
                                  'expire' !== e.substring(0, 6) &&
                                  ((t = f._fields[e]),
                                  (n +=
                                    (n ? '|' : '') +
                                    e +
                                    (f._fields['expire' + e]
                                      ? '-' + f._fields['expire' + e]
                                      : '') +
                                    '|' +
                                    t));
                              (n = f._appendVersionTo(n)), f.cookieWrite(f.cookieName, n, 1);
                            }),
                            (f._getField = function (e, t) {
                              return null == f._fields ||
                                (!t && f._fieldsExpired && f._fieldsExpired[e])
                                ? null
                                : f._fields[e];
                            }),
                            (f._setField = function (e, t, n) {
                              null == f._fields && (f._fields = {}),
                                (f._fields[e] = t),
                                n || f._writeVisitor();
                            }),
                            (f._getFieldList = function (e, t) {
                              var n = f._getField(e, t);
                              return n ? n.split('*') : null;
                            }),
                            (f._setFieldList = function (e, t, n) {
                              f._setField(e, t ? t.join('*') : '', n);
                            }),
                            (f._getFieldMap = function (e, t) {
                              var n = f._getFieldList(e, t);
                              if (n) {
                                var a,
                                  r = {};
                                for (a = 0; a < n.length; a += 2) r[n[a]] = n[a + 1];
                                return r;
                              }
                              return null;
                            }),
                            (f._setFieldMap = function (e, t, n) {
                              var a,
                                r = null;
                              if (t) for (a in ((r = []), t)) _(a) && (r.push(a), r.push(t[a]));
                              f._setFieldList(e, r, n);
                            }),
                            (f._setFieldExpire = function (e, t, n) {
                              var a = new Date();
                              a.setTime(a.getTime() + 1000 * t),
                                null == f._fields && (f._fields = {}),
                                (f._fields['expire' + e] =
                                  Math.floor(a.getTime() / 1000) + (n ? 's' : '')),
                                t < 0
                                  ? (f._fieldsExpired || (f._fieldsExpired = {}),
                                    (f._fieldsExpired[e] = !0))
                                  : f._fieldsExpired && (f._fieldsExpired[e] = !1),
                                n &&
                                  (f.cookieRead(f.sessionCookieName) ||
                                    f.cookieWrite(f.sessionCookieName, '1'));
                            }),
                            (f._findVisitorID = function (e) {
                              return (
                                e &&
                                  ('object' == typeof e &&
                                    (e = e.d_mid
                                      ? e.d_mid
                                      : e.visitorID
                                      ? e.visitorID
                                      : e.id
                                      ? e.id
                                      : e.uuid
                                      ? e.uuid
                                      : '' + e),
                                  e && 'NOTARGET' === (e = e.toUpperCase()) && (e = y),
                                  (e && (e === y || e.match(j.VALID_VISITOR_ID_REGEX))) ||
                                    (e = '')),
                                e
                              );
                            }),
                            (f._setFields = function (e, t) {
                              if (
                                (f._clearTimeout(e),
                                null != f._loading && (f._loading[e] = !1),
                                S.fieldGroupObj[e] && S.setState(e, !1),
                                'MC' === e)
                              ) {
                                !0 !== S.isClientSideMarketingCloudVisitorID &&
                                  (S.isClientSideMarketingCloudVisitorID = !1);
                                var n = f._getField(m);
                                if (!n || f.overwriteCrossDomainMCIDAndAID) {
                                  if (
                                    !(n =
                                      'object' == typeof t && t.mid ? t.mid : f._findVisitorID(t))
                                  ) {
                                    if (
                                      f._use1stPartyMarketingCloudServer &&
                                      !f.tried1stPartyMarketingCloudServer
                                    )
                                      return (
                                        (f.tried1stPartyMarketingCloudServer = !0),
                                        void f.getAnalyticsVisitorID(null, !1, !0)
                                      );
                                    n = f._generateLocalMID();
                                  }
                                  f._setField(m, n);
                                }
                                (n && n !== y) || (n = ''),
                                  'object' == typeof t &&
                                    ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                      f._setFields(v, t),
                                    f._use1stPartyMarketingCloudServer &&
                                      t.mid &&
                                      f._setFields(p, { id: t.id })),
                                  f._callAllCallbacks(m, [n]);
                              }
                              if (e === v && 'object' == typeof t) {
                                var a = 604800;
                                null != t.id_sync_ttl &&
                                  t.id_sync_ttl &&
                                  (a = parseInt(t.id_sync_ttl, 10));
                                var r = D.getRegionAndCheckIfChanged(t, a);
                                f._callAllCallbacks('MCAAMLH', [r]);
                                var i = f._getField(b);
                                (t.d_blob || t.blob) &&
                                  ((i = t.d_blob) || (i = t.blob),
                                  f._setFieldExpire(b, a),
                                  f._setField(b, i)),
                                  i || (i = ''),
                                  f._callAllCallbacks(b, [i]),
                                  !t.error_msg &&
                                    f._newCustomerIDsHash &&
                                    f._setField('MCCIDH', f._newCustomerIDsHash);
                              }
                              if (e === p) {
                                var o = f._getField(h);
                                (o && !f.overwriteCrossDomainMCIDAndAID) ||
                                  ((o = f._findVisitorID(t))
                                    ? o !== y && f._setFieldExpire(b, -1)
                                    : (o = y),
                                  f._setField(h, o)),
                                  (o && o !== y) || (o = ''),
                                  f._callAllCallbacks(h, [o]);
                              }
                              if (f.idSyncDisableSyncs || f.disableIdSyncs)
                                D.idCallNotProcesssed = !0;
                              else {
                                D.idCallNotProcesssed = !1;
                                var s = {};
                                (s.ibs = t.ibs),
                                  (s.subdomain = t.subdomain),
                                  D.processIDCallData(s);
                              }
                              var l, c;
                              t === Object(t) &&
                                (f.isAllowed() && (l = f._getField('MCOPTOUT')),
                                l ||
                                  ((l = y),
                                  t.d_optout &&
                                    t.d_optout instanceof Array &&
                                    (l = t.d_optout.join(',')),
                                  (c = parseInt(t.d_ottl, 10)),
                                  isNaN(c) && (c = 7200),
                                  f._setFieldExpire('MCOPTOUT', c, !0),
                                  f._setField('MCOPTOUT', l)),
                                f._callAllCallbacks('MCOPTOUT', [l]));
                            }),
                            (f._loading = null),
                            (f._getRemoteField = function (n, e, t, a, r) {
                              var i,
                                o = '',
                                s = I.isFirstPartyAnalyticsVisitorIDCall(n),
                                l = { MCAAMLH: !0, MCAAMB: !0 };
                              if (f.isAllowed())
                                if (
                                  (f._readVisitor(),
                                  !(
                                    !(o = f._getField(n, !0 === l[n])) ||
                                    (f._fieldsExpired && f._fieldsExpired[n])
                                  ) ||
                                    (f.disableThirdPartyCalls && !s))
                                )
                                  o ||
                                    (n === m
                                      ? (f._registerCallback(n, t),
                                        (o = f._generateLocalMID()),
                                        f.setMarketingCloudVisitorID(o))
                                      : n === h
                                      ? (f._registerCallback(n, t),
                                        (o = ''),
                                        f.setAnalyticsVisitorID(o))
                                      : (a = !(o = '')));
                                else if (
                                  (n === m || 'MCOPTOUT' === n
                                    ? (i = 'MC')
                                    : 'MCAAMLH' === n || n === b
                                    ? (i = v)
                                    : n === h && (i = p),
                                  i)
                                )
                                  return (
                                    !e ||
                                      (null != f._loading && f._loading[i]) ||
                                      (null == f._loading && (f._loading = {}),
                                      (f._loading[i] = !0),
                                      f._loadData(
                                        i,
                                        e,
                                        function (e) {
                                          if (!f._getField(n)) {
                                            e && S.setState(i, !0);
                                            var t = '';
                                            n === m
                                              ? (t = f._generateLocalMID())
                                              : i === v && (t = { error_msg: 'timeout' }),
                                              f._setFields(i, t);
                                          }
                                        },
                                        r
                                      )),
                                    f._registerCallback(n, t),
                                    o || (e || f._setFields(i, { id: y }), '')
                                  );
                              return (
                                (n !== m && n !== h) || o !== y || (a = !(o = '')),
                                t && a && f._callCallback(t, [o]),
                                o
                              );
                            }),
                            (f._setMarketingCloudFields = function (e) {
                              f._readVisitor(), f._setFields('MC', e);
                            }),
                            (f._mapCustomerIDs = function (e) {
                              f.getAudienceManagerBlob(e, !0);
                            }),
                            (f._setAnalyticsFields = function (e) {
                              f._readVisitor(), f._setFields(p, e);
                            }),
                            (f._setAudienceManagerFields = function (e) {
                              f._readVisitor(), f._setFields(v, e);
                            }),
                            (f._getAudienceManagerURLData = function (e) {
                              var t = f.audienceManagerServer,
                                n = '',
                                a = f._getField(m),
                                r = f._getField(b, !0),
                                i = f._getField(h),
                                o =
                                  i && i !== y ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                              if (
                                (f.loadSSL &&
                                  f.audienceManagerServerSecure &&
                                  (t = f.audienceManagerServerSecure),
                                t)
                              ) {
                                var s,
                                  l,
                                  c = f.getCustomerIDs();
                                if (c)
                                  for (s in c)
                                    _(s) &&
                                      ((l = c[s]),
                                      (o +=
                                        '&d_cid_ic=' +
                                        encodeURIComponent(s) +
                                        '%01' +
                                        encodeURIComponent(l.id ? l.id : '') +
                                        (l.authState ? '%01' + l.authState : '')));
                                e || (e = '_setAudienceManagerFields');
                                var u = 'http' + (f.loadSSL ? 's' : '') + '://' + t + '/id',
                                  d =
                                    'd_visid_ver=' +
                                    f.version +
                                    '&d_rtbd=json&d_ver=2' +
                                    (!a && f._use1stPartyMarketingCloudServer
                                      ? '&d_verify=1'
                                      : '') +
                                    '&d_orgid=' +
                                    encodeURIComponent(f.marketingCloudOrgID) +
                                    '&d_nsid=' +
                                    (f.idSyncContainerID || 0) +
                                    (a ? '&d_mid=' + encodeURIComponent(a) : '') +
                                    (f.idSyncDisable3rdPartySyncing || f.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : '') +
                                    (!0 === g
                                      ? '&d_coop_safe=1'
                                      : !1 === g
                                      ? '&d_coop_unsafe=1'
                                      : '') +
                                    (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                                    o,
                                  p = ['s_c_il', f._in, e];
                                return {
                                  url: (n = u + '?' + d + '&d_cb=s_c_il%5B' + f._in + '%5D.' + e),
                                  corsUrl: u + '?' + d,
                                  callback: p,
                                };
                              }
                              return { url: n };
                            }),
                            (f.appendVisitorIDsTo = function (e) {
                              try {
                                var t = [
                                  [m, f._getField(m)],
                                  [h, f._getField(h)],
                                  ['MCORGID', f.marketingCloudOrgID],
                                ];
                                return f._addQuerystringParam(e, j.ADOBE_MC, o(t));
                              } catch (t) {
                                return e;
                              }
                            }),
                            (f.appendSupplementalDataIDTo = function (e, t) {
                              if (
                                !(t = t || f.getSupplementalDataID(I.generateRandomString(), !0))
                              )
                                return e;
                              try {
                                var n = o([
                                  ['SDID', t],
                                  ['MCORGID', f.marketingCloudOrgID],
                                ]);
                                return f._addQuerystringParam(e, j.ADOBE_MC_SDID, n);
                              } catch (t) {
                                return e;
                              }
                            });
                          var I = {
                            parseHash: function (e) {
                              var t = e.indexOf('#');
                              return 0 < t ? e.substr(t) : '';
                            },
                            hashlessUrl: function (e) {
                              var t = e.indexOf('#');
                              return 0 < t ? e.substr(0, t) : e;
                            },
                            addQueryParamAtLocation: function (e, t, n) {
                              var a = e.split('&');
                              return (
                                (n = null != n ? n : a.length), a.splice(n, 0, t), a.join('&')
                              );
                            },
                            isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                              return (
                                e === h &&
                                (t || (t = f.trackingServer),
                                n || (n = f.trackingServerSecure),
                                !('string' != typeof (a = f.loadSSL ? n : t) || !a.length) &&
                                  a.indexOf('2o7.net') < 0 &&
                                  a.indexOf('omtrdc.net') < 0)
                              );
                              var a;
                            },
                            isObject: function (e) {
                              return Boolean(e && e === Object(e));
                            },
                            removeCookie: function (e) {
                              document.cookie =
                                encodeURIComponent(e) +
                                '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                (f.cookieDomain ? ' domain=' + f.cookieDomain + ';' : '');
                            },
                            isTrackingServerPopulated: function () {
                              return !!f.trackingServer || !!f.trackingServerSecure;
                            },
                            getTimestampInSeconds: function () {
                              return Math.round(new Date().getTime() / 1000);
                            },
                            parsePipeDelimetedKeyValues: function (e) {
                              return e.split('|').reduce(function (e, t) {
                                var n = t.split('=');
                                return (e[n[0]] = decodeURIComponent(n[1])), e;
                              }, {});
                            },
                            generateRandomString: function (e) {
                              e = e || 5;
                              for (var t = '', n = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--; )
                                t += n[Math.floor(Math.random() * n.length)];
                              return t;
                            },
                            parseBoolean: function (e) {
                              return 'true' === e || ('false' !== e && null);
                            },
                            replaceMethodsWithFunction: function (e, t) {
                              for (var n in e)
                                e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
                              return e;
                            },
                            pluck: function (n, e) {
                              return e.reduce(function (e, t) {
                                return n[t] && (e[t] = n[t]), e;
                              }, Object.create(null));
                            },
                          };
                          f._helpers = I;
                          var D = R(f, c);
                          (f._destinationPublishing = D), (f.timeoutMetricsLog = []);
                          var S = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function (e, t) {
                              switch (e) {
                                case 'MC':
                                  !1 === t
                                    ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                                    : (this.MCIDCallTimedOut = t);
                                  break;
                                case p:
                                  !1 === t
                                    ? !0 !== this.AnalyticsIDCallTimedOut &&
                                      (this.AnalyticsIDCallTimedOut = !1)
                                    : (this.AnalyticsIDCallTimedOut = t);
                                  break;
                                case v:
                                  !1 === t
                                    ? !0 !== this.AAMIDCallTimedOut &&
                                      (this.AAMIDCallTimedOut = !1)
                                    : (this.AAMIDCallTimedOut = t);
                              }
                            },
                          };
                          (f.isClientSideMarketingCloudVisitorID = function () {
                            return S.isClientSideMarketingCloudVisitorID;
                          }),
                            (f.MCIDCallTimedOut = function () {
                              return S.MCIDCallTimedOut;
                            }),
                            (f.AnalyticsIDCallTimedOut = function () {
                              return S.AnalyticsIDCallTimedOut;
                            }),
                            (f.AAMIDCallTimedOut = function () {
                              return S.AAMIDCallTimedOut;
                            }),
                            (f.idSyncGetOnPageSyncInfo = function () {
                              return f._readVisitor(), f._getField('MCSYNCSOP');
                            }),
                            (f.idSyncByURL = function (e) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                a,
                                r = e.url,
                                i = encodeURIComponent,
                                o = D;
                              return (
                                (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = M.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (a = ['ibs', i(e.dpid), 'img', i(r), t.ttl, '', n]),
                                o.addMessage(a.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }),
                            (f.idSyncByDataSource = function (e) {
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  f.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                            }),
                            (f.publishDestinations = function (e, t, n) {
                              if (
                                ((n = 'function' == typeof n ? n : function () {}),
                                'string' == typeof e && e.length)
                              )
                                if (t instanceof Array && t.length) {
                                  var a = D;
                                  if (a.readyToAttachIframePreliminary()) {
                                    var r = !1;
                                    t.forEach(function (e) {
                                      'string' == typeof e &&
                                        e.length &&
                                        (a.addMessage(e), (r = !0));
                                    }),
                                      r
                                        ? a.iframe
                                          ? (n({
                                              message:
                                                'The destination publishing iframe is already attached and loaded.',
                                            }),
                                            a.requestToProcess())
                                          : !f.subdomain && f._getField(m)
                                          ? ((a.subdomain = e),
                                            (a.doAttachIframe = !0),
                                            (a.url = a.getUrl()),
                                            a.readyToAttachIframe()
                                              ? (a.iframeLoadedCallbacks.push(function (e) {
                                                  n({
                                                    message:
                                                      'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                                      (e.message || 'no result'),
                                                  });
                                                }),
                                                a.attachIframe())
                                              : n({
                                                  error:
                                                    'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                                }))
                                          : a.iframeLoadedCallbacks.push(function (e) {
                                              n({
                                                message:
                                                  'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                                  (e.message || 'no result'),
                                              });
                                            })
                                        : n({
                                            error: 'None of the messages are populated strings.',
                                          });
                                  } else
                                    n({
                                      error:
                                        'The destination publishing iframe is disabled in the Visitor library.',
                                    });
                                } else n({ error: 'messages is not a populated array.' });
                              else n({ error: 'subdomain is not a populated string.' });
                            }),
                            (f._getCookieVersion = function (e) {
                              e = e || f.cookieRead(f.cookieName);
                              var t = j.VERSION_REGEX.exec(e);
                              return t && 1 < t.length ? t[1] : null;
                            }),
                            (f._resetAmcvCookie = function (e) {
                              var t = f._getCookieVersion();
                              (t && !w.isLessThan(t, e)) || I.removeCookie(f.cookieName);
                            }),
                            (f.setAsCoopSafe = function () {
                              g = !0;
                            }),
                            (f.setAsCoopUnsafe = function () {
                              g = !1;
                            }),
                            (f.init = function () {
                              !(function () {
                                if (r && 'object' == typeof r) {
                                  for (var e in ((f.configs = Object.create(null)), r))
                                    _(e) && ((f[e] = r[e]), (f.configs[e] = r[e]));
                                  (f.idSyncContainerID = f.idSyncContainerID || 0),
                                    (g =
                                      'boolean' == typeof f.isCoopSafe
                                        ? f.isCoopSafe
                                        : I.parseBoolean(f.isCoopSafe)),
                                    f.resetBeforeVersion &&
                                      f._resetAmcvCookie(f.resetBeforeVersion),
                                    f._attemptToPopulateIdsFromUrl(),
                                    f._attemptToPopulateSdidFromUrl(),
                                    f._readVisitor();
                                  var t = f._getField(d),
                                    n = Math.ceil(new Date().getTime() / j.MILLIS_PER_DAY);
                                  f.idSyncDisableSyncs ||
                                    f.disableIdSyncs ||
                                    !D.canMakeSyncIDCall(t, n) ||
                                    (f._setFieldExpire(b, -1), f._setField(d, n)),
                                    f.getMarketingCloudVisitorID(),
                                    f.getAudienceManagerLocationHint(),
                                    f.getAudienceManagerBlob(),
                                    f._mergeServerState(f.serverState);
                                } else
                                  f._attemptToPopulateIdsFromUrl(),
                                    f._attemptToPopulateSdidFromUrl();
                              })(),
                                (function () {
                                  if (!f.idSyncDisableSyncs && !f.disableIdSyncs) {
                                    D.checkDPIframeSrc();
                                    var e = function () {
                                      var e = D;
                                      e.readyToAttachIframe() && e.attachIframe();
                                    };
                                    l.addEventListener('load', function () {
                                      (c.windowLoaded = !0), e();
                                    });
                                    try {
                                      V.receiveMessage(function (e) {
                                        D.receiveMessage(e.data);
                                      }, D.iframeHost);
                                    } catch (e) {}
                                  }
                                })(),
                                f.whitelistIframeDomains &&
                                  j.POST_MESSAGE_ENABLED &&
                                  ((f.whitelistIframeDomains =
                                    f.whitelistIframeDomains instanceof Array
                                      ? f.whitelistIframeDomains
                                      : [f.whitelistIframeDomains]),
                                  f.whitelistIframeDomains.forEach(function (e) {
                                    var t = new O(a, e),
                                      n = T(f, t);
                                    V.receiveMessage(n, e);
                                  }));
                            });
                        };
                      (U.getInstance = function (a, e) {
                        if (!a) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        a.indexOf('@') < 0 && (a += '@AdobeOrg');
                        var t = (function () {
                          var e = A.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === a) return n;
                            }
                        })();
                        if (t) return t;
                        var n = a.split('').reverse().join(''),
                          r = new U(a, null, n);
                        e === Object(e) && e.cookieDomain && (r.cookieDomain = e.cookieDomain),
                          A.s_c_il.splice(--A.s_c_in, 1);
                        var i = M.getIeVersion();
                        if ('number' == typeof i && i < 10)
                          return r._helpers.replaceMethodsWithFunction(r, function () {});
                        var o,
                          s =
                            (function () {
                              try {
                                return A.self !== A.parent;
                              } catch (a) {
                                return !0;
                              }
                            })() &&
                            ((o = r).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== o.cookieRead('TEST_AMCV_COOKIE') ||
                              (o._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            A.parent
                              ? new g(a, e, r, A.parent)
                              : new U(a, e, n);
                        return (r = null), s.init(), s;
                      }),
                        (function () {
                          function e () {
                            U.windowLoaded = !0;
                          }
                          A.addEventListener
                            ? A.addEventListener('load', e)
                            : A.attachEvent && A.attachEvent('onload', e),
                            (U.codeLoadEnd = new Date().getTime());
                        })(),
                        (U.config = F),
                        (A.Visitor = U);
                    })(),
                    (e.wd = window),
                    (e.fl = new Function('x', 'l', "return x?(''+x).substring(0,l):x")),
                    (e.pt = new Function(
                      'x',
                      'd',
                      'f',
                      'a',
                      "var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l]:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.substring(z,x[l]);t=z<x[l]?t:''}return''"
                    )),
                    (e.rep = new Function(
                      'x',
                      'o',
                      'n',
                      "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x"
                    )),
                    (e.ape = new Function(
                      'x',
                      "var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x"
                    )),
                    (e.epa = new Function(
                      'x',
                      "var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y"
                    )),
                    (e.parseUri = new Function(
                      'u',
                      "if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.createElement('a'),l=['href','protocol','host','hostname','port','pathname','search','hash'],p,r={href:u,toString:function(){return this.href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathname='/'+p;return r"
                    )),
                    (e.gtfs = new Function(
                      "var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.protocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?d.referrer:d.location;return{location:s.parseUri(u)}"
                    )),
                    (e.getTimeParting = function (e, t) {
                      var n = this,
                        a = new Date('1/1/2000');
                      if (6 != a.getDay() || 0 != a.getMonth()) return 'Data Not Available';
                      var r,
                        i,
                        o,
                        s,
                        l,
                        c,
                        u,
                        p = [
                          'Sunday',
                          'Monday',
                          'Tuesday',
                          'Wednesday',
                          'Thursday',
                          'Friday',
                          'Saturday',
                        ],
                        f = [
                          'January',
                          'February',
                          'March',
                          'April',
                          'May',
                          'June',
                          'July',
                          'August',
                          'September',
                          'October',
                          'November',
                          'December',
                        ];
                      if (
                        ((d = new Date()),
                        (e = e || 0),
                        (e = parseFloat(e)),
                        (t = t || 'n'),
                        n._tpDST && 'undefined' != typeof n._tpDST[d.getFullYear()])
                      ) {
                        var g = n._tpDST[d.getFullYear()].split(/,/);
                        (l = new Date(g[0] + '/' + d.getFullYear())),
                          (c = new Date(g[1] + '/' + d.getFullYear())),
                          'n' == t && d > l && d < c
                            ? (e += 1)
                            : 's' == t && (d > c || d < l) && (e += 1);
                      }
                      return (
                        (d = d.getTime() + 60000 * d.getTimezoneOffset()),
                        (d = new Date(d + 3600000 * e)),
                        (r = d.getHours()),
                        (i = (i = d.getMinutes()) < 10 ? '0' + i : i),
                        (s = 'AM'),
                        12 <= r && ((s = 'PM'), (r -= 12)),
                        0 == r && (r = 12),
                        (o = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()),
                        (u = r + ':' + i + ' ' + s),
                        'year=' +
                          d.getFullYear() +
                          ' | month=' +
                          f[d.getMonth()] +
                          ' | date=' +
                          o +
                          ' | day=' +
                          p[d.getDay()] +
                          ' | time=' +
                          u
                      );
                    }),
                    (e._tpDST = {
                      2015: '3/8,11/1',
                      2016: '3/13,11/6',
                      2017: '3/12,11/5',
                      2018: '3/11,11/4',
                      2019: '3/10,11/3',
                      2020: '3/8,11/1',
                      2021: '3/14,11/7',
                      2022: '3/13,11/6',
                      2023: '3/12,11/5',
                      2024: '3/10,11/3',
                      2025: '3/9,11/2',
                      2026: '3/8,11/1',
                      2027: '3/14,11/7',
                      2028: '3/12,11/5',
                      2029: '3/11,11/4',
                      2030: '3/10,11/3',
                    }),
                    (e.getQueryParam = function (e, t, n, a) {
                      var r,
                        i,
                        o = this,
                        s = '';
                      for (
                        t = t || '',
                          n =
                            n || (o.pageURL ? o.pageURL : o.wd ? o.wd.location : window.location);
                        e;

                      )
                        (r = (r = e.indexOf(',')) < 0 ? e.length : r),
                          (i = o.p_gpv(e.substring(0, r), n + '', a)) &&
                            (i = -1 < i.indexOf('#') ? i.substring(0, i.indexOf('#')) : i),
                          i && (s += s ? t + i : i),
                          (e = e.substring(r == e.length ? r : r + 1));
                      return s;
                    }),
                    (e.p_gpv = function (e, t, n) {
                      var a,
                        r = this,
                        o = '';
                      return (
                        (j = 1 == n ? '#' : '?'),
                        (i = t.indexOf(j)),
                        e && -1 < i && ((a = t.substring(i + 1)), (o = r.pt(a, '&', 'p_gvf', e))),
                        o
                      );
                    }),
                    (e.p_gvf = function (e, t) {
                      if (e) {
                        var n = this,
                          a = e.indexOf('='),
                          r = a < 0 ? e : e.substring(0, a),
                          i = a < 0 || e.substring(a + 1);
                        if (r.toLowerCase() == t.toLowerCase())
                          return n.epa ? n.epa(i) : n.unescape(i);
                      }
                      return '';
                    }),
                    (e.pt = function (e, t, n, a) {
                      for (var r, i, o = this, s = e, l = 0; s; ) {
                        if (
                          ((r = (r = s.indexOf(t)) < 0 ? s.length : r),
                          (s = s.substring(0, r)),
                          (i = o[n](s, a)))
                        )
                          return i;
                        (l += r + t.length),
                          (s = e.substring(l, e.length)),
                          (s = l < e.length ? s : '');
                      }
                      return '';
                    }),
                    (e.repl = new Function(
                      'x',
                      'o',
                      'n',
                      'var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x'
                    )),
                    (e.split = new Function(
                      'l',
                      'd',
                      'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                    )),
                    (e.getNewRepeat = new Function(
                      'd',
                      'cn',
                      "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"
                    )),
                    (e.apl = function (e, t, n, a) {
                      return (n = n || ','), this.inList(e, t, n, a) || (e = e ? e + n + t : t), e;
                    }),
                    (e.inList = function (e, t, n, a) {
                      if ('string' != typeof t) return !1;
                      var r = Array();
                      if ('string' == typeof e) (n = n || ','), (r = e.split(n));
                      else {
                        if ('object' != typeof e) return !1;
                        r = e;
                      }
                      for (var i = 0, o = r.length; i < o; i++) {
                        if (void 0 !== a && 1 == a && t == r[i]) return !0;
                        if (t.toLowerCase() == r[i].toLowerCase()) return !0;
                      }
                      return !1;
                    }),
                    e.loadModule('Media'),
                    (e.Media.autoTrack = !1),
                    (e.Media.trackWhilePlaying = !0),
                    (e.Media.trackVars = 'None'),
                    (e.Media.trackEvents = 'None'),
                    (e.visitorNamespace = 'dbs');
                },
              },
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/7cb8109970d1/097c76361209/a039a455180e/EX5eaf5d61eb064495a4d1565a55d00cfa-libraryCode_source.min.js',
                company: 'dbs0',
                accounts: {
                  staging: ['dbssgdev'],
                  production: ['dbssgprod'],
                  development: ['dbssgdev'],
                },
                trackerVariableName: 's',
              },
              trackerProperties: {
                charSet: 'UTF-8',
                currencyCode: 'SGD',
                trackingServer: 'somniture.dbs.com.sg',
                trackInlineStats: !0,
                trackDownloadLinks: !0,
                trackExternalLinks: !0,
                linkExternalFilters: [],
                linkInternalFilters: [
                  'dbs.com.sg',
                  'e-insure2.msig.sg',
                  'hk.dbs.com',
                  'http://dbs.com',
                  'http://dbs.com.sg',
                  'http://dbsweb-s01.dbs.com.sg',
                  'http://dbsweb-s01.posb.com.sg/',
                  'http://preview-sg.sgp.dbs.com/',
                  'http://www.dbs.com',
                  'http://www.dbs.com.sg',
                  'https://203.127.2.21:60443/IB/Welcome?From IB=',
                  'https://dbs.com',
                  'https://dbsweb-u03-dbs1.dbs.com/i-bank/dbs-forms/components/complete.page',
                  'https://internet-banking.dbs.com.sg/',
                  'javascript:',
                  'javascript:',
                  'locator.dbs.com',
                  'mailto:',
                  'preview-sg.sgp.dbs.com',
                  'secure.dbs.com',
                  'tel:',
                  'tw.dbs.com',
                  'https://dbsweb-u03-dbs1.dbs.com/i-bank/dbs-forms/components/complete.page#',
                ],
                trackingServerSecure: 'somniture.dbs.com.sg',
                linkDownloadFileTypes: [
                  'avi',
                  'css',
                  'csv',
                  'doc',
                  'docx',
                  'eps',
                  'exe',
                  'flv',
                  'jpg',
                  'js',
                  'm4v',
                  'mov',
                  'mp3',
                  'mpg',
                  'pdf',
                  'png',
                  'ppt',
                  'pptx',
                  'rar',
                  'svg',
                  'tab',
                  'txt',
                  'vsd',
                  'vxd',
                  'wav',
                  'wma',
                  'wmv',
                  'xls',
                  'xlsx',
                  'zip',
                ],
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP6580734006504e9facd682c439318b88/',
          },
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, n, g) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    r = n('../codeLibrary/VisitorAPI'),
                    m = n('../../view/utils/timeUnits'),
                    h = function (e) {
                      return e.reduce(function (e, t) {
                        var n = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = n), e;
                      }, {});
                    },
                    i = function (e) {
                      var t = g.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var n = h(t.variables || []),
                        a = t.doesOptInApply;
                      a &&
                        ('boolean' == typeof a
                          ? (n.doesOptInApply = a)
                          : t.optInCallback && (n.doesOptInApply = t.optInCallback));
                      var r = t.isOptInStorageEnabled;
                      r && (n.isOptInStorageEnabled = r);
                      var i = t.optInCookieDomain;
                      i && (n.optInCookieDomain = i);
                      var o = t.optInStorageExpiry;
                      if (o) {
                        var s = t.timeUnit;
                        if (s && m[s]) {
                          var l = o * m[s];
                          n.optInStorageExpiry = l;
                        }
                      } else !0 === r && (n.optInStorageExpiry = 33696000);
                      var c = t.previousPermissions;
                      c && (n.previousPermissions = c);
                      var u = t.preOptInApprovals;
                      if (u) n.preOptInApprovals = u;
                      else {
                        var d = t.preOptInApprovalInput;
                        d && (n.preOptInApprovalInput = d);
                      }
                      var p = t.isIabContext;
                      p && (n.isIabContext = p);
                      var f = e.getInstance(t.orgId, n);
                      return (
                        g.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        g.logger.info('Set variables: ' + JSON.stringify(n)),
                        f.getMarketingCloudVisitorID(function (e) {
                          g.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        f
                      );
                    },
                    o = function (t) {
                      return (g.getExtensionSettings().pathExclusions || []).some(function (e) {
                        return e.valueIsRegex ? new RegExp(e.value, 'i').test(t) : e.value === t;
                      });
                    },
                    s = null;
                  (_satellite.getVisitorId = function () {
                    return s;
                  }),
                    o(a.location.pathname)
                      ? g.logger.warn(
                          'MCID library not loaded. One of the path exclusions matches the current path.'
                        )
                      : (s = i(r)),
                    (e.exports = s);
                },
                name: 'mcid-instance',
                shared: !0,
              },
              'adobe-mcid/src/lib/codeLibrary/VisitorAPI.js': {
                script: function (e) {
                  e.exports =
                    ((function () {
                      'use strict';
                      function L (e) {
                        return (L =
                          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                              }
                            : function (e) {
                                return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                              })(e);
                      }
                      function e (e, t, n) {
                        return (
                          t in e
                            ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (e[t] = n),
                          e
                        );
                      }
                      function t () {
                        return {
                          callbacks: {},
                          add: function (e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var n = this.callbacks[e].push(t) - 1,
                              a = this;
                            return function () {
                              a.callbacks[e].splice(n, 1);
                            };
                          },
                          execute: function (e, t) {
                            if (this.callbacks[e]) {
                              t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                              try {
                                for (; this.callbacks[e].length; ) {
                                  var n = this.callbacks[e].shift();
                                  'function' == typeof n
                                    ? n.apply(null, t)
                                    : n instanceof Array && n[1].apply(n[0], t);
                                }
                                delete this.callbacks[e];
                              } catch (e) {}
                            }
                          },
                          executeAll: function (n, e) {
                            (e || (n && !R.isObjectEmpty(n))) &&
                              Object.keys(this.callbacks).forEach(function (e) {
                                var t = void 0 !== n[e] ? n[e] : '';
                                this.execute(e, t);
                              }, this);
                          },
                          hasCallbacks: function () {
                            return Boolean(Object.keys(this.callbacks).length);
                          },
                        };
                      }
                      function c (e, t, n) {
                        var a = null == e ? void 0 : e[t];
                        return void 0 === a ? n : a;
                      }
                      function r (e) {
                        for (var t = /^\d+$/, n = 0, a = e.length; n < a; n++)
                          if (!t.test(e[n])) return !1;
                        return !0;
                      }
                      function i (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function o (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var a = parseInt(e[n], 10),
                            r = parseInt(t[n], 10);
                          if (r < a) return 1;
                          if (a < r) return -1;
                        }
                        return 0;
                      }
                      function n (e, t) {
                        if (e === t) return 0;
                        var n = e.toString().split('.'),
                          a = t.toString().split('.');
                        return r(n.concat(a)) ? (i(n, a), o(n, a)) : NaN;
                      }
                      function s (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function l (e) {
                        return 'function' == typeof e || (e instanceof Array && e.length);
                      }
                      function a (e, t) {
                        var n = 0 < arguments.length && void 0 !== e ? arguments[0] : '',
                          a =
                            1 < arguments.length && void 0 !== t
                              ? arguments[1]
                              : function () {
                                  return !0;
                                };
                        (this.log = de('log', n, a)),
                          (this.warn = de('warn', n, a)),
                          (this.error = de('error', n, a));
                      }
                      function V (e, t) {
                        var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          a = n.isEnabled,
                          r = n.cookieName,
                          i = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        return a && r && i
                          ? {
                              remove: function () {
                                i.remove(r);
                              },
                              get: function () {
                                var e = i.get(r),
                                  t = {};
                                try {
                                  t = JSON.parse(e);
                                } catch (e) {
                                  t = {};
                                }
                                return t;
                              },
                              set: function (e, t) {
                                (t = t || {}),
                                  i.set(r, JSON.stringify(e), {
                                    domain: t.optInCookieDomain || '',
                                    cookieLifetime: t.optInStorageExpiry || 34190000,
                                    expires: !0,
                                  });
                              },
                            }
                          : { get: Se, set: Se, remove: Se };
                      }
                      function u (e) {
                        (this.name = this.constructor.name),
                          (this.message = e),
                          'function' == typeof Error.captureStackTrace
                            ? Error.captureStackTrace(this, this.constructor)
                            : (this.stack = new Error(e).stack);
                      }
                      function d (e, t) {
                        function n (e, t) {
                          var n = ge(e);
                          return n.length
                            ? n.every(function (e) {
                                return !!t[e];
                              })
                            : me(t);
                        }
                        function a () {
                          w(E),
                            P(ae.COMPLETE),
                            I(C.status, C.permissions),
                            _.set(C.permissions, { optInCookieDomain: u, optInStorageExpiry: d }),
                            D.execute(Ee);
                        }
                        function r (n) {
                          return function (e, t) {
                            if (!he(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return P(ae.CHANGED), Object.assign(E, ve(ge(e), n)), t || a(), C;
                          };
                        }
                        var i = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          o = i.doesOptInApply,
                          s = i.previousPermissions,
                          l = i.preOptInApprovals,
                          c = i.isOptInStorageEnabled,
                          u = i.optInCookieDomain,
                          d = i.optInStorageExpiry,
                          p = i.isIabContext,
                          f = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          g = Ae(s);
                        ke(g, 'Invalid `previousPermissions`!'),
                          ke(l, 'Invalid `preOptInApprovals`!');
                        var m,
                          h,
                          v,
                          b,
                          y,
                          _ = V({ isEnabled: !!c, cookieName: 'adobeujs-optin' }, { cookies: f }),
                          C = this,
                          I = ne(C),
                          D = le(),
                          S = _e(g),
                          A = _e(l),
                          k = _.get(),
                          M = {},
                          O = ((y = k), Ce(S) || (y && Ce(y)) ? ae.COMPLETE : ae.PENDING),
                          T =
                            ((m = A),
                            (h = S),
                            (v = k),
                            (b = ve(se, !o)),
                            o ? Object.assign({}, b, m, h, v) : b),
                          E = be(T),
                          P = function (e) {
                            return (O = e);
                          },
                          w = function (e) {
                            return (T = e);
                          };
                        (C.deny = r(!1)),
                          (C.approve = r(!0)),
                          (C.denyAll = C.deny.bind(C, se)),
                          (C.approveAll = C.approve.bind(C, se)),
                          (C.isApproved = function (e) {
                            return n(e, C.permissions);
                          }),
                          (C.isPreApproved = function (e) {
                            return n(e, A);
                          }),
                          (C.fetchPermissions = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t && arguments[1],
                              a = n ? C.on(ae.COMPLETE, e) : Se;
                            return (
                              !o || (o && C.isComplete) || l
                                ? e(C.permissions)
                                : n ||
                                  D.add(Ee, function () {
                                    return e(C.permissions);
                                  }),
                              a
                            );
                          }),
                          (C.complete = function () {
                            C.status === ae.CHANGED && a();
                          }),
                          (C.registerPlugin = function (e) {
                            if (!e || !e.name || 'function' != typeof e.onRegister)
                              throw new Error(Pe);
                            M[e.name] || (M[e.name] = e).onRegister.call(e, C);
                          }),
                          (C.execute = Te(M)),
                          Object.defineProperties(C, {
                            permissions: {
                              get: function () {
                                return T;
                              },
                            },
                            status: {
                              get: function () {
                                return O;
                              },
                            },
                            Categories: {
                              get: function () {
                                return re;
                              },
                            },
                            doesOptInApply: {
                              get: function () {
                                return !!o;
                              },
                            },
                            isPending: {
                              get: function () {
                                return C.status === ae.PENDING;
                              },
                            },
                            isComplete: {
                              get: function () {
                                return C.status === ae.COMPLETE;
                              },
                            },
                            __plugins: {
                              get: function () {
                                return Object.keys(M);
                              },
                            },
                            isIabContext: {
                              get: function () {
                                return p;
                              },
                            },
                          });
                      }
                      function p (e, t) {
                        function n () {
                          (r = null), e.call(e, new u('The call took longer than you wanted!'));
                        }
                        function a () {
                          r && (clearTimeout(r), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var r = setTimeout(n, t);
                        return a;
                      }
                      function f () {
                        if (window.__cmp) return window.__cmp;
                        var e = window;
                        if (e !== window.top) {
                          for (var i; !i; ) {
                            e = e.parent;
                            try {
                              e.frames.__cmpLocator && (i = e);
                            } catch (e) {}
                            if (e === window.top) break;
                          }
                          if (i) {
                            var o = {};
                            return (
                              (window.__cmp = function (e, t, n) {
                                var a = Math.random() + '',
                                  r = { __cmpCall: { command: e, parameter: t, callId: a } };
                                (o[a] = n), i.postMessage(r, '*');
                              }),
                              window.addEventListener(
                                'message',
                                function (e) {
                                  var t = e.data;
                                  if ('string' == typeof t)
                                    try {
                                      t = JSON.parse(e.data);
                                    } catch (e) {}
                                  if (t.__cmpReturn) {
                                    var n = t.__cmpReturn;
                                    o[n.callId] &&
                                      (o[n.callId](n.returnValue, n.success), delete o[n.callId]);
                                  }
                                },
                                !1
                              ),
                              window.__cmp
                            );
                          }
                          pe.error('__cmp not found');
                        } else pe.error('__cmp not found');
                      }
                      function g () {
                        var t = this;
                        (t.name = 'iabPlugin'), (t.version = '0.0.1');
                        var s = le(),
                          l = { allConsentData: null },
                          c = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (l[e] = n);
                          };
                        (t.fetchConsentData = function (e) {
                          var t = p(e.callback, e.timeout);
                          a({ callback: t });
                        }),
                          (t.isApproved = function (e) {
                            var i = e.callback,
                              o = e.category,
                              t = e.timeout;
                            if (l.allConsentData)
                              return i(
                                null,
                                d(
                                  o,
                                  l.allConsentData.vendorConsents,
                                  l.allConsentData.purposeConsents
                                )
                              );
                            var n = p(function (e, t) {
                              var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                a = n.vendorConsents,
                                r = n.purposeConsents;
                              i(e, d(o, a, r));
                            }, t);
                            a({ category: o, callback: n });
                          }),
                          (t.onRegister = function (o) {
                            var s = Object.keys(ie),
                              e = function (e, t) {
                                var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                  a = n.purposeConsents,
                                  r = n.gdprApplies,
                                  i = n.vendorConsents;
                                !e &&
                                  r &&
                                  i &&
                                  a &&
                                  (s.forEach(function (e) {
                                    var t = d(e, i, a);
                                    o[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  o.complete());
                              };
                            t.fetchConsentData({ callback: e });
                          });
                        var a = function (e) {
                            var t = e.callback;
                            if (l.allConsentData) return t(null, l.allConsentData);
                            s.add('FETCH_CONSENT_DATA', t);
                            var o = {};
                            n(function (e, t) {
                              var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                                a = n.purposeConsents,
                                r = n.gdprApplies,
                                i = n.vendorConsents;
                              (1 < arguments.length ? t : void 0) &&
                                c(
                                  'allConsentData',
                                  (o = { purposeConsents: a, gdprApplies: r, vendorConsents: i })
                                ),
                                u(function (e, t) {
                                  var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {};
                                  (1 < arguments.length ? t : void 0) &&
                                    ((o.consentString = n.consentData), c('allConsentData', o)),
                                    s.execute('FETCH_CONSENT_DATA', [null, l.allConsentData]);
                                });
                            });
                          },
                          u = function (e) {
                            var t = f();
                            t && t('getConsentData', null, e);
                          },
                          n = function (e) {
                            var t = Oe(ie),
                              n = f();
                            n && n('getVendorConsents', t, e);
                          },
                          d = function (e, t, n) {
                            var a = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                              r = 2 < arguments.length && void 0 !== n ? arguments[2] : {};
                            return (
                              !!a[ie[e]] &&
                              oe[e].every(function (e) {
                                return r[e];
                              })
                            );
                          };
                      }
                      var x =
                        'undefined' != typeof globalThis
                          ? globalThis
                          : 'undefined' != typeof window
                          ? window
                          : 'undefined' != typeof global
                          ? global
                          : 'undefined' != typeof self
                          ? self
                          : {};
                      Object.assign =
                        Object.assign ||
                        function (e) {
                          for (var t, n, a = 1; a < arguments.length; ++a)
                            for (t in (n = arguments[a]))
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return e;
                        };
                      var m,
                        h,
                        v,
                        b,
                        y,
                        j = {
                          MESSAGES: {
                            HANDSHAKE: 'HANDSHAKE',
                            GETSTATE: 'GETSTATE',
                            PARENTSTATE: 'PARENTSTATE',
                          },
                          STATE_KEYS_MAP: {
                            MCMID: 'MCMID',
                            MCAID: 'MCAID',
                            MCAAMB: 'MCAAMB',
                            MCAAMLH: 'MCAAMLH',
                            MCOPTOUT: 'MCOPTOUT',
                            CUSTOMERIDS: 'CUSTOMERIDS',
                          },
                          ASYNC_API_MAP: {
                            MCMID: 'getMarketingCloudVisitorID',
                            MCAID: 'getAnalyticsVisitorID',
                            MCAAMB: 'getAudienceManagerBlob',
                            MCAAMLH: 'getAudienceManagerLocationHint',
                            MCOPTOUT: 'isOptedOut',
                            ALLFIELDS: 'getVisitorValues',
                          },
                          SYNC_API_MAP: { CUSTOMERIDS: 'getCustomerIDs' },
                          ALL_APIS: {
                            MCMID: 'getMarketingCloudVisitorID',
                            MCAAMB: 'getAudienceManagerBlob',
                            MCAAMLH: 'getAudienceManagerLocationHint',
                            MCOPTOUT: 'isOptedOut',
                            MCAID: 'getAnalyticsVisitorID',
                            CUSTOMERIDS: 'getCustomerIDs',
                            ALLFIELDS: 'getVisitorValues',
                          },
                          FIELDGROUP_TO_FIELD: { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
                          FIELDS: {
                            MCMID: 'MCMID',
                            MCOPTOUT: 'MCOPTOUT',
                            MCAID: 'MCAID',
                            MCAAMLH: 'MCAAMLH',
                            MCAAMB: 'MCAAMB',
                          },
                          AUTH_STATE: { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
                          OPT_OUT: { GLOBAL: 'global' },
                        },
                        _ = j.STATE_KEYS_MAP,
                        C = function (i) {
                          function a () {}
                          function r (n, a) {
                            var r = this;
                            return function () {
                              var e = i(0, n),
                                t = {};
                              return (t[n] = e), r.setStateAndPublish(t), a(e), e;
                            };
                          }
                          (this.getMarketingCloudVisitorID = function (e) {
                            e = e || a;
                            var t = this.findField(_.MCMID, e),
                              n = r.call(this, _.MCMID, e);
                            return void 0 !== t ? t : n();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        I = j.MESSAGES,
                        D = j.ASYNC_API_MAP,
                        S = j.SYNC_API_MAP,
                        A = function () {
                          function r () {}
                          function i (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(I.GETSTATE), '';
                            };
                          }
                          function e (a) {
                            this[D[a]] = function (e) {
                              e = e || r;
                              var t = this.findField(a, e),
                                n = i.call(this, a, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[S[e]] = function () {
                              return this.findField(e, r) || {};
                            };
                          }
                          Object.keys(D).forEach(e, this), Object.keys(S).forEach(t, this);
                        },
                        k = j.ASYNC_API_MAP,
                        M = function () {
                          Object.keys(k).forEach(function (t) {
                            this[k[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        R =
                          (((b = (y = { exports: {} }).exports).isObjectEmpty = function (e) {
                            return e === Object(e) && 0 === Object.keys(e).length;
                          }),
                          (b.isValueEmpty = function (e) {
                            return '' === e || b.isObjectEmpty(e);
                          }),
                          (b.getIeVersion = function () {
                            if (document.documentMode) return document.documentMode;
                            for (var e = 7; 4 < e; e--) {
                              var t = document.createElement('div');
                              if (
                                ((t.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->'),
                                t.getElementsByTagName('span').length)
                              )
                                return (t = null), e;
                              t = null;
                            }
                            return null;
                          }),
                          (b.encodeAndBuildRequest = function (e, t) {
                            return e.map(encodeURIComponent).join(t);
                          }),
                          (b.isObject = function (e) {
                            return null !== e && 'object' === L(e) && !1 === Array.isArray(e);
                          }),
                          (b.defineGlobalNamespace = function () {
                            return (
                              (window.adobe = b.isObject(window.adobe) ? window.adobe : {}),
                              window.adobe
                            );
                          }),
                          (b.pluck = function (n, e) {
                            return e.reduce(function (e, t) {
                              return n[t] && (e[t] = n[t]), e;
                            }, Object.create(null));
                          }),
                          (b.parseOptOut = function (e, t, n) {
                            t ||
                              ((t = n),
                              e.d_optout &&
                                e.d_optout instanceof Array &&
                                (t = e.d_optout.join(',')));
                            var a = parseInt(e.d_ottl, 10);
                            return isNaN(a) && (a = 7200), { optOut: t, d_ottl: a };
                          }),
                          (b.normalizeBoolean = function (e) {
                            var t = e;
                            return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                          }),
                          y.exports),
                        O =
                          (R.isObjectEmpty,
                          R.isValueEmpty,
                          R.getIeVersion,
                          R.encodeAndBuildRequest,
                          R.isObject,
                          R.defineGlobalNamespace,
                          R.pluck,
                          R.parseOptOut,
                          R.normalizeBoolean,
                          t),
                        T = j.MESSAGES,
                        E = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        N = function (i, o) {
                          (this.parse = function (e) {
                            try {
                              var n = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (n[E[t]] = 2 !== t ? e : JSON.parse(e));
                                }),
                                n
                              );
                            } catch (e) {}
                          }),
                            (this.isInvalid = function (e) {
                              var t = this.parse(e);
                              if (!t || Object.keys(t).length < 2) return !0;
                              var n = i !== t.orgID,
                                a = !o || e.origin !== o,
                                r = -1 === Object.keys(T).indexOf(t.prefix);
                              return n || a || r;
                            }),
                            (this.send = function (e, t, n) {
                              var a = t + '|' + i;
                              n && n === Object(n) && (a += '|' + JSON.stringify(n));
                              try {
                                e.postMessage(a, o);
                              } catch (i) {}
                            });
                        },
                        P = j.MESSAGES,
                        w = function (e, t, n, a) {
                          function r (e) {
                            Object.assign(f, e);
                          }
                          function i (e) {
                            Object.assign(f.state, e),
                              Object.assign(f.state.ALLFIELDS, e),
                              f.callbackRegistry.executeAll(f.state);
                          }
                          function o (e) {
                            if (!h.isInvalid(e)) {
                              m = !1;
                              var t = h.parse(e);
                              f.setStateAndPublish(t.state);
                            }
                          }
                          function s (e) {
                            !m && g && ((m = !0), h.send(a, e));
                          }
                          function l () {
                            r(new C(n._generateID)),
                              f.getMarketingCloudVisitorID(),
                              f.callbackRegistry.executeAll(f.state, !0),
                              x.removeEventListener('message', c);
                          }
                          function c (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (m = !1),
                                x.clearTimeout(f._handshakeTimeout),
                                x.removeEventListener('message', c),
                                r(new A(f)),
                                x.addEventListener('message', o),
                                f.setStateAndPublish(t.state),
                                f.callbackRegistry.hasCallbacks() && s(P.GETSTATE);
                            }
                          }
                          function u () {
                            g && postMessage
                              ? (x.addEventListener('message', c),
                                s(P.HANDSHAKE),
                                (f._handshakeTimeout = setTimeout(l, 250)))
                              : l();
                          }
                          function d () {
                            x.s_c_in || ((x.s_c_il = []), (x.s_c_in = 0)),
                              (f._c = 'Visitor'),
                              (f._il = x.s_c_il),
                              (f._in = x.s_c_in),
                              (f._il[f._in] = f),
                              x.s_c_in++;
                          }
                          function p () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof n[e] &&
                                (f[e] = function () {});
                            }
                            Object.keys(n).forEach(e),
                              (f.getSupplementalDataID = n.getSupplementalDataID),
                              (f.isAllowed = function () {
                                return !0;
                              });
                          }
                          var f = this,
                            g = t.whitelistParentDomain;
                          (f.state = { ALLFIELDS: {} }),
                            (f.version = n.version),
                            (f.marketingCloudOrgID = e),
                            (f.cookieDomain = n.cookieDomain || '');
                          var m = !(f._instanceType = 'child'),
                            h = new N(e, g);
                          (f.callbackRegistry = O()),
                            (f.init = function () {
                              d(), p(), r(new M(f)), u();
                            }),
                            (f.findField = function (e, t) {
                              if (void 0 !== f.state[e]) return t(f.state[e]), f.state[e];
                            }),
                            (f.messageParent = s),
                            (f.setStateAndPublish = i);
                        },
                        F = j.MESSAGES,
                        U = j.ALL_APIS,
                        B = j.ASYNC_API_MAP,
                        H = j.FIELDGROUP_TO_FIELD,
                        G = function (r, a) {
                          function i () {
                            var a = {};
                            return (
                              Object.keys(U).forEach(function (e) {
                                var t = U[e],
                                  n = r[t]();
                                R.isValueEmpty(n) || (a[e] = n);
                              }),
                              a
                            );
                          }
                          function o () {
                            var n = [];
                            return (
                              r._loading &&
                                Object.keys(r._loading).forEach(function (e) {
                                  if (r._loading[e]) {
                                    var t = H[e];
                                    n.push(t);
                                  }
                                }),
                              n.length ? n : null
                            );
                          }
                          function t (n) {
                            return function a () {
                              var e = o();
                              if (e) {
                                var t = B[e[0]];
                                r[t](a, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = i();
                            a.send(e, t, n);
                          }
                          function s (e) {
                            c(e), n(e, F.HANDSHAKE);
                          }
                          function l (e) {
                            t(function () {
                              n(e, F.PARENTSTATE);
                            })();
                          }
                          function c (t) {
                            function e (e) {
                              n.call(r, e),
                                a.send(t, F.PARENTSTATE, { CUSTOMERIDS: r.getCustomerIDs() });
                            }
                            var n = r.setCustomerIDs;
                            r.setCustomerIDs = e;
                          }
                          return function (e) {
                            a.isInvalid(e) ||
                              (a.parse(e).prefix === F.HANDSHAKE ? s : l)(e.source);
                          };
                        },
                        q = function (a, n) {
                          function r (t) {
                            return function (e) {
                              (i[t] = e), ++o === s && n(i);
                            };
                          }
                          var i = {},
                            o = 0,
                            s = Object.keys(a).length;
                          Object.keys(a).forEach(function (e) {
                            var t = a[e];
                            if (t.fn) {
                              var n = t.args || [];
                              n.unshift(r(e)), t.fn.apply(t.context || null, n);
                            }
                          });
                        },
                        Y = {
                          get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'),
                              n = t.indexOf(';' + e + '='),
                              a = n < 0 ? n : t.indexOf(';', n + 1);
                            return n < 0
                              ? ''
                              : decodeURIComponent(
                                  t.substring(n + 2 + e.length, a < 0 ? t.length : a)
                                );
                          },
                          set: function (e, t, n) {
                            var a = c(n, 'cookieLifetime'),
                              r = c(n, 'expires'),
                              i = c(n, 'domain'),
                              o = c(n, 'secure') ? 'Secure' : '';
                            if (r && 'SESSION' !== a && 'NONE' !== a) {
                              var s = '' !== t ? parseInt(a || 0, 10) : -60;
                              if (s) (r = new Date()).setTime(r.getTime() + 1000 * s);
                              else if (1 === r) {
                                var l = (r = new Date()).getYear();
                                r.setYear(l + 2 + (l < 1900 ? 1900 : 0));
                              }
                            } else r = 0;
                            return e && 'NONE' !== a
                              ? ((document.cookie =
                                  encodeURIComponent(e) +
                                  '=' +
                                  encodeURIComponent(t) +
                                  '; path=/;' +
                                  (r ? ' expires=' + r.toGMTString() + ';' : '') +
                                  (i ? ' domain=' + i + ';' : '') +
                                  o),
                                this.get(e) === t)
                              : 0;
                          },
                          remove: function (e, t) {
                            var n = c(t, 'domain');
                            (n = n ? ' domain=' + n + ';' : ''),
                              (document.cookie =
                                encodeURIComponent(e) +
                                '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                n);
                          },
                        },
                        W = function (e) {
                          var t;
                          !e && x.location && (e = x.location.hostname);
                          var n,
                            a = (t = e).split('.');
                          for (n = a.length - 2; 0 <= n; n--)
                            if (
                              ((t = a.slice(n).join('.')), Y.set('test', 'cookie', { domain: t }))
                            )
                              return Y.remove('test', { domain: t }), t;
                          return '';
                        },
                        X = {
                          compare: n,
                          isLessThan: function (e, t) {
                            return n(e, t) < 0;
                          },
                          areVersionsDifferent: function (e, t) {
                            return 0 !== n(e, t);
                          },
                          isGreaterThan: function (e, t) {
                            return 0 < n(e, t);
                          },
                          isEqual: function (e, t) {
                            return 0 === n(e, t);
                          },
                        },
                        J = !!x.postMessage,
                        z = {
                          postMessage: function (e, t, n) {
                            var a = 1;
                            t &&
                              (J
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + a++ + '&' + e));
                          },
                          receiveMessage: function (t, n) {
                            var e;
                            try {
                              J &&
                                (t &&
                                  (e = function (e) {
                                    if (
                                      ('string' == typeof n && e.origin !== n) ||
                                      ('[object Function]' === Object.prototype.toString.call(n) &&
                                        !1 === n(e.origin))
                                    )
                                      return !1;
                                    t(e);
                                  }),
                                x.addEventListener
                                  ? x[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : x[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        K = function (e) {
                          var t,
                            n,
                            a = '0123456789',
                            r = '',
                            i = '',
                            o = 8,
                            s = 10,
                            l = 10;
                          if (1 == e) {
                            for (a += 'ABCDEF', t = 0; t < 16; t++)
                              (n = Math.floor(Math.random() * o)),
                                (r += a.substring(n, n + 1)),
                                (n = Math.floor(Math.random() * o)),
                                (i += a.substring(n, n + 1)),
                                (o = 16);
                            return r + '-' + i;
                          }
                          for (t = 0; t < 19; t++)
                            (n = Math.floor(Math.random() * s)),
                              (r += a.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (s = 3)
                                : (1 == t || 2 == t) && 10 != s && n < 2
                                ? (s = 10)
                                : 2 < t && (s = 10),
                              (n = Math.floor(Math.random() * l)),
                              (i += a.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (l = 3)
                                : (1 == t || 2 == t) && 10 != l && n < 2
                                ? (l = 10)
                                : 2 < t && (l = 10);
                          return r + i;
                        },
                        Q = function (a) {
                          const $___old_4627ed6658de67c3 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_200b4adbdbfebcb6 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_4627ed6658de67c3)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            if ($___old_200b4adbdbfebcb6)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            return function () {
                              return {
                                corsMetadata:
                                  ((e = 'none'),
                                  (t = !0),
                                  'undefined' != typeof XMLHttpRequest &&
                                    XMLHttpRequest === Object(XMLHttpRequest) &&
                                    ('withCredentials' in new XMLHttpRequest()
                                      ? (e = 'XMLHttpRequest')
                                      : 'undefined' != typeof XDomainRequest &&
                                        XDomainRequest === Object(XDomainRequest) &&
                                        (t = !1),
                                    0 <
                                      Object.prototype.toString
                                        .call(x.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  return 'none' === this.corsMetadata.corsType
                                    ? null
                                    : new x[this.corsMetadata.corsType]();
                                },
                                fireCORS: function (i, e) {
                                  function t (e) {
                                    var t;
                                    try {
                                      if ((t = JSON.parse(e)) !== Object(t))
                                        return void o.handleCORSError(
                                          i,
                                          null,
                                          'Response is not JSON'
                                        );
                                    } catch (e) {
                                      return void o.handleCORSError(
                                        i,
                                        e,
                                        'Error parsing response as JSON'
                                      );
                                    }
                                    try {
                                      for (var n = i.callback, a = x, r = 0; r < n.length; r++)
                                        a = a[n[r]];
                                      a(t);
                                    } catch (e) {
                                      o.handleCORSError(i, e, 'Error forming callback function');
                                    }
                                  }
                                  var o = this;
                                  e && (i.loadErrorHandler = e);
                                  try {
                                    var n = this.getCORSInstance();
                                    n.open('get', i.corsUrl + '&ts=' + new Date().getTime(), !0),
                                      'XMLHttpRequest' === this.corsMetadata.corsType &&
                                        ((n.withCredentials = !0),
                                        (n.timeout = a.loadTimeout),
                                        n.setRequestHeader(
                                          'Content-Type',
                                          'application/x-www-form-urlencoded'
                                        ),
                                        (n.onreadystatechange = function () {
                                          4 === this.readyState &&
                                            200 === this.status &&
                                            t(this.responseText);
                                        })),
                                      (n.onerror = function (e) {
                                        o.handleCORSError(i, e, 'onerror');
                                      }),
                                      (n.ontimeout = function (e) {
                                        o.handleCORSError(i, e, 'ontimeout');
                                      }),
                                      n.send(),
                                      a._log.requests.push(i.corsUrl);
                                  } catch (a) {
                                    this.handleCORSError(i, a, 'try-catch');
                                  }
                                },
                                handleCORSError: function (e, t, n) {
                                  a.CORSErrors.push({ corsData: e, error: t, description: n }),
                                    e.loadErrorHandler &&
                                      ('ontimeout' === n
                                        ? e.loadErrorHandler(!0)
                                        : e.loadErrorHandler(!1));
                                },
                              };
                              var e, t;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_4627ed6658de67c3)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_4627ed6658de67c3
                              ));
                            if ($___old_200b4adbdbfebcb6)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_200b4adbdbfebcb6
                              ));
                          }
                        },
                        $ = {
                          POST_MESSAGE_ENABLED: !!x.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        Z = function (g, t) {
                          var r = x.document;
                          return {
                            THROTTLE_START: 30000,
                            MAX_SYNCS_LENGTH: 649,
                            throttleTimerSet: !1,
                            id: null,
                            onPagePixels: [],
                            iframeHost: null,
                            getIframeHost: function (e) {
                              if ('string' == typeof e) {
                                var t = e.split('/');
                                return t[0] + '//' + t[2];
                              }
                            },
                            subdomain: null,
                            url: null,
                            getUrl: function () {
                              var e,
                                t = 'http://fast.',
                                n =
                                  '?d_nsid=' +
                                  g.idSyncContainerID +
                                  '#' +
                                  encodeURIComponent(r.location.origin);
                              return (
                                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                                g.loadSSL &&
                                  (t = g.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                                (e = t + this.subdomain + '.demdex.net/dest5.html' + n),
                                (this.iframeHost = this.getIframeHost(e)),
                                (this.id =
                                  'destination_publishing_iframe_' +
                                  this.subdomain +
                                  '_' +
                                  g.idSyncContainerID),
                                e
                              );
                            },
                            checkDPIframeSrc: function () {
                              var e =
                                '?d_nsid=' +
                                g.idSyncContainerID +
                                '#' +
                                encodeURIComponent(r.location.href);
                              'string' == typeof g.dpIframeSrc &&
                                g.dpIframeSrc.length &&
                                ((this.id =
                                  'destination_publishing_iframe_' +
                                  (g._subdomain || this.subdomain || new Date().getTime()) +
                                  '_' +
                                  g.idSyncContainerID),
                                (this.iframeHost = this.getIframeHost(g.dpIframeSrc)),
                                (this.url = g.dpIframeSrc + e));
                            },
                            idCallNotProcesssed: null,
                            doAttachIframe: !1,
                            startedAttachingIframe: !1,
                            iframeHasLoaded: null,
                            iframeIdChanged: null,
                            newIframeCreated: null,
                            originalIframeHasLoadedAlready: null,
                            iframeLoadedCallbacks: [],
                            regionChanged: !1,
                            timesRegionChanged: 0,
                            sendingMessages: !1,
                            messages: [],
                            messagesPosted: [],
                            messagesReceived: [],
                            messageSendingInterval: $.POST_MESSAGE_ENABLED ? null : 100,
                            onPageDestinationsFired: [],
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            canSetThirdPartyCookies: !0,
                            receivedThirdPartyCookiesNotification: !1,
                            readyToAttachIframePreliminary: function () {
                              return !(
                                g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                g.idSyncDisable3rdPartySyncing ||
                                g.disableThirdPartyCookies ||
                                g.disableThirdPartyCalls
                              );
                            },
                            readyToAttachIframe: function () {
                              return (
                                this.readyToAttachIframePreliminary() &&
                                (this.doAttachIframe || g._doAttachIframe) &&
                                ((this.subdomain && 'nosubdomainreturned' !== this.subdomain) ||
                                  g._subdomain) &&
                                this.url &&
                                !this.startedAttachingIframe
                              );
                            },
                            attachIframe: function () {
                              function e () {
                                ((a = r.createElement('iframe')).sandbox =
                                  'allow-scripts allow-same-origin'),
                                  (a.title = 'Adobe ID Syncing iFrame'),
                                  (a.id = n.id),
                                  (a.name = n.id + '_name'),
                                  (a.style.cssText = 'display: none; width: 0; height: 0;'),
                                  (a.src = n.url),
                                  (n.newIframeCreated = !0),
                                  t(),
                                  r.body.appendChild(a);
                              }
                              function t (e) {
                                a.addEventListener('load', function () {
                                  (a.className = 'aamIframeLoaded'),
                                    (n.iframeHasLoaded = !0),
                                    n.fireIframeLoadedCallbacks(e),
                                    n.requestToProcess();
                                });
                              }
                              this.startedAttachingIframe = !0;
                              var n = this,
                                a = r.getElementById(this.id);
                              a
                                ? 'IFRAME' !== a.nodeName
                                  ? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
                                  : ((this.newIframeCreated = !1),
                                    'aamIframeLoaded' !== a.className
                                      ? ((this.originalIframeHasLoadedAlready = !1),
                                        t(
                                          "The destination publishing iframe already exists from a different library, but hadn't loaded yet."
                                        ))
                                      : ((this.originalIframeHasLoadedAlready = !0),
                                        (this.iframeHasLoaded = !0),
                                        (this.iframe = a),
                                        this.fireIframeLoadedCallbacks(
                                          'The destination publishing iframe already exists from a different library, and had loaded alresady.'
                                        ),
                                        this.requestToProcess()))
                                : e(),
                                (this.iframe = a);
                            },
                            fireIframeLoadedCallbacks: function (t) {
                              this.iframeLoadedCallbacks.forEach(function (e) {
                                'function' == typeof e &&
                                  e({
                                    message:
                                      t ||
                                      'The destination publishing iframe was attached and loaded successfully.',
                                  });
                              }),
                                (this.iframeLoadedCallbacks = []);
                            },
                            requestToProcess: function (e) {
                              function t () {
                                a.jsonForComparison.push(e),
                                  a.jsonWaiting.push(e),
                                  a.processSyncOnPage(e);
                              }
                              var n,
                                a = this;
                              if (e === Object(e) && e.ibs)
                                if (
                                  ((n = JSON.stringify(e.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var r,
                                    i,
                                    o,
                                    s = !1;
                                  for (r = 0, i = this.jsonForComparison.length; r < i; r++)
                                    if (
                                      ((o = this.jsonForComparison[r]),
                                      n === JSON.stringify(o.ibs || []))
                                    ) {
                                      s = !0;
                                      break;
                                    }
                                  s ? this.jsonDuplicates.push(e) : t();
                                } else t();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !$.POST_MESSAGE_ENABLED ||
                                  this.iframeHasLoaded) &&
                                this.jsonWaiting.length
                              ) {
                                var l = this.jsonWaiting.shift();
                                this.process(l), this.requestToProcess();
                              }
                              g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                !this.iframeHasLoaded ||
                                !this.messages.length ||
                                this.sendingMessages ||
                                (this.throttleTimerSet ||
                                  ((this.throttleTimerSet = !0),
                                  setTimeout(function () {
                                    a.messageSendingInterval = $.POST_MESSAGE_ENABLED ? null : 150;
                                  }, this.THROTTLE_START)),
                                (this.sendingMessages = !0),
                                this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (e, t) {
                              var n = g._getField('MCAAMLH'),
                                a = e.d_region || e.dcs_region;
                              return (
                                n
                                  ? a &&
                                    (g._setFieldExpire('MCAAMLH', t),
                                    g._setField('MCAAMLH', a),
                                    parseInt(n, 10) !== a &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      g._setField('MCSYNCSOP', ''),
                                      g._setField('MCSYNCS', ''),
                                      (n = a)))
                                  : (n = a) &&
                                    (g._setFieldExpire('MCAAMLH', t), g._setField('MCAAMLH', n)),
                                n || (n = ''),
                                n
                              );
                            },
                            processSyncOnPage: function (e) {
                              var t, n, a, r;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (a = 0; a < n; a++)
                                  (r = t[a]).syncOnPage &&
                                    this.checkFirstPartyCookie(r, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                n,
                                a,
                                r,
                                i,
                                o = encodeURIComponent,
                                s = !1;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (s = !0, a = 0; a < n; a++)
                                  (r = t[a]),
                                    (i = [
                                      o('ibs'),
                                      o(r.id || ''),
                                      o(r.tag || ''),
                                      R.encodeAndBuildRequest(r.url || [], ','),
                                      o(r.ttl || ''),
                                      '',
                                      '',
                                      r.fireURLSync ? 'true' : 'false',
                                    ]),
                                    r.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(i.join('|'))
                                        : r.fireURLSync &&
                                          this.checkFirstPartyCookie(r, i.join('|')));
                              s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, n) {
                              var a = 'syncOnPage' === n,
                                r = a ? 'MCSYNCSOP' : 'MCSYNCS';
                              g._readVisitor();
                              var i,
                                o,
                                s = g._getField(r),
                                l = !1,
                                c = !1,
                                u = Math.ceil(new Date().getTime() / $.MILLIS_PER_DAY);
                              s
                                ? ((i = s.split('*')),
                                  (l = (o = this.pruneSyncData(i, e.id, u)).dataPresent),
                                  (c = o.dataValid),
                                  (l && c) || this.fireSync(a, e, t, i, r, u))
                                : ((i = []), this.fireSync(a, e, t, i, r, u));
                            },
                            pruneSyncData: function (e, t, n) {
                              var a,
                                r,
                                i,
                                o = !1,
                                s = !1;
                              for (r = 0; r < e.length; r++)
                                (a = e[r]),
                                  (i = parseInt(a.split('-')[1], 10)),
                                  a.match('^' + t + '-')
                                    ? ((o = !0), n < i ? (s = !0) : (e.splice(r, 1), r--))
                                    : i <= n && (e.splice(r, 1), r--);
                              return { dataPresent: o, dataValid: s };
                            },
                            manageSyncsSize: function (e) {
                              if (e.join('*').length > this.MAX_SYNCS_LENGTH)
                                for (
                                  e.sort(function (e, t) {
                                    return (
                                      parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10)
                                    );
                                  });
                                  e.join('*').length > this.MAX_SYNCS_LENGTH;

                                )
                                  e.shift();
                            },
                            fireSync: function (e, t, n, a, u, r) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var i,
                                    o,
                                    s,
                                    l,
                                    c = t.url,
                                    p = g.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, o = c.length; i < o; i++) {
                                    (s = c[i]), (l = /^\/\//.test(s));
                                    var f = new Image();
                                    f.addEventListener(
                                      'load',
                                      (function (o, s, l, c) {
                                        return function () {
                                          (d.onPagePixels[o] = null), g._readVisitor();
                                          var e,
                                            t,
                                            n,
                                            a,
                                            r = g._getField(u),
                                            i = [];
                                          if (r)
                                            for (t = 0, n = (e = r.split('*')).length; t < n; t++)
                                              (a = e[t]).match('^' + s.id + '-') || i.push(a);
                                          d.setSyncTrackingData(i, s, l, c);
                                        };
                                      })(this.onPagePixels.length, t, u, r)
                                    ),
                                      (f.src = (l ? p : '') + s),
                                      this.onPagePixels.push(f);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(a, t, u, r);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                g._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push(($.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, n, a) {
                              e.push(t.id + '-' + (a + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                g._setField(n, e.join('*'));
                            },
                            sendMessages: function () {
                              var e,
                                t = this,
                                n = '',
                                a = encodeURIComponent;
                              this.regionChanged &&
                                ((n = a('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                                this.messages.length
                                  ? $.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        n +
                                        a('---destpub-combined---') +
                                        this.messages.join('%01')),
                                      this.postMessage(e),
                                      (this.messages = []),
                                      (this.sendingMessages = !1))
                                    : ((e = this.messages.shift()),
                                      this.postMessage(n + e),
                                      setTimeout(function () {
                                        t.sendMessages();
                                      }, this.messageSendingInterval))
                                  : (this.sendingMessages = !1);
                            },
                            postMessage: function (e) {
                              z.postMessage(e, this.url, this.iframe.contentWindow),
                                this.messagesPosted.push(e);
                            },
                            receiveMessage: function (e) {
                              var t,
                                n = /^---destpub-to-parent---/;
                              'string' == typeof e &&
                                n.test(e) &&
                                ('canSetThirdPartyCookies' ===
                                  (t = e.replace(n, '').split('|'))[0] &&
                                  ((this.canSetThirdPartyCookies = 'true' === t[1]),
                                  (this.receivedThirdPartyCookiesNotification = !0),
                                  this.requestToProcess()),
                                this.messagesReceived.push(e));
                            },
                            processIDCallData: function (e) {
                              (null == this.url ||
                                (e.subdomain && 'nosubdomainreturned' === this.subdomain)) &&
                                ('string' == typeof g._subdomain && g._subdomain.length
                                  ? (this.subdomain = g._subdomain)
                                  : (this.subdomain = e.subdomain || ''),
                                (this.url = this.getUrl())),
                                e.ibs instanceof Array &&
                                  e.ibs.length &&
                                  (this.doAttachIframe = !0),
                                this.readyToAttachIframe() &&
                                  (g.idSyncAttachIframeOnWindowLoad
                                    ? (t.windowLoaded ||
                                        'complete' === r.readyState ||
                                        'loaded' === r.readyState) &&
                                      this.attachIframe()
                                    : this.attachIframeASAP()),
                                'function' == typeof g.idSyncIDCallResult
                                  ? g.idSyncIDCallResult(e)
                                  : this.requestToProcess(e),
                                'function' == typeof g.idSyncAfterIDCallResult &&
                                  g.idSyncAfterIDCallResult(e);
                            },
                            canMakeSyncIDCall: function (e, t) {
                              return (
                                g._forceSyncIDCall || !e || t - e > $.DAYS_BETWEEN_SYNC_ID_CALLS
                              );
                            },
                            attachIframeASAP: function () {
                              function e () {
                                t.startedAttachingIframe ||
                                  (r.body ? t.attachIframe() : setTimeout(e, 30));
                              }
                              var t = this;
                              e();
                            },
                          };
                        },
                        ee = {
                          audienceManagerServer: {},
                          audienceManagerServerSecure: {},
                          cookieDomain: {},
                          cookieLifetime: {},
                          cookieName: {},
                          doesOptInApply: {},
                          disableThirdPartyCalls: {},
                          discardTrackingServerECID: {},
                          idSyncAfterIDCallResult: {},
                          idSyncAttachIframeOnWindowLoad: {},
                          idSyncContainerID: {},
                          idSyncDisable3rdPartySyncing: {},
                          disableThirdPartyCookies: {},
                          idSyncDisableSyncs: {},
                          disableIdSyncs: {},
                          idSyncIDCallResult: {},
                          idSyncSSLUseAkamai: {},
                          isCoopSafe: {},
                          isIabContext: {},
                          isOptInStorageEnabled: {},
                          loadSSL: {},
                          loadTimeout: {},
                          marketingCloudServer: {},
                          marketingCloudServerSecure: {},
                          optInCookieDomain: {},
                          optInStorageExpiry: {},
                          overwriteCrossDomainMCIDAndAID: {},
                          preOptInApprovals: {},
                          previousPermissions: {},
                          resetBeforeVersion: {},
                          sdidParamExpiry: {},
                          serverState: {},
                          sessionCookieName: {},
                          secureCookie: {},
                          takeTimeoutMetrics: {},
                          trackingServer: {},
                          trackingServerSecure: {},
                          whitelistIframeDomains: {},
                          whitelistParentDomain: {},
                        },
                        te = {
                          getConfigNames: function () {
                            return Object.keys(ee);
                          },
                          getConfigs: function () {
                            return ee;
                          },
                          normalizeConfig: function (e) {
                            return 'function' != typeof e ? e : e();
                          },
                        },
                        ne = function (e) {
                          var r = {};
                          return (
                            (e.on = function (e, t, n) {
                              if (!t || 'function' != typeof t)
                                throw new Error('[ON] Callback should be a function.');
                              r.hasOwnProperty(e) || (r[e] = []);
                              var a = r[e].push({ callback: t, context: n }) - 1;
                              return function () {
                                r[e].splice(a, 1), r[e].length || delete r[e];
                              };
                            }),
                            (e.off = function (e, t) {
                              r.hasOwnProperty(e) &&
                                (r[e] = r[e].filter(function (e) {
                                  if (e.callback !== t) return e;
                                }));
                            }),
                            (e.publish = function (e) {
                              if (r.hasOwnProperty(e)) {
                                var t = [].slice.call(arguments, 1);
                                r[e].slice(0).forEach(function (e) {
                                  e.callback.apply(e.context, t);
                                });
                              }
                            }),
                            e.publish
                          );
                        },
                        ae = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                        re = {
                          AAM: 'aam',
                          ADCLOUD: 'adcloud',
                          ANALYTICS: 'aa',
                          CAMPAIGN: 'campaign',
                          ECID: 'ecid',
                          LIVEFYRE: 'livefyre',
                          TARGET: 'target',
                          VIDEO_ANALYTICS: 'videoaa',
                        },
                        ie = (e((m = {}), re.AAM, 565), e(m, re.ECID, 565), m),
                        oe = (e((h = {}), re.AAM, [1, 2, 5]), e(h, re.ECID, [1, 2, 5]), h),
                        se =
                          ((v = re),
                          Object.keys(v).map(function (e) {
                            return v[e];
                          })),
                        le = function () {
                          var a = {};
                          return (
                            (a.callbacks = Object.create(null)),
                            (a.add = function (e, t) {
                              if (!l(t))
                                throw new Error(
                                  '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                                );
                              a.callbacks[e] = a.callbacks[e] || [];
                              var n = a.callbacks[e].push(t) - 1;
                              return function () {
                                a.callbacks[e].splice(n, 1);
                              };
                            }),
                            (a.execute = function (e, t) {
                              if (a.callbacks[e]) {
                                t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                try {
                                  for (; a.callbacks[e].length; ) {
                                    var n = a.callbacks[e].shift();
                                    'function' == typeof n
                                      ? n.apply(null, t)
                                      : n instanceof Array && n[1].apply(n[0], t);
                                  }
                                  delete a.callbacks[e];
                                } catch (a) {}
                              }
                            }),
                            (a.executeAll = function (n, e) {
                              (e || (n && !s(n))) &&
                                Object.keys(a.callbacks).forEach(function (e) {
                                  var t = void 0 !== n[e] ? n[e] : '';
                                  a.execute(e, t);
                                }, a);
                            }),
                            (a.hasCallbacks = function () {
                              return Boolean(Object.keys(a.callbacks).length);
                            }),
                            a
                          );
                        },
                        ce = function () {},
                        ue = function (e) {
                          var t = window.console;
                          return !!t && 'function' == typeof t[e];
                        },
                        de = function (a, r, e) {
                          return e()
                            ? function () {
                                if (ue(a)) {
                                  for (
                                    var e = arguments.length, t = new Array(e), n = 0;
                                    n < e;
                                    n++
                                  )
                                    t[n] = arguments[n];
                                  console[a].apply(console, [r].concat(t));
                                }
                              }
                            : ce;
                        },
                        pe = new a('[ADOBE OPT-IN]'),
                        fe = function (e, t) {
                          return L(e) === t;
                        },
                        ge = function (e, t) {
                          return e instanceof Array ? e : fe(e, 'string') ? [e] : t || [];
                        },
                        me = function (t) {
                          var e = Object.keys(t);
                          return (
                            !!e.length &&
                            e.every(function (e) {
                              return !0 === t[e];
                            })
                          );
                        },
                        he = function (e) {
                          return (
                            !(!e || ye(e)) &&
                            ge(e).every(function (e) {
                              return -1 < se.indexOf(e);
                            })
                          );
                        },
                        ve = function (e, n) {
                          return e.reduce(function (e, t) {
                            return (e[t] = n), e;
                          }, {});
                        },
                        be = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        ye = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        _e = function (e) {
                          if (De(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        Ce = function (e) {
                          return void 0 === e || (De(e) ? he(Object.keys(e)) : Ie(e));
                        },
                        Ie = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && fe(e, 'string') && he(Object.keys(t));
                          } catch (e) {
                            return !1;
                          }
                        },
                        De = function (e) {
                          return null !== e && fe(e, 'object') && !1 === Array.isArray(e);
                        },
                        Se = function () {},
                        Ae = function (e) {
                          return fe(e, 'function') ? e() : e;
                        },
                        ke = function (e, t) {
                          Ce(e) || pe.error(''.concat(t));
                        },
                        Me = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        Oe = function (e) {
                          return Me(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        Te = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              n = t.command,
                              a = t.params,
                              r = void 0 === a ? {} : a,
                              i = t.callback,
                              o = void 0 === i ? Se : i;
                            if (!n || -1 === n.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var s = n.split('.'),
                                l = d[s[0]],
                                c = s[1];
                              if (!l || 'function' != typeof l[c])
                                throw new Error('Make sure the plugin and API name exist.');
                              var u = Object.assign(r, { callback: o });
                              l[c].call(l, u);
                            } catch (d) {
                              pe.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (u.prototype = Object.create(Error.prototype)),
                        (u.prototype.constructor = u);
                      var Ee = 'fetchPermissions',
                        Pe = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = re), (d.TimeoutError = u);
                      var we = Object.freeze({ OptIn: d, IabPlugin: g }),
                        Ve = function (d, p) {
                          d.publishDestinations = function (e, t, n) {
                            var a = t,
                              r = n;
                            try {
                              r = 'function' == typeof r ? r : e.callback;
                            } catch (d) {
                              r = function () {};
                            }
                            var i = p;
                            if (i.readyToAttachIframePreliminary()) {
                              if ('string' == typeof e) {
                                if (!e.length)
                                  return void r({ error: 'subdomain is not a populated string.' });
                                if (!(a instanceof Array && a.length))
                                  return void r({ error: 'messages is not a populated array.' });
                                var o = !1;
                                if (
                                  (a.forEach(function (e) {
                                    'string' == typeof e &&
                                      e.length &&
                                      (i.addMessage(e), (o = !0));
                                  }),
                                  !o)
                                )
                                  return void r({
                                    error: 'None of the messages are populated strings.',
                                  });
                              } else {
                                if (!R.isObject(e))
                                  return void r({ error: 'Invalid parameters passed.' });
                                var s = e;
                                if ('string' != typeof (e = s.subdomain) || !e.length)
                                  return void r({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var l = s.urlDestinations;
                                if (!(l instanceof Array && l.length))
                                  return void r({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var c = [];
                                l.forEach(function (e) {
                                  R.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && i.addMessage(e.message)
                                      : c.push(e));
                                }),
                                  (function u () {
                                    c.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = c.shift();
                                        (e.src = t.url), i.onPageDestinationsFired.push(t), u();
                                      }, 100);
                                  })();
                              }
                              i.iframe
                                ? (r({
                                    message:
                                      'The destination publishing iframe is already attached and loaded.',
                                  }),
                                  i.requestToProcess())
                                : !d.subdomain && d._getField('MCMID')
                                ? ((i.subdomain = e),
                                  (i.doAttachIframe = !0),
                                  (i.url = i.getUrl()),
                                  i.readyToAttachIframe()
                                    ? (i.iframeLoadedCallbacks.push(function (e) {
                                        r({
                                          message:
                                            'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                            (e.message || 'no result'),
                                        });
                                      }),
                                      i.attachIframe())
                                    : r({
                                        error:
                                          'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                      }))
                                : i.iframeLoadedCallbacks.push(function (e) {
                                    r({
                                      message:
                                        'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                        (e.message || 'no result'),
                                    });
                                  });
                            } else
                              r({
                                error:
                                  'The destination publishing iframe is disabled in the Visitor library.',
                              });
                          };
                        },
                        Le = function L (e) {
                          function t (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var n,
                              a,
                              r = Math.pow,
                              i = r(2, 32),
                              o = '',
                              s = [],
                              l = 8 * e.length,
                              c = (L.h = L.h || []),
                              u = (L.k = L.k || []),
                              d = u.length,
                              p = {},
                              f = 2;
                            d < 64;
                            f++
                          )
                            if (!p[f]) {
                              for (n = 0; n < 313; n += f) p[n] = f;
                              (c[d] = (r(f, 0.5) * i) | 0), (u[d++] = (r(f, 1 / 3) * i) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (n = 0; n < e.length; n++) {
                            if ((a = e.charCodeAt(n)) >> 8) return;
                            s[n >> 2] |= a << (((3 - n) % 4) * 8);
                          }
                          for (s[s.length] = (l / i) | 0, s[s.length] = l, a = 0; a < s.length; ) {
                            var g = s.slice(a, (a += 16)),
                              m = c;
                            for (c = c.slice(0, 8), n = 0; n < 64; n++) {
                              var h = g[n - 15],
                                v = g[n - 2],
                                b = c[0],
                                y = c[4],
                                _ =
                                  c[7] +
                                  (t(y, 6) ^ t(y, 11) ^ t(y, 25)) +
                                  ((y & c[5]) ^ (~y & c[6])) +
                                  u[n] +
                                  (g[n] =
                                    n < 16
                                      ? g[n]
                                      : (g[n - 16] +
                                          (t(h, 7) ^ t(h, 18) ^ (h >>> 3)) +
                                          g[n - 7] +
                                          (t(v, 17) ^ t(v, 19) ^ (v >>> 10))) |
                                        0);
                              (c = [
                                (_ +
                                  ((t(b, 2) ^ t(b, 13) ^ t(b, 22)) +
                                    ((b & c[1]) ^ (b & c[2]) ^ (c[1] & c[2])))) |
                                  0,
                              ].concat(c))[4] = (c[4] + _) | 0;
                            }
                            for (n = 0; n < 8; n++) c[n] = (c[n] + m[n]) | 0;
                          }
                          for (n = 0; n < 8; n++)
                            for (a = 3; a + 1; a--) {
                              var C = (c[n] >> (8 * a)) & 255;
                              o += (C < 16 ? 0 : '') + C.toString(16);
                            }
                          return o;
                        },
                        xe = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Le(e)),
                            e
                          );
                        },
                        je = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        Re = we.OptIn;
                      R.defineGlobalNamespace(), (window.adobe.OptInCategories = Re.Categories);
                      var Ne = function (a, n, e) {
                        function t (e) {
                          var a = e;
                          return function (e) {
                            var t = e || b.location.href;
                            try {
                              var n = f._extractParamFromUri(t, a);
                              if (n) return P.parsePipeDelimetedKeyValues(n);
                            } catch (e) {}
                          };
                        }
                        function r (e) {
                          function t (e, t, n) {
                            e && e.match($.VALID_VISITOR_ID_REGEX) && (n === C && (v = !0), t(e));
                          }
                          t(e[C], f.setMarketingCloudVisitorID, C),
                            f._setFieldExpire(k, -1),
                            t(e[S], f.setAnalyticsVisitorID);
                        }
                        function i (e) {
                          (e = e || {}),
                            (f._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (f._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (f._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (f._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function o (e) {
                          function r (e, t, n) {
                            return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var n = t[0],
                              a = t[1];
                            return null != a && a !== M && (e = r(n, a, e)), e;
                          }
                          var n,
                            a = e.reduce(t, '');
                          return (
                            (n = (n = a) ? (n += '|') : n) + 'TS=' + P.getTimestampInSeconds()
                          );
                        }
                        function s (e) {
                          var t = e.minutesToLive,
                            n = '';
                          return (
                            (f.idSyncDisableSyncs || f.disableIdSyncs) &&
                              (n = n || 'Error: id syncs have been disabled'),
                            ('string' == typeof e.dpid && e.dpid.length) ||
                              (n = n || 'Error: config.dpid is empty'),
                            ('string' == typeof e.url && e.url.length) ||
                              (n = n || 'Error: config.url is empty'),
                            void 0 === t
                              ? (t = 20160)
                              : ((t = parseInt(t, 10)),
                                (isNaN(t) || t <= 0) &&
                                  (n =
                                    n ||
                                    'Error: config.minutesToLive needs to be a positive number')),
                            { error: n, ttl: t }
                          );
                        }
                        function l () {
                          return !(!f.configs.doesOptInApply || (g.optIn.isComplete && d()));
                        }
                        function d () {
                          return f.configs.isIabContext
                            ? g.optIn.isApproved(g.optIn.Categories.ECID) && h
                            : g.optIn.isApproved(g.optIn.Categories.ECID);
                        }
                        function c (e, t) {
                          if (((h = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies && (m = t.consentString), f.init(), p();
                        }
                        function u () {
                          g.optIn.isApproved(g.optIn.Categories.ECID) &&
                            (f.configs.isIabContext
                              ? g.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: c,
                                })
                              : (f.init(), p()));
                        }
                        function p () {
                          g.optIn.off('complete', u);
                        }
                        if (!e || e.split('').reverse().join('') !== a)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var f = this,
                          g = window.adobe,
                          m = '',
                          h = !1,
                          v = !1;
                        f.version = '4.4.0';
                        var b = x,
                          y = b.Visitor;
                        (y.version = f.version),
                          (y.AuthState = j.AUTH_STATE),
                          (y.OptOut = j.OPT_OUT),
                          b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0)),
                          (f._c = 'Visitor'),
                          (f._il = b.s_c_il),
                          (f._in = b.s_c_in),
                          (f._il[f._in] = f),
                          b.s_c_in++,
                          (f._instanceType = 'regular'),
                          (f._log = { requests: [] }),
                          (f.marketingCloudOrgID = a),
                          (f.cookieName = 'AMCV_' + a),
                          (f.sessionCookieName = 'AMCVS_' + a),
                          (f.cookieDomain = W()),
                          (f.loadSSL = 0 <= b.location.protocol.toLowerCase().indexOf('https')),
                          (f.loadTimeout = 30000),
                          (f.CORSErrors = []),
                          (f.marketingCloudServer = f.audienceManagerServer = 'dpm.demdex.net'),
                          (f.sdidParamExpiry = 30);
                        var _ = null,
                          C = 'MCMID',
                          I = 'MCIDTS',
                          D = 'A',
                          S = 'MCAID',
                          A = 'AAM',
                          k = 'MCAAMB',
                          M = 'NONE',
                          O = function (e) {
                            return !Object.prototype[e];
                          },
                          T = Q(f);
                        (f.FIELDS = j.FIELDS),
                          (f.cookieRead = function (e) {
                            return Y.get(e);
                          }),
                          (f.cookieWrite = function (e, t, n) {
                            var a = f.cookieLifetime ? ('' + f.cookieLifetime).toUpperCase() : '',
                              r = !1;
                            return (
                              f.configs &&
                                f.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (r = !0),
                              Y.set(e, '' + t, {
                                expires: n,
                                domain: f.cookieDomain,
                                cookieLifetime: a,
                                secure: r,
                              })
                            );
                          }),
                          (f.resetState = function (e) {
                            e ? f._mergeServerState(e) : i();
                          }),
                          (f._isAllowedDone = !1),
                          (f._isAllowedFlag = !1),
                          (f.isAllowed = function () {
                            return (
                              f._isAllowedDone ||
                                ((f._isAllowedDone = !0),
                                (f.cookieRead(f.cookieName) ||
                                  f.cookieWrite(f.cookieName, 'T', 1)) &&
                                  (f._isAllowedFlag = !0)),
                              'T' === f.cookieRead(f.cookieName) &&
                                f._helpers.removeCookie(f.cookieName),
                              f._isAllowedFlag
                            );
                          }),
                          (f.setMarketingCloudVisitorID = function (e) {
                            f._setMarketingCloudFields(e);
                          }),
                          (f._use1stPartyMarketingCloudServer = !1),
                          (f.getMarketingCloudVisitorID = function (e, t) {
                            f.marketingCloudServer &&
                              f.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (f._use1stPartyMarketingCloudServer = !0);
                            var n = f._getAudienceManagerURLData('_setMarketingCloudFields'),
                              a = n.url;
                            return f._getRemoteField(C, a, e, t, n);
                          }),
                          (f.getVisitorValues = function (e, t) {
                            var n = {
                                MCMID: {
                                  fn: f.getMarketingCloudVisitorID,
                                  args: [!0],
                                  context: f,
                                },
                                MCOPTOUT: { fn: f.isOptedOut, args: [void 0, !0], context: f },
                                MCAID: { fn: f.getAnalyticsVisitorID, args: [!0], context: f },
                                MCAAMLH: {
                                  fn: f.getAudienceManagerLocationHint,
                                  args: [!0],
                                  context: f,
                                },
                                MCAAMB: { fn: f.getAudienceManagerBlob, args: [!0], context: f },
                              },
                              a = t && t.length ? R.pluck(n, t) : n;
                            q(a, e);
                          }),
                          (f._currentCustomerIDs = {}),
                          (f._customerIDsHashChanged = !1),
                          (f._newCustomerIDsHash = ''),
                          (f.setCustomerIDs = function (e, t) {
                            function n () {
                              f._customerIDsHashChanged = !1;
                            }
                            if (!f.isOptedOut() && e) {
                              if (!R.isObject(e) || R.isObjectEmpty(e)) return !1;
                              var a, r, i;
                              for (a in (f._readVisitor(), e))
                                if (
                                  O(a) &&
                                  ((t = (r = e[a]).hasOwnProperty('hashType') ? r.hashType : t), r)
                                )
                                  if ('object' === L(r)) {
                                    var o = {};
                                    if (r.id) {
                                      if (t) {
                                        if (!(i = xe(je(r.id), t))) return;
                                        (r.id = i), (o.hashType = t);
                                      }
                                      o.id = r.id;
                                    }
                                    null != r.authState && (o.authState = r.authState),
                                      (f._currentCustomerIDs[a] = o);
                                  } else if (t) {
                                    if (!(i = xe(je(r), t))) return;
                                    f._currentCustomerIDs[a] = { id: i, hashType: t };
                                  } else f._currentCustomerIDs[a] = { id: r };
                              var s = f.getCustomerIDs(),
                                l = f._getField('MCCIDH'),
                                c = '';
                              for (a in (l || (l = 0), s))
                                O(a) &&
                                  (c +=
                                    (c ? '|' : '') +
                                    a +
                                    '|' +
                                    ((r = s[a]).id ? r.id : '') +
                                    (r.authState ? r.authState : ''));
                              (f._newCustomerIDsHash = String(f._hash(c))),
                                f._newCustomerIDsHash !== l &&
                                  ((f._customerIDsHashChanged = !0), f._mapCustomerIDs(n));
                            }
                          }),
                          (f.getCustomerIDs = function () {
                            f._readVisitor();
                            var e,
                              t,
                              n = {};
                            for (e in f._currentCustomerIDs)
                              O(e) &&
                                ((t = f._currentCustomerIDs[e]),
                                n[e] || (n[e] = {}),
                                t.id && (n[e].id = t.id),
                                null != t.authState
                                  ? (n[e].authState = t.authState)
                                  : (n[e].authState = y.AuthState.UNKNOWN),
                                t.hashType && (n[e].hashType = t.hashType));
                            return n;
                          }),
                          (f.setAnalyticsVisitorID = function (e) {
                            f._setAnalyticsFields(e);
                          }),
                          (f.getAnalyticsVisitorID = function (e, t, n) {
                            if (!P.isTrackingServerPopulated() && !n)
                              return f._callCallback(e, ['']), '';
                            var a = '';
                            if (
                              (n ||
                                (a = f.getMarketingCloudVisitorID(function () {
                                  f.getAnalyticsVisitorID(e, !0);
                                })),
                              a || n)
                            ) {
                              var r = n ? f.marketingCloudServer : f.trackingServer,
                                i = '';
                              f.loadSSL &&
                                (n
                                  ? f.marketingCloudServerSecure &&
                                    (r = f.marketingCloudServerSecure)
                                  : f.trackingServerSecure && (r = f.trackingServerSecure));
                              var o = {};
                              if (r) {
                                var s = 'http' + (f.loadSSL ? 's' : '') + '://' + r + '/id',
                                  l =
                                    'd_visid_ver=' +
                                    f.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(f.marketingCloudOrgID) +
                                    (a ? '&mid=' + encodeURIComponent(a) : '') +
                                    (f.idSyncDisable3rdPartySyncing || f.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  c = [
                                    's_c_il',
                                    f._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (i =
                                  s +
                                  '?' +
                                  l +
                                  '&callback=s_c_il%5B' +
                                  f._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + l),
                                  (o.callback = c);
                              }
                              return (o.url = i), f._getRemoteField(n ? C : S, i, e, t, o);
                            }
                            return '';
                          }),
                          (f.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              f.getMarketingCloudVisitorID(function () {
                                f.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = f._getField(S);
                              if (
                                (!n &&
                                  P.isTrackingServerPopulated() &&
                                  (n = f.getAnalyticsVisitorID(function () {
                                    f.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !P.isTrackingServerPopulated())
                              ) {
                                var a = f._getAudienceManagerURLData(),
                                  r = a.url;
                                return f._getRemoteField('MCAAMLH', r, e, t, a);
                              }
                            }
                            return '';
                          }),
                          (f.getLocationHint = f.getAudienceManagerLocationHint),
                          (f.getAudienceManagerBlob = function (e, t) {
                            if (
                              f.getMarketingCloudVisitorID(function () {
                                f.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var n = f._getField(S);
                              if (
                                (!n &&
                                  P.isTrackingServerPopulated() &&
                                  (n = f.getAnalyticsVisitorID(function () {
                                    f.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !P.isTrackingServerPopulated())
                              ) {
                                var a = f._getAudienceManagerURLData(),
                                  r = a.url;
                                return (
                                  f._customerIDsHashChanged && f._setFieldExpire(k, -1),
                                  f._getRemoteField(k, r, e, t, a)
                                );
                              }
                            }
                            return '';
                          }),
                          (f._supplementalDataIDCurrent = ''),
                          (f._supplementalDataIDCurrentConsumed = {}),
                          (f._supplementalDataIDLast = ''),
                          (f._supplementalDataIDLastConsumed = {});
                        var E = !(f.getSupplementalDataID = function (e, t) {
                          f._supplementalDataIDCurrent ||
                            t ||
                            (f._supplementalDataIDCurrent = f._generateID(1));
                          var n = f._supplementalDataIDCurrent;
                          return (
                            f._supplementalDataIDLast && !f._supplementalDataIDLastConsumed[e]
                              ? ((n = f._supplementalDataIDLast),
                                (f._supplementalDataIDLastConsumed[e] = !0))
                              : n &&
                                (f._supplementalDataIDCurrentConsumed[e] &&
                                  ((f._supplementalDataIDLast = f._supplementalDataIDCurrent),
                                  (f._supplementalDataIDLastConsumed =
                                    f._supplementalDataIDCurrentConsumed),
                                  (f._supplementalDataIDCurrent = n = t ? '' : f._generateID(1)),
                                  (f._supplementalDataIDCurrentConsumed = {})),
                                n && (f._supplementalDataIDCurrentConsumed[e] = !0)),
                            n
                          );
                        });
                        (f._liberatedOptOut = null),
                          (f.getOptOut = function (e, t) {
                            var n = f._getAudienceManagerURLData('_setMarketingCloudFields'),
                              a = n.url;
                            if (d()) return f._getRemoteField('MCOPTOUT', a, e, t, n);
                            if (
                              (f._registerCallback('liberatedOptOut', e),
                              null !== f._liberatedOptOut)
                            )
                              return (
                                f._callAllCallbacks('liberatedOptOut', [f._liberatedOptOut]),
                                (E = !1),
                                f._liberatedOptOut
                              );
                            if (E) return null;
                            E = !0;
                            var r = 'liberatedGetOptOut';
                            return (
                              (n.corsUrl = n.corsUrl.replace(
                                /dpm\.demdex\.net\/id\?/,
                                'dpm.demdex.net/optOutStatus?'
                              )),
                              (n.callback = [r]),
                              (x[r] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    a = R.parseOptOut(e, t, M);
                                  (t = a.optOut),
                                    (n = 1000 * a.d_ottl),
                                    (f._liberatedOptOut = t),
                                    setTimeout(function () {
                                      f._liberatedOptOut = null;
                                    }, n);
                                }
                                f._callAllCallbacks('liberatedOptOut', [t]), (E = !1);
                              }),
                              T.fireCORS(n),
                              null
                            );
                          }),
                          (f.isOptedOut = function (n, a, e) {
                            a || (a = y.OptOut.GLOBAL);
                            var t = f.getOptOut(function (e) {
                              var t = e === y.OptOut.GLOBAL || 0 <= e.indexOf(a);
                              f._callCallback(n, [t]);
                            }, e);
                            return t ? t === y.OptOut.GLOBAL || 0 <= t.indexOf(a) : null;
                          }),
                          (f._fields = null),
                          (f._fieldsExpired = null),
                          (f._hash = function (e) {
                            var t,
                              n = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                            return n;
                          }),
                          (f._generateID = K),
                          (f._generateLocalMID = function () {
                            var e = f._generateID(0);
                            return (V.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (f._callbackList = null),
                          (f._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(b, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (f._registerCallback = function (e, t) {
                            t &&
                              (null == f._callbackList && (f._callbackList = {}),
                              null == f._callbackList[e] && (f._callbackList[e] = []),
                              f._callbackList[e].push(t));
                          }),
                          (f._callAllCallbacks = function (e, t) {
                            if (null != f._callbackList) {
                              var n = f._callbackList[e];
                              if (n) for (; 0 < n.length; ) f._callCallback(n.shift(), t);
                            }
                          }),
                          (f._addQuerystringParam = function (e, t, n, a) {
                            var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              i = P.parseHash(e),
                              o = P.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + r + i;
                            var s = o.split('?'),
                              l = s[0] + '?',
                              c = s[1];
                            return l + P.addQueryParamAtLocation(c, r, a) + i;
                          }),
                          (f._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (n && n.length) return decodeURIComponent(n[1]);
                          }),
                          (f._parseAdobeMcFromUrl = t($.ADOBE_MC)),
                          (f._parseAdobeMcSdidFromUrl = t($.ADOBE_MC_SDID)),
                          (f._attemptToPopulateSdidFromUrl = function (e) {
                            var t = f._parseAdobeMcSdidFromUrl(e),
                              n = 1000000000;
                            t && t.TS && (n = P.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === a &&
                                n < f.sdidParamExpiry &&
                                ((f._supplementalDataIDCurrent = t.SDID),
                                (f._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (f._attemptToPopulateIdsFromUrl = function () {
                            var e = f._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = P.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > $.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== a)
                                return;
                              r(e);
                            }
                          }),
                          (f._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((a = e),
                                  (e = P.isObject(a) ? a : JSON.parse(a))[f.marketingCloudOrgID])
                                ) {
                                  var t = e[f.marketingCloudOrgID];
                                  (n = t.customerIDs),
                                    P.isObject(n) && f.setCustomerIDs(n),
                                    i(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var n, a;
                          }),
                          (f._timeout = null),
                          (f._loadData = function (e, t, n, a) {
                            (t = f._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (a.url = f._addQuerystringParam(a.url, 'd_fieldgroup', e, 1)),
                              (a.corsUrl = f._addQuerystringParam(
                                a.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (V.fieldGroupObj[e] = !0),
                              a === Object(a) &&
                                a.corsUrl &&
                                'XMLHttpRequest' === T.corsMetadata.corsType &&
                                T.fireCORS(a, n, e);
                          }),
                          (f._clearTimeout = function (e) {
                            null != f._timeout &&
                              f._timeout[e] &&
                              (clearTimeout(f._timeout[e]), (f._timeout[e] = 0));
                          }),
                          (f._settingsDigest = 0),
                          (f._getSettingsDigest = function () {
                            if (!f._settingsDigest) {
                              var e = f.version;
                              f.audienceManagerServer && (e += '|' + f.audienceManagerServer),
                                f.audienceManagerServerSecure &&
                                  (e += '|' + f.audienceManagerServerSecure),
                                (f._settingsDigest = f._hash(e));
                            }
                            return f._settingsDigest;
                          }),
                          (f._readVisitorDone = !1),
                          (f._readVisitor = function () {
                            if (!f._readVisitorDone) {
                              f._readVisitorDone = !0;
                              var e,
                                t,
                                n,
                                a,
                                r,
                                i,
                                o = f._getSettingsDigest(),
                                s = !1,
                                l = f.cookieRead(f.cookieName),
                                c = new Date();
                              if (
                                (l ||
                                  v ||
                                  f.discardTrackingServerECID ||
                                  (l = f.cookieRead($.FIRST_PARTY_SERVER_COOKIE)),
                                null == f._fields && (f._fields = {}),
                                l && 'T' !== l)
                              )
                                for (
                                  (l = l.split('|'))[0].match(/^[\-0-9]+$/) &&
                                    (parseInt(l[0], 10) !== o && (s = !0), l.shift()),
                                    l.length % 2 == 1 && l.pop(),
                                    e = 0;
                                  e < l.length;
                                  e += 2
                                )
                                  (n = (t = l[e].split('-'))[0]),
                                    (a = l[e + 1]),
                                    1 < t.length
                                      ? ((r = parseInt(t[1], 10)), (i = 0 < t[1].indexOf('s')))
                                      : ((r = 0), (i = !1)),
                                    s &&
                                      ('MCCIDH' === n && (a = ''),
                                      0 < r && (r = c.getTime() / 1000 - 60)),
                                    n &&
                                      a &&
                                      (f._setField(n, a, 1),
                                      0 < r &&
                                        ((f._fields['expire' + n] = r + (i ? 's' : '')),
                                        (c.getTime() >= 1000 * r ||
                                          (i && !f.cookieRead(f.sessionCookieName))) &&
                                          (f._fieldsExpired || (f._fieldsExpired = {}),
                                          (f._fieldsExpired[n] = !0))));
                              !f._getField(S) &&
                                P.isTrackingServerPopulated() &&
                                (l = f.cookieRead('s_vi')) &&
                                1 < (l = l.split('|')).length &&
                                0 <= l[0].indexOf('v1') &&
                                (0 <= (e = (a = l[1]).indexOf('[')) && (a = a.substring(0, e)),
                                a && a.match($.VALID_VISITOR_ID_REGEX) && f._setField(S, a));
                            }
                          }),
                          (f._appendVersionTo = function (e) {
                            var t = 'vVersion|' + f.version,
                              n = e ? f._getCookieVersion(e) : null;
                            return (
                              n
                                ? X.areVersionsDifferent(n, f.version) &&
                                  (e = e.replace($.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (f._writeVisitor = function () {
                            var e,
                              t,
                              n = f._getSettingsDigest();
                            for (e in f._fields)
                              O(e) &&
                                f._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = f._fields[e]),
                                (n +=
                                  (n ? '|' : '') +
                                  e +
                                  (f._fields['expire' + e] ? '-' + f._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (n = f._appendVersionTo(n)), f.cookieWrite(f.cookieName, n, 1);
                          }),
                          (f._getField = function (e, t) {
                            return null == f._fields ||
                              (!t && f._fieldsExpired && f._fieldsExpired[e])
                              ? null
                              : f._fields[e];
                          }),
                          (f._setField = function (e, t, n) {
                            null == f._fields && (f._fields = {}),
                              (f._fields[e] = t),
                              n || f._writeVisitor();
                          }),
                          (f._getFieldList = function (e, t) {
                            var n = f._getField(e, t);
                            return n ? n.split('*') : null;
                          }),
                          (f._setFieldList = function (e, t, n) {
                            f._setField(e, t ? t.join('*') : '', n);
                          }),
                          (f._getFieldMap = function (e, t) {
                            var n = f._getFieldList(e, t);
                            if (n) {
                              var a,
                                r = {};
                              for (a = 0; a < n.length; a += 2) r[n[a]] = n[a + 1];
                              return r;
                            }
                            return null;
                          }),
                          (f._setFieldMap = function (e, t, n) {
                            var a,
                              r = null;
                            if (t) for (a in ((r = []), t)) O(a) && (r.push(a), r.push(t[a]));
                            f._setFieldList(e, r, n);
                          }),
                          (f._setFieldExpire = function (e, t, n) {
                            var a = new Date();
                            a.setTime(a.getTime() + 1000 * t),
                              null == f._fields && (f._fields = {}),
                              (f._fields['expire' + e] =
                                Math.floor(a.getTime() / 1000) + (n ? 's' : '')),
                              t < 0
                                ? (f._fieldsExpired || (f._fieldsExpired = {}),
                                  (f._fieldsExpired[e] = !0))
                                : f._fieldsExpired && (f._fieldsExpired[e] = !1),
                              n &&
                                (f.cookieRead(f.sessionCookieName) ||
                                  f.cookieWrite(f.sessionCookieName, '1'));
                          }),
                          (f._findVisitorID = function (e) {
                            return (
                              e &&
                                ('object' === L(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = M),
                                (e && (e === M || e.match($.VALID_VISITOR_ID_REGEX))) || (e = '')),
                              e
                            );
                          }),
                          (f._setFields = function (e, t) {
                            if (
                              (f._clearTimeout(e),
                              null != f._loading && (f._loading[e] = !1),
                              V.fieldGroupObj[e] && V.setState(e, !1),
                              'MC' === e)
                            ) {
                              !0 !== V.isClientSideMarketingCloudVisitorID &&
                                (V.isClientSideMarketingCloudVisitorID = !1);
                              var n = f._getField(C);
                              if (!n || f.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(n = 'object' === L(t) && t.mid ? t.mid : f._findVisitorID(t))
                                ) {
                                  if (
                                    f._use1stPartyMarketingCloudServer &&
                                    !f.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (f.tried1stPartyMarketingCloudServer = !0),
                                      void f.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  n = f._generateLocalMID();
                                }
                                f._setField(C, n);
                              }
                              (n && n !== M) || (n = ''),
                                'object' === L(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    f._setFields(A, t),
                                  f._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    f._setFields(D, { id: t.id })),
                                f._callAllCallbacks(C, [n]);
                            }
                            if (e === A && 'object' === L(t)) {
                              var a = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (a = parseInt(t.id_sync_ttl, 10));
                              var r = w.getRegionAndCheckIfChanged(t, a);
                              f._callAllCallbacks('MCAAMLH', [r]);
                              var i = f._getField(k);
                              (t.d_blob || t.blob) &&
                                ((i = t.d_blob) || (i = t.blob),
                                f._setFieldExpire(k, a),
                                f._setField(k, i)),
                                i || (i = ''),
                                f._callAllCallbacks(k, [i]),
                                !t.error_msg &&
                                  f._newCustomerIDsHash &&
                                  f._setField('MCCIDH', f._newCustomerIDsHash);
                            }
                            if (e === D) {
                              var o = f._getField(S);
                              (o && !f.overwriteCrossDomainMCIDAndAID) ||
                                ((o = f._findVisitorID(t))
                                  ? o !== M && f._setFieldExpire(k, -1)
                                  : (o = M),
                                f._setField(S, o)),
                                (o && o !== M) || (o = ''),
                                f._callAllCallbacks(S, [o]);
                            }
                            if (f.idSyncDisableSyncs || f.disableIdSyncs)
                              w.idCallNotProcesssed = !0;
                            else {
                              w.idCallNotProcesssed = !1;
                              var s = {};
                              (s.ibs = t.ibs), (s.subdomain = t.subdomain), w.processIDCallData(s);
                            }
                            if (t === Object(t)) {
                              var l, c;
                              d() && f.isAllowed() && (l = f._getField('MCOPTOUT'));
                              var u = R.parseOptOut(t, l, M);
                              (l = u.optOut),
                                (c = u.d_ottl),
                                f._setFieldExpire('MCOPTOUT', c, !0),
                                f._setField('MCOPTOUT', l),
                                f._callAllCallbacks('MCOPTOUT', [l]);
                            }
                          }),
                          (f._loading = null),
                          (f._getRemoteField = function (n, e, t, a, r) {
                            var i,
                              o = '',
                              s = P.isFirstPartyAnalyticsVisitorIDCall(n),
                              l = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && f.isAllowed())
                              if (
                                (f._readVisitor(),
                                !(
                                  !(o = f._getField(n, !0 === l[n])) ||
                                  (f._fieldsExpired && f._fieldsExpired[n])
                                ) ||
                                  (f.disableThirdPartyCalls && !s))
                              )
                                o ||
                                  (n === C
                                    ? (f._registerCallback(n, t),
                                      (o = f._generateLocalMID()),
                                      f.setMarketingCloudVisitorID(o))
                                    : n === S
                                    ? (f._registerCallback(n, t),
                                      (o = ''),
                                      f.setAnalyticsVisitorID(o))
                                    : (a = !(o = '')));
                              else if (
                                (n === C || 'MCOPTOUT' === n
                                  ? (i = 'MC')
                                  : 'MCAAMLH' === n || n === k
                                  ? (i = A)
                                  : n === S && (i = D),
                                i)
                              )
                                return (
                                  !e ||
                                    (null != f._loading && f._loading[i]) ||
                                    (null == f._loading && (f._loading = {}),
                                    (f._loading[i] = !0),
                                    f._loadData(
                                      i,
                                      e,
                                      function (e) {
                                        if (!f._getField(n)) {
                                          e && V.setState(i, !0);
                                          var t = '';
                                          n === C
                                            ? (t = f._generateLocalMID())
                                            : i === A && (t = { error_msg: 'timeout' }),
                                            f._setFields(i, t);
                                        }
                                      },
                                      r
                                    )),
                                  f._registerCallback(n, t),
                                  o || (e || f._setFields(i, { id: M }), '')
                                );
                            return (
                              (n !== C && n !== S) || o !== M || (a = !(o = '')),
                              t && a && f._callCallback(t, [o]),
                              o
                            );
                          }),
                          (f._setMarketingCloudFields = function (e) {
                            f._readVisitor(), f._setFields('MC', e);
                          }),
                          (f._mapCustomerIDs = function (e) {
                            f.getAudienceManagerBlob(e, !0);
                          }),
                          (f._setAnalyticsFields = function (e) {
                            f._readVisitor(), f._setFields(D, e);
                          }),
                          (f._setAudienceManagerFields = function (e) {
                            f._readVisitor(), f._setFields(A, e);
                          }),
                          (f._getAudienceManagerURLData = function (e) {
                            var t = f.audienceManagerServer,
                              n = '',
                              a = f._getField(C),
                              r = f._getField(k, !0),
                              i = f._getField(S),
                              o = i && i !== M ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                            if (
                              (f.loadSSL &&
                                f.audienceManagerServerSecure &&
                                (t = f.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                l,
                                c = f.getCustomerIDs();
                              if (c)
                                for (s in c)
                                  O(s) &&
                                    ((l = c[s]),
                                    (o +=
                                      '&d_cid_ic=' +
                                      encodeURIComponent(s) +
                                      '%01' +
                                      encodeURIComponent(l.id ? l.id : '') +
                                      (l.authState ? '%01' + l.authState : '')));
                              e || (e = '_setAudienceManagerFields');
                              var u = 'http' + (f.loadSSL ? 's' : '') + '://' + t + '/id',
                                d =
                                  'd_visid_ver=' +
                                  f.version +
                                  (m && -1 !== u.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + m
                                    : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!a && f._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(f.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (f.idSyncContainerID || 0) +
                                  (a ? '&d_mid=' + encodeURIComponent(a) : '') +
                                  (f.idSyncDisable3rdPartySyncing || f.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === _
                                    ? '&d_coop_safe=1'
                                    : !1 === _
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                                  o,
                                p = ['s_c_il', f._in, e];
                              return {
                                url: (n = u + '?' + d + '&d_cb=s_c_il%5B' + f._in + '%5D.' + e),
                                corsUrl: u + '?' + d,
                                callback: p,
                              };
                            }
                            return { url: n };
                          }),
                          (f.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [C, f._getField(C)],
                                [S, f._getField(S)],
                                ['MCORGID', f.marketingCloudOrgID],
                              ];
                              return f._addQuerystringParam(e, $.ADOBE_MC, o(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (f.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || f.getSupplementalDataID(P.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = o([
                                ['SDID', t],
                                ['MCORGID', f.marketingCloudOrgID],
                              ]);
                              return f._addQuerystringParam(e, $.ADOBE_MC_SDID, n);
                            } catch (t) {
                              return e;
                            }
                          });
                        var P = {
                          parseHash: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(t) : '';
                          },
                          hashlessUrl: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(0, t) : e;
                          },
                          addQueryParamAtLocation: function (e, t, n) {
                            var a = e.split('&');
                            return (n = null != n ? n : a.length), a.splice(n, 0, t), a.join('&');
                          },
                          isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                            return (
                              e === S &&
                              (t || (t = f.trackingServer),
                              n || (n = f.trackingServerSecure),
                              !('string' != typeof (a = f.loadSSL ? n : t) || !a.length) &&
                                a.indexOf('2o7.net') < 0 &&
                                a.indexOf('omtrdc.net') < 0)
                            );
                            var a;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            Y.remove(e, { domain: f.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!f.trackingServer || !!f.trackingServerSecure;
                          },
                          getTimestampInSeconds: function () {
                            return Math.round(new Date().getTime() / 1000);
                          },
                          parsePipeDelimetedKeyValues: function (e) {
                            return e.split('|').reduce(function (e, t) {
                              var n = t.split('=');
                              return (e[n[0]] = decodeURIComponent(n[1])), e;
                            }, {});
                          },
                          generateRandomString: function (e) {
                            e = e || 5;
                            for (var t = '', n = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--; )
                              t += n[Math.floor(Math.random() * n.length)];
                            return t;
                          },
                          normalizeBoolean: function (e) {
                            return 'true' === e || ('false' !== e && e);
                          },
                          parseBoolean: function (e) {
                            return 'true' === e || ('false' !== e && null);
                          },
                          replaceMethodsWithFunction: function (e, t) {
                            for (var n in e)
                              e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
                            return e;
                          },
                        };
                        f._helpers = P;
                        var w = Z(f, y);
                        (f._destinationPublishing = w), (f.timeoutMetricsLog = []);
                        var V = {
                          isClientSideMarketingCloudVisitorID: null,
                          MCIDCallTimedOut: null,
                          AnalyticsIDCallTimedOut: null,
                          AAMIDCallTimedOut: null,
                          fieldGroupObj: {},
                          setState: function (e, t) {
                            switch (e) {
                              case 'MC':
                                !1 === t
                                  ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                                  : (this.MCIDCallTimedOut = t);
                                break;
                              case D:
                                !1 === t
                                  ? !0 !== this.AnalyticsIDCallTimedOut &&
                                    (this.AnalyticsIDCallTimedOut = !1)
                                  : (this.AnalyticsIDCallTimedOut = t);
                                break;
                              case A:
                                !1 === t
                                  ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
                                  : (this.AAMIDCallTimedOut = t);
                            }
                          },
                        };
                        (f.isClientSideMarketingCloudVisitorID = function () {
                          return V.isClientSideMarketingCloudVisitorID;
                        }),
                          (f.MCIDCallTimedOut = function () {
                            return V.MCIDCallTimedOut;
                          }),
                          (f.AnalyticsIDCallTimedOut = function () {
                            return V.AnalyticsIDCallTimedOut;
                          }),
                          (f.AAMIDCallTimedOut = function () {
                            return V.AAMIDCallTimedOut;
                          }),
                          (f.idSyncGetOnPageSyncInfo = function () {
                            return f._readVisitor(), f._getField('MCSYNCSOP');
                          }),
                          (f.idSyncByURL = function (e) {
                            if (!f.isOptedOut()) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                a,
                                r = e.url,
                                i = encodeURIComponent,
                                o = w;
                              return (
                                (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = R.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (a = ['ibs', i(e.dpid), 'img', i(r), t.ttl, '', n]),
                                o.addMessage(a.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (f.idSyncByDataSource = function (e) {
                            if (!f.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  f.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Ve(f, w),
                          (f._getCookieVersion = function (e) {
                            e = e || f.cookieRead(f.cookieName);
                            var t = $.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (f._resetAmcvCookie = function (e) {
                            var t = f._getCookieVersion();
                            (t && !X.isLessThan(t, e)) || P.removeCookie(f.cookieName);
                          }),
                          (f.setAsCoopSafe = function () {
                            _ = !0;
                          }),
                          (f.setAsCoopUnsafe = function () {
                            _ = !1;
                          }),
                          (function () {
                            if (((f.configs = Object.create(null)), P.isObject(n)))
                              for (var e in n) O(e) && ((f[e] = n[e]), (f.configs[e] = n[e]));
                          })(),
                          [
                            ['getMarketingCloudVisitorID'],
                            ['setCustomerIDs', void 0],
                            ['getAnalyticsVisitorID'],
                            ['getAudienceManagerLocationHint'],
                            ['getLocationHint'],
                            ['getAudienceManagerBlob'],
                          ].forEach(function (e) {
                            var t = e[0],
                              n = 2 === e.length ? e[1] : '',
                              a = f[t];
                            f[t] = function (e) {
                              return d() && f.isAllowed()
                                ? a.apply(f, arguments)
                                : ('function' == typeof e && f._callCallback(e, [n]), n);
                            };
                          }),
                          (f.init = function () {
                            if (l()) return g.optIn.fetchPermissions(u, !0);
                            !(function () {
                              if (P.isObject(n)) {
                                (f.idSyncContainerID = f.idSyncContainerID || 0),
                                  (_ =
                                    'boolean' == typeof f.isCoopSafe
                                      ? f.isCoopSafe
                                      : P.parseBoolean(f.isCoopSafe)),
                                  f.resetBeforeVersion && f._resetAmcvCookie(f.resetBeforeVersion),
                                  f._attemptToPopulateIdsFromUrl(),
                                  f._attemptToPopulateSdidFromUrl(),
                                  f._readVisitor();
                                var e = f._getField(I),
                                  t = Math.ceil(new Date().getTime() / $.MILLIS_PER_DAY);
                                f.idSyncDisableSyncs ||
                                  f.disableIdSyncs ||
                                  !w.canMakeSyncIDCall(e, t) ||
                                  (f._setFieldExpire(k, -1), f._setField(I, t)),
                                  f.getMarketingCloudVisitorID(),
                                  f.getAudienceManagerLocationHint(),
                                  f.getAudienceManagerBlob(),
                                  f._mergeServerState(f.serverState);
                              } else
                                f._attemptToPopulateIdsFromUrl(),
                                  f._attemptToPopulateSdidFromUrl();
                            })(),
                              (function () {
                                if (!f.idSyncDisableSyncs && !f.disableIdSyncs) {
                                  w.checkDPIframeSrc();
                                  var e = function () {
                                    var e = w;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  b.addEventListener('load', function () {
                                    (y.windowLoaded = !0), e();
                                  });
                                  try {
                                    z.receiveMessage(function (e) {
                                      w.receiveMessage(e.data);
                                    }, w.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              f.whitelistIframeDomains &&
                                $.POST_MESSAGE_ENABLED &&
                                ((f.whitelistIframeDomains =
                                  f.whitelistIframeDomains instanceof Array
                                    ? f.whitelistIframeDomains
                                    : [f.whitelistIframeDomains]),
                                f.whitelistIframeDomains.forEach(function (e) {
                                  var t = new N(a, e),
                                    n = G(f, t);
                                  z.receiveMessage(n, e);
                                }));
                          });
                      };
                      Ne.config = te;
                      var Fe = (x.Visitor = Ne),
                        Ue = function (r) {
                          if (R.isObject(r))
                            return Object.keys(r)
                              .filter(function (e) {
                                return '' !== r[e];
                              })
                              .reduce(function (e, t) {
                                var n = 'doesOptInApply' !== t ? r[t] : te.normalizeConfig(r[t]),
                                  a = R.normalizeBoolean(n);
                                return (e[t] = a), e;
                              }, Object.create(null));
                        },
                        Be = we.OptIn,
                        He = we.IabPlugin;
                      (Fe.getInstance = function (a, e) {
                        if (!a) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        a.indexOf('@') < 0 && (a += '@AdobeOrg');
                        var t = (function () {
                          var e = x.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === a) return n;
                            }
                        })();
                        if (t) return t;
                        var r,
                          n = Ue(e);
                        (r = n || {}),
                          (x.adobe.optIn =
                            x.adobe.optIn ||
                            (function () {
                              var e = R.pluck(r, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = r.optInCookieDomain || r.cookieDomain;
                              (t = (t = t || W()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var n = new Be(e, { cookies: Y });
                              if (e.isIabContext) {
                                var a = new He(window.__cmp);
                                n.registerPlugin(a);
                              }
                              return n;
                            })());
                        var i = a.split('').reverse().join(''),
                          o = new Fe(a, null, i);
                        R.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain),
                          x.s_c_il.splice(--x.s_c_in, 1);
                        var s = R.getIeVersion();
                        if ('number' == typeof s && s < 10)
                          return o._helpers.replaceMethodsWithFunction(o, function () {});
                        var l,
                          c =
                            (function () {
                              try {
                                return x.self !== x.parent;
                              } catch (a) {
                                return !0;
                              }
                            })() &&
                            ((l = o).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== l.cookieRead('TEST_AMCV_COOKIE') ||
                              (l._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            x.parent
                              ? new w(a, n, o, x.parent)
                              : new Fe(a, n, i);
                        return (o = null), c.init(), c;
                      }),
                        (function () {
                          function e () {
                            Fe.windowLoaded = !0;
                          }
                          x.addEventListener
                            ? x.addEventListener('load', e)
                            : x.attachEvent && x.attachEvent('onload', e),
                            (Fe.codeLoadEnd = new Date().getTime());
                        })();
                    })(),
                    Visitor);
                },
              },
              'adobe-mcid/src/view/utils/timeUnits.js': {
                script: function (e) {
                  var t = {
                    Hours: 3600,
                    Days: 86400,
                    Weeks: 604800,
                    Months: 2592000,
                    Years: 31536000,
                  };
                  e.exports = t;
                },
              },
            },
            settings: {
              orgId: '1E4734FA53DAC2360A490D44@AdobeOrg',
              variables: [
                { name: 'cookieDomain', value: '%MCVID:cookieDomain%' },
                { name: 'overwriteCrossDomainMCIDAndAID', value: 'true' },
                { name: 'trackingServer', value: 'somniture.dbs.com.sg' },
                { name: 'trackingServerSecure', value: 'somniture.dbs.com.sg' },
                { name: 'marketingCloudServer', value: 'somniture.dbs.com.sg' },
                { name: 'marketingCloudServerSecure', value: 'somniture.dbs.com.sg' },
              ],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPfe53b8a989d640f8ba8fb9f9a647c964/',
          },
        },
        company: { orgId: '1E4734FA53DAC2360A490D44@AdobeOrg' },
        property: {
          name: 'DBS IBG',
          settings: { domains: ['www.dbs.com.sg'], undefinedVarsReturnEmpty: !1 },
        },
        rules: [
          {
            id: 'RL0081671fb3814897b74fab344adb78aa',
            name: 'genericTabClicks - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb - generic tab clicked' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar67', type: 'alias', value: 'prop22' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop22', type: 'value', value: '%buttonName%' },
                    ],
                    events: [{ name: 'event132' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL153b3fa51adf421c89c442b0169da109',
            name: 'breadcrumb - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-breadcrumb link' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar67', type: 'value', value: 'brdcrb:%breadcrumbClicked%' },
                    ],
                    props: [{ name: 'prop8', type: 'value', value: '%globalVarPageName%' }],
                    events: [{ name: 'event132' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL3db100abb9634116a29a3772948dc2e9',
            name: 'leadgenFormStep7 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-step step7' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar39', type: 'value', value: '%productType%' },
                      { name: 'eVar53', type: 'value', value: '%productCategory%' },
                      { name: 'eVar58', type: 'value', value: '%product string%' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event32' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL46e8011ec9104ee290a5ed5ed4c8ae75',
            name: 'genericButtonClicks - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-generic button' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%buttonName%',
                  rightOperand: 'topnav: login',
                },
                negate: !0,
              },
            ],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar67', type: 'value', value: '%buttonName%' },
                    ],
                    props: [{ name: 'prop8', type: 'value', value: '%globalVarPageName%' }],
                    events: [{ name: 'event132' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL5151b2586b0643b1994f40ee1803e702',
            name: 'genericFormStep4 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-generic-form-step4' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event77' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL53fc56614fe94d2fb814d9e840ebe06a',
            name: 'productApply - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-apply buttonclick' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar39', type: 'value', value: '%productType%' },
                      { name: 'eVar53', type: 'value', value: '%productCategory%' },
                      { name: 'eVar58', type: 'value', value: '%product string%' },
                    ],
                    events: [{ name: 'event119' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL6aeb063664d24c40b78e45a887761fe9',
            name: 'stickyLeftNav - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-stickyleftnav bar' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar67', type: 'value', value: 'lftnav:%stickyLeftNavClicked%' },
                    ],
                    props: [{ name: 'prop8', type: 'value', value: '%globalVarPageName%' }],
                    events: [{ name: 'event132' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL78c40e1a683e4d76998fed35585695b7',
            name: 'leadgenFormStep3 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-step step3' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar39', type: 'value', value: '%productType%' },
                      { name: 'eVar53', type: 'value', value: '%productCategory%' },
                      { name: 'eVar58', type: 'value', value: '%product string%' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event24' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL820280984585468a9f814e29d16adcb6',
            name: 'leadgenFormStep2 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-step step2' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event79' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL8479c8fe1ede40abbec946c7f2673bb7',
            name: 'genericFormCompletion - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-generic-form-completion' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event8' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL84c4870e34d14a10bce6bddeb66667cc',
            name: 'leadgenFormStep6 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-step step6' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar39', type: 'value', value: '%productType%' },
                      { name: 'eVar53', type: 'value', value: '%productCategory%' },
                      { name: 'eVar58', type: 'value', value: '%product string%' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event31' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL8a172d80938945a39ceb0d5e2dd46d61',
            name: 'internalPromoBannerClicks - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-promotionbanner button' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar51', type: 'value', value: '%promoBannerClicks%' },
                    ],
                    props: [{ name: 'prop8', type: 'value', value: '%globalVarPageName%' }],
                    events: [{ name: 'event94' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL9476389258cb44469c17eb6831fd2b2c',
            name: 'leadgenFormComplete - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-completion' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar45', type: 'value', value: '%formUniqueID%' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event82' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL9b11e4ea18f74186ba4dce079c69800d',
            name: 'leadgenFormStart - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-initiation' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event78' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLcff3926f78584660b1ffb5a58c7e9b8a',
            name: 'pageLoadRule',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/sme/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar1', type: 'alias', value: 'prop1' },
                      { name: 'eVar2', type: 'value', value: '%globalVarSubSection1%' },
                      { name: 'eVar3', type: 'value', value: '%globalVarSubSection2%' },
                      { name: 'eVar5', type: 'value', value: '%globalVarSite%' },
                      { name: 'eVar7', type: 'value', value: '%globalVarDestinationURL%' },
                      { name: 'eVar21', type: 'value', value: '%globalVarLanguage%' },
                      { name: 'eVar55', type: 'value', value: '%globalVarCountry%' },
                      { name: 'eVar66', type: 'value', value: '%globalVarBusinessUnit%' },
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                    ],
                    props: [
                      { name: 'prop1', type: 'value', value: '%globalVarSiteSection%' },
                      { name: 'prop2', type: 'alias', value: 'eVar2' },
                      { name: 'prop3', type: 'alias', value: 'eVar3' },
                      { name: 'prop5', type: 'alias', value: 'eVar7' },
                      { name: 'prop21', type: 'alias', value: 'eVar21' },
                      { name: 'prop55', type: 'alias', value: 'eVar55' },
                      { name: 'prop66', type: 'alias', value: 'eVar66' },
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                    ],
                    server: '%globalVarServer%',
                    channel: '%globalVarSite%',
                    pageName: '%globalVarPageName%',
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLb33dd67ec8774393834a42e6690bde3a',
            name: 'leadgenFormStep5 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-step step5' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar39', type: 'value', value: '%productType%' },
                      { name: 'eVar53', type: 'value', value: '%productCategory%' },
                      { name: 'eVar58', type: 'value', value: '%product string%' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event30' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLb99754ffcc414c3a90618bd7c7c10dcd',
            name: 'leadgenFormStep4 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-lead gen-form-step step4' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar39', type: 'value', value: '%productType%' },
                      { name: 'eVar53', type: 'value', value: '%productCategory%' },
                      { name: 'eVar58', type: 'value', value: '%product string%' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event29' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLcfc809991d6549dd9ad44aa3f2799bd5',
            name: 'loginButtonClicks - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-login button' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar67', type: 'value', value: '%buttonName%' },
                    ],
                    props: [{ name: 'prop8', type: 'value', value: '%globalVarPageName%' }],
                    events: [{ name: 'event102' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLd81004465349459d93533bdfd0dcd5a9',
            name: 'genericFormStart - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-generic-form-initiation' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event74' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLddbb6d7645014a4295232fb191dd067c',
            name: 'genericFormStep2 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-generic-form-step2' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event75' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLe455a57fc56546d3a2e120da48b7e95c',
            name: 'genericFormStep3 - DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pweb-generic-form-step3' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar65', type: 'alias', value: 'prop8' },
                      { name: 'eVar8', type: 'value', value: '%formName%' },
                      { name: 'eVar12', type: 'alias', value: 'prop11' },
                      { name: 'eVar79', type: 'value', value: '%formType%' },
                    ],
                    props: [
                      { name: 'prop8', type: 'value', value: '%globalVarPageName%' },
                      { name: 'prop11', type: 'value', value: '%formStepDetail%' },
                    ],
                    events: [{ name: 'event76' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkType: 'o' },
              },
            ],
          },
        ],
      });
    var $___var_d4a6967d841c6909 = (function () {
      const $___old_cc9674d9a8cd7747 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_cc9674d9a8cd7747)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
          ));
        return function () {
          'use strict';
          function e (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
          }
          function t (t) {
            var n = this.constructor;
            return this.then(
              function (e) {
                return n.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return n.resolve(t()).then(function () {
                  return n.reject(e);
                });
              }
            );
          }
          function c (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function a () {}
          function r (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function i (e) {
            if (!(this instanceof i)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              p(e, this);
          }
          function o (a, r) {
            for (; 3 === a._state; ) a = a._value;
            0 !== a._state
              ? ((a._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === a._state ? r.onFulfilled : r.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(a._value);
                    } catch (n) {
                      return void l(r.promise, n);
                    }
                    s(r.promise, t);
                  } else (1 === a._state ? s : l)(r.promise, a._value);
                }))
              : a._deferreds.push(r);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof n) return void p(r(n, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (a) {
              l(e, a);
            }
          }
          function l (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              i._immediateFn(function () {
                e._handled || i._unhandledRejectionFn(e._value);
              });
            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d (e, t, n) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = n);
          }
          function p (e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), s(t, e));
                },
                function (e) {
                  n || ((n = !0), l(t, e));
                }
              );
            } catch (a) {
              if (n) return;
              (n = !0), l(t, a);
            }
          }
          function f (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function n () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var a = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  a[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, a)).join('')
              );
            } catch (r) {
              return !1;
            }
          }
          function m (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var g = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              h = '\uD83D\uDE80',
              v =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : h,
              b = !1,
              y = function (e) {
                if (b && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(v),
                    e !== g.DEBUG || window.console[e] || (e = g.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              _ = y.bind(null, g.LOG),
              C = y.bind(null, g.INFO),
              I = y.bind(null, g.DEBUG),
              D = y.bind(null, g.WARN),
              S = y.bind(null, g.ERROR),
              A = {
                log: _,
                info: C,
                debug: I,
                warn: D,
                error: S,
                get outputEnabled () {
                  return b;
                },
                set outputEnabled (e) {
                  b = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: _.bind(null, t),
                    info: C.bind(null, t),
                    debug: I.bind(null, t),
                    warn: D.bind(null, t),
                    error: S.bind(null, t),
                  };
                },
              },
              k = function (r, i, o) {
                var n,
                  a,
                  s,
                  l,
                  c = [],
                  u = function (e, t, n) {
                    if (!r(t)) return e;
                    c.push(t);
                    var a = i(t, n);
                    return c.pop(), null == a && o ? '' : a;
                  };
                return (
                  (n = function (e, n) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? u(e, t[1], n)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return u(e, t, n);
                        });
                  }),
                  (a = function (e, t) {
                    for (var n = {}, a = Object.keys(e), r = 0; r < a.length; r++) {
                      var i = a[r],
                        o = e[i];
                      n[i] = l(o, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], a = 0, r = e.length; a < r; a++) n.push(l(e[a], t));
                    return n;
                  }),
                  (l = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? a(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < c.length
                      ? (A.error('Data element circular reference detected: ' + c.join(' -> ')), e)
                      : l(e, t);
                  }
                );
              },
              M = function (r) {
                return function (e, t) {
                  if ('string' == typeof e) r[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var a in n) r[a] = n[a];
                  }
                };
              },
              O = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              T = e(function (a) {
                !(function (e) {
                  if (
                    ('function' == typeof undefined && undefined.amd && (undefined(e), !0),
                    (a.exports = e()),
                    !!0)
                  ) {
                    var t = window.Cookies,
                      n = (window.Cookies = e());
                    n.noConflict = function () {
                      return (window.Cookies = t), n;
                    };
                  }
                })(function () {
                  function h () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var a in n) t[a] = n[a];
                    }
                    return t;
                  }
                  function e (g) {
                    function m (e, t, n) {
                      var a;
                      if ('undefined' != typeof document) {
                        if (1 < arguments.length) {
                          if ('number' == typeof (n = h({ path: '/' }, m.defaults, n)).expires) {
                            var r = new Date();
                            r.setMilliseconds(r.getMilliseconds() + 86400000 * n.expires),
                              (n.expires = r);
                          }
                          n.expires = n.expires ? n.expires.toUTCString() : '';
                          try {
                            (a = JSON.stringify(t)), /^[\{\[]/.test(a) && (t = a);
                          } catch (f) {}
                          (t = g.write
                            ? g.write(t, e)
                            : encodeURIComponent(String(t)).replace(
                                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                                decodeURIComponent
                              )),
                            (e = (e = (e = encodeURIComponent(String(e))).replace(
                              /%(23|24|26|2B|5E|60|7C)/g,
                              decodeURIComponent
                            )).replace(/[\(\)]/g, escape));
                          var i = '';
                          for (var o in n)
                            n[o] && ((i += '; ' + o), !0 !== n[o] && (i += '=' + n[o]));
                          return (document.cookie = e + '=' + t + i);
                        }
                        e || (a = {});
                        for (
                          var s = document.cookie ? document.cookie.split('; ') : [],
                            l = /(%[0-9A-Z]{2})+/g,
                            c = 0;
                          c < s.length;
                          c++
                        ) {
                          var u = s[c].split('='),
                            d = u.slice(1).join('=');
                          '"' === d.charAt(0) && (d = d.slice(1, -1));
                          try {
                            var p = u[0].replace(l, decodeURIComponent);
                            if (
                              ((d = g.read
                                ? g.read(d, p)
                                : g(d, p) || d.replace(l, decodeURIComponent)),
                              this.json)
                            )
                              try {
                                d = JSON.parse(d);
                              } catch (f) {}
                            if (e === p) {
                              a = d;
                              break;
                            }
                            e || (a[p] = d);
                          } catch (f) {}
                        }
                        return a;
                      }
                    }
                    return (
                      ((m.set = m).get = function (e) {
                        return m.call(m, e);
                      }),
                      (m.getJSON = function () {
                        return m.apply({ json: !0 }, [].slice.call(arguments));
                      }),
                      (m.defaults = {}),
                      (m.remove = function (e, t) {
                        m(e, '', h(t, { expires: -1 }));
                      }),
                      (m.withConverter = e),
                      m
                    );
                  }
                  return e(function () {});
                });
              }),
              E = { get: T.get, set: T.set, remove: T.remove },
              P = window,
              w = 'com.adobe.reactor.',
              V = function (a, e) {
                var r = w + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_8aa94a10ef86ad37 = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'localStorage'
                      ),
                      $___old_bf381859996b3978 = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'sessionStorage'
                      );
                    try {
                      if ($___old_8aa94a10ef86ad37)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      if ($___old_bf381859996b3978)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___stub_b317e19f866a2da7.sessionStorage
                        ));
                      return function () {
                        try {
                          return P[a].getItem(r + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_8aa94a10ef86ad37)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_8aa94a10ef86ad37
                        ));
                      if ($___old_bf381859996b3978)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___old_bf381859996b3978
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_e2c41815b8ebd13c = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_e2c41815b8ebd13c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return P[a].setItem(r + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_e2c41815b8ebd13c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_e2c41815b8ebd13c
                        ));
                    }
                  },
                };
              },
              L = '_sdsat_',
              x = 'dataElements.',
              j = 'dataElementCookiesMigrated',
              R = V('localStorage'),
              N = V('sessionStorage', x),
              F = V('localStorage', x),
              U = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              B = {},
              H = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              G = function (e, t, n) {
                var a;
                switch (t) {
                  case U.PAGEVIEW:
                    return void (B[e] = n);
                  case U.SESSION:
                    return void ((a = H(n)) && N.setItem(e, a));
                  case U.VISITOR:
                    return void ((a = H(n)) && F.setItem(e, a));
                }
              },
              q = function (e, t) {
                var n = E.get(L + e);
                n !== undefined && G(e, t, n);
              },
              Y = {
                setValue: G,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case U.PAGEVIEW:
                      return B.hasOwnProperty(e) ? B[e] : null;
                    case U.SESSION:
                      return null === (n = N.getItem(e)) ? n : JSON.parse(n);
                    case U.VISITOR:
                      return null === (n = F.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  R.getItem(j) ||
                    (Object.keys(t).forEach(function (e) {
                      q(e, t[e].storageDuration);
                    }),
                    R.setItem(j, !0));
                },
              },
              W = function (e, t, n, a) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (a ? '\n' + a : '')
                );
              },
              X = function (e) {
                return e !== undefined && null !== e;
              },
              J = function (s, l, c, u) {
                return function (e, t) {
                  var n = l(e);
                  if (!n) return u ? '' : null;
                  var a,
                    r = n.storageDuration;
                  try {
                    a = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void A.error(W(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof a) {
                    var i;
                    try {
                      i = a(c(n.settings, t), t);
                    } catch (o) {
                      return void A.error(W(n, e, o.message, o.stack));
                    }
                    return (
                      r && (X(i) ? Y.setValue(e, r, i) : (i = Y.getValue(e, r))),
                      X(i) || (i = n.defaultValue || ''),
                      'string' == typeof i &&
                        (n.cleanText && (i = O(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  A.error(W(n, e, 'Module did not export a function.'));
                };
              },
              z = function (e, t, n) {
                var a = { exports: {} };
                return e.call(a.exports, a, a.exports, t, n), a.exports;
              },
              K = function () {
                var o = {},
                  n = function (e) {
                    var t = o[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(o).forEach(function (e) {
                      try {
                        a(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        A.error(t);
                      }
                    });
                  },
                  a = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = z(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, a, r) {
                    var i = { definition: t, extensionName: n, require: a, turbine: r };
                    (i.require = a), (o[e] = i);
                  },
                  hydrateCache: e,
                  getModuleExports: a,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              Q = function (n, a) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    a(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              $ = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return O(e.textContent);
                },
              },
              Z = function (e, t, n) {
                for (var a, r = e, i = 0, o = t.length; i < o; i++) {
                  if (null == r) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var l = s.slice(1);
                    r = $[l](r);
                  } else if (r.getAttribute && (a = s.match(/^getAttribute\((.+)\)$/))) {
                    var c = a[1];
                    r = r.getAttribute(c);
                  } else r = r[s];
                }
                return r;
              },
              ee = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (o(e)) n = s(e, t);
                  else {
                    var a = e.split('.'),
                      r = a.shift();
                    'this' === r
                      ? t && (n = Z(t.element, a, !0))
                      : 'event' === r
                      ? t && (n = Z(t, a))
                      : 'target' === r
                      ? t && (n = Z(t.target, a))
                      : (n = Z(i[r], a));
                  }
                  return n;
                };
              },
              te = function (l, c) {
                return function (e, t) {
                  var n = l[e];
                  if (n) {
                    var a = n.modules;
                    if (a)
                      for (var r = Object.keys(a), i = 0; i < r.length; i++) {
                        var o = r[i],
                          s = a[o];
                        if (s.shared && s.name === t) return c.getModuleExports(o);
                      }
                  }
                };
              },
              ne = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              ae = function (n, a) {
                return function (e) {
                  if (a) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              re = '.js',
              ie = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              oe = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              se = function (e, t) {
                oe(t, re) || (t += re);
                var n = t.split('/'),
                  a = ie(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? a.length && a.pop() : a.push(e));
                  }),
                  a.join('/')
                );
              },
              le = document,
              ce = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, t) {
                var n = new this.constructor(a);
                return o(this, new d(e, t, n)), n;
              }),
              (i.prototype['finally'] = t),
              (i.all = function (t) {
                return new i(function (r, i) {
                  function o (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var n = e.then;
                        if ('function' == typeof n)
                          return void n.call(
                            e,
                            function (e) {
                              o(t, e);
                            },
                            i
                          );
                      }
                      (s[t] = e), 0 == --l && r(s);
                    } catch (a) {
                      i(a);
                    }
                  }
                  if (!c(t)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return r([]);
                  for (var l = s.length, e = 0; e < s.length; e++) o(e, s[e]);
                });
              }),
              (i.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              }),
              (i.reject = function (n) {
                return new i(function (e, t) {
                  t(n);
                });
              }),
              (i.race = function (r) {
                return new i(function (e, t) {
                  if (!c(r)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, a = r.length; n < a; n++) i.resolve(r[n]).then(e, t);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  ce(e, 0);
                }),
              (i._unhandledRejectionFn = function at (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ue = Object.freeze({ default: i }),
              de = (ue && i) || ue,
              pe = window.Promise || de['default'] || de,
              fe = function (n, a) {
                return new pe(function (e, t) {
                  (a.onload = function () {
                    e(a);
                  }),
                    (a.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              ge = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = fe(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              me = Object.getOwnPropertySymbols,
              he = Object.prototype.hasOwnProperty,
              ve = Object.prototype.propertyIsEnumerable,
              be = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, a = f(e), r = 1; r < arguments.length; r++) {
                      for (var i in (t = Object(arguments[r]))) he.call(t, i) && (a[i] = t[i]);
                      if (me) {
                        n = me(t);
                        for (var o = 0; o < n.length; o++) ve.call(t, n[o]) && (a[n[o]] = t[n[o]]);
                      }
                    }
                    return a;
                  },
              ye = function (e, t, n, a) {
                (t = t || '&'), (n = n || '=');
                var r = {};
                if ('string' != typeof e || 0 === e.length) return r;
                var i = /\+/g;
                e = e.split(t);
                var o = 1000;
                a && 'number' == typeof a.maxKeys && (o = a.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var l = 0; l < s; ++l) {
                  var c,
                    u,
                    d,
                    p,
                    f = e[l].replace(i, '%20'),
                    g = f.indexOf(n);
                  0 <= g ? ((c = f.substr(0, g)), (u = f.substr(g + 1))) : ((c = f), (u = '')),
                    (d = decodeURIComponent(c)),
                    (p = decodeURIComponent(u)),
                    m(r, d)
                      ? Array.isArray(r[d])
                        ? r[d].push(p)
                        : (r[d] = [r[d], p])
                      : (r[d] = p);
                }
                return r;
              },
              _e = function (e) {
                switch (typeof e) {
                  case 'string':
                    return e;
                  case 'boolean':
                    return e ? 'true' : 'false';
                  case 'number':
                    return isFinite(e) ? e : '';
                  default:
                    return '';
                }
              },
              Ce = function (n, a, r, e) {
                return (
                  (a = a || '&'),
                  (r = r || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(_e(e)) + r;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(_e(e));
                                })
                                .join(a)
                            : t + encodeURIComponent(_e(n[e]));
                        })
                        .join(a)
                    : e
                    ? encodeURIComponent(_e(e)) + r + encodeURIComponent(_e(n))
                    : ''
                );
              },
              Ie = e(function (e, t) {
                (t.decode = t.parse = ye), (t.encode = t.stringify = Ce);
              }),
              De = '@adobe/reactor-',
              Se = {
                cookie: E,
                document: le,
                'load-script': ge,
                'object-assign': be,
                promise: pe,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Ie.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Ie.stringify(e);
                  },
                },
                window: P,
              },
              Ae = function (a) {
                return function (e) {
                  if (0 === e.indexOf(De)) {
                    var t = e.substr(De.length),
                      n = Se[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return a(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              ke = function (e, o, s, l) {
                var c = e.extensions,
                  u = e.buildInfo,
                  d = e.property.settings;
                if (c) {
                  var p = te(c, o);
                  Object.keys(c).forEach(function (a) {
                    var r = c[a],
                      e = ne(s, r.settings);
                    if (r.modules) {
                      var t = A.createPrefixedLogger(r.displayName),
                        n = ae(r.hostedLibFilesBaseUrl, u.minified),
                        i = {
                          buildInfo: u,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: p,
                          logger: t,
                          propertySettings: d,
                          replaceTokens: s,
                        };
                      Object.keys(r.modules).forEach(function (n) {
                        var e = r.modules[n],
                          t = Ae(function (e) {
                            var t = se(n, e);
                            return o.getModuleExports(t);
                          });
                        o.registerModule(n, e, a, t, i);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              Me = function (e, t, n, a, r) {
                var i = A.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  A.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = i),
                  (e.notify = function (e, t) {
                    switch (
                      (A.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        i.info(e);
                        break;
                      case 4:
                        i.warn(e);
                        break;
                      case 5:
                        i.error(e);
                        break;
                      default:
                        i.log(e);
                    }
                  }),
                  (e.getVar = a),
                  (e.setVar = r),
                  (e.setCookie = function (e, t, n) {
                    var a = '',
                      r = {};
                    n && ((a = ', { expires: ' + n + ' }'), (r.expires = n));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      a +
                      ').';
                    A.warn(i), E.set(e, t, r);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      A.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      E.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    A.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      E.remove(e);
                  }),
                  (e.cookie = E),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (A.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (o = !0)),
                      t
                    );
                  },
                });
              },
              Oe = function (e, t) {
                return (
                  be((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          A.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Te = function (e) {
                var n = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        n.push({ rule: t, event: e });
                      });
                  }),
                  n.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              Ee = !1,
              Pe = function (a) {
                return function (t, n) {
                  var e = a._monitors;
                  e &&
                    (Ee ||
                      (A.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (Ee = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              we = 'Module did not export a function.',
              Ve = function (i, o) {
                return function (e, t, n) {
                  n = n || [];
                  var a = i.getModuleExports(e.modulePath);
                  if ('function' != typeof a) throw new Error(we);
                  var r = o(e.settings || {}, t);
                  return a.bind(null, r).apply(null, n);
                };
              },
              Le = V('localStorage'),
              xe = V('sessionStorage'),
              je = function () {
                return Boolean(Le.getItem('queue') || xe.getItem('queue'));
              },
              Re = 2000,
              Ne = !1,
              Fe = function () {
                Ne ||
                  ((Ne = !0),
                  A.warn(
                    'Rule queueing is only intended for testing purposes. Queueing behavior may be changed or removed at any time.'
                  ));
              },
              Ue = function (e, t, s, n) {
                var i = pe.resolve(),
                  l = Pe(e),
                  c = Ve(s, n),
                  r = function (e) {
                    var t = s.getModuleDefinition(e.modulePath);
                    return (t && t.displayName) || e.modulePath;
                  },
                  u = function (e, t, n, a) {
                    return (
                      'Failed to execute ' +
                      r(e) +
                      ' for ' +
                      t.name +
                      ' rule. ' +
                      n +
                      (a ? '\n' + a : '')
                    );
                  },
                  o = function (e, t, n) {
                    A.error(u(e, t, n.message, n.stack)),
                      l('ruleActionFailed', { rule: t, action: e });
                  },
                  d = function (e, t, n) {
                    A.error(u(e, t, n.message, n.stack)),
                      l('ruleConditionFailed', { rule: t, condition: e });
                  },
                  p = function (e, t) {
                    var n = r(e);
                    A.log('Condition ' + n + ' for rule ' + t.name + ' not met.'),
                      l('ruleConditionFailed', { rule: t, condition: e });
                  },
                  f = function (e) {
                    A.log('Rule "' + e.name + '" fired.'), l('ruleCompleted', { rule: e });
                  },
                  g = function (e) {
                    return (
                      e ||
                        (e = new Error(
                          'The extension triggered an error, but no error information was provided.'
                        )),
                      e instanceof Error || (e = new Error(String(e))),
                      e
                    );
                  },
                  m = function (e, t) {
                    return (t && !e.negate) || (!t && e.negate);
                  },
                  h = function (t, r) {
                    t.conditions &&
                      t.conditions.forEach(function (a) {
                        i = i.then(function () {
                          var n;
                          return new pe(function (e, t) {
                            (n = setTimeout(function () {
                              t(
                                'A timeout occurred because the condition took longer than ' +
                                  Re / 1000 +
                                  ' seconds to complete. '
                              );
                            }, Re)),
                              pe.resolve(c(a, r, [r])).then(e, t);
                          })
                            ['catch'](function (e) {
                              return clearTimeout(n), (e = g(e, a)), d(a, t, e), pe.reject(e);
                            })
                            .then(function (e) {
                              if ((clearTimeout(n), !m(a, e))) return p(a, t), pe.reject();
                            });
                        });
                      }),
                      t.actions &&
                        t.actions.forEach(function (a) {
                          i = i.then(function () {
                            var n;
                            return new pe(function (e, t) {
                              (n = setTimeout(function () {
                                t(
                                  'A timeout occurred because the action took longer than ' +
                                    Re / 1000 +
                                    ' seconds to complete. '
                                );
                              }, Re)),
                                pe.resolve(c(a, r, [r])).then(e, t);
                            })
                              .then(function () {
                                clearTimeout(n);
                              })
                              ['catch'](function (e) {
                                return clearTimeout(n), (e = g(e)), o(a, t, e), pe.reject(e);
                              });
                          });
                        }),
                      (i = (i = i.then(function () {
                        f(t);
                      }))['catch'](function () {}));
                  },
                  v = function (e, t) {
                    var n;
                    if (e.conditions)
                      for (var a = 0; a < e.conditions.length; a++) {
                        n = e.conditions[a];
                        try {
                          var r = c(n, t, [t]);
                          if (!m(n, r)) return void p(n, e);
                        } catch (i) {
                          return void d(n, e, i);
                        }
                      }
                    b(e, t);
                  },
                  b = function (e, t) {
                    var n;
                    if (e.actions)
                      for (var a = 0; a < e.actions.length; a++) {
                        n = e.actions[a];
                        try {
                          c(n, t, [t]);
                        } catch (r) {
                          return void o(n, e, r);
                        }
                      }
                    f(e);
                  },
                  y = !1,
                  _ = [],
                  a = function (e) {
                    var t,
                      n = e.rule,
                      a = e.event;
                    a.settings = a.settings || {};
                    try {
                      t = s.getModuleDefinition(a.modulePath).name;
                      var r = {
                          $type: s.getModuleExtensionName(a.modulePath) + '.' + t,
                          $rule: { id: n.id, name: n.name },
                        },
                        i = function (e) {
                          if (y) {
                            l('ruleTriggered', { rule: n });
                            var t = Oe(r, e);
                            je() ? (Fe(), h(n, t)) : v(n, t);
                          } else _.push(i.bind(null, e));
                        };
                      c(a, null, [i]);
                    } catch (o) {
                      A.error(u(a, n, o.message, o.stack));
                    }
                  };
                return (
                  Te(t).forEach(a),
                  (y = !0),
                  _.forEach(function (e) {
                    e();
                  }),
                  (_ = null),
                  i
                );
              },
              Be = 'debug',
              He = window._satellite;
            if (He && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var Ge = He.container;
              delete He.container;
              var qe = Ge.property.settings.undefinedVarsReturnEmpty,
                Ye = Ge.dataElements || {};
              Y.migrateCookieData(Ye);
              var We,
                Xe = function (e) {
                  return Ye[e];
                },
                Je = K(),
                ze = J(
                  Je,
                  Xe,
                  function () {
                    return We.apply(null, arguments);
                  },
                  qe
                ),
                Ke = {},
                Qe = M(Ke),
                $e = Q(Ke, Xe),
                Ze = ee(Ke, Xe, ze);
              We = k($e, Ze, qe);
              var et = V('localStorage'),
                tt = function () {
                  return 'true' === et.getItem(Be);
                },
                nt = function (e) {
                  et.setItem(Be, e), (A.outputEnabled = e);
                };
              (A.outputEnabled = tt()),
                Me(He, Ge, nt, Ze, Qe),
                ke(Ge, Je, We, ze),
                Ue(He, Ge.rules || [], Je, We);
            }
            return He;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_cc9674d9a8cd7747)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_cc9674d9a8cd7747
          ));
      }
    })();
    _satellite = $___var_d4a6967d841c6909;
  })();
}
