var _satellite;
{
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
          buildDate: '2020-11-07T01:24:06Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'visitor.email': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.visitor.email' },
          },
          event: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.event' },
          },
          'ecommerce.shippingmethod': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.shippingMethod' },
          },
          'ecommerce.promocodediscount': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.promoCodeDiscount' },
          },
          icid: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'icid', caseInsensitive: !0 },
          },
          'ecommerce.checkouttype': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.checkoutType' },
          },
          'js - campaign': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = _satellite.getVar('utm_medium') || '',
                  t = _satellite.getVar('utm_source') || '',
                  n = _satellite.getVar('utm_campaign') || '',
                  r = _satellite.getVar('utm_content') || '',
                  a = _satellite.getVar('utm_term') || '',
                  i = [];
                return (
                  (i[0] = e),
                  (i[1] = t),
                  (i[2] = n),
                  (i[3] = r),
                  (i[4] = a),
                  '' == e && '' == t && '' == n && '' == r ? '' : i.join('|')
                );
              },
            },
          },
          'page.pagename': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (
                  (output = digitalData.page.pageName),
                  /:$/gi.test(output) && (output = output.replace(/:$/g, '')),
                  output
                );
              },
            },
          },
          formname: {
            defaultValue: '',
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.formName' },
          },
          utm_medium: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_medium', caseInsensitive: !0 },
          },
          'site.country': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.site.country' },
          },
          nevertrackdomains: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (domains = 'efficientlearning.com,wiley.com,amazonaws.com'), domains;
              },
            },
          },
          'ecommerce.paymentmethod': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.paymentMethod' },
          },
          'search.filters': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.search.filters' },
          },
          'page.section': {
            defaultValue: '',
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.section' },
          },
          reportsuiteid: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = 'wileyglobaldev';
                return 'prod' == _satellite.getVar('environment') && (e = 'wileyglobalprod'), e;
              },
            },
          },
          utm_source: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_source', caseInsensitive: !0 },
          },
          'ecommerce.orderid': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.orderId' },
          },
          'ecommerce.subtotalrevenue': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.subTotalRevenue' },
          },
          'page.type': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.page.type' },
          },
          'ecommerce.shippingtotal': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.shippingTotal' },
          },
          loginstatus: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'NEED_COOKIE_NAME' },
          },
          'search.type': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.search.type' },
          },
          'search.term': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.search.term' },
          },
          'search.numsearchresults': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.search.numSearchResults' },
          },
          environment: {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.environment' },
          },
          formsuccesspage: {
            defaultValue: '',
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.formSuccessPage' },
          },
          utm_content: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_content', caseInsensitive: !0 },
          },
          'site.language': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.site.language' },
          },
          utm_term: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_term', caseInsensitive: !0 },
          },
          'ecommerce.totalrevenue': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.totalRevenue' },
          },
          'ecommerce.promocode': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.promoCode' },
          },
          'ecommerce.products': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.products' },
          },
          currency: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.ecommerce.currency' },
          },
          utm_campaign: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'utm_campaign', caseInsensitive: !0 },
          },
          'site.platform': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'digitalData.site.platform' },
          },
        },
        extensions: {
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, n, m) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    a = n('../codeLibrary/VisitorAPI'),
                    g = n('../../view/utils/timeUnits'),
                    h = function (e) {
                      return e.reduce(function (e, t) {
                        var n = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = n), e;
                      }, {});
                    },
                    i = function (e) {
                      var t = m.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var n = h(t.variables || []),
                        r = t.doesOptInApply;
                      r &&
                        ('boolean' == typeof r
                          ? (n.doesOptInApply = r)
                          : t.optInCallback && (n.doesOptInApply = t.optInCallback));
                      var a = t.isOptInStorageEnabled;
                      a && (n.isOptInStorageEnabled = a);
                      var i = t.optInCookieDomain;
                      i && (n.optInCookieDomain = i);
                      var o = t.optInStorageExpiry;
                      if (o) {
                        var s = t.timeUnit;
                        if (s && g[s]) {
                          var c = o * g[s];
                          n.optInStorageExpiry = c;
                        }
                      } else !0 === a && (n.optInStorageExpiry = 33696000);
                      var u = t.previousPermissions;
                      u && (n.previousPermissions = u);
                      var l = t.preOptInApprovals;
                      if (l) n.preOptInApprovals = l;
                      else {
                        var d = t.preOptInApprovalInput;
                        d && (n.preOptInApprovals = d);
                      }
                      var f = t.isIabContext;
                      f && (n.isIabContext = f);
                      var p = e.getInstance(t.orgId, n);
                      return (
                        m.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        m.logger.info('Set variables: ' + JSON.stringify(n)),
                        p.getMarketingCloudVisitorID(function (e) {
                          m.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        p
                      );
                    },
                    o = function (t) {
                      return (m.getExtensionSettings().pathExclusions || []).some(function (e) {
                        return e.valueIsRegex ? new RegExp(e.value, 'i').test(t) : e.value === t;
                      });
                    },
                    s = null;
                  (_satellite.getVisitorId = function () {
                    return s;
                  }),
                    o(r.location.pathname)
                      ? m.logger.warn(
                          'MCID library not loaded. One of the path exclusions matches the current path.'
                        )
                      : (s = i(a)),
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
                      function x (e) {
                        return (x =
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
                              r = this;
                            return function () {
                              r.callbacks[e].splice(n, 1);
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
                            (e || (n && !N.isObjectEmpty(n))) &&
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
                      function u (e, t, n) {
                        var r = null == e ? void 0 : e[t];
                        return void 0 === r ? n : r;
                      }
                      function a (e) {
                        for (var t = /^\d+$/, n = 0, r = e.length; n < r; n++)
                          if (!t.test(e[n])) return !1;
                        return !0;
                      }
                      function i (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function o (e, t) {
                        for (var n = 0; n < e.length; n++) {
                          var r = parseInt(e[n], 10),
                            a = parseInt(t[n], 10);
                          if (a < r) return 1;
                          if (r < a) return -1;
                        }
                        return 0;
                      }
                      function n (e, t) {
                        if (e === t) return 0;
                        var n = e.toString().split('.'),
                          r = t.toString().split('.');
                        return a(n.concat(r)) ? (i(n, r), o(n, r)) : NaN;
                      }
                      function s (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function c (e) {
                        return 'function' == typeof e || (e instanceof Array && e.length);
                      }
                      function r (e, t) {
                        var n = 0 < arguments.length && void 0 !== e ? arguments[0] : '',
                          r =
                            1 < arguments.length && void 0 !== t
                              ? arguments[1]
                              : function () {
                                  return !0;
                                };
                        (this.log = de('log', n, r)),
                          (this.warn = de('warn', n, r)),
                          (this.error = de('error', n, r));
                      }
                      function M (e, t) {
                        var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          r = n.isEnabled,
                          a = n.cookieName,
                          i = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        return r && a && i
                          ? {
                              remove: function () {
                                i.remove(a);
                              },
                              get: function () {
                                var e = i.get(a),
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
                                  i.set(a, JSON.stringify(e), {
                                    domain: t.optInCookieDomain || '',
                                    cookieLifetime: t.optInStorageExpiry || 34190000,
                                    expires: !0,
                                  });
                              },
                            }
                          : { get: Se, set: Se, remove: Se };
                      }
                      function l (e) {
                        (this.name = this.constructor.name),
                          (this.message = e),
                          'function' == typeof Error.captureStackTrace
                            ? Error.captureStackTrace(this, this.constructor)
                            : (this.stack = new Error(e).stack);
                      }
                      function d (e, t) {
                        function n (e, t) {
                          var n = me(e);
                          return n.length
                            ? n.every(function (e) {
                                return !!t[e];
                              })
                            : ge(t);
                        }
                        function r () {
                          j(O),
                            T(re.COMPLETE),
                            I(C.status, C.permissions),
                            _.set(C.permissions, { optInCookieDomain: l, optInStorageExpiry: d }),
                            k.execute(Oe);
                        }
                        function a (n) {
                          return function (e, t) {
                            if (!he(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return T(re.CHANGED), Object.assign(O, ve(me(e), n)), t || r(), C;
                          };
                        }
                        var i = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          o = i.doesOptInApply,
                          s = i.previousPermissions,
                          c = i.preOptInApprovals,
                          u = i.isOptInStorageEnabled,
                          l = i.optInCookieDomain,
                          d = i.optInStorageExpiry,
                          f = i.isIabContext,
                          p = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          m = Pe(s);
                        we(m, 'Invalid `previousPermissions`!'),
                          we(c, 'Invalid `preOptInApprovals`!');
                        var g,
                          h,
                          v,
                          b,
                          y,
                          _ = M({ isEnabled: !!u, cookieName: 'adobeujs-optin' }, { cookies: p }),
                          C = this,
                          I = ne(C),
                          k = ce(),
                          S = _e(m),
                          P = _e(c),
                          w = _.get(),
                          E = {},
                          A = ((y = w), Ce(S) || (y && Ce(y)) ? re.COMPLETE : re.PENDING),
                          D =
                            ((g = P),
                            (h = S),
                            (v = w),
                            (b = ve(se, !o)),
                            o ? Object.assign({}, b, g, h, v) : b),
                          O = be(D),
                          T = function (e) {
                            return (A = e);
                          },
                          j = function (e) {
                            return (D = e);
                          };
                        (C.deny = a(!1)),
                          (C.approve = a(!0)),
                          (C.denyAll = C.deny.bind(C, se)),
                          (C.approveAll = C.approve.bind(C, se)),
                          (C.isApproved = function (e) {
                            return n(e, C.permissions);
                          }),
                          (C.isPreApproved = function (e) {
                            return n(e, P);
                          }),
                          (C.fetchPermissions = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t && arguments[1],
                              r = n ? C.on(re.COMPLETE, e) : Se;
                            return (
                              !o || (o && C.isComplete) || c
                                ? e(C.permissions)
                                : n ||
                                  k.add(Oe, function () {
                                    return e(C.permissions);
                                  }),
                              r
                            );
                          }),
                          (C.complete = function () {
                            C.status === re.CHANGED && r();
                          }),
                          (C.registerPlugin = function (e) {
                            if (!e || !e.name || 'function' != typeof e.onRegister)
                              throw new Error(Te);
                            E[e.name] || (E[e.name] = e).onRegister.call(e, C);
                          }),
                          (C.execute = De(E)),
                          Object.defineProperties(C, {
                            permissions: {
                              get: function () {
                                return D;
                              },
                            },
                            status: {
                              get: function () {
                                return A;
                              },
                            },
                            Categories: {
                              get: function () {
                                return ae;
                              },
                            },
                            doesOptInApply: {
                              get: function () {
                                return !!o;
                              },
                            },
                            isPending: {
                              get: function () {
                                return C.status === re.PENDING;
                              },
                            },
                            isComplete: {
                              get: function () {
                                return C.status === re.COMPLETE;
                              },
                            },
                            __plugins: {
                              get: function () {
                                return Object.keys(E);
                              },
                            },
                            isIabContext: {
                              get: function () {
                                return f;
                              },
                            },
                          });
                      }
                      function f (e, t) {
                        function n () {
                          (a = null), e.call(e, new l('The call took longer than you wanted!'));
                        }
                        function r () {
                          a && (clearTimeout(a), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var a = setTimeout(n, t);
                        return r;
                      }
                      function p () {
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
                                var r = Math.random() + '',
                                  a = { __cmpCall: { command: e, parameter: t, callId: r } };
                                (o[r] = n), i.postMessage(a, '*');
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
                          fe.error('__cmp not found');
                        } else fe.error('__cmp not found');
                      }
                      function m () {
                        var t = this;
                        (t.name = 'iabPlugin'), (t.version = '0.0.1');
                        var s = ce(),
                          c = { allConsentData: null },
                          u = function (e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (c[e] = n);
                          };
                        (t.fetchConsentData = function (e) {
                          var t = f(e.callback, e.timeout);
                          r({ callback: t });
                        }),
                          (t.isApproved = function (e) {
                            var i = e.callback,
                              o = e.category,
                              t = e.timeout;
                            if (c.allConsentData)
                              return i(
                                null,
                                d(
                                  o,
                                  c.allConsentData.vendorConsents,
                                  c.allConsentData.purposeConsents
                                )
                              );
                            var n = f(function (e, t) {
                              var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                r = n.vendorConsents,
                                a = n.purposeConsents;
                              i(e, d(o, r, a));
                            }, t);
                            r({ category: o, callback: n });
                          }),
                          (t.onRegister = function (o) {
                            var s = Object.keys(ie),
                              e = function (e, t) {
                                var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                  r = n.purposeConsents,
                                  a = n.gdprApplies,
                                  i = n.vendorConsents;
                                !e &&
                                  a &&
                                  i &&
                                  r &&
                                  (s.forEach(function (e) {
                                    var t = d(e, i, r);
                                    o[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  o.complete());
                              };
                            t.fetchConsentData({ callback: e });
                          });
                        var r = function (e) {
                            var t = e.callback;
                            if (c.allConsentData) return t(null, c.allConsentData);
                            s.add('FETCH_CONSENT_DATA', t);
                            var o = {};
                            n(function (e, t) {
                              var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                                r = n.purposeConsents,
                                a = n.gdprApplies,
                                i = n.vendorConsents;
                              (1 < arguments.length ? t : void 0) &&
                                u(
                                  'allConsentData',
                                  (o = { purposeConsents: r, gdprApplies: a, vendorConsents: i })
                                ),
                                l(function (e, t) {
                                  var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {};
                                  (1 < arguments.length ? t : void 0) &&
                                    ((o.consentString = n.consentData), u('allConsentData', o)),
                                    s.execute('FETCH_CONSENT_DATA', [null, c.allConsentData]);
                                });
                            });
                          },
                          l = function (e) {
                            var t = p();
                            t && t('getConsentData', null, e);
                          },
                          n = function (e) {
                            var t = Ae(ie),
                              n = p();
                            n && n('getVendorConsents', t, e);
                          },
                          d = function (e, t, n) {
                            var r = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                              a = 2 < arguments.length && void 0 !== n ? arguments[2] : {};
                            return (
                              !!r[ie[e]] &&
                              oe[e].every(function (e) {
                                return a[e];
                              })
                            );
                          };
                      }
                      var L =
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
                          for (var t, n, r = 1; r < arguments.length; ++r)
                            for (t in (n = arguments[r]))
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return e;
                        };
                      var g,
                        h,
                        v,
                        b,
                        y,
                        R = {
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
                        _ = R.STATE_KEYS_MAP,
                        C = function (i) {
                          function r () {}
                          function a (n, r) {
                            var a = this;
                            return function () {
                              var e = i(0, n),
                                t = {};
                              return (t[n] = e), a.setStateAndPublish(t), r(e), e;
                            };
                          }
                          (this.getMarketingCloudVisitorID = function (e) {
                            e = e || r;
                            var t = this.findField(_.MCMID, e),
                              n = a.call(this, _.MCMID, e);
                            return void 0 !== t ? t : n();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        I = R.MESSAGES,
                        k = R.ASYNC_API_MAP,
                        S = R.SYNC_API_MAP,
                        P = function () {
                          function a () {}
                          function i (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(I.GETSTATE), '';
                            };
                          }
                          function e (r) {
                            this[k[r]] = function (e) {
                              e = e || a;
                              var t = this.findField(r, e),
                                n = i.call(this, r, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[S[e]] = function () {
                              return this.findField(e, a) || {};
                            };
                          }
                          Object.keys(k).forEach(e, this), Object.keys(S).forEach(t, this);
                        },
                        w = R.ASYNC_API_MAP,
                        E = function () {
                          Object.keys(w).forEach(function (t) {
                            this[w[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        N =
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
                            return null !== e && 'object' === x(e) && !1 === Array.isArray(e);
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
                            var r = parseInt(e.d_ottl, 10);
                            return isNaN(r) && (r = 7200), { optOut: t, d_ottl: r };
                          }),
                          (b.normalizeBoolean = function (e) {
                            var t = e;
                            return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                          }),
                          y.exports),
                        A =
                          (N.isObjectEmpty,
                          N.isValueEmpty,
                          N.getIeVersion,
                          N.encodeAndBuildRequest,
                          N.isObject,
                          N.defineGlobalNamespace,
                          N.pluck,
                          N.parseOptOut,
                          N.normalizeBoolean,
                          t),
                        D = R.MESSAGES,
                        O = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        F = function (i, o) {
                          (this.parse = function (e) {
                            try {
                              var n = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (n[O[t]] = 2 !== t ? e : JSON.parse(e));
                                }),
                                n
                              );
                            } catch (e) {}
                          }),
                            (this.isInvalid = function (e) {
                              var t = this.parse(e);
                              if (!t || Object.keys(t).length < 2) return !0;
                              var n = i !== t.orgID,
                                r = !o || e.origin !== o,
                                a = -1 === Object.keys(D).indexOf(t.prefix);
                              return n || r || a;
                            }),
                            (this.send = function (e, t, n) {
                              var r = t + '|' + i;
                              n && n === Object(n) && (r += '|' + JSON.stringify(n));
                              try {
                                e.postMessage(r, o);
                              } catch (i) {}
                            });
                        },
                        T = R.MESSAGES,
                        j = function (e, t, n, r) {
                          function a (e) {
                            Object.assign(p, e);
                          }
                          function i (e) {
                            Object.assign(p.state, e),
                              Object.assign(p.state.ALLFIELDS, e),
                              p.callbackRegistry.executeAll(p.state);
                          }
                          function o (e) {
                            if (!h.isInvalid(e)) {
                              g = !1;
                              var t = h.parse(e);
                              p.setStateAndPublish(t.state);
                            }
                          }
                          function s (e) {
                            !g && m && ((g = !0), h.send(r, e));
                          }
                          function c () {
                            a(new C(n._generateID)),
                              p.getMarketingCloudVisitorID(),
                              p.callbackRegistry.executeAll(p.state, !0),
                              L.removeEventListener('message', u);
                          }
                          function u (e) {
                            if (!h.isInvalid(e)) {
                              var t = h.parse(e);
                              (g = !1),
                                L.clearTimeout(p._handshakeTimeout),
                                L.removeEventListener('message', u),
                                a(new P(p)),
                                L.addEventListener('message', o),
                                p.setStateAndPublish(t.state),
                                p.callbackRegistry.hasCallbacks() && s(T.GETSTATE);
                            }
                          }
                          function l () {
                            m && postMessage
                              ? (L.addEventListener('message', u),
                                s(T.HANDSHAKE),
                                (p._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            L.s_c_in || ((L.s_c_il = []), (L.s_c_in = 0)),
                              (p._c = 'Visitor'),
                              (p._il = L.s_c_il),
                              (p._in = L.s_c_in),
                              (p._il[p._in] = p),
                              L.s_c_in++;
                          }
                          function f () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof n[e] &&
                                (p[e] = function () {});
                            }
                            Object.keys(n).forEach(e),
                              (p.getSupplementalDataID = n.getSupplementalDataID),
                              (p.isAllowed = function () {
                                return !0;
                              });
                          }
                          var p = this,
                            m = t.whitelistParentDomain;
                          (p.state = { ALLFIELDS: {} }),
                            (p.version = n.version),
                            (p.marketingCloudOrgID = e),
                            (p.cookieDomain = n.cookieDomain || '');
                          var g = !(p._instanceType = 'child'),
                            h = new F(e, m);
                          (p.callbackRegistry = A()),
                            (p.init = function () {
                              d(), f(), a(new E(p)), l();
                            }),
                            (p.findField = function (e, t) {
                              if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
                            }),
                            (p.messageParent = s),
                            (p.setStateAndPublish = i);
                        },
                        V = R.MESSAGES,
                        U = R.ALL_APIS,
                        H = R.ASYNC_API_MAP,
                        B = R.FIELDGROUP_TO_FIELD,
                        q = function (a, r) {
                          function i () {
                            var r = {};
                            return (
                              Object.keys(U).forEach(function (e) {
                                var t = U[e],
                                  n = a[t]();
                                N.isValueEmpty(n) || (r[e] = n);
                              }),
                              r
                            );
                          }
                          function o () {
                            var n = [];
                            return (
                              a._loading &&
                                Object.keys(a._loading).forEach(function (e) {
                                  if (a._loading[e]) {
                                    var t = B[e];
                                    n.push(t);
                                  }
                                }),
                              n.length ? n : null
                            );
                          }
                          function t (n) {
                            return function r () {
                              var e = o();
                              if (e) {
                                var t = H[e[0]];
                                a[t](r, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = i();
                            r.send(e, t, n);
                          }
                          function s (e) {
                            u(e), n(e, V.HANDSHAKE);
                          }
                          function c (e) {
                            t(function () {
                              n(e, V.PARENTSTATE);
                            })();
                          }
                          function u (t) {
                            function e (e) {
                              n.call(a, e),
                                r.send(t, V.PARENTSTATE, { CUSTOMERIDS: a.getCustomerIDs() });
                            }
                            var n = a.setCustomerIDs;
                            a.setCustomerIDs = e;
                          }
                          return function (e) {
                            r.isInvalid(e) ||
                              (r.parse(e).prefix === V.HANDSHAKE ? s : c)(e.source);
                          };
                        },
                        G = function (r, n) {
                          function a (t) {
                            return function (e) {
                              (i[t] = e), ++o === s && n(i);
                            };
                          }
                          var i = {},
                            o = 0,
                            s = Object.keys(r).length;
                          Object.keys(r).forEach(function (e) {
                            var t = r[e];
                            if (t.fn) {
                              var n = t.args || [];
                              n.unshift(a(e)), t.fn.apply(t.context || null, n);
                            }
                          });
                        },
                        W = {
                          get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'),
                              n = t.indexOf(';' + e + '='),
                              r = n < 0 ? n : t.indexOf(';', n + 1);
                            return n < 0
                              ? ''
                              : decodeURIComponent(
                                  t.substring(n + 2 + e.length, r < 0 ? t.length : r)
                                );
                          },
                          set: function (e, t, n) {
                            var r = u(n, 'cookieLifetime'),
                              a = u(n, 'expires'),
                              i = u(n, 'domain'),
                              o = u(n, 'secure') ? 'Secure' : '';
                            if (a && 'SESSION' !== r && 'NONE' !== r) {
                              var s = '' !== t ? parseInt(r || 0, 10) : -60;
                              if (s) (a = new Date()).setTime(a.getTime() + 1000 * s);
                              else if (1 === a) {
                                var c = (a = new Date()).getYear();
                                a.setYear(c + 2 + (c < 1900 ? 1900 : 0));
                              }
                            } else a = 0;
                            return e && 'NONE' !== r
                              ? ((document.cookie =
                                  encodeURIComponent(e) +
                                  '=' +
                                  encodeURIComponent(t) +
                                  '; path=/;' +
                                  (a ? ' expires=' + a.toGMTString() + ';' : '') +
                                  (i ? ' domain=' + i + ';' : '') +
                                  o),
                                this.get(e) === t)
                              : 0;
                          },
                          remove: function (e, t) {
                            var n = u(t, 'domain');
                            (n = n ? ' domain=' + n + ';' : ''),
                              (document.cookie =
                                encodeURIComponent(e) +
                                '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                n);
                          },
                        },
                        Y = function (e) {
                          var t;
                          !e && L.location && (e = L.location.hostname);
                          var n,
                            r = (t = e).split('.');
                          for (n = r.length - 2; 0 <= n; n--)
                            if (
                              ((t = r.slice(n).join('.')), W.set('test', 'cookie', { domain: t }))
                            )
                              return W.remove('test', { domain: t }), t;
                          return '';
                        },
                        $ = {
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
                        J = !!L.postMessage,
                        Q = {
                          postMessage: function (e, t, n) {
                            var r = 1;
                            t &&
                              (J
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + r++ + '&' + e));
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
                                L.addEventListener
                                  ? L[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : L[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        K = function (e) {
                          var t,
                            n,
                            r = '0123456789',
                            a = '',
                            i = '',
                            o = 8,
                            s = 10,
                            c = 10;
                          if (1 == e) {
                            for (r += 'ABCDEF', t = 0; t < 16; t++)
                              (n = Math.floor(Math.random() * o)),
                                (a += r.substring(n, n + 1)),
                                (n = Math.floor(Math.random() * o)),
                                (i += r.substring(n, n + 1)),
                                (o = 16);
                            return a + '-' + i;
                          }
                          for (t = 0; t < 19; t++)
                            (n = Math.floor(Math.random() * s)),
                              (a += r.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (s = 3)
                                : (1 == t || 2 == t) && 10 != s && n < 2
                                ? (s = 10)
                                : 2 < t && (s = 10),
                              (n = Math.floor(Math.random() * c)),
                              (i += r.substring(n, n + 1)),
                              0 === t && 9 == n
                                ? (c = 3)
                                : (1 == t || 2 == t) && 10 != c && n < 2
                                ? (c = 10)
                                : 2 < t && (c = 10);
                          return a + i;
                        },
                        z = function (r) {
                          const $___old_d8dcd07371646b19 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_df067ae868e68e6c = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_d8dcd07371646b19)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            if ($___old_df067ae868e68e6c)
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
                                        .call(L.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_8ecfbd9169f88dd5 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_a28ac9b98508d5d0 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_8ecfbd9169f88dd5)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    if ($___old_a28ac9b98508d5d0)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new L[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_8ecfbd9169f88dd5)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_8ecfbd9169f88dd5
                                      ));
                                    if ($___old_a28ac9b98508d5d0)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_a28ac9b98508d5d0
                                      ));
                                  }
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
                                      for (var n = i.callback, r = L, a = 0; a < n.length; a++)
                                        r = r[n[a]];
                                      r(t);
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
                                        (n.timeout = r.loadTimeout),
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
                                      r._log.requests.push(i.corsUrl);
                                  } catch (r) {
                                    this.handleCORSError(i, r, 'try-catch');
                                  }
                                },
                                handleCORSError: function (e, t, n) {
                                  r.CORSErrors.push({ corsData: e, error: t, description: n }),
                                    e.loadErrorHandler &&
                                      ('ontimeout' === n
                                        ? e.loadErrorHandler(!0)
                                        : e.loadErrorHandler(!1));
                                },
                              };
                              var e, t;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_d8dcd07371646b19)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_d8dcd07371646b19
                              ));
                            if ($___old_df067ae868e68e6c)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_df067ae868e68e6c
                              ));
                          }
                        },
                        X = {
                          POST_MESSAGE_ENABLED: !!L.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        Z = function (m, t) {
                          var a = L.document;
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
                                  m.idSyncContainerID +
                                  '#' +
                                  encodeURIComponent(a.location.origin);
                              return (
                                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                                m.loadSSL &&
                                  (t = m.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                                (e = t + this.subdomain + '.demdex.net/dest5.html' + n),
                                (this.iframeHost = this.getIframeHost(e)),
                                (this.id =
                                  'destination_publishing_iframe_' +
                                  this.subdomain +
                                  '_' +
                                  m.idSyncContainerID),
                                e
                              );
                            },
                            checkDPIframeSrc: function () {
                              var e =
                                '?d_nsid=' +
                                m.idSyncContainerID +
                                '#' +
                                encodeURIComponent(a.location.href);
                              'string' == typeof m.dpIframeSrc &&
                                m.dpIframeSrc.length &&
                                ((this.id =
                                  'destination_publishing_iframe_' +
                                  (m._subdomain || this.subdomain || new Date().getTime()) +
                                  '_' +
                                  m.idSyncContainerID),
                                (this.iframeHost = this.getIframeHost(m.dpIframeSrc)),
                                (this.url = m.dpIframeSrc + e));
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
                            messageSendingInterval: X.POST_MESSAGE_ENABLED ? null : 100,
                            onPageDestinationsFired: [],
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            canSetThirdPartyCookies: !0,
                            receivedThirdPartyCookiesNotification: !1,
                            readyToAttachIframePreliminary: function () {
                              return !(
                                m.idSyncDisableSyncs ||
                                m.disableIdSyncs ||
                                m.idSyncDisable3rdPartySyncing ||
                                m.disableThirdPartyCookies ||
                                m.disableThirdPartyCalls
                              );
                            },
                            readyToAttachIframe: function () {
                              return (
                                this.readyToAttachIframePreliminary() &&
                                (this.doAttachIframe || m._doAttachIframe) &&
                                ((this.subdomain && 'nosubdomainreturned' !== this.subdomain) ||
                                  m._subdomain) &&
                                this.url &&
                                !this.startedAttachingIframe
                              );
                            },
                            attachIframe: function () {
                              function e () {
                                ((r = a.createElement('iframe')).sandbox =
                                  'allow-scripts allow-same-origin'),
                                  (r.title = 'Adobe ID Syncing iFrame'),
                                  (r.id = n.id),
                                  (r.name = n.id + '_name'),
                                  (r.style.cssText = 'display: none; width: 0; height: 0;'),
                                  (r.src = n.url),
                                  (n.newIframeCreated = !0),
                                  t(),
                                  a.body.appendChild(r);
                              }
                              function t (e) {
                                r.addEventListener('load', function () {
                                  (r.className = 'aamIframeLoaded'),
                                    (n.iframeHasLoaded = !0),
                                    n.fireIframeLoadedCallbacks(e),
                                    n.requestToProcess();
                                });
                              }
                              this.startedAttachingIframe = !0;
                              var n = this,
                                r = a.getElementById(this.id);
                              r
                                ? 'IFRAME' !== r.nodeName
                                  ? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
                                  : ((this.newIframeCreated = !1),
                                    'aamIframeLoaded' !== r.className
                                      ? ((this.originalIframeHasLoadedAlready = !1),
                                        t(
                                          "The destination publishing iframe already exists from a different library, but hadn't loaded yet."
                                        ))
                                      : ((this.originalIframeHasLoadedAlready = !0),
                                        (this.iframeHasLoaded = !0),
                                        (this.iframe = r),
                                        this.fireIframeLoadedCallbacks(
                                          'The destination publishing iframe already exists from a different library, and had loaded alresady.'
                                        ),
                                        this.requestToProcess()))
                                : e(),
                                (this.iframe = r);
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
                                r.jsonForComparison.push(e),
                                  r.jsonWaiting.push(e),
                                  r.processSyncOnPage(e);
                              }
                              var n,
                                r = this;
                              if (e === Object(e) && e.ibs)
                                if (
                                  ((n = JSON.stringify(e.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var a,
                                    i,
                                    o,
                                    s = !1;
                                  for (a = 0, i = this.jsonForComparison.length; a < i; a++)
                                    if (
                                      ((o = this.jsonForComparison[a]),
                                      n === JSON.stringify(o.ibs || []))
                                    ) {
                                      s = !0;
                                      break;
                                    }
                                  s ? this.jsonDuplicates.push(e) : t();
                                } else t();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !X.POST_MESSAGE_ENABLED ||
                                  this.iframeHasLoaded) &&
                                this.jsonWaiting.length
                              ) {
                                var c = this.jsonWaiting.shift();
                                this.process(c), this.requestToProcess();
                              }
                              m.idSyncDisableSyncs ||
                                m.disableIdSyncs ||
                                !this.iframeHasLoaded ||
                                !this.messages.length ||
                                this.sendingMessages ||
                                (this.throttleTimerSet ||
                                  ((this.throttleTimerSet = !0),
                                  setTimeout(function () {
                                    r.messageSendingInterval = X.POST_MESSAGE_ENABLED ? null : 150;
                                  }, this.THROTTLE_START)),
                                (this.sendingMessages = !0),
                                this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (e, t) {
                              var n = m._getField('MCAAMLH'),
                                r = e.d_region || e.dcs_region;
                              return (
                                n
                                  ? r &&
                                    (m._setFieldExpire('MCAAMLH', t),
                                    m._setField('MCAAMLH', r),
                                    parseInt(n, 10) !== r &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      m._setField('MCSYNCSOP', ''),
                                      m._setField('MCSYNCS', ''),
                                      (n = r)))
                                  : (n = r) &&
                                    (m._setFieldExpire('MCAAMLH', t), m._setField('MCAAMLH', n)),
                                n || (n = ''),
                                n
                              );
                            },
                            processSyncOnPage: function (e) {
                              var t, n, r, a;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (r = 0; r < n; r++)
                                  (a = t[r]).syncOnPage &&
                                    this.checkFirstPartyCookie(a, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                n,
                                r,
                                a,
                                i,
                                o = encodeURIComponent,
                                s = !1;
                              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                for (s = !0, r = 0; r < n; r++)
                                  (a = t[r]),
                                    (i = [
                                      o('ibs'),
                                      o(a.id || ''),
                                      o(a.tag || ''),
                                      N.encodeAndBuildRequest(a.url || [], ','),
                                      o(a.ttl || ''),
                                      '',
                                      '',
                                      a.fireURLSync ? 'true' : 'false',
                                    ]),
                                    a.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(i.join('|'))
                                        : a.fireURLSync &&
                                          this.checkFirstPartyCookie(a, i.join('|')));
                              s && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, n) {
                              var r = 'syncOnPage' === n,
                                a = r ? 'MCSYNCSOP' : 'MCSYNCS';
                              m._readVisitor();
                              var i,
                                o,
                                s = m._getField(a),
                                c = !1,
                                u = !1,
                                l = Math.ceil(new Date().getTime() / X.MILLIS_PER_DAY);
                              s
                                ? ((i = s.split('*')),
                                  (c = (o = this.pruneSyncData(i, e.id, l)).dataPresent),
                                  (u = o.dataValid),
                                  (c && u) || this.fireSync(r, e, t, i, a, l))
                                : ((i = []), this.fireSync(r, e, t, i, a, l));
                            },
                            pruneSyncData: function (e, t, n) {
                              var r,
                                a,
                                i,
                                o = !1,
                                s = !1;
                              for (a = 0; a < e.length; a++)
                                (r = e[a]),
                                  (i = parseInt(r.split('-')[1], 10)),
                                  r.match('^' + t + '-')
                                    ? ((o = !0), n < i ? (s = !0) : (e.splice(a, 1), a--))
                                    : i <= n && (e.splice(a, 1), a--);
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
                            fireSync: function (e, t, n, r, l, a) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var i,
                                    o,
                                    s,
                                    c,
                                    u = t.url,
                                    f = m.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, o = u.length; i < o; i++) {
                                    (s = u[i]), (c = /^\/\//.test(s));
                                    var p = new Image();
                                    p.addEventListener(
                                      'load',
                                      (function (o, s, c, u) {
                                        return function () {
                                          (d.onPagePixels[o] = null), m._readVisitor();
                                          var e,
                                            t,
                                            n,
                                            r,
                                            a = m._getField(l),
                                            i = [];
                                          if (a)
                                            for (t = 0, n = (e = a.split('*')).length; t < n; t++)
                                              (r = e[t]).match('^' + s.id + '-') || i.push(r);
                                          d.setSyncTrackingData(i, s, c, u);
                                        };
                                      })(this.onPagePixels.length, t, l, a)
                                    ),
                                      (p.src = (c ? f : '') + s),
                                      this.onPagePixels.push(p);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(r, t, l, a);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                m._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((X.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, n, r) {
                              e.push(t.id + '-' + (r + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                m._setField(n, e.join('*'));
                            },
                            sendMessages: function () {
                              var e,
                                t = this,
                                n = '',
                                r = encodeURIComponent;
                              this.regionChanged &&
                                ((n = r('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                                this.messages.length
                                  ? X.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        n +
                                        r('---destpub-combined---') +
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
                              Q.postMessage(e, this.url, this.iframe.contentWindow),
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
                                ('string' == typeof m._subdomain && m._subdomain.length
                                  ? (this.subdomain = m._subdomain)
                                  : (this.subdomain = e.subdomain || ''),
                                (this.url = this.getUrl())),
                                e.ibs instanceof Array &&
                                  e.ibs.length &&
                                  (this.doAttachIframe = !0),
                                this.readyToAttachIframe() &&
                                  (m.idSyncAttachIframeOnWindowLoad
                                    ? (t.windowLoaded ||
                                        'complete' === a.readyState ||
                                        'loaded' === a.readyState) &&
                                      this.attachIframe()
                                    : this.attachIframeASAP()),
                                'function' == typeof m.idSyncIDCallResult
                                  ? m.idSyncIDCallResult(e)
                                  : this.requestToProcess(e),
                                'function' == typeof m.idSyncAfterIDCallResult &&
                                  m.idSyncAfterIDCallResult(e);
                            },
                            canMakeSyncIDCall: function (e, t) {
                              return (
                                m._forceSyncIDCall || !e || t - e > X.DAYS_BETWEEN_SYNC_ID_CALLS
                              );
                            },
                            attachIframeASAP: function () {
                              function e () {
                                t.startedAttachingIframe ||
                                  (a.body ? t.attachIframe() : setTimeout(e, 30));
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
                          var a = {};
                          return (
                            (e.on = function (e, t, n) {
                              if (!t || 'function' != typeof t)
                                throw new Error('[ON] Callback should be a function.');
                              a.hasOwnProperty(e) || (a[e] = []);
                              var r = a[e].push({ callback: t, context: n }) - 1;
                              return function () {
                                a[e].splice(r, 1), a[e].length || delete a[e];
                              };
                            }),
                            (e.off = function (e, t) {
                              a.hasOwnProperty(e) &&
                                (a[e] = a[e].filter(function (e) {
                                  if (e.callback !== t) return e;
                                }));
                            }),
                            (e.publish = function (e) {
                              if (a.hasOwnProperty(e)) {
                                var t = [].slice.call(arguments, 1);
                                a[e].slice(0).forEach(function (e) {
                                  e.callback.apply(e.context, t);
                                });
                              }
                            }),
                            e.publish
                          );
                        },
                        re = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                        ae = {
                          AAM: 'aam',
                          ADCLOUD: 'adcloud',
                          ANALYTICS: 'aa',
                          CAMPAIGN: 'campaign',
                          ECID: 'ecid',
                          LIVEFYRE: 'livefyre',
                          TARGET: 'target',
                          MEDIA_ANALYTICS: 'mediaaa',
                        },
                        ie = (e((g = {}), ae.AAM, 565), e(g, ae.ECID, 565), g),
                        oe = (e((h = {}), ae.AAM, [1, 2, 5]), e(h, ae.ECID, [1, 2, 5]), h),
                        se =
                          ((v = ae),
                          Object.keys(v).map(function (e) {
                            return v[e];
                          })),
                        ce = function () {
                          var r = {};
                          return (
                            (r.callbacks = Object.create(null)),
                            (r.add = function (e, t) {
                              if (!c(t))
                                throw new Error(
                                  '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                                );
                              r.callbacks[e] = r.callbacks[e] || [];
                              var n = r.callbacks[e].push(t) - 1;
                              return function () {
                                r.callbacks[e].splice(n, 1);
                              };
                            }),
                            (r.execute = function (e, t) {
                              if (r.callbacks[e]) {
                                t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                try {
                                  for (; r.callbacks[e].length; ) {
                                    var n = r.callbacks[e].shift();
                                    'function' == typeof n
                                      ? n.apply(null, t)
                                      : n instanceof Array && n[1].apply(n[0], t);
                                  }
                                  delete r.callbacks[e];
                                } catch (r) {}
                              }
                            }),
                            (r.executeAll = function (n, e) {
                              (e || (n && !s(n))) &&
                                Object.keys(r.callbacks).forEach(function (e) {
                                  var t = void 0 !== n[e] ? n[e] : '';
                                  r.execute(e, t);
                                }, r);
                            }),
                            (r.hasCallbacks = function () {
                              return Boolean(Object.keys(r.callbacks).length);
                            }),
                            r
                          );
                        },
                        ue = function () {},
                        le = function (e) {
                          var t = window.console;
                          return !!t && 'function' == typeof t[e];
                        },
                        de = function (r, a, e) {
                          return e()
                            ? function () {
                                if (le(r)) {
                                  for (
                                    var e = arguments.length, t = new Array(e), n = 0;
                                    n < e;
                                    n++
                                  )
                                    t[n] = arguments[n];
                                  console[r].apply(console, [a].concat(t));
                                }
                              }
                            : ue;
                        },
                        fe = new r('[ADOBE OPT-IN]'),
                        pe = function (e, t) {
                          return x(e) === t;
                        },
                        me = function (e, t) {
                          return e instanceof Array ? e : pe(e, 'string') ? [e] : t || [];
                        },
                        ge = function (t) {
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
                            me(e).every(function (e) {
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
                          if (ke(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        Ce = function (e) {
                          return void 0 === e || (ke(e) ? he(Object.keys(e)) : Ie(e));
                        },
                        Ie = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && pe(e, 'string') && he(Object.keys(t));
                          } catch (e) {
                            return !1;
                          }
                        },
                        ke = function (e) {
                          return null !== e && pe(e, 'object') && !1 === Array.isArray(e);
                        },
                        Se = function () {},
                        Pe = function (e) {
                          return pe(e, 'function') ? e() : e;
                        },
                        we = function (e, t) {
                          Ce(e) || fe.error(''.concat(t));
                        },
                        Ee = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        Ae = function (e) {
                          return Ee(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        De = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              n = t.command,
                              r = t.params,
                              a = void 0 === r ? {} : r,
                              i = t.callback,
                              o = void 0 === i ? Se : i;
                            if (!n || -1 === n.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var s = n.split('.'),
                                c = d[s[0]],
                                u = s[1];
                              if (!c || 'function' != typeof c[u])
                                throw new Error('Make sure the plugin and API name exist.');
                              var l = Object.assign(a, { callback: o });
                              c[u].call(c, l);
                            } catch (d) {
                              fe.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (l.prototype = Object.create(Error.prototype)),
                        (l.prototype.constructor = l);
                      var Oe = 'fetchPermissions',
                        Te = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = ae), (d.TimeoutError = l);
                      var je = Object.freeze({ OptIn: d, IabPlugin: m }),
                        Me = function (d, f) {
                          d.publishDestinations = function (e, t, n) {
                            var r = t,
                              a = n;
                            try {
                              a = 'function' == typeof a ? a : e.callback;
                            } catch (d) {
                              a = function () {};
                            }
                            var i = f;
                            if (i.readyToAttachIframePreliminary()) {
                              if ('string' == typeof e) {
                                if (!e.length)
                                  return void a({ error: 'subdomain is not a populated string.' });
                                if (!(r instanceof Array && r.length))
                                  return void a({ error: 'messages is not a populated array.' });
                                var o = !1;
                                if (
                                  (r.forEach(function (e) {
                                    'string' == typeof e &&
                                      e.length &&
                                      (i.addMessage(e), (o = !0));
                                  }),
                                  !o)
                                )
                                  return void a({
                                    error: 'None of the messages are populated strings.',
                                  });
                              } else {
                                if (!N.isObject(e))
                                  return void a({ error: 'Invalid parameters passed.' });
                                var s = e;
                                if ('string' != typeof (e = s.subdomain) || !e.length)
                                  return void a({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var c = s.urlDestinations;
                                if (!(c instanceof Array && c.length))
                                  return void a({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var u = [];
                                c.forEach(function (e) {
                                  N.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && i.addMessage(e.message)
                                      : u.push(e));
                                }),
                                  (function l () {
                                    u.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = u.shift();
                                        (e.src = t.url), i.onPageDestinationsFired.push(t), l();
                                      }, 100);
                                  })();
                              }
                              i.iframe
                                ? (a({
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
                                        a({
                                          message:
                                            'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                                            (e.message || 'no result'),
                                        });
                                      }),
                                      i.attachIframe())
                                    : a({
                                        error:
                                          'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                                      }))
                                : i.iframeLoadedCallbacks.push(function (e) {
                                    a({
                                      message:
                                        'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                                        (e.message || 'no result'),
                                    });
                                  });
                            } else
                              a({
                                error:
                                  'The destination publishing iframe is disabled in the Visitor library.',
                              });
                          };
                        },
                        Ve = function x (e) {
                          function t (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var n,
                              r,
                              a = Math.pow,
                              i = a(2, 32),
                              o = '',
                              s = [],
                              c = 8 * e.length,
                              u = (x.h = x.h || []),
                              l = (x.k = x.k || []),
                              d = l.length,
                              f = {},
                              p = 2;
                            d < 64;
                            p++
                          )
                            if (!f[p]) {
                              for (n = 0; n < 313; n += p) f[n] = p;
                              (u[d] = (a(p, 0.5) * i) | 0), (l[d++] = (a(p, 1 / 3) * i) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (n = 0; n < e.length; n++) {
                            if ((r = e.charCodeAt(n)) >> 8) return;
                            s[n >> 2] |= r << (((3 - n) % 4) * 8);
                          }
                          for (s[s.length] = (c / i) | 0, s[s.length] = c, r = 0; r < s.length; ) {
                            var m = s.slice(r, (r += 16)),
                              g = u;
                            for (u = u.slice(0, 8), n = 0; n < 64; n++) {
                              var h = m[n - 15],
                                v = m[n - 2],
                                b = u[0],
                                y = u[4],
                                _ =
                                  u[7] +
                                  (t(y, 6) ^ t(y, 11) ^ t(y, 25)) +
                                  ((y & u[5]) ^ (~y & u[6])) +
                                  l[n] +
                                  (m[n] =
                                    n < 16
                                      ? m[n]
                                      : (m[n - 16] +
                                          (t(h, 7) ^ t(h, 18) ^ (h >>> 3)) +
                                          m[n - 7] +
                                          (t(v, 17) ^ t(v, 19) ^ (v >>> 10))) |
                                        0);
                              (u = [
                                (_ +
                                  ((t(b, 2) ^ t(b, 13) ^ t(b, 22)) +
                                    ((b & u[1]) ^ (b & u[2]) ^ (u[1] & u[2])))) |
                                  0,
                              ].concat(u))[4] = (u[4] + _) | 0;
                            }
                            for (n = 0; n < 8; n++) u[n] = (u[n] + g[n]) | 0;
                          }
                          for (n = 0; n < 8; n++)
                            for (r = 3; r + 1; r--) {
                              var C = (u[n] >> (8 * r)) & 255;
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
                              (e = Ve(e)),
                            e
                          );
                        },
                        Le = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        Re = je.OptIn;
                      N.defineGlobalNamespace(), (window.adobe.OptInCategories = Re.Categories);
                      var Ne = function (r, n, e) {
                        function t (e) {
                          var r = e;
                          return function (e) {
                            var t = e || b.location.href;
                            try {
                              var n = p._extractParamFromUri(t, r);
                              if (n) return j.parsePipeDelimetedKeyValues(n);
                            } catch (e) {}
                          };
                        }
                        function a (e) {
                          function t (e, t, n) {
                            e && e.match(X.VALID_VISITOR_ID_REGEX) && (n === C && (v = !0), t(e));
                          }
                          t(e[C], p.setMarketingCloudVisitorID, C),
                            p._setFieldExpire(w, -1),
                            t(e[S], p.setAnalyticsVisitorID);
                        }
                        function i (e) {
                          (e = e || {}),
                            (p._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (p._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (p._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (p._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function o (e) {
                          function a (e, t, n) {
                            return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var n = t[0],
                              r = t[1];
                            return null != r && r !== E && (e = a(n, r, e)), e;
                          }
                          var n,
                            r = e.reduce(t, '');
                          return (
                            (n = (n = r) ? (n += '|') : n) + 'TS=' + j.getTimestampInSeconds()
                          );
                        }
                        function s (e) {
                          var t = e.minutesToLive,
                            n = '';
                          return (
                            (p.idSyncDisableSyncs || p.disableIdSyncs) &&
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
                        function c () {
                          return !(!p.configs.doesOptInApply || (m.optIn.isComplete && d()));
                        }
                        function d () {
                          return p.configs.isIabContext
                            ? m.optIn.isApproved(m.optIn.Categories.ECID) && h
                            : m.optIn.isApproved(m.optIn.Categories.ECID);
                        }
                        function u (e, t) {
                          if (((h = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies && (g = t.consentString), p.init(), f();
                        }
                        function l () {
                          m.optIn.isApproved(m.optIn.Categories.ECID) &&
                            (p.configs.isIabContext
                              ? m.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: u,
                                })
                              : (p.init(), f()));
                        }
                        function f () {
                          m.optIn.off('complete', l);
                        }
                        if (!e || e.split('').reverse().join('') !== r)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var p = this,
                          m = window.adobe,
                          g = '',
                          h = !1,
                          v = !1;
                        p.version = '4.4.1';
                        var b = L,
                          y = b.Visitor;
                        (y.version = p.version),
                          (y.AuthState = R.AUTH_STATE),
                          (y.OptOut = R.OPT_OUT),
                          b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0)),
                          (p._c = 'Visitor'),
                          (p._il = b.s_c_il),
                          (p._in = b.s_c_in),
                          (p._il[p._in] = p),
                          b.s_c_in++,
                          (p._instanceType = 'regular'),
                          (p._log = { requests: [] }),
                          (p.marketingCloudOrgID = r),
                          (p.cookieName = 'AMCV_' + r),
                          (p.sessionCookieName = 'AMCVS_' + r),
                          (p.cookieDomain = Y()),
                          (p.loadSSL = 0 <= b.location.protocol.toLowerCase().indexOf('https')),
                          (p.loadTimeout = 30000),
                          (p.CORSErrors = []),
                          (p.marketingCloudServer = p.audienceManagerServer = 'dpm.demdex.net'),
                          (p.sdidParamExpiry = 30);
                        var _ = null,
                          C = 'MCMID',
                          I = 'MCIDTS',
                          k = 'A',
                          S = 'MCAID',
                          P = 'AAM',
                          w = 'MCAAMB',
                          E = 'NONE',
                          A = function (e) {
                            return !Object.prototype[e];
                          },
                          D = z(p);
                        (p.FIELDS = R.FIELDS),
                          (p.cookieRead = function (e) {
                            return W.get(e);
                          }),
                          (p.cookieWrite = function (e, t, n) {
                            var r = p.cookieLifetime ? ('' + p.cookieLifetime).toUpperCase() : '',
                              a = !1;
                            return (
                              p.configs &&
                                p.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (a = !0),
                              W.set(e, '' + t, {
                                expires: n,
                                domain: p.cookieDomain,
                                cookieLifetime: r,
                                secure: a,
                              })
                            );
                          }),
                          (p.resetState = function (e) {
                            e ? p._mergeServerState(e) : i();
                          }),
                          (p._isAllowedDone = !1),
                          (p._isAllowedFlag = !1),
                          (p.isAllowed = function () {
                            return (
                              p._isAllowedDone ||
                                ((p._isAllowedDone = !0),
                                (p.cookieRead(p.cookieName) ||
                                  p.cookieWrite(p.cookieName, 'T', 1)) &&
                                  (p._isAllowedFlag = !0)),
                              'T' === p.cookieRead(p.cookieName) &&
                                p._helpers.removeCookie(p.cookieName),
                              p._isAllowedFlag
                            );
                          }),
                          (p.setMarketingCloudVisitorID = function (e) {
                            p._setMarketingCloudFields(e);
                          }),
                          (p._use1stPartyMarketingCloudServer = !1),
                          (p.getMarketingCloudVisitorID = function (e, t) {
                            p.marketingCloudServer &&
                              p.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (p._use1stPartyMarketingCloudServer = !0);
                            var n = p._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            return p._getRemoteField(C, r, e, t, n);
                          });
                        var O = function (t, e) {
                          var n = {};
                          p.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              n[e] = p._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? p.isOptedOut(
                                    function (e) {
                                      (n.MCOPTOUT = e), t(n);
                                    },
                                    null,
                                    !0
                                  )
                                : t(n);
                          }, !0);
                        };
                        (p.getVisitorValues = function (e, t) {
                          var n = {
                              MCMID: { fn: p.getMarketingCloudVisitorID, args: [!0], context: p },
                              MCOPTOUT: { fn: p.isOptedOut, args: [void 0, !0], context: p },
                              MCAID: { fn: p.getAnalyticsVisitorID, args: [!0], context: p },
                              MCAAMLH: {
                                fn: p.getAudienceManagerLocationHint,
                                args: [!0],
                                context: p,
                              },
                              MCAAMB: { fn: p.getAudienceManagerBlob, args: [!0], context: p },
                            },
                            r = t && t.length ? N.pluck(n, t) : n;
                          t && -1 === t.indexOf('MCAID') ? O(e, t) : G(r, e);
                        }),
                          (p._currentCustomerIDs = {}),
                          (p._customerIDsHashChanged = !1),
                          (p._newCustomerIDsHash = ''),
                          (p.setCustomerIDs = function (e, t) {
                            function n () {
                              p._customerIDsHashChanged = !1;
                            }
                            if (!p.isOptedOut() && e) {
                              if (!N.isObject(e) || N.isObjectEmpty(e)) return !1;
                              var r, a, i;
                              for (r in (p._readVisitor(), e))
                                if (
                                  A(r) &&
                                  ((t = (a = e[r]).hasOwnProperty('hashType') ? a.hashType : t), a)
                                )
                                  if ('object' === x(a)) {
                                    var o = {};
                                    if (a.id) {
                                      if (t) {
                                        if (!(i = xe(Le(a.id), t))) return;
                                        (a.id = i), (o.hashType = t);
                                      }
                                      o.id = a.id;
                                    }
                                    null != a.authState && (o.authState = a.authState),
                                      (p._currentCustomerIDs[r] = o);
                                  } else if (t) {
                                    if (!(i = xe(Le(a), t))) return;
                                    p._currentCustomerIDs[r] = { id: i, hashType: t };
                                  } else p._currentCustomerIDs[r] = { id: a };
                              var s = p.getCustomerIDs(),
                                c = p._getField('MCCIDH'),
                                u = '';
                              for (r in (c || (c = 0), s))
                                A(r) &&
                                  (u +=
                                    (u ? '|' : '') +
                                    r +
                                    '|' +
                                    ((a = s[r]).id ? a.id : '') +
                                    (a.authState ? a.authState : ''));
                              (p._newCustomerIDsHash = String(p._hash(u))),
                                p._newCustomerIDsHash !== c &&
                                  ((p._customerIDsHashChanged = !0), p._mapCustomerIDs(n));
                            }
                          }),
                          (p.getCustomerIDs = function () {
                            p._readVisitor();
                            var e,
                              t,
                              n = {};
                            for (e in p._currentCustomerIDs)
                              A(e) &&
                                ((t = p._currentCustomerIDs[e]),
                                n[e] || (n[e] = {}),
                                t.id && (n[e].id = t.id),
                                null != t.authState
                                  ? (n[e].authState = t.authState)
                                  : (n[e].authState = y.AuthState.UNKNOWN),
                                t.hashType && (n[e].hashType = t.hashType));
                            return n;
                          }),
                          (p.setAnalyticsVisitorID = function (e) {
                            p._setAnalyticsFields(e);
                          }),
                          (p.getAnalyticsVisitorID = function (e, t, n) {
                            if (!j.isTrackingServerPopulated() && !n)
                              return p._callCallback(e, ['']), '';
                            var r = '';
                            if (
                              (n ||
                                (r = p.getMarketingCloudVisitorID(function () {
                                  p.getAnalyticsVisitorID(e, !0);
                                })),
                              r || n)
                            ) {
                              var a = n ? p.marketingCloudServer : p.trackingServer,
                                i = '';
                              p.loadSSL &&
                                (n
                                  ? p.marketingCloudServerSecure &&
                                    (a = p.marketingCloudServerSecure)
                                  : p.trackingServerSecure && (a = p.trackingServerSecure));
                              var o = {};
                              if (a) {
                                var s = 'http' + (p.loadSSL ? 's' : '') + '://' + a + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    p.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(p.marketingCloudOrgID) +
                                    (r ? '&mid=' + encodeURIComponent(r) : '') +
                                    (p.idSyncDisable3rdPartySyncing || p.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  u = [
                                    's_c_il',
                                    p._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (i =
                                  s +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  p._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + c),
                                  (o.callback = u);
                              }
                              return (o.url = i), p._getRemoteField(n ? C : S, i, e, t, o);
                            }
                            return '';
                          }),
                          (p.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              p.getMarketingCloudVisitorID(function () {
                                p.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = p._getField(S);
                              if (
                                (!n &&
                                  j.isTrackingServerPopulated() &&
                                  (n = p.getAnalyticsVisitorID(function () {
                                    p.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !j.isTrackingServerPopulated())
                              ) {
                                var r = p._getAudienceManagerURLData(),
                                  a = r.url;
                                return p._getRemoteField('MCAAMLH', a, e, t, r);
                              }
                            }
                            return '';
                          }),
                          (p.getLocationHint = p.getAudienceManagerLocationHint),
                          (p.getAudienceManagerBlob = function (e, t) {
                            if (
                              p.getMarketingCloudVisitorID(function () {
                                p.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var n = p._getField(S);
                              if (
                                (!n &&
                                  j.isTrackingServerPopulated() &&
                                  (n = p.getAnalyticsVisitorID(function () {
                                    p.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !j.isTrackingServerPopulated())
                              ) {
                                var r = p._getAudienceManagerURLData(),
                                  a = r.url;
                                return (
                                  p._customerIDsHashChanged && p._setFieldExpire(w, -1),
                                  p._getRemoteField(w, a, e, t, r)
                                );
                              }
                            }
                            return '';
                          }),
                          (p._supplementalDataIDCurrent = ''),
                          (p._supplementalDataIDCurrentConsumed = {}),
                          (p._supplementalDataIDLast = ''),
                          (p._supplementalDataIDLastConsumed = {});
                        var T = !(p.getSupplementalDataID = function (e, t) {
                          p._supplementalDataIDCurrent ||
                            t ||
                            (p._supplementalDataIDCurrent = p._generateID(1));
                          var n = p._supplementalDataIDCurrent;
                          return (
                            p._supplementalDataIDLast && !p._supplementalDataIDLastConsumed[e]
                              ? ((n = p._supplementalDataIDLast),
                                (p._supplementalDataIDLastConsumed[e] = !0))
                              : n &&
                                (p._supplementalDataIDCurrentConsumed[e] &&
                                  ((p._supplementalDataIDLast = p._supplementalDataIDCurrent),
                                  (p._supplementalDataIDLastConsumed =
                                    p._supplementalDataIDCurrentConsumed),
                                  (p._supplementalDataIDCurrent = n = t ? '' : p._generateID(1)),
                                  (p._supplementalDataIDCurrentConsumed = {})),
                                n && (p._supplementalDataIDCurrentConsumed[e] = !0)),
                            n
                          );
                        });
                        (p._liberatedOptOut = null),
                          (p.getOptOut = function (e, t) {
                            var n = p._getAudienceManagerURLData('_setMarketingCloudFields'),
                              r = n.url;
                            if (d()) return p._getRemoteField('MCOPTOUT', r, e, t, n);
                            if (
                              (p._registerCallback('liberatedOptOut', e),
                              null !== p._liberatedOptOut)
                            )
                              return (
                                p._callAllCallbacks('liberatedOptOut', [p._liberatedOptOut]),
                                (T = !1),
                                p._liberatedOptOut
                              );
                            if (T) return null;
                            T = !0;
                            var a = 'liberatedGetOptOut';
                            return (
                              (n.corsUrl = n.corsUrl.replace(
                                /dpm\.demdex\.net\/id\?/,
                                'dpm.demdex.net/optOutStatus?'
                              )),
                              (n.callback = [a]),
                              (L[a] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    r = N.parseOptOut(e, t, E);
                                  (t = r.optOut),
                                    (n = 1000 * r.d_ottl),
                                    (p._liberatedOptOut = t),
                                    setTimeout(function () {
                                      p._liberatedOptOut = null;
                                    }, n);
                                }
                                p._callAllCallbacks('liberatedOptOut', [t]), (T = !1);
                              }),
                              D.fireCORS(n),
                              null
                            );
                          }),
                          (p.isOptedOut = function (n, r, e) {
                            r || (r = y.OptOut.GLOBAL);
                            var t = p.getOptOut(function (e) {
                              var t = e === y.OptOut.GLOBAL || 0 <= e.indexOf(r);
                              p._callCallback(n, [t]);
                            }, e);
                            return t ? t === y.OptOut.GLOBAL || 0 <= t.indexOf(r) : null;
                          }),
                          (p._fields = null),
                          (p._fieldsExpired = null),
                          (p._hash = function (e) {
                            var t,
                              n = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (n = (n << 5) - n + e.charCodeAt(t)), (n &= n);
                            return n;
                          }),
                          (p._generateID = K),
                          (p._generateLocalMID = function () {
                            var e = p._generateID(0);
                            return (V.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (p._callbackList = null),
                          (p._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(b, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (p._registerCallback = function (e, t) {
                            t &&
                              (null == p._callbackList && (p._callbackList = {}),
                              null == p._callbackList[e] && (p._callbackList[e] = []),
                              p._callbackList[e].push(t));
                          }),
                          (p._callAllCallbacks = function (e, t) {
                            if (null != p._callbackList) {
                              var n = p._callbackList[e];
                              if (n) for (; 0 < n.length; ) p._callCallback(n.shift(), t);
                            }
                          }),
                          (p._addQuerystringParam = function (e, t, n, r) {
                            var a = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              i = j.parseHash(e),
                              o = j.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + a + i;
                            var s = o.split('?'),
                              c = s[0] + '?',
                              u = s[1];
                            return c + j.addQueryParamAtLocation(u, a, r) + i;
                          }),
                          (p._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (n && n.length) return decodeURIComponent(n[1]);
                          }),
                          (p._parseAdobeMcFromUrl = t(X.ADOBE_MC)),
                          (p._parseAdobeMcSdidFromUrl = t(X.ADOBE_MC_SDID)),
                          (p._attemptToPopulateSdidFromUrl = function (e) {
                            var t = p._parseAdobeMcSdidFromUrl(e),
                              n = 1000000000;
                            t && t.TS && (n = j.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === r &&
                                n < p.sdidParamExpiry &&
                                ((p._supplementalDataIDCurrent = t.SDID),
                                (p._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (p._attemptToPopulateIdsFromUrl = function () {
                            var e = p._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = j.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > X.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== r)
                                return;
                              a(e);
                            }
                          }),
                          (p._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((r = e),
                                  (e = j.isObject(r) ? r : JSON.parse(r))[p.marketingCloudOrgID])
                                ) {
                                  var t = e[p.marketingCloudOrgID];
                                  (n = t.customerIDs),
                                    j.isObject(n) && p.setCustomerIDs(n),
                                    i(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var n, r;
                          }),
                          (p._timeout = null),
                          (p._loadData = function (e, t, n, r) {
                            (t = p._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (r.url = p._addQuerystringParam(r.url, 'd_fieldgroup', e, 1)),
                              (r.corsUrl = p._addQuerystringParam(
                                r.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (V.fieldGroupObj[e] = !0),
                              r === Object(r) &&
                                r.corsUrl &&
                                'XMLHttpRequest' === D.corsMetadata.corsType &&
                                D.fireCORS(r, n, e);
                          }),
                          (p._clearTimeout = function (e) {
                            null != p._timeout &&
                              p._timeout[e] &&
                              (clearTimeout(p._timeout[e]), (p._timeout[e] = 0));
                          }),
                          (p._settingsDigest = 0),
                          (p._getSettingsDigest = function () {
                            if (!p._settingsDigest) {
                              var e = p.version;
                              p.audienceManagerServer && (e += '|' + p.audienceManagerServer),
                                p.audienceManagerServerSecure &&
                                  (e += '|' + p.audienceManagerServerSecure),
                                (p._settingsDigest = p._hash(e));
                            }
                            return p._settingsDigest;
                          }),
                          (p._readVisitorDone = !1),
                          (p._readVisitor = function () {
                            if (!p._readVisitorDone) {
                              p._readVisitorDone = !0;
                              var e,
                                t,
                                n,
                                r,
                                a,
                                i,
                                o = p._getSettingsDigest(),
                                s = !1,
                                c = p.cookieRead(p.cookieName),
                                u = new Date();
                              if (
                                (c ||
                                  v ||
                                  p.discardTrackingServerECID ||
                                  (c = p.cookieRead(X.FIRST_PARTY_SERVER_COOKIE)),
                                null == p._fields && (p._fields = {}),
                                c && 'T' !== c)
                              )
                                for (
                                  (c = c.split('|'))[0].match(/^[\-0-9]+$/) &&
                                    (parseInt(c[0], 10) !== o && (s = !0), c.shift()),
                                    c.length % 2 == 1 && c.pop(),
                                    e = 0;
                                  e < c.length;
                                  e += 2
                                )
                                  (n = (t = c[e].split('-'))[0]),
                                    (r = c[e + 1]),
                                    1 < t.length
                                      ? ((a = parseInt(t[1], 10)), (i = 0 < t[1].indexOf('s')))
                                      : ((a = 0), (i = !1)),
                                    s &&
                                      ('MCCIDH' === n && (r = ''),
                                      0 < a && (a = u.getTime() / 1000 - 60)),
                                    n &&
                                      r &&
                                      (p._setField(n, r, 1),
                                      0 < a &&
                                        ((p._fields['expire' + n] = a + (i ? 's' : '')),
                                        (u.getTime() >= 1000 * a ||
                                          (i && !p.cookieRead(p.sessionCookieName))) &&
                                          (p._fieldsExpired || (p._fieldsExpired = {}),
                                          (p._fieldsExpired[n] = !0))));
                              !p._getField(S) &&
                                j.isTrackingServerPopulated() &&
                                (c = p.cookieRead('s_vi')) &&
                                1 < (c = c.split('|')).length &&
                                0 <= c[0].indexOf('v1') &&
                                (0 <= (e = (r = c[1]).indexOf('[')) && (r = r.substring(0, e)),
                                r && r.match(X.VALID_VISITOR_ID_REGEX) && p._setField(S, r));
                            }
                          }),
                          (p._appendVersionTo = function (e) {
                            var t = 'vVersion|' + p.version,
                              n = e ? p._getCookieVersion(e) : null;
                            return (
                              n
                                ? $.areVersionsDifferent(n, p.version) &&
                                  (e = e.replace(X.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (p._writeVisitor = function () {
                            var e,
                              t,
                              n = p._getSettingsDigest();
                            for (e in p._fields)
                              A(e) &&
                                p._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = p._fields[e]),
                                (n +=
                                  (n ? '|' : '') +
                                  e +
                                  (p._fields['expire' + e] ? '-' + p._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (n = p._appendVersionTo(n)), p.cookieWrite(p.cookieName, n, 1);
                          }),
                          (p._getField = function (e, t) {
                            return null == p._fields ||
                              (!t && p._fieldsExpired && p._fieldsExpired[e])
                              ? null
                              : p._fields[e];
                          }),
                          (p._setField = function (e, t, n) {
                            null == p._fields && (p._fields = {}),
                              (p._fields[e] = t),
                              n || p._writeVisitor();
                          }),
                          (p._getFieldList = function (e, t) {
                            var n = p._getField(e, t);
                            return n ? n.split('*') : null;
                          }),
                          (p._setFieldList = function (e, t, n) {
                            p._setField(e, t ? t.join('*') : '', n);
                          }),
                          (p._getFieldMap = function (e, t) {
                            var n = p._getFieldList(e, t);
                            if (n) {
                              var r,
                                a = {};
                              for (r = 0; r < n.length; r += 2) a[n[r]] = n[r + 1];
                              return a;
                            }
                            return null;
                          }),
                          (p._setFieldMap = function (e, t, n) {
                            var r,
                              a = null;
                            if (t) for (r in ((a = []), t)) A(r) && (a.push(r), a.push(t[r]));
                            p._setFieldList(e, a, n);
                          }),
                          (p._setFieldExpire = function (e, t, n) {
                            var r = new Date();
                            r.setTime(r.getTime() + 1000 * t),
                              null == p._fields && (p._fields = {}),
                              (p._fields['expire' + e] =
                                Math.floor(r.getTime() / 1000) + (n ? 's' : '')),
                              t < 0
                                ? (p._fieldsExpired || (p._fieldsExpired = {}),
                                  (p._fieldsExpired[e] = !0))
                                : p._fieldsExpired && (p._fieldsExpired[e] = !1),
                              n &&
                                (p.cookieRead(p.sessionCookieName) ||
                                  p.cookieWrite(p.sessionCookieName, '1'));
                          }),
                          (p._findVisitorID = function (e) {
                            return (
                              e &&
                                ('object' === x(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = E),
                                (e && (e === E || e.match(X.VALID_VISITOR_ID_REGEX))) || (e = '')),
                              e
                            );
                          }),
                          (p._setFields = function (e, t) {
                            if (
                              (p._clearTimeout(e),
                              null != p._loading && (p._loading[e] = !1),
                              V.fieldGroupObj[e] && V.setState(e, !1),
                              'MC' === e)
                            ) {
                              !0 !== V.isClientSideMarketingCloudVisitorID &&
                                (V.isClientSideMarketingCloudVisitorID = !1);
                              var n = p._getField(C);
                              if (!n || p.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(n = 'object' === x(t) && t.mid ? t.mid : p._findVisitorID(t))
                                ) {
                                  if (
                                    p._use1stPartyMarketingCloudServer &&
                                    !p.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (p.tried1stPartyMarketingCloudServer = !0),
                                      void p.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  n = p._generateLocalMID();
                                }
                                p._setField(C, n);
                              }
                              (n && n !== E) || (n = ''),
                                'object' === x(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    p._setFields(P, t),
                                  p._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    p._setFields(k, { id: t.id })),
                                p._callAllCallbacks(C, [n]);
                            }
                            if (e === P && 'object' === x(t)) {
                              var r = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (r = parseInt(t.id_sync_ttl, 10));
                              var a = M.getRegionAndCheckIfChanged(t, r);
                              p._callAllCallbacks('MCAAMLH', [a]);
                              var i = p._getField(w);
                              (t.d_blob || t.blob) &&
                                ((i = t.d_blob) || (i = t.blob),
                                p._setFieldExpire(w, r),
                                p._setField(w, i)),
                                i || (i = ''),
                                p._callAllCallbacks(w, [i]),
                                !t.error_msg &&
                                  p._newCustomerIDsHash &&
                                  p._setField('MCCIDH', p._newCustomerIDsHash);
                            }
                            if (e === k) {
                              var o = p._getField(S);
                              (o && !p.overwriteCrossDomainMCIDAndAID) ||
                                ((o = p._findVisitorID(t))
                                  ? o !== E && p._setFieldExpire(w, -1)
                                  : (o = E),
                                p._setField(S, o)),
                                (o && o !== E) || (o = ''),
                                p._callAllCallbacks(S, [o]);
                            }
                            if (p.idSyncDisableSyncs || p.disableIdSyncs)
                              M.idCallNotProcesssed = !0;
                            else {
                              M.idCallNotProcesssed = !1;
                              var s = {};
                              (s.ibs = t.ibs), (s.subdomain = t.subdomain), M.processIDCallData(s);
                            }
                            if (t === Object(t)) {
                              var c, u;
                              d() && p.isAllowed() && (c = p._getField('MCOPTOUT'));
                              var l = N.parseOptOut(t, c, E);
                              (c = l.optOut),
                                (u = l.d_ottl),
                                p._setFieldExpire('MCOPTOUT', u, !0),
                                p._setField('MCOPTOUT', c),
                                p._callAllCallbacks('MCOPTOUT', [c]);
                            }
                          }),
                          (p._loading = null),
                          (p._getRemoteField = function (n, e, t, r, a) {
                            var i,
                              o = '',
                              s = j.isFirstPartyAnalyticsVisitorIDCall(n),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && p.isAllowed())
                              if (
                                (p._readVisitor(),
                                !(
                                  !(o = p._getField(n, !0 === c[n])) ||
                                  (p._fieldsExpired && p._fieldsExpired[n])
                                ) ||
                                  (p.disableThirdPartyCalls && !s))
                              )
                                o ||
                                  (n === C
                                    ? (p._registerCallback(n, t),
                                      (o = p._generateLocalMID()),
                                      p.setMarketingCloudVisitorID(o))
                                    : n === S
                                    ? (p._registerCallback(n, t),
                                      (o = ''),
                                      p.setAnalyticsVisitorID(o))
                                    : (r = !(o = '')));
                              else if (
                                (n === C || 'MCOPTOUT' === n
                                  ? (i = 'MC')
                                  : 'MCAAMLH' === n || n === w
                                  ? (i = P)
                                  : n === S && (i = k),
                                i)
                              )
                                return (
                                  !e ||
                                    (null != p._loading && p._loading[i]) ||
                                    (null == p._loading && (p._loading = {}),
                                    (p._loading[i] = !0),
                                    p._loadData(
                                      i,
                                      e,
                                      function (e) {
                                        if (!p._getField(n)) {
                                          e && V.setState(i, !0);
                                          var t = '';
                                          n === C
                                            ? (t = p._generateLocalMID())
                                            : i === P && (t = { error_msg: 'timeout' }),
                                            p._setFields(i, t);
                                        }
                                      },
                                      a
                                    )),
                                  p._registerCallback(n, t),
                                  o || (e || p._setFields(i, { id: E }), '')
                                );
                            return (
                              (n !== C && n !== S) || o !== E || (r = !(o = '')),
                              t && r && p._callCallback(t, [o]),
                              o
                            );
                          }),
                          (p._setMarketingCloudFields = function (e) {
                            p._readVisitor(), p._setFields('MC', e);
                          }),
                          (p._mapCustomerIDs = function (e) {
                            p.getAudienceManagerBlob(e, !0);
                          }),
                          (p._setAnalyticsFields = function (e) {
                            p._readVisitor(), p._setFields(k, e);
                          }),
                          (p._setAudienceManagerFields = function (e) {
                            p._readVisitor(), p._setFields(P, e);
                          }),
                          (p._getAudienceManagerURLData = function (e) {
                            var t = p.audienceManagerServer,
                              n = '',
                              r = p._getField(C),
                              a = p._getField(w, !0),
                              i = p._getField(S),
                              o = i && i !== E ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                            if (
                              (p.loadSSL &&
                                p.audienceManagerServerSecure &&
                                (t = p.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                c,
                                u = p.getCustomerIDs();
                              if (u)
                                for (s in u)
                                  A(s) &&
                                    ((c = u[s]),
                                    (o +=
                                      '&d_cid_ic=' +
                                      encodeURIComponent(s) +
                                      '%01' +
                                      encodeURIComponent(c.id ? c.id : '') +
                                      (c.authState ? '%01' + c.authState : '')));
                              e || (e = '_setAudienceManagerFields');
                              var l = 'http' + (p.loadSSL ? 's' : '') + '://' + t + '/id',
                                d =
                                  'd_visid_ver=' +
                                  p.version +
                                  (g && -1 !== l.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + g
                                    : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!r && p._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(p.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (p.idSyncContainerID || 0) +
                                  (r ? '&d_mid=' + encodeURIComponent(r) : '') +
                                  (p.idSyncDisable3rdPartySyncing || p.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === _
                                    ? '&d_coop_safe=1'
                                    : !1 === _
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (a ? '&d_blob=' + encodeURIComponent(a) : '') +
                                  o,
                                f = ['s_c_il', p._in, e];
                              return {
                                url: (n = l + '?' + d + '&d_cb=s_c_il%5B' + p._in + '%5D.' + e),
                                corsUrl: l + '?' + d,
                                callback: f,
                              };
                            }
                            return { url: n };
                          }),
                          (p.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [C, p._getField(C)],
                                [S, p._getField(S)],
                                ['MCORGID', p.marketingCloudOrgID],
                              ];
                              return p._addQuerystringParam(e, X.ADOBE_MC, o(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (p.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || p.getSupplementalDataID(j.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = o([
                                ['SDID', t],
                                ['MCORGID', p.marketingCloudOrgID],
                              ]);
                              return p._addQuerystringParam(e, X.ADOBE_MC_SDID, n);
                            } catch (t) {
                              return e;
                            }
                          });
                        var j = {
                          parseHash: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(t) : '';
                          },
                          hashlessUrl: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(0, t) : e;
                          },
                          addQueryParamAtLocation: function (e, t, n) {
                            var r = e.split('&');
                            return (n = null != n ? n : r.length), r.splice(n, 0, t), r.join('&');
                          },
                          isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
                            return (
                              e === S &&
                              (t || (t = p.trackingServer),
                              n || (n = p.trackingServerSecure),
                              !('string' != typeof (r = p.loadSSL ? n : t) || !r.length) &&
                                r.indexOf('2o7.net') < 0 &&
                                r.indexOf('omtrdc.net') < 0)
                            );
                            var r;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            W.remove(e, { domain: p.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!p.trackingServer || !!p.trackingServerSecure;
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
                        p._helpers = j;
                        var M = Z(p, y);
                        (p._destinationPublishing = M), (p.timeoutMetricsLog = []);
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
                              case k:
                                !1 === t
                                  ? !0 !== this.AnalyticsIDCallTimedOut &&
                                    (this.AnalyticsIDCallTimedOut = !1)
                                  : (this.AnalyticsIDCallTimedOut = t);
                                break;
                              case P:
                                !1 === t
                                  ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
                                  : (this.AAMIDCallTimedOut = t);
                            }
                          },
                        };
                        (p.isClientSideMarketingCloudVisitorID = function () {
                          return V.isClientSideMarketingCloudVisitorID;
                        }),
                          (p.MCIDCallTimedOut = function () {
                            return V.MCIDCallTimedOut;
                          }),
                          (p.AnalyticsIDCallTimedOut = function () {
                            return V.AnalyticsIDCallTimedOut;
                          }),
                          (p.AAMIDCallTimedOut = function () {
                            return V.AAMIDCallTimedOut;
                          }),
                          (p.idSyncGetOnPageSyncInfo = function () {
                            return p._readVisitor(), p._getField('MCSYNCSOP');
                          }),
                          (p.idSyncByURL = function (e) {
                            if (!p.isOptedOut()) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                r,
                                a = e.url,
                                i = encodeURIComponent,
                                o = M;
                              return (
                                (a = a.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = N.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (r = ['ibs', i(e.dpid), 'img', i(a), t.ttl, '', n]),
                                o.addMessage(r.join('|')),
                                o.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (p.idSyncByDataSource = function (e) {
                            if (!p.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  p.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          Me(p, M),
                          (p._getCookieVersion = function (e) {
                            e = e || p.cookieRead(p.cookieName);
                            var t = X.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (p._resetAmcvCookie = function (e) {
                            var t = p._getCookieVersion();
                            (t && !$.isLessThan(t, e)) || j.removeCookie(p.cookieName);
                          }),
                          (p.setAsCoopSafe = function () {
                            _ = !0;
                          }),
                          (p.setAsCoopUnsafe = function () {
                            _ = !1;
                          }),
                          (function () {
                            if (((p.configs = Object.create(null)), j.isObject(n)))
                              for (var e in n) A(e) && ((p[e] = n[e]), (p.configs[e] = n[e]));
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
                              r = p[t];
                            p[t] = function (e) {
                              return d() && p.isAllowed()
                                ? r.apply(p, arguments)
                                : ('function' == typeof e && p._callCallback(e, [n]), n);
                            };
                          }),
                          (p.init = function () {
                            if (c()) return m.optIn.fetchPermissions(l, !0);
                            !(function () {
                              if (j.isObject(n)) {
                                (p.idSyncContainerID = p.idSyncContainerID || 0),
                                  (_ =
                                    'boolean' == typeof p.isCoopSafe
                                      ? p.isCoopSafe
                                      : j.parseBoolean(p.isCoopSafe)),
                                  p.resetBeforeVersion && p._resetAmcvCookie(p.resetBeforeVersion),
                                  p._attemptToPopulateIdsFromUrl(),
                                  p._attemptToPopulateSdidFromUrl(),
                                  p._readVisitor();
                                var e = p._getField(I),
                                  t = Math.ceil(new Date().getTime() / X.MILLIS_PER_DAY);
                                p.idSyncDisableSyncs ||
                                  p.disableIdSyncs ||
                                  !M.canMakeSyncIDCall(e, t) ||
                                  (p._setFieldExpire(w, -1), p._setField(I, t)),
                                  p.getMarketingCloudVisitorID(),
                                  p.getAudienceManagerLocationHint(),
                                  p.getAudienceManagerBlob(),
                                  p._mergeServerState(p.serverState);
                              } else
                                p._attemptToPopulateIdsFromUrl(),
                                  p._attemptToPopulateSdidFromUrl();
                            })(),
                              (function () {
                                if (!p.idSyncDisableSyncs && !p.disableIdSyncs) {
                                  M.checkDPIframeSrc();
                                  var e = function () {
                                    var e = M;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  b.addEventListener('load', function () {
                                    (y.windowLoaded = !0), e();
                                  });
                                  try {
                                    Q.receiveMessage(function (e) {
                                      M.receiveMessage(e.data);
                                    }, M.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              p.whitelistIframeDomains &&
                                X.POST_MESSAGE_ENABLED &&
                                ((p.whitelistIframeDomains =
                                  p.whitelistIframeDomains instanceof Array
                                    ? p.whitelistIframeDomains
                                    : [p.whitelistIframeDomains]),
                                p.whitelistIframeDomains.forEach(function (e) {
                                  var t = new F(r, e),
                                    n = q(p, t);
                                  Q.receiveMessage(n, e);
                                }));
                          });
                      };
                      Ne.config = te;
                      var Fe = (L.Visitor = Ne),
                        Ue = function (a) {
                          if (N.isObject(a))
                            return Object.keys(a)
                              .filter(function (e) {
                                return '' !== a[e];
                              })
                              .reduce(function (e, t) {
                                var n = 'doesOptInApply' !== t ? a[t] : te.normalizeConfig(a[t]),
                                  r = N.normalizeBoolean(n);
                                return (e[t] = r), e;
                              }, Object.create(null));
                        },
                        He = je.OptIn,
                        Be = je.IabPlugin;
                      (Fe.getInstance = function (r, e) {
                        if (!r) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        r.indexOf('@') < 0 && (r += '@AdobeOrg');
                        var t = (function () {
                          var e = L.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === r) return n;
                            }
                        })();
                        if (t) return t;
                        var a,
                          n = Ue(e);
                        (a = n || {}),
                          (L.adobe.optIn =
                            L.adobe.optIn ||
                            (function () {
                              var e = N.pluck(a, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = a.optInCookieDomain || a.cookieDomain;
                              (t = (t = t || Y()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var n = new He(e, { cookies: W });
                              if (e.isIabContext) {
                                var r = new Be(window.__cmp);
                                n.registerPlugin(r);
                              }
                              return n;
                            })());
                        var i = r.split('').reverse().join(''),
                          o = new Fe(r, null, i);
                        N.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain),
                          L.s_c_il.splice(--L.s_c_in, 1);
                        var s = N.getIeVersion();
                        if ('number' == typeof s && s < 10)
                          return o._helpers.replaceMethodsWithFunction(o, function () {});
                        var c,
                          u =
                            (function () {
                              try {
                                return L.self !== L.parent;
                              } catch (r) {
                                return !0;
                              }
                            })() &&
                            ((c = o).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== c.cookieRead('TEST_AMCV_COOKIE') ||
                              (c._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            L.parent
                              ? new j(r, n, o, L.parent)
                              : new Fe(r, n, i);
                        return (o = null), u.init(), u;
                      }),
                        (function () {
                          function e () {
                            Fe.windowLoaded = !0;
                          }
                          L.addEventListener
                            ? L.addEventListener('load', e)
                            : L.attachEvent && L.attachEvent('onload', e),
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
              orgId: '1B6E34B85282A0AC0A490D44@AdobeOrg',
              variables: [
                { name: 'trackingServer', value: 'wileypublishing.sc.omtrdc.net' },
                { name: 'trackingServerSecure', value: 'wileypublishing.sc.omtrdc.net' },
              ],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP3d4585a666a540d593f13bc3e280372f/',
          },
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker'),
                    i = n('../helpers/applyTrackerVariables');
                  e.exports = function (t, n) {
                    return a().then(
                      function (e) {
                        r.logger.info('Set variables on the tracker.'),
                          i(e, t.trackerProperties),
                          t.customSetup &&
                            t.customSetup.source &&
                            t.customSetup.source.call(n.element, n, e);
                      },
                      function (e) {
                        r.logger.error('Cannot set variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/clearVariables.js': {
                name: 'clear-variables',
                displayName: 'Clear Variables',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker');
                  e.exports = function () {
                    return a().then(
                      function (e) {
                        e.clearVars && (r.logger.info('Clear variables.'), e.clearVars());
                      },
                      function (e) {
                        r.logger.error('Cannot clear variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('../sharedModules/getTracker'),
                    i = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    o = function (e) {
                      return i(e) ? e.innerHTML : 'link clicked';
                    },
                    s = function (e, t, n) {
                      if ('page' === t.type) a.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var r = { linkType: t.linkType || 'o', linkName: t.linkName || o(n) };
                        a.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(r) + '.'
                        ),
                          e.tl(i(n) ? n : 'true', r.linkType, r.linkName);
                      }
                    };
                  e.exports = function (t, n) {
                    return r().then(
                      function (e) {
                        s(e, t, n.element);
                      },
                      function (e) {
                        a.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var r,
                    a = n('@adobe/reactor-cookie'),
                    i = n('@adobe/reactor-promise'),
                    s = n('@adobe/reactor-window'),
                    c = n('../helpers/augmenters'),
                    u = n('@adobe/reactor-load-script'),
                    l = n('../helpers/applyTrackerVariables'),
                    d = n('../helpers/loadLibrary'),
                    f = n('../helpers/generateVersion')(o.buildInfo.turbineBuildDate),
                    p = 'beforeSettings',
                    m = o.getSharedModule('adobe-mcid', 'mcid-instance'),
                    g = function (e) {
                      return !e || 'true' === a.get(e);
                    },
                    h = function (r) {
                      return i
                        .all(
                          c.map(function (e) {
                            var t;
                            try {
                              t = e(r);
                            } catch (n) {
                              setTimeout(function () {
                                throw n;
                              });
                            }
                            return i.resolve(t);
                          })
                        )
                        .then(function () {
                          return r;
                        });
                    },
                    v = function (e) {
                      return (
                        m &&
                          (o.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = m)),
                        e
                      );
                    },
                    b = function (e) {
                      return (
                        o.logger.info('Setting version on tracker: "' + f + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = f)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + f &&
                            (e.version += '-' + f),
                        e
                      );
                    },
                    y = function (e, t, n) {
                      return (
                        t.loadPhase === p &&
                          t.source &&
                          (o.logger.info('Calling custom script before settings.'),
                          t.source.call(s, n)),
                        l(n, e || {}),
                        t.loadPhase !== p &&
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
                        var r = { namespace: s._satellite.company.orgId };
                        n.audienceManager.config.visitorService = r;
                        var a = 'AppMeasurement_Module_AudienceManagement.js',
                          i = o.getHostedLibFileUrl(a);
                        return u(i).then(function () {
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
                      ((r = o.getExtensionSettings()),
                      g(r.trackingCookieName)
                        ? d(r)
                            .then(h)
                            .then(v)
                            .then(b)
                            .then(y.bind(null, r.trackerProperties, r.customSetup || {}))
                            .then(_.bind(null, r))
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
                  var r = n('../helpers/augmenters');
                  e.exports = function (e) {
                    r.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var a = n('@adobe/reactor-query-string'),
                    i = n('@adobe/reactor-window'),
                    s = /eVar([0-9]+)/,
                    c = /prop([0-9]+)/,
                    u = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    l = function (e, t, n) {
                      return n.indexOf(e) === t;
                    },
                    d = function (e, t, n) {
                      var r = Object.keys(t).filter(u.test.bind(u));
                      return (
                        n && r.push('events'),
                        (r = r.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && l(e, t, r);
                          })
                          .join(',')
                      );
                    },
                    f = function (e, t) {
                      var n = t.map(function (e) {
                        return e.name;
                      });
                      return (n = n.concat((e.linkTrackEvents || '').split(',')))
                        .filter(function (e, t) {
                          return 'None' !== e && l(e, t, n);
                        })
                        .join(',');
                    },
                    r = function (e, t, n) {
                      e[t] = n[t].join(',');
                    },
                    p = function (a, e, t) {
                      var i = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var n = s.exec(e.value);
                          if (n) t = i + 'v' + n[1];
                          else {
                            var r = c.exec(e.value);
                            r && (t = i + 'c' + r[1]);
                          }
                        }
                        a[e.name] = t;
                      });
                    },
                    m = {
                      linkDownloadFileTypes: r,
                      linkExternalFilters: r,
                      linkInternalFilters: r,
                      hierarchies: function (t, e, n) {
                        n[e].forEach(function (e) {
                          t[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: p,
                      eVars: p,
                      campaign: function (e, t, n) {
                        if ('queryParam' === n[t].type) {
                          var r = a.parse(i.location.search);
                          e[t] = r[n[t].value];
                        } else e[t] = n[t].value;
                      },
                      events: function (e, t, n) {
                        var r = n[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.value && (t = [t, e.value].join('=')),
                            e.id && (t = [t, e.id].join(':')),
                            t
                          );
                        });
                        e[t] = r.join(',');
                      },
                    };
                  e.exports = function (t, r) {
                    var a = {};
                    (r = r || {}),
                      Object.keys(r).forEach(function (e) {
                        var t = m[e],
                          n = r[e];
                        t ? t(a, e, r) : (a[e] = n);
                      }),
                      a.events &&
                        t.events &&
                        0 < t.events.length &&
                        (a.events = t.events + ',' + a.events);
                    var e = r && r.events && 0 < r.events.length,
                      n = d(t, a, e);
                    n && (a.linkTrackVars = n);
                    var i = f(t, r.events || []);
                    i && (a.linkTrackEvents = i),
                      o.logger.info(
                        'Applying the following properties on tracker: "' +
                          JSON.stringify(a) +
                          '".'
                      ),
                      Object.keys(a).forEach(function (e) {
                        t[e] = a[e];
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
                  var r = n('@adobe/reactor-load-script'),
                    o = n('@adobe/reactor-window'),
                    s = n('@adobe/reactor-promise'),
                    a = {
                      MANAGED: 'managed',
                      PREINSTALLED: 'preinstalled',
                      REMOTE: 'remote',
                      CUSTOM: 'custom',
                    },
                    c = function (e) {
                      return i.logger.info('Loading AppMeasurement script from: ' + e + '.'), r(e);
                    },
                    u = function (e) {
                      var t = e.production;
                      return (
                        e[i.buildInfo.environment] && (t = e[i.buildInfo.environment]), t.join(',')
                      );
                    },
                    l = function (e, t) {
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
                      var t = u(e.libraryCode.accounts);
                      return c(i.getHostedLibFileUrl('AppMeasurement.js')).then(
                        l.bind(null, e, t)
                      );
                    },
                    f = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var n = u(e.libraryCode.accounts);
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
                    p = function (a) {
                      return (
                        i.logger.info(
                          'Waiting for the tracker to become accessible at: "' + a + '".'
                        ),
                        new s(function (e, t) {
                          var n = 1,
                            r = setInterval(function () {
                              o[a] &&
                                (i.logger.info('Found tracker located at: "' + a + '".'),
                                e(o[a]),
                                clearInterval(r)),
                                10 <= n &&
                                  (clearInterval(r),
                                  t(
                                    new Error(
                                      'Bailing out. Cannot find the global variable name: "' +
                                        a +
                                        '".'
                                    )
                                  )),
                                n++;
                            }, 1000);
                        })
                      );
                    },
                    m = function (e) {
                      return p(e.libraryCode.trackerVariableName).then(f.bind(null, e));
                    },
                    g = function (e) {
                      if (o[e])
                        return i.logger.info('Found tracker located at: "' + e + '".'), o[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    },
                    h = function (e, t) {
                      return c(e)
                        .then(g.bind(null, t.libraryCode.trackerVariableName))
                        .then(f.bind(null, t));
                    };
                  e.exports = function (e) {
                    var t, n;
                    switch (e.libraryCode.type) {
                      case a.MANAGED:
                        n = d(e);
                        break;
                      case a.PREINSTALLED:
                        n = m(e);
                        break;
                      case a.CUSTOM:
                        (t = e.libraryCode.source), (n = h(t, e));
                        break;
                      case a.REMOTE:
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
                    r = function (e) {
                      return e.substr(e.length - 1);
                    },
                    a = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    i = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * a(e)).toString(36);
                      return r(t);
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
              orgId: '1B6E34B85282A0AC0A490D44@AdobeOrg',
              customSetup: {
                source: function (n) {
                  function e (e) {
                    (e.campaign = e.getValOnce(_satellite.getVar('js - campaign'), 's_cmp')),
                      (e.eVar15 = e.getValOnce(_satellite.getVar('icid'), 's_icmp')),
                      (e.eVar1 = 'D=g'),
                      (e.eVar2 = _satellite.getVar('site.country')),
                      (e.eVar3 = _satellite.getVar('site.language')),
                      (e.eVar4 = _satellite.getVar('site.platform')),
                      (e.prop1 = _satellite.getVar('page.type')),
                      (e.prop2 = e.getPreviousValue(e.pageName, 's_ppn')),
                      e.pageName && e.getPercentPageViewed(),
                      e._ppvPreviousPage &&
                        (e.prop3 =
                          'initial % viewed=' +
                          e._ppvInitialPercentViewed +
                          '|highest % viewed=' +
                          e._ppvHighestPercentViewed),
                      (e.eVar9 = _satellite.getVar('loginstatus')),
                      (e.channel = _satellite.getVar('page.section')),
                      'e' === e.linkType && (e.events = ''),
                      (e.eVar100 = r.getMarketingCloudVisitorID()),
                      (e.eVar102 = 'WIL');
                    var t = /o|d|e/g;
                    'undefined' != typeof e.linkType && t.test(e.linkType)
                      ? ((e.linkTrackVars += ',eVar2,eVar3,eVar4,eVar5'),
                        (e.eVar2 = _satellite.getVar('site.country')),
                        (e.eVar3 = _satellite.getVar('site.language')),
                        (e.eVar4 = _satellite.getVar('site.platform')))
                      : (e.linkTrackVars = 'none');
                  }
                  var r = Visitor.getInstance('1B6E34B85282A0AC0A490D44@AdobeOrg', {
                    trackingServer: 'wileypublishing.sc.omtrdc.net',
                    trackingServerSecure: 'wileypublishing.sc.omtrdc.net',
                  });
                  (n.split = new Function(
                    'l',
                    'd',
                    'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                  )),
                    (n.apl = new Function(
                      'l',
                      'v',
                      'd',
                      'u',
                      "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"
                    )),
                    (n.getValOnce = new Function(
                      'v',
                      'c',
                      'e',
                      't',
                      "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"
                    )),
                    (n.getPreviousValue = new Function(
                      'v',
                      'c',
                      'el',
                      "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
                    )),
                    (n.getPercentPageViewed = function (e, t) {
                      var n = this,
                        r = n.c_r('s_ppv');
                      ((r = -1 < r.indexOf(',') ? r.split(',') : [])[0] = n.unescape(r[0])),
                        (e = e || (n.pageName ? n.pageName : document.location.href)),
                        (n.ppvChange = t || !0),
                        ('undefined' != typeof n.linkType && 'o' === n.linkType) ||
                          ((n.ppvID && n.ppvID === e) ||
                            ((n.ppvID = e), n.c_w('s_ppv', ''), n.handlePPVevents()),
                          n.p_fo('s_gppvLoad') &&
                            window.addEventListener &&
                            (window.addEventListener('load', n.handlePPVevents, !1),
                            window.addEventListener('click', n.handlePPVevents, !1),
                            window.addEventListener('scroll', n.handlePPVevents, !1),
                            window.addEventListener('resize', n.handlePPVevents, !1)),
                          (n._ppvPreviousPage = r[0] ? r[0] : ''),
                          (n._ppvHighestPercentViewed = r[1] ? r[1] : ''),
                          (n._ppvInitialPercentViewed = r[2] ? r[2] : ''),
                          (n._ppvHighestPixelsSeen = r[3] ? r[3] : ''));
                    }),
                    (n.handlePPVevents = function () {
                      if ('undefined' != typeof s_c_il) {
                        for (var e = 0, t = s_c_il.length; e < t; e++)
                          if (s_c_il[e] && s_c_il[e].getPercentPageViewed) {
                            var n = s_c_il[e];
                            break;
                          }
                        if (n && n.ppvID) {
                          var r = Math.max(
                            Math.max(
                              document.body.scrollHeight,
                              document.documentElement.scrollHeight
                            ),
                            Math.max(
                              document.body.offsetHeight,
                              document.documentElement.offsetHeight
                            ),
                            Math.max(
                              document.body.clientHeight,
                              document.documentElement.clientHeight
                            )
                          );
                          (e =
                            (window.pageYOffset ||
                              window.document.documentElement.scrollTop ||
                              window.document.body.scrollTop) +
                            (window.innerHeight ||
                              document.documentElement.clientHeight ||
                              document.body.clientHeight)),
                            (t = Math.min(Math.round((e / r) * 100), 100));
                          var a = '';
                          !n.c_r('s_tp') ||
                          n.unescape(n.c_r('s_ppv').split(',')[0]) !== n.ppvID ||
                          (1 == n.ppvChange && n.c_r('s_tp') && r != n.c_r('s_tp'))
                            ? (n.c_w('s_tp', r), n.c_w('s_ppv', ''))
                            : (a = n.c_r('s_ppv'));
                          var i = a && -1 < a.indexOf(',') ? a.split(',', 4) : [];
                          r = 0 < i.length ? i[0] : escape(n.ppvID);
                          var o = 1 < i.length ? parseInt(i[1]) : t,
                            s = 2 < i.length ? parseInt(i[2]) : t;
                          (i = 3 < i.length ? parseInt(i[3]) : e),
                            0 < t &&
                              (a = r + ',' + (o < t ? t : o) + ',' + s + ',' + (i < e ? e : i)),
                            n.c_w('s_ppv', a);
                        }
                      }
                    }),
                    (n.p_fo = function (e) {
                      var t = this;
                      return t.__fo || (t.__fo = {}), !t.__fo[e] && ((t.__fo[e] = {}), !0);
                    }),
                    (Number.isNaN =
                      Number.isNaN ||
                      function (e) {
                        return 'number' == typeof e && isNaN(e);
                      }),
                    (n.buildProducts = function (e) {
                      for (var t = ''; (product = e.shift()) !== undefined; )
                        '' !== product.totalQuantity && '' != product.totalPrice
                          ? (t +=
                              ';' +
                              product.sku +
                              ';' +
                              product.totalQuantity +
                              ';' +
                              product.totalPrice)
                          : Object.keys(product.evars).length || Object.keys(product.events).length
                          ? (t += ';' + product.sku + ';;')
                          : (t += ';' + product.sku),
                          (t += n.buildMerchEvents(product.events)),
                          (t += n.buildMerchEvars(t, product.evars)),
                          0 != e.length && (t += ',');
                      return t;
                    }),
                    (n.buildMerchEvents = function (e) {
                      var t = ';',
                        n = 0;
                      if (0 == Object.keys(e).length) return '';
                      for (key in e) 0 < n && (t += '|'), (t += key + '=' + e[key]), n++;
                      return t;
                    }),
                    (n.buildMerchEvars = function (e, t) {
                      var n = ';',
                        r = 0;
                      if (((e = e.toLowerCase()), 0 == Object.keys(t).length)) return '';
                      for (key in (-1 == e.indexOf('event') && (n += ';'), t))
                        0 < r && (n += '|'), (n += key + '=' + t[key]), r++;
                      return n;
                    }),
                    (n.oProduct = function (e, t, n, r, a) {
                      (this.sku = void 0 !== e && '' !== e ? e : ''),
                        (this.totalQuantity = void 0 !== t && '' !== t ? t : ''),
                        (this.totalPrice = void 0 !== n && '' !== n ? n : ''),
                        (this.evars = void 0 !== r && '' !== r ? r : {}),
                        (this.events = void 0 !== a && '' !== a ? a : {}),
                        (this.add = function (e, t) {
                          typeof t != undefined &&
                            null != t &&
                            'undefined' != t &&
                            'null' != t &&
                            (-1 < (e = e.toLowerCase()).indexOf('evar')
                              ? (this.evars[e] = t)
                              : -1 < e.indexOf('event') && (this.events[e] = t));
                        });
                    }),
                    (n.usePlugins = !0),
                    (n.doPlugins = e);
                },
              },
              libraryCode: {
                type: 'managed',
                accounts: {
                  staging: ['%reportsuiteid%'],
                  production: ['%reportsuiteid%'],
                  development: ['%reportsuiteid%'],
                },
                scopeTrackerGlobally: !1,
              },
              trackerProperties: {
                charSet: 'UTF-8',
                currencyCode: 'USD',
                trackingServer: 'wileypublishing.sc.omtrdc.net',
                trackInlineStats: !0,
                trackDownloadLinks: !1,
                trackExternalLinks: !0,
                linkInternalFilters: ['%nevertrackdomains%'],
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP5e9ec493dfa0465eaa797b523b09d3f7/',
          },
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/javascriptVariable.js': {
                name: 'javascript-variable',
                displayName: 'JavaScript Variable',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return r(window, e.path);
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
                      var n = e.name.toLowerCase(), r = Object.keys(t), a = 0;
                      a < r.length;
                      a++
                    ) {
                      var i = r[a];
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
              'core/src/lib/dataElements/cookie.js': {
                name: 'cookie',
                displayName: 'Cookie',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-cookie');
                  e.exports = function (e) {
                    return r.get(e.name);
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
                        var r = { identifier: e, detail: t };
                        n.forEach(function (e) {
                          e(r);
                        });
                        var a = [
                          'Rules using the direct call event type with identifier "' +
                            e +
                            '" have been triggered' +
                            (t ? ' with additional detail:' : '.'),
                        ];
                        t && a.push(t), i.logger.log.apply(i.logger, a);
                      } else
                        i.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, t) {
                      var n = o[e.identifier];
                      n || (n = o[e.identifier] = []), n.push(t);
                    });
                },
              },
              'core/src/lib/conditions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    return e.source.call(t.element, t, t.target);
                  };
                },
              },
              'core/src/lib/events/mousedown.js': {
                name: 'mousedown',
                displayName: 'Mousedown',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/createBubbly')();
                  document.addEventListener('mousedown', r.evaluateEvent, !0),
                    (e.exports = function (e, t) {
                      r.addListener(e, t);
                    });
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var r = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    a = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    i = function (e, t) {
                      return t && a(e) ? e.toLowerCase() : e;
                    },
                    o = function (e) {
                      return r(e) ? String(e) : e;
                    },
                    s = function (e) {
                      return a(e) ? Number(e) : e;
                    },
                    t = function (r) {
                      return function (e, t, n) {
                        return (e = o(e)), (t = o(t)), a(e) && a(t) && r(e, t, n);
                      };
                    },
                    n = function (n) {
                      return function (e, t) {
                        return (e = s(e)), (t = s(t)), r(e) && r(t) && n(e, t);
                      };
                    },
                    c = function (r) {
                      return function (e, t, n) {
                        return r(i(e, n), i(t, n));
                      };
                    },
                    u = {
                      equals: c(function (e, t) {
                        return e == t;
                      }),
                      doesNotEqual: function () {
                        return !u.equals.apply(null, arguments);
                      },
                      contains: t(
                        c(function (e, t) {
                          return -1 !== e.indexOf(t);
                        })
                      ),
                      doesNotContain: function () {
                        return !u.contains.apply(null, arguments);
                      },
                      startsWith: t(
                        c(function (e, t) {
                          return 0 === e.indexOf(t);
                        })
                      ),
                      doesNotStartWith: function () {
                        return !u.startsWith.apply(null, arguments);
                      },
                      endsWith: t(
                        c(function (e, t) {
                          return e.substring(e.length - t.length, e.length) === t;
                        })
                      ),
                      doesNotEndWith: function () {
                        return !u.endsWith.apply(null, arguments);
                      },
                      matchesRegex: t(function (e, t, n) {
                        return new RegExp(t, n ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !u.matchesRegex.apply(null, arguments);
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
                    return u[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/events/windowLoaded.js': {
                name: 'window-loaded',
                displayName: 'Window Loaded',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    r.registerWindowLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, r) {
                  'use strict';
                  var a,
                    i,
                    o,
                    s = n('@adobe/reactor-document'),
                    c = n('./helpers/decorateCode'),
                    u = n('./helpers/loadCodeSequentially'),
                    l = n('../../../node_modules/postscribe/dist/postscribe'),
                    d = r.getExtensionSettings(),
                    f =
                      ((a = function (e) {
                        l(s.body, e, {
                          beforeWriteToken: function (e) {
                            return (
                              d.cspNonce && 'script' === e.tagName && (e.attrs.nonce = d.cspNonce),
                              e
                            );
                          },
                          error: function (e) {
                            r.logger.error(e.msg);
                          },
                        });
                      }),
                      (i = []),
                      (o = function () {
                        if (s.body) for (; i.length; ) a(i.shift());
                        else setTimeout(o, 20);
                      }),
                      function (e) {
                        i.push(e), o();
                      }),
                    p = (function () {
                      if (s.currentScript) return s.currentScript.async;
                      for (var e = s.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var n = { settings: e, event: t },
                      r = n.settings.source;
                    if (r)
                      return n.settings.isExternal
                        ? u(r).then(function (e) {
                            e && f(c(n, e));
                          })
                        : void (p || 'loading' !== s.readyState
                            ? f(c(n, r))
                            : s.write
                            ? s.write(c(n, r))
                            : f(c(n, r)));
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    a = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = r.location.pathname;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return a(n, t);
                    });
                  };
                },
              },
              'core/src/lib/events/click.js': {
                name: 'click',
                displayName: 'Click',
                script: function (e, t, n) {
                  'use strict';
                  var i = n('@adobe/reactor-window'),
                    o = n('./helpers/createBubbly')(),
                    s = new (n('./helpers/weakMap'))(),
                    c = function (e) {
                      for (; e; ) {
                        var t = e.tagName;
                        if (t && 'a' === t.toLowerCase()) {
                          var n = e.getAttribute('href'),
                            r = e.getAttribute('target');
                          return n &&
                            (!r || '_self' === r || ('_top' === r && i.top === i) || r === i.name)
                            ? e
                            : void 0;
                        }
                        e = e.parentNode;
                      }
                    };
                  document.addEventListener('click', o.evaluateEvent, !0),
                    (e.exports = function (r, a) {
                      o.addListener(r, function (e) {
                        var t = e.nativeEvent;
                        if (!t.s_fe) {
                          if (r.anchorDelay && !s.has(t)) {
                            var n = c(t.target);
                            n &&
                              (t.preventDefault(),
                              setTimeout(function () {
                                i.location = n.href;
                              }, r.anchorDelay)),
                              s.set(t, !0);
                          }
                          a(e);
                        }
                      });
                    }),
                    (e.exports.__reset = o.__reset);
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    r.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    for (var n = t.split('.'), r = e, a = 0, i = n.length; a < i; a++) {
                      if (null == r) return undefined;
                      r = r[n[a]];
                    }
                    return r;
                  };
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./weakMap'),
                    p = n('./matchesProperties'),
                    m = n('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      f = new r(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !f.has(t)) {
                            for (var n = t.target, r = !1; n; ) {
                              for (var a = !1, i = !1, o = 0; o < d.length; o++) {
                                var s = d[o],
                                  c = s.settings.elementSelector,
                                  u = s.settings.elementProperties;
                                if (
                                  (!1 !== s.settings.bubbleFireIfChildFired || !r) &&
                                  (n === t.target || !1 !== s.settings.bubbleFireIfParent) &&
                                  (n === t.target || c || (u && Object.keys(u).length)) &&
                                  (!c || m(n, c)) &&
                                  (!u || p(n, u))
                                ) {
                                  var l = {};
                                  e
                                    ? Object.keys(t).forEach(function (e) {
                                        l[e] = t[e];
                                      })
                                    : (l.nativeEvent = t),
                                    (l.element = n),
                                    (l.target = t.target),
                                    !1 !== s.callback(l) &&
                                      ((i = !0), s.settings.bubbleStop && (a = !0));
                                }
                              }
                              if (a) break;
                              i && (r = !0), (n = n.parentNode);
                            }
                            f.set(t, !0);
                          }
                        },
                        __reset: function () {
                          d = [];
                        },
                      };
                    return e;
                  };
                },
              },
              'core/src/lib/events/helpers/weakMap.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-window').WeakMap;
                  if (void 0 === r) {
                    var a = Object.defineProperty,
                      i = Date.now() % 1000000000;
                    (r = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + i++ + '__';
                    }).prototype = {
                      set: function (e, t) {
                        var n = e[this.name];
                        return (
                          n && n[0] === e
                            ? (n[1] = t)
                            : a(e, this.name, { value: [e, t], writable: !0 }),
                          this
                        );
                      },
                      get: function (e) {
                        var t;
                        return (t = e[this.name]) && t[0] === e ? t[1] : undefined;
                      },
                      delete: function (e) {
                        var t = e[this.name];
                        return !(!t || t[0] !== e || ((t[0] = t[1] = undefined), 0));
                      },
                      has: function (e) {
                        var t = e[this.name];
                        return !!t && t[0] === e;
                      },
                    };
                  }
                  e.exports = r;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./../../helpers/textMatch'),
                    i = function (e, t) {
                      return '@text' === t || 'innerText' === t
                        ? e.textContent || e.innerText
                        : t in e
                        ? e[t]
                        : e.getAttribute
                        ? e.getAttribute(t)
                        : void 0;
                    };
                  e.exports = function (r, e) {
                    return (
                      !e ||
                      e.every(function (e) {
                        var t = i(r, e.name),
                          n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return a(t, n);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  e.exports = function (e, t) {
                    var n = e.matches || e.msMatchesSelector;
                    if (n)
                      try {
                        return n.call(e, t);
                      } catch (r) {
                        return (
                          a.logger.warn(
                            'Matching element failed. ' + t + ' is not a valid selector.'
                          ),
                          !1
                        );
                      }
                    return !1;
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
                  const $___old_5e7cb198e364876a = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_5e7cb198e364876a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = n('@adobe/reactor-window'),
                        a = n('@adobe/reactor-document'),
                        i = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                        o = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        u = [c, s, o],
                        l = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      u.forEach(function (e) {
                        d[e] = [];
                      });
                      var f = function (e, t) {
                          u.slice(0, m(e) + 1).forEach(function (e) {
                            g(t, e);
                          });
                        },
                        p = function () {
                          return 'complete' === a.readyState
                            ? o
                            : 'interactive' === a.readyState
                            ? i
                              ? null
                              : s
                            : void 0;
                        },
                        m = function (e) {
                          return u.indexOf(e);
                        },
                        g = function (t, e) {
                          d[e].forEach(function (e) {
                            h(t, e);
                          }),
                            (d[e] = []);
                        },
                        h = function (e, t) {
                          var n = t.trigger,
                            r = t.syntheticEventFn;
                          n(r ? r(e) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = f.bind(null, c)),
                        a.addEventListener('DOMContentLoaded', f.bind(null, s), !0),
                        r.addEventListener('load', f.bind(null, o), !0),
                        r.setTimeout(function () {
                          var e = p();
                          e && f(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[s].push({ trigger: e, syntheticEventFn: l.bind(null, a) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: l.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_5e7cb198e364876a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_5e7cb198e364876a
                      ));
                  }
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = 0,
                    i = function (e) {
                      return e.settings.isExternal;
                    },
                    o = function (e, t) {
                      return '<script>\n' + t + '\n</script>';
                    },
                    s = function (t, e) {
                      var n = '__runScript' + ++a;
                      return (
                        (_satellite[n] = function (e) {
                          e.call(t.event.element, t.event, t.event.target), delete _satellite[n];
                        }),
                        '<script>_satellite["' +
                          n +
                          '"](function(event, target) {\n' +
                          e +
                          '\n});</script>'
                      );
                    },
                    c = {
                      javascript: function (e, t) {
                        return e.settings.global ? o(e, t) : s(e, t);
                      },
                      html: function (e, t) {
                        return i(e) ? r.replaceTokens(t, e.event) : t;
                      },
                    };
                  e.exports = function (e, t) {
                    return c[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-promise'),
                    a = n('./getSourceByUrl'),
                    i = r.resolve();
                  e.exports = function (t) {
                    var e = new r(function (n) {
                      var e = a(t);
                      r.all([e, i]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (i = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, r) {
                  !(function a (e, t) {
                    'object' == typeof r && 'object' == typeof n
                      ? (n.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof r
                      ? (r.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (n) {
                      function r (e) {
                        if (a[e]) return a[e].exports;
                        var t = (a[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports;
                      }
                      var a = {};
                      return (r.m = n), (r.c = a), (r.p = ''), r(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var a = r(n(1));
                        e.exports = a['default'];
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function u () {}
                        function l () {
                          var e = c.shift();
                          if (e) {
                            var t = o.last(e);
                            t.afterDequeue(),
                              (e.stream = i.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function i (e, t, r) {
                          function a (e) {
                            (e = r.beforeWrite(e)), g.write(e), r.afterWrite(e);
                          }
                          ((g = new p['default'](e, r)).id = m++),
                            (g.name = r.name || g.id),
                            (d.streams[g.name] = g);
                          var n = e.ownerDocument,
                            i = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          f(n, {
                            close: u,
                            open: u,
                            write: function s () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join('') + '\n');
                            },
                          });
                          var o = g.win.onerror || u;
                          return (
                            (g.win.onerror = function (e, t, n) {
                              r.error({ msg: e + ' - ' + t + ': ' + n }),
                                o.apply(g.win, [e, t, n]);
                            }),
                            g.write(t, function () {
                              f(n, i), (g.win.onerror = o), r.done(), (g = null), l();
                            }),
                            g
                          );
                        }
                        function d (e, t, n) {
                          if (o.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (c = []), (g = null), void (m = 0);
                          n = o.defaults(n, s);
                          var r = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            t,
                            n,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function a () {
                                r.stream ? r.stream.abort() : (r[1] = u);
                              },
                            }),
                            n.beforeEnqueue(r),
                            c.push(r),
                            g || l(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var f =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                          };
                        t['default'] = d;
                        var p = a(n(2)),
                          o = r(n(4)),
                          s = {
                            afterAsync: u,
                            afterDequeue: u,
                            afterStreamStart: u,
                            afterWrite: u,
                            autoFix: !0,
                            beforeEnqueue: u,
                            beforeWriteToken: function h (e) {
                              return e;
                            },
                            beforeWrite: function v (e) {
                              return e;
                            },
                            done: u,
                            error: function b (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          m = 0,
                          c = [],
                          g = null;
                        f(d, { streams: {}, queue: c, WriteStream: p['default'] });
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function y (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function _ (e, t) {
                          var n = w + t,
                            r = e.getAttribute(n);
                          return S.existy(r) ? String(r) : r;
                        }
                        function C (e, t, n) {
                          var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            a = w + t;
                          S.existy(r) && '' !== r ? e.setAttribute(a, r) : e.removeAttribute(a);
                        }
                        t.__esModule = !0;
                        var I =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                            },
                          k = a(n(3)),
                          S = r(n(4)),
                          P = !1,
                          w = 'data-ps-',
                          E = 'ps-style',
                          A = 'ps-script',
                          i = (function () {
                            function r (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              y(this, r),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new k['default']('', { autoFix: n.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                C(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (r.prototype.write = function n () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  S.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (r.prototype._callFunction = function a (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (r.prototype._writeImpl = function i (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, r = void 0, a = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = S.isScript(t)) &&
                                  !(r = S.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && a.push(t);
                                0 < a.length && this._writeStaticTokens(a),
                                  n && this._handleScriptToken(t),
                                  r && this._handleStyleToken(t);
                              }),
                              (r.prototype._writeStaticTokens = function o (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    P && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    P && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function l (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    r = [],
                                    a = [],
                                    i = e.length,
                                    o = 0;
                                  o < i;
                                  o++
                                ) {
                                  var s = e[o],
                                    c = s.toString();
                                  if ((n.push(c), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var u = t++;
                                      r.push(c.replace(/(\/?>)/, ' ' + w + 'id=' + u + ' $1')),
                                        s.attrs.id !== A &&
                                          s.attrs.id !== E &&
                                          a.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  w +
                                                  'proxyof=' +
                                                  u +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(c), a.push('endTag' === s.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: r.join(''),
                                  proxy: a.join(''),
                                };
                              }),
                              (r.prototype._walkChunk = function s () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  S.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !_(e, 'proxyof')) {
                                    n && C((this.actuals[_(e, 'id')] = e), 'id');
                                    var r = e.parentNode && _(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  t.unshift.apply(t, S.toArray(e.childNodes));
                                }
                              }),
                              (r.prototype._handleScriptToken = function c (e) {
                                var t = this,
                                  n = this.parser.clear();
                                n && this.writeQueue.unshift(n),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      t._onScriptDone(e);
                                    }));
                              }),
                              (r.prototype._handleStyleToken = function u (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (r.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, E),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  S.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (r.prototype._insertCursor = function f (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (r.prototype._onScriptStart = function p (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (r.prototype._onScriptDone = function m (e) {
                                e === this.scriptStack[0]
                                  ? (this.scriptStack.shift(),
                                    this.write.apply(this, e.outerWrites),
                                    !this.scriptStack.length &&
                                      this.deferredRemote &&
                                      (this._onScriptStart(this.deferredRemote),
                                      (this.deferredRemote = null)))
                                  : this.options.error({
                                      msg: 'Bad script nesting or script finished twice',
                                    });
                              }),
                              (r.prototype._writeScriptToken = function g (e, t) {
                                var n = this._buildScript(e),
                                  r = this._shouldRelease(n),
                                  a = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    r
                                      ? a
                                      : function () {
                                          t(), a();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, A), (n.src && !r) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (r.prototype._buildScript = function h (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  S.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function v (t, n) {
                                function r () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function a () {
                                  r(), null != n && n(), (n = null);
                                }
                                function i (e) {
                                  r(), o(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var o = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  I(t, {
                                    onload: function s () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          i({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      a();
                                    },
                                    onerror: function c () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void i({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      i({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function u () {
                                      /^(loaded|complete)$/.test(t.readyState) && a();
                                    },
                                  });
                              }),
                              (r.prototype._shouldRelease = function b (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              r
                            );
                          })();
                        t['default'] = i;
                      },
                      function (n) {
                        !(function r (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function r (e) {
                              if (a[e]) return a[e].exports;
                              var t = (a[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports
                              );
                            }
                            var a = {};
                            return (r.m = n), (r.c = a), (r.p = ''), r(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var a = r(n(1));
                              e.exports = a['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function a (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return (t['default'] = e), t;
                              }
                              function l (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var d = a(n(2)),
                                f = a(n(3)),
                                p = r(n(6)),
                                i = n(5),
                                m = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                o = (function () {
                                  function c (e, t) {
                                    var n = this,
                                      r =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      a =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    l(this, c), (this.stream = r);
                                    var i = !1,
                                      o = {};
                                    for (var s in d)
                                      d.hasOwnProperty(s) &&
                                        (a.autoFix && (o[s + 'Fix'] = !0),
                                        (i = i || o[s + 'Fix']));
                                    i
                                      ? ((this._readToken = (0, p['default'])(
                                          this,
                                          o,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, p['default'])(this, o, function () {
                                          return n._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function n (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function r () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function a () {
                                      for (var e in m)
                                        if (m.hasOwnProperty(e) && m[e].test(this.stream)) {
                                          var t = f[e](this.stream);
                                          if (t)
                                            return 'startTag' === t.type &&
                                              /script|style/i.test(t.tagName)
                                              ? null
                                              : ((t.text = this.stream.substr(0, t.length)), t);
                                        }
                                    }),
                                    (c.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (c.prototype.readToken = function i () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function o (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (c.prototype.clear = function s () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function u () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var s in (((t['default'] = o).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (o.escapeAttributes = function (e) {
                                var t = {};
                                for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = (0, i.escapeQuotes)(e[n], null));
                                return t;
                              }),
                              (o.supports = d)))
                                d.hasOwnProperty(s) &&
                                  (o.browserHasFlaw = o.browserHasFlaw || (!d[s] && s));
                            },
                            function (e, t) {
                              'use strict';
                              var n = !(t.__esModule = !0),
                                r = !1,
                                a = window.document.createElement('div');
                              try {
                                var i = '<P><I></P></I>';
                                (a.innerHTML = i), (t.tagSoup = n = a.innerHTML !== i);
                              } catch (o) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (a.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = r = 2 === a.childNodes.length);
                              } catch (o) {
                                t.selfClose = r = !1;
                              }
                              (a = null), (t.tagSoup = n), (t.selfClose = r);
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new l.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function a (e) {
                                var t = e.indexOf('<');
                                return new l.CharsToken(0 <= t ? t : e.length);
                              }
                              function i (e) {
                                var o, s, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var n =
                                      ((o = {}),
                                      (s = {}),
                                      (c = t[2]),
                                      t[2].replace(d.attr, function (e, t, n, r, a, i) {
                                        n || r || a || i
                                          ? arguments[5]
                                            ? ((o[arguments[5]] = ''), (s[arguments[5]] = !0))
                                            : (o[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(t) && t) ||
                                                '')
                                          : (o[t] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new l.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          o,
                                          s,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : u(n)))
                                      return n.v;
                                  }
                                }
                              }
                              function o (e) {
                                var t = i(e);
                                if (t) {
                                  var n = e.slice(t.length);
                                  if (n.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var r = n.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (r)
                                      return new l.AtomicTagToken(
                                        t.tagName,
                                        r[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        r[1]
                                      );
                                  }
                                }
                              }
                              function s (e) {
                                var t = e.match(d.endTag);
                                if (t) return new l.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
                              var u =
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
                                    };
                              (t.comment = r),
                                (t.chars = a),
                                (t.startTag = i),
                                (t.atomicTag = o),
                                (t.endTag = s);
                              var l = n(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, n) {
                              'use strict';
                              function s (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var c = n(5),
                                r = (t.Token = function r (e, t) {
                                  s(this, r), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                a =
                                  ((t.CommentToken = (function () {
                                    function n (e, t) {
                                      s(this, n),
                                        (this.type = 'comment'),
                                        (this.length = t || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (n.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      n
                                    );
                                  })()),
                                  (t.CharsToken = (function () {
                                    function t (e) {
                                      s(this, t),
                                        (this.type = 'chars'),
                                        (this.length = e),
                                        (this.text = '');
                                    }
                                    return (
                                      (t.prototype.toString = function e () {
                                        return this.text;
                                      }),
                                      t
                                    );
                                  })()),
                                  (t.TagToken = (function () {
                                    function i (e, t, n, r, a) {
                                      s(this, i),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = r),
                                        (this.booleanAttrs = a),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (i.formatTag = function o (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          r = '<' + e.tagName;
                                        for (var a in e.attrs)
                                          if (e.attrs.hasOwnProperty(a)) {
                                            r += ' ' + a;
                                            var i = e.attrs[a];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[a]) ||
                                              (r += '="' + (0, c.escapeQuotes)(i) + '"');
                                          }
                                        return (
                                          e.rest && (r += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (r += '/>') : (r += '>'),
                                          n !== undefined &&
                                            null !== n &&
                                            (r += n + '</' + e.tagName + '>'),
                                          r
                                        );
                                      }),
                                      i
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function o (e, t, n, r, a, i) {
                                  s(this, o),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = r),
                                    (this.html5Unary = !1),
                                    (this.unary = a),
                                    (this.rest = i);
                                }
                                return (
                                  (o.prototype.toString = function e () {
                                    return a.formatTag(this);
                                  }),
                                  o
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function i (e, t, n, r, a) {
                                    s(this, i),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = r),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = a);
                                  }
                                  return (
                                    (i.prototype.toString = function e () {
                                      return a.formatTag(this, this.content);
                                    }),
                                    i
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function n (e, t) {
                                    s(this, n),
                                      (this.type = 'endTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (n.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    n
                                  );
                                })());
                            },
                            function (e, t) {
                              'use strict';
                              function n (e, t) {
                                var n =
                                  1 < arguments.length && t !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, t) {
                                      return /\\/.test(t) ? t + '"' : t + '\\"';
                                    })
                                  : n;
                              }
                              (t.__esModule = !0), (t.escapeQuotes = n);
                            },
                            function (e, t) {
                              'use strict';
                              function u (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = r.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function l (e, t) {
                                var n = e.stream,
                                  r = u(t());
                                return (e.stream = n), r;
                              }
                              function d (e, t) {
                                var n = t.pop();
                                e.prepend('</' + n.tagName + '>');
                              }
                              function f () {
                                var e = [];
                                return (
                                  (e.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (e.lastTagNameEq = function (e) {
                                    var t = this.last();
                                    return (
                                      t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                                    );
                                  }),
                                  (e.containsTagName = function (e) {
                                    for (var t, n = 0; (t = this[n]); n++)
                                      if (t.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function n (n, r, t) {
                                function a () {
                                  var e = l(n, t);
                                  e && o[e.type] && o[e.type](e);
                                }
                                var i = f(),
                                  o = {
                                    startTag: function s (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), a())
                                        : r.selfCloseFix && p.test(t) && i.containsTagName(t)
                                        ? i.lastTagNameEq(t)
                                          ? d(n, i)
                                          : (n.prepend('</' + e.tagName + '>'), a())
                                        : e.unary || i.push(e);
                                    },
                                    endTag: function c (e) {
                                      i.last()
                                        ? r.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                          ? d(n, i)
                                          : i.pop()
                                        : r.tagSoupFix && (t(), a());
                                    },
                                  };
                                return function e () {
                                  return a(), u(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function r (e) {
                          return null != e;
                        }
                        function n (e) {
                          return 'function' == typeof e;
                        }
                        function a (e, t, n) {
                          var r = void 0,
                            a = (e && e.length) || 0;
                          for (r = 0; r < a; r++) t.call(n, e[r], r);
                        }
                        function i (e, t, n) {
                          for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]);
                        }
                        function o (n, e) {
                          return (
                            (n = n || {}),
                            i(e, function (e, t) {
                              r(n[e]) || (n[e] = t);
                            }),
                            n
                          );
                        }
                        function s (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (r) {
                            var t =
                              ((n = []),
                              a(e, function (e) {
                                n.push(e);
                              }),
                              { v: n });
                            if ('object' === (void 0 === t ? 'undefined' : f(t))) return t.v;
                          }
                          var n;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function u (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function l (e) {
                          return u(e, 'script');
                        }
                        function d (e) {
                          return u(e, 'style');
                        }
                        t.__esModule = !0;
                        var f =
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
                              };
                        (t.existy = r),
                          (t.isFunction = n),
                          (t.each = a),
                          (t.eachKey = i),
                          (t.defaults = o),
                          (t.toArray = s),
                          (t.last = c),
                          (t.isTag = u),
                          (t.isScript = l),
                          (t.isStyle = d);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-load-script'),
                    a = n('@adobe/reactor-promise'),
                    i = {},
                    o = {},
                    s = function (e) {
                      return o[e] || (o[e] = r(e)), o[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    i[e] = t;
                  }),
                    (e.exports = function (t) {
                      return i[t]
                        ? a.resolve(i[t])
                        : new a(function (e) {
                            s(t).then(
                              function () {
                                e(i[t]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2c73f67d94bb4dfb8c54d3436dc19256/',
          },
          'qualtrics-website-feedback': {
            displayName: 'Qualtrics Website Feedback',
            modules: {
              'qualtrics-website-feedback/src/lib/actions/loadProject.js': {
                name: 'load-project',
                displayName: 'Load Project',
                script: function (e, t, n, s) {
                  'use strict';
                  e.exports = function (e) {
                    try {
                      var n = e.brandID,
                        r = e.projectID,
                        a = r.replace('_', '').toLowerCase(),
                        t = function () {
                          var e = document.createElement('div');
                          (e.id = r), document.body.appendChild(e);
                        };
                      'undefined' == typeof window.QSI &&
                        (window.QSI = { clientTypeVariant: 'AdobeLaunch' });
                      var i = function () {
                        !(function () {
                          var e = function (r, a, i, t) {
                            (this.get = function (e) {
                              for (
                                var t = e + '=',
                                  n = document.cookie.split(';'),
                                  r = 0,
                                  a = n.length;
                                r < a;
                                r++
                              ) {
                                for (var i = n[r]; ' ' == i.charAt(0); )
                                  i = i.substring(1, i.length);
                                if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
                              }
                              return null;
                            }),
                              (this.set = function (e, t) {
                                var n,
                                  r = '';
                                (n = new Date()).setTime(n.getTime() + 604800000),
                                  (r = '; expires=' + n.toGMTString()),
                                  (document.cookie = e + '=' + t + r + '; path=/; ');
                              }),
                              (this.check = function () {
                                var e = this.get(i);
                                if (e) e = e.split(':');
                                else {
                                  if (((e = [a, r, 0]), 100 == r)) return !0;
                                  'v' == a && (r = Math.random() >= r / 100 ? 0 : 100),
                                    (e = [a, r, 0]),
                                    this.set(i, e.join(':'));
                                }
                                var t = e[1];
                                if (100 == t) return !0;
                                switch (e[0]) {
                                  case 'v':
                                    return !1;
                                  case 'r':
                                    var n = e[2] % Math.floor(100 / t);
                                    return e[2]++, this.set(i, e.join(':')), !n;
                                }
                                return !0;
                              }),
                              (this.go = function () {
                                if (this.check()) {
                                  var e = document.createElement('script');
                                  (e.type = 'text/javascript'),
                                    (e.src = t),
                                    document.body && document.body.appendChild(e);
                                }
                              });
                          };
                          try {
                            new e(
                              100,
                              'r',
                              'QSI_S_' + r,
                              'https://' +
                                a +
                                '-' +
                                n +
                                '.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=' +
                                r
                            ).go();
                          } catch (t) {}
                        })();
                      };
                      n &&
                        r &&
                        a &&
                        (t(), i(), s.logger.log('Loaded Site Intercept Project: ' + r));
                    } catch (o) {
                      s.logger.error('Could not load Intercept Project: ' + o);
                    }
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP3037080b2f514c82a49a8eab77b5a00e/',
          },
        },
        company: { orgId: '1B6E34B85282A0AC0A490D44@AdobeOrg' },
        property: {
          name: 'Blast - Wiley.com',
          settings: {
            domains: ['wiley.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL0e4e7fd293e64be8b5132adb5a278df0',
            name: 'DC - trackEvent',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'trackEvent' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = e.detail.eventCategory || '',
                        r = e.detail.eventAction || '',
                        a = e.detail.eventLabel || '',
                        i = _satellite.getVar('page.pagename'),
                        o = [];
                      (o[0] = n),
                        (o[1] = r),
                        (o[2] = a),
                        (o[3] = i),
                        (t.eVar5 = o.join('|')),
                        (t.linkTrackVars += ',eVar2,eVar3,eVar4,eVar5'),
                        t.tl(!0, 'o', t.eVar5);
                    },
                  },
                  trackerProperties: {},
                },
              },
            ],
          },
          {
            id: 'RL2937936a0633466ca1e1f6518c41a7fb',
            name: 'DC - Cart Edit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'cartEdit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = e.detail.eventCategory || '',
                        r = e.detail.eventAction || '',
                        a = e.detail.eventLabel || '',
                        i = _satellite.getVar('page.pagename'),
                        o = [];
                      (o[0] = n),
                        (o[1] = r),
                        (o[2] = a),
                        (o[3] = i),
                        (t.eVar5 = o.join('|')),
                        (productArray = []),
                        (products = e.detail.ecommerce.products || '');
                      for (var s = 0; s < products.length; s++)
                        (dlProduct = products[s]),
                          (newProduct = new t.oProduct(dlProduct.sku)),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          productArray.push(newProduct);
                      (t.products = t.buildProducts(productArray)),
                        (t.eVar5 = o.join('|')),
                        (t.linkTrackVars += ',eVar2,eVar3,eVar4,eVar5,products'),
                        t.tl(!0, 'o', t.eVar5),
                        (t.linkTrackVars = 'none'),
                        (t.products = ''),
                        (t.eVar5 = '');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event26' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%customlink%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL3198a93ad4624f50849bac27fa7f67af',
            name: 'Event - Download',
            events: [
              {
                modulePath: 'core/src/lib/events/mousedown.js',
                settings: {
                  elementSelector: 'a[href*=".pdf"]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return _satellite.setVar('link', $(this).attr('href')), !0;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event13' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%link%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL7582156deed443e8aa0127283c8e8695',
            name: 'Page - PDP',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%page.type%',
                  rightOperand: 'product detail',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (productArray = []), (products = _satellite.getVar('ecommerce.products'));
                      for (var n = 0; n < products.length; n++)
                        (dlProduct = products[n]),
                          (newProduct = new t.oProduct(dlProduct.sku)),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          dlProduct.category && newProduct.add('evar18', dlProduct.category),
                          dlProduct.parentName && newProduct.add('evar19', dlProduct.parentName),
                          dlProduct.parentId && newProduct.add('evar20', dlProduct.parentId),
                          productArray.push(newProduct);
                      t.products = t.buildProducts(productArray);
                    },
                  },
                  trackerProperties: { events: [{ name: 'prodView' }, { name: 'event3' }] },
                },
              },
            ],
          },
          {
            id: 'RL75a1b96b8a96444b95d7dde3d960a956',
            name: 'Page - VirtualPage',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'virtualPage' },
                ruleOrder: 10,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL77bdb345a98148b9bb4915bcb0b0084f',
            name: 'Page - PLP/Search Results',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'matchesRegex' },
                  leftOperand: '%search.term%',
                  rightOperand: '^(?=\\s*\\S).*$',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      0 == _satellite.getVar('search.numsearchresults') &&
                        (t.events = t.apl(t.events, 'event2', ',', 2)),
                        (t.list1 = _satellite.getVar('search.filters'));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar7', type: 'value', value: '%search.term%' },
                      { name: 'eVar8', type: 'value', value: '%search.numsearchresults%' },
                    ],
                    events: [{ name: 'event1' }],
                  },
                },
              },
            ],
          },
          {
            id: 'RL80db3a185f8d44208967eb37df632024',
            name: 'Page - Checkout',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'startsWith' },
                  leftOperand: '%page.type%',
                  rightOperand: 'checkout',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'doesNotEqual' },
                  leftOperand: '%page.type%',
                  rightOperand: 'checkout confirmation',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (productArray = []), (products = _satellite.getVar('ecommerce.products'));
                      for (var n = 0; n < products.length; n++)
                        (dlProduct = products[n]),
                          (newProduct = new t.oProduct(dlProduct.sku)),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          dlProduct.category && newProduct.add('evar18', dlProduct.category),
                          dlProduct.parentName && newProduct.add('evar19', dlProduct.parentName),
                          dlProduct.parentId && newProduct.add('evar20', dlProduct.parentId),
                          productArray.push(newProduct);
                      switch (
                        ((t.products = t.buildProducts(productArray)),
                        (pType = _satellite.getVar('page.type')),
                        pType)
                      ) {
                        case 'checkout billing':
                          (t.events = t.apl(t.events, 'scCheckout', ',', 2)),
                            (t.events = t.apl(t.events, 'event4', ',', 2));
                          break;
                        case 'checkout account':
                          t.events = t.apl(t.events, 'event5', ',', 2);
                          break;
                        case 'checkout shipping':
                          t.events = t.apl(t.events, 'event6', ',', 2);
                          break;
                        case 'checkout review':
                          t.events = t.apl(t.events, 'event7', ',', 2);
                          break;
                        case 'checkout payment':
                          t.events = t.apl(t.events, 'event8', ',', 2);
                      }
                    },
                  },
                  trackerProperties: {},
                },
              },
            ],
          },
          {
            id: 'RL81cdc482af4a428a81766b87c71f2ea3',
            name: 'Page - Cart',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'contains' },
                  leftOperand: '%page.type%',
                  rightOperand: 'cart',
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (productArray = []), (products = _satellite.getVar('ecommerce.products'));
                      for (var n = 0; n < products.length; n++)
                        (dlProduct = products[n]),
                          (newProduct = new t.oProduct(dlProduct.sku)),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          dlProduct.category && newProduct.add('evar18', dlProduct.category),
                          dlProduct.parentName && newProduct.add('evar19', dlProduct.parentName),
                          dlProduct.parentId && newProduct.add('evar20', dlProduct.parentId),
                          productArray.push(newProduct);
                      t.products = t.buildProducts(productArray);
                    },
                  },
                  trackerProperties: { events: [{ name: 'scOpen' }, { name: 'scView' }] },
                },
              },
            ],
          },
          {
            id: 'RLfbbf82d250cf4296b2031daf951e35bd',
            name: 'Page - Complete Registration',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    {
                      value: '\\/learn\\/librarysolutions\\/contact-social-short\\.html ',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCbddccdb6a3554beb8b071e94d3f10bce-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC4927dd8b7a1344c496473b19abb1e8d2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL965e2f6320ad4d17b3e715f1fa17608d',
            name: 'Page - LinkedIn - Forms',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      (linkedInForms = /(LP=6222|ContactRepConfirm|LP=6633|webinar-registration-ty)$/gi),
                      (path = location.pathname),
                      !!linkedInForms.test(path)
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC538fc15a0ca94ac09f07184da0111b1f-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLaacdf9c1b1e04be586910704770ee793',
            name: 'DC - addToCart',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'addToCart' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (e) {
                    if (((products = e.detail.ecommerce.products || ''), '' == products))
                      return !1;
                    var t = products.map(function (e) {
                        return (e = e.sku.toString());
                      }),
                      n = products.reduce(function (e, t) {
                        return t.quantity ? e + t.price * t.quantity : e + t.price;
                      }, 0),
                      r = products.reduce(function (e, t) {
                        return t.quantity ? e + parseInt(t.quantity) : e + 1;
                      }, 0),
                      a = products.map(function (e) {
                        return e.quantity
                          ? {
                              id: t,
                              item_price: parseFloat(e.price),
                              quantity: parseInt(e.quantity),
                            }
                          : { id: t, item_price: parseFloat(e.price), quantity: 1 };
                      });
                    return (
                      _satellite.setVar('fbData', {
                        content_ids: t,
                        value: n,
                        num_items: r,
                        contents: a,
                      }),
                      !0
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC91c791b544c84cc9841c58b61aa996b6-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCc207980a05764e9e94694104d1ca5a1b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = e.detail.eventCategory || '',
                        r = e.detail.eventAction || '',
                        a = e.detail.eventLabel || '',
                        i = _satellite.getVar('page.pagename'),
                        o = [];
                      (o[0] = n),
                        (o[1] = r),
                        (o[2] = a),
                        (o[3] = i),
                        (t.eVar5 = o.join('|')),
                        (productArray = []),
                        (products = e.detail.ecommerce.products || '');
                      for (var s = 0; s < products.length; s++)
                        (dlProduct = products[s]),
                          (newProduct = new t.oProduct(dlProduct.sku)),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          dlProduct.category && newProduct.add('evar18', dlProduct.category),
                          dlProduct.parentName && newProduct.add('evar19', dlProduct.parentName),
                          dlProduct.parentId && newProduct.add('evar20', dlProduct.parentId),
                          productArray.push(newProduct);
                      (t.products = t.buildProducts(productArray)),
                        (t.eVar5 = o.join('|')),
                        (t.linkTrackVars += ',eVar2,eVar3,eVar4,eVar5,products'),
                        t.tl(!0, 'o', t.eVar5),
                        (t.linkTrackVars = 'none'),
                        (t.products = ''),
                        (t.eVar5 = '');
                    },
                  },
                  trackerProperties: { events: [{ name: 'scAdd' }] },
                },
              },
            ],
          },
          {
            id: 'RL1527c8d2aa134be482a7f0bd95266d61',
            name: 'Page - Purchase/Order Confirmation',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'equals' },
                  leftOperand: '%page.type%',
                  rightOperand: 'checkout confirmation',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    products = _satellite.getVar('ecommerce.products');
                    var t = products.map(function (e) {
                        return (e = e.sku.toString());
                      }),
                      e = products.reduce(function (e, t) {
                        return t.quantity ? e + t.price * t.quantity : e + t.price;
                      }, 0),
                      n = products.reduce(function (e, t) {
                        return t.quantity ? e + parseInt(t.quantity) : e + 1;
                      }, 0),
                      r = products.map(function (e) {
                        return e.quantity
                          ? {
                              id: t,
                              item_price: parseFloat(e.price),
                              quantity: parseInt(e.quantity),
                            }
                          : { id: t, item_price: parseFloat(e.price), quantity: 1 };
                      });
                    return (
                      _satellite.setVar('fbData', {
                        content_ids: t,
                        value: e,
                        num_items: n,
                        contents: r,
                      }),
                      !0
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCbf75f9b04b664929bcf8ccda5332e029-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCccc452c2cd7a442b8065c08a34e9f950-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (productArray = []), (products = _satellite.getVar('ecommerce.products'));
                      for (var n = 0; n < products.length; n++)
                        (dlProduct = products[n]),
                          (newProduct = new t.oProduct(
                            dlProduct.sku,
                            dlProduct.quantity,
                            dlProduct.totalRevenue
                          )),
                          dlProduct.totalRevenue &&
                            (newProduct.add('event22', dlProduct.totalRevenue),
                            (t.events = t.apl(t.events, 'event22', ',', 2))),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          dlProduct.category && newProduct.add('evar18', dlProduct.category),
                          dlProduct.parentName && newProduct.add('evar19', dlProduct.parentName),
                          dlProduct.parentId && newProduct.add('evar20', dlProduct.parentId),
                          productArray.push(newProduct);
                      (t.products = t.buildProducts(productArray)),
                        _satellite.getVar('ecommerce.promocodediscount') &&
                          !/^0/gi.test(_satellite.getVar('ecommerce.promocodediscount')) &&
                          (t.events = t.apl(
                            t.events,
                            'event9=' + _satellite.getVar('ecommerce.promocodediscount'),
                            ',',
                            2
                          )),
                        _satellite.getVar('ecommerce.shippingtotal') &&
                          !/^0/gi.test(_satellite.getVar('ecommerce.shippingtotal')) &&
                          (t.events = t.apl(
                            t.events,
                            'event12=' + _satellite.getVar('ecommerce.shippingtotal'),
                            ',',
                            2
                          )),
                        (t.eVar10 = _satellite.getVar('ecommerce.orderid')),
                        (t.purchaseID = _satellite.getVar('ecommerce.orderid'));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar11', type: 'value', value: '%ecommerce.paymentmethod%' },
                      { name: 'eVar12', type: 'value', value: '%ecommerce.shippingmethod%' },
                      { name: 'eVar13', type: 'value', value: '%ecommerce.promocode%' },
                      { name: 'eVar14', type: 'value', value: '%ecommerce.checkouttype%' },
                    ],
                    events: [
                      { name: 'purchase' },
                      { name: 'event37', value: '%ecommerce.subtotalrevenue%' },
                    ],
                  },
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCce40b44ed67246a996762f2a691b0e99-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC0cf738bb45d147ea806e5128bb0c50f3-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb4ab01705e40440d8be76b93bcaa8a20',
            name: 'DC - removeFromCart',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'removeFromCart' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = e.detail.eventCategory || '',
                        r = e.detail.eventAction || '',
                        a = e.detail.eventLabel || '',
                        i = _satellite.getVar('page.pagename'),
                        o = [];
                      (o[0] = n),
                        (o[1] = r),
                        (o[2] = a),
                        (o[3] = i),
                        (t.eVar5 = o.join('|')),
                        (productArray = []),
                        (products = e.detail.ecommerce.products || '');
                      for (var s = 0; s < products.length; s++)
                        (dlProduct = products[s]),
                          (newProduct = new t.oProduct(dlProduct.sku)),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          dlProduct.category && newProduct.add('evar18', dlProduct.category),
                          dlProduct.parentName && newProduct.add('evar19', dlProduct.parentName),
                          dlProduct.parentId && newProduct.add('evar20', dlProduct.parentId),
                          productArray.push(newProduct);
                      (t.products = t.buildProducts(productArray)),
                        (t.eVar5 = o.join('|')),
                        (t.linkTrackVars += ',eVar2,eVar3,eVar4,eVar5,products'),
                        t.tl(!0, 'o', t.eVar5),
                        (t.linkTrackVars = 'none'),
                        (t.products = ''),
                        (t.eVar5 = '');
                    },
                  },
                  trackerProperties: { events: [{ name: 'scRemove' }] },
                },
              },
            ],
          },
          {
            id: 'RLb68a82b1e13241e2bdaff06e68a51c4c',
            name: 'Page - non-AA Base Libraries',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC0fba73ae11e643709ffeb36a80f0ca0f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC6a32616f294047f6b2d1480391fb65b6-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCcfde4eb6b54641719bc542c99d471b07-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC3f96367894e8417b90543952eb990d5b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'qualtrics-website-feedback/src/lib/actions/loadProject.js',
                settings: { brandID: 'wiley', projectID: 'ZN_bINlpV4jHTvb8bO' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC74197979b31645b9956bfca44db32957-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb7c879ed378f40a990e12db6f3cc0c98',
            name: 'DC - Form Submitted',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'formSubmitted' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (e) {
                    var t = e.detail.eventCategory || '',
                      n = e.detail.eventAction || '',
                      r = e.detail.eventLabel || '',
                      a = _satellite.getVar('page.pagename'),
                      i = [];
                    return (
                      (i[0] = t),
                      (i[1] = n),
                      (i[2] = r),
                      (i[3] = a),
                      _satellite.setVar('customlink', i.join('|')),
                      !0
                    );
                  },
                },
              },
            ],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = e.detail.eventCategory || '',
                        r = e.detail.eventAction || '',
                        a = e.detail.eventLabel || '',
                        i = _satellite.getVar('page.pagename'),
                        o = [];
                      (o[0] = n),
                        (o[1] = r),
                        (o[2] = a),
                        (o[3] = i),
                        (t.eVar5 = o.join('|')),
                        (t.eVar16 = r),
                        (t.linkTrackVars = 'eVar5,eVar16,events');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event24' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%customlink%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc326c78c907b4215b8c0dee742d857d1',
            name: 'DC - pdpTabClick || changeFormat',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pdpTabClick' },
                ruleOrder: 50,
              },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'changeFormat' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = e.detail.eventCategory || '',
                        r = e.detail.eventAction || '',
                        a = e.detail.eventLabel || '',
                        i = _satellite.getVar('page.pagename'),
                        o = [];
                      (o[0] = n),
                        (o[1] = r),
                        (o[2] = a),
                        (o[3] = i),
                        (t.eVar5 = o.join('|')),
                        (productArray = []),
                        (products = e.detail.ecommerce.products || '');
                      for (var s = 0; s < products.length; s++)
                        (dlProduct = products[s]),
                          (newProduct = new t.oProduct(dlProduct.sku)),
                          dlProduct.type && newProduct.add('evar17', dlProduct.type),
                          productArray.push(newProduct);
                      (t.products = t.buildProducts(productArray)),
                        (t.linkTrackVars += ',eVar2,eVar3,eVar4,eVar5,products,evar17'),
                        t.tl(!0, 'o', t.eVar5);
                    },
                  },
                  trackerProperties: { events: [{ name: 'prodView' }, { name: 'event3' }] },
                },
              },
            ],
          },
          {
            id: 'RL109e5c1bcd7642ed9adc1c6c4d5982f9',
            name: 'Page - Lead Completed',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'endsWith' },
                  leftOperand: '%page.pagename%',
                  rightOperand: 'lead completed',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC63070229cc704f66b967ea5c53f00a53-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC42ae515b563f4ac896cc63f858424441-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe324b5463be0404e93085113935c8da3',
            name: 'DC - promoCodeApplied',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'promoCodeApplied' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (e) {
                    var t = e.detail.eventCategory || '',
                      n = e.detail.eventAction || '',
                      r = e.detail.eventLabel || '',
                      a = _satellite.getVar('page.pagename'),
                      i = [];
                    return (
                      (i[0] = t),
                      (i[1] = n),
                      (i[2] = r),
                      (i[3] = a),
                      _satellite.setVar('customlink', i.join('|')),
                      !0
                    );
                  },
                },
              },
            ],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = e.detail.eventCategory || '',
                        r = e.detail.eventAction || '',
                        a = e.detail.eventLabel || '',
                        i = _satellite.getVar('page.pagename'),
                        o = [];
                      (o[0] = n),
                        (o[1] = r),
                        (o[2] = a),
                        (o[3] = i),
                        (t.eVar5 = o.join('|')),
                        (t.eVar13 = e.detail.ecommerce.promoCode),
                        -1 < r.indexOf('success')
                          ? (t.events = t.apl(t.events, 'event10', ',', 2))
                          : -1 < r.indexOf('fail') &&
                            (t.events = t.apl(t.events, 'event11', ',', 2)),
                        (t.linkTrackVars = 'eVar5,eVar13,events'),
                        (t.linkTrackEvents = 'event10,event11');
                    },
                  },
                  trackerProperties: {},
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '%customlink%', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL36d21b66ebc344f1857e3f399140020c',
            name: 'Page - Set & Send AA Beacon',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.account = _satellite.getVar('reportsuiteid')),
                        (t.eVar9 = _satellite.getVar('loginstatus')),
                        (t.server = location.hostname),
                        '' != _satellite.getVar('formname') &&
                          ((t.events = t.apl(t.events, 'event23', ',', 2)),
                          (t.linkTrackEvents += ',event23'),
                          (t.eVar16 = _satellite.getVar('formname')),
                          (t.linkTrackVars += ',eVar16')),
                        ('' != _satellite.getVar('formsuccesspage') ||
                          /freetrialconfirmationpage|thank-you\.html/gi.test(location.pathname)) &&
                          ((t.events = t.apl(t.events, 'event36', ',', 2)),
                          (t.linkTrackEvents += ',event36')),
                        (t.linkTrackVars += ',eVar9');
                    },
                  },
                  trackerProperties: { channel: '%page.section%', pageName: '%page.pagename%' },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLd8d7a013abe74840a2538ec3075094a9',
            name: 'Wiley K&L Authors Driving Sustainability - PlayVideoClick',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'section.full-screen-video a#playbtn[href="#"]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: 'learn\\/sustainability\\/vote[^\\w\\-]', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC3e94479344b242ae9c855762a9e65ba6-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC10b13203deca4cb593de800958a1fd20-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5eb2008f5835497baf43a67e3d9bdedf',
            name: 'Wiley K&L Authors Driving Sustainability - CastYourVoteClick',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'section.full-screen-video a[href="#vote"]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: 'learn\\/sustainability\\/vote[^\\w\\-]', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC74d37b9d775344f09bcf40a85f814628-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC0283f17fcea641b6876eaa7ac804172d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5a31f8329d954a66838ef9e1de425fbc',
            name: 'Wiley K&L Authors Driving Sustainability - VideoView',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.reveal-overlay #myPlayerID',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: 'learn\\/sustainability\\/vote[^\\w\\-]', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC9c4766218ebc4565a805dea2dda12c45-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC5d5e98184ded42829cfef5c78cff9ed9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5383c32cfb964762b3c7a86730db8422',
            name: 'JosseyBass - AddToCart',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button.add-to-cart-button.js-add-to-cart',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: 'teacher-appreciation-week', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCccea34a1aa584dd09691c2678f4ea410-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2dcf6004c0dc49119047796b5540ce19',
            name: 'JosseyBass - download',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    'a[href="https://wiley-ecomm-prod-content.s3.amazonaws.com/JVC+Experiments+Sampler+clean.pdf"]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: 'teacher-appreciation-week', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC78d25221737f4ad88c9be51d1fdd0226-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL70363bcd92984b12985068047d280631',
            name: 'Wiley K&L Advanced Text - CompleteRegistration',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '/ContactRepConfirm' }, { value: '/webinar-registration-ty' }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('dataProcessingOptions', ['LDU'], 0, 0);\nfbq('init', '1178147322351863');\nfbq('track', 'PageView');",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source: "fbq('track', 'CompleteRegistration');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL5c5b82954ed440b49f18cb0bf4f26d10',
            name: 'Wiley K&L Advanced Text Submit Click - CompleteRegistration',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'input[value="Submit"]',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    {
                      value: '\\/prepare\\-your\\-students\\-for\\-the\\-future\\-of\\-work\\/?$',
                      valueIsRegex: !0,
                    },
                    { value: '\\/LP\\=7045\\/?$', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return /secure\.wiley\.com/.test(document.location.hostname);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RC088c76cb33ad42b092a47b77cf0a5d2d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/59640f9fa510/b2a2247ff023/fb5c2ab9cbf6/RCfc3acc90c7c14f70a134300d2889a0d0-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
        ],
      });
    var $___var_8e3b2cdb31efde1e = (function () {
      const $___old_7f55ce5810b6bd2a = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_7f55ce5810b6bd2a)
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
          function u (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function r () {}
          function a (e, t) {
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
              f(e, this);
          }
          function o (r, a) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === r._state ? a.onFulfilled : a.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(r._value);
                    } catch (n) {
                      return void c(a.promise, n);
                    }
                    s(a.promise, t);
                  } else (1 === r._state ? s : c)(a.promise, r._value);
                }))
              : r._deferreds.push(a);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void l(e);
                if ('function' == typeof n) return void f(a(n, t), e);
              }
              (e._state = 1), (e._value = t), l(e);
            } catch (r) {
              c(e, r);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), l(e);
          }
          function l (e) {
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
          function f (e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), s(t, e));
                },
                function (e) {
                  n || ((n = !0), c(t, e));
                }
              );
            } catch (r) {
              if (n) return;
              (n = !0), c(t, r);
            }
          }
          function p (e) {
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
              var r = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  r[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              );
            } catch (a) {
              return !1;
            }
          }
          function g (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var m = function (e) {
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
              h = 'debug',
              v = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(h);
                  },
                  r = function (e) {
                    t.setItem(h, e);
                  },
                  a = [],
                  i = function (e) {
                    a.push(e);
                  };
                return (
                  (e.outputEnabled = n()),
                  {
                    onDebugChanged: i,
                    getDebugEnabled: n,
                    setDebugEnabled: function (t) {
                      n() !== t &&
                        (r(t),
                        (e.outputEnabled = t),
                        a.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              b = 'Module did not export a function.',
              y = function (i, o) {
                return function (e, t, n) {
                  n = n || [];
                  var r = i.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(b);
                  var a = o(e.settings || {}, t);
                  return r.bind(null, a).apply(null, n);
                };
              },
              _ = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              C = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              I = '\uD83D\uDE80',
              k =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : I,
              S = !1,
              P = function (e) {
                if (S && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(k),
                    e !== C.DEBUG || window.console[e] || (e = C.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              w = P.bind(null, C.LOG),
              E = P.bind(null, C.INFO),
              A = P.bind(null, C.DEBUG),
              D = P.bind(null, C.WARN),
              O = P.bind(null, C.ERROR),
              T = {
                log: w,
                info: E,
                debug: A,
                warn: D,
                error: O,
                get outputEnabled () {
                  return S;
                },
                set outputEnabled (e) {
                  S = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: w.bind(null, t),
                    info: E.bind(null, t),
                    debug: A.bind(null, t),
                    warn: D.bind(null, t),
                    error: O.bind(null, t),
                  };
                },
              },
              j = e(function (r) {
                !(function (e) {
                  if (((r.exports = e()), !!0)) {
                    var t = window.Cookies,
                      n = (window.Cookies = e());
                    n.noConflict = function () {
                      return (window.Cookies = t), n;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var r in n) t[r] = n[r];
                    }
                    return t;
                  }
                  function l (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (u) {
                    function s () {}
                    function n (e, t, n) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (n = c({ path: '/' }, s.defaults, n)).expires &&
                          (n.expires = new Date(1 * new Date() + 86400000 * n.expires)),
                          (n.expires = n.expires ? n.expires.toUTCString() : '');
                        try {
                          var r = JSON.stringify(t);
                          /^[\{\[]/.test(r) && (t = r);
                        } catch (o) {}
                        (t = u.write
                          ? u.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var a = '';
                        for (var i in n)
                          n[i] &&
                            ((a += '; ' + i), !0 !== n[i] && (a += '=' + n[i].split(';')[0]));
                        return (document.cookie = e + '=' + t + a);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var n = {},
                            r = document.cookie ? document.cookie.split('; ') : [],
                            a = 0;
                          a < r.length;
                          a++
                        ) {
                          var i = r[a].split('='),
                            o = i.slice(1).join('=');
                          t || '"' !== o.charAt(0) || (o = o.slice(1, -1));
                          try {
                            var s = l(i[0]);
                            if (((o = (u.read || u)(o, s) || l(o)), t))
                              try {
                                o = JSON.parse(o);
                              } catch (c) {}
                            if (((n[s] = o), e === s)) break;
                          } catch (c) {}
                        }
                        return e ? n[e] : n;
                      }
                    }
                    return (
                      (s.set = n),
                      (s.get = function (e) {
                        return t(e, !1);
                      }),
                      (s.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (s.remove = function (e, t) {
                        n(e, '', c(t, { expires: -1 }));
                      }),
                      (s.defaults = {}),
                      (s.withConverter = e),
                      s
                    );
                  }
                  return e(function () {});
                });
              }),
              M = { get: j.get, set: j.set, remove: j.remove },
              V = window,
              x = 'com.adobe.reactor.',
              L = function (r, e) {
                var a = x + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_c03cbec0d49452c5 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_c03cbec0d49452c5)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return V[r].getItem(a + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_c03cbec0d49452c5)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_c03cbec0d49452c5
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_f6dc0edda4433091 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_f6dc0edda4433091)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return V[r].setItem(a + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_f6dc0edda4433091)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_f6dc0edda4433091
                        ));
                    }
                  },
                };
              },
              R = '_sdsat_',
              N = 'dataElements.',
              F = 'dataElementCookiesMigrated',
              U = L('localStorage'),
              H = L('sessionStorage', N),
              B = L('localStorage', N),
              q = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              G = {},
              W = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              Y = function (e, t, n) {
                var r;
                switch (t) {
                  case q.PAGEVIEW:
                    return void (G[e] = n);
                  case q.SESSION:
                    return void ((r = W(n)) && H.setItem(e, r));
                  case q.VISITOR:
                    return void ((r = W(n)) && B.setItem(e, r));
                }
              },
              $ = function (e, t) {
                var n = M.get(R + e);
                n !== undefined && Y(e, t, n);
              },
              J = {
                setValue: Y,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case q.PAGEVIEW:
                      return G.hasOwnProperty(e) ? G[e] : null;
                    case q.SESSION:
                      return null === (n = H.getItem(e)) ? n : JSON.parse(n);
                    case q.VISITOR:
                      return null === (n = B.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  U.getItem(F) ||
                    (Object.keys(t).forEach(function (e) {
                      $(e, t[e].storageDuration);
                    }),
                    U.setItem(F, !0));
                },
              },
              Q = function (e, t, n, r) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (r ? '\n' + r : '')
                );
              },
              K = function (s, c, u, l) {
                return function (e, t) {
                  var n = c(e);
                  if (!n) return l ? '' : undefined;
                  var r,
                    a = n.storageDuration;
                  try {
                    r = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void T.error(Q(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(u(n.settings, t), t);
                    } catch (o) {
                      return void T.error(Q(n, e, o.message, o.stack));
                    }
                    return (
                      a && (null != i ? J.setValue(e, a, i) : (i = J.getValue(e, a))),
                      null == i && null != n.defaultValue && (i = n.defaultValue),
                      'string' == typeof i &&
                        (n.cleanText && (i = _(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  T.error(Q(n, e, 'Module did not export a function.'));
                };
              },
              z = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return _(e.textContent);
                },
              },
              X = function (e, t, n) {
                for (var r, a = e, i = 0, o = t.length; i < o; i++) {
                  if (null == a) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var c = s.slice(1);
                    a = z[c](a);
                  } else if (a.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var u = r[1];
                    a = a.getAttribute(u);
                  } else a = a[s];
                }
                return a;
              },
              Z = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (o(e)) n = s(e, t);
                  else {
                    var r = e.split('.'),
                      a = r.shift();
                    'this' === a
                      ? t && (n = X(t.element, r, !0))
                      : 'event' === a
                      ? t && (n = X(t, r))
                      : 'target' === a
                      ? t && (n = X(t.target, r))
                      : (n = X(i[a], r));
                  }
                  return n;
                };
              },
              ee = function (n, r) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    r(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, n) {
                var r = { exports: {} };
                return e.call(r.exports, r, r.exports, t, n), r.exports;
              },
              ne = function () {
                var o = {},
                  n = function (e) {
                    var t = o[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(o).forEach(function (e) {
                      try {
                        r(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        T.error(t);
                      }
                    });
                  },
                  r = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, r, a) {
                    var i = { definition: t, extensionName: n, require: r, turbine: a };
                    (i.require = r), (o[e] = i);
                  },
                  hydrateCache: e,
                  getModuleExports: r,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              re = !1,
              ae = function (r) {
                return function (t, n) {
                  var e = r._monitors;
                  e &&
                    (re ||
                      (T.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (re = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              ie = function (a, i, o) {
                var n,
                  r,
                  s,
                  c,
                  u = [],
                  l = function (e, t, n) {
                    if (!a(t)) return e;
                    u.push(t);
                    var r = i(t, n);
                    return u.pop(), null == r && o ? '' : r;
                  };
                return (
                  (n = function (e, n) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? l(e, t[1], n)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return l(e, t, n);
                        });
                  }),
                  (r = function (e, t) {
                    for (var n = {}, r = Object.keys(e), a = 0; a < r.length; a++) {
                      var i = r[a],
                        o = e[i];
                      n[i] = c(o, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], r = 0, a = e.length; r < a; r++) n.push(c(e[r], t));
                    return n;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? r(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < u.length
                      ? (T.error('Data element circular reference detected: ' + u.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              oe = function (a) {
                return function (e, t) {
                  if ('string' == typeof e) a[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var r in n) a[r] = n[r];
                  }
                };
              },
              se = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, t) {
                var n = new this.constructor(r);
                return o(this, new d(e, t, n)), n;
              }),
              (i.prototype['finally'] = t),
              (i.all = function (t) {
                return new i(function (a, i) {
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
                      (s[t] = e), 0 == --c && a(s);
                    } catch (r) {
                      i(r);
                    }
                  }
                  if (!u(t)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return a([]);
                  for (var c = s.length, e = 0; e < s.length; e++) o(e, s[e]);
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
              (i.race = function (a) {
                return new i(function (e, t) {
                  if (!u(a)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, r = a.length; n < r; n++) i.resolve(a[n]).then(e, t);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  se(e, 0);
                }),
              (i._unhandledRejectionFn = function St (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || i['default'] || i,
              ue = function (u, n, r) {
                return function (s, t, c, e) {
                  return e.then(function () {
                    var i,
                      o = s.delayNext;
                    return new ce(function (e, t) {
                      var n = u(s, c, [c]);
                      if (!o) return e();
                      var r = s.timeout,
                        a = new ce(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      ce.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), r(s, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              le = function (c, n, r, a, u) {
                return function (o, t, s, e) {
                  return e.then(function () {
                    var i;
                    return new ce(function (e, t) {
                      var n = c(o, s, [s]),
                        r = o.timeout,
                        a = new ce(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      ce.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), a(o, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !r(o, e))) return u(o, t), ce.reject();
                      });
                  });
                };
              },
              de = ce.resolve(),
              fe = function (r, a, e) {
                return function (t, n) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        de = r(e, t, n, de);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        de = a(e, t, n, de);
                      }),
                    (de = (de = de.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              pe = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              me = function (o, s, c, u) {
                return function (e, t) {
                  var n;
                  if (e.conditions)
                    for (var r = 0; r < e.conditions.length; r++) {
                      n = e.conditions[r];
                      try {
                        var a = o(n, t, [t]);
                        if (pe(a))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(n, a)) return c(n, e), !1;
                      } catch (i) {
                        return u(n, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              ge = function (n, r) {
                return function (e, t) {
                  n(e, t) && r(e, t);
                };
              },
              he = function (n) {
                return function (e) {
                  var t = n.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              ve = function (a) {
                return function (e) {
                  var t = e.rule,
                    n = e.event,
                    r = a.getModuleDefinition(n.modulePath).name;
                  return {
                    $type: a.getModuleExtensionName(n.modulePath) + '.' + r,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              be = function (s, c, u, l, d, f) {
                return function (n, e) {
                  var r = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var a = d(e);
                    c(t, null, [
                      function i (e) {
                        var t = u(a, e);
                        n(function () {
                          s(t, r);
                        });
                      },
                    ]);
                  } catch (o) {
                    f.error(l(t, r, o));
                  }
                };
              },
              ye = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              _e = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Ce = function (r, a, i) {
                return function (e, t) {
                  var n = r(e);
                  a.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Ie = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              ke = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (e.actions)
                    for (var r = 0; r < e.actions.length; r++) {
                      n = e.actions[r];
                      try {
                        i(n, t, [t]);
                      } catch (a) {
                        return void o(n, e, a);
                      }
                    }
                  s(e);
                };
              },
              Se = function (n, r, a, i) {
                return function (e, t) {
                  i('ruleTriggered', { rule: t }), n ? a(t, e) : r(t, e);
                };
              },
              Pe = function (e, t, n) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  n.message +
                  (n.stack ? '\n' + n.stack : '')
                );
              },
              we = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Ee = [],
              Ae = !1,
              De = function (e) {
                Ae ? e() : Ee.push(e);
              },
              Oe = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(De, e);
                }),
                  (Ae = !0),
                  Ee.forEach(function (e) {
                    e();
                  }),
                  (Ee = []);
              },
              Te = function (e) {
                if (
                  (e ||
                    (e = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(e instanceof Error))
                ) {
                  var t = 'object' == typeof e ? JSON.stringify(e) : String(e);
                  e = new Error(t);
                }
                return e;
              },
              je = Object.getOwnPropertySymbols,
              Me = Object.prototype.hasOwnProperty,
              Ve = Object.prototype.propertyIsEnumerable,
              xe = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, r = p(e), a = 1; a < arguments.length; a++) {
                      for (var i in (t = Object(arguments[a]))) Me.call(t, i) && (r[i] = t[i]);
                      if (je) {
                        n = je(t);
                        for (var o = 0; o < n.length; o++) Ve.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                      }
                    }
                    return r;
                  },
              Le = function (e, t) {
                return (
                  xe((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          T.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Re = function (c, u) {
                return function (e, t) {
                  var n = c[e];
                  if (n) {
                    var r = n.modules;
                    if (r)
                      for (var a = Object.keys(r), i = 0; i < a.length; i++) {
                        var o = a[i],
                          s = r[o];
                        if (s.shared && s.name === t) return u.getModuleExports(o);
                      }
                  }
                };
              },
              Ne = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Fe = function (n, r) {
                return function (e) {
                  if (r) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              Ue = '.js',
              He = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Be = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              qe = function (e, t) {
                Be(t, Ue) || (t += Ue);
                var n = t.split('/'),
                  r = He(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              Ge = document,
              We = function (n, r) {
                return new ce(function (e, t) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              Ye = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = We(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              $e = function (e, t, n, r) {
                (t = t || '&'), (n = n || '=');
                var a = {};
                if ('string' != typeof e || 0 === e.length) return a;
                var i = /\+/g;
                e = e.split(t);
                var o = 1000;
                r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var c = 0; c < s; ++c) {
                  var u,
                    l,
                    d,
                    f,
                    p = e[c].replace(i, '%20'),
                    m = p.indexOf(n);
                  0 <= m ? ((u = p.substr(0, m)), (l = p.substr(m + 1))) : ((u = p), (l = '')),
                    (d = decodeURIComponent(u)),
                    (f = decodeURIComponent(l)),
                    g(a, d)
                      ? Array.isArray(a[d])
                        ? a[d].push(f)
                        : (a[d] = [a[d], f])
                      : (a[d] = f);
                }
                return a;
              },
              Je = function (e) {
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
              Qe = function (n, r, a, e) {
                return (
                  (r = r || '&'),
                  (a = a || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(Je(e)) + a;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(Je(e));
                                })
                                .join(r)
                            : t + encodeURIComponent(Je(n[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(Je(e)) + a + encodeURIComponent(Je(n))
                    : ''
                );
              },
              Ke = e(function (e, t) {
                (t.decode = t.parse = $e), (t.encode = t.stringify = Qe);
              }),
              ze = (Ke.decode, Ke.parse, Ke.encode, Ke.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: M,
                document: Ge,
                'load-script': Ye,
                'object-assign': xe,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Ke.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Ke.stringify(e);
                  },
                },
                window: V,
              },
              Ze = function (r) {
                return function (e) {
                  if (0 === e.indexOf(ze)) {
                    var t = e.substr(ze.length),
                      n = Xe[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, o, s, c, u) {
                var l = e.extensions,
                  d = e.buildInfo,
                  f = e.property.settings;
                if (l) {
                  var p = Re(l, o);
                  Object.keys(l).forEach(function (r) {
                    var a = l[r],
                      e = Ne(c, a.settings);
                    if (a.modules) {
                      var t = T.createPrefixedLogger(a.displayName),
                        n = Fe(a.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: u,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: p,
                          logger: t,
                          propertySettings: f,
                          replaceTokens: c,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(a.modules).forEach(function (n) {
                        var e = a.modules[n],
                          t = Ze(function (e) {
                            var t = qe(n, e);
                            return o.getModuleExports(t);
                          });
                        o.registerModule(n, e, r, t, i);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              tt = function (e, t, n, r, a) {
                var i = T.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  T.log('"' + e + '" does not match any direct call identifiers.');
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
                      (T.warn(
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
                  (e.getVar = r),
                  (e.setVar = a),
                  (e.setCookie = function (e, t, n) {
                    var r = '',
                      a = {};
                    n && ((r = ', { expires: ' + n + ' }'), (a.expires = n));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      r +
                      ').';
                    T.warn(i), M.set(e, t, a);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      T.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      M.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    T.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      M.remove(e);
                  }),
                  (e.cookie = M),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (T.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (o = !0)),
                      t
                    );
                  },
                });
              },
              nt = window._satellite;
            if (nt && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var rt = nt.container;
              delete nt.container;
              var at = rt.property.settings.undefinedVarsReturnEmpty,
                it = rt.property.settings.ruleComponentSequencingEnabled,
                ot = rt.dataElements || {};
              J.migrateCookieData(ot);
              var st,
                ct = function (e) {
                  return ot[e];
                },
                ut = ne(),
                lt = K(
                  ut,
                  ct,
                  function () {
                    return st.apply(null, arguments);
                  },
                  at
                ),
                dt = {},
                ft = oe(dt),
                pt = ee(dt, ct),
                mt = Z(dt, ct, lt);
              st = ie(pt, mt, at);
              var gt = v(L('localStorage'), T);
              tt(nt, rt, gt.setDebugEnabled, mt, ft), et(rt, ut, gt, st, lt);
              var ht = ae(nt),
                vt = y(ut, st),
                bt = he(ut),
                yt = Ce(bt, T, ht),
                _t = _e(Pe, bt, T, ht),
                Ct = ye(Pe, bt, T, ht),
                It = Ie(T, ht),
                kt = be(
                  Se(
                    it,
                    ge(me(vt, we, yt, _t), ke(vt, Ct, It)),
                    fe(le(vt, Te, we, _t, yt), ue(vt, Te, Ct), It),
                    ht
                  ),
                  vt,
                  Le,
                  Pe,
                  ve(ut),
                  T
                );
              Oe(m, rt.rules || [], kt);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_7f55ce5810b6bd2a)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_7f55ce5810b6bd2a
          ));
      }
    })();
    _satellite = $___var_8e3b2cdb31efde1e;
  })();
}
