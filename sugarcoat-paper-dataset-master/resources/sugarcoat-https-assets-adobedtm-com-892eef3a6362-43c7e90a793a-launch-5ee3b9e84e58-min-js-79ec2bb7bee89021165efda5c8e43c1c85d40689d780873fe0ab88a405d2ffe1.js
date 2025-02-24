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
          buildDate: '2020-11-23T13:36:55Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'dl decision_date': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.decision_date' },
          },
          'Login Status': {
            defaultValue: 'Logged Out',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'ERIGHTS' },
          },
          'dl term': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.term' },
          },
          'dl product_price': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.product_price' },
          },
          'dl inst_product_format': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.product_format' },
          },
          queryparam: {
            defaultValue: 'NO SEARCH KEYWORD DETECTED',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'searchQuery', caseInsensitive: !0 },
          },
          Audience: {
            defaultValue: 'NA',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'PERSONA' },
          },
          'dl marketo_firstName': {
            defaultValue: 'Other',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_marketo.marketo_firstname' },
          },
          'dl course_name': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.course_name' },
          },
          'dl access_code_isbn': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_accesscodeinfo.isbn' },
          },
          'Marketo ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'aliId', caseInsensitive: !0 },
          },
          'dl access_code_product_title': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_accesscodeinfo.product_title' },
          },
          MHE_UID: {
            defaultValue: '0',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'uid' },
          },
          'dl promo_discount': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.promo_discount' },
          },
          'dl course_number': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.course_number' },
          },
          'dl inst_product_author': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.product_author' },
          },
          'New Audience': {
            defaultValue: 'NA',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'PERSONA_ROLE' },
          },
          'dl product_name': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.product_name' },
          },
          'dl inst_product_isbn': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.product_isbn' },
          },
          'dl product_format': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.product_format' },
          },
          'Contact-Us': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'text', elementSelector: '.contact-us' },
          },
          VerticalTab: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'text', elementSelector: '.active>.mhe-tab-label' },
          },
          'Site Section Channel': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e,
                  t = window.location.pathname.split('/'),
                  n = window.location.host,
                  r =
                    (window.location.pathname.split('/').length,
                    t[1] != undefined && '' != t[1] ? t[1].replace('.html', '') : 'corporate');
                return (
                  (e =
                    'highered' == r || 'prek-12' == r || 'store' == r || 'corporate' == r
                      ? r
                      : 'corporate'),
                  'info.mheducation.com' == n && (e = 'marketo'),
                  e
                );
              },
            },
          },
          'Online Sample Product Name': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = window.location.pathname;
                if (-1 < e.search('/prek-12/explore/online-samples/'))
                  return e.substring(e.lastIndexOf('/') + 1).replace(/(.html)/, '');
              },
            },
          },
          'Redirect Search Term': {
            forceLowerCase: !0,
            storageDuration: 'session',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.split('/').pop().split('.').shift();
              },
            },
          },
          'dl access_code_error': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_accesscodeerror.message' },
          },
          Section: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = window.location.pathname;
                return '/' === e || -1 < e.search('home')
                  ? 'HOME'
                  : -1 < e.search('category') || -1 < e.search('highered')
                  ? 'PRODUCT'
                  : -1 < e.search('ideas')
                  ? 'IDEAS'
                  : -1 < e.search('/.*/')
                  ? e.split('/')[1].toUpperCase()
                  : 'SITE';
              },
            },
          },
          'Content Date': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (null != document.querySelector('.published-date'))
                  return document.querySelector('.published-date').textContent;
              },
            },
          },
          'Search Term': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('queryparam').replace(/\+/g, ' ');
              },
            },
          },
          'Session ID': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'MHSHOPSESSIONID' },
          },
          'URL Capture': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.href;
              },
            },
          },
          'Unitas BU': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = location.href;
                return -1 < e.indexOf('/highered/')
                  ? 'Unitas HE'
                  : -1 < e.indexOf('/prek-12/')
                  ? 'Unitas SEG'
                  : void 0;
              },
            },
          },
          'dl unified_search_filter_value': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'window.dtm_data_search_filter.value' },
          },
          'User ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'uid' },
          },
          'dl exp_student_count': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.exp_student_count' },
          },
          'Content Title': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return document.title;
              },
            },
          },
          'dl school_state': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.school_state' },
          },
          'dl cart_product_isbn': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_addtocart.product_isbn' },
          },
          'No. of search result': {
            defaultValue: '0',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/domAttribute.js',
            settings: { elementProperty: 'innerHTML', elementSelector: 'span.wa-total' },
          },
          'dl product_qty': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.product_qty' },
          },
          'dl currency_code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.currency_code' },
          },
          'dl shipping_cost': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.shipping_cost' },
          },
          'dl present_text_title': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.present_text_title' },
          },
          'dl term_year': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.term_year' },
          },
          'dl purchase_id': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.purchase_id' },
          },
          Campaign: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'cid', caseInsensitive: !0 },
          },
          'Page Name': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e,
                  t,
                  n,
                  r = null != document.querySelector("link[rel='canonical']"),
                  a = window.location.pathname.split('/'),
                  i = window.location.pathname.substring(1),
                  o = window.location.host;
                if ((a.length, r)) {
                  var s = document.createElement('a');
                  (s.href = document.querySelector("link[rel='canonical']").getAttribute('href')),
                    (a = s.pathname.split('/')).length;
                }
                switch (
                  ((t = a[1] != undefined && '' != a[1] ? a[1].replace('.html', '') : 'corp'),
                  (n =
                    a[2] != undefined && '' != a[2]
                      ? ':' + a.slice(2, a.length).join(':').replace('.html', '')
                      : ''),
                  (n = decodeURIComponent(n)),
                  t)
                ) {
                  case 'highered':
                    e = '' != n ? 'highered' + n : 'highered:home';
                    break;
                  case 'prek-12':
                    e = '' != n ? 'prek-12' + n : 'prek-12:home';
                    break;
                  case 'store':
                    e = 'store' + n;
                    break;
                  case 'corp':
                    e = 'corporate:home';
                    break;
                  default:
                    e = 'corporate:' + t + n;
                }
                return 'info.mheducation.com' == o && (e = 'marketo:' + i), e;
              },
            },
          },
          'dl school_name': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.school_name' },
          },
          'dl access_code_product_format': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_accesscodeinfo.component_products' },
          },
          'URL Pathname': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return document.location.pathname;
              },
            },
          },
          'dl inst_product_name': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.product_name' },
          },
          'dl tax': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.tax' },
          },
          'mkto job type': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.querySelector('#Job_Function__c');
                return null === e ? '' : e.value;
              },
            },
          },
          'dl access_code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_accesscodeinfo.access_code' },
          },
          'mkto product interest': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = document.querySelector('#sEGProductInterest');
                return null === e ? '' : e.value;
              },
            },
          },
          'dl access_code_expDate': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_accesscodeinfo.expiration_date' },
          },
          'Business Segment': {
            defaultValue: 'NA',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/cookie.js',
            settings: { name: 'PERSONA_SEGMENT' },
          },
          'dl present_text_author': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutinfo.present_text_author' },
          },
          'Site Section (Second Path Name)': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = window.location.pathname.split('/'),
                  t =
                    (window.location.pathname.split('/').length,
                    e[1] != undefined && '' != e[1] ? e[1].replace('.html', '') : 'corp'),
                  n = e[2] != undefined && '' != e[2] ? e[2].replace('.html', '') : 'home';
                return 'highered' == t || 'prek-12' == t || 'store' == t || 'corp' == t ? n : t;
              },
            },
          },
          'dl promo_code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.promo_code' },
          },
          'Mkto Form Title': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return document.title;
              },
            },
          },
          'dl school_country': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.school_country' },
          },
          'dl cart_product_title': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_addtocart.product_title' },
          },
          'dl product_isbn': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.product_isbn' },
          },
          'dl product_author': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dtm_data_checkoutInfo.product_author' },
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
                  var r = n('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return r(window, e.path);
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
              'core/src/lib/dataElements/domAttribute.js': {
                name: 'dom-attribute',
                displayName: 'DOM Attribute',
                script: function (e) {
                  'use strict';
                  e.exports = function (e) {
                    var t = document.querySelector(e.elementSelector);
                    if (t) {
                      var n = e.elementProperty;
                      return 'text' === n
                        ? t.innerText || t.textContent
                        : n in t
                        ? t[n]
                        : t.getAttribute
                        ? t.getAttribute(n)
                        : undefined;
                    }
                  };
                },
              },
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    return e.source(t);
                  };
                },
              },
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    r.registerPageBottomTrigger(t);
                  };
                },
              },
              'core/src/lib/conditions/pathAndQuerystring.js': {
                name: 'path-and-querystring',
                displayName: 'Path And Query String',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    a = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = r.location.pathname + r.location.search;
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
              'core/src/lib/conditions/domain.js': {
                name: 'domain',
                displayName: 'Domain',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    a = /[|\\{}()[\]^$+*?.-]/g,
                    i = function (e) {
                      if ('string' != typeof e) throw new TypeError('Expected a string');
                      return e.replace(a, '\\$&');
                    };
                  e.exports = function (e) {
                    var t = r.location.hostname;
                    return e.domains.some(function (e) {
                      return t.match(new RegExp('(^|\\.)' + i(e) + '$', 'i'));
                    });
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
                    p =
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
                    f = (function () {
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
                            e && p(c(n, e));
                          })
                        : void (f || 'loading' !== s.readyState
                            ? p(c(n, r))
                            : s.write
                            ? s.write(c(n, r))
                            : p(c(n, r)));
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
              'core/src/lib/conditions/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-window'),
                    a = n('@adobe/reactor-query-string'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value,
                      n = a.parse(r.location.search);
                    return i(n[e.name], t);
                  };
                },
              },
              'core/src/lib/events/change.js': {
                name: 'change',
                displayName: 'Change',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/createBubbly')(),
                    a = n('../helpers/textMatch');
                  document.addEventListener('change', r.evaluateEvent, !0),
                    (e.exports = function (e, t) {
                      var n;
                      e.value !== undefined &&
                        (n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value),
                        r.addListener(e, function (e) {
                          if (n !== undefined && !a(e.target.value, n)) return !1;
                          t(e);
                        });
                    });
                },
              },
              'core/src/lib/events/entersViewport.js': {
                name: 'enters-viewport',
                displayName: 'Enters Viewport',
                script: function (e, t, n) {
                  const $___old_d92ff6becc11d06c = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_d92ff6becc11d06c)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var u = n('@adobe/reactor-document'),
                        l = n('@adobe/reactor-window'),
                        r = n('./helpers/weakMap'),
                        a = n('./helpers/debounce'),
                        i = n('./helpers/enableWeakMapDefaultValue'),
                        o = n('./helpers/matchesSelector'),
                        s = n('./helpers/matchesProperties'),
                        c = 3000,
                        d = 200,
                        p = { FIRST_ENTRY: 'firstEntry', EVERY_ENTRY: 'everyEntry' },
                        f = -1 !== l.navigator.appVersion.indexOf('MSIE 10'),
                        m = i(new r(), function () {
                          return { timeoutIds: [], completedListeners: [], inViewport: !1 };
                        }),
                        h = {},
                        g = function (e) {
                          var t;
                          try {
                            t = e.getBoundingClientRect();
                          } catch (c) {}
                          var n = u.documentElement,
                            r = u.body,
                            a = n.clientTop || r.clientTop || 0,
                            i = n.clientLeft || r.clientLeft || 0,
                            o = l.pageYOffset || n.scrollTop || r.scrollTop,
                            s = l.pageXOffset || n.scrollLeft || r.scrollLeft;
                          return { top: t.top + o - a, left: t.left + s - i };
                        },
                        v = function () {
                          var e = l.innerHeight,
                            t = u.compatMode;
                          return (
                            t &&
                              (e =
                                'CSS1Compat' === t
                                  ? u.documentElement.clientHeight
                                  : u.body.clientHeight),
                            e
                          );
                        },
                        b = function () {
                          return u.documentElement.scrollTop
                            ? u.documentElement.scrollTop
                            : u.body.scrollTop;
                        },
                        y = function (e, t, n) {
                          var r = g(e).top,
                            a = e.offsetHeight;
                          return u.body.contains(e) && !(r + a < n || n + t < r);
                        },
                        k = function (r) {
                          var a = m.get(r);
                          a.inViewport ||
                            ((a.inViewport = !0),
                            Object.keys(h).forEach(function (e) {
                              o(r, e) &&
                                h[e].forEach(function (e) {
                                  if (
                                    s(r, e.settings.elementProperties) &&
                                    -1 === a.completedListeners.indexOf(e)
                                  ) {
                                    var t = function () {
                                      (e.settings.frequency || p.FIRST_ENTRY) === p.FIRST_ENTRY &&
                                        a.completedListeners.push(e),
                                        e.trigger({
                                          element: r,
                                          target: r,
                                          delay: e.settings.delay,
                                        });
                                    };
                                    if (e.settings.delay) {
                                      var n = setTimeout(function () {
                                        y(r, v(), b()) && t();
                                      }, e.settings.delay);
                                      a.timeoutIds.push(n);
                                    } else t();
                                  }
                                });
                            }));
                        },
                        C = function (e) {
                          var t = m.get(e);
                          (t.inViewport = !1),
                            t.timeoutIds.length &&
                              (t.timeoutIds.forEach(clearTimeout), (t.timeoutIds = []));
                        },
                        S = a(function () {
                          var e = Object.keys(h);
                          if (e.length)
                            for (
                              var t = u.querySelectorAll(e.join(',')), n = v(), r = b(), a = 0;
                              a < t.length;
                              a++
                            ) {
                              var i = t[a];
                              y(i, n, r) ? k(i) : C(i);
                            }
                        }, d),
                        M = function () {
                          S(),
                            setInterval(S, c),
                            l.addEventListener('resize', S),
                            l.addEventListener('scroll', S);
                        };
                      f
                        ? 'complete' === u.readyState
                          ? M()
                          : l.addEventListener('load', M)
                        : 'loading' !== u.readyState
                        ? M()
                        : u.addEventListener('DOMContentLoaded', M),
                        (e.exports = function (e, t) {
                          var n = h[e.elementSelector];
                          n || (n = h[e.elementSelector] = []),
                            n.push({ settings: e, trigger: t });
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_d92ff6becc11d06c)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_d92ff6becc11d06c
                      ));
                  }
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
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_354b48d7b5a28d0b = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_354b48d7b5a28d0b)
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
                      var p = function (e, t) {
                          u.slice(0, m(e) + 1).forEach(function (e) {
                            h(t, e);
                          });
                        },
                        f = function () {
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
                        h = function (t, e) {
                          d[e].forEach(function (e) {
                            g(t, e);
                          }),
                            (d[e] = []);
                        },
                        g = function (e, t) {
                          var n = t.trigger,
                            r = t.syntheticEventFn;
                          n(r ? r(e) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = p.bind(null, c)),
                        a.addEventListener('DOMContentLoaded', p.bind(null, s), !0),
                        r.addEventListener('load', p.bind(null, o), !0),
                        r.setTimeout(function () {
                          var e = f();
                          e && p(e);
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
                    if ($___old_354b48d7b5a28d0b)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_354b48d7b5a28d0b
                      ));
                  }
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
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./weakMap'),
                    f = n('./matchesProperties'),
                    m = n('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      p = new r(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !p.has(t)) {
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
                                  (!u || f(n, u))
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
                            p.set(t, !0);
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
                            (e = r.beforeWrite(e)), h.write(e), r.afterWrite(e);
                          }
                          ((h = new f['default'](e, r)).id = m++),
                            (h.name = r.name || h.id),
                            (d.streams[h.name] = h);
                          var n = e.ownerDocument,
                            i = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          p(n, {
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
                          var o = h.win.onerror || u;
                          return (
                            (h.win.onerror = function (e, t, n) {
                              r.error({ msg: e + ' - ' + t + ': ' + n }),
                                o.apply(h.win, [e, t, n]);
                            }),
                            h.write(t, function () {
                              p(n, i), (h.win.onerror = o), r.done(), (h = null), l();
                            }),
                            h
                          );
                        }
                        function d (e, t, n) {
                          if (o.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (c = []), (h = null), void (m = 0);
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
                            h || l(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var p =
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
                        var f = a(n(2)),
                          o = r(n(4)),
                          s = {
                            afterAsync: u,
                            afterDequeue: u,
                            afterStreamStart: u,
                            afterWrite: u,
                            autoFix: !0,
                            beforeEnqueue: u,
                            beforeWriteToken: function g (e) {
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
                          h = null;
                        p(d, { streams: {}, queue: c, WriteStream: f['default'] });
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
                        function k (e, t) {
                          var n = I + t,
                            r = e.getAttribute(n);
                          return w.existy(r) ? String(r) : r;
                        }
                        function C (e, t, n) {
                          var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            a = I + t;
                          w.existy(r) && '' !== r ? e.setAttribute(a, r) : e.removeAttribute(a);
                        }
                        t.__esModule = !0;
                        var S =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                            },
                          M = a(n(3)),
                          w = r(n(4)),
                          P = !1,
                          I = 'data-ps-',
                          x = 'ps-style',
                          E = 'ps-script',
                          i = (function () {
                            function r (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              y(this, r),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new M['default']('', { autoFix: n.autoFix })),
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
                                  w.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
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
                                  !(n = w.isScript(t)) &&
                                  !(r = w.isStyle(t));

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
                                      r.push(c.replace(/(\/?>)/, ' ' + I + 'id=' + u + ' $1')),
                                        s.attrs.id !== E &&
                                          s.attrs.id !== x &&
                                          a.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  I +
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
                                  w.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !k(e, 'proxyof')) {
                                    n && C((this.actuals[k(e, 'id')] = e), 'id');
                                    var r = e.parentNode && k(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  t.unshift.apply(t, w.toArray(e.childNodes));
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
                                this._insertCursor(t, x),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  w.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (r.prototype._insertCursor = function p (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (r.prototype._onScriptStart = function f (e) {
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
                              (r.prototype._writeScriptToken = function h (e, t) {
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
                                  this._insertCursor(n, E), (n.src && !r) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (r.prototype._buildScript = function g (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  w.eachKey(e.attrs, function (e, t) {
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
                                  S(t, {
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
                                p = a(n(3)),
                                f = r(n(6)),
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
                                      ? ((this._readToken = (0, f['default'])(
                                          this,
                                          o,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, f['default'])(this, o, function () {
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
                                          var t = p[e](this.stream);
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
                              function p () {
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
                                var i = p(),
                                  o = {
                                    startTag: function s (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), a())
                                        : r.selfCloseFix && f.test(t) && i.containsTagName(t)
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
                                f = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
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
                            if ('object' === (void 0 === t ? 'undefined' : p(t))) return t.v;
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
                        var p =
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
              'core/src/lib/events/helpers/debounce.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (n, r, a) {
                    var i = null;
                    return function () {
                      var e = a || this,
                        t = arguments;
                      clearTimeout(i),
                        (i = setTimeout(function () {
                          n.apply(e, t);
                        }, r));
                    };
                  };
                },
              },
              'core/src/lib/events/helpers/enableWeakMapDefaultValue.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (t, n) {
                    var r = t.get;
                    return (
                      (t.get = function (e) {
                        return t.has(e) || t.set(e, n()), r.apply(this, arguments);
                      }),
                      t
                    );
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP0fe6b1b3170b414e92e8f7ad4f74f857/',
          },
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, n, m) {
                  'use strict';
                  var r = n('@adobe/reactor-document'),
                    a = n('../codeLibrary/VisitorAPI'),
                    h = n('../../view/utils/timeUnits'),
                    g = function (e) {
                      return e.reduce(function (e, t) {
                        var n = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = n), e;
                      }, {});
                    },
                    i = function (e) {
                      var t = m.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var n = g(t.variables || []),
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
                        if (s && h[s]) {
                          var c = o * h[s];
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
                      var p = t.isIabContext;
                      p && (n.isIabContext = p);
                      var f = e.getInstance(t.orgId, n);
                      return (
                        m.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        m.logger.info('Set variables: ' + JSON.stringify(n)),
                        f.getMarketingCloudVisitorID(function (e) {
                          m.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        f
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
                      function R (e) {
                        return (R =
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
                            (e || (n && !L.isObjectEmpty(n))) &&
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
                      function O (e, t) {
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
                          : { get: we, set: we, remove: we };
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
                            : he(t);
                        }
                        function r () {
                          T(A),
                            _(re.COMPLETE),
                            S(C.status, C.permissions),
                            k.set(C.permissions, { optInCookieDomain: l, optInStorageExpiry: d }),
                            M.execute(Ae);
                        }
                        function a (n) {
                          return function (e, t) {
                            if (!ge(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return _(re.CHANGED), Object.assign(A, ve(me(e), n)), t || r(), C;
                          };
                        }
                        var i = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          o = i.doesOptInApply,
                          s = i.previousPermissions,
                          c = i.preOptInApprovals,
                          u = i.isOptInStorageEnabled,
                          l = i.optInCookieDomain,
                          d = i.optInStorageExpiry,
                          p = i.isIabContext,
                          f = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          m = Pe(s);
                        Ie(m, 'Invalid `previousPermissions`!'),
                          Ie(c, 'Invalid `preOptInApprovals`!');
                        var h,
                          g,
                          v,
                          b,
                          y,
                          k = O({ isEnabled: !!u, cookieName: 'adobeujs-optin' }, { cookies: f }),
                          C = this,
                          S = ne(C),
                          M = ce(),
                          w = ke(m),
                          P = ke(c),
                          I = k.get(),
                          x = {},
                          E = ((y = I), Ce(w) || (y && Ce(y)) ? re.COMPLETE : re.PENDING),
                          j =
                            ((h = P),
                            (g = w),
                            (v = I),
                            (b = ve(se, !o)),
                            o ? Object.assign({}, b, h, g, v) : b),
                          A = be(j),
                          _ = function (e) {
                            return (E = e);
                          },
                          T = function (e) {
                            return (j = e);
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
                              r = n ? C.on(re.COMPLETE, e) : we;
                            return (
                              !o || (o && C.isComplete) || c
                                ? e(C.permissions)
                                : n ||
                                  M.add(Ae, function () {
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
                              throw new Error(_e);
                            x[e.name] || (x[e.name] = e).onRegister.call(e, C);
                          }),
                          (C.execute = je(x)),
                          Object.defineProperties(C, {
                            permissions: {
                              get: function () {
                                return j;
                              },
                            },
                            status: {
                              get: function () {
                                return E;
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
                                return Object.keys(x);
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
                          (a = null), e.call(e, new l('The call took longer than you wanted!'));
                        }
                        function r () {
                          a && (clearTimeout(a), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var a = setTimeout(n, t);
                        return r;
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
                          pe.error('__cmp not found');
                        } else pe.error('__cmp not found');
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
                          var t = p(e.callback, e.timeout);
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
                            var n = p(function (e, t) {
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
                            var t = f();
                            t && t('getConsentData', null, e);
                          },
                          n = function (e) {
                            var t = Ee(ie),
                              n = f();
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
                      var V =
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
                          for (var t, n, r = 1; r < arguments.length; ++r)
                            for (t in (n = arguments[r]))
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return e;
                        };
                      var h,
                        g,
                        v,
                        b,
                        y,
                        N = {
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
                        k = N.STATE_KEYS_MAP,
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
                            var t = this.findField(k.MCMID, e),
                              n = a.call(this, k.MCMID, e);
                            return void 0 !== t ? t : n();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        S = N.MESSAGES,
                        M = N.ASYNC_API_MAP,
                        w = N.SYNC_API_MAP,
                        P = function () {
                          function a () {}
                          function i (e, t) {
                            var n = this;
                            return function () {
                              return n.callbackRegistry.add(e, t), n.messageParent(S.GETSTATE), '';
                            };
                          }
                          function e (r) {
                            this[M[r]] = function (e) {
                              e = e || a;
                              var t = this.findField(r, e),
                                n = i.call(this, r, e);
                              return void 0 !== t ? t : n();
                            };
                          }
                          function t (e) {
                            this[w[e]] = function () {
                              return this.findField(e, a) || {};
                            };
                          }
                          Object.keys(M).forEach(e, this), Object.keys(w).forEach(t, this);
                        },
                        I = N.ASYNC_API_MAP,
                        x = function () {
                          Object.keys(I).forEach(function (t) {
                            this[I[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        L =
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
                            return null !== e && 'object' === R(e) && !1 === Array.isArray(e);
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
                        E =
                          (L.isObjectEmpty,
                          L.isValueEmpty,
                          L.getIeVersion,
                          L.encodeAndBuildRequest,
                          L.isObject,
                          L.defineGlobalNamespace,
                          L.pluck,
                          L.parseOptOut,
                          L.normalizeBoolean,
                          t),
                        j = N.MESSAGES,
                        A = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        F = function (i, o) {
                          (this.parse = function (e) {
                            try {
                              var n = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (n[A[t]] = 2 !== t ? e : JSON.parse(e));
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
                                a = -1 === Object.keys(j).indexOf(t.prefix);
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
                        _ = N.MESSAGES,
                        T = function (e, t, n, r) {
                          function a (e) {
                            Object.assign(f, e);
                          }
                          function i (e) {
                            Object.assign(f.state, e),
                              Object.assign(f.state.ALLFIELDS, e),
                              f.callbackRegistry.executeAll(f.state);
                          }
                          function o (e) {
                            if (!g.isInvalid(e)) {
                              h = !1;
                              var t = g.parse(e);
                              f.setStateAndPublish(t.state);
                            }
                          }
                          function s (e) {
                            !h && m && ((h = !0), g.send(r, e));
                          }
                          function c () {
                            a(new C(n._generateID)),
                              f.getMarketingCloudVisitorID(),
                              f.callbackRegistry.executeAll(f.state, !0),
                              V.removeEventListener('message', u);
                          }
                          function u (e) {
                            if (!g.isInvalid(e)) {
                              var t = g.parse(e);
                              (h = !1),
                                V.clearTimeout(f._handshakeTimeout),
                                V.removeEventListener('message', u),
                                a(new P(f)),
                                V.addEventListener('message', o),
                                f.setStateAndPublish(t.state),
                                f.callbackRegistry.hasCallbacks() && s(_.GETSTATE);
                            }
                          }
                          function l () {
                            m && postMessage
                              ? (V.addEventListener('message', u),
                                s(_.HANDSHAKE),
                                (f._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            V.s_c_in || ((V.s_c_il = []), (V.s_c_in = 0)),
                              (f._c = 'Visitor'),
                              (f._il = V.s_c_il),
                              (f._in = V.s_c_in),
                              (f._il[f._in] = f),
                              V.s_c_in++;
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
                            m = t.whitelistParentDomain;
                          (f.state = { ALLFIELDS: {} }),
                            (f.version = n.version),
                            (f.marketingCloudOrgID = e),
                            (f.cookieDomain = n.cookieDomain || '');
                          var h = !(f._instanceType = 'child'),
                            g = new F(e, m);
                          (f.callbackRegistry = E()),
                            (f.init = function () {
                              d(), p(), a(new x(f)), l();
                            }),
                            (f.findField = function (e, t) {
                              if (void 0 !== f.state[e]) return t(f.state[e]), f.state[e];
                            }),
                            (f.messageParent = s),
                            (f.setStateAndPublish = i);
                        },
                        D = N.MESSAGES,
                        B = N.ALL_APIS,
                        U = N.ASYNC_API_MAP,
                        H = N.FIELDGROUP_TO_FIELD,
                        q = function (a, r) {
                          function i () {
                            var r = {};
                            return (
                              Object.keys(B).forEach(function (e) {
                                var t = B[e],
                                  n = a[t]();
                                L.isValueEmpty(n) || (r[e] = n);
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
                                    var t = H[e];
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
                                var t = U[e[0]];
                                a[t](r, !0);
                              } else n();
                            };
                          }
                          function n (e, t) {
                            var n = i();
                            r.send(e, t, n);
                          }
                          function s (e) {
                            u(e), n(e, D.HANDSHAKE);
                          }
                          function c (e) {
                            t(function () {
                              n(e, D.PARENTSTATE);
                            })();
                          }
                          function u (t) {
                            function e (e) {
                              n.call(a, e),
                                r.send(t, D.PARENTSTATE, { CUSTOMERIDS: a.getCustomerIDs() });
                            }
                            var n = a.setCustomerIDs;
                            a.setCustomerIDs = e;
                          }
                          return function (e) {
                            r.isInvalid(e) ||
                              (r.parse(e).prefix === D.HANDSHAKE ? s : c)(e.source);
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
                        z = {
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
                        Q = function (e) {
                          var t;
                          !e && V.location && (e = V.location.hostname);
                          var n,
                            r = (t = e).split('.');
                          for (n = r.length - 2; 0 <= n; n--)
                            if (
                              ((t = r.slice(n).join('.')), z.set('test', 'cookie', { domain: t }))
                            )
                              return z.remove('test', { domain: t }), t;
                          return '';
                        },
                        K = {
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
                        W = !!V.postMessage,
                        Y = {
                          postMessage: function (e, t, n) {
                            var r = 1;
                            t &&
                              (W
                                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (n.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + r++ + '&' + e));
                          },
                          receiveMessage: function (t, n) {
                            var e;
                            try {
                              W &&
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
                                V.addEventListener
                                  ? V[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : V[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        J = function (e) {
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
                        X = function (r) {
                          const $___old_cee32448d7421684 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_06a2774a19f46475 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_cee32448d7421684)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            if ($___old_06a2774a19f46475)
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
                                        .call(V.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_12b087240dbb4929 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_d4789fb7c3bbff1f = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_12b087240dbb4929)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    if ($___old_d4789fb7c3bbff1f)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new V[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_12b087240dbb4929)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_12b087240dbb4929
                                      ));
                                    if ($___old_d4789fb7c3bbff1f)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_d4789fb7c3bbff1f
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
                                      for (var n = i.callback, r = V, a = 0; a < n.length; a++)
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
                            if ($___old_cee32448d7421684)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_cee32448d7421684
                              ));
                            if ($___old_06a2774a19f46475)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_06a2774a19f46475
                              ));
                          }
                        },
                        Z = {
                          POST_MESSAGE_ENABLED: !!V.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        $ = function (m, t) {
                          var a = V.document;
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
                            messageSendingInterval: Z.POST_MESSAGE_ENABLED ? null : 100,
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
                                  !Z.POST_MESSAGE_ENABLED ||
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
                                    r.messageSendingInterval = Z.POST_MESSAGE_ENABLED ? null : 150;
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
                                      L.encodeAndBuildRequest(a.url || [], ','),
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
                                l = Math.ceil(new Date().getTime() / Z.MILLIS_PER_DAY);
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
                                    p = m.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, o = u.length; i < o; i++) {
                                    (s = u[i]), (c = /^\/\//.test(s));
                                    var f = new Image();
                                    f.addEventListener(
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
                                      (f.src = (c ? p : '') + s),
                                      this.onPagePixels.push(f);
                                  }
                                }
                              } else this.addMessage(n), this.setSyncTrackingData(r, t, l, a);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                m._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((Z.POST_MESSAGE_ENABLED ? '' : t) + e);
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
                                  ? Z.POST_MESSAGE_ENABLED
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
                              Y.postMessage(e, this.url, this.iframe.contentWindow),
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
                                m._forceSyncIDCall || !e || t - e > Z.DAYS_BETWEEN_SYNC_ID_CALLS
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
                        ie = (e((h = {}), ae.AAM, 565), e(h, ae.ECID, 565), h),
                        oe = (e((g = {}), ae.AAM, [1, 2, 5]), e(g, ae.ECID, [1, 2, 5]), g),
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
                        pe = new r('[ADOBE OPT-IN]'),
                        fe = function (e, t) {
                          return R(e) === t;
                        },
                        me = function (e, t) {
                          return e instanceof Array ? e : fe(e, 'string') ? [e] : t || [];
                        },
                        he = function (t) {
                          var e = Object.keys(t);
                          return (
                            !!e.length &&
                            e.every(function (e) {
                              return !0 === t[e];
                            })
                          );
                        },
                        ge = function (e) {
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
                        ke = function (e) {
                          if (Me(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        Ce = function (e) {
                          return void 0 === e || (Me(e) ? ge(Object.keys(e)) : Se(e));
                        },
                        Se = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && fe(e, 'string') && ge(Object.keys(t));
                          } catch (e) {
                            return !1;
                          }
                        },
                        Me = function (e) {
                          return null !== e && fe(e, 'object') && !1 === Array.isArray(e);
                        },
                        we = function () {},
                        Pe = function (e) {
                          return fe(e, 'function') ? e() : e;
                        },
                        Ie = function (e, t) {
                          Ce(e) || pe.error(''.concat(t));
                        },
                        xe = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        Ee = function (e) {
                          return xe(e).filter(function (e, t, n) {
                            return n.indexOf(e) === t;
                          });
                        },
                        je = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              n = t.command,
                              r = t.params,
                              a = void 0 === r ? {} : r,
                              i = t.callback,
                              o = void 0 === i ? we : i;
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
                              pe.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (l.prototype = Object.create(Error.prototype)),
                        (l.prototype.constructor = l);
                      var Ae = 'fetchPermissions',
                        _e = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = ae), (d.TimeoutError = l);
                      var Te = Object.freeze({ OptIn: d, IabPlugin: m }),
                        Oe = function (d, p) {
                          d.publishDestinations = function (e, t, n) {
                            var r = t,
                              a = n;
                            try {
                              a = 'function' == typeof a ? a : e.callback;
                            } catch (d) {
                              a = function () {};
                            }
                            var i = p;
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
                                if (!L.isObject(e))
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
                                  L.isObject(e) &&
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
                        De = function R (e) {
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
                              u = (R.h = R.h || []),
                              l = (R.k = R.k || []),
                              d = l.length,
                              p = {},
                              f = 2;
                            d < 64;
                            f++
                          )
                            if (!p[f]) {
                              for (n = 0; n < 313; n += f) p[n] = f;
                              (u[d] = (a(f, 0.5) * i) | 0), (l[d++] = (a(f, 1 / 3) * i) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (n = 0; n < e.length; n++) {
                            if ((r = e.charCodeAt(n)) >> 8) return;
                            s[n >> 2] |= r << (((3 - n) % 4) * 8);
                          }
                          for (s[s.length] = (c / i) | 0, s[s.length] = c, r = 0; r < s.length; ) {
                            var m = s.slice(r, (r += 16)),
                              h = u;
                            for (u = u.slice(0, 8), n = 0; n < 64; n++) {
                              var g = m[n - 15],
                                v = m[n - 2],
                                b = u[0],
                                y = u[4],
                                k =
                                  u[7] +
                                  (t(y, 6) ^ t(y, 11) ^ t(y, 25)) +
                                  ((y & u[5]) ^ (~y & u[6])) +
                                  l[n] +
                                  (m[n] =
                                    n < 16
                                      ? m[n]
                                      : (m[n - 16] +
                                          (t(g, 7) ^ t(g, 18) ^ (g >>> 3)) +
                                          m[n - 7] +
                                          (t(v, 17) ^ t(v, 19) ^ (v >>> 10))) |
                                        0);
                              (u = [
                                (k +
                                  ((t(b, 2) ^ t(b, 13) ^ t(b, 22)) +
                                    ((b & u[1]) ^ (b & u[2]) ^ (u[1] & u[2])))) |
                                  0,
                              ].concat(u))[4] = (u[4] + k) | 0;
                            }
                            for (n = 0; n < 8; n++) u[n] = (u[n] + h[n]) | 0;
                          }
                          for (n = 0; n < 8; n++)
                            for (r = 3; r + 1; r--) {
                              var C = (u[n] >> (8 * r)) & 255;
                              o += (C < 16 ? 0 : '') + C.toString(16);
                            }
                          return o;
                        },
                        Re = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = De(e)),
                            e
                          );
                        },
                        Ve = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        Ne = Te.OptIn;
                      L.defineGlobalNamespace(), (window.adobe.OptInCategories = Ne.Categories);
                      var Le = function (r, n, e) {
                        function t (e) {
                          var r = e;
                          return function (e) {
                            var t = e || b.location.href;
                            try {
                              var n = f._extractParamFromUri(t, r);
                              if (n) return T.parsePipeDelimetedKeyValues(n);
                            } catch (e) {}
                          };
                        }
                        function a (e) {
                          function t (e, t, n) {
                            e && e.match(Z.VALID_VISITOR_ID_REGEX) && (n === C && (v = !0), t(e));
                          }
                          t(e[C], f.setMarketingCloudVisitorID, C),
                            f._setFieldExpire(I, -1),
                            t(e[w], f.setAnalyticsVisitorID);
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
                          function a (e, t, n) {
                            return (n = n ? (n += '|') : n) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var n = t[0],
                              r = t[1];
                            return null != r && r !== x && (e = a(n, r, e)), e;
                          }
                          var n,
                            r = e.reduce(t, '');
                          return (
                            (n = (n = r) ? (n += '|') : n) + 'TS=' + T.getTimestampInSeconds()
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
                        function c () {
                          return !(!f.configs.doesOptInApply || (m.optIn.isComplete && d()));
                        }
                        function d () {
                          return f.configs.doesOptInApply && f.configs.isIabContext
                            ? m.optIn.isApproved(m.optIn.Categories.ECID) && g
                            : m.optIn.isApproved(m.optIn.Categories.ECID);
                        }
                        function u (e, t) {
                          if (((g = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies && (h = t.consentString), f.init(), p();
                        }
                        function l () {
                          m.optIn.isApproved(m.optIn.Categories.ECID) &&
                            (f.configs.isIabContext
                              ? m.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: u,
                                })
                              : (f.init(), p()));
                        }
                        function p () {
                          m.optIn.off('complete', l);
                        }
                        if (!e || e.split('').reverse().join('') !== r)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var f = this,
                          m = window.adobe,
                          h = '',
                          g = !1,
                          v = !1;
                        f.version = '4.5.2';
                        var b = V,
                          y = b.Visitor;
                        (y.version = f.version),
                          (y.AuthState = N.AUTH_STATE),
                          (y.OptOut = N.OPT_OUT),
                          b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0)),
                          (f._c = 'Visitor'),
                          (f._il = b.s_c_il),
                          (f._in = b.s_c_in),
                          (f._il[f._in] = f),
                          b.s_c_in++,
                          (f._instanceType = 'regular'),
                          (f._log = { requests: [] }),
                          (f.marketingCloudOrgID = r),
                          (f.cookieName = 'AMCV_' + r),
                          (f.sessionCookieName = 'AMCVS_' + r),
                          (f.cookieDomain = Q()),
                          (f.loadSSL = 0 <= b.location.protocol.toLowerCase().indexOf('https')),
                          (f.loadTimeout = 30000),
                          (f.CORSErrors = []),
                          (f.marketingCloudServer = f.audienceManagerServer = 'dpm.demdex.net'),
                          (f.sdidParamExpiry = 30);
                        var k = null,
                          C = 'MCMID',
                          S = 'MCIDTS',
                          M = 'A',
                          w = 'MCAID',
                          P = 'AAM',
                          I = 'MCAAMB',
                          x = 'NONE',
                          E = function (e) {
                            return !Object.prototype[e];
                          },
                          j = X(f);
                        (f.FIELDS = N.FIELDS),
                          (f.cookieRead = function (e) {
                            return z.get(e);
                          }),
                          (f.cookieWrite = function (e, t, n) {
                            var r = f.cookieLifetime ? ('' + f.cookieLifetime).toUpperCase() : '',
                              a = !1;
                            return (
                              f.configs &&
                                f.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (a = !0),
                              z.set(e, '' + t, {
                                expires: n,
                                domain: f.cookieDomain,
                                cookieLifetime: r,
                                secure: a,
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
                              r = n.url;
                            return f._getRemoteField(C, r, e, t, n);
                          });
                        var A = function (t, e) {
                          var n = {};
                          f.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              n[e] = f._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? f.isOptedOut(
                                    function (e) {
                                      (n.MCOPTOUT = e), t(n);
                                    },
                                    null,
                                    !0
                                  )
                                : t(n);
                          }, !0);
                        };
                        (f.getVisitorValues = function (e, t) {
                          var n = {
                              MCMID: { fn: f.getMarketingCloudVisitorID, args: [!0], context: f },
                              MCOPTOUT: { fn: f.isOptedOut, args: [void 0, !0], context: f },
                              MCAID: { fn: f.getAnalyticsVisitorID, args: [!0], context: f },
                              MCAAMLH: {
                                fn: f.getAudienceManagerLocationHint,
                                args: [!0],
                                context: f,
                              },
                              MCAAMB: { fn: f.getAudienceManagerBlob, args: [!0], context: f },
                            },
                            r = t && t.length ? L.pluck(n, t) : n;
                          t && -1 === t.indexOf('MCAID') ? A(e, t) : G(r, e);
                        }),
                          (f._currentCustomerIDs = {}),
                          (f._customerIDsHashChanged = !1),
                          (f._newCustomerIDsHash = ''),
                          (f.setCustomerIDs = function (e, t) {
                            function n () {
                              f._customerIDsHashChanged = !1;
                            }
                            if (!f.isOptedOut() && e) {
                              if (!L.isObject(e) || L.isObjectEmpty(e)) return !1;
                              var r, a, i;
                              for (r in (f._readVisitor(), e))
                                if (
                                  E(r) &&
                                  ((t = (a = e[r]).hasOwnProperty('hashType') ? a.hashType : t), a)
                                )
                                  if ('object' === R(a)) {
                                    var o = {};
                                    if (a.id) {
                                      if (t) {
                                        if (!(i = Re(Ve(a.id), t))) return;
                                        (a.id = i), (o.hashType = t);
                                      }
                                      o.id = a.id;
                                    }
                                    null != a.authState && (o.authState = a.authState),
                                      (f._currentCustomerIDs[r] = o);
                                  } else if (t) {
                                    if (!(i = Re(Ve(a), t))) return;
                                    f._currentCustomerIDs[r] = { id: i, hashType: t };
                                  } else f._currentCustomerIDs[r] = { id: a };
                              var s = f.getCustomerIDs(),
                                c = f._getField('MCCIDH'),
                                u = '';
                              for (r in (c || (c = 0), s))
                                E(r) &&
                                  (u +=
                                    (u ? '|' : '') +
                                    r +
                                    '|' +
                                    ((a = s[r]).id ? a.id : '') +
                                    (a.authState ? a.authState : ''));
                              (f._newCustomerIDsHash = String(f._hash(u))),
                                f._newCustomerIDsHash !== c &&
                                  ((f._customerIDsHashChanged = !0), f._mapCustomerIDs(n));
                            }
                          }),
                          (f.getCustomerIDs = function () {
                            f._readVisitor();
                            var e,
                              t,
                              n = {};
                            for (e in f._currentCustomerIDs)
                              E(e) &&
                                (t = f._currentCustomerIDs[e]).id &&
                                (n[e] || (n[e] = {}),
                                (n[e].id = t.id),
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
                            if (!T.isTrackingServerPopulated() && !n)
                              return f._callCallback(e, ['']), '';
                            var r = '';
                            if (
                              (n ||
                                (r = f.getMarketingCloudVisitorID(function () {
                                  f.getAnalyticsVisitorID(e, !0);
                                })),
                              r || n)
                            ) {
                              var a = n ? f.marketingCloudServer : f.trackingServer,
                                i = '';
                              f.loadSSL &&
                                (n
                                  ? f.marketingCloudServerSecure &&
                                    (a = f.marketingCloudServerSecure)
                                  : f.trackingServerSecure && (a = f.trackingServerSecure));
                              var o = {};
                              if (a) {
                                var s = 'http' + (f.loadSSL ? 's' : '') + '://' + a + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    f.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(f.marketingCloudOrgID) +
                                    (r ? '&mid=' + encodeURIComponent(r) : '') +
                                    (f.idSyncDisable3rdPartySyncing || f.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  u = [
                                    's_c_il',
                                    f._in,
                                    '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (i =
                                  s +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  f._in +
                                  '%5D._set' +
                                  (n ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (o.corsUrl = s + '?' + c),
                                  (o.callback = u);
                              }
                              return (o.url = i), f._getRemoteField(n ? C : w, i, e, t, o);
                            }
                            return '';
                          }),
                          (f.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              f.getMarketingCloudVisitorID(function () {
                                f.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var n = f._getField(w);
                              if (
                                (!n &&
                                  T.isTrackingServerPopulated() &&
                                  (n = f.getAnalyticsVisitorID(function () {
                                    f.getAudienceManagerLocationHint(e, !0);
                                  })),
                                n || !T.isTrackingServerPopulated())
                              ) {
                                var r = f._getAudienceManagerURLData(),
                                  a = r.url;
                                return f._getRemoteField('MCAAMLH', a, e, t, r);
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
                              var n = f._getField(w);
                              if (
                                (!n &&
                                  T.isTrackingServerPopulated() &&
                                  (n = f.getAnalyticsVisitorID(function () {
                                    f.getAudienceManagerBlob(e, !0);
                                  })),
                                n || !T.isTrackingServerPopulated())
                              ) {
                                var r = f._getAudienceManagerURLData(),
                                  a = r.url;
                                return (
                                  f._customerIDsHashChanged && f._setFieldExpire(I, -1),
                                  f._getRemoteField(I, a, e, t, r)
                                );
                              }
                            }
                            return '';
                          }),
                          (f._supplementalDataIDCurrent = ''),
                          (f._supplementalDataIDCurrentConsumed = {}),
                          (f._supplementalDataIDLast = ''),
                          (f._supplementalDataIDLastConsumed = {});
                        var _ = !(f.getSupplementalDataID = function (e, t) {
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
                              r = n.url;
                            if (d()) return f._getRemoteField('MCOPTOUT', r, e, t, n);
                            if (
                              (f._registerCallback('liberatedOptOut', e),
                              null !== f._liberatedOptOut)
                            )
                              return (
                                f._callAllCallbacks('liberatedOptOut', [f._liberatedOptOut]),
                                (_ = !1),
                                f._liberatedOptOut
                              );
                            if (_) return null;
                            _ = !0;
                            var a = 'liberatedGetOptOut';
                            return (
                              (n.corsUrl = n.corsUrl.replace(
                                /dpm\.demdex\.net\/id\?/,
                                'dpm.demdex.net/optOutStatus?'
                              )),
                              (n.callback = [a]),
                              (V[a] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    n,
                                    r = L.parseOptOut(e, t, x);
                                  (t = r.optOut),
                                    (n = 1000 * r.d_ottl),
                                    (f._liberatedOptOut = t),
                                    setTimeout(function () {
                                      f._liberatedOptOut = null;
                                    }, n);
                                }
                                f._callAllCallbacks('liberatedOptOut', [t]), (_ = !1);
                              }),
                              j.fireCORS(n),
                              null
                            );
                          }),
                          (f.isOptedOut = function (n, r, e) {
                            r || (r = y.OptOut.GLOBAL);
                            var t = f.getOptOut(function (e) {
                              var t = e === y.OptOut.GLOBAL || 0 <= e.indexOf(r);
                              f._callCallback(n, [t]);
                            }, e);
                            return t ? t === y.OptOut.GLOBAL || 0 <= t.indexOf(r) : null;
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
                          (f._generateID = J),
                          (f._generateLocalMID = function () {
                            var e = f._generateID(0);
                            return (D.isClientSideMarketingCloudVisitorID = !0), e;
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
                          (f._addQuerystringParam = function (e, t, n, r) {
                            var a = encodeURIComponent(t) + '=' + encodeURIComponent(n),
                              i = T.parseHash(e),
                              o = T.hashlessUrl(e);
                            if (-1 === o.indexOf('?')) return o + '?' + a + i;
                            var s = o.split('?'),
                              c = s[0] + '?',
                              u = s[1];
                            return c + T.addQueryParamAtLocation(u, a, r) + i;
                          }),
                          (f._extractParamFromUri = function (e, t) {
                            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (n && n.length) return decodeURIComponent(n[1]);
                          }),
                          (f._parseAdobeMcFromUrl = t(Z.ADOBE_MC)),
                          (f._parseAdobeMcSdidFromUrl = t(Z.ADOBE_MC_SDID)),
                          (f._attemptToPopulateSdidFromUrl = function (e) {
                            var t = f._parseAdobeMcSdidFromUrl(e),
                              n = 1000000000;
                            t && t.TS && (n = T.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === r &&
                                n < f.sdidParamExpiry &&
                                ((f._supplementalDataIDCurrent = t.SDID),
                                (f._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (f._attemptToPopulateIdsFromUrl = function () {
                            var e = f._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = T.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > Z.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== r)
                                return;
                              a(e);
                            }
                          }),
                          (f._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((r = e),
                                  (e = T.isObject(r) ? r : JSON.parse(r))[f.marketingCloudOrgID])
                                ) {
                                  var t = e[f.marketingCloudOrgID];
                                  (n = t.customerIDs),
                                    T.isObject(n) && f.setCustomerIDs(n),
                                    i(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var n, r;
                          }),
                          (f._timeout = null),
                          (f._loadData = function (e, t, n, r) {
                            (t = f._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (r.url = f._addQuerystringParam(r.url, 'd_fieldgroup', e, 1)),
                              (r.corsUrl = f._addQuerystringParam(
                                r.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (D.fieldGroupObj[e] = !0),
                              r === Object(r) &&
                                r.corsUrl &&
                                'XMLHttpRequest' === j.corsMetadata.corsType &&
                                j.fireCORS(r, n, e);
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
                                r,
                                a,
                                i,
                                o = f._getSettingsDigest(),
                                s = !1,
                                c = f.cookieRead(f.cookieName),
                                u = new Date();
                              if (
                                (c ||
                                  v ||
                                  f.discardTrackingServerECID ||
                                  (c = f.cookieRead(Z.FIRST_PARTY_SERVER_COOKIE)),
                                null == f._fields && (f._fields = {}),
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
                                      (f._setField(n, r, 1),
                                      0 < a &&
                                        ((f._fields['expire' + n] = a + (i ? 's' : '')),
                                        (u.getTime() >= 1000 * a ||
                                          (i && !f.cookieRead(f.sessionCookieName))) &&
                                          (f._fieldsExpired || (f._fieldsExpired = {}),
                                          (f._fieldsExpired[n] = !0))));
                              !f._getField(w) &&
                                T.isTrackingServerPopulated() &&
                                (c = f.cookieRead('s_vi')) &&
                                1 < (c = c.split('|')).length &&
                                0 <= c[0].indexOf('v1') &&
                                (0 <= (e = (r = c[1]).indexOf('[')) && (r = r.substring(0, e)),
                                r && r.match(Z.VALID_VISITOR_ID_REGEX) && f._setField(w, r));
                            }
                          }),
                          (f._appendVersionTo = function (e) {
                            var t = 'vVersion|' + f.version,
                              n = e ? f._getCookieVersion(e) : null;
                            return (
                              n
                                ? K.areVersionsDifferent(n, f.version) &&
                                  (e = e.replace(Z.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (f._writeVisitor = function () {
                            var e,
                              t,
                              n = f._getSettingsDigest();
                            for (e in f._fields)
                              E(e) &&
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
                              var r,
                                a = {};
                              for (r = 0; r < n.length; r += 2) a[n[r]] = n[r + 1];
                              return a;
                            }
                            return null;
                          }),
                          (f._setFieldMap = function (e, t, n) {
                            var r,
                              a = null;
                            if (t) for (r in ((a = []), t)) E(r) && (a.push(r), a.push(t[r]));
                            f._setFieldList(e, a, n);
                          }),
                          (f._setFieldExpire = function (e, t, n) {
                            var r = new Date();
                            r.setTime(r.getTime() + 1000 * t),
                              null == f._fields && (f._fields = {}),
                              (f._fields['expire' + e] =
                                Math.floor(r.getTime() / 1000) + (n ? 's' : '')),
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
                                ('object' === R(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = x),
                                (e && (e === x || e.match(Z.VALID_VISITOR_ID_REGEX))) || (e = '')),
                              e
                            );
                          }),
                          (f._setFields = function (e, t) {
                            if (
                              (f._clearTimeout(e),
                              null != f._loading && (f._loading[e] = !1),
                              D.fieldGroupObj[e] && D.setState(e, !1),
                              'MC' === e)
                            ) {
                              !0 !== D.isClientSideMarketingCloudVisitorID &&
                                (D.isClientSideMarketingCloudVisitorID = !1);
                              var n = f._getField(C);
                              if (!n || f.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(n = 'object' === R(t) && t.mid ? t.mid : f._findVisitorID(t))
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
                              (n && n !== x) || (n = ''),
                                'object' === R(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    f._setFields(P, t),
                                  f._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    f._setFields(M, { id: t.id })),
                                f._callAllCallbacks(C, [n]);
                            }
                            if (e === P && 'object' === R(t)) {
                              var r = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (r = parseInt(t.id_sync_ttl, 10));
                              var a = O.getRegionAndCheckIfChanged(t, r);
                              f._callAllCallbacks('MCAAMLH', [a]);
                              var i = f._getField(I);
                              (t.d_blob || t.blob) &&
                                ((i = t.d_blob) || (i = t.blob),
                                f._setFieldExpire(I, r),
                                f._setField(I, i)),
                                i || (i = ''),
                                f._callAllCallbacks(I, [i]),
                                !t.error_msg &&
                                  f._newCustomerIDsHash &&
                                  f._setField('MCCIDH', f._newCustomerIDsHash);
                            }
                            if (e === M) {
                              var o = f._getField(w);
                              (o && !f.overwriteCrossDomainMCIDAndAID) ||
                                ((o = f._findVisitorID(t))
                                  ? o !== x && f._setFieldExpire(I, -1)
                                  : (o = x),
                                f._setField(w, o)),
                                (o && o !== x) || (o = ''),
                                f._callAllCallbacks(w, [o]);
                            }
                            if (f.idSyncDisableSyncs || f.disableIdSyncs)
                              O.idCallNotProcesssed = !0;
                            else {
                              O.idCallNotProcesssed = !1;
                              var s = {};
                              (s.ibs = t.ibs), (s.subdomain = t.subdomain), O.processIDCallData(s);
                            }
                            if (t === Object(t)) {
                              var c, u;
                              d() && f.isAllowed() && (c = f._getField('MCOPTOUT'));
                              var l = L.parseOptOut(t, c, x);
                              (c = l.optOut),
                                (u = l.d_ottl),
                                f._setFieldExpire('MCOPTOUT', u, !0),
                                f._setField('MCOPTOUT', c),
                                f._callAllCallbacks('MCOPTOUT', [c]);
                            }
                          }),
                          (f._loading = null),
                          (f._getRemoteField = function (n, e, t, r, a) {
                            var i,
                              o = '',
                              s = T.isFirstPartyAnalyticsVisitorIDCall(n),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && f.isAllowed())
                              if (
                                (f._readVisitor(),
                                !(
                                  !(o = f._getField(n, !0 === c[n])) ||
                                  (f._fieldsExpired && f._fieldsExpired[n])
                                ) ||
                                  (f.disableThirdPartyCalls && !s))
                              )
                                o ||
                                  (n === C
                                    ? (f._registerCallback(n, t),
                                      (o = f._generateLocalMID()),
                                      f.setMarketingCloudVisitorID(o))
                                    : n === w
                                    ? (f._registerCallback(n, t),
                                      (o = ''),
                                      f.setAnalyticsVisitorID(o))
                                    : (r = !(o = '')));
                              else if (
                                (n === C || 'MCOPTOUT' === n
                                  ? (i = 'MC')
                                  : 'MCAAMLH' === n || n === I
                                  ? (i = P)
                                  : n === w && (i = M),
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
                                          e && D.setState(i, !0);
                                          var t = '';
                                          n === C
                                            ? (t = f._generateLocalMID())
                                            : i === P && (t = { error_msg: 'timeout' }),
                                            f._setFields(i, t);
                                        }
                                      },
                                      a
                                    )),
                                  f._registerCallback(n, t),
                                  o || (e || f._setFields(i, { id: x }), '')
                                );
                            return (
                              (n !== C && n !== w) || o !== x || (r = !(o = '')),
                              t && r && f._callCallback(t, [o]),
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
                            f._readVisitor(), f._setFields(M, e);
                          }),
                          (f._setAudienceManagerFields = function (e) {
                            f._readVisitor(), f._setFields(P, e);
                          }),
                          (f._getAudienceManagerURLData = function (e) {
                            var t = f.audienceManagerServer,
                              n = '',
                              r = f._getField(C),
                              a = f._getField(I, !0),
                              i = f._getField(w),
                              o = i && i !== x ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                            if (
                              (f.loadSSL &&
                                f.audienceManagerServerSecure &&
                                (t = f.audienceManagerServerSecure),
                              t)
                            ) {
                              var s,
                                c,
                                u = f.getCustomerIDs();
                              if (u)
                                for (s in u)
                                  E(s) &&
                                    ((c = u[s]),
                                    (o +=
                                      '&d_cid_ic=' +
                                      encodeURIComponent(s) +
                                      '%01' +
                                      encodeURIComponent(c.id ? c.id : '') +
                                      (c.authState ? '%01' + c.authState : '')));
                              e || (e = '_setAudienceManagerFields');
                              var l = 'http' + (f.loadSSL ? 's' : '') + '://' + t + '/id',
                                d =
                                  'd_visid_ver=' +
                                  f.version +
                                  (h && -1 !== l.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + h
                                    : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!r && f._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(f.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (f.idSyncContainerID || 0) +
                                  (r ? '&d_mid=' + encodeURIComponent(r) : '') +
                                  (f.idSyncDisable3rdPartySyncing || f.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === k
                                    ? '&d_coop_safe=1'
                                    : !1 === k
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (a ? '&d_blob=' + encodeURIComponent(a) : '') +
                                  o,
                                p = ['s_c_il', f._in, e];
                              return {
                                url: (n = l + '?' + d + '&d_cb=s_c_il%5B' + f._in + '%5D.' + e),
                                corsUrl: l + '?' + d,
                                callback: p,
                              };
                            }
                            return { url: n };
                          }),
                          (f.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [C, f._getField(C)],
                                [w, f._getField(w)],
                                ['MCORGID', f.marketingCloudOrgID],
                              ];
                              return f._addQuerystringParam(e, Z.ADOBE_MC, o(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (f.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || f.getSupplementalDataID(T.generateRandomString(), !0)))
                              return e;
                            try {
                              var n = o([
                                ['SDID', t],
                                ['MCORGID', f.marketingCloudOrgID],
                              ]);
                              return f._addQuerystringParam(e, Z.ADOBE_MC_SDID, n);
                            } catch (t) {
                              return e;
                            }
                          });
                        var T = {
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
                              e === w &&
                              (t || (t = f.trackingServer),
                              n || (n = f.trackingServerSecure),
                              !('string' != typeof (r = f.loadSSL ? n : t) || !r.length) &&
                                r.indexOf('2o7.net') < 0 &&
                                r.indexOf('omtrdc.net') < 0)
                            );
                            var r;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            z.remove(e, { domain: f.cookieDomain });
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
                        f._helpers = T;
                        var O = $(f, y);
                        (f._destinationPublishing = O), (f.timeoutMetricsLog = []);
                        var D = {
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
                              case M:
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
                        (f.isClientSideMarketingCloudVisitorID = function () {
                          return D.isClientSideMarketingCloudVisitorID;
                        }),
                          (f.MCIDCallTimedOut = function () {
                            return D.MCIDCallTimedOut;
                          }),
                          (f.AnalyticsIDCallTimedOut = function () {
                            return D.AnalyticsIDCallTimedOut;
                          }),
                          (f.AAMIDCallTimedOut = function () {
                            return D.AAMIDCallTimedOut;
                          }),
                          (f.idSyncGetOnPageSyncInfo = function () {
                            return f._readVisitor(), f._getField('MCSYNCSOP');
                          }),
                          (f.idSyncByURL = function (e) {
                            if (!f.isOptedOut()) {
                              var t = s(e || {});
                              if (t.error) return t.error;
                              var n,
                                r,
                                a = e.url,
                                i = encodeURIComponent,
                                o = O;
                              return (
                                (a = a.replace(/^https:/, '').replace(/^http:/, '')),
                                (n = L.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (r = ['ibs', i(e.dpid), 'img', i(a), t.ttl, '', n]),
                                o.addMessage(r.join('|')),
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
                          Oe(f, O),
                          (f._getCookieVersion = function (e) {
                            e = e || f.cookieRead(f.cookieName);
                            var t = Z.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (f._resetAmcvCookie = function (e) {
                            var t = f._getCookieVersion();
                            (t && !K.isLessThan(t, e)) || T.removeCookie(f.cookieName);
                          }),
                          (f.setAsCoopSafe = function () {
                            k = !0;
                          }),
                          (f.setAsCoopUnsafe = function () {
                            k = !1;
                          }),
                          (function () {
                            if (((f.configs = Object.create(null)), T.isObject(n)))
                              for (var e in n) E(e) && ((f[e] = n[e]), (f.configs[e] = n[e]));
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
                              r = f[t];
                            f[t] = function (e) {
                              return d() && f.isAllowed()
                                ? r.apply(f, arguments)
                                : ('function' == typeof e && f._callCallback(e, [n]), n);
                            };
                          }),
                          (f.init = function () {
                            if (c()) return m.optIn.fetchPermissions(l, !0);
                            !(function () {
                              if (T.isObject(n)) {
                                (f.idSyncContainerID = f.idSyncContainerID || 0),
                                  (k =
                                    'boolean' == typeof f.isCoopSafe
                                      ? f.isCoopSafe
                                      : T.parseBoolean(f.isCoopSafe)),
                                  f.resetBeforeVersion && f._resetAmcvCookie(f.resetBeforeVersion),
                                  f._attemptToPopulateIdsFromUrl(),
                                  f._attemptToPopulateSdidFromUrl(),
                                  f._readVisitor();
                                var e = f._getField(S),
                                  t = Math.ceil(new Date().getTime() / Z.MILLIS_PER_DAY);
                                f.idSyncDisableSyncs ||
                                  f.disableIdSyncs ||
                                  !O.canMakeSyncIDCall(e, t) ||
                                  (f._setFieldExpire(I, -1), f._setField(S, t)),
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
                                  O.checkDPIframeSrc();
                                  var e = function () {
                                    var e = O;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  b.addEventListener('load', function () {
                                    (y.windowLoaded = !0), e();
                                  });
                                  try {
                                    Y.receiveMessage(function (e) {
                                      O.receiveMessage(e.data);
                                    }, O.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              f.whitelistIframeDomains &&
                                Z.POST_MESSAGE_ENABLED &&
                                ((f.whitelistIframeDomains =
                                  f.whitelistIframeDomains instanceof Array
                                    ? f.whitelistIframeDomains
                                    : [f.whitelistIframeDomains]),
                                f.whitelistIframeDomains.forEach(function (e) {
                                  var t = new F(r, e),
                                    n = q(f, t);
                                  Y.receiveMessage(n, e);
                                }));
                          });
                      };
                      Le.config = te;
                      var Fe = (V.Visitor = Le),
                        Be = function (a) {
                          if (L.isObject(a))
                            return Object.keys(a)
                              .filter(function (e) {
                                return '' !== a[e];
                              })
                              .reduce(function (e, t) {
                                var n = te.normalizeConfig(a[t]),
                                  r = L.normalizeBoolean(n);
                                return (e[t] = r), e;
                              }, Object.create(null));
                        },
                        Ue = Te.OptIn,
                        He = Te.IabPlugin;
                      (Fe.getInstance = function (r, e) {
                        if (!r) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        r.indexOf('@') < 0 && (r += '@AdobeOrg');
                        var t = (function () {
                          var e = V.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              if (n && 'Visitor' === n._c && n.marketingCloudOrgID === r) return n;
                            }
                        })();
                        if (t) return t;
                        var a,
                          n = Be(e);
                        (a = n || {}),
                          (V.adobe.optIn =
                            V.adobe.optIn ||
                            (function () {
                              var e = L.pluck(a, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = a.optInCookieDomain || a.cookieDomain;
                              (t = (t = t || Q()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var n = new Ue(e, { cookies: z });
                              if (e.isIabContext && e.doesOptInApply) {
                                var r = new He(window.__cmp);
                                n.registerPlugin(r);
                              }
                              return n;
                            })());
                        var i = r.split('').reverse().join(''),
                          o = new Fe(r, null, i);
                        L.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain),
                          V.s_c_il.splice(--V.s_c_in, 1);
                        var s = L.getIeVersion();
                        if ('number' == typeof s && s < 10)
                          return o._helpers.replaceMethodsWithFunction(o, function () {});
                        var c,
                          u =
                            (function () {
                              try {
                                return V.self !== V.parent;
                              } catch (r) {
                                return !0;
                              }
                            })() &&
                            ((c = o).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== c.cookieRead('TEST_AMCV_COOKIE') ||
                              (c._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            V.parent
                              ? new T(r, n, o, V.parent)
                              : new Fe(r, n, i);
                        return (o = null), u.init(), u;
                      }),
                        (function () {
                          function e () {
                            Fe.windowLoaded = !0;
                          }
                          V.addEventListener
                            ? V.addEventListener('load', e)
                            : V.attachEvent && V.attachEvent('onload', e),
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
              orgId: 'C5E7148954EA18A10A4C98BC@AdobeOrg',
              variables: [{ name: 'trackingServer', value: 'mcgrawhill.sc.omtrdc.net' }],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPf83a38d6d03b44f08b465a6d63b6bbe3/',
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
                    p = n('../helpers/generateVersion')(o.buildInfo.turbineBuildDate),
                    f = 'beforeSettings',
                    m = o.getSharedModule('adobe-mcid', 'mcid-instance'),
                    h = function (e) {
                      return !e || 'true' === a.get(e);
                    },
                    g = function (r) {
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
                        l(n, e || {}),
                        t.loadPhase !== f &&
                          t.source &&
                          (o.logger.info('Calling custom script after settings.'),
                          t.source.call(s, n)),
                        n
                      );
                    },
                    k = function (e, t) {
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
                      h(r.trackingCookieName)
                        ? d(r)
                            .then(g)
                            .then(v)
                            .then(b)
                            .then(y.bind(null, r.trackerProperties, r.customSetup || {}))
                            .then(k.bind(null, r))
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
                    p = function (e, t) {
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
                    f = function (a, e, t) {
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
                      props: f,
                      eVars: f,
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
                            e.id && (t = [t, e.id].join(':')),
                            e.value && (t = [t, e.value].join('=')),
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
                    var i = p(t, r.events || []);
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
                    p = function (e, t) {
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
                    f = function (a) {
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
                      return f(e.libraryCode.trackerVariableName).then(p.bind(null, e));
                    },
                    h = function (e) {
                      if (o[e])
                        return i.logger.info('Found tracker located at: "' + e + '".'), o[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    },
                    g = function (e, t) {
                      return c(e)
                        .then(h.bind(null, t.libraryCode.trackerVariableName))
                        .then(p.bind(null, t));
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
                        (t = e.libraryCode.source), (n = g(t, e));
                        break;
                      case a.REMOTE:
                        (t =
                          'https:' === o.location.protocol
                            ? e.libraryCode.httpsUrl
                            : e.libraryCode.httpUrl),
                          (n = g(t, e));
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
              orgId: 'C5E7148954EA18A10A4C98BC@AdobeOrg',
              customSetup: {
                source: function (e) {
                  function t (e) {
                    (e.eVar19 = e.prop17 = e.getDaysSinceLastVisit('lastVisitDays')),
                      (e.eVar20 = e.prop18 = n()),
                      (e.eVar21 = e.prop19 = e.getNewRepeat()),
                      (e.eVar23 = e.prop21 = e.getVisitNum()),
                      (e.eVar24 = e.prop22 = e.getTimeParting('n', '-7')),
                      (e.eVar25 = e.prop24 = e.getPreviousValue(e.pageName, 's_ppn')),
                      (e.eVar22 = e.prop20 = e.getPercentPageViewed()),
                      (e.prop24 && 'no value' != e.prop24) || (e.eVar22 = e.prop20 = '');
                  }
                  function n () {
                    if (!window.s_loadT) {
                      var e = new Date().getTime(),
                        t = window.performance ? performance.timing : 0,
                        n = t ? t.requestStart : window.inHeadTS || 0;
                      s_loadT = n ? Math.round((e - n) / 100) : '';
                    }
                    return s_loadT;
                  }
                  n();
                  var r =
                    decodeURIComponent(
                      document.cookie.replace(
                        new RegExp(
                          '(?:(?:^|.*;)\\s*' +
                            encodeURIComponent('_mkto_trk').replace(/[\-\.\+\*]/g, '\\$&') +
                            '\\s*\\=\\s*([^;]*).*$)|^.*$'
                        ),
                        '$1'
                      )
                    ) || null;
                  r && (e.visitorID = r.substring(r.indexOf('token') + 6, r.length)),
                    _satellite.getVar('Section'),
                    _satellite.getVar('Content Title'),
                    (e.pageName = _satellite.getVar('Page Name')),
                    (e.channel = _satellite.getVar('Site Section Channel'));
                  var a = _satellite.getVar('New Audience'),
                    i = _satellite.getVar('Business Segment'),
                    o = _satellite.getVar('Login Status');
                  if (
                    (-1 < window.location.href.search('mheducation.com/search.html')
                      ? -1 < window.location.href.search('bu=seg')
                        ? (e.eVar52 = 'SEG')
                        : -1 < window.location.href.search('bu=he')
                        ? (e.eVar52 = 'HE')
                        : (e.eVar52 = 'CORP')
                      : -1 < window.location.href.search('mheducation.com/prek-12')
                      ? (e.eVar52 = 'SEG')
                      : -1 < window.location.href.search('mheducation.com/highered')
                      ? (e.eVar52 = 'HE')
                      : (e.eVar52 = 'CORP'),
                    'Logged Out' == o)
                  )
                    (e.prop13 = e.eVar13 = o), (e.prop10 = e.eVar11 = 'Guest');
                  else if (((e.prop13 = e.eVar13 = 'Logged In'), 'NA' != a && 'NA' != i)) {
                    var s = '';
                    'STU' == a
                      ? (s = 'Student')
                      : 'INS' == a
                      ? (s = 'Educator')
                      : 'IND' == a
                      ? (s = 'Individual')
                      : 'HMS' == a
                      ? (s = 'HomeSchooler')
                      : 'TCH' == a
                      ? (s = 'Teacher')
                      : 'ADM' == a && (s = 'Administrator'),
                      (e.prop10 = e.eVar11 = i + ':' + s);
                  }
                  (e._tpDST = {
                    2012: '4/1,10/7',
                    2013: '4/7,10/6',
                    2014: '4/6,10/5',
                    2015: '4/5,10/4',
                    2016: '4/3,10/2',
                    2017: '4/2,10/1',
                    2018: '4/1,10/7',
                    2019: '4/7,10/6',
                    2020: '4/6,10/5',
                  }),
                    (e._tpDST = {
                      2012: '3/11,11/4',
                      2013: '3/10,11/3',
                      2014: '3/9,11/2',
                      2015: '3/8,11/1',
                      2016: '3/13,11/6',
                      2017: '3/12,11/5',
                      2018: '3/11,11/4',
                      2019: '3/10,11/3',
                      2020: '3/9,11/2',
                    }),
                    (e._tpDST = {
                      2012: '3/25,10/28',
                      2013: '3/31,10/27',
                      2014: '3/30,10/26',
                      2015: '3/29,10/25',
                      2016: '3/27,10/30',
                      2017: '3/26,10/29',
                      2018: '3/25,10/28',
                      2019: '3/31,10/27',
                      2020: '3/30,10/26',
                    }),
                    (e.usePlugins = !0),
                    (e.doPlugins = t),
                    (e.getDaysSinceLastVisit = new Function(
                      'c',
                      "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"
                    )),
                    (e.getNewRepeat = new Function(
                      'd',
                      'cn',
                      "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"
                    )),
                    (e.split = new Function(
                      'l',
                      'd',
                      'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                    )),
                    (e.getVisitNum = new Function(
                      "var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}"
                    )),
                    (e.getTimeParting = new Function(
                      'h',
                      'z',
                      "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"
                    )),
                    (e.getPreviousValue = new Function(
                      'v',
                      'c',
                      'el',
                      "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
                    )),
                    (e.split = new Function(
                      'l',
                      'd',
                      'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                    )),
                    (e.getPercentPageViewed = new Function(
                      'n',
                      "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a"
                    ));
                },
              },
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/EXfd1765a309af4aa9a584caebbde5c401-libraryCode_source.min.js',
                accounts: {
                  staging: ['mcghillshopdev'],
                  production: ['mcghillshopprod', 'mcghillglobal'],
                },
                trackerVariableName: 's',
              },
              trackerProperties: {
                eVars: [
                  { name: 'eVar8', type: 'value', value: '%Site Section (Second Path Name)%' },
                  { name: 'eVar10', type: 'value', value: '%Content Title%' },
                  { name: 'eVar58', type: 'value', value: '%Content Date%' },
                ],
                props: [
                  { name: 'prop1', type: 'value', value: '%URL Pathname%' },
                  { name: 'prop7', type: 'alias', value: 'eVar8' },
                  { name: 'prop9', type: 'alias', value: 'eVar10' },
                  { name: 'prop25', type: 'value', value: 'en_us' },
                ],
                campaign: { type: 'queryParam', value: 'cid' },
                currencyCode: 'USD',
                trackingServer: 'mcgrawhill.sc.omtrdc.net',
                trackInlineStats: !0,
                trackDownloadLinks: !1,
                trackExternalLinks: !1,
                trackingServerSecure: 'mcgrawhill.sc.omtrdc.net',
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP308220a2a4c4403f97fc1960100db40f/',
          },
          'adobe-target-v2': {
            displayName: 'Adobe Target v2',
            modules: {
              'adobe-target-v2/lib/loadTarget.js': {
                name: 'load-target',
                displayName: 'Load Target',
                script: function (e, t, n, r) {
                  'use strict';
                  function a (n, e) {
                    return new c(function (t) {
                      n
                        ? e.then(function (e) {
                            e && (n.abort = !0), t();
                          })
                        : t();
                    });
                  }
                  function i (e) {
                    if (e) {
                      var t = new c(function (t) {
                        var n = setTimeout(function () {
                            t(!1);
                          }, b.targetSettings.timeout),
                          r = function r (e) {
                            e.detail && !0 === e.detail.redirect ? t(!0) : t(!1),
                              clearTimeout(n),
                              m(s, e, r);
                          },
                          a = function a (e) {
                            t(!1), clearTimeout(n), m(s, e, a);
                          };
                        f(s, k, r), f(s, C, a);
                      });
                      e(function (e) {
                        return a(e, t);
                      });
                    }
                  }
                  var o = n('@adobe/reactor-window'),
                    s = n('@adobe/reactor-document'),
                    c = n('@adobe/reactor-promise'),
                    u = n('./modules/load-target'),
                    l = u.initLibrarySettings,
                    d = u.overridePublicApi,
                    p = n('./modules/event-util'),
                    f = p.addEventListener,
                    m = p.removeEventListener,
                    h = n('./modules/optin'),
                    g = h.shouldUseOptIn,
                    v = h.isTargetApproved,
                    b = n('./targetSettings').extensionSettings,
                    y = r.getSharedModule('adobe-analytics', 'augment-tracker'),
                    k = 'at-request-succeeded',
                    C = 'at-request-failed';
                  e.exports = function () {
                    var e = l();
                    e && e.enabled
                      ? ((0, n('./modules/libs/at-launch').init)(o, s, e), (g() && !v()) || i(y))
                      : d(o);
                  };
                },
              },
              'adobe-target-v2/lib/firePageLoad.js': {
                name: 'fire-page-load',
                displayName: 'Fire Page Load Request',
                script: function (e, t, n, r) {
                  'use strict';
                  function a () {
                    return i.adobe && i.adobe.target && i.adobe.target.VERSION;
                  }
                  var i = n('@adobe/reactor-window'),
                    o = n('./modules/libs/at-launch'),
                    s = o.initConfig,
                    c = o.initDelivery,
                    u = n('./modules/page-load'),
                    l = n('./messages');
                  e.exports = function (e) {
                    var t = u(e);
                    a() ? (s(t), c()) : i.console && r.logger.warn(l.NO_REQUEST);
                  };
                },
              },
              'adobe-target-v2/lib/modules/load-target.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  function a (e) {
                    var t = e.compatMode,
                      n = e.documentMode;
                    return t && 'CSS1Compat' === t && (!n || 9 <= n);
                  }
                  function i (e) {
                    var t = function t () {},
                      n = function n () {
                        return l.resolve();
                      };
                    (e.adobe = e.adobe || {}),
                      (e.adobe.target = {
                        VERSION: '',
                        event: {},
                        getOffer: t,
                        getOffers: n,
                        applyOffer: t,
                        applyOffers: n,
                        sendNotifications: t,
                        trackEvent: t,
                        triggerView: t,
                        registerExtension: t,
                        init: t,
                      }),
                      (e.mboxCreate = t),
                      (e.mboxDefine = t),
                      (e.mboxUpdate = t);
                  }
                  function o () {
                    return (
                      c.adobe && c.adobe.target && 'undefined' != typeof c.adobe.target.getOffer
                    );
                  }
                  function s () {
                    return o()
                      ? (r.logger.warn(d.ALREADY_INITIALIZED), null)
                      : ((h.mboxParams = f()),
                        (h.globalMboxParams = m()),
                        g(h, c.targetGlobalSettings || {}, b),
                        g(h, v || {}, ['version']),
                        a(u) || ((h.enabled = !1), r.logger.warn(d.DELIVERY_DISABLED)),
                        h);
                  }
                  var c = n('@adobe/reactor-window'),
                    u = n('@adobe/reactor-document'),
                    l = n('@adobe/reactor-promise'),
                    d = n('../messages'),
                    p = n('./params-store'),
                    f = p.getParams,
                    m = p.getPageLoadParams,
                    h = n('../targetSettings').targetSettings,
                    g = n('./object-override'),
                    v = n('../librarySettings').TARGET_DEFAULT_SETTINGS,
                    b = [
                      'enabled',
                      'clientCode',
                      'imsOrgId',
                      'serverDomain',
                      'cookieDomain',
                      'timeout',
                      'defaultContentHiddenStyle',
                      'defaultContentVisibleStyle',
                      'bodyHiddenStyle',
                      'bodyHidingEnabled',
                      'selectorsPollingTimeout',
                      'visitorApiTimeout',
                      'overrideMboxEdgeServer',
                      'overrideMboxEdgeServerTimeout',
                      'optoutEnabled',
                      'optinEnabled',
                      'secureOnly',
                      'supplementalDataIdParamTimeout',
                      'authoringScriptUrl',
                      'urlSizeLimit',
                      'endpoint',
                      'pageLoadEnabled',
                      'viewsEnabled',
                      'analyticsLogging',
                      'serverState',
                      'globalMboxName',
                    ];
                  e.exports = { initLibrarySettings: s, overridePublicApi: i };
                },
              },
              'adobe-target-v2/lib/modules/event-util.js': {
                script: function (e) {
                  'use strict';
                  function t (e, t, n) {
                    e.addEventListener(t, n);
                  }
                  function n (e, t, n) {
                    e.removeEventListener(t, n);
                  }
                  e.exports = { addEventListener: t, removeEventListener: n };
                },
              },
              'adobe-target-v2/lib/modules/optin.js': {
                script: function (e, t, n) {
                  'use strict';
                  function r (e) {
                    return 'undefined' === (void 0 === e ? 'undefined' : l(e)) || null === e;
                  }
                  function a (e) {
                    var t = void 0 === e ? 'undefined' : l(e);
                    return null !== e && ('object' === t || 'function' === t);
                  }
                  function i (e) {
                    return a(e[h]) && a(e[p]);
                  }
                  function o (e, t) {
                    return !!t && !r(e) && !r(e[m]) && i(e[m]);
                  }
                  function s (e, t) {
                    return e[p](t);
                  }
                  function c () {
                    var e = d[m];
                    return s(e, e[g][v]);
                  }
                  function u () {
                    var e = b[f];
                    return o(d, e);
                  }
                  var l =
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
                          },
                    d = n('@adobe/reactor-window').adobe,
                    p = 'isApproved',
                    f = 'optinEnabled',
                    m = 'optIn',
                    h = 'fetchPermissions',
                    g = 'Categories',
                    v = 'TARGET',
                    b = n('../targetSettings').targetSettings;
                  e.exports = { shouldUseOptIn: u, isTargetApproved: c };
                },
              },
              'adobe-target-v2/lib/targetSettings.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = r.getExtensionSettings(),
                    i = a.targetSettings || {};
                  e.exports = { extensionSettings: a, targetSettings: i };
                },
              },
              'adobe-target-v2/lib/modules/libs/at-launch.js': {
                script: function (e, t, n) {
                  'use strict';
                  function r (e) {
                    return e && 'object' == typeof e && 'default' in e ? e['default'] : e;
                  }
                  function o (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : 0;
                    return setTimeout(e, Number(n) || 0);
                  }
                  function i (e) {
                    clearTimeout(e);
                  }
                  function m (e) {
                    return null == e;
                  }
                  function a (e) {
                    return ml.call(e);
                  }
                  function s (e) {
                    return a(e);
                  }
                  function tt (e) {
                    return (tt =
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
                  function c (e, t, n) {
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
                  function d (e) {
                    var t = tt(e);
                    return null != e && ('object' === t || 'function' === t);
                  }
                  function u (e) {
                    return !!d(e) && s(e) === hl;
                  }
                  function l (e) {
                    return e;
                  }
                  function p (e) {
                    return u(e) ? e : l;
                  }
                  function f (e) {
                    return m(e) ? [] : Object.keys(e);
                  }
                  function h (e, t) {
                    return m(t) ? [] : (fl(t) ? bl : yl)(p(e), t);
                  }
                  function g (e) {
                    return e && e.length ? e[0] : undefined;
                  }
                  function v (e) {
                    return m(e) ? [] : [].concat.apply([], e);
                  }
                  function b (i) {
                    for (var o = this, s = i ? i.length : 0, e = s; (e -= 1); )
                      if (!u(i[e])) throw new TypeError('Expected a function');
                    return function () {
                      for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                      for (var a = s ? i[e].apply(o, n) : n[0]; (e += 1) < s; )
                        a = i[e].call(o, a);
                      return a;
                    };
                  }
                  function y (e, t) {
                    m(t) || (fl(t) ? gl : vl)(p(e), t);
                  }
                  function k (e) {
                    return null != e && 'object' === tt(e);
                  }
                  function C (e) {
                    return 'string' == typeof e || (!fl(e) && k(e) && s(e) === kl);
                  }
                  function S (e) {
                    if (!C(e)) return -1;
                    for (var t = 0, n = e.length, r = 0; r < n; r += 1)
                      t = ((t << 5) - t + e.charCodeAt(r)) & 4294967295;
                    return t;
                  }
                  function M (e) {
                    return 'number' == typeof e && -1 < e && e % 1 == 0 && e <= Cl;
                  }
                  function w (e) {
                    return null != e && M(e.length) && !u(e);
                  }
                  function P (e, t) {
                    return Sl(function (e) {
                      return t[e];
                    }, e);
                  }
                  function I (e) {
                    for (var t = 0, n = e.length, r = Array(n); t < n; ) (r[t] = e[t]), (t += 1);
                    return r;
                  }
                  function x (e) {
                    return e.split('');
                  }
                  function E (e) {
                    return m(e) ? [] : w(e) ? (C(e) ? x(e) : I(e)) : P(f(e), e);
                  }
                  function j (e) {
                    if (null == e) return !0;
                    if (w(e) && (fl(e) || C(e) || u(e.splice))) return !e.length;
                    for (var t in e) if (Ml.call(e, t)) return !1;
                    return !0;
                  }
                  function A (e) {
                    return m(e) ? '' : wl.call(e);
                  }
                  function _ (e) {
                    return C(e) ? !A(e) : j(e);
                  }
                  function T (e) {
                    return Object.getPrototypeOf(Object(e));
                  }
                  function O (e) {
                    if (!k(e) || s(e) !== Pl) return !1;
                    var t = T(e);
                    if (null === t) return !0;
                    var n = jl.call(t, 'constructor') && t.constructor;
                    return 'function' == typeof n && n instanceof n && El.call(n) === Al;
                  }
                  function D (e) {
                    return k(e) && 1 === e.nodeType && !O(e);
                  }
                  function R (e) {
                    return 'number' == typeof e || (k(e) && s(e) === Tl);
                  }
                  function V (e, t) {
                    return fl(t) ? t.join(e || '') : '';
                  }
                  function N (e, t) {
                    return m(t) ? [] : (fl(t) ? Sl : Ol)(p(e), t);
                  }
                  function L () {}
                  function F () {
                    return new Date().getTime();
                  }
                  function B (e, t, n) {
                    return m(n) ? t : (fl(n) ? Dl : Rl)(p(e), t, n);
                  }
                  function U (e) {
                    return null == e ? e : Vl.call(e);
                  }
                  function H (e, t) {
                    return _(t) ? [] : t.split(e || '');
                  }
                  function q (e, t) {
                    return e + Math.floor(Math.random() * (t - e + 1));
                  }
                  function G () {
                    var n = F();
                    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                      var t = (n + q(0, 16)) % 16 | 0;
                      return (n = Math.floor(n / 16)), ('x' === e ? t : (3 & t) | 8).toString(16);
                    });
                  }
                  function z (t, n) {
                    t[Fp] &&
                      (m(n[zp]) || (t[Pf] = n[zp]),
                      y(function (e) {
                        m(n[e]) || (t[e] = n[e]);
                      }, um));
                  }
                  function Q (e) {
                    var t = e.documentMode;
                    return !t || 10 <= t;
                  }
                  function K (e) {
                    var t = e.compatMode;
                    return t && 'CSS1Compat' === t;
                  }
                  function W (e) {
                    return om.test(e);
                  }
                  function Y (e) {
                    if (W(e)) return e;
                    var t = U(H('.', e)),
                      n = t.length;
                    return 3 <= n && sm.test(t[1])
                      ? t[2] + '.' + t[1] + '.' + t[0]
                      : 1 === n
                      ? t[0]
                      : t[1] + '.' + t[0];
                  }
                  function J (e, t, n) {
                    var r = '';
                    e.location.protocol === im || (r = Y(e.location.hostname)),
                      (n[cf] = r),
                      (n[Fp] = K(t) && Q(t)),
                      z(n, e[kf] || {});
                  }
                  function X (e) {
                    J(ol, sl, e);
                    var t = ol.location.protocol === im;
                    ((cm = cl({}, e))[Jp] = e[Jp] / 1000),
                      (cm[Xp] = e[Xp] / 1000),
                      (cm[sf] = cm[rf] || t ? 'https:' : '');
                  }
                  function nt () {
                    return cm;
                  }
                  function Z (e) {
                    try {
                      return dm(e);
                    } catch (t) {
                      return {};
                    }
                  }
                  function $ (e) {
                    try {
                      return pm(e);
                    } catch (t) {
                      return '';
                    }
                  }
                  function ee (e) {
                    try {
                      return decodeURIComponent(e);
                    } catch (t) {
                      return e;
                    }
                  }
                  function te (e) {
                    try {
                      return encodeURIComponent(e);
                    } catch (t) {
                      return e;
                    }
                  }
                  function ne (e) {
                    if (mm[e]) return mm[e];
                    fm.href = e;
                    var t = lm(fm.href);
                    return (t.queryKey = Z(t.query)), (mm[e] = t), mm[e];
                  }
                  function re (e, t, n) {
                    return { name: e, value: t, expires: n };
                  }
                  function ae (e) {
                    var t = H('#', e);
                    return j(t) || t.length < 3
                      ? null
                      : isNaN(parseInt(t[2], 10))
                      ? null
                      : re(ee(t[0]), ee(t[1]), Number(t[2]));
                  }
                  function ie (e) {
                    return _(e) ? [] : H('|', e);
                  }
                  function oe () {
                    var e = N(ae, ie(hm(bm))),
                      t = Math.ceil(F() / 1000),
                      n = function n (e) {
                        return d(e) && t <= e.expires;
                      };
                    return B(
                      function (e, t) {
                        return (e[t.name] = t), e;
                      },
                      {},
                      h(n, e)
                    );
                  }
                  function se (e) {
                    var t = oe()[e];
                    return d(t) ? t.value : '';
                  }
                  function ce (e) {
                    return V('#', [te(e.name), te(e.value), e.expires]);
                  }
                  function ue (e) {
                    return e.expires;
                  }
                  function le (e) {
                    var t = N(ue, e);
                    return Math.max.apply(null, t);
                  }
                  function de (e, t) {
                    var n = E(e),
                      r = Math.abs(1000 * le(n) - F()),
                      a = V('|', N(ce, n)),
                      i = new Date(F() + r);
                    gm(bm, a, { domain: t, expires: i });
                  }
                  function pe (e) {
                    var t = e.name,
                      n = e.value,
                      r = e.expires,
                      a = e.domain,
                      i = oe();
                    (i[t] = re(t, n, Math.ceil(r + F() / 1000))), de(i, a);
                  }
                  function fe (e) {
                    return _l(hm(e));
                  }
                  function me (e, t) {
                    var n = Z(e.location.search);
                    return _l(n[t]);
                  }
                  function he (e, t) {
                    var n = ne(e.referrer).queryKey;
                    return !m(n) && _l(n[t]);
                  }
                  function ge (e, t, n) {
                    return fe(n) || me(e, n) || he(t, n);
                  }
                  function ve () {
                    var e = nt()[cf];
                    gm(kd, Cd, { domain: e });
                    var t = hm(kd) === Cd;
                    return vm(kd), t;
                  }
                  function be () {
                    return ge(ol, sl, bd);
                  }
                  function ye () {
                    return nt()[Fp] && ve() && !be();
                  }
                  function ke () {
                    return ge(ol, sl, vd);
                  }
                  function Ce () {
                    return ge(ol, sl, yd);
                  }
                  function Se (e, t) {
                    var n = e.console;
                    return !m(n) && u(n[t]);
                  }
                  function Me (e, t) {
                    var n = e.console;
                    Se(e, 'warn') && n.warn.apply(n, [ym].concat(t));
                  }
                  function we (e, t) {
                    var n = e.console;
                    Se(e, 'debug') && ke() && n.debug.apply(n, [ym].concat(t));
                  }
                  function Pe () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                    Me(ol, t);
                  }
                  function Ie () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                    we(ol, t);
                  }
                  function xe (n) {
                    return B(
                      function (e, t) {
                        return (e[t] = n[t]), e;
                      },
                      {},
                      um
                    );
                  }
                  function Ee (e, t, n) {
                    var r = e[yf] || [];
                    if (((e[yf] = r), n)) {
                      var a = r.push;
                      (r[Qp] = km),
                        (r[gf] = xe(t)),
                        (r[vf] = []),
                        (r[bf] = []),
                        (r.push = function i (e) {
                          r[bf].push(cl({ timestamp: F() }, e)), a.call(this, e);
                        });
                    }
                  }
                  function je (e, t, n, r) {
                    t === bf && e[yf].push(n),
                      r && t !== bf && e[yf][t].push(cl({ timestamp: F() }, n));
                  }
                  function Ae () {
                    Ee(ol, nt(), ke());
                  }
                  function _e (e) {
                    je(ol, bf, e, ke());
                  }
                  function Te (e) {
                    je(ol, vf, e, ke());
                  }
                  function Oe () {
                    return u(Sm);
                  }
                  function De (e) {
                    return new Sm(e);
                  }
                  function Re () {
                    var e = sl.createTextNode(''),
                      t = function t () {
                        e.textContent = 0 < e.textContent.length ? '' : 'a';
                      },
                      n = [];
                    return (
                      De(function () {
                        for (var e = n.length, t = 0; t < e; t += 1) n[t]();
                        n.splice(0, e);
                      }).observe(e, { characterData: !0 }),
                      function (e) {
                        n.push(e), t();
                      }
                    );
                  }
                  function Ve () {
                    return function (e) {
                      var t = Cm('<script>');
                      t.on('readystatechange', function () {
                        t.on('readystatechange', null), t.remove(), (t = null), e();
                      }),
                        Cm(sl.documentElement).append(t);
                    };
                  }
                  function Ne () {
                    Oe()
                      ? dl._setImmediateFn(Re())
                      : -1 !== ol.navigator.userAgent.indexOf('MSIE 10') &&
                        dl._setImmediateFn(Ve());
                  }
                  function Le (e) {
                    return new dl(e);
                  }
                  function Fe (e) {
                    return dl.resolve(e);
                  }
                  function Be (e) {
                    return dl.reject(e);
                  }
                  function Ue (e) {
                    return fl(e) ? dl.race(e) : Be(new TypeError(Mm));
                  }
                  function He (e) {
                    return fl(e) ? dl.all(e) : Be(new TypeError(Mm));
                  }
                  function qe (e, n, r) {
                    var a = -1;
                    return Ue([
                      e,
                      Le(function (e, t) {
                        a = o(function () {
                          return t(new Error(r));
                        }, n);
                      }),
                    ]).then(
                      function (e) {
                        return i(a), e;
                      },
                      function (e) {
                        throw (i(a), e);
                      }
                    );
                  }
                  function Ge (e) {
                    if (m(e[qf])) return !1;
                    var t = e[qf];
                    if (m(t[Gf])) return !1;
                    var n = t[Gf];
                    return u(n[Qf]) && u(n[zf]);
                  }
                  function ze (e, t) {
                    return !!t && Ge(e);
                  }
                  function Qe (e, t) {
                    if (!Ge(e)) return !0;
                    var n = e[qf][Gf],
                      r = (e[qf][Gf][Kf] || {})[t];
                    return n[zf](r);
                  }
                  function Ke (e, t) {
                    if (!Ge(e)) return Fe(!0);
                    var n = e[qf][Gf],
                      r = (e[qf][Gf][Kf] || {})[t];
                    return Le(function (e, t) {
                      n[Qf](function () {
                        n[zf](r) ? e(!0) : t(Xf);
                      }, !0);
                    });
                  }
                  function We () {
                    var e = nt()[Jf];
                    return ze(ol, e);
                  }
                  function Ye () {
                    return Qe(ol, Wf);
                  }
                  function Je () {
                    return Qe(ol, Yf);
                  }
                  function Xe () {
                    return Ke(ol, Wf);
                  }
                  function Ze () {
                    return Z(ol.location.search)[df];
                  }
                  function $e (e, t) {
                    pe({ name: mf, value: e, expires: t[Xp], domain: t[cf] });
                  }
                  function et () {
                    if (We() && !Ye()) return wm;
                    var e = nt(),
                      t = Ze();
                    return _l(t) ? $e(t, e) : _(se(mf)) && $e(wm, e), se(mf);
                  }
                  function rt (e) {
                    var t = nt();
                    pe({ name: pf, value: e, expires: t[Jp], domain: t[cf] });
                  }
                  function at () {
                    return se(pf);
                  }
                  function it (e) {
                    if (_(e)) return '';
                    var t = Pm.exec(e);
                    return j(t) || 2 !== t.length ? '' : t[1];
                  }
                  function ot () {
                    if (!nt()[ef]) return '';
                    var e = hm(ff);
                    return _(e) ? '' : e;
                  }
                  function st (e) {
                    var t = nt();
                    if (t[ef]) {
                      var n = t[cf],
                        r = new Date(F() + t[tf]),
                        a = hm(ff),
                        i = { domain: n, expires: r };
                      if (_l(a)) gm(ff, a, i);
                      else {
                        var o = it(e);
                        _(o) || gm(ff, o, i);
                      }
                    }
                  }
                  function ct (e, r) {
                    function t (e, t) {
                      var n = r.createEvent('CustomEvent');
                      return (
                        (t = t || { bubbles: !1, cancelable: !1, detail: undefined }),
                        n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                        n
                      );
                    }
                    u(e.CustomEvent) || ((t.prototype = e.Event.prototype), (e.CustomEvent = t));
                  }
                  function ut (e, t) {
                    var n = e(),
                      r = t(),
                      a = {};
                    return (a.sessionId = n), _l(r) && (a.deviceId = r), a;
                  }
                  function lt (e, t, n, r) {
                    var a = new e.CustomEvent(n, { detail: r });
                    t.dispatchEvent(a);
                  }
                  function dt (e, t) {
                    var n = t.mbox,
                      r = t.error,
                      a = t.url,
                      i = t.analyticsDetails,
                      o = t.responseTokens,
                      s = t.execution,
                      c = { type: e, tracking: ut(et, at) };
                    return (
                      m(n) || (c.mbox = n),
                      m(r) || (c.error = r),
                      m(a) || (c.url = a),
                      j(i) || (c.analyticsDetails = i),
                      j(o) || (c.responseTokens = o),
                      j(s) || (c.execution = s),
                      c
                    );
                  }
                  function pt () {
                    var e = dt(Im, {});
                    lt(ol, sl, Im, e);
                  }
                  function ft (e) {
                    var t = dt(xm, e);
                    lt(ol, sl, xm, t);
                  }
                  function mt (e, t) {
                    var n = dt(Em, e);
                    (n.redirect = t), lt(ol, sl, Em, n);
                  }
                  function ht (e) {
                    var t = dt(jm, e);
                    lt(ol, sl, jm, t);
                  }
                  function gt (e) {
                    var t = dt(Am, e);
                    lt(ol, sl, Am, t);
                  }
                  function vt (e) {
                    var t = dt(_m, e);
                    lt(ol, sl, _m, t);
                  }
                  function bt (e) {
                    var t = dt(Tm, e);
                    lt(ol, sl, Tm, t);
                  }
                  function yt (e) {
                    var t = dt(Om, e);
                    lt(ol, sl, Om, t);
                  }
                  function kt (e) {
                    var t = dt(Dm, e);
                    lt(ol, sl, Dm, t);
                  }
                  function Ct (e) {
                    var t = e.charAt(0),
                      n = e.charAt(1),
                      r = e.charAt(2),
                      a = { key: e };
                    return (
                      (a.val = '-' === n ? '' + t + n + '\\3' + r + ' ' : t + '\\3' + n + ' '), a
                    );
                  }
                  function St (e) {
                    var t = e.match(Lm);
                    return j(t)
                      ? e
                      : B(
                          function (e, t) {
                            return e.replace(t.key, t.val);
                          },
                          e,
                          N(Ct, t)
                        );
                  }
                  function Mt (e) {
                    for (var t, n, r, a, i = [], o = A(e), s = o.indexOf(Rm); -1 !== s; )
                      (t = A(o.substring(0, s))),
                        (a = (n = A(o.substring(s))).indexOf(Vm)),
                        (r = A(n.substring(Nm, a))),
                        (s = (o = A(n.substring(a + 1))).indexOf(Rm)),
                        t && r && i.push({ sel: t, eq: Number(r) });
                    return o && i.push({ sel: o }), i;
                  }
                  function wt (e) {
                    if (D(e)) return Cm(e);
                    if (!C(e)) return Cm(e);
                    var t = St(e);
                    if (-1 === t.indexOf(Rm)) return Cm(t);
                    var n = Mt(t);
                    return B(
                      function (e, t) {
                        var n = t.sel,
                          r = t.eq;
                        return (e = e.find(n)), R(r) && (e = e.eq(r)), e;
                      },
                      Cm(sl),
                      n
                    );
                  }
                  function Pt (e) {
                    return 0 < wt(e).length;
                  }
                  function It (e) {
                    return Cm('<' + Nd + '/>').append(e);
                  }
                  function xt (e) {
                    return Cm(e);
                  }
                  function Et (e) {
                    return wt(e).prev();
                  }
                  function jt (e) {
                    return wt(e).next();
                  }
                  function At (e) {
                    return wt(e).parent();
                  }
                  function _t (e, t) {
                    return wt(t).is(e);
                  }
                  function Tt (e, t) {
                    return wt(t).find(e);
                  }
                  function Ot (e) {
                    return wt(e).children();
                  }
                  function Dt () {
                    (ol[Um] = ol[Um] || {}), (ol[Um].querySelectorAll = wt);
                  }
                  function Rt (e) {
                    if (Ce()) {
                      var t = e[Df];
                      ol[Um][qm] = t;
                    }
                  }
                  function Vt () {
                    sl.addEventListener(
                      _d,
                      function (e) {
                        u(ol[Um][Hm]) && ol[Um][Hm](e);
                      },
                      !0
                    );
                  }
                  function Nt () {
                    if (Ce()) {
                      Dt();
                      var e = nt()[of],
                        t = function t () {
                          return Vt();
                        },
                        n = function n () {
                          return Pe(Fm);
                        };
                      Ie(Bm), pl(e).then(t)['catch'](n);
                    }
                  }
                  function Lt (e) {
                    return wt(e).empty().remove();
                  }
                  function Ft (e, t) {
                    return wt(t).after(e);
                  }
                  function Bt (e, t) {
                    return wt(t).before(e);
                  }
                  function Ut (e, t) {
                    return wt(t).append(e);
                  }
                  function Ht (e, t) {
                    return wt(t).prepend(e);
                  }
                  function qt (e, t) {
                    return wt(t).html(e);
                  }
                  function Gt (e) {
                    return wt(e).html();
                  }
                  function zt (e, t) {
                    return wt(t).text(e);
                  }
                  function Qt (e, t) {
                    return (
                      '<' +
                      Dd +
                      ' ' +
                      jd +
                      '="' +
                      e +
                      '" ' +
                      Ad +
                      '="' +
                      Vp +
                      '">' +
                      t +
                      '</' +
                      Dd +
                      '>'
                    );
                  }
                  function Kt (e, t) {
                    return Qt(Gm + S(t), t + ' {' + e + '}');
                  }
                  function Wt (e, t) {
                    return Qt(Km, t + ' {' + e + '}');
                  }
                  function Yt (e) {
                    if (!0 === e[Yp] && !Pt(Qm)) {
                      var t = e[Wp];
                      Ut(Qt(zm, t), Td);
                    }
                  }
                  function Jt (e) {
                    !0 === e[Yp] && Pt(Qm) && Lt(Qm);
                  }
                  function Xt (e, t) {
                    if (!j(t)) {
                      var n = function n (e) {
                          return !Pt('#' + (Gm + S(e)));
                        },
                        r = h(n, t);
                      if (!j(r)) {
                        var a = e[Kp],
                          i = function i (e) {
                            return Kt(a, e);
                          };
                        Ut(V('\n', N(i, r)), Td);
                      }
                    }
                  }
                  function Zt (e, t) {
                    j(t) || Pt('#' + Km) || Ut(Wt(e[Kp], V(', ', t)), Td);
                  }
                  function $t () {
                    Yt(nt());
                  }
                  function en () {
                    Jt(nt());
                  }
                  function tn (e) {
                    Xt(nt(), e);
                  }
                  function nn (e) {
                    Zt(nt(), e);
                  }
                  function rn (e) {
                    Lt('#' + (Gm + S(e)));
                  }
                  function an () {
                    var e = '#' + Km;
                    Pt(e) && Lt(e);
                  }
                  function on (e) {
                    return parseInt(e, 10);
                  }
                  function sn (e) {
                    var t = on(e);
                    return isNaN(t) ? null : t;
                  }
                  function cn (e) {
                    return H(eh, e);
                  }
                  function un (e) {
                    var t = H(eh, e),
                      n = sn(t[0]);
                    if (m(n)) return null;
                    var r = {};
                    r.activityIndex = n;
                    var a = sn(t[1]);
                    return m(a) || (r.experienceIndex = a), r;
                  }
                  function ln (e) {
                    return h(th, N(un, e));
                  }
                  function dn (e) {
                    return fl(e) ? ln(e) : ln([e]);
                  }
                  function pn (e) {
                    var t = Z(e),
                      n = t[Ym];
                    if (_(n)) return null;
                    var r = {};
                    r.token = n;
                    var a = t[Xm];
                    _l(a) && a === Cd && (r.listedActivitiesOnly = !0);
                    var i = t[Zm];
                    _l(i) && (r.evaluateAsTrueAudienceIds = cn(i));
                    var o = t[$m];
                    _l(o) && (r.evaluateAsFalseAudienceIds = cn(o));
                    var s = t[Jm];
                    return j(s) || (r.previewIndexes = dn(s)), r;
                  }
                  function fn (e) {
                    var t = pn(e.location.search);
                    if (!m(t)) {
                      var n = new Date(F() + 1860000);
                      gm(Wm, JSON.stringify(t), { expires: n });
                    }
                  }
                  function mn () {
                    var e = hm(Wm);
                    if (_(e)) return {};
                    try {
                      return JSON.parse(e);
                    } catch (t) {
                      return {};
                    }
                  }
                  function hn (e) {
                    return !m(e[jd]);
                  }
                  function gn (e) {
                    return !m(e[If]);
                  }
                  function vn (e) {
                    switch (e) {
                      case 0:
                        return 'unknown';
                      case 1:
                        return 'authenticated';
                      case 2:
                        return 'logged_out';
                      default:
                        return 'unknown';
                    }
                  }
                  function bn (e) {
                    return hn(e) || gn(e);
                  }
                  function yn (e) {
                    if (m(e)) return [];
                    if (!u(e[ch])) return [];
                    var t = e[ch]();
                    return d(t)
                      ? B(
                          function (e, t, n) {
                            var r = {};
                            return (
                              (r[Ef] = n),
                              hn(t) && (r[jd] = t[jd]),
                              gn(t) && (r[xf] = vn(t[If])),
                              e.push(r),
                              e
                            );
                          },
                          [],
                          h(bn, t)
                        )
                      : [];
                  }
                  function kn (e, t) {
                    return m(e) ? null : u(e[sh]) ? e[sh](t) : null;
                  }
                  function Cn (e, t) {
                    if (m(e)) return null;
                    var n = e[t];
                    return m(n) ? null : n;
                  }
                  function Sn (e, t, n) {
                    if (_(t)) return null;
                    if (m(e[dh])) return null;
                    if (!u(e[dh][ph])) return null;
                    var r = e[dh][ph](t, { sdidParamExpiry: n });
                    return d(r) && u(r[fh]) && r[fh]() ? r : null;
                  }
                  function Mn (e, t) {
                    if (!u(e.getVisitorValues)) return Fe({});
                    var n = [ih, rh, ah];
                    return (
                      t && n.push(oh),
                      Le(function (t) {
                        e.getVisitorValues(function (e) {
                          return t(e);
                        }, n);
                      })
                    );
                  }
                  function wn (e) {
                    return Ie(hh, e), {};
                  }
                  function Pn (e, t, n) {
                    return m(e) ? Fe({}) : qe(Mn(e, n), t, mh)['catch'](wn);
                  }
                  function In (e, t) {
                    if (!u(e.getVisitorValues)) return {};
                    var n = [ih, rh, ah];
                    t && n.push(oh);
                    var r = {};
                    return (
                      e.getVisitorValues(function (e) {
                        return cl(r, e);
                      }, n),
                      r
                    );
                  }
                  function xn (e, t) {
                    return m(e) ? {} : In(e, t);
                  }
                  function En () {
                    var e = nt(),
                      t = e[Up],
                      n = e[af];
                    return Sn(ol, t, n);
                  }
                  function jn () {
                    var e = En(),
                      t = nt();
                    return Pn(e, t[$p], t[nf]);
                  }
                  function An () {
                    return xn(En(), nt()[nf]);
                  }
                  function _n () {
                    return yn(En());
                  }
                  function Tn (e) {
                    return kn(En(), e);
                  }
                  function On (e) {
                    return Cn(En(), e);
                  }
                  function Dn (e, t) {
                    gh[e] = t;
                  }
                  function Rn (e) {
                    return gh[e];
                  }
                  function Vn (e) {
                    var t = e[kf];
                    if (m(t)) return !1;
                    var n = t[Sf];
                    return !(!fl(n) || j(n));
                  }
                  function Nn (e) {
                    var t = e[Ip];
                    if (!C(t) || j(t)) return !1;
                    var n = e[Qp];
                    if (!C(n) || j(n)) return !1;
                    var r = e[qp];
                    return !((!m(r) && !R(r)) || !u(e[Dp]));
                  }
                  function Ln (e) {
                    return Le(function (n, r) {
                      e(function (e, t) {
                        m(e) ? n(t) : r(e);
                      });
                    });
                  }
                  function Fn (e, t, n, r, a, i) {
                    var o = {};
                    (o[e] = t), (o[n] = r), (o[a] = i);
                    var s = {};
                    return (s[Cf] = o), s;
                  }
                  function Bn (e) {
                    var n = e[Ip],
                      r = e[Qp],
                      t = e[qp] || yh;
                    return qe(Ln(e[Dp]), t, bh)
                      .then(function (e) {
                        var t = Fn(Ip, n, Qp, r, Ep, e);
                        return Ie(vh, Cp, t), Te(t), e;
                      })
                      ['catch'](function (e) {
                        var t = Fn(Ip, n, Qp, r, vp, e);
                        return Ie(vh, vp, t), Te(t), {};
                      });
                  }
                  function Un (e) {
                    var t = B(
                      function (e, t) {
                        return cl(e, t);
                      },
                      {},
                      e
                    );
                    return Dn(Sf, t), t;
                  }
                  function Hn (e) {
                    return Vn(e) ? He(N(Bn, h(Nn, e[kf][Sf]))).then(Un) : Fe({});
                  }
                  function qn () {
                    var e = Rn(Sf);
                    return m(e) ? {} : e;
                  }
                  function Gn () {
                    return Hn(ol);
                  }
                  function zn () {
                    return qn();
                  }
                  function Qn (e) {
                    var t = Z(e.location.search)[kh];
                    return _(t) ? null : t;
                  }
                  function Kn () {
                    var e = hm(Ch);
                    return _(e) ? null : e;
                  }
                  function Wn () {
                    var e = Qn(ol),
                      t = Kn();
                    return e || t;
                  }
                  function Yn (e) {
                    return !j(e) && 2 === e.length && _l(e[0]);
                  }
                  function Jn (e) {
                    var t = e.indexOf('=');
                    return -1 === t ? [] : [e.substr(0, t), e.substr(t + 1)];
                  }
                  function Xn (e, n, r, a) {
                    y(function (e, t) {
                      d(e)
                        ? (n.push(t), Xn(e, n, r, a), n.pop())
                        : j(n)
                        ? (r[a(t)] = e)
                        : (r[a(V('.', n.concat(t)))] = e);
                    }, e);
                  }
                  function Zn (e) {
                    return h(function (e, t) {
                      return _l(t);
                    }, Z(e));
                  }
                  function $n (e) {
                    return B(
                      function (e, t) {
                        return (e[ee(A(t[0]))] = ee(A(t[1]))), e;
                      },
                      {},
                      h(
                        Yn,
                        B(
                          function (e, t) {
                            return e.push(Jn(t)), e;
                          },
                          [],
                          h(_l, e)
                        )
                      )
                    );
                  }
                  function er (e, t) {
                    var n = {};
                    return m(t) ? Xn(e, [], n, l) : Xn(e, [], n, t), n;
                  }
                  function tr (e) {
                    if (!u(e)) return {};
                    var t = null;
                    try {
                      t = e();
                    } catch (n) {
                      return {};
                    }
                    return m(t) ? {} : fl(t) ? $n(t) : C(t) && _l(t) ? Zn(t) : d(t) ? er(t) : {};
                  }
                  function nr (e) {
                    return cl({}, e, tr(ol.targetPageParamsAll));
                  }
                  function rr (e) {
                    return cl({}, e, tr(ol.targetPageParams));
                  }
                  function ar (e) {
                    var t = nt(),
                      n = t[Gp],
                      r = t[uf],
                      a = t[lf];
                    return n !== e ? nr(r || {}) : cl(nr(r || {}), rr(a || {}));
                  }
                  function ir () {
                    var e = sl.createElement('canvas'),
                      t = e.getContext('webgl') || e.getContext('experimental-webgl');
                    if (m(t)) return null;
                    var n = t.getExtension('WEBGL_debug_renderer_info');
                    if (m(n)) return null;
                    var r = t.getParameter(n.UNMASKED_RENDERER_WEBGL);
                    return m(r) ? null : r;
                  }
                  function or () {
                    var e = ol.devicePixelRatio;
                    if (!m(e)) return e;
                    e = 1;
                    var t = ol.screen,
                      n = t.systemXDPI,
                      r = t.logicalXDPI;
                    return !m(n) && !m(r) && r < n && (e = n / r), e;
                  }
                  function sr () {
                    var e = ol.screen,
                      t = e.orientation,
                      n = e.width,
                      r = e.height;
                    if (m(t)) return r < n ? 'landscape' : 'portrait';
                    if (m(t.type)) return null;
                    var a = H('-', t.type);
                    if (j(a)) return null;
                    var i = a[0];
                    return m(i) ? null : i;
                  }
                  function cr () {
                    return Sh;
                  }
                  function ur (e) {
                    return e === wh;
                  }
                  function lr (e) {
                    return -1 !== e.indexOf(Mh);
                  }
                  function dr (e) {
                    return e === Ph;
                  }
                  function pr (e) {
                    return e === Ih;
                  }
                  function fr (e) {
                    return e === xh;
                  }
                  function mr (e) {
                    return e === Eh;
                  }
                  function hr (e) {
                    return e === jh;
                  }
                  function gr (e) {
                    return e === Ah;
                  }
                  function vr (e) {
                    return lr(e) || ur(e) || dr(e) || pr(e) || fr(e) || mr(e) || hr(e) || gr(e);
                  }
                  function br (e) {
                    return e.substring(Mh.length);
                  }
                  function yr (e) {
                    return e[wh];
                  }
                  function kr (e) {
                    return e[Ph];
                  }
                  function Cr (e) {
                    return e[Ih];
                  }
                  function Sr (e) {
                    return e[xh];
                  }
                  function Mr (e) {
                    var t = N(A, H(',', e[Eh]));
                    return h(_l, t);
                  }
                  function wr (e) {
                    return e[jh];
                  }
                  function Pr (e) {
                    return e[Ah];
                  }
                  function Ir (e) {
                    return B(
                      function (e, t, n) {
                        return vr(n) || (e[n] = m(t) ? '' : t), e;
                      },
                      {},
                      e
                    );
                  }
                  function xr (e) {
                    return B(
                      function (e, t, n) {
                        if (!lr(n)) return e;
                        var r = br(n);
                        return _(r) || (e[r] = m(t) ? '' : t), e;
                      },
                      {},
                      e
                    );
                  }
                  function Er (a, i, o) {
                    return (
                      (a.onload = function () {
                        var e = 1223 === a.status ? 204 : a.status;
                        if (e < 100 || 599 < e) o(new Error(Th));
                        else {
                          var t;
                          try {
                            t = JSON.parse(a.responseText);
                          } catch (r) {
                            return void o(new Error(Dh));
                          }
                          var n = a.getAllResponseHeaders();
                          i({ status: e, headers: n, response: t });
                        }
                      }),
                      a
                    );
                  }
                  function jr (e, t) {
                    return (
                      (e.onerror = function () {
                        t(new Error(Th));
                      }),
                      e
                    );
                  }
                  function Ar (e, t, n) {
                    return (
                      (e.timeout = t),
                      (e.ontimeout = function () {
                        n(new Error(Oh));
                      }),
                      e
                    );
                  }
                  function _r (n, e) {
                    return (
                      y(
                        function (e, t) {
                          fl(e) &&
                            y(function (e) {
                              n.setRequestHeader(t, e);
                            }, e);
                        },
                        1 < arguments.length && e !== undefined ? arguments[1] : {}
                      ),
                      n
                    );
                  }
                  function Tr (e) {
                    var r = e.url,
                      a = e.headers,
                      i = e.body,
                      o = e.timeout,
                      s = e.async;
                    return Le(function (e, t) {
                      const $___old_0188e1cd136216cb = {}.constructor.getOwnPropertyDescriptor(
                          window,
                          'XMLHttpRequest'
                        ),
                        $___old_73ee42edb2ad7f1d = {}.constructor.getOwnPropertyDescriptor(
                          window,
                          'XMLHttpRequest'
                        );
                      try {
                        if ($___old_0188e1cd136216cb)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___stub_afd3abb015d4d981.XMLHttpRequest
                          ));
                        if ($___old_73ee42edb2ad7f1d)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___stub_afd3abb015d4d981.XMLHttpRequest
                          ));
                        return function () {
                          var n = new window.XMLHttpRequest();
                          (n = jr((n = Er(n, e, t)), t)).open(_h, r, s),
                            (n.withCredentials = !0),
                            (n = _r(n, a)),
                            s && (n = Ar(n, o, t)),
                            n.send(JSON.stringify(i));
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_0188e1cd136216cb)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___old_0188e1cd136216cb
                          ));
                        if ($___old_73ee42edb2ad7f1d)
                          ({}.constructor.defineProperty(
                            window,
                            'XMLHttpRequest',
                            $___old_73ee42edb2ad7f1d
                          ));
                      }
                    }).then(function (e) {
                      var t = e.response,
                        n = t.status,
                        r = t.message;
                      if (!m(n) && !m(r)) throw new Error(r);
                      return t;
                    });
                  }
                  function Or (e) {
                    if (e[oh]) throw new Error(nh);
                    return e;
                  }
                  function Dr () {
                    var e = jn(),
                      t = Gn();
                    return He([e.then(Or), t]);
                  }
                  function Rr () {
                    return [An(), zn()];
                  }
                  function Vr (e) {
                    var t = nt()[Gp];
                    return cl({}, e, ar(t));
                  }
                  function Nr () {
                    return -new Date().getTimezoneOffset();
                  }
                  function Lr () {
                    var e = ol.screen;
                    return {
                      width: e.width,
                      height: e.height,
                      orientation: sr(),
                      colorDepth: e.colorDepth,
                      pixelRatio: or(),
                    };
                  }
                  function Fr () {
                    var e = sl.documentElement;
                    return { width: e.clientWidth, height: e.clientHeight };
                  }
                  function Br () {
                    return { host: ol.location.hostname, webGLRenderer: cr() };
                  }
                  function Ur () {
                    return { url: ol.location.href, referringUrl: sl.referrer };
                  }
                  function Hr (e) {
                    const $___old_41013f1b76ff5763 = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'userAgent'
                    );
                    try {
                      if ($___old_41013f1b76ff5763)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___stub_47c01efa79e9f191.userAgent
                        ));
                      return function () {
                        if (!m(e) && e.channel === Rh) return e;
                        var t = (e || {}).beacon;
                        return {
                          userAgent: ol.navigator.userAgent,
                          timeOffsetInMinutes: Nr(),
                          channel: Rh,
                          screen: Lr(),
                          window: Fr(),
                          browser: Br(),
                          address: Ur(),
                          beacon: t,
                        };
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_41013f1b76ff5763)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___old_41013f1b76ff5763
                        ));
                    }
                  }
                  function qr (e, t) {
                    if (!m(e)) return e;
                    var n = {};
                    if (j(t)) return n;
                    var r = t[ah],
                      a = parseInt(r, 10);
                    isNaN(a) || (n.locationHint = a);
                    var i = t[rh];
                    return _l(i) && (n.blob = i), n;
                  }
                  function Gr (e) {
                    var t = e.id,
                      n = e.integrationCode,
                      r = e.authenticatedState,
                      a = {};
                    return (
                      _l(t) && (a.id = t),
                      _l(n) && (a.integrationCode = n),
                      _l(r) && (a.authenticatedState = r),
                      a
                    );
                  }
                  function zr (e) {
                    return N(Gr, e);
                  }
                  function Qr (e, t, n, r, a) {
                    var i = {};
                    _l(t) && (i.tntId = t),
                      _l(n) && (i.thirdPartyId = n),
                      _l(e.thirdPartyId) && (i.thirdPartyId = e.thirdPartyId);
                    var o = r[ih];
                    return (
                      _l(o) && (i.marketingCloudVisitorId = o),
                      _l(e.marketingCloudVisitorId) &&
                        (i.marketingCloudVisitorId = e.marketingCloudVisitorId),
                      j(e.customerIds)
                        ? j(a) || (i.customerIds = zr(a))
                        : (i.customerIds = e.customerIds),
                      i
                    );
                  }
                  function Kr (e, t) {
                    var n = {},
                      r = qr(e.audienceManager, t);
                    return (
                      j(r) || (n.audienceManager = r),
                      j(e.analytics) || (n.analytics = e.analytics),
                      n
                    );
                  }
                  function Wr (e, t) {
                    if (!m(e) && _l(e.token)) return e;
                    var n = {},
                      r = kr(t);
                    return _l(r) && (n.token = r), n;
                  }
                  function Yr (e) {
                    if (!m(e) && _l(e.authorizationToken)) return e;
                    var t = {},
                      n = Wn();
                    return _l(n) && (t.authorizationToken = n), t;
                  }
                  function Jr (e) {
                    return m(e) ? mn() : e;
                  }
                  function Xr (e) {
                    var t = {},
                      n = Cr(e);
                    m(n) || (t.id = n);
                    var r = Sr(e),
                      a = parseFloat(r);
                    isNaN(a) || (t.total = a);
                    var i = Mr(e);
                    return j(i) || (t.purchasedProductIds = i), t;
                  }
                  function Zr (e) {
                    var t = {},
                      n = wr(e);
                    m(n) || (t.id = n);
                    var r = Pr(e);
                    return m(r) || (t.categoryId = r), t;
                  }
                  function $r (e, t) {
                    var n = {},
                      r = cl({}, Ir(t), e.parameters || {}),
                      a = cl({}, xr(t), e.profileParameters || {}),
                      i = cl({}, Xr(t), e.order || {}),
                      o = cl({}, Zr(t), e.product || {});
                    return (
                      j(r) || (n.parameters = r),
                      j(a) || (n.profileParameters = a),
                      j(i) || (n.order = i),
                      j(o) || (n.product = o),
                      n
                    );
                  }
                  function ea (e, t) {
                    var n = e.index,
                      r = e.name,
                      a = e.address,
                      i = $r(e, cl({}, t, ar(r)));
                    return (
                      m(n) || (i.index = n), _l(r) && (i.name = r), j(a) || (i.address = a), i
                    );
                  }
                  function ta (e, t) {
                    var n = e.name,
                      r = e.address,
                      a = $r(e, t);
                    return _l(n) && (a.name = n), j(r) || (a.address = r), a;
                  }
                  function na (e, t) {
                    var n = e.execute,
                      r = void 0 === n ? {} : n,
                      a = {};
                    if (j(r)) return a;
                    var i = r.pageLoad;
                    m(i) || (a.pageLoad = $r(i, t));
                    var o = r.mboxes;
                    if (!m(o) && fl(o) && !j(o)) {
                      var s = h(
                        Nh,
                        N(function (e) {
                          return ea(e, t);
                        }, o)
                      );
                      j(s) || (a.mboxes = s);
                    }
                    return a;
                  }
                  function ra (e, t) {
                    var n = e.prefetch,
                      r = void 0 === n ? {} : n,
                      a = {};
                    if (j(r)) return a;
                    var i = r.mboxes;
                    m(i) ||
                      !fl(i) ||
                      j(i) ||
                      (a.mboxes = N(function (e) {
                        return ea(e, t);
                      }, i));
                    var o = r.views;
                    return (
                      m(o) ||
                        !fl(o) ||
                        j(o) ||
                        (a.views = N(function (e) {
                          return ta(e, t);
                        }, o)),
                      a
                    );
                  }
                  function aa (e, t) {
                    if (We() && !Je()) return null;
                    var n = nt(),
                      r = Tn(e),
                      a = On(uh),
                      i = On(lh),
                      o = t.experienceCloud,
                      s = (void 0 === o ? {} : o).analytics,
                      c = void 0 === s ? {} : s,
                      u = c.logging,
                      l = c.supplementalDataId,
                      d = c.trackingServer,
                      p = c.trackingServerSecure,
                      f = {};
                    return (
                      m(u) ? (f.logging = n[Zf]) : (f.logging = u),
                      m(l) || (f.supplementalDataId = l),
                      _l(r) && (f.supplementalDataId = r),
                      m(d) || (f.trackingServer = d),
                      _l(a) && (f.trackingServer = a),
                      m(p) || (f.trackingServerSecure = p),
                      _l(i) && (f.trackingServerSecure = i),
                      j(f) ? null : f
                    );
                  }
                  function ia (e, t, n) {
                    var r = Vr(n),
                      a = at(),
                      i = yr(r),
                      o = _n(),
                      s = Qr(e.id || {}, a, i, t, o),
                      c = Wr(e.property, r),
                      u = Kr(e.experienceCloud || {}, t),
                      l = Yr(e.trace),
                      d = Jr(e.qaMode),
                      p = na(e, r),
                      f = ra(e, r),
                      m = e.notifications,
                      h = {};
                    return (
                      (h.requestId = G()),
                      (h.context = Hr(e.context)),
                      j(s) || (h.id = s),
                      j(c) || (h.property = c),
                      j(l) || (h.trace = l),
                      j(u) || (h.experienceCloud = u),
                      j(d) || (h.qaMode = d),
                      j(p) || (h.execute = p),
                      j(f) || (h.prefetch = f),
                      j(m) || (h.notifications = m),
                      h
                    );
                  }
                  function oa (e, t, n) {
                    var r = n[0],
                      a = n[1];
                    return ia(e, r, cl({}, a, t));
                  }
                  function sa (t, n) {
                    return Dr().then(function (e) {
                      return oa(t, n, e);
                    });
                  }
                  function ca (e, t) {
                    return oa(e, t, Rr());
                  }
                  function ua (e, t) {
                    return R(t) ? (t < 0 ? e[qp] : t) : e[qp];
                  }
                  function la (e) {
                    var t = e[Bp],
                      n = e[Hp];
                    if (!e[ef]) return n;
                    var r = ot();
                    return _(r) ? n : n.replace(t, '' + Vh + r);
                  }
                  function da (e) {
                    return (
                      e[sf] +
                      '//' +
                      la(e) +
                      e[Mf] +
                      '?' +
                      $({ client: e[Bp], sessionId: et(), version: e[Qp] })
                    );
                  }
                  function pa (t, e) {
                    var n = nt(),
                      r = da(n),
                      a = c({}, Vf, [Nf]),
                      i = ua(n, e),
                      o = { url: r, headers: a, body: t, timeout: i, async: !0 };
                    return (
                      Ie(Op, t),
                      Te({ request: t }),
                      Tr(o).then(function (e) {
                        return Ie(Tp, e), Te({ response: e }), { request: t, response: e };
                      })
                    );
                  }
                  function fa (e, t) {
                    return { status: Cp, type: e, data: t };
                  }
                  function ma (e, t) {
                    return { status: vp, type: e, data: t };
                  }
                  function ha (e) {
                    return d(e);
                  }
                  function ga (e) {
                    return !!ha(e) && _l(e.eventToken);
                  }
                  function va (e) {
                    return !j(e) && !_(e.type) && _l(e.eventToken);
                  }
                  function ba (e) {
                    return !!va(e) && _l(e.selector);
                  }
                  function ya (e) {
                    var t = e.id;
                    return d(t) && _l(t.tntId);
                  }
                  function ka (e) {
                    var t = e.response;
                    return ya(t) && rt(t.id.tntId), e;
                  }
                  function Ca (e) {
                    var t = e.response;
                    return ya(t) && st(t.id.tntId), st(null), e;
                  }
                  function Sa (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {}).trace;
                    j(t) || _e(t);
                  }
                  function Ma (e) {
                    var t = e.response,
                      n = t.execute,
                      r = void 0 === n ? {} : n,
                      a = t.prefetch,
                      i = void 0 === a ? {} : a,
                      o = r.pageLoad,
                      s = void 0 === o ? {} : o,
                      c = r.mboxes,
                      u = void 0 === c ? [] : c,
                      l = i.mboxes,
                      d = void 0 === l ? [] : l,
                      p = i.views,
                      f = void 0 === p ? [] : p;
                    return Sa(s), y(Sa, u), y(Sa, d), y(Sa, f), e;
                  }
                  function wa (e) {
                    var t = e.queryKey,
                      n = t[rg];
                    if (!C(n)) return t;
                    if (_(n)) return t;
                    var r = Math.round(F() / 1000);
                    return (t[rg] = n.replace(/\|TS=\d+/, '|TS=' + r)), t;
                  }
                  function Pa (e) {
                    return e.queryKey;
                  }
                  function Ia (e, t, n) {
                    var r = ne(e),
                      a = r.protocol,
                      i = r.host,
                      o = r.path,
                      s = '' === r.port ? '' : ':' + r.port,
                      c = _(r.anchor) ? '' : '#' + r.anchor,
                      u = n(r),
                      l = $(cl({}, u, t));
                    return a + '://' + i + s + o + (_(l) ? '' : '?' + l) + c;
                  }
                  function xa (e, t) {
                    return Ia(e, t, wa);
                  }
                  function Ea (e, t) {
                    return Ia(e, t, Pa);
                  }
                  function ja (e) {
                    var t = e.content;
                    if (_(t)) return Ie(cp, e), null;
                    var n = cl({}, e);
                    return (n.content = xa(t, {})), n;
                  }
                  function Aa (e) {
                    throw new Error(e);
                  }
                  function _a (e) {
                    var t = e[ug] || sg,
                      n = e[lg] || Aa(og),
                      r = e[dg] || {},
                      a = e[pg] || null,
                      i = e[fg] || !1,
                      o = e[mg] || 3000,
                      s = !!m(e[hg]) || !0 === e[hg],
                      c = {};
                    return (
                      (c[ug] = t),
                      (c[lg] = n),
                      (c[dg] = r),
                      (c[pg] = a),
                      (c[fg] = i),
                      (c[mg] = o),
                      (c[hg] = s),
                      c
                    );
                  }
                  function Ta (r, a, i) {
                    return (
                      (r.onload = function () {
                        var e = 1223 === r.status ? 204 : r.status;
                        if (e < 100 || 599 < e) i(new Error(ag));
                        else {
                          var t = r.responseText,
                            n = r.getAllResponseHeaders();
                          a({ status: e, headers: n, response: t });
                        }
                      }),
                      r
                    );
                  }
                  function Oa (e, t) {
                    return (
                      (e.onerror = function () {
                        t(new Error(ag));
                      }),
                      e
                    );
                  }
                  function Da (e, t, n) {
                    return (
                      (e.timeout = t),
                      (e.ontimeout = function () {
                        n(new Error(ig));
                      }),
                      e
                    );
                  }
                  function Ra (e, t) {
                    return !0 === t && (e.withCredentials = t), e;
                  }
                  function Va (n, e) {
                    return (
                      y(function (e, t) {
                        y(function (e) {
                          return n.setRequestHeader(t, e);
                        }, e);
                      }, e),
                      n
                    );
                  }
                  function Na (r, e) {
                    var t = _a(e),
                      a = t[ug],
                      i = t[lg],
                      o = t[dg],
                      s = t[pg],
                      c = t[fg],
                      u = t[mg],
                      l = t[hg];
                    return Le(function (e, t) {
                      var n = new r.XMLHttpRequest();
                      (n = Oa((n = Ta(n, e, t)), t)).open(a, i, l),
                        (n = Va((n = Ra(n, c)), o)),
                        l && (n = Da(n, u, t)),
                        n.send(s);
                    });
                  }
                  function La (e) {
                    return Na(ol, e);
                  }
                  function Fa (e, t, n) {
                    var r = {};
                    return (r[ug] = sg), (r[lg] = Ea(e, t)), (r[mg] = n), r;
                  }
                  function Ba (e) {
                    return (200 <= e && e < 300) || 304 === e;
                  }
                  function Ua (e) {
                    if (!Ba(e.status)) return null;
                    var t = e.response;
                    if (_(t)) return null;
                    var n = {};
                    return (n.type = Pd), (n.content = t), n;
                  }
                  function Ha (e) {
                    return La(Fa(e.content, {}, nt()[mg]))
                      .then(Ua)
                      ['catch'](function () {
                        return null;
                      });
                  }
                  function qa (e) {
                    var t = e[Ql];
                    if (_(t)) return '';
                    var n = gg.exec(t);
                    return j(n) || 2 !== n.length ? '' : n[1];
                  }
                  function Ga (e, t) {
                    var n = document.createElement(Nd);
                    n.innerHTML = t;
                    var r = n.firstElementChild;
                    return m(r) ? t : ((r.id = e), r.outerHTML);
                  }
                  function za (e) {
                    var t = e[Ll],
                      n = qa(e);
                    if (_(n) || _(t)) return e;
                    var r = e[Ql];
                    return (e[Ql] = r.replace(vg, '')), (e[Ll] = Ga(n, t)), e;
                  }
                  function Qa (e) {
                    return !m(e.selector);
                  }
                  function Ka (e) {
                    if (!Qa(e)) return null;
                    var t = za(e);
                    return C(t[Ll]) ? t : (Ie(np, t), null);
                  }
                  function Wa (e) {
                    if (!Qa(e)) return null;
                    var t = za(e);
                    return C(t[Ll]) ? t : (Ie(np, t), null);
                  }
                  function Ya (e) {
                    if (!Qa(e)) return null;
                    var t = za(e);
                    return C(t[Ll]) ? t : (Ie(np, t), null);
                  }
                  function Ja (e) {
                    if (!Qa(e)) return null;
                    var t = za(e);
                    return C(t[Ll]) ? t : (Ie(np, t), null);
                  }
                  function Xa (e) {
                    if (!Qa(e)) return null;
                    var t = za(e);
                    return C(t[Ll]) ? t : (Ie(np, t), null);
                  }
                  function Za (e) {
                    if (!Qa(e)) return null;
                    var t = za(e);
                    return C(t[Ll]) ? t : (Ie(np, t), null);
                  }
                  function $a (e) {
                    if (!Qa(e)) return null;
                    var t = za(e);
                    return C(t[Ll]) ? t : (Ie(np, t), null);
                  }
                  function ei (e) {
                    return Qa(e) ? (C(e[Ll]) ? e : (Ie(np, e), null)) : null;
                  }
                  function ti (e) {
                    return Qa(e) ? (d(e[Ll]) ? e : (Ie(rp, e), null)) : null;
                  }
                  function ni (e) {
                    return Qa(e) ? (C(e[Ll]) ? e : (Ie(up, e), null)) : null;
                  }
                  function ri (e) {
                    return Qa(e) ? (d(e[Ll]) ? e : (Ie(ap, e), null)) : null;
                  }
                  function ai (e) {
                    return Qa(e) ? (d(e[Ll]) ? e : (Ie(ip, e), null)) : null;
                  }
                  function ii (e) {
                    return Qa(e) ? (d(e[Ll]) ? e : (Ie(op, e), null)) : null;
                  }
                  function oi (e) {
                    return Qa(e) ? e : null;
                  }
                  function si (e) {
                    return Qa(e) ? (d(e[Ll]) ? e : (Ie(sp, e), null)) : null;
                  }
                  function ci (e) {
                    var t = e.content;
                    return _(t) ? (Ie(cp, e), null) : ((e.content = xa(t, {})), e);
                  }
                  function ui (e) {
                    var t = e[Nl];
                    if (_(t)) return null;
                    switch (t) {
                      case Wl:
                        return Ka(e);
                      case Jl:
                        return Wa(e);
                      case dd:
                        return Ya(e);
                      case fd:
                        return Ja(e);
                      case hd:
                        return Xa(e);
                      case ud:
                        return Za(e);
                      case ld:
                        return $a(e);
                      case id:
                        return ei(e);
                      case Zl:
                        return ti(e);
                      case $l:
                        return ni(e);
                      case ed:
                        return ri(e);
                      case nd:
                        return ai(e);
                      case rd:
                        return ii(e);
                      case ad:
                        return oi(e);
                      case td:
                        return si(e);
                      case od:
                        return ci(e);
                      default:
                        return null;
                    }
                  }
                  function li (e) {
                    var t = e[Ll];
                    if (!fl(t)) return null;
                    if (j(t)) return null;
                    var n = h(bg, N(ui, t));
                    if (j(n)) return null;
                    var r = cl({}, e);
                    return (r.content = n), r;
                  }
                  function di (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {}).options;
                    return fl(t) ? (j(t) ? [] : zh(N(Wh, t))) : [];
                  }
                  function pi (e) {
                    var t = 0 < arguments.length && e !== undefined ? arguments[0] : {},
                      n = t.execute,
                      r = void 0 === n ? {} : n,
                      a = t.prefetch,
                      i = void 0 === a ? {} : a,
                      o = r.pageLoad,
                      s = void 0 === o ? {} : o,
                      c = r.mboxes,
                      u = void 0 === c ? [] : c,
                      l = i.mboxes,
                      d = void 0 === l ? [] : l,
                      p = i.views,
                      f = void 0 === p ? [] : p;
                    return v([di(s), v(N(di, u)), v(N(di, d)), v(N(di, f))]);
                  }
                  function fi (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {}).execute,
                      n = void 0 === t ? {} : t,
                      r = n.pageLoad,
                      a = void 0 === r ? {} : r,
                      i = n.mboxes,
                      o = void 0 === i ? [] : i,
                      s = v([Qh(a) || [], v(zh(N(Qh, o)))]),
                      c = v(N(Kh, h(qh, s))),
                      u = h(Gh, s),
                      l = h(Gh, c),
                      d = u.concat(l),
                      p = {};
                    if (j(d)) return p;
                    var f = d[0].content;
                    return _(f) || (p.url = f), p;
                  }
                  function mi (e) {
                    var t = (0 < arguments.length && e !== undefined ? arguments[0] : {})
                      .analytics;
                    return j(t) ? [] : [t];
                  }
                  function hi (e) {
                    var t = 0 < arguments.length && e !== undefined ? arguments[0] : {},
                      n = t.execute,
                      r = void 0 === n ? {} : n,
                      a = t.prefetch,
                      i = void 0 === a ? {} : a,
                      o = r.pageLoad,
                      s = void 0 === o ? {} : o,
                      c = r.mboxes,
                      u = void 0 === c ? [] : c,
                      l = i.mboxes,
                      d = void 0 === l ? [] : l,
                      p = i.views,
                      f = void 0 === p ? [] : p;
                    return v([mi(s), v(N(mi, u)), v(N(mi, d)), v(N(mi, f))]);
                  }
                  function gi (e, t) {
                    (e.parameters = t.parameters),
                      (e.profileParameters = t.profileParameters),
                      (e.order = t.order),
                      (e.product = t.product);
                  }
                  function vi (e, t) {
                    var n = t[0],
                      r = t[1],
                      a = !j(n),
                      i = !j(r);
                    return (a || i) && (a && (e.options = n), i && (e.metrics = r)), e;
                  }
                  function bi (e) {
                    switch (e.type) {
                      case od:
                        return Fe(ja(e));
                      case Id:
                        return Ha(e);
                      case jp:
                        return Fe(li(e));
                      default:
                        return Fe(e);
                    }
                  }
                  function yi (e, t) {
                    if (!fl(e)) return Fe([]);
                    if (j(e)) return Fe([]);
                    var n = h(t, e);
                    return j(n)
                      ? Fe([])
                      : He(
                          N(function (e) {
                            return bi(e);
                          }, n)
                        ).then(zh);
                  }
                  function ki (e, t) {
                    return fl(e) ? (j(e) ? Fe([]) : Fe(h(t, e))) : Fe([]);
                  }
                  function Ci (e) {
                    var t = e.response.execute;
                    if (!d(t)) return Fe(null);
                    var n = t.pageLoad;
                    if (!d(n)) return Fe(null);
                    var r = n.analytics,
                      a = n.options,
                      i = n.metrics,
                      o = { analytics: r };
                    return He([yi(a, ha), ki(i, ba)]).then(function (e) {
                      return vi(o, e);
                    });
                  }
                  function Si (e) {
                    var t = e.name,
                      n = e.analytics,
                      r = e.options,
                      a = e.metrics,
                      i = { name: t, analytics: n };
                    return He([yi(r, ha), ki(a, va)]).then(function (e) {
                      return vi(i, e);
                    });
                  }
                  function Mi (e) {
                    var t = e.response.execute;
                    if (!d(t)) return Fe([]);
                    var n = t.mboxes;
                    return !fl(n) || j(n) ? Fe([]) : He(N(Si, h(Xh, n))).then(zh);
                  }
                  function wi (e, t, n) {
                    return e.index === t && e.name === n;
                  }
                  function Pi (e, t, n) {
                    var r = e.prefetch,
                      a = (void 0 === r ? {} : r).mboxes,
                      i = void 0 === a ? [] : a;
                    return j(i)
                      ? null
                      : g(
                          h(function (e) {
                            return wi(e, t, n);
                          }, i)
                        );
                  }
                  function Ii (e, t) {
                    var n = t.index,
                      r = t.name,
                      a = t.state,
                      i = t.analytics,
                      o = t.options,
                      s = t.metrics,
                      c = Pi(e, n, r),
                      u = { name: r, state: a, analytics: i };
                    return (
                      m(c) || gi(u, c),
                      He([yi(o, ga), ki(s, va)]).then(function (e) {
                        return vi(u, e);
                      })
                    );
                  }
                  function xi (e) {
                    var t = e.request,
                      n = e.response.prefetch;
                    if (!d(n)) return Fe([]);
                    var r = n.mboxes;
                    if (!fl(r) || j(r)) return Fe([]);
                    var a = h(Zh, r),
                      i = function i (e) {
                        return Ii(t, e);
                      };
                    return He(N(i, a)).then(zh);
                  }
                  function Ei (e) {
                    var t = e.prefetch,
                      n = (void 0 === t ? {} : t).views,
                      r = void 0 === n ? [] : n;
                    return j(r) ? null : r[0];
                  }
                  function ji (e, t) {
                    var n = t.name,
                      r = t.state,
                      a = t.analytics,
                      i = t.options,
                      o = t.metrics,
                      s = Ei(e),
                      c = { name: n.toLowerCase(), state: r, analytics: a };
                    return (
                      m(s) || gi(c, s),
                      He([yi(i, ga), ki(o, ba)]).then(function (e) {
                        return vi(c, e);
                      })
                    );
                  }
                  function Ai (e) {
                    var t = e.request,
                      n = e.response.prefetch;
                    if (!d(n)) return Fe([]);
                    var r = n.views;
                    if (!fl(r) || j(r)) return Fe([]);
                    var a = h($h, r),
                      i = function i (e) {
                        return ji(t, e);
                      };
                    return He(N(i, a)).then(zh);
                  }
                  function _i (e) {
                    var t = e.response.prefetch;
                    return d(t) ? ki(t.metrics, ba) : Fe([]);
                  }
                  function Ti (e) {
                    var t = e[0],
                      n = e[1],
                      r = e[2],
                      a = e[3],
                      i = e[4],
                      o = {},
                      s = {};
                    d(t) && (s.pageLoad = t), j(n) || (s.mboxes = n);
                    var c = {};
                    return (
                      j(r) || (c.mboxes = r),
                      j(a) || (c.views = a),
                      j(i) || (c.metrics = i),
                      j(s) || (o.execute = s),
                      j(c) || (o.prefetch = c),
                      o
                    );
                  }
                  function Oi (e) {
                    var t = b([Ma, ka, Ca])(e);
                    return He([Ci(t), Mi(t), xi(t), Ai(t), _i(t)]).then(Ti);
                  }
                  function Di (e) {
                    var t = hi(e),
                      n = pi(e),
                      r = !j(fi(e)),
                      a = {};
                    return (
                      j(t) || (a.analyticsDetails = t),
                      j(n) || (a.responseTokens = n),
                      Ie($d, e),
                      mt(a, r),
                      Fe(e)
                    );
                  }
                  function Ri (e, t) {
                    var n = pi(t),
                      r = d(fi(t)),
                      a = { mbox: e };
                    return j(n) || (a.responseTokens = n), Ie($d, t), mt(a, r), Fe(t);
                  }
                  function Vi (e) {
                    return Pe(Zd, e), ht({ error: e }), Be(e);
                  }
                  function Ni (e, t) {
                    return Pe(Zd, t), ht({ mbox: e, error: t }), Be(t);
                  }
                  function Li (e) {
                    var t = nt()[Gp],
                      n = e.mbox,
                      r = e.timeout,
                      a = d(e.params) ? e.params : {},
                      i = function i (e) {
                        return Ri(n, e);
                      },
                      o = function o (e) {
                        return Ni(n, e);
                      },
                      s = {},
                      c = {};
                    n === t ? (c.pageLoad = {}) : (c.mboxes = [{ index: 0, name: n }]),
                      (s.execute = c);
                    var u = aa(n, s);
                    if (!j(u)) {
                      var l = {};
                      (l.analytics = u), (s.experienceCloud = l);
                    }
                    return (
                      ft({ mbox: n }),
                      sa(s, a)
                        .then(function (e) {
                          return pa(e, r);
                        })
                        .then(Oi)
                        .then(i)
                        ['catch'](o)
                    );
                  }
                  function Fi (e) {
                    var t = nt()[Gp],
                      n = e.consumerId,
                      r = void 0 === n ? t : n,
                      a = e.request,
                      i = e.timeout,
                      o = aa(r, a),
                      s = function s (e) {
                        return Di(e);
                      },
                      c = function c (e) {
                        return Vi(e);
                      };
                    if (!j(o)) {
                      var u = a.experienceCloud || {};
                      (u.analytics = o), (a.experienceCloud = u);
                    }
                    return (
                      ft({}),
                      sa(a, {})
                        .then(function (e) {
                          return pa(e, i);
                        })
                        .then(Oi)
                        .then(s)
                        ['catch'](c)
                    );
                  }
                  function Bi (e, t) {
                    return wt(t).addClass(e);
                  }
                  function Ui (e, t) {
                    return wt(t).css(e);
                  }
                  function Hi (e, t) {
                    return wt(t).attr(e);
                  }
                  function qi (e, t, n) {
                    return wt(n).attr(e, t);
                  }
                  function Gi (e, t) {
                    return wt(t).removeAttr(e);
                  }
                  function zi (e, t, n) {
                    var r = Hi(e, n);
                    _l(r) && (Gi(e, n), qi(t, r, n));
                  }
                  function Qi (e, t) {
                    return _l(Hi(e, t));
                  }
                  function Ki (e) {
                    return new Error('Could not find: ' + e);
                  }
                  function Wi (r, a, i) {
                    return Le(function (t, e) {
                      var n = De(function () {
                        var e = i(r);
                        j(e) || (n.disconnect(), t(e));
                      });
                      o(function () {
                        n.disconnect(), e(Ki(r));
                      }, a),
                        n.observe(sl, { childList: !0, subtree: !0 });
                    });
                  }
                  function Yi () {
                    return sl[yg] === kg;
                  }
                  function Ji (r, a, i) {
                    return Le(function (t, e) {
                      function n () {
                        var e = i(r);
                        j(e) ? ol.requestAnimationFrame(n) : t(e);
                      }
                      n(),
                        o(function () {
                          e(Ki(r));
                        }, a);
                    });
                  }
                  function Xi (r, a, i) {
                    return Le(function (t, e) {
                      function n () {
                        var e = i(r);
                        j(e) ? o(n, Cg) : t(e);
                      }
                      n(),
                        o(function () {
                          e(Ki(r));
                        }, a);
                    });
                  }
                  function Zi (e, t, n) {
                    var r = 1 < arguments.length && t !== undefined ? arguments[1] : nt()[Zp],
                      a = 2 < arguments.length && n !== undefined ? arguments[2] : wt,
                      i = a(e);
                    return j(i) ? (Oe() ? Wi(e, r, a) : Yi() ? Ji(e, r, a) : Xi(e, r, a)) : Fe(i);
                  }
                  function $i (e) {
                    return Hi(Md, e);
                  }
                  function eo (e) {
                    return Qi(Md, e);
                  }
                  function to (e) {
                    return (
                      y(function (e) {
                        return zi(Ed, Md, e);
                      }, E(Tt(Vd, e))),
                      e
                    );
                  }
                  function no (e) {
                    return (
                      y(function (e) {
                        return zi(Md, Ed, e);
                      }, E(Tt(Vd, e))),
                      e
                    );
                  }
                  function ro (e) {
                    return Ie(dp, e), Hi(Ed, qi(Ed, e, xt('<' + Vd + '/>')));
                  }
                  function ao (e) {
                    var t = h(eo, E(Tt(Vd, e)));
                    return j(t) || y(ro, N($i, t)), e;
                  }
                  function io (e) {
                    return b([to, ao, no])(e);
                  }
                  function oo (e) {
                    var t = Hi(Ed, e);
                    return _l(t) ? t : null;
                  }
                  function so (e) {
                    return h(_l, N(oo, E(Tt(xd, e))));
                  }
                  function co (e) {
                    return B(
                      function (e, t) {
                        return e.then(function () {
                          return Ie(gp, t), Te({ remoteScript: t }), pl(t);
                        });
                      },
                      Fe(),
                      e
                    );
                  }
                  function uo (e) {
                    return e;
                  }
                  function lo (e, t) {
                    return Pe(Xd, t), Te({ action: e, error: t }), e;
                  }
                  function po (e, t) {
                    var n,
                      r = wt(t[Ql]),
                      a = io(It(t[Ll])),
                      i = so(a);
                    try {
                      n = Fe(e(r, a));
                    } catch (o) {
                      return Be(lo(t, o));
                    }
                    return j(i)
                      ? n
                          .then(function () {
                            return uo(t);
                          })
                          ['catch'](function (e) {
                            return lo(t, e);
                          })
                      : n
                          .then(function () {
                            return co(i);
                          })
                          .then(function () {
                            return uo(t);
                          })
                          ['catch'](function (e) {
                            return lo(t, e);
                          });
                  }
                  function fo (e) {
                    var t = It(e);
                    return V(
                      '',
                      B(
                        function (e, t) {
                          return e.push(Gt(It(t))), e;
                        },
                        [],
                        E(Tt(Sg, t))
                      )
                    );
                  }
                  function mo (e) {
                    var t = cl({}, e),
                      n = t[Ll];
                    if (_(n)) return t;
                    var r = wt(t[Ql]);
                    return _t(Td, r) && ((t[Nl] = dd), (t[Ll] = fo(n))), t;
                  }
                  function ho (e) {
                    return e.indexOf('px') === e.length - 2 ? e : e + 'px';
                  }
                  function go (e, t) {
                    return qt(Gt(t), e);
                  }
                  function vo (e) {
                    return Ie(tp, e), po(go, e);
                  }
                  function bo (e) {
                    var t = wt(e[Ql]),
                      n = e[Ll];
                    return Ie(tp, e), Te({ action: e }), zt(n, t), Fe(e);
                  }
                  function yo (e, t) {
                    return Ut(Gt(t), e);
                  }
                  function ko (e) {
                    return Ie(tp, e), po(yo, e);
                  }
                  function Co (e, t) {
                    return Ht(Gt(t), e);
                  }
                  function So (e) {
                    return Ie(tp, e), po(Co, e);
                  }
                  function Mo (e, t) {
                    var n = At(e);
                    return Lt(Bt(Gt(t), e)), n;
                  }
                  function wo (e) {
                    return Ie(tp, e), po(Mo, e);
                  }
                  function Po (e, t) {
                    return Et(Bt(Gt(t), e));
                  }
                  function Io (e) {
                    return Ie(tp, e), po(Po, e);
                  }
                  function xo (e, t) {
                    return jt(Ft(Gt(t), e));
                  }
                  function Eo (e) {
                    return Ie(tp, e), po(xo, e);
                  }
                  function jo (e, t) {
                    return At(Bt(Gt(t), e));
                  }
                  function Ao (e) {
                    return Ie(tp, e), po(jo, e);
                  }
                  function _o (e) {
                    var t = e[Ll],
                      n = wt(e[Ql]);
                    return Ie(tp, e), Te({ action: e }), Gi(Ed, n), qi(Ed, ro(t), n), Fe(e);
                  }
                  function To (e) {
                    var t = e[Ll],
                      n = wt(e[Ql]);
                    return (
                      Ie(tp, e),
                      Te({ action: e }),
                      y(function (e, t) {
                        return qi(t, e, n);
                      }, t),
                      Fe(e)
                    );
                  }
                  function Oo (e, t, r) {
                    y(function (n) {
                      y(function (e, t) {
                        return n.style.setProperty(t, e, r);
                      }, t);
                    }, E(e));
                  }
                  function Do (e) {
                    var t = wt(e[Ql]),
                      n = e[Ll],
                      r = n[zl];
                    return Ie(tp, e), Te({ action: e }), _(r) ? Ui(n, t) : Oo(t, n, r), Fe(e);
                  }
                  function Ro (e) {
                    var t = wt(e[Ql]),
                      n = e[Ll];
                    return (
                      (n[Bl] = ho(n[Bl])),
                      (n[Fl] = ho(n[Fl])),
                      Ie(tp, e),
                      Te({ action: e }),
                      Ui(n, t),
                      Fe(e)
                    );
                  }
                  function Vo (e) {
                    var t = wt(e[Ql]),
                      n = e[Ll];
                    return (
                      (n[Ul] = ho(n[Ul])),
                      (n[Hl] = ho(n[Hl])),
                      Ie(tp, e),
                      Te({ action: e }),
                      Ui(n, t),
                      Fe(e)
                    );
                  }
                  function No (e) {
                    var t = wt(e[Ql]);
                    return Ie(tp, e), Te({ action: e }), Lt(t), Fe(e);
                  }
                  function Lo (e) {
                    var t = wt(e[Ql]),
                      n = e[Ll],
                      r = n[ql],
                      a = n[Gl],
                      i = E(Ot(t)),
                      o = i[r],
                      s = i[a];
                    return Pt(o) && Pt(s)
                      ? (Ie(tp, e), Te({ action: e }), r < a ? Ft(o, s) : Bt(o, s), Fe(e))
                      : (Ie(lp, e), Be(e));
                  }
                  function Fo (e) {
                    var t = mo(e);
                    switch (t[Nl]) {
                      case Wl:
                        return vo(t);
                      case Jl:
                        return bo(t);
                      case dd:
                        return ko(t);
                      case fd:
                        return So(t);
                      case hd:
                        return wo(t);
                      case ud:
                        return Io(t);
                      case ld:
                        return Eo(t);
                      case id:
                        return Ao(t);
                      case Zl:
                        return To(t);
                      case $l:
                        return _o(t);
                      case ed:
                        return Do(t);
                      case nd:
                        return Ro(t);
                      case rd:
                        return Vo(t);
                      case ad:
                        return No(t);
                      case td:
                        return Lo(t);
                      default:
                        return Fe(t);
                    }
                  }
                  function Bo (e) {
                    return e[Nl] === sd || e[Nl] === cd;
                  }
                  function Uo (e) {
                    var t = e[Ql];
                    return _l(t) || D(t);
                  }
                  function Ho (e) {
                    var t = e.key;
                    if (!_(t) && Uo(e)) {
                      var n = e[Ql];
                      qi(Mg, t, n);
                    }
                  }
                  function qo (e) {
                    var t = e[Kl];
                    _(t) || rn(t);
                  }
                  function Go (e) {
                    if (Uo(e)) {
                      var t = e[Ql];
                      Bo(e) ? Bi(Lp, t) : (Bi(Np, t), qo(e));
                    } else qo(e);
                  }
                  function zo (e) {
                    y(Go, e);
                  }
                  function Qo (e) {
                    var t = e.key;
                    if (_(t)) return !0;
                    if (e[Nl] === id) return e[jf];
                    var n = e[Ql],
                      r = Hi(Mg, n);
                    return r !== t || (r === t && !e[jf]);
                  }
                  function Ko (n) {
                    return Qo(n)
                      ? Fo(n)
                          .then(function () {
                            return Ie(ep, n), Te({ action: n }), Ho(n), Go(n), n;
                          })
                          ['catch'](function (e) {
                            Pe(Xd, e), Te({ action: n, error: e }), Go(n);
                            var t = cl({}, n);
                            return (t[vp] = !0), t;
                          })
                      : (Go(n), n);
                  }
                  function Wo (e) {
                    var t = h(function (e) {
                      return !0 === e[vp];
                    }, e);
                    return j(t) ? Fe() : (zo(t), Be(e));
                  }
                  function Yo (t) {
                    return Zi(t[Ql])
                      .then(function () {
                        return t;
                      })
                      ['catch'](function () {
                        var e = cl({}, t);
                        return (e[vp] = !0), e;
                      });
                  }
                  function Jo (e) {
                    return Yo(e).then(Ko);
                  }
                  function Xo (e) {
                    return He(N(Jo, e)).then(Wo);
                  }
                  function Zo (e, t, n) {
                    return wt(n).on(e, t);
                  }
                  function $o (e, t, n) {
                    return wt(n).off(e, t);
                  }
                  function es (e) {
                    return Zi(e[Ql])
                      .then(function () {
                        return Te({ metric: e }), cl({ found: !0 }, e);
                      })
                      ['catch'](function () {
                        return Pe(wg, e), Te({ metric: e, message: wg }), e;
                      });
                  }
                  function ts (e, t, n) {
                    return e[Pg][Ig](t, n);
                  }
                  function ns (e, t, n) {
                    var r = {};
                    r[Vf] = [Nf];
                    var a = {};
                    (a[ug] = cg),
                      (a[lg] = t),
                      (a[pg] = n),
                      (a[fg] = !0),
                      (a[hg] = !1),
                      (a[dg] = r);
                    try {
                      e(a);
                    } catch (i) {
                      return !1;
                    }
                    return !0;
                  }
                  function rs (e) {
                    return Pg in e && Ig in e[Pg];
                  }
                  function as (e, t) {
                    return rs(ol) ? ts(ol, e, t) : ns(La, e, t);
                  }
                  function is (e) {
                    var t = e.name,
                      n = Rn(_f) || {};
                    (n[t] = e), Dn(_f, n);
                  }
                  function os (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : {},
                      r = n.page,
                      a = void 0 === r || r,
                      i = (Rn(_f) || {})[e];
                    if (m(i)) return i;
                    var o = n.impressionId;
                    return m(o) ? i : cl({ page: a, impressionId: o }, i);
                  }
                  function ss (e) {
                    y(is, e);
                  }
                  function cs (e) {
                    var t = aa(e, {}),
                      n = { context: { beacon: !0 } };
                    if (!j(t)) {
                      var r = {};
                      (r.analytics = t), (n.experienceCloud = r);
                    }
                    return n;
                  }
                  function us (e, t, n) {
                    var r = ca(cs(e), t);
                    return (r.notifications = n), r;
                  }
                  function ls (e, t, n) {
                    return sa(cs(e), t).then(function (e) {
                      return (e.notifications = n), e;
                    });
                  }
                  function ds (e, t, n) {
                    var r = {
                      id: G(),
                      type: t,
                      timestamp: F(),
                      parameters: e.parameters,
                      profileParameters: e.profileParameters,
                      order: e.order,
                      product: e.product,
                    };
                    return j(n) || (r.tokens = n), r;
                  }
                  function ps (e, t, n) {
                    var r = e.name,
                      a = e.state,
                      i = ds(e, t, n);
                    return (i.mbox = { name: r, state: a }), i;
                  }
                  function fs (e, t, n) {
                    var r = e.name,
                      a = e.state,
                      i = ds(e, t, n);
                    return (i.view = { name: r, state: a }), i;
                  }
                  function ms (e) {
                    var t = da(nt());
                    return as(t, JSON.stringify(e)) ? (Ie(xg, t, e), !0) : (Pe(Eg, t, e), !1);
                  }
                  function hs (e, t, n) {
                    var r = ar(nt()[Gp]),
                      a = ds($r({}, r), t, [n]),
                      i = us(G(), r, [a]);
                    Ie(Tg, e, a), Te({ source: e, event: t, request: i }), ms(i);
                  }
                  function gs (e, t, n) {
                    var r = ar(e),
                      a = ds($r({}, r), t, [n]);
                    a.mbox = { name: e };
                    var i = us(e, r, [a]);
                    Ie(Og, e, a), Te({ mbox: e, event: t, request: i }), ms(i);
                  }
                  function vs (e) {
                    var t = nt()[Gp],
                      i = [],
                      o = Rf;
                    if (
                      (y(function (e) {
                        var t = e.mbox,
                          n = e.data;
                        if (!m(n)) {
                          var r = n.eventTokens,
                            a = void 0 === r ? [] : r;
                          j(a) || i.push(ps(t, o, a));
                        }
                      }, e),
                      !j(i))
                    ) {
                      var n = us(t, {}, i);
                      Ie(_g, i), Te({ source: Rg, event: Vg, request: n }), ms(n);
                    }
                  }
                  function bs (e, t, n) {
                    var r = ar(nt()[Gp]),
                      a = ds($r({}, r), t, [n]);
                    a.view = { name: e };
                    var i = us(G(), r, [a]);
                    Ie(Dg, e, a), Te({ view: e, event: t, request: i }), ms(i);
                  }
                  function ys (e) {
                    var t = e.viewName,
                      n = e.impressionId,
                      r = ar(nt()[Gp]),
                      a = ds($r({}, r), Rf, []);
                    (a.view = { name: t }),
                      Ie(jg, t),
                      ls(t, r, [a]).then(function (e) {
                        (e.impressionId = n), Te({ view: t, event: Ng, request: e }), ms(e);
                      });
                  }
                  function ks (e) {
                    if (!m(e)) {
                      var t = e.view,
                        n = e.data,
                        r = (void 0 === n ? {} : n).eventTokens,
                        a = void 0 === r ? [] : r;
                      if (!j(a)) {
                        var i = t.name,
                          o = t.impressionId,
                          s = os(i);
                        if (!m(s)) {
                          var c = us(i, {}, [fs(s, Rf, a)]);
                          (c.impressionId = o),
                            Ie(Ag, i, a),
                            Te({ view: i, event: Vg, request: c }),
                            ms(c);
                        }
                      }
                    }
                  }
                  function Cs (e, t) {
                    e === _d && Bi(Lp, t);
                  }
                  function Ss (e, t) {
                    return !m(Lg[e]) && !m(Lg[e][t]);
                  }
                  function Ms (e, r, a) {
                    if (m(Lg[e])) {
                      var t = f(Lg);
                      j(t) ||
                        y(function (n) {
                          y(function (e) {
                            var t = Lg[n][e];
                            $o(r, t, a);
                          }, f(Lg[n])),
                            delete Lg[n];
                        }, t);
                    }
                  }
                  function ws (e, t, n) {
                    (Lg[e] = Lg[e] || {}), (Lg[e][t] = n);
                  }
                  function Ps (e, t, n, r) {
                    var a = n.type,
                      i = n.selector,
                      o = n.eventToken,
                      s = S(a + ':' + i + ':' + o),
                      c = function c () {
                        return r(e, a, o);
                      };
                    Cs(a, i),
                      t ? Ss(e, s) || (Ms(e, a, i), ws(e, s, c), Zo(a, c, i)) : Zo(a, c, i);
                  }
                  function Is (t, n, e, r) {
                    return He(N(es, e))
                      .then(function (e) {
                        return (
                          y(
                            function (e) {
                              return Ps(t, n, e, r);
                            },
                            h(function (e) {
                              return e.found;
                            }, e)
                          ),
                          Hg()
                        );
                      })
                      ['catch'](qg);
                  }
                  function xs (e) {
                    return Is(e.name, !1, Ug(e), gs);
                  }
                  function Es (e) {
                    return Is(e.name, !0, Ug(e), bs);
                  }
                  function js (e) {
                    return Is(Fg, !1, Ug(e), hs);
                  }
                  function As (e) {
                    return Is(Bg, !1, Ug(e), hs);
                  }
                  function _s (e) {
                    var t = N(zg, e);
                    tn(zh(t));
                  }
                  function Ts (e) {
                    var t = N(zg, e);
                    nn(zh(t));
                  }
                  function Os (e) {
                    var t = h(qh, Qh(e));
                    return v(N(Gg, t));
                  }
                  function Ds (e) {
                    return d(e) && e.type !== Xl;
                  }
                  function Rs (e, t, n) {
                    return N(function (e) {
                      return cl({ key: t, page: n }, e);
                    }, h(Ds, e));
                  }
                  function Vs (e, t, n) {
                    var r = e.eventToken;
                    return Xo(Rs(e.content, t, n))
                      .then(function () {
                        return Qg(r);
                      })
                      ['catch'](Kg);
                  }
                  function Ns (e) {
                    return d(e) && e.type !== wd;
                  }
                  function Ls (e, t) {
                    return N(e, h(Ns, Qh(t)));
                  }
                  function Fs (e, t, n) {
                    var r = c({ status: Cp }, e, t),
                      a = N(tg, h(Hh, n)),
                      i = {};
                    return j(a) || ((r.status = vp), (i.errors = a)), j(i) || (r.data = i), r;
                  }
                  function Bs (e, t, n) {
                    var r = c({ status: Cp }, e, t),
                      a = N(tg, h(Hh, n)),
                      i = N(tg, h(Wg, n)),
                      o = {};
                    return (
                      j(a) || ((r.status = vp), (o.errors = a)),
                      j(i) || (o.eventTokens = i),
                      j(o) || (r.data = o),
                      r
                    );
                  }
                  function Us (t, e, n) {
                    var r = function r (e) {
                      return Vs(e, !0);
                    };
                    return He(Ls(r, t))
                      .then(e)
                      .then(function (e) {
                        return n(t), e;
                      });
                  }
                  function Hs (t, n, r, a) {
                    var i = n.name,
                      o = function o (e) {
                        return Vs(e, i, r);
                      };
                    return He(Ls(o, n))
                      .then(function (e) {
                        return Bs(t, n, e);
                      })
                      .then(function (e) {
                        return a(n), e;
                      });
                  }
                  function qs (t) {
                    var n = function n (e) {
                      return Fs(wp, t, e);
                    };
                    return Us(t, n, xs);
                  }
                  function Gs (e) {
                    return Hs(wp, e, !0, xs);
                  }
                  function zs (e) {
                    _s(Os(e));
                  }
                  function Qs (e, t) {
                    if (!(1 < arguments.length && t !== undefined && arguments[1])) {
                      var n = e.execute,
                        r = (void 0 === n ? {} : n).pageLoad,
                        a = void 0 === r ? {} : r;
                      j(a) || zs(a);
                    }
                  }
                  function Ks (e) {
                    var t = e.prefetch,
                      n = (void 0 === t ? {} : t).views,
                      r = void 0 === n ? [] : n;
                    j(r) || Ts(v(N(Os, r)));
                  }
                  function Ws (e) {
                    _s(Os(e)), an();
                  }
                  function Ys (t) {
                    var n = function n (e) {
                      return Fs(Rp, t, e);
                    };
                    return Us(t, n, js);
                  }
                  function Js (e) {
                    return He(N(qs, e));
                  }
                  function Xs (e) {
                    return He(N(Gs, e));
                  }
                  function Zs (e) {
                    return He([As(e)]).then(Fs);
                  }
                  function $s (e) {
                    var t = e.page;
                    return Hs(Af, e, t, Es);
                  }
                  function ec () {}
                  function tc () {
                    return new Yg();
                  }
                  function nc (e, t, n) {
                    e.emit(t, n);
                  }
                  function rc (e, t, n) {
                    e.on(t, n);
                  }
                  function ac (e, t) {
                    nc(Xg, e, t);
                  }
                  function ic (e, t) {
                    rc(Xg, e, t);
                  }
                  function oc (e) {
                    return { type: od, content: e.url };
                  }
                  function sc (e) {
                    var t = {};
                    return (
                      (t.type = Wl),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function cc (e) {
                    var t = {};
                    return (
                      (t.type = Jl),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function uc (e) {
                    var t = {};
                    return (
                      (t.type = dd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function lc (e) {
                    var t = {};
                    return (
                      (t.type = fd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function dc (e) {
                    var t = {};
                    return (
                      (t.type = hd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function pc (e) {
                    var t = {};
                    return (
                      (t.type = ud),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function fc (e) {
                    var t = {};
                    return (
                      (t.type = ld),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function mc (e) {
                    var t = {};
                    return (
                      (t.type = id),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function hc (e) {
                    var t = {};
                    if (
                      ((t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      e.attribute === Ed)
                    )
                      return (t.type = $l), (t.content = e.value), t;
                    t.type = Zl;
                    var n = {};
                    return (n[e.attribute] = e.value), (t.content = n), t;
                  }
                  function gc (e) {
                    var t = e.style,
                      n = void 0 === t ? {} : t,
                      r = {};
                    return (
                      (r.selector = e.selector),
                      (r.cssSelector = e.cssSelector),
                      m(n.left) || m(n.top)
                        ? m(n.width) || m(n.height)
                          ? (r.type = ed)
                          : (r.type = nd)
                        : (r.type = rd),
                      (r.content = n),
                      r
                    );
                  }
                  function vc (e) {
                    var t = {};
                    return (
                      (t.type = ad), (t.selector = e.selector), (t.cssSelector = e.cssSelector), t
                    );
                  }
                  function bc (e) {
                    var t = {};
                    (t.from = e.from), (t.to = e.to);
                    var n = {};
                    return (
                      (n.type = td),
                      (n.selector = e.selector),
                      (n.cssSelector = e.cssSelector),
                      (n.content = t),
                      n
                    );
                  }
                  function yc (e) {
                    return _l(e.selector) && _l(e.cssSelector);
                  }
                  function kc (e) {
                    var t = {};
                    if (j(e)) return t;
                    var n = [],
                      r = [],
                      a = [];
                    y(function (e) {
                      switch (e.action) {
                        case Yl:
                          yc(e) ? a.push(sc(e)) : n.push({ type: Pd, content: e.content });
                          break;
                        case Xl:
                          j(e.content) ||
                            y(function (e) {
                              return n.push({ type: wd, content: e });
                            }, e.content);
                          break;
                        case Jl:
                          a.push(cc(e));
                          break;
                        case pd:
                          a.push(uc(e));
                          break;
                        case md:
                          a.push(lc(e));
                          break;
                        case gd:
                          a.push(dc(e));
                          break;
                        case ud:
                          a.push(pc(e));
                          break;
                        case ld:
                          a.push(fc(e));
                          break;
                        case id:
                          a.push(mc(e));
                          break;
                        case Zl:
                          a.push(hc(e));
                          break;
                        case ed:
                          a.push(gc(e));
                          break;
                        case ad:
                          a.push(vc(e));
                          break;
                        case td:
                          a.push(bc(e));
                          break;
                        case od:
                          n.push(oc(e));
                          break;
                        case sd:
                          r.push({ type: _d, selector: e.selector, eventToken: e.clickTrackId });
                      }
                    }, e);
                    var i = {};
                    if (
                      (!j(a) && n.push({ type: jp, content: a }),
                      !j(n) && (i.options = n),
                      !j(r) && (i.metrics = r),
                      j(i))
                    )
                      return t;
                    var o = {};
                    return (o.pageLoad = i), (t.execute = o), t;
                  }
                  function Cc (e, t) {
                    var n = {};
                    if (j(t)) return n;
                    var r = [],
                      a = [];
                    y(function (e) {
                      switch (e.action) {
                        case Yl:
                          r.push({ type: Pd, content: e.content });
                          break;
                        case Xl:
                          j(e.content) ||
                            y(function (e) {
                              return r.push({ type: wd, content: e });
                            }, e.content);
                          break;
                        case od:
                          r.push(oc(e));
                          break;
                        case cd:
                          a.push({ type: _d, eventToken: e.clickTrackId });
                      }
                    }, t);
                    var i = { name: e };
                    if ((!j(r) && (i.options = r), !j(a) && (i.metrics = a), j(i))) return n;
                    var o = {},
                      s = [i];
                    return (o.mboxes = s), (n.execute = o), n;
                  }
                  function Sc (e, t, n) {
                    return n ? kc(t) : Cc(e, t);
                  }
                  function Mc (e) {
                    var t = e.status,
                      n = e.data,
                      r = { status: t, pageLoad: !0 };
                    return m(n) || (r.data = n), r;
                  }
                  function wc (e) {
                    var t = e.status,
                      n = e.mbox,
                      r = e.data,
                      a = { status: t, mbox: n.name };
                    return m(r) || (a.data = r), a;
                  }
                  function Pc (e) {
                    var t = e.status,
                      n = e.view,
                      r = e.data,
                      a = { status: t, view: n.name };
                    return m(r) || (a.data = r), a;
                  }
                  function Ic (e) {
                    var t = e.status,
                      n = e.data,
                      r = { status: t, prefetchMetrics: !0 };
                    return m(n) || (r.data = n), r;
                  }
                  function xc (e) {
                    if (m(e)) return [null];
                    var t = N(Mc, [e]);
                    return nv(t) && Pe(Zg, e), t;
                  }
                  function Ec (e) {
                    if (m(e)) return [null];
                    var t = N(wc, e);
                    return nv(t) && Pe($g, e), t;
                  }
                  function jc (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : vs;
                    if (m(e)) return [null];
                    var r = N(wc, e);
                    return nv(r) && Pe($g, e), n(e), r;
                  }
                  function Ac (e, t) {
                    var n = 1 < arguments.length && t !== undefined ? arguments[1] : ks;
                    if (m(e)) return [null];
                    var r = N(Pc, [e]);
                    return nv(r) && Pe(ev, e), e.view.page && n(e), r;
                  }
                  function _c (e) {
                    if (m(e)) return [null];
                    var t = N(Ic, [e]);
                    return nv(t) && Pe(tv, e), t;
                  }
                  function Tc (e) {
                    var t = v([xc(e[0]), Ec(e[1]), jc(e[2]), _c(e[3])]),
                      n = h(Bh, t),
                      r = h(Hh, n);
                    return j(r) ? Fe(n) : Be(r);
                  }
                  function Oc (e) {
                    return Be(e);
                  }
                  function Dc (r, e) {
                    if (!j(e)) {
                      var t = e.options;
                      j(t) ||
                        y(function (e) {
                          if (e.type === Pd) {
                            var t = Wl,
                              n = e.content;
                            (e.type = jp), (e.content = [{ type: t, selector: r, content: n }]);
                          }
                        }, t);
                    }
                  }
                  function Rc (t, e) {
                    var n = e.metrics;
                    if (!j(n)) {
                      var r = e.name;
                      y(function (e) {
                        (e.name = r), (e.selector = e.selector || t);
                      }, n);
                    }
                  }
                  function Vc (t, e) {
                    var n = cl({}, e),
                      r = n.execute,
                      a = void 0 === r ? {} : r,
                      i = n.prefetch,
                      o = void 0 === i ? {} : i,
                      s = a.pageLoad,
                      c = void 0 === s ? {} : s,
                      u = a.mboxes,
                      l = void 0 === u ? [] : u,
                      d = o.mboxes,
                      p = void 0 === d ? [] : d;
                    return (
                      Dc(t, c),
                      y(function (e) {
                        return Dc(t, e);
                      }, l),
                      y(function (e) {
                        return Rc(t, e);
                      }, l),
                      y(function (e) {
                        return Dc(t, e);
                      }, p),
                      y(function (e) {
                        return Rc(t, e);
                      }, p),
                      n
                    );
                  }
                  function Nc (e) {
                    var t = e.prefetch,
                      n = (void 0 === t ? {} : t).views,
                      r = void 0 === n ? [] : n;
                    j(r) || ss(r);
                  }
                  function Lc (e) {
                    var t = [],
                      n = e.execute,
                      r = void 0 === n ? {} : n,
                      a = r.pageLoad,
                      i = void 0 === a ? {} : a,
                      o = r.mboxes,
                      s = void 0 === o ? [] : o;
                    j(i) ? t.push(Fe(null)) : t.push(Ys(i)),
                      j(s) ? t.push(Fe(null)) : t.push(Js(s));
                    var c = e.prefetch,
                      u = void 0 === c ? {} : c,
                      l = u.mboxes,
                      d = void 0 === l ? [] : l,
                      p = u.metrics,
                      f = void 0 === p ? [] : p;
                    return (
                      j(d) ? t.push(Fe(null)) : t.push(Xs(d)),
                      fl(f) && !j(f) ? t.push(Zs(u)) : t.push(Fe(null)),
                      en(),
                      He(t).then(Tc)['catch'](Oc)
                    );
                  }
                  function Fc (e, t) {
                    o(function () {
                      return e.location.replace(t);
                    });
                  }
                  function Bc (e) {
                    return _l(e) ? e : D(e) ? e : Td;
                  }
                  function Uc (e) {
                    Bi(Np, e);
                  }
                  function Hc (e) {
                    var t = e.mbox,
                      n = e.selector,
                      r = e.offer,
                      a = nt(),
                      i = t === a[Gp];
                    if (j(r)) return Ie(mp), Uc(n), en(), void yt({ mbox: t });
                    var o = Vc(n, Sc(t, r, i)),
                      s = fi(o);
                    if (!j(s)) {
                      var c = s.url;
                      return Ie(hp, s), kt({ url: c }), void Fc(ol, c);
                    }
                    gt({ mbox: t }),
                      Qs(o),
                      Lc(o)
                        .then(function (e) {
                          j(e) || vt({ mbox: t, execution: e });
                        })
                        ['catch'](function (e) {
                          return bt({ error: e });
                        });
                  }
                  function qc (e, t) {
                    var n = 1 < arguments.length && t !== undefined && arguments[1],
                      r = e.selector,
                      a = e.response;
                    if (j(a)) return Ie(mp), Uc(r), en(), yt({}), ac(rm), Fe();
                    var i = Vc(r, a),
                      o = fi(i);
                    if (j(o))
                      return (
                        gt({}),
                        Nc(i),
                        ac(nm),
                        Qs(i, n),
                        Lc(i)
                          .then(function (e) {
                            j(e) || vt({ execution: e });
                          })
                          ['catch'](function (e) {
                            return bt({ error: e });
                          })
                      );
                    var s = o.url;
                    return Ie(hp, o), kt({ url: s }), ac(am), Fc(ol, s), Fe();
                  }
                  function Gc (e) {
                    var t = e[$f];
                    if (j(t)) return !1;
                    var n = t.request,
                      r = t.response;
                    return !j(n) && !j(r);
                  }
                  function zc (e) {
                    return e[$f];
                  }
                  function Qc (e) {
                    Pe(rv, Ff, e), Te({ source: rv, error: e }), en();
                  }
                  function Kc (e, t) {
                    var n = 1 < arguments.length && t !== undefined && arguments[1],
                      r = { selector: Td, response: e };
                    Ie(rv, Tp, e), Te({ source: rv, response: e }), qc(r, n)['catch'](Qc);
                  }
                  function Wc (e, t) {
                    var n = cl({}, t),
                      r = n.execute,
                      a = n.prefetch,
                      i = e[Pf],
                      o = e[wf];
                    return (
                      r && (n.execute.mboxes = null),
                      r && !i && (n.execute.pageLoad = null),
                      a && (n.prefetch.mboxes = null),
                      a && !o && (n.prefetch.views = null),
                      n
                    );
                  }
                  function Yc (e) {
                    var t = zc(e),
                      n = t.request,
                      r = t.response,
                      a = !0;
                    Ie(rv, Hf), Te({ source: rv, serverState: t });
                    var i = Wc(e, r);
                    Qs(i),
                      Ks(i),
                      Oi({ request: n, response: i })
                        .then(function (e) {
                          return Kc(e, a);
                        })
                        ['catch'](Qc);
                  }
                  function Jc () {
                    if (!ye()) return Pe(rv, Ld), void Te({ source: rv, error: Ld });
                    fn(ol);
                    var e = nt();
                    if (Gc(e)) Yc(e);
                    else {
                      var t = e[Pf],
                        n = e[wf];
                      if (!t && !n) return Ie(rv, Uf), void Te({ source: rv, error: Uf });
                      $t();
                      var r = {};
                      if (t) {
                        var a = { pageLoad: {} };
                        r.execute = a;
                      }
                      if (n) {
                        var i = { views: [{}] };
                        r.prefetch = i;
                      }
                      var o = e[qp];
                      Ie(rv, Op, r), Te({ source: rv, request: r });
                      var s = { request: r, timeout: o };
                      We() && !Ye()
                        ? Xe()
                            .then(function () {
                              Fi(s).then(Kc)['catch'](Qc);
                            })
                            ['catch'](Qc)
                        : Fi(s).then(Kc)['catch'](Qc);
                    }
                  }
                  function Xc () {
                    var e = {};
                    return (e[kp] = !0), e;
                  }
                  function Zc (e) {
                    var t = {};
                    return (t[kp] = !1), (t[vp] = e), t;
                  }
                  function $c (e) {
                    return _(e) ? Zc(Qd) : e.length > Sd ? Zc(Kd) : Xc();
                  }
                  function eu (e) {
                    if (!d(e)) return Zc(Bd);
                    var t = $c(e[wp]);
                    return t[kp] ? (u(e[Cp]) ? (u(e[vp]) ? Xc() : Zc(Yd)) : Zc(Wd)) : t;
                  }
                  function tu (e) {
                    if (!d(e)) return Zc(Bd);
                    var t = e.request;
                    if (!d(t)) return Zc(Ud);
                    var n = t.execute,
                      r = t.prefetch;
                    return d(n) || d(r) ? Xc() : Zc(qd);
                  }
                  function nu (e) {
                    if (!d(e)) return Zc(Bd);
                    var t = e.request;
                    if (!d(t)) return Zc(Ud);
                    var n = t.execute,
                      r = t.prefetch,
                      a = t.notifications;
                    return d(n) || d(r) ? Zc(Gd) : fl(a) ? Xc() : Zc(zd);
                  }
                  function ru (e) {
                    if (!d(e)) return Zc(Bd);
                    var t = $c(e[wp]);
                    if (!t[kp]) return t;
                    var n = e[Pp];
                    return fl(n) ? Xc() : Zc(Jd);
                  }
                  function au (e) {
                    return d(e) ? (d(e.response) ? Xc() : Zc(Hd)) : Zc(Bd);
                  }
                  function iu (e) {
                    if (!d(e)) return Zc(Bd);
                    var t = $c(e[wp]);
                    return t[kp] ? Xc() : t;
                  }
                  function ou (e) {
                    return { action: od, url: e.content };
                  }
                  function su (e) {
                    var t = {};
                    return (
                      (t.action = Yl),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function cu (e) {
                    var t = {};
                    return (
                      (t.action = Jl),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function uu (e) {
                    var t = {};
                    return (
                      (t.action = pd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function lu (e) {
                    var t = {};
                    return (
                      (t.action = md),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function du (e) {
                    var t = {};
                    return (
                      (t.action = gd),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function pu (e) {
                    var t = {};
                    return (
                      (t.action = ud),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function fu (e) {
                    var t = {};
                    return (
                      (t.action = ld),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function mu (e) {
                    var t = {};
                    return (
                      (t.action = id),
                      (t.content = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function hu (e) {
                    var t = f(e.content)[0],
                      n = {};
                    return (
                      (n.action = Zl),
                      (n.attribute = t),
                      (n.value = e.content[t]),
                      (n.selector = e.selector),
                      (n.cssSelector = e.cssSelector),
                      n
                    );
                  }
                  function gu (e) {
                    var t = {};
                    return (
                      (t.action = Zl),
                      (t.attribute = Ed),
                      (t.value = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function vu (e) {
                    var t = {};
                    return (
                      (t.action = ed),
                      (t.style = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function bu (e) {
                    var t = {};
                    return (
                      (t.action = ed),
                      (t.style = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function yu (e) {
                    var t = {};
                    return (
                      (t.action = ed),
                      (t.style = e.content),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function ku (e) {
                    var t = {};
                    return (
                      (t.action = ad),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function Cu (e) {
                    var t = {};
                    return (
                      (t.action = td),
                      (t.from = e.content.from),
                      (t.to = e.content.to),
                      (t.selector = e.selector),
                      (t.cssSelector = e.cssSelector),
                      t
                    );
                  }
                  function Su (e) {
                    var t = [];
                    return (
                      y(function (e) {
                        switch (e.type) {
                          case Wl:
                            t.push(su(e));
                            break;
                          case Jl:
                            t.push(cu(e));
                            break;
                          case dd:
                            t.push(uu(e));
                            break;
                          case fd:
                            t.push(lu(e));
                            break;
                          case hd:
                            t.push(du(e));
                            break;
                          case ud:
                            t.push(pu(e));
                            break;
                          case ld:
                            t.push(fu(e));
                            break;
                          case id:
                            t.push(mu(e));
                            break;
                          case Zl:
                            t.push(hu(e));
                            break;
                          case $l:
                            t.push(gu(e));
                            break;
                          case ed:
                            t.push(vu(e));
                            break;
                          case nd:
                            t.push(bu(e));
                            break;
                          case rd:
                            t.push(yu(e));
                            break;
                          case ad:
                            t.push(ku(e));
                            break;
                          case td:
                            t.push(Cu(e));
                            break;
                          case od:
                            t.push(ou(e));
                        }
                      }, e),
                      t
                    );
                  }
                  function Mu (e) {
                    if (j(e)) return [];
                    var t = [];
                    return (
                      y(function (e) {
                        e.type === _d &&
                          (eg(e)
                            ? t.push({
                                action: sd,
                                selector: e.selector,
                                clickTrackId: e.eventToken,
                              })
                            : t.push({ action: cd, clickTrackId: e.eventToken }));
                      }, e),
                      t
                    );
                  }
                  function wu (e) {
                    if (j(e)) return [];
                    var t = [],
                      n = [],
                      r = [],
                      a = e.options,
                      i = void 0 === a ? [] : a,
                      o = e.metrics,
                      s = void 0 === o ? [] : o;
                    y(function (e) {
                      switch (e.type) {
                        case Pd:
                          t.push(e.content);
                          break;
                        case wd:
                          n.push(e.content);
                          break;
                        case od:
                          r.push(ou(e));
                          break;
                        case jp:
                          r.push.apply(r, Su(e.content));
                      }
                    }, i),
                      j(t) || r.push({ action: Yl, content: t.join('') }),
                      j(n) || r.push({ action: Xl, content: n });
                    var c = Mu(s);
                    return j(c) || r.push.apply(r, c), r;
                  }
                  function Pu (e) {
                    var t = e.execute,
                      n = void 0 === t ? {} : t,
                      r = n.pageLoad,
                      a = void 0 === r ? {} : r,
                      i = n.mboxes,
                      o = void 0 === i ? [] : i,
                      s = [];
                    return s.push.apply(s, wu(a)), s.push.apply(s, v(N(wu, o))), s;
                  }
                  function Iu (e, t) {
                    var n = Pu(t);
                    e[Cp](n);
                  }
                  function xu (e, t) {
                    var n = t[xp] || yp;
                    e[vp](n, t);
                  }
                  function Eu (t) {
                    var e = eu(t),
                      n = e[vp];
                    if (!e[kp]) return Pe(av, n), void Te({ source: av, options: t, error: n });
                    if (!ye())
                      return (
                        o(t[vp](bp, Ld)),
                        Pe(av, Ld),
                        void Te({ source: av, options: t, error: Ld })
                      );
                    var r = function r (e) {
                        return Iu(t, e);
                      },
                      a = function a (e) {
                        return xu(t, e);
                      };
                    Ie(av, t),
                      Te({ source: av, options: t }),
                      We() && !Ye()
                        ? Xe().then(function () {
                            Li(t).then(r)['catch'](a);
                          })
                        : Li(t).then(r)['catch'](a);
                  }
                  function ju (e) {
                    var t = tu(e),
                      n = t[vp];
                    return t[kp]
                      ? ye()
                        ? (Ie(iv, e),
                          Te({ source: iv, options: e }),
                          !We() || Ye()
                            ? Fi(e)
                            : Xe().then(function () {
                                return Fi(e);
                              }))
                        : (Pe(iv, Ld),
                          Te({ source: iv, options: e, error: Ld }),
                          Be(new Error(Ld)))
                      : (Pe(iv, n), Te({ source: iv, options: e, error: n }), Be(t));
                  }
                  function Au (e) {
                    var t = Bc(e.selector),
                      n = ru(e),
                      r = n[vp];
                    return n[kp]
                      ? ye()
                        ? ((e.selector = t), Ie(ov, e), Te({ source: ov, options: e }), void Hc(e))
                        : (Pe(ov, Ld), Te({ source: ov, options: e, error: Ld }), void Uc(t))
                      : (Pe(ov, e, r), Te({ source: ov, options: e, error: r }), void Uc(t));
                  }
                  function _u (e) {
                    var t = Bc(e.selector),
                      n = au(e),
                      r = n[vp];
                    return n[kp]
                      ? ye()
                        ? ((e.selector = t), Ie(sv, e), Te({ source: sv, options: e }), qc(e))
                        : (Pe(sv, Ld),
                          Te({ source: sv, options: e, error: Ld }),
                          Uc(t),
                          Be(new Error(Ld)))
                      : (Pe(sv, e, r), Te({ source: sv, options: e, error: r }), Uc(t), Be(n));
                  }
                  function Tu (e) {
                    var t = nt()[Gp],
                      n = e.consumerId,
                      r = void 0 === n ? t : n,
                      a = e.request,
                      i = nu(e),
                      o = i[vp];
                    if (!i[kp]) return Pe(cv, o), void Te({ source: cv, options: e, error: o });
                    if (!ye()) return Pe(cv, Ld), void Te({ source: cv, options: e, error: Ld });
                    Ie(cv, e), Te({ source: cv, options: e });
                    var s = us(r, {}, a.notifications);
                    !We() || Ye() ? ms(s) : Pe(cv, Xf);
                  }
                  function Ou (e, t) {
                    var n = t[wp],
                      r = cl({}, t),
                      a = d(t.params) ? t.params : {};
                    return (
                      (r[Ep] = cl({}, ar(n), a)),
                      (r[qp] = ua(e, t[qp])),
                      (r[Cp] = u(t[Cp]) ? t[Cp] : L),
                      (r[vp] = u(t[vp]) ? t[vp] : L),
                      r
                    );
                  }
                  function Du (e) {
                    var t = e[Nl],
                      n = e[Ql];
                    return _l(t) && (_l(n) || D(n));
                  }
                  function Ru (e) {
                    var t = e.mbox,
                      n = d(e.params) ? e.params : {},
                      r = cl({}, ar(t), n),
                      a = Rf,
                      i = ds($r({}, r), a, []);
                    if (((i.mbox = { name: t }), ms(us(t, r, [i]))))
                      return Ie(pp, e), void e[Cp]();
                    Pe(fp, e), e[vp](yp, fp);
                  }
                  function Vu (e) {
                    if (We() && !Ye()) return Pe(fp, Xf), void e[vp](vp, Xf);
                    Ru(e);
                  }
                  function Nu (e) {
                    return Vu(e), !e.preventDefault;
                  }
                  function Lu (e) {
                    var t = e[Ql],
                      n = e[Nl],
                      r = E(wt(t)),
                      a = function a () {
                        return Nu(e);
                      };
                    y(function (e) {
                      return Zo(n, a, e);
                    }, r);
                  }
                  function Fu (e) {
                    var t = iu(e),
                      n = t[vp];
                    if (!t[kp]) return Pe(uv, n), void Te({ source: uv, options: e, error: n });
                    var r = Ou(nt(), e);
                    if (!ye())
                      return (
                        Pe(uv, Ld),
                        o(r[vp](bp, Ld)),
                        void Te({ source: uv, options: e, error: Ld })
                      );
                    Ie(uv, r), Te({ source: uv, options: r }), Du(r) ? Lu(r) : Vu(r);
                  }
                  function Bu (e) {
                    return (
                      Ws(e),
                      $s(e)
                        .then(Ac)
                        .then(function (e) {
                          j(e) || vt({ execution: e });
                        })
                        ['catch'](function (e) {
                          Pe(Lf, e), bt({ error: e });
                        })
                    );
                  }
                  function Uu () {
                    for (; 0 < dv.length; ) {
                      var e = dv.pop(),
                        t = os(e.viewName, e);
                      m(t) || Bu(t);
                    }
                  }
                  function Hu () {
                    (fv = pv), Uu();
                  }
                  function qu () {
                    ic(nm, Hu), ic(rm, Hu), ic(am, Hu);
                  }
                  function Gu (e, t) {
                    var n = {};
                    return (
                      (n.viewName = e),
                      (n.impressionId = G()),
                      (n.page = !0),
                      j(t) || (n.page = !!t.page),
                      n
                    );
                  }
                  function zu (e) {
                    Rt(e), m(os(e.viewName, e)) && e.page && ys(e), dv.push(e), fv === pv && Uu();
                  }
                  function Qu (e, t) {
                    if (!C(e) || _(e))
                      return Pe(lv, Bf, e), void Te({ source: lv, view: e, error: Bf });
                    var n = e.toLowerCase(),
                      r = Gu(n, t);
                    Ie(lv, n, r), Te({ source: lv, view: n, options: r }), zu(r);
                  }
                  function Ku () {
                    Pe(hv, arguments);
                  }
                  function Wu () {
                    Pe(gv, arguments);
                  }
                  function Yu () {
                    Pe(vv, arguments);
                  }
                  function Ju () {
                    Pe(bv, arguments);
                  }
                  function Xu (e) {
                    var t = function t () {},
                      n = function n () {
                        return Fe();
                      };
                    (e.adobe = e.adobe || {}),
                      (e.adobe.target = {
                        VERSION: '',
                        event: {},
                        getOffer: t,
                        getOffers: n,
                        applyOffer: t,
                        applyOffers: n,
                        sendNotifications: t,
                        trackEvent: t,
                        triggerView: t,
                        registerExtension: t,
                        init: t,
                      }),
                      (e.mboxCreate = t),
                      (e.mboxDefine = t),
                      (e.mboxUpdate = t);
                  }
                  function Zu (e, t, n) {
                    if (e.adobe && e.adobe.target && 'undefined' != typeof e.adobe.target.getOffer)
                      Pe(Fd);
                    else {
                      X(n);
                      var r = nt(),
                        a = r[Qp];
                      if (
                        ((e.adobe = e.adobe || {}),
                        (e.adobe.target = e.adobe.target || {}),
                        (e.adobe.target.VERSION = a),
                        (e.adobe.target.event = {
                          LIBRARY_LOADED: Im,
                          REQUEST_START: xm,
                          REQUEST_SUCCEEDED: Em,
                          REQUEST_FAILED: jm,
                          CONTENT_RENDERING_START: Am,
                          CONTENT_RENDERING_SUCCEEDED: _m,
                          CONTENT_RENDERING_FAILED: Tm,
                          CONTENT_RENDERING_NO_OFFERS: Om,
                          CONTENT_RENDERING_REDIRECT: Dm,
                        }),
                        !r[Fp])
                      )
                        return Xu(e), void Pe(Ld);
                      Ae(),
                        Nt(),
                        (e.adobe.target.getOffer = Eu),
                        (e.adobe.target.getOffers = ju),
                        (e.adobe.target.applyOffer = Au),
                        (e.adobe.target.applyOffers = _u),
                        (e.adobe.target.sendNotifications = Tu),
                        (e.adobe.target.trackEvent = Fu),
                        (e.adobe.target.triggerView = Qu),
                        (e.adobe.target.registerExtension = Ku),
                        (e.mboxCreate = Wu),
                        (e.mboxDefine = Yu),
                        (e.mboxUpdate = Ju),
                        pt();
                    }
                  }
                  var $u,
                    el,
                    tl,
                    nl,
                    rl,
                    al,
                    il,
                    ol = r(n('@adobe/reactor-window')),
                    sl = r(n('@adobe/reactor-document')),
                    cl = r(n('@adobe/reactor-object-assign')),
                    ul = r(n('@adobe/reactor-cookie')),
                    ll = r(n('@adobe/reactor-query-string')),
                    dl = r(n('@adobe/reactor-promise')),
                    pl = r(n('@adobe/reactor-load-script')),
                    fl = Array.isArray,
                    ml = Object.prototype.toString,
                    hl = '[object Function]',
                    gl = function gl (e, t) {
                      return t.forEach(e);
                    },
                    vl = function vl (t, n) {
                      gl(function (e) {
                        return t(n[e], e);
                      }, f(n));
                    },
                    bl = function bl (e, t) {
                      return t.filter(e);
                    },
                    yl = function yl (n, e) {
                      var r = {};
                      return (
                        vl(function (e, t) {
                          n(e, t) && (r[t] = e);
                        }, e),
                        r
                      );
                    },
                    kl = '[object String]',
                    Cl = 9007199254740991,
                    Sl = function Sl (e, t) {
                      return t.map(e);
                    },
                    Ml = Object.prototype.hasOwnProperty,
                    wl = String.prototype.trim,
                    Pl = '[object Object]',
                    Il = Function.prototype,
                    xl = Object.prototype,
                    El = Il.toString,
                    jl = xl.hasOwnProperty,
                    Al = El.call(Object),
                    _l = function _l (e) {
                      return !_(e);
                    },
                    Tl = '[object Number]',
                    Ol = function Ol (n, e) {
                      var r = {};
                      return (
                        vl(function (e, t) {
                          r[t] = n(e, t);
                        }, e),
                        r
                      );
                    },
                    Dl = function Dl (e, t, n) {
                      return n.reduce(e, t);
                    },
                    Rl = function Rl (n, e, t) {
                      var r = e;
                      return (
                        vl(function (e, t) {
                          r = n(r, e, t);
                        }, t),
                        r
                      );
                    },
                    Vl = Array.prototype.reverse,
                    Nl = 'type',
                    Ll = 'content',
                    Fl = 'height',
                    Bl = 'width',
                    Ul = 'left',
                    Hl = 'top',
                    ql = 'from',
                    Gl = 'to',
                    zl = 'priority',
                    Ql = 'selector',
                    Kl = 'cssSelector',
                    Wl = 'setHtml',
                    Yl = 'setContent',
                    Jl = 'setText',
                    Xl = 'setJson',
                    Zl = 'setAttribute',
                    $l = 'setImageSource',
                    ed = 'setStyle',
                    td = 'rearrange',
                    nd = 'resize',
                    rd = 'move',
                    ad = 'remove',
                    id = 'customCode',
                    od = 'redirect',
                    sd = 'trackClick',
                    cd = 'signalClick',
                    ud = 'insertBefore',
                    ld = 'insertAfter',
                    dd = 'appendHtml',
                    pd = 'appendContent',
                    fd = 'prependHtml',
                    md = 'prependContent',
                    hd = 'replaceHtml',
                    gd = 'replaceContent',
                    vd = 'mboxDebug',
                    bd = 'mboxDisable',
                    yd = 'mboxEdit',
                    kd = 'at_check',
                    Cd = 'true',
                    Sd = 250,
                    Md = 'data-at-src',
                    wd = 'json',
                    Pd = 'html',
                    Id = 'dynamic',
                    xd = 'script',
                    Ed = 'src',
                    jd = 'id',
                    Ad = 'class',
                    _d = 'click',
                    Td = 'head',
                    Od = 'script',
                    Dd = 'style',
                    Rd = 'link',
                    Vd = 'img',
                    Nd = 'div',
                    Ld =
                      'Adobe Target content delivery is disabled. Ensure that you can save cookies to your current domain, there is no "mboxDisable" cookie and there is no "mboxDisable" parameter in query string.',
                    Fd = 'Adobe Target has already been initialized.',
                    Bd = 'options argument is required',
                    Ud = 'request option is required',
                    Hd = 'response option is required',
                    qd = 'execute or prefetch is required',
                    Gd = 'execute or prefetch is not allowed',
                    zd = 'notifications are required',
                    Qd = 'mbox option is required',
                    Kd = 'mbox option is too long',
                    Wd = 'success option is required',
                    Yd = 'error option is required',
                    Jd = 'offer option is required',
                    Xd = 'Unexpected error',
                    Zd = 'request failed',
                    $d = 'request succeeded',
                    ep = 'Action rendered successfully',
                    tp = 'Rendering action',
                    np = 'Action has no content',
                    rp = 'Action has no attributes',
                    ap = 'Action has no CSS properties',
                    ip = 'Action has no height or width',
                    op = 'Action has no left, top or position',
                    sp = 'Action has no from or to',
                    cp = 'Action has no url',
                    up = 'Action has no image url',
                    lp = 'Rearrange elements are missing',
                    dp = 'Loading image',
                    pp = 'Track event request succeeded',
                    fp = 'Track event request failed',
                    mp = 'No actions to be rendered',
                    hp = 'Redirect action',
                    gp = 'Script load',
                    vp = 'error',
                    bp = 'warning',
                    yp = 'unknown',
                    kp = 'valid',
                    Cp = 'success',
                    Sp = 'render',
                    Mp = 'metric',
                    wp = 'mbox',
                    Pp = 'offer',
                    Ip = 'name',
                    xp = 'status',
                    Ep = 'params',
                    jp = 'actions',
                    Ap = 'responseTokens',
                    _p = 'data',
                    Tp = 'response',
                    Op = 'request',
                    Dp = 'provider',
                    Rp = 'pageLoad',
                    Vp = 'at-flicker-control',
                    Np = 'at-element-marker',
                    Lp = 'at-element-click-tracking',
                    Fp = 'enabled',
                    Bp = 'clientCode',
                    Up = 'imsOrgId',
                    Hp = 'serverDomain',
                    qp = 'timeout',
                    Gp = 'globalMboxName',
                    zp = 'globalMboxAutoCreate',
                    Qp = 'version',
                    Kp = 'defaultContentHiddenStyle',
                    Wp = 'bodyHiddenStyle',
                    Yp = 'bodyHidingEnabled',
                    Jp = 'deviceIdLifetime',
                    Xp = 'sessionIdLifetime',
                    Zp = 'selectorsPollingTimeout',
                    $p = 'visitorApiTimeout',
                    ef = 'overrideMboxEdgeServer',
                    tf = 'overrideMboxEdgeServerTimeout',
                    nf = 'optoutEnabled',
                    rf = 'secureOnly',
                    af = 'supplementalDataIdParamTimeout',
                    of = 'authoringScriptUrl',
                    sf = 'scheme',
                    cf = 'cookieDomain',
                    uf = 'mboxParams',
                    lf = 'globalMboxParams',
                    df = 'mboxSession',
                    pf = 'PC',
                    ff = 'mboxEdgeCluster',
                    mf = 'session',
                    hf = 'Traces',
                    gf = 'settings',
                    vf = 'client' + hf,
                    bf = 'server' + hf,
                    yf = '___target_traces',
                    kf = 'targetGlobalSettings',
                    Cf = 'dataProvider',
                    Sf = Cf + 's',
                    Mf = 'endpoint',
                    wf = 'viewsEnabled',
                    Pf = 'pageLoadEnabled',
                    If = 'authState',
                    xf = 'authenticatedState',
                    Ef = 'integrationCode',
                    jf = 'page',
                    Af = 'view',
                    _f = 'views',
                    Tf = 'options',
                    Of = 'metrics',
                    Df = 'viewName',
                    Rf = 'display',
                    Vf = 'Content-Type',
                    Nf = 'text/plain',
                    Lf = 'View rendering failed',
                    Ff = 'View delivery error',
                    Bf = 'View name should be a non-empty string',
                    Uf = 'Page load disabled',
                    Hf = 'Using server state',
                    qf = 'adobe',
                    Gf = 'optIn',
                    zf = 'isApproved',
                    Qf = 'fetchPermissions',
                    Kf = 'Categories',
                    Wf = 'TARGET',
                    Yf = 'ANALYTICS',
                    Jf = 'optinEnabled',
                    Xf = 'Adobe Target is not opted in',
                    Zf = 'analyticsLogging',
                    $f = 'serverState',
                    em = 'cspScriptNonce',
                    tm = 'cspStyleNonce',
                    nm = 'cache-updated-event',
                    rm = 'no-offers-event',
                    am = 'redirect-offer-event',
                    im = 'file:',
                    om = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
                    sm = /^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i,
                    cm = {},
                    um = [
                      Fp,
                      Bp,
                      Up,
                      Hp,
                      cf,
                      qp,
                      uf,
                      lf,
                      Kp,
                      'defaultContentVisibleStyle',
                      Wp,
                      Yp,
                      Zp,
                      $p,
                      ef,
                      tf,
                      nf,
                      Jf,
                      rf,
                      af,
                      of,
                      'urlSizeLimit',
                      Mf,
                      Pf,
                      wf,
                      Zf,
                      $f,
                      em,
                      tm,
                      Gp,
                    ],
                    lm = function kv (e, t) {
                      t = t || {};
                      for (
                        var r = {
                            key: [
                              'source',
                              'protocol',
                              'authority',
                              'userInfo',
                              'user',
                              'password',
                              'host',
                              'port',
                              'relative',
                              'path',
                              'directory',
                              'file',
                              'query',
                              'anchor',
                            ],
                            q: { name: 'queryKey', parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
                            parser: {
                              strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                              loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            },
                          },
                          n = r.parser[t.strictMode ? 'strict' : 'loose'].exec(e),
                          a = {},
                          i = 14;
                        i--;

                      )
                        a[r.key[i]] = n[i] || '';
                      return (
                        (a[r.q.name] = {}),
                        a[r.key[12]].replace(r.q.parser, function (e, t, n) {
                          t && (a[r.q.name][t] = n);
                        }),
                        a
                      );
                    },
                    dm = ll.parse,
                    pm = ll.stringify,
                    fm = sl.createElement('a'),
                    mm = {},
                    hm = ul.get,
                    gm = ul.set,
                    vm = ul.remove,
                    bm = 'mbox',
                    ym = 'AT:',
                    km = '1',
                    Cm =
                      (($u = window),
                      (function (d) {
                        function p (e) {
                          return e._zid || (e._zid = t++);
                        }
                        function o (e, t, n, r) {
                          if ((t = f(t)).ns) var a = i(t.ns);
                          return (M[p(e)] || []).filter(function (e) {
                            return (
                              e &&
                              (!t.e || e.e == t.e) &&
                              (!t.ns || a.test(e.ns)) &&
                              (!n || p(e.fn) === p(n)) &&
                              (!r || e.sel == r)
                            );
                          });
                        }
                        function f (e) {
                          var t = ('' + e).split('.');
                          return { e: t[0], ns: t.slice(1).sort().join(' ') };
                        }
                        function i (e) {
                          return new RegExp('(?:^| )' + e.replace(' ', ' .* ?') + '(?: |$)');
                        }
                        function m (e, t) {
                          return (e.del && !n && e.e in r) || !!t;
                        }
                        function h (e) {
                          return w[e] || (n && r[e]) || e;
                        }
                        function g (i, e, t, o, s, c, u) {
                          var n = p(i),
                            l = M[n] || (M[n] = []);
                          e.split(/\s/).forEach(function (e) {
                            if ('ready' == e) return d(document).ready(t);
                            var n = f(e);
                            (n.fn = t),
                              (n.sel = s),
                              n.e in w &&
                                (t = function a (e) {
                                  var t = e.relatedTarget;
                                  if (!t || (t !== this && !d.contains(this, t)))
                                    return n.fn.apply(this, arguments);
                                });
                            var r = (n.del = c) || t;
                            (n.proxy = function (e) {
                              if (!(e = b(e)).isImmediatePropagationStopped()) {
                                e.data = o;
                                var t = r.apply(i, e._args == k ? [e] : [e].concat(e._args));
                                return !1 === t && (e.preventDefault(), e.stopPropagation()), t;
                              }
                            }),
                              (n.i = l.length),
                              l.push(n),
                              'addEventListener' in i &&
                                i.addEventListener(h(n.e), n.proxy, m(n, u));
                          });
                        }
                        function v (t, e, n, r, a) {
                          var i = p(t);
                          (e || '').split(/\s/).forEach(function (e) {
                            o(t, e, n, r).forEach(function (e) {
                              delete M[i][e.i],
                                'removeEventListener' in t &&
                                  t.removeEventListener(h(e.e), e.proxy, m(e, a));
                            });
                          });
                        }
                        function b (r, a) {
                          if (a || !r.isDefaultPrevented) {
                            a || (a = r),
                              d.each(l, function (e, t) {
                                var n = a[e];
                                (r[e] = function () {
                                  return (this[t] = c), n && n.apply(a, arguments);
                                }),
                                  (r[t] = P);
                              });
                            try {
                              r.timeStamp || (r.timeStamp = new Date().getTime());
                            } catch (e) {}
                            (a.defaultPrevented !== k
                              ? a.defaultPrevented
                              : 'returnValue' in a
                              ? !1 === a.returnValue
                              : a.getPreventDefault && a.getPreventDefault()) &&
                              (r.isDefaultPrevented = c);
                          }
                          return r;
                        }
                        function y (e) {
                          var t,
                            n = { originalEvent: e };
                          for (t in e) u.test(t) || e[t] === k || (n[t] = e[t]);
                          return b(n, e);
                        }
                        var k,
                          t = 1,
                          C = Array.prototype.slice,
                          a = d.isFunction,
                          S = function S (e) {
                            return 'string' == typeof e;
                          },
                          M = {},
                          s = {},
                          n = 'onfocusin' in $u,
                          r = { focus: 'focusin', blur: 'focusout' },
                          w = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
                        (s.click = s.mousedown = s.mouseup = s.mousemove = 'MouseEvents'),
                          (d.event = { add: g, remove: v }),
                          (d.proxy = function (e, t) {
                            var n = 2 in arguments && C.call(arguments, 2);
                            if (a(e)) {
                              var r = function r () {
                                return e.apply(t, n ? n.concat(C.call(arguments)) : arguments);
                              };
                              return (r._zid = p(e)), r;
                            }
                            if (S(t))
                              return n
                                ? (n.unshift(e[t], e), d.proxy.apply(null, n))
                                : d.proxy(e[t], e);
                            throw new TypeError('expected function');
                          }),
                          (d.fn.bind = function (e, t, n) {
                            return this.on(e, t, n);
                          }),
                          (d.fn.unbind = function (e, t) {
                            return this.off(e, t);
                          }),
                          (d.fn.one = function (e, t, n, r) {
                            return this.on(e, t, n, r, 1);
                          });
                        var c = function c () {
                            return !0;
                          },
                          P = function P () {
                            return !1;
                          },
                          u = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                          l = {
                            preventDefault: 'isDefaultPrevented',
                            stopImmediatePropagation: 'isImmediatePropagationStopped',
                            stopPropagation: 'isPropagationStopped',
                          };
                        (d.fn.delegate = function (e, t, n) {
                          return this.on(t, e, n);
                        }),
                          (d.fn.undelegate = function (e, t, n) {
                            return this.off(t, e, n);
                          }),
                          (d.fn.live = function (e, t) {
                            return d(document.body).delegate(this.selector, e, t), this;
                          }),
                          (d.fn.die = function (e, t) {
                            return d(document.body).undelegate(this.selector, e, t), this;
                          }),
                          (d.fn.on = function (n, i, o, s, c) {
                            var u,
                              l,
                              r = this;
                            return n && !S(n)
                              ? (d.each(n, function (e, t) {
                                  r.on(e, i, o, t, c);
                                }),
                                r)
                              : (S(i) || a(s) || !1 === s || ((s = o), (o = i), (i = k)),
                                (s !== k && !1 !== o) || ((s = o), (o = k)),
                                !1 === s && (s = P),
                                r.each(function (e, r) {
                                  c &&
                                    (u = function t (e) {
                                      return v(r, e.type, s), s.apply(this, arguments);
                                    }),
                                    i &&
                                      (l = function a (e) {
                                        var t,
                                          n = d(e.target).closest(i, r).get(0);
                                        if (n && n !== r)
                                          return (
                                            (t = d.extend(y(e), {
                                              currentTarget: n,
                                              liveFired: r,
                                            })),
                                            (u || s).apply(n, [t].concat(C.call(arguments, 1)))
                                          );
                                      }),
                                    g(r, n, s, o, i, l || u);
                                }));
                          }),
                          (d.fn.off = function (e, n, t) {
                            var r = this;
                            return e && !S(e)
                              ? (d.each(e, function (e, t) {
                                  r.off(e, n, t);
                                }),
                                r)
                              : (S(n) || a(t) || !1 === t || ((t = n), (n = k)),
                                !1 === t && (t = P),
                                r.each(function () {
                                  v(this, e, t, n);
                                }));
                          }),
                          (d.fn.trigger = function (e, t) {
                            return (
                              ((e = S(e) || d.isPlainObject(e) ? d.Event(e) : b(e))._args = t),
                              this.each(function () {
                                e.type in r && 'function' == typeof this[e.type]
                                  ? this[e.type]()
                                  : 'dispatchEvent' in this
                                  ? this.dispatchEvent(e)
                                  : d(this).triggerHandler(e, t);
                              })
                            );
                          }),
                          (d.fn.triggerHandler = function (n, r) {
                            var a, i;
                            return (
                              this.each(function (e, t) {
                                ((a = y(S(n) ? d.Event(n) : n))._args = r),
                                  (a.target = t),
                                  d.each(o(t, n.type || n), function (e, t) {
                                    if (((i = t.proxy(a)), a.isImmediatePropagationStopped()))
                                      return !1;
                                  });
                              }),
                              i
                            );
                          }),
                          'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
                            .split(' ')
                            .forEach(function (t) {
                              d.fn[t] = function (e) {
                                return 0 in arguments ? this.bind(t, e) : this.trigger(t);
                              };
                            }),
                          (d.Event = function (e, t) {
                            S(e) || (e = (t = e).type);
                            var n = document.createEvent(s[e] || 'Events'),
                              r = !0;
                            if (t) for (var a in t) 'bubbles' == a ? (r = !!t[a]) : (n[a] = t[a]);
                            return n.initEvent(e, r, !0), b(n);
                          });
                      })(
                        (il = (function () {
                          function o (e) {
                            return null == e ? String(e) : Y[J.call(e)] || 'object';
                          }
                          function s (e) {
                            return 'function' == o(e);
                          }
                          function i (e) {
                            return null != e && e == e.window;
                          }
                          function c (e) {
                            return null != e && e.nodeType == e.DOCUMENT_NODE;
                          }
                          function r (e) {
                            return 'object' == o(e);
                          }
                          function u (e) {
                            return r(e) && !i(e) && Object.getPrototypeOf(e) == Object.prototype;
                          }
                          function l (e) {
                            var t = !!e && 'length' in e && e.length,
                              n = I.type(e);
                            return (
                              'function' != n &&
                              !i(e) &&
                              ('array' == n ||
                                0 === t ||
                                ('number' == typeof t && 0 < t && t - 1 in e))
                            );
                          }
                          function a (e) {
                            return T.call(e, function (e) {
                              return null != e;
                            });
                          }
                          function d (e) {
                            return 0 < e.length ? I.fn.concat.apply([], e) : e;
                          }
                          function p (e) {
                            return e
                              .replace(/::/g, '/')
                              .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
                              .replace(/([a-z\d])([A-Z])/g, '$1_$2')
                              .replace(/_/g, '-')
                              .toLowerCase();
                          }
                          function n (e) {
                            return e in t ? t[e] : (t[e] = new RegExp('(^|\\s)' + e + '(\\s|$)'));
                          }
                          function f (e, t) {
                            return 'number' != typeof t || V[p(e)] ? t : t + 'px';
                          }
                          function e (e) {
                            var t, n;
                            return (
                              R[e] ||
                                ((t = D.createElement(e)),
                                D.body.appendChild(t),
                                (n = getComputedStyle(t, '').getPropertyValue('display')),
                                t.parentNode.removeChild(t),
                                'none' == n && (n = 'block'),
                                (R[e] = n)),
                              R[e]
                            );
                          }
                          function m (e) {
                            return 'children' in e
                              ? O.call(e.children)
                              : I.map(e.childNodes, function (e) {
                                  if (1 == e.nodeType) return e;
                                });
                          }
                          function h (e, t) {
                            var n,
                              r = e ? e.length : 0;
                            for (n = 0; n < r; n++) this[n] = e[n];
                            (this.length = r), (this.selector = t || '');
                          }
                          function g (e, t, n) {
                            for (P in t)
                              n && (u(t[P]) || ee(t[P]))
                                ? (u(t[P]) && !u(e[P]) && (e[P] = {}),
                                  ee(t[P]) && !ee(e[P]) && (e[P] = []),
                                  g(e[P], t[P], n))
                                : t[P] !== w && (e[P] = t[P]);
                          }
                          function v (e, t) {
                            return null == t ? I(e) : I(e).filter(t);
                          }
                          function b (e, t, n, r) {
                            return s(t) ? t.call(e, n, r) : t;
                          }
                          function y (e, t, n) {
                            null == n ? e.removeAttribute(t) : e.setAttribute(t, n);
                          }
                          function k (e, t) {
                            var n = e.className || '',
                              r = n && n.baseVal !== w;
                            if (t === w) return r ? n.baseVal : n;
                            r ? (n.baseVal = t) : (e.className = t);
                          }
                          function C (e) {
                            try {
                              return e
                                ? 'true' == e ||
                                    ('false' != e &&
                                      ('null' == e
                                        ? null
                                        : +e + '' == e
                                        ? +e
                                        : /^[\[\{]/.test(e)
                                        ? I.parseJSON(e)
                                        : e))
                                : e;
                            } catch (t) {
                              return e;
                            }
                          }
                          function S (e, t) {
                            t(e);
                            for (var n = 0, r = e.childNodes.length; n < r; n++)
                              S(e.childNodes[n], t);
                          }
                          function M (e, t, n) {
                            var r = e.getElementsByTagName('script')[0];
                            if (r) {
                              var a = r.parentNode;
                              if (a) {
                                var i = e.createElement('script');
                                (i.innerHTML = t),
                                  _l(n) && i.setAttribute('nonce', n),
                                  a.appendChild(i),
                                  a.removeChild(i);
                              }
                            }
                          }
                          var w,
                            P,
                            I,
                            x,
                            E,
                            j,
                            A = [],
                            _ = A.concat,
                            T = A.filter,
                            O = A.slice,
                            D = $u.document,
                            R = {},
                            t = {},
                            V = {
                              'column-count': 1,
                              columns: 1,
                              'font-weight': 1,
                              'line-height': 1,
                              opacity: 1,
                              'z-index': 1,
                              zoom: 1,
                            },
                            N = /^\s*<(\w+|!)[^>]*>/,
                            L = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                            F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                            B = /^(?:body|html)$/i,
                            U = /([A-Z])/g,
                            H = [
                              'val',
                              'css',
                              'html',
                              'text',
                              'data',
                              'width',
                              'height',
                              'offset',
                            ],
                            q = ['after', 'prepend', 'before', 'append'],
                            G = D.createElement('table'),
                            z = D.createElement('tr'),
                            Q = {
                              tr: D.createElement('tbody'),
                              tbody: G,
                              thead: G,
                              tfoot: G,
                              td: z,
                              th: z,
                              '*': D.createElement('div'),
                            },
                            K = /complete|loaded|interactive/,
                            W = /^[\w-]*$/,
                            Y = {},
                            J = Y.toString,
                            X = {},
                            Z = D.createElement('div'),
                            $ = {
                              tabindex: 'tabIndex',
                              readonly: 'readOnly',
                              for: 'htmlFor',
                              class: 'className',
                              maxlength: 'maxLength',
                              cellspacing: 'cellSpacing',
                              cellpadding: 'cellPadding',
                              rowspan: 'rowSpan',
                              colspan: 'colSpan',
                              usemap: 'useMap',
                              frameborder: 'frameBorder',
                              contenteditable: 'contentEditable',
                            },
                            ee =
                              Array.isArray ||
                              function (e) {
                                return e instanceof Array;
                              };
                          return (
                            (X.matches = function (e, t) {
                              if (!t || !e || 1 !== e.nodeType) return !1;
                              var n =
                                e.matches ||
                                e.webkitMatchesSelector ||
                                e.mozMatchesSelector ||
                                e.oMatchesSelector ||
                                e.matchesSelector;
                              if (n) return n.call(e, t);
                              var r,
                                a = e.parentNode,
                                i = !a;
                              return (
                                i && (a = Z).appendChild(e),
                                (r = ~X.qsa(a, t).indexOf(e)),
                                i && Z.removeChild(e),
                                r
                              );
                            }),
                            (E = function E (e) {
                              return e.replace(/-+(.)?/g, function (e, t) {
                                return t ? t.toUpperCase() : '';
                              });
                            }),
                            (j = function j (n) {
                              return T.call(n, function (e, t) {
                                return n.indexOf(e) == t;
                              });
                            }),
                            (X.fragment = function (e, t, n) {
                              var r, a, i;
                              return (
                                L.test(e) && (r = I(D.createElement(RegExp.$1))),
                                r ||
                                  (e.replace && (e = e.replace(F, '<$1></$2>')),
                                  t === w && (t = N.test(e) && RegExp.$1),
                                  t in Q || (t = '*'),
                                  ((i = Q[t]).innerHTML = '' + e),
                                  (r = I.each(O.call(i.childNodes), function () {
                                    i.removeChild(this);
                                  }))),
                                u(n) &&
                                  ((a = I(r)),
                                  I.each(n, function (e, t) {
                                    -1 < H.indexOf(e) ? a[e](t) : a.attr(e, t);
                                  })),
                                r
                              );
                            }),
                            (X.Z = function (e, t) {
                              return new h(e, t);
                            }),
                            (X.isZ = function (e) {
                              return e instanceof X.Z;
                            }),
                            (X.init = function (e, t) {
                              var n;
                              if (!e) return X.Z();
                              if ('string' == typeof e)
                                if ('<' == (e = e.trim())[0] && N.test(e))
                                  (n = X.fragment(e, RegExp.$1, t)), (e = null);
                                else {
                                  if (t !== w) return I(t).find(e);
                                  n = X.qsa(D, e);
                                }
                              else {
                                if (s(e)) return I(D).ready(e);
                                if (X.isZ(e)) return e;
                                if (ee(e)) n = a(e);
                                else if (r(e)) (n = [e]), (e = null);
                                else if (N.test(e))
                                  (n = X.fragment(e.trim(), RegExp.$1, t)), (e = null);
                                else {
                                  if (t !== w) return I(t).find(e);
                                  n = X.qsa(D, e);
                                }
                              }
                              return X.Z(n, e);
                            }),
                            ((I = function I (e, t) {
                              return X.init(e, t);
                            }).extend = function (t) {
                              var n,
                                e = O.call(arguments, 1);
                              return (
                                'boolean' == typeof t && ((n = t), (t = e.shift())),
                                e.forEach(function (e) {
                                  g(t, e, n);
                                }),
                                t
                              );
                            }),
                            (X.qsa = function (e, t) {
                              var n,
                                r = '#' == t[0],
                                a = !r && '.' == t[0],
                                i = r || a ? t.slice(1) : t,
                                o = W.test(i);
                              return e.getElementById && o && r
                                ? (n = e.getElementById(i))
                                  ? [n]
                                  : []
                                : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType
                                ? []
                                : O.call(
                                    o && !r && e.getElementsByClassName
                                      ? a
                                        ? e.getElementsByClassName(i)
                                        : e.getElementsByTagName(t)
                                      : e.querySelectorAll(t)
                                  );
                            }),
                            (I.contains = D.documentElement.contains
                              ? function (e, t) {
                                  return e !== t && e.contains(t);
                                }
                              : function (e, t) {
                                  for (; t && (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                                }),
                            (I.type = o),
                            (I.isFunction = s),
                            (I.isWindow = i),
                            (I.isArray = ee),
                            (I.isPlainObject = u),
                            (I.isEmptyObject = function (e) {
                              var t;
                              for (t in e) return !1;
                              return !0;
                            }),
                            (I.isNumeric = function (e) {
                              var t = Number(e),
                                n = tt(e);
                              return (
                                (null != e &&
                                  'boolean' != n &&
                                  ('string' != n || e.length) &&
                                  !isNaN(t) &&
                                  isFinite(t)) ||
                                !1
                              );
                            }),
                            (I.inArray = function (e, t, n) {
                              return A.indexOf.call(t, e, n);
                            }),
                            (I.camelCase = E),
                            (I.trim = function (e) {
                              return null == e ? '' : String.prototype.trim.call(e);
                            }),
                            (I.uuid = 0),
                            (I.support = {}),
                            (I.expr = {}),
                            (I.noop = function () {}),
                            (I.map = function (e, t) {
                              var n,
                                r,
                                a,
                                i = [];
                              if (l(e))
                                for (r = 0; r < e.length; r++)
                                  null != (n = t(e[r], r)) && i.push(n);
                              else for (a in e) null != (n = t(e[a], a)) && i.push(n);
                              return d(i);
                            }),
                            (I.each = function (e, t) {
                              var n, r;
                              if (l(e)) {
                                for (n = 0; n < e.length; n++)
                                  if (!1 === t.call(e[n], n, e[n])) return e;
                              } else for (r in e) if (!1 === t.call(e[r], r, e[r])) return e;
                              return e;
                            }),
                            (I.grep = function (e, t) {
                              return T.call(e, t);
                            }),
                            $u.JSON && (I.parseJSON = JSON.parse),
                            I.each(
                              'Boolean Number String Function Array Date RegExp Object Error'.split(
                                ' '
                              ),
                              function (e, t) {
                                Y['[object ' + t + ']'] = t.toLowerCase();
                              }
                            ),
                            (I.fn = {
                              constructor: X.Z,
                              length: 0,
                              forEach: A.forEach,
                              reduce: A.reduce,
                              push: A.push,
                              sort: A.sort,
                              splice: A.splice,
                              indexOf: A.indexOf,
                              concat: function te () {
                                var e,
                                  t,
                                  n = [];
                                for (e = 0; e < arguments.length; e++)
                                  (t = arguments[e]), (n[e] = X.isZ(t) ? t.toArray() : t);
                                return _.apply(X.isZ(this) ? this.toArray() : this, n);
                              },
                              map: function ne (n) {
                                return I(
                                  I.map(this, function (e, t) {
                                    return n.call(e, t, e);
                                  })
                                );
                              },
                              slice: function re () {
                                return I(O.apply(this, arguments));
                              },
                              ready: function ae (e) {
                                return (
                                  K.test(D.readyState) && D.body
                                    ? e(I)
                                    : D.addEventListener(
                                        'DOMContentLoaded',
                                        function () {
                                          e(I);
                                        },
                                        !1
                                      ),
                                  this
                                );
                              },
                              get: function ie (e) {
                                return e === w ? O.call(this) : this[0 <= e ? e : e + this.length];
                              },
                              toArray: function oe () {
                                return this.get();
                              },
                              size: function se () {
                                return this.length;
                              },
                              remove: function ce () {
                                return this.each(function () {
                                  null != this.parentNode && this.parentNode.removeChild(this);
                                });
                              },
                              each: function ue (e) {
                                for (
                                  var t, n = this.length, r = 0;
                                  r < n && ((t = this[r]), !1 !== e.call(t, r, t));

                                )
                                  r++;
                                return this;
                              },
                              filter: function le (t) {
                                return s(t)
                                  ? this.not(this.not(t))
                                  : I(
                                      T.call(this, function (e) {
                                        return X.matches(e, t);
                                      })
                                    );
                              },
                              add: function de (e, t) {
                                return I(j(this.concat(I(e, t))));
                              },
                              is: function pe (e) {
                                return 0 < this.length && X.matches(this[0], e);
                              },
                              not: function fe (t) {
                                var n = [];
                                if (s(t) && t.call !== w)
                                  this.each(function (e) {
                                    t.call(this, e) || n.push(this);
                                  });
                                else {
                                  var r =
                                    'string' == typeof t
                                      ? this.filter(t)
                                      : l(t) && s(t.item)
                                      ? O.call(t)
                                      : I(t);
                                  this.forEach(function (e) {
                                    r.indexOf(e) < 0 && n.push(e);
                                  });
                                }
                                return I(n);
                              },
                              has: function me (e) {
                                return this.filter(function () {
                                  return r(e) ? I.contains(this, e) : I(this).find(e).size();
                                });
                              },
                              eq: function he (e) {
                                return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
                              },
                              first: function ge () {
                                var e = this[0];
                                return e && !r(e) ? e : I(e);
                              },
                              last: function ve () {
                                var e = this[this.length - 1];
                                return e && !r(e) ? e : I(e);
                              },
                              find: function be (e) {
                                var n = this;
                                return e
                                  ? 'object' == tt(e)
                                    ? I(e).filter(function () {
                                        var t = this;
                                        return A.some.call(n, function (e) {
                                          return I.contains(e, t);
                                        });
                                      })
                                    : 1 == this.length
                                    ? I(X.qsa(this[0], e))
                                    : this.map(function () {
                                        return X.qsa(this, e);
                                      })
                                  : I();
                              },
                              closest: function ye (n, r) {
                                var a = [],
                                  i = 'object' == tt(n) && I(n);
                                return (
                                  this.each(function (e, t) {
                                    for (; t && !(i ? 0 <= i.indexOf(t) : X.matches(t, n)); )
                                      t = t !== r && !c(t) && t.parentNode;
                                    t && a.indexOf(t) < 0 && a.push(t);
                                  }),
                                  I(a)
                                );
                              },
                              parents: function ke (e) {
                                for (var t = [], n = this; 0 < n.length; )
                                  n = I.map(n, function (e) {
                                    if ((e = e.parentNode) && !c(e) && t.indexOf(e) < 0)
                                      return t.push(e), e;
                                  });
                                return v(t, e);
                              },
                              parent: function Ce (e) {
                                return v(j(this.pluck('parentNode')), e);
                              },
                              children: function Se (e) {
                                return v(
                                  this.map(function () {
                                    return m(this);
                                  }),
                                  e
                                );
                              },
                              contents: function Me () {
                                return this.map(function () {
                                  return this.contentDocument || O.call(this.childNodes);
                                });
                              },
                              siblings: function we (e) {
                                return v(
                                  this.map(function (e, t) {
                                    return T.call(m(t.parentNode), function (e) {
                                      return e !== t;
                                    });
                                  }),
                                  e
                                );
                              },
                              empty: function Pe () {
                                return this.each(function () {
                                  this.innerHTML = '';
                                });
                              },
                              pluck: function Ie (t) {
                                return I.map(this, function (e) {
                                  return e[t];
                                });
                              },
                              show: function xe () {
                                return this.each(function () {
                                  'none' == this.style.display && (this.style.display = ''),
                                    'none' ==
                                      getComputedStyle(this, '').getPropertyValue('display') &&
                                      (this.style.display = e(this.nodeName));
                                });
                              },
                              replaceWith: function Ee (e) {
                                return this.before(e).remove();
                              },
                              wrap: function je (t) {
                                var n = s(t);
                                if (this[0] && !n)
                                  var r = I(t).get(0),
                                    a = r.parentNode || 1 < this.length;
                                return this.each(function (e) {
                                  I(this).wrapAll(n ? t.call(this, e) : a ? r.cloneNode(!0) : r);
                                });
                              },
                              wrapAll: function Ae (e) {
                                if (this[0]) {
                                  var t;
                                  for (I(this[0]).before((e = I(e))); (t = e.children()).length; )
                                    e = t.first();
                                  I(e).append(this);
                                }
                                return this;
                              },
                              wrapInner: function _e (a) {
                                var i = s(a);
                                return this.each(function (e) {
                                  var t = I(this),
                                    n = t.contents(),
                                    r = i ? a.call(this, e) : a;
                                  n.length ? n.wrapAll(r) : t.append(r);
                                });
                              },
                              unwrap: function Te () {
                                return (
                                  this.parent().each(function () {
                                    I(this).replaceWith(I(this).children());
                                  }),
                                  this
                                );
                              },
                              clone: function Oe () {
                                return this.map(function () {
                                  return this.cloneNode(!0);
                                });
                              },
                              hide: function De () {
                                return this.css('display', 'none');
                              },
                              toggle: function Re (t) {
                                return this.each(function () {
                                  var e = I(this);
                                  (t === w ? 'none' == e.css('display') : t) ? e.show() : e.hide();
                                });
                              },
                              prev: function Ve (e) {
                                return I(this.pluck('previousElementSibling')).filter(e || '*');
                              },
                              next: function Ne (e) {
                                return I(this.pluck('nextElementSibling')).filter(e || '*');
                              },
                              html: function Le (n) {
                                return 0 in arguments
                                  ? this.each(function (e) {
                                      var t = this.innerHTML;
                                      I(this).empty().append(b(this, n, e, t));
                                    })
                                  : 0 in this
                                  ? this[0].innerHTML
                                  : null;
                              },
                              text: function Fe (n) {
                                return 0 in arguments
                                  ? this.each(function (e) {
                                      var t = b(this, n, e, this.textContent);
                                      this.textContent = null == t ? '' : '' + t;
                                    })
                                  : 0 in this
                                  ? this.pluck('textContent').join('')
                                  : null;
                              },
                              attr: function Be (t, n) {
                                var e;
                                return 'string' != typeof t || 1 in arguments
                                  ? this.each(function (e) {
                                      if (1 === this.nodeType)
                                        if (r(t)) for (P in t) y(this, P, t[P]);
                                        else y(this, t, b(this, n, e, this.getAttribute(t)));
                                    })
                                  : 0 in this &&
                                    1 == this[0].nodeType &&
                                    null != (e = this[0].getAttribute(t))
                                  ? e
                                  : w;
                              },
                              removeAttr: function Ue (e) {
                                return this.each(function () {
                                  1 === this.nodeType &&
                                    e.split(' ').forEach(function (e) {
                                      y(this, e);
                                    }, this);
                                });
                              },
                              prop: function He (t, n) {
                                return (
                                  (t = $[t] || t),
                                  1 in arguments
                                    ? this.each(function (e) {
                                        this[t] = b(this, n, e, this[t]);
                                      })
                                    : this[0] && this[0][t]
                                );
                              },
                              removeProp: function qe (e) {
                                return (
                                  (e = $[e] || e),
                                  this.each(function () {
                                    delete this[e];
                                  })
                                );
                              },
                              data: function e (t, n) {
                                var r = 'data-' + t.replace(U, '-$1').toLowerCase(),
                                  e = 1 in arguments ? this.attr(r, n) : this.attr(r);
                                return null !== e ? C(e) : w;
                              },
                              val: function Ge (t) {
                                return 0 in arguments
                                  ? (null == t && (t = ''),
                                    this.each(function (e) {
                                      this.value = b(this, t, e, this.value);
                                    }))
                                  : this[0] &&
                                      (this[0].multiple
                                        ? I(this[0])
                                            .find('option')
                                            .filter(function () {
                                              return this.selected;
                                            })
                                            .pluck('value')
                                        : this[0].value);
                              },
                              offset: function ze (i) {
                                if (i)
                                  return this.each(function (e) {
                                    var t = I(this),
                                      n = b(this, i, e, t.offset()),
                                      r = t.offsetParent().offset(),
                                      a = { top: n.top - r.top, left: n.left - r.left };
                                    'static' == t.css('position') && (a.position = 'relative'),
                                      t.css(a);
                                  });
                                if (!this.length) return null;
                                if (
                                  D.documentElement !== this[0] &&
                                  !I.contains(D.documentElement, this[0])
                                )
                                  return { top: 0, left: 0 };
                                var e = this[0].getBoundingClientRect();
                                return {
                                  left: e.left + $u.pageXOffset,
                                  top: e.top + $u.pageYOffset,
                                  width: Math.round(e.width),
                                  height: Math.round(e.height),
                                };
                              },
                              css: function e (t, n) {
                                if (arguments.length < 2) {
                                  var r = this[0];
                                  if ('string' == typeof t) {
                                    if (!r) return;
                                    return (
                                      r.style[E(t)] || getComputedStyle(r, '').getPropertyValue(t)
                                    );
                                  }
                                  if (ee(t)) {
                                    if (!r) return;
                                    var a = {},
                                      i = getComputedStyle(r, '');
                                    return (
                                      I.each(t, function (e, t) {
                                        a[t] = r.style[E(t)] || i.getPropertyValue(t);
                                      }),
                                      a
                                    );
                                  }
                                }
                                var e = '';
                                if ('string' == o(t))
                                  n || 0 === n
                                    ? (e = p(t) + ':' + f(t, n))
                                    : this.each(function () {
                                        this.style.removeProperty(p(t));
                                      });
                                else
                                  for (P in t)
                                    t[P] || 0 === t[P]
                                      ? (e += p(P) + ':' + f(P, t[P]) + ';')
                                      : this.each(function () {
                                          this.style.removeProperty(p(P));
                                        });
                                return this.each(function () {
                                  this.style.cssText += ';' + e;
                                });
                              },
                              index: function Qe (e) {
                                return e
                                  ? this.indexOf(I(e)[0])
                                  : this.parent().children().indexOf(this[0]);
                              },
                              hasClass: function Ke (e) {
                                return (
                                  !!e &&
                                  A.some.call(
                                    this,
                                    function (e) {
                                      return this.test(k(e));
                                    },
                                    n(e)
                                  )
                                );
                              },
                              addClass: function We (n) {
                                return n
                                  ? this.each(function (e) {
                                      if ('className' in this) {
                                        x = [];
                                        var t = k(this);
                                        b(this, n, e, t)
                                          .split(/\s+/g)
                                          .forEach(function (e) {
                                            I(this).hasClass(e) || x.push(e);
                                          }, this),
                                          x.length && k(this, t + (t ? ' ' : '') + x.join(' '));
                                      }
                                    })
                                  : this;
                              },
                              removeClass: function Ye (t) {
                                return this.each(function (e) {
                                  if ('className' in this) {
                                    if (t === w) return k(this, '');
                                    (x = k(this)),
                                      b(this, t, e, x)
                                        .split(/\s+/g)
                                        .forEach(function (e) {
                                          x = x.replace(n(e), ' ');
                                        }),
                                      k(this, x.trim());
                                  }
                                });
                              },
                              toggleClass: function Je (n, r) {
                                return n
                                  ? this.each(function (e) {
                                      var t = I(this);
                                      b(this, n, e, k(this))
                                        .split(/\s+/g)
                                        .forEach(function (e) {
                                          (r === w ? !t.hasClass(e) : r)
                                            ? t.addClass(e)
                                            : t.removeClass(e);
                                        });
                                    })
                                  : this;
                              },
                              scrollTop: function Xe (e) {
                                if (this.length) {
                                  var t = 'scrollTop' in this[0];
                                  return e === w
                                    ? t
                                      ? this[0].scrollTop
                                      : this[0].pageYOffset
                                    : this.each(
                                        t
                                          ? function () {
                                              this.scrollTop = e;
                                            }
                                          : function () {
                                              this.scrollTo(this.scrollX, e);
                                            }
                                      );
                                }
                              },
                              scrollLeft: function Ze (e) {
                                if (this.length) {
                                  var t = 'scrollLeft' in this[0];
                                  return e === w
                                    ? t
                                      ? this[0].scrollLeft
                                      : this[0].pageXOffset
                                    : this.each(
                                        t
                                          ? function () {
                                              this.scrollLeft = e;
                                            }
                                          : function () {
                                              this.scrollTo(e, this.scrollY);
                                            }
                                      );
                                }
                              },
                              position: function $e () {
                                if (this.length) {
                                  var e = this[0],
                                    t = this.offsetParent(),
                                    n = this.offset(),
                                    r = B.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                                  return (
                                    (n.top -= parseFloat(I(e).css('margin-top')) || 0),
                                    (n.left -= parseFloat(I(e).css('margin-left')) || 0),
                                    (r.top += parseFloat(I(t[0]).css('border-top-width')) || 0),
                                    (r.left += parseFloat(I(t[0]).css('border-left-width')) || 0),
                                    { top: n.top - r.top, left: n.left - r.left }
                                  );
                                }
                              },
                              offsetParent: function et () {
                                return this.map(function () {
                                  for (
                                    var e = this.offsetParent || D.body;
                                    e && !B.test(e.nodeName) && 'static' == I(e).css('position');

                                  )
                                    e = e.offsetParent;
                                  return e;
                                });
                              },
                            }),
                            (I.fn.detach = I.fn.remove),
                            ['width', 'height'].forEach(function (r) {
                              var a = r.replace(/./, function (e) {
                                return e[0].toUpperCase();
                              });
                              I.fn[r] = function (t) {
                                var e,
                                  n = this[0];
                                return t === w
                                  ? i(n)
                                    ? n['inner' + a]
                                    : c(n)
                                    ? n.documentElement['scroll' + a]
                                    : (e = this.offset()) && e[r]
                                  : this.each(function (e) {
                                      (n = I(this)).css(r, b(this, t, e, n[r]()));
                                    });
                              };
                            }),
                            q.forEach(function (t, l) {
                              var d = l % 2;
                              (I.fn[t] = function () {
                                var n,
                                  s,
                                  c = I.map(arguments, function (e) {
                                    var t = [];
                                    return 'array' == (n = o(e))
                                      ? (e.forEach(function (e) {
                                          return e.nodeType !== w
                                            ? t.push(e)
                                            : I.zepto.isZ(e)
                                            ? (t = t.concat(e.get()))
                                            : void (t = t.concat(X.fragment(e)));
                                        }),
                                        t)
                                      : 'object' == n || null == e
                                      ? e
                                      : X.fragment(e);
                                  }),
                                  u = 1 < this.length;
                                return c.length < 1
                                  ? this
                                  : this.each(function (e, t) {
                                      (s = d ? t : t.parentNode),
                                        (t =
                                          0 == l
                                            ? t.nextSibling
                                            : 1 == l
                                            ? t.firstChild
                                            : 2 == l
                                            ? t
                                            : null);
                                      var n = I.contains(D.documentElement, s),
                                        r = /^(text|application)\/(javascript|ecmascript)$/,
                                        a = nt(),
                                        i = a[em],
                                        o = a[tm];
                                      c.forEach(function (e) {
                                        if (u) e = e.cloneNode(!0);
                                        else if (!s) return I(e).remove();
                                        _l(i) &&
                                          'SCRIPT' === e.tagName &&
                                          e.setAttribute('nonce', i),
                                          _l(o) &&
                                            'STYLE' === e.tagName &&
                                            e.setAttribute('nonce', o),
                                          s.insertBefore(e, t),
                                          n &&
                                            S(e, function (e) {
                                              null == e.nodeName ||
                                                'SCRIPT' !== e.nodeName.toUpperCase() ||
                                                (e.type && !r.test(e.type.toLowerCase())) ||
                                                e.src ||
                                                M(D, e.innerHTML, e.nonce);
                                            });
                                      });
                                    });
                              }),
                                (I.fn[
                                  d ? t + 'To' : 'insert' + (l ? 'Before' : 'After')
                                ] = function (e) {
                                  return I(e)[t](this), this;
                                });
                            }),
                            (X.Z.prototype = h.prototype = I.fn),
                            (X.uniq = j),
                            (X.deserializeValue = C),
                            (I.zepto = X),
                            I
                          );
                        })())
                      ),
                      (function () {
                        try {
                          getComputedStyle(undefined);
                        } catch (e) {
                          var n = getComputedStyle;
                          $u.getComputedStyle = function (e, t) {
                            try {
                              return n(e, t);
                            } catch (Yla) {
                              return null;
                            }
                          };
                        }
                      })(),
                      (tl = (el = il).zepto),
                      (nl = tl.qsa),
                      (rl = /^\s*>/),
                      (al = 'Zepto' + +new Date()),
                      (tl.qsa = function (e, t) {
                        var n,
                          r,
                          a = t;
                        try {
                          a
                            ? rl.test(a) && ((r = el(e).addClass(al)), (a = '.' + al + ' ' + a))
                            : (a = '*'),
                            (n = nl(e, a));
                        } catch (i) {
                          throw i;
                        } finally {
                          r && r.removeClass(al);
                        }
                        return n;
                      }),
                      il),
                    Sm = ol.MutationObserver || ol.WebkitMutationObserver,
                    Mm = 'Expected an array of promises';
                  dl._setImmediateFn && Ne();
                  var wm = G(),
                    Pm = /.*\.(\d+)_\d+/;
                  ct(ol, sl);
                  var Im = 'at-library-loaded',
                    xm = 'at-request-start',
                    Em = 'at-request-succeeded',
                    jm = 'at-request-failed',
                    Am = 'at-content-rendering-start',
                    _m = 'at-content-rendering-succeeded',
                    Tm = 'at-content-rendering-failed',
                    Om = 'at-content-rendering-no-offers',
                    Dm = 'at-content-rendering-redirect',
                    Rm = ':eq(',
                    Vm = ')',
                    Nm = Rm.length,
                    Lm = /((\.|#)(-)?\d{1})/g,
                    Fm = 'Unable to load target-vec.js',
                    Bm = 'Loading target-vec.js',
                    Um = '_AT',
                    Hm = 'clickHandlerForExperienceEditor',
                    qm = 'currentView',
                    Gm = 'at-',
                    zm = 'at-body-style',
                    Qm = '#' + zm,
                    Km = Gm + 'views',
                    Wm = 'at_qa_mode',
                    Ym = 'at_preview_token',
                    Jm = 'at_preview_index',
                    Xm = 'at_preview_listed_activities_only',
                    Zm = 'at_preview_evaluate_as_true_audience_ids',
                    $m = 'at_preview_evaluate_as_false_audience_ids',
                    eh = '_',
                    th = function th (e) {
                      return !m(e);
                    },
                    nh = 'Disabled due to optout',
                    rh = 'MCAAMB',
                    ah = 'MCAAMLH',
                    ih = 'MCMID',
                    oh = 'MCOPTOUT',
                    sh = 'getSupplementalDataID',
                    ch = 'getCustomerIDs',
                    uh = 'trackingServer',
                    lh = uh + 'Secure',
                    dh = 'Visitor',
                    ph = 'getInstance',
                    fh = 'isAllowed',
                    mh = 'Visitor API requests timed out',
                    hh = 'Visitor API requests error',
                    gh = {},
                    vh = 'Data provider',
                    bh = 'timed out',
                    yh = 2000,
                    kh = 'authorization',
                    Ch = 'mboxDebugTools',
                    Sh = ir(),
                    Mh = 'profile.',
                    wh = 'mbox3rdPartyId',
                    Ph = 'at_property',
                    Ih = 'orderId',
                    xh = 'orderTotal',
                    Eh = 'productPurchasedId',
                    jh = 'productId',
                    Ah = 'categoryId',
                    _h = 'POST',
                    Th = 'Network request failed',
                    Oh = 'Request timed out',
                    Dh = 'Malformed response JSON',
                    Rh = 'web',
                    Vh = 'mboxedge',
                    Nh = function Nh (e) {
                      return !j(e);
                    },
                    Lh = function Lh (t) {
                      return function (e) {
                        return e[t];
                      };
                    },
                    Fh = function Fh (t) {
                      return function (e) {
                        return !t(e);
                      };
                    },
                    Bh = Fh(m),
                    Uh = function Uh (t) {
                      return function (e) {
                        return h(t, e);
                      };
                    },
                    Hh = function Hh (e) {
                      return e.status === vp;
                    },
                    qh = function qh (e) {
                      return e.type === jp;
                    },
                    Gh = function Gh (e) {
                      return e.type === od;
                    },
                    zh = Uh(Bh),
                    Qh = Lh(Tf),
                    Kh = Lh(Ll),
                    Wh = Lh(Ap),
                    Yh = function Yh (e) {
                      return _l(e.name);
                    },
                    Jh = function Jh (e) {
                      return !m(e.index);
                    },
                    Xh = function Xh (e) {
                      return d(e) && Yh(e);
                    },
                    Zh = function Zh (e) {
                      return d(e) && Yh(e) && Jh(e);
                    },
                    $h = function $h (e) {
                      return d(e) && Yh(e);
                    },
                    eg = function eg (e) {
                      return _l(e.selector);
                    },
                    tg = Lh(_p),
                    ng = b([tg, Bh]),
                    rg = 'adobe_mc_sdid',
                    ag = 'Network request failed',
                    ig = 'Request timed out',
                    og = 'URL is required',
                    sg = 'GET',
                    cg = 'POST',
                    ug = 'method',
                    lg = 'url',
                    dg = 'headers',
                    pg = 'data',
                    fg = 'credentials',
                    mg = 'timeout',
                    hg = 'async',
                    gg = /CLKTRK#(\S+)/,
                    vg = /CLKTRK#(\S+)\s/,
                    bg = function th (e) {
                      return !m(e);
                    },
                    yg = 'visibilityState',
                    kg = 'visible',
                    Cg = 100,
                    Sg = Od + ',' + Rd + ',' + Dd,
                    Mg = 'at-action-key',
                    wg = 'metric element not found',
                    Pg = 'navigator',
                    Ig = 'sendBeacon',
                    xg = 'Beacon data sent',
                    Eg = 'Beacon data sent failed',
                    jg = 'View triggered notification',
                    Ag = 'View rendered notification',
                    _g = 'Mboxes rendered notification',
                    Tg = 'Event handler notification',
                    Og = 'Mbox event handler notification',
                    Dg = 'View event handler notification',
                    Rg = 'prefetchMboxes',
                    Vg = 'rendered',
                    Ng = 'triggered',
                    Lg = {},
                    Fg = 'pageLoadMetrics',
                    Bg = 'prefetchMetrics',
                    Ug = Lh(Of),
                    Hg = function Hg () {
                      return fa(Mp);
                    },
                    qg = function qg (e) {
                      return ma(Mp, e);
                    },
                    Gg = Lh(Ll),
                    zg = Lh(Kl),
                    Qg = function Qg (e) {
                      return fa(Sp, e);
                    },
                    Kg = function Kg (e) {
                      return ma(Sp, e);
                    },
                    Wg = function Wg (e) {
                      return Fh(Hh)(e) && ng(e);
                    };
                  ec.prototype = {
                    on: function (e, t, n) {
                      var r = this.e || (this.e = {});
                      return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
                    },
                    once: function (e, t, n) {
                      function r () {
                        a.off(e, r), t.apply(n, arguments);
                      }
                      var a = this;
                      return (r._ = t), this.on(e, r, n);
                    },
                    emit: function (e) {
                      for (
                        var t = [].slice.call(arguments, 1),
                          n = ((this.e || (this.e = {}))[e] || []).slice(),
                          r = 0,
                          a = n.length;
                        r < a;
                        r++
                      )
                        n[r].fn.apply(n[r].ctx, t);
                      return this;
                    },
                    off: function (e, t) {
                      var n = this.e || (this.e = {}),
                        r = n[e],
                        a = [];
                      if (r && t)
                        for (var i = 0, o = r.length; i < o; i++)
                          r[i].fn !== t && r[i].fn._ !== t && a.push(r[i]);
                      return a.length ? (n[e] = a) : delete n[e], this;
                    },
                  };
                  var Yg = ec,
                    Jg = ec;
                  Yg.TinyEmitter = Jg;
                  var Xg = tc(),
                    Zg = 'Page load rendering failed',
                    $g = 'Mboxes rendering failed',
                    ev = 'View rendering failed',
                    tv = 'Prefetch rendering failed',
                    nv = function nv (e) {
                      return !j(h(Hh, e));
                    },
                    rv = '[page-init]',
                    av = '[getOffer()]',
                    iv = '[getOffers()]',
                    ov = '[applyOffer()]',
                    sv = '[applyOffers()]',
                    cv = '[sendNotifications()]',
                    uv = '[trackEvent()]',
                    lv = '[triggerView()]',
                    dv = [],
                    pv = 1,
                    fv = 0;
                  qu();
                  var mv =
                      'function has been deprecated. Please use getOffer() and applyOffer() functions instead.',
                    hv =
                      'adobe.target.registerExtension() function has been deprecated. Please review the documentation for alternatives.',
                    gv = 'mboxCreate() ' + mv,
                    vv = 'mboxDefine() ' + mv,
                    bv = 'mboxUpdate() ' + mv,
                    yv = { init: Zu, initConfig: X, initDelivery: Jc };
                  e.exports = yv;
                },
              },
              'adobe-target-v2/lib/messages.js': {
                script: function (e) {
                  'use strict';
                  e.exports = {
                    ALREADY_INITIALIZED: 'AT: Adobe Target has already been initialized.',
                    DELIVERY_DISABLED:
                      'AT: Adobe Target content delivery is disabled. Update your DOCTYPE to support Standards mode.',
                    NO_REQUEST:
                      'AT: Target library is either not loaded or disabled, no request will be executed',
                  };
                },
              },
              'adobe-target-v2/lib/modules/params-store.js': {
                script: function (e, t, n) {
                  'use strict';
                  function o (e) {
                    return null != e.value && null != e.checked;
                  }
                  function r (a) {
                    var i = {};
                    return (
                      Object.keys(a).forEach(function (e) {
                        var t = a[e];
                        if (o(t)) {
                          var n = t.checked,
                            r = t.value;
                          (n && '' === r) || (i[e] = r);
                        } else i[e] = t;
                      }),
                      i
                    );
                  }
                  function a (e) {
                    var t = r(e);
                    u(l, t);
                  }
                  function i (e) {
                    var t = r(e);
                    u(d, t);
                  }
                  function s () {
                    return l;
                  }
                  function c () {
                    return d;
                  }
                  var u = n('./object-override'),
                    l = {},
                    d = {};
                  e.exports = {
                    mergeParams: a,
                    mergePageLoadParams: i,
                    getParams: s,
                    getPageLoadParams: c,
                  };
                },
              },
              'adobe-target-v2/lib/modules/object-override.js': {
                script: function (e) {
                  'use strict';
                  function r (e, t, n, r) {
                    t[n] !== r && (e[n] = t[n]);
                  }
                  function a (e) {
                    return !Array.isArray(this.subset) || -1 !== this.subset.indexOf(e);
                  }
                  e.exports = function (t, n, e) {
                    Object.keys(n)
                      .filter(a, { subset: e })
                      .forEach(function (e) {
                        r(t, n, e);
                      });
                  };
                },
              },
              'adobe-target-v2/lib/librarySettings.js': {
                script: function (e) {
                  'use strict';
                  var t = { version: '2.3.0' };
                  e.exports = { TARGET_DEFAULT_SETTINGS: t };
                },
              },
              'adobe-target-v2/lib/modules/page-load.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('../librarySettings'),
                    a = n('@adobe/reactor-window'),
                    i = n('./object-override'),
                    o = n('./params-store'),
                    s = o.getParams,
                    c = o.getPageLoadParams,
                    u = n('../targetSettings').targetSettings;
                  e.exports = function (e) {
                    return (
                      (u.mboxParams = s()),
                      (u.globalMboxParams = c()),
                      i(u, e, ['bodyHidingEnabled', 'bodyHiddenStyle']),
                      i(u, a.targetGlobalSettings || {}, [
                        'enabled',
                        'bodyHidingEnabled',
                        'bodyHiddenStyle',
                      ]),
                      i(u, r.TARGET_DEFAULT_SETTINGS || {}, ['version']),
                      u
                    );
                  };
                },
              },
            },
            settings: {
              targetSettings: {
                enabled: !0,
                timeout: 3000,
                version: '2.3.0',
                endpoint: '/rest/v1/delivery',
                imsOrgId: 'C5E7148954EA18A10A4C98BC@AdobeOrg',
                clientCode: 'mcgrawhill',
                secureOnly: !1,
                serverState: {},
                optinEnabled: !1,
                serverDomain: 'mcgrawhill.tt.omtrdc.net',
                urlSizeLimit: 2048,
                viewsEnabled: !0,
                optoutEnabled: !1,
                globalMboxName: 'target-global-mbox',
                bodyHiddenStyle: 'body {opacity: 0}',
                pageLoadEnabled: !0,
                analyticsLogging: 'server_side',
                deviceIdLifetime: 63244800000,
                bodyHidingEnabled: !0,
                sessionIdLifetime: 1860000,
                visitorApiTimeout: 2000,
                authoringScriptUrl: '//cdn.tt.omtrdc.net/cdn/target-vec.js',
                overrideMboxEdgeServer: !1,
                selectorsPollingTimeout: 5000,
                defaultContentHiddenStyle: 'visibility: hidden;',
                defaultContentVisibleStyle: 'visibility: visible;',
                overrideMboxEdgeServerTimeout: 1860000,
                supplementalDataIdParamTimeout: 30,
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP04c816d41bf741eca35e7b23377fe6ea/',
          },
        },
        company: { orgId: 'C5E7148954EA18A10A4C98BC@AdobeOrg' },
        property: {
          name: 'Mheducation (DTM - 2020-03-23 08:38:34)',
          settings: {
            domains: ['mheducation.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL00a7ab6a7e8a418db60ccc75f5f5f10a',
            name: 'Topics and Ideas Search Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: '(search.html)(.*)(&bu=content)', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      t.prop23 = 'viewed | topicsideas:search';
                    },
                  },
                  trackerProperties: { pageName: 'Topics and Ideas Search' },
                },
              },
            ],
          },
          {
            id: 'RL011a2640860f4f4c8cd96cb049b05fbb',
            name: 'Social Media Share',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a',
                  elementProperties: [
                    {
                      name: 'className',
                      value: 'email|facebook|twitter|linkedin',
                      valueIsRegex: !0,
                    },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.linkTrackVars = 'eVar12,prop11,prop23'),
                        (t.eVar12 = t.prop11 = this.className.split(' ')[0]);
                      var n = _satellite.getVar('Content Title');
                      t.prop23 =
                        'HOME' == n
                          ? 'share|' +
                            this.className.split(' ')[0] +
                            ':' +
                            this.parentNode.parentNode
                              .getElementsByClassName('wa-article')[0]
                              .textContent.trim()
                          : 'IDEAS HOME' == n
                          ? 'share|' +
                            this.className.split(' ')[0] +
                            ':' +
                            this.parentNode.parentNode.parentNode
                              .getElementsByClassName('wa-article')[0]
                              .textContent.trim()
                          : 'share|' + this.className.split(' ')[0] + ':' + n;
                    },
                  },
                  trackerProperties: { events: [{ name: 'event3' }, { name: 'event4' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'e' },
              },
            ],
          },
          {
            id: 'RL01cf179b870e4df9b719865c1e99b4a2',
            name: 'Generic 404 Error Page',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'generic_404_error_page' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      console.log('in error page rule');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event10' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL02b8491fec6646db9515914d6e0f1f27',
            name: 'Target_SEGprogramPage',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12/program', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'highered', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [],
          },
          {
            id: 'RL33a4001be50a43c1ad007758c1dcf633',
            name: 'Toggle Button',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'div.toggle-button-container a.toggle-button',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% : %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Toggle Button', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL34cd260dbe564de6a624bc5c727e389d',
            name: 'Remove',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ecom_remove' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = _satellite.getVar('dl product_name');
                      t.linkTrackVars = 'products';
                      var r = ';' + n;
                      t.products = r;
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%dl product_format%' },
                      { name: 'eVar28', type: 'alias', value: 'prop26' },
                    ],
                    props: [{ name: 'prop26', type: 'value', value: '%dl product_isbn%' }],
                    events: [{ name: 'scRemove' }, { name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL0362d8ffb90e44bcbf4690d90d2417c7',
            name: 'Request Sample Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_request_sample_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Request Sample Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event48' }, { name: 'event69' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Request a Sample Submit', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC9e766c178bbe4491b684aae506edfe0d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL04f20269710d4a87b0751220fae64a04',
            name: 'MicroNav',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.micronav a , .customnav a',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% : %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Custom NavBar Click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL0ece310186b34a0f837eba8d51fe7c64',
            name: 'Unified Search Filter Applied',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'unified_search_filter_applied' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar7', type: 'value', value: '%dl unified_search_filter_value%' },
                    ],
                    props: [
                      { name: 'prop5', type: 'value', value: '%dl unified_search_filter_value%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'search|refine:%dl unified_search_filter_value%',
                      },
                    ],
                    events: [{ name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL2a5d9c6f7a4b4d95807ca7ef8b7d0bcb',
            name: 'HE PDP - Instructor Share Class Change',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "$(function(){\n$('.instructorSharelink > a').removeClass('email').addClass('instructor-share');\n});",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL1071989c5828452594e35dd6b615254a',
            name: 'Request Demo Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_request_demo_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Request Demo Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event48' }, { name: 'event61' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Request a Demo Submit', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCfcde065ce13c4b00beb099329791e83c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2d4a5707b72842ed9a82d9950e0e5895',
            name: 'Product Add To Cart',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'product_add_to_cart' },
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
                      console.log('in add rule');
                      var n =
                        ';' +
                        _satellite
                          .getVar('dl cart_product_title')
                          .replace(/,/g, ' ')
                          .replace(/;/g, '-')
                          .replace(/  /g, ' ')
                          .trim()
                          .substring(0, 98);
                      (t.linkTrackVars = 'products,prop15,prop23,prop26,eVar28'), (t.products = n);
                      var r = window.location.pathname;
                      -1 != r.search('/highered/') && (t.events = 'event4,scAdd,event37'),
                        (-1 == r.search('/prek-12/') && -1 == r.search('/search')) ||
                          (t.events = 'event4,scAdd,event36');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar28', type: 'value', value: '%dl cart_product_isbn%' }],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Add To Cart' },
                      { name: 'prop23', type: 'value', value: 'click|Add To Cart' },
                      { name: 'prop26', type: 'value', value: '%dl cart_product_isbn%' },
                    ],
                    events: [
                      { name: 'event4' },
                      { name: 'scAdd' },
                      { name: 'event36' },
                      { name: 'event37' },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Product Add to Cart', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL2da1aa23fa874370b28cbe98b93eff51',
            name: 'Body CTA - Secondary',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.secondary-button, .btn-default ',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% - Secondary CTA on %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Body CTA - Secondary Button', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL52109e435c4a49e4bffc5e15f4bfe1cd',
            name: 'Migrated from DTM: Adobe Analytics - Send Beacon on every page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 100 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLc222501fb0354d5eb0a52a130dff8925',
            name: 'Adroll - HE - Connect/Proctorio',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'div.button.section button.btn-primary',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/highered/explore/webinars/connect-proctorio' }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCb3f2093c4263436d8453d78901972dfb-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLaba1aa639d0242a98a2960d75f4a8a00',
            name: 'Google Adwords Script - Preview',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'button#view-a-chapter', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC727ea6d9e25e4126ac6997a4ec047eac-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL32f32819ebbd40f5891cc501d6159fb1',
            name: 'Pinterest PREK12',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript"> !function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push( Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js"); pintrk(\'load\', \'2614166995891\'); pintrk(\'page\'); </script> <noscript> <img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?tid=YOUR_TAG_ID&noscript=1" /> </noscript>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL56042a96f6804b79943c1c95c65739d9',
            name: 'Global Navigation Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '[data-wa-globalheader-nav]',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      {
                        name: 'eVar17',
                        type: 'value',
                        value: 'Global Navigation:%this.dataset.waGlobalheaderNav%',
                      },
                    ],
                    props: [
                      {
                        name: 'prop15',
                        type: 'value',
                        value: 'Global Navigation:%this.dataset.waGlobalheaderNav%',
                      },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click|Global Navigation:%this.dataset.waGlobalheaderNav%',
                      },
                    ],
                    events: [{ name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL578beb0262d2471fbae6383ee67265fe',
            name: 'Glyphicon Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'a > span.glyphicon', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'Glyphicon' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | Glyphicon : %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Glyphicon', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL5c333bd8b42a42368710748a36b54142',
            name: 'Live Chat - HE PDP',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/highered/product/', valueIsRegex: !0 },
                    { value: '/highered/support', valueIsRegex: !0 },
                    { value: '/highered/connect/students/collegesmarter.html', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      function e (e, t, n, r, a, i, o) {
                        (s.chatServerUrl = e),
                          (s.buttonId = t),
                          (s.chatServerInitId1 = n),
                          (s.chatServerInitId2 = r),
                          (s.deploymentScript = a),
                          (s.contactAccountId = i),
                          (s.caseRecordType = o);
                      }
                      function t () {
                        $('footer').livechat(s);
                      }
                      var r;
                      (r = jQuery).widget('mhe.livechat', {
                        options: {
                          mobileWidth: 991,
                          showFx: { effect: 'fadeIn', duration: 800 },
                          offset: 0,
                          offsetEl: null,
                          addEl: !0,
                          isOnline: !1,
                          userInfoUrl: '/store/ecomm/getUserInfo',
                          deploymentScript: '',
                          buttonId: null,
                          chatWindowWidth: 800,
                          chatWindowHeight: 600,
                          chatServerUrl: '',
                          chatServerInitId1: '',
                          chatServerInitId2: '',
                          contactStatus: 'Pending',
                          contactAccountId: '',
                          caseStatus: 'New',
                          caseOrigin: 'Chat',
                          caseRecordType: '',
                          caseProduct: 'Connect',
                          caseSource: 'eCommerce',
                          caseDepartment: 'Mheducation Chat',
                          contactSource: 'Mheducation Chat',
                          startChat: null,
                          startChatWithWindow: null,
                        },
                        _create: function () {
                          var e = this;
                          (this.footer = this.element),
                            (this.onlineButton = r('<a>')
                              .attr('href', 'javascript:;')
                              .attr('class', 'live-chat-button-online')
                              .attr('id', 'live-chat-online')
                              .attr('style', 'display: none')
                              .css('z-index', '5001')
                              .append('<img>')
                              .appendTo('body')),
                            (this.offlineButton = r('<a>')
                              .attr('href', 'javascript:;')
                              .attr('class', 'live-chat-button-offline')
                              .attr('id', 'live-chat-offline')
                              .attr('style', 'display: none')
                              .css('z-index', '5001')
                              .append('<img>')
                              .appendTo('body')),
                            this.onlineButton
                              .find('img')
                              .attr({
                                src:
                                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAwCAIAAADb+6K9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDE1MjE0N0MyMzQwMTFFOUJBMTI4QjQxNjU5QjQ3QzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDE1MjE0N0QyMzQwMTFFOUJBMTI4QjQxNjU5QjQ3QzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMjlFNjI3NTIwREMxMUU5QkExMjhCNDE2NTlCNDdDMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMjlFNjI3NjIwREMxMUU5QkExMjhCNDE2NTlCNDdDMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt4ZfEcAABMxSURBVHja7F0JlBzFea6re669V7vSSoIgxCUhtBLYFssRGQHhCIFwPDs8YxOH59ghPDCOHxG2IQEbS/DAcrDikOdnwmmCCDYKl4QwRAY/DgkESFyRQbJAKKuVtKvd2Z2Z7q6qfFU1Mzs7e2nF2k+wU9o36q3urq6p+vr7v/+vY+m2qYeRsSRFzSfT5pOW5OtBV9J8PrXH7rwyObRwZEsqKc2etTmV9ElPYlxK0ft6AQOoqPlFsQHw6gdZJU1QYDE9LJ4UHfZKRWkxk2uLIW2uZyVnC9frSq98CtK4kUQZqvbxVCVVGKtMOe0rbhTVBQirfiVVoKcCV1VYqqKxxmgxgSc1kBiteFdEM2MKK5CqAGtkG8dKhbhmhTOK6bwfWe7xUcX6/UpW0VYVYI2CAKoH8BbVjFMlTbyBFSS8NnymLZioKimRVsT7xBXvehBdgauYlVIGUooyzQRlVGkkSrmWwIuHw0gDYjzSSuEyc6CpEIpw/OBYM6Yc/CppInuFgwU7sME597lQAIiUMIbIMSrKF0ZjcYGzURTF/Zi5XSkhBH51x4xBa5kcXZFcFY1Vljj3wmzAbVIgKWp4TBMdUg24hbmAUuoxEWVzHucGc2FEtDJYFMwAETlMaQplzyu9UgFWia6yJATukURLsBDkFAdSjJgKo0jEYtKAjCvOsiAnyhk1xg/YCsOIQ8kb4QU4VoxhBVglPmCBtHg2CAkDNQloLvAPpdqjLBeEkUeyhOc4jRg1BpOQuJIsCFOM4XoYSi01B58pWRHvExpYTA8YjXYaC8KcewIWLlCRAry4CBRLE05rEhlKjpgzu/6g6aS+juQCIkT3pk27drS379zpxyjJBCnf44HkRu9XOuXTkOhYZzfQ4SjFeIGa+X4I7U6Z4jQrVZBMzjh5UePCk8hnW8kHW0j7drLl90QykqwhhxxK5raSvZ3h6tXPP/5ooqenId2XjGSFryYosEqmw8Dc9Qc2jbqSEroqS1Tgx0BRf3L4Ec2X/g2ZOi379Jrn/2e1zqRFNpOglIXQ9X6GJzKemLXg2BnnnEWmT5P33rPh0SeSuVwiUgJGlKjK/JkDEzDFoNPIUcexAosSZgIKnColcx6Dh8czQcgFwBBBPckwzMb9zlSy5ei5h1zzHfLE45tWroz2dnkmogC3TwrIdSh7JkIai1ApofqYmtZ6zPTFi8nL656+fXlLOtMgFQ1zIROVbjzgYKWNz67BKcbZUsQFLscFWNIO9WkS+XABlQwDSYUnKY2AKsCN8b2CJo46rPXGG/vufeiV1U9NzvalwtDcCAsJujLxLRNcoCwWRVEMFtNjHTEvU1O98MYfkLfeXv+vd1Snu6sNH1JNRhdc8Ysv9OfOMd+wuzu75tlo/Wt/bJX6mXnx009hNTVlFWAHT/VPbMNB8NsX1LaPxvGJ/pmLWH19WcnFx6nOzmDVM39oYNkhX0UGyOyPawrtlARKbTAzEJQRLfoIyyRSPUJk4rEeQS74yc3yuedeuuuBSYH0YP4EB1sBkWZ0kIDtIiAsjJTnxXQggcVQ8J6YSBw1+4jvLG6/5ZbtG15tDCIWyVHbt/66a/1DDinNzG56s+eue7MPPPzx+9X13wj9BEjV3/TP8TlHl2ZmXnxpz9XX4IlAfNOtS5HT8e3FqM9YwSoOn2m+zlA3Nq1+xD002Lq1/cTTiy+YexxaoOOMv/yDAcv8U3YgjpUEBMbBKzQYoTxQJgYlCQvj/l7NZG194+x5raefRo6ZRZobyM5tj694cKYMk0FEGO3ROhP3IxO4kozTXASnkHGfcNRT+76GUQyrqOrY/C5ZvWryoj999803UmEUh1sJGOp+c16WGpf+QDQ1ufZV6V7X1vjscbA4sa2/X7c9vB+NWHv1lSjN9NNQwALsmm5fxlLJsvzE8QuaHri72N/7l5IXnlf7lUtw8MGIiMRLVbPkn7qvveGPRs/ajQRTO2SifTa8Lzc2YNmJxUyHEhwESGQZ6U4m6JzZx3/1MnJcG/EYESHJ9JJ165uzypMGfJqL3kR8yjlnpVqmvPzYqkkNdcccv+Ctt9/evnnzopNO8mls7SOPTA806UvXCPnu048deduyXk8EjMQoRQF0GEcU/VpEletFUFTNNd9SPT0j04NjshF4CBew5uZRTSpg51CFCnR+fwlKA2fUXvENdLZoasbxkPw3uG4uf79pFfjLrn1uBNvnvm+0+b1xEQlGzRi/zRgTM+1JCwsyPQ6MRbkZ12OC71JRV1398ZdeEvvyJSSZJMI3M9pRXsS3vPGWH2kGx87oJHbwrNkNV11JOD21aTKZP480NB6bzXQ98Vjs7HPApceluz98/PEqLnQYde3sINU1WWoGFzkx4t5G4vMTJobkLfQi3lrXuF1XfNtlIse98cZwgLduXfrBtMPR2dV//eWi5VK9fXv/4670kmWl1++95z4cmM+VD+VNzJyjD9q+GTmlxAA0uHJQSMfFlzpMADToP5BN+t9+5kxhvoQT2+r/8R/ca6BuuL7jyqtRVfR31d99rfrCC4qcB2rc/bXLcWPR0iHh0aOaNjB3+1sXDcmpjnTdr1FHR+fNt6GSk3+7BugvvpB1y2+tPv88HGxvW4inJy+/rPG7i/Hr7puW9v3054NMIcujygwGj+QVjs2lRylZHYaC5ijrq6lZcNUVsa9+hVRXET9GGCMcpXHC4nVNLRIQ0wIGWZLC86nxCEFhxI7/GFtqAGTD87gsIp5IUniNUvtUcAo3szDSjdP5pT39CX2DpjFfIJUEFCb//N+n/e/rDXffAXUyrOGYOwetjPZFVwEQuLH+isvR+mUEsE/ya36rO+h9ak0p04AVgL8y7kG3OVS52lZd/IV8vkUVKuO+COrWsOyWMXWHuxGFg6oHExUsdan+w2V4xwD33IbXnRl1bZU46YS8/f3SF001Fnw2D/THnhxSCHEz/4kT7YZ01fhoLNPVFFqb9YrY9BNOiF9wPsELxzhx8XIz4ocCRf3MI3pi8WQQxhhQI7e8uSn8l+U1LS3P/+qRKc1Nsz63YN1rr3Z99OGinR14A1555tdTADjhdRM653PHk917RDZLg0gPDJoNrgwMUKl4RyelTjs10dYGSuh7eGURJSCb4I1NODBE0t3tKAp4AhZNOy48udSO9D79675Va0A8uMXZNXTe3uV3IGdAt9XU5Bukp2fURkOZXdfdCPM6+Rd3o5J8yhRz47aPwJd99z/oUDjp4fsgzvBjKrzsdnnxF/BdnECE1R6u5J77/7P2by8DYoDdspqADh0XOq4FnhpvuN7A+qLzu392p6MoOLPBpIYi6OOfOS5NSKx1rnNBhjTNLm4paRE2anw0lhnJwVOJ6Kitnv/3lxPmESaIAj0ZTFlfERfFydln5lasyLz3fjIbMK1qo2DHo098SGhzJOmOXRs3bKryWLWONj/4X5KySUrFVdTHSFcqFT/vL8hTTzbqKCYjno9r5IFFB/EuANG+6hlQtz97Vmx+q0OY4aHrrgXJB9arMpe9sckpmzh03jlng6WAlcxvnh/yC+659BtF7oHdNC2X7h0sjKIPPsw339SWURsNSEUn4SfYsqVIIUb6HHVk7dOGFXIbN6p0uvR7RQtPztPGiHpRdXbtXvw994aUcW3s2PmO0pwFRzm9J7YBT8DurgsvcYSNCohp05wVRsVwqqhcs+tfGcZm5U0hIYOMyMcxhUge6JB7yZmHkoOmk5gnYcM4d32vnSICVjk76/vXd06q3R3zcpTElarr7WvOZuuCXH2UmxKFDb2Z+ky2LptrDMLqIATBSo/VHjyVtDRveHKVn8t5xg5qN9VBD+N6oBXwAx0AaQUktV/29aKvNKSGrf/mlTiFNgVWUmed8XE0bPByvt3BK6XG1Pj8UEiDlPvgBEbBvejdqGMnrapy/LQ/NVn1DDhprHdlXnjBGMG2NmcHe1c+6qwq3sk8oNc8O5zJkvs2mjs2YEEzqdCIo8PmHUcE8BRyj5iwg0RBZh6yKQ9uQo1Hjphx+m1L2qc29SUTEfgG+kpHnEmpAskk/EfFONSVmWiqVAjdxQXzzPSZbFdPXJs4vhl8NHjS/bQ1MKEVICOgu51WcDFDp1IHfMP6OucZOdPQ+ePboYXbz71oX0m6KuVwOYCx1r8GA5d3DmwdACZ8wtzg1XdSZuRii4yCVwL16fnVymFd1IGPHpzASQ4WpSn36oZiPMIhPvVnpzsbZ3Dz0jrH7o6f8HI6CnfvJEobzoWUBlgDpdH4MBbV0NWcMjNNz/wKYEizDIeauVXMyiwJbw5CPu6RWUf++Z13Tj/zjC2JxPZU7KOY2B0T3XG/g/NdPt8T93b5XofH4ofOqDnqqD3Ce2vbFsi14047o8+LBwzIA+sanMK+2iD8AJ1Yde3VaAWn3FtWPgTvyUWtzPv35GoXgM47Td9d3PTA3fDn85L5S3+Ftt4XmaytecJTUDjMaNlZyKZS7wFPx6fDLjA3akQ03Pw7VzicMtTH9frgNO2FtYOF+ZByE0xcmmMEpc1BrVzjuLpBYJUJ8zzU1j7XnzOMTiDFNQrjzlj2DkWi7J733yOBgRSjnHAPRovZkpSUXBh20lKTeIJMbm66/nunPHjfMddcQxedsmP69M2p1AeNDe/X1Ki5c6eee/a8pd+f/ONljUtvW3j/ii9e9a3e1zf637yqo3FSLl4VphIaRVELKl1KXbbhliyDP+wapZ9IOjqKcQHYiCKpiKZmSJzO5T9FW6Mv0dbRjv8b9YuiD4q9JWD3y4zCto9ANnhcKUG6ChSF2kiF3/IjKBvnM8IuQ2aVwaJIQqJlyr4YxJ6Hf1lWPTgx7hHFusEVcJ4KzhabzskpI+wKX6QUZIMCmYazDIdoNuxozn4M6ZjhIRX1pqq2JlJn3H8POWw6Sca1NkZNSs05tQsodB6v+F9ar8GyGAlDksmaMqLI5OzYQbZs7Vi/7sWX12d7w4MPnbHg5DYCk18/iax89JWfLK+tSkJs8WyOBIGNN2grF+lwYy9DxgDLwo/OJu57NHLUaGrpCMx+BCGdPhuucGdPxzocNF51GwYB1lJBq1A68prQMY4Vmqkyqo+xvqqa6oUnz7z1hzqVsEMvjlA0sWGzyEw+ZjKQQhQmsEdmZikBjeEgiMg776z9+uX16axBJIDpxTK5LIvxHKUHtx590OdP3bvil13t7VG6VyjJNKlMKz1AklnJYMINLB9dGn64cIyRd21mEgtN/Ez49kvrZmrlBqNp3nszJstMpLJ2Ufh27ZcjL9+zg+HKUOnevc/etKSxLzcpm3PzToVnJJtKB4FHd7/6evv6V6sVTTIRM9PiXaSEVrB1IMFr9M4Y85AOTF1kFmx5iXjKxcfyxqmwGJWDmQygzGCOWXFT3PsqDEg6Q373/sabf5R6b2sqF7p5Erheq4jZGLxQpCoITYTXhOgj4qBagdUBk7QbISyyzDgCC8aQMy+g7NTzziXpXmvmPLKzg7Q0E2HiBwZtJmqqKRf5lfdQWiokXZ3plf/90i9W1O7qqssFvpJlPgQ10/76d3PQjgsJqRjCAwxb+6btxlquDOHucVbjkdbZ5KFH3vjNcx3v/J4K3jzvyDmnfp7MbyXNjYT7hHoGYUBVlCWbNubWvvj66jV+d8+UXNbXkVCydNcGaemNW5PqJpG5mFmlFz/B5nLMiyk0lTE/rEt1ZvqAg7ik1ZLlZNSb5D1C5TzBa+uaZ8yU3M+FWmUy7VvfTWWyTb2qKpRx6C8VaN8siRZmbmseVQ5l3AyYq5KBnEqaUMBiGk5BBBkFSSREmMvFiFnZHFHNE4kMhJTwcuAfPyaVAYpPIiHDWBDZJRIEHmQuDD3PozK/hkyT8pVklfQpSGPXWNDbURiH4dLKBRTMrg3gG6l5OhPnQuZy8ArD3gywFYY5SHluZ/HYmCmTkdniwYXpS8yhKrivbGRJWEmfWmABGYJ5dsI7VDyB7WJmqqcUdlFNKCPgRspIcMj3APBjDFRll8+bHWXskKENTFg/0Eh1lo9WgNBUflfSCrY++Wns2xgxI4nsJkV2hSrVbrsYqeH7abNfAzUheGUiCMouycEBNddwz27pYIf+CiPkzu1jbrvbykLCCctYYJTIbtYnGLV8o8w8T8aURQjVbkc1s1mWYTPlZhlyIm1AyqLKTII3I07acZMbYFRuJ2UwWkVmTVhTmCc6a7xKOY+V2C830cGzF6iS4AfNf+p+XWWJykwR1MWR8wq4Jh6wgCcoJrtXu9FD0qCDecoE2FUh8JTfsrawO7Kk+bFjau9ynGTvdWM9xiPkFonKTY6vRK8mJmNx3S/OCnNzilhgypk2M/TNBvxhFIMXbRfP9v/VE0NU9i8J5MdsKpCa0KYwv5t2YWjYRA00yceiVP8OpXbJjh0vJKpkdpimrAhQVbCnyJS0ZEP4SpqAXuFAgA3O03mTWAImK/Pz2quYay0jc8SmKFGVrpjojGUXabhR7v680n3e7RbcTj8VwKdLLmb96tzawmK+pJXg+4RlLKry/qCdxVBCWm47bmUPzB8NMHvc0PL5xKULT5njNZ0PtTuFVfmrO5+a9P8CDAB1M/ica2FhJwAAAABJRU5ErkJggg==',
                                alt: 'Start Chat Now?',
                              }),
                            this.offlineButton
                              .find('img')
                              .attr(
                                'src',
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6fwYAAtMBznRijrsAAAAASUVORK5CYII='
                              ),
                            this.onlineButton.find('img').on('load', function () {
                              e._on(window, {
                                resize: function () {
                                  e.scrollToFooter();
                                },
                              }),
                                e._on(e.document, { scroll: 'scrollToFooter' }),
                                e.option(e.options),
                                e.preChat();
                            }),
                            this._on(this.onlineButton, {
                              click: function (e) {
                                _satellite && _satellite.track('live_chat_button_click'),
                                  liveagent && liveagent.startChat(this.option('buttonId')),
                                  this._trigger('startChat', e);
                              },
                            });
                        },
                        handleButtonStatus: function (e) {
                          e == window.liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE &&
                            r('#live-chat-online').attr('aria-hidden', !0),
                            e == window.liveagent.BUTTON_EVENT.BUTTON_AVAILABLE &&
                              r('#live-chat-online').attr('aria-hidden', !1);
                        },
                        guestChat: function () {
                          var e = this;
                          window._laq || (window._laq = []),
                            window._laq.push(function () {
                              liveagent.showWhenOnline(e.option('buttonId'), e.onlineButton[0]),
                                liveagent.showWhenOffline(
                                  e.option('buttonId'),
                                  e.offlineButton[0]
                                );
                            }),
                            r.getScript(this.option('deploymentScript'), function () {
                              liveagent.init(
                                e.option('chatServerUrl'),
                                e.option('chatServerInitId1'),
                                e.option('chatServerInitId2')
                              ),
                                liveagent.addCustomDetail(
                                  'chatInitiatedURL',
                                  window.parent.location.href
                                ),
                                liveagent.addButtonEventHandler(
                                  e.option('buttonId'),
                                  e.handleButtonStatus
                                );
                            });
                        },
                        userChat: function () {
                          var e = this;
                          this._loadUserDetails(),
                            window._laq || (window._laq = []),
                            window._laq.push(function () {
                              liveagent.showWhenOnline(e.option('buttonId'), e.onlineButton[0]),
                                liveagent.showWhenOffline(
                                  e.option('buttonId'),
                                  e.offlineButton[0]
                                );
                            });
                        },
                        _getDeploymentScript: function (e) {
                          var t = this;
                          r.getScript(this.option('deploymentScript'), function () {
                            liveagent.addCustomDetail('First Name', e.firstName),
                              liveagent.addCustomDetail('Last Name', e.lastName),
                              liveagent.addCustomDetail('Contact E-mail', e.email),
                              liveagent.addCustomDetail('Phone Number', e.phone),
                              liveagent.addCustomDetail('Level Education', e.LOE),
                              liveagent.addCustomDetail('ContactType', e.Ctype),
                              liveagent.addCustomDetail('CollegeName', e.CollegeName),
                              liveagent.addCustomDetail(
                                'Contact Status',
                                t.option('contactStatus'),
                                !1
                              ),
                              liveagent.addCustomDetail(
                                'Contact Account Id',
                                e.contactAccountId,
                                !1
                              ),
                              liveagent.addCustomDetail(
                                'Contact Source',
                                t.option('contactSource'),
                                !1
                              ),
                              liveagent.addCustomDetail('Case Status', t.option('caseStatus'), !1),
                              liveagent.addCustomDetail('Case Origin', t.option('caseOrigin'), !1),
                              liveagent.addCustomDetail(
                                'Case Record Type',
                                t.option('caseRecordType'),
                                !1
                              ),
                              liveagent.addCustomDetail('Case Product', t.option('caseProduct')),
                              liveagent.addCustomDetail('Case Source', t.option('caseSource'), !1),
                              liveagent.addCustomDetail(
                                'Case Department',
                                t.option('caseDepartment'),
                                !1
                              ),
                              liveagent
                                .findOrCreate('Contact')
                                .map('FirstName', 'First Name', !1, !1, !0)
                                .map('LastName', 'Last Name', !1, !1, !0)
                                .map('Email', 'Contact E-mail', !0, !0, !0)
                                .map('Phone', 'Phone Number', !1, !1, !0)
                                .map('LOE', 'Level Education', !1, !1, !0)
                                .map('Contact_Type__c', 'ContactType', !1, !1, !0)
                                .map('CollegeName', 'CollegeName', !1, !1, !0)
                                .map('Contact_Status__c', 'Contact Status', !1, !1, !0)
                                .map('AccountId', 'Contact Account Id', !1, !1, !0)
                                .map('Source__c', 'Contact Source', !1, !1, !0),
                              liveagent
                                .findOrCreate('Contact')
                                .saveToTranscript('ContactId')
                                .showOnCreate()
                                .linkToEntity('Case', 'ContactId'),
                              liveagent
                                .findOrCreate('Case')
                                .map('Status', 'Case Status', !1, !1, !0)
                                .map('Origin', 'Case Origin', !1, !1, !0)
                                .map('RecordTypeId', 'Case Record Type', !1, !1, !0)
                                .map('Case_Department__c', 'Case Department', !1, !1, !0)
                                .map('Contact_Type__c', 'Contact Type', !1, !1, !0)
                                .map('Source__c', 'Contact Source', !1, !1, !0)
                                .saveToTranscript('CaseId')
                                .showOnCreate(),
                              liveagent
                                .addCustomDetail('Source', t.option('caseDepartment'), !1)
                                .saveToTranscript('Source__c'),
                              liveagent
                                .addCustomDetail('chatInitiatedURL', window.parent.location.href)
                                .saveToTranscript('Chat_Initiated_URL__c'),
                              liveagent
                                .addCustomDetail('Visitor First Name', e.firstName, !1)
                                .saveToTranscript('Visitor_First_Name__c'),
                              liveagent
                                .addCustomDetail('Visitor Last Name', e.lastName, !1)
                                .saveToTranscript('Visitor_Last_Name__c'),
                              liveagent
                                .addCustomDetail('Visitor Contact Type', e.Ctype, !1)
                                .saveToTranscript('Visitor_Contact_Type__c'),
                              liveagent
                                .addCustomDetail('Visitor Email', e.email, !1)
                                .saveToTranscript('Visitor_Email__c'),
                              liveagent
                                .addCustomDetail('Case Product', t.option('caseProduct'), !1)
                                .saveToTranscript('Visitor_Product__c'),
                              liveagent
                                .addCustomDetail('Phone Number', e.phone, !1)
                                .saveToTranscript('Phone_Number__c'),
                              liveagent.setName(e.firstName),
                              liveagent.setChatWindowWidth(t.option('chatWindowWidth')),
                              liveagent.setChatWindowHeight(t.option('chatWindowHeight')),
                              liveagent.init(
                                t.option('chatServerUrl'),
                                t.option('chatServerInitId1'),
                                t.option('chatServerInitId2')
                              ),
                              liveagent.addButtonEventHandler(
                                t.option('buttonId'),
                                t.handleButtonStatus
                              ),
                              liveagent.enableLogging();
                          });
                        },
                        _getCookie: function (e) {
                          for (
                            var t = e + '=',
                              n = document.cookie.split('; ').join(';').split(';'),
                              r = 0;
                            r < n.length;
                            r++
                          ) {
                            var a = n[r];
                            if (0 == a.search(t)) return a.substring(t.length, a.length);
                          }
                          return null;
                        },
                        _loadUserDetails: function () {
                          var t = this,
                            n = new Object(),
                            e = this.option('userInfoUrl');
                          (n.contactAccountId = this.option('contactAccountId')),
                            (n.caseProduct = this.option('caseProduct')),
                            r
                              .ajax({
                                url: e,
                                type: 'POST',
                                dataType: 'json',
                                cache: !1,
                                xhrFields: { withCredentials: !0 },
                              })
                              .done(function (e) {
                                (n.firstName = e.FirstName || ''),
                                  (n.lastName = e.LastName || ''),
                                  (n.phone = e.Phone || ''),
                                  (n.email = e.Email || ''),
                                  (n.LOE = 'Higher ED'),
                                  (n.Ctype = e.UserType || ''),
                                  (n.CollegeName = e.Company || ''),
                                  (n.Ctype = n.Ctype.replace('S', 'Student').replace(
                                    'I',
                                    'Instructor'
                                  )),
                                  t._getDeploymentScript(n);
                              })
                              .fail(function () {
                                console.log('User Info Call has failed');
                              });
                        },
                        fadeInButton: function () {
                          this.onlineButton.hide(),
                            this._show(this.onlineButton, this.option('showFx'));
                        },
                        preChat: function () {
                          var e = this._getCookie('ERIGHTS'),
                            t = this._getCookie('EXT_ERIGHTS'),
                            n = e || t;
                          this.option('caseSource', n ? 'eCommerce LoggedIn' : 'eCommerce'),
                            n ? this.userChat() : this.guestChat();
                        },
                        scrollToFooter: function () {
                          if (r(this.element).isInsideViewport()) {
                            var e =
                              this.element.offset().top -
                              this.onlineButton.height() +
                              this.option('offset');
                            this.onlineButton.css({
                              position: 'absolute',
                              right: 0,
                              top: e,
                              bottom: '',
                            });
                          } else
                            this.onlineButton.css({
                              position: 'fixed',
                              right: 0,
                              bottom: '25px',
                              top: '',
                            });
                          this.offlineButton.css({ position: 'absolute', top: e, bottom: '' });
                        },
                        _destroy: function () {
                          this.onlineButton.remove(), this.offlineButton.remove();
                        },
                        _setOptions: function () {
                          this._superApply(arguments), this.scrollToFooter();
                        },
                        _setOption: function (e, t) {
                          switch (e) {
                            case 'isOnline':
                              this.onlineButton[t ? 'show' : 'hide'](),
                                this.offlineButton[t ? 'hide' : 'show']();
                              break;
                            case 'offsetEl':
                              var n = r(t).height();
                              this.option('offset', this.options.addEl ? n : -n);
                          }
                          this._super(e, t);
                        },
                      }),
                        ($.fn.isInsideViewport = function () {
                          var e = $(this).offset().top,
                            t = e + $(this).outerHeight(),
                            n = $(window).scrollTop(),
                            r = n + $(window).height();
                          return n < t && e < r;
                        });
                      var n = 'Logged Out' != _satellite.getVar('Login Status'),
                        a = window.location.hostname,
                        s = {
                          chatServerUrl: null,
                          buttonId: null,
                          chatServerInitId1: null,
                          chatServerInitId2: null,
                          deploymentScript: null,
                          contactAccountId: null,
                          caseRecordType: null,
                        };
                      if (
                        ('www.mheducation.com' == a
                          ? n
                            ? e(
                                'https://d.la2-c1-ord.salesforceliveagent.com/chat',
                                '5730y000000PEn2',
                                '5720y000000PEIG',
                                '00D80000000LRll',
                                'https://c.la2-c1-ord.salesforceliveagent.com/content/g/js/46.0/deployment.js',
                                '0011A00001TZisy',
                                '01280000000Flfx'
                              )
                            : e(
                                'https://d.la2-c1-ord.salesforceliveagent.com/chat',
                                '5730y000000PEmx',
                                '5720y000000PEIG',
                                '00D80000000LRll',
                                'https://c.la2-c1-ord.salesforceliveagent.com/content/g/js/46.0/deployment.js',
                                null,
                                null
                              )
                          : n
                          ? e(
                              'https://d.la2-c1cs-ord.salesforceliveagent.com/chat',
                              '5730y000000PEn2',
                              '5720y000000PEIG',
                              '00D230000000m6E',
                              'https://c.la1-c1cs-ph2.salesforceliveagent.com/content/g/js/47.0/deployment.js',
                              '0011A00001TZisy',
                              '01280000000Flfx'
                            )
                          : e(
                              'https://d.la2-c1cs-ord.salesforceliveagent.com/chat',
                              '5730y000000PEmx',
                              '5720y000000PEIG',
                              '00D230000000m6E',
                              'https://c.la1-c1cs-ph2.salesforceliveagent.com/content/g/js/47.0/deployment.js',
                              null,
                              null
                            ),
                        767 < window.innerWidth)
                      ) {
                        console.log('Inject HE PPD Chat');
                        var i = $('meta[property="book:isbn"]').attr('content'),
                          o = [
                            ['M1260310175', '9781260310177'],
                            ['M1259694518', '9781259694516'],
                            ['M1259277720', '9781259277726'],
                            ['M1260169618', '9781260169614'],
                            ['M1259822672', '9781259822674'],
                            ['M1259918955', '9781259918957'],
                            ['M1259924602', '9781259924606'],
                            ['M1260054306', '9781260054309'],
                            ['M1260233030', '9781260233032'],
                            ['M1259845850', '9781259845857'],
                            ['M1260075117', '9781260075113'],
                            ['M1260013952', '9781260013955'],
                            ['M1260233030', '9781260233032'],
                            ['M1260119106', '9781260119107'],
                            ['M1260087719', '9781260087710'],
                            ['M1260079171', '9781260079173'],
                            ['M1260239489', '9781260239485'],
                            ['M1260148904', '9781260148909'],
                            ['M1260113272', '9781260113273'],
                          ].filter(function (e) {
                            return e[0] === i && e;
                          });
                        o.length && t(o[1]),
                          console.log(o),
                          (-1 < window.location.href.indexOf('/highered/support') ||
                            -1 <
                              window.location.href.indexOf(
                                '/highered/connect/students/collegesmarter.html'
                              )) &&
                            $('footer').livechat(s);
                      }
                    },
                  },
                  trackerProperties: {},
                },
              },
            ],
          },
          {
            id: 'RL5e8e5d76674541b2931d3d96efac3c4c',
            name: 'Google Adwords - ALEKS',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.google-adword-link',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC6bdb13054970419b8da93b137894ba09-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5f267f012f244696a1b68efe7affaf90',
            name: 'HE PDP - Rent It Cards',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    '.cta-chegg-ebook-rent,  .cta-chegg-ebook-buy,  .cta-chegg-textbook-rent, .cta-chegg-bundle-rent',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n =
                        'mhe-icons' == e.target.className ? $(e.target).parent() : $(e.target);
                      t.prop26 = t.eVar28 = n.data('isbn');
                      var r =
                        ';' +
                        document
                          .getElementById('product-description-title')
                          .innerText.replace(/,/g, ' ')
                          .replace(/;/g, '-')
                          .replace(/  /g, ' ')
                          .trim()
                          .substring(0, 98);
                      (t.linkTrackVars = 'products,prop26,eVar28,eVar75'),
                        n.hasClass('cta-chegg-bundle-rent')
                          ? (t.events = 'event4,event37,event68,event72,scAdd')
                          : (t.events = 'event4,event37,event67,event72,scAdd'),
                        (t.products = r),
                        (t.eVar75 = $(this)
                          .parents('div.bottom-button')
                          .siblings('div.buyingOptionHdr')
                          .find('h3')
                          .text());
                    },
                  },
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'RENT IT' },
                      { name: 'prop23', type: 'value', value: 'click|RENT IT' },
                    ],
                    events: [
                      { name: 'scAdd' },
                      { name: 'event4' },
                      { name: 'event37' },
                      { name: 'event67' },
                      { name: 'event68' },
                      { name: 'event72' },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLabd30e1cf46f410f8bbec98ee703c51e',
            name: 'Facebook & LinkedIn Pixel HE',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Facebook Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window,document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '838134356282660'); \nfbq('track', 'PageView');\n</script>\n<noscript>\n<img height=\"1\" width=\"1\" \nsrc=\"https://www.facebook.com/tr?id=838134356282660&ev=PageView\n&noscript=1\"/>\n</noscript>\n<!-- End Facebook Pixel Code -->\n\n\n<!-- Facebook Base Pixel Code -->\n<script>\n  !function(f,b,e,v,n,t,s)\n  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n  n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t,s)}(window, document,'script',\n  'https://connect.facebook.net/en_US/fbevents.js');\n  fbq('init', '838134356282660');\n  fbq('track', 'ViewContent');\n</script>\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\n  src=\"https://www.facebook.com/tr?id=838134356282660&ev=PageView&noscript=1\"\n/></noscript>\n<!-- End Facebook Pixel Code -->\n",
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript">\n_linkedin_data_partner_id = "66988";\n</script><script type="text/javascript">\n(function(){var s = document.getElementsByTagName("script")[0];\nvar b = document.createElement("script");\nb.type = "text/javascript";b.async = true;\nb.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";\ns.parentNode.insertBefore(b, s);})();\n</script>\n<noscript>\n<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=66988&fmt=gif" />\n</noscript>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6122570f98bd4f889bcf7d5a5dbb39c4',
            name: 'Live Chat Button Script',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/contact.html', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n$(document).ready(function(){\n\t$("a.live-chat-btn").click(function(){\n\t\t_satellite.track(\'live_chat_button_click\');\n\t});\n});\n</script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLca1a38337c464f1d91b882c48d9c4c5f',
            name: 'Request Remote Demo Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_request_remote_demo_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Request Remote Demo Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event73' }, { name: 'event61' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Request a Demo Submit', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCeb974c75190d41828e618966a9404c86-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLee70edce2e3d426f88b48861c29aab2a',
            name: 'Cart - Payment',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'input',
                  elementProperties: [
                    { name: 'className', value: 'wa-std-payment-submit', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'student - payment info' },
                      { name: 'prop23', type: 'value', value: 'click|student - payment info' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event17' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLfa75c09d0b2f419e9f82fa25bf6beb87',
            name: 'Sample Checkout',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [
                    { name: 'className', value: 'wa-inst-completeCheckout', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'sample checkout' },
                      { name: 'prop23', type: 'value', value: 'click|sample checkout' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event28' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLac4098c46ca540d3be070ca09d716171',
            name: 'Download Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a',
                  elementProperties: [
                    {
                      name: 'href',
                      value:
                        '\\.(?:doc|docx|eps|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\\&|\\?)',
                      valueIsRegex: !0,
                    },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar26', type: 'value', value: '%this.href%' }],
                    props: [
                      { name: 'prop12', type: 'alias', value: 'eVar26' },
                      { name: 'prop23', type: 'value', value: 'download|%this.href%' },
                    ],
                    events: [{ name: 'event7' }, { name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'd' },
              },
            ],
          },
          {
            id: 'RLaf30cc9e96f54cf2974fce80faaac562',
            name: 'SEG PDP Bundles with the Product',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.bundle_with_this_product',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text%:%URL Capture%',
                      },
                    ],
                    events: [{ name: 'event71' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'SEG PDP Bundles with the Product',
                  linkType: 'o',
                },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL676e28232e514bd5afa59be63654eae7',
            name: 'First Touch',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '$(function(){\n\tvar paramsCaptured = "no";\n\t\n\t//should fire only if ?cid is found AND the utm_lead_source is NOT website\n\tif((location.href.toLowerCase().includes("?cid") || location.href.toLowerCase().indexOf("?cid") > -1) && (location.href.toLowerCase().includes("utm_lead_source=website") == false || location.href.toLowerCase().indexOf("utm_lead_source=website") == -1)){\n\t\tvar mhecookie = document.cookie.split(\';\');\n\t\tvar captured = "no";\n\t\t\n\t\tfor(var i=0; i< mhecookie.length; i++){\n\t\t\tvar c = mhecookie[i];\n\t\t\tif(c.startsWith(\' captured\') || c.substring(0,9) == \' captured\'){\n\t\t\t\tcaptured = c.split(\'=\').slice(1).toString();\n\t\t\t}\n\t\t}\n\t\t\n\t\tif(captured != "yes"){\n\t\t\tvar mktoParams = document.location.search.replace("?","").replace(" ","").split("&");\n\t\t\tparamsCaptured = "yes";\n\t\t\tfor(var x = 0; x<mktoParams.length; x++){\n\t\t\t\tdocument.cookie = mktoParams[x] + ";expires=60*60*24*1000;domain=.mheducation.com;path=/;SameSite=Strict;secure";\n\t\t\t}\n\t\t\tdocument.cookie = "orgParams="+location.search+";expires=60*60*24*1000;domain=.mheducation.com;path=/;SameSite=Strict;secure";\n\t\t\tdocument.cookie = "captured="+paramsCaptured+";expires=60*60*24*1000;domain=.mheducation.com;path=/;SameSite=Strict;secure";\n\t\t}\n\t\t\n\t}\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLaf67433a23d545738be4e3b865772394',
            name: 'Remove BSUBSC Script',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '$(document).ready(function(){\n\tvar list = $("div#horizontalPDP div#tab-content-components td:contains(\'BSUBSC\')");\n\tvar newTxt;\n\tfor(x=0; x<list.length; x++){\n\t\tnewTxt = list[x].innerHTML.replace("BSUBSC ","");\n\t\tlist[x].innerHTML = newTxt;\n\t}\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLd6e1bfd831c9417491a04321055ad363',
            name: 'Anchor Links',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'a.anchor-link', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      console.log('in a tag rule');
                    },
                  },
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text%:%URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Anchor Link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL8a9456d7d9c745aaafad175d7db07d09',
            name: 'Add to Cart',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ecom_addcart' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = _satellite.getVar('dl product_name');
                      t.linkTrackVars = 'products';
                      var r = ';' + n;
                      t.products = r;
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%dl product_format%' },
                      { name: 'eVar28', type: 'alias', value: 'prop26' },
                    ],
                    props: [{ name: 'prop26', type: 'value', value: '%dl product_isbn%' }],
                    events: [{ name: 'scAdd' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLb1d18cacbca94c30a4eb83336a3184e4',
            name: 'Search link clicked',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a.redirect-link',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'search', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = _satellite.getVar('Page Name');
                      console.log('in search result clicked'),
                        (t.linkTrackVars = 'prop23,prop4,eVar6'),
                        (t.prop4 = t.eVar6 = $(this)
                          .closest('.product-item')
                          .find('h3')
                          .text()
                          .trim()),
                        (t.prop23 = 'viewed | ' + n);
                    },
                  },
                  trackerProperties: { events: [{ name: 'event2' }, { name: 'event4' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Search Results', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC4f998e1fc5f5437e96e9f84b279b6709-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb2f3ab0286d042ddb609543b71dc9044',
            name: 'HE Instructor Share Purchase Options with Students',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a',
                  elementProperties: [{ name: 'className', value: 'instructor-share' }],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.linkTrackVars = 'eVar12,prop11,prop23'),
                        (t.eVar12 = t.prop11 = this.className.split(' ')[0]);
                      var n = _satellite.getVar('Content Title');
                      t.prop23 =
                        'HOME' == n
                          ? 'share|' +
                            this.className.split(' ')[0] +
                            ':' +
                            this.parentNode.parentNode
                              .getElementsByClassName('wa-article')[0]
                              .textContent.trim()
                          : 'IDEAS HOME' == n
                          ? 'share|' +
                            this.className.split(' ')[0] +
                            ':' +
                            this.parentNode.parentNode.parentNode
                              .getElementsByClassName('wa-article')[0]
                              .textContent.trim()
                          : 'share|' + this.className.split(' ')[0] + ':' + n;
                    },
                  },
                  trackerProperties: { events: [{ name: 'event3' }, { name: 'event4' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Instructors: share purchase options with students',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RLb8df0fd51e7f42b09855567d0770a9ea',
            name: 'Print TE Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_print_te_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Request Print TE Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event48' }, { name: 'event60' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Request Print (Teacher Edition) Submit',
                  linkType: 'o',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCbc68bb08ad554ebca2f47966daf79b82-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfbc8d50cd96845a6ae60b5cffd539bc8',
            name: 'Cart - Billing',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'input',
                  elementProperties: [
                    { name: 'className', value: 'wa-std-address-submit-btn', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'student - billing info' },
                      { name: 'prop23', type: 'value', value: 'click|student - billing info' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event16' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL12222076a5bf48349aa6d2250c7e8eb9',
            name: 'HE PDP - eBook Subscription Clicks',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '.cta-add-to-ebookSub', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n =
                        'mhe-icons' == e.target.className ? $(e.target).parent() : $(e.target);
                      t.prop26 = t.eVar28 = n.data('isbn');
                      var r =
                        ';' +
                        document
                          .getElementById('product-description-title')
                          .innerText.replace(/,/g, ' ')
                          .replace(/;/g, '-')
                          .replace(/  /g, ' ')
                          .trim()
                          .substring(0, 98) +
                        '-Ebook Monthly Option';
                      (t.linkTrackVars = 'products,prop26,eVar28,eVar75'),
                        n.hasClass('cta-add-to-ebookSub')
                          ? (t.events = 'event4,event37,event68,event72,scAdd')
                          : (t.events = 'event4,event37,event67,event72,scAdd'),
                        (t.products = r),
                        (t.eVar75 = $(this)
                          .parents('div.bottom-button')
                          .siblings('div.buyingOptionHdr')
                          .find('h3')
                          .text());
                    },
                  },
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'RENT IT' },
                      { name: 'prop23', type: 'value', value: 'click|RENT IT' },
                    ],
                    events: [
                      { name: 'scAdd' },
                      { name: 'event4' },
                      { name: 'event37' },
                      { name: 'event67' },
                      { name: 'event68' },
                      { name: 'event72' },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Ebook Monthly', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL13b7ca214c3a46a9ab53c09660832bdc',
            name: 'Quick Order - Prek-12 Global Nav',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<style>\n@media (min-width: 768px){\n#utilLinks #cartDropdownMenu{padding-right: 20px !important;}\n#quickOrder button{padding-right: 0px !important;}\n#quickOrder{margin-left: -5px;}\n#quickOrder button span.glyphicon{line-height: 0; top: 3px;}\n}\n</style>',
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '$(function(){\n\t$("#utilLinks > ul.list-inline").append(\'<li id="quickOrder" style="margin-left: -5px;"><a href="https://shop.mheducation.com/store/cart?rapidOrder=true"><button data-wa-globalheader-nav="Quick Order" class="btn btn-header"><span class="text-brand-red glyphicon glyphicon-list-alt" aria-hidden="true"></span>&nbsp;<span class="text-gray-darkest">Quick Order</span></button></a></li>\');\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL195917390f0149408709737a4a558d54',
            name: 'Interactive Tables',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'table.interactive-table a',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% : %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Interactive Table Link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL6d4a8da8e62b445eb1bc9445e8de8610',
            name: 'Twitter PREK12',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!-- Twitter single-event website tag code -->\n<script src="//platform.twitter.com/oct.js" type="text/javascript"></script>\n<script type="text/javascript">twttr.conversion.trackPid(\'ntz4l\', { tw_sale_amount: 0, tw_order_quantity: 0 });</script>\n<noscript>\n<img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=ntz4l&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />\n<img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=ntz4l&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" />\n</noscript>\n<!-- End Twitter single-event website tag code -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL1c7fc3de4cbe44fc86bd09e7f4544069',
            name: 'LinkedIn PREK12',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript"> _linkedin_partner_id = "1540162"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); </script><script type="text/javascript"> (function() {var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(); </script> <noscript> <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1540162&fmt=gif" /> </noscript>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL8e2bf03c792d4be5a743850415164c32',
            name: 'Qualtrics - States',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '#qualtrics-space', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/explore/states/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% : %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Qualtrics Survey - States Pages',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RLf1ff3f1ba5c841f0be8aaf233a7b0523',
            name: 'AdRoll Script',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: '/prek-12/explore/reading-wonders.html', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'adroll_adv_id = "2BOPSXRIQVBX3KL5BEA5MV";\nadroll_pix_id = "MWIQBX5WKBEQ7M2EVEIC5W";\nadroll_email = "socialmedia@mheducation.com"; \n(function () {\nvar _onload = function(){\nif (document.readyState && !/loaded|complete/.test(document.readyState))\n{setTimeout(_onload, 10);return}\nif (!window._adroll_loaded){_adroll_loaded=true;setTimeout(_onload, 50);return}\nvar scr = document.createElement("script");\nvar host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");\nscr.setAttribute(\'async\', \'true\');\nscr.type = "text/javascript";\nscr.src = host + "/j/roundtrip.js";\n((document.getElementsByTagName(\'head\') || [null])[0] ||\ndocument.getElementsByTagName(\'script\')[0].parentNode).appendChild(scr);\n};\nif (window.addEventListener)\n{window.addEventListener(\'load\', _onload, false);}\nelse\n{window.attachEvent(\'onload\', _onload)}\n}());',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL746360db4b7842edac3d448198992966',
            name: 'Explore: Link Clicked',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'div',
                  elementProperties: [
                    { name: 'className', value: 'wa-explore-list', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function (e) {
                    return (
                      !_satellite.isOutboundLink(e.target) && ('A' == e.target.tagName || void 0)
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.linkTrackVars = 'prop23,prop15,eVar17'),
                        (t.eVar17 = t.prop15 = 'Explore:' + e.target.textContent),
                        (t.prop23 = 'click|' + t.prop15);
                    },
                  },
                  trackerProperties: { events: [{ name: 'event14' }, { name: 'event4' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL15a34ef95afe46f4a19a5e8b9b1575f4',
            name: 'SEG: Shop Now',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'div#shopNowDiv', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12/program', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop23', type: 'value', value: 'click | SEG: Shop Now' }],
                    events: [{ name: 'event44' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Shop Now', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL8fdc4b89b595498ab36451fe7442bce8',
            name: 'Google Adword - Connect Request Demo Thank You Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/highered/connect/request-demo/thank-you.html', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Event snippet for SEP -  Request Demo conversion page -->\n<script>\n  gtag('event', 'conversion', {'send_to': 'AW-950445459/N7bgCPbb35oBEJPLmsUD'});\n</script>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL15c5278d8f42485f9ac8a3f8a6927caa',
            name: 'Music PDP - Hide Section',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/prek-12/product/S97800', valueIsRegex: !0 },
                    { value: '/prek-12/product/spotlight-music', valueIsRegex: !0 },
                    { value: '/product/music-studio-marketplace', valueIsRegex: !0 },
                    { value: '/prek-12/product/music-role', valueIsRegex: !0 },
                    { value: '(/product/)(.*)(voices-concert)', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var title = $(".productinfo h1").text();\n\nif(title.indexOf("Music Studio Marketplace") != -1 || title.indexOf("Spotlight on Music") != -1 || title.indexOf("Music! Its Role") != -1 || title.indexOf("Music Its Role") != -1 || title.indexOf("Voices in Concert") != -1){\n\t$("div.pdphorizontal-tabs#horizontalPDP").remove();\n}\n$("#expandBoxdetail").hide();',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3013c64de8874c68831aba1edf88e8e2',
            name: 'SEG: Contact Sales Rep',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [
                    { name: 'className', value: 'contact-rep', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12/program', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop23', type: 'value', value: 'click | SEG: Contact Rep' }],
                    events: [{ name: 'event46' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Contact Sales Rep', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLd54d74d3cd9d4cbe963e6766f536593d',
            name: 'School Search Bar Placeholder Text Change',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/prek-12', valueIsRegex: !0 },
                    { value: '&bu=seg', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '$(function(){\n$("input.mhe-search-form").attr("placeholder","Search by ISBN, MHID, Title, State or Subject");\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL186c4124d4484875a421ffdd7bd7f1f1',
            name: 'Marketo Embed Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'button.mktoButton', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: 'content/corp/en_us/contact.html', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event53' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLf43838e058534a04b0096c863667574d',
            name: 'Rule for search',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'searchQuery', valueIsRegex: !0 },
                    { value: 'exactisbn', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      _satellite.getVar('queryparam'),
                        console.log('This is MHE search rule->'),
                        console.log(
                          'Total no. of search results:: ' +
                            _satellite.getVar('No. of search result')
                        ),
                        console.log('Search Term:: ' + _satellite.getVar('Search Term'));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar2', type: 'value', value: '%Search Term%' },
                      { name: 'eVar5', type: 'value', value: '%No. of search result%' },
                      { name: 'eVar29', type: 'value', value: 'search' },
                    ],
                    props: [
                      { name: 'prop2', type: 'value', value: '%Search Term%' },
                      { name: 'prop3', type: 'value', value: '%No. of search result%' },
                    ],
                    events: [{ name: 'event1' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Product Search', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc11b2db7764a4842a2a780dfc6b62666',
            name: 'Load More Products',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'div.load-button > a',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop23', type: 'value', value: 'click|Load More Products' },
                      { name: 'prop15', type: 'value', value: 'Load More Products' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event15' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL87ef45c550c2481c98a3d5e2f8b4b76d',
            name: 'Article Image',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a.article-image > img, img.article-image',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.alt%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.alt% : %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Image Link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL89a2ad10fa1f4d2896a0618dbc00ebf2',
            name: 'Checkout begins',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a.cart-checkout-button',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'store/cart', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar17', type: 'alias', value: 'prop15' }],
                    props: [
                      { name: 'prop23', type: 'value', value: 'click:%this.@text%' },
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                    ],
                    events: [{ name: 'scCheckout' }, { name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL89ed7b9d1d874d729846df5add4216de',
            name: 'Hero CTA',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    '.jumbotron .primary-button , .jumbotron .secondary-button , .img-cont .primary-button, .customtron .primary-button, .customtron .secondary-button',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% - Hero CTA on %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Hero CTA', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL092306cc76c041a786e01f68de007f43',
            name: 'HE PDP Campaign (Originally Target)',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- PDP Yellow Banner -->\n<script type=\"text/html\" id=\"pdp-affordable-banner\">\n\t<div class=\"row\" id=\"pdp-banner\">\n\t\t<div class=\"brand-yellow col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"padding:10px; border-bottom:5px solid #fff; color:#000;\">\n\t\t\t<div class=\"col-lg-1 col-md-1 col-sm-12 col-xs-12 text-sm-center text-xs-center\">\n\t\t\t\t<span class=\"glyphicon glyphicon-bullhorn\" aria-hidden=\"true\" style=\"padding-left:20px; padding-right:30px;\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-9 col-md-8 col-sm-12 col-xs-12 text-sm-center text-xs-center cta-txt-dtm\">\n\t\t\t\t<p>Now featuring affordable purchase options like print rentals and loose-leaf.</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-3 col-sm-12 col-xs-12 text-sm-center text-xs-center\">\n\t\t\t\t<a href=\"#buying-options\" class=\"text-link\" style=\"color:#000; text-decoration:underline; padding-right:20px;\" onclick=\"$('a#card-textbook').click();\">Explore Options</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</script>\n\n<!-- SAES Banner -->\n<script type=\"text/html\" id=\"saes-banner-container\">\n\t<div id=\"saes-banner\">\n\t\t<img class=\"img-responsive\" width=\"130px\" src=\"/content/dam/mhe/highered/connect/support-logo-red.png\" title=\"SAES Logo\" alt=\"SAES Logo\">\n\t\t<p class=\"h3 text-center\" style=\"margin: 0;\"><strong>Instructors:</strong></p>\n\t\t<p class=\"lead\" style=\"margin: 0;\"><strong>We're here to help &ndash; get real-world support <br class=\"hidden-sm hidden-xs\">and resources every step of the way.</strong></p>\n\t\t<a href=\"/content/mhe/en_us/support.html\" target=\"_blank\"><button role=\"button\" class=\"btn btn-primary btn-block\">Find Out More</button></a>\n\t</div>\n</script>\n\n<!-- PDP Side Content -->\n<script type=\"text/html\" id=\"po-cont\">\n\t<div class=\"pull-right\" style=\"max-width: 275px; padding: 0px; background-color: #fff;\">\n\t\t<div style=\"margin-left:30px;\">\n\t\t\t<p style=\"margin: 0;\"><img alt=\"Connect logo\" style=\"width:65%; height:auto;\" title=\"Connect logo\" src=\"https://www.mheducation.com/content/dam/mhe/prek12/product-login/connect-logo.jpg\"></p>\n\t\t\t<p class=\"offset-20\"></p>\n\t\t\t<ul>\n\t\t\t\t<li><a aria-label=\"Login to Connect - opens in a new tab\" href=\"https://connect.mheducation.com/connect/login/index.htm?&amp;BRANDING_VARIANT_KEY=en_us_default_default&amp;node=us-east-1d-connecto-app-prod-24-75.mhecloud.com\" target=\"_blank\">Login</a></li>\n\t\t\t\t<!--<li><a aria-label=\"Learn about Temporary Access - opens in a new tab\" href=\"/content/mhe/en_us/connect/students/collegesmarter.html\" target=\"_blank\">Learn about Temporary Access</a></li>-->\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</script>\n\n<!-- New Edition Banner -->\n<script type=\"text/html\" id=\"pdp-newedition-banner\">\n\t<div class=\"row\" id=\"cta-newedition-banner\">\n\t\t<div class=\"brand-yellow col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"padding:10px; border-bottom:5px solid #fff; color:#000;\">\n\t\t\t<div class=\"col-lg-1 col-md-1 col-sm-12 col-xs-12 text-sm-center text-xs-center\">\n\t\t\t\t<span class=\"glyphicon glyphicon-bullhorn\" aria-hidden=\"true\" style=\"padding-left:20px; padding-right:30px;\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-8 col-md-7 col-sm-12 col-xs-12 text-sm-center text-xs-center cta-txt\">\n\t\t\t\t<p>McGraw Hill eBook available with the new edition.</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-12 col-xs-12 text-sm-center text-xs-center\">\n\t\t\t\t<a href=\"#\" aria-label=\"View newest edition - opens in a new tab\" style=\"color:#000; text-decoration:underline; padding-right:20px;\">Learn More</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</script>\n\n<script type=\"text/javascript\">\n$(function(){\n\tvar ctaBanner = document.querySelector(\"#pdp-affordable-banner\").innerHTML;\n\tvar saesBanner = document.querySelector(\"#saes-banner-container\").innerHTML;\n\tvar newEditionBanner = document.querySelector(\"#pdp-newedition-banner\").innerHTML;\n\tvar rightContent = document.querySelector(\"#po-cont\").innerHTML;\n\tvar bookISBN = $('meta[property=\"book:isbn\"]').attr('content');\n\t\n\t//old edition checker - default to \"no\"\n\tvar oldEdition = \"no\";\n\t\n\t//eBook List\n\tvar ebookISBNs = ['M0073384046', 'M0073380318', 'M0073406031', 'M1259286037', 'M1259290611', 'M1259690881', 'M1259746747', 'M0078036224', 'M0073534498', 'M0078112117', 'M125956956X', 'M1259544370', 'M1259285278', 'M1259631117', 'M1259995054', 'M1259870227', 'M007814096X', 'M1259638146', 'M1259815943', 'M0077736443', 'M1259722325', 'M1259548147', 'M0073514292', 'M1259682749', 'M0073523437', 'M1259277178', 'M0077860500', 'M1259844749', 'M1259722619', 'M1259616029', 'M1259875121', 'M1259412385', 'M1259638138', 'M1259538982', 'M1259694518', 'M1259696537', 'M0073397962', 'M125974101X', 'M1259706613', 'M1259676986', 'M0078026989', 'M125963115X', 'M1259712273', 'M1259872688', 'M1259631125', 'M0073385913', 'M125971778X', 'M0077861922', 'M1259702766', 'M1259907929', 'M1259707768', 'M125987043X', 'M007802658X', 'M1259307417', 'M1259570002', 'M1259535436', 'M1259870464', 'M1259845850', 'M0078036984', 'M1259746399', 'M1259913864', 'M1259417859', 'M1259700909', 'M1259756882', 'M007802420X', 'M1259693554', 'M1259722635', 'M1259598993', 'M1259666107', 'M0073404225', 'M1259694046', 'M1259720691', 'M1259892700', 'M1259870545', 'M1259573796', 'M1259732649', 'M1259894533', 'M125944709X', 'M125981842X', 'M1259818438', 'M1259870499', 'M1259666093', 'M0073398004', 'M1259700933', 'M1259666360', 'M0077836367', 'M1259573281', 'M1259705072', 'M1259660265', 'M0078021790', 'M1259870561', 'M0073523933', 'M1259592413', 'M1259721884', 'M1259723224', 'M1259915670', 'M1259915727', 'M0078022886', 'M1259562794', 'M1259686205', 'M1259870510', 'M1259592936', 'M0078119219', 'M1259880885', 'M0073514284', 'M1259870456', 'M1259870448', 'M0078022967', 'M1259565874', 'M1259722651', 'M1259538877', 'M0078028124', 'M0078118085', 'M1259289907', 'M1259913791', 'M1259277720', 'M0072965541', 'M1259708780', 'M1259870340', 'M1260000222', 'M1259282651', 'M1259706540', 'M1259722627', 'M0077835433', 'M1260048233', 'M1259277364', 'M1259631753', 'M1259741095', 'M1259696529', 'M1259920011', 'M1259706605', 'M1259667472', 'M1259870537', 'M1259705218', 'M1259870472', 'M1259870332', 'M1259140768', 'M1259922405', 'M1259870324', 'M125969240X', 'M1259692396', 'M0073523941', 'M1259702723', 'M0078112109', 'M1260411990', 'M1259892344', 'M007782072X', 'M1259904032', 'M125970999X', 'M0077735161', 'M1259924955', 'M0078025192', 'M1260004716', 'M1259912191', 'M1260397254', 'M0078038391', 'M1259927644', 'M1259911144', 'M1259630765', 'M1259913880', 'M125963809X', 'M1259722333', 'M007337539X', 'M1260070778', 'M1259917029', 'M126001391X', 'M1260013928', 'M1260064778', 'M1259608565', 'M1259784630', 'M1259914275', 'M1260187497', 'M1259917061', 'M1259912531', 'M1260164802', 'M1260164853', 'M1259879909', 'M1259234622', 'M1259919684', 'M0078026970', 'M1259875997', 'M1259709981', 'M1259933849', 'M0078096650', 'M1259911810', 'M1259911926', 'M1259573206', 'M1259880036', 'M1259822672', 'M126002878X', 'M1259911152', 'M1259929647', 'M1260043371', 'M1260397246', 'M1259916979', 'M1259927660', 'M1260397165', 'M1259919633', 'M1259709221', 'M1259917088', 'M1259913813', 'M1259541800', 'M1260164446', 'M1260164454', 'M1259911632', 'M1259900452', 'M1259813959', 'M1259957594', 'M1259918181', 'M1260299449', 'M1259916812', 'M1260397130', 'M1259913775', 'M1260397033', 'M1259922723', 'M1260194523', 'M1259929450', 'M1259913899', 'M1259827445', 'M1260397262', 'M1259864626', 'M125991383X', 'M1259852067', 'M1260111008', 'M1260111083', 'M0077861515', 'M1260169820', 'M0078037018', 'M1259927636', 'M0078110351', 'M1259924033', 'M1259913783', 'M1259894002', 'M1259913872', 'M1259912396', 'M0073545511', 'M1259918963', 'M1259929442', 'M1259918920', 'M1259795640', 'M1259824918', 'M1260166449', 'M1259963268', 'M1259916871', 'M1259957616', 'M1259638162', 'M1259927652', 'M1259844714', 'M125991965X', 'M1259903915', 'M1259924041', 'M1259870553', 'M1259913848', 'M1260397106', 'M1260052400', 'M1260051919', 'M125991710X', 'M1259911640', 'M125991707X', 'M1259680932', 'M1259917118', 'M1260400980', 'M007802711X', 'M1259914305', 'M1259914267', 'M1259573087', 'M1260400395', 'M1260187500', 'M1259917134', 'M1259580628', 'M1259912442', 'M1259954072', 'M1260043673', 'M125982490X', 'M126017767X', 'M1259847985', 'M1259637158', 'M1259864618', 'M1259708861', 'M0078021871', 'M126032480X', 'M1260324974', 'M1259398625', 'M1259927679', 'M1259969444', 'M1259880028', 'M1259880052', 'M1260397114', 'M1259929434', 'M1260076849', 'M1260163482', 'M126009605X', 'M1259914291', 'M1259917126', 'M125991240X', 'M0077736451', 'M126040532X', 'M1259864235', 'M1259916820', 'M1259929655', 'M1259191516', 'M1259914259', 'M1259917053', 'M1260375196', 'M1259709167', 'M125967651X', 'M1259918947', 'M1259918955', 'M1259927628', 'M1259828735', 'M1260039943', 'M1260031993', 'M1260031578', 'M1260058786', 'M1260073939', 'M1259922782', 'M1259919714', 'M0077823273', 'M1259912434', 'M1259709973', 'M1259852024', 'M1260105156', 'M1260105326', 'M1259918939', 'M1259916278', 'M1259864561', 'M1259957586', 'M1259696553', 'M1259883981', 'M1259709965', 'M1259914895', 'M1259709957', 'M1259603636', 'M1259630013', 'M0078026571', 'M0078025214', 'M1259913821', 'M1259912450', 'M0073514241', 'M0077862600', 'M1259864642', 'M1259913767', 'M1259916987', 'M1259903885', 'M1260247864', 'M1259917045', 'M1260247856', 'M1259916960', 'M1260247880', 'M1259916863', 'M1260397122', 'M126022063X', 'M1260016072', 'M1259999823', 'M1260150518', 'M1259924912', 'M1259924920', 'M1260062880', 'M1260113272', 'M1260220648', 'M1260056082', 'M1260004724', 'M0078119200', 'M0073513857', 'M0078096642', 'M1260013960', 'M1260013901', 'M1260169626', 'M0073398217', 'M1260148904', 'M1260148912', 'M1260238873', 'M126051451X', 'M1260148920', 'M1259712354', 'M0073398195', 'M125992257X', 'M1260057380', 'M1260225585', 'M126050705X', 'M1260507149', 'M1260201384', 'M1260013987', 'M1260205584', 'M1259702731', 'M1259969622', 'M1260219712', 'M1260148955', 'M1259922669', 'M1259870480', 'M1260016056', 'M1260239500', 'M1259747980', 'M1259969509', 'M1260500225', 'M126004226X', 'M1260063291', 'M1260070115', 'M1260709744', 'M1260070573', 'M1260088367', 'M1260514498', 'M1259602966', 'M0073523380', 'M0073513342', 'M1259920607', 'M1259928179', 'M1259685225', 'M1259916758', 'M0073513954', 'M1260486915', 'M1259922308', 'M1259913856', 'M1259920585', 'M0078022746', 'M1260087719', 'M1259922634', 'M1259922502', 'M1260205193', 'M1260088375', 'M1259969517', 'M1260043738', 'M1259231208', 'M1260500233', 'M1260500640', 'M1260500659', 'M1260238881', 'M1260239519', 'M1260219232', 'M1259957608', 'M1260075095', 'M1259969541', 'M1260013995', 'M1260225313', 'M1260521168', 'M1260521079', 'M1259741109', 'M1260711455', 'M1260500527', 'M1260075117', 'M1260071421', 'M1260071472', 'M1259922499', 'M1260150526', 'M1260247899', 'M1260247961', 'M1259969479', 'M1260043665', 'M1260043649', 'M1259964949', 'M126020927X', 'M1259924602', 'M1260233030', 'M1260231704', 'M1260087840', 'M1259969525', 'M1260500179', 'M125992243X', 'M0078028639', 'M126004372X', 'M1259922421', 'M1259969460', 'M0078022959', 'M1259912418', 'M1260100049', 'M1259717607', 'M1260043746', 'M1260079171', 'M1260500187', 'M1259969487', 'M1259922316', 'M0078119162', 'M0078118638', 'M1259912477', 'M1259872971', 'M1259920461', 'M1260587339', 'M1260004732', 'M1260169618', 'M1259922413', 'M1260055760', 'M1260013952', 'M1259922650', 'M126021026X', 'M1260060926', 'M1260054306', 'M1260074951', 'M0078119170', 'M1259922553', 'M126022533X', 'M1260087956', 'M1260239489', 'M1259235718', 'M1259235718', 'M1259235718', 'M1260119106', 'M1260310175', 'M1260433110', 'M1260433129', 'M1260433099', 'M1259969614', 'M1259920402', 'M1260058891', 'M1260395596', 'M1259922642', 'M1259998169', 'M1260220621', 'M1260239462', 'M1259920593', 'M1259922383', 'M1260004759', 'M1260157377', 'M1260075109', 'M1260150542', 'M0078110483', 'M1259608557', 'M1260172198', 'M1260200728', 'M1259924963', 'M1260500195', 'M1259964957', 'M1260211886', 'M1260258971', 'M1260056074', 'M1260075311', 'M1259712370', 'M1259969495',];\n\n\t//new edition ISBNs\n\tvar newEditionObj = {\n\"M0073403717\":\"https://www.mheducation.com/highered/product/1260940977.html#buying-options\",\n\"M0073383090\":\"https://www.mheducation.com/highered/product/1260912787.html#buying-options\",\n\"M0077861701\":\"https://www.mheducation.com/highered/product/126091383X.html#buying-options\",\n\"M0073523917\":\"https://www.mheducation.com/highered/product/1260914275.html#buying-options\",\n\"M1259689794\":\"https://www.mheducation.com/highered/product/1260913430.html#buying-options\",\n\"M1259188132\":\"https://www.mheducation.com/highered/product/126091447X.html#buying-options\",\n\"M1259708799\":\"https://www.mheducation.com/highered/product/126091349X.html#buying-options\",\n\"M125972266X\":\"https://www.mheducation.com/highered/product/1260913406.html#buying-options\",\n\t}\n\t\n\t//view a chapter button\n\tvar vacObj = {\n\"M126022063X\":\"https://www.mheducation.com/highered/ideas/i/1169817-flipbook2019-abbott-natural-disasters-11e\",\n\"M1260225585\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260225587.pdf\",\n\"M1260397033\":\"https://www.mheducation.com/highered/ideas/i/1164453-2019-flipbook-feist-psychology-perspectives-and-connections-4e\",\n\"M1260088375\":\"https://www.mheducation.com/highered/ideas/i/1168956-flipbook2019-hill-global-business-today-11e\",\n\"M1259957608\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259957604.pdf\",\n\"M1259969541\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259969546.pdf\",\n\"M1260013995\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260013993.pdf\",\n\"M1259544370\":\"https://www.mheducation.com/highered/ideas/i/1164507-2019-flipbook-king-the-science-of-psychology-4e\",\n\"M1259880044\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259880049.pdf\",\n\"M1259912418\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259912412.pdf\",\n\"M1260587339\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260587333.pdf\",\n\"M1260375196\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260375190.pdf\",\n\"M1260058786\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260058789.pdf\",\n\"M1260073939\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260073935.pdf\",\n\"M126022533X\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260225334.pdf\",\n\"M1260239489\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260239485.pdf\",\n\"M1260310175\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260310177.pdf\",\n\"M1259969614\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259969614.pdf\",\n\"M1260395596\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260395594.pdf\",\n\"M1260220621\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260220629.pdf\",\n\"M1259924920\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259924927.pdf\",\n\"M1259924912\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259924910.pdf\",\n\"M1260220648\":\"https://www.mheducation.com/highered/ideas/i/1169814-flipbook2019-bjelland-human-geography-13e\",\n\"M0078096642\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9780078096648.pdf\",\n\"M1260013960\":\"https://www.mheducation.com/highered/ideas/i/1168854-flipbook2019-brealey-fundamentals-of-corporate-finance-10e\",\n\"M1260169626\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260169621.pdf\",\n\"M1259705226\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259705229.pdf\",\n\"M1260013987\":\"https://www.mheducation.com/highered/ideas/i/1168890-flipbook2019-cornett-finance-5e\",\n\"M1259702731\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259702730.pdf\",\n\"M1260219712\":\"https://www.mheducation.com/highered/ideas/i/1169787-flipbook2019-cunningham-principles-of-environmental-science-9e\",\n\"M1260239500\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260239508.pdf\",\n\"M1259747980\":\"https://www.mheducation.com/highered/ideas/i/1168923-flipbook2019-doupnik-international-accounting-5e\",\n\"M1260514498\":\"https://www.mheducation.com/highered/ideas/i/1168950-flipbook2019-floyd-business-and-professional-communication-1e\",\n\"M1259912396\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259912399.pdf\",\n\"M1260164659\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260164657.pdf\",\n\"M1260500659\":\"https://www.mheducation.com/highered/ideas/i/1164498-2019-flipbook-insel-connect-core-concepts-in-health-16e\",\n\"M1260238881\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260238884.pdf\",\n\"M1260239519\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260239515.pdf\",\n\"M1260219232\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260219234.pdf\",\n\"M1260002195\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260002195.pdf\",\n\"M1260075117\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260075113.pdf\",\n\"M1259969479\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259969478.pdf\",\n\"M1259964949\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259964947.pdf\",\n\"M1260233030\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260233032.pdf\",\n\"M126020927X\":\"https://www.mheducation.com/highered/ideas/i/1169766-flipbook2019-longenbacker-maders-understanding-human-anatomy-physiology-10e\",\n\"M1259969525\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259969522.pdf\",\n\"M1259969460\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259969461.pdf\",\n\"M0078022959\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9780078022951.pdf\",\n\"M1260211886\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260211887.pdf\",\n\"M1260169618\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260169614.pdf\",\n\"M1260013952\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260013955.pdf\",\n\"M126021026X\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260210262.pdf\",\n\"M1260074951\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260074956.pdf\",\n\"M1260172198\":\"https://www.mheducation.com/highered/ideas/i/1169481-flipbook2019-vanputte-seeleys-anatomy-physiology-12e\",\n\"M1260058891\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260058895.pdf\",\n\"M1260239462\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260239461.pdf\",\n\"M1259608557\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781259608551.pdf\",\n\"M1260200728\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260200720.pdf\",\n\"M1260500195\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260500196.pdf\",\n\"M1260258971\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260258974.pdf\",\n\"M1260056074\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260056075.pdf\",\n\"M1260201384\":\"https://www.mheducation.com/highered/ideas/i/1157078-2019-flipbook-copley-essentials-of-accounting-for-governmental-and-not-for-profit-organizations-14e\",\n\"M1259685225\":\"https://www.mheducation.com/highered/ideas/i/1159511-2019-flipbook-geringer-international-business-2e\",\n\"M1260205193\":\"https://www.mheducation.com/highered/ideas/i/1155326-2019-flipbook-hickman-integrated-principles-of-zoology-18e\",\n\"M1259969517\":\"https://www.mheducation.com/highered/ideas/i/1157090-2019-flipbook-hilton-managerial-accounting-12e\",\n\"M1259231208\":\"https://www.mheducation.com/highered/ideas/i/1154774-2019-flipbook-howard-the-power-of-logic-6e\",\n\"M1260500233\":\"https://www.mheducation.com/highered/ideas/i/1154777-2019-flipbook-hyde-understanding-human-sexuality-14e\",\n\"M1260500527\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260500523.pdf\",\n\"M1259922499\":\"https://www.mheducation.com/highered/ideas/i/1154795-2019-flipbook-kramer-a-history-of-europe-in-the-modern-world-12e\",\n\"M1260247961\":\"https://www.mheducation.com/highered/ideas/i/1157081-2019-flipbook-landin-payroll-accounting-6e\",\n\"M1260100049\":\"https://www.mheducation.com/highered/ideas/i/1157234-2019-flipbook-mothersbaugh-consumer-behavior-14e\",\n\"M1260060926\":\"https://www.mheducation.com/highered/ideas/i/1154798-2019-flipbook-santrock-a-topical-approach-to-life-span-10e\",\n\"M1260075311\":\"https://www.mheducation.com/highered/ideas/i/1154801-2019-flipbook-witt-soc-6e\",\n\"M1259969495\":\"https://www.mheducation.com/highered/ideas/i/1157240-2019-flipbook-zimmerman-accounting-for-decision-making-and-control-10e\",\n\"M1259235718\":\"https://www.mheducation.com/highered/ideas/i/1159268-2019-flipbook-slavin-economics-12e\",\n\"M1260004759\":\"https://www.mheducation.com/highered/ideas/i/1159259-2019-flipbook-thomas-managerial-economics-13e\",\n\"M1260244970\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260244977.pdf\",\n\"M1260500225\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260500226.pdf\",\n\"M1260500640\":\"https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/highered/sample-chapters/9781260500646.pdf\",\n\t};\n\t\n\t//Check if ISBN is an old edition\n\tfor(var x in newEditionObj){\n\t\tif(bookISBN == x){\n\t\t\t$(newEditionBanner).insertBefore(\"#product-description-container\");\n\t\t\t$(\"#cta-newedition-banner a\").attr(\"href\", newEditionObj[x]);\n\t\t\toldEdition = \"yes\"\n\t\t\tbreak;\n\t\t}\n\t}\n\t\n\t//Insert Yellow Banner at top of page if not an old chapter and if page has eBook ISBN, change yellow banner text\n\tif(oldEdition == \"no\"){\n\t\t$(ctaBanner).insertBefore(\"#product-description-container\");\n\n\t\tif(ebookISBNs.indexOf(bookISBN) > -1){\n\t\t\tdocument.querySelector(\".cta-txt-dtm\").innerHTML = \"<p>Now featuring affordable purchase options, including the low priced McGraw Hill eBook.</p>\";\n\t\t}\n\t}\n\t\n\t//Insert side content in Buying Options section\n\t$(rightContent).insertBefore('div#buying-options h2');\n\t\n\t//If page has VAC ISBN, add VAC Button above product image\n\tfor(x in vacObj){\n\t\tif(bookISBN == x){\n\t\t\t$(\"#product-image-container\").prepend(\"<a href=\"+ vacObj[x] +\" target='_blank' role='button' class='btn btn-primary vacloc-btn' id='view-a-chapter'><strong>Sample Chapter&nbsp;&nbsp;<span class='mhe-icons' aria-hidden='true'>C</span></strong></a>\");\n\t\t\tbreak;\n\t\t}\n\t}\n\t\n\t//Change Student Button Text\n\t$('#description-purchase-button').text('Students: Purchase Options');\n\n\t//Change Instructor Button Text\n\t$('#description-toc-button').text('Instructors: Product Details');\n\n\t//Remove Author Bio Button\n\t$('#description-authorbio-button').remove();\n\n\t//Change \"Get My Free Copy\" to \"Get My Instructor Copy\n\t$('#freeCopyDropdownMenu').html('<span>GET MY INSTRUCTOR COPY</span>&nbsp;<span aria-hidden=\"true\" class=\"dropdownArrow mhe-icons\">g</span>');\n\t\n\t//Change text next to \"Get my copy\" button. If disabled, have a different text.\n\tif($(\"button.btn-free-copy\").prop('disabled')){\n\t\t$('.instructors-link .logged-in > p').html('Free copies are not available at this time. Please <br class=\"hidden-sm hidden-xs\"><a href=\"https://shop.mheducation.com/store/paris/user/findltr.html\" target=\"_blank\" aria-label=\"Contact Rep, opens in a new tab\">contact your representative</a> if you would like to <br class=\"hidden-sm hidden-xs\">reserve your free copy.');\n\t} else {\n\t\t$('.instructors-link .logged-in > p').html('Instructors: get your free exam copy. Choose eBook for fast <br class=\"hidden-sm hidden-xs\">access or receive a print copy.');\n\t}\n\t\n\t//Add SAES banner before Horizontal Tab\n\t$(saesBanner).insertAfter(\"#program-details-header\");\n\t\n\t//move product button row to under product container if inside italic\n\t$(\"#product-description-container > .row\").insertAfter(\"#product-description-container\");\n\t\n\t//move read more link out of feature details section if inside after 1 second (read more link loads after javascript)\n  setTimeout(function(){$(\".feature-read-more #description-read-link\").insertAfter(\".feature-read-more\");},1000);\n});\t\n</script>\n<style>\n.vacloc-btn{width: 100%; background-color: #E21A23; text-transform: uppercase; padding: 10px 20px; color: #fff; cursor: pointer; border: none; margin-bottom: 5px;}\n#view-a-chapter-btn{font-size: 1.7rem;}\n.vacloc-btnfocus{outline-style: solid; outline-width: 2px; outline-color: #b4151c; outline-offset: 5px; transition: all 300ms ease-out 0; -webkit-transition: all 300ms ease-out 0;}\n#freeCopyDropdownMenu{white-space: normal !important; padding-left: 5px !important; padding-right: 5px !important;}\n@media screen and (max-width: 768px){\n\t.vacloc-btn{display: block; max-width: 328px; margin: 2px auto;}\n}\n@media screen and (min-width: 992px){\n\tdiv#pdp-banner p{margin: 0;}\n\tdiv#pdp-banner div.cta-txt-dtm{padding-left: 0;}\n\tdiv#pdp-banner a{float: right;}\n\t#saes-banner{width: 100%; max-width: 1156px; border: 1px solid #ccc; padding: 5px 15px; display: flex; align-items: center; justify-content: space-between;}\n\tdiv#cta-newedition-banner p{margin: 0;}\n\tdiv#cta-newedition-banner div.cta-txt{padding-left: 0;}\n\tdiv#cta-newedition-banner a{float: right;}\n}\n@media screen and (max-width: 991px){\n\t#saes-banner{display: block; width: 100%; padding: 15px; text-align: center;}\n\t#saes-banner img{margin: 0 auto 15px auto;}\n\t#saes-banner p{margin-bottom: 15px !important;}\n    #saes-banner button{max-width: 300px; margin: 0 auto;}\n}\n</style>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL29af5667be214f10908348e76f420c04',
            name: 'Checkout',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ecom_checkout' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n,
                        r = _satellite.getVar('dl product_name').split('|'),
                        a = r.length,
                        i = '';
                      for (n = 0; n < a; n++) i += n == a - 1 ? ';' + r[n] : ';' + r[n] + ',';
                      (t.linkTrackVars = 'products'), (t.products = i);
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar16', type: 'value', value: '%dl product_format%' },
                      { name: 'eVar17', type: 'alias', value: 'prop15' },
                      { name: 'eVar28', type: 'alias', value: 'prop26' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      { name: 'prop23', type: 'value', value: 'click|%this.@text%' },
                      { name: 'prop26', type: 'value', value: '%dl product_isbn%' },
                    ],
                    events: [{ name: 'scCheckout' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc203e8d7925b465abd93b56b15b40022',
            name: 'Marketo Form Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_form_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Marketo Form Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event48' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Marketo Form Submit', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCdc666ffbbb2a4116b03d7784758ae9d6-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe8b2b22c4bc442eabb2e129e3b5b0e79',
            name: 'Contact Rep Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_contact_rep_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Contact a Rep Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event48' }, { name: 'event59' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Contact A Rep Submit', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC7985a7a1a236469887a6fc27f2b58a92-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL779a949709dd47d78bb65be2d14dca1a',
            name: 'School PLP Changes',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/program/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '$(function(){\n  $(".program-links > .button-wrapper > .col-lg-6 > button").attr("onclick","window.open(\'/prek-12/contact.ordering.html\');s.tl(this,\'o\',\'orderingOptionsClick\');");\n});',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '$(function(){\n\tvar plpList = ["MKTSP-GFB10","MKTSP-GED08M0","MKTSP-GEJ09M0","MKTSP-GEJ10","MKTSP-GEB05M0","MKTSP-GEI07M0","MKTSP-GHZ05M0","MKTSP-GEI08M0","MKTSP-GEH09M0","MKTSP-GEH10M0","MKTSP-GGR01M0","MKTSP-GEK03M0","MKTSP-GEC09M0","MKTSP-GEM05M0","MKTSP-GFE03M0","MKTSP-GFW02M0","MKTSP-GAA04M0","MKTSP-GEP11M0","MKTSP-GEP10M0","MKTSP-GEP11M1","MKTSP-GEO11M0","MKTSP-GEV09M0","MKTSP-GAI02M0","MKTSP-GFC05M0","MKTSP-GEZ06M0","MKTSP-GGL01M0","MKTSP-GFG04M0","MKTSP-GFS02M0",];\n\tvar plpId = $(\'div.plphero\').attr(\'class\').split(\' \').shift();\n\t\n\tif(plpList.indexOf(plpId) > -1 && $(\'div.horizontaltab\').hasClass(plpId) && $(\'div.horizontaltab li a#resources-tab\').length != 0){\n\t\t$(\'<div id="plpResourcesSection" style="position: relative; top: -120px"></div>\').insertBefore(\'div.\'+plpId+\'.horizontaltab\');\n\t\t$(\'.program-links .button-wrapper.row\').append(\'<div class="col-lg-12 offset-30"><a href="#plpResourcesSection"><button role="button" class="btn btn-primary btn-sm btn-block">Additional Product Information</button></a></div>\');\n\t}\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL309ef657e87c44ea8c74937c687def22',
            name: 'Payment',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ecom_payment' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event17' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL1e32d4eac4f34c188d47098abfeab92f',
            name: 'HE_FreeSampleSignin',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'div#login-col', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | Free Sample SignIn: ProdView',
                      },
                      { name: 'prop15', type: 'value', value: 'Free Sample' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event57' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Free Sample', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL955cb442506b4125ae1af7852aef59e6',
            name: 'HE Rental Option Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '.desktop-rental-link , .mobile-rental-link',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      console.log('in HE rental option link click');
                    },
                  },
                  trackerProperties: {
                    props: [
                      { name: 'prop23', type: 'value', value: 'Click | HE PDP: Rental Click' },
                    ],
                    events: [{ name: 'event67' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL213be8eb83c9459c80280181e9df6590',
            name: 'Live Chat Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'live_chat_button_click' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'Have a Question' },
                      { name: 'prop23', type: 'value', value: 'Click | %Unitas BU% : Live Chat' },
                    ],
                    events: [{ name: 'event66' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL36169b0398a94aaf903da1c544162e42',
            name: 'Direct ISBN Search',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/highered/product/', valueIsRegex: !0 },
                    { value: '/prek-12/product/', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'exactIsbn', value: 'true' },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = location.pathname.split('.')[0].split('/').pop();
                      (t.eVar2 = t.prop2 = n), (t.events += ',event1'), (t.events += ',event2');
                    },
                  },
                },
              },
            ],
          },
          {
            id: 'RL96b49aedf22a4b1ab404913d3dc55750',
            name: 'My Account: Link Clicked',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'div',
                  elementProperties: [
                    { name: 'className', value: 'myaccount-list', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.linkTrackVars = 'prop23,prop15,eVar17'),
                        (t.prop15 = t.eVar17 = 'My Account:' + e.target.textContent),
                        (t.prop23 = 'click|' + t.prop15),
                        'Log Out' == e.target.textContent &&
                          ((t.linkTrackEvents = 'event20'), (t.events = 'event20'));
                    },
                  },
                  trackerProperties: { events: [{ name: 'event4' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf4478b19de914670b1eb061237fc0caa',
            name: 'SEG Contact Sales: Get Started',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'a.secondary-button', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12/contact', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop23', type: 'value', value: 'click | SEG: Get Started' }],
                    events: [{ name: 'event47' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Get Started', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL2729d0367e454aa0bdfd76e675940976',
            name: 'Sign up for promotion',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'aliId', value: '[0-9]+', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar27', type: 'value', value: '%Marketo ID%' }],
                    props: [{ name: 'prop15', type: 'value', value: 'Promotion Sign Up' }],
                    events: [{ name: 'event5' }],
                  },
                },
              },
            ],
          },
          {
            id: 'RL3d5e8c6d89604fa1b3945a6701040783',
            name: 'Cart - Review & Place Order',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'input',
                  elementProperties: [
                    { name: 'className', value: 'wa-std-completeCheckout', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'student - place order' },
                      { name: 'prop23', type: 'value', value: 'click|student - place order' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event18' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL4011a1368dfd40ffbf4d64d036782581',
            name: 'Hotjar Script',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Hotjar Tracking Code for https://www.mheducation.com -->\n<script>\n    (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:1047156,hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n</script>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLba65ffd1a73745b6bb0f4a9b8bb456c5',
            name: 'Sort applied after search',
            events: [
              {
                modulePath: 'core/src/lib/events/change.js',
                settings: { elementSelector: 'select.unitas-sortby', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'search', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      (t.linkTrackVars = 'prop23,prop6'),
                        (t.prop6 = this.options[this.selectedIndex].textContent),
                        (t.prop23 = 'search|sort:' + t.prop6);
                    },
                  },
                  trackerProperties: { events: [{ name: 'event4' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL31b98e63ecea4689a87dacff1fdb0b44',
            name: 'Facebook Remarketing PREK12',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function()\n{n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)} \n;if(!f._fbq)f._fbq=n;\n n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\n t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\n document,'script','//connect.facebook.net/en_US/fbevents.js');\nfbq('init', '1586838391571472');   \nfbq('track', \"PageView\");\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLbfb49b9dba0042caa43c551baef2e8ea',
            name: '_PageLoadRule',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = window.location.pathname,
                        r =
                          (_satellite.getVar('Content Title'),
                          _satellite.getVar('Marketo ID'),
                          _satellite.getVar('Page Name'));
                      if (
                        (_satellite.getVar('MHE_UID'),
                        -1 < n.search('prek-12/category.') ||
                        -1 < n.search('prek-12/segment/') ||
                        -1 < n.search('prek-12/browse.html') ||
                        -1 < n.search('prek-12/program/MKTSP-') ||
                        -1 < n.search('prek-12/explore/') ||
                        -1 < n.search('highered/category.') ||
                        -1 < n.search('highered/discipline.html') ||
                        -1 < n.search('prek-12/subject/')
                          ? (t.eVar29 = 'browse')
                          : -1 < n.search('account/save_create.html')
                          ? (t.events = 'event8')
                          : -1 < n.search('confirm/emailCheck') && (t.events = 'event11'),
                        (t.prop23 = 'viewed | ' + r),
                        -1 < n.search('highered/product') &&
                          ((t.events = 'prodView,event19'),
                          new URLSearchParams(window.location.search).has('exactIsbn')
                            ? (t.prop26 = t.eVar28 = window.location.pathname
                                .split('.')[0]
                                .split('/')[3])
                            : (t.prop26 = t.eVar28 = window.location.pathname
                                .split('.')[0]
                                .split('/')[4])),
                        -1 < n.search('prek-12/product'))
                      ) {
                        t.events = 'prodView,event19';
                        var a = window.location.pathname.split('/');
                        t.prop26 = t.eVar28 = a[a.length - 1].split('.')[0];
                      }
                      var o = window.location.pathname.split('/'),
                        s = window.location.host;
                      t.server = s;
                      var c = 0,
                        u = 0,
                        l = '';
                      for (i = 1; i < o.length; i++) (l += ':'), (l += o[i]);
                      -1 < l.indexOf(':product')
                        ? ((c = l.indexOf(':product')),
                          (u = l.indexOf('.html')),
                          (t.eVar3 = l.substring(c + 9, u)))
                        : -1 < l.indexOf(':category')
                        ? ((c = l.indexOf(':category')),
                          (u = l.indexOf('.html')),
                          (t.eVar4 = l.substring(c + 10, u)))
                        : -1 < l.indexOf(':search')
                        ? (u = l.indexOf('.html'))
                        : -1 < l.indexOf(':store') || (u = l.indexOf('.html'));
                    },
                  },
                  trackerProperties: { events: [{ name: 'event19' }] },
                },
              },
            ],
          },
          {
            id: 'RLc964373605684d9bbd68d957c6bb58cf',
            name: 'Text Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = ['shop', 'www', 'demo', 'qalv', 'shopqalv', 'shopdemo'];
                    if (
                      0 == $(this).parents('.globalheader').length &&
                      0 == $(this).parents('footer').length &&
                      0 == $(this).parents('.horizontal-tabs').length &&
                      0 == $(this).parents('.verticalmodulartab').length &&
                      0 == $(this).parents('#custom-code-tab').length
                    ) {
                      var t = $(this)
                          .attr('href')
                          .replace(/(^\w+:|^)\/\//, '')
                          .split('.'),
                        n = t[0];
                      if (
                        (e.includes(n) &&
                          'mheducation' == t[1] &&
                          0 !== this.className.search('primary-button') &&
                          0 !== this.className.search('secondary-button') &&
                          0 !== this.className.search('btn-primary') &&
                          0 !== this.className.search('btn-default')) ||
                        0 == this.className.search('text-link')
                      )
                        return !0;
                    }
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text%:%URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Link Click', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLd793bf218ce14a18a6dfc3866b398ef1',
            name: 'Qualtrics Survey',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<!--BEGIN QUALTRICS WEBSITE FEEDBACK SNIPPET-->\n<script type=\'text/javascript\'>\nif(document.domain == "demo.mheducation.com" || document.domain == "www.mheducation.com"){\n(function(){var g=function(e,h,f,g){\nthis.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};\nthis.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};\nthis.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};\nthis.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g+ "&t=" + (new Date()).getTime();document.body&&document.body.appendChild(a)}};\nthis.start=function(){var a=this;window.addEventListener?window.addEventListener("load",function(){a.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){a.go()})}};\ntry{(new g(100,"r","QSI_S_ZN_6zITpY5EScBfRch","https://zn6zitpy5escbfrch-educationinsight.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_6zITpY5EScBfRch")).start()}catch(i){}})();\n}\n</script><div id=\'ZN_6zITpY5EScBfRch\'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div>\n<!--END WEBSITE FEEDBACK SNIPPET-->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLf7dacd46a37047c7b4f755dfd4f65fec',
            name: 'Support Button',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'a#support-button', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'Support' },
                      { name: 'prop23', type: 'value', value: 'click | Support : %URL Capture%' },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Support Button', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf9eaf21b31f949198479024da45df091',
            name: 'Request Quote Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_request_quote_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Request Quote Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event48' }, { name: 'event62' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Request a Quote Submit', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCeb24616fab7c4b508e6f7f074d047e33-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLdc208c4ddce8497f85137a1d2de7ffbc',
            name: 'Google Adwords - Courseware Consult',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'a.nav-bar:nth-of-type(5)',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/support', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC2d9f30fd8115487a964fe34b0efc96f5-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL68a66accdace45e7a89db3255b46ba3e',
            name: 'Review & Place Order',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ecom_review' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop32', type: 'value', value: '%Test obj%' }],
                    events: [{ name: 'event18' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLe2db50d36cc24e2e86345dd8b2770274',
            name: 'Request Trial Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'mkto_request_trial_submit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n = window.location.pathname;
                      if (-1 < n.search('/prek-12/explore/online-samples/')) {
                        var r = document.getElementsByName('sEGProductInterest')[0].value;
                        ga('send', 'event', r, 'MKTO submit', 'Digital Sample Request');
                        var a = n.substring(n.lastIndexOf('/') + 1).replace(/(.html)/, '');
                        t.eVar56 = a;
                      }
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar56', type: 'value', value: '%Online Sample Product Name%' },
                      { name: 'eVar10', type: 'value', value: '%mkto product interest%' },
                      { name: 'eVar11', type: 'value', value: '%mkto job type%' },
                      { name: 'eVar74', type: 'value', value: '%Mkto Form Title%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Submit' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'Submit | Request Trial Submission on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event48' }, { name: 'event63' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Request Trial Submit', linkType: 'o' },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC1005db05be834dda8808678e15c78b88-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLbc452d6f20b74a9995938cacd014757e',
            name: 'Dropdown List',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '.dropdown-menu a', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% : %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Dropdown List Click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLbf4ac64dc90b49fc922c51246c5caa1e',
            name: 'Search filter applied:Category',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector:
                    '#all-search-btn,#seg-search-btn,#he-search-btn,#content-search-btn',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'search', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      t.linkTrackVars = 'eVar7,prop23,prop5';
                      var n = this.textContent;
                      (n = n.replace(/\(.*\)/, '').trim()),
                        (t.eVar7 = t.prop5 = 'Category:' + n),
                        (t.prop23 = 'search|refine:' + t.prop5),
                        (t.prop15 = 'Category:' + n);
                    },
                  },
                  trackerProperties: {
                    props: [{ name: 'prop15', type: 'value', value: 'DEFAULT' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL9a418c6d8a554c8d99ef818266cca2c9',
            name: 'Snapchat Pixel',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Snap Pixel Code -->\n<script type=\"text/javascript\">\n(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()\n{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};\na.queue=[];var s='script';r=t.createElement(s);r.async=!0;\nr.src=n;var u=t.getElementsByTagName(s)[0];\nu.parentNode.insertBefore(r,u);})(window,document,\n'https://sc-static.net/scevent.min.js');\n\nsnaptr('init', '50710e0e-5af1-4a91-b722-b1b65353507b', {\n'user_email': '__INSERT_USER_EMAIL__'\n});\n\nsnaptr('track', 'PAGE_VIEW');\n\n</script>\n<!-- End Snap Pixel Code -->",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLe70c26face8842e5aeb9d65bb6629d23',
            name: 'All Pages - Load Target',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              { modulePath: 'adobe-target-v2/lib/loadTarget.js', settings: {} },
              {
                modulePath: 'adobe-target-v2/lib/firePageLoad.js',
                settings: { bodyHiddenStyle: 'body {opacity:0}', bodyHidingEnabled: !0 },
              },
            ],
          },
          {
            id: 'RLed80830bea714d8a85dc3ae69451aa40',
            name: 'Sample Cart',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'input',
                  elementProperties: [
                    { name: 'className', value: 'wa-inst-primary-button', valueIsRegex: !0 },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'sample cart' },
                      { name: 'prop23', type: 'value', value: 'click|sample cart' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event27' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL416eb48715754f1497efcc6afc37ce9c',
            name: 'PreK-12 Search Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '(search.html)(.*)(&bu=seg)', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      t.prop23 = 'viewed | prek-12:search';
                    },
                  },
                  trackerProperties: { channel: 'prek-12', pageName: 'prek-12:search.html' },
                },
              },
            ],
          },
          {
            id: 'RL47c2fae524204e6aa1538b76106c85fc',
            name: 'HE_ContactRep',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'div#contactRep-col', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop23', type: 'value', value: 'click | Contact Rep: ProdView' },
                      { name: 'prop15', type: 'value', value: 'Contact Rep' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event58' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Contact Rep', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL27c3176817884b78b411ff8f10fc281a',
            name: 'Body CTA - Primary',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    '.primary-button ,  .btn-primary, .btn-danger, .animate-scroll, .shipping-text , .video-link, .cta-links a, ul#plp-navigation-tabs li a, .primary-button.blue.offset-20, button:not(.btn-header) button:not(.mktoButton), a.emag-btn',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% - Primary CTA on %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Body CTA - Primary Button', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL7c47a4cadc5e4b619030548d8702c55d',
            name: 'HE Rental Option Link',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      function e (e) {
                        return 0 == e.indexOf(n);
                      }
                      function t (e) {
                        var t = $(document.createElement('a')),
                          n = $(document.createElement('a')),
                          r = $(document.createElement('img')),
                          a = $(document.createElement('img')),
                          i =
                            'https://app.iflipd.com/book-details/bundle/' + e + '?aff=mhe&type=1';
                        t.attr('href', i).attr('target', '_blank').addClass('desktop-rental-link'),
                          n
                            .attr('href', i)
                            .attr('target', '_blank')
                            .css({ padding: '0', 'margin-bottom': '30px' })
                            .addClass('mobile-rental-link col-xs-12 offset-20'),
                          r
                            .css('width', '100%')
                            .attr(
                              'src',
                              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA/CAYAAAClz4c/AAAR5UlEQVR42u1dCVyO6do3+77v2/nGzDjD+BznGMc6Mz4fjmUsBzGYMQyNoyiNVJQtLdaEkrIricqSNYWJSUqKqEQIrUqlVaW6zv2/Xs/b+769FaZGmfv/+92/up/lvu7nvq//tT29b83OnTtHKSkpsskmm04DN5rhFwkJieoANyRBJCQkQSQkJEEkJCRBJCQkQSQkJEEkJCRBJCQkQSQkJEEkJCRBJCQkJEEkJCRBJCQkQSQkJEEkJCRBJCQkQSQkJEHUyMzMpJs3bz7w5PLz8x/6IhUXF9P169epoqLiD5V7586dWs9jPrpzquseiYdAEEdHRzI3N6fc3Fyt4wUFBdS6dWtu9wso5JtvvkmjRo2qlwdNT0+nSZMmkb+/v9bxsrIysrW15XP62vnz58nS0pJeeuklOnHiRINvSHl5OXl5edHw4cOpS5cuNGzYMPL09KTS0lKt606dOkWDBg2inj178lrl5eXxPLt27UqrV6+Wmt2YCNKuXTt65ZVXKDU1tZo1mzhxIk2dOvW+xwS5hgwZQi4uLtwPCgqiJ554gtzc3B5ojnFxcdSsWTMmsiZu377NSvXee+/R66+/ztc899xz3Ec7evQo+fr6Ur9+/VgRGxJQ8v79+/Mc3n77bfryyy/5J/q9evXi88qcP/74Y25LlixhD2dtbU1PPvkkmZmZUVhY2J9PkysrqfRUFJWeiNDbytPSGx9BgLNnz1J8fDz/jlArKiqKbt26RWfOnKHt27fT5cuX2WrGxMTQzp07KTExUW1JcW1SUhLl5OTQypUrWVGsrKwoISFBPf7Vq1f5PjR4CV2vsXv3bgoJCeGx9BGkUiwsPB/mBu+CawYPHsx9NHgYjAOLDcVEH3OHXKxbQEAAhYaG8nzx/JB3/PhxrVAHzxscHExbt27l9cC1+jBz5kyWb2BgwGPDa6SlpbE3wXEYGpAhMDCQ+0OHDqXTp0/ThQsXqFu3bvTiiy/ysypEwnPh2m3btrGBwLMqxgfrkZWVxccvXbrU9AlSXkHpbTtQ6gef6m0FHmsbJ0E++eQT+vrrr/n3zZs302OPPUbdu3enF154gX+HhTQ1NeXNRR9WGyRB7oGwZty4cay4jz/+OCsFroHFB6CMCMPeeustevfdd+mDDz5giw9AcWBhcT0sa6dOnfQSRBPwUrhmxIgRWscXLlzI8wMxMzIy6I033qAvvviC5wqvBhkIxyAPfTQPDw++99q1a9SxY0d65pln6LPPPqPnn3+e7O3tq8kuKiritcJ53ZwNJIGsjz76iMLDw7XWAuuOMAu/4xjOgYxYw7Zt2/I6N2/enMd1dnZmksDD4NqvvvqKz8P4PBIeJPoMlUZEqlvulGlNjyDYGCMjI0pOTiYTExPujx49micC5UUfnkWTIPAgCLVwzsLCgj0SFBWkQOhTWFhIJSUlrChQCljZgQMHcqi0fv16unHjBs2ZM6deCdKyZUv2egcPHmTlx3PCyxw7dozHgNVHAo2fIHBsbCyP5eTkRM8++yxFRkZqyYCnfPXVV6lz58569r6SSYZxMc7evXvVngaeAHkSlB3rBQ8CgvXp04fef/99HhfzsLOz42fA2ikE6d27N3s/3dzxUSBL4bpNlPo/n1OWwaimRRBYOFhBwN3dnTcK4RGA5BR9Pz8/LYJoKq+rqyv3Dxw4wH2QAqRBQ5wOSwnFxXw6dOigDmdqykEelCDjx4/nc+i/8847rJAAyKooL0IZKD3WQJmjoaEhPf3007R06VItGVg7eEN4JiUU0iwkYI3hCZXva4IMY2Nj9TXIXSAL6waPA8/cokULtVzMF14GCbxCEB8fn0at53n2C+jWbLt7bvAgwhpQ4XpPJkf2TxM492hyBImIiPjdBNm/fz/3MTZCNM2GmPzll1/mUEwpgz4sgmBdYMnhLTXnuG/fvmoFDRAa98KqawI5DYiPdUYeVBdBsA/wWgj59MlVCIKcqDEjrUUbSmveitJb/v2eWpH/DuE5NvI92WN+pgqRi1WK0LVREAThDKwiQho0hAGwhPVNEBsbGw65EKK99tprnM8oMTs8B967QG7fvn1ZqSATxxwcHP5wgsB7DRgwgK9XvCbmGh0drVc+En6Ea8g3Vq1axeET8gPkVlg3pURdF0FANiTt8CL4ZkAACTnWB2hKBMmzX3jvlc/V61We40dDJgZHW42FIFhwzYYafn0SBJUWKCLCDMTpqPB4e3szSZTQBEqMGB+AQkKxkDCDKO3bt//DCQLgHuRFMCD4iXF69OjBYZO+F38Ie+BxEA499dRTPNaHH37IoZESetVFEACVtlatWnES3qZNG/aomBPW7ZEjiDBEBWsEOf7SgrINjak0LJzK4uLvEqSY0j7/mwi7Nj08gmAzEAZoNpQzAVhB5XckyzinbCKUC33FA8DSow9rB+sLJVfKvgAS1I0bN/I1SuiEMjHeU4BckKX5Qg0VJJANiTTGxH1Xrlyp8TmQrOIahGiagLfCXJD8Y3wQXCmNon/y5EkO4ZTyNMZA4qwAHg/l1nXr1tHhw4frTIqxLiArPDHmjr4mUJCADDy7AiTfmJdmCTk7O5s9OcY5cuSIet1RBsb9WO8mTxChB/AOaR+3FOQwogrxjFkDDejmiNGcrKOVJ6dQZX7BwyOIhMTDIkiR9zZVWDV2AlUKA8bhpCZBfickQSSaNEHKrydTnt18dc4hCSIhCaILHR5IgkhIgtQCSRAJSZCmRJCzR0/SAgPTas3151l01GcvlZWUNtgiompTVlpa7e2zLvwWrqY1Ux0bbh53MI8yrXlciIzhdUhJTHqkFTnxVCw/Z1JMgiSIPpzYdYiMmv+L5vWdQMvGTFe3ae2HkfGnfWij1ZI6FfhBEeKzhxYZTKG8m7WXTt3+M4ds+/7cYEoSvMGfnEaaU8GtPPWx04fDeF0ux5x/pAly9kg4P+f536IkQWojSETAYa3jhXn5rDQ4dzX2YoNszt6V3mT+j6GUcyProRJkx+K1ZNVxBOVl50qCSILcG0GA6ODjfO7XTbvUx3Jv3KRAj62stB6T5tHhTTup8FbVR2srRNgU6L6NQn0PUE5GFu113UyuhrPI3XgeRQeFsje6U1ZG+1duoYVDp5BJy/7kaeVEwWv8xL0VtRIkX3iaPcs9yWW8Da2b4kjnRHio3BNz6AT5O3hQbmb1jwiHbQ8iP3t3KtUJF0tLSmjvCi9yHDSJprQeSF4znOnIhp1UWVGhJkhidBzFH4+mjRaLaMVP1uRrv4qfSzdEi/vtFHlZLyWXcTa0ZdYKSoyKrdXzBq/zpwOrtP/gMCcjk/zsVtHlM/FaxyN2H6YApw1UUlSslhd7LJI8Z6jk+cx2oUvRcdXkYW0SImJo88xlvGabrZ1F/4x4vspaCYIXuYFuPrRj4VrKzciSBKmJIEe37uNzodv2qwReTCKbb0Zzw6Z42yyj6Z1H0vx/T6b8u9YXym/37USa28eQ7ETYtvi7X1ixprYdTCaff8ubD8X0MLWj6V1H0aQWfcl+gBFtsFwsNv5OjQSx6jyCFgw2IUchC/mRZYfvaPJf+zFZgUtCIU1afsuKp+UJBXmtv/qe56CL24XF5GY0l6w6jeCx7AcakZdQpgoNgqwQijWz+xiWOV/IR9i59HsL9V8DQNm22buRWZtBrIQg6bIfrbiPHK4mkvg5uJPZ/w7U8p4wNpC53nyhFontxXouHTWNczaQ18fWlcd3NZzJ8pxHW9Ivf/s3Hdu2Ty0PPwOcNwoZg2i5CJlxHeaH/sG1vurrdAmCPdi1dAPvy+ENOx44vAZBbhqMogK31ffVMjp+0zgJckyQoTCvgBti8bMhETSj6/dk2qq/2MSbVHq7hBYNMyOHgcYiZ8hR33/jaqpQwB/IW1hNxTuAINO7jKKLkWerkl5hySAnYOnGBwqxTMQ84NGUDcMcFgwxYUXJvJ7GG7tQ5DO2vX9mL6YgPOAQb/aZQ2EPFGJ52ThTUX6h2nK7G9mS8Wd9qCBXla9EHfyNJom+pnJCPpQMSnvjqv79wXpgnHCx/oq1XzbaimZ2+5EsO35Ht+96i9TEqzz/oLV+3D914CiTNNQ/UEvejsXr6BdhhDKTVZ/MjBUebbIwSAfFfWrSCDLDoIAk1+IvVSOIQirjT3uzvN/zRRcgSE2fEKyrNUqCYJMnt+h3t/XlRbL453D1BqLKYfRJbzqxI6jaGHuWeao2tbBITZBVxnO1rikWSoZrfIXlrK8cBCQ2FnM6umWPKpQSc+PNPnFafc3i4b8I0hjWWo27nxzkoAgfcRyhJhTKdfxM9pQwIJpAOGQqwraDq331yiwuKKLZ/z+Ww1SMk5Oeycbo5IEQ9o5nf1X9BXGg+1YmRGZKOiv4irHW7FF0nwfra9p6gPCg21m51pnNZ7JhTzSBap3FP4fRLhGyaRIkXhBk/6otHPKCJPQ79bNS6MGDNqqnb3epV4K4T7SlPc6byEd4ApAF1hmbpr4uQHXd9E4jaVa3MVrNot0wPpclrFcVQWyrE6RT/RIEnsNMWOnti9aowilh1REurTVzZKVLvnCFn0WxvvVBkCANgoAU8/pMIFOhVLprggbL7znDqUa5XiInsBTzRagHklt/8wOPuVKEc57TnZgQzj9YksMAY36ekuLbNPdfhkykavK+UclDvoFQDOGgiQgb9c0L4SSIqUkQ7Bfut/76B8rPufVIFCAaJAdBqOIxeZ5wz/2EFYuoUphDqoR9n8tmuhgeo7dhc/9IgqQkXOG8A4UABRh/6j+G0M3UG5xQT/vSgLLTMxuEIHjW+SLBn9NjHJ0Xiby+NUm/XPO3qZw7GsFjxYVFcd7iM1f1LTAInyw6DKe0K9d5ffas8Lpr/UvJob8R2fYypITjp/XKy7iSzKGR08hpZC1C5PjQKL3XpV5M0iIIyOE9ewWTb9P0JZIgtSXpuUJhsTFze41XV6iyhcIh0YZ1rtD5Zg/N5LqhCALLplRxFOxy3sDhR8zhqu+8Srt8jTfbf8Fq4U1GsiWuzzKvJkGYkIKEU74YQFfPXag2bnkdoQLCLISxLiLZNm83lCtTqmpWFk0RCfzaqY5sAJLOVr3E85nryhW3a/GJeuRV7QuqfQiXEsLP1DovhSCoKgL7hLFBP3i9f4O9/2ryBOGXeN57RHjSl6stSlUElhrKt0VYupQLSZSddoNLraiiXD4df98ECRKbAHf/6+YAigs9VWsVCwkn5KBUnBh5jnY6rWdrt2CIKd0prfoAE+a5fOwMHhf5SZIexa32PkY8FxTxN9/9FHc8ihPmeyUIlBnknSXyCcwN3irt0jXa4+JFG7kyV15znC7mCoODfA/VQIRQSsLuMs6aj8/pOU5rXTA+CiCze/xEp4OPq+SJRH738k20SYRzymdKUMRAODaj6yiK3BfCHjVdeJcDIklfM8WBcxF9VSzkNu5i70BC7MmfniARe46wBYzcG1ItmUN5cOrfh3Asr1RLUBWxEsk2LJy5CF9QRcKCgywqgtxhpV1j5qBjLQvJ5v9+FPnCWi1rD8UA6ZDA52Xl6J3jahN7chhkLBT4AFtcXI+SMV5kZiRVf35Vpac3v2e5l0pM8vnLnLhi3OldRjKZY0LCeV10CXZo7XY+fiszu2ojRLiyfMwMJqyyJrO6j+EKWl3yT+0PYWXcZKkd1vzqFcBydiyq/nFT7AdCMk15s3uM5fclmvIyrqaQ24TZquuEh0K+hhI9Km4KcWNDTrKchLCqwgZyEBBzbs/xlJWS8ecmCCx+UX4BK7YuYE1wDrV47Rdspfw3SnDzSglU+/1CkdoaalpLkES32oMQ7sq5BK3wRhclRbep+G41BmMkxV6gjGspNYYAqG5N+mtfOrEz+J7XAUqBeSgJKqw2nl03nIThwHHNl23K893KymaPk5mcds8lUoyPNSwr1f4YbzkfL9DyjjXKS0mvVR7W9ooI07Bm+sJjyNH1dMreN+Tf4jUJgjxKQI6C0GfJCHNOUPWRV+LPA0kQHXjPWUEW7YeJkGUAhfoFygWRBJEE0QSSZMTu1+MvNfkKjIQkiISEJIiEhCSIhIQkiISEJIiEhCSIhIQkiISEJIgkiISEJIiEhCSIhIQkiISEJIiERKMhCP6PnfLfU2WTTbaqBm78Fwx/NJP+RLHEAAAAAElFTkSuQmCC'
                            ),
                          a
                            .css('width', '100%')
                            .attr(
                              'src',
                              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAABUCAYAAAD+vp7UAAAAAXNSR0IArs4c6QAAGStJREFUeAHtXQeYFNWyLjKSc845KFnJoMQlCGbSVUBAVFBUgoLkLElQLsJV8ZEFFAQBVwkSlJwRRBCQKDlJTv3qr7Wbmd2eZXZ2Zpneqfq+me6uPqHOf6ar61RVTyf44YcfDFJSBBQBRUARsBBIjL2wsDCLoTuKgCKgCIQyAuHh4ZQwlAHQsSsCioAiYIeAKkY7VJSnCCgCIY2AKsaQnn4dvCKgCNghoIrRDhXlKQKKQEgjoIoxpKdfB68IKAJ2CKhitENFeYqAIhDSCKhiDOnp18ErAoqAHQKqGO1QUZ4ioAiENAKqGEN6+nXwioAiYIeAKkY7VJSnCCgCIY2AKsaQnn4dvCKgCNghoIrRDhXlKQKKQEgjoIoxpKdfB68IKAJ2CKhitENFeYqAIhDSCKhiDOnp18ErAoqAHQKqGO1QUZ4ioAiENAKqGEN6+nXwioAiYIeAKkY7VJSnCCgCIY2AKsaQnn4dvCKgCNghIO98sTuhPEVAEVAETASO5ixk7j5wm/v4nw8sE+wFHKcYDeP+Sw0TJEhgi+/mzZtpw4YN1Lp1a0qVKpVtmZgw/d1edH2b4/M0NtQ1y0TXDupfu3aNpkyZQmXKlKHKlStHVzzOz2EMhw4dopQpU1LWrFkf2P/p06dl3JHLHj9+nB555BHKkCHDA9vQAr4jkGXeLM+V796lSyPHUYJkSejGmrWeyznpDF6f6iTiixya0Xjqqadsxb5165bBF4mUGThwoG2ZmDA9tXfu3DnjzJkzxvXr12PSXLRlv/jiC5E7c+bMHst17dpVygCD6D43b940Ro0aJWX45mBcvXrVY5txeWLjxo0yd5DJlD9LlixGixYtDFZyUUQ5f/68UadOHavsu+++K2UOHz5sVKhQweKPHj06Sl1lxAECt28bZ199w7g4+CPjxvqNxpEcBeOg08B2AZ0Y73yMSZIkobJly1Ly5MmpdOnSfO3Fjjy1V6xYMWIFRjNmzIhdBwGs/dhjj4k1VapUKUqRIkUAe/Ku6QEDBlClSpXo559/pitXrliVYA3OmjWLihcvTgsWLLD42OnXrx8tW7ZMLMtmzZpRgwYN5HyXLl0IljwsxebNm1OtWrXc6ulBHCBw5w6d6/g2JS6Qj9J+2CMOOozDLuKbxWjeS/jCM3f9so3cHqw6niYDVp6/yBuLEVbV9u3b5bN+/XrLYmrbtq3Fx/l79+6JWMFiKfK7ei1Z8+XLZ8ybN884deqUceDAAeOTTz4xeEkt59OlS2ccO3bMgtRcIXTr1s3iYSdjxoxSfty4cW58PYgjBFwsRbPH+GQxUnxUjM8995xRsWJFY+7cuTJnS5YskeP69esbv/32m8GWh4HlW/ny5Y1vv/3WuHPnjtG/f3+DLUwjb968Ro8ePQz2z5nzbbi2hwscbSdOnFguzAIFCsgxlnagu3fvGljWPfHEE0bq1KkNttaMPn36GFiSu9KJEyeMl156SeTInz+/8cEHHxgTJ06UNqNbSru2AaUH5YzP+++/73pK9l3HbZ40xzJ79mxjxIgRxuOPP26gv5YtW8pyG0tdlMmUKZPRsGFDY/ny5WZV2e7du9d44YUXjNy5c0s9tuAMttzcytgdQBlCzvTp0xtsIUYpsmLFCmsskGXNmjWCa7JkyYSPeQHugwYNki37UIVfuHBhOYZrA+QN/iYG+H1AKZcrV05uKlGEcjgDy1p/fI7mLeaOhI1SRAFVjO4wxemRaUF48jFCGCgrXITjx48X2aZOnSrHSZMmFWVlKhNsYalAYbrysG8q1cjtTZ8+PUpZlP/jjz/ESoMywTEu3Fy5clkKtHr16nLRor1Lly4ZOXLkiNKO6Rv1l2I0xw0lZ5KJDXiRx1yvXj3D1feH8yVLljSrGlBeHOiQelD6ZhvsbjAWLVpklYu8c+TIEauvvn37Rj5tHfNyWMpB6S5cuNCq4ypnmzZtbPknT570Gn8Tg5w5c1ptbd261ZIjvuxAKd5Ytca4feBQ7D4H/7oPiQeliALxSTHGOx8jX0Qeia02iVSz1UNsLUk5troIkc2VK1cSW0vEykz48+fPt22HlQexNUO85JPzbKnJMV/MNHnyZGIrjVhp0K5du+jo0aPSNnxnqPPll19KHQ6KEFuMsg9f2Z49e2jx4sVSz7bTADDhg4WsvOymRx99VHpYunQpde/enfbv3y9bMHfv3i3HHMyhDh06EAebZHvhwgXi4BOxxUW3b9+mt956i1DGjtCHSfD/eiK23OQUcCtRooRgxjcQ4XXu3FmOe/XqJVu22IXPFqQcw9foLf5m/xzYIV4piA+zUCHv01HM+k7YJuLfM3yAsfrkzxsx1PjsU4w0mSGlGNkvRZ9++ikVLVqUoJASJowYPoICNWvWJF5WEhQfiJdmkaCKOGRrjqpVq0YIyoB4KSfHSBlhK1N4bM1KcAEpQ0hJYYtU+OxXk+2qVatkC0UwduxYCTqwpUm9e/cWflx8QaEjkIEA1TPPPCNdQkGyRUdQElB0JgGLbdu2EfsDCWlAjRs3lsAHxsfuCEqTJo2M01UBmnWxNZUY9tltgY0tuZ5ja9TCFYXZypNjE29z7nDTMefDW/zNzgcPHizBndq1a8fpTcns31FbV6XYq7ujRPdFWMflMfoySLMOLmqTeFktipGDFHKxm3xYUr4SLFEQLwPlE7md33//XVhQlqCwsDDZml+u8pm8QG1d+zLHbMcz+zfHxismatq0qcl222J87Ad04+EAeZQmwSpnH6V56LaFogWxz5XSpk3rds6bA1PGB+FvtsX+S3NXt9Eh4KIUU7Z4iY7mKkzxIYk7uiGHlGKMDgh/nMuTJw9xEIaqVq1KnTp1itIklDEoW7ZsssxGuolTCGMzacyYMTIG89jcwnq0o+zZs4uVzn5YmjBhgmDDwRS3onBdrFu3TniwuH0hb/H3pe2QreOiFJGSc+fgXyEBhWMVI3xcyG9zJTzlgjy5uCDTuoJ/kiOhlChRIqpRo4b4u7Zs2SJWEpZ5oLNnzxIHIMj0oWH5umnTJuJgBs2ZM4eef/55unjxIs2cOTMuRPepD8gOfJF/CJ8ofH6mO4Ej1wRlZi5v7TqYNGmSlIFPFy6L4cOHEwekpD1YeEOGDJFqcHcMGzbMrokH8rzF/4ENaYEIBCIpxQfBkqzi4/HGknSsjxH+rLp167p9Onbs+KC589t5+LVAcN7D73jw4EHq2bOn+MJu3LghwYMqVapQo0aNxGfXpEkTUX6ow6k5BOsRPjUkLeMxN3yQ+ByshGDTyJEjRTzOtxSLEQodSp6fTCFOUYpWdPhwhw4dKv5GBG3atWtHRYoUkZsFMEQAh1N5aNq0acSpVNG25emkt/h7qq98FwRiqBRdasaLXccqxoeNPoITCAjA5wZrD1YUnvtdu3Yt8eNtYk1haYjIL4IPCPYgQAMqWLAg8kcJkWwQghtQtPwIoxwH69frr79OX3/9NWHJiogugkmcFyqK0QxaRSc7bgjwI8K6hPVpEm4snLsoGJpPtpjnYrL1Fv+YtBmSZUNcKWLOEyDBO3IQICR/DD4Oet++fYTlHz6uBAsIaS9II4FP0ROZf6Tgq5Xkqd1A8/EYH1wEUPK+BDEQ9IKVDWUGH6S/yVv8/d1vMLWHf8TJvmaZpOrERK47Bw7StQWLKc179zMTzPrwMf5dvU68WTKb43Ld8kMc5Fgfo+tAHuY+loN2BP8bcvEeRIjAOpGgyGOjzOGPDGTuoLf4OxH7QMucuGABW6UY6H6DqX1dSgfTbKgsioAiEBQIqGIMimlQIRQBRSCYEFDFGEyzobIoAopAUCCgijEopkGFUAQUgWBCQBVjMM2GyqIIKAJBgYAqxqCYBhVCEVAEggkBR6brIKnajszH9OzOOYGHcQXrGIJZtmCdW8UsWGfmwXI5TjGeP36Keld/xXZkSZIlpWyF8lCxqmWp4VutKFnKiCdNbAsHGfPIb/tpeJPOVK1FQ2o5pEtQSfdZh360a/l6Gr5hFqXJrG/j82Zygnk+vZE/1Ms4dikNJViwQkm3T8Zc2ej43kO09H9zaUCddnTx5NmHMr/71u2gMc270ebvVz6U/n3p1Iky+zJOraMIeIOA4yxGc1Bps2akrnPGmIfW9sKJMzT5nWF0YPNumv7+GOo8Zah1Lq52/jl/kf7cuItK1Y6bf/rxx7icKLM/xq1tKAJ2CDhWMdoNBrz0OTJTh//2luX2njVb6OrFfyhlutSeiitfEYjXCNw9dsyv4/N3e34Vzo+NxTvFCGzgB8vOvsajew7w0vogFalU2g2yHUvX0u6Vm+jIrv30SOqUlOexwvTEM7UoZ7ECbuVwsHr6IjrxxyF6pkc7un3zFm1ZvIr+WLudzhw+QZnz5qBa7Z6jwk88JvVOHzpGKybPp9N8DrQt/Bc6e+RvSpctE4V1aiE8b782L/yZ9qzewmP4k7Lkz0VFKpaiGv9pTAn+fR0DXAZrZiyifGWKUaXn63ps9rsRk+nGlWv0fK8OlCR51H+sjqnM/5y9KBhg6X2Kx5spT3Z6snVTKl4t4n0tdoLEBO/I9a9dvkILR34lGNR69dnIp2nbD7/wfGyjBuxTTpvF3f959cJl+n7MFMpaMDc91Sbi9Q1mA77IdPnsBfpl5mI6vHMfnT9xWn4vBcuXoKrNG1LCRDHzSmF+/9z0G+UsXoCqt2xkiuX37ekWbfzeZig0GC8VIybu2uWrMn9QfCbdvHqdZn44jjbxjzIdL8XzlS5G1y79w8rve1o5ZQG92PcNCX6Y5bHdvWqTBB4KVypF3wycyO1eoeyF89Lpv47TiX1/ES6wd2aMoCKVS7NP8xz9MmuJ/BUZ6v61fS8d3vGH/Pi9VYz37tylaT1G07pvfqIMObNQ8lQpaMePv7ICWCOfDhP6UMr0aShLvhziw9yyeDVVePpJSpw04h006Nck9P/TxNlUjJWWnVJEuZjIvJ/dAxYGRfKK0v97/2HB580vBtKjtdxfa+AL3qbs5jZFmlT0+y9baf28ZVS9VSOCb9mVlnw6XfzKdspvJweMVvPNo2m3tlYVX2Xas2ozTek2UuY/d8lClLVALpnfjd8tp40LVlD7Tz8kuHe8obVzfqQZPT+m7Izh0++19qaKT2Xi++sHfALF20pOe6/0uWMnjTfy1zP61GzN2RD2tGf1ZinzdrHGBlt5VqEpXUcKf9HHU60X0uPklQuXjU9e6Snn2Bq0ymNnQvu+wu9Soomx/tulxq3rN+Q8W2HG/OFfyLnxbT50q7N50UrhcxDIjR/dweFd+6ROp0INjLEtexgnDxyxil8+c0F4GPfU7qMs/txBE6XOhvnLLJ7rDl/Icn77j7+6sm33o5PZFYO1c3+0MLh57YaxeNw06ePj5t2itOsL3lEaYca8oZ9LHzuXrXc7fergMeFjnke9+K7bORxM6jhAzrti6YtMpw4eNd4q2sjoX/tV4+8/788L+gBu+G2MadYVhxaZ8zmj11iLhx3g92aB+saAOu0NzKtS8CEAnRgz+99bbRsH5e7x6wQQdXb9HPv9IC374hv6vNNgkaBB55aWJXWAly3r5y2lcg1rUKN3XnbLF4QP8rXP+vISPD3NG/a5rfSwiCo+V8eyvJAKhLt9Qn6lAV84tnV8YeYvW4w6fTWYLZKIP7FFG6kzpaM3Jw/ipWJG2sCWE6w0UA22oJD3uGbGYjl2/YJlu5WtyQw5slCpOv4JAr3x+QCq/EI9C4OkjyQjYAwr7tSh467dU2zxdm2sTFhVOdy5POKdMOY5WNGJkiSm+m82p4Nb9tCl0+fNU3Tn1m2CjzlbwTwWlr7KNKvPp3Tv7j1qP743t3d/XtBZ+UY1qTH/nmBN71zmLp8lzL87fAOjGR98TJnZ2n9n5kcyr5HL6HFwIOBYxXj++GnqVaWV22doozeIrQu6de0G1X3tRar3ejML5a18EYFqtY3qpwI/WYrkVPGZOoT8M/iPIlO2Qu4XBM7jooRfCz48fxGW6XbLYiifJ19pQviDV0S8QfA9FuWczQNbdsty0lUGKNBbN26Ka8D0S7qe92U/e+H7L8Qy66Nt+FBvXrtusmQbW7xdG8tftrjcFJBL6Upbl6ymopXLUNWXIt62uC08Yo5RZi8vv9m6J1OpgueLTLjBwKcMV0nOYvb/nVm9Fft++Qa146e16MaWNn63gqZ1H00ZcmUV14vmg9rCFDRMx/oYk7PFVrpeFQtI+JOus18Rig8BEVhKroRgBQgX064VEa/pdD2P/eMcZAGdOnA0Sn05YfMV3QugbIrHipWjaMSFyUtIq50afFFCCazhoEDzgZ0tPnydULBVmzWweIHaSZAwQZSm/Y035hq+YPhNEXBC8AvBtVbD3hHfHnjblqzhm0dTkYWX3bItUy/C2sSBLzKZdeCLXsBBIE8EH+5J/t3YEfJZ2QUiN9Iu0z+SG4ldOeUFDwKOVYypMqaj1qN7WEiunR1O09mhvZcjlM9+0N7imzvX+c4PQiQwughivtJFxdIy6wXTNnnqFCLO9X8iAks4KFWnslxoCAJg3LB8sWTEcvvxJk89tOWav/Eu869ixHJVlCCvAODGKF034uZYtkE1+m74l4TIcZpM6SUghOAVMg5M8kUmsw5cNoh+e6IcHEixSwvbv2EnIdiSmFcXsOB/nf0DNenaxlMzyg8SBByrGCPjV6VZmEQH963fQT+Mn0mN33V/bDBH0XxiYfzno/coF6dIOJHO/psGlCVfTkt8KHk8RsgBJY62r6BqnDqymq1HUM2Xm1jl4nrH33gj5SpF2tScBbCOmnCUGctipEmlypBWhlY2rLq4UbaH/yrK8NKZ81FSdHyRKUeRfNJ+/jLFqeOkfjGGEdY95Hx1XE8a26oHhf93lvz+4OtWCl4EHOtjtIO01dB3JBDw42dfEwIxrpTn0QjLAQ77YCYOl3sUbysvFUF4HtyVqjVvIMs0BGGQu7ed8yeh/Atwjt3DIn/jnTBxInmSCJYwXAfIQS0bFvEKW4wxI/vukEaD+d3JKVSgMi7nceyLTMjThELet2GHYIt2YkJ5SxXhYNoQWe53nNRf0q+msq8x8u8zJm1q2cAjEK8UI6J9iDjf5VzAqd1GEXICTYJVhR/5T5PmyFLT5JtbRB2Ry8gpKCbL562Za4dlXUxpw/zlkkAduR6WysipzJI/Jz0WKV8QjnwsKY/u/pO+7jteEtFrvPx05CaiPY6NzHYNBwLv0vUjls0ze38iwY7S9e/7DyFDuQbVJTq8acHPlJpdLYX4WXpX8lWmpt3biv96Rs+xEu12bRP7f+877DHwAmWN6D0IEe3Wo7vTbV5ST3ytH105f0n4+hV8CMSbpbQJbZ32L9AWdnbDMR/OliP+ZQcE5/jLvIzGP8V83LKHLD8jlmep+O59gHAxQbGkSJuKn4KpbTbn07YwP6WCiDXSM9JlzUTHWJYWQ96Okpxs1zgupLkDP2NfVLj8S1DylCkI7gEEjRKx1fRinzcI1lNkqsmKEGXwZM4jaVLSE01jNobYyBxZFhwHAu8SNSqwkkkuieUFy5eM8qQL/IwLRn1F5/gfmKqyayVyNN5XmfBkCp6U2v7TrzTs6U6SaI4l9qVT5+jg1j0yV5lyZ5cblt3cuOKDGxh+k4s/mU6fvzmIEIx5UB3X+rofNwjEO8UIn1ur4e/SiGe7iK8RUUn4lkC4+HuHT6KvOS8NTnBEOUGILKOM+QSLMGPxhadtarV5llZNW0jfDJ5ISVkpP9mmqbWUi65ppIS0/fh9efrl+9H/J9YvyiOvsfWobhJ4sKuPsSHVB0vNSs/VtawUu7J2vNjIbNceeP7GG1ZtyZoV5FHLyMtk9If0JSgsPJFUpv79ZTbOmeSrTK//r7881bR47DSa03+C2ZzchGCJNu3+qtcKDqsaPOqJyPmcAROo+aCo72+2OtCdh4JAAmR5h4VF5IE9FAkeUqd3b98hfopBltt4NMtcSvpTHOQ34iKFTxCPtsWUsKw/zr5SBFtSZYwIMkTXxtgW3dkXtpP6L/9SlER0ZT2di63MntqNC7w99e2J76tMcJGc5oT2jDmzyp+WeGpf+c5EIDw8nOKdxejtVGCpG+joNJ5zLlDO9wAIUm+8DaDAmQ+liD/pheXkK8VWZk/9xgXenvr2xPdVJqQD4aMUfxEIWcUYX6YUQSM8dTKz11hxCeARPSVFQBGIHQKqGGOH30OtfZJdAQgGIAqPZ8eRuwkfmpIioAjEDgFVjLHD76HW5v8lobKcooIk5xI1yvOnwkOVRztXBOILAqoYHTyTiEK3GXP/sUgHD0VFVwSCCoF4leAdVMiqMIqAIuBYBFQxOnbqVHBFQBEIFAKqGAOFrLarCCgCjkVAFaNjp04FVwQUgUAhoIoxUMhqu4qAIuBYBFQxOnbqVHBFQBEIFAKqGAOFrLarCCgCjkVAFaNjp04FVwQUgUAhoIoxUMhqu4qAIuBYBFQxOnbqVHBFQBEIFAKqGAOFrLarCCgCjkVAFaNjp04FVwQUgUAhoIoxUMhqu4qAIuBYBFQxOnbqVHBFQBEIFAKqGAOFrLarCCgCjkVAFaNjp04FVwQUgUAhoIoxUMhqu4qAIuBYBOQfvPG6QCVFQBFQBBSBCAT+Hw8NOo4OWVmBAAAAAElFTkSuQmCC'
                            ),
                          t.append(r),
                          n.append(a),
                          $('#iflipd-desktop').css('padding-left', '30px').append(t),
                          $('#iflipd-mobile').css('padding', 0).append(n);
                      }
                      console.log('in rental link');
                      var n = $('meta[property="book:isbn"]').attr('content'),
                        r = [
                          ['M0077836332', '9780077836337'],
                          ['M0073374598', '9780073374598'],
                          ['M0073379298', '9780073379296'],
                          ['M0073523321', '9780073523323'],
                          ['M0073137944', '9780073137940'],
                          ['M0073513903', '9780073513904'],
                          ['M0073525200', '9780073525204'],
                          ['M0073523984', '9780073523989'],
                          ['M0078025184', '9780078025181'],
                          ['M007802319X', '9780078023194'],
                          ['M0077831888', '9780077831882'],
                          ['M007772061X', '9780077720612'],
                          ['M0077733711', '9780077733711'],
                          ['M0073545465', '9780073545462'],
                          ['M0073401331', '9780073401331'],
                          ['M0073522635', '9780073522630'],
                          ['M0073379301', '9780073379302'],
                          ['M0073524115', '9780073524115'],
                          ['M0077862457', '9780077862459'],
                          ['M007351375X', '9780073513751'],
                          ['M0073514268', '9780073514260'],
                          ['M0078023858', '9780078023859'],
                          ['M007811280X', '9780078112805'],
                          ['M0073519758', '9780073519753'],
                          ['M0073535869', '9780073535869'],
                          ['M0073524689', '9780073524689'],
                          ['M0073386359', '9780073386355'],
                          ['M0073519677', '9780073519678'],
                          ['M0078036801', '9780078036804'],
                          ['M0078035465', '9780078035463'],
                          ['M0078038197', '9780078038198'],
                          ['M0078110394', '9780078110399'],
                          ['M0073384542', '9780073384542'],
                          ['M0073398209', '9780073398204'],
                          ['M0078038316', '9780078038310'],
                          ['M0077861787', '9780077861780'],
                          ['M007802899X', '9780078028991'],
                          ['M0073523925', '9780073523927'],
                          ['M0073386138', '9780073386133'],
                          ['M0078028515', '9780078028519'],
                          ['M0077862031', '9780077862039'],
                          ['M0073513296', '9780073513294'],
                          ['M0078038324', '9780078038327'],
                          ['M0078029066', '9780078029066'],
                          ['M0077733770', '9780077733773'],
                          ['M0077862414', '9780077862411'],
                          ['M0078023181', '9780078023187'],
                          ['9780073373768', '9780073373768'],
                          ['0073373761', '9780073373768'],
                          ['M0073407011', '9780073407012'],
                          ['M0078035031', '9780078035036'],
                        ].find(e);
                      r && t(r[1]);
                    },
                  },
                },
              },
            ],
          },
          {
            id: 'RL4d0203046cea49f380dd5c495ae50737',
            name: 'ALEKS MathReady Pixel',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'div#button-2020-05-05T16-24-26-242-04-00 button',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/mathready' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/mathready/offer' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC986d180f148446b08d5f7f350dc5400e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC33831d27002b45498943714762ea94c0-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd46d2c6e88164c4db61790d1e1e0c2af',
            name: 'School PLP - Hide Section',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/MKTSP-HGA01M0', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source: '$(function(){\n$("#plpProgramComponent").hide();\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL48e462fd90114f7dae3fd9bc35e85d92',
            name: 'Billing',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ecom_billadd' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event16' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLe88e2062ec124b3daa2167931a5941df',
            name: 'Tab Content',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    '.vertical-tabs a, .tab-pane a, .nav-tabs a, #custom-code-tab a',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% Tab on %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Tabbed Content', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL06f2988665884c339d78007927725c10',
            name: 'ALEKS MathReady Offer Pixel',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'div.button button.btn-block',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/mathready/offer.html' }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCb94986cfefa049fd8c56481cb4a28b07-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCeb6fd30e5ad4403dac99dc81460524f5-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC48fe8f9ba5ce416ba05c5485a68ccab9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5472747677374e0585bc5fcabe9b675a',
            name: 'ALEKS Pixel - For Chemistry Button',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button#math-tour-btn',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC6b759ba4021849f1a31b70b8ebed5067-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCcae4580abb3a437fbe23855d0cbcefee-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC2daf80b3d3a44890861f56c47335858b-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL01191994b3b14b289737a74ff104c600',
            name: 'ALEKS Pixel - Contact Rep Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a#aleks-contact-rep',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC05d9621e0c47457fb6b7f76bb092f003-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCe7c7e1cc8ae24d209539d1e3834d3092-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC9b5dc376f0d041d69f29d5c9f6144f37-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2258593e117d4093bd327848a8804fef',
            name: 'ALEKS Pixel - Prepare Button',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a#prepare-students',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCa981eec40e734631b0a34b69d20e3ebc-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC9aa7772434974e57ac755b1b8c2b8921-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC2cc831f9b14e4eaf8f885d84abb8a53b-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL8522b65c9ecf4f85917c5338cc5b1e7e',
            name: 'ALEKS Pixel - Popup Chem Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a#covid-popup-math-chem',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCcc57cb6f7f1f4f3da801f3ecc9ee04f8-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCdb5bc5e69d2c4f3e9f08004b7d7498e4-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9e5a1bbddbe04811b8172026ce6ba55d',
            name: 'Google Adwords Script - LOC',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'button#loc-btn', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC86bff8fb09594221aded265fed0eaa6c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9f5a802f910e40f09a41aa73c3b15959',
            name: 'Hide Images - Press Release Home',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: '/news-media/press-releases/home', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'function adjustBoxes(){\n\t$(".blog-card div.article-image.section").hide();\n\t$(".blog-card div.ideas").css("border-top","1px solid #d9d9d9");\n\tif(window.innerWidth > 768){\n\t\t$(".blog-card div.ideas").css("min-height","275px");\n\t}\n}\nadjustBoxes();\n$("#blogItemContainer").each(function(){\n\tvar target = this;\n\tvar config = { attributes: true, childList: true, subtree: true };\n\tvar observer = new MutationObserver(function(mutations){\n\t\tmutations.forEach(function(mutation){\n\t\t\tif(mutation.type == \'childList\'){\n\t\t\t\tadjustBoxes();\n\t\t\t}\n\t\t})\n\t});\n\tobserver.observe(target, config);\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa132003322fb4c6796a2056386a1c447',
            name: 'MultiNav',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '[data-wa-primary-nav]' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: { source: function () {} },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar17', type: 'value', value: '%this.dataset.waPrimaryNav%' },
                    ],
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.dataset.waPrimaryNav%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.dataset.waPrimaryNav% : %URL Capture%',
                      },
                    ],
                    events: [{ name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'NavBar Click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLa163c71fa4a44cebb90d2559e1cf9ef7',
            name: 'HE PDP - Buy It Cards',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '.cta-add-to-cart', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n =
                          'mhe-icons' == e.target.className ? $(e.target).parent() : $(e.target),
                        r =
                          ';' +
                          document
                            .getElementById('product-description-title')
                            .innerText.replace(/,/g, ' ')
                            .replace(/;/g, '-')
                            .replace(/  /g, ' ')
                            .trim()
                            .substring(0, 98);
                      (t.linkTrackVars = 'prop26,eVar75'),
                        (t.prop26 = t.eVar28 = n.data('isbn')),
                        (location.href.includes('/highered/product') ||
                          -1 < location.href.indexOf('/highered/product')) &&
                          $(this).hasClass('cta-add-to-cart') &&
                          (t.eVar75 = $(this)
                            .parents('div.bottom-button')
                            .siblings('div.buyingOptionHdr')
                            .find('h3')
                            .text()),
                        (t.products = r);
                    },
                  },
                  trackerProperties: { events: [{ name: 'event72' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'HE Buy Now PDP Card', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLe2f01fe5c54840fba1921621c4f0fed3',
            name: 'Request Sample',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'div',
                  elementProperties: [{ name: 'className', value: 'pdp-request-sample-btn' }],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'request sample' },
                      { name: 'prop23', type: 'value', value: 'click|request sample' },
                    ],
                    events: [{ name: 'event4' }, { name: 'event26' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL7acafe0d906d4b3c9dd5953df3ed7c49',
            name: 'Outbound Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { anchorDelay: 100, elementSelector: 'a', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = [
                        'shop',
                        'www',
                        'demo',
                        'qalv',
                        'qastg',
                        'shopqalv',
                        'shopdemo',
                        'pqa',
                      ],
                      t = this.toString()
                        .replace(/(^\w+:|^)\/\//, '')
                        .split('.'),
                      n = t[0];
                    return (
                      !(
                        -1 < this.className.search('/wa-facebook|wa-twitter|wa-email/i') ||
                        this.toString().startsWith('#') ||
                        this.toString().startsWith('javascript:') ||
                        !this.hasAttribute('href')
                      ) &&
                      (!e.includes(n) || 'mheducation' != t[1]) &&
                      (!document.domain.includes('10.') || void 0)
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
                    source: function () {
                      console.log('in outbound');
                    },
                  },
                  trackerProperties: {
                    eVars: [{ name: 'eVar17', type: 'value', value: 'Outbound:%this.href%' }],
                    props: [
                      { name: 'prop23', type: 'value', value: 'click|Outbound:%this.href%' },
                      { name: 'prop15', type: 'value', value: 'Outbound:%this.href%' },
                    ],
                    events: [{ name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'e' },
              },
            ],
          },
          {
            id: 'RL7b9a5bc41da34721a3af815b7459384e',
            name: 'HE PDP Exit Modal CTA',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '#hePdpModal .modal-btn',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% - Exit Modal CTA on %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'HE PDP Exit Modal Click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL7bb3f7883bcd42a2ae7a7e102a629335',
            name: 'Target_HEproductPages',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/product', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [],
          },
          {
            id: 'RL6b5bd0ffb56141a0a61ce74f491eca1a',
            name: 'Footer View - Idea Pages',
            events: [
              {
                modulePath: 'core/src/lib/events/entersViewport.js',
                settings: {
                  elementSelector: 'div',
                  elementProperties: [
                    { name: 'className', value: 'wa-endsection', valueIsRegex: !0 },
                  ],
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/ideas/.*', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar17', type: 'alias', value: 'prop15' }],
                    props: [
                      { name: 'prop15', type: 'value', value: 'Article Footer View' },
                      { name: 'prop23', type: 'value', value: 'article|viewed end of article' },
                    ],
                    events: [{ name: 'event23' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Article Footer View', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL36aaacecc9744fd399bcb039e54340b8',
            name: 'Google Adwords - ALEKS MathReady',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'div[id*="button-"] button',
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
                    { value: '/highered/aleks/mathready.html' },
                    { value: '/highered/aleks/mathready' },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCf58e266d62924991a54e2f76cfbb84c0-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6b8d1526d1c5448aac96193c8ea45d34',
            name: 'Global Search DDL',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    '#mobile-search ul.dropdown-menu li a , #desktop-search ul.dropdown-menu li a',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'search:%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | search:%this.@text%:%URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: {
                  type: 'link',
                  linkName: 'Global Search Drop Down List Option',
                  linkType: 'o',
                },
              },
            ],
          },
          {
            id: 'RLd8077f0aafe647dca58703db4143e885',
            name: 'ALEKS Math Ready - Pixel - All CTAs',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'div.button button, #get-offer-btn',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/mathready' }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCf99f872dde1c4442b8b7ec9a706ff0af-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCd414049eae40429983583dbc38792d82-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7a1d7ecd33ba455a85c7244c4b42681e',
            name: 'Adroll Script - HIghered',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      var n;
                      (adroll_adv_id = 'RNT7ZXXVBJHRJKMATC2IGD'),
                        (adroll_pix_id = 'MRXZS626HVCHRNIAKUYCRF'),
                        (n = function () {
                          if (
                            !document.readyState ||
                            /loaded|complete/.test(document.readyState)
                          ) {
                            if (!window.__adroll_loaded)
                              return (__adroll_loaded = !0), void setTimeout(n, 50);
                            var e = document.createElement('script'),
                              t =
                                'https:' == document.location.protocol
                                  ? 'https://s.adroll.com'
                                  : 'http://a.adroll.com';
                            e.setAttribute('async', 'true'),
                              (e.type = 'text/javascript'),
                              (e.src = t + '/j/roundtrip.js'),
                              (
                                (document.getElementsByTagName('head') || [null])[0] ||
                                document.getElementsByTagName('script')[0].parentNode
                              ).appendChild(e);
                          } else setTimeout(n, 10);
                        }),
                        window.addEventListener
                          ? window.addEventListener('load', n, !1)
                          : window.attachEvent('onload', n);
                    },
                  },
                },
              },
            ],
          },
          {
            id: 'RLfd5bad6893524195837f791907510b9f',
            name: 'Login',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'login' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event12' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLfdc4e51be1324285a2b4df378ce5c44d',
            name: 'Accordion Tab Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '.panel-group a', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['mheducation.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% - Accordion Tab on %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Accordion Tab Link', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL7906719816704652b05674e925f67425',
            name: 'School Chatbot',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12/explore/states/', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<style type=\"text/css\">\n\t.embeddedServiceHelpButton .helpButton .uiButton {\n\t\tbackground-color: #E21A23;\n\t\tfont-family: 'ProximaNova','ProximaNova','Helvetica Neue','Arial',sans-serif;\n        border-radius: 0px;\n        bottom: 25px;\n        right: -12px;\n        font-size: 18px;\n\t}\n\t.embeddedServiceHelpButton .helpButton .uiButton:focus {\n\t\toutline: 1px solid #E21A23;\n\t}\n    [Embeddedservice-chatHeader_chatHeader]{padding-left:1px;}\n  .embeddedServiceSidebar{z-index: 9999 !important;}\n</style>\n\n<script type=\"text/javascript\" src=\"https://service.force.com/embeddedservice/5.0/esw.min.js\"></script>\n<script type=\"text/javascript\">\n\nif(document.referrer.indexOf(\"https://mhedu.force.com\") == -1 && document.referrer.indexOf(\"https://uat-mhedu.cs28.force.com\") == -1){\n\tif(document.domain !== \"www.mheducation.com\"){\n\t\tvar initESW = function(gslbBaseURL) {\n\t\t\tembedded_svc.settings.displayHelpButton = true; //Or false\n\t\t\tembedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'\n\t\t\tembedded_svc.settings.defaultMinimizedText = 'HAVE A QUESTION?'; //(Defaults to Chat with an Expert)\n            embedded_svc.settings.widgetHeight = \"600px\";      \n            embedded_svc.settings.widgetWidth = \"420px\";\n\t\t\tembedded_svc.settings.extraPrechatFormDetails = [{\n\t\t\t\t\t\t\"label\":\"First Name\",\n\t\t\t\t\t\t\"name\":\"FirstName\",\n\t\t\t\t\t\t\"value\":\"Me\",\n\t\t\t\t\t\t\"displayToAgent\": false\n\t\t\t\t\t }];\n\t\t\t//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)\n\t\t\t//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)\n\n\t\t\t//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)\n\t\t\t//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)\n\n\t\t\t// Settings for Chat\n\t\t\t//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {\n\t\t\t\t// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.\n\t\t\t\t// Returns a valid button ID.\n\t\t\t//};\n\t\t\t//embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields\n\t\t\t//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId\n\t\t\t//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)\n\n\t\t\tembedded_svc.settings.enabledFeatures = ['LiveAgent'];\n\t\t\tembedded_svc.settings.entryFeature = 'LiveAgent';\n\n\t\t\tembedded_svc.init(\n\t\t\t\t'https://mh--UAT.my.salesforce.com',\n\t\t\t\t'https://uat-mheducation.cs28.force.com/ConnectChat',\n\t\t\t\tgslbBaseURL,\n\t\t\t\t'00D230000000m6E',\n\t\t\t\t'DTS_Mheducation_Guest',\n\t\t\t\t{\n\t\t\t\t\tbaseLiveAgentContentURL: 'https://c.la1-c1cs-ph2.salesforceliveagent.com/content',\n\t\t\t\t\tdeploymentId: '5721A000000GnVg',\n\t\t\t\t\tbuttonId: '573230000004CX6',\n\t\t\t\t\tbaseLiveAgentURL: 'https://d.la1-c1cs-ph2.salesforceliveagent.com/chat',\n\t\t\t\t\teswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I230000008ONZEA2_1738ef7b897',\n\t\t\t\t\tisOfflineSupportEnabled: false\n\t\t\t\t}\n\t\t\t);\n\t\t};\n\n\t\tif (!window.embedded_svc) {\n\t\t\tvar s = document.createElement('script');\n\t\t\ts.setAttribute('src', 'https://mh--UAT.my.salesforce.com/embeddedservice/5.0/esw.min.js');\n\t\t\ts.onload = function() {\n\t\t\t\tinitESW(null);\n\t\t\t};\n\t\t\tdocument.body.appendChild(s);\n\t\t} else {\n\t\t\tinitESW('https://service.force.com');\n\t\t}\n\t} else if (document.domain == \"www.mheducation.com\"){\n\t\tvar initESW = function(gslbBaseURL) {\n\t\t\tembedded_svc.settings.displayHelpButton = true; //Or false\n\t\t\tembedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'\n\t\t\tembedded_svc.settings.defaultMinimizedText = 'HAVE A QUESTION?'; //(Defaults to Chat with an Expert)\n            embedded_svc.settings.widgetHeight = \"600px\";      \n            embedded_svc.settings.widgetWidth = \"420px\";\n\t\t\tembedded_svc.settings.extraPrechatFormDetails = [{\n\t\t\t\t\t\t\"label\":\"First Name\",\n\t\t\t\t\t\t\"name\":\"FirstName\",\n\t\t\t\t\t\t\"value\":\"Me\",\n\t\t\t\t\t\t\"displayToAgent\": false\n\t\t\t\t\t }];\n\t\t\t//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)\n\t\t\t//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)\n\n\t\t\t//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)\n\t\t\t//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)\n\n\t\t\t// Settings for Chat\n\t\t\t//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {\n\t\t\t\t// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.\n\t\t\t\t// Returns a valid button ID.\n\t\t\t//};\n\t\t\t//embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields\n\t\t\t//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId\n\t\t\t//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)\n\n\t\t\tembedded_svc.settings.enabledFeatures = ['LiveAgent'];\n\t\t\tembedded_svc.settings.entryFeature = 'LiveAgent';\n\n\t\t\tembedded_svc.init(\n\t\t\t\t'https://mh.my.salesforce.com',\n\t\t\t\t'https://mheducation.secure.force.com/ConnectChat',\n\t\t\t\tgslbBaseURL,\n\t\t\t\t'00D80000000LRll',\n\t\t\t\t'DTS_Mheducation_Guest',\n\t\t\t\t{\n\t\t\t\t\tbaseLiveAgentContentURL: 'https://c.la2-c1-iad.salesforceliveagent.com/content',\n\t\t\t\t\tdeploymentId: '5721A000000GnVg',\n\t\t\t\t\tbuttonId: '5730y000000TP1y',\n\t\t\t\t\tbaseLiveAgentURL: 'https://d.la2-c1-iad.salesforceliveagent.com/chat',\n\t\t\t\t\teswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I0y0000004CBEEA2_173d16ca69a',\n\t\t\t\t\tisOfflineSupportEnabled: false\n\t\t\t\t}\n\t\t\t);\n\t\t};\n\n\t\tif (!window.embedded_svc) {\n\t\t\tvar s = document.createElement('script');\n\t\t\ts.setAttribute('src', 'https://mh.my.salesforce.com/embeddedservice/5.0/esw.min.js');\n\t\t\ts.onload = function() {\n\t\t\t\tinitESW(null);\n\t\t\t};\n\t\t\tdocument.body.appendChild(s);\n\t\t} else {\n\t\t\tinitESW('https://service.force.com');\n\t\t}\n\t}\n}\n</script>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLa4b3b075375c43a2bf2f8d570f646ed7',
            name: 'HigherEd Search Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '(search.html)(.*)(&bu=he)', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      t.prop23 = 'viewed | highered:search';
                    },
                  },
                  trackerProperties: { pageName: 'HigherEd Search' },
                },
              },
            ],
          },
          {
            id: 'RLa8c0c675cfbf495eb32fbb4a625491cf',
            name: 'ALEKS Pixel - Popup Others Link',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a#covid-popup-others',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCe2509c417aac413bbc8a3a032f1bece5-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC0de12dc8f1c04efca1c97bed6c1de37d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe404118903b04a21a464b88e4ef6fd8d',
            name: 'SEG: Sample Online',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'div#onlineSamples', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12/program', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop23', type: 'value', value: 'click | SEG: Sample Online' },
                    ],
                    events: [{ name: 'event45' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Sample Online', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLe53c9a44673c4bc18f73db42af78d0bc',
            name: 'Footer Links',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: 'div, footer, footernav',
                  elementProperties: [{ name: 'className', value: 'wa-footer', valueIsRegex: !0 }],
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
                  source: function (e) {
                    return (
                      'img-responsive' !== e.target.className &&
                      'social-heading' !== e.target.className &&
                      'social media directory' !== e.target.textContent &&
                      'text-center' !== e.target.className &&
                      'footer-copy-right' !== e.target.className &&
                      ('IMG' == e.target.tagName ||
                        'A' == e.target.tagName ||
                        'P' == e.target.tagName ||
                        void 0)
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
                      var n;
                      (t.linkTrackVars = 'prop23,prop15,eVar17'),
                        'IMG' == e.target.tagName
                          ? ((n = e.target.alt),
                            (t.eVar17 = t.prop15 = 'Footer:' + n),
                            (t.prop23 = 'click|' + t.prop15))
                          : ('A' != e.target.tagName && 'P' != e.target.tagName) ||
                            ((t.eVar17 = t.prop15 = 'Footer:' + e.target.textContent),
                            (t.prop23 = 'click|' + t.prop15));
                    },
                  },
                  trackerProperties: { events: [{ name: 'event4' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc79ea1f3c6c441bfbd922f1a9eb8c55c',
            name: 'eBookshelf Links',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '#thankyouPage .last_prod:last-of-type a,  .footerText a',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      var n;
                      (t.linkTrackVars = 'prop23,prop15,eVar17'),
                        'IMG' == e.target.tagName
                          ? ((n = e.target.alt),
                            (t.eVar17 = t.prop15 = 'Footer:' + n),
                            (t.prop23 = 'click|' + t.prop15))
                          : ('A' != e.target.tagName && 'P' != e.target.tagName) ||
                            ((t.eVar17 = t.prop15 = 'Footer:' + e.target.textContent),
                            (t.prop23 = 'click|' + t.prop15));
                    },
                  },
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text%:%URL Capture%',
                      },
                    ],
                    events: [{ name: 'event4' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'eBookshelf Links', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL2dbaf28022954bffb3f9897f25acbf39',
            name: 'Support Button',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      '/' == window.location.pathname ||
                      -1 < window.location.pathname.indexOf('/highered/home-guest.html') ||
                      -1 < window.location.pathname.indexOf('/home.html')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function () {
                      $.widget('mhe.animateButton', {
                        options: {
                          offset: 0,
                          buttonClass: '',
                          buttonId: '',
                          buttonImage64: '',
                          buttonImageAltText: '',
                          mobileWidth: 991,
                          buttonUrl: '',
                        },
                        _create: function () {
                          var e = this;
                          (this.button = $('<a>')
                            .attr('href', this.option('buttonUrl'))
                            .attr('class', this.option('buttonClass'))
                            .attr('id', this.option('buttonId'))
                            .css('z-index', '5001')
                            .append('<img>')
                            .appendTo('body')),
                            this.button
                              .find('img')
                              .attr({
                                src: this.option('buttonImage64'),
                                alt: this.option('buttonImageAltText'),
                              }),
                            this.button.find('img').on('load', function () {
                              e._on(window, {
                                resize: function () {
                                  e.handleButtonAnimation();
                                },
                              }),
                                e._on(e.document, { scroll: 'handleButtonAnimation' });
                            }),
                            e.handleButtonAnimation();
                        },
                        _setOption: function (e, t) {
                          this.option[e] = t;
                        },
                        handleButtonAnimation: function () {
                          if ($(this.element).isInsideViewport()) {
                            var e =
                              this.element.offset().top -
                              this.button.height() +
                              this.option('offset');
                            this.button.css({
                              position: 'absolute',
                              right: 0,
                              top: e,
                              bottom: '',
                            });
                          } else
                            this.button.css({
                              position: 'fixed',
                              right: 0,
                              bottom: '25px',
                              top: '',
                            });
                        },
                        _destroy: function () {
                          this.button.remove();
                        },
                      }),
                        ($.fn.isInsideViewport = function () {
                          var e = $(this).offset().top,
                            t = e + $(this).outerHeight(),
                            n = $(window).scrollTop(),
                            r = n + $(window).height();
                          return n < t && e < r;
                        });
                      var e = {
                        buttonClass: 'support-animated-button',
                        buttonId: 'support-button',
                        buttonImage64:
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAwCAYAAADjCA+IAAAAAXNSR0IArs4c6QAABn5JREFUeAHtWglsVFUUPX/2LtPpQmmhGIUWjCCyCcGwR0wVg7ilQYk1oARkMajQECjBVhFFIhAERTQlKgqhIQpRIrKJhriGiOACqMjS0r2ddphOp/O/777pTGdKW6D/1fzEd5M////37r/vvnPeve++ZJTzvTM1SDEcAibDeSQd4ghIYgy6ECQxkhiDImBQt2TESGIMioBB3ZIRI4kxKAIGdUtGjCTGoAgY1C0ZMZIYgyJgULdkxEhiDIqAQd2SESOJMSgCBnVLRsz/gRhTz1TAZjPoVFvdUmJjYUpObm0w4JNFr09KghOuvOcRl/MwTHFx0AIBNP9zAZ4du1D/9rsAe09a+wriH8uB94sDqJw1N2rIWPZdyro1CFTXoGTwSN6X8ftxmJzOKL1AZRV83/+I2pUvI1BSekN6XFlR4Jz7FOKm58DS7xYoJhOaSy+j8ctDqF21BlpDQ3i8kL/hBvagehvh/+M03Ovf5N9QX8apn2BKdEWqRT3XF32A2vyCqLbrfdGdylI2r4dz5hNBUjQNitkMK5t44rIlSF67+nr9uKaeuUcKYqdkI21vMWjFdyTt6tltSC3ejsT8pbBm9eOk0PeWXumIz30c6Yc+h6XvzR2Z5O2mGAfsQ+9A6rZ34Jg4vlNdEZ26iLFkZSJm0gTuR/XSFbiYOQil4yajbv0mqGwFujdt0eVjdV4+SkaMQcmo8ajJL+S2zOlpPDojDV9Lz7VoARyjR/Fornt9HUpGjsPFgcNRtfAFqHVuWDJ6s6i+ehF59x8Mjs98qJgxi2WC83xY58Jg1JdNfQSlE7L55T/7J++r31oUbqPo6qroIsZMe0qLNJ9jTvua0PzXObhbJt/c4mxI50bvak0NApfLELhUgoai99H0y0luwtI/K8pUZ3qKKwHOZ2ZzfTdbMHRRKtQYIVd2f4rKOQt4HxHnmBQdCVpjY3B85kPjkaNo2L6T61r7Z/I7zZXmSJfG5k5CKTfUprLnroouYpqO/8xyr5ePnfpREXru2cVBMPfuBc1d31Wf2v3OfFMfWLKChKgVFe3qUGNbPdvA26BYrVy//r1t/B754/v6GN87qM3GUlVHojgccIy9i3erbD/sbtG1+WuMlMrc2Uh+41VYGHD2EcP45VqeB993P6B6/nN8xXV1EokF+XAtWQSYzLBk9oXCNnDahD2790SZ7EzPMWEs16XigqKkPfH/fQ7WWwewMfpFdVMEpR/ex9vMLN1RcUPi2VHM7935o4sYcsx37FuUjp4I27AhiJ06BTFsgyaSKDWkbNmI8mk5rKRRg3OwBVdu5ISUUHmttehEdFpY5EWK/8xZ1Cx7EYHzFyKb0ZkepUESXj2xIoDSbVsxp6XxplC1F+qnyjCyOiRyqSqkFNjdopsYmrBaWwdKa3TVFq6Gi1VkCfPnwDZ8KBS2ykLg2EfdCcVhh9boC8/LMW4Mfw5cCpbA4Q72ULO8AN7DX/EmtboaWn1rSXu9ek2nfuOqVB7HPfTAVavdMqA/bIMHcZ2mk79GmoX34BHUrChE/PRHkfDsPIAtHu+BQ1E63fWia48hUtIOfIak1YUw98kI+sgACG2EdKd05zt+gvdRKnAtXQxTWk+Ard7YaffDcfck3kektpVAeTkCrBKiqyNS6JvO9NSycjS0pJ7Elct5RLOcyIey3j4IPbZugmKx8H3Gu29/lAuax8PHdm/YzFOyOSUFrsUstf4HoitiYu69B1S+0lmArkB5BRS7HSZWCZF4PmZVDEtjvqPf8JVPpbVz9kzEz8qFduVKOE2orFCoW7ex26ZbW7AK9uFDYGXRQUSoDHDN54O55fRPEV+1KA/w+9v1gaqzurUb2LmMHZSfnIGGD3eg+fSZdnVFNeqKGNoEK6bn8hM5nVuofCZS1HoGNCtLa196Lexn1dPz4N74Fk97dAil3K01NfF0UXbfg1ArKsO6oh+oQrycPY2PT6d9ilwihQjxfLIXpROz4T8RLMU7Gtuzsxi0x1F0JRWu6EhNWLsi8t/+lM4IbJVFTmdiSkkO7j0XL7UWBp19ILjPlJQEhZ3k2272gofRZU4oMbo8kR9HIaArlUVZki9CEZDECIVTnDFJjDgshVqSxAiFU5wxSYw4LIVaksQIhVOcMUmMOCyFWpLECIVTnDFJjDgshVqSxAiFU5wxSYw4LIVaksQIhVOcMUmMOCyFWpLECIVTnDFJjDgshVqSxAiFU5yxfwFt0X8dzP++bAAAAABJRU5ErkJggg==',
                        buttonImageAltText: 'Support',
                        buttonUrl: '/support.html',
                      };
                      -1 < window.location.href.indexOf('highered')
                        ? (e.buttonUrl = '/highered/contact.html')
                        : (e.buttonUrl = '/support.html'),
                        $('footer').animateButton(e);
                    },
                  },
                  trackerProperties: {},
                },
              },
            ],
          },
          {
            id: 'RLca4d232e75ba4d3aa8a5196a120ae044',
            name: 'ALEKS Pixel - Popup Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'img.product-cta',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC1aa51d7a6dbf40188794368d927042aa-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC6518626734244833a2462ef5a0b6f079-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL535af7ecb9d241cd985cc56caacbb0e8',
            name: 'ALEKS Pixel - For Math Button',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button#math-tour-btn',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCa4bd228994d94e99b3d33f9e8c65305a-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCcb77539757264f8983f04ffae9d94a5c-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCbe184b545a214b19b49269b7499e2aa0-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7eb50ae52ba74380aea33867c182cf54',
            name: 'SEG PDP What Comes in Box',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.what_comes_in_the_box',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text%:%URL Capture%',
                      },
                    ],
                    events: [{ name: 'event70' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'SEG PDP What Comes in Box', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL76fd3c63d98e41679b1c5c5f305851d8',
            name: 'School Chatbot Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button.helpButtonEnabled',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'prek-12/explore/states/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: 'Have a Question' },
                      { name: 'prop23', type: 'value', value: 'Click | %Unitas BU% : Live Chat' },
                    ],
                    events: [{ name: 'event66' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'School Chatbot', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RL4cdc0a8bea0e4a8d9a55bef049854d6f',
            name: 'ALEKS Pixel - Equity Button',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button#equity-btn',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC6a6d26c0776f4a71ba311635a834a29f-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCa51bf4e9ed4a4942908cbd6113d20b5e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC0d1575e894724002bc49a90fad719eb3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL36868c5fbce84aa3936f69251137837b',
            name: 'ALEKS Pixel - Page Load',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks.html' }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source: "<script>\nfbq('track', 'ALEKS - Page View');\n</script>",
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=66988&conversionId=2937308&fmt=gif" /> ',
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "gtag('event', 'conversion', {'send_to': 'AW-950445459/0jgJCNuNzt8BEJPLmsUD'});",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL39520757a0c44eb897aa73368e5c2bd9',
            name: 'ALEKS Pixel - Register Button',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'button#register-btn',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/highered/aleks.html', valueIsRegex: !1 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/highered/aleks/' }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC2d5c3160188d409b8b2cc976be4298f8-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RCf04a24d0282840b2aa98f2a389787531-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/892eef3a6362/43c7e90a793a/133ab434a44c/RC3c8676ced78349848698a056babf5a39-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL1756f625632c415f8d99b57d2f3c7990',
            name: 'Prek-12 Search Redirect',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'adobe_mc_sdid', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar2', type: 'value', value: '%Redirect Search Term%' },
                      { name: 'eVar29', type: 'value', value: 'search' },
                    ],
                    props: [{ name: 'prop2', type: 'alias', value: 'eVar2' }],
                    events: [{ name: 'event1' }, { name: 'event2' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Prek-12 Redirect Search', linkType: 'o' },
              },
              { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
            ],
          },
          {
            id: 'RLd730c5a4947a41818fb4870606c91c91',
            name: 'HE Uber Flip Body Clicks',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  anchorDelay: 100,
                  elementSelector: '.item-link, .cta-button',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/highered/ideas', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [
                      { name: 'prop15', type: 'value', value: '%this.@text%' },
                      {
                        name: 'prop23',
                        type: 'value',
                        value: 'click | %this.@text% - Uber body CTA on %URL Capture%',
                      },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Uber Flip body Clicks', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL837da33eef204ce4955b63f3aeb3f629',
            name: 'Access Code Error',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'access_code_error' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar47', type: 'value', value: '%dl access_code_error%' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL9df3efb72e8641be951aaf011e44699a',
            name: 'Music PDP - Docusign',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/prek-12/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var prodISBN = $("span[itemprop=\'isbn\']").text();\nvar docusignISBN = {\n"9781264182695":"https://www.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=e4b2824f-2c26-4976-b830-320151b5dcf7&env=na1&v=2",\n"9781264182701":"https://www.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=aa166086-b6d5-429d-b25a-647b05da7218&env=na1&v=2",\n"9781264182718":"https://www.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=68f5c791-51b5-4cf4-b25e-c59dc834af1a&env=na1&v=2",\n"9781264182725":"https://www.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=b2f3b937-3372-4c01-ba8e-3c5f9b5226fe&env=na1&v=2"\n};\n\nfor(var x in docusignISBN){\n\tif(prodISBN == x){\n\t\t$(\'div.pricecontainer ul li.total\').remove();\n\t\t$(\'div.pricecontainer ul li.qty\').remove();\n        $("#horizontalPDP").remove();\n\t\t$(\'div.pricing\').append(\'<p class="text-brand-red offset-15">You must request and receive a valid Performance License in order to purchase this product.</p><a href="https://s3.amazonaws.com/ecommerce-prod.mheducation.com/unitas/school/discipline/music/broadway-junior-performance-license.pdf" target="_blank" title="Opens in a new tab" class="text-brand-red"><p><u>What is a Broadway Junior Performance License?</u></p></a>\');\n\t\t$(".wa-add-to-cart").empty();\n\t\t$(".wa-add-to-cart").append("<a href=\'"+docusignISBN[x]+"\' target=\'_blank\'><button role=\'button\' class=\'btn btn-primary\'>Request</button></a>");\n\t}\n}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLda63389aca3140cb8d9656f768a12d5a',
            name: 'HE PDP - eBook Lifetime disclaimer',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/highered/product/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '$(".ebook-purchase-icon").parents(".pdp-card").addClass("launch-ebook-card");\n\nif($(".launch-ebook-card .bottom-button p.h4").text().indexOf("Lifetime") > -1){\n  $(\'<p class="text-center text-xsmall">* By purchasing <strong>lifetime</strong> access to this McGraw Hill eBook title, you have access to the title for as long as it is available through the McGraw Hill Bookshelf website.</p>\').insertAfter(\'.productbuyingoptions\');\n}',
                  language: 'javascript',
                },
              },
            ],
          },
        ],
      });
    var $___var_60b1759deff15e8f = (function () {
      const $___old_8dd490f4cdae532e = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_8dd490f4cdae532e)
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
              p(e, this);
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
                if ('function' == typeof n) return void p(a(n, t), e);
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
          function p (e, t) {
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
          function h (e, t) {
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
              g = 'debug',
              v = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(g);
                  },
                  r = function (e) {
                    t.setItem(g, e);
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
              k = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              C = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              S = '\uD83D\uDE80',
              M =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : S,
              w = !1,
              P = function (e) {
                if (w && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(M),
                    e !== C.DEBUG || window.console[e] || (e = C.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              I = P.bind(null, C.LOG),
              x = P.bind(null, C.INFO),
              E = P.bind(null, C.DEBUG),
              j = P.bind(null, C.WARN),
              A = P.bind(null, C.ERROR),
              _ = {
                log: I,
                info: x,
                debug: E,
                warn: j,
                error: A,
                get outputEnabled () {
                  return w;
                },
                set outputEnabled (e) {
                  w = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: I.bind(null, t),
                    info: x.bind(null, t),
                    debug: E.bind(null, t),
                    warn: j.bind(null, t),
                    error: A.bind(null, t),
                  };
                },
              },
              T = e(function (r) {
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
              O = { get: T.get, set: T.set, remove: T.remove },
              D = window,
              R = 'com.adobe.reactor.',
              V = function (r, e) {
                var a = R + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_086c783ad2a479e4 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_086c783ad2a479e4)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return D[r].getItem(a + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_086c783ad2a479e4)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_086c783ad2a479e4
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_b3e08a465fcde68a = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_b3e08a465fcde68a)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return D[r].setItem(a + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_b3e08a465fcde68a)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_b3e08a465fcde68a
                        ));
                    }
                  },
                };
              },
              N = '_sdsat_',
              L = 'dataElements.',
              F = 'dataElementCookiesMigrated',
              B = V('localStorage'),
              U = V('sessionStorage', L),
              H = V('localStorage', L),
              q = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              G = {},
              z = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              Q = function (e, t, n) {
                var r;
                switch (t) {
                  case q.PAGEVIEW:
                    return void (G[e] = n);
                  case q.SESSION:
                    return void ((r = z(n)) && U.setItem(e, r));
                  case q.VISITOR:
                    return void ((r = z(n)) && H.setItem(e, r));
                }
              },
              K = function (e, t) {
                var n = O.get(N + e);
                n !== undefined && Q(e, t, n);
              },
              W = {
                setValue: Q,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case q.PAGEVIEW:
                      return G.hasOwnProperty(e) ? G[e] : null;
                    case q.SESSION:
                      return null === (n = U.getItem(e)) ? n : JSON.parse(n);
                    case q.VISITOR:
                      return null === (n = H.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  B.getItem(F) ||
                    (Object.keys(t).forEach(function (e) {
                      K(e, t[e].storageDuration);
                    }),
                    B.setItem(F, !0));
                },
              },
              Y = function (e, t, n, r) {
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
              J = function (s, c, u, l) {
                return function (e, t) {
                  var n = c(e);
                  if (!n) return l ? '' : undefined;
                  var r,
                    a = n.storageDuration;
                  try {
                    r = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void _.error(Y(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(u(n.settings, t), t);
                    } catch (o) {
                      return void _.error(Y(n, e, o.message, o.stack));
                    }
                    return (
                      a && (null != i ? W.setValue(e, a, i) : (i = W.getValue(e, a))),
                      null == i && null != n.defaultValue && (i = n.defaultValue),
                      'string' == typeof i &&
                        (n.cleanText && (i = k(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  _.error(Y(n, e, 'Module did not export a function.'));
                };
              },
              X = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return k(e.textContent);
                },
              },
              Z = function (e, t, n) {
                for (var r, a = e, i = 0, o = t.length; i < o; i++) {
                  if (null == a) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var c = s.slice(1);
                    a = X[c](a);
                  } else if (a.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var u = r[1];
                    a = a.getAttribute(u);
                  } else a = a[s];
                }
                return a;
              },
              $ = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (o(e)) n = s(e, t);
                  else {
                    var r = e.split('.'),
                      a = r.shift();
                    'this' === a
                      ? t && (n = Z(t.element, r, !0))
                      : 'event' === a
                      ? t && (n = Z(t, r))
                      : 'target' === a
                      ? t && (n = Z(t.target, r))
                      : (n = Z(i[a], r));
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
                        _.error(t);
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
                      (_.warn(
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
                      ? (_.error('Data element circular reference detected: ' + u.join(' -> ')), e)
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
              (i._unhandledRejectionFn = function wt (e) {
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
              pe = function (r, a, e) {
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
              fe = function (e) {
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
                        if (fe(a))
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
              he = function (n, r) {
                return function (e, t) {
                  n(e, t) && r(e, t);
                };
              },
              ge = function (n) {
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
              be = function (s, c, u, l, d, p) {
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
                    p.error(l(t, r, o));
                  }
                };
              },
              ye = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              ke = function (a, i, o, s) {
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
              Se = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              Me = function (i, o, s) {
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
              we = function (n, r, a, i) {
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
              Ie = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              xe = [],
              Ee = !1,
              je = function (e) {
                Ee ? e() : xe.push(e);
              },
              Ae = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(je, e);
                }),
                  (Ee = !0),
                  xe.forEach(function (e) {
                    e();
                  }),
                  (xe = []);
              },
              _e = function (e) {
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
              Te = Object.getOwnPropertySymbols,
              Oe = Object.prototype.hasOwnProperty,
              De = Object.prototype.propertyIsEnumerable,
              Re = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, r = f(e), a = 1; a < arguments.length; a++) {
                      for (var i in (t = Object(arguments[a]))) Oe.call(t, i) && (r[i] = t[i]);
                      if (Te) {
                        n = Te(t);
                        for (var o = 0; o < n.length; o++) De.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                      }
                    }
                    return r;
                  },
              Ve = function (e, t) {
                return (
                  Re((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          _.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Ne = function (c, u) {
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
              Le = function (e, t) {
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
              Be = '.js',
              Ue = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              He = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              qe = function (e, t) {
                He(t, Be) || (t += Be);
                var n = t.split('/'),
                  r = Ue(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              Ge = document,
              ze = function (n, r) {
                return new ce(function (e, t) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              Qe = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = ze(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              Ke = function (e, t, n, r) {
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
                    p,
                    f = e[c].replace(i, '%20'),
                    m = f.indexOf(n);
                  0 <= m ? ((u = f.substr(0, m)), (l = f.substr(m + 1))) : ((u = f), (l = '')),
                    (d = decodeURIComponent(u)),
                    (p = decodeURIComponent(l)),
                    h(a, d)
                      ? Array.isArray(a[d])
                        ? a[d].push(p)
                        : (a[d] = [a[d], p])
                      : (a[d] = p);
                }
                return a;
              },
              We = function (e) {
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
              Ye = function (n, r, a, e) {
                return (
                  (r = r || '&'),
                  (a = a || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(We(e)) + a;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(We(e));
                                })
                                .join(r)
                            : t + encodeURIComponent(We(n[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(We(e)) + a + encodeURIComponent(We(n))
                    : ''
                );
              },
              Je = e(function (e, t) {
                (t.decode = t.parse = Ke), (t.encode = t.stringify = Ye);
              }),
              Xe = (Je.decode, Je.parse, Je.encode, Je.stringify, '@adobe/reactor-'),
              Ze = {
                cookie: O,
                document: Ge,
                'load-script': Qe,
                'object-assign': Re,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Je.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Je.stringify(e);
                  },
                },
                window: D,
              },
              $e = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Xe)) {
                    var t = e.substr(Xe.length),
                      n = Ze[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, o, s, c, u) {
                var l = e.extensions,
                  d = e.buildInfo,
                  p = e.property.settings;
                if (l) {
                  var f = Ne(l, o);
                  Object.keys(l).forEach(function (r) {
                    var a = l[r],
                      e = Le(c, a.settings);
                    if (a.modules) {
                      var t = _.createPrefixedLogger(a.displayName),
                        n = Fe(a.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: u,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: f,
                          logger: t,
                          propertySettings: p,
                          replaceTokens: c,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(a.modules).forEach(function (n) {
                        var e = a.modules[n],
                          t = $e(function (e) {
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
                var i = _.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  _.log('"' + e + '" does not match any direct call identifiers.');
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
                      (_.warn(
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
                    _.warn(i), O.set(e, t, a);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      _.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      O.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    _.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      O.remove(e);
                  }),
                  (e.cookie = O),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (_.warn(
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
              W.migrateCookieData(ot);
              var st,
                ct = function (e) {
                  return ot[e];
                },
                ut = ne(),
                lt = J(
                  ut,
                  ct,
                  function () {
                    return st.apply(null, arguments);
                  },
                  at
                ),
                dt = {},
                pt = oe(dt),
                ft = ee(dt, ct),
                mt = $(dt, ct, lt);
              st = ie(ft, mt, at);
              var ht = v(V('localStorage'), _);
              tt(nt, rt, ht.setDebugEnabled, mt, pt), et(rt, ut, ht, st, lt);
              var gt = ae(nt),
                vt = y(ut, st),
                bt = ge(ut),
                yt = Ce(bt, _, gt),
                kt = ke(Pe, bt, _, gt),
                Ct = ye(Pe, bt, _, gt),
                St = Se(_, gt),
                Mt = be(
                  we(
                    it,
                    he(me(vt, Ie, yt, kt), Me(vt, Ct, St)),
                    pe(le(vt, _e, Ie, kt, yt), ue(vt, _e, Ct), St),
                    gt
                  ),
                  vt,
                  Ve,
                  Pe,
                  ve(ut),
                  _
                );
              Ae(m, rt.rules || [], Mt);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_8dd490f4cdae532e)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_8dd490f4cdae532e
          ));
      }
    })();
    _satellite = $___var_60b1759deff15e8f;
  })();
}
