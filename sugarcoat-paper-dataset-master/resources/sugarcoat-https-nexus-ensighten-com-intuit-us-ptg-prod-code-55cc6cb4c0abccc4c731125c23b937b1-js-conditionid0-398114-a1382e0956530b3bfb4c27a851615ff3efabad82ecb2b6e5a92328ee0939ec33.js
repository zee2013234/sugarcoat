{
  const $___stub_d666925c34f35308 = {};
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
  })($___stub_d666925c34f35308);
  const $___stub_d43db2f5a125ac97 = {};
  (exports => {
    'use strict';
    let isSealed = false;
    const timeOrigin = Date.now();
    class PerformanceNavigation {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
      }
      get type () {
        return PerformanceNavigation.TYPE_NAVIGATE;
      }
      get redirectCount () {
        return 0;
      }
      toJSON () {
        return { type: this.type, redirectCount: this.redirectCount };
      }
    }
    Object.defineProperty(PerformanceNavigation, 'TYPE_NAVIGATE', {
      configurable: false,
      enumerable: true,
      value: 0,
    });
    Object.defineProperty(PerformanceNavigation, 'TYPE_RELOAD', {
      configurable: false,
      enumerable: true,
      value: 1,
    });
    Object.defineProperty(PerformanceNavigation, 'TYPE_BACK_FORWARD', {
      configurable: false,
      enumerable: true,
      value: 2,
    });
    Object.defineProperty(PerformanceNavigation, 'TYPE_RESERVED', {
      configurable: false,
      enumerable: true,
      value: 255,
    });
    exports.PerformanceNavigation = {
      configurable: true,
      enumerable: true,
      value: PerformanceNavigation,
      writable: true,
    };
    class PerformanceTiming {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
      }
      get navigationStart () {
        return 0;
      }
      get unloadEventStart () {
        return 0;
      }
      get unloadEventEnd () {
        return 0;
      }
      get redirectStart () {
        return 0;
      }
      get redirectEnd () {
        return 0;
      }
      get fetchStart () {
        return 0;
      }
      get domainLookupStart () {
        return 0;
      }
      get domainLookupEnd () {
        return 0;
      }
      get connectStart () {
        return 0;
      }
      get connectEnd () {
        return 0;
      }
      get secureConnectionStart () {
        return 0;
      }
      get requestStart () {
        return 0;
      }
      get responseStart () {
        return 0;
      }
      get responseEnd () {
        return 0;
      }
      get domLoading () {
        return 0;
      }
      get domInteractive () {
        return 0;
      }
      get domContentLoadedEventStart () {
        return 0;
      }
      get domContentLoadEventEnd () {
        return 0;
      }
      get domComplete () {
        return 0;
      }
      get loadEventStart () {
        return 0;
      }
      get loadEventEnd () {
        return 0;
      }
      toJSON () {
        return {
          navigationStart: this.navigationStart,
          unloadEventStart: this.unloadEventStart,
          unloadEventEnd: this.unloadEventEnd,
          redirectStart: this.redirectStart,
          redirectEnd: this.redirectEnd,
          fetchStart: this.fetchStart,
          domainLookupStart: this.domainLookupStart,
          domainLookupEnd: this.domainLookupEnd,
          connectStart: this.connectStart,
          connectEnd: this.connectEnd,
          secureConnectionStart: this.secureConnectionStart,
          requestStart: this.requestStart,
          responseStart: this.responseStart,
          responseEnd: this.responseEnd,
          domLoading: this.domLoading,
          domInteractive: this.domInteractive,
          domContentLoadedEventStart: this.domContentLoadedEventStart,
          domContentLoadedEventEnd: this.domContentLoadedEventEnd,
          domComplete: this.domComplete,
          loadEventStart: this.loadEventStart,
          loadEventEnd: this.loadEventEnd,
        };
      }
    }
    exports.PerformanceTiming = {
      configurable: true,
      enumerable: true,
      value: PerformanceTiming,
      writable: true,
    };
    class MemoryInfo {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
      }
      get jsHeapSizeLimit () {
        return 0;
      }
      get totalJSHeapSize () {
        return 0;
      }
      get usedJSHeapSize () {
        return 0;
      }
    }
    const performanceNavigationSymbol = Symbol('navigation');
    const performanceTimingSymbol = Symbol('timing');
    const performanceMemorySymbol = Symbol('memory');
    class Performance {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
        Object.defineProperty(this, performanceNavigationSymbol, {
          configurable: false,
          enumerable: false,
          value: new PerformanceNavigation(),
        });
        Object.defineProperty(this, performanceTimingSymbol, {
          configurable: false,
          enumerable: false,
          value: new PerformanceTiming(),
        });
        Object.defineProperty(this, performanceMemorySymbol, {
          configurable: false,
          enumerable: false,
          value: new MemoryInfo(),
        });
      }
      get navigation () {
        return this[performanceNavigationSymbol];
      }
      get timing () {
        return this[performanceTimingSymbol];
      }
      get memory () {
        return this[performanceMemorySymbol];
      }
      get timeOrigin () {
        return timeOrigin;
      }
      clearMarks (name = null) {}
      clearMeasures (name = null) {}
      clearResourceTimings () {}
      getEntries () {
        return [];
      }
      getEntriesByName (name, type = null) {
        return [];
      }
      getEntriesByType (type) {
        return [];
      }
      mark (name) {}
      measure (name, startMark = null, endMark = null) {}
      now () {
        return Date.now() - timeOrigin;
      }
      setResourceTimingBufferSize (maxSize) {}
      toJSON () {
        return { timeOrigin: this.timeOrigin, timing: this.timing, navigation: this.navigation };
      }
    }
    exports.Performance = {
      configurable: true,
      enumerable: true,
      value: Performance,
      writable: true,
    };
    const performance = new Performance();
    exports.performance = {
      configurable: true,
      enumerable: true,
      value: performance,
      writable: true,
    };
    class PerformanceObserver {
      constructor (callback) {}
      observe (options) {}
      disconnect () {}
      takeRecords () {
        return [];
      }
    }
    exports.PerformanceObserver = {
      configurable: true,
      enumerable: true,
      value: PerformanceObserver,
      writable: true,
    };
    isSealed = true;
  })($___stub_d43db2f5a125ac97);
  const $___stub_2c19f7f1b6f683c6 = {};
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
  })($___stub_2c19f7f1b6f683c6);
  const $___stub_a751d4ba6e4e175b = {};
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
  })($___stub_a751d4ba6e4e175b);
  (function () {
    Bootstrapper.bindDependencyImmediate(
      function () {
        Bootstrapper.ensEvent.add(['Load Appmeasurement'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          !(function () {
            function e (e, t, s) {
              var n = '',
                i = t || 'Error caught in DIL module/submodule: ';
              return (
                e === Object(e)
                  ? (n = i + (e.message || 'err has no message'))
                  : ((n = i + 'err is not a valid object'), (e = {})),
                (e.message = n),
                s instanceof DIL && (e.partner = s.api.getPartner()),
                DIL.errorModule.handleError(e),
                (this.errorMessage = n)
              );
            }
            var r,
              a,
              o,
              t = {
                submitUniversalAnalytics: function (e, t, s) {
                  try {
                    var n,
                      i,
                      r,
                      a,
                      o = e.getAll()[0],
                      d = o[s || 'b'].data.keys,
                      u = {};
                    for (n = 0, i = d.length; n < i; n++)
                      (r = d[n]),
                        void 0 === (a = o.get(r)) ||
                          'function' == typeof a ||
                          a === Object(a) ||
                          /^_/.test(r) ||
                          /^&/.test(r) ||
                          (u[r] = a);
                    return t.api.signals(u, 'c_').submit(), u;
                  } catch (e) {
                    return 'Caught error with message: ' + e.message;
                  }
                },
                dil: null,
                arr: null,
                tv: null,
                errorMessage: '',
                defaultTrackVars: [
                  '_setAccount',
                  '_setCustomVar',
                  '_addItem',
                  '_addTrans',
                  '_trackSocial',
                ],
                defaultTrackVarsObj: null,
                signals: {},
                hasSignals: !1,
                handle: e,
                init: function (e, t, s) {
                  try {
                    (this.dil = null),
                      (this.arr = null),
                      (this.tv = null),
                      (this.errorMessage = ''),
                      (this.signals = {}),
                      (this.hasSignals = !1);
                    var n = { name: 'DIL GA Module Error' },
                      i = '';
                    t instanceof DIL
                      ? ((this.dil = t), (n.partner = this.dil.api.getPartner()))
                      : ((i = 'dilInstance is not a valid instance of DIL'),
                        (n.message = i),
                        DIL.errorModule.handleError(n)),
                      e instanceof Array && e.length
                        ? (this.arr = e)
                        : ((i = 'gaArray is not an array or is empty'),
                          (n.message = i),
                          DIL.errorModule.handleError(n)),
                      (this.tv = this.constructTrackVars(s)),
                      (this.errorMessage = i);
                  } catch (e) {
                    this.handle(e, 'DIL.modules.GA.init() caught error with message ', this.dil);
                  } finally {
                    return this;
                  }
                },
                constructTrackVars: function (e) {
                  var t,
                    s,
                    n,
                    i,
                    r,
                    a,
                    o = [];
                  if (this.defaultTrackVarsObj !== Object(this.defaultTrackVarsObj)) {
                    for (a = {}, s = 0, n = (r = this.defaultTrackVars).length; s < n; s++)
                      a[r[s]] = !0;
                    this.defaultTrackVarsObj = a;
                  } else a = this.defaultTrackVarsObj;
                  if (e === Object(e)) {
                    if ((t = e.names) instanceof Array && (n = t.length))
                      for (s = 0; s < n; s++)
                        'string' == typeof (i = t[s]) && i.length && i in a && o.push(i);
                    if (o.length) return o;
                  }
                  return this.defaultTrackVars;
                },
                constructGAObj: function (e) {
                  var t,
                    s,
                    n,
                    i,
                    r,
                    a,
                    o = {},
                    d = e instanceof Array ? e : this.arr;
                  for (t = 0, s = d.length; t < s; t++)
                    (n = d[t]) instanceof Array &&
                      n.length &&
                      ((r = n = []),
                      (a = d[t]),
                      r instanceof Array && a instanceof Array && Array.prototype.push.apply(r, a),
                      'string' == typeof (i = n.shift()) &&
                        i.length &&
                        (o[i] instanceof Array || (o[i] = []), o[i].push(n)));
                  return o;
                },
                addToSignals: function (e, t) {
                  return (
                    'string' == typeof e &&
                    '' !== e &&
                    null != t &&
                    '' !== t &&
                    (this.signals[e] instanceof Array || (this.signals[e] = []),
                    this.signals[e].push(t),
                    (this.hasSignals = !0))
                  );
                },
                constructSignals: function () {
                  var e,
                    t,
                    s,
                    n,
                    i,
                    r,
                    a = this.constructGAObj(),
                    o = {
                      _setAccount: function (e) {
                        this.addToSignals('c_accountId', e);
                      },
                      _setCustomVar: function (e, t, s) {
                        'string' == typeof t && t.length && this.addToSignals('c_' + t, s);
                      },
                      _addItem: function (e, t, s, n, i, r) {
                        this.addToSignals('c_itemOrderId', e),
                          this.addToSignals('c_itemSku', t),
                          this.addToSignals('c_itemName', s),
                          this.addToSignals('c_itemCategory', n),
                          this.addToSignals('c_itemPrice', i),
                          this.addToSignals('c_itemQuantity', r);
                      },
                      _addTrans: function (e, t, s, n, i, r, a, o) {
                        this.addToSignals('c_transOrderId', e),
                          this.addToSignals('c_transAffiliation', t),
                          this.addToSignals('c_transTotal', s),
                          this.addToSignals('c_transTax', n),
                          this.addToSignals('c_transShipping', i),
                          this.addToSignals('c_transCity', r),
                          this.addToSignals('c_transState', a),
                          this.addToSignals('c_transCountry', o);
                      },
                      _trackSocial: function (e, t, s, n) {
                        this.addToSignals('c_socialNetwork', e),
                          this.addToSignals('c_socialAction', t),
                          this.addToSignals('c_socialTarget', s),
                          this.addToSignals('c_socialPagePath', n);
                      },
                    },
                    d = this.tv;
                  for (e = 0, t = d.length; e < t; e++)
                    if (
                      ((s = d[e]),
                      a.hasOwnProperty(s) && o.hasOwnProperty(s) && (r = a[s]) instanceof Array)
                    )
                      for (n = 0, i = r.length; n < i; n++) o[s].apply(this, r[n]);
                },
                submit: function () {
                  try {
                    return '' !== this.errorMessage
                      ? this.errorMessage
                      : (this.constructSignals(),
                        this.hasSignals
                          ? (this.dil.api.signals(this.signals).submit(),
                            'Signals sent: ' +
                              this.dil.helpers.convertObjectToKeyValuePairs(this.signals, '=', !0))
                          : 'No signals present');
                  } catch (e) {
                    return this.handle(
                      e,
                      'DIL.modules.GA.submit() caught error with message ',
                      this.dil
                    );
                  }
                },
                Stuffer: {
                  LIMIT: 5,
                  dil: null,
                  cookieName: null,
                  delimiter: null,
                  errorMessage: '',
                  handle: e,
                  callback: null,
                  v: function () {
                    return !1;
                  },
                  init: function (e, t, s) {
                    try {
                      (this.dil = null),
                        (this.callback = null),
                        (this.errorMessage = ''),
                        e instanceof DIL
                          ? ((this.dil = e),
                            (this.v = this.dil.validators.isPopulatedString),
                            (this.cookieName = this.v(t) ? t : 'aam_ga'),
                            (this.delimiter = this.v(s) ? s : '|'))
                          : this.handle(
                              { message: 'dilInstance is not a valid instance of DIL' },
                              'DIL.modules.GA.Stuffer.init() error: '
                            );
                    } catch (e) {
                      this.handle(
                        e,
                        'DIL.modules.GA.Stuffer.init() caught error with message ',
                        this.dil
                      );
                    } finally {
                      return this;
                    }
                  },
                  process: function (e) {
                    var t,
                      s,
                      n,
                      i,
                      r,
                      a,
                      o,
                      d,
                      u,
                      c,
                      l,
                      h = !1,
                      f = 1;
                    if (e === Object(e) && (t = e.stuff) && t instanceof Array && (s = t.length))
                      for (n = 0; n < s; n++)
                        if (
                          (i = t[n]) &&
                          i === Object(i) &&
                          ((r = i.cn), (a = i.cv), r === this.cookieName && this.v(a))
                        ) {
                          h = !0;
                          break;
                        }
                    if (h) {
                      for (
                        o = a.split(this.delimiter),
                          void 0 === window._gaq && (window._gaq = []),
                          d = window._gaq,
                          n = 0,
                          s = o.length;
                        n < s &&
                        ((c = (u = o[n].split('='))[0]),
                        (l = u[1]),
                        this.v(c) && this.v(l) && d.push(['_setCustomVar', f++, c, l, 1]),
                        !(f > this.LIMIT));
                        n++
                      );
                      this.errorMessage =
                        1 < f ? 'No errors - stuffing successful' : 'No valid values to stuff';
                    } else this.errorMessage = 'Cookie name and value not found in json';
                    if ('function' == typeof this.callback) return this.callback();
                  },
                  submit: function () {
                    try {
                      var t = this;
                      return '' !== this.errorMessage
                        ? this.errorMessage
                        : (this.dil.api
                            .afterResult(function (e) {
                              t.process(e);
                            })
                            .submit(),
                          'DIL.modules.GA.Stuffer.submit() successful');
                    } catch (e) {
                      return this.handle(
                        e,
                        'DIL.modules.GA.Stuffer.submit() caught error with message ',
                        this.dil
                      );
                    }
                  },
                },
              },
              s = {
                dil: null,
                handle: e,
                init: function (e, t, s, n) {
                  try {
                    var f = this,
                      i = { name: 'DIL Site Catalyst Module Error' },
                      p = function (e) {
                        return (i.message = e), DIL.errorModule.handleError(i), e;
                      };
                    if (
                      ((this.options = n === Object(n) ? n : {}),
                      (this.dil = null),
                      !(t instanceof DIL))
                    )
                      return p('dilInstance is not a valid instance of DIL');
                    if (((this.dil = t), (i.partner = t.api.getPartner()), e !== Object(e)))
                      return p('siteCatalystReportingSuite is not an object');
                    var r = e;
                    return (
                      (window.AppMeasurement_Module_DIL = r.m_DIL = function (e) {
                        var t = 'function' == typeof e.m_i ? e.m_i('DIL') : this;
                        if (t !== Object(t)) return p('m is not an object');
                        (t.trackVars = f.constructTrackVars(s)),
                          (t.d = 0),
                          (t.s = e),
                          (t._t = function () {
                            var e,
                              t,
                              s,
                              n,
                              i,
                              r,
                              a = this,
                              o = ',' + a.trackVars + ',',
                              d = a.s,
                              u = [],
                              c = [],
                              l = {},
                              h = !1;
                            if (d !== Object(d))
                              return p('Error in m._t function: s is not an object');
                            if (a.d) {
                              if ('function' == typeof d.foreachVar)
                                d.foreachVar(function (e, t) {
                                  void 0 !== t && ((l[e] = t), (h = !0));
                                }, a.trackVars);
                              else {
                                if (!(d.va_t instanceof Array))
                                  return p('Error in m._t function: s.va_t is not an array');
                                if (
                                  (d.lightProfileID
                                    ? (e = d.lightTrackVars) && (e = ',' + e + ',' + d.vl_mr + ',')
                                    : (d.pe || d.linkType) &&
                                      ((e = d.linkTrackVars),
                                      d.pe &&
                                        ((t =
                                          d.pe.substring(0, 1).toUpperCase() + d.pe.substring(1)),
                                        d[t] && (e = d[t].trackVars)),
                                      e && (e = ',' + e + ',' + d.vl_l + ',' + d.vl_l2 + ',')),
                                  e)
                                ) {
                                  for (r = 0, u = e.split(','); r < u.length; r++)
                                    0 <= o.indexOf(',' + u[r] + ',') && c.push(u[r]);
                                  c.length && (o = ',' + c.join(',') + ',');
                                }
                                for (n = 0, i = d.va_t.length; n < i; n++)
                                  (s = d.va_t[n]),
                                    0 <= o.indexOf(',' + s + ',') &&
                                      void 0 !== d[s] &&
                                      null !== d[s] &&
                                      '' !== d[s] &&
                                      ((l[s] = d[s]), (h = !0));
                              }
                              f.includeContextData(d, l).store_populated && (h = !0),
                                h && a.d.api.signals(l, 'c_').submit();
                            }
                          });
                      }),
                      r.loadModule('DIL'),
                      (r.DIL.d = t),
                      i.message
                        ? i.message
                        : 'DIL.modules.siteCatalyst.init() completed with no errors'
                    );
                  } catch (e) {
                    return this.handle(
                      e,
                      'DIL.modules.siteCatalyst.init() caught error with message ',
                      this.dil
                    );
                  }
                },
                constructTrackVars: function (e) {
                  var t,
                    s,
                    n,
                    i,
                    r,
                    a,
                    o,
                    d,
                    u = [];
                  if (e === Object(e)) {
                    if ((t = e.names) instanceof Array && (i = t.length))
                      for (n = 0; n < i; n++)
                        'string' == typeof (r = t[n]) && r.length && u.push(r);
                    if ((s = e.iteratedNames) instanceof Array && (i = s.length))
                      for (n = 0; n < i; n++)
                        if (
                          (a = s[n]) === Object(a) &&
                          ((r = a.name),
                          (d = parseInt(a.maxIndex, 10)),
                          'string' == typeof r && r.length && !isNaN(d) && 0 <= d)
                        )
                          for (o = 0; o <= d; o++) u.push(r + o);
                    if (u.length) return u.join(',');
                  }
                  return this.constructTrackVars({
                    names: [
                      'pageName',
                      'channel',
                      'campaign',
                      'products',
                      'events',
                      'pe',
                      'pev1',
                      'pev2',
                      'pev3',
                    ],
                    iteratedNames: [
                      { name: 'prop', maxIndex: 75 },
                      { name: 'eVar', maxIndex: 250 },
                    ],
                  });
                },
                includeContextData: function (e, t) {
                  var s = {},
                    n = !1;
                  if (e.contextData === Object(e.contextData)) {
                    var i,
                      r,
                      a,
                      o,
                      d,
                      u = e.contextData,
                      c = this.options.replaceContextDataPeriodsWith,
                      l = this.options.filterFromContextVariables,
                      h = {};
                    if ((('string' == typeof c && c.length) || (c = '_'), l instanceof Array))
                      for (i = 0, r = l.length; i < r; i++)
                        (a = l[i]), this.dil.validators.isPopulatedString(a) && (h[a] = !0);
                    for (o in u)
                      u.hasOwnProperty(o) &&
                        !h[o] &&
                        ((d = u[o]) || 'number' == typeof d) &&
                        ((t[(o = ('contextData.' + o).replace(/\./g, c))] = d), (n = !0));
                  }
                  return (s.store_populated = n), s;
                },
              };
            'function' != typeof window.DIL &&
              ((window.DIL = function (s) {
                const $___old_f131dd282b917093 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'XMLHttpRequest'
                  ),
                  $___old_66bd7a71aea29fad = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'XMLHttpRequest'
                  );
                try {
                  if ($___old_f131dd282b917093)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_d666925c34f35308.XMLHttpRequest
                    ));
                  if ($___old_66bd7a71aea29fad)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_d666925c34f35308.XMLHttpRequest
                    ));
                  return function () {
                    var c,
                      e,
                      I,
                      r,
                      u,
                      p,
                      t,
                      a,
                      n,
                      i,
                      o,
                      d,
                      y,
                      l,
                      h,
                      g,
                      f,
                      m,
                      b,
                      v,
                      D,
                      S = [],
                      _ = {};
                    function O (e) {
                      return void 0 === e || !0 === e;
                    }
                    s !== Object(s) && (s = {}),
                      (I = s.partner),
                      (r = s.containerNSID),
                      (u = s.mappings),
                      (p = s.uuidCookie),
                      (t = !0 === s.enableErrorReporting),
                      (a = s.visitorService),
                      (n = s.declaredId),
                      (i = !0 === s.delayAllUntilWindowLoad),
                      (o = O(s.secureDataCollection)),
                      (d = 'boolean' == typeof s.isCoopSafe ? s.isCoopSafe : null),
                      (y = O(s.enableHrefererParam)),
                      (l = O(s.enableLogging)),
                      (h = O(s.enableUrlDestinations)),
                      (g = O(s.enableCookieDestinations)),
                      (f = !0 === s.disableDefaultRequest),
                      (m = s.afterResultForDefaultRequest),
                      (b = s.visitorConstructor),
                      (v = !0 === s.disableCORS),
                      (D = !0 === s.ignoreHardDependencyOnVisitorAPI),
                      t && DIL.errorModule.activate(),
                      D &&
                        S.push(
                          'Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.'
                        );
                    var C = !0 === window._dil_unit_tests;
                    if (((c = arguments[1]) && S.push(c + ''), !I || 'string' != typeof I)) {
                      var w = {
                        name: 'error',
                        message: (c = 'DIL partner is invalid or not specified in initConfig'),
                        filename: 'dil.js',
                      };
                      return DIL.errorModule.handleError(w), new Error(c);
                    }
                    if (
                      ((c =
                        'DIL containerNSID is invalid or not specified in initConfig, setting to default of 0'),
                      (r || 'number' == typeof r) &&
                        ((r = parseInt(r, 10)), !isNaN(r) && 0 <= r && (c = '')),
                      c && ((r = 0), S.push(c), (c = '')),
                      (e = DIL.getDil(I, r)) instanceof DIL &&
                        e.api.getPartner() === I &&
                        e.api.getContainerNSID() === r)
                    )
                      return e;
                    if (!(this instanceof DIL))
                      return new DIL(
                        s,
                        "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " +
                          I +
                          ' and containerNSID = ' +
                          r
                      );
                    DIL.registerDil(this, I, r);
                    var L = {
                        doesConsoleLogExist:
                          window.console === Object(window.console) &&
                          'function' == typeof window.console.log,
                        logMemo: {},
                        log: function (e) {
                          (S.push(e), l && this.doesConsoleLogExist) &&
                            Function.prototype.bind
                              .call(window.console.log, window.console)
                              .apply(window.console, arguments);
                        },
                        logOnce: function (e) {
                          this.logMemo[e] || ((this.logMemo[e] = !0), L.log(e));
                        },
                      },
                      A = {
                        IS_HTTPS: o || 'https:' === document.location.protocol,
                        SIX_MONTHS_IN_MINUTES: 259200,
                        IE_VERSION: (function () {
                          if (document.documentMode) return document.documentMode;
                          for (var e = 7; 4 < e; e--) {
                            var t = document.createElement('div');
                            if (
                              ((t.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->'),
                              t.getElementsByTagName('span').length)
                            )
                              return (t = null), e;
                          }
                          return null;
                        })(),
                      };
                    A.IS_IE_LESS_THAN_10 = 'number' == typeof A.IE_VERSION && A.IE_VERSION < 10;
                    var P = { stuffed: {} },
                      T = {},
                      R = {
                        firingQueue: [],
                        fired: [],
                        firing: !1,
                        sent: [],
                        errored: [],
                        reservedKeys: {
                          sids: !0,
                          pdata: !0,
                          logdata: !0,
                          callback: !0,
                          postCallbackFn: !0,
                          useImageRequest: !0,
                        },
                        firstRequestHasFired: !1,
                        abortRequests: !1,
                        num_of_cors_responses: 0,
                        num_of_cors_errors: 0,
                        corsErrorSources: [],
                        num_of_img_responses: 0,
                        num_of_img_errors: 0,
                        platformParams: {
                          d_nsid: r + '',
                          d_rtbd: 'json',
                          d_jsonv: DIL.jsonVersion + '',
                          d_dst: '1',
                        },
                        nonModStatsParams: { d_rtbd: !0, d_dst: !0, d_cts: !0, d_rs: !0 },
                        modStatsParams: null,
                        adms: {
                          TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 30000,
                          calledBack: !1,
                          mid: null,
                          noVisitorAPI: null,
                          VisitorAPI: null,
                          instance: null,
                          releaseType: 'no VisitorAPI',
                          isOptedOut: !0,
                          isOptedOutCallbackCalled: !1,
                          admsProcessingStarted: !1,
                          process: function (e) {
                            try {
                              if (this.admsProcessingStarted) return;
                              this.admsProcessingStarted = !0;
                              var t,
                                s,
                                n,
                                i = a;
                              if ('function' != typeof e || 'function' != typeof e.getInstance)
                                throw (
                                  ((this.noVisitorAPI = !0), new Error('Visitor does not exist.'))
                                );
                              if (i !== Object(i) || !(t = i.namespace) || 'string' != typeof t)
                                throw (
                                  ((this.releaseType = 'no namespace'),
                                  new Error(
                                    "DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}"
                                  ))
                                );
                              if (
                                !(
                                  (s = e.getInstance(t, { idSyncContainerID: r })) === Object(s) &&
                                  s instanceof e &&
                                  'function' == typeof s.isAllowed &&
                                  'function' == typeof s.getMarketingCloudVisitorID &&
                                  'function' == typeof s.getCustomerIDs &&
                                  'function' == typeof s.isOptedOut &&
                                  'function' == typeof s.publishDestinations
                                )
                              )
                                throw (
                                  ((this.releaseType = 'invalid instance'),
                                  (n = 'Invalid Visitor instance.'),
                                  s === Object(s) &&
                                    'function' != typeof s.publishDestinations &&
                                    (n +=
                                      ' In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ .'),
                                  new Error(n))
                                );
                              if (((this.VisitorAPI = e), !s.isAllowed()))
                                return (
                                  (this.releaseType =
                                    'VisitorAPI is not allowed to write cookies'),
                                  void this.releaseRequests()
                                );
                              (this.instance = s), this.waitForMidToReleaseRequests();
                            } catch (e) {
                              if (!D)
                                throw new Error(
                                  'Error in processing Visitor API, which is a hard dependency for DIL v8.0+: ' +
                                    e.message
                                );
                              this.releaseRequests();
                            }
                          },
                          waitForMidToReleaseRequests: function () {
                            var t = this;
                            this.instance &&
                              (this.instance.getMarketingCloudVisitorID(function (e) {
                                (t.mid = e), (t.releaseType = 'VisitorAPI'), t.releaseRequests();
                              }, !0),
                              (!N.exists ||
                                (!N.isIabContext && N.isApproved()) ||
                                (N.isIabContext && G.hasGoSignal())) &&
                                setTimeout(function () {
                                  'VisitorAPI' !== t.releaseType &&
                                    ((t.releaseType = 'timeout'), t.releaseRequests());
                                }, this.getLoadTimeout()));
                          },
                          releaseRequests: function () {
                            (this.calledBack = !0), R.registerRequest();
                          },
                          getMarketingCloudVisitorID: function () {
                            return this.instance
                              ? this.instance.getMarketingCloudVisitorID()
                              : null;
                          },
                          getMIDQueryString: function () {
                            var e = V.isPopulatedString,
                              t = this.getMarketingCloudVisitorID();
                            return (
                              (e(this.mid) && this.mid === t) || (this.mid = t),
                              e(this.mid) ? 'd_mid=' + this.mid + '&' : ''
                            );
                          },
                          getCustomerIDs: function () {
                            return this.instance ? this.instance.getCustomerIDs() : null;
                          },
                          getCustomerIDsQueryString: function (e) {
                            if (e !== Object(e)) return '';
                            var t,
                              s,
                              n,
                              i,
                              r = '',
                              a = [],
                              o = [];
                            for (t in e)
                              e.hasOwnProperty(t) &&
                                (s = e[(o[0] = t)]) === Object(s) &&
                                ((o[1] = s.id || ''),
                                (o[2] = s.authState || 0),
                                a.push(o),
                                (o = []));
                            if ((i = a.length))
                              for (n = 0; n < i; n++)
                                r += '&d_cid_ic=' + x.encodeAndBuildRequest(a[n], '%01');
                            return r;
                          },
                          getIsOptedOut: function () {
                            this.instance
                              ? this.instance.isOptedOut(
                                  [this, this.isOptedOutCallback],
                                  this.VisitorAPI.OptOut.GLOBAL,
                                  !0
                                )
                              : ((this.isOptedOut = !1), (this.isOptedOutCallbackCalled = !0));
                          },
                          isOptedOutCallback: function (e) {
                            (this.isOptedOut = e),
                              (this.isOptedOutCallbackCalled = !0),
                              R.registerRequest(),
                              N.isIabContext() && G.checkQueryStringObject();
                          },
                          getLoadTimeout: function () {
                            var e = this.instance;
                            if (e) {
                              if ('function' == typeof e.getLoadTimeout) return e.getLoadTimeout();
                              if (void 0 !== e.loadTimeout) return e.loadTimeout;
                            }
                            return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
                          },
                        },
                        declaredId: {
                          declaredId: { init: null, request: null },
                          declaredIdCombos: {},
                          setDeclaredId: function (e, t) {
                            var s = V.isPopulatedString,
                              n = encodeURIComponent;
                            if (e === Object(e) && s(t)) {
                              var i = e.dpid,
                                r = e.dpuuid,
                                a = null;
                              if (s(i) && s(r))
                                return (
                                  (a = n(i) + '$' + n(r)),
                                  !0 === this.declaredIdCombos[a]
                                    ? "setDeclaredId: combo exists for type '" + t + "'"
                                    : ((this.declaredIdCombos[a] = !0),
                                      (this.declaredId[t] = { dpid: i, dpuuid: r }),
                                      "setDeclaredId: succeeded for type '" + t + "'")
                                );
                            }
                            return "setDeclaredId: failed for type '" + t + "'";
                          },
                          getDeclaredIdQueryString: function () {
                            var e = this.declaredId.request,
                              t = this.declaredId.init,
                              s = encodeURIComponent,
                              n = '';
                            return (
                              null !== e
                                ? (n = '&d_dpid=' + s(e.dpid) + '&d_dpuuid=' + s(e.dpuuid))
                                : null !== t &&
                                  (n = '&d_dpid=' + s(t.dpid) + '&d_dpuuid=' + s(t.dpuuid)),
                              n
                            );
                          },
                        },
                        registerRequest: function (e) {
                          var t,
                            s = this.firingQueue;
                          e === Object(e) && (s.push(e), e.isDefaultRequest || (f = !0)),
                            this.firing ||
                              !s.length ||
                              (i && !DIL.windowLoaded) ||
                              (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(),
                              this.adms.calledBack &&
                                !this.adms.isOptedOut &&
                                this.adms.isOptedOutCallbackCalled &&
                                (N.isApproved() || G.hasGoSignal()) &&
                                ((this.adms.isOptedOutCallbackCalled = !1),
                                ((t = s.shift()).src = t.src.replace(
                                  /&d_nsid=/,
                                  '&' +
                                    this.adms.getMIDQueryString() +
                                    G.getQueryString() +
                                    'd_nsid='
                                )),
                                V.isPopulatedString(t.corsPostData) &&
                                  (t.corsPostData = t.corsPostData.replace(
                                    /^d_nsid=/,
                                    this.adms.getMIDQueryString() + G.getQueryString() + 'd_nsid='
                                  )),
                                M.fireRequest(t),
                                this.firstRequestHasFired ||
                                  ('script' !== t.tag && 'cors' !== t.tag) ||
                                  (this.firstRequestHasFired = !0)));
                        },
                        processVisitorAPI: function () {
                          this.adms.process(b || window.Visitor);
                        },
                        getCoopQueryString: function () {
                          var e = '';
                          return (
                            !0 === d
                              ? (e = '&d_coop_safe=1')
                              : !1 === d && (e = '&d_coop_unsafe=1'),
                            e
                          );
                        },
                      };
                    _.requestController = R;
                    var E,
                      j,
                      k = {
                        sendingMessages: !1,
                        messages: [],
                        messagesPosted: [],
                        destinations: [],
                        destinationsPosted: [],
                        jsonForComparison: [],
                        jsonDuplicates: [],
                        jsonWaiting: [],
                        jsonProcessed: [],
                        publishDestinationsVersion: null,
                        requestToProcess: function (e, t) {
                          var s,
                            n = this;
                          function i () {
                            n.jsonForComparison.push(e), n.jsonWaiting.push([e, t]);
                          }
                          if (e && !V.isEmptyObject(e))
                            if (
                              ((s = JSON.stringify(e.dests || [])), this.jsonForComparison.length)
                            ) {
                              var r,
                                a,
                                o,
                                d = !1;
                              for (r = 0, a = this.jsonForComparison.length; r < a; r++)
                                if (
                                  ((o = this.jsonForComparison[r]),
                                  s === JSON.stringify(o.dests || []))
                                ) {
                                  d = !0;
                                  break;
                                }
                              d ? this.jsonDuplicates.push(e) : i();
                            } else i();
                          if (this.jsonWaiting.length) {
                            var u = this.jsonWaiting.shift();
                            this.process(u[0], u[1]), this.requestToProcess();
                          }
                          this.messages.length && !this.sendingMessages && this.sendMessages();
                        },
                        process: function (e) {
                          if (h) {
                            var t,
                              s,
                              n,
                              i,
                              r,
                              a,
                              o = encodeURIComponent,
                              d = this.getPublishDestinationsVersion(),
                              u = !1;
                            if (-1 !== d) {
                              if ((t = e.dests) && t instanceof Array && (s = t.length)) {
                                for (n = 0; n < s; n++)
                                  (i = t[n]),
                                    (a = [
                                      o('dests'),
                                      o(i.id || ''),
                                      o(i.y || ''),
                                      o(i.c || ''),
                                    ].join('|')),
                                    this.addMessage(a),
                                    (r = {
                                      url: i.c,
                                      hideReferrer: void 0 === i.hr || !!i.hr,
                                      message: a,
                                    }),
                                    this.addDestination(r),
                                    void 0 !== i.hr && (u = !0);
                                1 === d &&
                                  u &&
                                  L.logOnce(
                                    'Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.'
                                  );
                              }
                              this.jsonProcessed.push(e);
                            }
                          }
                        },
                        addMessage: function (e) {
                          this.messages.push(e);
                        },
                        addDestination: function (e) {
                          this.destinations.push(e);
                        },
                        sendMessages: function () {
                          this.sendingMessages ||
                            ((this.sendingMessages = !0),
                            h && this.messages.length && this.publishDestinations());
                        },
                        publishDestinations: function () {
                          var t = this,
                            e = R.adms.instance,
                            s = [],
                            n = [],
                            i = function (e) {
                              L.log(
                                'visitor.publishDestinations() result: ' + (e.error || e.message)
                              ),
                                (t.sendingMessages = !1),
                                t.requestToProcess();
                            },
                            r = function () {
                              (t.messages = []), (t.destinations = []);
                            };
                          return 1 === this.publishDestinationsVersion
                            ? (x.extendArray(s, this.messages),
                              x.extendArray(this.messagesPosted, this.messages),
                              r(),
                              e.publishDestinations(I, s, i),
                              'Called visitor.publishDestinations() version 1')
                            : 1 < this.publishDestinationsVersion
                            ? (x.extendArray(n, this.destinations),
                              x.extendArray(this.destinationsPosted, this.destinations),
                              r(),
                              e.publishDestinations({
                                subdomain: I,
                                callback: i,
                                urlDestinations: n,
                              }),
                              'Called visitor.publishDestinations() version > 1')
                            : void 0;
                        },
                        getPublishDestinationsVersion: function () {
                          if (null !== this.publishDestinationsVersion)
                            return this.publishDestinationsVersion;
                          var e = R.adms.instance,
                            s = -1;
                          return (
                            e.publishDestinations(null, null, function (e) {
                              if (e === Object(e)) {
                                var t = e.error;
                                'subdomain is not a populated string.' === t
                                  ? (s = 1)
                                  : 'Invalid parameters passed.' === t && (s = 2);
                              }
                            }),
                            (this.publishDestinationsVersion = s)
                          );
                        },
                      },
                      q = {
                        traits: function (e) {
                          return (
                            V.isValidPdata(e) &&
                              (T.sids instanceof Array || (T.sids = []), x.extendArray(T.sids, e)),
                            this
                          );
                        },
                        pixels: function (e) {
                          return (
                            V.isValidPdata(e) &&
                              (T.pdata instanceof Array || (T.pdata = []),
                              x.extendArray(T.pdata, e)),
                            this
                          );
                        },
                        logs: function (e) {
                          return (
                            V.isValidLogdata(e) &&
                              (T.logdata !== Object(T.logdata) && (T.logdata = {}),
                              x.extendObject(T.logdata, e)),
                            this
                          );
                        },
                        customQueryParams: function (e) {
                          return V.isEmptyObject(e) || x.extendObject(T, e, R.reservedKeys), this;
                        },
                        signals: function (e, t) {
                          var s,
                            n = e;
                          if (!V.isEmptyObject(n)) {
                            if (t && 'string' == typeof t)
                              for (s in ((n = {}), e)) e.hasOwnProperty(s) && (n[t + s] = e[s]);
                            x.extendObject(T, n, R.reservedKeys);
                          }
                          return this;
                        },
                        declaredId: function (e) {
                          return R.declaredId.setDeclaredId(e, 'request'), this;
                        },
                        result: function (e) {
                          return 'function' == typeof e && (T.callback = e), this;
                        },
                        afterResult: function (e) {
                          return 'function' == typeof e && (T.postCallbackFn = e), this;
                        },
                        useImageRequest: function () {
                          return (T.useImageRequest = !0), this;
                        },
                        clearData: function () {
                          return (T = {}), this;
                        },
                        submit: function (e) {
                          return (T.isDefaultRequest = !!e), M.submitRequest(T), (T = {}), this;
                        },
                        getPartner: function () {
                          return I;
                        },
                        getContainerNSID: function () {
                          return r;
                        },
                        getEventLog: function () {
                          return S;
                        },
                        getState: function () {
                          var e = {},
                            t = {};
                          return (
                            x.extendObject(e, R, { registerRequest: !0 }),
                            x.extendObject(t, k, {
                              requestToProcess: !0,
                              process: !0,
                              sendMessages: !0,
                            }),
                            {
                              initConfig: s,
                              pendingRequest: T,
                              otherRequestInfo: e,
                              destinationPublishingInfo: t,
                              log: S,
                            }
                          );
                        },
                        idSync: function () {
                          throw new Error(
                            'Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance'
                          );
                        },
                        aamIdSync: function () {
                          throw new Error(
                            'Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance'
                          );
                        },
                        passData: function (e) {
                          return V.isEmptyObject(e)
                            ? 'Error: json is empty or not an object'
                            : (M.defaultCallback(e), e);
                        },
                        getPlatformParams: function () {
                          return R.platformParams;
                        },
                        getEventCallConfigParams: function () {
                          var e,
                            t = R,
                            s = t.modStatsParams,
                            n = t.platformParams;
                          if (!s) {
                            for (e in ((s = {}), n))
                              n.hasOwnProperty(e) &&
                                !t.nonModStatsParams[e] &&
                                (s[e.replace(/^d_/, '')] = n[e]);
                            !0 === d ? (s.coop_safe = 1) : !1 === d && (s.coop_unsafe = 1),
                              (t.modStatsParams = s);
                          }
                          return s;
                        },
                        setAsCoopSafe: function () {
                          return (d = !0), this;
                        },
                        setAsCoopUnsafe: function () {
                          return (d = !1), this;
                        },
                        getEventCallIabSignals: function (e) {
                          var t;
                          return e !== Object(e)
                            ? 'Error: config is not an object'
                            : 'function' != typeof e.callback
                            ? 'Error: config.callback is not a function'
                            : ((t = parseInt(e.timeout, 10)),
                              isNaN(t) && (t = null),
                              void G.getQueryStringObject(e.callback, t));
                        },
                      },
                      M = {
                        corsMetadata:
                          ((E = 'none'),
                          'undefined' != typeof XMLHttpRequest &&
                            XMLHttpRequest === Object(XMLHttpRequest) &&
                            'withCredentials' in new XMLHttpRequest() &&
                            (E = 'XMLHttpRequest'),
                          { corsType: E }),
                        getCORSInstance: function () {
                          const $___old_86177d446cb5e78c = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            ),
                            $___old_dcd5cfa484fdc918 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'XMLHttpRequest'
                            );
                          try {
                            if ($___old_86177d446cb5e78c)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_d666925c34f35308.XMLHttpRequest
                              ));
                            if ($___old_dcd5cfa484fdc918)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___stub_d666925c34f35308.XMLHttpRequest
                              ));
                            return function () {
                              return 'none' === this.corsMetadata.corsType
                                ? null
                                : new window[this.corsMetadata.corsType]();
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_86177d446cb5e78c)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_86177d446cb5e78c
                              ));
                            if ($___old_dcd5cfa484fdc918)
                              ({}.constructor.defineProperty(
                                window,
                                'XMLHttpRequest',
                                $___old_dcd5cfa484fdc918
                              ));
                          }
                        },
                        submitRequest: function (e) {
                          return R.registerRequest(M.createQueuedRequest(e)), !0;
                        },
                        createQueuedRequest: function (e) {
                          var t,
                            s,
                            n,
                            i,
                            r,
                            a = e.callback,
                            o = 'img',
                            d = e.isDefaultRequest;
                          if ((delete e.isDefaultRequest, !V.isEmptyObject(u)))
                            for (n in u)
                              if (u.hasOwnProperty(n)) {
                                if (null == (i = u[n]) || '' === i) continue;
                                if (n in e && !(i in e) && !(i in R.reservedKeys)) {
                                  if (null == (r = e[n]) || '' === r) continue;
                                  e[i] = r;
                                }
                              }
                          return (
                            V.isValidPdata(e.sids) || (e.sids = []),
                            V.isValidPdata(e.pdata) || (e.pdata = []),
                            V.isValidLogdata(e.logdata) || (e.logdata = {}),
                            (e.logdataArray = x.convertObjectToKeyValuePairs(e.logdata, '=', !0)),
                            e.logdataArray.push('_ts=' + new Date().getTime()),
                            'function' != typeof a && (a = this.defaultCallback),
                            (t = this.makeRequestSrcData(e)),
                            (s = this.getCORSInstance()) &&
                              !0 !== e.useImageRequest &&
                              (o = 'cors'),
                            {
                              tag: o,
                              src: t.src,
                              corsSrc: t.corsSrc,
                              callbackFn: a,
                              postCallbackFn: e.postCallbackFn,
                              useImageRequest: !!e.useImageRequest,
                              requestData: e,
                              corsInstance: s,
                              corsPostData: t.corsPostData,
                              isDefaultRequest: d,
                            }
                          );
                        },
                        defaultCallback: function (e, t) {
                          var s, n, i, r, a, o, d, u, c;
                          if (g && (s = e.stuff) && s instanceof Array && (n = s.length))
                            for (i = 0; i < n; i++)
                              (r = s[i]) &&
                                r === Object(r) &&
                                ((a = r.cn),
                                (o = r.cv),
                                (void 0 !== (d = r.ttl) && '' !== d) ||
                                  (d = Math.floor(x.getMaxCookieExpiresInMinutes() / 60 / 24)),
                                (u = r.dmn || '.' + document.domain.replace(/^www\./, '')),
                                (c = r.type),
                                a &&
                                  (o || 'number' == typeof o) &&
                                  ('var' !== c &&
                                    (d = parseInt(d, 10)) &&
                                    !isNaN(d) &&
                                    x.setCookie(a, o, 24 * d * 60, '/', u, !1),
                                  (P.stuffed[a] = o)));
                          var l,
                            h,
                            f = e.uuid;
                          V.isPopulatedString(f) &&
                            (V.isEmptyObject(p) ||
                              (('string' == typeof (l = p.path) && l.length) || (l = '/'),
                              (h = parseInt(p.days, 10)),
                              isNaN(h) && (h = 100),
                              x.setCookie(
                                p.name || 'aam_did',
                                f,
                                24 * h * 60,
                                l,
                                p.domain || '.' + document.domain.replace(/^www\./, ''),
                                !0 === p.secure
                              ))),
                            R.abortRequests || k.requestToProcess(e, t);
                        },
                        makeRequestSrcData: function (r) {
                          (r.sids = V.removeEmptyArrayValues(r.sids || [])),
                            (r.pdata = V.removeEmptyArrayValues(r.pdata || []));
                          var a = R,
                            e = a.platformParams,
                            t = x.encodeAndBuildRequest(r.sids, ','),
                            s = x.encodeAndBuildRequest(r.pdata, ','),
                            n = (r.logdataArray || []).join('&');
                          delete r.logdataArray;
                          var i,
                            o,
                            d = encodeURIComponent,
                            u = A.IS_HTTPS ? 'https://' : 'http://',
                            c = a.declaredId.getDeclaredIdQueryString(),
                            l = a.adms.instance
                              ? a.adms.getCustomerIDsQueryString(a.adms.getCustomerIDs())
                              : '',
                            h = (function () {
                              var e,
                                t,
                                s,
                                n,
                                i = [];
                              for (e in r)
                                if (!(e in a.reservedKeys) && r.hasOwnProperty(e))
                                  if (((t = r[e]), (e = d(e)), t instanceof Array))
                                    for (s = 0, n = t.length; s < n; s++)
                                      i.push(e + '=' + d(t[s]));
                                  else i.push(e + '=' + d(t));
                              return i.length ? '&' + i.join('&') : '';
                            })(),
                            f = 'd_dil_ver=' + d(DIL.version),
                            p =
                              'd_nsid=' +
                              e.d_nsid +
                              a.getCoopQueryString() +
                              c +
                              l +
                              (t.length ? '&d_sid=' + t : '') +
                              (s.length ? '&d_px=' + s : '') +
                              (n.length ? '&d_ld=' + d(n) : ''),
                            g =
                              '&d_rtbd=' +
                              e.d_rtbd +
                              '&d_jsonv=' +
                              e.d_jsonv +
                              '&d_dst=' +
                              e.d_dst,
                            m = y ? '&h_referer=' + d(location.href) : '';
                          return (
                            (o =
                              (i = u + I + '.demdex.net/event') + '?' + f + '&' + p + g + h + m),
                            {
                              corsSrc: i + '?' + f + '&_ts=' + new Date().getTime(),
                              src: o,
                              corsPostData: p + g + h + m,
                              isDeclaredIdCall: '' !== c,
                            }
                          );
                        },
                        fireRequest: function (e) {
                          if ('img' === e.tag) this.fireImage(e);
                          else {
                            var t = R.declaredId,
                              s = t.declaredId.request || t.declaredId.init || {},
                              n = { dpid: s.dpid || '', dpuuid: s.dpuuid || '' };
                            this.fireCORS(e, n);
                          }
                        },
                        fireImage: function (t) {
                          var e,
                            s,
                            n = R;
                          n.abortRequests ||
                            ((n.firing = !0),
                            (e = new Image(0, 0)),
                            n.sent.push(t),
                            (e.onload = function () {
                              (n.firing = !1),
                                n.fired.push(t),
                                n.num_of_img_responses++,
                                n.registerRequest();
                            }),
                            (s = function (e) {
                              (c = 'imgAbortOrErrorHandler received the event of type ' + e.type),
                                L.log(c),
                                (n.abortRequests = !0),
                                (n.firing = !1),
                                n.errored.push(t),
                                n.num_of_img_errors++,
                                n.registerRequest();
                            }),
                            e.addEventListener('error', s),
                            e.addEventListener('abort', s),
                            (e.src = t.src));
                        },
                        fireCORS: function (n, i) {
                          var r = this,
                            a = R,
                            e = this.corsMetadata.corsType,
                            t = n.corsSrc,
                            s = n.corsInstance,
                            o = n.corsPostData,
                            d = n.postCallbackFn,
                            u = 'function' == typeof d;
                          if (!a.abortRequests && !v) {
                            a.firing = !0;
                            try {
                              s.open('post', t, !0),
                                'XMLHttpRequest' === e &&
                                  ((s.withCredentials = !0),
                                  s.setRequestHeader(
                                    'Content-Type',
                                    'application/x-www-form-urlencoded'
                                  ),
                                  (s.onreadystatechange = function () {
                                    4 === this.readyState &&
                                      200 === this.status &&
                                      (function (e) {
                                        var t;
                                        try {
                                          if ((t = JSON.parse(e)) !== Object(t))
                                            return r.handleCORSError(n, i, 'Response is not JSON');
                                        } catch (e) {
                                          return r.handleCORSError(
                                            n,
                                            i,
                                            'Error parsing response as JSON'
                                          );
                                        }
                                        try {
                                          var s = n.callbackFn;
                                          (a.firing = !1),
                                            a.fired.push(n),
                                            a.num_of_cors_responses++,
                                            s(t, i),
                                            u && d(t, i);
                                        } catch (e) {
                                          (e.message =
                                            'DIL handleCORSResponse caught error with message ' +
                                            e.message),
                                            (c = e.message),
                                            L.log(c),
                                            (e.filename = e.filename || 'dil.js'),
                                            (e.partner = I),
                                            DIL.errorModule.handleError(e);
                                          try {
                                            s({ error: e.name + '|' + e.message }, i),
                                              u && d({ error: e.name + '|' + e.message }, i);
                                          } catch (e) {}
                                        } finally {
                                          a.registerRequest();
                                        }
                                      })(this.responseText);
                                  })),
                                (s.onerror = function () {
                                  r.handleCORSError(n, i, 'onerror');
                                }),
                                (s.ontimeout = function () {
                                  r.handleCORSError(n, i, 'ontimeout');
                                }),
                                s.send(o);
                            } catch (e) {
                              this.handleCORSError(n, i, 'try-catch');
                            }
                            a.sent.push(n), (a.declaredId.declaredId.request = null);
                          }
                        },
                        handleCORSError: function (e, t, s) {
                          R.num_of_cors_errors++, R.corsErrorSources.push(s);
                        },
                      },
                      V = {
                        isValidPdata: function (e) {
                          return !!(e instanceof Array && this.removeEmptyArrayValues(e).length);
                        },
                        isValidLogdata: function (e) {
                          return !this.isEmptyObject(e);
                        },
                        isEmptyObject: function (e) {
                          if (e !== Object(e)) return !0;
                          var t;
                          for (t in e) if (e.hasOwnProperty(t)) return !1;
                          return !0;
                        },
                        removeEmptyArrayValues: function (e) {
                          var t,
                            s = 0,
                            n = e.length,
                            i = [];
                          for (s = 0; s < n; s++) null != (t = e[s]) && '' !== t && i.push(t);
                          return i;
                        },
                        isPopulatedString: function (e) {
                          return 'string' == typeof e && e.length;
                        },
                      },
                      x = {
                        convertObjectToKeyValuePairs: function (e, t, s) {
                          var n,
                            i,
                            r = [];
                          for (n in (t || (t = '='), e))
                            e.hasOwnProperty(n) &&
                              null != (i = e[n]) &&
                              '' !== i &&
                              r.push(n + t + (s ? encodeURIComponent(i) : i));
                          return r;
                        },
                        encodeAndBuildRequest: function (e, t) {
                          return e
                            .map(function (e) {
                              return encodeURIComponent(e);
                            })
                            .join(t);
                        },
                        getCookie: function (e) {
                          var t,
                            s,
                            n,
                            i = e + '=',
                            r = document.cookie.split(';');
                          for (t = 0, s = r.length; t < s; t++) {
                            for (n = r[t]; ' ' === n.charAt(0); ) n = n.substring(1, n.length);
                            if (0 === n.indexOf(i))
                              return decodeURIComponent(n.substring(i.length, n.length));
                          }
                          return null;
                        },
                        setCookie: function (e, t, s, n, i, r) {
                          var a = new Date();
                          s && (s = 1000 * s * 60),
                            (document.cookie =
                              e +
                              '=' +
                              encodeURIComponent(t) +
                              (s ? ';expires=' + new Date(a.getTime() + s).toUTCString() : '') +
                              (n ? ';path=' + n : '') +
                              (i ? ';domain=' + i : '') +
                              (r ? ';secure' : ''));
                        },
                        extendArray: function (e, t) {
                          return (
                            e instanceof Array &&
                            t instanceof Array &&
                            (Array.prototype.push.apply(e, t), !0)
                          );
                        },
                        extendObject: function (e, t, s) {
                          var n;
                          if (e !== Object(e) || t !== Object(t)) return !1;
                          for (n in t)
                            if (t.hasOwnProperty(n)) {
                              if (!V.isEmptyObject(s) && n in s) continue;
                              e[n] = t[n];
                            }
                          return !0;
                        },
                        getMaxCookieExpiresInMinutes: function () {
                          return A.SIX_MONTHS_IN_MINUTES;
                        },
                        replaceMethodsWithFunction: function (e, t) {
                          var s;
                          if (e === Object(e) && 'function' == typeof t)
                            for (s in e)
                              e.hasOwnProperty(s) && 'function' == typeof e[s] && (e[s] = t);
                        },
                      },
                      N =
                        ((j = _.requestController),
                        {
                          exists: null,
                          instance: null,
                          aamIsApproved: null,
                          init: function () {
                            var e = this;
                            this.checkIfExists()
                              ? ((this.exists = !0),
                                (this.instance = window.adobe.optIn),
                                this.instance.fetchPermissions(function () {
                                  e.callback();
                                }, !0))
                              : (this.exists = !1);
                          },
                          checkIfExists: function () {
                            return (
                              window.adobe === Object(window.adobe) &&
                              window.adobe.optIn === Object(window.adobe.optIn)
                            );
                          },
                          callback: function () {
                            (this.aamIsApproved = this.instance.isApproved([
                              this.instance.Categories.AAM,
                            ])),
                              j.adms.waitForMidToReleaseRequests(),
                              j.adms.getIsOptedOut();
                          },
                          isApproved: function () {
                            return (
                              !this.isIabContext() &&
                              !j.adms.isOptedOut &&
                              (!this.exists || this.aamIsApproved)
                            );
                          },
                          isIabContext: function () {
                            return this.instance && this.instance.isIabContext;
                          },
                        });
                    _.optIn = N;
                    var U,
                      F,
                      Q,
                      H,
                      G =
                        ((F = (U = _).requestController),
                        (Q = U.optIn),
                        (H = {
                          isVendorConsented: null,
                          doesGdprApply: null,
                          consentString: null,
                          queryStringObjectCallbacks: [],
                          init: function () {
                            this.fetchConsentData();
                          },
                          hasGoSignal: function () {
                            return !(
                              !(
                                Q.isIabContext() &&
                                this.isVendorConsented &&
                                this.doesGdprApply &&
                                'string' == typeof this.consentString &&
                                this.consentString.length
                              ) || F.adms.isOptedOut
                            );
                          },
                          fetchConsentData: function (s, e) {
                            var n = this,
                              t = {};
                            'function' != typeof s && (s = function () {}),
                              Q.instance && Q.isIabContext()
                                ? (e && (t.timeout = e),
                                  Q.instance.execute({
                                    command: 'iabPlugin.fetchConsentData',
                                    params: t,
                                    callback: function (e, t) {
                                      t === Object(t)
                                        ? ((n.doesGdprApply = !!t.gdprApplies),
                                          (n.consentString = t.consentString || ''))
                                        : ((n.doesGdprApply = !1), (n.consentString = '')),
                                        (n.isVendorConsented = Q.instance.isApproved(
                                          Q.instance.Categories.AAM
                                        )),
                                        e ? s({}) : n.checkQueryStringObject(s),
                                        F.adms.waitForMidToReleaseRequests();
                                    },
                                  }))
                                : s({});
                          },
                          getQueryString: function () {
                            return Q.isIabContext()
                              ? 'gdpr=' +
                                  (this.doesGdprApply ? 1 : 0) +
                                  '&gdpr_consent=' +
                                  this.consentString +
                                  '&'
                              : '';
                          },
                          getQueryStringObject: function (e, t) {
                            this.fetchConsentData(e, t);
                          },
                          checkQueryStringObject: function (e) {
                            H.hasGoSignal() &&
                              'function' == typeof e &&
                              e({
                                gdpr: this.doesGdprApply ? 1 : 0,
                                gdpr_consent: this.consentString,
                              });
                          },
                        }));
                    (_.iab = G),
                      'error' === I &&
                        0 === r &&
                        window.addEventListener('load', function () {
                          DIL.windowLoaded = !0;
                        });
                    var B = !1,
                      W = function () {
                        B || ((B = !0), R.registerRequest(), K());
                      },
                      K = function () {
                        setTimeout(function () {
                          f ||
                            R.firstRequestHasFired ||
                            ('function' == typeof m ? q.afterResult(m).submit(!0) : q.submit(!0));
                        }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
                      },
                      X = document;
                    'error' !== I &&
                      (DIL.windowLoaded
                        ? W()
                        : 'complete' !== X.readyState && 'loaded' !== X.readyState
                        ? window.addEventListener('load', function () {
                            (DIL.windowLoaded = !0), W();
                          })
                        : ((DIL.windowLoaded = !0), W())),
                      R.declaredId.setDeclaredId(n, 'init'),
                      N.init(),
                      G.init(),
                      R.processVisitorAPI();
                    A.IS_IE_LESS_THAN_10 &&
                      x.replaceMethodsWithFunction(q, function () {
                        return this;
                      }),
                      (this.api = q),
                      (this.getStuffedVariable = function (e) {
                        var t = P.stuffed[e];
                        return (
                          t ||
                            'number' == typeof t ||
                            (t = x.getCookie(e)) ||
                            'number' == typeof t ||
                            (t = ''),
                          t
                        );
                      }),
                      (this.validators = V),
                      (this.helpers = x),
                      (this.constants = A),
                      (this.log = S),
                      (this.pendingRequest = T),
                      (this.requestController = R),
                      (this.destinationPublishing = k),
                      (this.requestProcs = M),
                      (this.units = _),
                      (this.initConfig = s),
                      (this.logger = L),
                      C && ((this.variables = P), (this.callWindowLoadFunctions = W));
                  }.apply(this, arguments);
                } finally {
                  if ($___old_f131dd282b917093)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_f131dd282b917093
                    ));
                  if ($___old_66bd7a71aea29fad)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_66bd7a71aea29fad
                    ));
                }
              }),
              (DIL.extendStaticPropertiesAndMethods = function (e) {
                var t;
                if (e === Object(e)) for (t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
              }),
              DIL.extendStaticPropertiesAndMethods({
                version: '9.3',
                jsonVersion: 1,
                constants: { TIME_TO_DEFAULT_REQUEST: 500 },
                variables: { scriptNodeList: document.getElementsByTagName('script') },
                windowLoaded: !1,
                dils: {},
                isAddedPostWindowLoad: function () {
                  var e = arguments[0];
                  this.windowLoaded = 'function' == typeof e ? !!e() : 'boolean' != typeof e || e;
                },
                create: function (e) {
                  try {
                    return new DIL(e);
                  } catch (e) {
                    throw new Error(
                      'Error in attempt to create DIL instance with DIL.create(): ' + e.message
                    );
                  }
                },
                registerDil: function (e, t, s) {
                  var n = t + '$' + s;
                  n in this.dils || (this.dils[n] = e);
                },
                getDil: function (e, t) {
                  var s;
                  return (
                    'string' != typeof e && (e = ''),
                    t || (t = 0),
                    (s = e + '$' + t) in this.dils
                      ? this.dils[s]
                      : new Error(
                          'The DIL instance with partner = ' +
                            e +
                            ' and containerNSID = ' +
                            t +
                            ' was not found'
                        )
                  );
                },
                dexGetQSVars: function (e, t, s) {
                  var n = this.getDil(t, s);
                  return n instanceof this ? n.getStuffedVariable(e) : '';
                },
              }),
              (DIL.errorModule =
                ((r = DIL.create({
                  partner: 'error',
                  containerNSID: 0,
                  ignoreHardDependencyOnVisitorAPI: !0,
                })),
                (o = !(a = {
                  harvestererror: 14138,
                  destpuberror: 14139,
                  dpmerror: 14140,
                  generalerror: 14137,
                  error: 14137,
                  noerrortypedefined: 15021,
                  evalerror: 15016,
                  rangeerror: 15017,
                  referenceerror: 15018,
                  typeerror: 15019,
                  urierror: 15020,
                })),
                {
                  activate: function () {
                    o = !0;
                  },
                  handleError: function (e) {
                    if (!o) return 'DIL error module has not been activated';
                    e !== Object(e) && (e = {});
                    var t = e.name ? (e.name + '').toLowerCase() : '',
                      s = t in a ? a[t] : a.noerrortypedefined,
                      n = [],
                      i = {
                        name: t,
                        filename: e.filename ? e.filename + '' : '',
                        partner: e.partner ? e.partner + '' : 'no_partner',
                        site: e.site ? e.site + '' : document.location.href,
                        message: e.message ? e.message + '' : '',
                      };
                    return (
                      n.push(s),
                      r.api.pixels(n).logs(i).useImageRequest().submit(),
                      'DIL error report sent'
                    );
                  },
                  pixelMap: a,
                })),
              (DIL.tools = {}),
              (DIL.modules = { helpers: {} })),
              window.DIL &&
                DIL.tools &&
                DIL.modules &&
                ((DIL.tools.getMetaTags = function () {
                  var e,
                    t,
                    s,
                    n,
                    i,
                    r = {},
                    a = document.getElementsByTagName('meta');
                  for (e = 0, s = arguments.length; e < s; e++)
                    if (null !== (n = arguments[e]))
                      for (t = 0; t < a.length; t++)
                        if ((i = a[t]).name === n) {
                          r[n] = i.content;
                          break;
                        }
                  return r;
                }),
                (DIL.tools.decomposeURI = function (e) {
                  var s,
                    t = document.createElement('a');
                  return (
                    (t.href = e || document.referrer),
                    {
                      hash: t.hash,
                      host: t.host.split(':').shift(),
                      hostname: t.hostname,
                      href: t.href,
                      pathname: t.pathname.replace(/^\//, ''),
                      protocol: t.protocol,
                      search: t.search,
                      uriParams:
                        ((s = {}),
                        t.search
                          .replace(/^(\/|\?)?|\/$/g, '')
                          .split('&')
                          .map(function (e) {
                            var t = e.split('=');
                            s[t.shift()] = t.shift();
                          }),
                        s),
                    }
                  );
                }),
                (DIL.tools.getSearchReferrer = function (e, t) {
                  var s = DIL.getDil('error'),
                    n = DIL.tools.decomposeURI(e || document.referrer),
                    i = '',
                    r = '',
                    a = {
                      DEFAULT: { queryParam: 'q' },
                      SEARCH_ENGINES: [
                        t === Object(t) ? t : {},
                        { hostPattern: /aol\./ },
                        { hostPattern: /ask\./ },
                        { hostPattern: /bing\./ },
                        { hostPattern: /google\./ },
                        { hostPattern: /yahoo\./, queryParam: 'p' },
                      ],
                    },
                    o = a.DEFAULT;
                  return (i = a.SEARCH_ENGINES.filter(function (e) {
                    return !(!e.hasOwnProperty('hostPattern') || !n.hostname.match(e.hostPattern));
                  }).shift())
                    ? {
                        valid: !0,
                        name: n.hostname,
                        keywords:
                          (s.helpers.extendObject(o, i),
                          (i = ('' + n.search).match(o.queryPattern)),
                          (r = o.queryPattern ? (i ? i[1] : '') : n.uriParams[o.queryParam]),
                          decodeURIComponent(r || '').replace(/\+|%20/g, ' ')),
                      }
                    : { valid: !1, name: '', keywords: '' };
                }),
                (DIL.modules.GA = t),
                (DIL.modules.siteCatalyst = s),
                (DIL.modules.helpers.handleModuleError = e));
          })();
          function s_getLoadTime () {
            const $___old_f8860446be49346a = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_f8860446be49346a)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_d43db2f5a125ac97.performance
                ));
              return function () {
                if (!window.s_loadT) {
                  var b = new Date().getTime(),
                    o = window.performance ? performance.timing : 0,
                    a = o ? o.requestStart : window.inHeadTS || 0;
                  s_loadT = a ? Math.round((b - a) / 100) : '';
                }
                return s_loadT;
              }.apply(this, arguments);
            } finally {
              if ($___old_f8860446be49346a)
                ({}.constructor.defineProperty(window, 'performance', $___old_f8860446be49346a));
            }
          }
          window.AppMeasurement_Module_Integrate = function (l) {
            var c = this;
            c.s = l;
            var e = window;
            e.s_c_in || ((e.s_c_il = []), (e.s_c_in = 0));
            c._il = e.s_c_il;
            c._in = e.s_c_in;
            c._il[c._in] = c;
            e.s_c_in++;
            c._c = 's_m';
            c.list = [];
            c.add = function (d, b) {
              var a;
              b || (b = 's_Integrate_' + d);
              e[b] || (e[b] = {});
              a = c[d] = e[b];
              a.a = d;
              a.e = c;
              a._c = 0;
              a._d = 0;
              void 0 == a.disable && (a.disable = 0);
              a.get = function (b, d) {
                var f = document,
                  h = f.getElementsByTagName('HEAD'),
                  k;
                if (
                  !a.disable &&
                  (d || (v = 's_' + c._in + '_Integrate_' + a.a + '_get_' + a._c),
                  a._c++,
                  (a.VAR = v),
                  (a.CALLBACK = 's_c_il[' + c._in + '].' + a.a + '.callback'),
                  a.delay(),
                  (h = h && 0 < h.length ? h[0] : f.body))
                )
                  try {
                    (k = f.createElement('SCRIPT')),
                      (k.type = 'text/javascript'),
                      k.setAttribute('async', 'async'),
                      (k.src = c.c(a, b)),
                      0 > b.indexOf('[CALLBACK]') &&
                        (k.onload = k.onreadystatechange = function () {
                          a.callback(e[v]);
                        }),
                      h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k);
                  } catch (l) {}
              };
              a.callback = function (b) {
                var c;
                if (b) for (c in b) Object.prototype[c] || (a[c] = b[c]);
                a.ready();
              };
              a.beacon = function (b) {
                var d = 's_i_' + c._in + '_Integrate_' + a.a + '_' + a._c;
                a.disable || (a._c++, (d = e[d] = new Image()), (d.src = c.c(a, b)));
              };
              a.script = function (b) {
                a.get(b, 1);
              };
              a.delay = function () {
                a._d++;
              };
              a.ready = function () {
                a._d--;
                a.disable || l.delayReady();
              };
              c.list.push(d);
            };
            c._g = function (d) {
              var b,
                a = (d ? 'use' : 'set') + 'Vars';
              for (d = 0; d < c.list.length; d++)
                if ((b = c[c.list[d]]) && !b.disable && b[a])
                  try {
                    b[a](l, b);
                  } catch (e) {}
            };
            c._t = function () {
              c._g(1);
            };
            c._d = function () {
              var d, b;
              for (d = 0; d < c.list.length; d++)
                if ((b = c[c.list[d]]) && !b.disable && 0 < b._d) return 1;
              return 0;
            };
            c.c = function (c, b) {
              var a, e, g, f;
              'http' != b.toLowerCase().substring(0, 4) && (b = 'http://' + b);
              l.ssl && (b = l.replace(b, 'http:', 'https:'));
              c.RAND = Math.floor(10000000000000 * Math.random());
              for (a = 0; 0 <= a; )
                (a = b.indexOf('[', a)),
                  0 <= a &&
                    ((e = b.indexOf(']', a)),
                    e > a &&
                      ((g = b.substring(a + 1, e)),
                      2 < g.length && 's.' == g.substring(0, 2)
                        ? (f = l[g.substring(2)]) || (f = '')
                        : ((f = '' + c[g]), f != c[g] && parseFloat(f) != c[g] && (g = 0)),
                      g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)),
                      (a = e)));
              return b;
            };
          };
          function AppMeasurement (r) {
            const $___old_2495e95d7adaac79 = {}.constructor.getOwnPropertyDescriptor(
              Navigator.prototype,
              'userAgent'
            );
            try {
              if ($___old_2495e95d7adaac79)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_2c19f7f1b6f683c6.userAgent
                ));
              return function () {
                var a = this;
                a.version = '2.17.0';
                var h = window;
                h.s_c_in || ((h.s_c_il = []), (h.s_c_in = 0));
                a._il = h.s_c_il;
                a._in = h.s_c_in;
                a._il[a._in] = a;
                h.s_c_in++;
                a._c = 's_c';
                var q = AppMeasurement.ec;
                q || (q = null);
                var p = h,
                  m,
                  s;
                try {
                  for (
                    m = p.parent, s = p.location;
                    m &&
                    m.location &&
                    s &&
                    '' + m.location != '' + s &&
                    p.location &&
                    '' + m.location != '' + p.location &&
                    m.location.host == s.host;

                  )
                    (p = m), (m = p.parent);
                } catch (u) {}
                a.C = function (a) {
                  try {
                    console.log(a);
                  } catch (b) {}
                };
                a.Pa = function (a) {
                  return '' + parseInt(a) == '' + a;
                };
                a.replace = function (a, b, d) {
                  return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d);
                };
                a.escape = function (c) {
                  var b, d;
                  if (!c) return c;
                  c = encodeURIComponent(c);
                  for (b = 0; 7 > b; b++)
                    (d = "+~!*()'".substring(b, b + 1)),
                      0 <= c.indexOf(d) &&
                        (c = a.replace(c, d, '%' + d.charCodeAt(0).toString(16).toUpperCase()));
                  return c;
                };
                a.unescape = function (c) {
                  if (!c) return c;
                  c = 0 <= c.indexOf('+') ? a.replace(c, '+', ' ') : c;
                  try {
                    return decodeURIComponent(c);
                  } catch (b) {}
                  return unescape(c);
                };
                a.Kb = function () {
                  var c = h.location.hostname,
                    b = a.fpCookieDomainPeriods,
                    d;
                  b || (b = a.cookieDomainPeriods);
                  if (
                    c &&
                    !a.Ia &&
                    !/^[0-9.]+$/.test(c) &&
                    ((b = b ? parseInt(b) : 2),
                    (b = 2 < b ? b : 2),
                    (d = c.lastIndexOf('.')),
                    0 <= d)
                  ) {
                    for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
                    a.Ia = 0 < d ? c.substring(d) : c;
                  }
                  return a.Ia;
                };
                a.c_r = a.cookieRead = function (c) {
                  c = a.escape(c);
                  var b = ' ' + a.d.cookie,
                    d = b.indexOf(' ' + c + '='),
                    f = 0 > d ? d : b.indexOf(';', d);
                  c = 0 > d ? '' : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
                  return '[[B]]' != c ? c : '';
                };
                a.c_w = a.cookieWrite = function (c, b, d) {
                  var f = a.Kb(),
                    e = a.cookieLifetime,
                    g;
                  b = '' + b;
                  e = e ? ('' + e).toUpperCase() : '';
                  d &&
                    'SESSION' != e &&
                    'NONE' != e &&
                    ((g = '' != b ? parseInt(e ? e : 0) : -60)
                      ? ((d = new Date()), d.setTime(d.getTime() + 1000 * g))
                      : 1 === d &&
                        ((d = new Date()),
                        (g = d.getYear()),
                        d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
                  return c && 'NONE' != e
                    ? ((a.d.cookie =
                        a.escape(c) +
                        '=' +
                        a.escape('' != b ? b : '[[B]]') +
                        '; path=/;' +
                        (d && 'SESSION' != e ? ' expires=' + d.toUTCString() + ';' : '') +
                        (f ? ' domain=' + f + ';' : '')),
                      a.cookieRead(c) == b)
                    : 0;
                };
                a.Hb = function () {
                  var c = a.Util.getIeVersion();
                  'number' === typeof c &&
                    10 > c &&
                    ((a.unsupportedBrowser = !0), a.ub(a, function () {}));
                };
                a.ub = function (a, b) {
                  for (var d in a) a.hasOwnProperty(d) && 'function' === typeof a[d] && (a[d] = b);
                };
                a.K = [];
                a.ea = function (c, b, d) {
                  if (a.Ja) return 0;
                  a.maxDelay || (a.maxDelay = 250);
                  var f = 0,
                    e = new Date().getTime() + a.maxDelay,
                    g = a.d.visibilityState,
                    k = ['webkitvisibilitychange', 'visibilitychange'];
                  g || (g = a.d.webkitVisibilityState);
                  if (g && 'prerender' == g) {
                    if (!a.fa)
                      for (a.fa = 1, d = 0; d < k.length; d++)
                        a.d.addEventListener(k[d], function () {
                          var c = a.d.visibilityState;
                          c || (c = a.d.webkitVisibilityState);
                          'visible' == c && ((a.fa = 0), a.delayReady());
                        });
                    f = 1;
                    e = 0;
                  } else d || (a.u('_d') && (f = 1));
                  f &&
                    (a.K.push({ m: c, a: b, t: e }), a.fa || setTimeout(a.delayReady, a.maxDelay));
                  return f;
                };
                a.delayReady = function () {
                  var c = new Date().getTime(),
                    b = 0,
                    d;
                  for (a.u('_d') ? (b = 1) : a.ya(); 0 < a.K.length; ) {
                    d = a.K.shift();
                    if (b && !d.t && d.t > c) {
                      a.K.unshift(d);
                      setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                      break;
                    }
                    a.Ja = 1;
                    a[d.m].apply(a, d.a);
                    a.Ja = 0;
                  }
                };
                a.setAccount = a.sa = function (c) {
                  var b, d;
                  if (!a.ea('setAccount', arguments))
                    if (((a.account = c), a.allAccounts))
                      for (
                        b = a.allAccounts.concat(c.split(',')),
                          a.allAccounts = [],
                          b.sort(),
                          d = 0;
                        d < b.length;
                        d++
                      )
                        (0 != d && b[d - 1] == b[d]) || a.allAccounts.push(b[d]);
                    else a.allAccounts = c.split(',');
                };
                a.foreachVar = function (c, b) {
                  var d,
                    f,
                    e,
                    g,
                    k = '';
                  e = f = '';
                  if (a.lightProfileID)
                    (d = a.O),
                      (k = a.lightTrackVars) && (k = ',' + k + ',' + a.ka.join(',') + ',');
                  else {
                    d = a.g;
                    if (a.pe || a.linkType)
                      (k = a.linkTrackVars),
                        (f = a.linkTrackEvents),
                        a.pe &&
                          ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                          a[e] && ((k = a[e].ac), (f = a[e].$b)));
                    k && (k = ',' + k + ',' + a.F.join(',') + ',');
                    f && k && (k += ',events,');
                  }
                  b && (b = ',' + b + ',');
                  for (f = 0; f < d.length; f++)
                    (e = d[f]),
                      (g = a[e]) &&
                        (!k || 0 <= k.indexOf(',' + e + ',')) &&
                        (!b || 0 <= b.indexOf(',' + e + ',')) &&
                        c(e, g);
                };
                a.o = function (c, b, d, f, e) {
                  var g = '',
                    k,
                    l,
                    h,
                    n,
                    m = 0;
                  'contextData' == c && (c = 'c');
                  if (b) {
                    for (k in b)
                      if (
                        !(Object.prototype[k] || (e && k.substring(0, e.length) != e)) &&
                        b[k] &&
                        (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + k + ','))
                      ) {
                        h = !1;
                        if (m)
                          for (l = 0; l < m.length; l++)
                            if (k.substring(0, m[l].length) == m[l]) {
                              h = !0;
                              break;
                            }
                        if (
                          !h &&
                          ('' == g && (g += '&' + c + '.'),
                          (l = b[k]),
                          e && (k = k.substring(e.length)),
                          0 < k.length)
                        )
                          if (((h = k.indexOf('.')), 0 < h))
                            (l = k.substring(0, h)),
                              (h = (e ? e : '') + l + '.'),
                              m || (m = []),
                              m.push(h),
                              (g += a.o(l, b, d, f, h));
                          else if (('boolean' == typeof l && (l = l ? 'true' : 'false'), l)) {
                            if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                              switch (((h = k.substring(0, 4)), (n = k.substring(4)), k)) {
                                case 'transactionID':
                                  k = 'xact';
                                  break;
                                case 'channel':
                                  k = 'ch';
                                  break;
                                case 'campaign':
                                  k = 'v0';
                                  break;
                                default:
                                  a.Pa(n) &&
                                    ('prop' == h
                                      ? (k = 'c' + n)
                                      : 'eVar' == h
                                      ? (k = 'v' + n)
                                      : 'list' == h
                                      ? (k = 'l' + n)
                                      : 'hier' == h && ((k = 'h' + n), (l = l.substring(0, 255))));
                              }
                            g += '&' + a.escape(k) + '=' + a.escape(l);
                          }
                      }
                    '' != g && (g += '&.' + c);
                  }
                  return g;
                };
                a.usePostbacks = 0;
                a.Nb = function () {
                  var c = '',
                    b,
                    d,
                    f,
                    e,
                    g,
                    k,
                    l,
                    h,
                    n = '',
                    m = '',
                    p = (e = ''),
                    r = a.T();
                  if (a.lightProfileID)
                    (b = a.O),
                      (n = a.lightTrackVars) && (n = ',' + n + ',' + a.ka.join(',') + ',');
                  else {
                    b = a.g;
                    if (a.pe || a.linkType)
                      (n = a.linkTrackVars),
                        (m = a.linkTrackEvents),
                        a.pe &&
                          ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                          a[e] && ((n = a[e].ac), (m = a[e].$b)));
                    n && (n = ',' + n + ',' + a.F.join(',') + ',');
                    m && ((m = ',' + m + ','), n && (n += ',events,'));
                    a.events2 && (p += ('' != p ? ',' : '') + a.events2);
                  }
                  if (r && r.getCustomerIDs) {
                    e = q;
                    if ((g = r.getCustomerIDs()))
                      for (d in g)
                        Object.prototype[d] ||
                          ((f = g[d]),
                          'object' == typeof f &&
                            (e || (e = {}),
                            f.id && (e[d + '.id'] = f.id),
                            f.authState && (e[d + '.as'] = f.authState)));
                    e && (c += a.o('cid', e));
                  }
                  a.AudienceManagement &&
                    a.AudienceManagement.isReady() &&
                    (c += a.o('d', a.AudienceManagement.getEventCallConfigParams()));
                  for (d = 0; d < b.length; d++) {
                    e = b[d];
                    g = a[e];
                    f = e.substring(0, 4);
                    k = e.substring(4);
                    g ||
                      ('events' == e && p
                        ? ((g = p), (p = ''))
                        : 'marketingCloudOrgID' == e &&
                          r &&
                          a.V('ECID') &&
                          (g = r.marketingCloudOrgID));
                    if (g && (!n || 0 <= n.indexOf(',' + e + ','))) {
                      switch (e) {
                        case 'customerPerspective':
                          e = 'cp';
                          break;
                        case 'marketingCloudOrgID':
                          e = 'mcorgid';
                          break;
                        case 'supplementalDataID':
                          e = 'sdid';
                          break;
                        case 'timestamp':
                          e = 'ts';
                          break;
                        case 'dynamicVariablePrefix':
                          e = 'D';
                          break;
                        case 'visitorID':
                          e = 'vid';
                          break;
                        case 'marketingCloudVisitorID':
                          e = 'mid';
                          break;
                        case 'analyticsVisitorID':
                          e = 'aid';
                          break;
                        case 'audienceManagerLocationHint':
                          e = 'aamlh';
                          break;
                        case 'audienceManagerBlob':
                          e = 'aamb';
                          break;
                        case 'authState':
                          e = 'as';
                          break;
                        case 'pageURL':
                          e = 'g';
                          255 < g.length &&
                            ((a.pageURLRest = g.substring(255)), (g = g.substring(0, 255)));
                          break;
                        case 'pageURLRest':
                          e = '-g';
                          break;
                        case 'referrer':
                          e = 'r';
                          break;
                        case 'vmk':
                        case 'visitorMigrationKey':
                          e = 'vmt';
                          break;
                        case 'visitorMigrationServer':
                          e = 'vmf';
                          a.ssl && a.visitorMigrationServerSecure && (g = '');
                          break;
                        case 'visitorMigrationServerSecure':
                          e = 'vmf';
                          !a.ssl && a.visitorMigrationServer && (g = '');
                          break;
                        case 'charSet':
                          e = 'ce';
                          break;
                        case 'visitorNamespace':
                          e = 'ns';
                          break;
                        case 'cookieDomainPeriods':
                          e = 'cdp';
                          break;
                        case 'cookieLifetime':
                          e = 'cl';
                          break;
                        case 'variableProvider':
                          e = 'vvp';
                          break;
                        case 'currencyCode':
                          e = 'cc';
                          break;
                        case 'channel':
                          e = 'ch';
                          break;
                        case 'transactionID':
                          e = 'xact';
                          break;
                        case 'campaign':
                          e = 'v0';
                          break;
                        case 'latitude':
                          e = 'lat';
                          break;
                        case 'longitude':
                          e = 'lon';
                          break;
                        case 'resolution':
                          e = 's';
                          break;
                        case 'colorDepth':
                          e = 'c';
                          break;
                        case 'javascriptVersion':
                          e = 'j';
                          break;
                        case 'javaEnabled':
                          e = 'v';
                          break;
                        case 'cookiesEnabled':
                          e = 'k';
                          break;
                        case 'browserWidth':
                          e = 'bw';
                          break;
                        case 'browserHeight':
                          e = 'bh';
                          break;
                        case 'connectionType':
                          e = 'ct';
                          break;
                        case 'homepage':
                          e = 'hp';
                          break;
                        case 'events':
                          p && (g += ('' != g ? ',' : '') + p);
                          if (m)
                            for (k = g.split(','), g = '', f = 0; f < k.length; f++)
                              (l = k[f]),
                                (h = l.indexOf('=')),
                                0 <= h && (l = l.substring(0, h)),
                                (h = l.indexOf(':')),
                                0 <= h && (l = l.substring(0, h)),
                                0 <= m.indexOf(',' + l + ',') && (g += (g ? ',' : '') + k[f]);
                          break;
                        case 'events2':
                          g = '';
                          break;
                        case 'contextData':
                          c += a.o('c', a[e], n, e);
                          g = '';
                          break;
                        case 'lightProfileID':
                          e = 'mtp';
                          break;
                        case 'lightStoreForSeconds':
                          e = 'mtss';
                          a.lightProfileID || (g = '');
                          break;
                        case 'lightIncrementBy':
                          e = 'mti';
                          a.lightProfileID || (g = '');
                          break;
                        case 'retrieveLightProfiles':
                          e = 'mtsr';
                          break;
                        case 'deleteLightProfiles':
                          e = 'mtsd';
                          break;
                        case 'retrieveLightData':
                          a.retrieveLightProfiles && (c += a.o('mts', a[e], n, e));
                          g = '';
                          break;
                        default:
                          a.Pa(k) &&
                            ('prop' == f
                              ? (e = 'c' + k)
                              : 'eVar' == f
                              ? (e = 'v' + k)
                              : 'list' == f
                              ? (e = 'l' + k)
                              : 'hier' == f && ((e = 'h' + k), (g = g.substring(0, 255))));
                      }
                      g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
                    }
                    'pev3' == e && a.e && (c += a.e);
                  }
                  a.ja && ((c += '&lrt=' + a.ja), (a.ja = null));
                  return c;
                };
                a.B = function (a) {
                  var b = a.tagName;
                  if (
                    'undefined' != '' + a.hc ||
                    ('undefined' != '' + a.Wb && 'HTML' != ('' + a.Wb).toUpperCase())
                  )
                    return '';
                  b = b && b.toUpperCase ? b.toUpperCase() : '';
                  'SHAPE' == b && (b = '');
                  b &&
                    (('INPUT' == b || 'BUTTON' == b) && a.type && a.type.toUpperCase
                      ? (b = a.type.toUpperCase())
                      : !b && a.href && (b = 'A'));
                  return b;
                };
                a.La = function (a) {
                  var b = h.location,
                    d = a.href ? a.href : '',
                    f,
                    e,
                    g;
                  f = d.indexOf(':');
                  e = d.indexOf('?');
                  g = d.indexOf('/');
                  d &&
                    (0 > f || (0 <= e && f > e) || (0 <= g && f > g)) &&
                    ((e =
                      a.protocol && 1 < a.protocol.length
                        ? a.protocol
                        : b.protocol
                        ? b.protocol
                        : ''),
                    (f = b.pathname.lastIndexOf('/')),
                    (d =
                      (e ? e + '//' : '') +
                      (a.host ? a.host : b.host ? b.host : '') +
                      ('/' != d.substring(0, 1)
                        ? b.pathname.substring(0, 0 > f ? 0 : f) + '/'
                        : '') +
                      d));
                  return d;
                };
                a.L = function (c) {
                  var b = a.B(c),
                    d,
                    f,
                    e = '',
                    g = 0;
                  return b &&
                    ((d = c.protocol),
                    (f = c.onclick),
                    !c.href ||
                    ('A' != b && 'AREA' != b) ||
                    (f && d && !(0 > d.toLowerCase().indexOf('javascript')))
                      ? f
                        ? ((e = a.replace(
                            a.replace(a.replace(a.replace('' + f, '\r', ''), '\n', ''), '\t', ''),
                            ' ',
                            ''
                          )),
                          (g = 2))
                        : 'INPUT' == b || 'SUBMIT' == b
                        ? (c.value
                            ? (e = c.value)
                            : c.innerText
                            ? (e = c.innerText)
                            : c.textContent && (e = c.textContent),
                          (g = 3))
                        : 'IMAGE' == b && c.src && (e = c.src)
                      : (e = a.La(c)),
                    e)
                    ? { id: e.substring(0, 100), type: g }
                    : 0;
                };
                a.fc = function (c) {
                  for (var b = a.B(c), d = a.L(c); c && !d && 'BODY' != b; )
                    if ((c = c.parentElement ? c.parentElement : c.parentNode))
                      (b = a.B(c)), (d = a.L(c));
                  (d && 'BODY' != b) || (c = 0);
                  c &&
                    ((b = c.onclick ? '' + c.onclick : ''),
                    0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
                    (c = 0);
                  return c;
                };
                a.Vb = function () {
                  var c,
                    b,
                    d = a.linkObject,
                    f = a.linkType,
                    e = a.linkURL,
                    g,
                    k;
                  a.la = 1;
                  d || ((a.la = 0), (d = a.clickObject));
                  if (d) {
                    c = a.B(d);
                    for (b = a.L(d); d && !b && 'BODY' != c; )
                      if ((d = d.parentElement ? d.parentElement : d.parentNode))
                        (c = a.B(d)), (b = a.L(d));
                    (b && 'BODY' != c) || (d = 0);
                    if (d && !a.linkObject) {
                      var l = d.onclick ? '' + d.onclick : '';
                      if (0 <= l.indexOf('.tl(') || 0 <= l.indexOf('.trackLink(')) d = 0;
                    }
                  } else a.la = 1;
                  !e && d && (e = a.La(d));
                  e &&
                    !a.linkLeaveQueryString &&
                    ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
                  if (!f && e) {
                    var m = 0,
                      n = 0,
                      p;
                    if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                      for (
                        l = e.toLowerCase(),
                          g = l.indexOf('?'),
                          k = l.indexOf('#'),
                          0 <= g ? 0 <= k && k < g && (g = k) : (g = k),
                          0 <= g && (l = l.substring(0, g)),
                          g = a.linkDownloadFileTypes.toLowerCase().split(','),
                          k = 0;
                        k < g.length;
                        k++
                      )
                        (p = g[k]) &&
                          l.substring(l.length - (p.length + 1)) == '.' + p &&
                          (f = 'd');
                    if (
                      a.trackExternalLinks &&
                      !f &&
                      ((l = e.toLowerCase()),
                      a.Oa(l) &&
                        (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname),
                        (g = 0),
                        a.linkExternalFilters
                          ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (m = 1))
                          : a.linkInternalFilters &&
                            (g = a.linkInternalFilters.toLowerCase().split(',')),
                        g))
                    ) {
                      for (k = 0; k < g.length; k++) (p = g[k]), 0 <= l.indexOf(p) && (n = 1);
                      n ? m && (f = 'e') : m || (f = 'e');
                    }
                  }
                  a.linkObject = d;
                  a.linkURL = e;
                  a.linkType = f;
                  if (a.trackClickMap || a.trackInlineStats)
                    (a.e = ''),
                      d &&
                        ((f = a.pageName),
                        (e = 1),
                        (d = d.sourceIndex),
                        f || ((f = a.pageURL), (e = 0)),
                        h.s_objectID && ((b.id = h.s_objectID), (d = b.type = 1)),
                        f &&
                          b &&
                          b.id &&
                          c &&
                          (a.e =
                            '&pid=' +
                            a.escape(f.substring(0, 255)) +
                            (e ? '&pidt=' + e : '') +
                            '&oid=' +
                            a.escape(b.id.substring(0, 100)) +
                            (b.type ? '&oidt=' + b.type : '') +
                            '&ot=' +
                            c +
                            (d ? '&oi=' + d : '')));
                };
                a.Ob = function () {
                  var c = a.la,
                    b = a.linkType,
                    d = a.linkURL,
                    f = a.linkName;
                  b &&
                    (d || f) &&
                    ((b = b.toLowerCase()),
                    'd' != b && 'e' != b && (b = 'o'),
                    (a.pe = 'lnk_' + b),
                    (a.pev1 = d ? a.escape(d) : ''),
                    (a.pev2 = f ? a.escape(f) : ''),
                    (c = 1));
                  a.abort && (c = 0);
                  if (a.trackClickMap || a.trackInlineStats || a.Rb()) {
                    var b = {},
                      d = 0,
                      e = a.pb(),
                      g = e ? e.split('&') : 0,
                      k,
                      l,
                      h,
                      e = 0;
                    if (g)
                      for (k = 0; k < g.length; k++)
                        (l = g[k].split('=')),
                          (f = a.unescape(l[0]).split(',')),
                          (l = a.unescape(l[1])),
                          (b[l] = f);
                    f = a.account.split(',');
                    k = {};
                    for (h in a.contextData)
                      h &&
                        !Object.prototype[h] &&
                        'a.activitymap.' == h.substring(0, 14) &&
                        ((k[h] = a.contextData[h]), (a.contextData[h] = ''));
                    a.e = a.o('c', k) + (a.e ? a.e : '');
                    if (c || a.e) {
                      c && !a.e && (e = 1);
                      for (l in b)
                        if (!Object.prototype[l])
                          for (h = 0; h < f.length; h++)
                            for (
                              e &&
                                ((g = b[l].join(',')),
                                g == a.account &&
                                  ((a.e += ('&' != l.charAt(0) ? '&' : '') + l),
                                  (b[l] = []),
                                  (d = 1))),
                                k = 0;
                              k < b[l].length;
                              k++
                            )
                              (g = b[l][k]),
                                g == f[h] &&
                                  (e &&
                                    (a.e +=
                                      '&u=' +
                                      a.escape(g) +
                                      ('&' != l.charAt(0) ? '&' : '') +
                                      l +
                                      '&u=0'),
                                  b[l].splice(k, 1),
                                  (d = 1));
                      c || (d = 1);
                      if (d) {
                        e = '';
                        k = 2;
                        !c && a.e && ((e = a.escape(f.join(',')) + '=' + a.escape(a.e)), (k = 1));
                        for (l in b)
                          !Object.prototype[l] &&
                            0 < k &&
                            0 < b[l].length &&
                            ((e += (e ? '&' : '') + a.escape(b[l].join(',')) + '=' + a.escape(l)),
                            k--);
                        a.wb(e);
                      }
                    }
                  }
                  return c;
                };
                a.pb = function () {
                  if (a.useLinkTrackSessionStorage) {
                    if (a.Ca()) return h.sessionStorage.getItem(a.P);
                  } else return a.cookieRead(a.P);
                };
                a.Ca = function () {
                  return h.sessionStorage ? !0 : !1;
                };
                a.wb = function (c) {
                  a.useLinkTrackSessionStorage
                    ? a.Ca() && h.sessionStorage.setItem(a.P, c)
                    : a.cookieWrite(a.P, c);
                };
                a.Pb = function () {
                  if (!a.Zb) {
                    var c = new Date(),
                      b = p.location,
                      d,
                      f,
                      e = (f = d = ''),
                      g = '',
                      k = '',
                      l = '1.2',
                      h = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
                      m = '',
                      q = '';
                    if (
                      c.setUTCDate &&
                      ((l = '1.3'), (0).toPrecision && ((l = '1.5'), (c = []), c.forEach))
                    ) {
                      l = '1.6';
                      f = 0;
                      d = {};
                      try {
                        (f = new Iterator(d)),
                          f.next &&
                            ((l = '1.7'),
                            c.reduce &&
                              ((l = '1.8'),
                              l.trim &&
                                ((l = '1.8.1'),
                                Date.parse && ((l = '1.8.2'), Object.create && (l = '1.8.5')))));
                      } catch (r) {}
                    }
                    d = screen.width + 'x' + screen.height;
                    e = navigator.javaEnabled() ? 'Y' : 'N';
                    f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                    g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
                    k = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
                    try {
                      a.b.addBehavior('#default#homePage'), (m = a.b.gc(b) ? 'Y' : 'N');
                    } catch (s) {}
                    try {
                      a.b.addBehavior('#default#clientCaps'), (q = a.b.connectionType);
                    } catch (t) {}
                    a.resolution = d;
                    a.colorDepth = f;
                    a.javascriptVersion = l;
                    a.javaEnabled = e;
                    a.cookiesEnabled = h;
                    a.browserWidth = g;
                    a.browserHeight = k;
                    a.connectionType = q;
                    a.homepage = m;
                    a.Zb = 1;
                  }
                };
                a.Q = {};
                a.loadModule = function (c, b) {
                  var d = a.Q[c];
                  if (!d) {
                    d = h['AppMeasurement_Module_' + c]
                      ? new h['AppMeasurement_Module_' + c](a)
                      : {};
                    a.Q[c] = a[c] = d;
                    d.ib = function () {
                      return d.sb;
                    };
                    d.xb = function (b) {
                      if ((d.sb = b))
                        (a[c + '_onLoad'] = b), a.ea(c + '_onLoad', [a, d], 1) || b(a, d);
                    };
                    try {
                      Object.defineProperty
                        ? Object.defineProperty(d, 'onLoad', { get: d.ib, set: d.xb })
                        : (d._olc = 1);
                    } catch (f) {
                      d._olc = 1;
                    }
                  }
                  b && ((a[c + '_onLoad'] = b), a.ea(c + '_onLoad', [a, d], 1) || b(a, d));
                };
                a.u = function (c) {
                  var b, d;
                  for (b in a.Q)
                    if (
                      !Object.prototype[b] &&
                      (d = a.Q[b]) &&
                      (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)), d[c] && d[c]())
                    )
                      return 1;
                  return 0;
                };
                a.Rb = function () {
                  return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
                };
                a.Sb = function () {
                  var c = Math.floor(10000000000000 * Math.random()),
                    b = a.visitorSampling,
                    d = a.visitorSamplingGroup,
                    d =
                      's_vsn_' +
                      (a.visitorNamespace ? a.visitorNamespace : a.account) +
                      (d ? '_' + d : ''),
                    f = a.cookieRead(d);
                  if (b) {
                    b *= 100;
                    f && (f = parseInt(f));
                    if (!f) {
                      if (!a.cookieWrite(d, c)) return 0;
                      f = c;
                    }
                    if (f % 10000 > b) return 0;
                  }
                  return 1;
                };
                a.S = function (c, b) {
                  var d, f, e, g, k, h, m;
                  m = {};
                  for (d = 0; 2 > d; d++)
                    for (f = 0 < d ? a.Ea : a.g, e = 0; e < f.length; e++)
                      if (((g = f[e]), (k = c[g]) || c['!' + g])) {
                        if (k && !b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                          for (h in a[g]) k[h] || (k[h] = a[g][h]);
                        a[g] || (m['!' + g] = 1);
                        m[g] = a[g];
                        a[g] = k;
                      }
                  return m;
                };
                a.cc = function (c) {
                  var b, d, f, e;
                  for (b = 0; 2 > b; b++)
                    for (d = 0 < b ? a.Ea : a.g, f = 0; f < d.length; f++)
                      (e = d[f]),
                        (c[e] = a[e]),
                        c[e] ||
                          ('prop' !== e.substring(0, 4) &&
                            'eVar' !== e.substring(0, 4) &&
                            'hier' !== e.substring(0, 4) &&
                            'list' !== e.substring(0, 4) &&
                            'channel' !== e &&
                            'events' !== e &&
                            'eventList' !== e &&
                            'products' !== e &&
                            'productList' !== e &&
                            'purchaseID' !== e &&
                            'transactionID' !== e &&
                            'state' !== e &&
                            'zip' !== e &&
                            'campaign' !== e &&
                            'events2' !== e &&
                            'latitude' !== e &&
                            'longitude' !== e &&
                            'ms_a' !== e &&
                            'contextData' !== e &&
                            'supplementalDataID' !== e &&
                            'tnt' !== e &&
                            'timestamp' !== e &&
                            'abort' !== e &&
                            'useBeacon' !== e &&
                            'linkObject' !== e &&
                            'clickObject' !== e &&
                            'linkType' !== e &&
                            'linkName' !== e &&
                            'linkURL' !== e &&
                            'bodyClickTarget' !== e &&
                            'bodyClickFunction' !== e) ||
                          (c['!' + e] = 1);
                };
                a.Jb = function (a) {
                  var b,
                    d,
                    f,
                    e,
                    g,
                    k = 0,
                    h,
                    m = '',
                    n = '';
                  if (
                    a &&
                    255 < a.length &&
                    ((b = '' + a),
                    (d = b.indexOf('?')),
                    0 < d &&
                      ((h = b.substring(d + 1)),
                      (b = b.substring(0, d)),
                      (e = b.toLowerCase()),
                      (f = 0),
                      'http://' == e.substring(0, 7)
                        ? (f += 7)
                        : 'https://' == e.substring(0, 8) && (f += 8),
                      (d = e.indexOf('/', f)),
                      0 < d &&
                        ((e = e.substring(f, d)),
                        (g = b.substring(d)),
                        (b = b.substring(0, d)),
                        0 <= e.indexOf('google')
                          ? (k = ',q,ie,start,search_key,word,kw,cd,')
                          : 0 <= e.indexOf('yahoo.co')
                          ? (k = ',p,ei,')
                          : 0 <= e.indexOf('baidu.') && (k = ',wd,word,'),
                        k && h)))
                  ) {
                    if ((a = h.split('&')) && 1 < a.length) {
                      for (f = 0; f < a.length; f++)
                        (e = a[f]),
                          (d = e.indexOf('=')),
                          0 < d && 0 <= k.indexOf(',' + e.substring(0, d) + ',')
                            ? (m += (m ? '&' : '') + e)
                            : (n += (n ? '&' : '') + e);
                      m && n ? (h = m + '&' + n) : (n = '');
                    }
                    d = 253 - (h.length - n.length) - b.length;
                    a = b + (0 < d ? g.substring(0, d) : '') + '?' + h;
                  }
                  return a;
                };
                a.bb = function (c) {
                  var b = a.d.visibilityState,
                    d = ['webkitvisibilitychange', 'visibilitychange'];
                  b || (b = a.d.webkitVisibilityState);
                  if (b && 'prerender' == b) {
                    if (c)
                      for (b = 0; b < d.length; b++)
                        a.d.addEventListener(d[b], function () {
                          var b = a.d.visibilityState;
                          b || (b = a.d.webkitVisibilityState);
                          'visible' == b && c();
                        });
                    return !1;
                  }
                  return !0;
                };
                a.ba = !1;
                a.H = !1;
                a.zb = function () {
                  a.H = !0;
                  a.p();
                };
                a.I = !1;
                a.Ab = function (c) {
                  a.marketingCloudVisitorID = c.MCMID;
                  a.visitorOptedOut = c.MCOPTOUT;
                  a.analyticsVisitorID = c.MCAID;
                  a.audienceManagerLocationHint = c.MCAAMLH;
                  a.audienceManagerBlob = c.MCAAMB;
                  a.I = !1;
                  a.p();
                };
                a.ab = function (c) {
                  a.maxDelay || (a.maxDelay = 250);
                  return a.u('_d')
                    ? (c &&
                        setTimeout(function () {
                          c();
                        }, a.maxDelay),
                      !1)
                    : !0;
                };
                a.Z = !1;
                a.G = !1;
                a.ya = function () {
                  a.G = !0;
                  a.p();
                };
                a.isReadyToTrack = function () {
                  var c = !0;
                  if (!a.mb() || !a.kb()) return !1;
                  a.ob() || (c = !1);
                  a.rb() || (c = !1);
                  return c;
                };
                a.mb = function () {
                  a.ba || a.H || (a.bb(a.zb) ? (a.H = !0) : (a.ba = !0));
                  return a.ba && !a.H ? !1 : !0;
                };
                a.kb = function () {
                  var c = a.va();
                  if (c)
                    if (a.ra || a.aa)
                      if (a.ra) {
                        if (!c.isApproved(c.Categories.ANALYTICS)) return !1;
                      } else return !1;
                    else return c.fetchPermissions(a.tb, !0), (a.aa = !0), !1;
                  return !0;
                };
                a.V = function (c) {
                  var b = a.va();
                  return b && !b.isApproved(b.Categories[c]) ? !1 : !0;
                };
                a.va = function () {
                  return h.adobe && h.adobe.optIn ? h.adobe.optIn : null;
                };
                a.Y = !0;
                a.ob = function () {
                  var c = a.T();
                  if (!c || !c.getVisitorValues) return !0;
                  a.Y && ((a.Y = !1), a.I || ((a.I = !0), c.getVisitorValues(a.Ab)));
                  return !a.I;
                };
                a.T = function () {
                  var c = a.visitor;
                  c && !c.isAllowed() && (c = null);
                  return c;
                };
                a.rb = function () {
                  a.Z || a.G || (a.ab(a.ya) ? (a.G = !0) : (a.Z = !0));
                  return a.Z && !a.G ? !1 : !0;
                };
                a.aa = !1;
                a.tb = function () {
                  a.aa = !1;
                  a.ra = !0;
                };
                a.j = q;
                a.q = 0;
                a.callbackWhenReadyToTrack = function (c, b, d) {
                  var f;
                  f = {};
                  f.Eb = c;
                  f.Db = b;
                  f.Bb = d;
                  a.j == q && (a.j = []);
                  a.j.push(f);
                  0 == a.q && (a.q = setInterval(a.p, 100));
                };
                a.p = function () {
                  var c;
                  if (a.isReadyToTrack() && (a.yb(), a.j != q))
                    for (; 0 < a.j.length; ) (c = a.j.shift()), c.Db.apply(c.Eb, c.Bb);
                };
                a.yb = function () {
                  a.q && (clearInterval(a.q), (a.q = 0));
                };
                a.ta = function (c) {
                  var b,
                    d = {};
                  a.cc(d);
                  if (c != q) for (b in c) d[b] = c[b];
                  a.callbackWhenReadyToTrack(a, a.Da, [d]);
                  a.Ba();
                };
                a.Lb = function () {
                  var c = a.cookieRead('s_fid'),
                    b = '',
                    d = '',
                    f;
                  f = 8;
                  var e = 4;
                  if (!c || 0 > c.indexOf('-')) {
                    for (c = 0; 16 > c; c++)
                      (f = Math.floor(Math.random() * f)),
                        (b += '0123456789ABCDEF'.substring(f, f + 1)),
                        (f = Math.floor(Math.random() * e)),
                        (d += '0123456789ABCDEF'.substring(f, f + 1)),
                        (f = e = 16);
                    c = b + '-' + d;
                  }
                  a.cookieWrite('s_fid', c, 1) || (c = 0);
                  return c;
                };
                a.Da = function (c) {
                  var b = new Date(),
                    d =
                      's' +
                      (Math.floor(b.getTime() / 10800000) % 10) +
                      Math.floor(10000000000000 * Math.random()),
                    f = b.getYear(),
                    f =
                      't=' +
                      a.escape(
                        b.getDate() +
                          '/' +
                          b.getMonth() +
                          '/' +
                          (1900 > f ? f + 1900 : f) +
                          ' ' +
                          b.getHours() +
                          ':' +
                          b.getMinutes() +
                          ':' +
                          b.getSeconds() +
                          ' ' +
                          b.getDay() +
                          ' ' +
                          b.getTimezoneOffset()
                      ),
                    e = a.T(),
                    g;
                  c && (g = a.S(c, 1));
                  a.Sb() &&
                    !a.visitorOptedOut &&
                    (a.wa() || (a.fid = a.Lb()),
                    a.Vb(),
                    a.usePlugins && a.doPlugins && a.doPlugins(a),
                    a.account &&
                      (a.abort ||
                        (a.trackOffline &&
                          !a.timestamp &&
                          (a.timestamp = Math.floor(b.getTime() / 1000)),
                        (c = h.location),
                        a.pageURL || (a.pageURL = c.href ? c.href : c),
                        a.referrer ||
                          a.Za ||
                          ((c = a.Util.getQueryParam('adobe_mc_ref', null, null, !0)),
                          (a.referrer =
                            c || void 0 === c ? (void 0 === c ? '' : c) : p.document.referrer)),
                        (a.Za = 1),
                        (a.referrer = a.Jb(a.referrer)),
                        a.u('_g')),
                      a.Ob() &&
                        !a.abort &&
                        (e &&
                          a.V('TARGET') &&
                          !a.supplementalDataID &&
                          e.getSupplementalDataID &&
                          (a.supplementalDataID = e.getSupplementalDataID(
                            'AppMeasurement:' + a._in,
                            a.expectSupplementalData ? !1 : !0
                          )),
                        a.V('AAM') || (a.contextData['cm.ssf'] = 1),
                        a.Pb(),
                        (f += a.Nb()),
                        a.qb(d, f),
                        a.u('_t'),
                        (a.referrer = ''))));
                  a.Ba();
                  g && a.S(g, 1);
                };
                a.t = a.track = function (c, b) {
                  b && a.S(b);
                  a.Y = !0;
                  a.isReadyToTrack()
                    ? null != a.j && 0 < a.j.length
                      ? (a.ta(c), a.p())
                      : a.Da(c)
                    : a.ta(c);
                };
                a.Ba = function () {
                  a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = a.useBeacon = a.referrer = 0;
                };
                a.Aa = [];
                a.registerPreTrackCallback = function (c) {
                  for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                  'function' == typeof c
                    ? a.Aa.push([c, b])
                    : a.debugTracking &&
                      a.C('DEBUG: Non function type passed to registerPreTrackCallback');
                };
                a.fb = function (c) {
                  a.ua(a.Aa, c);
                };
                a.za = [];
                a.registerPostTrackCallback = function (c) {
                  for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
                  'function' == typeof c
                    ? a.za.push([c, b])
                    : a.debugTracking &&
                      a.C('DEBUG: Non function type passed to registerPostTrackCallback');
                };
                a.eb = function (c) {
                  a.ua(a.za, c);
                };
                a.ua = function (c, b) {
                  if ('object' == typeof c)
                    for (var d = 0; d < c.length; d++) {
                      var f = c[d][0],
                        e = c[d][1].slice();
                      e.unshift(b);
                      if ('function' == typeof f)
                        try {
                          f.apply(null, e);
                        } catch (g) {
                          a.debugTracking && a.C(g.message);
                        }
                    }
                };
                a.tl = a.trackLink = function (c, b, d, f, e) {
                  a.linkObject = c;
                  a.linkType = b;
                  a.linkName = d;
                  e && ((a.bodyClickTarget = c), (a.bodyClickFunction = e));
                  return a.track(f);
                };
                a.trackLight = function (c, b, d, f) {
                  a.lightProfileID = c;
                  a.lightStoreForSeconds = b;
                  a.lightIncrementBy = d;
                  return a.track(f);
                };
                a.clearVars = function () {
                  var c, b;
                  for (c = 0; c < a.g.length; c++)
                    if (
                      ((b = a.g[c]),
                      'prop' == b.substring(0, 4) ||
                        'eVar' == b.substring(0, 4) ||
                        'hier' == b.substring(0, 4) ||
                        'list' == b.substring(0, 4) ||
                        'channel' == b ||
                        'events' == b ||
                        'eventList' == b ||
                        'products' == b ||
                        'productList' == b ||
                        'purchaseID' == b ||
                        'transactionID' == b ||
                        'state' == b ||
                        'zip' == b ||
                        'campaign' == b)
                    )
                      a[b] = void 0;
                };
                a.tagContainerMarker = '';
                a.qb = function (c, b) {
                  var d =
                    a.gb() +
                    '/' +
                    c +
                    '?AQB=1&ndh=1&pf=1&' +
                    (a.xa() ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') +
                    b +
                    '&AQE=1';
                  a.fb(d);
                  a.cb(d);
                  a.U();
                };
                a.gb = function () {
                  var c = a.hb();
                  return (
                    'http' +
                    (a.ssl ? 's' : '') +
                    '://' +
                    c +
                    '/b/ss/' +
                    a.account +
                    '/' +
                    (a.mobile ? '5.' : '') +
                    (a.xa() ? '10' : '1') +
                    '/JS-' +
                    a.version +
                    (a.Yb ? 'T' : '') +
                    (a.tagContainerMarker ? '-' + a.tagContainerMarker : '')
                  );
                };
                a.xa = function () {
                  return (
                    (a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks
                  );
                };
                a.hb = function () {
                  var c = a.dc,
                    b = a.trackingServer;
                  b
                    ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure)
                    : ((c = c ? ('' + c).toLowerCase() : 'd1'),
                      'd1' == c ? (c = '112') : 'd2' == c && (c = '122'),
                      (b = a.jb() + '.' + c + '.2o7.net'));
                  return b;
                };
                a.jb = function () {
                  var c = a.visitorNamespace;
                  c || ((c = a.account.split(',')[0]), (c = c.replace(/[^0-9a-z]/gi, '')));
                  return c;
                };
                a.Ya = /{(%?)(.*?)(%?)}/;
                a.bc = RegExp(a.Ya.source, 'g');
                a.Ib = function (c) {
                  if ('object' == typeof c.dests)
                    for (var b = 0; b < c.dests.length; ++b) {
                      var d = c.dests[b];
                      if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                        for (var f = d.c.match(a.bc), e = 0; e < f.length; ++e) {
                          var g = f[e],
                            k = g.match(a.Ya),
                            h = '';
                          '%' == k[1] && 'timezone_offset' == k[2]
                            ? (h = new Date().getTimezoneOffset())
                            : '%' == k[1] && 'timestampz' == k[2] && (h = a.Mb());
                          d.c = d.c.replace(g, a.escape(h));
                        }
                    }
                };
                a.Mb = function () {
                  var c = new Date(),
                    b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
                  return (
                    a.k(4, c.getFullYear()) +
                    '-' +
                    a.k(2, c.getMonth() + 1) +
                    '-' +
                    a.k(2, c.getDate()) +
                    'T' +
                    a.k(2, c.getHours()) +
                    ':' +
                    a.k(2, c.getMinutes()) +
                    ':' +
                    a.k(2, c.getSeconds()) +
                    (0 < c.getTimezoneOffset() ? '-' : '+') +
                    a.k(2, b.getUTCHours()) +
                    ':' +
                    a.k(2, b.getUTCMinutes())
                  );
                };
                a.k = function (a, b) {
                  return (Array(a + 1).join(0) + b).slice(-a);
                };
                a.pa = {};
                a.doPostbacks = function (c) {
                  if ('object' == typeof c)
                    if (
                      (a.Ib(c),
                      'object' == typeof a.AudienceManagement &&
                        'function' == typeof a.AudienceManagement.isReady &&
                        a.AudienceManagement.isReady() &&
                        'function' == typeof a.AudienceManagement.passData)
                    )
                      a.AudienceManagement.passData(c);
                    else if ('object' == typeof c && 'object' == typeof c.dests)
                      for (var b = 0; b < c.dests.length; ++b) {
                        var d = c.dests[b];
                        'object' == typeof d &&
                          'string' == typeof d.c &&
                          'string' == typeof d.id &&
                          'aa.' == d.id.substr(0, 3) &&
                          ((a.pa[d.id] = new Image()),
                          (a.pa[d.id].alt = ''),
                          (a.pa[d.id].src = d.c));
                      }
                };
                a.cb = function (c) {
                  a.i || a.Qb();
                  a.i.push(c);
                  a.ia = a.A();
                  a.Wa();
                };
                a.Qb = function () {
                  a.i = a.Tb();
                  a.i || (a.i = []);
                };
                a.Tb = function () {
                  var c, b;
                  if (a.oa()) {
                    try {
                      (b = h.localStorage.getItem(a.ma())) && (c = h.JSON.parse(b));
                    } catch (d) {}
                    return c;
                  }
                };
                a.oa = function () {
                  var c = !0;
                  (a.trackOffline && a.offlineFilename && h.localStorage && h.JSON) || (c = !1);
                  return c;
                };
                a.Ma = function () {
                  var c = 0;
                  a.i && (c = a.i.length);
                  a.l && c++;
                  return c;
                };
                a.U = function () {
                  if (a.l && (a.v && a.v.complete && a.v.D && a.v.R(), a.l)) return;
                  a.Na = q;
                  if (a.na) a.ia > a.N && a.Ua(a.i), a.qa(500);
                  else {
                    var c = a.Cb();
                    if (0 < c) a.qa(c);
                    else if ((c = a.Ka())) (a.l = 1), a.Ub(c), a.Xb(c);
                  }
                };
                a.qa = function (c) {
                  a.Na || (c || (c = 0), (a.Na = setTimeout(a.U, c)));
                };
                a.Cb = function () {
                  var c;
                  if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
                  c = a.A() - a.Sa;
                  return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
                };
                a.Ka = function () {
                  if (0 < a.i.length) return a.i.shift();
                };
                a.Ub = function (c) {
                  if (a.debugTracking) {
                    var b = 'AppMeasurement Debug: ' + c;
                    c = c.split('&');
                    var d;
                    for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
                    a.C(b);
                  }
                };
                a.wa = function () {
                  return a.marketingCloudVisitorID || a.analyticsVisitorID;
                };
                a.X = !1;
                var t;
                try {
                  t = JSON.parse('{"x":"y"}');
                } catch (w) {
                  t = null;
                }
                t && 'y' == t.x
                  ? ((a.X = !0),
                    (a.W = function (a) {
                      return JSON.parse(a);
                    }))
                  : h.$ && h.$.parseJSON
                  ? ((a.W = function (a) {
                      return h.$.parseJSON(a);
                    }),
                    (a.X = !0))
                  : (a.W = function () {
                      return null;
                    });
                a.Xb = function (c) {
                  var b, d, f;
                  a.lb(c) &&
                    ((d = 1),
                    (b = {
                      send: function (c) {
                        a.useBeacon = !1;
                        navigator.sendBeacon(c) ? b.R() : b.ga();
                      },
                    }));
                  !b &&
                    a.wa() &&
                    2047 < c.length &&
                    (a.$a() && ((d = 2), (b = new XMLHttpRequest())),
                    b &&
                      ((a.AudienceManagement && a.AudienceManagement.isReady()) ||
                        0 != a.usePostbacks) &&
                      (a.X ? (b.Fa = !0) : (b = 0)));
                  !b && a.Xa && (c = c.substring(0, 2047));
                  !b &&
                    a.d.createElement &&
                    (0 != a.usePostbacks ||
                      (a.AudienceManagement && a.AudienceManagement.isReady())) &&
                    (b = a.d.createElement('SCRIPT')) &&
                    'async' in b &&
                    ((f = (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body)
                      ? ((b.type = 'text/javascript'), b.setAttribute('async', 'async'), (d = 3))
                      : (b = 0));
                  b ||
                    ((b = new Image()),
                    (b.alt = ''),
                    b.abort ||
                      'undefined' === typeof h.InstallTrigger ||
                      (b.abort = function () {
                        b.src = q;
                      }));
                  b.Ta = Date.now();
                  b.Ha = function () {
                    try {
                      b.D && (clearTimeout(b.D), (b.D = 0));
                    } catch (a) {}
                  };
                  b.onload = b.R = function () {
                    b.Ta && (a.ja = Date.now() - b.Ta);
                    a.eb(c);
                    b.Ha();
                    a.Gb();
                    a.ca();
                    a.l = 0;
                    a.U();
                    if (b.Fa) {
                      b.Fa = !1;
                      try {
                        a.doPostbacks(a.W(b.responseText));
                      } catch (d) {}
                    }
                  };
                  b.onabort = b.onerror = b.ga = function () {
                    b.Ha();
                    (a.trackOffline || a.na) && a.l && a.i.unshift(a.Fb);
                    a.l = 0;
                    a.ia > a.N && a.Ua(a.i);
                    a.ca();
                    a.qa(500);
                  };
                  b.onreadystatechange = function () {
                    4 == b.readyState && (200 == b.status ? b.R() : b.ga());
                  };
                  a.Sa = a.A();
                  if (1 === d) b.send(c);
                  else if (2 === d)
                    (f = c.indexOf('?')),
                      (d = c.substring(0, f)),
                      (f = c.substring(f + 1)),
                      (f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '')),
                      b.open('POST', d, !0),
                      (b.withCredentials = !0),
                      b.send(f);
                  else if (((b.src = c), 3 === d)) {
                    if (a.Qa)
                      try {
                        f.removeChild(a.Qa);
                      } catch (e) {}
                    f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                    a.Qa = a.v;
                  }
                  b.D = setTimeout(function () {
                    b.D && (b.complete ? b.R() : (a.trackOffline && b.abort && b.abort(), b.ga()));
                  }, 5000);
                  a.Fb = c;
                  a.v = h['s_i_' + a.replace(a.account, ',', '_')] = b;
                  if ((a.useForcedLinkTracking && a.J) || a.bodyClickFunction)
                    a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                      (a.da = setTimeout(a.ca, a.forcedLinkTrackingTimeout));
                };
                a.lb = function (c) {
                  var b = !1;
                  navigator.sendBeacon && (a.nb(c) ? (b = !0) : a.useBeacon && (b = !0));
                  a.vb(c) && (b = !1);
                  return b;
                };
                a.nb = function (a) {
                  return a && 0 < a.indexOf('pe=lnk_e') ? !0 : !1;
                };
                a.vb = function (a) {
                  return 64000 <= a.length;
                };
                a.$a = function () {
                  return 'undefined' !== typeof XMLHttpRequest &&
                    'withCredentials' in new XMLHttpRequest()
                    ? !0
                    : !1;
                };
                a.Gb = function () {
                  if (a.oa() && !(a.Ra > a.N))
                    try {
                      h.localStorage.removeItem(a.ma()), (a.Ra = a.A());
                    } catch (c) {}
                };
                a.Ua = function (c) {
                  if (a.oa()) {
                    a.Wa();
                    try {
                      h.localStorage.setItem(a.ma(), h.JSON.stringify(c)), (a.N = a.A());
                    } catch (b) {}
                  }
                };
                a.Wa = function () {
                  if (a.trackOffline) {
                    if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                    for (; a.i.length > a.offlineLimit; ) a.Ka();
                  }
                };
                a.forceOffline = function () {
                  a.na = !0;
                };
                a.forceOnline = function () {
                  a.na = !1;
                };
                a.ma = function () {
                  return a.offlineFilename + '-' + a.visitorNamespace + a.account;
                };
                a.A = function () {
                  return new Date().getTime();
                };
                a.Oa = function (a) {
                  a = a.toLowerCase();
                  return 0 != a.indexOf('#') &&
                    0 != a.indexOf('about:') &&
                    0 != a.indexOf('opera:') &&
                    0 != a.indexOf('javascript:')
                    ? !0
                    : !1;
                };
                a.setTagContainer = function (c) {
                  var b, d, f;
                  a.Yb = c;
                  for (b = 0; b < a._il.length; b++)
                    if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                      a.S(d);
                      if (d.lmq)
                        for (b = 0; b < d.lmq.length; b++) (f = d.lmq[b]), a.loadModule(f.n);
                      if (d.ml)
                        for (f in d.ml)
                          if (a[f])
                            for (b in ((c = a[f]), (f = d.ml[f]), f))
                              !Object.prototype[b] &&
                                ('function' != typeof f[b] || 0 > ('' + f[b]).indexOf('s_c_il')) &&
                                (c[b] = f[b]);
                      if (d.mmq)
                        for (b = 0; b < d.mmq.length; b++)
                          (f = d.mmq[b]),
                            a[f.m] &&
                              ((c = a[f.m]),
                              c[f.f] &&
                                'function' == typeof c[f.f] &&
                                (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                      if (d.tq) for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                      d.s = a;
                      break;
                    }
                };
                a.Util = {
                  urlEncode: a.escape,
                  urlDecode: a.unescape,
                  cookieRead: a.cookieRead,
                  cookieWrite: a.cookieWrite,
                  getQueryParam: function (c, b, d, f) {
                    var e,
                      g = '';
                    b || (b = a.pageURL ? a.pageURL : h.location);
                    d = d ? d : '&';
                    if (!c || !b) return g;
                    b = '' + b;
                    e = b.indexOf('?');
                    if (0 > e) return g;
                    b = d + b.substring(e + 1) + d;
                    if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + '=' + d))) {
                      e = b.indexOf('#');
                      0 <= e && (b = b.substr(0, e) + d);
                      e = b.indexOf(d + c + '=');
                      if (0 > e) return g;
                      b = b.substring(e + d.length + c.length + 1);
                      e = b.indexOf(d);
                      0 <= e && (b = b.substring(0, e));
                      0 < b.length && (g = a.unescape(b));
                      return g;
                    }
                  },
                  getIeVersion: function () {
                    if (document.documentMode) return document.documentMode;
                    for (var a = 7; 4 < a; a--) {
                      var b = document.createElement('div');
                      b.innerHTML = '<!--[if IE ' + a + ']><span></span><![endif]-->';
                      if (b.getElementsByTagName('span').length) return a;
                    }
                    return null;
                  },
                };
                a.F = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
                  ' '
                );
                a.g = a.F.concat(
                  'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
                    ' '
                  )
                );
                a.ka = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
                  ' '
                );
                a.O = a.ka.slice(0);
                a.Ea = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement'.split(
                  ' '
                );
                for (m = 0; 250 >= m; m++)
                  76 > m && (a.g.push('prop' + m), a.O.push('prop' + m)),
                    a.g.push('eVar' + m),
                    a.O.push('eVar' + m),
                    6 > m && a.g.push('hier' + m),
                    4 > m && a.g.push('list' + m);
                m = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a'.split(
                  ' '
                );
                a.g = a.g.concat(m);
                a.F = a.F.concat(m);
                a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf('https');
                a.charSet = 'UTF-8';
                a.contextData = {};
                a.offlineThrottleDelay = 0;
                a.offlineFilename = 'AppMeasurement.offline';
                a.P = 's_sq';
                a.Sa = 0;
                a.ia = 0;
                a.N = 0;
                a.Ra = 0;
                a.linkDownloadFileTypes =
                  'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
                a.w = h;
                a.d = h.document;
                try {
                  if (((a.Xa = !1), navigator)) {
                    var v = navigator.userAgent;
                    if (
                      'Microsoft Internet Explorer' == navigator.appName ||
                      0 <= v.indexOf('MSIE ') ||
                      (0 <= v.indexOf('Trident/') && 0 <= v.indexOf('Windows NT 6'))
                    )
                      a.Xa = !0;
                  }
                } catch (x) {}
                a.ca = function () {
                  a.da && (h.clearTimeout(a.da), (a.da = q));
                  a.bodyClickTarget && a.J && a.bodyClickTarget.dispatchEvent(a.J);
                  a.bodyClickFunction &&
                    ('function' == typeof a.bodyClickFunction
                      ? a.bodyClickFunction()
                      : a.bodyClickTarget &&
                        a.bodyClickTarget.href &&
                        (a.d.location = a.bodyClickTarget.href));
                  a.bodyClickTarget = a.J = a.bodyClickFunction = 0;
                };
                a.Va = function () {
                  const $___old_560c72d60cb308d2 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_560c72d60cb308d2)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_2c19f7f1b6f683c6.userAgent
                      ));
                    return function () {
                      a.b = a.d.body;
                      a.b
                        ? ((a.r = function (c) {
                            var b, d, f, e, g;
                            if (
                              !(
                                (a.d && a.d.getElementById('cppXYctnr')) ||
                                (c && c['s_fe_' + a._in])
                              )
                            ) {
                              if (a.Ga)
                                if (a.useForcedLinkTracking)
                                  a.b.removeEventListener('click', a.r, !1);
                                else {
                                  a.b.removeEventListener('click', a.r, !0);
                                  a.Ga = a.useForcedLinkTracking = 0;
                                  return;
                                }
                              else a.useForcedLinkTracking = 0;
                              a.clickObject = c.srcElement ? c.srcElement : c.target;
                              try {
                                if (
                                  !a.clickObject ||
                                  (a.M && a.M == a.clickObject) ||
                                  !(
                                    a.clickObject.tagName ||
                                    a.clickObject.parentElement ||
                                    a.clickObject.parentNode
                                  )
                                )
                                  a.clickObject = 0;
                                else {
                                  var k = (a.M = a.clickObject);
                                  a.ha && (clearTimeout(a.ha), (a.ha = 0));
                                  a.ha = setTimeout(function () {
                                    a.M == k && (a.M = 0);
                                  }, 10000);
                                  f = a.Ma();
                                  a.track();
                                  if (f < a.Ma() && a.useForcedLinkTracking && c.target) {
                                    for (
                                      e = c.target;
                                      e &&
                                      e != a.b &&
                                      'A' != e.tagName.toUpperCase() &&
                                      'AREA' != e.tagName.toUpperCase();

                                    )
                                      e = e.parentNode;
                                    if (
                                      e &&
                                      ((g = e.href),
                                      a.Oa(g) || (g = 0),
                                      (d = e.target),
                                      c.target.dispatchEvent &&
                                        g &&
                                        (!d ||
                                          '_self' == d ||
                                          '_top' == d ||
                                          '_parent' == d ||
                                          (h.name && d == h.name)))
                                    ) {
                                      try {
                                        b = a.d.createEvent('MouseEvents');
                                      } catch (l) {
                                        b = new h.MouseEvent();
                                      }
                                      if (b) {
                                        try {
                                          b.initMouseEvent(
                                            'click',
                                            c.bubbles,
                                            c.cancelable,
                                            c.view,
                                            c.detail,
                                            c.screenX,
                                            c.screenY,
                                            c.clientX,
                                            c.clientY,
                                            c.ctrlKey,
                                            c.altKey,
                                            c.shiftKey,
                                            c.metaKey,
                                            c.button,
                                            c.relatedTarget
                                          );
                                        } catch (m) {
                                          b = 0;
                                        }
                                        b &&
                                          ((b['s_fe_' + a._in] = b.s_fe = 1),
                                          c.stopPropagation(),
                                          c.stopImmediatePropagation &&
                                            c.stopImmediatePropagation(),
                                          c.preventDefault(),
                                          (a.bodyClickTarget = c.target),
                                          (a.J = b));
                                      }
                                    }
                                  }
                                }
                              } catch (n) {
                                a.clickObject = 0;
                              }
                            }
                          }),
                          a.b && a.b.attachEvent
                            ? a.b.attachEvent('onclick', a.r)
                            : a.b &&
                              a.b.addEventListener &&
                              (navigator &&
                                ((0 <= navigator.userAgent.indexOf('WebKit') && a.d.createEvent) ||
                                  (0 <= navigator.userAgent.indexOf('Firefox/2') &&
                                    h.MouseEvent)) &&
                                ((a.Ga = 1),
                                (a.useForcedLinkTracking = 1),
                                a.b.addEventListener('click', a.r, !0)),
                              a.b.addEventListener('click', a.r, !1)))
                        : setTimeout(a.Va, 30);
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_560c72d60cb308d2)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_560c72d60cb308d2
                      ));
                  }
                };
                a.Hb();
                a.ic ||
                  (r
                    ? a.setAccount(r)
                    : a.C('Error, missing Report Suite ID in AppMeasurement initialization'),
                  a.Va(),
                  a.loadModule('ActivityMap'));
              }.apply(this, arguments);
            } finally {
              if ($___old_2495e95d7adaac79)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_2495e95d7adaac79
                ));
            }
          }
          function s_gi (r) {
            var a,
              h = window.s_c_il,
              q,
              p,
              m = r.split(','),
              s,
              u,
              t = 0;
            if (h)
              for (q = 0; !t && q < h.length; ) {
                a = h[q];
                if ('s_c' == a._c && (a.account || a.oun))
                  if (a.account && a.account == r) t = 1;
                  else
                    for (
                      p = a.account ? a.account : a.oun,
                        p = a.allAccounts ? a.allAccounts : p.split(','),
                        s = 0;
                      s < m.length;
                      s++
                    )
                      for (u = 0; u < p.length; u++) m[s] == p[u] && (t = 1);
                q++;
              }
            t ? a.setAccount && a.setAccount(r) : (a = new AppMeasurement(r));
            return a;
          }
          AppMeasurement.getInstance = s_gi;
          window.s_objectID || (window.s_objectID = 0);
          function s_pgicq () {
            var r = window,
              a = r.s_giq,
              h,
              q,
              p;
            if (a)
              for (h = 0; h < a.length; h++)
                (q = a[h]),
                  (p = s_gi(q.oun)),
                  p.setAccount(q.un),
                  p.setTagContainer(q.tagContainerName);
            r.s_giq = 0;
          }
          s_pgicq();
          var wa = window.wa || {};
          wa.utils = (function (window, document) {
            var exports = {};
            var toString = Object.prototype.toString;
            var keys = Object.keys;
            var types = [
              'Array',
              'Boolean',
              'Function',
              'Null',
              'Number',
              'Object',
              'RegExp',
              'String',
              'Undefined',
            ];
            var typeCheck = {};
            function _merge (obj, into) {
              for (var key in obj) into[key] = obj[key];
            }
            function type (item) {
              return toString.call(item);
            }
            for (var i = 0; i < types.length; i++)
              typeCheck['is' + types[i]] = (function (t) {
                return function (item) {
                  return type(item) === '[object ' + t + ']';
                };
              })(types[i]);
            _merge(typeCheck, exports);
            function isEmpty (arg) {
              if (typeCheck.isObject(arg)) return keys(arg).length === 0;
              if (typeCheck.isString(arg) || typeCheck.isArray(arg)) return arg.length === 0;
              return false;
            }
            exports.type = type;
            exports.isEmpty = isEmpty;
            return exports;
          })(window, document);
          wa.initialize = function (conf) {
            if (!conf) conf = {};
            conf.hostname = conf.hostname ? conf.hostname : window.location.hostname;
            if (conf.reportSuiteOverride)
              conf.reportSuiteQA = conf.reportSuiteProd = conf.reportSuiteOverride;
            else {
              conf.reportSuiteQA = 'intuitptgglobalqa';
              conf.reportSuiteProd = 'intuitptgglobal';
            }
            conf.internalHostArray = [
              'intuit.com',
              'itu-taxprocenter.stage.mcmillandigital.com',
              '.intuit.ca',
            ];
            conf.socialNetworkArray = [
              '12seconds.tv',
              'backtype.com',
              'bebo.com',
              'blogspot.com',
              'brightkite.com',
              'cafemom.com',
              'ceounplugged.homestead.com',
              'classmates.com',
              'community.freshbooks.com',
              'dailymotion.com',
              'delicious.com',
              'digg.com',
              'diigo.com',
              'disqus.com',
              'en.wikipedia.org',
              'facebook.com',
              'financialsoft.about.com',
              'flickr.com',
              'flixster.com',
              'fotolog.com',
              'friendfeed.com',
              'friendster.com',
              'hi5.com',
              'identi.ca',
              'imeem.com',
              'intensedebate.com',
              'jaiku.com',
              'linkedin.com',
              'livejournal.com',
              'macworld.com',
              'mister-wong.com',
              'mixx.com',
              'mylife.com',
              'myspace.com',
              'myyearbook.com',
              'netvibes.com',
              'ning.com',
              'orkut.com',
              'photobucket.com',
              'pinterest.com',
              'plurk.com',
              'plus.google.com',
              'readwriteweb.com',
              'reddit.com',
              'slideshare.net',
              'smallbiztrends.com',
              'smallbusinesscomputing.com',
              'smugmug.com',
              'stumbleupon.com',
              't.co',
              'tagged.com',
              'theappleblog.com',
              'tumblr.com',
              'twine.com',
              'twitter.com',
              'vimeo.com',
              'wordpress.com',
              'xanga.com',
              'yelp.com',
              'youtube.com',
              'yuku.com',
              'zooomr.com',
            ];
            conf.isHostProd = conf.hostname.search(
              /(^((blog|taxprocenter|refer)\.)?(accountants|proconnect|myproconnect|taxpro|ito|link|accountants-community|profile-en.community|profile-fr.community)\.intuit\.(com|ca))|^expresslandingpages\.com/
            );
            conf.isHostProd = (function () {
              if (document.location.pathname.indexOf('showroom_cms') > -1) return false;
              return !conf.hostname.search(
                /(^((blog|taxprocenter|refer)\.)?(accountants|proconnect|myproconnect|taxpro|ito|link|accountants-community|profile-en.community|profile-fr.community)\.intuit\.(com|ca))|^expresslandingpages\.com/
              );
            })();
            s_account = conf.isHostProd ? conf.reportSuiteProd : conf.reportSuiteQA;
            sj = s_gi(s_account);
            sj.Util.cookieWrite = function (pv_cookieName, newCookieArray, pv_cookieExpire) {
              try {
                var theDate = new Date();
                theDate.setDate(theDate.getDate() + pv_cookieExpire);
                var sameSite = 'None';
                var isSecure = 'Secure';
                var h = window.location.hostname;
                h = h.split('.');
                h = h.splice(h.length - 2, 2);
                h = h.join('.');
                document.cookie =
                  pv_cookieName +
                  '=' +
                  escape(newCookieArray) +
                  (pv_cookieExpire == null ? ';path=/' : ';path=/;expires=' + theDate) +
                  ';domain=' +
                  h +
                  ';SameSite=' +
                  sameSite +
                  '; ' +
                  isSecure;
              } catch (err) {}
            };
            sj.forcedLinkTrackingTimeout = 1000;
            sj.charSet = 'UTF-8';
            sj.currencyCode = 'USD';
            sj.trackDownloadLinks = false;
            sj.trackExternalLinks = true;
            sj.trackInlineStats = true;
            sj.linkInternalFilters = 'javascript:,' + conf.internalHostArray.join(',');
            sj.linkLeaveQueryString = false;
            sj.linkTrackVars = 'None';
            sj.linkTrackEvents = 'None';
            sj.server = conf.hostname;
            sj.pte =
              'event125,event126,event127,event128,event129,event130,event131,event132,event133,event134';
            sj.ptc = false;
            sj.trackingServer = 'ci.intuit.com';
            sj.trackingServerSecure = 'sci.intuit.com';
            sj.visitorNamespace = 'intuitinc';
            sj.usePlugins = true;
            sj.doPlugins = function (sj) {
              var userOptedOut = false;
              var xintuit = {
                org: Bootstrapper.data.resolve('55346'),
                env: Bootstrapper.data.resolve('55347'),
                src: Bootstrapper.data.resolve('55348'),
                cNSID: Bootstrapper.data.resolve('55349'),
              };
              var dil = DIL.create({
                partner: 'turbotax',
                visitorService: { namespace: Bootstrapper.data.resolve('55350') },
                containerNSID: xintuit.cNSID.nsidId,
                uuidCookie: { name: 'aam_uuid', days: 730 },
                isCoopSafe: !userOptedOut,
                secureDataCollection: false,
              });
              var ividValue = sj.Util.cookieRead('ivid');
              if (ividValue) {
                var cidIntegrateCode = encodeURIComponent('28016');
                var cidIVID = encodeURIComponent(ividValue);
                var cidFinal = cidIntegrateCode + '%01' + cidIVID;
                dil.api.signals({ d_cid: cidFinal, c_ivid: ividValue });
              }
              xintuit.cNSID = xintuit.cNSID.nsidId + '|' + xintuit.cNSID.nsidName;
              dil.api.signals(xintuit, 'c_xintuit_');
              var _scDilObj;
              _scDilObj = sj;
              DIL.modules.siteCatalyst.init(_scDilObj, dil);
              if (typeof sj.eVar30 !== 'undefined' && sj.eVar30)
                if (typeof Visitor !== 'undefined' && window.visitor)
                  window.visitor.setCustomerIDs({
                    proconnectfirmid: {
                      id: sj.eVar30,
                      authState: Visitor.AuthState.AUTHENTICATED,
                    },
                  });
              if (typeof sj.eVar6 !== 'undefined' && sj.eVar6)
                if (typeof Visitor !== 'undefined' && window.visitor)
                  window.visitor.setCustomerIDs({
                    proconnectleadid: { id: sj.eVar6, authState: Visitor.AuthState.AUTHENTICATED },
                  });
              if (typeof sj.eVar28 !== 'undefined' && sj.eVar28)
                if (typeof Visitor !== 'undefined' && window.visitor)
                  window.visitor.setCustomerIDs({
                    proconnectcustomerid: {
                      id: sj.eVar28,
                      authState: Visitor.AuthState.AUTHENTICATED,
                    },
                  });
            };
            sj.maxDelay = 750;
            sj.loadModule('Integrate');
            sj.Integrate.onLoad = function (sj) {
              const $___old_4bc1f85df190ee81 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'sessionStorage'
              );
              try {
                if ($___old_4bc1f85df190ee81)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___stub_a751d4ba6e4e175b.sessionStorage
                  ));
                return function () {
                  var diPropertyId = '265594';
                  if (sessionStorage && sessionStorage._da_da_sessionId)
                    sj.eVar42 = 'di-' + diPropertyId + '-' + sessionStorage._da_da_sessionId;
                  else {
                    sj.Integrate.add('DecibelInsight');
                    sj.Integrate.DecibelInsight.sessionVar = sj.eVar42;
                    sj.Integrate.DecibelInsight.setVars = function (sj, p) {
                      if (typeof decibelInsight.getSessionId == 'function')
                        sj.eVar42 = decibelInsight.getSessionId();
                    };
                    if (
                      typeof decibelInsight == 'undefined' ||
                      typeof decibelInsight.getSessionId != 'function'
                    )
                      sj.Integrate.DecibelInsight.delay();
                  }
                }.apply(this, arguments);
              } finally {
                if ($___old_4bc1f85df190ee81)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___old_4bc1f85df190ee81
                  ));
              }
            };
            conf.codeVersion = (function () {
              var retVal = sj.version + '|2019|01|29';
              retVal +=
                window.Bootstrapper && window.Bootstrapper.ensightenOptions
                  ? '|' + window.Bootstrapper.ensightenOptions.publishPath
                  : '';
              return retVal;
            })();
            conf.pagePath = this.cleanPagePath(conf);
            conf.siteName = this.getSiteName(conf);
            conf.siteGroup = this.getSiteGroup(conf);
            conf.siteHost = this.getSiteHost(conf);
            this.config = conf;
            this.loadJQueryListeners(this.config);
            this.buildPageVars(this.config);
            this.addPerformanceTiming();
            if (!conf.preventPageCall) sj.t();
            this.config.preventPageCall = false;
            this.config.pagePathOverride = '';
            if (!wa.utils.isUndefined(wa.evergageQueue)) wa.processEvergageQueue(wa.evergageQueue);
          };
          wa.getSiteName = function (pv_conf) {
            if (
              document.location.hostname.search(
                /(taxpro|proconnect|accountants-community|accountants\.e2e\.lc.a)\.intuit\.com/
              ) > -1 ||
              document.location.hostname.search(/(profile-fr|profile-en)\.community\.intuit\.ca/) >
                -1
            )
              return 'ptg';
            else if (pv_conf.siteName) return pv_conf.siteName;
            else if (
              pv_conf.pagePath.indexOf('accounting') > -1 ||
              pv_conf.pagePath.indexOf('payroll-payments') > -1
            )
              return 'aag';
            else if (pv_conf.pagePath.indexOf('tax') > -1) return 'ptg';
            else if (
              (pv_conf.pagePath.indexOf('secure') > -1 &&
                document.location.pathname.indexOf('estore') === -1) ||
              pv_conf.pagePath.indexOf('login') > -1 ||
              document.location.hostname === 'accounts.intuit.com'
            )
              return 'myacct';
            else if (pv_conf.pagePath.indexOf('commerce') > -1) return 'cart';
            else if (
              pv_conf.pagePath === 'index' &&
              document.location.search.indexOf('server_error=true') < 0
            )
              return 'home';
            else return 'ptg';
          };
          wa.getSiteGroup = function (pv_conf) {
            if (pv_conf.siteGroup) return pv_conf.siteGroup;
            else return 'mktg';
          };
          wa.getSiteHost = function (pv_conf) {
            var retVal = '',
              hostname = document.location.hostname,
              pathname = document.location.pathname;
            if (pv_conf.siteHost) retVal = pv_conf.siteHost;
            else if (hostname.indexOf('accountants.intuit.com') > -1) retVal = 'ai.com';
            else if (hostname.search(/(taxpro|proconnect)\.intuit\.com/) > -1)
              retVal =
                pathname.indexOf(/taxprocenter/) === 0 ||
                hostname === 'taxprocenter.proconnect.intuit.com'
                  ? 'txp:blog'
                  : 'txp';
            else if (
              hostname.search(/(myproconnect(\-e2e|\-care|\-qal|\-perf))\.intuit\.com/) > -1
            )
              retVal = 'txp';
            else retVal = hostname;
            return retVal;
          };
          wa.cleanPagePath = function (pv_conf) {
            if (pv_conf.pagePath) return pv_conf.pagePath;
            else {
              var pagePath = document.location.pathname;
              if (pagePath.indexOf('/_intuit/accountants') === 0) pagePath = pagePath.substr(20);
              if (pagePath.indexOf('/index.jsp') > -1) {
                var index = pagePath.indexOf('/index.jsp');
                pagePath = pagePath.substr(0, index);
              }
              if (pagePath.indexOf('/') == 0) pagePath = pagePath.substr(1);
              if (pagePath.indexOf('/') == pagePath.length - 1)
                pagePath = pagePath.substr(0, pagePath.length - 1);
              if (!pagePath) pagePath = 'index';
              return pagePath;
            }
          };
          wa.getDateTime = function () {
            var now = new Date();
            now.setMonth(now.getMonth() + 1);
            var theDate = now.getFullYear() + '.' + now.getMonth() + '.' + now.getDate();
            var d = new Date();
            var weekday = new Array(7);
            weekday[0] = 'Sunday';
            weekday[1] = 'Monday';
            weekday[2] = 'Tuesday';
            weekday[3] = 'Wednesday';
            weekday[4] = 'Thursday';
            weekday[5] = 'Friday';
            weekday[6] = 'Saturday';
            var dayOfWeek = weekday[d.getDay()];
            if (dayOfWeek == 'Sunday' || dayOfWeek == 'Saturday') theWeekend = 'Weekend';
            else theWeekend = 'Weekday';
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var ap = 'AM';
            if (hour > 11) ap = 'PM';
            if (hour > 12) hour = hour - 12;
            if (hour == 0) hour = 12;
            if (hour < 10) hour = '0' + hour;
            if (minute < 10) minute = '0' + minute + '0';
            var minute = ((((minute + 7.5) / 15) | 0) * 15) % 60;
            if (minute == 0) minute = '00';
            var timeString = hour + ':' + minute + ap;
            var outputDateTime = theDate + '|' + dayOfWeek + '|' + timeString + '|' + theWeekend;
            return outputDateTime;
          };
          wa.calculateDate = function (pv_offset) {
            var REPORTING_OFFSET = pv_offset;
            var clientDate = new Date();
            var utcDate = clientDate.getTime() + clientDate.getTimezoneOffset() * 60000;
            var serverDate = new Date(utcDate + 3600000 * REPORTING_OFFSET);
            var currentTime = serverDate.toTimeString().split(' ')[0];
            var currentDate_2digit = ('0' + serverDate.getDate()).slice(-2);
            var currentMonth_2digit = ('0' + (serverDate.getMonth() + 1)).slice(-2);
            var currentYear_4digit = serverDate.getFullYear();
            var currentYMD =
              currentYear_4digit + '-' + currentMonth_2digit + '-' + currentDate_2digit;
            var currentDateTime = currentYMD + ' ' + currentTime;
            return currentDateTime;
          };
          wa.getDaysBetween = function (pv_date1, pv_date2) {
            var ONE_DAY = 1000 * 60 * 60 * 24;
            var date1_ms = pv_date1.getTime();
            var date2_ms = pv_date2.getTime();
            var difference_ms = Math.abs(date1_ms - date2_ms);
            return Math.round(difference_ms / ONE_DAY);
          };
          wa.buildDate = function (pv_date) {
            var dateString;
            pv_date = new Date(pv_date);
            var fullYear = pv_date.getFullYear().toString();
            var month = pv_date.getMonth() + 1;
            month = month.toString();
            if (month.length < 2) month = '0' + month;
            var dayOfMonth = pv_date.getDate().toString();
            if (dayOfMonth.length < 2) dayOfMonth = '0' + dayOfMonth;
            dateString = fullYear + month + dayOfMonth;
            if (isNaN(dateString)) dateString = '';
            return dateString;
          };
          wa.isVarEmpty = function (pv_sVar) {
            if (pv_sVar == null || typeof pv_sVar == 'undefined' || pv_sVar == '') return true;
            else return false;
          };
          wa.getUrs = function (pv_cid) {
            if (pv_cid) this.config.cid = pv_cid;
            if (this.config.cid) this.config.ursvar = this.config.campaign = this.config.cid;
            if (this.config.campaign == '' && this.config.cleanDomain == '')
              this.config.ursvar = '';
            else {
              this.config.orgDomains = [
                ['bing', 'q'],
                ['a9', '*,q'],
                ['abacho', 'q'],
                ['ah-ha', 'q'],
                ['alexa', 'q'],
                ['allesklar', 'wo,words'],
                ['alltheweb', 'q,query'],
                ['altavista', 'q'],
                ['aol', 'query'],
                ['arianna', 'query,b1'],
                ['asiaco', 'query,qry'],
                ['ask', 'q,ask'],
                ['atlas', 'q'],
                ['austronaut', 'begriff,suche'],
                ['auyantepui', 'clave'],
                ['bluewin', 'qry,q'],
                ['centrum', 'q'],
                ['club-internet', 'q'],
                ['dino-online', 'query'],
                ['dircom', 'req'],
                ['dmoz', 'search'],
                ['dogpile', 'q,qkw'],
                ['eniro', 'q'],
                ['euroseek', 'string,query'],
                ['exalead', 'q'],
                ['excite', 'search,s,qkw'],
                ['findlink', 'key'],
                ['findwhat', 'mt'],
                ['fireball', 'q'],
                ['freeserve', 'q'],
                ['gigablast', 'q'],
                ['go2net', 'general'],
                ['goeureka', 'key'],
                ['google', 'q,as_q,as_epq,as_oq'],
                ['googlesyndication', 'url'],
                ['greekspider', 'keywords'],
                ['hotbot', 'query,mt'],
                ['ilor', 'q'],
                ['iltrovatore', 'q'],
                ['indexnanacoil', 'q'],
                ['infoseek', 'qt,q'],
                ['infospace', 'qkw'],
                ['iwon', 'searchfor'],
                ['ixquick', 'query'],
                ['jubii', 'query,soegeord'],
                ['jyxo', 's'],
                ['kanoodle', 'query'],
                ['kataweb', 'q'],
                ['kvasir', 'q'],
                ['live', 'q'],
                ['looksmart', 'qt,key,querystring'],
                ['lycos', 'query,mt,q,qry'],
                ['mamma', 'query'],
                ['metacrawler', 'q,general,qry'],
                ['msn', 'q,mt'],
                ['mywebsearch', 'searchfor'],
                ['mysearch', 'searchfor'],
                ['netex', 'srchkey,keyword'],
                ['netscape', 'search,searchstring,query'],
                ['netster', 'keywords'],
                ['nettavisen', 'query,q'],
                ['ninemsn', 'q'],
                ['nlsearch', 'qr'],
                ['nomade', 'mt,s'],
                ['northernlight', 'qr'],
                ['oozap', 'query'],
                ['overture', 'keywords'],
                ['ozu', 'q'],
                ['passagen', 'q'],
                ['quick', 'ftxt_query'],
                ['savvy', 's'],
                ['scrubtheweb', 'keyword,q'],
                ['wwwsearchcom', 'q'],
                ['searchalot', 'q'],
                ['searchhippo', 'q'],
                ['sensis', 'find'],
                ['seznam', 'w'],
                ['soneraplaza', 'qt'],
                ['splatsearch', 'searchstring'],
                ['sprinks', 'terms'],
                ['spray', 'query'],
                ['srch', 'q'],
                ['supereva', 'q'],
                ['teoma', 'q'],
                ['thunderstone', 'q'],
                ['tiscalich', 'key'],
                ['tjohoo', 'soktext,mt,query'],
                ['track', 'qr'],
                ['truesearch', 'query'],
                ['tygo', 's'],
                ['vinden', 'query'],
                ['virgilio', 'qs'],
                ['vivisimo', 'query'],
                ['voila', 'kw'],
                ['walla', 'q'],
                ['wanadoo', 'fkw'],
                ['web', 'su'],
                ['webcrawler', 'qkw,search,searchtext'],
                ['webwatch', 'findindb'],
                ['wepa', 'query'],
                ['wisenut', 'q'],
                ['xpsn', 'kwd'],
                ['ya', 'q'],
                ['yahoo', 'p,va,vp,vo'],
                ['ynet', 'q'],
                ['zerx', 'search'],
              ];
              this.config.domainFound = '';
              for (var i = 0; i < this.config.orgDomains.length; i++)
                if (
                  this.config.rdomain &&
                  this.config.rdomain.indexOf(this.config.orgDomains[i][0] + '.') >= 1
                ) {
                  this.config.domainFound = this.config.orgDomains[i][0];
                  var aryQueryParams = this.config.orgDomains[i][1].split(',');
                  for (var ii = 0, max2 = aryQueryParams.length; ii < max2; ii++) {
                    this.config.parseKw = sj.Util.getQueryParam(
                      aryQueryParams[ii],
                      this.config.referrer
                    );
                    if (this.config.parseKw) break;
                  }
                  if (this.config.parseKw)
                    if (
                      !this.isVarEmpty(this.config.ursvar) &&
                      this.config.ursvar.indexOf('[seo]') < 0
                    ) {
                      this.config.ppcKw = this.config.parseKw;
                      this.config.natKw = 'not organic search';
                      this.config.ursvar = this.config.cid;
                      this.config.trafficType = 'ppc';
                      break;
                    } else {
                      this.config.ursvar = this.config.cleanDomain + ' [seo]';
                      this.config.natKw = this.config.parseKw;
                      this.config.ppcKw = 'not paid search';
                      this.config.trafficType = 'seo';
                      break;
                    }
                  else break;
                }
              if (!this.config.parseKw && !this.config.campaign && this.config.cleanDomain)
                if (
                  this.config.domainFound == 'yahoo' &&
                  /(r\.)?search\.yahoo\.com/g.test(this.config.cleanDomain)
                ) {
                  this.config.parseKw = !this.isVarEmpty(sj.Util.getQueryParam('kw', document.URL))
                    ? sj.Util.getQueryParam('kw', document.URL)
                    : 'secure search|yahoo';
                  this.config.ursvar = this.config.cleanDomain + ' [seo]';
                  this.config.natKw = this.config.parseKw;
                  this.config.ppcKw = 'not paid search';
                  this.config.trafficType = 'seo';
                } else if (this.isSocial(this.config.cleanDomain)) {
                  this.config.ursvar = this.config.cleanDomain + ' [soc]';
                  this.config.ursSocial = this.config.cleanDomain;
                  this.config.trafficType = 'soc';
                } else if (
                  this.config.domainFound === 'bing' &&
                  this.config.cleanDomain === 'bing.com'
                ) {
                  this.config.ursvar = this.config.cleanDomain + ' [seo]';
                  this.config.natKw = this.config.parseKw = 'not provided|bing';
                  this.config.trafficType = 'seo';
                } else
                  for (var i = 0; i < this.config.internalHostArray.length; i++)
                    if (this.config.cleanDomain.indexOf(this.config.internalHostArray[i]) < 0) {
                      this.config.natKw = 'not organic search';
                      this.config.ppcKw = 'not paid search';
                      this.config.ursvar = this.config.cleanDomain + ' [ref]';
                      this.config.trafficType = 'ref';
                    } else {
                      this.config.ursvar = this.config.trafficType = '';
                      break;
                    }
              if (this.config.domainFound == 'google') {
                this.config.googleEsrc = sj.Util.getQueryParam('esrc', this.config.referrer);
                if (
                  !this.config.parseKw &&
                  (this.config.googleEsrc ||
                    (this.config.rdomain.indexOf('://www.google.') > -1 &&
                      this.config.rPath == ''))
                ) {
                  this.config.parseKw = !this.isVarEmpty(sj.Util.getQueryParam('kw', document.URL))
                    ? sj.Util.getQueryParam('kw', document.URL)
                    : 'secure search|google';
                  this.config.ursvar = this.config.cleanDomain + ' [seo]';
                  this.config.natKw = this.config.parseKw;
                  this.config.ppcKw = 'not paid search';
                  this.config.trafficType = 'seo';
                }
              }
            }
            if (this.isVarEmpty(this.config.trafficType) && this.config.campaign) {
              if (this.config.campaign.indexOf('_') > -1)
                this.config.campaignPrefix = this.config.campaign.split('_')[0];
              else this.config.campaignPrefix = this.config.campaign;
              this.config.trafficType = this.config.campaignPrefix;
            }
            !this.isVarEmpty(this.config.trafficType)
              ? (this.config.trafficType = this.config.trafficType.toLowerCase())
              : '';
            var traffic_search = ['ppc', 'sem', 'seo'];
            if (this.config.campaign && traffic_search.indexOf(this.config.trafficType) > -1) {
              var cid_array = this.config.campaign.split('_');
              if (cid_array[0].match(/^(sem||ppc)/i) != null) {
                if (cid_array.length > 5 && cid_array[5].length > 0)
                  this.config.ppcKw = cid_array[5];
                else
                  this.config.ppcKw = this.config.domainFound
                    ? 'secure search|' + this.config.domainFound
                    : 'not paid search';
                this.config.natKw = 'not organic search';
                this.config.ursvar = this.config.cid;
                this.config.trafficType = cid_array[0].toLowerCase();
              }
            }
            if (
              this.config.trafficType &&
              traffic_search.indexOf(this.config.trafficType) === -1
            ) {
              this.config.natKw = 'not organic search';
              this.config.ppcKw = 'not paid search';
            }
            if (
              this.config.ursvar &&
              this.config.ursvar.search(/^(seo|soc|ref)_.*\[[seo|ppc|ref\]]/) > -1
            ) {
              this.config.ursvar = this.config.ursvar.replace(/(seo|soc|ref)_/, '');
              this.config.ursvar = decodeURIComponent(this.config.ursvar);
            }
            return this.config.ursvar;
          };
          wa.getUrsStack = function () {
            this.config.ursStack = this.config.ursvar
              ? this.crossVisitParticipation('sc_ptg_urs_cvp', this.config.ursvar, 5, '|', 90)
              : '';
            return this.config.ursStack;
          };
          wa.getChannelStack = function () {
            this.config.channelStack = this.config.trafficType
              ? this.crossVisitParticipation('sc_ptg_cmp_cvp', this.config.trafficType, 5, '|', 90)
              : '';
            return this.config.channelStack;
          };
          wa.crossVisitParticipation = function (
            pv_cookieName,
            pv_cookieValue,
            pv_returnLength,
            pv_delimiter,
            pv_cookieExpire
          ) {
            var cookieValue = pv_cookieValue ? pv_cookieValue.replace("'", '') : '';
            var cookieArray = sj.Util.cookieRead(pv_cookieName)
              ? sj.Util.cookieRead(pv_cookieName).split(',')
              : '';
            var theDate = new Date();
            theDate.setDate(theDate.getDate() + pv_cookieExpire);
            var returnValue;
            if (cookieValue)
              if (cookieArray == 'none' || this.isVarEmpty(cookieArray)) {
                newCookieArray = [cookieValue];
                sj.Util.cookieWrite(pv_cookieName, newCookieArray, theDate);
                return cookieValue;
              } else {
                var mostRecent = cookieArray[0];
                if (mostRecent != cookieValue) {
                  cookieArray.unshift(cookieValue);
                  if (cookieArray.length >= pv_returnLength) cookieArray.length = pv_returnLength;
                  sj.Util.cookieWrite(pv_cookieName, cookieArray, theDate);
                }
              }
            returnValue = cookieArray ? cookieArray.reverse().join(pv_delimiter) : '';
            return returnValue;
          };
          wa.isSocial = function (pv_rDomain) {
            var returnVal = false;
            for (var i = 0; i < this.config.socialNetworkArray.length; i++)
              if (pv_rDomain == this.config.socialNetworkArray[i]) {
                returnVal = true;
                break;
              }
            return returnVal;
          };
          wa.getInternalCampaign = function (pv_trackData) {
            var retVal;
            retVal = sj.Util.getQueryParam('scid');
            if (!retVal) retVal = sj.Util.getQueryParam('xcid');
            if (!retVal && pv_trackData.xcid) retVal = pv_trackData.xcid;
            if (!retVal) {
              retVal = sj.Util.getQueryParam('src');
              if (retVal)
                if (window.wa.eventList) window.wa.eventList += ',ipd_cust_spt_click';
                else window.wa.eventList = 'ipd_cust_spt_click';
              else if (
                window.location.href.indexOf('?') == -1 &&
                window.location.href.indexOf('&src=') > -1
              ) {
                var totalLength = window.location.href.length;
                var startLocation = window.location.href.indexOf('&src=') + 5;
                var endLocation = totalLength - startLocation;
                if (window.location.href.indexOf('#') > -1)
                  endLocation = totalLength - window.location.href.indexOf('#');
                var retVal = window.location.href.substr(startLocation, endLocation);
              }
            }
            retVal = retVal ? retVal.toLowerCase() : '';
            return retVal;
          };
          wa.getCanValue = function (pv_trackData) {
            var retVal;
            retVal = sj.Util.getQueryParam('can');
            retVal = retVal ? retVal.toLowerCase() : '';
            return retVal;
          };
          wa.getPpckw = function () {
            var retVal = '';
            if (this.config.ursvar) retVal = this.config.ppcKw;
            return retVal;
          };
          wa.getNatkw = function () {
            var retVal = '';
            if (this.config.ursvar) retVal = this.config.natKw;
            return retVal;
          };
          wa.getValOnce = function (pv_variableToCheck, pv_cookieName, pv_cookieExpire) {
            if (!this.config.preventPageCall) {
              var retVal;
              var currentVal = sj.Util.cookieRead(pv_cookieName);
              var expireDate;
              if (pv_cookieExpire) {
                expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + pv_cookieExpire);
              } else expireDate = 0;
              if (pv_variableToCheck == currentVal) retVal = '';
              else {
                retVal = pv_variableToCheck;
                if (!this.isVarEmpty(pv_variableToCheck))
                  sj.Util.cookieWrite(pv_cookieName, pv_variableToCheck, expireDate);
              }
              return retVal;
            }
          };
          wa.appendList = function (pv_list, pv_value, pv_delimiter) {
            var delimeter = pv_delimiter ? pv_delimiter : ',';
            if (pv_list) {
              if (pv_list.indexOf(pv_value) < 0) pv_list += delimeter + pv_value;
            } else pv_list = pv_value;
            return pv_list;
          };
          wa.buildPageName = function (pv_override) {
            var pageNameOverride = pv_override.pageNameOverride
              ? pv_override.pageNameOverride
              : window.wa.pageNameOverride
              ? window.wa.pageNameOverride
              : this.config.pageNameOverride
              ? this.config.pageNameOverride
              : '';
            var pagePathOverride = pv_override.pagePathOverride
              ? pv_override.pagePathOverride
              : window.wa.pagePathOverride
              ? window.wa.pagePathOverride
              : this.config.pagePathOverride
              ? this.config.pagePathOverride
              : '';
            var siteName = pv_override.siteName
              ? pv_override.siteName
              : window.wa.siteName
              ? window.wa.siteName
              : this.config.siteName
              ? this.config.siteName
              : '';
            var siteGroup = pv_override.siteGroup
              ? pv_override.siteGroup
              : window.wa.siteGroup
              ? window.wa.siteGroup
              : this.config.siteGroup
              ? this.config.siteGroup
              : '';
            var siteHost = pv_override.siteHost
              ? pv_override.siteHost
              : window.wa.siteHost
              ? window.wa.siteHost
              : this.config.siteHost
              ? this.config.siteHost
              : '';
            var pagePath = pagePathOverride
              ? pagePathOverride
              : pv_override.pagePath
              ? pv_override.pagePath
              : window.wa.pagePath
              ? window.wa.pagePath
              : this.config.pagePath
              ? this.config.pagePath
              : document.location.pathname;
            var retVal;
            if (pageNameOverride) retVal = pageNameOverride;
            else {
              var pathName = pagePath;
              var path = pathName === '/' || pathName === '' ? 'index' : pathName;
              if (path.indexOf('/') === 0) path = path.replace('/', '');
              if (path.indexOf(';') > 0) path = path.substr(0, path.indexOf(';'));
              if (path.indexOf('#') === path.length - 1) path = path.replace('#', '');
              if (path.lastIndexOf('/') === path.length - 1)
                path = path.slice(0, path.lastIndexOf('/'));
              retVal = siteName ? siteName : '';
              retVal += siteGroup ? '|' + siteGroup : '|';
              retVal += siteHost ? '|' + siteHost : '|';
              retVal += path ? '|' + path : '|';
              if (window.wa.viewingPageNumber) retVal += '/' + window.wa.viewingPageNumber;
            }
            retVal = retVal.toLowerCase();
            this.pagePath = pagePath;
            this.pageName = retVal;
            return retVal;
          };
          wa.buildPageDetail = function (pv_detail) {
            var retVal = !this.isVarEmpty(pv_detail)
              ? this.pageName + '/' + pv_detail
              : this.pageName;
            retVal = this.config.ursvar ? this.config.ursvar + ' -- ' + retVal : retVal;
            retVal = retVal.toLowerCase();
            return retVal;
          };
          wa.buildEventList = function (pv_pageData) {
            this.successEvents = {
              prodview: { event: 'prodView', serialId: '' },
              product_view: { event: 'prodView', serialId: '' },
              cartview: { event: 'scView', serialId: '' },
              view_cart: { event: 'scView', serialId: '' },
              cartopen: { event: 'scOpen', serialId: '' },
              open_cart: { event: 'scOpen', serialId: '' },
              scadd: { event: 'scAdd', serialId: '' },
              cartadd: { event: 'scAdd', serialId: '' },
              add_to_cart: { event: 'scAdd', serialId: '' },
              cartremove: { event: 'scRemove', serialId: '' },
              remove_from_cart: { event: 'scRemove', serialId: '' },
              checkout: { event: 'scCheckout', serialId: '' },
              purchase: { event: 'purchase', serialId: '' },
              order: { event: 'purchase', serialId: '' },
              grabpdf: { event: 'event3', serialId: '' },
              forefile_success: { event: 'event4', serialId: '' },
              signup_pview: { event: 'event5', serialId: '' },
              signup_new: {
                event: 'event7',
                serialId: pv_pageData.userId ? pv_pageData.userId : this.config.userId,
              },
              signup_app: {
                event: 'event8',
                serialId: pv_pageData.userId ? pv_pageData.userId : this.config.userId,
              },
              set_realm_in: { event: 'event9', serialId: '' },
              set_realm_up: {
                event: 'event10',
                serialId: pv_pageData.firmId ? pv_pageData.firmId : this.config.firmId,
              },
              firstaddclient: {
                event: 'event11',
                serialId: pv_pageData.firmHash ? pv_pageData.firmHash : this.config.firmHash,
              },
              firsttaxreturn: {
                event: 'event12',
                serialId: pv_pageData.firmHash ? pv_pageData.firmHash : this.config.firmHash,
              },
              usereturncredit: { event: 'event13', serialId: '' },
              addclient: { event: 'event14', serialId: '' },
              addreturn: { event: 'event15', serialId: '' },
              invitetp_acctsbx: { event: 'event16', serialId: '' },
              docshare_tpsbx: { event: 'event17', serialId: '' },
              acceptinvite_tpsbx: { event: 'event18', serialId: '' },
              firstview_acctsbx: {
                event: 'event19',
                serialId: pv_pageData.firmId ? pv_pageData.firmId : this.config.firmId,
              },
              linkplus_subscribe: { event: 'event22', serialId: '' },
              uploaddoc_sbx: { event: 'event23', serialId: '' },
              pbrleadstart: { event: 'event28', serialId: '' },
              pbrleadcomplete: {
                event: 'event29',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
              sent_resp: { event: 'event34', serialId: '' },
              delivered_resp: { event: 'event35', serialId: '' },
              enroll_p4acct: { event: 'event38', serialId: '' },
              bounce_resp: { event: 'event39', serialId: '' },
              renewnow: { event: 'event43', serialId: '' },
              estore_paymentinfo: { event: 'event46', serialId: '' },
              estore_revieworder: { event: 'event47', serialId: '' },
              lcleadstart: { event: 'event49', serialId: '' },
              lcleadcomplete: {
                event: pv_pageData.leadId || window.wa.leadId ? 'event50' : '',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
              autorenew_lc: { event: 'event51', serialId: '' },
              prraddbalance_ps: { event: 'event53', serialId: '' },
              leadstart_cbs: { event: 'event55', serialId: '' },
              leadcomplete_cbs: { event: 'event56', serialId: '' },
              itoleadstart: { event: 'event58', serialId: '' },
              itoleadcomplete: {
                event: 'event59',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
              tryfree_ito: { event: 'event60', serialId: '' },
              view_quote: { event: 'event61', serialId: '' },
              autorenewpreferences_lc: { event: 'event62', serialId: '' },
              autorenewpreferences_ps: { event: 'event63', serialId: '' },
              autorenew_ps: { event: 'event64', serialId: '' },
              psleadstart: { event: 'event65', serialId: '' },
              psleadcomplete: {
                event: pv_pageData.leadId || window.wa.leadId ? 'event66' : '',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
              trialdownload_ps: { event: 'event67', serialId: '' },
              trialdownload_lc: { event: 'event68', serialId: '' },
              page_completely_read: { event: 'event77', serialId: '' },
              cust_spt_content: { event: 'event78', serialId: '' },
              left_comment: { event: 'event79', serialId: '' },
              helpful_content: { event: 'event82', serialId: '' },
              not_helpful_content: { event: 'event83', serialId: '' },
              contact_us_article: { event: 'event84', serialId: '' },
              internalsearchposition: {
                event: 'event85',
                serialId: '',
                incrementor: window.wa.internalSearchPositionNumber,
              },
              cheers_post: { event: 'event86', serialId: '' },
              crash: { event: 'event94', serialId: '' },
              launch: { event: 'event95', serialId: '' },
              update: { event: 'event96', serialId: '' },
              install: { event: 'event97', serialId: '' },
              register: { event: 'event98', serialId: '' },
              login: { event: 'event99', serialId: '' },
              signin_ok: { event: 'event99', serialId: '' },
              error: { event: 'event100', serialId: '' },
              internalsearch: { event: 'event101', serialId: '' },
              article_view: { event: 'event102', serialId: '' },
              internalsearchclick: { event: 'event103', serialId: '' },
              internalsearch_noresults: { event: 'event104', serialId: '' },
              video_start: { event: 'event105', serialId: '' },
              video_25: { event: 'event106', serialId: '' },
              video_50: { event: 'event107', serialId: '' },
              video_75: { event: 'event108', serialId: '' },
              video_complete: { event: 'event109', serialId: '' },
              internalsearch_results: { event: 'event110', serialId: '' },
              lcleadforminteraction: { event: 'event111', serialId: '' },
              lcleadformvalidated: { event: 'event112', serialId: '' },
              psleadforminteraction: { event: 'event113', serialId: '' },
              psleadformvalidated: { event: 'event114', serialId: '' },
              itoleadforminteraction: { event: 'event115', serialId: '' },
              itoleadformvalidated: { event: 'event116', serialId: '' },
              leadforminteraction: { event: 'event117', serialId: '' },
              pbrleadforminteraction: { event: 'event118', serialId: '' },
              pbrleadformvalidated: { event: 'event119', serialId: '' },
              leadformvalidated: { event: 'event120', serialId: '' },
              famleadstart: { event: 'event121', serialId: '' },
              famleadforminteraction: { event: 'event122', serialId: '' },
              famleadformvalidated: { event: 'event123', serialId: '' },
              famleadcomplete: {
                event: 'event124',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
              ipd_cust_spt_click: { event: 'event135', serialId: '' },
              int_gen_content: { event: 'event140', serialId: '' },
              user_gen_content: { event: 'event141', serialId: '' },
              quest_ask_step1: { event: 'event142', serialId: '' },
              quest_ask_step2: { event: 'event143', serialId: '' },
              quest_ask_step3: { event: 'event144', serialId: '' },
              new_question_submitted: { event: 'event145', serialId: '' },
              recommened_answer_present: { event: 'event146', serialId: '' },
              pmleadstart: { event: 'event147', serialId: '' },
              pmleadcomplete: {
                event: 'event148',
                serialId: wa.getLeadId(pv_pageData) ? wa.getLeadId(pv_pageData) : '',
              },
              notify_me: { event: 'event149', serialId: '' },
              can_answer_question: { event: 'event152', serialId: '' },
              answered_question: { event: 'event153', serialId: '' },
              promoted_search_result: { event: 'event154', serialId: '' },
              advisoryleadstart: { event: 'event175', serialId: '' },
              advisoryleadcomplete: {
                event: 'event176',
                serialId: wa.getLeadId(pv_pageData) ? wa.getLeadId(pv_pageData) : '',
              },
              lacertehostingleadstart: { event: 'event183', serialId: '' },
              lacertehostingleadcomplete: {
                event: 'event184',
                serialId: wa.getLeadId(pv_pageData) ? wa.getLeadId(pv_pageData) : '',
              },
              proserieshostingleadstart: { event: 'event185', serialId: '' },
              proserieshostingleadcomplete: {
                event: 'event186',
                serialId: wa.getLeadId(pv_pageData) ? wa.getLeadId(pv_pageData) : '',
              },
              esleadstart: { event: 'event187', serialId: '' },
              esleadcomplete: {
                event: 'event188',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
              lcbundleleadstart: { event: 'event194', serialId: '' },
              lcbundleleadcomplete: {
                event: 'event195',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
              aaleadstart: { event: 'event196', serialId: '' },
              aaleadcomplete: {
                event: 'event197',
                serialId: pv_pageData.leadId
                  ? pv_pageData.leadId
                  : window.wa.leadId
                  ? window.wa.leadId
                  : '',
              },
            };
          };
          wa.getSuccessEvents = function (pv_eventList) {
            var retVal = (returnEvent = '');
            var eventList = pv_eventList
              ? pv_eventList
              : window.wa.eventList
              ? window.wa.eventList
              : '';
            if (eventList) {
              eventList = eventList.toLowerCase();
              var aryEvents = eventList.split(',');
              for (var i = 0, max = aryEvents.length; i < max; i++) {
                var tmpEvent = {
                  eventName:
                    aryEvents[i].indexOf(':') > -1
                      ? aryEvents[i].split(':')[0]
                      : aryEvents[i].indexOf('=') > -1
                      ? aryEvents[i].split('=')[0]
                      : aryEvents[i],
                  serialId: aryEvents[i].indexOf(':') > -1 ? aryEvents[i].split(':')[1] : '',
                  incrementor: aryEvents[i].split('=') > -1 ? aryEvents[i].split('=')[1] : '',
                };
                if (tmpEvent.eventName.indexOf('event') == 0) {
                  tmpEvent = '';
                  aryEvents.splice(i, 1);
                  i--;
                  max = aryEvents.length;
                } else tmpEvent.transEv = tmpEvent.eventName;
                tmpEvent.eventNumber = this.successEvents[tmpEvent.transEv]
                  ? this.successEvents[tmpEvent.transEv].event
                  : '';
                tmpEvent.returnEvent = tmpEvent.eventNumber;
                tmpEvent.serialId = this.successEvents[tmpEvent.transEv]
                  ? this.successEvents[tmpEvent.transEv].serialId
                  : tmpEvent.eventNumber.length > 0
                  ? tmpEvent.serialId
                  : '';
                tmpEvent.incrementor = this.successEvents[tmpEvent.transEv]
                  ? this.successEvents[tmpEvent.transEv].incrementor
                  : tmpEvent.eventNumber.length > 0
                  ? tmpEvent.incrementor
                  : '';
                tmpEvent.returnEvent += tmpEvent.serialId
                  ? ':' + tmpEvent.serialId
                  : tmpEvent.incrementor
                  ? '=' + tmpEvent.incrementor
                  : '';
                retVal = this.appendList(retVal, tmpEvent.returnEvent);
              }
            }
            return retVal;
          };
          wa.getProducts = function (pv_objProducts) {
            var tmpProduct,
              retVal = '';
            for (key in pv_objProducts)
              if (pv_objProducts[key].prod) {
                tmpProduct = pv_objProducts[key].cat ? pv_objProducts[key].cat : '';
                tmpProduct += pv_objProducts[key].prod ? ';' + pv_objProducts[key].prod : ';';
                tmpProduct += pv_objProducts[key].qty ? ';' + pv_objProducts[key].qty : ';';
                tmpProduct += pv_objProducts[key].price
                  ? ';' +
                    (pv_objProducts[key].price.indexOf('$') == 0
                      ? pv_objProducts[key].price.substr(1)
                      : pv_objProducts[key].price)
                  : ';';
                tmpProduct += pv_objProducts[key].incrementor
                  ? ';' + pv_objProducts[key].incrementor
                  : ';';
                tmpProduct += pv_objProducts[key].merchVar
                  ? ';' +
                    pv_objProducts[key].merchVar +
                    '=' +
                    (pv_objProducts[key].merchVal
                      ? pv_objProducts[key].merchVal === 'pageName'
                        ? "'" + sj.pageName + "'"
                        : pv_objProducts[key].merchVal
                      : '')
                  : ';';
                retVal += retVal ? ',' + tmpProduct : tmpProduct;
              }
            return retVal;
          };
          wa.spliceDelimitedString = function (pv_string, pv_delimiter, pv_length) {
            var pv_string = pv_string.split(pv_delimiter);
            if (pv_string.length > pv_length)
              pv_string = pv_string.splice(pv_string.length - pv_length, pv_length);
            pv_string = pv_string.join(pv_delimiter);
            return pv_string;
          };
          wa.getReferrer = function (pv_pageData) {
            var retVal;
            var waRefer = sj.Util.cookieRead('wa_refer');
            if (pv_pageData.referrer) retVal = pv_pageData.referrer;
            else if (!this.isVarEmpty(waRefer)) {
              retVal = waRefer;
              !this.config.preventPageCall ? sj.Util.cookieWrite('wa_refer', '') : '';
            } else retVal = document.referrer;
            if (retVal) {
              retVal = retVal.toLowerCase();
              this.config.rdomain = retVal.replace(/(\/\/[^\/]+\/).*/, '$1');
              this.config.rPath = retVal.replace(this.config.rdomain, '');
              this.config.cleanDomain = this.config.rdomain.replace(/www.|http:|https:|\//g, '');
              this.config.cleanDomain =
                this.config.cleanDomain.indexOf('mail') > -1
                  ? this.spliceDelimitedString(this.config.cleanDomain, '.', 3)
                  : this.config.cleanDomain;
            }
            return retVal;
          };
          wa.getReturnId = function () {
            if (document.location.href.indexOf('/taxreturn/') > -1) {
              var retVal = sj.Util.getQueryParam('id');
              if (retVal.indexOf('/') > -1) retVal = retVal.substr(0, retVal.indexOf('/'));
              return retVal;
            }
          };
          wa.getPreviousValue = function (
            pv_var,
            pv_cookieName,
            pv_pageData,
            pv_cookieExpireDays
          ) {
            var returnVal = sj.Util.cookieRead(pv_cookieName);
            pv_var = pv_var ? pv_var : '';
            !pv_pageData.preventPageCall
              ? sj.Util.cookieWrite(pv_cookieName, pv_var, pv_cookieExpireDays)
              : '';
            return returnVal;
          };
          wa.getPersist = function (pv_var, pv_cookieName, pv_cookieExpireDays) {
            var retVal = sj.Util.cookieRead(pv_cookieName);
            if (pv_var) {
              sj.Util.cookieWrite(pv_cookieName, pv_var, pv_cookieExpireDays);
              return pv_var;
            } else return retVal;
          };
          wa.buildLoggedStatus = function (pv_trackData) {
            if (typeof jQuery != 'undefined')
              if (
                pv_trackData.custSptCommunityID ||
                document.location.pathname.indexOf('/community/') > -1
              ) {
                var logOutVerbiageShown = jQuery("[data-wa-link='hdr_signOut']").length;
                var logInVerbiageShown = jQuery('.login-link').length;
                if (logOutVerbiageShown > 0 || logInVerbiageShown == 0)
                  pv_trackData.loggedStatus = 'logged in';
                else pv_trackData.loggedStatus = 'logged out';
                var previousValue = sj.Util.cookieRead('gpv_liv');
                if (
                  pv_trackData.loggedStatus != previousValue &&
                  pv_trackData.loggedStatus == 'logged in'
                )
                  if (pv_trackData.eventList) pv_trackData.eventList += ',login';
                  else pv_trackData.eventList = 'login';
              } else {
                pv_trackData.loggedStatus = this.getLoggedStatus('gt_ls');
                if (wa.newLoggedStatus && wa.originalLoggedStatus != wa.newLoggedStatus)
                  if (wa.newLoggedStatus === 'logged in')
                    pv_trackData.eventList
                      ? (pv_trackData.eventList = pv_trackData.eventList + ',login')
                      : (pv_trackData.eventList = 'login');
              }
            return pv_trackData;
          };
          wa.getLoggedStatus = function (pv_cookieName) {
            var login = sj.Util.getQueryParam('fromLogin');
            var logout = sj.Util.getQueryParam('DPSLogout');
            var status = sj.Util.cookieRead(pv_cookieName);
            wa.originalLoggedStatus = this.isVarEmpty(status) ? 'empty' : status;
            if (login) {
              status = 'logged in';
              sj.Util.cookieWrite(pv_cookieName, status);
            } else if (logout) {
              status = 'logged out';
              sj.Util.cookieWrite(pv_cookieName, status);
            } else if (
              document.location.pathname ===
                '/commerce/checkout/secure/estore/customer_information.jsp' ||
              document.location.pathname ===
                '/commerce/checkout/secure/estore/customer_information_and_payment.jsp'
            ) {
              status = 'logged out';
              sj.Util.cookieWrite(pv_cookieName, status);
            } else if (document.location.pathname.indexOf('secure') > -1) {
              status = 'logged in';
              sj.Util.cookieWrite(pv_cookieName, status);
            } else if (
              document.location.pathname === '/login/login-create-two.jsp' ||
              document.location.pathname === '/login/login-associate-products.jsp'
            ) {
              status = 'logged in';
              sj.Util.cookieWrite(pv_cookieName, status);
            } else if (status) return status;
            else status = 'logged out';
            wa.newLoggedStatus = status;
            return status;
          };
          wa.getAudienceSegment = function () {
            var audienceSegmentValue = sj.Util.cookieRead('pcg_nilla');
            var audienceSegment = audienceSegmentValue.substr(6, audienceSegmentValue.length);
            return audienceSegment;
          };
          wa.getCid = function (pv_pageData) {
            var retVal = '';
            var s_cid = new RegExp('[\\?&]s_cid=([^&#]*)', 'i').exec(window.location.href);
            s_cid ? (s_cid = s_cid[1]) : '';
            var sev1 = sj.Util.getQueryParam('s_ev1');
            var cid = new RegExp('[\\?&]cid=([^&#]*)', 'i').exec(window.location.href);
            cid ? (cid = cid[1]) : '';
            var scid = !s_cid && cid ? cid : s_cid;
            if (pv_pageData.cid) retVal = pv_pageData.cid;
            if (window.wa.cid) retVal = window.wa.cid;
            else if ((scid && !sev1) || (scid && sev1 && scid.length >= sev1.length))
              retVal = scid;
            else if (scid && sev1 && sev1.length > scid.length) retVal = sev1;
            else if (!scid && sev1) retVal = sev1;
            retVal = decodeURIComponent(retVal);
            return retVal;
          };
          wa.getOptimizelyTestId = function () {
            var retVal = '';
            if (window.optimizely && window.optimizely.hasOwnProperty('get')) {
              var obj,
                str = '';
              try {
                obj = window.optimizely.get('state').getCampaignStates({ isActive: true });
              } catch (err) {}
              if (obj !== null || obj !== 'undefined') {
                var output = [];
                var pOutput = [];
                for (var key in obj) {
                  var tmp = obj[key].campaignName + ':' + obj[key].variation.name.split('_', 1)[0];
                  if (tmp.substring(0, 2) == 'P_') {
                    pOutput.push(tmp);
                    pOutput.join(',');
                  } else output.push(tmp);
                }
                if (pOutput)
                  wa.personalization = wa.personalization
                    ? wa.personalization + ',' + pOutput.toString()
                    : pOutput.toString();
                retVal = output.join(',');
                retVal = retVal ? retVal : '';
              }
              return retVal;
            }
          };
          wa.getTestCell = function (pv_pageData) {
            var testId = '';
            testId = pv_pageData.testCell ? pv_pageData.testCell : '';
            if (pv_pageData.ssTestId) testId = 'ss:' + pv_pageData.ssTestId;
            testId = testId ? testId.toLowerCase() : '';
            wa.ozTestId = wa.getOptimizelyTestId();
            testId += wa.ozTestId ? '|' + wa.ozTestId : '';
            if (testId.indexOf('|') == 0) testId = testId.replace('|', '');
            return testId;
          };
          wa.getSessionStorage = function (pv_pageData) {
            const $___old_aeea2878b85d6e77 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'sessionStorage'
            );
            try {
              if ($___old_aeea2878b85d6e77)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___stub_a751d4ba6e4e175b.sessionStorage
                ));
              return function () {
                try {
                  if (sessionStorage !== null) {
                    wa.sessionStorage = {
                      testCell: window.sessionStorage.getItem('wa_testCell'),
                      pageNameOverride: window.sessionStorage.getItem('wa_pageNameOverride'),
                      referrer: window.sessionStorage.getItem('wa_referrer'),
                    };
                    for (var keys in wa.sessionStorage)
                      if (wa.sessionStorage[keys] !== null) {
                        pv_pageData[keys] = !this.isVarEmpty(pv_pageData[keys])
                          ? pv_pageData[keys]
                          : wa.sessionStorage[keys];
                        !pv_pageData.preventPageCall
                          ? window.sessionStorage.removeItem('wa_' + [keys])
                          : '';
                      }
                  }
                } catch (e) {
                  console.log('getSessionStorage error: ' + e);
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_aeea2878b85d6e77)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___old_aeea2878b85d6e77
                ));
            }
          };
          wa.getPopularVote = function (pv_pageData) {
            return pv_pageData.popularVote
              ? pv_pageData.popularVote
              : window.wa.popularVote
              ? window.wa.popularVote
              : '';
          };
          wa.getSiteLocale = function (pv_trackData) {
            if (pv_trackData.siteLocale) return pv_trackData.siteLocale.toLowerCase();
            var htmlLang = document.getElementsByTagName('html')[0].lang;
            if (htmlLang) return htmlLang.toLowerCase();
            var lang = 'en',
              country = 'us';
            if (
              this.config.siteHost === 'txp:blog' &&
              !this.isVarEmpty(sj.Util.cookieRead('UserSettings'))
            )
              sj.Util.cookieRead('UserSettings').indexOf('ca') > -1 ? (country = 'ca') : '';
            return (lang + '-' + country).toLowerCase();
          };
          wa.getPostTitleAndId = function (pv_trackData) {
            var post_title_id = '';
            if (pv_trackData.custSptPostID) post_title_id += pv_trackData.custSptPostID;
            if (pv_trackData.custSptPostID && pv_trackData.custSptContentTitle)
              post_title_id += '|' + pv_trackData.custSptContentTitle;
            return post_title_id;
          };
          wa.getDocTitleAndId = function (pv_trackData) {
            var doc_title_id = '';
            if (pv_trackData.custSptDocID) doc_title_id += pv_trackData.custSptDocID;
            if (pv_trackData.custSptDocID && pv_trackData.custSptContentTitle)
              doc_title_id += '|' + pv_trackData.custSptContentTitle;
            return doc_title_id;
          };
          wa.getContentDetail = function (pv_trackData) {
            var content_details = '';
            if (
              pv_trackData.custSptContentDetails &&
              window.location.pathname.indexOf('/articles') > -1
            ) {
              if (pv_trackData.custSptContentDetails.custSptReturnTypes)
                content_details = pv_trackData.custSptContentDetails.custSptReturnTypes;
              else content_details = 'No Return Type';
              if (pv_trackData.custSptContentDetails.custSptTaxYears)
                content_details += '|' + pv_trackData.custSptContentDetails.custSptTaxYears;
              else content_details += '|No Tax Years';
            }
            return content_details;
          };
          wa.getFirmId = function (pv_trackData) {
            var the_firm_id;
            var realm_URL_param;
            if (pv_trackData.firmId) the_firm_id = pv_trackData.firmId;
            else {
              realm_URL_param = sj.Util.getQueryParam('realm');
              if (realm_URL_param) the_firm_id = realm_URL_param;
            }
            return the_firm_id;
          };
          wa.getSearchTerm = function (pv_trackData) {
            var search_term = '';
            if (pv_trackData.searchTerm) {
              if (pv_trackData.searchTerm.indexOf('+') > -1)
                search_term = pv_trackData.searchTerm.replace(/[+]/g, ' ');
              else search_term = pv_trackData.searchTerm;
              return this.getValOnce(search_term, 'gvo_searchTerm');
            }
            if (pv_trackData.internalKeyword) search_term = pv_trackData.internalKeyword;
            if (window.wa.internalKeyword) {
              search_term = window.wa.internalKeyword;
              window.wa.internalKeyword = '';
            }
            return search_term;
          };
          wa.getSearchResults = function (pv_trackData) {
            if (!pv_trackData.searchTerm) return;
            else if (window.wa.eventList) {
              if (window.wa.eventList.indexOf('internalsearchclick') > -1) return;
            } else {
              var search_term;
              var search_results;
              search_term = this.getValOnce(pv_trackData.searchTerm, 'gvo_searchTermResults');
              if (search_term.length > 0)
                if (window.wa.eventList) window.wa.eventList += ',internalsearch';
                else window.wa.eventList = 'internalsearch';
              if (typeof pv_trackData.searchResults !== 'undefined') {
                search_results = pv_trackData.searchResults;
                if (typeof search_results == 'number') search_results = search_results.toString();
                if (search_results == '0') {
                  search_results = 'zero';
                  window.wa.eventList += ',internalsearch_noresults';
                } else window.wa.eventList += ',internalsearch_results';
              }
              if (
                search_term &&
                search_results &&
                window.wa.eventList.indexOf('internalsearch_') > -1
              )
                return search_term + '|' + search_results;
              else return;
            }
          };
          wa.buildSearchResultClicked = function () {
            if (!wa.searchResultClicked) return '';
            return wa.searchTerm + '|' + wa.searchResults + '|' + wa.searchResultClicked;
          };
          wa.getLeadId = function (pv_trackData) {
            var retVal = '';
            if (pv_trackData.leadId) retVal = pv_trackData.leadId;
            else if (window.wa.leadId) retVal = window.wa.leadId;
            else if (sj.Util.getQueryParam('leadid')) retVal = sj.Util.getQueryParam('leadid');
            return retVal;
          };
          wa.getGclid = function () {
            var retVal = '';
            if (sj.Util.getQueryParam('gclid')) retVal = sj.Util.getQueryParam('gclid');
            return retVal;
          };
          wa.getTransactionID = function (pv_trackData) {
            var retVal = '';
            if (pv_trackData.leadId) retVal = pv_trackData.leadId;
            else if (window.wa.leadId) retVal = window.wa.leadId;
            if (pv_trackData.purchaseID && pv_trackData.eventList.indexOf('purchase') > -1)
              retVal = pv_trackData.purchaseID;
            return retVal;
          };
          wa.getPersonalization = function (pv_trackData) {
            if (pv_trackData.personalization) return pv_trackData.personalization;
            return '';
          };
          wa.buildUserAction = function (pv_trackData) {
            var linkName = pv_trackData.linkName || '';
            if (linkName.indexOf('evergage') > -1) return '';
            if (!linkName) return '';
            if (linkName.indexOf('_questAsk-Step1') > -1) {
              pv_trackData.custSptPostID = 'newQuestion';
              if (typeof jQuery != 'undefined')
                pv_trackData.custSptContentTitle = jQuery('.question-previewer').text();
              else pv_trackData.custSptContentTitle = 'Could not get title';
              if (window.wa.eventList) window.wa.eventList += ',quest_ask_step1';
              else window.wa.eventList = 'quest_ask_step1';
            }
            if (linkName.indexOf('_questAsk-Step2') > -1) {
              pv_trackData.custSptPostID = 'newQuestion';
              if (typeof jQuery != 'undefined')
                pv_trackData.custSptContentTitle = jQuery('.question-previewer').text();
              else pv_trackData.custSptContentTitle = 'Could not get title';
              if (window.wa.eventList) window.wa.eventList += ',quest_ask_step2';
              else window.wa.eventList = 'quest_ask_step2';
            }
            if (linkName.indexOf('_questAsk-Step3') > -1)
              if (window.wa.eventList) window.wa.eventList += ',quest_ask_step3';
              else window.wa.eventList = 'quest_ask_step3';
            if (
              linkName.indexOf('_questAsk-similarQuest') > -1 ||
              linkName.indexOf('_questAsk-cancel') > -1
            ) {
              pv_trackData.custSptPostID = 'newQuestion';
              if (typeof jQuery != 'undefined')
                pv_trackData.custSptContentTitle = jQuery('.question-previewer').text();
              else pv_trackData.custSptContentTitle = 'Could not get title';
            }
            if (linkName.indexOf('_helpful-yes') > -1)
              if (window.wa.eventList) window.wa.eventList += ',helpful_content';
              else window.wa.eventList = 'helpful_content';
            if (linkName.indexOf('_helpful-no') > -1)
              if (window.wa.eventList) window.wa.eventList += ',not_helpful_content';
              else window.wa.eventList = 'not_helpful_content';
            if (linkName.indexOf('_post-cheers') > -1)
              if (window.wa.eventList) window.wa.eventList += ',cheers_post';
              else window.wa.eventList = 'cheers_post';
            if (linkName == 'body-content_questDetail-canAnswer')
              if (window.wa.eventList) window.wa.eventList += ',can_answer_question';
              else window.wa.eventList = 'can_answer_question';
            if (linkName.indexOf('_questDetail-canAnswerSubmitted') > -1)
              if (window.wa.eventList) window.wa.eventList += ',answered_question';
              else window.wa.eventList = 'answered_question';
            if (linkName.indexOf('_questDetail-comment') > -1)
              if (window.wa.eventList) window.wa.eventList += ',left_comment';
              else window.wa.eventList = 'left_comment';
            if (linkName.indexOf('_questDetail-notify') > -1)
              if (window.wa.eventList) window.wa.eventList += ',notify_me';
              else window.wa.eventList = 'notify_me';
            if (linkName.indexOf('_srchResult-promotedPos') > -1)
              if (window.wa.eventList) window.wa.eventList += ',promoted_search_result';
              else window.wa.eventList = 'promoted_search_result';
            if (linkName.indexOf('_srchResult-resultPos') > -1) {
              if (linkName.indexOf('body-content_srchResult-resultPos') > -1)
                var lengthToResultPos = 33;
              else var lengthToResultPos = 28;
              var theRest = linkName.length - lengthToResultPos;
              window.wa.internalSearchPositionNumber = linkName.substr(lengthToResultPos, theRest);
              if (window.wa.eventList)
                window.wa.eventList += ',internalsearchclick,internalsearchposition';
              else window.wa.eventList = 'internalsearchclick,internalsearchposition';
            }
            if (linkName.indexOf('reached-end-of-page') > -1) {
              if (window.wa.eventList) window.wa.eventList += ',page_completely_read';
              else window.wa.eventList = 'page_completely_read';
              return '';
            }
            return 'D="' + linkName + ' ["+pageName+"]"';
          };
          wa.clearPageVars = function () {
            for (var i = 1; i < 76; i++) sj['prop' + [i]] = sj['eVar' + [i]] = '';
            sj.events = sj.pageName = sj.channel = sj.campaign = '';
          };
          wa.addPerformanceTiming = function () {
            const $___old_d01b1b4ff13bdc8e = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              ),
              $___old_ee7c46d9d680979a = {}.constructor.getOwnPropertyDescriptor(
                window,
                'sessionStorage'
              );
            try {
              if ($___old_d01b1b4ff13bdc8e)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_d43db2f5a125ac97.performance
                ));
              if ($___old_ee7c46d9d680979a)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___stub_a751d4ba6e4e175b.sessionStorage
                ));
              return function () {
                sj.split = new Function(
                  'l',
                  'd',
                  '' +
                    'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
                    '++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                );
                sj.apl = new Function(
                  'l',
                  'v',
                  'd',
                  'u',
                  '' +
                    "var sj=this,m=0;if(!l)l='';if(u){var i,n,a=sj.split(l,d);for(i=0;i<a." +
                    'length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas' +
                    'e()));}}if(!m)l=l?l+d+v:v;return l'
                );
                sj.performanceTiming = new Function(
                  'v',
                  '' +
                    "var sj=this;if(v)sj.ptv=v;if(typeof performance!='undefined'){if(perf" +
                    'ormance.timing.loadEventEnd==0){sj.pi=setInterval(function(){sj.perfo' +
                    "rmanceWrite()},250);}if(!sj.ptc||sj.linkType=='e'){sj.performanceRead(" +
                    ");}else{sj.rfe();sj[sj.ptv]='';}}"
                );
                sj.performanceWrite = new Function(
                  '',
                  '' +
                    'var sj=this;if(performance.timing.loadEventEnd>0)clearInterval(sj.pi)' +
                    ";try{if(sj.c_r('s_ptc')==''&&performance.timing.loadEventEnd>0){try{" +
                    "var pt=performance.timing;var pta='';pta=sj.performanceCheck(pt.fetc" +
                    "hStart,pt.navigationStart);pta+='^^'+sj.performanceCheck(pt.domainLo" +
                    "okupStart,pt.fetchStart);pta+='^^'+sj.performanceCheck(pt.domainLook" +
                    "upEnd,pt.domainLookupStart);pta+='^^'+sj.performanceCheck(pt.connect" +
                    "End,pt.connectStart);pta+='^^'+sj.performanceCheck(pt.responseStart," +
                    "pt.connectEnd);pta+='^^'+sj.performanceCheck(pt.responseEnd,pt.respo" +
                    "nseStart);pta+='^^'+sj.performanceCheck(pt.loadEventStart,pt.domLoad" +
                    "ing);pta+='^^'+sj.performanceCheck(pt.loadEventEnd,pt.loadEventStart" +
                    ");pta+='^^'+sj.performanceCheck(pt.loadEventEnd,pt.navigationStart);" +
                    "sj.c_w('s_ptc',pta);if(sessionStorage&&navigator.cookieEnabled&&sj.pt" +
                    "v!='undefined'){var pe=performance.getEntries();var tempPe='';for(v" +
                    "ar i=0;i<pe.length;i++){tempPe+='!';tempPe+=pe[i].name.indexOf('?')" +
                    ">-1?pe[i].name.split('?')[0]:pe[i].name;tempPe+='|'+(Math.round(pe[" +
                    "i].startTime)/1000).toFixed(1)+'|'+(Math.round(pe[i].duration)/1000" +
                    ").toFixed(1)+'|'+pe[i].initiatorType;}sessionStorage.setItem('s_pec" +
                    "',tempPe);}}catch(err){return;}}}catch(err){return;}"
                );
                sj.performanceCheck = new Function(
                  'a',
                  'b',
                  '' +
                    'if(a>=0&&b>=0){if((a-b)<60000&&((a-b)>=0)){return((a-b)/1000).toFix' +
                    'ed(2);}else{return 600;}}'
                );
                sj.performanceRead = new Function(
                  '',
                  '' +
                    'var sj=this;if(performance.timing.loadEventEnd>0)clearInterval(sj.pi)' +
                    ";var cv=sj.c_r('s_ptc');if(sj.pte){var ela=sj.pte.split(',');}if(cv!='" +
                    "'){var cva=sj.split(cv,'^^');if(cva[1]!=''){for(var x=0;x<(ela.lengt" +
                    "h-1);x++){sj.events=sj.apl(sj.events,ela[x]+'='+cva[x],',',2);}}sj.even" +
                    "ts=sj.apl(sj.events,ela[ela.length-1],',',2);}sj.linkTrackEvents=sj.apl" +
                    "(sj.linkTrackEvents,sj.pte,',',2);sj.c_w('s_ptc','',0);if(sessionStora" +
                    "ge&&navigator.cookieEnabled&&sj.ptv!='undefined'){sj[sj.ptv]=sessionSt" +
                    "orage.getItem('s_pec');sessionStorage.setItem('s_pec','',0);}else{s" +
                    "[sj.ptv]='sessionStorage Unavailable';}sj.ptc=true;"
                );
                sj.rfe = new Function(
                  '',
                  '' +
                    "var sj=this;var ea=sj.split(sj.events,',');var pta=sj.split(sj.pte,',');" +
                    "try{for(x in pta){sj.events=sj.rfl(sj.events,pta[x]);sj.contextData['ev" +
                    "ents']=sj.events;}}catch(e){return;}"
                );
                sj.rfl = new Function(
                  'l',
                  'v',
                  'd1',
                  'd2',
                  'ku',
                  '' +
                    "var sj=this,R=new Array(),C='',d1=!d1?',':d1,d2=!d2?',':d2,ku=!ku?0:" +
                    "1;if(!l)return'';L=l.split(d1);for(i=0;i<L.length;i++){if(L[i].inde" +
                    "xOf(':')>-1){C=L[i].split(':');C[1]=C[0]+':'+C[1];L[i]=C[0];}if(L[i" +
                    "].indexOf('=')>-1){C=L[i].split('=');C[1]=C[0]+'='+C[1];L[i]=C[0];}" +
                    'if(L[i]!=v&&C)R.push(C[1]);else if(L[i]!=v)R.push(L[i]);else if(L[i' +
                    "]==v&&ku){ku=0;if(C)R.push(C[1]);else R.push(L[i]);}C='';}return sj." +
                    'join(R,{delim:d2})'
                );
                sj.performanceTiming();
              }.apply(this, arguments);
            } finally {
              if ($___old_d01b1b4ff13bdc8e)
                ({}.constructor.defineProperty(window, 'performance', $___old_d01b1b4ff13bdc8e));
              if ($___old_ee7c46d9d680979a)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___old_ee7c46d9d680979a
                ));
            }
          };
          wa.buildPageVars = function (pv_pageData) {
            this.getSessionStorage(pv_pageData);
            this.buildLoggedStatus(pv_pageData);
            this.config.curl = document.location.href;
            sj.eVar65 = this.buildUserAction(pv_pageData);
            sj.eVar5 = this.getInternalCampaign(pv_pageData);
            this.buildEventList(pv_pageData);
            this.cid = this.getCid(pv_pageData);
            sj.pageName = this.buildPageName(pv_pageData);
            sj.eVar62 = this.getSearchResults(pv_pageData);
            sj.events = this.getSuccessEvents(pv_pageData.eventList);
            sj.products = pv_pageData.trackProducts
              ? pv_pageData.trackProducts
              : pv_pageData.aryProducts
              ? this.getProducts(pv_pageData.aryProducts)
              : '';
            sj.campaign = this.cid;
            sj.campaign = !this.isVarEmpty(sj.campaign) ? sj.campaign.toLowerCase() : '';
            sj.referrer = this.config.referrer = this.getReferrer(pv_pageData);
            sj.purchaseID = pv_pageData.purchaseID;
            sj.channel = this.config.siteName + '|' + this.config.siteGroup;
            sj.transactionID = this.getTransactionID(pv_pageData);
            sj.eVar1 = this.getUrs(this.cid);
            sj.prop1 = !this.isVarEmpty(sj.eVar1) ? 'D=v1' : '';
            sj.eVar2 = this.getChannelStack();
            sj.eVar3 = !this.isVarEmpty(pv_pageData.funnelName)
              ? this.config.siteName + '|' + pv_pageData.funnelName
              : '';
            sj.eVar4 = this.getUrsStack();
            sj.prop4 =
              typeof pv_pageData.formAnalysis === 'string' ? pv_pageData.formAnalysis : '';
            sj.eVar57 = sj.Util.cookieRead('ivid');
            sj.prop57 = !this.isVarEmpty(sj.eVar57) ? 'D=v57' : '';
            sj.eVar6 = this.getLeadId(pv_pageData);
            sj.prop6 = !this.isVarEmpty(sj.eVar6) ? 'D=v6' : '';
            sj.prop7 =
              this.config.siteName + '|' + this.config.siteGroup + '|' + this.config.siteHost;
            sj.eVar7 = this.getGclid();
            sj.eVar8 = pv_pageData.clientId ? pv_pageData.clientId : this.config.clientId;
            sj.prop8 = !this.isVarEmpty(sj.eVar8) ? 'D=v8' : '';
            sj.eVar9 = this.getAudienceSegment();
            sj.prop10 = pv_pageData.loggedStatus;
            window.wa.previousLogInValue = this.getPreviousValue(
              sj.prop10,
              'gpv_liv',
              pv_pageData
            );
            sj.eVar10 = this.getContentDetail(pv_pageData);
            sj.eVar12 = pv_pageData.rrid ? pv_pageData.rrid : sj.Util.getQueryParam('rrid');
            sj.eVar13 = this.articleDetail
              ? this.articleDetail
              : pv_pageData.articleDetail
              ? pv_pageData.articleDetail
              : '';
            sj.prop13 = !this.isVarEmpty(sj.eVar13) ? 'D=v13' : '';
            sj.prop16 = pv_pageData.paymentType;
            sj.prop17 = pv_pageData.client;
            sj.prop18 = pv_pageData.reqInput;
            sj.eVar20 = this.getPpckw();
            sj.eVar21 = this.getNatkw();
            sj.prop23 = this.getPopularVote(pv_pageData);
            sj.eVar24 =
              sj.events && sj.events.search(/scadd/i) > -1 && sj.products ? 'D=pageName' : '';
            this.previousPageName = this.getPreviousValue(sj.pageName, 'gpv_pn', pv_pageData);
            sj.prop25 = this.previousPageName ? this.previousPageName : 'no previous page';
            sj.eVar26 = 'D=pageName';
            sj.prop26 = this.buildPageDetail(pv_pageData.pageDetail);
            sj.eVar27 = 'D=g';
            sj.prop27 = 'D=g';
            sj.eVar28 = this.getCanValue(pv_pageData)
              ? this.getCanValue(pv_pageData)
              : pv_pageData.can
              ? pv_pageData.can
              : this.config.can;
            sj.eVar29 = this.getReturnId();
            sj.prop29 = pv_pageData.returnsTotal;
            sj.eVar30 = this.getFirmId(pv_pageData);
            sj.eVar31 = pv_pageData.returnType ? pv_pageData.returnType : this.config.returnType;
            sj.eVar32 = pv_pageData.taxYear;
            sj.eVar33 = pv_pageData.arOption;
            sj.prop34 = pv_pageData.purchaseID ? 'D=purchaseID' : '';
            sj.eVar34 = pv_pageData.purchaseID ? 'D=purchaseID' : '';
            sj.prop35 = !this.isVarEmpty(sj.products) ? 'D=products' : '';
            sj.prop36 = this.config.codeVersion;
            sj.eVar39 = pv_pageData.videoEvar;
            sj.prop39 = pv_pageData.videoProp;
            sj.eVar51 =
              typeof pv_pageData.custSptProduct === 'string'
                ? pv_pageData.custSptProduct + '|' + pv_pageData.custSptCommunityID
                : '';
            sj.prop51 = !this.isVarEmpty(sj.eVar51) ? 'D=v51' : '';
            sj.prop53 = this.getPostTitleAndId(pv_pageData);
            sj.prop54 = this.getDocTitleAndId(pv_pageData);
            sj.eVar58 = sj.Util.cookieRead('userIdPseudonym');
            sj.prop58 = !this.isVarEmpty(sj.eVar58) ? 'D=v58' : '';
            sj.eVar60 = this.getSiteLocale(pv_pageData);
            sj.prop60 = !this.isVarEmpty(sj.eVar60) ? 'D=v60' : '';
            sj.eVar61 = !this.isVarEmpty(sj.prop25) ? 'D=c25' : '';
            sj.prop62 = !this.isVarEmpty(sj.eVar62) ? 'D=v62' : '';
            sj.prop63 = this.buildSearchResultClicked();
            sj.eVar64 = this.config.siteName;
            sj.prop64 = !this.isVarEmpty(sj.eVar64) ? 'D=v64' : '';
            sj.prop65 = !this.isVarEmpty(sj.eVar65) ? 'D=v65' : '';
            sj.eVar66 = !this.isVarEmpty(sj.campaign) ? 'D=v0' : '';
            sj.prop66 = !this.isVarEmpty(sj.campaign) ? 'D=v0' : '';
            sj.eVar67 = this.getDateTime();
            sj.prop67 = !this.isVarEmpty(sj.eVar67) ? 'D=v67' : '';
            sj.eVar68 = this.getSearchTerm(pv_pageData);
            sj.prop68 = !this.isVarEmpty(sj.eVar68) ? 'D=v68' : '';
            sj.eVar71 = this.getTestCell(pv_pageData);
            sj.prop71 = !this.isVarEmpty(sj.eVar71) ? 'D=v71' : '';
            sj.eVar22 = this.getPersonalization(pv_pageData);
            sj.prop73 = Math.round(s_getLoadTime()) / 10;
            if (pv_pageData.custSptCommunityID) pv_pageData.userId = '';
            sj.eVar74 = pv_pageData.userId
              ? pv_pageData.userId
              : pv_pageData.hashedAuthId
              ? pv_pageData.hashedAuthId
              : this.config.userId;
            sj.prop74 = !this.isVarEmpty(sj.eVar74) ? 'D=v74' : '';
            sj.eVar75 = typeof pv_pageData.errorMsg === 'string' ? pv_pageData.errorMsg : '';
            sj.prop75 = !this.isVarEmpty(sj.eVar75) ? 'D=v75' : '';
            if (pv_pageData.pageType === 'errorPage') {
              sj.pageType = 'errorPage';
              sj.pageName = '';
            }
          };
          wa.trackLinkPlus = function (pv_obj, pv_linkData) {
            sj.linkTrackVars = sj.linkTrackEvents = '';
            if (
              sj.pageName &&
              !window.wa.pageNameOverride &&
              !pv_linkData.pageNameOverride &&
              !window.wa.pagePathOverride &&
              !pv_linkData.pagePathOverride &&
              !window.wa.pagePath &&
              !pv_linkData.pagePath &&
              !pv_linkData.pageDetail
            ) {
              if (window.wa.pagePath) pv_linkData.pagePath = window.wa.pagePath;
              else pv_linkData.pageNameOverride = sj.pageName;
              if (window.wa.pageNameOverride)
                pv_linkData.pageNameOverride = window.wa.pageNameOverride;
            }
            if (window.wa.custSptCommunityID)
              pv_linkData.custSptCommunityID = window.wa.custSptCommunityID;
            if (window.wa.custSptProduct) pv_linkData.custSptProduct = window.wa.custSptProduct;
            if (window.wa.custSptPostID) pv_linkData.custSptPostID = window.wa.custSptPostID;
            if (window.wa.custSptContentTitle)
              pv_linkData.custSptContentTitle = window.wa.custSptContentTitle;
            if (window.wa.searchTerm) pv_linkData.searchTerm = window.wa.searchTerm;
            if (window.wa.searchResults) pv_linkData.searchResults = window.wa.searchResults;
            wa.eventList = '';
            this.clearPageVars();
            this.buildPageVars(pv_linkData);
            sj.prop25 = '';
            sj.eVar61 = '';
            for (var i = 1; i < 76; i++) {
              if (!this.isVarEmpty(sj['prop' + [i]])) sj.linkTrackVars += ',prop' + i;
              if (!this.isVarEmpty(sj['eVar' + [i]])) sj.linkTrackVars += ',eVar' + i;
            }
            var aryVarsToCheck = [
              'events',
              'pageName',
              'channel',
              'campaign',
              'products',
              'transactionID',
            ];
            for (var ii = 0; ii < aryVarsToCheck.length; ii++)
              if (!this.isVarEmpty(aryVarsToCheck[ii]))
                sj.linkTrackVars += ',' + aryVarsToCheck[ii];
            if (sj.events) {
              var aryEvents = sj.events.split(',');
              for (var iii = 0; iii < aryEvents.length; iii++)
                if (aryEvents[iii].split(':')[0] != aryEvents[iii])
                  sj.linkTrackEvents += aryEvents[iii].split(':')[0] + ',';
                else if (aryEvents[iii].split('=')[0] != aryEvents[iii])
                  sj.linkTrackEvents += aryEvents[iii].split('=')[0] + ',';
                else sj.linkTrackEvents += aryEvents[iii] + ',';
            }
            var linkType = pv_linkData.linkType ? pv_linkData.linkType : 'o';
            var linkObj = pv_obj ? pv_obj : true;
            pv_linkData.linkName !== '' ? sj.tl(linkObj, linkType, pv_linkData.linkName) : '';
            sj.events = this.testCell = this.personalization = sj.linkTrackVars = sj.linkTrackEvents =
              '';
          };
          wa.trackByQuery = function (pv_query) {
            var pageData = {};
            if (pv_query.indexOf('?') < 0) pv_query = '?' + pv_query;
            var queryAry = pv_query.split('?')[1].split('&');
            for (var i = 0; i < queryAry.length; i++) {
              var tmpAry = queryAry[i].split('=');
              pageData[tmpAry[0]] = tmpAry[1];
            }
            this.trackPage(pageData);
          };
          wa.trackPage = function (pv_trackPageData) {
            sj.forcedLinkTrackingTimeout = 1000;
            this.clearPageVars();
            this.buildPageVars(pv_trackPageData);
            this.addPerformanceTiming();
            sj.t();
          };
          wa.buildTrackSection = function () {
            if (typeof jQuery != 'undefined') {
              wa.callBackTime = 100;
              wa.userLocation = 150;
              wa.scroller = false;
              wa.didComplete = false;
              wa.timer = 0;
              wa.viewHeight = jQuery(window).height();
              wa.inView = wa.inView
                ? wa.viewHeight * (wa.inView / 100)
                : wa.viewHeight * (40 / 100);
              wa.sections = jQuery('[data-wa-scroll-page-name]');
              wa.sectionArray = [];
              if (wa.sections.length === 0);
              else
                jQuery(window).scroll(function () {
                  if (wa.timer) clearTimeout(wa.timer);
                  wa.timer = setTimeout(wa.trackSection, wa.callBackTime);
                });
              for (var i = 0; i < wa.sections.length; i++) {
                var object = {};
                var value = jQuery(wa.sections[i]).attr('data-wa-scroll-page-name');
                object.name = value;
                object.location = jQuery(wa.sections[i]).offset().top;
                object.tracked = false;
                var formAnalysis = jQuery(wa.sections[i]).find('[data-wa-form-analysis]');
                object.hasForm = formAnalysis.length !== 0;
                if (object.hasForm) object.formId = jQuery(formAnalysis).attr('id');
                wa.sectionArray.push(object);
              }
            }
          };
          wa.getSectionData = function (pv_sectionArray) {
            this.sectionData = {
              requestquote: { eventList: 'pbrleadstart', funnelName: 'pbr-leadeval' },
            };
          };
          wa.formData = {
            cbs_enrollnow: {
              start: 'leadstart_cbs',
              abandon: '',
              complete: 'leadcomplete_cbs',
              funnelName: 'cbs-enrollnow',
            },
            cbs_moreinfo: { start: '', abandon: '', complete: '', funnelName: 'cbs-moreinfo' },
            rt_requestquote: {
              start: 'leadstart_rt',
              abandon: '',
              complete: 'leadcomplete_rt',
              funnelName: 'rt-requestquote',
            },
          };
          wa.trackSection = function () {
            if (typeof jQuery != 'undefined') {
              var sections = wa.sectionArray;
              wa.getSectionData(wa.sectionArray);
              var bottom = jQuery(window).height() + jQuery(window).scrollTop();
              var height = jQuery(document).height();
              var scrollTop = jQuery(window).scrollTop();
              if (bottom > wa.userLocation && !wa.scroller) wa.scroller = true;
              for (var i = 0; i < sections.length; i++) {
                var section = sections[i];
                if (bottom >= section.location + wa.inView && !section.tracked) {
                  var pathname =
                    document.location.pathname.lastIndexOf('/') ===
                    document.location.pathname.length - 1
                      ? document.location.pathname
                      : document.location.pathname + '/';
                  section.hasForm ? wa.formAnalysis({ id: section.formId, event: 'start' }) : '';
                  var trackData = wa.sectionData[section.name] || {};
                  trackData.pagePath = pathname + section.name;
                  wa.trackPage(trackData);
                  section.tracked = true;
                }
              }
              if (bottom >= height && !wa.didComplete) wa.didComplete = true;
            }
          };
          wa.processDynamicForms = function (pv_formPage) {
            if (typeof jQuery != 'undefined')
              var wait = setInterval(function () {
                for (var i = 0; i < pv_formPage.length; i++) {
                  pv_formPage[i].visible = jQuery(
                    'form[data-wa-name="' + pv_formPage[i].name + '"]'
                  ).is(' :visible');
                  if (pv_formPage[i].visible) {
                    wa.buildFormAnalysis();
                    clearInterval(wait);
                  }
                }
              }, 100);
          };
          function simpleFind (fn) {
            return function find (array) {
              for (var i = 0, max = array.length; i < max; i++) if (fn(array[i])) return array[i];
            };
          }
          function checkForValidLeadFormFunnelNames () {
            var possibleLeadFormFunnelNames = [
              'ps-leadeval',
              'lc-leadeval',
              'ito-leadeval',
              'pbr-leadeval',
              'ps-ttleadeval',
              'fam-leadeval',
              'pm-leadeval',
              'advisory-leadeval',
              'lacertehosting-leadeval',
              'proserieshosting-leadeval',
              'es-leadeval',
              'lcpmhostedbundle-leadeval',
              'aa-leadeval',
            ];
            var checkPath = window.location.pathname;
            var checkHref = window.location.href;
            if (
              (checkPath == '/practice-management/' ||
                checkPath.indexOf('/lacerte/hosting/') > -1 ||
                checkPath.indexOf('/proseries/hosting/') > -1 ||
                checkPath.indexOf('/pay-by-refund/') > -1 ||
                checkPath.indexOf('/esignature/') > -1 ||
                checkPath.indexOf('/desktop-hosting/') > -1 ||
                checkPath.indexOf('/tax/proseries/refund-transfer/') > -1 ||
                checkPath.indexOf('/tax/proseries/refund-transfer-hp/') > -1 ||
                checkPath.indexOf('/lacerte/integrations/') > -1 ||
                checkPath.indexOf('/workflow-tools/tax-software-bundles/lacerte/') > -1 ||
                checkPath.indexOf('/lacerte/cpa/') > -1 ||
                checkPath.indexOf('/audit-assistance/') > -1) &&
              typeof window.wa.funnelName == 'undefined'
            )
              return true;
            if (
              !wa.funnelName ||
              typeof wa.funnelName !== 'string' ||
              possibleLeadFormFunnelNames.indexOf(wa.funnelName) === -1
            )
              return false;
            return true;
          }
          function foundFormSection (waSectionArray, sectionName) {
            return simpleFind(function (section) {
              return section.name === sectionName && section.hasForm;
            })(waSectionArray);
          }
          function alterPayByRefundFormSectionData () {
            if (typeof wa.sectionArray === 'undefined' || wa.sectionArray.length === 0) return;
            var formSectionData = foundFormSection(wa.sectionArray, 'requestquote');
            if (!formSectionData) return;
            formSectionData.hasForm = false;
            formSectionData['@@note'] = 'Section has a form. Altered for patch.';
          }
          function leadFormPatchHelpers () {
            if (
              wa.funnelName === 'pbr-leadeval' &&
              /pay-by-refund/.test(document.location.pathname)
            )
              alterPayByRefundFormSectionData();
          }
          wa.createLeadFormTracking = function ($form) {
            if (typeof jQuery != 'undefined') {
              var waFormId = $form.attr('id');
              var waFormName = $form.attr('data-wa-name');
              var $formInputs = $form.find(':input');
              leadFormPatchHelpers();
              wa.form = wa.form || {};
              wa.form[waFormName] = {
                active: true,
                id: waFormId,
                name: waFormName,
                canAbandon: false,
                tracked: { abandon: false, complete: false, start: false },
              };
              Object.defineProperty(wa.form[waFormName].tracked, 'start', { writable: false });
              $formInputs.each(function () {
                var $input = jQuery(this);
                if ($input.attr('type') === 'submit') return;
                $input.on('change keyup paste', function (event) {
                  if (!wa.form[waFormName].tracked.start) {
                    Object.defineProperty(wa.form[waFormName].tracked, 'start', {
                      value: true,
                      writable: true,
                    });
                    wa.form[waFormName].canAbandon = true;
                    wa.form[waFormName].tracked.abandon = false;
                    wa.isNotAbandon = false;
                    var product = wa.funnelName.split('-')[0];
                    var theEventList = product + 'leadforminteraction,leadforminteraction';
                    wa.trackLinkPlus(this, {
                      linkName: 'formAnalysis:start',
                      formAnalysis: 'start:' + waFormName,
                      eventList: theEventList,
                    });
                  }
                  wa.lastChanged = $input.attr('id');
                });
              });
              window.addEventListener('beforeunload', function (event) {
                if (wa.form[waFormName].canAbandon)
                  wa.formAnalysis({ id: waFormId, name: waFormName, event: 'abandon' }, true);
              });
            }
          };
          wa.buildFormAnalysis = function () {
            if (typeof jQuery != 'undefined') {
              if (checkForValidLeadFormFunnelNames())
                return jQuery('form[data-wa-name]').each(function (index, element) {
                  wa.createLeadFormTracking(jQuery(element));
                });
              wa.forms = jQuery('div[data-wa-form-analysis]').children('form');
              if (wa.forms.length === 0) wa.forms = jQuery('form[data-wa-form-analysis="true"]');
              wa.formsArray = [];
              if (wa.forms.length === 0) return false;
              else {
                for (var i = 0; i < wa.forms.length; i++) {
                  var form = {};
                  form.name = jQuery(wa.forms[i]).attr('data-wa-name')
                    ? jQuery(wa.forms[i]).attr('data-wa-name')
                    : jQuery(wa.forms[i]).attr('id');
                  form.id = jQuery(wa.forms[i]).attr('id');
                  form.active = '';
                  form.section =
                    jQuery('#' + form.id).parents('[data-wa-scroll-page-name]').length != 0;
                  form.tracked = { start: false, abandon: false, complete: false };
                  wa.formsArray[i] = form;
                }
                wa.formTimer = setInterval(function () {
                  wa.trackForms();
                }, 100);
              }
            }
          };
          wa.trackForms = function () {
            if (typeof jQuery != 'undefined') {
              wa.windowWidth =
                window.innerWidth ||
                document.body.clientWidth ||
                document.documentElement.clientWidth;
              for (var i = 0; i < wa.formsArray.length; i++) {
                wa.form = {};
                wa.form[wa.formsArray[i].name] = wa.formsArray[i];
                wa.form[wa.formsArray[i].name].active =
                  jQuery('#' + wa.form[wa.formsArray[i].name].id).is(' :visible') &&
                  wa.windowWidth -
                    document.getElementById(wa.form[wa.formsArray[i].name].id).parentNode
                      .offsetLeft <=
                    wa.windowWidth;
                if (
                  wa.formsArray[i].active &&
                  !wa.formsArray[i].tracked.start &&
                  !wa.formsArray[i].section
                )
                  wa.formAnalysis(
                    {
                      name: wa.form[wa.formsArray[i].name].name,
                      id: wa.form[wa.formsArray[i].name].id,
                      event: 'start',
                    },
                    true
                  );
                if (
                  !wa.form[wa.formsArray[i].name].active &&
                  wa.form[wa.formsArray[i].name].tracked.start &&
                  !wa.form[wa.formsArray[i].name].tracked.abandon
                ) {
                  wa.lastChanged = wa.lastChanged ? wa.lastChanged : 'no data entered';
                  if (!wa.isNotAbandon && !wa.form[wa.formsArray[i].name].tracked.abandon) {
                    wa.formAnalysis(
                      {
                        name: wa.form[wa.formsArray[i].name].name,
                        id: wa.form[wa.formsArray[i].name].id,
                        event: 'abandon',
                      },
                      true
                    );
                    if (typeof wa.formPage != 'undefined' && wa.formPage.length !== 0)
                      wa.processDynamicForms(wa.formPage);
                  } else if (!wa.form[wa.formsArray[i].name].tracked.complete) {
                    wa.formAnalysis(
                      {
                        name: wa.form[wa.formsArray[i].name].name,
                        id: wa.form[wa.formsArray[i].name].id,
                        event: 'complete',
                      },
                      true
                    );
                    if (typeof wa.formPage != 'undefined' && wa.formPage.length !== 0)
                      wa.processDynamicForms(wa.formPage);
                  }
                }
              }
            }
          };
          wa.formAnalysis = function (pv_formData, pv_sendAsLink) {
            if (typeof jQuery != 'undefined') {
              wa.waAnalysis = '';
              var delimiter = ':';
              var waFormId = pv_formData.id;
              var waFormName = pv_formData.name
                ? pv_formData.name
                : jQuery('#' + waFormId).attr('data-wa-name')
                ? jQuery('#' + waFormId).attr('data-wa-name')
                : waFormId;
              wa.waAnalysis = delimiter + waFormName;
              switch (pv_formData.event) {
                case 'start':
                  jQuery('#' + waFormId + ' :input, select').on('blur', function (e) {
                    wa.lastChanged = this.id;
                  });
                  wa.form[waFormName].tracked.start = true;
                  wa.form[waFormName].tracked.abandon = false;
                  wa.isNotAbandon = false;
                  window.onbeforeunload = function (e) {
                    if (jQuery('#' + waFormId).attr('data-wa-ignore-form-abandon') != 'true')
                      if (!wa.isNotAbandon && !wa.form[waFormName].tracked.abandon)
                        wa.formAnalysis(
                          { id: waFormId, name: waFormName, event: 'abandon' },
                          true
                        );
                    if (wa.isNotAbandon && !wa.form[waFormName].tracked.complete)
                      wa.formAnalysis({ id: waFormId, name: waFormName, event: 'complete' }, true);
                  };
                  jQuery('#submit').on('mousedown tap keydown', function () {
                    var valid = wa.html5Validation(waFormId);
                    valid
                      ? wa.formAnalysis(
                          { id: waFormId, name: waFormName, event: 'complete' },
                          true
                        )
                      : '';
                  });
                  break;
                case 'abandon':
                  wa.waAnalysis += wa.lastChanged
                    ? delimiter + wa.lastChanged
                    : delimiter + 'no data entered';
                  wa.form[waFormName].tracked.abandon = true;
                  wa.lastChanged = '';
                  clearInterval(wa.formTimer);
                  break;
                case 'complete':
                  if (
                    waFormName.indexOf('mobile') === -1 &&
                    typeof grecaptcha === 'object' &&
                    grecaptcha.getResponse() === ''
                  )
                    return;
                  wa.form[waFormName].canAbandon = false;
                  wa.form[waFormName].tracked.complete = true;
                  wa.isNotAbandon = true;
                  clearInterval(wa.formTimer);
                  if (typeof wa.formPage != 'undefined' && wa.formPage.length !== 0)
                    wa.processDynamicForms(wa.formPage);
                  break;
                default:
                  break;
              }
              if (pv_sendAsLink) {
                var trackData = {
                  linkName: 'formAnalysis:' + pv_formData.event,
                  formAnalysis: pv_formData.event + wa.waAnalysis,
                };
                if (pv_formData.event === 'complete' && checkForValidLeadFormFunnelNames()) {
                  var product = wa.funnelName.split('-')[0];
                  var theEventList = product + 'leadformvalidated,leadformvalidated';
                  trackData.eventList = theEventList;
                }
                var waFormDataName = waFormName.replace(/\-/g, '_');
                wa.trackLinkPlus(this, trackData);
              }
            }
          };
          wa.html5Validation = function (pv_formId) {
            var retVal = false;
            if (typeof jQuery != 'undefined') {
              var inputs = jQuery('#' + pv_formId).find('input');
              for (var i = 0; i < inputs.length; i++)
                if (jQuery(inputs[i]).is(':required') && inputs[i].willValidate)
                  if (jQuery(inputs[i]).is(':valid')) retVal = true;
            }
            return retVal;
          };
          wa.appendString = function (pv_appendTo, pv_toAppend) {
            var returnVal = pv_appendTo ? pv_appendTo + ',' + pv_toAppend : pv_toAppend;
            return returnVal;
          };
          wa.errorMsg = function (pv_error) {
            var waError = pv_error;
            var linkData = { linkName: 'errorMsg:' + pv_error, errorMsg: waError };
            this.trackLinkPlus(this, linkData);
          };
          wa.processEvergageQueue = function (evergageQueue) {
            if (!wa.utils.isArray(evergageQueue)) return;
            if (wa.utils.isEmpty(evergageQueue)) return;
            var i = evergageQueue.length;
            while (i > 0) {
              wa.trackLinkPlus(true, evergageQueue.shift());
              i--;
            }
          };
          wa.loadJQueryListeners = function (pv_pageData) {
            if (typeof jQuery != 'undefined') {
              try {
                jQuery(document).ready(function () {
                  wa.buildTrackSection();
                  if (
                    typeof pv_pageData.formPage != 'undefined' &&
                    pv_pageData.formPage.length !== 0
                  ) {
                    wa.formPage = pv_pageData.formPage;
                    wa.processDynamicForms(wa.formPage);
                  } else wa.buildFormAnalysis();
                });
              } catch (e) {
                console.log('jQuery wa.buildTrackSection() / data-wa-form-analysis error: ' + e);
              }
              try {
                jQuery('body').on('mousedown tap keydown', '[data-wa-link]', function (e) {
                  var isTrackable = !(e.type === 'keydown' && e.keyCode != 13);
                  if (isTrackable) {
                    var linkHref = jQuery(this).attr('href');
                    var linkType = (function (p) {
                      var retVal = 'o';
                      if (p) {
                        var dlExtensions = /(\.)(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$/gi;
                        retVal = dlExtensions.test(p) ? 'd' : 'o';
                      }
                      return retVal;
                    })(linkHref);
                    sj.trackExternalLinks = false;
                    var trackData = {
                      linkName: jQuery(this).attr('data-wa-link'),
                      eventList: jQuery(this).attr('data-wa-event'),
                      aryProducts: [{ prod: jQuery(this).attr('data-wa-product') }],
                      linkType: linkType,
                    };
                    wa.trackLinkPlus(jQuery(this), trackData);
                  }
                });
              } catch (e) {
                console.log('jQuery data-wa-link error: ' + e);
              }
              try {
                jQuery('[data-wa-link-once]').one('mousedown tap keydown', function (e) {
                  var trackData = { linkName: jQuery(this).attr('data-wa-link-once') };
                  wa.trackLinkPlus(jQuery(this), trackData);
                });
              } catch (e) {
                console.log('jQuery data-wa-link-once error: ' + e);
              }
              try {
                jQuery('[data-wa-hover-link]')
                  .on('mouseenter', function () {
                    wa.hoverCount = 0;
                    wa.sendCall = false;
                    var trackData = {
                      linkName: jQuery(this).attr('data-wa-hover-link'),
                      eventList: jQuery(this).attr('data-wa-event'),
                    };
                    wa.count = function () {
                      wa.hoverCount += 1;
                    };
                    wa.loop = function () {
                      if (wa.hoverCount < 10) wa.count();
                      else if (!wa.sendCall) {
                        wa.trackLinkPlus(jQuery(this), trackData);
                        wa.sendCall = true;
                      }
                    };
                    wa.hoverInterval = setInterval(wa.loop, 100);
                  })
                  .on('mouseleave', function () {
                    clearInterval(wa.hoverInterval);
                  });
              } catch (e) {
                console.log('jQuery data-wa-hover-link error: ' + e);
              }
            }
            try {
              var viewPortCounter = 0;
              var trackMe = 'no';
              function checkVisible (elm, evale) {
                try {
                  var evale;
                  evale = evale || 'object visible';
                  var viewportHeight = jQuery(window).height(),
                    scrolltop = jQuery(window).scrollTop(),
                    y = jQuery(elm).offset().top,
                    elementHeight = jQuery(elm).height();
                  if (evale == 'object visible')
                    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
                  if (evale == 'above') return y < viewportHeight + scrolltop;
                } catch (err) {}
              }
              var checkHost = window.location.host;
              var checkPath = window.location.pathname;
              var checkSearch = window.location.search;
              if (checkHost.indexOf('proconnect.intuit.com') > -1)
                if (
                  (checkPath == '/practice-management/' ||
                    checkPath.indexOf('/lacerte/hosting/') > -1 ||
                    checkPath.indexOf('/proseries/hosting/') > -1 ||
                    checkPath.indexOf('/pay-by-refund/') > -1 ||
                    checkPath.indexOf('/esignature/') > -1 ||
                    checkPath.indexOf('/desktop-hosting/') > -1 ||
                    checkPath.indexOf('/tax/proseries/refund-transfer/') > -1 ||
                    checkPath.indexOf('/tax/proseries/refund-transfer-hp/') > -1 ||
                    checkPath.indexOf('/lacerte/integrations/') > -1 ||
                    checkPath.indexOf('/workflow-tools/tax-software-bundles/lacerte/') > -1 ||
                    checkPath.indexOf('/lacerte/cpa/') > -1 ||
                    checkPath.indexOf('/audit-assistance/') > -1) &&
                  checkSearch.indexOf('leadid') == -1
                )
                  if (typeof jQuery != 'undefined')
                    jQuery(window).on('scroll', function () {
                      if (viewPortCounter == 0 && checkVisible(jQuery('[data-class=Forms]'))) {
                        viewPortCounter++;
                        trackMe = 'yes';
                      }
                      if (trackMe == 'yes') {
                        var thePageName = wa.pageName + '/eval';
                        window.wa.pageNameOverride = thePageName;
                        if (jQuery('#wa_funnel_name')) {
                          theFunnelName = jQuery('#wa_funnel_name').val();
                          window.wa.funnelName = theFunnelName;
                        }
                        if (jQuery('#wa_event_list'))
                          theEventList = jQuery('#wa_event_list').val();
                        wa.trackPage({
                          pageNameOverride: thePageName,
                          funnelName: theFunnelName,
                          eventList: theEventList,
                        });
                        trackMe = 'no';
                      }
                    });
              if (
                checkHost.indexOf('accountants-community') > -1 ||
                checkPath.indexOf('/community/') > -1
              )
                if (typeof jQuery != 'undefined')
                  jQuery(window).on('scroll', function () {
                    if (viewPortCounter == 0 && checkPath.indexOf('/articles/') > -1)
                      if (checkVisible(jQuery('.voting-container'))) {
                        viewPortCounter++;
                        trackMe = 'yes';
                      }
                    if (
                      viewPortCounter == 0 &&
                      checkPath.indexOf('/community/help-articles/help') > -1 &&
                      checkPath.indexOf('/00/') > -1
                    )
                      if (checkVisible(jQuery('div[class*=voteContainer]'))) {
                        viewPortCounter++;
                        trackMe = 'yes';
                      }
                    if (
                      viewPortCounter == 0 &&
                      checkPath.indexOf('/questions') > -1 &&
                      window.wa.custSptContentTitle &&
                      jQuery("a[href='/agent_dashboard']").length == 0
                    )
                      if (checkVisible(jQuery('#more-actions'))) {
                        viewPortCounter++;
                        trackMe = 'yes';
                      }
                    if (
                      viewPortCounter == 0 &&
                      checkPath.indexOf('/community/') > -1 &&
                      window.location.pathname.indexOf('/discussions/') > -1 &&
                      checkPath.indexOf('/00/') > -1
                    )
                      if (checkVisible(jQuery('div[class*=proconnect-community-footer]'))) {
                        viewPortCounter++;
                        trackMe = 'yes';
                      }
                    if (trackMe == 'yes') {
                      sj.trackExternalLinks = false;
                      var trackData = { linkName: 'reached-end-of-page', linkType: 'o' };
                      wa.trackLinkPlus(jQuery(this), trackData);
                      trackMe = 'no';
                    }
                  });
            } catch (e) {
              console.log('jQuery checkVisible error: ' + e);
            }
          };
          wa.initialize(window.trackData);
        });
      },
      3366336,
      [3152540],
      267881,
      [511633]
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window.wa = window.wa || {};
        window.wa.loaded = false;
        wa.wait = setInterval(function () {
          if (window.wa.loaded) {
            Bootstrapper.ensEvent.trigger('Load Appmeasurement');
            clearInterval(wa.wait);
          }
        }, 100);
      },
      1089777,
      [1089776],
      348705,
      [348712]
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        Bootstrapper.ensEvent.add(['Load Appmeasurement'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var wa = window.wa || {};
          wa.event = {
            isTracked: 'video_start',
            is25: 'video_25',
            is50: 'video_50',
            is75: 'video_75',
            is100: 'video_complete',
          };
          wa.ytListeners = [];
          wa.buildIframes = function () {
            var yt_iframes = [];
            var iframes = document.getElementsByTagName('iframe');
            for (var i = 0; i < iframes.length; i++)
              if (/youtube.com\/embed/.test(iframes[i].src)) {
                if (iframes[i].src.indexOf('enablejsapi=') === -1)
                  iframes[i].src +=
                    (iframes[i].src.indexOf('?') === -1 ? '?' : '&') + 'enablejsapi=1';
                yt_iframes.push(iframes[i]);
                var iframe_id = iframes[i]['src'].substring(
                  iframes[i]['src'].indexOf('embed') + 'embed/'.length,
                  iframes[i]['src'].indexOf('?')
                );
                wa[iframe_id] = { type: 'yt' };
                wa[iframe_id].isTracked = wa[iframe_id].is25 = wa[iframe_id].is50 = wa[
                  iframe_id
                ].is75 = wa[iframe_id].is100 = false;
                wa[iframe_id].is10 = wa[iframe_id].is20 = wa[iframe_id].is30 = wa[
                  iframe_id
                ].is40 = wa[iframe_id].is60 = wa[iframe_id].is70 = wa[iframe_id].is80 = wa[
                  iframe_id
                ].is90 = false;
              }
            return yt_iframes;
          };
          wa.loadPlayer = function (pv_ytIframes) {
            for (var i = 0; i < pv_ytIframes.length; i++) {
              wa.ytListeners.push(
                new YT.Player(pv_ytIframes[i], {
                  events: { onStateChange: wa.onPlayerStateChange, onError: wa.onPlayerError },
                })
              );
              wa.updateInterval = setInterval(wa.updatePlayerData, 500);
            }
          };
          window.onYouTubeIframeAPIReady = function () {
            var iframeCheckCount = 0;
            var iframeTime = setInterval(function () {
              var yt_iframes = wa.buildIframes();
              iframeCheckCount = iframeCheckCount + 1 || 1;
              var iframeMaxIntervals = 20;
              if (yt_iframes.length > 0 || iframeCheckCount > iframeMaxIntervals) {
                wa.loadPlayer(yt_iframes);
                clearInterval(iframeTime);
              }
            }, 500);
          };
          wa.onPlayerStateChange = function (e) {
            switch (e.data) {
              case 0:
                wa.clearInterval = true;
                wa.videoComplete = true;
                break;
              case 1:
                for (keys in e['target'])
                  if (e['target'][keys] != null && e['target'][keys]['duration'])
                    wa.playerKey = e['target'][keys];
                wa.videoComplete
                  ? (wa.updateInterval = setInterval(wa.updatePlayerData, 500))
                  : '';
                wa.clearInterval = false;
                wa.videoComplete = false;
                break;
              default:
                break;
            }
          };
          wa.updatePlayerData = function (e) {
            if (wa.clearInterval) {
              clearInterval(wa.updateInterval);
              wa.clearVideoVars(wa.playerKey.videoData.video_id);
              return false;
            }
            if (typeof wa.playerKey != 'undefined') {
              var t =
                (wa.playerKey.duration - wa.playerKey.currentTime) / wa.playerKey.duration <= 0.05
                  ? 100
                  : (
                      Math.floor((wa.playerKey.currentTime / wa.playerKey.duration) * 20) / 20
                    ).toFixed(2) * 100;
              wa.trackVideo10 = wa.trackVideo10 ? wa.trackVideo10 : wa.playerKey.duration >= 300;
              wa.videoId = wa.playerKey.videoData.video_id;
              wa.videoTitle = wa.playerKey.videoData.title.replace(/\s+/g, '');
              wa[wa.videoId]['string'] =
                'ytid:' +
                wa.videoId +
                '|' +
                Math.round(wa.playerKey.duration) +
                '|' +
                wa.videoTitle;
              if (wa.trackVideo10)
                !(t % 25)
                  ? wa.trackPlayer(wa.videoId, t)
                  : !(t % 10)
                  ? wa.trackTenths(wa.videoId, t)
                  : '';
              else !(t % 25) ? wa.trackPlayer(wa.videoId, t) : '';
            }
          };
          wa.clearVideoVars = function (pv_videoId) {
            wa[pv_videoId].isTracked = wa[pv_videoId].is25 = wa[pv_videoId].is50 = wa[
              pv_videoId
            ].is75 = wa[pv_videoId].is100 = false;
          };
          wa.onPlayerError = function (e) {
            console.info('YT iFrame Player Error: ' + e.data);
          };
          window._wq = window._wq || [];
          _wq.push({
            _all: function (video) {
              var videoId = video.hashedId();
              wa[videoId] = {
                type: 'ws',
                name: video.name(),
                duration: video.duration(),
                id: videoId,
              };
              wa[videoId].string =
                'wsid:' +
                videoId +
                '|' +
                Math.round(wa[videoId]['duration']) +
                '|' +
                wa[videoId]['name'].replace(/\s+/g, '');
              wa[videoId].isTracked = wa[videoId].is25 = wa[videoId].is50 = wa[videoId].is75 = wa[
                videoId
              ].is100 = false;
              wa[videoId].is10 = wa[videoId].is20 = wa[videoId].is30 = wa[videoId].is40 = wa[
                videoId
              ].is60 = wa[videoId].is70 = wa[videoId].is80 = wa[videoId].is90 = false;
              video.bind('timechange', function (t) {
                wa[videoId].time =
                  (wa[videoId].duration - t) / wa[videoId].duration <= 0.05
                    ? 100
                    : (Math.floor((t / wa[videoId].duration) * 20) / 20).toFixed(2) * 100;
                wa.trackVideo10 = wa.trackVideo10 ? wa.trackVideo10 : wa[videoId].duration >= 300;
                if (wa.trackVideo10)
                  !(wa[videoId].time % 25)
                    ? wa.trackPlayer(wa[videoId].id, wa[videoId].time)
                    : !(wa[videoId].time % 10)
                    ? wa.trackTenths(wa[videoId].id, wa[videoId].time)
                    : '';
                else
                  !(wa[videoId].time % 25) ? wa.trackPlayer(wa[videoId].id, wa[videoId].time) : '';
              });
            },
          });
          wa.trackPlayer = function (pv_id, pv_t) {
            var videoAction = 'is' + pv_t.toString();
            var videoString = wa[pv_id]['string'];
            if (!wa[pv_id].isTracked && pv_t === 0) {
              wa.videoTrack = 'start|' + wa[pv_id].string;
              wa.trackLinkPlus(true, {
                videoEvar: videoString,
                videoProp: wa.videoTrack,
                eventList: wa.event.isTracked,
                linkName: 'body_video-start',
              });
              wa[pv_id].isTracked = true;
            }
            if (!wa[pv_id][videoAction] && pv_t !== 0) {
              var action = pv_t == 100 ? 'complete' : pv_t.toString() + '%';
              wa.videoTrack = action + '|' + videoString;
              wa.trackLinkPlus(true, {
                videoEvar: videoString,
                videoProp: wa.videoTrack,
                eventList: wa['event'][videoAction],
                linkName: 'body_video-' + action,
              });
              wa[pv_id][videoAction] = true;
            }
          };
          wa.trackTenths = function (pv_id, pv_t) {
            var videoAction = 'is' + pv_t.toString();
            var videoString = wa[pv_id]['string'];
            if (!wa[pv_id][videoAction]) {
              var action = pv_t === 100 ? 'complete' : pv_t.toString() + '%';
              wa.videoTrack = action + '|' + videoString;
              wa.trackLinkPlus(true, {
                videoEvar: videoString,
                videoProp: wa.videoTrack,
                linkName: 'body_video-' + action,
              });
              wa[pv_id][videoAction] = true;
            }
          };
        });
      },
      1384089,
      [1089776],
      329166,
      [348712]
    );
  })();
}
