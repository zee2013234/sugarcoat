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
          buildDate: '2020-11-03T15:10:59Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'Visitor - Industry': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.industry' },
          },
          'Order - Payment Method': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.order.paymentMethod' },
          },
          'Event - Search Results Click Position': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.search.resultsPosition' },
          },
          'Search - Criteria': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = '';
                return (
                  window.pageData &&
                    (pageData.search && (e = pageData.search.criteria || ''),
                    !e &&
                      pageData.savedEvents &&
                      (e = pageData.savedEvents.autoSuggestSearchTerm || ''),
                    !e &&
                      window.eventData &&
                      eventData.search &&
                      eventData.search.criteria &&
                      (e = eventData.search.criteria)),
                  e
                );
              },
            },
          },
          'Search - Advanced Criteria': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.advancedCriteria' },
          },
          'Event - LinkOut Referring Product': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.referringProduct' },
          },
          'Event - Rows Exported': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.export.rows' },
          },
          'Visitor - Consortium + Account': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return pageDataTracker.getConsortiumAccountId();
              },
            },
          },
          'Page - Analytics Pagename': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.analyticsPagename' },
          },
          'Search - Results per Page': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.resultsPerPage' },
          },
          'Email - Broadlog ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'bid', caseInsensitive: !0 },
          },
          'Search - Result Types': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return pageDataTracker.getSearchResultsByType();
              },
            },
          },
          'Page - Section Name': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.sectionName' },
          },
          serverState: {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'targetServerState' },
          },
          'Search - Details': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.details' },
          },
          'Event - Button Type': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.buttonType' },
          },
          'Search - Total Results': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.totalResults' },
          },
          'Page - Product Name': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.pageData &&
                  pageData.page &&
                  pageData.page.productName &&
                  pageData.page.productName.length < 3
                  ? pageData.page.productName
                  : '';
              },
            },
          },
          'Page - Type': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.type' },
          },
          'Visitor - Details': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.details' },
          },
          'Page - Currency Code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.currencyCode' },
          },
          'Event - Conversion Driver': {
            defaultValue: '',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.conversionDriver.name' },
          },
          'Page - Do Not Track': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.noTracking' },
          },
          'Visitor - Login Success': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.loginSuccess' },
          },
          'Campaign - ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'dgcid', caseInsensitive: !0 },
          },
          'Order - Promo Code': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.order.promoCode' },
          },
          'Page - Environment': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.environment' },
          },
          'Search - Within Content Criteria': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.withinContentCriteria' },
          },
          'Page - Load Time': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.loadTime' },
          },
          'Event - Action Name': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.action.name' },
          },
          'Form - Step + Name': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.eventData &&
                  eventData.form &&
                  eventData.form.type &&
                  eventData.form.step
                  ? eventData.form.type + ':' + eventData.form.step
                  : window.pageData && pageData.form && pageData.form.type && pageData.form.step
                  ? pageData.form.type + ':' + pageData.form.step
                  : '';
              },
            },
          },
          'Page - Business Unit': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (window.pageData && pageData.page && pageData.page.businessUnit
                  ? pageData.page.businessUnit
                  : ''
                ).replace(/RAP\:/g, 'RP:');
              },
            },
          },
          'Email - Message ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'cid', caseInsensitive: !0 },
          },
          'Visitor - Account ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.accountId' },
          },
          'Page - Identity User': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = [];
                if (window.pageDataTracker) {
                  var t = pageDataTracker.getCookie('id_ab');
                  if (t) {
                    var a = t.match(/([^:]*:[^:]*:[^:]*):([^:]*)(:[^:]*)?/);
                    a && ((t = a[3]), e.push('cookie-' + (t || 'empty')));
                  }
                }
                return (
                  window.pageData &&
                    pageData.page &&
                    pageData.page.identityUser &&
                    e.push(pageData.page.identityUser),
                  e.join('|')
                );
              },
            },
          },
          'Page - Language': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.language' },
          },
          'Form - Error Type': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.form.errorType' },
          },
          'Search - Facet List': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return pageDataTracker.getSearchFacets();
              },
            },
          },
          'Page - Experimentation User Id': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = [];
                if (window.pageDataTracker) {
                  var t = pageDataTracker.getCookie('id_ab');
                  if (t) {
                    var a = t.match(/([^:]*:[^:]*:[^:]*):([^:]*)(:[^:]*)?/);
                    a && ((t = a[2]), e.push('cookie-' + (t || 'empty')));
                  }
                }
                return (
                  window.pageData &&
                    pageData.page &&
                    pageData.page.experimentationUserId &&
                    e.push(pageData.page.experimentationUserId),
                  window.pageData &&
                    pageData.page &&
                    pageData.page.experimentationUserID &&
                    e.push(pageData.page.experimentationUserID),
                  e.join('|')
                );
              },
            },
          },
          'Event - Updated User Fields': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.user.fieldsUpdated' },
          },
          'Page - Error Type': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (window.pageData && pageData.page) {
                  if (pageData.page.errorType) return pageData.page.errorType;
                  if (pageData.form && pageData.form.errorType) return pageData.form.errorType;
                }
                return '';
              },
            },
          },
          'Visitor - Login Status': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.loginStatus' },
          },
          'Email - Recipient ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
            settings: { name: 'eid', caseInsensitive: !0 },
          },
          'Visitor - SIS ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.sisId' },
          },
          'Search - Current Page': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.currentPage' },
          },
          'Page - Test ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = [];
                if (window.pageDataTracker) {
                  var t = pageDataTracker.getCookie('id_ab');
                  if (t) {
                    var a = t.match(/([^:]*:[^:]*:[^:]*):([^:]*)(:[^:]*)?/);
                    a && (t = a[1]), e.push('cookie-' + t);
                  }
                }
                return (
                  window.pageData &&
                    pageData.page &&
                    pageData.page.testId &&
                    e.push(pageData.page.testId),
                  e.join('|')
                );
              },
            },
          },
          'Visitor - Consortium ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.consortiumId' },
          },
          'Search - Data Form Criteria': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.dataFormCriteria' },
          },
          'Order - ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.order.id' },
          },
          'Page - Journal Info': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return pageDataTracker.getJournalInfo();
              },
            },
          },
          'Visitor - User ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.userId' },
          },
          'Promo - Clicked ID': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.clickedPromoId ? window.clickedPromoId : '';
              },
            },
          },
          'Visitor - Access Type': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = '';
                return (
                  window.pageData &&
                    pageData.visitor &&
                    pageData.visitor.accessType &&
                    (e = pageData.visitor.accessType.toLowerCase()),
                  'ae:anon-ip' == e && (e = 'ae:anon_ip'),
                  'ae:anon-guest' == e && (e = 'ae:anon_guest'),
                  e
                );
              },
            },
          },
          'Event - AutoSuggest Search Term': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.savedEvents.autoSuggestSearchTerm' },
          },
          'Visitor - App Session ID': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (window.pageData && pageData.visitor && pageData.visitor.appSessionId)
                  return pageData.visitor.appSessionId;
                var e = pageDataTracker.getCookie('sd_session_id');
                if (!e) {
                  (e = navigator.userAgent),
                    window.pageData &&
                      pageData.visitor &&
                      pageData.visitor.ipAddress &&
                      (e += '|' + pageData.visitor.ipAddress);
                  var t = new Date();
                  (e += '|'),
                    (e += t.getFullYear()),
                    (e += t.getMonth()),
                    (e += t.getDate()),
                    (e += t.getHours());
                }
                return e;
              },
            },
          },
          'Event - Navigation Link Name': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.navigationLink.name' },
          },
          'Page - Widget Names': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.eventData && eventData.link && eventData.link.widgetName
                  ? eventData.link.widgetName
                  : window.pageData && pageData.page && pageData.page.widgetNames
                  ? pageData.page.widgetNames.join('|')
                  : void 0;
              },
            },
          },
          'Page - Website Extensions': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e =
                  window.pageData && pageData.savedEvents && pageData.savedEvents.wx
                    ? pageData.savedEvents.wx.split('|')
                    : [];
                return (
                  window.ga && e.push('3'),
                  window.pendo && e.push('4'),
                  window.usabilla_live && e.push('5'),
                  window.optimizely && e.push('6'),
                  window.mendeleyWebImporter && e.push('7'),
                  e.join('|')
                );
              },
            },
          },
          'Event - Share Platform': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.sharePlatform' },
          },
          'Page - Load Timestamp': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.page.loadTimestamp' },
          },
          'Page - Product Application Version': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = [];
                return (
                  window.eventData && eventData.page && eventData.page.productAppVersion
                    ? e.push(eventData.page.productAppVersion)
                    : window.pageData && pageData.page && pageData.page.productAppVersion
                    ? e.push(pageData.page.productAppVersion)
                    : e.push('none'),
                  window.eventData && eventData.page && eventData.page.recommenderVersion
                    ? e.push(eventData.page.recommenderVersion)
                    : window.pageData && pageData.page && pageData.page.recommenderVersion
                    ? e.push(pageData.page.recommenderVersion)
                    : e.push('none'),
                  e.join('^')
                );
              },
            },
          },
          'Search - Sort Type': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.sortType' },
          },
          'Search - Feature Used': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.search.featureName' },
          },
          'Event - Link Name': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.link.name' },
          },
          'Search - Within Results Criteria': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.withinResultsCriteria' },
          },
          'Promo - IDs': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                for (
                  var e = document.getElementsByTagName('a'), t = [], a = 0;
                  a < e.length;
                  a++
                ) {
                  var n = e[a].getAttribute('data-sc-promo-id');
                  n && t.push(n);
                }
                if (window.eventData && eventData.cta && eventData.cta.ids)
                  for (a = 0; a < eventData.cta.ids.length; a++) t.push(eventData.cta.ids[a]);
                return t.join('|');
              },
            },
          },
          'Event - Alert Type': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.eventData &&
                  eventData.alert &&
                  (eventData.alert.frequency || eventData.alert.type)
                  ? (eventData.alert.frequency || 'no frequency') +
                      '|' +
                      (eventData.alert.type || 'no type')
                  : '';
              },
            },
          },
          'Visitor - Account Name': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.pageData &&
                  pageData.visitor &&
                  pageData.visitor.accountName &&
                  'ae:' != pageData.visitor.accountName &&
                  'AE:' != pageData.visitor.accountName
                  ? pageData.visitor.accountName
                  : '';
              },
            },
          },
          'Page - Product Feature': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return window.eventData && eventData.feature
                  ? eventData.feature.name || ''
                  : window.pageData && pageData.feature
                  ? pageData.feature.name || ''
                  : void 0;
              },
            },
          },
          'Search - Type': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.search.type' },
          },
          'Event - AutoSuggest Search Data': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.savedEvents.autoSuggestSearchData' },
          },
          'Visitor - IP Address': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'pageData.visitor.ipAddress' },
          },
          'Event - LinkOut Destination': {
            defaultValue: '',
            forceLowerCase: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.linkOut' },
          },
          'Event - Link Referral Name': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'eventData.link.referralName' },
          },
        },
        extensions: {
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, a, r) {
                  'use strict';
                  var n = a('../sharedModules/getTracker'),
                    i = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    s = function (e) {
                      return i(e) ? e.innerHTML : 'link clicked';
                    },
                    o = function (e, t, a) {
                      if ('page' === t.type) r.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var n = { linkType: t.linkType || 'o', linkName: t.linkName || s(a) };
                        r.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(n) + '.'
                        ),
                          e.tl(i(a) ? a : 'true', n.linkType, n.linkName);
                      }
                    };
                  e.exports = function (t, a) {
                    return n().then(
                      function (e) {
                        o(e, t, a.element);
                      },
                      function (e) {
                        r.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('../sharedModules/getTracker'),
                    i = a('../helpers/applyTrackerVariables');
                  e.exports = function (t, a) {
                    return r().then(
                      function (e) {
                        n.logger.info('Set variables on the tracker.'),
                          i(e, t.trackerProperties),
                          t.customSetup &&
                            t.customSetup.source &&
                            t.customSetup.source.call(a.element, a, e);
                      },
                      function (e) {
                        n.logger.error('Cannot set variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/clearVariables.js': {
                name: 'clear-variables',
                displayName: 'Clear Variables',
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('../sharedModules/getTracker');
                  e.exports = function () {
                    return r().then(
                      function (e) {
                        e.clearVars && (n.logger.info('Clear variables.'), e.clearVars());
                      },
                      function (e) {
                        n.logger.error('Cannot clear variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var r,
                    i = a('@adobe/reactor-cookie'),
                    s = a('@adobe/reactor-promise'),
                    o = a('@adobe/reactor-window'),
                    c = a('../helpers/settingsHelper'),
                    l = a('../helpers/augmenters'),
                    u = a('../helpers/applyTrackerVariables'),
                    d = a('../helpers/loadLibrary'),
                    p = a('../helpers/generateVersion')(n.buildInfo.turbineBuildDate),
                    f = 'beforeSettings',
                    g = n.getSharedModule('adobe-mcid', 'mcid-instance'),
                    v = function (e) {
                      return !e || 'true' === i.get(e);
                    },
                    m = function (n) {
                      return s
                        .all(
                          l.map(function (e) {
                            var t;
                            try {
                              t = e(n);
                            } catch (a) {
                              setTimeout(function () {
                                throw a;
                              });
                            }
                            return s.resolve(t);
                          })
                        )
                        .then(function () {
                          return n;
                        });
                    },
                    h = function (e) {
                      return (
                        g &&
                          (n.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = g)),
                        e
                      );
                    },
                    b = function (e) {
                      return (
                        n.logger.info('Setting version on tracker: "' + p + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = p)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + p &&
                            (e.version += '-' + p),
                        e
                      );
                    },
                    k = function (e, t, a) {
                      return (
                        t.loadPhase === f &&
                          t.source &&
                          (n.logger.info('Calling custom script before settings.'),
                          t.source.call(o, a)),
                        u(a, e || {}),
                        t.loadPhase !== f &&
                          t.source &&
                          (n.logger.info('Calling custom script after settings.'),
                          t.source.call(o, a)),
                        a
                      );
                    },
                    y = function (e, t) {
                      return (
                        c.isAudienceManagementEnabled(e) &&
                          (t.loadModule('AudienceManagement'),
                          n.logger.info('Initializing AudienceManagement module'),
                          t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),
                        t
                      );
                    },
                    D =
                      ((r = n.getExtensionSettings()),
                      v(r.trackingCookieName)
                        ? d(r)
                            .then(m)
                            .then(h)
                            .then(b)
                            .then(k.bind(null, r.trackerProperties, r.customSetup || {}))
                            .then(y.bind(null, r))
                        : s.reject('EU compliance was not acknowledged by the user.'));
                  e.exports = function () {
                    return D;
                  };
                },
                name: 'get-tracker',
                shared: !0,
              },
              'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                name: 'augment-tracker',
                shared: !0,
                script: function (e, t, a) {
                  'use strict';
                  var n = a('../helpers/augmenters');
                  e.exports = function (e) {
                    n.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/settingsHelper.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('@adobe/reactor-window'),
                    i = {
                      LIB_TYPES: {
                        MANAGED: 'managed',
                        PREINSTALLED: 'preinstalled',
                        REMOTE: 'remote',
                        CUSTOM: 'custom',
                      },
                      MANAGED_LIB_PATHS: {
                        APP_MEASUREMENT: 'AppMeasurement.js',
                        ACTIVITY_MAP: 'AppMeasurement_Module_ActivityMap.js',
                        AUDIENCE_MANAGEMENT: 'AppMeasurement_Module_AudienceManagement.js',
                      },
                      getReportSuites: function (e) {
                        var t = e.production;
                        return (
                          e[n.buildInfo.environment] && (t = e[n.buildInfo.environment]),
                          t.join(',')
                        );
                      },
                      isActivityMapEnabled: function (e) {
                        return !(
                          e.libraryCode &&
                          !e.libraryCode.useActivityMap &&
                          !1 === e.libraryCode.useActivityMap
                        );
                      },
                      isAudienceManagementEnabled: function (e) {
                        var t = !1;
                        return (
                          e &&
                            e.moduleProperties &&
                            e.moduleProperties.audienceManager &&
                            e.moduleProperties.audienceManager.config &&
                            r &&
                            r._satellite &&
                            r._satellite.company &&
                            r._satellite.company.orgId &&
                            (t = !0),
                          t
                        );
                      },
                    };
                  e.exports = i;
                },
              },
              'adobe-analytics/src/lib/helpers/augmenters.js': {
                script: function (e) {
                  'use strict';
                  e.exports = [];
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, a, s) {
                  'use strict';
                  var r = a('@adobe/reactor-query-string'),
                    i = a('@adobe/reactor-window'),
                    o = /eVar([0-9]+)/,
                    c = /prop([0-9]+)/,
                    l = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    u = function (e, t, a) {
                      return a.indexOf(e) === t;
                    },
                    d = function (e, t, a) {
                      var n = Object.keys(t).filter(l.test.bind(l));
                      return (
                        a && n.push('events'),
                        (n = n.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && u(e, t, n);
                          })
                          .join(',')
                      );
                    },
                    p = function (e, t) {
                      var a = t.map(function (e) {
                        return e.name;
                      });
                      return (a = a.concat((e.linkTrackEvents || '').split(',')))
                        .filter(function (e, t) {
                          return 'None' !== e && u(e, t, a);
                        })
                        .join(',');
                    },
                    n = function (e, t, a) {
                      e[t] = a[t].join(',');
                    },
                    f = function (r, e, t) {
                      var i = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var a = o.exec(e.value);
                          if (a) t = i + 'v' + a[1];
                          else {
                            var n = c.exec(e.value);
                            n && (t = i + 'c' + n[1]);
                          }
                        }
                        r[e.name] = t;
                      });
                    },
                    g = {
                      linkDownloadFileTypes: n,
                      linkExternalFilters: n,
                      linkInternalFilters: n,
                      hierarchies: function (t, e, a) {
                        a[e].forEach(function (e) {
                          t[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: f,
                      eVars: f,
                      campaign: function (e, t, a) {
                        if ('queryParam' === a[t].type) {
                          var n = r.parse(i.location.search);
                          e[t] = n[a[t].value];
                        } else e[t] = a[t].value;
                      },
                      events: function (e, t, a) {
                        var n = a[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.id && (t = [t, e.id].join(':')),
                            e.value && (t = [t, e.value].join('=')),
                            t
                          );
                        });
                        e[t] = n.join(',');
                      },
                    };
                  e.exports = function (t, n) {
                    var r = {};
                    (n = n || {}),
                      Object.keys(n).forEach(function (e) {
                        var t = g[e],
                          a = n[e];
                        t ? t(r, e, n) : (r[e] = a);
                      }),
                      r.events &&
                        t.events &&
                        0 < t.events.length &&
                        (r.events = t.events + ',' + r.events);
                    var e = n && n.events && 0 < n.events.length,
                      a = d(t, r, e);
                    a && (r.linkTrackVars = a);
                    var i = p(t, n.events || []);
                    i && (r.linkTrackEvents = i),
                      s.logger.info(
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
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('@adobe/reactor-load-script'),
                    i = a('@adobe/reactor-window'),
                    s = a('@adobe/reactor-promise'),
                    o = a('./settingsHelper'),
                    c = a('./pollHelper'),
                    l = function (e, t) {
                      if (!i.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            i.AppMeasurement
                        );
                      n.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                      );
                      var a = i.s_gi(t);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (n.logger.info('Setting the tracker as window.s'), (i.s = a)),
                        a
                      );
                    },
                    u = function (e) {
                      var t = [];
                      switch (e.libraryCode.type) {
                        case o.LIB_TYPES.MANAGED:
                          t.push(n.getHostedLibFileUrl(o.MANAGED_LIB_PATHS.APP_MEASUREMENT)),
                            o.isActivityMapEnabled(e) &&
                              t.push(n.getHostedLibFileUrl(o.MANAGED_LIB_PATHS.ACTIVITY_MAP));
                          break;
                        case o.LIB_TYPES.CUSTOM:
                          t.push(e.libraryCode.source);
                          break;
                        case o.LIB_TYPES.REMOTE:
                          t.push(
                            'https:' === i.location.protocol
                              ? e.libraryCode.httpsUrl
                              : e.libraryCode.httpUrl
                          );
                      }
                      if (o.isAudienceManagementEnabled(e)) {
                        var a = { namespace: i._satellite.company.orgId };
                        (e.moduleProperties.audienceManager.config.visitorService = a),
                          t.push(n.getHostedLibFileUrl(o.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT));
                      }
                      return t;
                    },
                    d = function (e) {
                      return s.all(
                        u(e).map(function (e) {
                          return n.logger.info('Loading script: ' + e), r(e);
                        })
                      );
                    },
                    p = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var a = o.getReportSuites(e.libraryCode.accounts);
                          n.logger.info(
                            'Setting the following report suites on the tracker: "' + a + '"'
                          ),
                            t.sa(a);
                        } else
                          n.logger.warn(
                            'Cannot set report suites on tracker. `sa` method not available.'
                          );
                      return t;
                    },
                    f = function (e) {
                      if (i[e])
                        return n.logger.info('Found tracker located at: "' + e + '".'), i[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    };
                  e.exports = function (e) {
                    var t = d(e);
                    switch (e.libraryCode.type) {
                      case o.LIB_TYPES.MANAGED:
                        var a = o.getReportSuites(e.libraryCode.accounts);
                        return t.then(l.bind(null, e, a));
                      case o.LIB_TYPES.PREINSTALLED:
                        return t
                          .then(c.poll.bind(null, i, e.libraryCode.trackerVariableName))
                          .then(p.bind(null, e));
                      case o.LIB_TYPES.CUSTOM:
                      case o.LIB_TYPES.REMOTE:
                        return t
                          .then(f.bind(null, e.libraryCode.trackerVariableName))
                          .then(p.bind(null, e));
                      default:
                        throw new Error('Cannot load library. Type not supported.');
                    }
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/generateVersion.js': {
                script: function (e) {
                  'use strict';
                  var t = 8,
                    a = function (e) {
                      return e.getUTCDate().toString(36);
                    },
                    n = function (e) {
                      return e.substr(e.length - 1);
                    },
                    r = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    i = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * r(e)).toString(36);
                      return n(t);
                    },
                    s = function (e) {
                      return (e.getUTCFullYear() - 2010).toString(36);
                    };
                  e.exports = function (e) {
                    var t = new Date(e);
                    if (isNaN(t)) throw new Error('Invalid date provided');
                    return ('L' + s(t) + i(t) + a(t)).toUpperCase();
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/pollHelper.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var s = a('@adobe/reactor-promise'),
                    o = 40,
                    c = 250,
                    l = function (e, t, a) {
                      n.logger.info('Found property located at: "' + t + '"].'), e(a);
                    },
                    r = function (r, i) {
                      return new s(function (e, t) {
                        if (r[i]) return l(e, i, r[i]);
                        var a = 1,
                          n = setInterval(function () {
                            r[i] && (l(e, i, r[i]), clearInterval(n)),
                              o <= a &&
                                (clearInterval(n),
                                t(
                                  new Error(
                                    'Bailing out. Cannot find the variable name: "' + i + '"].'
                                  )
                                )),
                              a++;
                          }, c);
                      });
                    };
                  e.exports = {
                    poll: function (e, t) {
                      return (
                        n.logger.info(
                          'Waiting for the property to become accessible at: "' + t + '"].'
                        ),
                        r(e, t)
                      );
                    },
                  };
                },
              },
            },
            settings: {
              orgId: '4D6368F454EC41940A4C98A6@AdobeOrg',
              customSetup: {
                source: function (c) {
                  function e (n, r) {
                    return function (e) {
                      var t = e;
                      if (t)
                        do {
                          if (t.getAttribute && ((regionId = t.getAttribute(r)), regionId))
                            return regionId.toLowerCase();
                        } while (t && (t = t.parentNode));
                      var a = n.call(this, e);
                      return a && -1 !== a.indexOf('@')
                        ? (window.pageDataTracker && (a = pageDataTracker.md5(a).substring(0, 16)),
                          'DTM filtered (@):' + a)
                        : a;
                    };
                  }
                  function t (e) {
                    var t,
                      a,
                      n,
                      r = this,
                      i = (new Date(), r.c_rr(e)),
                      s = r.c_rspers();
                    return (
                      i ||
                      ((e = r.escape ? r.escape(e) : encodeURIComponent(e)),
                      (a =
                        (t = (s =
                          (t = s.indexOf(' ' + e + '=')) < 0 ? r.c_rr('s_sess') : s).indexOf(
                          ' ' + e + '='
                        )) < 0
                          ? t
                          : s.indexOf('|', t)),
                      (n = t < 0 ? t : s.indexOf(';', t)),
                      (a = 0 < a ? a : n),
                      (i =
                        t < 0
                          ? ''
                          : r.unescape
                          ? r.unescape(s.substring(t + 2 + e.length, a < 0 ? s.length : a))
                          : decodeURIComponent(
                              s.substring(t + 2 + e.length, a < 0 ? s.length : a)
                            )))
                    );
                  }
                  function a () {
                    var e = this.c_rr('s_pers'),
                      t = new Date().getTime(),
                      a = null,
                      n = [],
                      r = '';
                    if (!e) return r;
                    for (var i = 0, s = (n = e.split(';')).length; i < s; i++)
                      (a = n[i].match(/\|([0-9]+)$/)) && parseInt(a[1]) >= t && (r += n[i] + ';');
                    return r;
                  }
                  function n (e, t, a) {
                    var n,
                      r,
                      i,
                      s,
                      o,
                      c = this,
                      l = new Date(),
                      u = 0,
                      d = 's_pers',
                      p = 's_sess',
                      f = 0,
                      g = 0;
                    if (
                      (l.setTime(l.getTime() - 60000),
                      c.c_rr(e) && c.c_wr(e, '', l),
                      (e = c.escape ? c.escape(e) : encodeURIComponent(e)),
                      -1 < (i = (n = c.c_rspers()).indexOf(' ' + e + '=')) &&
                        ((n = n.substring(0, i) + n.substring(n.indexOf(';', i) + 1)), (f = 1)),
                      -1 < (i = (r = c.c_rr(p)).indexOf(' ' + e + '=')) &&
                        ((r = r.substring(0, i) + r.substring(r.indexOf(';', i) + 1)), (g = 1)),
                      (l = new Date()),
                      a
                        ? (1 == a &&
                            ((o = (a = new Date()).getYear()),
                            a.setYear(o + 5 + (o < 1900 ? 1900 : 0))),
                          a.getTime() > l.getTime() &&
                            ((n +=
                              ' ' +
                              e +
                              '=' +
                              (c.escape ? c.escape(t) : encodeURIComponent(t)) +
                              '|' +
                              a.getTime() +
                              ';'),
                            (f = 1)))
                        : ((r +=
                            ' ' +
                            e +
                            '=' +
                            (c.escape ? c.escape(t) : encodeURIComponent(t)) +
                            ';'),
                          (g = 1)),
                      (r = r.replace(/%00/g, '')),
                      (n = n.replace(/%00/g, '')),
                      g && c.c_wr(p, r, 0),
                      f)
                    ) {
                      for (s = n; s && -1 != s.indexOf(';'); ) {
                        var v = parseInt(s.substring(s.indexOf('|') + 1, s.indexOf(';')));
                        (s = s.substring(s.indexOf(';') + 1)), (u = u < v ? v : u);
                      }
                      l.setTime(u), c.c_wr(d, n, l);
                    }
                    return t == c.c_r(c.unescape ? c.unescape(e) : decodeURIComponent(e));
                  }
                  if (((window.s = c), !window.pageDataTracker)) return !1;
                  pageDataTracker.mapAdobeVars(c),
                    (c._tpDST = {
                      2012: '3/11,11/4',
                      2013: '3/10,11/3',
                      2014: '3/9,11/2',
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
                      2031: '3/9,11/2',
                      2032: '3/14,11/7',
                      2033: '3/13,11/6',
                    }),
                    (c.ActivityMap.region = e(c.ActivityMap.region, 'data-aa-region')),
                    (c.ActivityMap.link = e(c.ActivityMap.link, 'data-aa-name')),
                    (c.usePlugins = !0),
                    c.prop68 && 'md' == c.prop68 && (c.trackOffline = !0),
                    (c.cookieDomainPeriods = '2');
                  for (
                    var r = ['com', 'edu', 'gov', 'ac', 'org', 'net', 'co', 'go'], i = 0;
                    i < r.length;
                    i++
                  )
                    if (0 < document.location.hostname.indexOf('.' + r[i] + '.')) {
                      c.cookieDomainPeriods = '3';
                      break;
                    }
                  (c.linkInternalFilters =
                    (c.linkInternalFilters ? c.linkInternalFilters + ',' : '') +
                    document.location.hostname),
                    (window.s_doPlugins = function (e) {
                      if (
                        (window.pageData &&
                          'true' != pageData.page.noTracking &&
                          window.pageData_isLoaded) ||
                        ((e.abort = !0), window.pageData)
                      ) {
                        try {
                          if (window.ddqueue && 0 < window.ddqueue.length) {
                            var t = window.ddqueue.shift();
                            (window.eventData = t.eventData), (window.pageData = t.pageData);
                          }
                        } catch (N) {}
                        if (
                          ((pageData.page.lastTrackedPage = pageData.page.analyticsPagename),
                          'object' != typeof window.eventData ||
                            ('newPage' != window.eventData.eventName &&
                              'searchResultsUpdated' != window.eventData.eventName) ||
                            (e.clearVars(), (e.pageLoaded = !1), pageDataTracker.getEvents()),
                          pageDataTracker.mapAdobeVars(e),
                          (e.list3 = _satellite.getVar('Promo - IDs')),
                          e.list3)
                        ) {
                          for (var a = e.list3.split('|'), n = 0; n < a.length; n++)
                            a[n] = e.productPrefix(a[n]);
                          (e.list3 = a.join('|')),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'list3', ',', 2));
                        }
                        (e.eVar21 = _satellite.getVar('Promo - Clicked ID')),
                          e.eVar21 &&
                            ((e.list3 = e.eVar21 = e.productPrefix(e.eVar21)),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar21', ',', 2)),
                            window.clickedPromoId && (window.clickedPromoId = undefined)),
                          (e.account = e.getCustomReportSuites()),
                          (e.tpEls = e.getTimeParting('n', '-5').split('|')),
                          (e.prop5 = e.tpEls[0] + ' ' + e.tpEls[1]),
                          (e.prop9 = e.version),
                          (e.server = document.location.hostname),
                          (e.prop18 = document.location.hostname + document.location.pathname),
                          (e.prop32 = document.location.protocol.replace(/\:/g, '')),
                          (e.prop35 = e.getUrlWithHashbang()),
                          (e.eVar8 = e.getDaysSinceLastVisit('v8'));
                        var r,
                          i = Visitor.getInstance('4D6368F454EC41940A4C98A6@AdobeOrg');
                        if (((e.eVar50 = i.getMarketingCloudVisitorID()), e.prop12)) {
                          var s = 0;
                          e.eVar33 &&
                            null !== e.eVar33.match(/(reg(-|_|:))|registered/gi) &&
                            (s = 1),
                            i.setCustomerIDs({ userid: { id: e.prop12, authState: s } });
                        }
                        if (
                          (window.pageData &&
                            pageData.page &&
                            'cert' == pageData.page.environment &&
                            (e.account = e.account.replace(/\-(dev|prod)/gi, '-cert')),
                          e.campaign &&
                            e.prop2 &&
                            0 != e.campaign.indexOf(e.prop2 + ':') &&
                            (e.campaign = e.prop2 + ':' + e.campaign),
                          e.campaign &&
                            ((e.eVar108 = 'D=v0'),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar108', ',', 2))),
                          (e.events = e.events ? e.events : ''),
                          (e.products = pageDataTracker.setProductsVariable()),
                          !e.pageLoaded && e.pageName)
                        ) {
                          if (((e.prop19 = e.getPreviousValue(e.pageName, 'c19', '')), e.prop19)) {
                            var o = e.getPercentPageViewed(e.pageName);
                            o &&
                            2 < o.length &&
                            'undefined' != o[1] &&
                            'undefined' != typeof o[1] &&
                            'undefined' != o[2] &&
                            'undefined' != typeof o[2]
                              ? (e.prop17 = o[1] + '|' + o[2])
                              : (e.prop17 = 'no data available');
                          }
                          if (
                            ((e.eVar66 = e.eVar67 = '+1'),
                            (e.events = e.apl(e.events, 'event27', ',', 2)),
                            window.pageData &&
                              pageData.trackEvents &&
                              pageData.trackEvents instanceof Array)
                          ) {
                            for (
                              var c = {
                                  associationStart: 'event199',
                                  associated: 'event200',
                                  contentEdit: 'event190',
                                  contentAddition: 'event79',
                                  recommendationViews: 'event257,event264',
                                },
                                l = 0;
                              l < pageData.trackEvents.length;
                              l++
                            ) {
                              var u = c[pageData.trackEvents[l]];
                              u && (e.events = e.apl(e.events, u, ',', 2));
                            }
                            pageData.trackEvents = [];
                          }
                          var d = new Date(),
                            p = _satellite.getVar('Visitor - User ID');
                          (p = p ? p.toLowerCase() : ''),
                            (p += d.getFullYear()),
                            (p += d.getMonth()),
                            (p = pageDataTracker.md5(p).substring(0, 20)),
                            (e.events = e.apl(e.events, 'event203:' + p, ',', 2));
                          var f = _satellite.getVar('Visitor - Account ID');
                          if (
                            (f &&
                              ((f = f.toLowerCase()),
                              (f += d.getFullYear()),
                              (f += d.getMonth()),
                              (f = pageDataTracker.md5(f).substring(0, 20)),
                              (e.events = e.apl(e.events, 'event205:' + f, ',', 2))),
                            e.eVar72 && (e.events = e.apl(e.events, 'event9', ',', 2)),
                            window.pageData &&
                              pageData.visitor &&
                              pageData.visitor.loginSuccess &&
                              'true' == pageData.visitor.loginSuccess &&
                              ((e.events = e.apl(e.events, 'event23', ',', 2)),
                              (pageData.visitor.loginSuccess = 'false')),
                            window.pageData &&
                              pageData.visitor &&
                              pageData.visitor.loginFailure &&
                              'true' == pageData.visitor.loginFailure &&
                              ((e.events = e.apl(e.events, 'event134', ',', 2)),
                              (pageData.visitor.loginFailure = 'false')),
                            e.eVar19 &&
                              ((e.eVar19 = e.cleanUrlData(e.eVar19)),
                              e.prop21 || (e.prop21 = e.eVar19)),
                            '0' == e.eVar3 && (e.eVar3 = 'zero'),
                            e.prop21)
                          ) {
                            (e.prop21 = e.cleanUrlData(e.prop21)),
                              e.getValOnce(e.prop21, 'c21', 0) &&
                                ((e.events = e.apl(e.events, 'event3', ',', 2)),
                                (e.eVar35 = e.eVar36 = '+1'),
                                '0' == e.eVar3 || 'zero' == e.eVar3
                                  ? ((e.eVar3 = 'zero'),
                                    (e.events = e.apl(e.events, 'event4', ',', 2)))
                                  : e.eVar3 &&
                                    (e.events = e.apl(e.events, 'event14=' + e.eVar3, ',', 2)));
                            var g = _satellite.getVar('Search - Results per Page');
                            e.getValOnce(
                              (e.eVar19 && e.eVar19 == e.prop21 ? '' : e.prop21) +
                                ':' +
                                _satellite.getVar('Search - Current Page'),
                              'e13',
                              0
                            ) &&
                              g &&
                              (e.events = e.apl(e.events, 'event13=' + g, ',', 2));
                          }
                          e.eVar117 &&
                            e.getValOnce(e.eVar117, 'v117', 0) &&
                            (e.events = e.apl(e.events, 'event198', ',', 2)),
                            e.prop13 &&
                              e.getValOnce(e.prop13, 'c13', 0) &&
                              (e.events = e.apl(e.events, 'event24', ',', 2)),
                            (e.prop7 || e.eVar46) &&
                              e.getValOnce(e.prop7 || e.eVar46, 'c7', 0) &&
                              (e.events = e.apl(e.events, 'event6', ',', 2)),
                            e.prop60 &&
                              e.getValOnce(e.prop60, 'c60', 0) &&
                              (e.events = e.apl(e.events, 'event88', ',', 2));
                          var v = e.getValOnce('1', 'e41', 0);
                          e.clickPast(v, 'event41', 'event42'),
                            -1 < e.events.indexOf('event41') && m && e.c_w('v31', m),
                            e.list3 && (e.events = e.apl(e.events, 'event21', ',', 2));
                          var m = _satellite.getVar('Page - Load Timestamp'),
                            h = e.getPreviousValue(m, 'v68', '') || m,
                            b = e.c_r('v31') || m;
                          if (m)
                            try {
                              var k = new Date(parseInt(m)),
                                y = k.getTime(),
                                D = this.isDST(k);
                              (e.eVar113 = (
                                Math.floor((y / 1000 - 18000 + 3600 * D) % 86400) + 1
                              ).toString()),
                                (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar113', ',', 2));
                            } catch (R) {
                              _satellite.notify('Error setting s.eVar113: ' + R.message);
                            }
                          if (m && h)
                            try {
                              var C = new Date(parseInt(m)),
                                w = new Date(parseInt(h)),
                                T = new Date(parseInt(b)),
                                _ = C.getTime() - w.getTime();
                              0 < _ && (e.eVar68 = '+' + (_ / 1000).toFixed(0)),
                                (e.currentVisitTime = ((C.getTime() - T.getTime()) / 1000).toFixed(
                                  0
                                ));
                            } catch (R) {}
                          if (pageData.eventList)
                            for (n = 0; n < pageData.eventList.length; n++)
                              'product turnaway' == pageData.eventList[n] &&
                                (e.events = e.apl(e.events, 'event43', ',', 2));
                          if (
                            (e.eVar43 && (e.events = e.apl(e.events, 'event26', ',', 2)),
                            e.eVar44 && (e.events = e.apl(e.events, 'event17', ',', 2)),
                            pageData.page && pageData.page.purchaseStep)
                          ) {
                            var V = '';
                            switch (pageData.page.purchaseStep) {
                              case 'cart':
                                V = 'scView';
                                break;
                              case 'login':
                              case 'checkout':
                              case 'shipping':
                              case 'payment':
                                V = 'scCheckout';
                                break;
                              case 'purchase':
                                V = 'purchase';
                            }
                            V &&
                              ((e.events = e.apl(e.events, V, ',', 2)),
                              'scView' == V && (e.events = e.apl(e.events, 'scOpen', ',', 2)));
                          }
                          e.list2 && (e.events = e.apl(e.events, 'event178', ',', 2));
                          try {
                            (e.prop66 = pageDataTracker.getMessages()),
                              e.prop66 &&
                                (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop66', ',', 2));
                            var P = pageDataTracker.getPerformance();
                            P.du &&
                              ((e.eVar114 = P.du),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar114', ',', 2))),
                              P.lt &&
                                ((e.eVar115 = P.lt),
                                (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar115', ',', 2)));
                          } catch (N) {}
                          for (
                            var S = [
                                'utm_campaign',
                                'dgcid',
                                'utm_dgroup',
                                'utm_in',
                                'utm_medium',
                                'utm_acid',
                                'cmx_id',
                                'sis_id',
                                'utm_source',
                                'utm_term',
                                'utm_content',
                              ],
                              I = '',
                              E = !1,
                              A = 0;
                            A < S.length;
                            A++
                          ) {
                            var O = e.Util.getQueryParam(S[A]) || '';
                            O && (E = !0), (I += O + '|');
                          }
                          E && (e.eVar125 = I),
                            e.prop14 &&
                              !isNaN(parseFloat(e.prop14)) &&
                              isFinite(e.prop14) &&
                              ((e.events = e.apl(e.events, 'event229=' + e.prop14, ',', 2)),
                              (e.events = e.apl(e.events, 'event230', ',', 2))),
                            window.pageDataTracker_ec &&
                              0 < pageDataTracker_ec &&
                              ((e.events = e.apl(
                                e.events,
                                'event227=' + pageDataTracker_ec,
                                ',',
                                2
                              )),
                              (pageDataTracker_ec = 0)),
                            window.pageDataTracker_wc &&
                              0 < pageDataTracker_wc &&
                              ((e.events = e.apl(
                                e.events,
                                'event228=' + pageDataTracker_wc,
                                ',',
                                2
                              )),
                              (pageDataTracker_wc = 0)),
                            (e.pageLoaded = !0);
                        }
                        if (
                          (e.prop4 && null !== e.prop4.match(/^CP\-/gi) && !e.linkType) ||
                          (e.linkName && 'content view' == e.linkName)
                        ) {
                          if ((r = pageDataTracker.getContentItem()) && r.id && !r.turnawayId) {
                            (e.events = e.apl(e.events, 'prodView', ',', 2)),
                              (e.events = e.apl(e.events, 'event5', ',', 2)),
                              (e.events = e.apl(e.events, 'event40', ',', 2)),
                              (e.events = e.apl(e.events, 'event181', ',', 2)),
                              (e.events = e.apl(e.events, 'event182', ',', 2)),
                              (e.events = e.apl(e.events, 'event184', ',', 2)),
                              (e.events = e.apl(e.events, 'event239', ',', 2)),
                              (e.events = e.apl(e.events, 'event240', ',', 2));
                            var L = _satellite.getVar('Visitor - App Session ID'),
                              j = pageDataTracker.md5((L || 'none') + r.id).substring(0, 20);
                            (e.events = e.apl(e.events, 'event201:' + j, ',', 2)),
                              r.type &&
                                -1 !== r.type.toLowerCase().indexOf('scope-full') &&
                                (e.events = e.apl(e.events, 'event202:' + j, ',', 2)),
                              r &&
                                r.type &&
                                ((e.hier2 = r.type),
                                (e.linkTrackVars = e.apl(e.linkTrackVars, 'hier2', ',', 2))),
                              (e.eVar24 = '+1'),
                              (e.eVar25 = '+1'),
                              (e.prop11 = r.id),
                              (e.prop31 = pageDataTracker.getBibliographicInfo(r)),
                              r.format &&
                                (null !== r.format.match(/\-X?HTML/gi)
                                  ? ((V = ''),
                                    (V =
                                      null !== r.format.match(/scope\-abstract/gi) ||
                                      null !== r.type.match(/scope\-abstract/gi)
                                        ? 'event33'
                                        : 'event29'),
                                    (e.events = e.apl(e.events, V, ',', 2)),
                                    (e.linkTrackEvents = e.apl(e.linkTrackEvents, V, ',', 2)))
                                  : null !== r.format.match(/\-PDF/gi) &&
                                    ((e.events = e.apl(e.events, 'event30', ',', 2)),
                                    (e.linkTrackEvents = e.apl(
                                      e.linkTrackEvents,
                                      'event30',
                                      ',',
                                      2
                                    )))),
                              null !== e.prop4.match(/^CP\-DL/gi) &&
                                (e.events = e.apl(e.events, 'event19', ',', 2)),
                              r.viewState &&
                                ('login' == r.viewState
                                  ? ((e.events = e.apl(e.events, 'event103', ',', 2)),
                                    (e.linkTrackEvents = e.apl(
                                      e.linkTrackEvents,
                                      'event103',
                                      ',',
                                      2
                                    )))
                                  : 'upsell' == r.viewState &&
                                    ((e.events = e.apl(e.events, 'event104', ',', 2)),
                                    (e.linkTrackEvents = e.apl(
                                      e.linkTrackEvents,
                                      'event104',
                                      ',',
                                      2
                                    )))),
                              r.indexTerms && (e.prop56 = r.indexTerms),
                              e.currentVisitTime &&
                                ((e.eVar31 = e.currentVisitTime),
                                (e.eVar31 && '0' != e.eVar31) || (e.eVar31 = 'zero')),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar24', ',', 2)),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar25', ',', 2)),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar31', ',', 2)),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop11', ',', 2)),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop31', ',', 2)),
                              (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'prodView', ',', 2)),
                              (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event5', ',', 2)),
                              (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event40', ',', 2)),
                              (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event239', ',', 2)),
                              (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event240', ',', 2));
                          }
                        } else
                          e.events = e.removeFromList(
                            'prodView,event5,event40,event29,event33,event30,event239,event240',
                            ',',
                            e.events,
                            ','
                          );
                        e.eVar21 &&
                          ((e.events = e.apl(e.events, 'event22', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar21', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                          (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event22', ',', 2))),
                          e.prop23 &&
                            e.products &&
                            (r = pageDataTracker.getContentItem()) &&
                            r.id &&
                            ((e.prop22 = r.id + ':' + e.prop23),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop22', ',', 2))),
                          e.eVar60 &&
                            e.getValOnce(e.eVar60, 'v60', 0) &&
                            (e.events = e.apl(e.events, 'event75', ',', 2)),
                          e.eVar61 &&
                            e.getValOnce(e.eVar61, 'v61', 0) &&
                            (e.events = e.apl(e.events, 'event76', ',', 2)),
                          e.eVar15 &&
                            e.getValOnce(_satellite.getVar('Search - Criteria'), 'e78', 0) &&
                            ((e.events = e.apl(e.events, 'event78', ',', 2)),
                            (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event78', ',', 2)),
                            window.eventData &&
                              eventData.search &&
                              (eventData.search.resultsPosition = '')),
                          e.eVar37 &&
                            e.products &&
                            e.isTracked('eVar37') &&
                            ((e.events = e.apl(e.events, 'event44', ',', 2)),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                            (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event44', ',', 2)));
                        var M = _satellite.getVar('Form - Step + Name'),
                          x = e.getValOnce(M, 'fn', 0);
                        if (
                          (x && 'login:start' === x
                            ? ((e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                              (e.events = e.apl(e.events, 'event141', ',', 2)))
                            : x && 'loginregistration:start' === x
                            ? ((e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                              (e.events = e.apl(e.events, 'event185', ',', 2)))
                            : x && 'termsagreement:start' === x
                            ? ((e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                              (e.events = e.apl(e.events, 'event186', ',', 2)))
                            : x && 'termsagreement:complete' === x
                            ? ((e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                              (e.events = e.apl(e.events, 'event187', ',', 2)))
                            : x
                            ? ((V = ''),
                              (V =
                                -1 < x.indexOf('complete')
                                  ? 'event' +
                                    (-1 < x.indexOf('register') || -1 < x.indexOf('registration')
                                      ? '2'
                                      : '47')
                                  : 'event' +
                                    (-1 < x.indexOf('register') || -1 < x.indexOf('registration')
                                      ? '1'
                                      : '46')),
                              (e.linkTrackVars = e.apl(e.linkTrackVars, 'events', ',', 2)),
                              (e.linkTrackVars = e.apl(e.linkTrackEvents, 'prop2', ',', 2)),
                              (e.linkTrackVars = e.apl(e.linkTrackEvents, 'eVar4', ',', 2)),
                              (e.linkTrackEvents = e.apl(e.linkTrackEvents, V, ',', 2)),
                              (e.events = e.apl(e.events, V, ',', 2)))
                            : (e.events = e.removeFromList(
                                'event1,event2,event46,event47',
                                ',',
                                e.events,
                                ','
                              )),
                          (-1 < M.indexOf('register') || -1 < M.indexOf('registration')) &&
                            e.isTracked('eVar43') &&
                            ((e.events = e.apl(e.events, 'event216', ',', 2)),
                            (e.linkTrackEvents = e.apl(e.linkTrackEvents, 'event216', ',', 2))),
                          255 < document.location.href.length
                            ? (e.pageURL = document.location.href.substring(0, 255))
                            : (e.pageURL = document.location.href),
                          e.pageURL &&
                            0 === e.pageURL.indexOf('file:') &&
                            (e.pageURL = e.prop18 = e.prop35 =
                              'file://[filepath sanitized for GDPR compliance]'),
                          e.campaign && -1 !== e.campaign.indexOf('raven')
                            ? (e.referrer = 'mail://raven')
                            : e.campaign && -1 !== e.campaign.indexOf('email')
                            ? (e.referrer = 'mail://campaigns')
                            : document.referrer && 255 < document.referrer.length && !e.referrer
                            ? (e.referrer = document.referrer.substring(0, 255))
                            : document.referrer || (e.referrer = e.Util.getQueryParam('aaref')),
                          e.prop8 &&
                            ((e.linkTrackVars = e.apl(e.linkTrackVars, 'prop8', ',', 2)),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar18', ',', 2))),
                          (e.eVar109 = e.getFullReferringDomains()),
                          e.eVar109 &&
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar109', ',', 2)),
                          (e.linkTrackVars = e.linkTrackVars || ''),
                          (e.linkTrackVars = e.removeFromList(
                            'eVar118,eVar119,eVar120,eVar121,eVar144',
                            ',',
                            e.linkTrackVars,
                            ','
                          )),
                          window.eventData &&
                            eventData.link &&
                            eventData.link.location &&
                            ((e.eVar118 = eventData.link.location),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar118', ',', 2))),
                          window.eventData &&
                            eventData.link &&
                            eventData.link.name &&
                            ((e.eVar119 = eventData.link.name),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar119', ',', 2))),
                          window.eventData &&
                            eventData.link &&
                            eventData.link.type &&
                            ((e.eVar120 = eventData.link.type),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar120', ',', 2))),
                          window.eventData &&
                            eventData.link &&
                            eventData.link.destination &&
                            ((e.eVar121 = eventData.link.destination),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar121', ',', 2))),
                          window.eventData &&
                            eventData.link &&
                            eventData.link.userInputMethod &&
                            ((e.eVar144 = eventData.link.userInputMethod),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar144', ',', 2))),
                          e.eVar103 && (e.eVar110 = e.eVar110 ? e.eVar110 : 'D=c19'),
                          !e.isTracked('eVar103') &&
                            window.eventData &&
                            eventData.conversionDriver &&
                            eventData.conversionDriver.name &&
                            ((e.eVar103 = eventData.conversionDriver.name),
                            (e.eVar110 = 'D=pageName'),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar103,eVar110', ',', 2))),
                          e.eVar103 &&
                            e.isTracked('eVar103') &&
                            ((e.eVar145 = 'D=v103'),
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar145', ',', 2))),
                          e.events &&
                            -1 < e.events.split(',').indexOf('event2') &&
                            (e.events = e.apl(e.events, 'event7', ',', 2)),
                          e.linkObject && e.linkURL && 'e' == e.linkType)
                        )
                          try {
                            (e.eVar158 = e.extractHostname(e.linkURL)),
                              e.eVar158 &&
                                (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar158', ',', 2));
                          } catch (N) {}
                        window.navigator &&
                          navigator.userAgent &&
                          ((e.eVar186 = navigator.userAgent),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar186', ',', 2))),
                          e.trackEventsList(e, 'prop69'),
                          (e.prop65 = _satellite.getVar('Page - Online State')),
                          e.prop65 && (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop65', ',', 2)),
                          (e.prop29 = e.eVar7 ? 'D=v7' : ''),
                          (e.eVar1 = e.prop21 ? 'D=c21' : ''),
                          (e.eVar2 = e.prop6 ? 'D=c6' : ''),
                          (e.eVar4 = e.prop2 ? 'D=c2' : ''),
                          (e.eVar5 = e.prop5 ? 'D=c5' : ''),
                          (e.eVar9 = e.prop16 ? 'D=c16' : ''),
                          (e.eVar10 = e.prop18 ? 'D=c18' : ''),
                          (e.eVar11 = e.pageName ? 'D=pageName' : ''),
                          (e.hier1 = e.pageName ? 'D=pageName' : ''),
                          (e.eVar13 = e.prop4 ? 'D=c4' : ''),
                          (e.eVar14 = e.purchaseID ? 'D=purchaseID' : ''),
                          (e.eVar16 = e.prop1 ? 'D=c1' : ''),
                          (e.eVar18 = e.prop8 ? 'D=c8' : ''),
                          (e.eVar26 = e.prop13 ? 'D=c13' : ''),
                          (e.eVar29 = e.prop12 ? 'D=c12' : ''),
                          (e.eVar32 = e.prop19 ? 'D=c19' : ''),
                          (e.hier3 = e.prop19 ? 'D=c19' : ''),
                          (e.eVar46 = e.prop7 ? 'D=c7' : ''),
                          (e.eVar101 = 'D=g'),
                          (e.eVar147 = e.prop33 ? 'D=c33' : ''),
                          (e.list1 = e.prop7 ? 'D=c7' : ''),
                          (e.prop36 = e.list3 ? 'D=l3' : ''),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop2', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop3', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop4', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop5', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop9', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop16', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop18', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop35', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop19', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop24', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop32', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop33', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar4', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar5', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar8', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar9', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar10', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar11', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar13', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar32', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar50', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar101', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'eVar147', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'products', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'currencyCode', ',', 2)),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, 'channel', ',', 2)),
                          e.isTracked('list3') &&
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop36', ',', 2)),
                          (e.prop37 = e.eVar33 ? 'D=v33' : ''),
                          e.isTracked('eVar33') &&
                            (e.linkTrackVars = e.apl(e.linkTrackVars, 'prop37', ',', 2)),
                          (e.prop3 = e.getKPIName());
                      }
                    }),
                    (c.doPlugins = window.s_doPlugins),
                    c.registerPreTrackCallback(function (e) {
                      var t = window.pageDataTracker_preTrack;
                      t && 'function' == typeof t && t(e);
                    });
                  try {
                    c.loadModule('Media'),
                      (c.Media.autoTrack = !1),
                      (c.Media.trackWhilePlaying = !1),
                      (c.Media.playerName = 'elsevier video player'),
                      (c.Media.segmentByMilestones = !0),
                      (c.Media.trackMilestones = '50'),
                      (c.Media.trackUsingContextData = !0),
                      (c.Media.contextDataMapping = {
                        'a.media.name': 'eVar77,prop10',
                        'a.media.view': 'event105',
                        'a.media.timePlayed': 'event108',
                        'a.media.complete': 'event107',
                        'a.media.milestones': { 50: 'event106' },
                      }),
                      (c.Media.trackVars = 'prop17,eVar52,eVar1,eVar2,eVar3'),
                      (c.Media.trackEvents = 'event66');
                  } catch (s) {}
                  (c.isTracked = function (e) {
                    return -1 !== c.split(c.linkTrackVars, ',').indexOf(e);
                  }),
                    (c.productPrefix = function (e) {
                      if (window.pageData && pageData.page && pageData.page.productName) {
                        var t = pageData.page.productName.toLowerCase() + ':';
                        if (0 !== e.indexOf(t)) return t + e;
                      }
                      return e;
                    }),
                    (c.trackEventsList = function (e, t) {
                      try {
                        for (
                          var a = e.events ? e.events.split(',') : [],
                            n = e.linkTrackEvents ? e.linkTrackEvents.split(',') : [],
                            r = [],
                            i = 0;
                          i < a.length;
                          i++
                        )
                          0 <= a[i].indexOf(':')
                            ? (a[i] = a[i].substring(0, a[i].indexOf(':')))
                            : 0 <= a[i].indexOf('=') &&
                              (a[i] = a[i].substring(0, a[i].indexOf('='))),
                            e.linkType ? 0 <= n.indexOf(a[i]) && r.push(a[i]) : r.push(a[i]);
                        for (i = 0; i < r.length; i++)
                          0 == r[i].indexOf('event') &&
                            (r[i] = 'e' + r[i].substring(5, r[i].length));
                        (e[t] = r.join(',')),
                          (e.linkTrackVars = e.apl(e.linkTrackVars, t, ',', 2));
                      } catch (s) {
                        (e[t] = ''), _satellite.notify('s.trackEventsList: ' + s.message);
                      }
                    }),
                    (c.isDST = function (e) {
                      var t = !1;
                      try {
                        var a,
                          n,
                          r = c._tpDST[e.getFullYear()].split(/,/);
                        (a = new Date(r[0] + '/' + e.getFullYear())),
                          (n = new Date(r[1] + '/' + e.getFullYear())),
                          (a = new Date(a.getTime() + 420000)),
                          (n = new Date(n.getTime() + 360000)),
                          (t = a < e && e < n);
                      } catch (i) {
                        (t = !1),
                          _satellite.notify('s.isDST: Error checking for DST:' + i.message);
                      }
                      return t;
                    }),
                    (c.getUrlWithHashbang = function () {
                      var e =
                        document.location.protocol +
                        '//' +
                        document.location.hostname +
                        document.location.pathname;
                      try {
                        var t;
                        for (
                          str = document.location.href.toString(), _regex = /^[^\?]+/g;
                          null !== (t = _regex.exec(str));

                        )
                          for (
                            t.index === _regex.lastIndex && _regex.lastIndex++, groupIndex = 0;
                            groupIndex < t.length;
                            groupIndex++
                          )
                            switch (groupIndex) {
                              case 0:
                                e = t[groupIndex].toString();
                            }
                      } catch (a) {
                        _satellite.notify('s.getUrlWithHashbang: ' + a.message);
                      }
                      return e;
                    }),
                    (c.extractHostname = function (e) {
                      return (-1 < e.indexOf('://') ? e.split('/')[2] : e.split('/')[0])
                        .split(':')[0]
                        .split('?')[0];
                    }),
                    (c.extractRootDomain = function (e) {
                      var t = c.extractHostname(e),
                        a = t.split('.'),
                        n = a.length;
                      return (
                        2 < n &&
                          ((t = a[n - 2] + '.' + a[n - 1]),
                          2 == a[n - 2].length &&
                            2 == a[n - 1].length &&
                            (t = a[n - 3] + '.' + t)),
                        t
                      );
                    }),
                    (c.getCustomReportSuites = function () {
                      if ('jb' == c.prop2) {
                        var e = 'dev',
                          t = '';
                        if (window.pageData && pageData.page) {
                          var a = pageData.page.server || document.location.hostname,
                            n = c.Util.getQueryParam('code');
                          (e =
                            null === document.location.hostname.match(/\-(qa|test|stag)/g)
                              ? 'prod'
                              : 'dev'),
                            (t =
                              'cell' == a || 'www.cell.com' == a || 'cell-site' == n
                                ? 'cell'
                                : 'www.thelancet.com' == a || 'lancet-site' == n
                                ? 'the lancet'
                                : 'other journal branded sites');
                        }
                        return (c.channel = t), 'elsevier-ha-' + e + ',elsevier-global-' + e;
                      }
                      if (window.pageData && pageData.page && pageData.page.secondaryProductName) {
                        var r = [
                            'sd',
                            'md',
                            'ev',
                            'ez',
                            'pr',
                            'sv',
                            'ss',
                            'mi',
                            'jb',
                            'id',
                            'ih',
                            'hb',
                            'pv',
                            'ds',
                            'jc',
                            'ec',
                            'ck',
                            'pm',
                            'ed',
                            'si',
                            'qu',
                            'ex',
                            'ws',
                            'st',
                            'dr',
                            'ps',
                            'gf',
                            've',
                            'pp',
                            'em',
                            'kn',
                            'ci',
                            'eb',
                            'hm',
                            'es',
                            'sc',
                            'eaq',
                            'fi',
                            'co',
                            'el',
                            'evo',
                            'so',
                            'me',
                            'nco',
                            'h2',
                            'cpem',
                            'cl',
                            'as',
                            'prx',
                            'tox',
                            'mt',
                            'ad',
                            'bd',
                            'my',
                            'cp',
                            'er',
                            'cs',
                            'pe',
                            'tb',
                            'cw',
                            'am',
                            'c2',
                            'ns',
                            'rn',
                            'bp',
                            'at',
                            'ep',
                            'iq',
                            'path',
                            'rad',
                            'stat',
                            'gsna',
                            'mc',
                            'api',
                            'cc',
                            'pb',
                            'med',
                            'bpdg',
                            'bpeg',
                            'bpex',
                            'uca',
                            'hps',
                            'hcp',
                            'aude',
                            'sutd',
                            'rh',
                            'jpoc',
                            'chem',
                            'ezel',
                            'vlt',
                            'eoap',
                            'brxt',
                            'plum',
                            'ic',
                            'et',
                            'cin',
                            'rx2',
                            'oa',
                            'eman',
                            'elsa',
                            'jf',
                            'ji',
                            'exl',
                            'zoom',
                            'fc',
                          ],
                          i = [
                            ['SANDBOX', 'sandbox'],
                            ['MDY/mendeley', 'md'],
                            ['SD/science', 'sd'],
                            ['SC/scopus', 'sc'],
                            ['SVE/SciVal', 'sv'],
                            ['RA/researcher', 'pb'],
                            ['ECOM/elscom', 'ec'],
                            ['eman/eman', 'eman'],
                          ],
                          s = ((e = 'dev'), pageData.page.secondaryProductName.toLowerCase());
                        if (
                          (pageData.page.environment &&
                            (e =
                              'prod' == pageData.page.environment ||
                              'cert' == pageData.page.environment
                                ? pageData.page.environment
                                : 'dev'),
                          -1 < r.indexOf(s))
                        )
                          return (c.eVar107 = s), c.account + ',elsevier-' + s + '-' + e;
                        for (var o = 0; o < i.length; o++)
                          if (s == i[o][0].toLowerCase())
                            return (
                              (c.eVar107 = i[o][1]), c.account + ',elsevier-' + i[o][1] + '-' + e
                            );
                        return (c.eVar107 = s), c.account;
                      }
                      return c.account;
                    }),
                    (c.removeFromList = function (e, t, a, n) {
                      (t = t || ','), (n = n || ',');
                      for (var r = e.split(t), i = a.split(n), s = [], o = 0; o < i.length; o++) {
                        for (var c = !1, l = 0; l < r.length; l++)
                          if (i[o] == r[l]) {
                            c = !0;
                            break;
                          }
                        c || s.push(i[o]);
                      }
                      return s.join(n);
                    }),
                    (c.cleanUrlData = function (e) {
                      return e
                        ? (e = (e = (e = (e = (e = e.replace(/\+/g, ' ')).replace(
                            /[',"]/g,
                            ''
                          )).replace(/\t/g, '')).replace(/\n/g, '')).toLowerCase())
                        : '';
                    }),
                    (c.getProductNum = function () {
                      var e,
                        t = this,
                        a = new Date();
                      return (
                        (e = t.c_r('pn') ? parseInt(t.c_r('pn')) + 1 : 1),
                        a.setTime(a.getTime() + 2592000000),
                        t.c_w('pn', e, a),
                        e
                      );
                    }),
                    (c.getKPIName = function () {
                      for (
                        var e = {
                            rx: ['2', '3', '5', '6', '9', '12', '23', '25', '37', '39', '87'],
                            rx2: ['2', '3', '5', '6', '9', '12', '23', '25', '37', '39', '87'],
                            sd: ['2', '3', '5', '9', '23', '37'],
                            'knovel pi': ['2', '3', '5', '9', '19', '21', '22', '23', '37', '48'],
                            qu: ['3', '5', '19', '29', '30', '33', '39', '84'],
                            md: [
                              '5',
                              '39',
                              '79',
                              '23',
                              '2',
                              '9',
                              '3',
                              '37',
                              '6',
                              '19',
                              '25',
                              '48',
                              '172',
                              '21',
                              '22',
                            ],
                            sc: [
                              '5',
                              '39',
                              '79',
                              '23',
                              '2',
                              '9',
                              '3',
                              '37',
                              '6',
                              '19',
                              '25',
                              '48',
                              '172',
                              '21',
                              '22',
                            ],
                            sd: ['19', '21', '22', '6', '39', '25', '48'],
                            default: [
                              '3',
                              '37',
                              '6',
                              '5',
                              '39',
                              '19',
                              '25',
                              '48',
                              '9',
                              '12',
                              '23',
                              '2',
                              '21',
                              '22',
                            ],
                          },
                          t = {
                            2: 'registration',
                            3: 'search',
                            5: 'content view',
                            6: 'facet/filter search',
                            9: 'save alert',
                            12: 'save search',
                            19: 'file downloads',
                            21: 'cta impression',
                            22: 'cta click',
                            23: 'user login',
                            25: 'link out',
                            29: 'full-text html view',
                            30: 'pdf view',
                            33: 'abstract html view',
                            37: 'search results click',
                            39: 'content export',
                            48: 'add to my list',
                            79: 'content addition/import',
                            84: 'content detail/abstract window view',
                            87: 'in-page click',
                            172: 'profile self claim',
                          },
                          a = c.prop2 && e[c.prop2] ? e[c.prop2] : e['default'],
                          n = 0;
                        n < a.length;
                        n++
                      ) {
                        var r = a[n],
                          i = new RegExp('event' + r + '(,|$)', 'g');
                        if (t[r] && c.events.match(i)) return t[r];
                      }
                      return '';
                    }),
                    (c.apl = new Function(
                      'l',
                      'v',
                      'd',
                      'u',
                      "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"
                    )),
                    (c.getValOnce = new Function(
                      'v',
                      'c',
                      'e',
                      "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"
                    )),
                    (c.getTimeParting = new Function(
                      'h',
                      'z',
                      "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=M<30?'00':'30';D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"
                    )),
                    (c.getDaysSinceLastVisit = new Function(
                      'c',
                      "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"
                    )),
                    (c.getPreviousValue = new Function(
                      'v',
                      'c',
                      'el',
                      "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
                    )),
                    (c.split = new Function(
                      'l',
                      'd',
                      'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                    )),
                    (c.getPercentPageViewed = new Function(
                      'n',
                      "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a"
                    )),
                    (c.p_fo = new Function(
                      'n',
                      'var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}'
                    )),
                    (c.clickPast = new Function(
                      'scp',
                      'ct_ev',
                      'cp_ev',
                      'cpc',
                      "var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc){cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev;s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc,0,0);}}}"
                    )),
                    c.__ccucr ||
                      ((c.c_rr = c.c_r),
                      (c.__ccucr = !0),
                      (c.c_rspers = a),
                      (c.c_r = c.cookieRead = t)),
                    c.__ccucw || ((c.c_wr = c.c_w), (c.__ccucw = !0), (c.c_w = c.cookieWrite = n)),
                    (c.getFullReferringDomains = new Function(
                      "var s=this,dr=window.document.referrer,n=s.linkInternalFilters.split(',');if(dr){var r=dr.split('/')[2],l=n.length;for(i=0;i<=l;i++){if(r.indexOf(n[i])!=-1){r='';i=l+1;}}return r}"
                    ));
                },
              },
              libraryCode: {
                type: 'managed',
                accounts: {
                  staging: ['elsevier-sd-dev', 'elsevier-global-dev'],
                  production: ['elsevier-sd-prod', 'elsevier-global-prod'],
                  development: ['elsevier-sd-dev'],
                },
                useActivityMap: !0,
                scopeTrackerGlobally: !0,
              },
              trackerProperties: {
                charSet: 'UTF-8',
                currencyCode: '%Page - Currency Code%',
                trackingServer: 'metrics.elsevier.com',
                trackInlineStats: !0,
                trackDownloadLinks: !0,
                trackExternalLinks: !0,
                linkExternalFilters: [],
                linkInternalFilters: ['javascript:', 'mailto:', 'sciencedirect.com', 'tel:'],
                trackingServerSecure: 'smetrics.elsevier.com',
                linkDownloadFileTypes: [
                  'avi',
                  'css',
                  'csv',
                  'doc',
                  'docx',
                  'eps',
                  'exe',
                  'jpg',
                  'js',
                  'm4v',
                  'mov',
                  'mp3',
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
                  'xml',
                  'zip',
                ],
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP7b1fa4581fb94dd0961a981af9997765/',
          },
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/javascriptVariable.js': {
                name: 'javascript-variable',
                displayName: 'JavaScript Variable',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return n(window, e.path);
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
              'core/src/lib/dataElements/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, a) {
                  'use strict';
                  var s = a('@adobe/reactor-window'),
                    o = a('@adobe/reactor-query-string');
                  e.exports = function (e) {
                    var t = o.parse(s.location.search);
                    if (!e.caseInsensitive) return t[e.name];
                    for (
                      var a = e.name.toLowerCase(), n = Object.keys(t), r = 0;
                      r < n.length;
                      r++
                    ) {
                      var i = n[r];
                      if (i.toLowerCase() === a) return t[i];
                    }
                  };
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (e, t, a, i) {
                  'use strict';
                  var s = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite.track = function (e, t) {
                      e = e.trim();
                      var a = s[e];
                      if (a) {
                        var n = { identifier: e, detail: t };
                        a.forEach(function (e) {
                          e(n);
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
                      var a = s[e.identifier];
                      a || (a = s[e.identifier] = []), a.push(t);
                    });
                },
              },
              'core/src/lib/events/click.js': {
                name: 'click',
                displayName: 'Click',
                script: function (e, t, a) {
                  'use strict';
                  var i = a('@adobe/reactor-window'),
                    s = a('./helpers/createBubbly')(),
                    o = new (a('./helpers/weakMap'))(),
                    c = function (e) {
                      for (; e; ) {
                        var t = e.tagName;
                        if (t && 'a' === t.toLowerCase()) {
                          var a = e.getAttribute('href'),
                            n = e.getAttribute('target');
                          return a &&
                            (!n || '_self' === n || ('_top' === n && i.top === i) || n === i.name)
                            ? e
                            : void 0;
                        }
                        e = e.parentNode;
                      }
                    };
                  document.addEventListener('click', s.evaluateEvent, !0),
                    (e.exports = function (n, r) {
                      s.addListener(n, function (e) {
                        var t = e.nativeEvent;
                        if (!t.s_fe) {
                          if (n.anchorDelay && !o.has(t)) {
                            var a = c(t.target);
                            a &&
                              (t.preventDefault(),
                              setTimeout(function () {
                                i.location = a.href;
                              }, n.anchorDelay)),
                              o.set(t, !0);
                          }
                          r(e);
                        }
                      });
                    }),
                    (e.exports.__reset = s.__reset);
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, a, i) {
                  'use strict';
                  var s,
                    n,
                    r,
                    o,
                    c = a('@adobe/reactor-document'),
                    l = a('@adobe/reactor-promise'),
                    u = a('./helpers/decorateCode'),
                    d = a('./helpers/loadCodeSequentially'),
                    p = a('../../../node_modules/postscribe/dist/postscribe'),
                    f = a('./helpers/unescapeHtmlCode'),
                    g =
                      ((n = function (e) {
                        p(c.body, e, {
                          beforeWriteToken: function (t) {
                            var e = t.tagName && t.tagName.toLowerCase();
                            return (
                              s && 'script' === e && (t.attrs.nonce = s),
                              ('script' !== e && 'style' !== e) ||
                                (Object.keys(t.attrs || {}).forEach(function (e) {
                                  t.attrs[e] = f(t.attrs[e]);
                                }),
                                t.src && (t.src = f(t.src))),
                              t
                            );
                          },
                          error: function (e) {
                            i.logger.error(e.msg);
                          },
                        });
                      }),
                      (r = []),
                      (o = function () {
                        if (c.body) for (; r.length; ) n(r.shift());
                        else setTimeout(o, 20);
                      }),
                      function (e) {
                        r.push(e), o();
                      }),
                    v = (function () {
                      if (c.currentScript) return c.currentScript.async;
                      for (var e = c.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(a.src)) return a.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var a;
                    s = i.getExtensionSettings().cspNonce;
                    var n = { settings: e, event: t },
                      r = n.settings.source;
                    if (r)
                      return n.settings.isExternal
                        ? d(r).then(function (e) {
                            return e ? ((a = u(n, e)), g(a.code), a.promise) : l.resolve();
                          })
                        : ((a = u(n, r)),
                          v || 'loading' !== c.readyState
                            ? g(a.code)
                            : c.write && !1 === i.propertySettings.ruleComponentSequencingEnabled
                            ? c.write(a.code)
                            : g(a.code),
                          a.promise);
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    n.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    for (var a = t.split('.'), n = e, r = 0, i = a.length; r < i; r++) {
                      if (null == n) return undefined;
                      n = n[a[r]];
                    }
                    return n;
                  };
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./weakMap'),
                    f = a('./matchesProperties'),
                    g = a('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      p = new n(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !p.has(t)) {
                            for (var a = t.target, n = !1; a; ) {
                              for (var r = !1, i = !1, s = 0; s < d.length; s++) {
                                var o = d[s],
                                  c = o.settings.elementSelector,
                                  l = o.settings.elementProperties;
                                if (
                                  (!1 !== o.settings.bubbleFireIfChildFired || !n) &&
                                  (a === t.target || !1 !== o.settings.bubbleFireIfParent) &&
                                  (a === t.target || c || (l && Object.keys(l).length)) &&
                                  (!c || g(a, c)) &&
                                  (!l || f(a, l))
                                ) {
                                  var u = {};
                                  e
                                    ? Object.keys(t).forEach(function (e) {
                                        u[e] = t[e];
                                      })
                                    : (u.nativeEvent = t),
                                    (u.element = a),
                                    (u.target = t.target),
                                    !1 !== o.callback(u) &&
                                      ((i = !0), o.settings.bubbleStop && (r = !0));
                                }
                              }
                              if (r) break;
                              i && (n = !0), (a = a.parentNode);
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
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-window').WeakMap;
                  if (void 0 === n) {
                    var r = Object.defineProperty,
                      i = Date.now() % 1000000000;
                    (n = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + i++ + '__';
                    }).prototype = {
                      set: function (e, t) {
                        var a = e[this.name];
                        return (
                          a && a[0] === e
                            ? (a[1] = t)
                            : r(e, this.name, { value: [e, t], writable: !0 }),
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
                  e.exports = n;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (e, t, a) {
                  'use strict';
                  var r = a('./../../helpers/textMatch'),
                    i = function (e, t) {
                      return '@text' === t || 'innerText' === t
                        ? e.textContent || e.innerText
                        : t in e
                        ? e[t]
                        : e.getAttribute
                        ? e.getAttribute(t)
                        : void 0;
                    };
                  e.exports = function (n, e) {
                    return (
                      !e ||
                      e.every(function (e) {
                        var t = i(n, e.name),
                          a = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return r(t, a);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, t, a, r) {
                  'use strict';
                  e.exports = function (e, t) {
                    var a = e.matches || e.msMatchesSelector;
                    if (a)
                      try {
                        return a.call(e, t);
                      } catch (n) {
                        return (
                          r.logger.warn(
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
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./decorators/decorateGlobalJavaScriptCode'),
                    r = a('./decorators/decorateNonGlobalJavaScriptCode'),
                    i = {
                      javascript: function (e, t) {
                        return e.settings.global ? n(e, t) : r(e, t);
                      },
                      html: a('./decorators/decorateHtmlCode'),
                    };
                  e.exports = function (e, t) {
                    return i[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-promise'),
                    r = a('./getSourceByUrl'),
                    i = n.resolve();
                  e.exports = function (t) {
                    var e = new n(function (a) {
                      var e = r(t);
                      n.all([e, i]).then(function (e) {
                        var t = e[0];
                        a(t);
                      });
                    });
                    return (i = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (a, n) {
                  !(function r (e, t) {
                    'object' == typeof n && 'object' == typeof a
                      ? (a.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof n
                      ? (n.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (a) {
                      function n (e) {
                        if (r[e]) return r[e].exports;
                        var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                        return a[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports;
                      }
                      var r = {};
                      return (n.m = a), (n.c = r), (n.p = ''), n(0);
                    })([
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var r = n(a(1));
                        e.exports = r['default'];
                      },
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var a in e)
                              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                          return (t['default'] = e), t;
                        }
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function l () {}
                        function u () {
                          var e = c.shift();
                          if (e) {
                            var t = s.last(e);
                            t.afterDequeue(),
                              (e.stream = i.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function i (e, t, n) {
                          function r (e) {
                            (e = n.beforeWrite(e)), v.write(e), n.afterWrite(e);
                          }
                          ((v = new f['default'](e, n)).id = g++),
                            (v.name = n.name || v.id),
                            (d.streams[v.name] = v);
                          var a = e.ownerDocument,
                            i = {
                              close: a.close,
                              open: a.open,
                              write: a.write,
                              writeln: a.writeln,
                            };
                          p(a, {
                            close: l,
                            open: l,
                            write: function o () {
                              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                              return r(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                              return r(t.join('') + '\n');
                            },
                          });
                          var s = v.win.onerror || l;
                          return (
                            (v.win.onerror = function (e, t, a) {
                              n.error({ msg: e + ' - ' + t + ': ' + a }),
                                s.apply(v.win, [e, t, a]);
                            }),
                            v.write(t, function () {
                              p(a, i), (v.win.onerror = s), n.done(), (v = null), u();
                            }),
                            v
                          );
                        }
                        function d (e, t, a) {
                          if (s.isFunction(a)) a = { done: a };
                          else if ('clear' === a) return (c = []), (v = null), void (g = 0);
                          a = s.defaults(a, o);
                          var n = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            t,
                            a,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function r () {
                                n.stream ? n.stream.abort() : (n[1] = l);
                              },
                            }),
                            a.beforeEnqueue(n),
                            c.push(n),
                            v || u(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var p =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                          };
                        t['default'] = d;
                        var f = r(a(2)),
                          s = n(a(4)),
                          o = {
                            afterAsync: l,
                            afterDequeue: l,
                            afterStreamStart: l,
                            afterWrite: l,
                            autoFix: !0,
                            beforeEnqueue: l,
                            beforeWriteToken: function m (e) {
                              return e;
                            },
                            beforeWrite: function h (e) {
                              return e;
                            },
                            done: l,
                            error: function b (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          g = 0,
                          c = [],
                          v = null;
                        p(d, { streams: {}, queue: c, WriteStream: f['default'] });
                      },
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var a in e)
                              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                          return (t['default'] = e), t;
                        }
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function k (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function y (e, t) {
                          var a = V + t,
                            n = e.getAttribute(a);
                          return T.existy(n) ? String(n) : n;
                        }
                        function D (e, t, a) {
                          var n = 2 < arguments.length && a !== undefined ? arguments[2] : null,
                            r = V + t;
                          T.existy(n) && '' !== n ? e.setAttribute(r, n) : e.removeAttribute(r);
                        }
                        t.__esModule = !0;
                        var C =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a)
                                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                            },
                          w = r(a(3)),
                          T = n(a(4)),
                          _ = !1,
                          V = 'data-ps-',
                          P = 'ps-style',
                          S = 'ps-script',
                          i = (function () {
                            function n (e, t) {
                              var a = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              k(this, n),
                                (this.root = e),
                                (this.options = a),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new w['default']('', { autoFix: a.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                D(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (n.prototype.write = function a () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  T.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (n.prototype._callFunction = function r (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (n.prototype._writeImpl = function i (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, a = void 0, n = void 0, r = [];
                                  (t = this.parser.readToken()) &&
                                  !(a = T.isScript(t)) &&
                                  !(n = T.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && r.push(t);
                                0 < r.length && this._writeStaticTokens(r),
                                  a && this._handleScriptToken(t),
                                  n && this._handleStyleToken(t);
                              }),
                              (n.prototype._writeStaticTokens = function s (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    _ && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    _ && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (n.prototype._buildChunk = function u (e) {
                                for (
                                  var t = this.actuals.length,
                                    a = [],
                                    n = [],
                                    r = [],
                                    i = e.length,
                                    s = 0;
                                  s < i;
                                  s++
                                ) {
                                  var o = e[s],
                                    c = o.toString();
                                  if ((a.push(c), o.attrs)) {
                                    if (!/^noscript$/i.test(o.tagName)) {
                                      var l = t++;
                                      n.push(c.replace(/(\/?>)/, ' ' + V + 'id=' + l + ' $1')),
                                        o.attrs.id !== S &&
                                          o.attrs.id !== P &&
                                          r.push(
                                            'atomicTag' === o.type
                                              ? ''
                                              : '<' +
                                                  o.tagName +
                                                  ' ' +
                                                  V +
                                                  'proxyof=' +
                                                  l +
                                                  (o.unary ? ' />' : '>')
                                          );
                                    }
                                  } else n.push(c), r.push('endTag' === o.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: a.join(''),
                                  actual: n.join(''),
                                  proxy: r.join(''),
                                };
                              }),
                              (n.prototype._walkChunk = function o () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  T.existy((e = t.shift()));

                                ) {
                                  var a = 1 === e.nodeType;
                                  if (!a || !y(e, 'proxyof')) {
                                    a && D((this.actuals[y(e, 'id')] = e), 'id');
                                    var n = e.parentNode && y(e.parentNode, 'proxyof');
                                    n && this.actuals[n].appendChild(e);
                                  }
                                  t.unshift.apply(t, T.toArray(e.childNodes));
                                }
                              }),
                              (n.prototype._handleScriptToken = function c (e) {
                                var t = this,
                                  a = this.parser.clear();
                                a && this.writeQueue.unshift(a),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      t._onScriptDone(e);
                                    }));
                              }),
                              (n.prototype._handleStyleToken = function l (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (n.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, P),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (n.prototype._buildStyle = function t (e) {
                                var a = this.doc.createElement(e.tagName);
                                return (
                                  a.setAttribute('type', e.type),
                                  T.eachKey(e.attrs, function (e, t) {
                                    a.setAttribute(e, t);
                                  }),
                                  a
                                );
                              }),
                              (n.prototype._insertCursor = function p (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var a = this.doc.getElementById(t);
                                a && a.parentNode.replaceChild(e, a);
                              }),
                              (n.prototype._onScriptStart = function f (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (n.prototype._onScriptDone = function g (e) {
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
                              (n.prototype._writeScriptToken = function v (e, t) {
                                var a = this._buildScript(e),
                                  n = this._shouldRelease(a),
                                  r = this.options.afterAsync;
                                e.src &&
                                  ((a.src = e.src),
                                  this._scriptLoadHandler(
                                    a,
                                    n
                                      ? r
                                      : function () {
                                          t(), r();
                                        }
                                  ));
                                try {
                                  this._insertCursor(a, S), (a.src && !n) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (n.prototype._buildScript = function m (e) {
                                var a = this.doc.createElement(e.tagName);
                                return (
                                  T.eachKey(e.attrs, function (e, t) {
                                    a.setAttribute(e, t);
                                  }),
                                  e.content && (a.text = e.content),
                                  a
                                );
                              }),
                              (n.prototype._scriptLoadHandler = function h (t, a) {
                                function n () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function r () {
                                  n(), null != a && a(), (a = null);
                                }
                                function i (e) {
                                  n(), s(e), null != a && a(), (a = null);
                                }
                                function e (e, t) {
                                  var a = e['on' + t];
                                  null != a && (e['_on' + t] = a);
                                }
                                var s = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  C(t, {
                                    onload: function o () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          i({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      r();
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
                                    onreadystatechange: function l () {
                                      /^(loaded|complete)$/.test(t.readyState) && r();
                                    },
                                  });
                              }),
                              (n.prototype._shouldRelease = function b (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              n
                            );
                          })();
                        t['default'] = i;
                      },
                      function (a) {
                        !(function n (e, t) {
                          a.exports = t();
                        })(0, function () {
                          return (function (a) {
                            function n (e) {
                              if (r[e]) return r[e].exports;
                              var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                a[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports
                              );
                            }
                            var r = {};
                            return (n.m = a), (n.c = r), (n.p = ''), n(0);
                          })([
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var r = n(a(1));
                              e.exports = r['default'];
                            },
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function r (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var a in e)
                                    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                                return (t['default'] = e), t;
                              }
                              function u (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var d = r(a(2)),
                                p = r(a(3)),
                                f = n(a(6)),
                                i = a(5),
                                g = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                s = (function () {
                                  function c (e, t) {
                                    var a = this,
                                      n =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      r =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, c), (this.stream = n);
                                    var i = !1,
                                      s = {};
                                    for (var o in d)
                                      d.hasOwnProperty(o) &&
                                        (r.autoFix && (s[o + 'Fix'] = !0),
                                        (i = i || s[o + 'Fix']));
                                    i
                                      ? ((this._readToken = (0, f['default'])(
                                          this,
                                          s,
                                          function () {
                                            return a._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, f['default'])(this, s, function () {
                                          return a._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function a (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function n () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function r () {
                                      for (var e in g)
                                        if (g.hasOwnProperty(e) && g[e].test(this.stream)) {
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
                                    (c.prototype.readTokens = function s (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (c.prototype.clear = function o () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function l () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var o in (((t['default'] = s).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (s.escapeAttributes = function (e) {
                                var t = {};
                                for (var a in e)
                                  e.hasOwnProperty(a) && (t[a] = (0, i.escapeQuotes)(e[a], null));
                                return t;
                              }),
                              (s.supports = d)))
                                d.hasOwnProperty(o) &&
                                  (s.browserHasFlaw = s.browserHasFlaw || (!d[o] && o));
                            },
                            function (e, t) {
                              'use strict';
                              var a = !(t.__esModule = !0),
                                n = !1,
                                r = window.document.createElement('div');
                              try {
                                var i = '<P><I></P></I>';
                                (r.innerHTML = i), (t.tagSoup = a = r.innerHTML !== i);
                              } catch (s) {
                                t.tagSoup = a = !1;
                              }
                              try {
                                (r.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = n = 2 === r.childNodes.length);
                              } catch (s) {
                                t.selfClose = n = !1;
                              }
                              (r = null), (t.tagSoup = a), (t.selfClose = n);
                            },
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function r (e) {
                                var t = e.indexOf('<');
                                return new u.CharsToken(0 <= t ? t : e.length);
                              }
                              function i (e) {
                                var s, o, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var a =
                                      ((s = {}),
                                      (o = {}),
                                      (c = t[2]),
                                      t[2].replace(d.attr, function (e, t, a, n, r, i) {
                                        a || n || r || i
                                          ? arguments[5]
                                            ? ((s[arguments[5]] = ''), (o[arguments[5]] = !0))
                                            : (s[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(t) && t) ||
                                                '')
                                          : (s[t] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new u.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          s,
                                          o,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === a ? 'undefined' : l(a)))
                                      return a.v;
                                  }
                                }
                              }
                              function s (e) {
                                var t = i(e);
                                if (t) {
                                  var a = e.slice(t.length);
                                  if (a.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var n = a.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (n)
                                      return new u.AtomicTagToken(
                                        t.tagName,
                                        n[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        n[1]
                                      );
                                  }
                                }
                              }
                              function o (e) {
                                var t = e.match(d.endTag);
                                if (t) return new u.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
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
                                    };
                              (t.comment = n),
                                (t.chars = r),
                                (t.startTag = i),
                                (t.atomicTag = s),
                                (t.endTag = o);
                              var u = a(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, a) {
                              'use strict';
                              function o (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var c = a(5),
                                n = (t.Token = function n (e, t) {
                                  o(this, n), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                r =
                                  ((t.CommentToken = (function () {
                                    function a (e, t) {
                                      o(this, a),
                                        (this.type = 'comment'),
                                        (this.length = t || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (a.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      a
                                    );
                                  })()),
                                  (t.CharsToken = (function () {
                                    function t (e) {
                                      o(this, t),
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
                                    function i (e, t, a, n, r) {
                                      o(this, i),
                                        (this.type = e),
                                        (this.length = a),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = n),
                                        (this.booleanAttrs = r),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (i.formatTag = function s (e, t) {
                                        var a =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          n = '<' + e.tagName;
                                        for (var r in e.attrs)
                                          if (e.attrs.hasOwnProperty(r)) {
                                            n += ' ' + r;
                                            var i = e.attrs[r];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[r]) ||
                                              (n += '="' + (0, c.escapeQuotes)(i) + '"');
                                          }
                                        return (
                                          e.rest && (n += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (n += '/>') : (n += '>'),
                                          a !== undefined &&
                                            null !== a &&
                                            (n += a + '</' + e.tagName + '>'),
                                          n
                                        );
                                      }),
                                      i
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function s (e, t, a, n, r, i) {
                                  o(this, s),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = a),
                                    (this.booleanAttrs = n),
                                    (this.html5Unary = !1),
                                    (this.unary = r),
                                    (this.rest = i);
                                }
                                return (
                                  (s.prototype.toString = function e () {
                                    return r.formatTag(this);
                                  }),
                                  s
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function i (e, t, a, n, r) {
                                    o(this, i),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = a),
                                      (this.booleanAttrs = n),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = r);
                                  }
                                  return (
                                    (i.prototype.toString = function e () {
                                      return r.formatTag(this, this.content);
                                    }),
                                    i
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function a (e, t) {
                                    o(this, a),
                                      (this.type = 'endTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (a.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    a
                                  );
                                })());
                            },
                            function (e, t) {
                              'use strict';
                              function a (e, t) {
                                var a =
                                  1 < arguments.length && t !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, t) {
                                      return /\\/.test(t) ? t + '"' : t + '\\"';
                                    })
                                  : a;
                              }
                              (t.__esModule = !0), (t.escapeQuotes = a);
                            },
                            function (e, t) {
                              'use strict';
                              function l (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = n.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function u (e, t) {
                                var a = e.stream,
                                  n = l(t());
                                return (e.stream = a), n;
                              }
                              function d (e, t) {
                                var a = t.pop();
                                e.prepend('</' + a.tagName + '>');
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
                                    for (var t, a = 0; (t = this[a]); a++)
                                      if (t.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function a (a, n, t) {
                                function r () {
                                  var e = u(a, t);
                                  e && s[e.type] && s[e.type](e);
                                }
                                var i = p(),
                                  s = {
                                    startTag: function o (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (a.prepend('<TBODY>'), r())
                                        : n.selfCloseFix && f.test(t) && i.containsTagName(t)
                                        ? i.lastTagNameEq(t)
                                          ? d(a, i)
                                          : (a.prepend('</' + e.tagName + '>'), r())
                                        : e.unary || i.push(e);
                                    },
                                    endTag: function c (e) {
                                      i.last()
                                        ? n.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                          ? d(a, i)
                                          : i.pop()
                                        : n.tagSoupFix && (t(), r());
                                    },
                                  };
                                return function e () {
                                  return r(), l(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = a);
                              var n = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                f = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function n (e) {
                          return null != e;
                        }
                        function a (e) {
                          return 'function' == typeof e;
                        }
                        function r (e, t, a) {
                          var n = void 0,
                            r = (e && e.length) || 0;
                          for (n = 0; n < r; n++) t.call(a, e[n], n);
                        }
                        function i (e, t, a) {
                          for (var n in e) e.hasOwnProperty(n) && t.call(a, n, e[n]);
                        }
                        function s (a, e) {
                          return (
                            (a = a || {}),
                            i(e, function (e, t) {
                              n(a[e]) || (a[e] = t);
                            }),
                            a
                          );
                        }
                        function o (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (n) {
                            var t =
                              ((a = []),
                              r(e, function (e) {
                                a.push(e);
                              }),
                              { v: a });
                            if ('object' === (void 0 === t ? 'undefined' : p(t))) return t.v;
                          }
                          var a;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function l (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function u (e) {
                          return l(e, 'script');
                        }
                        function d (e) {
                          return l(e, 'style');
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
                        (t.existy = n),
                          (t.isFunction = a),
                          (t.each = r),
                          (t.eachKey = i),
                          (t.defaults = s),
                          (t.toArray = o),
                          (t.last = c),
                          (t.isTag = l),
                          (t.isScript = u),
                          (t.isStyle = d);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/unescapeHtmlCode.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document').createElement('div');
                  e.exports = function (e) {
                    return (n.innerHTML = e), n.textContent || n.innerText || e;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-promise');
                  e.exports = function (e, t) {
                    return { code: '<script>\n' + t + '\n</script>', promise: n.resolve() };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                script: function (e, t, a) {
                  'use strict';
                  var i = a('@adobe/reactor-promise'),
                    s = 0;
                  e.exports = function (n, e) {
                    var r = '_runScript' + ++s,
                      t = new i(function (e, a) {
                        _satellite[r] = function (t) {
                          delete _satellite[r],
                            new i(function (e) {
                              e(t.call(n.event.element, n.event, n.event.target, i));
                            }).then(e, a);
                        };
                      });
                    return {
                      code:
                        '<script>_satellite["' +
                        r +
                        '"](function(event, target, Promise) {\n' +
                        e +
                        '\n});</script>',
                      promise: t,
                    };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateHtmlCode.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var r = a('@adobe/reactor-promise'),
                    i = 0,
                    s = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite._onCustomCodeSuccess = function (e) {
                      var t = s[e];
                      t && (delete s[e], t.resolve());
                    }),
                    (window._satellite._onCustomCodeFailure = function (e) {
                      var t = s[e];
                      t && (delete s[e], t.reject());
                    });
                  var o = function (e) {
                      return -1 !== e.indexOf('${reactorCallbackId}');
                    },
                    c = function (e, t) {
                      return e.replace(/\${reactorCallbackId}/g, t);
                    },
                    l = function (e) {
                      return e.settings.isExternal;
                    };
                  e.exports = function (e, t) {
                    var a;
                    return (
                      l(e) && (t = n.replaceTokens(t, e.event)),
                      o(t)
                        ? ((a = new r(function (e, t) {
                            s[String(i)] = { resolve: e, reject: t };
                          })),
                          (t = c(t, i)),
                          (i += 1))
                        : (a = r.resolve()),
                      { code: t, promise: a }
                    );
                  };
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-load-script'),
                    r = a('@adobe/reactor-promise'),
                    i = {},
                    s = {},
                    o = function (e) {
                      return s[e] || (s[e] = n(e)), s[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    i[e] = t;
                  }),
                    (e.exports = function (t) {
                      return i[t]
                        ? r.resolve(i[t])
                        : new r(function (e) {
                            o(t).then(
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
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, a) {
                  const $___old_866c436f2324561c = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_866c436f2324561c)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var n = a('@adobe/reactor-window'),
                        r = a('@adobe/reactor-document'),
                        i = -1 !== n.navigator.appVersion.indexOf('MSIE 10'),
                        s = 'WINDOW_LOADED',
                        o = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        l = [c, o, s],
                        u = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      l.forEach(function (e) {
                        d[e] = [];
                      });
                      var p = function (e, t) {
                          l.slice(0, g(e) + 1).forEach(function (e) {
                            v(t, e);
                          });
                        },
                        f = function () {
                          return 'complete' === r.readyState
                            ? s
                            : 'interactive' === r.readyState
                            ? i
                              ? null
                              : o
                            : void 0;
                        },
                        g = function (e) {
                          return l.indexOf(e);
                        },
                        v = function (t, e) {
                          d[e].forEach(function (e) {
                            m(t, e);
                          }),
                            (d[e] = []);
                        },
                        m = function (e, t) {
                          var a = t.trigger,
                            n = t.syntheticEventFn;
                          a(n ? n(e) : null);
                        };
                      (n._satellite = n._satellite || {}),
                        (n._satellite.pageBottom = p.bind(null, c)),
                        r.addEventListener('DOMContentLoaded', p.bind(null, o), !0),
                        n.addEventListener('load', p.bind(null, s), !0),
                        n.setTimeout(function () {
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
                            d[o].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[s].push({ trigger: e, syntheticEventFn: u.bind(null, n) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_866c436f2324561c)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_866c436f2324561c
                      ));
                  }
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
          },
          'adobe-mcid': {
            displayName: 'Experience Cloud ID Service',
            modules: {
              'adobe-mcid/src/lib/sharedModules/mcidInstance.js': {
                script: function (e, t, a, g) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    r = a('../codeLibrary/VisitorAPI'),
                    v = a('../../view/utils/timeUnits'),
                    m = function (e) {
                      return e.reduce(function (e, t) {
                        var a = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value;
                        return (e[t.name] = a), e;
                      }, {});
                    },
                    i = function (e) {
                      var t = g.getExtensionSettings();
                      if ('string' != typeof t.orgId)
                        throw new TypeError('Org ID is not a string.');
                      var a = m(t.variables || []),
                        n = t.doesOptInApply;
                      n &&
                        ('boolean' == typeof n
                          ? (a.doesOptInApply = n)
                          : t.optInCallback && (a.doesOptInApply = t.optInCallback));
                      var r = t.isOptInStorageEnabled;
                      r && (a.isOptInStorageEnabled = r);
                      var i = t.optInCookieDomain;
                      i && (a.optInCookieDomain = i);
                      var s = t.optInStorageExpiry;
                      if (s) {
                        var o = t.timeUnit;
                        if (o && v[o]) {
                          var c = s * v[o];
                          a.optInStorageExpiry = c;
                        }
                      } else !0 === r && (a.optInStorageExpiry = 33696000);
                      var l = t.previousPermissions;
                      l && (a.previousPermissions = l);
                      var u = t.preOptInApprovals;
                      if (u) a.preOptInApprovals = u;
                      else {
                        var d = t.preOptInApprovalInput;
                        d && (a.preOptInApprovals = d);
                      }
                      var p = t.isIabContext;
                      p && (a.isIabContext = p);
                      var f = e.getInstance(t.orgId, a);
                      return (
                        g.logger.info('Created instance using orgId: "' + t.orgId + '"'),
                        g.logger.info('Set variables: ' + JSON.stringify(a)),
                        f.getMarketingCloudVisitorID(function (e) {
                          g.logger.info('Obtained Marketing Cloud Visitor Id: ' + e);
                        }, !0),
                        f
                      );
                    },
                    s = function (t) {
                      return (g.getExtensionSettings().pathExclusions || []).some(function (e) {
                        return e.valueIsRegex ? new RegExp(e.value, 'i').test(t) : e.value === t;
                      });
                    },
                    o = null;
                  (_satellite.getVisitorId = function () {
                    return o;
                  }),
                    s(n.location.pathname)
                      ? g.logger.warn(
                          'MCID library not loaded. One of the path exclusions matches the current path.'
                        )
                      : (o = i(r)),
                    (e.exports = o);
                },
                name: 'mcid-instance',
                shared: !0,
              },
              'adobe-mcid/src/lib/codeLibrary/VisitorAPI.js': {
                script: function (e) {
                  e.exports =
                    ((function () {
                      'use strict';
                      function B (e) {
                        return (B =
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
                      function e (e, t, a) {
                        return (
                          t in e
                            ? Object.defineProperty(e, t, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (e[t] = a),
                          e
                        );
                      }
                      function t () {
                        return {
                          callbacks: {},
                          add: function (e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var a = this.callbacks[e].push(t) - 1,
                              n = this;
                            return function () {
                              n.callbacks[e].splice(a, 1);
                            };
                          },
                          execute: function (e, t) {
                            if (this.callbacks[e]) {
                              t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                              try {
                                for (; this.callbacks[e].length; ) {
                                  var a = this.callbacks[e].shift();
                                  'function' == typeof a
                                    ? a.apply(null, t)
                                    : a instanceof Array && a[1].apply(a[0], t);
                                }
                                delete this.callbacks[e];
                              } catch (e) {}
                            }
                          },
                          executeAll: function (a, e) {
                            (e || (a && !X.isObjectEmpty(a))) &&
                              Object.keys(this.callbacks).forEach(function (e) {
                                var t = void 0 !== a[e] ? a[e] : '';
                                this.execute(e, t);
                              }, this);
                          },
                          hasCallbacks: function () {
                            return Boolean(Object.keys(this.callbacks).length);
                          },
                        };
                      }
                      function l (e, t, a) {
                        var n = null == e ? void 0 : e[t];
                        return void 0 === n ? a : n;
                      }
                      function r (e) {
                        for (var t = /^\d+$/, a = 0, n = e.length; a < n; a++)
                          if (!t.test(e[a])) return !1;
                        return !0;
                      }
                      function i (e, t) {
                        for (; e.length < t.length; ) e.push('0');
                        for (; t.length < e.length; ) t.push('0');
                      }
                      function s (e, t) {
                        for (var a = 0; a < e.length; a++) {
                          var n = parseInt(e[a], 10),
                            r = parseInt(t[a], 10);
                          if (r < n) return 1;
                          if (n < r) return -1;
                        }
                        return 0;
                      }
                      function a (e, t) {
                        if (e === t) return 0;
                        var a = e.toString().split('.'),
                          n = t.toString().split('.');
                        return r(a.concat(n)) ? (i(a, n), s(a, n)) : NaN;
                      }
                      function o (e) {
                        return e === Object(e) && 0 === Object.keys(e).length;
                      }
                      function c (e) {
                        return 'function' == typeof e || (e instanceof Array && e.length);
                      }
                      function n (e, t) {
                        var a = 0 < arguments.length && void 0 !== e ? arguments[0] : '',
                          n =
                            1 < arguments.length && void 0 !== t
                              ? arguments[1]
                              : function () {
                                  return !0;
                                };
                        (this.log = pe('log', a, n)),
                          (this.warn = pe('warn', a, n)),
                          (this.error = pe('error', a, n));
                      }
                      function L (e, t) {
                        var r = (0 < arguments.length && void 0 !== e ? arguments[0] : {})
                            .cookieName,
                          i = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies;
                        if (!r || !i) return { get: Pe, set: Pe, remove: Pe };
                        var s = {
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
                            t = t || {};
                            var a = s.get(),
                              n = Object.assign(a, e);
                            i.set(r, JSON.stringify(n), {
                              domain: t.optInCookieDomain || '',
                              cookieLifetime: t.optInStorageExpiry || 34190000,
                              expires: !0,
                            });
                          },
                        };
                        return s;
                      }
                      function u (e) {
                        (this.name = this.constructor.name),
                          (this.message = e),
                          'function' == typeof Error.captureStackTrace
                            ? Error.captureStackTrace(this, this.constructor)
                            : (this.stack = new Error(e).stack);
                      }
                      function d (e, t) {
                        function a (e, t) {
                          var a = he(e);
                          return a.length
                            ? a.every(function (e) {
                                return !!t[e];
                              })
                            : be(t);
                        }
                        function n () {
                          O(E),
                            A(ne.COMPLETE),
                            C(D.status, D.permissions),
                            l &&
                              y.set(D.permissions, {
                                optInCookieDomain: u,
                                optInStorageExpiry: d,
                              }),
                            w.execute(Le);
                        }
                        function r (a) {
                          return function (e, t) {
                            if (!ke(e))
                              throw new Error(
                                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
                              );
                            return A(ne.CHANGED), Object.assign(E, ye(he(e), a)), t || n(), D;
                          };
                        }
                        var i = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                          s = i.doesOptInApply,
                          o = i.previousPermissions,
                          c = i.preOptInApprovals,
                          l = i.isOptInStorageEnabled,
                          u = i.optInCookieDomain,
                          d = i.optInStorageExpiry,
                          p = i.isIabContext,
                          f = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                          g = Se(o);
                        Ie(g, 'Invalid `previousPermissions`!'),
                          Ie(c, 'Invalid `preOptInApprovals`!');
                        var v,
                          m,
                          h,
                          b,
                          k,
                          y = L({ cookieName: 'adobeujs-optin' }, { cookies: f }),
                          D = this,
                          C = H(D),
                          w = le(),
                          T = we(g),
                          _ = we(c),
                          V = l ? y.get() : {},
                          P = {},
                          S = ((k = V), Te(T) || (k && Te(k)) ? ne.COMPLETE : ne.PENDING),
                          I =
                            ((v = _),
                            (m = T),
                            (h = V),
                            (b = ye(ce, !s)),
                            s ? Object.assign({}, b, v, m, h) : b),
                          E = De(I),
                          A = function (e) {
                            return (S = e);
                          },
                          O = function (e) {
                            return (I = e);
                          };
                        (D.deny = r(!1)),
                          (D.approve = r(!0)),
                          (D.denyAll = D.deny.bind(D, ce)),
                          (D.approveAll = D.approve.bind(D, ce)),
                          (D.isApproved = function (e) {
                            return a(e, D.permissions);
                          }),
                          (D.isPreApproved = function (e) {
                            return a(e, _);
                          }),
                          (D.fetchPermissions = function (e, t) {
                            var a = 1 < arguments.length && void 0 !== t && arguments[1],
                              n = a ? D.on(ne.COMPLETE, e) : Pe;
                            return (
                              !s || (s && D.isComplete) || c
                                ? e(D.permissions)
                                : a ||
                                  w.add(Le, function () {
                                    return e(D.permissions);
                                  }),
                              n
                            );
                          }),
                          (D.complete = function () {
                            D.status === ne.CHANGED && n();
                          }),
                          (D.registerPlugin = function (e) {
                            if (!e || !e.name || 'function' != typeof e.onRegister)
                              throw new Error(je);
                            P[e.name] || (P[e.name] = e).onRegister.call(e, D);
                          }),
                          (D.execute = Oe(P)),
                          (D.memoizeContent = function (e) {
                            Ve(e) && y.set(e, { optInCookieDomain: u, optInStorageExpiry: d });
                          }),
                          (D.getMemoizedContent = function (e) {
                            var t = y.get();
                            if (t) return t[e];
                          }),
                          Object.defineProperties(D, {
                            permissions: {
                              get: function () {
                                return I;
                              },
                            },
                            status: {
                              get: function () {
                                return S;
                              },
                            },
                            Categories: {
                              get: function () {
                                return re;
                              },
                            },
                            doesOptInApply: {
                              get: function () {
                                return !!s;
                              },
                            },
                            isPending: {
                              get: function () {
                                return D.status === ne.PENDING;
                              },
                            },
                            isComplete: {
                              get: function () {
                                return D.status === ne.COMPLETE;
                              },
                            },
                            __plugins: {
                              get: function () {
                                return Object.keys(P);
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
                        function a () {
                          (r = null), e.call(e, new u('The call took longer than you wanted!'));
                        }
                        function n () {
                          r && (clearTimeout(r), e.apply(e, arguments));
                        }
                        if (void 0 === t) return e;
                        var r = setTimeout(a, t);
                        return n;
                      }
                      function f () {
                        if (window.__tcfapi) return window.__tcfapi;
                        var e = window;
                        if (e !== window.top) {
                          for (var s; !s; ) {
                            e = e.parent;
                            try {
                              e.frames.__tcfapiLocator && (s = e);
                            } catch (e) {}
                            if (e === window.top) break;
                          }
                          if (s) {
                            var o = {};
                            return (
                              (window.__tcfapi = function (e, t, a, n) {
                                var r = Math.random() + '',
                                  i = {
                                    __tcfapiCall: {
                                      command: e,
                                      parameter: n,
                                      version: t,
                                      callId: r,
                                    },
                                  };
                                (o[r] = a), s.postMessage(i, '*');
                              }),
                              window.addEventListener(
                                'message',
                                function (e) {
                                  var t = e.data;
                                  if ('string' == typeof t)
                                    try {
                                      t = JSON.parse(e.data);
                                    } catch (e) {}
                                  if (t.__tcfapiReturn) {
                                    var a = t.__tcfapiReturn;
                                    'function' == typeof o[a.callId] &&
                                      (o[a.callId](a.returnValue, a.success), delete o[a.callId]);
                                  }
                                },
                                !1
                              ),
                              window.__tcfapi
                            );
                          }
                          ve.error('__tcfapi not found');
                        } else ve.error('__tcfapi not found');
                      }
                      function g (t, e, a) {
                        var n = 2 < arguments.length && void 0 !== a ? arguments[2] : [],
                          r = !0 === t.vendor.consents[e],
                          i = n.every(function (e) {
                            return !0 === t.purpose.consents[e];
                          });
                        return r && i;
                      }
                      function v () {
                        var a = this;
                        (a.name = 'iabPlugin'), (a.version = '0.0.2');
                        var i,
                          s = le(),
                          o = { transparencyAndConsentData: null },
                          c = function (e, t) {
                            var a = 1 < arguments.length && void 0 !== t ? arguments[1] : {};
                            return (o[e] = a);
                          };
                        (a.fetchConsentData = function (e) {
                          var t = p(e.callback, e.timeout);
                          l({ callback: t });
                        }),
                          (a.isApproved = function (e) {
                            var a = e.callback,
                              n = e.category,
                              t = e.timeout;
                            if (o.transparencyAndConsentData)
                              return a(null, g(o.transparencyAndConsentData, ie[n], se[n]));
                            var r = p(function (e, t) {
                              a(e, g(t, ie[n], se[n]));
                            }, t);
                            l({ category: n, callback: r });
                          }),
                          (a.onRegister = function (n) {
                            i = n;
                            var t = Object.keys(ie),
                              e = function (e, a) {
                                !e &&
                                  a &&
                                  (t.forEach(function (e) {
                                    var t = g(a, ie[e], se[e]);
                                    n[t ? 'approve' : 'deny'](e, !0);
                                  }),
                                  n.complete());
                              };
                            a.fetchConsentData({ callback: e });
                          });
                        var l = function (e) {
                            var t = e.callback;
                            if (o.transparencyAndConsentData)
                              return t(null, o.transparencyAndConsentData);
                            s.add('FETCH_CONSENT_DATA', t),
                              n(function (e, t) {
                                if (t) {
                                  var a = De(e),
                                    n = i.getMemoizedContent('iabConsentHash'),
                                    r = ge(a.tcString).toString(32);
                                  (a.consentString = e.tcString),
                                    (a.hasConsentChangedSinceLastCmpPull = n !== r),
                                    c('transparencyAndConsentData', a),
                                    i.memoizeContent({ iabConsentHash: r });
                                }
                                s.execute('FETCH_CONSENT_DATA', [
                                  null,
                                  o.transparencyAndConsentData,
                                ]);
                              });
                          },
                          n = function (e) {
                            var t = Ae(ie),
                              a = f();
                            'function' == typeof a && a('getTCData', 2, e, t);
                          };
                      }
                      var W =
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
                          for (var t, a, n = 1; n < arguments.length; ++n)
                            for (t in (a = arguments[n]))
                              Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                          return e;
                        };
                      var m,
                        h,
                        b,
                        k,
                        Y = {
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
                        y = Y.STATE_KEYS_MAP,
                        D = function (i) {
                          function n () {}
                          function r (a, n) {
                            var r = this;
                            return function () {
                              var e = i(0, a),
                                t = {};
                              return (t[a] = e), r.setStateAndPublish(t), n(e), e;
                            };
                          }
                          (this.getMarketingCloudVisitorID = function (e) {
                            e = e || n;
                            var t = this.findField(y.MCMID, e),
                              a = r.call(this, y.MCMID, e);
                            return void 0 !== t ? t : a();
                          }),
                            (this.getVisitorValues = function (t) {
                              this.getMarketingCloudVisitorID(function (e) {
                                t({ MCMID: e });
                              });
                            });
                        },
                        C = Y.MESSAGES,
                        w = Y.ASYNC_API_MAP,
                        T = Y.SYNC_API_MAP,
                        _ = function () {
                          function r () {}
                          function i (e, t) {
                            var a = this;
                            return function () {
                              return a.callbackRegistry.add(e, t), a.messageParent(C.GETSTATE), '';
                            };
                          }
                          function e (n) {
                            this[w[n]] = function (e) {
                              e = e || r;
                              var t = this.findField(n, e),
                                a = i.call(this, n, e);
                              return void 0 !== t ? t : a();
                            };
                          }
                          function t (e) {
                            this[T[e]] = function () {
                              return this.findField(e, r) || {};
                            };
                          }
                          Object.keys(w).forEach(e, this), Object.keys(T).forEach(t, this);
                        },
                        V = Y.ASYNC_API_MAP,
                        P = function () {
                          Object.keys(V).forEach(function (t) {
                            this[V[t]] = function (e) {
                              this.callbackRegistry.add(t, e);
                            };
                          }, this);
                        },
                        X =
                          ((function (e, t) {
                            (t.isObjectEmpty = function (e) {
                              return e === Object(e) && 0 === Object.keys(e).length;
                            }),
                              (t.isValueEmpty = function (e) {
                                return '' === e || t.isObjectEmpty(e);
                              });
                            var a = function () {
                              const $___old_c81f28baca6bb1c1 = {}.constructor.getOwnPropertyDescriptor(
                                Navigator.prototype,
                                'userAgent'
                              );
                              try {
                                if ($___old_c81f28baca6bb1c1)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___stub_47c01efa79e9f191.userAgent
                                  ));
                                return function () {
                                  var e = navigator.appName,
                                    t = navigator.userAgent;
                                  return (
                                    'Microsoft Internet Explorer' === e ||
                                    0 <= t.indexOf('MSIE ') ||
                                    (0 <= t.indexOf('Trident/') && 0 <= t.indexOf('Windows NT 6'))
                                  );
                                }.apply(this, arguments);
                              } finally {
                                if ($___old_c81f28baca6bb1c1)
                                  ({}.constructor.defineProperty(
                                    Navigator.prototype,
                                    'userAgent',
                                    $___old_c81f28baca6bb1c1
                                  ));
                              }
                            };
                            (t.getIeVersion = function () {
                              return document.documentMode
                                ? document.documentMode
                                : a()
                                ? 7
                                : null;
                            }),
                              (t.encodeAndBuildRequest = function (e, t) {
                                return e.map(encodeURIComponent).join(t);
                              }),
                              (t.isObject = function (e) {
                                return null !== e && 'object' === B(e) && !1 === Array.isArray(e);
                              }),
                              (t.defineGlobalNamespace = function () {
                                return (
                                  (window.adobe = t.isObject(window.adobe) ? window.adobe : {}),
                                  window.adobe
                                );
                              }),
                              (t.pluck = function (a, e) {
                                return e.reduce(function (e, t) {
                                  return a[t] && (e[t] = a[t]), e;
                                }, Object.create(null));
                              }),
                              (t.parseOptOut = function (e, t, a) {
                                t ||
                                  ((t = a),
                                  e.d_optout &&
                                    e.d_optout instanceof Array &&
                                    (t = e.d_optout.join(',')));
                                var n = parseInt(e.d_ottl, 10);
                                return isNaN(n) && (n = 7200), { optOut: t, d_ottl: n };
                              }),
                              (t.normalizeBoolean = function (e) {
                                var t = e;
                                return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
                              });
                          })((k = { exports: {} }), k.exports),
                          k.exports),
                        S =
                          (X.isObjectEmpty,
                          X.isValueEmpty,
                          X.getIeVersion,
                          X.encodeAndBuildRequest,
                          X.isObject,
                          X.defineGlobalNamespace,
                          X.pluck,
                          X.parseOptOut,
                          X.normalizeBoolean,
                          t),
                        I = Y.MESSAGES,
                        E = { 0: 'prefix', 1: 'orgID', 2: 'state' },
                        G = function (i, s) {
                          (this.parse = function (e) {
                            try {
                              var a = {};
                              return (
                                e.data.split('|').forEach(function (e, t) {
                                  void 0 !== e && (a[E[t]] = 2 !== t ? e : JSON.parse(e));
                                }),
                                a
                              );
                            } catch (e) {}
                          }),
                            (this.isInvalid = function (e) {
                              var t = this.parse(e);
                              if (!t || Object.keys(t).length < 2) return !0;
                              var a = i !== t.orgID,
                                n = !s || e.origin !== s,
                                r = -1 === Object.keys(I).indexOf(t.prefix);
                              return a || n || r;
                            }),
                            (this.send = function (e, t, a) {
                              var n = t + '|' + i;
                              a && a === Object(a) && (n += '|' + JSON.stringify(a));
                              try {
                                e.postMessage(n, s);
                              } catch (i) {}
                            });
                        },
                        A = Y.MESSAGES,
                        O = function (e, t, a, n) {
                          function r (e) {
                            Object.assign(f, e);
                          }
                          function i (e) {
                            Object.assign(f.state, e),
                              Object.assign(f.state.ALLFIELDS, e),
                              f.callbackRegistry.executeAll(f.state);
                          }
                          function s (e) {
                            if (!m.isInvalid(e)) {
                              v = !1;
                              var t = m.parse(e);
                              f.setStateAndPublish(t.state);
                            }
                          }
                          function o (e) {
                            !v && g && ((v = !0), m.send(n, e));
                          }
                          function c () {
                            r(new D(a._generateID)),
                              f.getMarketingCloudVisitorID(),
                              f.callbackRegistry.executeAll(f.state, !0),
                              W.removeEventListener('message', l);
                          }
                          function l (e) {
                            if (!m.isInvalid(e)) {
                              var t = m.parse(e);
                              (v = !1),
                                W.clearTimeout(f._handshakeTimeout),
                                W.removeEventListener('message', l),
                                r(new _(f)),
                                W.addEventListener('message', s),
                                f.setStateAndPublish(t.state),
                                f.callbackRegistry.hasCallbacks() && o(A.GETSTATE);
                            }
                          }
                          function u () {
                            g && postMessage
                              ? (W.addEventListener('message', l),
                                o(A.HANDSHAKE),
                                (f._handshakeTimeout = setTimeout(c, 250)))
                              : c();
                          }
                          function d () {
                            W.s_c_in || ((W.s_c_il = []), (W.s_c_in = 0)),
                              (f._c = 'Visitor'),
                              (f._il = W.s_c_il),
                              (f._in = W.s_c_in),
                              (f._il[f._in] = f),
                              W.s_c_in++;
                          }
                          function p () {
                            function e (e) {
                              0 !== e.indexOf('_') &&
                                'function' == typeof a[e] &&
                                (f[e] = function () {});
                            }
                            Object.keys(a).forEach(e),
                              (f.getSupplementalDataID = a.getSupplementalDataID),
                              (f.isAllowed = function () {
                                return !0;
                              });
                          }
                          var f = this,
                            g = t.whitelistParentDomain;
                          (f.state = { ALLFIELDS: {} }),
                            (f.version = a.version),
                            (f.marketingCloudOrgID = e),
                            (f.cookieDomain = a.cookieDomain || '');
                          var v = !(f._instanceType = 'child'),
                            m = new G(e, g);
                          (f.callbackRegistry = S()),
                            (f.init = function () {
                              d(), p(), r(new P(f)), u();
                            }),
                            (f.findField = function (e, t) {
                              if (void 0 !== f.state[e]) return t(f.state[e]), f.state[e];
                            }),
                            (f.messageParent = o),
                            (f.setStateAndPublish = i);
                        },
                        j = Y.MESSAGES,
                        M = Y.ALL_APIS,
                        x = Y.ASYNC_API_MAP,
                        N = Y.FIELDGROUP_TO_FIELD,
                        q = function (r, n) {
                          function i () {
                            var n = {};
                            return (
                              Object.keys(M).forEach(function (e) {
                                var t = M[e],
                                  a = r[t]();
                                X.isValueEmpty(a) || (n[e] = a);
                              }),
                              n
                            );
                          }
                          function s () {
                            var a = [];
                            return (
                              r._loading &&
                                Object.keys(r._loading).forEach(function (e) {
                                  if (r._loading[e]) {
                                    var t = N[e];
                                    a.push(t);
                                  }
                                }),
                              a.length ? a : null
                            );
                          }
                          function t (a) {
                            return function n () {
                              var e = s();
                              if (e) {
                                var t = x[e[0]];
                                r[t](n, !0);
                              } else a();
                            };
                          }
                          function a (e, t) {
                            var a = i();
                            n.send(e, t, a);
                          }
                          function o (e) {
                            l(e), a(e, j.HANDSHAKE);
                          }
                          function c (e) {
                            t(function () {
                              a(e, j.PARENTSTATE);
                            })();
                          }
                          function l (t) {
                            function e (e) {
                              a.call(r, e),
                                n.send(t, j.PARENTSTATE, { CUSTOMERIDS: r.getCustomerIDs() });
                            }
                            var a = r.setCustomerIDs;
                            r.setCustomerIDs = e;
                          }
                          return function (e) {
                            n.isInvalid(e) ||
                              (n.parse(e).prefix === j.HANDSHAKE ? o : c)(e.source);
                          };
                        },
                        z = function (n, a) {
                          function r (t) {
                            return function (e) {
                              (i[t] = e), ++s === o && a(i);
                            };
                          }
                          var i = {},
                            s = 0,
                            o = Object.keys(n).length;
                          Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            if (t.fn) {
                              var a = t.args || [];
                              a.unshift(r(e)), t.fn.apply(t.context || null, a);
                            }
                          });
                        },
                        J = {
                          get: function (e) {
                            e = encodeURIComponent(e);
                            var t = (';' + document.cookie).split(' ').join(';'),
                              a = t.indexOf(';' + e + '='),
                              n = a < 0 ? a : t.indexOf(';', a + 1);
                            return a < 0
                              ? ''
                              : decodeURIComponent(
                                  t.substring(a + 2 + e.length, n < 0 ? t.length : n)
                                );
                          },
                          set: function (e, t, a) {
                            var n = l(a, 'cookieLifetime'),
                              r = l(a, 'expires'),
                              i = l(a, 'domain'),
                              s = l(a, 'secure') ? 'Secure' : '';
                            if (r && 'SESSION' !== n && 'NONE' !== n) {
                              var o = '' !== t ? parseInt(n || 0, 10) : -60;
                              if (o) (r = new Date()).setTime(r.getTime() + 1000 * o);
                              else if (1 === r) {
                                var c = (r = new Date()).getYear();
                                r.setYear(c + 2 + (c < 1900 ? 1900 : 0));
                              }
                            } else r = 0;
                            return e && 'NONE' !== n
                              ? ((document.cookie =
                                  encodeURIComponent(e) +
                                  '=' +
                                  encodeURIComponent(t) +
                                  '; path=/;' +
                                  (r ? ' expires=' + r.toGMTString() + ';' : '') +
                                  (i ? ' domain=' + i + ';' : '') +
                                  s),
                                this.get(e) === t)
                              : 0;
                          },
                          remove: function (e, t) {
                            var a = l(t, 'domain');
                            (a = a ? ' domain=' + a + ';' : ''),
                              (document.cookie =
                                encodeURIComponent(e) +
                                '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' +
                                a);
                          },
                        },
                        K = function (e) {
                          var t;
                          !e && W.location && (e = W.location.hostname);
                          var a,
                            n = (t = e).split('.');
                          for (a = n.length - 2; 0 <= a; a--)
                            if (
                              ((t = n.slice(a).join('.')), J.set('test', 'cookie', { domain: t }))
                            )
                              return J.remove('test', { domain: t }), t;
                          return '';
                        },
                        $ = {
                          compare: a,
                          isLessThan: function (e, t) {
                            return a(e, t) < 0;
                          },
                          areVersionsDifferent: function (e, t) {
                            return 0 !== a(e, t);
                          },
                          isGreaterThan: function (e, t) {
                            return 0 < a(e, t);
                          },
                          isEqual: function (e, t) {
                            return 0 === a(e, t);
                          },
                        },
                        R = !!W.postMessage,
                        Q = {
                          postMessage: function (e, t, a) {
                            var n = 1;
                            t &&
                              (R
                                ? a.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                                : t &&
                                  (a.location =
                                    t.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + e));
                          },
                          receiveMessage: function (t, a) {
                            var e;
                            try {
                              R &&
                                (t &&
                                  (e = function (e) {
                                    if (
                                      ('string' == typeof a && e.origin !== a) ||
                                      ('[object Function]' === Object.prototype.toString.call(a) &&
                                        !1 === a(e.origin))
                                    )
                                      return !1;
                                    t(e);
                                  }),
                                W.addEventListener
                                  ? W[t ? 'addEventListener' : 'removeEventListener']('message', e)
                                  : W[t ? 'attachEvent' : 'detachEvent']('onmessage', e));
                            } catch (t) {}
                          },
                        },
                        Z = function (e) {
                          var t,
                            a,
                            n = '0123456789',
                            r = '',
                            i = '',
                            s = 8,
                            o = 10,
                            c = 10;
                          if (1 == e) {
                            for (n += 'ABCDEF', t = 0; t < 16; t++)
                              (a = Math.floor(Math.random() * s)),
                                (r += n.substring(a, a + 1)),
                                (a = Math.floor(Math.random() * s)),
                                (i += n.substring(a, a + 1)),
                                (s = 16);
                            return r + '-' + i;
                          }
                          for (t = 0; t < 19; t++)
                            (a = Math.floor(Math.random() * o)),
                              (r += n.substring(a, a + 1)),
                              0 === t && 9 == a
                                ? (o = 3)
                                : (1 == t || 2 == t) && 10 != o && a < 2
                                ? (o = 10)
                                : 2 < t && (o = 10),
                              (a = Math.floor(Math.random() * c)),
                              (i += n.substring(a, a + 1)),
                              0 === t && 9 == a
                                ? (c = 3)
                                : (1 == t || 2 == t) && 10 != c && a < 2
                                ? (c = 10)
                                : 2 < t && (c = 10);
                          return r + i;
                        },
                        ee = function (n) {
                          const $___old_b78310962a437edc = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_7a1dbc9536dad539 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_b78310962a437edc)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_afd3abb015d4d981.XMLHttpRequest
                              ));
                            if ($___old_7a1dbc9536dad539)
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
                                        .call(W.HTMLElement)
                                        .indexOf('Constructor') && (t = !1)),
                                  { corsType: e, corsCookiesEnabled: t }),
                                getCORSInstance: function () {
                                  const $___old_d6af2924969df107 = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    ),
                                    $___old_5271395aae51d9dc = {}.constructor.getOwnPropertyDescriptor(
                                      window,
                                      'XMLHttpRequest'
                                    );
                                  try {
                                    if ($___old_d6af2924969df107)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    if ($___old_5271395aae51d9dc)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___stub_afd3abb015d4d981.XMLHttpRequest
                                      ));
                                    return function () {
                                      return 'none' === this.corsMetadata.corsType
                                        ? null
                                        : new W[this.corsMetadata.corsType]();
                                    }.apply(this, arguments);
                                  } finally {
                                    if ($___old_d6af2924969df107)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_d6af2924969df107
                                      ));
                                    if ($___old_5271395aae51d9dc)
                                      ({}.constructor.defineProperty(
                                        window,
                                        'XMLHttpRequest',
                                        $___old_5271395aae51d9dc
                                      ));
                                  }
                                },
                                fireCORS: function (i, e) {
                                  function t (e) {
                                    var t;
                                    try {
                                      if ((t = JSON.parse(e)) !== Object(t))
                                        return void s.handleCORSError(
                                          i,
                                          null,
                                          'Response is not JSON'
                                        );
                                    } catch (e) {
                                      return void s.handleCORSError(
                                        i,
                                        e,
                                        'Error parsing response as JSON'
                                      );
                                    }
                                    try {
                                      for (var a = i.callback, n = W, r = 0; r < a.length; r++)
                                        n = n[a[r]];
                                      n(t);
                                    } catch (e) {
                                      s.handleCORSError(i, e, 'Error forming callback function');
                                    }
                                  }
                                  var s = this;
                                  e && (i.loadErrorHandler = e);
                                  try {
                                    var a = this.getCORSInstance();
                                    a.open('get', i.corsUrl + '&ts=' + new Date().getTime(), !0),
                                      'XMLHttpRequest' === this.corsMetadata.corsType &&
                                        ((a.withCredentials = !0),
                                        (a.timeout = n.loadTimeout),
                                        a.setRequestHeader(
                                          'Content-Type',
                                          'application/x-www-form-urlencoded'
                                        ),
                                        (a.onreadystatechange = function () {
                                          4 === this.readyState &&
                                            200 === this.status &&
                                            t(this.responseText);
                                        })),
                                      (a.onerror = function (e) {
                                        s.handleCORSError(i, e, 'onerror');
                                      }),
                                      (a.ontimeout = function (e) {
                                        s.handleCORSError(i, e, 'ontimeout');
                                      }),
                                      a.send(),
                                      n._log.requests.push(i.corsUrl);
                                  } catch (n) {
                                    this.handleCORSError(i, n, 'try-catch');
                                  }
                                },
                                handleCORSError: function (e, t, a) {
                                  n.CORSErrors.push({ corsData: e, error: t, description: a }),
                                    e.loadErrorHandler &&
                                      ('ontimeout' === a
                                        ? e.loadErrorHandler(!0)
                                        : e.loadErrorHandler(!1));
                                },
                              };
                              var e, t;
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_b78310962a437edc)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_b78310962a437edc
                              ));
                            if ($___old_7a1dbc9536dad539)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_7a1dbc9536dad539
                              ));
                          }
                        },
                        te = {
                          POST_MESSAGE_ENABLED: !!W.postMessage,
                          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                          MILLIS_PER_DAY: 86400000,
                          ADOBE_MC: 'adobe_mc',
                          ADOBE_MC_SDID: 'adobe_mc_sdid',
                          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                          ADOBE_MC_TTL_IN_MIN: 5,
                          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
                          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
                        },
                        ae = function (g, t) {
                          var r = W.document;
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
                                a =
                                  '?d_nsid=' +
                                  g.idSyncContainerID +
                                  '#' +
                                  encodeURIComponent(r.location.origin);
                              return (
                                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                                g.loadSSL &&
                                  (t = g.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                                (e = t + this.subdomain + '.demdex.net/dest5.html' + a),
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
                            messageSendingInterval: te.POST_MESSAGE_ENABLED ? null : 100,
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
                                ((n = r.createElement('iframe')).sandbox =
                                  'allow-scripts allow-same-origin'),
                                  (n.title = 'Adobe ID Syncing iFrame'),
                                  (n.id = a.id),
                                  (n.name = a.id + '_name'),
                                  (n.style.cssText = 'display: none; width: 0; height: 0;'),
                                  (n.src = a.url),
                                  (a.newIframeCreated = !0),
                                  t(),
                                  r.body.appendChild(n);
                              }
                              function t (e) {
                                n.addEventListener('load', function () {
                                  (n.className = 'aamIframeLoaded'),
                                    (a.iframeHasLoaded = !0),
                                    a.fireIframeLoadedCallbacks(e),
                                    a.requestToProcess();
                                });
                              }
                              this.startedAttachingIframe = !0;
                              var a = this,
                                n = r.getElementById(this.id);
                              n
                                ? 'IFRAME' !== n.nodeName
                                  ? ((this.id += '_2'), (this.iframeIdChanged = !0), e())
                                  : ((this.newIframeCreated = !1),
                                    'aamIframeLoaded' !== n.className
                                      ? ((this.originalIframeHasLoadedAlready = !1),
                                        t(
                                          "The destination publishing iframe already exists from a different library, but hadn't loaded yet."
                                        ))
                                      : ((this.originalIframeHasLoadedAlready = !0),
                                        (this.iframeHasLoaded = !0),
                                        (this.iframe = n),
                                        this.fireIframeLoadedCallbacks(
                                          'The destination publishing iframe already exists from a different library, and had loaded alresady.'
                                        ),
                                        this.requestToProcess()))
                                : e(),
                                (this.iframe = n);
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
                                n.jsonForComparison.push(e),
                                  n.jsonWaiting.push(e),
                                  n.processSyncOnPage(e);
                              }
                              var a,
                                n = this;
                              if (e === Object(e) && e.ibs)
                                if (
                                  ((a = JSON.stringify(e.ibs || [])),
                                  this.jsonForComparison.length)
                                ) {
                                  var r,
                                    i,
                                    s,
                                    o = !1;
                                  for (r = 0, i = this.jsonForComparison.length; r < i; r++)
                                    if (
                                      ((s = this.jsonForComparison[r]),
                                      a === JSON.stringify(s.ibs || []))
                                    ) {
                                      o = !0;
                                      break;
                                    }
                                  o ? this.jsonDuplicates.push(e) : t();
                                } else t();
                              if (
                                (this.receivedThirdPartyCookiesNotification ||
                                  !te.POST_MESSAGE_ENABLED ||
                                  this.iframeHasLoaded) &&
                                this.jsonWaiting.length
                              ) {
                                var c = this.jsonWaiting.shift();
                                this.process(c), this.requestToProcess();
                              }
                              g.idSyncDisableSyncs ||
                                g.disableIdSyncs ||
                                !this.iframeHasLoaded ||
                                !this.messages.length ||
                                this.sendingMessages ||
                                (this.throttleTimerSet ||
                                  ((this.throttleTimerSet = !0),
                                  setTimeout(function () {
                                    n.messageSendingInterval = te.POST_MESSAGE_ENABLED
                                      ? null
                                      : 150;
                                  }, this.THROTTLE_START)),
                                (this.sendingMessages = !0),
                                this.sendMessages());
                            },
                            getRegionAndCheckIfChanged: function (e, t) {
                              var a = g._getField('MCAAMLH'),
                                n = e.d_region || e.dcs_region;
                              return (
                                a
                                  ? n &&
                                    (g._setFieldExpire('MCAAMLH', t),
                                    g._setField('MCAAMLH', n),
                                    parseInt(a, 10) !== n &&
                                      ((this.regionChanged = !0),
                                      this.timesRegionChanged++,
                                      g._setField('MCSYNCSOP', ''),
                                      g._setField('MCSYNCS', ''),
                                      (a = n)))
                                  : (a = n) &&
                                    (g._setFieldExpire('MCAAMLH', t), g._setField('MCAAMLH', a)),
                                a || (a = ''),
                                a
                              );
                            },
                            processSyncOnPage: function (e) {
                              var t, a, n, r;
                              if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                for (n = 0; n < a; n++)
                                  (r = t[n]).syncOnPage &&
                                    this.checkFirstPartyCookie(r, '', 'syncOnPage');
                            },
                            process: function (e) {
                              var t,
                                a,
                                n,
                                r,
                                i,
                                s = encodeURIComponent,
                                o = !1;
                              if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                for (o = !0, n = 0; n < a; n++)
                                  (r = t[n]),
                                    (i = [
                                      s('ibs'),
                                      s(r.id || ''),
                                      s(r.tag || ''),
                                      X.encodeAndBuildRequest(r.url || [], ','),
                                      s(r.ttl || ''),
                                      '',
                                      '',
                                      r.fireURLSync ? 'true' : 'false',
                                    ]),
                                    r.syncOnPage ||
                                      (this.canSetThirdPartyCookies
                                        ? this.addMessage(i.join('|'))
                                        : r.fireURLSync &&
                                          this.checkFirstPartyCookie(r, i.join('|')));
                              o && this.jsonProcessed.push(e);
                            },
                            checkFirstPartyCookie: function (e, t, a) {
                              var n = 'syncOnPage' === a,
                                r = n ? 'MCSYNCSOP' : 'MCSYNCS';
                              g._readVisitor();
                              var i,
                                s,
                                o = g._getField(r),
                                c = !1,
                                l = !1,
                                u = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                              o
                                ? ((i = o.split('*')),
                                  (c = (s = this.pruneSyncData(i, e.id, u)).dataPresent),
                                  (l = s.dataValid),
                                  (c && l) || this.fireSync(n, e, t, i, r, u))
                                : ((i = []), this.fireSync(n, e, t, i, r, u));
                            },
                            pruneSyncData: function (e, t, a) {
                              var n,
                                r,
                                i,
                                s = !1,
                                o = !1;
                              for (r = 0; r < e.length; r++)
                                (n = e[r]),
                                  (i = parseInt(n.split('-')[1], 10)),
                                  n.match('^' + t + '-')
                                    ? ((s = !0), a < i ? (o = !0) : (e.splice(r, 1), r--))
                                    : i <= a && (e.splice(r, 1), r--);
                              return { dataPresent: s, dataValid: o };
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
                            fireSync: function (e, t, a, n, u, r) {
                              var d = this;
                              if (e) {
                                if ('img' === t.tag) {
                                  var i,
                                    s,
                                    o,
                                    c,
                                    l = t.url,
                                    p = g.loadSSL ? 'https:' : 'http:';
                                  for (i = 0, s = l.length; i < s; i++) {
                                    (o = l[i]), (c = /^\/\//.test(o));
                                    var f = new Image();
                                    f.addEventListener(
                                      'load',
                                      (function (s, o, c, l) {
                                        return function () {
                                          (d.onPagePixels[s] = null), g._readVisitor();
                                          var e,
                                            t,
                                            a,
                                            n,
                                            r = g._getField(u),
                                            i = [];
                                          if (r)
                                            for (t = 0, a = (e = r.split('*')).length; t < a; t++)
                                              (n = e[t]).match('^' + o.id + '-') || i.push(n);
                                          d.setSyncTrackingData(i, o, c, l);
                                        };
                                      })(this.onPagePixels.length, t, u, r)
                                    ),
                                      (f.src = (c ? p : '') + o),
                                      this.onPagePixels.push(f);
                                  }
                                }
                              } else this.addMessage(a), this.setSyncTrackingData(n, t, u, r);
                            },
                            addMessage: function (e) {
                              var t = encodeURIComponent(
                                g._enableErrorReporting ? '---destpub-debug---' : '---destpub---'
                              );
                              this.messages.push((te.POST_MESSAGE_ENABLED ? '' : t) + e);
                            },
                            setSyncTrackingData: function (e, t, a, n) {
                              e.push(t.id + '-' + (n + Math.ceil(t.ttl / 60 / 24))),
                                this.manageSyncsSize(e),
                                g._setField(a, e.join('*'));
                            },
                            sendMessages: function () {
                              var e,
                                t = this,
                                a = '',
                                n = encodeURIComponent;
                              this.regionChanged &&
                                ((a = n('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                                this.messages.length
                                  ? te.POST_MESSAGE_ENABLED
                                    ? ((e =
                                        a +
                                        n('---destpub-combined---') +
                                        this.messages.join('%01')),
                                      this.postMessage(e),
                                      (this.messages = []),
                                      (this.sendingMessages = !1))
                                    : ((e = this.messages.shift()),
                                      this.postMessage(a + e),
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
                                a = /^---destpub-to-parent---/;
                              'string' == typeof e &&
                                a.test(e) &&
                                ('canSetThirdPartyCookies' ===
                                  (t = e.replace(a, '').split('|'))[0] &&
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
                                g._forceSyncIDCall || !e || t - e > te.DAYS_BETWEEN_SYNC_ID_CALLS
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
                        F = {
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
                        U = {
                          getConfigNames: function () {
                            return Object.keys(F);
                          },
                          getConfigs: function () {
                            return F;
                          },
                          normalizeConfig: function (e) {
                            return 'function' != typeof e ? e : e();
                          },
                        },
                        H = function (e) {
                          var r = {};
                          return (
                            (e.on = function (e, t, a) {
                              if (!t || 'function' != typeof t)
                                throw new Error('[ON] Callback should be a function.');
                              r.hasOwnProperty(e) || (r[e] = []);
                              var n = r[e].push({ callback: t, context: a }) - 1;
                              return function () {
                                r[e].splice(n, 1), r[e].length || delete r[e];
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
                        ne = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
                        re = {
                          AAM: 'aam',
                          ADCLOUD: 'adcloud',
                          ANALYTICS: 'aa',
                          CAMPAIGN: 'campaign',
                          ECID: 'ecid',
                          LIVEFYRE: 'livefyre',
                          TARGET: 'target',
                          MEDIA_ANALYTICS: 'mediaaa',
                        },
                        ie = (e((m = {}), re.AAM, 565), e(m, re.ECID, 565), m),
                        se = (e((h = {}), re.AAM, [1, 10]), e(h, re.ECID, [1, 10]), h),
                        oe = ['videoaa', 'iabConsentHash'],
                        ce =
                          ((b = re),
                          Object.keys(b).map(function (e) {
                            return b[e];
                          })),
                        le = function () {
                          var n = {};
                          return (
                            (n.callbacks = Object.create(null)),
                            (n.add = function (e, t) {
                              if (!c(t))
                                throw new Error(
                                  '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                                );
                              n.callbacks[e] = n.callbacks[e] || [];
                              var a = n.callbacks[e].push(t) - 1;
                              return function () {
                                n.callbacks[e].splice(a, 1);
                              };
                            }),
                            (n.execute = function (e, t) {
                              if (n.callbacks[e]) {
                                t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                try {
                                  for (; n.callbacks[e].length; ) {
                                    var a = n.callbacks[e].shift();
                                    'function' == typeof a
                                      ? a.apply(null, t)
                                      : a instanceof Array && a[1].apply(a[0], t);
                                  }
                                  delete n.callbacks[e];
                                } catch (n) {}
                              }
                            }),
                            (n.executeAll = function (a, e) {
                              (e || (a && !o(a))) &&
                                Object.keys(n.callbacks).forEach(function (e) {
                                  var t = void 0 !== a[e] ? a[e] : '';
                                  n.execute(e, t);
                                }, n);
                            }),
                            (n.hasCallbacks = function () {
                              return Boolean(Object.keys(n.callbacks).length);
                            }),
                            n
                          );
                        },
                        ue = function () {},
                        de = function (e) {
                          var t = window.console;
                          return !!t && 'function' == typeof t[e];
                        },
                        pe = function (n, r, e) {
                          return e()
                            ? function () {
                                if (de(n)) {
                                  for (
                                    var e = arguments.length, t = new Array(e), a = 0;
                                    a < e;
                                    a++
                                  )
                                    t[a] = arguments[a];
                                  console[n].apply(console, [r].concat(t));
                                }
                              }
                            : ue;
                        },
                        fe = n,
                        ge = (function () {
                          for (var r = [], e = 0; e < 256; e++) {
                            for (var t = e, a = 0; a < 8; a++)
                              t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                            r.push(t);
                          }
                          return function (e, t) {
                            (e = unescape(encodeURIComponent(e))), t || (t = 0), (t ^= -1);
                            for (var a = 0; a < e.length; a++) {
                              var n = 255 & (t ^ e.charCodeAt(a));
                              t = (t >>> 8) ^ r[n];
                            }
                            return (t ^= -1) >>> 0;
                          };
                        })(),
                        ve = new fe('[ADOBE OPT-IN]'),
                        me = function (e, t) {
                          return B(e) === t;
                        },
                        he = function (e, t) {
                          return e instanceof Array ? e : me(e, 'string') ? [e] : t || [];
                        },
                        be = function (t) {
                          var e = Object.keys(t);
                          return (
                            !!e.length &&
                            e.every(function (e) {
                              return !0 === t[e];
                            })
                          );
                        },
                        ke = function (e, t) {
                          var a = 1 < arguments.length && void 0 !== t && arguments[1];
                          return (
                            !(!e || Ce(e)) &&
                            he(e).every(function (e) {
                              return -1 < ce.indexOf(e) || (a && -1 < oe.indexOf(e));
                            })
                          );
                        },
                        ye = function (e, a) {
                          return e.reduce(function (e, t) {
                            return (e[t] = a), e;
                          }, {});
                        },
                        De = function (e) {
                          return JSON.parse(JSON.stringify(e));
                        },
                        Ce = function (e) {
                          return (
                            '[object Array]' === Object.prototype.toString.call(e) && !e.length
                          );
                        },
                        we = function (e) {
                          if (Ve(e)) return e;
                          try {
                            return JSON.parse(e);
                          } catch (e) {
                            return {};
                          }
                        },
                        Te = function (e) {
                          return void 0 === e || (Ve(e) ? ke(Object.keys(e), !0) : _e(e));
                        },
                        _e = function (e) {
                          try {
                            var t = JSON.parse(e);
                            return !!e && me(e, 'string') && ke(Object.keys(t), !0);
                          } catch (e) {
                            return !1;
                          }
                        },
                        Ve = function (e) {
                          return null !== e && me(e, 'object') && !1 === Array.isArray(e);
                        },
                        Pe = function () {},
                        Se = function (e) {
                          return me(e, 'function') ? e() : e;
                        },
                        Ie = function (e, t) {
                          Te(e) || ve.error(''.concat(t));
                        },
                        Ee = function (t) {
                          return Object.keys(t).map(function (e) {
                            return t[e];
                          });
                        },
                        Ae = function (e) {
                          return Ee(e).filter(function (e, t, a) {
                            return a.indexOf(e) === t;
                          });
                        },
                        Oe = function (d) {
                          return function (e) {
                            var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                              a = t.command,
                              n = t.params,
                              r = void 0 === n ? {} : n,
                              i = t.callback,
                              s = void 0 === i ? Pe : i;
                            if (!a || -1 === a.indexOf('.'))
                              throw new Error('[OptIn.execute] Please provide a valid command.');
                            try {
                              var o = a.split('.'),
                                c = d[o[0]],
                                l = o[1];
                              if (!c || 'function' != typeof c[l])
                                throw new Error('Make sure the plugin and API name exist.');
                              var u = Object.assign(r, { callback: s });
                              c[l].call(c, u);
                            } catch (d) {
                              ve.error('[execute] Something went wrong: ' + d.message);
                            }
                          };
                        };
                      (u.prototype = Object.create(Error.prototype)),
                        (u.prototype.constructor = u);
                      var Le = 'fetchPermissions',
                        je = '[OptIn#registerPlugin] Plugin is invalid.';
                      (d.Categories = re), (d.TimeoutError = u);
                      var Me = Object.freeze({ OptIn: d, IabPlugin: v }),
                        xe = function (d, p) {
                          d.publishDestinations = function (e, t, a) {
                            var n = t,
                              r = a;
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
                                if (!(n instanceof Array && n.length))
                                  return void r({ error: 'messages is not a populated array.' });
                                var s = !1;
                                if (
                                  (n.forEach(function (e) {
                                    'string' == typeof e &&
                                      e.length &&
                                      (i.addMessage(e), (s = !0));
                                  }),
                                  !s)
                                )
                                  return void r({
                                    error: 'None of the messages are populated strings.',
                                  });
                              } else {
                                if (!X.isObject(e))
                                  return void r({ error: 'Invalid parameters passed.' });
                                var o = e;
                                if ('string' != typeof (e = o.subdomain) || !e.length)
                                  return void r({
                                    error: 'config.subdomain is not a populated string.',
                                  });
                                var c = o.urlDestinations;
                                if (!(c instanceof Array && c.length))
                                  return void r({
                                    error: 'config.urlDestinations is not a populated array.',
                                  });
                                var l = [];
                                c.forEach(function (e) {
                                  X.isObject(e) &&
                                    (e.hideReferrer
                                      ? e.message && i.addMessage(e.message)
                                      : l.push(e));
                                }),
                                  (function u () {
                                    l.length &&
                                      setTimeout(function () {
                                        var e = new Image(),
                                          t = l.shift();
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
                        Ne = function B (e) {
                          function t (e, t) {
                            return (e >>> t) | (e << (32 - t));
                          }
                          for (
                            var a,
                              n,
                              r = Math.pow,
                              i = r(2, 32),
                              s = '',
                              o = [],
                              c = 8 * e.length,
                              l = (B.h = B.h || []),
                              u = (B.k = B.k || []),
                              d = u.length,
                              p = {},
                              f = 2;
                            d < 64;
                            f++
                          )
                            if (!p[f]) {
                              for (a = 0; a < 313; a += f) p[a] = f;
                              (l[d] = (r(f, 0.5) * i) | 0), (u[d++] = (r(f, 1 / 3) * i) | 0);
                            }
                          for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
                          for (a = 0; a < e.length; a++) {
                            if ((n = e.charCodeAt(a)) >> 8) return;
                            o[a >> 2] |= n << (((3 - a) % 4) * 8);
                          }
                          for (o[o.length] = (c / i) | 0, o[o.length] = c, n = 0; n < o.length; ) {
                            var g = o.slice(n, (n += 16)),
                              v = l;
                            for (l = l.slice(0, 8), a = 0; a < 64; a++) {
                              var m = g[a - 15],
                                h = g[a - 2],
                                b = l[0],
                                k = l[4],
                                y =
                                  l[7] +
                                  (t(k, 6) ^ t(k, 11) ^ t(k, 25)) +
                                  ((k & l[5]) ^ (~k & l[6])) +
                                  u[a] +
                                  (g[a] =
                                    a < 16
                                      ? g[a]
                                      : (g[a - 16] +
                                          (t(m, 7) ^ t(m, 18) ^ (m >>> 3)) +
                                          g[a - 7] +
                                          (t(h, 17) ^ t(h, 19) ^ (h >>> 10))) |
                                        0);
                              (l = [
                                (y +
                                  ((t(b, 2) ^ t(b, 13) ^ t(b, 22)) +
                                    ((b & l[1]) ^ (b & l[2]) ^ (l[1] & l[2])))) |
                                  0,
                              ].concat(l))[4] = (l[4] + y) | 0;
                            }
                            for (a = 0; a < 8; a++) l[a] = (l[a] + v[a]) | 0;
                          }
                          for (a = 0; a < 8; a++)
                            for (n = 3; n + 1; n--) {
                              var D = (l[a] >> (8 * n)) & 255;
                              s += (D < 16 ? 0 : '') + D.toString(16);
                            }
                          return s;
                        },
                        Re = function (e, t) {
                          return (
                            ('SHA-256' !== t &&
                              'SHA256' !== t &&
                              'sha256' !== t &&
                              'sha-256' !== t) ||
                              (e = Ne(e)),
                            e
                          );
                        },
                        Fe = function (e) {
                          return String(e).trim().toLowerCase();
                        },
                        Ue = Me.OptIn;
                      X.defineGlobalNamespace(), (window.adobe.OptInCategories = Ue.Categories);
                      var He = function (n, a, e) {
                        function p () {
                          h._customerIDsHashChanged = !1;
                        }
                        function t (e) {
                          var n = e;
                          return function (e) {
                            var t = e || w.location.href;
                            try {
                              var a = h._extractParamFromUri(t, n);
                              if (a) return R.parsePipeDelimetedKeyValues(a);
                            } catch (e) {}
                          };
                        }
                        function r (e) {
                          function t (e, t, a) {
                            e && e.match(te.VALID_VISITOR_ID_REGEX) && (a === P && (C = !0), t(e));
                          }
                          t(e[P], h.setMarketingCloudVisitorID, P),
                            h._setFieldExpire(O, -1),
                            t(e[E], h.setAnalyticsVisitorID);
                        }
                        function i (e) {
                          (e = e || {}),
                            (h._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
                            (h._supplementalDataIDCurrentConsumed =
                              e.supplementalDataIDCurrentConsumed || {}),
                            (h._supplementalDataIDLast = e.supplementalDataIDLast || ''),
                            (h._supplementalDataIDLastConsumed =
                              e.supplementalDataIDLastConsumed || {});
                        }
                        function s (e) {
                          function r (e, t, a) {
                            return (a = a ? (a += '|') : a) + (e + '=') + encodeURIComponent(t);
                          }
                          function t (e, t) {
                            var a = t[0],
                              n = t[1];
                            return null != n && n !== L && (e = r(a, n, e)), e;
                          }
                          var a,
                            n = e.reduce(t, '');
                          return (
                            (a = (a = n) ? (a += '|') : a) + 'TS=' + R.getTimestampInSeconds()
                          );
                        }
                        function o (e) {
                          var t = e.minutesToLive,
                            a = '';
                          return (
                            (h.idSyncDisableSyncs || h.disableIdSyncs) &&
                              (a = a || 'Error: id syncs have been disabled'),
                            ('string' == typeof e.dpid && e.dpid.length) ||
                              (a = a || 'Error: config.dpid is empty'),
                            ('string' == typeof e.url && e.url.length) ||
                              (a = a || 'Error: config.url is empty'),
                            void 0 === t
                              ? (t = 20160)
                              : ((t = parseInt(t, 10)),
                                (isNaN(t) || t <= 0) &&
                                  (a =
                                    a ||
                                    'Error: config.minutesToLive needs to be a positive number')),
                            { error: a, ttl: t }
                          );
                        }
                        function c () {
                          return !(!h.configs.doesOptInApply || (b.optIn.isComplete && d()));
                        }
                        function d () {
                          return h.configs.doesOptInApply && h.configs.isIabContext
                            ? b.optIn.isApproved(b.optIn.Categories.ECID) && D
                            : b.optIn.isApproved(b.optIn.Categories.ECID);
                        }
                        function l () {
                          [
                            ['getMarketingCloudVisitorID'],
                            ['setCustomerIDs', void 0],
                            ['syncIdentity', void 0],
                            ['getAnalyticsVisitorID'],
                            ['getAudienceManagerLocationHint'],
                            ['getLocationHint'],
                            ['getAudienceManagerBlob'],
                          ].forEach(function (e) {
                            var t = e[0],
                              a = 2 === e.length ? e[1] : '',
                              n = h[t];
                            h[t] = function (e) {
                              return d() && h.isAllowed()
                                ? n.apply(h, arguments)
                                : ('function' == typeof e && h._callCallback(e, [a]), a);
                            };
                          });
                        }
                        function u () {
                          var e = h._getAudienceManagerURLData(),
                            t = e.url;
                          return h._loadData(V, t, null, e);
                        }
                        function f (e, t) {
                          if (((D = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t &&
                            t.gdprApplies &&
                            ((k = t.consentString),
                            (y = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            u(),
                            m();
                        }
                        function g (e, t) {
                          if (((D = !0), e)) throw new Error('[IAB plugin] : ' + e);
                          t.gdprApplies &&
                            ((k = t.consentString),
                            (y = t.hasConsentChangedSinceLastCmpPull ? 1 : 0)),
                            h.init(),
                            m();
                        }
                        function v () {
                          b.optIn.isComplete &&
                            (b.optIn.isApproved(b.optIn.Categories.ECID)
                              ? h.configs.isIabContext
                                ? b.optIn.execute({
                                    command: 'iabPlugin.fetchConsentData',
                                    callback: g,
                                  })
                                : (h.init(), m())
                              : h.configs.isIabContext
                              ? b.optIn.execute({
                                  command: 'iabPlugin.fetchConsentData',
                                  callback: f,
                                })
                              : (l(), m()));
                        }
                        function m () {
                          b.optIn.off('complete', v);
                        }
                        if (!e || e.split('').reverse().join('') !== n)
                          throw new Error(
                            'Please use `Visitor.getInstance` to instantiate Visitor.'
                          );
                        var h = this,
                          b = window.adobe,
                          k = '',
                          y = 0,
                          D = !1,
                          C = !1;
                        h.version = '5.0.0';
                        var w = W,
                          T = w.Visitor;
                        (T.version = h.version),
                          (T.AuthState = Y.AUTH_STATE),
                          (T.OptOut = Y.OPT_OUT),
                          w.s_c_in || ((w.s_c_il = []), (w.s_c_in = 0)),
                          (h._c = 'Visitor'),
                          (h._il = w.s_c_il),
                          (h._in = w.s_c_in),
                          (h._il[h._in] = h),
                          w.s_c_in++,
                          (h._instanceType = 'regular'),
                          (h._log = { requests: [] }),
                          (h.marketingCloudOrgID = n),
                          (h.cookieName = 'AMCV_' + n),
                          (h.sessionCookieName = 'AMCVS_' + n),
                          (h.cookieDomain = K()),
                          (h.loadSSL = !0),
                          (h.loadTimeout = 30000),
                          (h.CORSErrors = []),
                          (h.marketingCloudServer = h.audienceManagerServer = 'dpm.demdex.net'),
                          (h.sdidParamExpiry = 30);
                        var _ = null,
                          V = 'MC',
                          P = 'MCMID',
                          S = 'MCIDTS',
                          I = 'A',
                          E = 'MCAID',
                          A = 'AAM',
                          O = 'MCAAMB',
                          L = 'NONE',
                          j = function (e) {
                            return !Object.prototype[e];
                          },
                          M = ee(h);
                        (h.FIELDS = Y.FIELDS),
                          (h.cookieRead = function (e) {
                            return J.get(e);
                          }),
                          (h.cookieWrite = function (e, t, a) {
                            var n = h.cookieLifetime ? ('' + h.cookieLifetime).toUpperCase() : '',
                              r = !1;
                            return (
                              h.configs &&
                                h.configs.secureCookie &&
                                'https:' === location.protocol &&
                                (r = !0),
                              J.set(e, '' + t, {
                                expires: a,
                                domain: h.cookieDomain,
                                cookieLifetime: n,
                                secure: r,
                              })
                            );
                          }),
                          (h.resetState = function (e) {
                            e ? h._mergeServerState(e) : i();
                          }),
                          (h._isAllowedDone = !1),
                          (h._isAllowedFlag = !1),
                          (h.isAllowed = function () {
                            return (
                              h._isAllowedDone ||
                                ((h._isAllowedDone = !0),
                                (h.cookieRead(h.cookieName) ||
                                  h.cookieWrite(h.cookieName, 'T', 1)) &&
                                  (h._isAllowedFlag = !0)),
                              'T' === h.cookieRead(h.cookieName) &&
                                h._helpers.removeCookie(h.cookieName),
                              h._isAllowedFlag
                            );
                          }),
                          (h.setMarketingCloudVisitorID = function (e) {
                            h._setMarketingCloudFields(e);
                          }),
                          (h._use1stPartyMarketingCloudServer = !1),
                          (h.getMarketingCloudVisitorID = function (e, t) {
                            h.marketingCloudServer &&
                              h.marketingCloudServer.indexOf('.demdex.net') < 0 &&
                              (h._use1stPartyMarketingCloudServer = !0);
                            var a = h._getAudienceManagerURLData('_setMarketingCloudFields'),
                              n = a.url;
                            return h._getRemoteField(P, n, e, t, a);
                          });
                        var x = function (t, e) {
                          var a = {};
                          h.getMarketingCloudVisitorID(function () {
                            e.forEach(function (e) {
                              a[e] = h._getField(e, !0);
                            }),
                              -1 !== e.indexOf('MCOPTOUT')
                                ? h.isOptedOut(
                                    function (e) {
                                      (a.MCOPTOUT = e), t(a);
                                    },
                                    null,
                                    !0
                                  )
                                : t(a);
                          }, !0);
                        };
                        (h.getVisitorValues = function (e, t) {
                          var a = {
                              MCMID: { fn: h.getMarketingCloudVisitorID, args: [!0], context: h },
                              MCOPTOUT: { fn: h.isOptedOut, args: [void 0, !0], context: h },
                              MCAID: { fn: h.getAnalyticsVisitorID, args: [!0], context: h },
                              MCAAMLH: {
                                fn: h.getAudienceManagerLocationHint,
                                args: [!0],
                                context: h,
                              },
                              MCAAMB: { fn: h.getAudienceManagerBlob, args: [!0], context: h },
                            },
                            n = t && t.length ? X.pluck(a, t) : a;
                          t && -1 === t.indexOf('MCAID') ? x(e, t) : z(n, e);
                        }),
                          (h._currentCustomerIDs = {}),
                          (h._customerIDsHashChanged = !1),
                          (h._newCustomerIDsHash = ''),
                          (h.setCustomerIDs = function (e, t) {
                            if (!h.isOptedOut() && e) {
                              if (!X.isObject(e) || X.isObjectEmpty(e)) return !1;
                              var a, n, r, i;
                              for (a in (h._readVisitor(), e))
                                if (
                                  j(a) &&
                                  ((h._currentCustomerIDs.dataSources =
                                    h._currentCustomerIDs.dataSources || {}),
                                  (t = (n = e[a]).hasOwnProperty('hashType') ? n.hashType : t),
                                  n)
                                )
                                  if ('object' === B(n)) {
                                    var s = {};
                                    if (n.id) {
                                      if (t) {
                                        if (!(i = Re(Fe(n.id), t))) return;
                                        (n.id = i), (s.hashType = t);
                                      }
                                      s.id = n.id;
                                    }
                                    null != n.authState && (s.authState = n.authState),
                                      (h._currentCustomerIDs.dataSources[a] = s);
                                  } else if (t) {
                                    if (!(i = Re(Fe(n), t))) return;
                                    h._currentCustomerIDs.dataSources[a] = { id: i, hashType: t };
                                  } else h._currentCustomerIDs.dataSources[a] = { id: n };
                              var o = h.getCustomerIDs(!0),
                                c = h._getField('MCCIDH'),
                                l = '';
                              for (r in (c || (c = 0), o)) {
                                var u = o[r];
                                if (!X.isObjectEmpty(u))
                                  for (a in u)
                                    j(a) &&
                                      (l +=
                                        (l ? '|' : '') +
                                        a +
                                        '|' +
                                        ((n = u[a]).id ? n.id : '') +
                                        (n.authState ? n.authState : ''));
                              }
                              (h._newCustomerIDsHash = String(h._hash(l))),
                                h._newCustomerIDsHash !== c &&
                                  ((h._customerIDsHashChanged = !0), h._mapCustomerIDs(p));
                            }
                          }),
                          (h.syncIdentity = function (e, t) {
                            if (!h.isOptedOut() && e) {
                              if (!X.isObject(e) || X.isObjectEmpty(e)) return !1;
                              var a, n, r, i, s;
                              for (a in (h._readVisitor(), e))
                                if (
                                  j(a) &&
                                  ((h._currentCustomerIDs.nameSpaces =
                                    h._currentCustomerIDs.nameSpaces || {}),
                                  (t = (n = e[a]).hasOwnProperty('hashType') ? n.hashType : t),
                                  n && 'object' === B(n))
                                ) {
                                  var o = {};
                                  if (n.id) {
                                    if (t) {
                                      if (!(r = Re(Fe(n.id), t))) return;
                                      (n.id = r), (o.hashType = t);
                                    }
                                    o.id = n.id;
                                  }
                                  null != n.authState && (o.authState = n.authState),
                                    n.dataSource &&
                                      ((h._currentCustomerIDs.dataSources =
                                        h._currentCustomerIDs.dataSources || {}),
                                      (i = n.dataSource),
                                      (h._currentCustomerIDs.dataSources[i] = o)),
                                    (h._currentCustomerIDs.nameSpaces[a] = o);
                                }
                              var c = h.getCustomerIDs(!0),
                                l = h._getField('MCCIDH'),
                                u = '';
                              for (s in (l || (l = '0'), c)) {
                                var d = c[s];
                                if (!X.isObjectEmpty(d))
                                  for (a in d)
                                    j(a) &&
                                      (u +=
                                        (u ? '|' : '') +
                                        a +
                                        '|' +
                                        ((n = d[a]).id ? n.id : '') +
                                        (n.authState ? n.authState : ''));
                              }
                              (h._newCustomerIDsHash = String(h._hash(u))),
                                h._newCustomerIDsHash !== l &&
                                  ((h._customerIDsHashChanged = !0), h._mapCustomerIDs(p));
                            }
                          }),
                          (h.getCustomerIDs = function (e) {
                            h._readVisitor();
                            var t,
                              a,
                              n = { dataSources: {}, nameSpaces: {} },
                              r = h._currentCustomerIDs.dataSources;
                            for (t in r)
                              j(t) &&
                                (a = r[t]).id &&
                                (n.dataSources[t] || (n.dataSources[t] = {}),
                                (n.dataSources[t].id = a.id),
                                null != a.authState
                                  ? (n.dataSources[t].authState = a.authState)
                                  : (n.dataSources[t].authState = T.AuthState.UNKNOWN),
                                a.hashType && (n.dataSources[t].hashType = a.hashType));
                            var i = h._currentCustomerIDs.nameSpaces;
                            for (t in i)
                              j(t) &&
                                (a = i[t]).id &&
                                (n.nameSpaces[t] || (n.nameSpaces[t] = {}),
                                (n.nameSpaces[t].id = a.id),
                                null != a.authState
                                  ? (n.nameSpaces[t].authState = a.authState)
                                  : (n.nameSpaces[t].authState = T.AuthState.UNKNOWN),
                                a.hashType && (n.nameSpaces[t].hashType = a.hashType));
                            return e ? n : n.dataSources;
                          }),
                          (h.setAnalyticsVisitorID = function (e) {
                            h._setAnalyticsFields(e);
                          }),
                          (h.getAnalyticsVisitorID = function (e, t, a) {
                            if (!R.isTrackingServerPopulated() && !a)
                              return h._callCallback(e, ['']), '';
                            var n = '';
                            if (
                              (a ||
                                (n = h.getMarketingCloudVisitorID(function () {
                                  h.getAnalyticsVisitorID(e, !0);
                                })),
                              n || a)
                            ) {
                              var r = a ? h.marketingCloudServer : h.trackingServer,
                                i = '';
                              h.loadSSL &&
                                (a
                                  ? h.marketingCloudServerSecure &&
                                    (r = h.marketingCloudServerSecure)
                                  : h.trackingServerSecure && (r = h.trackingServerSecure));
                              var s = {};
                              if (r) {
                                var o = 'http' + (h.loadSSL ? 's' : '') + '://' + r + '/id',
                                  c =
                                    'd_visid_ver=' +
                                    h.version +
                                    '&mcorgid=' +
                                    encodeURIComponent(h.marketingCloudOrgID) +
                                    (n ? '&mid=' + encodeURIComponent(n) : '') +
                                    (h.idSyncDisable3rdPartySyncing || h.disableThirdPartyCookies
                                      ? '&d_coppa=true'
                                      : ''),
                                  l = [
                                    's_c_il',
                                    h._in,
                                    '_set' + (a ? 'MarketingCloud' : 'Analytics') + 'Fields',
                                  ];
                                (i =
                                  o +
                                  '?' +
                                  c +
                                  '&callback=s_c_il%5B' +
                                  h._in +
                                  '%5D._set' +
                                  (a ? 'MarketingCloud' : 'Analytics') +
                                  'Fields'),
                                  (s.corsUrl = o + '?' + c),
                                  (s.callback = l);
                              }
                              return (s.url = i), h._getRemoteField(a ? P : E, i, e, t, s);
                            }
                            return '';
                          }),
                          (h.getAudienceManagerLocationHint = function (e, t) {
                            if (
                              h.getMarketingCloudVisitorID(function () {
                                h.getAudienceManagerLocationHint(e, !0);
                              })
                            ) {
                              var a = h._getField(E);
                              if (
                                (!a &&
                                  R.isTrackingServerPopulated() &&
                                  (a = h.getAnalyticsVisitorID(function () {
                                    h.getAudienceManagerLocationHint(e, !0);
                                  })),
                                a || !R.isTrackingServerPopulated())
                              ) {
                                var n = h._getAudienceManagerURLData(),
                                  r = n.url;
                                return h._getRemoteField('MCAAMLH', r, e, t, n);
                              }
                            }
                            return '';
                          }),
                          (h.getLocationHint = h.getAudienceManagerLocationHint),
                          (h.getAudienceManagerBlob = function (e, t) {
                            if (
                              h.getMarketingCloudVisitorID(function () {
                                h.getAudienceManagerBlob(e, !0);
                              })
                            ) {
                              var a = h._getField(E);
                              if (
                                (!a &&
                                  R.isTrackingServerPopulated() &&
                                  (a = h.getAnalyticsVisitorID(function () {
                                    h.getAudienceManagerBlob(e, !0);
                                  })),
                                a || !R.isTrackingServerPopulated())
                              ) {
                                var n = h._getAudienceManagerURLData(),
                                  r = n.url;
                                return (
                                  h._customerIDsHashChanged && h._setFieldExpire(O, -1),
                                  h._getRemoteField(O, r, e, t, n)
                                );
                              }
                            }
                            return '';
                          }),
                          (h._supplementalDataIDCurrent = ''),
                          (h._supplementalDataIDCurrentConsumed = {}),
                          (h._supplementalDataIDLast = ''),
                          (h._supplementalDataIDLastConsumed = {});
                        var N = !(h.getSupplementalDataID = function (e, t) {
                          h._supplementalDataIDCurrent ||
                            t ||
                            (h._supplementalDataIDCurrent = h._generateID(1));
                          var a = h._supplementalDataIDCurrent;
                          return (
                            h._supplementalDataIDLast && !h._supplementalDataIDLastConsumed[e]
                              ? ((a = h._supplementalDataIDLast),
                                (h._supplementalDataIDLastConsumed[e] = !0))
                              : a &&
                                (h._supplementalDataIDCurrentConsumed[e] &&
                                  ((h._supplementalDataIDLast = h._supplementalDataIDCurrent),
                                  (h._supplementalDataIDLastConsumed =
                                    h._supplementalDataIDCurrentConsumed),
                                  (h._supplementalDataIDCurrent = a = t ? '' : h._generateID(1)),
                                  (h._supplementalDataIDCurrentConsumed = {})),
                                a && (h._supplementalDataIDCurrentConsumed[e] = !0)),
                            a
                          );
                        });
                        (h._liberatedOptOut = null),
                          (h.getOptOut = function (e, t) {
                            var a = h._getAudienceManagerURLData('_setMarketingCloudFields'),
                              n = a.url;
                            if (d()) return h._getRemoteField('MCOPTOUT', n, e, t, a);
                            if (
                              (h._registerCallback('liberatedOptOut', e),
                              null !== h._liberatedOptOut)
                            )
                              return (
                                h._callAllCallbacks('liberatedOptOut', [h._liberatedOptOut]),
                                (N = !1),
                                h._liberatedOptOut
                              );
                            if (N) return null;
                            N = !0;
                            var r = 'liberatedGetOptOut';
                            return (
                              (a.corsUrl = a.corsUrl.replace(
                                /\.demdex\.net\/id\?/,
                                '.demdex.net/optOutStatus?'
                              )),
                              (a.callback = [r]),
                              (W[r] = function (e) {
                                if (e === Object(e)) {
                                  var t,
                                    a,
                                    n = X.parseOptOut(e, t, L);
                                  (t = n.optOut),
                                    (a = 1000 * n.d_ottl),
                                    (h._liberatedOptOut = t),
                                    setTimeout(function () {
                                      h._liberatedOptOut = null;
                                    }, a);
                                }
                                h._callAllCallbacks('liberatedOptOut', [t]), (N = !1);
                              }),
                              M.fireCORS(a),
                              null
                            );
                          }),
                          (h.isOptedOut = function (a, n, e) {
                            n || (n = T.OptOut.GLOBAL);
                            var t = h.getOptOut(function (e) {
                              var t = e === T.OptOut.GLOBAL || 0 <= e.indexOf(n);
                              h._callCallback(a, [t]);
                            }, e);
                            return t ? t === T.OptOut.GLOBAL || 0 <= t.indexOf(n) : null;
                          }),
                          (h._fields = null),
                          (h._fieldsExpired = null),
                          (h._hash = function (e) {
                            var t,
                              a = 0;
                            if (e)
                              for (t = 0; t < e.length; t++)
                                (a = (a << 5) - a + e.charCodeAt(t)), (a &= a);
                            return a;
                          }),
                          (h._generateID = Z),
                          (h._generateLocalMID = function () {
                            var e = h._generateID(0);
                            return (H.isClientSideMarketingCloudVisitorID = !0), e;
                          }),
                          (h._callbackList = null),
                          (h._callCallback = function (e, t) {
                            try {
                              'function' == typeof e ? e.apply(w, t) : e[1].apply(e[0], t);
                            } catch (e) {}
                          }),
                          (h._registerCallback = function (e, t) {
                            t &&
                              (null == h._callbackList && (h._callbackList = {}),
                              null == h._callbackList[e] && (h._callbackList[e] = []),
                              h._callbackList[e].push(t));
                          }),
                          (h._callAllCallbacks = function (e, t) {
                            if (null != h._callbackList) {
                              var a = h._callbackList[e];
                              if (a) for (; 0 < a.length; ) h._callCallback(a.shift(), t);
                            }
                          }),
                          (h._addQuerystringParam = function (e, t, a, n) {
                            var r = encodeURIComponent(t) + '=' + encodeURIComponent(a),
                              i = R.parseHash(e),
                              s = R.hashlessUrl(e);
                            if (-1 === s.indexOf('?')) return s + '?' + r + i;
                            var o = s.split('?'),
                              c = o[0] + '?',
                              l = o[1];
                            return c + R.addQueryParamAtLocation(l, r, n) + i;
                          }),
                          (h._extractParamFromUri = function (e, t) {
                            var a = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                            if (a && a.length) return decodeURIComponent(a[1]);
                          }),
                          (h._parseAdobeMcFromUrl = t(te.ADOBE_MC)),
                          (h._parseAdobeMcSdidFromUrl = t(te.ADOBE_MC_SDID)),
                          (h._attemptToPopulateSdidFromUrl = function (e) {
                            var t = h._parseAdobeMcSdidFromUrl(e),
                              a = 1000000000;
                            t && t.TS && (a = R.getTimestampInSeconds() - t.TS),
                              t &&
                                t.SDID &&
                                t.MCORGID === n &&
                                a < h.sdidParamExpiry &&
                                ((h._supplementalDataIDCurrent = t.SDID),
                                (h._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
                          }),
                          (h._attemptToPopulateIdsFromUrl = function () {
                            var e = h._parseAdobeMcFromUrl();
                            if (e && e.TS) {
                              var t = R.getTimestampInSeconds() - e.TS;
                              if (Math.floor(t / 60) > te.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== n)
                                return;
                              r(e);
                            }
                          }),
                          (h._mergeServerState = function (e) {
                            if (e)
                              try {
                                if (
                                  ((n = e),
                                  (e = R.isObject(n) ? n : JSON.parse(n))[h.marketingCloudOrgID])
                                ) {
                                  var t = e[h.marketingCloudOrgID];
                                  (a = t.customerIDs),
                                    R.isObject(a) && h.setCustomerIDs(a),
                                    i(t.sdid);
                                }
                              } catch (e) {
                                throw new Error('`serverState` has an invalid format.');
                              }
                            var a, n;
                          }),
                          (h._timeout = null),
                          (h._loadData = function (e, t, a, n) {
                            (t = h._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
                              (n.url = h._addQuerystringParam(n.url, 'd_fieldgroup', e, 1)),
                              (n.corsUrl = h._addQuerystringParam(
                                n.corsUrl,
                                'd_fieldgroup',
                                e,
                                1
                              )),
                              (H.fieldGroupObj[e] = !0),
                              n === Object(n) &&
                                n.corsUrl &&
                                'XMLHttpRequest' === M.corsMetadata.corsType &&
                                M.fireCORS(n, a, e);
                          }),
                          (h._clearTimeout = function (e) {
                            null != h._timeout &&
                              h._timeout[e] &&
                              (clearTimeout(h._timeout[e]), (h._timeout[e] = 0));
                          }),
                          (h._settingsDigest = 0),
                          (h._getSettingsDigest = function () {
                            if (!h._settingsDigest) {
                              var e = h.version;
                              h.audienceManagerServer && (e += '|' + h.audienceManagerServer),
                                h.audienceManagerServerSecure &&
                                  (e += '|' + h.audienceManagerServerSecure),
                                (h._settingsDigest = h._hash(e));
                            }
                            return h._settingsDigest;
                          }),
                          (h._readVisitorDone = !1),
                          (h._readVisitor = function () {
                            if (!h._readVisitorDone) {
                              h._readVisitorDone = !0;
                              var e,
                                t,
                                a,
                                n,
                                r,
                                i,
                                s = h._getSettingsDigest(),
                                o = !1,
                                c = h.cookieRead(h.cookieName),
                                l = new Date();
                              if (
                                (c ||
                                  C ||
                                  h.discardTrackingServerECID ||
                                  (c = h.cookieRead(te.FIRST_PARTY_SERVER_COOKIE)),
                                null == h._fields && (h._fields = {}),
                                c && 'T' !== c)
                              )
                                for (
                                  (c = c.split('|'))[0].match(/^[\-0-9]+$/) &&
                                    (parseInt(c[0], 10) !== s && (o = !0), c.shift()),
                                    c.length % 2 == 1 && c.pop(),
                                    e = 0;
                                  e < c.length;
                                  e += 2
                                )
                                  (a = (t = c[e].split('-'))[0]),
                                    (n = c[e + 1]),
                                    1 < t.length
                                      ? ((r = parseInt(t[1], 10)), (i = 0 < t[1].indexOf('s')))
                                      : ((r = 0), (i = !1)),
                                    o &&
                                      ('MCCIDH' === a && (n = ''),
                                      0 < r && (r = l.getTime() / 1000 - 60)),
                                    a &&
                                      n &&
                                      (h._setField(a, n, 1),
                                      0 < r &&
                                        ((h._fields['expire' + a] = r + (i ? 's' : '')),
                                        (l.getTime() >= 1000 * r ||
                                          (i && !h.cookieRead(h.sessionCookieName))) &&
                                          (h._fieldsExpired || (h._fieldsExpired = {}),
                                          (h._fieldsExpired[a] = !0))));
                              !h._getField(E) &&
                                R.isTrackingServerPopulated() &&
                                (c = h.cookieRead('s_vi')) &&
                                1 < (c = c.split('|')).length &&
                                0 <= c[0].indexOf('v1') &&
                                (0 <= (e = (n = c[1]).indexOf('[')) && (n = n.substring(0, e)),
                                n && n.match(te.VALID_VISITOR_ID_REGEX) && h._setField(E, n));
                            }
                          }),
                          (h._appendVersionTo = function (e) {
                            var t = 'vVersion|' + h.version,
                              a = e ? h._getCookieVersion(e) : null;
                            return (
                              a
                                ? $.areVersionsDifferent(a, h.version) &&
                                  (e = e.replace(te.VERSION_REGEX, t))
                                : (e += (e ? '|' : '') + t),
                              e
                            );
                          }),
                          (h._writeVisitor = function () {
                            var e,
                              t,
                              a = h._getSettingsDigest();
                            for (e in h._fields)
                              j(e) &&
                                h._fields[e] &&
                                'expire' !== e.substring(0, 6) &&
                                ((t = h._fields[e]),
                                (a +=
                                  (a ? '|' : '') +
                                  e +
                                  (h._fields['expire' + e] ? '-' + h._fields['expire' + e] : '') +
                                  '|' +
                                  t));
                            (a = h._appendVersionTo(a)), h.cookieWrite(h.cookieName, a, 1);
                          }),
                          (h._getField = function (e, t) {
                            return null == h._fields ||
                              (!t && h._fieldsExpired && h._fieldsExpired[e])
                              ? null
                              : h._fields[e];
                          }),
                          (h._setField = function (e, t, a) {
                            null == h._fields && (h._fields = {}),
                              (h._fields[e] = t),
                              a || h._writeVisitor();
                          }),
                          (h._getFieldList = function (e, t) {
                            var a = h._getField(e, t);
                            return a ? a.split('*') : null;
                          }),
                          (h._setFieldList = function (e, t, a) {
                            h._setField(e, t ? t.join('*') : '', a);
                          }),
                          (h._getFieldMap = function (e, t) {
                            var a = h._getFieldList(e, t);
                            if (a) {
                              var n,
                                r = {};
                              for (n = 0; n < a.length; n += 2) r[a[n]] = a[n + 1];
                              return r;
                            }
                            return null;
                          }),
                          (h._setFieldMap = function (e, t, a) {
                            var n,
                              r = null;
                            if (t) for (n in ((r = []), t)) j(n) && (r.push(n), r.push(t[n]));
                            h._setFieldList(e, r, a);
                          }),
                          (h._setFieldExpire = function (e, t, a) {
                            var n = new Date();
                            n.setTime(n.getTime() + 1000 * t),
                              null == h._fields && (h._fields = {}),
                              (h._fields['expire' + e] =
                                Math.floor(n.getTime() / 1000) + (a ? 's' : '')),
                              t < 0
                                ? (h._fieldsExpired || (h._fieldsExpired = {}),
                                  (h._fieldsExpired[e] = !0))
                                : h._fieldsExpired && (h._fieldsExpired[e] = !1),
                              a &&
                                (h.cookieRead(h.sessionCookieName) ||
                                  h.cookieWrite(h.sessionCookieName, '1'));
                          }),
                          (h._findVisitorID = function (e) {
                            return (
                              e &&
                                ('object' === B(e) &&
                                  (e = e.d_mid
                                    ? e.d_mid
                                    : e.visitorID
                                    ? e.visitorID
                                    : e.id
                                    ? e.id
                                    : e.uuid
                                    ? e.uuid
                                    : '' + e),
                                e && 'NOTARGET' === (e = e.toUpperCase()) && (e = L),
                                (e && (e === L || e.match(te.VALID_VISITOR_ID_REGEX))) ||
                                  (e = '')),
                              e
                            );
                          }),
                          (h._setFields = function (e, t) {
                            if (
                              (h._clearTimeout(e),
                              null != h._loading && (h._loading[e] = !1),
                              H.fieldGroupObj[e] && H.setState(e, !1),
                              e === V)
                            ) {
                              !0 !== H.isClientSideMarketingCloudVisitorID &&
                                (H.isClientSideMarketingCloudVisitorID = !1);
                              var a = h._getField(P);
                              if (!a || h.overwriteCrossDomainMCIDAndAID) {
                                if (
                                  !(a = 'object' === B(t) && t.mid ? t.mid : h._findVisitorID(t))
                                ) {
                                  if (
                                    h._use1stPartyMarketingCloudServer &&
                                    !h.tried1stPartyMarketingCloudServer
                                  )
                                    return (
                                      (h.tried1stPartyMarketingCloudServer = !0),
                                      void h.getAnalyticsVisitorID(null, !1, !0)
                                    );
                                  a = h._generateLocalMID();
                                }
                                h._setField(P, a);
                              }
                              (a && a !== L) || (a = ''),
                                'object' === B(t) &&
                                  ((t.d_region || t.dcs_region || t.d_blob || t.blob) &&
                                    h._setFields(A, t),
                                  h._use1stPartyMarketingCloudServer &&
                                    t.mid &&
                                    h._setFields(I, { id: t.id })),
                                h._callAllCallbacks(P, [a]);
                            }
                            if (e === A && 'object' === B(t)) {
                              var n = 604800;
                              null != t.id_sync_ttl &&
                                t.id_sync_ttl &&
                                (n = parseInt(t.id_sync_ttl, 10));
                              var r = F.getRegionAndCheckIfChanged(t, n);
                              h._callAllCallbacks('MCAAMLH', [r]);
                              var i = h._getField(O);
                              (t.d_blob || t.blob) &&
                                ((i = t.d_blob) || (i = t.blob),
                                h._setFieldExpire(O, n),
                                h._setField(O, i)),
                                i || (i = ''),
                                h._callAllCallbacks(O, [i]),
                                !t.error_msg &&
                                  h._newCustomerIDsHash &&
                                  h._setField('MCCIDH', h._newCustomerIDsHash);
                            }
                            if (e === I) {
                              var s = h._getField(E);
                              (s && !h.overwriteCrossDomainMCIDAndAID) ||
                                ((s = h._findVisitorID(t))
                                  ? s !== L && h._setFieldExpire(O, -1)
                                  : (s = L),
                                h._setField(E, s)),
                                (s && s !== L) || (s = ''),
                                h._callAllCallbacks(E, [s]);
                            }
                            if (h.idSyncDisableSyncs || h.disableIdSyncs)
                              F.idCallNotProcesssed = !0;
                            else {
                              F.idCallNotProcesssed = !1;
                              var o = {};
                              (o.ibs = t.ibs), (o.subdomain = t.subdomain), F.processIDCallData(o);
                            }
                            if (t === Object(t)) {
                              var c, l;
                              d() && h.isAllowed() && (c = h._getField('MCOPTOUT'));
                              var u = X.parseOptOut(t, c, L);
                              (c = u.optOut),
                                (l = u.d_ottl),
                                h._setFieldExpire('MCOPTOUT', l, !0),
                                h._setField('MCOPTOUT', c),
                                h._callAllCallbacks('MCOPTOUT', [c]);
                            }
                          }),
                          (h._loading = null),
                          (h._getRemoteField = function (a, e, t, n, r) {
                            var i,
                              s = '',
                              o = R.isFirstPartyAnalyticsVisitorIDCall(a),
                              c = { MCAAMLH: !0, MCAAMB: !0 };
                            if (d() && h.isAllowed())
                              if (
                                (h._readVisitor(),
                                !(
                                  !(s = h._getField(a, !0 === c[a])) ||
                                  (h._fieldsExpired && h._fieldsExpired[a])
                                ) ||
                                  (h.disableThirdPartyCalls && !o))
                              )
                                s ||
                                  (a === P
                                    ? (h._registerCallback(a, t),
                                      (s = h._generateLocalMID()),
                                      h.setMarketingCloudVisitorID(s))
                                    : a === E
                                    ? (h._registerCallback(a, t),
                                      (s = ''),
                                      h.setAnalyticsVisitorID(s))
                                    : (n = !(s = '')));
                              else if (
                                (a === P || 'MCOPTOUT' === a
                                  ? (i = V)
                                  : 'MCAAMLH' === a || a === O
                                  ? (i = A)
                                  : a === E && (i = I),
                                i)
                              )
                                return (
                                  !e ||
                                    (null != h._loading && h._loading[i]) ||
                                    (null == h._loading && (h._loading = {}),
                                    (h._loading[i] = !0),
                                    h._loadData(
                                      i,
                                      e,
                                      function (e) {
                                        if (!h._getField(a)) {
                                          e && H.setState(i, !0);
                                          var t = '';
                                          a === P
                                            ? (t = h._generateLocalMID())
                                            : i === A && (t = { error_msg: 'timeout' }),
                                            h._setFields(i, t);
                                        }
                                      },
                                      r
                                    )),
                                  h._registerCallback(a, t),
                                  s || (e || h._setFields(i, { id: L }), '')
                                );
                            return (
                              (a !== P && a !== E) || s !== L || (n = !(s = '')),
                              t && n && h._callCallback(t, [s]),
                              s
                            );
                          }),
                          (h._setMarketingCloudFields = function (e) {
                            h._readVisitor(), h._setFields(V, e);
                          }),
                          (h._mapCustomerIDs = function (e) {
                            h.getAudienceManagerBlob(e, !0);
                          }),
                          (h._setAnalyticsFields = function (e) {
                            h._readVisitor(), h._setFields(I, e);
                          }),
                          (h._setAudienceManagerFields = function (e) {
                            h._readVisitor(), h._setFields(A, e);
                          }),
                          (h._getAudienceManagerURLData = function (e) {
                            var t = h.audienceManagerServer,
                              a = '',
                              n = h._getField(P),
                              r = h._getField(O, !0),
                              i = h._getField(E),
                              s = i && i !== L ? '&d_cid_ic=AVID%01' + encodeURIComponent(i) : '';
                            if (
                              (h.loadSSL &&
                                h.audienceManagerServerSecure &&
                                (t = h.audienceManagerServerSecure),
                              t)
                            ) {
                              var o,
                                c,
                                l,
                                u = h.getCustomerIDs(!0);
                              if (u)
                                for (c in u) {
                                  var d = u[c];
                                  if (!X.isObjectEmpty(d)) {
                                    var p = 'nameSpaces' === c ? '&d_cid_ns=' : '&d_cid_ic=';
                                    for (o in d)
                                      j(o) &&
                                        ((l = d[o]),
                                        (s +=
                                          p +
                                          encodeURIComponent(o) +
                                          '%01' +
                                          encodeURIComponent(l.id ? l.id : '') +
                                          (l.authState ? '%01' + l.authState : '')));
                                  }
                                }
                              e || (e = '_setAudienceManagerFields');
                              var f = 'http' + (h.loadSSL ? 's' : '') + '://' + t + '/id',
                                g =
                                  'd_visid_ver=' +
                                  h.version +
                                  (k && -1 !== f.indexOf('demdex.net')
                                    ? '&gdpr=1&gdpr_consent=' + k
                                    : '') +
                                  (y && -1 !== f.indexOf('demdex.net') ? '&d_cf=' + y : '') +
                                  '&d_rtbd=json&d_ver=2' +
                                  (!n && h._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                                  '&d_orgid=' +
                                  encodeURIComponent(h.marketingCloudOrgID) +
                                  '&d_nsid=' +
                                  (h.idSyncContainerID || 0) +
                                  (n ? '&d_mid=' + encodeURIComponent(n) : '') +
                                  (h.idSyncDisable3rdPartySyncing || h.disableThirdPartyCookies
                                    ? '&d_coppa=true'
                                    : '') +
                                  (!0 === _
                                    ? '&d_coop_safe=1'
                                    : !1 === _
                                    ? '&d_coop_unsafe=1'
                                    : '') +
                                  (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                                  s;
                              y = 0;
                              var v = ['s_c_il', h._in, e];
                              return {
                                url: (a = f + '?' + g + '&d_cb=s_c_il%5B' + h._in + '%5D.' + e),
                                corsUrl: f + '?' + g,
                                callback: v,
                              };
                            }
                            return { url: a };
                          }),
                          (h.appendVisitorIDsTo = function (e) {
                            try {
                              var t = [
                                [P, h._getField(P)],
                                [E, h._getField(E)],
                                ['MCORGID', h.marketingCloudOrgID],
                              ];
                              return h._addQuerystringParam(e, te.ADOBE_MC, s(t));
                            } catch (t) {
                              return e;
                            }
                          }),
                          (h.appendSupplementalDataIDTo = function (e, t) {
                            if (!(t = t || h.getSupplementalDataID(R.generateRandomString(), !0)))
                              return e;
                            try {
                              var a = s([
                                ['SDID', t],
                                ['MCORGID', h.marketingCloudOrgID],
                              ]);
                              return h._addQuerystringParam(e, te.ADOBE_MC_SDID, a);
                            } catch (t) {
                              return e;
                            }
                          });
                        var R = {
                          parseHash: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(t) : '';
                          },
                          hashlessUrl: function (e) {
                            var t = e.indexOf('#');
                            return 0 < t ? e.substr(0, t) : e;
                          },
                          addQueryParamAtLocation: function (e, t, a) {
                            var n = e.split('&');
                            return (a = null != a ? a : n.length), n.splice(a, 0, t), n.join('&');
                          },
                          isFirstPartyAnalyticsVisitorIDCall: function (e, t, a) {
                            return (
                              e === E &&
                              (t || (t = h.trackingServer),
                              a || (a = h.trackingServerSecure),
                              !('string' != typeof (n = h.loadSSL ? a : t) || !n.length) &&
                                n.indexOf('2o7.net') < 0 &&
                                n.indexOf('omtrdc.net') < 0)
                            );
                            var n;
                          },
                          isObject: function (e) {
                            return Boolean(e && e === Object(e));
                          },
                          removeCookie: function (e) {
                            J.remove(e, { domain: h.cookieDomain });
                          },
                          isTrackingServerPopulated: function () {
                            return !!h.trackingServer || !!h.trackingServerSecure;
                          },
                          getTimestampInSeconds: function () {
                            return Math.round(new Date().getTime() / 1000);
                          },
                          parsePipeDelimetedKeyValues: function (e) {
                            return e.split('|').reduce(function (e, t) {
                              var a = t.split('=');
                              return (e[a[0]] = decodeURIComponent(a[1])), e;
                            }, {});
                          },
                          generateRandomString: function (e) {
                            e = e || 5;
                            for (var t = '', a = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--; )
                              t += a[Math.floor(Math.random() * a.length)];
                            return t;
                          },
                          normalizeBoolean: function (e) {
                            return 'true' === e || ('false' !== e && e);
                          },
                          parseBoolean: function (e) {
                            return 'true' === e || ('false' !== e && null);
                          },
                          replaceMethodsWithFunction: function (e, t) {
                            for (var a in e)
                              e.hasOwnProperty(a) && 'function' == typeof e[a] && (e[a] = t);
                            return e;
                          },
                        };
                        h._helpers = R;
                        var F = ae(h, T);
                        (h._destinationPublishing = F), (h.timeoutMetricsLog = []);
                        var U,
                          H = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function (e, t) {
                              switch (e) {
                                case V:
                                  !1 === t
                                    ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1)
                                    : (this.MCIDCallTimedOut = t);
                                  break;
                                case I:
                                  !1 === t
                                    ? !0 !== this.AnalyticsIDCallTimedOut &&
                                      (this.AnalyticsIDCallTimedOut = !1)
                                    : (this.AnalyticsIDCallTimedOut = t);
                                  break;
                                case A:
                                  !1 === t
                                    ? !0 !== this.AAMIDCallTimedOut &&
                                      (this.AAMIDCallTimedOut = !1)
                                    : (this.AAMIDCallTimedOut = t);
                              }
                            },
                          };
                        (h.isClientSideMarketingCloudVisitorID = function () {
                          return H.isClientSideMarketingCloudVisitorID;
                        }),
                          (h.MCIDCallTimedOut = function () {
                            return H.MCIDCallTimedOut;
                          }),
                          (h.AnalyticsIDCallTimedOut = function () {
                            return H.AnalyticsIDCallTimedOut;
                          }),
                          (h.AAMIDCallTimedOut = function () {
                            return H.AAMIDCallTimedOut;
                          }),
                          (h.idSyncGetOnPageSyncInfo = function () {
                            return h._readVisitor(), h._getField('MCSYNCSOP');
                          }),
                          (h.idSyncByURL = function (e) {
                            if (!h.isOptedOut()) {
                              var t = o(e || {});
                              if (t.error) return t.error;
                              var a,
                                n,
                                r = e.url,
                                i = encodeURIComponent,
                                s = F;
                              return (
                                (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                                (a = X.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                                (n = ['ibs', i(e.dpid), 'img', i(r), t.ttl, '', a]),
                                s.addMessage(n.join('|')),
                                s.requestToProcess(),
                                'Successfully queued'
                              );
                            }
                          }),
                          (h.idSyncByDataSource = function (e) {
                            if (!h.isOptedOut())
                              return e === Object(e) &&
                                'string' == typeof e.dpuuid &&
                                e.dpuuid.length
                                ? ((e.url =
                                    '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                                  h.idSyncByURL(e))
                                : 'Error: config or config.dpuuid is empty';
                          }),
                          xe(h, F),
                          (h._getCookieVersion = function (e) {
                            e = e || h.cookieRead(h.cookieName);
                            var t = te.VERSION_REGEX.exec(e);
                            return t && 1 < t.length ? t[1] : null;
                          }),
                          (h._resetAmcvCookie = function (e) {
                            var t = h._getCookieVersion();
                            (t && !$.isLessThan(t, e)) || R.removeCookie(h.cookieName);
                          }),
                          (h.setAsCoopSafe = function () {
                            _ = !0;
                          }),
                          (h.setAsCoopUnsafe = function () {
                            _ = !1;
                          }),
                          (function () {
                            if (((h.configs = Object.create(null)), R.isObject(a)))
                              for (var e in a) j(e) && ((h[e] = a[e]), (h.configs[e] = a[e]));
                          })(),
                          l(),
                          (h.init = function () {
                            (c() &&
                              (b.optIn.fetchPermissions(v, !0),
                              !b.optIn.isApproved(b.optIn.Categories.ECID))) ||
                              U ||
                              ((U = !0),
                              (function () {
                                if (R.isObject(a)) {
                                  (h.idSyncContainerID = h.idSyncContainerID || 0),
                                    (_ =
                                      'boolean' == typeof h.isCoopSafe
                                        ? h.isCoopSafe
                                        : R.parseBoolean(h.isCoopSafe)),
                                    h.resetBeforeVersion &&
                                      h._resetAmcvCookie(h.resetBeforeVersion),
                                    h._attemptToPopulateIdsFromUrl(),
                                    h._attemptToPopulateSdidFromUrl(),
                                    h._readVisitor();
                                  var e = h._getField(S),
                                    t = Math.ceil(new Date().getTime() / te.MILLIS_PER_DAY);
                                  h.idSyncDisableSyncs ||
                                    h.disableIdSyncs ||
                                    !F.canMakeSyncIDCall(e, t) ||
                                    (h._setFieldExpire(O, -1), h._setField(S, t)),
                                    h.getMarketingCloudVisitorID(),
                                    h.getAudienceManagerLocationHint(),
                                    h.getAudienceManagerBlob(),
                                    h._mergeServerState(h.serverState);
                                } else
                                  h._attemptToPopulateIdsFromUrl(),
                                    h._attemptToPopulateSdidFromUrl();
                              })(),
                              (function () {
                                if (!h.idSyncDisableSyncs && !h.disableIdSyncs) {
                                  F.checkDPIframeSrc();
                                  var e = function () {
                                    var e = F;
                                    e.readyToAttachIframe() && e.attachIframe();
                                  };
                                  w.addEventListener('load', function () {
                                    (T.windowLoaded = !0), e();
                                  });
                                  try {
                                    Q.receiveMessage(function (e) {
                                      F.receiveMessage(e.data);
                                    }, F.iframeHost);
                                  } catch (e) {}
                                }
                              })(),
                              h.whitelistIframeDomains &&
                                te.POST_MESSAGE_ENABLED &&
                                ((h.whitelistIframeDomains =
                                  h.whitelistIframeDomains instanceof Array
                                    ? h.whitelistIframeDomains
                                    : [h.whitelistIframeDomains]),
                                h.whitelistIframeDomains.forEach(function (e) {
                                  var t = new G(n, e),
                                    a = q(h, t);
                                  Q.receiveMessage(a, e);
                                })));
                          });
                      };
                      He.config = U;
                      var Be = (W.Visitor = He),
                        We = function (r) {
                          if (X.isObject(r))
                            return Object.keys(r)
                              .filter(function (e) {
                                return '' !== r[e];
                              })
                              .reduce(function (e, t) {
                                var a = U.normalizeConfig(r[t]),
                                  n = X.normalizeBoolean(a);
                                return (e[t] = n), e;
                              }, Object.create(null));
                        },
                        Ye = Me.OptIn,
                        Xe = Me.IabPlugin;
                      (Be.getInstance = function (n, e) {
                        if (!n) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                        n.indexOf('@') < 0 && (n += '@AdobeOrg');
                        var t = (function () {
                          var e = W.s_c_il;
                          if (e)
                            for (var t = 0; t < e.length; t++) {
                              var a = e[t];
                              if (a && 'Visitor' === a._c && a.marketingCloudOrgID === n) return a;
                            }
                        })();
                        if (t) return t;
                        var r,
                          a = We(e);
                        (r = a || {}),
                          (W.adobe.optIn =
                            W.adobe.optIn ||
                            (function () {
                              var e = X.pluck(r, [
                                  'doesOptInApply',
                                  'previousPermissions',
                                  'preOptInApprovals',
                                  'isOptInStorageEnabled',
                                  'optInStorageExpiry',
                                  'isIabContext',
                                ]),
                                t = r.optInCookieDomain || r.cookieDomain;
                              (t = (t = t || K()) === window.location.hostname ? '' : t),
                                (e.optInCookieDomain = t);
                              var a = new Ye(e, { cookies: J });
                              if (e.isIabContext && e.doesOptInApply) {
                                var n = new Xe();
                                a.registerPlugin(n);
                              }
                              return a;
                            })());
                        var i = n.split('').reverse().join(''),
                          s = new Be(n, null, i);
                        X.isObject(a) && a.cookieDomain && (s.cookieDomain = a.cookieDomain),
                          W.s_c_il.splice(--W.s_c_in, 1);
                        var o = X.getIeVersion();
                        if ('number' == typeof o && o < 10)
                          return s._helpers.replaceMethodsWithFunction(s, function () {});
                        var c,
                          l =
                            (function () {
                              try {
                                return W.self !== W.parent;
                              } catch (n) {
                                return !0;
                              }
                            })() &&
                            ((c = s).cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                            'T' !== c.cookieRead('TEST_AMCV_COOKIE') ||
                              (c._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) &&
                            W.parent
                              ? new O(n, a, s, W.parent)
                              : new Be(n, a, i);
                        return (s = null), l.init(), l;
                      }),
                        (function () {
                          function e () {
                            Be.windowLoaded = !0;
                          }
                          W.addEventListener
                            ? W.addEventListener('load', e)
                            : W.attachEvent && W.attachEvent('onload', e),
                            (Be.codeLoadEnd = new Date().getTime());
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
              orgId: '4D6368F454EC41940A4C98A6@AdobeOrg',
              variables: [
                { name: 'serverState', value: '%serverState%' },
                { name: 'trackingServer', value: 'metrics.elsevier.com' },
                { name: 'trackingServerSecure', value: 'smetrics.elsevier.com' },
                { name: 'marketingCloudServer', value: 'metrics.elsevier.com' },
                { name: 'marketingCloudServerSecure', value: 'smetrics.elsevier.com' },
              ],
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPa7ef5ac82db64de8af1284050bf8d75d/',
          },
        },
        company: { orgId: '4D6368F454EC41940A4C98A6@AdobeOrg' },
        property: {
          name: 'rp:sd - ScienceDirect',
          settings: {
            domains: ['sciencedirect.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL3c26f9d51ed3423796fad0795172bca5',
            name: 'Event - Edit Alert',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'editAlert' },
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
                      { name: 'eVar97', type: 'value', value: '%Event - Alert Type%' },
                      { name: 'eVar1', type: 'value', value: '%Search - Criteria%' },
                    ],
                    props: [{ name: 'prop21', type: 'value', value: '%Search - Criteria%' }],
                    events: [{ name: 'event235' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'edit alert', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL020b5b14d9b64d7fb1b0240cf331bbea',
            name: 'Event - Content Download Start',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentDownloadStart' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event123' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLec9b554c217140fab183f1950d240428',
            name: 'Event - Navigation Link Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a[data-nav-name], a[data-sc-nav-name]',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/4a848ae9611a/032db4f73473/f73ac1d0fe53/RCa5da170839744983875a4aa919b6b78c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb1400f79bc6e4bb1a4ced0cd0475278e',
            name: 'Event - Form Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'formSubmit' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'form submit', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL5ab0c7c532794c75a0a0f66da1163e42',
            name: 'Event - Login Start',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'loginStart' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event141' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'login start', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLb2e5f2b2e7634b30877796c12237aaa7',
            name: 'Event - Save to List',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'saveToList' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'save to list', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLb38274a29ace4be0a6130520ac7b5143',
            name: 'Event - Content Interaction',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentInteraction' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop53', type: 'value', value: '%Event - Action Name%' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content interaction', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL5d542e957a5b4d368dc06f57775cd4b0',
            name: 'Event - Save Alert Start',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'saveAlertStart' },
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
                      { name: 'eVar97', type: 'value', value: '%Event - Alert Type%' },
                      { name: 'eVar1', type: 'value', value: '%Search - Criteria%' },
                    ],
                    props: [{ name: 'prop21', type: 'value', value: '%Search - Criteria%' }],
                    events: [{ name: 'event234' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'save alert start', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL204730f95c194cc5a372c8ba91cccd77',
            name: 'Event - Clear History',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'clearHistory' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event243' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'clear history', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL5d7219dfb1a64345914ae399df07680d',
            name: 'Event - Content Link Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentLinkClick' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop23', type: 'value', value: '%Event - Action Name%' }],
                    events: [{ name: 'event87' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content-specific link click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL279433bf4a484bc7bbd239f1db2c14e2',
            name: 'Event - Purchase Complete',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'purchaseComplete' },
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
                      if (window.eventData && window.eventData.order) {
                        var a = window.eventData.order;
                        (t.purchaseID = a.id),
                          (t.eVar34 = a.promoCode),
                          (t.eVar39 = a.paymentMethod),
                          (t.linkTrackVars = t.apl(t.linkTrackVars, 'purchaseID', ',', 2)),
                          (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar14', ',', 2)),
                          (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar34', ',', 2)),
                          (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar39', ',', 2)),
                          window.eventData.page &&
                            window.eventData.page.currencyCode &&
                            ((t.currencyCode = window.eventData.page.currencyCode),
                            (t.linkTrackVars = t.apl(t.linkTrackVars, 'currencyCode', ',', 2)));
                      }
                    },
                  },
                  trackerProperties: { events: [{ name: 'purchase' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc4f76f1fe6ac4e5a98da82ece8b5a5ad',
            name: 'Event - Search Results Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'searchResultsClick' },
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
                      {
                        name: 'eVar15',
                        type: 'value',
                        value: '%Event - Search Results Click Position%',
                      },
                    ],
                    events: [{ name: 'event37' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'search results click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL66ba8469ca46466a900f1871b2963de9',
            name: 'Event - Content Share',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentShare' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar30', type: 'value', value: '%Event - Share Platform%' }],
                    events: [{ name: 'event11' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content shared', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL6a9a4e0401db4553a3702681fa99d3b6',
            name: 'Event - Content Share Start',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentShareStart' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event206' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content share start', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf4bb246ac03c40dbb5aadc509a1cde11',
            name: 'Event - Cart Add Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'cartAdd' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    events: [{ name: 'scAdd' }, { name: 'scOpen' }, { name: 'event20' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'cart add', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf69d32ab56cf4cf985d095086dd307fd',
            name: 'Event - Remove From History',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'removeFromHistory' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event242' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'remove from history', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc952320bb28947bcab9c03ff0eb99e47',
            name: 'Event - CTA Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ctaClick' },
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
                      window.eventData &&
                        eventData.cta &&
                        eventData.cta.ids &&
                        0 < eventData.cta.ids.length &&
                        (window.clickedPromoId = eventData.cta.ids[0]);
                    },
                  },
                  trackerProperties: { events: [{ name: 'event22' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'cta click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf71763f7b5aa4cda9cc9fa8868cbdc43',
            name: 'Event - Logout Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'logoutClick' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event180' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'logout click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLf88965ff231d4ae9873a714d94b0695d',
            name: 'Event - Form View',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'formView' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'form submit', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLc8949324f45247198af8e61a641cba4a',
            name: 'Event - Search Start',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'searchStart' },
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
                      window.eventData &&
                        eventData.search &&
                        eventData.search.type &&
                        ((t.prop6 = window.eventData.search.type),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'prop6', ',', 2)),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar2', ',', 2)));
                    },
                  },
                  trackerProperties: { events: [{ name: 'event211' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'search start', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL6cd9f144fd834488845f9bb20e27bf15',
            name: 'Event - Content Download',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentDownload' },
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
                      (t.list2 = _satellite.getVar('Page - Widget Names')),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'list2', ',', 2));
                    },
                  },
                  trackerProperties: { events: [{ name: 'event19' }, { name: 'event182' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content download', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL6e6eea7df7ad4752800e54197235a134',
            name: 'Event - Content Tab Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentTabClick' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    props: [{ name: 'prop20', type: 'value', value: '%Event - Tab Name%' }],
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
            id: 'RL2c07c37920084855aba22d6a8cb21eee',
            name: 'Event - Conversion Driver Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'conversionDriverClick' },
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
                      (t.eVar103 = _satellite.getVar('Event - Conversion Driver')),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar103', ',', 2)),
                        (t.eVar110 = 'D=pageName'),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar110', ',', 2));
                    },
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'conversion driver click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL3554c6a697ce4f4798156c321b226622',
            name: 'Event - Widget Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'widgetClick' },
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
                      (t.list2 = _satellite.getVar('Page - Widget Names')),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'list2', ',', 2));
                    },
                  },
                  trackerProperties: { events: [{ name: 'event179' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'widget click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL8a8e673a9c6b4d8484315cbd074c4d84',
            name: 'Event - AA Conversion Driver Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: '[data-aa-conversiondriver]',
                  bubbleFireIfChildFired: !1,
                },
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
                      (t.eVar103 = this.getAttribute('data-aa-conversiondriver')),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar103', ',', 2)),
                        (t.eVar110 = 'D=pageName'),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar110', ',', 2)),
                        (window.eventData = {});
                    },
                  },
                  trackerProperties: {},
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'conversion driver click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL79f16b8eb05b4c1fb64a680a7f50ee89',
            name: 'Event - LinkOut',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'linkOut' },
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
                      (t.list2 = _satellite.getVar('Page - Widget Names')),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'list2', ',', 2));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar37', type: 'value', value: '%Event - LinkOut Destination%' },
                      {
                        name: 'eVar23',
                        type: 'value',
                        value: '%Event - LinkOut Referring Product%',
                      },
                      {
                        name: 'eVar49',
                        type: 'value',
                        value: '%Event - LinkOut Referring Product%',
                      },
                    ],
                    events: [{ name: 'event25' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content link-out', linkType: 'e' },
              },
            ],
          },
          {
            id: 'RL801b2c84d3764f8abe51ba2fea1f4e63',
            name: 'Event - Delete Alert',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'deleteAlert' },
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
                      { name: 'eVar97', type: 'value', value: '%Event - Alert Type%' },
                      { name: 'eVar1', type: 'value', value: '%Search - Criteria%' },
                    ],
                    props: [{ name: 'prop21', type: 'value', value: '%Search - Criteria%' }],
                    events: [{ name: 'event237' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'delete alert', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLeb3ca01b5f884168b194bd13e59aaa72',
            name: 'Event - pageLoad',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'pageLoad' },
                ruleOrder: 100,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      pageDataTracker.mapAdobeVars(t);
                    },
                  },
                  trackerProperties: {},
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL9c15b75edf9b49b6bbe2c8063207c4db',
            name: 'Event - Content Export',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentExport' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar69', type: 'value', value: '%Event - Rows Exported%' }],
                    events: [{ name: 'event39' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content export', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL3a6cadc12dd04d5dada96d0d0b2ea4ed',
            name: 'Event - Search Feature Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'searchFeatureClick' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar18', type: 'value', value: '%Search - Feature Used%' }],
                    props: [{ name: 'prop8', type: 'value', value: '%Search - Feature Used%' }],
                    events: [{ name: 'event10' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'search feature click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLcadd7f871cfe49f6b811cf8273e6b8f3',
            name: 'Event - Cart Remove Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'cartRemove' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'scRemove' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'cart remove', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLd0344741ab5d44a59059cb2d8a5d7c7a',
            name: 'Event - Promo Link Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'a[data-sc-promo-id]', bubbleFireIfChildFired: !1 },
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
                      var e = this.getAttribute('data-sc-promo-id');
                      e &&
                        (window.clickedPromoId =
                          (pageData.page.productName || 'xx').toLowerCase() + ':' + e);
                    },
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'promo link click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL43266e7673c440dbaee5cc1fba7c55ea',
            name: 'Event - Form Error',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'formError' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar43', type: 'value', value: '%Form - Error Type%' }],
                    events: [{ name: 'event26' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'form error', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLa713d35eecc247afb0093d20f9ad58e0',
            name: 'Event - Search Results Updated',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'searchResultsUpdated' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { pageName: '%Page - Analytics Pagename%' } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLa7bb9996873f4574be9e313cd387d082',
            name: 'Event - User Profile Update',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'userProfileUpdate' },
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
                      { name: 'eVar44', type: 'value', value: '%Event - Updated User Fields%' },
                    ],
                    events: [{ name: 'event17' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'user profile update', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLda8989e564ce49f8aa3213141c3d11ee',
            name: 'Event - Button Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'buttonClick' },
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
                      (t.eVar124 = _satellite.getVar('Event - Button Type')),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar124', ',', 2));
                    },
                  },
                  trackerProperties: { events: [{ name: 'event204' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'button click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLadf95e414619450db90bc0403545f846',
            name: 'Event - Delete Alert Start',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'deleteAlertStart' },
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
                      { name: 'eVar97', type: 'value', value: '%Event - Alert Type%' },
                      { name: 'eVar1', type: 'value', value: '%Search - Criteria%' },
                    ],
                    props: [{ name: 'prop21', type: 'value', value: '%Search - Criteria%' }],
                    events: [{ name: 'event238' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'delete alert start', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLdcc45fca40ac48cea475aa04d82780da',
            name: 'Event - Saved Alert',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'saveAlert' },
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
                      { name: 'eVar97', type: 'value', value: '%Event - Alert Type%' },
                      { name: 'eVar1', type: 'value', value: '%Search - Criteria%' },
                    ],
                    props: [{ name: 'prop21', type: 'value', value: '%Search - Criteria%' }],
                    events: [{ name: 'event9' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'saved search', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL9d5671546f5d4ceaae1f8f6b1253386c',
            name: 'eventDispatcher',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'eventDispatcher' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/4a848ae9611a/032db4f73473/f73ac1d0fe53/RCa16d232f95a944c0aabdea6621a2ef94-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL918f89d093454a1d955c3b187df7d0dc',
            name: 'Event - CTA Impression',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'ctaImpression' },
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
                      if (((t.list3 = _satellite.getVar('Promo - IDs')), t.list3)) {
                        for (var a = t.list3.split('|'), n = 0; n < a.length; n++)
                          a[n] = t.productPrefix(a[n]);
                        (t.list3 = a.join('|')),
                          (t.linkTrackVars = t.apl(t.linkTrackVars, 'list3', ',', 2));
                      }
                    },
                  },
                  trackerProperties: { events: [{ name: 'event21' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: '', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLff3834431f7c4305ae0070faf97170f1',
            name: 'Load - pageDataTracker',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "var pageDataTracker = {\n    eventCookieName: 'eventTrack',\n    debugCookie: 'els-aa-debugmode',\n    debugCounter: 1,\n    warnings: [],\n    measures: {},\n    timeoffset: 0\n\n    ,trackPageLoad: function(data) {\n        if (window.pageData && ((pageData.page && pageData.page.noTracking == 'true') || window.pageData_isLoaded)) {\n            return false;\n        }\n\n        if (data) {\n            window.pageData = data;\n        }\n\n        this.initWarnings();\n        if(!(window.pageData && pageData.page && pageData.page.name)) {\n            console.error('pageDataTracker.trackPageLoad() called without pageData.page.name being defined!');\n            return;\n        }\n\n        this.processIdPlusData(window.pageData);\n\n        if(document.readyState !== 'loading') {\n            this.warnings.push('dtm2');\n        } else {\n            if(window.pageData && pageData.page && !pageData.page.loadTime) {\n                pageData.page.loadTime = performance ? Math.round((performance.now())).toString() : '';\n            }\n        }\n\n        if(window.pageData && pageData.page) {\n            var localTime = new Date().getTime();\n            if(pageData.page.loadTimestamp) {\n                // calculate timeoffset\n                var serverTime = parseInt(pageData.page.loadTimestamp);\n                if(!isNaN(serverTime)) {\n                    this.timeoffset = pageData.page.loadTimestamp - localTime;\n                }\n            } else {\n                pageData.page.loadTimestamp = localTime;\n            }\n        }\n\n        this.validateData(window.pageData);\n\n        // measures\n        try {\n            var resources = performance.getEntriesByType(\"resource\");\n            var f = true;\n            var dtotal = 0;\n            for (var j = 0; j < resources.length; j++) {\n                var d = resources[j].duration;\n                if (resources[j].name.indexOf('satelliteLib') !== -1) {\n                    if(d) {\n                        dtotal = dtotal + d;\n                    }\n                }\n                if((resources[j].name.indexOf('satellite-') !== -1) && d && f) {\n                    f = false;\n                    dtotal = dtotal + d;\n                }\n            }\n            this.measures['du'] = Math.round(dtotal).toString();\n            this.measures['lt'] = Math.round((performance.now())).toString();\n        } catch(e) {\n            this.warnings.push('dtm4');\n        }\n\n        try {\n            var cookieTest = 'a73bp32';\n            this.setCookie(cookieTest, cookieTest);\n            if(this.getCookie(cookieTest) != cookieTest) {\n                this.warnings.push('dtm5');\n            }\n            this.deleteCookie(cookieTest);\n        } catch(e){\n            this.warnings.push('dtm5');\n        }\n\n        this.registerCallbacks();\n        this.setAnalyticsData();\n\n        // handle any cookied event data\n        this.getEvents();\n\n        window.pageData_isLoaded = true;\n\n        this.debugMessage('Init - trackPageLoad()', window.pageData);\n\n        _satellite.track('eventDispatcher', JSON.stringify({\n          eventName: 'newPage',\n          eventData: {eventName: 'newPage'},\n          pageData: window.pageData\n        }));\n    }\n\n    ,trackEvent: function(event, data, callback) {\n        if(!window.pageData_isLoaded) {\n            if(this.isDebugEnabled()) {\n                console.log('[AA] pageDataTracker.trackEvent() called without calling trackPageLoad() first.');\n            }\n            return false;\n        }\n        if (window.pageData && pageData.page && pageData.page.noTracking == 'true') {\n            return false;\n        }\n\n        if (event) {\n            this.initWarnings();\n            if(document.readyState !== 'complete') {\n                this.warnings.push('dtm3');\n            }\n            if(event === 'newPage') {\n                // auto fillings\n                if(data.page && !data.page.loadTimestamp) {\n                    data.page.loadTimestamp = ''+(new Date().getTime() + this.timeoffset);\n                }\n                this.processIdPlusData(data);\n            }\n\n            window.eventData = data ? data : {};\n            window.eventData.eventName = event;\n            this.handleEventData(event, data);\n\n            if(event === 'newPage') {\n                this.validateData(window.pageData);\n            }\n            this.debugMessage('Event: ' + event, data);\n\n            _satellite.track('eventDispatcher', JSON.stringify({\n              eventName: event,\n              eventData: window.eventData,\n              pageData: window.pageData\n            }));\n        }\n\n        if (typeof(callback) == 'function') {\n            callback.call();\n        }\n    }\n\n    ,processIdPlusData: function(data) {\n        if(data && data.visitor && data.visitor.idPlusData) {\n            var idPlusFields = ['userId', 'accessType', 'accountId', 'accountName'];\n            for(var i=0; i < idPlusFields.length; i++) {\n                if(typeof data.visitor.idPlusData[idPlusFields[i]] !== 'undefined') {\n                    data.visitor[idPlusFields[i]] = data.visitor.idPlusData[idPlusFields[i]];\n                }\n            }\n            data.visitor.idPlusData = undefined;\n        }\n    }\n\n    ,validateData: function(data) {\n        if(!data) {\n            this.warnings.push('dv0');\n            return;\n        }\n\n        // top 5\n        if(!(data.visitor && data.visitor.accessType)) {\n            this.warnings.push('dv1');\n        }\n        if(data.visitor && (data.visitor.accountId || data.visitor.accountName)) {\n            if(!data.visitor.accountName) {\n                this.warnings.push('dv2');\n            }\n            if(!data.visitor.accountId) {\n                this.warnings.push('dv3');\n            }\n        }\n        if(!(data.page && data.page.productName)) {\n            this.warnings.push('dv4');\n        }\n        if(!(data.page && data.page.businessUnit)) {\n            this.warnings.push('dv5');\n        }\n        if(!(data.page && data.page.name)) {\n            this.warnings.push('dv6');\n        }\n\n        // rp mandatory\n        if(data.page && data.page.businessUnit && (data.page.businessUnit.toLowerCase().indexOf('els:rp:') !== -1 || data.page.businessUnit.toLowerCase().indexOf('els:rap:') !== -1)) {\n            if(!(data.page && data.page.loadTimestamp)) {\n                this.warnings.push('dv7');\n            }\n            if(!(data.page && data.page.loadTime)) {\n                this.warnings.push('dv8');\n            }\n            if(!(data.visitor && data.visitor.ipAddress)) {\n                this.warnings.push('dv9');\n            }\n            if(!(data.page && data.page.type)) {\n                this.warnings.push('dv10');\n            }\n            if(!(data.page && data.page.language)) {\n                this.warnings.push('dv11');\n            }\n        }\n\n        // other\n        if(data.page && data.page.environment) {\n            var env = data.page.environment.toLowerCase();\n            if(!(env === 'dev' || env === 'cert' || env === 'prod')) {\n                this.warnings.push('dv12');\n            }\n        }\n        if(data.content && data.content.constructor !== Array) {\n            this.warnings.push('dv13');\n        }\n    }\n\n    ,initWarnings: function() {\n        this.warnings = [];\n        try {\n            var hdn = document.head.childNodes;\n            var libf = false;\n            for(var i=0; i<hdn.length; i++) {\n                if(hdn[i].src && (hdn[i].src.indexOf('satelliteLib') !== -1 || hdn[i].src.indexOf('launch') !== -1)) {\n                    libf = true;\n                    break;\n                }\n            }\n            if(!libf) {\n                this.warnings.push('dtm1');\n            }\n        } catch(e) {\n        }\n    }\n\n    ,getMessages: function() {\n        return this.warnings.join('|');\n    }\n    ,addMessage: function(message) {\n        this.warnings.push(message);\n    }\n\n    ,getPerformance: function() {\n        var copy = {};\n        for (var attr in this.measures) {\n            if(this.measures.hasOwnProperty(attr)) {\n                copy[attr] = this.measures[attr];\n            }\n        }\n\n        this.measures = {};\n        return copy;\n    }\n\n    ,dtmCodeDesc: {\n        dtm1: 'satellite-lib must be placed in the <head> section',\n        dtm2: 'trackPageLoad() must be placed and called before the closing </body> tag',\n        dtm3: 'trackEvent() must be called at a stage where Document.readyState=complete (e.g. on the load event or a user event)',\n        dv1: 'visitor.accessType not set but mandatory',\n        dv2: 'visitor.accountName not set but mandatory',\n        dv3: 'visitor.accountId not set but mandatory',\n        dv4: 'page.productName not set but mandatory',\n        dv5: 'page.businessUnit not set but mandatory',\n        dv6: 'page.name not set but mandatory',\n        dv7: 'page.loadTimestamp not set but mandatory',\n        dv8: 'page.loadTime not set but mandatory',\n        dv9: 'visitor.ipAddress not set but mandatory',\n        dv10: 'page.type not set but mandatory',\n        dv11: 'page.language not set but mandatory',\n        dv12: 'page.environment must be set to \\'prod\\', \\'cert\\' or \\'dev\\'',\n        dv13: 'content must be of type array of objects'\n    }\n\n    ,debugMessage: function(event, data) {\n        if(this.isDebugEnabled()) {\n            console.log('[AA] --------- [' + (this.debugCounter++) + '] Web Analytics Data ---------');\n            console.log('[AA] ' + event);\n            console.groupCollapsed(\"[AA] AA Data: \");\n            if(window.eventData) {\n                console.log(\"[AA] eventData:\\n\" + JSON.stringify(window.eventData, true, 2));\n            }\n            if(window.pageData) {\n                console.log(\"[AA] pageData:\\n\" + JSON.stringify(window.pageData, true, 2));\n            }\n            console.groupEnd();\n            if(this.warnings.length > 0) {\n                console.groupCollapsed(\"[AA] Warnings (\"+this.warnings.length+\"): \");\n                for(var i=0; i<this.warnings.length; i++) {\n                    var error = this.dtmCodeDesc[this.warnings[i]] ? this.dtmCodeDesc[this.warnings[i]] : 'Error Code: ' + this.warnings[i];\n                    console.log('[AA] ' + error);\n                }\n                console.log('[AA] More can be found here: https://confluence.cbsels.com/display/AA/AA+Error+Catalog');\n                console.groupEnd();\n            }\n            console.log(\"This mode can be disabled by calling 'pageDataTracker.disableDebug()'\");\n        }\n    }\n\n    ,getTrackingCode: function() {\n      var campaign = _satellite.getVar('Campaign - ID');\n      if(!campaign) {\n        campaign = window.sessionStorage ? sessionStorage.getItem('dgcid') : '';\n      }\n      return campaign;\n    }\n\n    ,isDebugEnabled: function() {\n        if(typeof this.debug === 'undefined') {\n            this.debug = (document.cookie.indexOf(this.debugCookie) !== -1) || (window.pageData && pageData.page && pageData.page.environment && pageData.page.environment.toLowerCase() === 'dev');\n            //this.debug = (document.cookie.indexOf(this.debugCookie) !== -1);\n        }\n        return this.debug;\n    }\n\n    ,enableDebug: function(expire) {\n        if (typeof expire === 'undefined') {\n            expire = 86400;\n        }\n        console.log('You just enabled debug mode for Adobe Analytics tracking. This mode will persist for 24h.');\n        console.log(\"This mode can be disabled by calling 'pageDataTracker.disableDebug()'\");\n        this.setCookie(this.debugCookie, 'true', expire, document.location.hostname);\n        this.debug = true;\n    }\n\n    ,disableDebug: function() {\n        console.log('Debug mode is now disabled.');\n        this.deleteCookie(this.debugCookie);\n        this.debug = false;\n    }\n\n    ,setAnalyticsData: function() {\n        if(!(window.pageData && pageData.page && pageData.page.productName && pageData.page.name)) {\n            return;\n        }\n        pageData.page.analyticsPagename = pageData.page.productName + ':' + pageData.page.name;\n\n        var pageEls = pageData.page.name.indexOf(':') > -1 ? pageData.page.name.split(':') : [pageData.page.name];\n        pageData.page.sectionName = pageData.page.productName + ':' + pageEls[0];\n    }\n\n    ,getEvents: function() {\n        pageData.savedEvents = {};\n        pageData.eventList = [];\n\n        var val = this.getCookie(this.eventCookieName);\n        if (val) {\n            pageData.savedEvents = val;\n        }\n\n        this.deleteCookie(this.eventCookieName);\n    }\n\n    ,handleEventData: function(event, data) {\n        var val;\n        switch(event) {\n            case 'newPage':\n                if (data && typeof(data) === 'object') {\n                    for (var x in data) {\n                        if(data.hasOwnProperty(x) && data[x] instanceof Array) {\n                            pageData[x] = data[x];\n                        } else if(data.hasOwnProperty(x) && typeof(data[x]) === 'object') {\n                            if(!pageData[x]) {\n                                pageData[x] = {};\n                            }\n                            for (var y in data[x]) {\n                                if(data[x].hasOwnProperty(y)) {\n                                    pageData[x][y] = data[x][y];\n                                }\n                            }\n                        }\n                    }\n                }\n                this.setAnalyticsData();\n            case 'saveSearch':\n            case 'searchResultsUpdated':\n                if (data) {\n                    // overwrite page-load object\n                    if (data.search && typeof(data.search) == 'object') {\n                        window.eventData.search.resultsPosition = '';\n                        pageData.search = pageData.search || {};\n                        var fields = ['advancedCriteria', 'criteria', 'currentPage', 'dataFormCriteria', 'facets', 'resultsByType', 'resultsPerPage', 'sortType', 'totalResults', 'type', 'database',\n                        'suggestedClickPosition','suggestedLetterCount','suggestedResultCount', 'autoSuggestCategory', 'autoSuggestDetails','typedTerm','selectedTerm', 'channel',\n                        'facetOperation', 'details'];\n                        for (var i=0; i<fields.length; i++) {\n                            if (data.search[fields[i]]) {\n                                pageData.search[fields[i]] = data.search[fields[i]];\n                            }\n                        }\n                    }\n                }\n                this.setAnalyticsData();\n                break;\n            case 'navigationClick':\n                if (data && data.link) {\n                    window.eventData.navigationLink = {\n                        name: ((data.link.location || 'no location') + ':' + (data.link.name || 'no name'))\n                    };\n                }\n                break;\n            case 'autoSuggestClick':\n                if (data && data.search) {\n                    val = {\n                        autoSuggestSearchData: (\n                            'letterct:' + (data.search.suggestedLetterCount || 'none') +\n                            '|resultct:' + (data.search.suggestedResultCount || 'none') +\n                            '|clickpos:' + (data.search.suggestedClickPosition || 'none')\n                        ).toLowerCase(),\n                        autoSuggestSearchTerm: (data.search.typedTerm || ''),\n                        autoSuggestTypedTerm: (data.search.typedTerm || ''),\n                        autoSuggestSelectedTerm: (data.search.selectedTerm || ''),\n                        autoSuggestCategory: (data.search.autoSuggestCategory || ''),\n                        autoSuggestDetails: (data.search.autoSuggestDetails || '')\n                    };\n                }\n                break;\n            case 'linkOut':\n                if (data && data.content && data.content.length > 0) {\n                    window.eventData.linkOut = data.content[0].linkOut;\n                    window.eventData.referringProduct = _satellite.getVar('Page - Product Name') + ':' + data.content[0].id;\n                }\n                break;\n            case 'socialShare':\n                if (data && data.social) {\n                    window.eventData.sharePlatform = data.social.sharePlatform || '';\n                }\n                break;\n            case 'contentInteraction':\n                if (data && data.action) {\n                    window.eventData.action.name = pageData.page.productName + ':' + data.action.name;\n                }\n                break;\n            case 'searchWithinContent':\n                if (data && data.search) {\n                    window.pageData.search = window.pageData.search || {};\n                    pageData.search.withinContentCriteria = data.search.withinContentCriteria;\n                }\n                break;\n            case 'contentShare':\n                if (data && data.content) {\n                    window.eventData.sharePlatform = data.content[0].sharePlatform;\n                }\n                break;\n            case 'contentLinkClick':\n                if (data && data.link) {\n                    window.eventData.action = { name: pageData.page.productName + ':' + (data.link.type || 'no link type') + ':' + (data.link.name || 'no link name') };\n                }\n                break;\n            case 'contentWindowLoad':\n            case 'contentTabClick':\n                if (data && data.content) {\n                    window.eventData.tabName = data.content[0].tabName || '';\n                    window.eventData.windowName = data.content[0].windowName || '';\n                }\n                break;\n            case 'userProfileUpdate':\n                if (data && data.user) {\n                    if (Object.prototype.toString.call(data.user) === \"[object Array]\") {\n                        window.eventData.user = data.user[0];\n                    }\n                }\n                break;\n            case 'videoStart':\n                if (data.video) {\n                    data.video.length = parseFloat(data.video.length || '0');\n                    data.video.position = parseFloat(data.video.position || '0');\n                    s.Media.open(data.video.id, data.video.length, s.Media.playerName);\n                    s.Media.play(data.video.id, data.video.position);\n                }\n                break;\n            case 'videoPlay':\n                if (data.video) {\n                    data.video.position = parseFloat(data.video.position || '0');\n                    s.Media.play(data.video.id, data.video.position);\n                }\n                break;\n            case 'videoStop':\n                if (data.video) {\n                    data.video.position = parseFloat(data.video.position || '0');\n                    s.Media.stop(data.video.id, data.video.position);\n                }\n                break;\n            case 'videoComplete':\n                if (data.video) {\n                    data.video.position = parseFloat(data.video.position || '0');\n                    s.Media.stop(data.video.id, data.video.position);\n                    s.Media.close(data.video.id);\n                }\n                break;\n            case 'addWebsiteExtension':\n                if(data && data.page) {\n                    val = {\n                        wx: data.page.websiteExtension\n                    }\n                }\n                break;\n        }\n\n        if (val) {\n            this.setCookie(this.eventCookieName, val);\n        }\n    }\n\n    ,registerCallbacks: function() {\n        var self = this;\n        if(window.usabilla_live) {\n            window.usabilla_live('setEventCallback', function(category, action, label, value) {\n                if(action == 'Campaign:Open') {\n                    self.trackEvent('ctaImpression', {\n                        cta: {\n                            ids: ['usabillaid:' + label]\n                        }\n                    });\n                } else if(action == 'Campaign:Success') {\n                    self.trackEvent('ctaClick', {\n                        cta: {\n                            ids: ['usabillaid:' + label]\n                        }\n                    });\n                }\n            });\n        }\n    }\n\n    ,getConsortiumAccountId: function() {\n        var id = '';\n        if (window.pageData && pageData.visitor && (pageData.visitor.consortiumId || pageData.visitor.accountId)) {\n            id = (pageData.visitor.consortiumId || 'no consortium ID') + '|' + (pageData.visitor.accountId || 'no account ID');\n        }\n\n        return id;\n    }\n\n    ,getSearchClickPosition: function() {\n        if (window.eventData && eventData.search && eventData.search.resultsPosition) {\n            var pos = parseInt(eventData.search.resultsPosition), clickPos;\n            if (!isNaN(pos)) {\n                var page = pageData.search.currentPage ? parseInt(pageData.search.currentPage) : '', perPage = pageData.search.resultsPerPage ? parseInt(pageData.search.resultsPerPage) : '';\n                if (!isNaN(page) && !isNaN(perPage)) {\n                    clickPos = pos + ((page - 1) * perPage);\n                }\n            }\n            return clickPos ? clickPos.toString() : eventData.search.resultsPosition;\n        }\n        return '';\n    }\n\n    ,getSearchFacets: function() {\n        var facetList = '';\n        if (window.pageData && pageData.search && pageData.search.facets) {\n            if (typeof(pageData.search.facets) == 'object') {\n                for (var i=0; i<pageData.search.facets.length; i++) {\n                    var f = pageData.search.facets[i];\n                    facetList += (facetList ? '|' : '') + f.name + '=' + f.values.join('^');\n                }\n            }\n        }\n        return facetList;\n    }\n\n    ,getSearchResultsByType: function() {\n        var resultTypes = '';\n        if (window.pageData && pageData.search && pageData.search.resultsByType) {\n            for (var i=0; i<pageData.search.resultsByType.length; i++) {\n                var r = pageData.search.resultsByType[i];\n                resultTypes += (resultTypes ? '|' : '') + r.name + (r.results || r.values ? '=' + (r.results || r.values) : '');\n            }\n        }\n        return resultTypes;\n    }\n\n    ,getJournalInfo: function() {\n        var info = '';\n        if (window.pageData && pageData.journal && (pageData.journal.name || pageData.journal.specialty || pageData.journal.section || pageData.journal.issn || pageData.journal.issueNumber || pageData.journal.volumeNumber)) {\n            var journal = pageData.journal;\n            return (journal.name || 'no name') + '|' + (journal.specialty || 'no specialty') + '|' + (journal.section || 'no section') + '|' + (journal.issn || 'no issn') + '|' + (journal.issueNumber || 'no issue #') + '|' + (journal.volumeNumber || 'no volume #');\n        }\n        return info;\n    }\n\n    ,getBibliographicInfo: function(doc) {\n        if (!doc || !(doc.publisher || doc.indexTerms || doc.publicationType || doc.publicationRights || doc.volumeNumber || doc.issueNumber || doc.subjectAreas || doc.isbn)) {\n            return '';\n        }\n\n        var terms = doc.indexTerms ? doc.indexTerms.split('+') : '';\n        if (terms) {\n            terms = terms.slice(0, 5).join('+');\n            terms = terms.length > 100 ? terms.substring(0, 100) : terms;\n        }\n\n        var areas = doc.subjectAreas ? doc.subjectAreas.split('>') : '';\n        if (areas) {\n            areas = areas.slice(0, 5).join('>');\n            areas = areas.length > 100 ? areas.substring(0, 100) : areas;\n        }\n\n        var biblio\t= (doc.publisher || 'none')\n            + '^' + (doc.publicationType || 'none')\n            + '^' + (doc.publicationRights || 'none')\n            + '^' + (terms || 'none')\n            + '^' + (doc.volumeNumber || 'none')\n            + '^' + (doc.issueNumber || 'none')\n            + '^' + (areas || 'none')\n            + '^' + (doc.isbn || 'none');\n\n        return this.stripProductDelimiters(biblio).toLowerCase();\n    }\n\n    ,getContentItem: function() {\n        var docs = window.eventData && eventData.content ? eventData.content : pageData.content;\n        if (docs && docs.length > 0) {\n            return docs[0];\n        }\n    }\n\n    ,getFormattedDate: function(ts) {\n        if (!ts) {\n            return '';\n        }\n\n        var d = new Date(parseInt(ts) * 1000);\n\n        // now do formatting\n        var year = d.getFullYear()\n            ,month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1)\n            ,date = (d.getDate() < 10 ? '0' : '') + d.getDate()\n            ,hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()\n            ,mins = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()\n            ,ampm = d.getHours() > 12 ? 'pm' : 'am';\n\n        hours = (hours < 10 ? '0' : '') + hours;\n        return year + '-' + month + '-' + date;\n    }\n\n    ,getVisitorId: function() {\n        var orgId = '4D6368F454EC41940A4C98A6@AdobeOrg';\n        if(Visitor && Visitor.getInstance(orgId)) {\n            return Visitor.getInstance(orgId).getMarketingCloudVisitorID();\n        } else {\n            return ''\n        }\n    }\n\n    ,setProductsVariable: function() {\n        var prodList = window.eventData && eventData.content ? eventData.content : pageData.content\n            ,prods = [];\n        if (prodList) {\n            for (var i=0; i<prodList.length; i++) {\n                if (prodList[i].id || prodList[i].type || prodList[i].publishDate || prodList[i].onlineDate) {\n                    if (!prodList[i].id) {\n                        prodList[i].id = 'no id';\n                    }\n                    var prodName = (pageData.page.productName || 'xx').toLowerCase();\n                    if (prodList[i].id.indexOf(prodName + ':') != 0) {\n                        prodList[i].id = prodName + ':' + prodList[i].id;\n                    }\n                    prodList[i].id = this.stripProductDelimiters(prodList[i].id);\n                    var merch = [];\n                    if (prodList[i].format) {\n                        merch.push('evar17=' + this.stripProductDelimiters(prodList[i].format.toLowerCase()));\n                    }\n                    if (prodList[i].type) {\n                        var type = prodList[i].type;\n                        if (prodList[i].accessType) {\n                            type += ':' + prodList[i].accessType;\n                        }\n                        merch.push('evar20=' + this.stripProductDelimiters(type.toLowerCase()));\n                    }\n                    if(!prodList[i].title) {\n                        prodList[i].title = prodList[i].name;\n                    }\n                    if (prodList[i].title) {\n                        merch.push('evar75=' + this.stripProductDelimiters(prodList[i].title.toLowerCase()));\n                    }\n                    if (prodList[i].breadcrumb) {\n                        merch.push('evar63=' + this.stripProductDelimiters(prodList[i].breadcrumb).toLowerCase());\n                    }\n                    var nowTs = new Date().getTime()/1000;\n                    if (prodList[i].onlineDate && !isNaN(prodList[i].onlineDate)) {\n                        if(prodList[i].onlineDate > 32503680000) {\n                            prodList[i].onlineDate = prodList[i].onlineDate/1000;\n                        }\n                        merch.push('evar122=' + this.stripProductDelimiters(pageDataTracker.getFormattedDate(prodList[i].onlineDate)));\n                        var onlineAge = Math.floor((nowTs - prodList[i].onlineDate) / 86400);\n                        onlineAge = (onlineAge === 0) ? 'zero' : onlineAge;\n                        merch.push('evar128=' + onlineAge);\n                    }\n                    if (prodList[i].publishDate && !isNaN(prodList[i].publishDate)) {\n                        if(prodList[i].publishDate > 32503680000) {\n                            prodList[i].publishDate = prodList[i].publishDate/1000;\n                        }\n                        merch.push('evar123=' + this.stripProductDelimiters(pageDataTracker.getFormattedDate(prodList[i].publishDate)));\n                        var publishAge = Math.floor((nowTs - prodList[i].publishDate) / 86400);\n                        publishAge = (publishAge === 0) ? 'zero' : publishAge;\n                        merch.push('evar127=' + publishAge);\n                    }\n                    if (prodList[i].onlineDate && prodList[i].publishDate) {\n                        merch.push('evar38=' + this.stripProductDelimiters(pageDataTracker.getFormattedDate(prodList[i].onlineDate) + '^' + pageDataTracker.getFormattedDate(prodList[i].publishDate)));\n                    }\n                    if (prodList[i].mapId) {\n                        merch.push('evar70=' + this.stripProductDelimiters(prodList[i].mapId));\n                    }\n\t\t\t\t\tif (prodList[i].relevancyScore) {\n\t\t\t\t\t\tmerch.push('evar71=' + this.stripProductDelimiters(prodList[i].relevancyScore));\n\t\t\t\t\t}\n                    if (prodList[i].status) {\n                        merch.push('evar73=' + this.stripProductDelimiters(prodList[i].status));\n                    }\n                    if (prodList[i].previousStatus) {\n                        merch.push('evar111=' + this.stripProductDelimiters(prodList[i].previousStatus));\n                    }\n                    if (prodList[i].entitlementType) {\n                        merch.push('evar80=' + this.stripProductDelimiters(prodList[i].entitlementType));\n                    }\n                    if (prodList[i].recordType) {\n                        merch.push('evar93=' + this.stripProductDelimiters(prodList[i].recordType));\n                    }\n                    if (prodList[i].exportType) {\n                        merch.push('evar99=' + this.stripProductDelimiters(prodList[i].exportType));\n                    }\n                    if (prodList[i].importType) {\n                        merch.push('evar142=' + this.stripProductDelimiters(prodList[i].importType));\n                    }\n                    if (prodList[i].section) {\n                        merch.push('evar100=' + this.stripProductDelimiters(prodList[i].section));\n                    }\n                    if (prodList[i].detail) {\n                        merch.push('evar104=' + this.stripProductDelimiters(prodList[i].detail.toLowerCase()));\n                    } else if(prodList[i].details) {\n                        merch.push('evar104=' + this.stripProductDelimiters(prodList[i].details.toLowerCase()));\n                    }\n                    if (prodList[i].position) {\n                        merch.push('evar116=' + this.stripProductDelimiters(prodList[i].position));\n                    }\n                    if (prodList[i].publicationTitle) {\n                        merch.push('evar129=' + this.stripProductDelimiters(prodList[i].publicationTitle));\n                    }\n                    if (prodList[i].specialIssueTitle) {\n                        merch.push('evar130=' + this.stripProductDelimiters(prodList[i].specialIssueTitle));\n                    }\n                    if (prodList[i].specialIssueNumber) {\n                        merch.push('evar131=' + this.stripProductDelimiters(prodList[i].specialIssueNumber));\n                    }\n                    if (prodList[i].referenceModuleTitle) {\n                        merch.push('evar139=' + this.stripProductDelimiters(prodList[i].referenceModuleTitle));\n                    }\n                    if (prodList[i].referenceModuleISBN) {\n                        merch.push('evar140=' + this.stripProductDelimiters(prodList[i].referenceModuleISBN));\n                    }\n                    if (prodList[i].volumeTitle) {\n                        merch.push('evar132=' + this.stripProductDelimiters(prodList[i].volumeTitle));\n                    }\n                    if (prodList[i].publicationSection) {\n                        merch.push('evar133=' + this.stripProductDelimiters(prodList[i].publicationSection));\n                    }\n                    if (prodList[i].publicationSpecialty) {\n                        merch.push('evar134=' + this.stripProductDelimiters(prodList[i].publicationSpecialty));\n                    }\n                    if (prodList[i].issn) {\n                        merch.push('evar135=' + this.stripProductDelimiters(prodList[i].issn));\n                    }\n                    if (prodList[i].id2) {\n                        merch.push('evar159=' + this.stripProductDelimiters(prodList[i].id2));\n                    }\n                    if (prodList[i].id3) {\n                        merch.push('evar160=' + this.stripProductDelimiters(prodList[i].id3));\n                    }\n                    if (prodList[i].provider) {\n                        merch.push('evar164=' + this.stripProductDelimiters(prodList[i].provider));\n                    }\n                    if (prodList[i].citationStyle) {\n                        merch.push('evar170=' + this.stripProductDelimiters(prodList[i].citationStyle));\n                    }\n\n                    var biblio = this.getBibliographicInfo(prodList[i]);\n                    if (biblio) {\n                        merch.push('evar28=' + biblio);\n                    }\n\n                    if (prodList[i].turnawayId) {\n                        pageData.eventList.push('product turnaway');\n                    }\n\n                    var price = prodList[i].price || '', qty = prodList[i].quantity || '', evts = [];\n                    if (price && qty) {\n                        qty = parseInt(qty || '1');\n                        price = parseFloat(price || '0');\n                        price = (price * qty).toFixed(2);\n\n                        if (window.eventData && eventData.eventName && eventData.eventName == 'cartAdd') {\n                            evts.push('event20=' + price);\n                        }\n                    }\n\n                    var type = window.pageData && pageData.page && pageData.page.type ? pageData.page.type : '', evt = window.eventData && eventData.eventName ? eventData.eventName : '';\n                    if (type.match(/^CP\\-/gi) !== null && (!evt || evt == 'newPage' || evt == 'contentView')) {\n                        evts.push('event181=1');\n                    }\n                    if (evt == 'contentDownload' || type.match(/^CP\\-DL/gi) !== null) {\n                        evts.push('event182=1');\n                    }\n                    if (evt == 'contentExport') {\n                        evts.push('event184=1');\n                    }\n                    if (this.eventFires('recommendationViews')) {\n                        evts.push('event264=1');\n                    }\n\n                    if(prodList[i].datapoints) {\n                        evts.push('event239=' + prodList[i].datapoints);\n                    }\n                    if(prodList[i].documents) {\n                        evts.push('event240=' + prodList[i].documents);\n                    }\n\n                    prods.push([\n                        ''\t\t\t\t\t// empty category\n                        ,prodList[i].id\t\t// id\n                        ,qty\t\t\t\t// qty\n                        ,price\t\t\t\t// price\n                        ,evts.join('|')\t\t// events\n                        ,merch.join('|')\t// merchandising eVars\n                    ].join(';'));\n                }\n            }\n        }\n\n        return prods.join(',');\n    }\n    ,eventFires: function(eventName) {\n      var evt = window.eventData && eventData.eventName ? eventData.eventName : '';\n      if(evt == eventName) {\n        return true;\n      }\n      // initial pageload and new pages\n      if((!window.eventData || evt == 'newPage') && window.pageData && window.pageData.trackEvents) {\n        var tEvents = window.pageData.trackEvents;\n        for(var i=0; i<tEvents.length; i++) {\n          if(tEvents[i] == eventName) {\n            return true;\n          }\n        }\n      }\n      return false;\n    }\n\n    ,md5: function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k=\"\",F=\"\",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F=\"0\"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,\"n\");var d=\"\";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()}\n    ,stripProductDelimiters: function(val) {\n        if (val) {\n            return val.replace(/\\;|\\||\\,/gi, '-');\n        }\n    }\n\n    ,setCookie: function(name, value, seconds, domain) {\n        domain = document.location.hostname;\n        var expires = '';\n        var expiresNow = '';\n        var date = new Date();\n        date.setTime(date.getTime() + (-1 * 1000));\n        expiresNow = \"; expires=\" + date.toGMTString();\n\n        if (typeof(seconds) != 'undefined') {\n            date.setTime(date.getTime() + (seconds * 1000));\n            expires = '; expires=' + date.toGMTString();\n        }\n\n        var type = typeof(value);\n        type = type.toLowerCase();\n        if (type != 'undefined' && type != 'string') {\n            value = JSON.stringify(value);\n        }\n\n        // fix scoping issues\n        // keep writing the old cookie, but make it expire\n        document.cookie = name + '=' + value + expiresNow + '; path=/';\n\n        // now just set the right one\n        document.cookie = name + '=' + value + expires + '; path=/; domain=' + domain;\n    }\n\n    ,getCookie: function(name) {\n        name = name + '=';\n        var carray = document.cookie.split(';'), value;\n\n        for (var i=0; i<carray.length; i++) {\n            var c = carray[i];\n            while (c.charAt(0) == ' ') {\n                c = c.substring(1, c.length);\n            }\n            if (c.indexOf(name) == 0) {\n                value = c.substring(name.length, c.length);\n                try {\n                    value = JSON.parse(value);\n                } catch(ex) {}\n\n                return value;\n            }\n        }\n\n        return null;\n    }\n\n    ,deleteCookie: function(name) {\n        this.setCookie(name, '', -1);\n        this.setCookie(name, '', -1, document.location.hostname);\n    }\n\n    ,mapAdobeVars: function(s) {\n        var vars = {\n            pageName\t\t: 'Page - Analytics Pagename'\n            ,channel\t\t: 'Page - Section Name'\n            ,campaign\t\t: 'Campaign - ID'\n            ,currencyCode\t: 'Page - Currency Code'\n            ,purchaseID\t\t: 'Order - ID'\n            ,prop1\t\t\t: 'Visitor - Account ID'\n            ,prop2\t\t\t: 'Page - Product Name'\n            ,prop4\t\t\t: 'Page - Type'\n            ,prop6\t\t\t: 'Search - Type'\n            ,prop7\t\t\t: 'Search - Facet List'\n            ,prop8\t\t\t: 'Search - Feature Used'\n            ,prop12\t\t\t: 'Visitor - User ID'\n            ,prop13\t\t\t: 'Search - Sort Type'\n            ,prop14\t\t\t: 'Page - Load Time'\n            ,prop15         : 'Support - Topic Name'\n            ,prop16\t\t\t: 'Page - Business Unit'\n            ,prop21\t\t\t: 'Search - Criteria'\n            ,prop24\t\t\t: 'Page - Language'\n            ,prop25\t\t\t: 'Page - Product Feature'\n            ,prop28         : 'Support - Search Criteria'\n            ,prop30\t\t\t: 'Visitor - IP Address'\n            ,prop33         : 'Page - Product Application Version'\n            ,prop34         : 'Page - Website Extensions'\n            ,prop60\t\t\t: 'Search - Data Form Criteria'\n            ,prop65         : 'Page - Online State'\n            ,prop67         : 'Research Networks'\n\n            ,eVar3\t\t\t: 'Search - Total Results'\n            ,eVar7\t\t\t: 'Visitor - Account Name'\n            ,eVar15\t\t\t: 'Event - Search Results Click Position'\n            ,eVar19\t\t\t: 'Search - Advanced Criteria'\n            ,eVar21\t\t\t: 'Promo - Clicked ID'\n            ,eVar22\t\t\t: 'Page - Test ID'\n            ,eVar27\t\t\t: 'Event - AutoSuggest Search Data'\n            ,eVar157\t\t: 'Event - AutoSuggest Search Typed Term'\n            ,eVar156\t\t: 'Event - AutoSuggest Search Selected Term'\n            ,eVar162\t\t: 'Event - AutoSuggest Search Category'\n            ,eVar163\t\t: 'Event - AutoSuggest Search Details'\n            ,eVar33\t\t\t: 'Visitor - Access Type'\n            ,eVar34\t\t\t: 'Order - Promo Code'\n            ,eVar39\t\t\t: 'Order - Payment Method'\n            ,eVar41\t\t\t: 'Visitor - Industry'\n            ,eVar42\t\t\t: 'Visitor - SIS ID'\n            ,eVar43\t\t\t: 'Page - Error Type'\n            ,eVar44\t\t\t: 'Event - Updated User Fields'\n            ,eVar48\t\t\t: 'Email - Recipient ID'\n            ,eVar51\t\t\t: 'Email - Message ID'\n            ,eVar52\t\t\t: 'Visitor - Department ID'\n            ,eVar53\t\t\t: 'Visitor - Department Name'\n            ,eVar60\t\t\t: 'Search - Within Content Criteria'\n            ,eVar61\t\t\t: 'Search - Within Results Criteria'\n            ,eVar62\t\t\t: 'Search - Result Types'\n            ,eVar74\t\t\t: 'Page - Journal Info'\n            ,eVar76\t\t\t: 'Email - Broadlog ID'\n            ,eVar78\t\t\t: 'Visitor - Details'\n            ,eVar80         : 'Visitor - Usage Path Info'\n            ,eVar102\t\t: 'Form - Name'\n            ,eVar103        : 'Event - Conversion Driver'\n            ,eVar105        : 'Search - Current Page'\n            ,eVar106        : 'Visitor - App Session ID'\n            ,eVar107        : 'Page - Secondary Product Name'\n            ,eVar117        : 'Search - Database'\n            ,eVar126        : 'Page - Environment'\n            ,eVar141        : 'Search - Criteria Original'\n            ,eVar143        : 'Page - Tabs'\n            ,eVar161        : 'Search - Channel'\n            ,eVar169        : 'Search - Facet Operation'\n            ,eVar173        : 'Search - Details'\n            ,eVar174        : 'Campaign - Spredfast ID'\n            ,eVar175        : 'Visitor - TMX Device ID'\n            ,eVar176        : 'Visitor - TMX Request ID'\n            ,eVar148        : 'Visitor - Platform Name'\n            ,eVar149        : 'Visitor - Platform ID'\n            ,eVar152        : 'Visitor - Product ID'\n            ,eVar153        : 'Visitor - Superaccount ID'\n            ,eVar154        : 'Visitor - Superaccount Name'\n            ,eVar177        : 'Page - Context Domain'\n            ,eVar189    : 'Page - Experimentation User Id'\n            ,eVar190    : 'Page - Identity User'\n\n            ,list2\t\t\t: 'Page - Widget Names'\n            ,list3\t\t\t: 'Promo - IDs'\n        };\n\n        for (var i in vars) {\n            s[i] = s[i] ? s[i] : _satellite.getVar(vars[i]);\n        }\n    }\n};\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL477c5f510d31411ab31110d40517bba6',
            name: 'Event - Search Within Content',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'searchWithinContent' },
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
                      {
                        name: 'eVar60',
                        type: 'value',
                        value: '%Search - Within Content Criteria%',
                      },
                    ],
                    events: [{ name: 'event75' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'search within content', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL47d6dd8ac6074ab9b17b4ef3cf2a070c',
            name: 'Event - Navigation Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'navigationClick' },
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
                      { name: 'eVar12', type: 'value', value: '%Event - Navigation Link Name%' },
                    ],
                    props: [
                      { name: 'prop26', type: 'value', value: '%Event - Navigation Link Name%' },
                    ],
                    events: [{ name: 'event45' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'navigation click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL48b800486cd34347997acc42b6e95ff2',
            name: 'Event - New Page',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'newPage' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { pageName: '%Page - Analytics Pagename%' } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RLbc47031479fa4453a20a66514699f006',
            name: 'Event - AA Button Click',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '[data-aa-button]', bubbleFireIfChildFired: !1 },
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
                      (t.eVar124 = this.getAttribute('data-aa-button')),
                        (t.linkTrackVars = t.apl(t.linkTrackVars, 'eVar124', ',', 2)),
                        (window.eventData = {}),
                        (window.s_objectID = window.s_objectID ? window.s_objectID : 'test');
                    },
                  },
                  trackerProperties: { events: [{ name: 'event204' }] },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'AA Button Click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL4ae63feca0d94e159f863f91b4959beb',
            name: 'Event - Content View',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'contentView' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: { trackerProperties: { events: [{ name: 'event5' }] } },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'content view', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL4d507167b3654a218cabe475f0ca8b21',
            name: 'Event - Edit Alert Start',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'editAlertStart' },
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
                      { name: 'eVar97', type: 'value', value: '%Event - Alert Type%' },
                      { name: 'eVar1', type: 'value', value: '%Search - Criteria%' },
                    ],
                    props: [{ name: 'prop21', type: 'value', value: '%Search - Criteria%' }],
                    events: [{ name: 'event236' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'edit alert start', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL58216b18acc54943b8f64ee707feb9b0',
            name: 'Event - Export',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'rowsExported' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar69', type: 'value', value: '%Event - Rows Exported%' }],
                    events: [{ name: 'event39' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'rows exported', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL58f9b17393ea4fe89422ebc555b500f0',
            name: 'Event - Saved Search',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'saveSearch' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'saved search', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RLa630ea3ce6bb46ac92ebac6beea15c10',
            name: 'Event - Campaign Referral Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'campaignReferralClick' },
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
                      { name: 'prop55', type: 'value', value: '%Event - Link Referral Name%' },
                    ],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'campaign referral click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL1c1c3e610fbe4858864b5a15cd23ce8e',
            name: 'Event - Recommendation Click',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'recommendationClick' },
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
                        name: 'prop33',
                        type: 'value',
                        value: '%Page - Product Application Version%',
                      },
                    ],
                    events: [{ name: 'event265' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'recommendation click', linkType: 'o' },
              },
            ],
          },
          {
            id: 'RL1dfc461db42747c7b1e370ef2889fbff',
            name: 'Event - Recommendation Views',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'recommendationViews' },
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
                        name: 'prop33',
                        type: 'value',
                        value: '%Page - Product Application Version%',
                      },
                    ],
                    events: [{ name: 'event257' }, { name: 'event264' }],
                  },
                },
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'recommendation views', linkType: 'o' },
              },
            ],
          },
        ],
      });
    var $___var_daeec65ee73d6d57 = (function () {
      const $___old_4c4429d814ba6516 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_4c4429d814ba6516)
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
            var a = this.constructor;
            return this.then(
              function (e) {
                return a.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return a.resolve(t()).then(function () {
                  return a.reject(e);
                });
              }
            );
          }
          function l (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function n () {}
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
          function s (n, r) {
            for (; 3 === n._state; ) n = n._value;
            0 !== n._state
              ? ((n._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === n._state ? r.onFulfilled : r.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(n._value);
                    } catch (a) {
                      return void c(r.promise, a);
                    }
                    o(r.promise, t);
                  } else (1 === n._state ? o : c)(r.promise, n._value);
                }))
              : n._deferreds.push(r);
          }
          function o (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var a = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof a) return void p(r(a, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (n) {
              c(e, n);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              i._immediateFn(function () {
                e._handled || i._unhandledRejectionFn(e._value);
              });
            for (var t = 0, a = e._deferreds.length; t < a; t++) s(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d (e, t, a) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = a);
          }
          function p (e, t) {
            var a = !1;
            try {
              e(
                function (e) {
                  a || ((a = !0), o(t, e));
                },
                function (e) {
                  a || ((a = !0), c(t, e));
                }
              );
            } catch (n) {
              if (a) return;
              (a = !0), c(t, n);
            }
          }
          function f (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function a () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, a = 0; a < 10; a++) t['_' + String.fromCharCode(a)] = a;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var n = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  n[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
              );
            } catch (r) {
              return !1;
            }
          }
          function v (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var g = function (e) {
                var a = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        a.push({ rule: t, event: e });
                      });
                  }),
                  a.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              m = 'debug',
              h = function (t, e) {
                var a = function () {
                    return 'true' === t.getItem(m);
                  },
                  n = function (e) {
                    t.setItem(m, e);
                  },
                  r = [],
                  i = function (e) {
                    r.push(e);
                  };
                return (
                  (e.outputEnabled = a()),
                  {
                    onDebugChanged: i,
                    getDebugEnabled: a,
                    setDebugEnabled: function (t) {
                      a() !== t &&
                        (n(t),
                        (e.outputEnabled = t),
                        r.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              b = 'Module did not export a function.',
              k = function (i, s) {
                return function (e, t, a) {
                  a = a || [];
                  var n = i.getModuleExports(e.modulePath);
                  if ('function' != typeof n) throw new Error(b);
                  var r = s(e.settings || {}, t);
                  return n.bind(null, r).apply(null, a);
                };
              },
              y = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              D = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              C = '\uD83D\uDE80',
              w =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : C,
              T = !1,
              _ = function (e) {
                if (T && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(w),
                    e !== D.DEBUG || window.console[e] || (e = D.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              V = _.bind(null, D.LOG),
              P = _.bind(null, D.INFO),
              S = _.bind(null, D.DEBUG),
              I = _.bind(null, D.WARN),
              E = _.bind(null, D.ERROR),
              A = {
                log: V,
                info: P,
                debug: S,
                warn: I,
                error: E,
                get outputEnabled () {
                  return T;
                },
                set outputEnabled (e) {
                  T = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: V.bind(null, t),
                    info: P.bind(null, t),
                    debug: S.bind(null, t),
                    warn: I.bind(null, t),
                    error: E.bind(null, t),
                  };
                },
              },
              O = e(function (n) {
                !(function (e) {
                  if (((n.exports = e()), !!0)) {
                    var t = window.Cookies,
                      a = (window.Cookies = e());
                    a.noConflict = function () {
                      return (window.Cookies = t), a;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var a = arguments[e];
                      for (var n in a) t[n] = a[n];
                    }
                    return t;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (l) {
                    function o () {}
                    function a (e, t, a) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (a = c({ path: '/' }, o.defaults, a)).expires &&
                          (a.expires = new Date(1 * new Date() + 86400000 * a.expires)),
                          (a.expires = a.expires ? a.expires.toUTCString() : '');
                        try {
                          var n = JSON.stringify(t);
                          /^[\{\[]/.test(n) && (t = n);
                        } catch (s) {}
                        (t = l.write
                          ? l.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var r = '';
                        for (var i in a)
                          a[i] &&
                            ((r += '; ' + i), !0 !== a[i] && (r += '=' + a[i].split(';')[0]));
                        return (document.cookie = e + '=' + t + r);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var a = {},
                            n = document.cookie ? document.cookie.split('; ') : [],
                            r = 0;
                          r < n.length;
                          r++
                        ) {
                          var i = n[r].split('='),
                            s = i.slice(1).join('=');
                          t || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                          try {
                            var o = u(i[0]);
                            if (((s = (l.read || l)(s, o) || u(s)), t))
                              try {
                                s = JSON.parse(s);
                              } catch (c) {}
                            if (((a[o] = s), e === o)) break;
                          } catch (c) {}
                        }
                        return e ? a[e] : a;
                      }
                    }
                    return (
                      (o.set = a),
                      (o.get = function (e) {
                        return t(e, !1);
                      }),
                      (o.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (o.remove = function (e, t) {
                        a(e, '', c(t, { expires: -1 }));
                      }),
                      (o.defaults = {}),
                      (o.withConverter = e),
                      o
                    );
                  }
                  return e(function () {});
                });
              }),
              L = { get: O.get, set: O.set, remove: O.remove },
              j = window,
              M = 'com.adobe.reactor.',
              x = function (n, e) {
                var r = M + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_f7a8f9b1212fef7a = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_f7a8f9b1212fef7a)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return j[n].getItem(r + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_f7a8f9b1212fef7a)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_f7a8f9b1212fef7a
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_c577c252b9cd21ca = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_c577c252b9cd21ca)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return j[n].setItem(r + e, t), !0;
                        } catch (a) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_c577c252b9cd21ca)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_c577c252b9cd21ca
                        ));
                    }
                  },
                };
              },
              N = '_sdsat_',
              R = 'dataElements.',
              F = 'dataElementCookiesMigrated',
              U = x('localStorage'),
              H = x('sessionStorage', R),
              B = x('localStorage', R),
              W = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              Y = {},
              X = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (a) {}
                return t;
              },
              G = function (e, t, a) {
                var n;
                switch (t) {
                  case W.PAGEVIEW:
                    return void (Y[e] = a);
                  case W.SESSION:
                    return void ((n = X(a)) && H.setItem(e, n));
                  case W.VISITOR:
                    return void ((n = X(a)) && B.setItem(e, n));
                }
              },
              q = function (e, t) {
                var a = L.get(N + e);
                a !== undefined && G(e, t, a);
              },
              z = {
                setValue: G,
                getValue: function (e, t) {
                  var a;
                  switch (t) {
                    case W.PAGEVIEW:
                      return Y.hasOwnProperty(e) ? Y[e] : null;
                    case W.SESSION:
                      return null === (a = H.getItem(e)) ? a : JSON.parse(a);
                    case W.VISITOR:
                      return null === (a = B.getItem(e)) ? a : JSON.parse(a);
                  }
                },
                migrateCookieData: function (t) {
                  U.getItem(F) ||
                    (Object.keys(t).forEach(function (e) {
                      q(e, t[e].storageDuration);
                    }),
                    U.setItem(F, !0));
                },
              },
              J = function (e, t, a, n) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  a +
                  (n ? '\n' + n : '')
                );
              },
              K = function (o, c, l, u) {
                return function (e, t) {
                  var a = c(e);
                  if (!a) return u ? '' : undefined;
                  var n,
                    r = a.storageDuration;
                  try {
                    n = o.getModuleExports(a.modulePath);
                  } catch (s) {
                    return void A.error(J(a, e, s.message, s.stack));
                  }
                  if ('function' == typeof n) {
                    var i;
                    try {
                      i = n(l(a.settings, t), t);
                    } catch (s) {
                      return void A.error(J(a, e, s.message, s.stack));
                    }
                    return (
                      r && (null != i ? z.setValue(e, r, i) : (i = z.getValue(e, r))),
                      null == i && null != a.defaultValue && (i = a.defaultValue),
                      'string' == typeof i &&
                        (a.cleanText && (i = y(i)), a.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  A.error(J(a, e, 'Module did not export a function.'));
                };
              },
              $ = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return y(e.textContent);
                },
              },
              Q = function (e, t, a) {
                for (var n, r = e, i = 0, s = t.length; i < s; i++) {
                  if (null == r) return undefined;
                  var o = t[i];
                  if (a && '@' === o.charAt(0)) {
                    var c = o.slice(1);
                    r = $[c](r);
                  } else if (r.getAttribute && (n = o.match(/^getAttribute\((.+)\)$/))) {
                    var l = n[1];
                    r = r.getAttribute(l);
                  } else r = r[o];
                }
                return r;
              },
              Z = function (i, s, o) {
                return function (e, t) {
                  var a;
                  if (s(e)) a = o(e, t);
                  else {
                    var n = e.split('.'),
                      r = n.shift();
                    'this' === r
                      ? t && (a = Q(t.element, n, !0))
                      : 'event' === r
                      ? t && (a = Q(t, n))
                      : 'target' === r
                      ? t && (a = Q(t.target, n))
                      : (a = Q(i[r], n));
                  }
                  return a;
                };
              },
              ee = function (a, n) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    n(e) || 'this' === t || 'event' === t || 'target' === t || a.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, a) {
                var n = { exports: {} };
                return e.call(n.exports, n, n.exports, t, a), n.exports;
              },
              ae = function () {
                var s = {},
                  a = function (e) {
                    var t = s[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(s).forEach(function (e) {
                      try {
                        n(e);
                      } catch (a) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          a.message +
                          (a.stack ? '\n' + a.stack : '');
                        A.error(t);
                      }
                    });
                  },
                  n = function (e) {
                    var t = a(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, a, n, r) {
                    var i = { definition: t, extensionName: a, require: n, turbine: r };
                    (i.require = n), (s[e] = i);
                  },
                  hydrateCache: e,
                  getModuleExports: n,
                  getModuleDefinition: function (e) {
                    return a(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return a(e).extensionName;
                  },
                };
              },
              ne = !1,
              re = function (n) {
                return function (t, a) {
                  var e = n._monitors;
                  e &&
                    (ne ||
                      (A.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ne = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](a);
                    }));
                };
              },
              ie = function (r, i, s) {
                var a,
                  n,
                  o,
                  c,
                  l = [],
                  u = function (e, t, a) {
                    if (!r(t)) return e;
                    l.push(t);
                    var n = i(t, a);
                    return l.pop(), null == n && s ? '' : n;
                  };
                return (
                  (a = function (e, a) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? u(e, t[1], a)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return u(e, t, a);
                        });
                  }),
                  (n = function (e, t) {
                    for (var a = {}, n = Object.keys(e), r = 0; r < n.length; r++) {
                      var i = n[r],
                        s = e[i];
                      a[i] = c(s, t);
                    }
                    return a;
                  }),
                  (o = function (e, t) {
                    for (var a = [], n = 0, r = e.length; n < r; n++) a.push(c(e[n], t));
                    return a;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? a(e, t)
                      : Array.isArray(e)
                      ? o(e, t)
                      : 'object' == typeof e && null !== e
                      ? n(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < l.length
                      ? (A.error('Data element circular reference detected: ' + l.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              se = function (r) {
                return function (e, t) {
                  if ('string' == typeof e) r[arguments[0]] = t;
                  else if (arguments[0]) {
                    var a = arguments[0];
                    for (var n in a) r[n] = a[n];
                  }
                };
              },
              oe = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, t) {
                var a = new this.constructor(n);
                return s(this, new d(e, t, a)), a;
              }),
              (i.prototype['finally'] = t),
              (i.all = function (t) {
                return new i(function (r, i) {
                  function s (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var a = e.then;
                        if ('function' == typeof a)
                          return void a.call(
                            e,
                            function (e) {
                              s(t, e);
                            },
                            i
                          );
                      }
                      (o[t] = e), 0 == --c && r(o);
                    } catch (n) {
                      i(n);
                    }
                  }
                  if (!l(t)) return i(new TypeError('Promise.all accepts an array'));
                  var o = Array.prototype.slice.call(t);
                  if (0 === o.length) return r([]);
                  for (var c = o.length, e = 0; e < o.length; e++) s(e, o[e]);
                });
              }),
              (i.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              }),
              (i.reject = function (a) {
                return new i(function (e, t) {
                  t(a);
                });
              }),
              (i.race = function (r) {
                return new i(function (e, t) {
                  if (!l(r)) return t(new TypeError('Promise.race accepts an array'));
                  for (var a = 0, n = r.length; a < n; a++) i.resolve(r[a]).then(e, t);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  oe(e, 0);
                }),
              (i._unhandledRejectionFn = function Tt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || i['default'] || i,
              le = function (l, a, n) {
                return function (o, t, c, e) {
                  return e.then(function () {
                    var i,
                      s = o.delayNext;
                    return new ce(function (e, t) {
                      var a = l(o, c, [c]);
                      if (!s) return e();
                      var n = o.timeout,
                        r = new ce(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      ce.race([a, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = a(e)), n(o, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              ue = function (c, a, n, r, l) {
                return function (s, t, o, e) {
                  return e.then(function () {
                    var i;
                    return new ce(function (e, t) {
                      var a = c(s, o, [o]),
                        n = s.timeout,
                        r = new ce(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      ce.race([a, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = a(e)), r(s, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !n(s, e))) return l(s, t), ce.reject();
                      });
                  });
                };
              },
              de = ce.resolve(),
              pe = function (n, r, e) {
                return function (t, a) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        de = n(e, t, a, de);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        de = r(e, t, a, de);
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
              ge = function (s, o, c, l) {
                return function (e, t) {
                  var a;
                  if (e.conditions)
                    for (var n = 0; n < e.conditions.length; n++) {
                      a = e.conditions[n];
                      try {
                        var r = s(a, t, [t]);
                        if (fe(r))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!o(a, r)) return c(a, e), !1;
                      } catch (i) {
                        return l(a, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              ve = function (a, n) {
                return function (e, t) {
                  a(e, t) && n(e, t);
                };
              },
              me = function (a) {
                return function (e) {
                  var t = a.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              he = function (r) {
                return function (e) {
                  var t = e.rule,
                    a = e.event,
                    n = r.getModuleDefinition(a.modulePath).name;
                  return {
                    $type: r.getModuleExtensionName(a.modulePath) + '.' + n,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              be = function (o, c, l, u, d, p) {
                return function (a, e) {
                  var n = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var r = d(e);
                    c(t, null, [
                      function i (e) {
                        var t = l(r, e);
                        a(function () {
                          o(t, n);
                        });
                      },
                    ]);
                  } catch (s) {
                    p.error(u(t, n, s));
                  }
                };
              },
              ke = function (r, i, s, o) {
                return function (e, t, a) {
                  var n = i(e);
                  s.error(r(n, t.name, a)), o('ruleActionFailed', { rule: t, action: e });
                };
              },
              ye = function (r, i, s, o) {
                return function (e, t, a) {
                  var n = i(e);
                  s.error(r(n, t.name, a)), o('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              De = function (n, r, i) {
                return function (e, t) {
                  var a = n(e);
                  r.log('Condition "' + a + '" for rule "' + t.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Ce = function (t, a) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), a('ruleCompleted', { rule: e });
                };
              },
              we = function (i, s, o) {
                return function (e, t) {
                  var a;
                  if (e.actions)
                    for (var n = 0; n < e.actions.length; n++) {
                      a = e.actions[n];
                      try {
                        i(a, t, [t]);
                      } catch (r) {
                        return void s(a, e, r);
                      }
                    }
                  o(e);
                };
              },
              Te = function (a, n, r, i) {
                return function (e, t) {
                  i('ruleTriggered', { rule: t }), a ? r(t, e) : n(t, e);
                };
              },
              _e = function (e, t, a) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  a.message +
                  (a.stack ? '\n' + a.stack : '')
                );
              },
              Ve = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Pe = [],
              Se = !1,
              Ie = function (e) {
                Se ? e() : Pe.push(e);
              },
              Ee = function (e, t, a) {
                e(t).forEach(function (e) {
                  a(Ie, e);
                }),
                  (Se = !0),
                  Pe.forEach(function (e) {
                    e();
                  }),
                  (Pe = []);
              },
              Ae = function (e) {
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
              Oe = Object.getOwnPropertySymbols,
              Le = Object.prototype.hasOwnProperty,
              je = Object.prototype.propertyIsEnumerable,
              Me = a()
                ? Object.assign
                : function (e) {
                    for (var t, a, n = f(e), r = 1; r < arguments.length; r++) {
                      for (var i in (t = Object(arguments[r]))) Le.call(t, i) && (n[i] = t[i]);
                      if (Oe) {
                        a = Oe(t);
                        for (var s = 0; s < a.length; s++) je.call(t, a[s]) && (n[a[s]] = t[a[s]]);
                      }
                    }
                    return n;
                  },
              xe = function (e, t) {
                return (
                  Me((t = t || {}), e),
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
              Ne = function (c, l) {
                return function (e, t) {
                  var a = c[e];
                  if (a) {
                    var n = a.modules;
                    if (n)
                      for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                        var s = r[i],
                          o = n[s];
                        if (o.shared && o.name === t) return l.getModuleExports(s);
                      }
                  }
                };
              },
              Re = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Fe = function (a, n) {
                return function (e) {
                  if (n) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return a + e;
                };
              },
              Ue = '.js',
              He = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Be = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              We = function (e, t) {
                Be(t, Ue) || (t += Ue);
                var a = t.split('/'),
                  n = He(e).split('/');
                return (
                  a.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? n.length && n.pop() : n.push(e));
                  }),
                  n.join('/')
                );
              },
              Ye = document,
              Xe = function (a, n) {
                return new ce(function (e, t) {
                  (n.onload = function () {
                    e(n);
                  }),
                    (n.onerror = function () {
                      t(new Error('Failed to load script ' + a));
                    });
                });
              },
              Ge = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var a = Xe(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), a;
              },
              qe = function (e, t, a, n) {
                (t = t || '&'), (a = a || '=');
                var r = {};
                if ('string' != typeof e || 0 === e.length) return r;
                var i = /\+/g;
                e = e.split(t);
                var s = 1000;
                n && 'number' == typeof n.maxKeys && (s = n.maxKeys);
                var o = e.length;
                0 < s && s < o && (o = s);
                for (var c = 0; c < o; ++c) {
                  var l,
                    u,
                    d,
                    p,
                    f = e[c].replace(i, '%20'),
                    g = f.indexOf(a);
                  0 <= g ? ((l = f.substr(0, g)), (u = f.substr(g + 1))) : ((l = f), (u = '')),
                    (d = decodeURIComponent(l)),
                    (p = decodeURIComponent(u)),
                    v(r, d)
                      ? Array.isArray(r[d])
                        ? r[d].push(p)
                        : (r[d] = [r[d], p])
                      : (r[d] = p);
                }
                return r;
              },
              ze = function (e) {
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
              Je = function (a, n, r, e) {
                return (
                  (n = n || '&'),
                  (r = r || '='),
                  null === a && (a = undefined),
                  'object' == typeof a
                    ? Object.keys(a)
                        .map(function (e) {
                          var t = encodeURIComponent(ze(e)) + r;
                          return Array.isArray(a[e])
                            ? a[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(ze(e));
                                })
                                .join(n)
                            : t + encodeURIComponent(ze(a[e]));
                        })
                        .join(n)
                    : e
                    ? encodeURIComponent(ze(e)) + r + encodeURIComponent(ze(a))
                    : ''
                );
              },
              Ke = e(function (e, t) {
                (t.decode = t.parse = qe), (t.encode = t.stringify = Je);
              }),
              $e = (Ke.decode, Ke.parse, Ke.encode, Ke.stringify, '@adobe/reactor-'),
              Qe = {
                cookie: L,
                document: Ye,
                'load-script': Ge,
                'object-assign': Me,
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
                window: j,
              },
              Ze = function (n) {
                return function (e) {
                  if (0 === e.indexOf($e)) {
                    var t = e.substr($e.length),
                      a = Qe[t];
                    if (a) return a;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return n(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, s, o, c, l) {
                var u = e.extensions,
                  d = e.buildInfo,
                  p = e.property.settings;
                if (u) {
                  var f = Ne(u, s);
                  Object.keys(u).forEach(function (n) {
                    var r = u[n],
                      e = Re(c, r.settings);
                    if (r.modules) {
                      var t = A.createPrefixedLogger(r.displayName),
                        a = Fe(r.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: a,
                          getSharedModule: f,
                          logger: t,
                          propertySettings: p,
                          replaceTokens: c,
                          onDebugChanged: o.onDebugChanged,
                          get debugEnabled () {
                            return o.getDebugEnabled();
                          },
                        };
                      Object.keys(r.modules).forEach(function (a) {
                        var e = r.modules[a],
                          t = Ze(function (e) {
                            var t = We(a, e);
                            return s.getModuleExports(t);
                          });
                        s.registerModule(a, e, n, t, i);
                      });
                    }
                  }),
                    s.hydrateCache();
                }
                return s;
              },
              tt = function (e, t, a, n, r) {
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
                  (e.getVar = n),
                  (e.setVar = r),
                  (e.setCookie = function (e, t, a) {
                    var n = '',
                      r = {};
                    a && ((n = ', { expires: ' + a + ' }'), (r.expires = a));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      n +
                      ').';
                    A.warn(i), L.set(e, t, r);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      A.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      L.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    A.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      L.remove(e);
                  }),
                  (e.cookie = L),
                  (e.pageBottom = function () {}),
                  (e.setDebug = a);
                var s = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      s ||
                        (A.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (s = !0)),
                      t
                    );
                  },
                });
              },
              at = window._satellite;
            if (at && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var nt = at.container;
              delete at.container;
              var rt = nt.property.settings.undefinedVarsReturnEmpty,
                it = nt.property.settings.ruleComponentSequencingEnabled,
                st = nt.dataElements || {};
              z.migrateCookieData(st);
              var ot,
                ct = function (e) {
                  return st[e];
                },
                lt = ae(),
                ut = K(
                  lt,
                  ct,
                  function () {
                    return ot.apply(null, arguments);
                  },
                  rt
                ),
                dt = {},
                pt = se(dt),
                ft = ee(dt, ct),
                gt = Z(dt, ct, ut);
              ot = ie(ft, gt, rt);
              var vt = h(x('localStorage'), A);
              tt(at, nt, vt.setDebugEnabled, gt, pt), et(nt, lt, vt, ot, ut);
              var mt = re(at),
                ht = k(lt, ot),
                bt = me(lt),
                kt = De(bt, A, mt),
                yt = ye(_e, bt, A, mt),
                Dt = ke(_e, bt, A, mt),
                Ct = Ce(A, mt),
                wt = be(
                  Te(
                    it,
                    ve(ge(ht, Ve, kt, yt), we(ht, Dt, Ct)),
                    pe(ue(ht, Ae, Ve, yt, kt), le(ht, Ae, Dt), Ct),
                    mt
                  ),
                  ht,
                  xe,
                  _e,
                  he(lt),
                  A
                );
              Ee(g, nt.rules || [], wt);
            }
            return at;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_4c4429d814ba6516)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_4c4429d814ba6516
          ));
      }
    })();
    _satellite = $___var_daeec65ee73d6d57;
  })();
}
