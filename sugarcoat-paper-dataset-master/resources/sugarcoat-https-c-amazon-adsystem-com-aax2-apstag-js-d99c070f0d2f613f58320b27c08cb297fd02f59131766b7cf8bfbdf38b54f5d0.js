{
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
  const $___stub_2b47892348e4e4b9 = {};
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
  })($___stub_2b47892348e4e4b9);
  (function () {
    !(function (t) {
      var e = {};
      function n (r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
      }
      (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (n.t = function (t, e) {
          if ((1 & e && (t = n(t)), 8 & e)) return t;
          if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
          var r = Object.create(null);
          if (
            (n.r(r),
            Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
            2 & e && 'string' != typeof t)
          )
            for (var i in t)
              n.d(
                r,
                i,
                function (e) {
                  return t[e];
                }.bind(null, i)
              );
          return r;
        }),
        (n.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return n.d(e, 'a', e), e;
        }),
        (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ''),
        n((n.s = 25));
    })([
      function (t, e, n) {
        'use strict';
        function r (t) {
          return (r =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function i (t) {
          try {
            var e = parseInt(t, 10);
            if (!isNaN(e)) return !(e <= 0) && (100 <= e || 100 * Math.random() <= e);
          } catch (t) {}
          return !1;
        }
        function c (t, e) {
          var n = parseInt(e, 10),
            r = [],
            i = 0;
          if (!u(t)) return r;
          if (isNaN(n) || n < 1) return [t];
          for (var c = t.length; i < c; ) {
            var o = i;
            (i += n), r.push(t.slice(o, i));
          }
          return r;
        }
        function o () {
          return ''.concat(Math.round(1000000000000 * Math.random())).concat(Date.now());
        }
        function a (t) {
          for (
            var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              n = new Array(t),
              r = 0;
            r < t;
            r++
          )
            n[r] = e[Math.floor(Math.random() * e.length)];
          return n.join('');
        }
        function s (t) {
          return 'object' === r(t) && null !== t;
        }
        function u (t) {
          return '[object Array]' === Object.prototype.toString.call(t);
        }
        function d (t, e) {
          return s(t) && void 0 !== t[e] && '' !== t[e];
        }
        function f () {
          const $___old_9d7c2bd883408acc = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_9d7c2bd883408acc)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_b317e19f866a2da7.localStorage
              ));
            return function () {
              var t = 'amzn_lsTest';
              try {
                return window.localStorage.setItem(t, t), window.localStorage.removeItem(t), !0;
              } catch (t) {
                return !1;
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_9d7c2bd883408acc)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_9d7c2bd883408acc));
          }
        }
        function l (t, e) {
          return -1 !== t.indexOf(e);
        }
        function b () {
          return document.cookie.split('; ').map(function (t) {
            return t.split('=');
          });
        }
        function p (t) {
          var e = new Date();
          return e.setDate(e.getDate() + t), e.toUTCString();
        }
        function m (t) {
          try {
            var e =
                t.innerWidth ||
                t.document.documentElement.clientWidth ||
                t.document.body.clientWidth,
              n =
                t.innerHeight ||
                t.document.documentElement.clientHeight ||
                t.document.body.clientHeight;
            return ''.concat(e, 'x').concat(n);
          } catch (t) {}
          return 'x';
        }
        function g (t, e) {
          return (
            decodeURIComponent(t).split('?')[0].split('#')[0] ===
            decodeURIComponent(e).split('?')[0].split('#')[0]
          );
        }
        function h (t) {
          var e = Object.keys(t);
          return (
            e.filter(function (e) {
              return t[e];
            }).length === e.length
          );
        }
        n.d(e, 'n', function () {
          return i;
        }),
          n.d(e, 'c', function () {
            return c;
          }),
          n.d(e, 'e', function () {
            return o;
          }),
          n.d(e, 'f', function () {
            return a;
          }),
          n.d(e, 'l', function () {
            return s;
          }),
          n.d(e, 'k', function () {
            return u;
          }),
          n.d(e, 'm', function () {
            return d;
          }),
          n.d(e, 'i', function () {
            return f;
          }),
          n.d(e, 'j', function () {
            return l;
          }),
          n.d(e, 'd', function () {
            return b;
          }),
          n.d(e, 'g', function () {
            return p;
          }),
          n.d(e, 'h', function () {
            return m;
          }),
          n.d(e, 'b', function () {
            return g;
          }),
          n.d(e, 'a', function () {
            return h;
          });
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'b', function () {
          return d;
        }),
          n.d(e, 'c', function () {
            return f;
          }),
          n.d(e, 'd', function () {
            return l;
          }),
          n.d(e, 'a', function () {
            return b;
          });
        var r = n(0),
          i = n(4),
          c = n(2),
          o = n(5),
          a = n(7),
          s = Object(r.n)(10),
          u = [];
        function d (t, e) {
          var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
          try {
            (n || Object(o.d)('errors')) && console.error(t);
            var r = {
              ts: Date.now(),
              url: encodeURIComponent(Object(a.f)(window)),
              r: encodeURIComponent(Object(a.g)(window)),
              _type: 'apsLibraryError',
              e: { et: t.name, el: e, msg: t.message },
            };
            return (
              u.push(r), c.a.dispatch({ type: 'LOG_ERROR', error: r }), !!s && (Object(i.b)(r), !0)
            );
          } catch (t) {
            console.error(t);
          }
          return !1;
        }
        function f (t, e, n) {
          var r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
          return d(
            {
              name: e,
              message: ''.concat(t, " was of type '").concat(e, "' instead of '").concat(n, "'"),
            },
            'TypeError-'.concat(t),
            r
          );
        }
        function l (t, e) {
          return function () {
            try {
              return t.apply(null, arguments);
            } catch (t) {
              return d(t, e, !0), null;
            }
          };
        }
        function b (t) {
          ((1 < arguments.length && void 0 !== arguments[1] && arguments[1]) ||
            Object(o.d)('errors')) &&
            console.warn(t);
        }
        !0 === Object(o.c)('exposeErrors') && (window.apstagErrors = u);
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return b;
        });
        var r,
          i = n(3),
          c = n(0),
          o = n(5);
        function a (t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function s (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? a(Object(n), !0).forEach(function (e) {
                  u(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        }
        function u (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function d (t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return f(t);
            })(t) ||
            (function (t) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ('string' == typeof t) return f(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  'Object' === n && t.constructor && (n = t.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(t)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? f(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function f (t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function l () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    AAXReqs: [],
                    aaxViewabilityEnabled: !1,
                    bidConfigs: {},
                    bidReqs: {},
                    bsPixels: {},
                    cfg: {
                      v: -1,
                      CSM_JS: '//c.amazon-adsystem.com/aax2/csm.js.gz',
                      CSM_RTB_COMMUNICATOR_JS:
                        '//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js',
                      DEBUG_APP_HTML: '//c.amazon-adsystem.com/aax2/debugApp.html',
                      DEBUG_APP_HTML_V2: '//c.amazon-adsystem.com/aax2/debug_app_v2.html',
                      DEFAULT_TIMEOUT: 2000,
                      DTB_PATH: '/e/dtb',
                      TEST_PATH_FREQUENCY: 0,
                      TEST_BID_ENDPOINT: null,
                      TEST_PATH_LATENCY_SAMPLE_RATE: null,
                      PIXEL_PATH: '/x/px/',
                      LATENCY_SAMPLING_RATE: 1,
                      COOKIE_MATCH_DELAY: 0,
                      MAX_SLOTS_PER_REQUEST: 1,
                      CF_ROUTING_RATE: 100,
                      SLOT_RENDER_SAMPLING_RATE: 1,
                      FEATURE_SAMPLING_RATE: 1,
                      CONFIG_CALL_ENABLED: !1,
                      LIB_CONFIG_PATH: '/cdn/prod/config',
                    },
                    cmpFired: !1,
                    config: { pubID: '' },
                    displayAdServer: {
                      noBidSlotIDs: [],
                      shouldSampleRender: !1,
                      slotRenderEndedSet: !1,
                    },
                    errors: [],
                    eventLog: [],
                    experiments: {},
                    gamSlotFetchLog: [],
                    gamSlotRenderPixel: { aaxReqOffset: 0, gamSlotFetchLogOffset: 0 },
                    gdpr: null,
                    gdprQue: [],
                    hosts: {
                      DEFAULT_AAX_BID_HOST: 'aax.amazon-adsystem.com',
                      DEFAULT_AAX_PIXEL_HOST: 'aax.amazon-adsystem.com',
                    },
                    libraryLoadCallLatency: 0,
                    Q: [],
                    slotBids: {},
                    slotIdMap: [],
                    sync917: !1,
                    targetingKeys: {},
                  },
            e = 1 < arguments.length ? arguments[1] : void 0;
          return {
            AAXReqs: (function (t, e) {
              switch (e.type) {
                case 'RECORD_AAX_REQUEST':
                  return [].concat(d(t), [e.data]);
                case 'RECORD_AAX_REQ_PROP':
                  return t.map(function (t) {
                    return (t = s({}, t)).bidReqID === e.bidReqID && (t[e.key] = e.value), t;
                  });
                default:
                  return d(t);
              }
            })(t.AAXReqs, e),
            aaxViewabilityEnabled: (function (t, e) {
              switch (e.type) {
                case 'SET_VIEWABILITY':
                  return e.viewability;
                default:
                  return t;
              }
            })(t.aaxViewabilityEnabled, e),
            bidConfigs: (function (t, e) {
              switch (e.type) {
                case 'RECORD_ORIGINAL_BID_CONFIG':
                  return s(s({}, t), {}, u({}, e.bidConfig.bidReqID, e.bidConfig));
                default:
                  return s({}, t);
              }
            })(t.bidConfigs, e),
            bidReqs: (function (t, e) {
              var n;
              switch (e.type) {
                case 'ADD_CHUNKED_REQUESTS':
                  return s(
                    s({}, t),
                    {},
                    u({}, e.fid, s(s({}, t[e.fid]), {}, { networkReqs: new Array(e.numChunks) }))
                  );
                case 'NEW_FETCH_BID_REQUEST':
                  return s(
                    s({}, t),
                    {},
                    u({}, e.fid, { pto: e.pto, hasCallbackExecuted: !1, networkReqs: [] })
                  );
                case 'RECORD_CALLBACK':
                  return s(
                    s({}, t),
                    {},
                    u({}, e.fid, s(s({}, t[e.fid]), {}, { hasCallbackExecuted: !0 }))
                  );
                case 'RECORD_NETWORK_EXCHANGE':
                  var r = t[e.fid].networkReqs;
                  return (
                    (r[e.networkID] = s(
                      s({}, r[e.networkID]),
                      {},
                      (u((n = {}), ''.concat(e.exchangeType, 'Time'), e.timestamp),
                      u(n, 'inFlight', 'request' === e.exchangeType),
                      n)
                    )),
                    s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, { networkReqs: r })))
                  );
                case 'RECORD_TIMEOUT':
                  return s(
                    s({}, t),
                    {},
                    u(
                      {},
                      e.fid,
                      s(
                        s({}, t[e.fid]),
                        {},
                        {
                          networkReqs: t[e.fid].networkReqs.map(function (t) {
                            return t.inFlight ? s(s({}, t), {}, { timeOut: e.timeOut }) : t;
                          }),
                        }
                      )
                    )
                  );
                default:
                  return s({}, t);
              }
            })(t.bidReqs, e),
            bsPixels: (function (t, e) {
              switch (e.type) {
                case 'RECORD_BID_INFO_SENT':
                  return s(s({}, t), {}, u({}, e.bidInfo.iid, e.bidInfo.state));
                default:
                  return s({}, t);
              }
            })(t.bsPixels, e),
            cfg: (function (t, e) {
              switch (e.type) {
                case 'SET_CFG':
                  return s(s({}, t), e.cfg);
                default:
                  return s({}, t);
              }
            })(t.cfg, e),
            cmpFired: (function (t, e) {
              switch (e.type) {
                case 'CMP_FIRED':
                  return !0;
                default:
                  return t;
              }
            })(t.cmpFired, e),
            config: (function (t, e) {
              switch (e.type) {
                case 'SET_CONFIG':
                  return s(
                    s({}, e.config),
                    {},
                    {
                      gdpr: s({ cmpTimeout: e.defaultCmpTimeout }, e.config.gdpr),
                      isSelfServePub: void 0 !== e.config.pubID && 5 <= e.config.pubID.length,
                    }
                  );
                default:
                  return s({}, t);
              }
            })(t.config, e),
            displayAdServer: (function (t, e) {
              switch (e.type) {
                case 'SLOT_RENDER_ENDED_SET':
                  return s(s({}, t), {}, { slotRenderEndedSet: !0 });
                case 'NO_BID_ON_ADSERVER_SLOTS':
                  return s(s({}, t), {}, { noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs) });
                case 'REQUESTED_BID_FOR_ADSERVER_SLOTS':
                  return s(
                    s({}, t),
                    {},
                    {
                      noBidSlotIDs: t.noBidSlotIDs.filter(function (t) {
                        return !Object(c.j)(e.slotIDs, t);
                      }),
                    }
                  );
                case 'SHOULD_SAMPLE_SLOT_RENDER':
                  return s(s({}, t), {}, { shouldSampleRender: e.value });
                default:
                  return s(s({}, t), {}, { noBidSlotIDs: d(t.noBidSlotIDs) });
              }
            })(t.displayAdServer, e),
            errors: (function (t, e) {
              switch (e.type) {
                case 'LOG_ERROR':
                  return [].concat(d(t), [s({}, e.error)]);
                default:
                  return d(t);
              }
            })(t.errors, e),
            eventLog: (function (t, e) {
              switch (e.type) {
                case 'LOG_EVENT':
                  return [].concat(d(t), [s({}, e.event)]);
                default:
                  return d(t);
              }
            })(t.eventLog, e),
            experiments: (function (t, e) {
              switch (e.type) {
                case 'SHOULD_CHUNK_REQUESTS':
                  return s({ chunkRequests: !0 === t.shouldSampleLatency && e.value }, t);
                case 'SHOULD_CF_ROUTE':
                  return s(s({}, t), {}, { shouldCFRoute: e.value });
                case 'SHOULD_SAMPLE_LATENCY':
                  return s(s({}, t), {}, { shouldSampleLatency: e.value });
                case 'SHOULD_SAMPLE_FEATURES':
                  return s(s({}, t), {}, { shouldSampleFeatures: e.value });
                case 'SHOULD_USE_TEST_BID_ENDPOINT':
                  return s(s({}, t), {}, { shouldUseTestBidEndpoint: e.value });
                default:
                  return s({}, t);
              }
            })(t.experiments, e),
            gamSlotFetchLog: (function (t, e) {
              switch (e.type) {
                case 'LOG_GAM_EVENT':
                  return [].concat(d(t), [s({}, e.event)]);
                default:
                  return d(t);
              }
            })(t.gamSlotFetchLog, e),
            gamSlotRenderPixel: (function (t, e) {
              switch (e.type) {
                case 'UPDATE_RENDER_OFFSETS':
                  return s(s({}, t), e.offsets);
                default:
                  return s({}, t);
              }
            })(t.gamSlotRenderPixel, e),
            gdpr: (function (t, e) {
              switch (e.type) {
                case 'SET_GDPR_CONFIG':
                  return null === e.config ? null : s({}, e.config);
                default:
                  return null === t ? t : s({}, t);
              }
            })(t.gdpr, e),
            gdprQue: (function (t, e) {
              switch (e.type) {
                case 'ADD_GDPR_QUE_ITEM':
                  return [].concat(d(t), [e.func]);
                case 'CLEAR_GDPR_QUE':
                  return [];
                default:
                  return d(t);
              }
            })(t.gdprQue, e),
            hosts: (function (t, e) {
              switch (e.type) {
                case 'SET_HOST':
                  return s(s({}, t), {}, u({}, e.hostName, e.hostValue));
                default:
                  return s({}, t);
              }
            })(t.hosts, e),
            libraryLoadCallLatency: (function (t, e) {
              switch (e.type) {
                case 'RECORD_LIBRARY_LOAD_CALL_LATENCY':
                  return e.latency;
                default:
                  return t;
              }
            })(t.libraryLoadCallLatency, e),
            Q: (function (t, e) {
              switch (e.type) {
                case 'SET_Q':
                  return d(e.Q);
                default:
                  return d(t);
              }
            })(t.Q, e),
            slotBids: (function (t, e) {
              switch (e.type) {
                case 'BID_STATE_CHANGE':
                  return s(
                    s({}, t),
                    {},
                    u(
                      {},
                      e.slotID,
                      t[e.slotID].map(function (t) {
                        return (
                          t._targetingSetID === e._targetingSetID &&
                            ((t.bidState = e.bidState),
                            e.bidState === i.b.rendered
                              ? (t.timing.renderTime = e.ts)
                              : e.bidState === i.b.set && t.timing.setAtTimes.push(e.ts)),
                          t
                        );
                      })
                    )
                  );
                case 'UPDATE_BID_INFO_PROP':
                  return void 0 === t[e.slotID] ||
                    t[e.slotID].filter(function (t) {
                      return t.matchesBidCacheId(e.iid);
                    }).length < 1
                    ? s({}, t)
                    : s(
                        s({}, t),
                        {},
                        u(
                          {},
                          e.slotID,
                          t[e.slotID].map(function (t) {
                            return t.matchesBidCacheId(e.iid) && (t[e.key] = e.value), t;
                          })
                        )
                      );
                case 'UPDATE_SLOT_BIDS':
                  return s(
                    s({}, t),
                    e.bids.reduce(function (e, n) {
                      return (
                        Object(c.m)(e, n.slotID)
                          ? (e[n.slotID] = [].concat(d(e[n.slotID]), [n]))
                          : Object(c.m)(t, n.slotID)
                          ? (e[n.slotID] = [].concat(d(t[n.slotID]), [n]))
                          : (e[n.slotID] = [n]),
                        e
                      );
                    }, {})
                  );
                default:
                  return s({}, t);
              }
            })(t.slotBids, e),
            slotIdMap: (function (t, e) {
              switch (e.type) {
                case 'ADD_SLOT_ID':
                  return -1 === t.indexOf(e.slotID) ? [].concat(d(t), [e.slotID]) : t;
                default:
                  return t;
              }
            })(t.slotIdMap, e),
            sync917: (function (t, e) {
              switch (e.type) {
                case 'SET_SYNC_917':
                  return e.value;
                default:
                  return t;
              }
            })(t.sync917, e),
            targetingKeys: (function (t, e) {
              switch (e.type) {
                case 'UPDATE_SLOT_BIDS':
                  return s(
                    s({}, t),
                    e.bids.reduce(function (e, n) {
                      return (
                        Object(c.m)(t, n.slotID)
                          ? (e[n.slotID] = [].concat(
                              d(t[n.slotID]),
                              d(
                                (n.bidConfig.targeting ? n.bidConfig.targeting : i.g).filter(
                                  function (e) {
                                    return -1 === t[n.slotID].indexOf(e);
                                  }
                                )
                              )
                            ))
                          : (e[n.slotID] = n.bidConfig.targeting ? n.bidConfig.targeting : i.g),
                        e
                      );
                    }, {})
                  );
                default:
                  return s({}, t);
              }
            })(t.targetingKeys, e),
          };
        }
        var b = {
          getState: function () {
            return r;
          },
          dispatch: function (t) {
            r = l(r, t);
          },
        };
        Object(o.d)('redux') &&
          Object(c.i)() &&
          Object(c.m)(window, '__REDUX_DEVTOOLS_EXTENSION__') &&
          (b = window.__REDUX_DEVTOOLS_EXTENSION__(l)),
          b.dispatch({ type: 'NOOP' });
      },
      function (t, e, n) {
        const $___old_d73c25e409e4adb8 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'XMLHttpRequest'
          ),
          $___old_91529c98a71a91c7 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'XMLHttpRequest'
          );
        try {
          if ($___old_d73c25e409e4adb8)
            ({}.constructor.defineProperty(
              window,
              'XMLHttpRequest',
              $___stub_afd3abb015d4d981.XMLHttpRequest
            ));
          if ($___old_91529c98a71a91c7)
            ({}.constructor.defineProperty(
              window,
              'XMLHttpRequest',
              $___stub_afd3abb015d4d981.XMLHttpRequest
            ));
          return function () {
            'use strict';
            n.d(e, 'g', function () {
              return c;
            }),
              n.d(e, 'v', function () {
                return o;
              }),
              n.d(e, 'b', function () {
                return r;
              }),
              n.d(e, 'f', function () {
                return d;
              }),
              n.d(e, 'u', function () {
                return f;
              }),
              n.d(e, 'd', function () {
                return l;
              }),
              n.d(e, 'e', function () {
                return b;
              }),
              n.d(e, 'c', function () {
                return p;
              }),
              n.d(e, 'n', function () {
                return m;
              }),
              n.d(e, 'l', function () {
                return g;
              }),
              n.d(e, 'm', function () {
                return a;
              }),
              n.d(e, 'k', function () {
                return u;
              }),
              n.d(e, 't', function () {
                return v;
              }),
              n.d(e, 'h', function () {
                return h;
              }),
              n.d(e, 's', function () {
                return O;
              }),
              n.d(e, 'r', function () {
                return S;
              }),
              n.d(e, 'j', function () {
                return _;
              }),
              n.d(e, 'q', function () {
                return w;
              }),
              n.d(e, 'i', function () {
                return E;
              }),
              n.d(e, 'a', function () {
                return D;
              }),
              n.d(e, 'p', function () {
                return T;
              }),
              n.d(e, 'o', function () {
                return I;
              });
            var r,
              i,
              c = ['amznbid', 'amzniid', 'amznsz', 'amznp'],
              o = ['amznbid', 'amzniid', 'amznp', 'r_amznbid', 'r_amzniid', 'r_amznp'];
            ((i = r = r || {}).new = 'NEW'),
              (i.exposed = 'EXPOSED'),
              (i.set = 'SET'),
              (i.rendered = 'RENDERED');
            var a,
              s,
              u,
              d = 'apstagDebug',
              f = ['redux', 'fake_bids', 'verbose', 'console', 'console_v2', 'errors'],
              l = 'apstagDebugHeight',
              b = 'apstagDEBUG',
              p = 'apstagCfg',
              m = 0,
              g = 0;
            ((s = a = a || {}).amznbid = 'testBid'),
              (s.amzniid = 'testImpression'),
              (s.amznp = 'testP'),
              (s.crid = 'testCrid'),
              ((u || (u = {})).video = 'v');
            var h,
              y,
              O,
              j,
              v = ['amznbid', 'amznp'];
            ((y = h = h || {}).__apsid = 'ck'),
              (y.__aps_id_p = 'ckp'),
              (y.aps_ext_917 = 'st'),
              ((j = O = O || {}).noRequest = '0'),
              (j.bidInFlight = '1'),
              (j.noBid = '2');
            var S = '600',
              _ = '7.57.00',
              w = 'https://',
              E =
                'function' == typeof XMLHttpRequest &&
                void 0 !== new XMLHttpRequest().withCredentials,
              D = 'apstagLOADED',
              T = 13,
              I = 10000;
          }.apply(this, arguments);
        } finally {
          if ($___old_d73c25e409e4adb8)
            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_d73c25e409e4adb8));
          if ($___old_91529c98a71a91c7)
            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_91529c98a71a91c7));
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'd', function () {
          return l;
        }),
          n.d(e, 'c', function () {
            return O;
          }),
          n.d(e, 'b', function () {
            return v;
          }),
          n.d(e, 'a', function () {
            return S;
          }),
          n.d(e, 'e', function () {
            return _;
          });
        var r = n(3),
          i = n(2),
          c = n(5),
          o = n(0),
          a = n(1),
          s = n(7),
          u = [],
          d = !1,
          f = [];
        function l (t) {
          var e = new Image();
          return (e.src = t), f.push(e), e;
        }
        !0 === Object(c.c)('exposePixels') &&
          ((window.apstagPixelQueue = u), (window.apstagPixelsSent = f));
        var b,
          p = {
            'blockedBidders-fetchBids': [],
            'blockedBidders-init': [],
            adServer: [],
            appended: [],
            bidRender: [],
            bidRenderState: [],
            bidType: [],
            ccpa: [],
            creativeSize: [],
            deals: [],
            fetchBids: [],
            fifFlow: [],
            gdpr: [],
            idRemap: [],
            iframe: [],
            renderFootprint: [],
            schain: [],
            simplerGpt: [],
            slots: [],
            slotType: [],
            targeting: [],
            unusedDeal: [],
            useSafeFrames: [],
          },
          m = [],
          g = !1;
        function h () {
          g && (clearTimeout(b), (g = !1)),
            Object(o.c)(m, 5).forEach(function (t) {
              v({ _type: 'featureUsage', p: t, u: Object(s.f)(window) });
            }),
            (m = []);
        }
        function y () {
          g || ((g = !0), (b = setTimeout(h, 2000)));
        }
        function O (t, e) {
          try {
            return (
              !!i.a.getState().experiments.shouldSampleFeatures &&
              void 0 !== p[t] &&
              !Object(o.j)(p[t], e) &&
              (p[t].push(e), m.push({ cat: t, feat: e }), d && y(), !0)
            );
          } catch (t) {
            return Object(a.b)(t, 'sendFeaturePixel'), !1;
          }
        }
        function j (t) {
          try {
            if (d) {
              var e = (function () {
                try {
                  var t = i.a.getState(),
                    e = t.cfg.PIXEL_PATH,
                    n = t.hosts.DEFAULT_AAX_PIXEL_HOST,
                    o = Object(c.c)('pixelHost', n);
                  return ''.concat(r.q).concat(o).concat(e);
                } catch (t) {
                  return Object(a.b)(t, 'buildPixelBaseUrl'), '';
                }
              })();
              return (
                void 0 === t.bidId ? (e += 'p/PH/') : (e += ''.concat(t.bidId, '/')),
                l(
                  (e += (function (t) {
                    try {
                      t._tl = 'aps-tag';
                      var e = i.a.getState(),
                        n = null,
                        c = '';
                      Object(o.m)(e, 'config') &&
                        Object(o.m)(e.config, 'pubID') &&
                        '' !== e.config.pubID &&
                        ((n = e.config.isSelfServePub), (c = e.config.pubID)),
                        null !== n && (n ? ((t.src = r.r), (t.pubid = c)) : (t.src = c)),
                        (t.lv = r.j);
                      var s = JSON.stringify(t);
                      return (
                        (s = (function (t) {
                          try {
                            return t.replace(/\\.{1}/g, '');
                          } catch (t) {
                            return Object(a.b)(t, 'escapeJsonForAax'), '';
                          }
                        })(s)),
                        (s = encodeURIComponent(s))
                      );
                    } catch (t) {
                      return Object(a.b)(t, 'objectToUrlPath'), '';
                    }
                  })(t.payload))
                )
              );
            }
            return u.push(t), !1;
          } catch (t) {
            return Object(a.b)(t, 'sendPixel'), !1;
          }
        }
        function v (t) {
          return j({ payload: t });
        }
        function S (t, e) {
          return j({ payload: e, bidId: t });
        }
        function _ () {
          try {
            if (d) return;
            (d = !0), u.forEach(j), 0 < m.length && y();
          } catch (t) {
            Object(a.b)(t, 'sendPixels');
          }
        }
        !0 === Object(c.c)('exposePixels') && (window.apstagFeaturePixelQueue = m);
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return d;
        }),
          n.d(e, 'b', function () {
            return g;
          }),
          n.d(e, 'd', function () {
            return w;
          }),
          n.d(e, 'c', function () {
            return D;
          }),
          n.d(e, 'e', function () {
            return I;
          });
        var r = n(2),
          i = n(0),
          c = n(3),
          o = n(9),
          a = n(4),
          s = n(1),
          u = ['getLog', 'getState'];
        function d (t, e, n) {
          try {
            switch (
              (Object(i.j)(u, t) &&
                (Object(s.b)(
                  new Error('Debug call made: '.concat(t)),
                  'debugPublicApi-call-'.concat(t)
                ),
                (u = u.filter(function (e) {
                  return e !== t;
                }))),
              t)
            ) {
              case 'getLog':
                return r.a.getState().eventLog;
              case 'getState':
                return r.a.getState();
              case 'enable':
                return E('fake_bids', !0), 'DEBUG MODE ENABLED';
              case 'disable':
                return E('fake_bids', !1), 'DEBUG MODE DISABLED';
              case 'enableConsole':
                return g(!1, 'command'), 'Debug console enabled';
              case 'enableConsoleV2':
                return g(!0, 'command'), 'Debug console v2 enabled';
              case 'disableConsole':
                return (
                  (function () {
                    try {
                      E('console', !1),
                        E('console_v2', !1),
                        null !== f && document.body.removeChild(f),
                        (m = !1),
                        Object(i.i)() && window.localStorage.removeItem(c.d);
                    } catch (t) {
                      Object(s.b)(t, 'disableDebugConsole', !0);
                    }
                  })(),
                  'Debug console disabled'
                );
              case 'setDebug':
                return E(e, n)
                  ? "Set debug mode '".concat(e, "' to '").concat(n, "'")
                  : "Failed to set debug mode '".concat(e, "' to '").concat(n, "'");
              default:
                return 'unknown debug argument';
            }
          } catch (e) {
            return Object(s.b)(e, 'debugPublicApi', !0), 'error';
          }
        }
        var f,
          l,
          b,
          p,
          m = !1;
        function g () {
          var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            e = 1 < arguments.length ? arguments[1] : void 0;
          try {
            if ((E(t ? 'console_v2' : 'console', !0), m)) return;
            var n = {
              url: t ? r.a.getState().cfg.DEBUG_APP_HTML_V2 : r.a.getState().cfg.DEBUG_APP_HTML,
              onload: h,
              onerror: function () {
                return Object(s.b)(
                  new Error('Error Loading Debug Console'),
                  'enableDebugConsole-'.concat(t ? 'v2' : 'v1', '-onerror'),
                  !0
                );
              },
            };
            Object(o.d)(n),
              setTimeout(function () {
                try {
                  var n = { _type: 'debugLoad', mode: t ? 2 : 1 };
                  Object(i.m)(r.a.getState().config, 'pubID') &&
                    (n.src = r.a.getState().config.pubID),
                    null !== e && (n.method = e),
                    Object(a.b)(n);
                } catch (n) {
                  Object(s.b)(n, 'enableDebugConsole-setTimeout', !0);
                }
              }, 5000);
          } catch (n) {
            Object(s.b)(n, 'enableDebugConsole', !0);
          }
        }
        function h (t) {
          try {
            var e = t.responseText;
            (f = document.createElement('div')),
              (l = document.createElement('div')),
              (b = document.createElement('iframe'));
            var n = 200;
            w('console_v2') && (n = 330),
              Object(i.i)() &&
                null !== window.localStorage.getItem(c.d) &&
                (n = parseInt(window.localStorage.getItem(c.d), 10)),
              (isNaN(n) || n > window.innerHeight) && (n = 200),
              (f.style.background = '#eaeded'),
              (f.style.zIndex = '2147483647'),
              (f.style.bottom = '0'),
              (f.style.position = 'fixed !important'),
              (f.style.display = 'block !important'),
              (f.style.left = '0'),
              (f.style.right = '0'),
              (f.style.height = ''.concat(n, 'px')),
              (l.style.cursor = 'row-resize'),
              (l.style.height = '2px'),
              (l.style.position = 'absolute'),
              (l.style.top = '0'),
              (l.style.left = '0'),
              (l.style.right = '0'),
              (l.style.backgroundColor = 'RGBA(0,0,0,0)'),
              f.appendChild(l),
              (b.frameBorder = '0'),
              (b.marginHeight = '0'),
              (b.marginWidth = '0'),
              (b.scrolling = 'no'),
              (b.id = 'apstag-debug-iframe'),
              (b.src = 'about:blank'),
              (b.style.display = 'block'),
              (b.style.width = '100%'),
              (b.style.height = ''.concat(n, 'px')),
              f.appendChild(b),
              document.body.appendChild(f),
              null !== b.contentDocument &&
                (b.contentDocument.open(), b.contentDocument.write(e), b.contentDocument.close()),
              l.addEventListener('mousedown', j);
          } catch (t) {
            Object(s.b)(t, 'renderDebugConsole', !0);
          }
        }
        function y (t) {
          try {
            var e = window.innerHeight - t.clientY;
            return (
              e < 200 && (e = 200),
              (f.style.height = ''.concat(e, 'px')),
              (b.style.height = ''.concat(e, 'px')),
              e
            );
          } catch (t) {
            return Object(s.b)(t, 'resizeDebugConsole', !0), 200;
          }
        }
        function O (t) {
          try {
            return (
              t.stopPropagation && t.stopPropagation(),
              t.preventDefault && t.preventDefault(),
              (t.cancelBubble = !0),
              (t.returnValue = !1)
            );
          } catch (t) {
            return Object(s.b)(t, 'preventEvent', !0), !1;
          }
        }
        function j () {
          try {
            void 0 === p &&
              (((p = document.createElement('div')).style.position = 'fixed'),
              (p.style.left = '0'),
              (p.style.right = '0'),
              (p.style.top = '0'),
              (p.style.bottom = '0'),
              (p.style.zIndex = '9999999999')),
              f.appendChild(p),
              window.addEventListener('mouseup', S),
              window.addEventListener('mousemove', v);
          } catch (t) {
            Object(s.b)(t, 'resizeBarMouseDownListener', !0);
          }
        }
        function v (t) {
          try {
            return y(t), O(t);
          } catch (t) {
            return Object(s.b)(t, 'resizeBarMouseMoveListener', !0), !1;
          }
        }
        function S (t) {
          try {
            null !== p && f.removeChild(p),
              window.removeEventListener('mousemove', v),
              window.removeEventListener('mouseup', S);
            var e = y(t);
            return Object(i.i)() && window.localStorage.setItem(c.d, ''.concat(e)), O(t);
          } catch (t) {
            return Object(s.b)(t, 'resizeBarMouseUpListener', !0), !1;
          }
        }
        function _ () {
          const $___old_1424b8ee73115a50 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_1424b8ee73115a50)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_b317e19f866a2da7.localStorage
              ));
            return function () {
              try {
                if (!Object(i.i)()) return [];
                var t = window.localStorage.getItem(c.f);
                null === t || 'false' === t ? (t = '[]') : 'true' === t && (t = '["fake_bids"]');
                var e = [];
                try {
                  e = JSON.parse(t);
                } catch (t) {}
                return (
                  Object(i.k)(e) || (e = []),
                  e.filter(function (t) {
                    return Object(i.j)(c.u, t);
                  })
                );
              } catch (t) {
                return Object(s.b)(t, 'getCurrentDebugArray'), [];
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_1424b8ee73115a50)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_1424b8ee73115a50));
          }
        }
        function w (t) {
          try {
            return Object(i.j)(_(), t);
          } catch (t) {
            return Object(s.b)(t, 'isDebugEnabled'), !1;
          }
        }
        function E (t, e) {
          try {
            if (!Object(i.i)()) return;
            if (-1 === c.u.indexOf(t)) return;
            var n = _();
            return (
              e && -1 === n.indexOf(t)
                ? n.push(t)
                : e ||
                  (n = n.filter(function (e) {
                    return e !== t;
                  })),
              0 === n.length
                ? window.localStorage.removeItem(c.f)
                : window.localStorage.setItem(c.f, JSON.stringify(n)),
              I(),
              1
            );
          } catch (e) {
            return void Object(s.b)(e, 'setDebugMode');
          }
        }
        function D (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
          try {
            if (Object(i.m)(window, c.e) && Object(i.m)(window[c.e], t)) return window[c.e][t];
          } catch (t) {
            Object(s.b)(t, 'getDebugValue');
          }
          return e;
        }
        var T = [];
        function I () {
          try {
            _()
              .filter(function (t) {
                return -1 === T.indexOf(t);
              })
              .forEach(function (t) {
                Object(s.b)(
                  new Error('Debug method enabled: '.concat(t)),
                  'debugPublicApi-enabled-'.concat(t),
                  !0
                ),
                  T.push(t);
              });
          } catch (t) {
            Object(s.b)(t, 'pixelDebugModes');
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return D;
        }),
          n.d(e, 'b', function () {
            return T;
          });
        var r = n(0),
          i = n(13),
          c = n(1);
        function o (t) {
          return (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function a (t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function s (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function u (t, e, n) {
          return e && s(t.prototype, e), n && s(t, n), t;
        }
        function d (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e &&
              (function (t, e) {
                (
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  }
                )(t, e);
              })(t, e);
        }
        function f (t) {
          var e = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r,
              i,
              c = b(t);
            if (e) {
              var a = b(this).constructor;
              n = Reflect.construct(c, arguments, a);
            } else n = c.apply(this, arguments);
            return (
              (r = this), !(i = n) || ('object' !== o(i) && 'function' != typeof i) ? l(r) : i
            );
          };
        }
        function l (t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function b (t) {
          return (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function p (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var m = (function () {
            d(e, i.c);
            var t = f(e);
            function e (n) {
              var i;
              return (
                a(this, e),
                p(
                  l(
                    (i = t.call(
                      this,
                      n.targetId,
                      Object(r.m)(n, 'invCode')
                        ? n.invCode
                        : Object(r.m)(n, 'tagId')
                        ? n.tagId
                        : n.targetId
                    ))
                  ),
                  'rawSlot',
                  void 0
                ),
                p(l(i), 'mediaType', 'display'),
                (i.rawSlot = n),
                i
              );
            }
            return (
              u(e, [
                {
                  key: 'reportError',
                  value: function (t, e) {
                    Object(c.b)(t, 'ApnSlot-'.concat(e));
                  },
                },
                {
                  key: 'initKeywords',
                  value: function () {
                    try {
                      Object(r.m)(this.rawSlot, 'keywords') || (this.rawSlot.keywords = {});
                    } catch (t) {
                      this.reportError(t, 'initKeywords');
                    }
                  },
                },
                {
                  key: 'setTargeting',
                  value: function (t, e) {
                    try {
                      this.initKeywords(), (this.rawSlot.keywords[t] = e);
                    } catch (t) {
                      this.reportError(t, 'setTargeting');
                    }
                  },
                },
                {
                  key: 'getTargeting',
                  value: function (t) {
                    try {
                      return (
                        this.initKeywords(),
                        Object(r.m)(this.rawSlot.keywords, t) ? [this.rawSlot.keywords[t]] : []
                      );
                    } catch (t) {
                      return this.reportError(t, 'getTargeting'), [];
                    }
                  },
                },
                {
                  key: 'clearTargeting',
                  value: function (t) {
                    try {
                      this.initKeywords(), delete this.rawSlot.keywords[t];
                    } catch (t) {
                      this.reportError(t, 'clearTargeting');
                    }
                  },
                },
                {
                  key: 'sizes',
                  get: function () {
                    try {
                      return this.rawSlot.sizes;
                    } catch (t) {
                      return this.reportError(t, 'sizes'), [];
                    }
                  },
                },
              ]),
              e
            );
          })(),
          g = (function () {
            d(e, i.b);
            var t = f(e);
            function e () {
              var n;
              a(this, e);
              for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
                i[c] = arguments[c];
              return p(l((n = t.call.apply(t, [this].concat(i)))), 'isSupported', !0), n;
            }
            return (
              u(e, [
                {
                  key: 'reportError',
                  value: function (t, e) {
                    Object(c.b)(t, 'AppNexusAdServer-'.concat(e));
                  },
                },
                {
                  key: 'cmdQueuePush',
                  value: function (t) {
                    try {
                      window.apntag.anq.push(t);
                    } catch (t) {
                      this.reportError(t, 'cmdQueuePush');
                    }
                  },
                },
                {
                  key: 'setTargeting',
                  value: function (t, e) {
                    try {
                      if (
                        !Object(r.m)(window, 'apntag') ||
                        !Object(r.m)(window.apntag, 'requests')
                      )
                        return;
                      Object(r.m)(window.apntag.requests, 'keywords') ||
                        (window.apntag.requests.keywords = {}),
                        (window.apntag.requests.keywords[t] = e);
                    } catch (t) {
                      this.reportError(t, 'setTargeting');
                    }
                  },
                },
                {
                  key: 'getTargeting',
                  value: function (t) {
                    try {
                      if (
                        !Object(r.m)(window, 'apntag') ||
                        !Object(r.m)(window.apntag, 'requests')
                      )
                        return [];
                      Object(r.m)(window.apntag.requests, 'keywords') ||
                        (window.apntag.requests.keywords = {});
                      var e = window.apntag.requests.keywords[t];
                      return void 0 === e ? [] : [e];
                    } catch (t) {
                      return this.reportError(t, 'getTargeting'), [];
                    }
                  },
                },
                {
                  key: 'clearTargeting',
                  value: function (t) {
                    try {
                      Object(r.m)(window, 'apntag') &&
                        Object(r.m)(window.apntag, 'requests') &&
                        Object(r.m)(window.apntag.requests, 'keywords') &&
                        delete window.apntag.requests.keywords[t];
                    } catch (t) {
                      this.reportError(t, 'clearTargeting');
                    }
                  },
                },
                {
                  key: 'hasAdServerObjectLoaded',
                  value: function () {
                    try {
                      return (
                        Object(r.m)(window, 'apntag') &&
                        Object(r.m)(window.apntag, 'loaded') &&
                        !0 === window.apntag.loaded
                      );
                    } catch (t) {
                      return this.reportError(t, 'hasAdServerObjectLoaded'), !1;
                    }
                  },
                },
                {
                  key: 'isCommandQueueDefined',
                  value: function () {
                    try {
                      return Object(r.m)(window, 'apntag') && Object(r.m)(window.apntag, 'anq');
                    } catch (t) {
                      return this.reportError(t, 'isCommandQueueDefined'), !1;
                    }
                  },
                },
                {
                  key: 'getSlots',
                  value: function () {
                    try {
                      var t = [];
                      return (
                        Object(r.m)(window, 'apntag') &&
                          Object(r.m)(window.apntag, 'requests') &&
                          Object(r.m)(window.apntag.requests, 'tags') &&
                          Object(r.l)(window.apntag.requests.tags) &&
                          Object.keys(window.apntag.requests.tags).forEach(function (e) {
                            var n = window.apntag.requests.tags[e];
                            t.push(new m(n));
                          }),
                        t
                      );
                    } catch (t) {
                      return this.reportError(t, 'getSlots'), [];
                    }
                  },
                },
              ]),
              e
            );
          })(),
          h = n(14);
        function y (t) {
          return (y =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function O (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function j (t, e) {
          return (j =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function v (t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function S (t) {
          return (S = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function _ (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var w = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && j(t, e);
            })(o, i.b);
            var t,
              e,
              n = (function (t) {
                var e = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function () {
                  var n,
                    r,
                    i,
                    c = S(t);
                  if (e) {
                    var o = S(this).constructor;
                    n = Reflect.construct(c, arguments, o);
                  } else n = c.apply(this, arguments);
                  return (
                    (r = this),
                    !(i = n) || ('object' !== y(i) && 'function' != typeof i) ? v(r) : i
                  );
                };
              })(o);
            function o () {
              var t;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, o);
              for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
                r[i] = arguments[i];
              return (
                _(v((t = n.call.apply(n, [this].concat(r)))), 'isSupported', !0),
                _(v(t), 'needNewBidObject', !0),
                t
              );
            }
            return (
              (t = o),
              (e = [
                {
                  key: 'reportError',
                  value: function (t, e) {
                    Object(c.b)(t, 'SmartAdServer-'.concat(e));
                  },
                },
                {
                  key: 'cmdQueuePush',
                  value: function (t) {
                    try {
                      window.sas.cmd.push(t);
                    } catch (t) {
                      this.reportError(t, 'cmdQueuePush');
                    }
                  },
                },
                {
                  key: 'hasAdServerObjectLoaded',
                  value: function () {
                    try {
                      return (
                        Object(r.m)(window, 'sas') &&
                        Object(r.m)(window.sas, '__smartLoaded') &&
                        !0 === window.sas.__smartLoaded
                      );
                    } catch (t) {
                      return this.reportError(t, 'hasAdServerObjectLoaded'), !1;
                    }
                  },
                },
                {
                  key: 'isCommandQueueDefined',
                  value: function () {
                    try {
                      return Object(r.m)(window, 'sas') && Object(r.m)(window.sas, 'cmd');
                    } catch (t) {
                      return this.reportError(t, 'isCommandQueueDefined'), !1;
                    }
                  },
                },
              ]) && O(t.prototype, e),
              o
            );
          })(),
          E = n(4),
          D = new i.b();
        function T (t) {
          try {
            switch (t) {
              case 'appnexus':
                Object(E.c)('adServer', t), (D = new g());
                break;
              case 'googletag':
                Object(E.c)('adServer', t), (D = new h.a());
                break;
              case 'sas':
                Object(E.c)('adServer', t), (D = new w());
                break;
              default:
                'string' == typeof t
                  ? Object(E.c)('adServer', 'invalid-'.concat(t))
                  : Object(E.c)('adServer', 'none'),
                  (D = new i.b());
            }
          } catch (t) {
            Object(c.b)(t, 'setDisplayAdServer');
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'b', function () {
          return u;
        }),
          n.d(e, 'i', function () {
            return d;
          }),
          n.d(e, 'f', function () {
            return f;
          }),
          n.d(e, 'g', function () {
            return l;
          }),
          n.d(e, 'c', function () {
            return b;
          }),
          n.d(e, 'd', function () {
            return p;
          }),
          n.d(e, 'e', function () {
            return m;
          }),
          n.d(e, 'h', function () {
            return h;
          }),
          n.d(e, 'a', function () {
            return y;
          });
        var r = n(5),
          i = n(0),
          c = n(1),
          o = n(3),
          a = n(2);
        function s (t) {
          return (s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function u (t) {
          try {
            return t.split('_').pop();
          } catch (t) {
            return Object(c.b)(t, 'getAmpAmznBidValue'), '';
          }
        }
        function d (t) {
          try {
            return !Object(i.m)(t, 'slots');
          } catch (t) {
            return Object(c.b)(t, 'isAAXPunt'), !0;
          }
        }
        function f (t) {
          try {
            var e,
              n = Object(r.c)('url');
            if (null !== n) return encodeURIComponent(n);
            try {
              e = t.top.location.href;
            } catch (t) {
              e = null;
            }
            if (null === e || !e || void 0 === e) {
              e = '';
              try {
                t.top !== t.self && (e = t.document.referrer);
              } catch (t) {}
            }
            return encodeURIComponent(e);
          } catch (t) {
            return Object(c.b)(t, 'getCurrentUrl'), '';
          }
        }
        function l (t) {
          try {
            var e,
              n = '',
              i = Object(r.c)('url');
            if (null !== i) return encodeURIComponent(i);
            try {
              try {
                e = t.top.document.referrer;
              } catch (n) {
                e = t.document.referrer;
              }
              n = encodeURIComponent(e);
            } catch (n) {}
            return n;
          } catch (n) {
            return Object(c.b)(n, 'getReferrerUrl'), '';
          }
        }
        function b () {
          try {
            var t = { cookiesParams: '' };
            return (
              Object(i.d)().forEach(function (e) {
                if (e[0] in o.h)
                  switch (e[0]) {
                    case 'aps_ext_917':
                      t.fb = e[1];
                      break;
                    default:
                      t.cookiesParams += '&'.concat(o.h[e[0]], '=').concat(e[1]);
                  }
              }),
              t.fb || a.a.getState().sync917 || a.a.dispatch({ type: 'SET_SYNC_917', value: !0 }),
              t
            );
          } catch (t) {
            return Object(c.b)(t, 'getApsFirstPartyCookies'), { cookiesParams: '' };
          }
        }
        function p (t) {
          try {
            var e = a.a.getState().config.blockedBidders;
            Object(i.m)(t, 'blockedBidders') &&
              Object(i.k)(t.blockedBidders) &&
              (e = t.blockedBidders);
            var n = '';
            return Object(i.k)(e) && (n = JSON.stringify(e)), n;
          } catch (t) {
            return Object(c.b)(t, 'getBlockedBidders', !0), '';
          }
        }
        function m () {
          try {
            if (!Object(i.i)()) return o.n;
            var t = a.a.getState();
            return Object(i.m)(t, 'cfg') && Object(i.m)(t.cfg, 'v') && -1 !== t.cfg.v
              ? t.cfg.v
              : null;
          } catch (t) {
            return Object(c.b)(t, 'getCfgVersion'), null;
          }
        }
        function g (t) {
          try {
            if (-1 === ['string', 'number'].indexOf(s(t))) return !1;
            var e = Math.floor(Number(t));
            if (e > o.l) return e;
          } catch (t) {
            Object(c.b)(t, 'parseTimeout', !0);
          }
          return !1;
        }
        function h (t, e) {
          try {
            var n = g(t.timeout);
            return (
              !1 === n && (n = g(e.config.bidTimeout)),
              !1 === n && (n = g(e.cfg.DEFAULT_TIMEOUT)),
              n
            );
          } catch (t) {
            return Object(c.b)(t, 'getTimeout', !0), 2000;
          }
        }
        function y (t, e) {
          var n,
            r = !1;
          function i (e) {
            if (!r)
              try {
                t(e);
              } catch (e) {
                Object(c.b)(e, 'executeFunctionOnceWithTimeout-wrappedFunction', !0);
              }
            clearTimeout(n), (r = !0);
          }
          try {
            return (n = setTimeout(i, e, !0)), i.bind(null, !1);
          } catch (e) {
            return Object(c.b)(e, 'executeFunctionOnceWithTimeout', !0), function () {};
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return j;
        }),
          n.d(e, 'b', function () {
            return v;
          }),
          n.d(e, 'i', function () {
            return S;
          }),
          n.d(e, 'd', function () {
            return _;
          }),
          n.d(e, 'g', function () {
            return w;
          }),
          n.d(e, 'c', function () {
            return E;
          }),
          n.d(e, 'h', function () {
            return D;
          }),
          n.d(e, 'f', function () {
            return T;
          }),
          n.d(e, 'e', function () {
            return I;
          });
        var r = n(2),
          i = n(5),
          c = n(3),
          o = n(0),
          a = n(9),
          s = n(1),
          u = n(7),
          d = n(11),
          f = n(4),
          l = n(10);
        function b (t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return h(t);
            })(t) ||
            (function (t) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            g(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function p (t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function m (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? p(Object(n), !0).forEach(function (e) {
                  O(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        }
        function g (t, e) {
          if (t) {
            if ('string' == typeof t) return h(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === n && t.constructor && (n = t.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(t)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? h(t, e)
                : void 0
            );
          }
        }
        function h (t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function y (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function O (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var j = (function () {
            function t (e) {
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                O(this, 'bidConfig', void 0),
                O(this, 'bidState', c.b.new),
                O(this, '_targetingSetID', void 0),
                O(this, 'timing', { setAtTimes: [] }),
                O(this, 'pixelSent', !1),
                O(this, 'useSafeFrames', !1),
                O(this, 'bidReqID', ''),
                O(this, 'host', void 0),
                O(this, 'ev', void 0),
                O(this, 'cfe', void 0),
                O(this, 'isAmp', !1),
                O(this, 'doc', void 0),
                O(this, 'inheritSize', void 0),
                (this.bidConfig = e),
                (this._targetingSetID = Object(o.e)()),
                r.a.getState().config.useSafeFrames && (this.useSafeFrames = !0),
                this.useSafeFrames && Object(o.m)(e, 'targeting') && e.targeting.push('amznhost');
              try {
                var n = 'd';
                ('video' !== this.bidConfig.mediaType && 'v' !== this.bidConfig.mediaType) ||
                  (n = 'v');
                var i = [];
                Object(o.m)(this.bidConfig, 'amzndeals') &&
                  (Object(f.c)('bidType', ''.concat(n, '-amzndeals')),
                  (i = this.bidConfig.amzndeals.map(function (t) {
                    return ''.concat(t, 'amzniid');
                  }))),
                  this.bidConfig.targeting
                    .filter(function (t) {
                      return -1 !== t.indexOf('amzniid') && !Object(o.j)(i, t);
                    })
                    .forEach(function (t) {
                      return Object(f.c)('bidType', ''.concat(n, '-').concat(t));
                    }),
                  Object(o.m)(this.bidConfig, 'fif') && '1' === this.bidConfig.fif
                    ? Object(f.c)('bidRender', 'friendly')
                    : Object(f.c)('bidRender', 'unfriendly');
              } catch (e) {
                this.reportError(e, 'pixeling');
              }
            }
            var e, n;
            return (
              (e = t),
              (n = [
                {
                  key: 'reportError',
                  value: function (t, e, n) {
                    var r = 2 < arguments.length && void 0 !== n && n;
                    Object(s.b)(t, 'Bid-'.concat(e), r);
                  },
                },
                {
                  key: 'matchesBidCacheId',
                  value: function (t) {
                    var e = this;
                    try {
                      return this.bidConfig.targeting.reduce(function (n, r) {
                        return n || (-1 !== r.indexOf('amzniid') && e.bidConfig[r] === t);
                      }, !1);
                    } catch (t) {
                      return this.reportError(t, 'matchesBidCacheId'), !1;
                    }
                  },
                },
                {
                  key: 'mediaType',
                  get: function () {
                    var t = 'd';
                    return (
                      ('video' !== this.bidConfig.mediaType && 'v' !== this.bidConfig.mediaType) ||
                        (t = 'video'),
                      t
                    );
                  },
                },
                {
                  key: 'targeting',
                  get: function () {
                    var t = this;
                    try {
                      return this.bidConfig.targeting
                        .map(function (e) {
                          return 'amznhost' === e
                            ? [e, encodeURIComponent(t.host)]
                            : Object(o.m)(t.bidConfig, e) && Object(o.k)(t.bidConfig[e])
                            ? [e, encodeURIComponent(t.bidConfig[e].join(','))]
                            : Object(o.m)(t.bidConfig, e)
                            ? [e, encodeURIComponent(t.bidConfig[e])]
                            : [e, ''];
                        })
                        .map(function (t) {
                          var e = (function (t, e) {
                              return (
                                (function (t) {
                                  if (Array.isArray(t)) return t;
                                })(t) ||
                                (function (t, e) {
                                  if (
                                    'undefined' != typeof Symbol &&
                                    Symbol.iterator in Object(t)
                                  ) {
                                    var n = [],
                                      r = !0,
                                      i = !1,
                                      c = void 0;
                                    try {
                                      for (
                                        var o, a = t[Symbol.iterator]();
                                        !(r = (o = a.next()).done) &&
                                        (n.push(o.value), !e || n.length !== e);
                                        r = !0
                                      );
                                    } catch (t) {
                                      (i = !0), (c = t);
                                    } finally {
                                      try {
                                        r || null == a.return || a.return();
                                      } finally {
                                        if (i) throw c;
                                      }
                                    }
                                    return n;
                                  }
                                })(t, e) ||
                                g(t, e) ||
                                (function () {
                                  throw new TypeError(
                                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                  );
                                })()
                              );
                            })(t, 2),
                            n = e[0],
                            r = e[1];
                          return '&'.concat(n, '=').concat(r);
                        })
                        .join('');
                    } catch (t) {
                      return this.reportError(t, 'targeting'), '';
                    }
                  },
                },
                {
                  key: 'bidObject',
                  get: function () {
                    try {
                      var t = {
                        slotID: this.bidConfig.slotID,
                        amzniid: this.bidConfig.amzniid,
                        amznbid: this.bidConfig.amznbid,
                        amznp: this.bidConfig.amznp,
                        amznsz: this.bidConfig.amznsz,
                        size: this.bidConfig.amznsz,
                      };
                      return (
                        'video' === this.mediaType &&
                          ((t.mediaType = 'video'),
                          (t.qsParams = this.targeting),
                          (t.encodedQsParams = encodeURIComponent(this.targeting)),
                          (t.r_amznbid = this.bidConfig.r_amznbid),
                          (t.r_amzniid = this.bidConfig.r_amzniid),
                          (t.r_amznp = this.bidConfig.r_amznp)),
                        this.useSafeFrames && (t.amznhost = this.host),
                        t
                      );
                    } catch (t) {
                      return (
                        this.reportError(t, 'bidObject', !0),
                        {
                          slotID: '',
                          amzniid: 'error',
                          amznbid: 'error',
                          amznp: 'error',
                          amznsz: 'error',
                          size: 'error',
                        }
                      );
                    }
                  },
                },
                {
                  key: 'newBidObject',
                  get: function () {
                    var t = this;
                    try {
                      var e = {
                          slotID: this.bidConfig.slotID,
                          size: this.bidConfig.amznsz,
                          mediaType: this.mediaType,
                          targeting: {},
                          helpers: {
                            targetingKeys: this.bidConfig.targeting,
                            qsParams: function () {
                              return t.targeting;
                            },
                            encodedQsParams: function () {
                              return encodeURIComponent(t.targeting);
                            },
                          },
                        },
                        n = ['slotID', 'size', 'mediaType'];
                      return (
                        this.bidConfig.meta
                          .filter(function (t) {
                            return -1 === n.indexOf(t);
                          })
                          .forEach(function (n) {
                            e[n] = t.bidConfig[n];
                          }),
                        this.bidConfig.targeting.forEach(function (n) {
                          e.targeting[n] = 'amznhost' === n ? t.host : t.bidConfig[n];
                        }),
                        void 0 !== this.slotID &&
                          -1 !== this.slotID.indexOf('_') &&
                          (e.sasTargeting = e.helpers.targetingKeys
                            .map(function (n) {
                              return ''
                                .concat(n, '_')
                                .concat(t.slotID.split('_')[1], '=')
                                .concat(e.targeting[n]);
                            })
                            .join(';')),
                        e
                      );
                    } catch (t) {
                      return (
                        this.reportError(t, 'newBidObject', !0),
                        {
                          slotID: '',
                          size: '',
                          mediaType: 'd',
                          targeting: {},
                          helpers: {
                            targetingKeys: [],
                            qsParams: function () {
                              return '';
                            },
                            encodedQsParams: function () {
                              return '';
                            },
                          },
                        }
                      );
                    }
                  },
                },
                {
                  key: 'slotID',
                  get: function () {
                    try {
                      return this.bidConfig.slotID;
                    } catch (t) {
                      return this.reportError(t, 'slotID'), '';
                    }
                  },
                },
              ]) && y(e.prototype, n),
              t
            );
          })(),
          v = Object(o.f)(c.p);
        function S (t) {
          var e = 'validateSupplyChainObject',
            n = !1;
          function r (t, r) {
            return (
              Object(s.b)({ name: 'TypeError', message: r }, ''.concat(e, '-').concat(t), !0),
              !(n = !0)
            );
          }
          try {
            return Object(o.l)(t)
              ? (Object(o.m)(t, 'complete')
                  ? -1 === [1, 0].indexOf(t.complete) &&
                    r(
                      'schain-complete-type',
                      'The `schain.complete` property must be a `1` or `0`'
                    )
                  : r('schain-complete', 'The `schain.complete` property must be provided'),
                Object(o.m)(t, 'ver')
                  ? Object(l.b)(t.ver, ['string']) ||
                    r('schain-ver-type', 'The `schain.ver` property must be a string')
                  : r('schain-ver', 'The `schain.ver` property must be provided'),
                Object(o.m)(t, 'nodes')
                  ? Object(o.k)(t.nodes)
                    ? t.nodes.reduce(function (t, e) {
                        return Object(o.l)(e)
                          ? (Object(o.m)(e, 'asi')
                              ? Object(l.b)(e.asi, ['string']) ||
                                r(
                                  'schain-node-asi-type',
                                  'All `schain.nodes` items must have an `asi` property of type `string`'
                                )
                              : r(
                                  'schain-node-asi',
                                  'All `schain.nodes` items must have an `asi` property'
                                ),
                            Object(o.m)(e, 'sid')
                              ? Object(l.b)(e.sid, ['string']) ||
                                r(
                                  'schain-node-sid-type',
                                  'All `schain.nodes` items must have an `sid` property of type `string`'
                                )
                              : r(
                                  'schain-node-sid',
                                  'All `schain.nodes` items must have an `sid` property'
                                ),
                            Object(o.m)(e, 'hp')
                              ? -1 === [1, 0].indexOf(e.hp) &&
                                r(
                                  'schain-node-hp-type',
                                  'All `schain.nodes` items must have an `hp` property which is `1` or `0`'
                                )
                              : r(
                                  'schain-node-hp',
                                  'All `schain.nodes` items must have an `hp` property'
                                ),
                            Object(l.b)(e.rid, ['string', 'undefined']) ||
                              r(
                                'schain-node-rid-type',
                                'If provided, the `rid` property on an `schain.nodes` item must be of type `string`'
                              ),
                            Object(l.b)(e.name, ['string', 'undefined']) ||
                              r(
                                'schain-node-name-type',
                                'If provided, the `name` property on an `schain.nodes` item must be of type `string`'
                              ),
                            Object(l.b)(e.domain, ['string', 'undefined']) ||
                              r(
                                'schain-node-domain-type',
                                'If provided, the `domain` property on an `schain.nodes` item must be of type `string`'
                              ),
                            t && !n)
                          : r('schain-node-type', 'All `schain.nodes` items must be objects');
                      }, !n)
                    : r('schain-nodes-type', 'The `schain.nodes` property must be an `Array`')
                  : r('schain-nodes', 'The `schain.nodes` property must be provided'))
              : r('schain', 'The `schain` value must be an object');
          } catch (t) {
            return Object(s.b)(t, e, !0), !1;
          }
        }
        function _ (t, e) {
          try {
            var n = r.a.getState(),
              d = {},
              l = Object(i.c)('host', n.hosts.DEFAULT_AAX_BID_HOST),
              p = n.cfg.DTB_PATH,
              g = 'bid';
            n.experiments.shouldUseTestBidEndpoint &&
              null !== n.cfg.TEST_BID_ENDPOINT &&
              (g = n.cfg.TEST_BID_ENDPOINT);
            var h = {
              src: n.config.pubID,
              u: Object(u.f)(window),
              pr: Object(u.g)(window),
              pid: v,
              cb: t.bidReqID,
              ws: Object(o.h)(window),
              v: c.j,
              t: e,
              slots: (function (t) {
                try {
                  return Object(a.c)(
                    t
                      .map(function (t) {
                        var e;
                        if (Object(o.m)(t, 'mediaType') && 'video' === t.mediaType) e = t.aaxSlot;
                        else {
                          if (
                            !(
                              Object(o.m)(t, 'sizes') &&
                              0 < t.sizes.length &&
                              Object(o.m)(t, 'slotID')
                            )
                          )
                            return (
                              Object(s.b)(
                                {
                                  name: 'SlotError',
                                  message: 'There was an error with the configuration for this slot: '.concat(
                                    JSON.stringify(t.rawSlot)
                                  ),
                                },
                                'buildSlotsUrlParam-invalidSlot',
                                !0
                              ),
                              { id: 'ERROR', mt: c.k.video, error: !0 }
                            );
                          var n = t.aaxSlot;
                          Object(o.m)(t, 'slotName') && t.slotName !== t.slotID
                            ? (Object(f.c)('idRemap', 'y'),
                              r.a.dispatch({ type: 'ADD_SLOT_ID', slotID: t.slotID }),
                              (n.sd = ''.concat(r.a.getState().slotIdMap.indexOf(t.slotID))),
                              (n.sn = t.slotName))
                            : Object(f.c)('idRemap', 'n'),
                            (e = n);
                        }
                        return e;
                      })
                      .filter(function (t) {
                        return !0 !== t.error;
                      })
                  );
                } catch (t) {
                  return Object(s.b)(t, 'buildSlotsUrlParam', !0), '';
                }
              })(t.slots),
              pj: (function (t, e) {
                try {
                  var n = Object(o.l)(t.config.params) ? t.config.params : {},
                    r = Object(o.l)(e.params) ? e.params : {},
                    i = m(m({}, n), r);
                  return 0 === Object.keys(i).length ? '' : Object(a.c)(i);
                } catch (t) {
                  return Object(s.b)(t, 'getBidParams', !0), '';
                }
              })(n, t),
              cfgv: Object(u.e)(),
              bb: Object(u.d)(t),
              schain: (function (t) {
                try {
                  var e;
                  return Object(o.m)(t.config, 'schain')
                    ? ((e = t.config.schain),
                      encodeURIComponent(
                        [''.concat(e.ver, ',').concat(e.complete)]
                          .concat(
                            b(
                              e.nodes.map(function (t) {
                                return ['asi', 'sid', 'hp', 'rid', 'name', 'domain']
                                  .map(function (e) {
                                    return Object(o.m)(t, e) ? t[e] : '';
                                  })
                                  .map(function (t) {
                                    return encodeURIComponent(t);
                                  })
                                  .map(function (t) {
                                    return t.replace(/\!/g, '%21');
                                  })
                                  .join(',');
                              })
                            )
                          )
                          .join('!')
                      ))
                    : '';
                } catch (t) {
                  return Object(s.b)(t, 'getSupplyChainObject', !0), '';
                }
              })(n),
            };
            if ('[]' === h.slots || '' === h.slots)
              throw new Error('No slots available for bid request');
            if (
              (r.a.dispatch({
                type: 'RECORD_AAX_REQUEST',
                data: {
                  bidConfig: t,
                  bidReqID: t.bidReqID,
                  timeout: e,
                  ws: h.ws,
                  url: h.u,
                  rqTs: Date.now(),
                },
              }),
              n.experiments.chunkRequests)
            ) {
              var y = t.bidReqID.split('-');
              r.a.dispatch({
                type: 'RECORD_NETWORK_EXCHANGE',
                fid: y[0],
                networkID: parseInt(y[1], 10),
                timestamp: Date.now(),
                exchangeType: 'request',
              });
            }
            n.config.isSelfServePub && ((h.pubid = h.src), (h.src = 600));
            var O = Object(u.c)();
            O.fb && ((d[917] = O.fb), (h[c.h.aps_ext_917] = Object(a.c)(d)));
            var j,
              S = Object(i.c)('bidParams');
            Object(o.l)(S) && (h = m(m({}, h), S)),
              Object(o.l)(n.gdpr) &&
                (Object(o.m)(n.gdpr, 'enabled') && (h.gdpre = encodeURIComponent(n.gdpr.enabled)),
                Object(o.m)(n.gdpr, 'consent') && (h.gdprc = encodeURIComponent(n.gdpr.consent)),
                (j = Object(o.m)(n.gdpr, 'log') ? JSON.parse(n.gdpr.log) : {}),
                (h.gdprl = Object(a.c)(j))),
              Object(o.m)(n.config, 'useSafeFrames') && n.config.useSafeFrames && (h.sf = '1');
            var _ = Object.keys(h)
              .filter(function (t) {
                return Object(o.m)(h, t) && 'undefined' !== h[t] && '' !== h[t] && null !== h[t];
              })
              .map(function (t) {
                return ''.concat(t, '=').concat(h[t]);
              })
              .join('&');
            O.cookiesParams && (_ += O.cookiesParams);
            var w = ''.concat(c.q).concat(l).concat(p, '/').concat(g, '?').concat(_);
            return (
              r.a.dispatch({
                type: 'RECORD_AAX_REQ_PROP',
                bidReqID: t.bidReqID,
                key: 'urlLength',
                value: w.length,
              }),
              w
            );
          } catch (t) {
            return Object(s.b)(t, 'buildBidUrl', !0), '';
          }
        }
        function w (t, e) {
          try {
            return (
              (Object(o.m)(t, 'config') &&
                Object(o.m)(t.config, 'deals') &&
                !0 === t.config.deals) ||
              !0 === e.needNewBidObject
            );
          } catch (t) {
            return Object(s.b)(t, 'isNewBidObjectRequired'), !1;
          }
        }
        function E (t, e, n) {
          try {
            var r,
              i = t.map(d.c),
              a = e.slots
                .filter(d.d)
                .map(d.c)
                .filter(function (t) {
                  return !Object(o.j)(i, t);
                });
            return (
              (r = n ? c.s.bidInFlight : c.s.noBid),
              t.concat(
                a.map(function (t) {
                  return new j({
                    size: '0x0',
                    crid: '',
                    slotID: t,
                    mediaType: 'd',
                    meta: ['slotID', 'mediaType', 'size'],
                    amznbid: (e = r),
                    amzniid: '',
                    amznp: e,
                    amznsz: '0x0',
                    targeting: ['amzniid', 'amznbid', 'amznp', 'amznsz'],
                  });
                  var e;
                })
              )
            );
          } catch (e) {
            return Object(s.b)(e, 'addStateTrackingBidsToRealBids'), t;
          }
        }
        function D (t) {
          try {
            if (Object(o.m)(t, 'slots')) {
              var e = r.a.getState().slotIdMap;
              t.slots.forEach(function (t) {
                null !== t.slotID.match(/^\d+$/) &&
                  parseInt(t.slotID, 10) < e.length &&
                  (t.slotID = e[parseInt(t.slotID, 10)]);
              });
            }
          } catch (t) {
            Object(s.b)(t, 'mapSlotIDValues');
          }
        }
        function T (t) {
          try {
            if (Object(o.j)(r.a.getState().displayAdServer.noBidSlotIDs, t.slotID)) return !1;
            var e = r.a.getState().AAXReqs.filter(function (e) {
              return e.bidReqID === t.bidReqID;
            })[0];
            return (
              !(Object(o.m)(e, 'rqTs') && Date.now() - e.rqTs > 240000) &&
              !(Object(o.m)(e, 'url') && !Object(o.b)(e.url, Object(u.f)(window))) &&
              t.bidState !== c.b.rendered
            );
          } catch (e) {
            return Object(s.b)(e, 'isBidEligible'), !1;
          }
        }
        function I (t) {
          try {
            var e = t.map(d.c),
              n = r.a.getState();
            return Object.keys(n.slotBids)
              .filter(function (t) {
                return Object(o.j)(e, t);
              })
              .reduce(function (t, e) {
                var i = n.slotBids[e]
                  .filter(function (t) {
                    return t.bidState === c.b.new;
                  })
                  .filter(T);
                if (0 < i.length) {
                  var o = i[i.length - 1];
                  r.a.dispatch({
                    type: 'BID_STATE_CHANGE',
                    slotID: e,
                    _targetingSetID: o._targetingSetID,
                    bidState: c.b.exposed,
                  }),
                    (t[e] = o);
                }
                return t;
              }, {});
          } catch (t) {
            return Object(s.b)(t, 'getNewSlotBidsAndExposeForRequestedSlots'), {};
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'd', function () {
          return i;
        }),
          n.d(e, 'b', function () {
            return c;
          }),
          n.d(e, 'a', function () {
            return o;
          }),
          n.d(e, 'c', function () {
            return a;
          });
        var r = n(1);
        function i (t) {
          const $___old_7ba71474f9b4e328 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'XMLHttpRequest'
            ),
            $___old_4609574685ad963f = {}.constructor.getOwnPropertyDescriptor(
              window,
              'XMLHttpRequest'
            );
          try {
            if ($___old_7ba71474f9b4e328)
              ({}.constructor.defineProperty(
                window,
                'XMLHttpRequest',
                $___stub_afd3abb015d4d981.XMLHttpRequest
              ));
            if ($___old_4609574685ad963f)
              ({}.constructor.defineProperty(
                window,
                'XMLHttpRequest',
                $___stub_afd3abb015d4d981.XMLHttpRequest
              ));
            return function () {
              var e = t.url,
                n = t.onload,
                i = t.onerror,
                c = t.ontimeout,
                o = t.withCredentials;
              try {
                var a = new window.XMLHttpRequest();
                (a.onload = n.bind(null, a)),
                  void 0 !== i && (a.onerror = i),
                  void 0 !== c && (a.ontimeout = c),
                  void 0 !== o && (a.withCredentials = o),
                  a.open('GET', e),
                  a.send(null);
              } catch (t) {
                Object(r.b)(t, 'xhrGet');
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_7ba71474f9b4e328)
              ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_7ba71474f9b4e328));
            if ($___old_4609574685ad963f)
              ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_4609574685ad963f));
          }
        }
        function c (t, e, n, i) {
          try {
            if ((void 0 === n && (n = document), void 0 === t))
              return 'function' == typeof e && e(!0), !1;
            var c = n.getElementsByTagName('script')[0] || n.body.firstChild,
              a = n.createElement('script');
            if (
              ((a.type = 'text/javascript'),
              (a.async = !0),
              (a.src = t),
              e && o(a, e),
              o(
                a,
                i ||
                  function () {
                    Object(r.b)(new Error('Error Loading Script Tag'), 'loadScriptTag-onerror');
                  },
                [],
                'onerror'
              ),
              null !== c.parentNode)
            )
              return c.parentNode.insertBefore(a, c), !0;
          } catch (t) {
            Object(r.b)(t, 'loadScriptTag', !0);
          }
          return !1;
        }
        function o (t, e) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 'onload';
          try {
            return (
              'function' == typeof e &&
              ((t[i] = function () {
                e.apply(null, n);
              }),
              !0)
            );
          } catch (t) {
            return Object(r.b)(t, 'addCallbackFunction'), !1;
          }
        }
        function a (t) {
          try {
            return encodeURIComponent(JSON.stringify(t));
          } catch (t) {
            return Object(r.b)(t, 'objToUrlParam'), '';
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return o;
        }),
          n.d(e, 'b', function () {
            return a;
          });
        var r = n(1),
          i = n(0);
        function c (t) {
          return (c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function o (t) {
          try {
            return (
              (function (t) {
                try {
                  if (!a(t, ['number', 'string'])) return !1;
                  if (isNaN(t)) return !1;
                  if ('number' == typeof t) return !0;
                  var e = parseInt(t, 10);
                  return !isNaN(e);
                } catch (t) {
                  return Object(r.b)(t, 'isNumber'), !0;
                }
              })(t) || void 0 === t
            );
          } catch (t) {
            return Object(r.b)(t, 'isNumberOrUndefined'), !0;
          }
        }
        function a (t, e) {
          try {
            return Object(i.j)(e, c(t));
          } catch (t) {
            return Object(r.b)(t, 'isVarOfTypes'), !0;
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'b', function () {
          return c;
        }),
          n.d(e, 'a', function () {
            return o;
          }),
          n.d(e, 'd', function () {
            return a;
          }),
          n.d(e, 'c', function () {
            return s;
          });
        var r = n(1),
          i = n(0);
        function c (t) {
          var e = [];
          try {
            t.hasAdServerObjectLoaded() && (e = t.getSlots());
          } catch (t) {
            Object(r.b)(t, 'getDisplayAdServerSlots');
          }
          return e;
        }
        function o (t) {
          try {
            return Object(i.m)(t, 'sizes') && Object(i.k)(t.sizes) && 0 !== t.sizes.length;
          } catch (t) {
            return Object(r.b)(t, 'doesSlotHaveSizes'), !1;
          }
        }
        function a (t) {
          try {
            return 'video' !== t.mediaType;
          } catch (t) {
            return Object(r.b)(t, 'isDisplaySlot'), !0;
          }
        }
        function s (t) {
          try {
            return t.slotID;
          } catch (t) {
            return Object(r.b)(t, 'getSlotID'), '';
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return r;
        }),
          n.d(e, 'c', function () {
            return i;
          }),
          n.d(e, 'b', function () {
            return c;
          }),
          n.d(e, 'e', function () {
            return o;
          }),
          n.d(e, 'f', function () {
            return a;
          }),
          n.d(e, 'd', function () {
            return s;
          });
        function r (t, e) {
          try {
            return 'number' != typeof t[e] ? 0 : Math.round(t[e]);
          } catch (t) {
            return 0;
          }
        }
        function i (t, e) {
          try {
            var n = c(t, e)[0];
            if (void 0 !== n) return n;
          } catch (t) {}
          return null;
        }
        function c (t, e) {
          try {
            return t.performance.getEntriesByType('resource').filter(function (t) {
              return e.test(t.name);
            });
          } catch (t) {
            return [];
          }
        }
        function o (t, e) {
          const $___old_8a85a715570e5e55 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'performance'
          );
          try {
            if ($___old_8a85a715570e5e55)
              ({}.constructor.defineProperty(
                window,
                'performance',
                $___stub_2b47892348e4e4b9.performance
              ));
            return function () {
              try {
                var n = t.performance.timing[e];
                return void 0 === n ? 0 : n;
              } catch (t) {
                return 0;
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_8a85a715570e5e55)
              ({}.constructor.defineProperty(window, 'performance', $___old_8a85a715570e5e55));
          }
        }
        function a (t) {
          try {
            if (
              0 ===
              [
                'redirectStart',
                'redirectEnd',
                'domainLookupStart',
                'domainLookupEnd',
                'connectStart',
                'connectEnd',
                'requestStart',
                'responseStart',
                'secureConnectionStart',
              ].reduce(function (e, n) {
                return e + r(t, n);
              }, 0)
            )
              return null;
            var e = r(t, 'fetchStart');
            return ['domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd'].reduce(
              function (n, i) {
                return n && r(t, i) === e;
              },
              !0
            );
          } catch (t) {
            return null;
          }
        }
        function s () {
          try {
            var t = window.performance.timeOrigin;
            return void 0 === t && (t = window.performance.timing.navigationStart), t;
          } catch (t) {
            return 0;
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'b', function () {
          return g;
        }),
          n.d(e, 'c', function () {
            return h;
          }),
          n.d(e, 'a', function () {
            return y;
          });
        var r = n(0),
          i = n(1),
          c = n(4);
        function o (t) {
          return (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function a (t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function s (t, e, n) {
          return (s =
            'undefined' != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var r = (function (t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)); );
                    return t;
                  })(t, e);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get ? i.get.call(n) : i.value;
                  }
                })(t, e, n || t);
        }
        function u (t, e) {
          return (u =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function d (t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function f (t) {
          return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function l (t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function b (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function p (t, e, n) {
          return e && b(t.prototype, e), n && b(t, n), t;
        }
        function m (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var g = (function () {
            function t () {
              l(this, t), m(this, 'isSupported', !1), m(this, 'needNewBidObject', !1);
            }
            return (
              p(t, [
                { key: 'cmdQueuePush', value: function () {} },
                { key: 'slotRenderEndedEvent', value: function () {} },
                { key: 'setTargeting', value: function () {} },
                {
                  key: 'getTargeting',
                  value: function () {
                    return [];
                  },
                },
                { key: 'clearTargeting', value: function () {} },
                {
                  key: 'hasAdServerObjectLoaded',
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: 'isCommandQueueDefined',
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: 'getSlots',
                  value: function () {
                    return [];
                  },
                },
              ]),
              t
            );
          })(),
          h = (function () {
            function t (e, n, r) {
              l(this, t),
                m(this, 'mediaType', 'display'),
                m(this, 'slotID', void 0),
                m(this, 'slotName', void 0),
                m(this, 'slotParams', void 0),
                m(this, 'rawSlot', void 0),
                (this.slotID = e),
                (this.slotName = n),
                (this.slotParams = r);
            }
            return (
              p(t, [
                {
                  key: 'reportError',
                  value: function (t, e) {
                    Object(i.b)(t, 'Slot-'.concat(e));
                  },
                },
                { key: 'setTargeting', value: function () {} },
                {
                  key: 'getTargeting',
                  value: function () {
                    return [];
                  },
                },
                { key: 'clearTargeting', value: function () {} },
                {
                  key: 'sizes',
                  get: function () {
                    return [];
                  },
                },
                {
                  key: 'slotConfig',
                  get: function () {
                    try {
                      return { slotID: this.slotID, slotName: this.slotName, sizes: this.sizes };
                    } catch (t) {
                      return (
                        this.reportError(t, 'slotConfig'), { slotID: '', slotName: '', sizes: [] }
                      );
                    }
                  },
                },
                {
                  key: 'aaxSlotParams',
                  get: function () {
                    var t = this;
                    try {
                      return Object(r.m)(this, 'slotParams') && Object(r.l)(this.slotParams)
                        ? Object.keys(this.slotParams)
                            .filter(function (e) {
                              return (function t (e) {
                                try {
                                  return Object(r.k)(e)
                                    ? 0 < e.length &&
                                        e.reduce(function (e, n) {
                                          return e && t(n);
                                        }, !0)
                                    : 'string' == typeof e && 0 < e.length;
                                } catch (e) {
                                  return Object(i.b)(e, 'validateSlotParamValue'), !1;
                                }
                              })(t.slotParams[e]);
                            })
                            .reduce(function (e, n) {
                              return (e[n] = t.slotParams[n]), e;
                            }, {})
                        : void 0;
                    } catch (t) {
                      return this.reportError(t, 'aaxSlotParams'), this.slotParams;
                    }
                  },
                },
                {
                  key: 'aaxSlot',
                  get: function () {
                    try {
                      Object(c.c)('slotType', 'display');
                      var t = {
                        sd: this.slotID,
                        s: this.sizes.filter(r.k).map(function (t) {
                          return t.join('x');
                        }),
                        kv: this.aaxSlotParams,
                      };
                      return this.slotID !== this.slotName && (t.sn = this.slotName), t;
                    } catch (t) {
                      return this.reportError(t, 'aaxSlot'), { sd: '', s: [], kv: {} };
                    }
                  },
                },
              ]),
              t
            );
          })(),
          y = (function () {
            !(function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && u(t, e);
            })(e, h);
            var t = (function (t) {
              var e = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                  );
                } catch (t) {
                  return !1;
                }
              })();
              return function () {
                var n,
                  r,
                  i,
                  c = f(t);
                if (e) {
                  var a = f(this).constructor;
                  n = Reflect.construct(c, arguments, a);
                } else n = c.apply(this, arguments);
                return (
                  (r = this), !(i = n) || ('object' !== o(i) && 'function' != typeof i) ? d(r) : i
                );
              };
            })(e);
            function e (n) {
              var r;
              return (
                l(this, e),
                m(d((r = t.call(this, n.slotID, n.slotName, n.slotParams))), 'rawSlot', void 0),
                m(d(r), 'hasReportedInvalidSizeError', !1),
                m(d(r), 'hasReportedWorkingInvalidSizeError', !1),
                (r.mediaType = 'video' === n.mediaType ? 'video' : 'display'),
                (r.rawSlot = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? a(Object(n), !0).forEach(function (e) {
                          m(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                      : a(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                  }
                  return t;
                })({}, n)),
                r
              );
            }
            return (
              p(e, [
                {
                  key: 'reportError',
                  value: function (t, e) {
                    Object(i.b)(t, 'AaxSlot-'.concat(e));
                  },
                },
                {
                  key: 'aaxSlot',
                  get: function () {
                    try {
                      if ('video' !== this.rawSlot.mediaType)
                        return s(f(e.prototype), 'aaxSlot', this);
                      Object(c.c)('slotType', 'video');
                      var t = { id: this.slotID, mt: 'v', kv: this.aaxSlotParams };
                      return (
                        0 < this.sizes.length &&
                          (t.s = this.sizes.filter(r.k).map(function (t) {
                            return t.join('x');
                          })),
                        t
                      );
                    } catch (t) {
                      return this.reportError(t, 'aaxSlot'), { sd: '', s: [] };
                    }
                  },
                },
                {
                  key: 'sizes',
                  get: function () {
                    try {
                      var t = [],
                        e = /^[0-9]+x[0-9]+$/;
                      Object(r.m)(this.rawSlot, 'sizes') &&
                        Object(r.k)(this.rawSlot.sizes) &&
                        (t =
                          0 < this.rawSlot.sizes.length && !Object(r.k)(this.rawSlot.sizes[0])
                            ? [this.rawSlot.sizes]
                            : this.rawSlot.sizes),
                        t.length ===
                          (t = t.filter(function (t) {
                            return (
                              (Object(r.k)(t) && 2 === t.length) ||
                              (1 === t.length && 'string' == typeof t[0] && e.test(t[0]))
                            );
                          })).length ||
                          this.hasReportedInvalidSizeError ||
                          (this.reportError(
                            {
                              name: 'InvalidSize',
                              message: 'Invalid Size: '.concat(JSON.stringify(this.rawSlot.sizes)),
                            },
                            'sizes-invalid'
                          ),
                          (this.hasReportedInvalidSizeError = !0));
                      var n = t.filter(function (t) {
                        return 2 !== t.length;
                      });
                      return (
                        0 < n.length &&
                          !this.hasReportedWorkingInvalidSizeError &&
                          (this.reportError(
                            {
                              name: 'InvalidButWorkingSize',
                              message: 'Invalid but working sizes: '.concat(JSON.stringify(n)),
                            },
                            'sizes-invalid-working'
                          ),
                          (this.hasReportedWorkingInvalidSizeError = !0)),
                        t
                      );
                    } catch (t) {
                      return this.reportError(t, 'sizes'), [];
                    }
                  },
                },
              ]),
              e
            );
          })();
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'b', function () {
          return m;
        }),
          n.d(e, 'a', function () {
            return g;
          });
        var r = n(0),
          i = n(13),
          c = n(1);
        function o (t) {
          return (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function a (t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function s (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function u (t, e, n) {
          return e && s(t.prototype, e), n && s(t, n), t;
        }
        function d (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e &&
              (function (t, e) {
                (
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t;
                  }
                )(t, e);
              })(t, e);
        }
        function f (t) {
          var e = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r,
              i,
              c = b(t);
            if (e) {
              var a = b(this).constructor;
              n = Reflect.construct(c, arguments, a);
            } else n = c.apply(this, arguments);
            return (
              (r = this), !(i = n) || ('object' !== o(i) && 'function' != typeof i) ? l(r) : i
            );
          };
        }
        function l (t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }
        function b (t) {
          return (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function p (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var m = (function () {
            d(e, i.c);
            var t = f(e);
            function e (n) {
              var r;
              return (
                a(this, e),
                p(
                  l((r = t.call(this, n.getSlotElementId(), n.getAdUnitPath()))),
                  'rawSlot',
                  void 0
                ),
                p(l(r), 'mediaType', 'display'),
                (r.rawSlot = n),
                r
              );
            }
            return (
              u(e, [
                {
                  key: 'reportError',
                  value: function (t, e) {
                    Object(c.b)(t, 'GptSlot-'.concat(e));
                  },
                },
                {
                  key: 'setTargeting',
                  value: function (t, e) {
                    try {
                      this.rawSlot.setTargeting(t, e);
                    } catch (t) {
                      this.reportError(t, 'setTargeting');
                    }
                  },
                },
                {
                  key: 'getTargeting',
                  value: function (t) {
                    try {
                      return this.rawSlot.getTargeting(t);
                    } catch (t) {
                      return this.reportError(t, 'getTargeting'), [];
                    }
                  },
                },
                {
                  key: 'clearTargeting',
                  value: function (t) {
                    try {
                      this.rawSlot.clearTargeting(t);
                    } catch (t) {
                      this.reportError(t, 'clearTargeting');
                    }
                  },
                },
                {
                  key: 'sizes',
                  get: function () {
                    try {
                      var t = Object(r.h)(window)
                        .split('x')
                        .map(function (t) {
                          return Number(t);
                        });
                      return this.rawSlot
                        .getSizes(t[0], t[1])
                        .filter(function (t) {
                          return 'fluid' !== t;
                        })
                        .map(function (t) {
                          return [t.getWidth(), t.getHeight()];
                        });
                    } catch (t) {
                      return this.reportError(t, 'sizes'), [];
                    }
                  },
                },
              ]),
              e
            );
          })(),
          g = (function () {
            d(e, i.b);
            var t = f(e);
            function e () {
              var n;
              a(this, e);
              for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++)
                i[c] = arguments[c];
              return p(l((n = t.call.apply(t, [this].concat(i)))), 'isSupported', !0), n;
            }
            return (
              u(e, [
                {
                  key: 'reportError',
                  value: function (t, e) {
                    Object(c.b)(t, 'GoogletagAdServer-'.concat(e));
                  },
                },
                {
                  key: 'cmdQueuePush',
                  value: function (t) {
                    try {
                      window.googletag.cmd.push(t);
                    } catch (t) {
                      this.reportError(t, 'cmdQueuePush');
                    }
                  },
                },
                {
                  key: 'slotRenderEndedEvent',
                  value: function (t) {
                    try {
                      window.googletag.pubads().addEventListener('slotRenderEnded', function (e) {
                        var n = new m(e.slot);
                        t(n);
                      });
                    } catch (t) {
                      this.reportError(t, 'slotRenderEndedEvent');
                    }
                  },
                },
                {
                  key: 'setTargeting',
                  value: function (t, e) {
                    try {
                      window.googletag.pubads().setTargeting(t, e);
                    } catch (t) {
                      this.reportError(t, 'setTargeting');
                    }
                  },
                },
                {
                  key: 'getTargeting',
                  value: function (t) {
                    try {
                      return window.googletag.pubads().getTargeting(t);
                    } catch (t) {
                      return this.reportError(t, 'getTargeting'), [];
                    }
                  },
                },
                {
                  key: 'clearTargeting',
                  value: function (t) {
                    try {
                      window.googletag.pubads().clearTargeting(t);
                    } catch (t) {
                      this.reportError(t, 'clearTargeting');
                    }
                  },
                },
                {
                  key: 'hasAdServerObjectLoaded',
                  value: function () {
                    try {
                      return (
                        Object(r.m)(window, 'googletag') &&
                        Object(r.m)(window.googletag, 'apiReady') &&
                        !0 === window.googletag.apiReady
                      );
                    } catch (t) {
                      return this.reportError(t, 'hasAdServerObjectLoaded'), !1;
                    }
                  },
                },
                {
                  key: 'isCommandQueueDefined',
                  value: function () {
                    try {
                      return (
                        Object(r.m)(window, 'googletag') && Object(r.m)(window.googletag, 'cmd')
                      );
                    } catch (t) {
                      return this.reportError(t, 'isCommandQueueDefined'), !1;
                    }
                  },
                },
                {
                  key: 'getSlots',
                  value: function () {
                    try {
                      return window.googletag
                        .pubads()
                        .getSlots()
                        .map(function (t) {
                          return new m(t);
                        });
                    } catch (t) {
                      return this.reportError(t, 'getSlots'), [];
                    }
                  },
                },
              ]),
              e
            );
          })();
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'c', function () {
          return c;
        }),
          n.d(e, 'a', function () {
            return o;
          }),
          n.d(e, 'b', function () {
            return a;
          });
        var r = n(1),
          i = n(0);
        function c (t) {
          try {
            return !(!Object(i.m)(t, '$sf') || !Object(i.m)(t.$sf, 'ext'));
          } catch (t) {
            return Object(r.b)(t, 'isSafeFrame'), !1;
          }
        }
        function o (t, e) {
          try {
            var n = e.innerWidth,
              i = e.innerHeight,
              c = parseInt(t[0], 10),
              o = parseInt(t[1], 10),
              a = c - n,
              s = o - i,
              u = e.sfAPI || e.$sf.ext;
            u && ((n === c && i === o) || (u.register(c, o), u.expand({ r: a, b: s, push: !0 })));
          } catch (t) {
            Object(r.b)(t, 'expandSf');
          }
        }
        function a (t) {
          try {
            return 1 === t.innerWidth && 1 === t.innerHeight;
          } catch (t) {
            return Object(r.b)(t, 'is1x1Creative'), !1;
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return O;
        });
        var r = n(0),
          i = n(1),
          c = n(4);
        function o (t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function a (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? o(Object(n), !0).forEach(function (e) {
                  s(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        }
        function s (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function u (t) {
          return (u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        Number.isInteger =
          Number.isInteger ||
          function (t) {
            return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
          };
        var d,
          f = [1, 1, 3, 5],
          l = 0,
          b = !1,
          p = '-timeout',
          m = null,
          g = {};
        function h (t, e) {
          try {
            if (
              ((m = null),
              Object(r.m)(window, t.cmpGlobalv2) && 'function' == typeof window[t.cmpGlobalv2])
            )
              Object(c.c)('gdpr', 'tcfv2'), (m = 'tcfv2');
            else {
              if (!Object(r.m)(window, t.cmpGlobal) || 'function' != typeof window[t.cmpGlobal])
                return (
                  Object(c.c)('gdpr', 'no-cmp'),
                  e({ error: 'no-cmp' }),
                  void (l < f.length && (setTimeout(h, 1000 * f[l], t, e), l++))
                );
              Object(c.c)('gdpr', 'cmp'), (m = 'cmp');
            }
            setTimeout(e, t.cmpTimeout, { timeout: !0 }, !0);
            try {
              'cmp' === m
                ? window[t.cmpGlobal]('getConsentData', null, e)
                : window[t.cmpGlobalv2]('getTCData', 2, e);
            } catch (t) {
              e({ error: ''.concat(m, '-internal-error') }),
                Object(i.b)(t, 'getCmpConfig-'.concat(m), !0);
            }
          } catch (t) {
            Object(i.b)(t, 'getCmpConfig', !0);
          }
        }
        function y (t) {
          'boolean' == typeof (t = a({}, t)).enabled && (t.enabled = t.enabled ? 1 : 0);
          var e = a({}, t);
          try {
            Object.keys(g).forEach(function (t) {
              'string' == typeof g[t] &&
                -1 !== g[t].indexOf('/') &&
                (g[t] = encodeURIComponent(g[t]));
            }),
              (e.log = JSON.stringify(g));
          } catch (t) {
            Object(i.b)(t, 'stringifyAndCallCallback');
          }
          d(e);
        }
        function O (t, e) {
          (m = null), (l = 0), (b = !(g = {})), (p = '-timeout');
          try {
            (d = Object(i.d)(e, 'GdprCallback')),
              (t = 'object' !== u(t) || null === t ? {} : a({}, t)),
              !(g = {
                cmpGlobal: t.cmpGlobal,
                cmpGlobalv2: t.cmpGlobalv2,
                cmpTimeout: t.cmpTimeout,
                enabled: t.enabled,
              }) === t.enabled || 0 === t.enabled
                ? (g.status = 'explicit-no-gdpr')
                : !0 === t.enabled || 1 === t.enabled
                ? (g.status = Object(r.m)(t, 'consent')
                    ? 'explicit-consent-passed'
                    : 'explicit-no-consent-passed')
                : void 0 !== t.enabled &&
                  (g.status = Object(r.m)(t, 'consent')
                    ? 'malformed-with-consent'
                    : 'malformed-without-consent'),
              'string' != typeof t.cmpGlobal && (t.cmpGlobal = '__cmp'),
              'string' != typeof t.cmpGlobalv2 && (t.cmpGlobalv2 = '__tcfapi'),
              Number.isInteger(t.cmpTimeout) || (t.cmpTimeout = 50);
            var n = t,
              o = (function (t) {
                try {
                  var e = { log: JSON.stringify(g) };
                  return void 0 === t.enabled
                    ? e
                    : !1 === t.enabled
                    ? ((e.enabled = 0), e)
                    : (Number.isInteger(t.enabled) ? (e.enabled = t.enabled) : (e.enabled = 1),
                      0 === e.enabled || ('string' == typeof t.consent && (e.consent = t.consent)),
                      e);
                } catch (t) {
                  return Object(i.b)(t, 'parsePubConfig', !0), {};
                }
              })(n);
            if (void 0 !== o.enabled) return Object(c.c)('gdpr', 'pub-api'), void y(o);
            h(
              n,
              function (t, e, n) {
                if (!0 !== b || !Object(r.m)(e, 'timeout') || !e.timeout) {
                  b = !0;
                  try {
                    if (Object(r.m)(e, 'error')) return (g.status = e.error), void y(t);
                    if (!n || 'object' !== u(e) || null === e)
                      return (g.status = ''.concat(m, '-error')), void y(t);
                    if (Object(r.m)(e, 'timeout') && e.timeout)
                      return (g.status = ''.concat(m).concat(p)), void y(t);
                    (g.status = ''.concat(m, '-success')),
                      Object(r.m)(e, 'tcString')
                        ? (t.consent = e.tcString)
                        : Object(r.m)(e, 'consentData') && (t.consent = e.consentData),
                      (t.enabled = e.gdprApplies ? 1 : 0),
                      0 === t.enabled && delete t.consent,
                      y(t);
                  } catch (e) {
                    return (
                      Object(i.b)(e, 'parseCmpResponse', !0), (g.status = 'func-error'), void y(t)
                    );
                  }
                }
              }.bind(null, {})
            );
          } catch (t) {
            b || e({ log: '{"status":"global-func-error"}' }),
              (b = !0),
              Object(i.b)(t, 'getGdprConfig', !0);
          }
        }
      },
      function (t, e, n) {
        'use strict';
        function r (t) {
          return void 0 !== t.amzniid;
        }
        function i (t) {
          return void 0 !== t.kvMap;
        }
        n.d(e, 'b', function () {
          return r;
        }),
          n.d(e, 'a', function () {
            return i;
          });
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'b', function () {
          return o;
        }),
          n.d(e, 'a', function () {
            return a;
          });
        var r = n(3),
          i = n(0),
          c = n(1);
        function o (t) {
          try {
            return Object(i.m)(t, 'debug');
          } catch (t) {
            return Object(c.b)(t, 'isApstagLibrary'), !1;
          }
        }
        function a (t) {
          try {
            return !!Object(i.m)(t, r.a) && !0 === t[r.a];
          } catch (t) {
            return Object(c.b)(t, 'hasApstagJsLoaded'), !1;
          }
        }
      },
      function (t, e, n) {
        'use strict';
        n.d(e, 'a', function () {
          return r;
        });
        var i = n(9),
          c = n(1),
          a = n(3),
          s = n(5),
          u = n(2),
          d = n(7);
        function r (t) {
          if (u.a.getState().cfg.CONFIG_CALL_ENABLED) {
            var r = Date.now(),
              e = {
                url: o(t),
                withCredentials: !0,
                onload: function t (e) {
                  if (200 === e.status)
                    try {
                      u.a.dispatch({
                        type: 'RECORD_LIBRARY_LOAD_CALL_LATENCY',
                        latency: Date.now() - r,
                      });
                      var n = JSON.parse(e.response);
                      eval(n['3pvendor']);
                    } catch (t) {
                      Object(c.b)(t, 'load3PLibraryConfig-onload', !0);
                    }
                },
                onerror: function () {},
              };
            try {
              Object(i.d)(e);
            } catch (t) {
              Object(c.b)(t, 'load3PLibraryConfig', !0);
            }
          }
        }
        function o (t) {
          try {
            var e,
              n = u.a.getState(),
              r = Object(s.c)('host', n.hosts.DEFAULT_AAX_BID_HOST),
              i = n.cfg.LIB_CONFIG_PATH;
            (e = { src: t.isSelfServePub ? a.r : t.pubID, u: Object(d.f)(window) }),
              t.isSelfServePub && (e.pubid = t.pubID);
            var o = Object.keys(e)
              .map(function (t) {
                return ''.concat(t, '=').concat(e[t]);
              })
              .join('&');
            return ''.concat(a.q).concat(r).concat(i, '?').concat(o);
          } catch (t) {
            return Object(c.b)(t, 'buildLibraryConfigUrl', !0), '';
          }
        }
      },
      ,
      ,
      ,
      ,
      ,
      function (t, e, n) {
        t.exports = n(26);
      },
      function (t, e, n) {
        'use strict';
        n.r(e);
        var Nt = n(16),
          qt = n(2),
          Ft = n(7),
          Ut = n(0),
          Mt = n(11),
          Gt = n(5),
          Qt = n(3),
          Ht = n(12),
          Xt = n(15),
          Vt = n(4),
          Kt = n(1),
          Jt = n(9),
          Wt = n(14),
          r = n(18),
          Yt = n(6),
          $t = n(8),
          Zt = n(13),
          te = n(17),
          ee = n(10),
          ne = n(19);
        function re (t) {
          return a(t) || c(t) || o(t) || i();
        }
        function i () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        function o (t, e) {
          if (t) {
            if ('string' == typeof t) return s(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === n && t.constructor && (n = t.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(t)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? s(t, e)
                : void 0
            );
          }
        }
        function c (t) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function a (t) {
          if (Array.isArray(t)) return s(t);
        }
        function s (t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function u (t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function ie (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? u(Object(n), !0).forEach(function (e) {
                  oe(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        }
        function oe (t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function ce (t) {
          return (ce =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        try {
          var d = Object(r.b)(window.apstag);
          d
            ? Object(Kt.b)(
                new Error('apstag has already loaded - preventing duplicate load'),
                'apstag-duplicateLoad',
                !0
              )
            : (Object(r.a)(window) &&
                Object(Kt.b)(
                  new Error('apstag was loaded and then destroyed'),
                  'apstag-destroyReload',
                  !0
                ),
              (window.apstagLOADED = !0),
              (function () {
                var f = Object(Ht.e)(window, 'navigationStart'),
                  t = 'ls',
                  e =
                    Object(Gt.d)('console') ||
                    (function () {
                      try {
                        return (
                          -1 !== window.location.href.indexOf('amzn_debug_console=1') &&
                          ((t = 'url'), !0)
                        );
                      } catch (t) {
                        return !1;
                      }
                    })(),
                  n =
                    Object(Gt.d)('console_v2') ||
                    (function () {
                      try {
                        return (
                          -1 !== window.location.href.indexOf('amzn_debug_console=2') &&
                          ((t = 'url'), !0)
                        );
                      } catch (t) {
                        return !1;
                      }
                    })(),
                  u;
                function r (t) {
                  try {
                    (t.ts = Date.now()), qt.a.dispatch({ type: 'LOG_EVENT', event: t });
                  } catch (t) {
                    Object(Kt.b)(t, '_logEvent');
                  }
                }
                function i (t) {
                  function e (t) {
                    try {
                      if (!qt.a.getState().cmpFired) {
                        qt.a.dispatch({ type: 'CMP_FIRED' });
                        var e = document.createElement('iframe');
                        (e.style.display = 'none'), (e.src = t), document.body.appendChild(e);
                      }
                    } catch (t) {
                      Object(Kt.b)(t, '_doCookieMatch-ready');
                    }
                  }
                  try {
                    'loading' === document.readyState
                      ? document.addEventListener &&
                        document.addEventListener(
                          'DOMContentLoaded',
                          function () {
                            e(t);
                          },
                          !1
                        )
                      : e(t);
                  } catch (t) {
                    Object(Kt.b)(t, '_doCookieMatch');
                  }
                }
                function o (t) {
                  try {
                    var e = qt.a.getState().cfg.COOKIE_MATCH_DELAY;
                    setTimeout(function () {
                      try {
                        Object(Ut.m)(t, 'cmp')
                          ? i(t.cmp)
                          : Object(Ut.m)(t, 'cmpjs') && Object(Jt.b)(t.cmpjs);
                      } catch (t) {
                        Object(Kt.b)(t, '_tryCookieMatch-setTimeout');
                      }
                    }, e);
                  } catch (t) {
                    Object(Kt.b)(t, '_tryCookieMatch');
                  }
                }
                function c (t) {
                  try {
                    return (
                      !qt.a.getState().experiments.chunkRequests ||
                      0 ===
                        qt.a.getState().bidReqs[t.split('-')[0]].networkReqs.filter(function (t) {
                          return t.inFlight;
                        }).length
                    );
                  } catch (t) {
                    return Object(Kt.b)(t, '_isRequestComplete'), 1;
                  }
                }
                function a (t, e) {
                  try {
                    !qt.a.getState().bidReqs[t].hasCallbackExecuted &&
                      c(t) &&
                      (qt.a.dispatch({ type: 'RECORD_CALLBACK', fid: t }), e());
                  } catch (t) {
                    Object(Kt.b)(t, '_checkAndCallCallback');
                  }
                }
                function s (t) {
                  try {
                    qt.a.getState().experiments.chunkRequests &&
                      qt.a.dispatch({
                        type: 'RECORD_NETWORK_EXCHANGE',
                        fid: t[0],
                        timestamp: Date.now(),
                        exchangeType: 'response',
                        networkID: parseInt(t[1], 10),
                      });
                  } catch (t) {
                    Object(Kt.b)(t, '_recordResponse');
                  }
                }
                function l (t, r, e) {
                  var i = e.split('-'),
                    n = {
                      url: t,
                      withCredentials: !0,
                      onload: function t (e) {
                        try {
                          s(i);
                          var n = e.responseText;
                          eval(n), a(i[0], r);
                        } catch (t) {
                          Object(Kt.b)(t, '_xhrBid-onload', !0);
                        }
                      },
                      onerror: function () {
                        try {
                          s(i), a(i[0], r);
                        } catch (t) {
                          Object(Kt.b)(t, '_xhrBid-onerror', !0);
                        }
                      },
                    };
                  try {
                    Object(Jt.d)(n);
                  } catch (t) {
                    Object(Kt.b)(t, '_xhrBid', !0), s(i), a(i[0], r);
                  }
                }
                function d (t) {
                  try {
                    var e = new Date();
                    return e.setTime(e.getTime() + 1000 * t), e.toUTCString();
                  } catch (t) {
                    return Object(Kt.b)(t, '_getCookieExpiry'), 'Thu, 01 Jan 1970 00:00:00 GMT';
                  }
                }
                function b (t) {
                  try {
                    Object(Ut.m)(t, 'cr') &&
                      t.cr.forEach(function (t) {
                        document.cookie = ''
                          .concat(t.k, '=')
                          .concat(t.v, ';expires=')
                          .concat(-1 !== t.exp ? d(t.exp) : Object(Ut.g)(365), ';path=/;');
                      });
                  } catch (t) {
                    Object(Kt.b)(t, '_setFirstPartyCookies');
                  }
                }
                function p (t) {
                  try {
                    if (Object(Ut.m)(t, 'cb')) {
                      qt.a.dispatch({
                        type: 'RECORD_AAX_REQ_PROP',
                        bidReqID: t.cb,
                        key: 'resTs',
                        value: Date.now(),
                      });
                      var e = new RegExp('e/dtb/bid.*cb='.concat(t.cb));
                      qt.a.dispatch({
                        type: 'RECORD_AAX_REQ_PROP',
                        bidReqID: t.cb,
                        key: 'perf',
                        value: Object(Ht.c)(window, e),
                      });
                    }
                    Object(Ut.m)(t, 'cfg') && qt.a.dispatch({ type: 'SET_CFG', cfg: t.cfg }), J(t);
                  } catch (t) {
                    Object(Kt.b)(t, '_doOnAaxResponse', !0);
                  }
                }
                function m (t) {
                  try {
                    if (
                      (o(t),
                      b(t),
                      Object(Ut.m)(t, 'cfg') && localStorage.setItem(Qt.c, JSON.stringify(t.cfg)),
                      Object(Ut.m)(t, 'st') && Object(Ut.j)(t.st, 917) && qt.a.getState().sync917)
                    ) {
                      qt.a.dispatch({ type: 'SET_SYNC_917', value: !1 });
                      try {
                        k();
                      } catch (t) {
                        Object(Kt.b)(t, '__error-doFbSync__');
                      }
                    }
                    g(t), Object(Ft.i)(t) || Object(Vt.e)();
                  } catch (t) {
                    Object(Kt.b)(t, '_doAfterAaxResponse', !0);
                  }
                }
                function g (t) {
                  try {
                    if (Object(Ut.m)(t, 'fp')) {
                      var e = t.fp;
                      Object(Ut.m)(e, 'length') &&
                        e.forEach(function (t) {
                          var e = t.d ? t.d : 0;
                          setTimeout(function () {
                            Object(Vt.d)(t.s);
                          }, e);
                        });
                    }
                  } catch (t) {
                    Object(Kt.b)(t, 'fireAAXPixels');
                  }
                }
                function h () {
                  try {
                    qt.a.getState().Q.forEach(function (t) {
                      'i' === t[0]
                        ? window.apstag.init.apply(null, t[1])
                        : window.apstag.fetchBids.apply(null, t[1]);
                    });
                  } catch (t) {
                    Object(Kt.b)(t, '_QHandler', !0);
                  }
                }
                function y (t) {
                  try {
                    Object(Ut.l)(t) ||
                      (Object(Kt.c)('init.config', ce(t), 'object'), (t = { pubID: 'err' })),
                      Object(ee.b)(t.pubID, ['string', 'number'])
                        ? 'number' == typeof t.pubID && (t.pubID = ''.concat(t.pubID))
                        : Object(Kt.c)('init.config.pubID', ce(t.pubID), 'string'),
                      Object(ee.b)(t.adServer, ['undefined', 'string']) ||
                        Object(Kt.c)('init.config.adServer', ce(t.adServer), 'string'),
                      Object(ee.a)(t.bidTimeout) ||
                        ('string' == typeof t.bidTimeout
                          ? Object(Kt.b)(
                              {
                                name: 'string-'.concat(t.bidTimeout),
                                message: "init.config.bidTimeout was a non-numeric string '".concat(
                                  t.bidTimeout,
                                  "'"
                                ),
                              },
                              'TypeError-init.config.bidTimeout',
                              !0
                            )
                          : Object(Kt.c)('init.config.bidTimeout', ce(t.bidTimeout), 'number')),
                      Object(ee.b)(t.gdpr, ['undefined', 'object'])
                        ? 'object' === ce(t.gdpr) &&
                          (Object(ee.a)(t.gdpr.cmpTimeout) ||
                            (Object(ee.b)(t.gdpr.cmpTimeout, ['string', 'undefined'])
                              ? Object(Kt.b)(
                                  {
                                    name: 'string-'.concat(t.bidTimeout),
                                    message: "init.config.gdpr.cmpTimeout was a non-numeric string '".concat(
                                      t.gdpr.cmpTimeout,
                                      "'"
                                    ),
                                  },
                                  'TypeError-init.config.gdpr.cmpTimeout',
                                  !0
                                )
                              : Object(Kt.c)(
                                  'init.config.gdpr.cmpTimeout',
                                  ce(t.gdpr.cmpTimeout),
                                  'number'
                                )))
                        : Object(Kt.c)('init.config.gdpr', ce(t.gdpr), 'object'),
                      Object(Ut.m)(t, 'params') && !Object(Ut.l)(t.params)
                        ? Object(Kt.c)('init.config.params', ce(t.params), 'object')
                        : Object(Ut.m)(t, 'params') &&
                          Object.keys(t.params).forEach(function (e) {
                            return !(
                              !Object(Ut.m)(t, 'params') ||
                              ('string' != typeof t.params[e] &&
                                'number' != typeof t.params[e] &&
                                (Object(Ut.k)(t.params[e])
                                  ? !t.params[e].reduce(function (t, e) {
                                      return t && ('string' == typeof e || 'number' == typeof e);
                                    }, !0) &&
                                    (Object(Kt.b)(
                                      {
                                        name: 'non-string array item',
                                        message: "'init.config.params.".concat(
                                          e,
                                          ' contains a non-string item'
                                        ),
                                      },
                                      'TypeError-init.config.params.'.concat(e),
                                      !0
                                    ),
                                    1)
                                  : (Object(Kt.c)(
                                      'init.config.params.'.concat(e),
                                      ce(t.params[e]),
                                      "string' or 'array"
                                    ),
                                    1)))
                            );
                          }),
                      Object(Ut.m)(t, 'params') && Object(Ut.m)(t.params, 'us_privacy')
                        ? Object(Vt.c)('ccpa', 'y')
                        : Object(Vt.c)('ccpa', 'n'),
                      Object(Ut.m)(t, 'blockedBidders') && !Object(Ut.k)(t.blockedBidders)
                        ? Object(Kt.c)('init.config.blockedBidders', ce(t.blockedBidders), 'array')
                        : Object(Ut.m)(t, 'blockedBidders') &&
                          Object(Ut.k)(t.blockedBidders) &&
                          (t.blockedBidders.reduce(function (t, e) {
                            return t && ('string' == typeof e || 'number' == typeof e);
                          }, !0) ||
                            Object(Kt.b)(
                              {
                                name: 'non-string array item',
                                message: "'init.config.blockedBidders contains a non-string item",
                              },
                              'TypeError-init.config.blockedBidders',
                              !0
                            )),
                      Object(Ut.m)(t, 'blockedBidders')
                        ? Object(Vt.c)('blockedBidders-init', 'y')
                        : Object(Vt.c)('blockedBidders-init', 'n'),
                      Object(ee.b)(t.simplerGPT, ['undefined', 'boolean']) ||
                        Object(Kt.c)('init.config.simplerGPT', ce(t.simplerGPT), 'boolean'),
                      t.simplerGPT
                        ? Object(Vt.c)('simplerGpt', 'y')
                        : Object(Vt.c)('simplerGpt', 'n'),
                      Object(ee.b)(t.deals, ['undefined', 'boolean']) ||
                        Object(Kt.c)('init.config.deals', ce(t.deals), 'boolean'),
                      t.deals ? Object(Vt.c)('deals', 'y') : Object(Vt.c)('deals', 'n'),
                      Object(ee.b)(t.schain, ['undefined', 'object']) && null !== t.schain
                        ? Object(Ut.m)(t, 'schain') && !Object($t.i)(t.schain) && delete t.schain
                        : (Object(Kt.c)('init.config.schain', ce(t.schain), 'object'),
                          delete t.schain),
                      Object(Ut.m)(t, 'schain')
                        ? Object(Vt.c)('schain', 'y')
                        : Object(Vt.c)('schain', 'n'),
                      Object(ee.b)(t.useSafeFrames, ['undefined', 'boolean']) ||
                        (Object(Kt.c)('init.config.useSafeFrames', ce(t.useSafeFrames), 'boolean'),
                        delete t.useSafeFrames),
                      t.useSafeFrames
                        ? Object(Vt.c)('useSafeFrames', 'y')
                        : Object(Vt.c)('useSafeFrames', 'n');
                  } catch (e) {
                    Object(Kt.b)(e, '_validateAndStoreConfig-validateConfig');
                  }
                  try {
                    var e = qt.a.getState().config;
                    Object(Ut.m)(e, 'pubID') &&
                      Object(Ut.m)(t, 'pubID') &&
                      e.pubID !== t.pubID &&
                      Object(Kt.b)(
                        new Error(
                          '`apstag.init` was called multiple times with different pubIDs ('
                            .concat(e.pubID, ' then ')
                            .concat(t.pubID, ')')
                        ),
                        '_validateAndStoreConfig-diffPubId',
                        !0
                      ),
                      qt.a.dispatch({ type: 'SET_GDPR_CONFIG', config: null }),
                      qt.a.dispatch({
                        type: 'SET_CONFIG',
                        config: t,
                        defaultCmpTimeout: qt.a.getState().cfg.GDPR_CMP_TIMEOUT,
                      });
                  } catch (e) {
                    Object(Kt.b)(e, '_validateAndStoreConfig', !0);
                  }
                }
                function O (t) {
                  try {
                    var e = t.slotID;
                    if (Object(Ut.m)(t.bidConfig, 'mediaType') && 'v' === t.bidConfig.mediaType)
                      return;
                    if (!Yt.a.hasAdServerObjectLoaded())
                      return void Object(Kt.a)("displayAdServer Object hasn't been defined", !0);
                    if (!Yt.a.isCommandQueueDefined())
                      return void Object(Kt.a)(
                        "displayAdServer Object's cmd queue hasn't been defined",
                        !0
                      );
                    Yt.a.hasAdServerObjectLoaded()
                      ? null !== j(e)
                        ? R(t)
                        : Object(Kt.a)(
                            ''.concat(e, " isn't defined when trying to set amazon bid!")
                          )
                      : Yt.a.cmdQueuePush(function () {
                          O(t);
                        });
                  } catch (t) {
                    Object(Kt.b)(t, '_safeApplySlotTargeting', !0);
                  }
                }
                function j (t) {
                  var e = null;
                  try {
                    e =
                      Object(Mt.b)(Yt.a).filter(function (e) {
                        return e.slotID === t;
                      })[0] || null;
                  } catch (e) {
                    Object(Kt.b)(e, '_getAdServerSlot');
                  }
                  return e;
                }
                function v (t) {
                  try {
                    var e = qt.a.getState().targetingKeys[t.slotID];
                    Yt.a.hasAdServerObjectLoaded() &&
                      Object(Ut.k)(e) &&
                      e.forEach(function (e) {
                        return 0 < t.getTargeting(e).length && t.clearTargeting(e);
                      });
                  } catch (e) {
                    Object(Kt.b)(e, '_clearTargetingFromSlot', !0);
                  }
                }
                function S (t) {
                  try {
                    if (Object(Ut.m)(qt.a.getState().slotBids, t.slotID)) {
                      var e = qt.a.getState().slotBids[t.slotID].filter(function (t) {
                        return t.bidState === Qt.b.set;
                      })[0];
                      e &&
                        e.bidState === Qt.b.set &&
                        qt.a.dispatch({
                          type: 'BID_STATE_CHANGE',
                          slotID: t.slotID,
                          _targetingSetID: e._targetingSetID,
                          bidState: Qt.b.exposed,
                        });
                    }
                  } catch (t) {
                    Object(Kt.b)(t, '_clearBidSetOnSlot', !0);
                  }
                }
                function _ (t, e) {
                  try {
                    return (
                      t
                        .map(function (t) {
                          return Object(Ut.j)(e, t);
                        })
                        .filter(function (t) {
                          return t;
                        }).length === t.length
                    );
                  } catch (t) {
                    return void Object(Kt.b)(t, '_hasAllItemsInArray');
                  }
                }
                function w () {
                  var t = {};
                  try {
                    Object.keys(qt.a.getState().slotBids).forEach(function (e) {
                      var n = qt.a.getState().slotBids[e].filter($t.f);
                      0 < n.length &&
                        (t[e] = n
                          .map(function (t) {
                            return {
                              rqTs: qt.a.getState().AAXReqs.filter(function (e) {
                                return e.bidReqID === t.bidReqID;
                              })[0].rqTs,
                              bid: t,
                            };
                          })
                          .reduce(function (t, e) {
                            return t.rqTs > e.rqTs ? t : e;
                          }).bid);
                    });
                  } catch (t) {
                    Object(Kt.b)(t, '_getCurrentSlotBids', !0);
                  }
                  return t;
                }
                function E (t, e) {
                  try {
                    return Object(Ut.k)(qt.a.getState().targetingKeys[t])
                      ? e
                        ? ['amzniid_sp']
                        : qt.a.getState().targetingKeys[t].filter(function (t) {
                            return -1 < t.indexOf('amzniid') && t.indexOf('amzniid_sp') < 0;
                          })
                      : ['amzniid'];
                  } catch (t) {
                    return Object(Kt.b)(t, '_getAllBidIdKeys'), [];
                  }
                }
                function D (t, e) {
                  var n, r;
                  try {
                    var i = qt.a.getState().slotBids;
                    Object.keys(i).forEach(function (c) {
                      i[c].forEach(function (i) {
                        E(c, e).forEach(function (e) {
                          i.bidConfig[e] === t &&
                            ((n = i),
                            'amzniid_sp' === e
                              ? (r = 'sp')
                              : 'amzniid' !== e && (r = e.substr(0, e.indexOf('amzniid'))));
                        });
                      });
                    });
                  } catch (t) {
                    Object(Kt.b)(t, '_findSlotBidByBidID', !0);
                  }
                  return { slotBid: n, dealId: r };
                }
                function T (t, e, n) {
                  var r = '';
                  try {
                    e.bidConfig[n + 'amzniid'] === t && (r = n.split('_').pop().trim());
                  } catch (t) {
                    Object(Kt.b)(t, '_getPMPBidSize');
                  }
                  return r;
                }
                function I (t) {
                  try {
                    if (void 0 === t.slots) return [];
                    var e = {},
                      n = (qt.a.getState().bidConfigs[t.cb] || { slots: [] }).slots.reduce(
                        function (t, e) {
                          return (t[e.slotID] = e), t;
                        },
                        {}
                      );
                    return (
                      t.slots.forEach(function (t) {
                        if (void 0 === t.mediaType && void 0 !== n[t.slotID]) {
                          var r = n[t.slotID].mediaType;
                          t.mediaType = 'display' === r ? 'd' : 'v';
                        }
                        'video' !== t.mediaType && 'v' !== t.mediaType
                          ? (e[t.slotID] = new $t.a(t))
                          : (0 <= t.slotID.indexOf('rsv-') &&
                              (t = {
                                slotID: t.slotID.substring(4),
                                r_amznbid: t.amznbid,
                                r_amzniid: t.amzniid,
                                r_amznp: t.amznp,
                                mediaType: 'video',
                                targeting: ['r_amznbid', 'r_amzniid', 'r_amznp'],
                                amznsz: t.amznsz,
                                size: t.size,
                                crid: t.crid,
                                meta: t.meta,
                              }),
                            Object(Ut.m)(e, t.slotID)
                              ? t.targeting.forEach(function (n) {
                                  (e[t.slotID].bidConfig[n] = t[n]),
                                    -1 === e[t.slotID].bidConfig.targeting.indexOf(n) &&
                                      e[t.slotID].bidConfig.targeting.push(n);
                                })
                              : (e[t.slotID] = new $t.a(t)));
                      }),
                      Object.keys(e).map(function (t) {
                        return e[t];
                      })
                    );
                  } catch (t) {
                    return Object(Kt.b)(t, '_mergeVideoBids'), [];
                  }
                }
                function A (t) {
                  var e = I(t),
                    n = [];
                  try {
                    n = e.map(function (e) {
                      return (
                        (e.bidReqID = t.cb), (e.host = t.host), (e.ev = t.ev), (e.cfe = t.cfe), e
                      );
                    });
                  } catch (e) {
                    Object(Kt.b)(e, '_convertAaxResponse');
                  }
                  return n;
                }
                function R (t) {
                  try {
                    var e = t.slotID,
                      n = t._targetingSetID;
                    if (t.bidState === Qt.b.set) return;
                    var r = j(e);
                    if (null !== r) {
                      S(r);
                      var i = t.newBidObject;
                      Object.keys(i.targeting).forEach(function (t) {
                        return r.setTargeting(t, i.targeting[t]);
                      }),
                        qt.a.dispatch({
                          type: 'BID_STATE_CHANGE',
                          slotID: e,
                          _targetingSetID: n,
                          bidState: Qt.b.set,
                          ts: Date.now(),
                        });
                    }
                  } catch (t) {
                    Object(Kt.b)(t, '_applyTargetingToAdServerSlot', !0);
                  }
                }
                function C (t) {
                  try {
                    var e = w();
                    t.forEach(function (t) {
                      e[t] && O(e[t]);
                    });
                  } catch (t) {
                    Object(Kt.b)(t, '_applySuppliedSlotBidsToAdServerObject', !0);
                  }
                }
                function P () {
                  try {
                    var t = w();
                    Object.keys(t).forEach(function (e) {
                      return O(t[e]);
                    });
                  } catch (t) {
                    Object(Kt.b)(t, '_applyAllCurrentSlotBidsTargetingToAdServerObject', !0);
                  }
                }
                function z (t) {
                  try {
                    t
                      ? (Object(Vt.c)('targeting', 'setDisplayBids-list'), C(t))
                      : (Object(Vt.c)('targeting', 'setDisplayBids-all'), P()),
                      qt.a.getState().displayAdServer.slotRenderEndedSet ||
                        (Yt.a.cmdQueuePush(function () {
                          try {
                            Yt.a.slotRenderEndedEvent(function (t) {
                              try {
                                v(t), S(t);
                              } catch (t) {
                                Object(Kt.b)(t, '_applySlotTargeting-cmdQueue-slotCb', !0);
                              }
                            });
                          } catch (t) {
                            Object(Kt.b)(t, '_applySlotTargeting-cmdQueue', !0);
                          }
                        }),
                        qt.a.dispatch({ type: 'SLOT_RENDER_ENDED_SET' }));
                  } catch (t) {
                    Object(Kt.b)(t, '_applySlotTargeting', !0);
                  }
                }
                function k () {
                  var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                    e = '1881141382166183';
                  function n (t) {
                    try {
                      var e = JSON.parse(t),
                        n = e.fbToken,
                        r = new Date(parseInt(e.expAfter, 10)).toUTCString();
                      document.cookie = 'aps_ext_917='.concat(n, '; expires=').concat(r);
                    } catch (t) {
                      Object(Kt.b)(t, '_doFbSync-setFbCookie');
                    }
                  }
                  function r (e) {
                    try {
                      !(function (t, e, n) {
                        try {
                          !(function (t, e) {
                            try {
                              var n = {
                                url: t,
                                withCredentials: !0,
                                onload: function (t) {
                                  return e(t.responseText);
                                },
                              };
                              Object(Jt.d)(n);
                            } catch (t) {
                              Object(Kt.b)(t, '_doFbSync-sendTokenRequest');
                            }
                          })(
                            (function (t, e) {
                              try {
                                return ''
                                  .concat(
                                    'https://www.facebook.com/audiencenetwork/token/update',
                                    '?partner='
                                  )
                                  .concat(encodeURIComponent(t), '&vr_token=')
                                  .concat(encodeURIComponent(e));
                              } catch (t) {
                                return Object(Kt.b)(t, '_doFbSync-getUpdateUrl'), '';
                              }
                            })(t, e),
                            n
                          );
                        } catch (t) {
                          Object(Kt.b)(t, '_doFbSync-getV4Token');
                        }
                      })(
                        e,
                        (function () {
                          try {
                            for (var e = 'VR_', n = 0; n < 197; ++n)
                              e += t.charAt(Math.floor(Math.random() * t.length));
                            return e;
                          } catch (e) {
                            return Object(Kt.b)(e, '_doFbSync-getVrToken'), '';
                          }
                        })(),
                        n
                      );
                    } catch (e) {
                      Object(Kt.b)(e, '_doFbSync-getTokenResponse');
                    }
                  }
                  try {
                    'complete' === document.readyState
                      ? r(e)
                      : window.addEventListener('load', function () {
                          r(e);
                        });
                  } catch (e) {
                    Object(Kt.b)(e, '_doFbSync');
                  }
                }
                function B (t, e) {
                  function n () {
                    if (!i)
                      if (20 <= c++)
                        Object(Kt.b)(
                          {
                            name: 'LoopError',
                            message: 'Too many attempts to append to document.body',
                          },
                          '_safeDocumentBodyAppendChild-callback-loops',
                          !0
                        );
                      else {
                        try {
                          if (
                            t &&
                            t.body &&
                            null !== t.body &&
                            'function' == typeof t.body.appendChild
                          )
                            return t.body.appendChild(e), r(), void (i = !0);
                        } catch (t) {
                          Object(Kt.b)(t, '_safeDocumentBodyAppendChild-callback');
                        }
                        setTimeout(n, 100);
                      }
                  }
                  var r =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : function () {},
                    i = !1,
                    c = 0;
                  try {
                    'complete' === t.readyState || 'interactive' === t.readyState
                      ? (Object(Vt.c)('appended', 'sync'), n())
                      : (Object(Vt.c)('appended', 'async'),
                        t.addEventListener('DOMContentLoaded', n));
                  } catch (t) {
                    Object(Kt.b)(t, '_safeDocumentBodyAppendChild');
                  }
                }
                function L (t) {
                  try {
                    var e, n;
                    return (
                      (e = ''.concat(t.host).concat(qt.a.getState().cfg.DTB_PATH, '/imp')),
                      (n = ''.concat(t.host).concat(qt.a.getState().cfg.DTB_PATH, '/adm')),
                      t.cfe || t.isAmp || t.isSf ? n : e
                    );
                  } catch (t) {
                    return Object(Kt.b)(t, 'determineCreativeFetchEndpoint'), '';
                  }
                }
                function x (t) {
                  try {
                    var e,
                      n = '?b='.concat(t.bidID, '&rnd=').concat(Object(Ut.e)());
                    return (
                      Object(Ut.m)(t, 'pp') && (n += '&pp='.concat(t.pp)),
                      Object(Ut.m)(t, 'amznp') && (n += '&p='.concat(t.amznp)),
                      Object(Ut.m)(t, 'crID') && (n += '&crid='.concat(t.crID)),
                      Object(Ut.m)(t, 'isSharedPMP') && !0 === t.isSharedPMP && (n += '&sp=true'),
                      Object(Ut.m)(window, 'confiant') && (n += '&ep=%7B%22ce%22%3A%221%22%7D'),
                      (e = L(t)),
                      t.fif ? ''.concat(e, 'j').concat(n) : ''.concat(e, 'i').concat(n)
                    );
                  } catch (t) {
                    return Object(Kt.b)(t, '_creativeURL'), '';
                  }
                }
                function N (t) {
                  try {
                    var e = t.doc.createElement('iframe');
                    return (
                      (e.frameBorder = '0'),
                      (e.marginHeight = '0'),
                      (e.marginWidth = '0'),
                      (e.style.marginTop = '0'),
                      (e.style.marginLeft = '0'),
                      (e.scrolling = 'no'),
                      t.inheritSize
                        ? ((e.style.width = '100%'), (e.style.height = '100%'))
                        : ((e.style.width = ''.concat(t.sizes[0], 'px')),
                          (e.style.height = ''.concat(t.sizes[1], 'px'))),
                      e
                    );
                  } catch (t) {
                    return Object(Kt.b)(t, '_baseIframe'), window.document.createElement('iframe');
                  }
                }
                function q (t) {
                  try {
                    if (Object(Ut.m)(t, 'bidType')) {
                      var e = t.kvMap;
                      switch (t.bidType) {
                        case 'sharedPMP':
                          return {
                            bidID: e.amzniid_sp[0],
                            pp: e.amznbid_sp[0],
                            sizes: e.amznsz_sp[0].split('x'),
                            amznp: e.amznp_sp[0],
                            inheritSize: t.inheritSize,
                            isSharedPMP: t.isSharedPMP,
                          };
                        case 'preferredPMP':
                          if (Object(te.a)(t) && Object(Ut.m)(t, 'amzndeal')) {
                            var n = t.amzndeal.split('_').pop().trim();
                            return { bidID: e[''.concat(t.amzndeal, 'amzniid')][0], sizes: _t(n) };
                          }
                          break;
                        case 'openAuction':
                          if (Object(te.a)(t))
                            return {
                              bidID: e.amzniid[0],
                              pp: Object(Ft.b)(e.amznbid[0]),
                              amznp: e.amznp[0],
                              inheritSize: t.inheritSize,
                              sizes: e.amznsz[0].split('x'),
                            };
                          if (Object(te.b)(t))
                            return {
                              bidID: t.amzniid,
                              pp: Object(Ft.b)(t.amznbid),
                              amznp: t.amznp,
                              sizes: t.amznsz.split('x'),
                            };
                          break;
                        default:
                          Object(Kt.b)(
                            {
                              name: 'Invalid AMP Bid Type: '.concat(t.bidType),
                              message: 'No valid AMP bid type',
                            },
                            'getAmpAdData-invalidBidType'
                          );
                      }
                    }
                  } catch (t) {
                    Object(Kt.b)(t, 'getAmpAdData');
                  }
                  return { bidID: 'ERROR', sizes: [] };
                }
                function F (t, e) {
                  try {
                    var n = null;
                    if (
                      (void 0 !== e &&
                        ((Object(Ut.m)(e, 'ampEnv') && e.ampEnv) ||
                          (Object(Ut.m)(e, 'sfEnv') && e.sfEnv)) &&
                        ((n = e),
                        Object(Ut.m)(e, 'bidType') && 'sharedPMP' === e.bidType
                          ? (n.isSharedPMP = !0)
                          : (n.isSharedPMP = !1),
                        (n.document = t),
                        (n.amznhost = n.kvMap.amznhost[0])),
                      vt(t) && (((n = t).bidType = 'openAuction'), (n.ampEnv = !0)),
                      null === n)
                    )
                      return void Object(Kt.b)(
                        new Error('Invalid AMP parameters'),
                        '_renderAmpImpression-invalidParams',
                        !0
                      );
                    var r = q(n);
                    if ('ERROR' === r.bidID) return;
                    if (
                      ((r.doc = n.document),
                      (r.host = n.amznhost.replace('http://', 'https://')),
                      (r.adID = 'amznad'.concat(Object(Ut.e)())),
                      (r.isAmp = n.ampEnv),
                      (r.isSf = Object(Xt.c)(window)),
                      qt.a.getState().aaxViewabilityEnabled)
                    )
                      return void Dt(r, r.doc);
                    M(r);
                  } catch (t) {
                    Object(Kt.b)(t, '_renderAmpImpression');
                  }
                }
                function U (t) {
                  var e;
                  function n (n) {
                    try {
                      if (
                        (n && (t.hasTimedOut = !0),
                        n &&
                          !t.hasRendered &&
                          Object(Kt.b)(
                            { name: 'RenderTimeout', message: 'renderAd was called from timeout' },
                            '__loadAdIntoFriendlyIframe-renderAd-timeout'
                          ),
                        null === e.contentDocument)
                      )
                        return void Object(Kt.b)(
                          {
                            name: 'NoDocument',
                            message: 'iframe.contentDocument was null inside renderAd',
                          },
                          '__loadAdIntoFriendlyIframe-renderAd-noDocument',
                          !0
                        );
                      if (t.hasRendered && !t.hasTimedOut)
                        return void Object(Kt.b)(
                          { name: 'DupeRender', message: 'Render was called twice' },
                          '__loadAdIntoFriendlyIframe-renderAd-rerender',
                          !0
                        );
                      if (t.hasRendered) return;
                      (t.hasRendered = !0),
                        e.contentDocument.open(),
                        e.contentDocument.write(t.html),
                        e.contentDocument.close();
                    } catch (n) {
                      Object(Kt.b)(n, '__loadAdIntoFriendlyIframe-renderAd');
                    }
                  }
                  try {
                    if ((Object(Vt.c)('iframe', 'friendly'), void 0 === t.html))
                      throw new Error(
                        'No HTML available for ad, most likely the creative has expired'
                      );
                    (t = ie({ hasRendered: !1, hasTimedOut: !1 }, t)),
                      ((e = N(t)).id = 'apstag-f-iframe-'.concat(Object(Ut.e)())),
                      B(t.doc, e, function () {
                        var t = n.bind(null, !1);
                        try {
                          null !== e.contentDocument &&
                          Object(Ut.j)(['complete', 'interactive'], e.contentDocument.readyState)
                            ? (t(), Object(Vt.c)('fifFlow', 'doc-ready'))
                            : null !== e.contentDocument &&
                              'uninitialized' !== e.contentDocument.readyState
                            ? (e.contentDocument.addEventListener('DOMContentLoaded', t),
                              Object(Vt.c)('fifFlow', 'dom-listener'))
                            : (e.addEventListener('load', t),
                              Object(Vt.c)('fifFlow', 'iframe-listener')),
                            setTimeout(n, 1000, !0);
                        } catch (t) {
                          Object(Kt.b)(t, '_loadAdIntoFriendlyIframe-setAttributes');
                        }
                      });
                  } catch (t) {
                    Object(Kt.b)(t, '_loadAdIntoFriendlyIframe', !0);
                  }
                }
                function M (t) {
                  var e =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {
                            states: { csmLoaded: !1, iframeLoaded: !1, shouldRunViewability: !1 },
                          },
                    n = 2 < arguments.length ? arguments[2] : void 0;
                  try {
                    Object(Vt.c)('iframe', 'unfriendly');
                    var r = N(t);
                    if (
                      ((r.id = t.adID),
                      r.setAttribute(
                        'sandbox',
                        'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
                      ),
                      Object(Gt.d)('fake_bids'))
                    ) {
                      var i = '<body style="background-color: #FF9900;">'
                        .concat(
                          50 < parseInt(t.sizes[1], 10) ? '<h3>apstag Test Creative</h3>' : '',
                          '<h4>amzniid - '
                        )
                        .concat(t.bidID, ' | amznbid: ')
                        .concat(t.pp, ' | size: ')
                        .concat(t.sizes.join('x'), '</h4></body>');
                      r.src = "javascript:'".concat(i, "'");
                    } else r.src = x(t);
                    (!(t.isAmp && t.isSf && Object(Xt.b)(window)) &&
                      (!t.isSf || t.isAmp || t.inheritSize)) ||
                      Object(Xt.a)(t.sizes, window),
                      B(t.doc, r),
                      ((e.iframe = r).onload = function () {
                        (e.states.iframeLoaded = !0), n && n();
                      });
                  } catch (t) {
                    Object(Kt.b)(t, '_loadAdIntoUnfriendlyIframe', !0);
                  }
                }
                function G (t) {
                  var e = t.states,
                    n = t.doc,
                    r = t.bidID,
                    i = t.iframe;
                  try {
                    if (Object(Ut.a)(e)) return;
                    var c;
                    (e.shouldRunViewability = !1),
                      Object(Ut.m)(window, 'amzncsm')
                        ? (c = window.amzncsm)
                        : void 0 !== n &&
                          null !== n.defaultView &&
                          Object(Ut.m)(n.defaultView, 'amzncsm') &&
                          (c = n.defaultView.amzncsm),
                      void 0 !== n &&
                        void 0 !== c &&
                        Object(Ut.m)(c, 'rmD') &&
                        ((c.host = Object(Gt.c)(
                          'host',
                          qt.a.getState().hosts.DEFAULT_AAX_PIXEL_HOST
                        )),
                        c.rmD(i, r, n.defaultView, n, qt.a.getState().config.pubID));
                  } catch (t) {
                    Object(Kt.b)(t, '_triggerViewability');
                  }
                }
                function Q (t, e) {
                  return function (n) {
                    try {
                      var r = Object($t.e)(e.slots),
                        i = Object.keys(r),
                        c = [];
                      n &&
                        (qt.a.dispatch({
                          type: 'RECORD_AAX_REQ_PROP',
                          bidReqID: e.bidReqID,
                          key: 'timedOutAt',
                          value: Date.now(),
                        }),
                        qt.a.getState().experiments.chunkRequests &&
                          qt.a.dispatch({
                            type: 'RECORD_TIMEOUT',
                            fid: e.bidReqID,
                            timeOut: Date.now(),
                          })),
                        i.forEach(function (t) {
                          if (Object(Ut.m)(r, t)) {
                            var e = r[t];
                            Object($t.g)(qt.a.getState(), Yt.a) ||
                            Object(Ut.m)(e.bidConfig, 'amznbid')
                              ? Object(Ut.m)(e.bidConfig, 'amznp') || (e.bidConfig.amznp = '')
                              : (Object(Vt.c)('unusedDeal', e.mediaType),
                                'video' !== e.mediaType &&
                                  (e.bidConfig.targeting.unshift('amznsz'),
                                  (e.bidConfig.amznsz = '0x0')),
                                e.bidConfig.targeting.unshift('amzniid', 'amznbid', 'amznp'),
                                (e.bidConfig.amzniid = ''),
                                (e.bidConfig.amznbid = Qt.s.noBid),
                                (e.bidConfig.amznp = Qt.s.noBid)),
                              c.push(e);
                          }
                        }),
                        Yt.a.isSupported && (c = Object($t.c)(c, e, n));
                      var o = { fromTimeout: n },
                        a = Object($t.g)(qt.a.getState(), Yt.a);
                      t(
                        c.map(function (t) {
                          return a ? t.newBidObject : t.bidObject;
                        }),
                        o
                      );
                    } catch (n) {
                      Object(Kt.b)(n, '_bidCallbackHandler', !0);
                    }
                  };
                }
                function H (t, e) {
                  try {
                    var n;
                    (n =
                      t.defaultView && t.defaultView.frameElement
                        ? t.defaultView.frameElement
                        : window.frameElement),
                      e.inheritSize
                        ? Object(Vt.c)('creativeSize', 'inherited')
                        : (Object(Vt.c)('creativeSize', 'resized'),
                          (n.style.width = ''.concat(e.sizes[0], 'px')),
                          (n.style.height = ''.concat(e.sizes[1], 'px')));
                  } catch (t) {
                    Object(Kt.b)(t, '_resizeIframe');
                  }
                }
                function X (t) {
                  try {
                    return ''.concat(t[0], 'x').concat(t[1]);
                  } catch (t) {
                    return Object(Kt.b)(t, '_sizeArrayToSring'), 'x';
                  }
                }
                function V (t) {
                  try {
                    return 1 === t.length ? X(t[0]) : X(t[Math.floor(t.length * Math.random())]);
                  } catch (t) {
                    return Object(Kt.b)(t, '_pickRandomSizeForMockBid', !0), '';
                  }
                }
                function K (t, e) {
                  try {
                    var n,
                      r = Object(Gt.c)('host', qt.a.getState().hosts.DEFAULT_AAX_BID_HOST),
                      i = Object(Ft.f)(window),
                      c = t.bidReqID,
                      o = Object(Ut.h)(window),
                      a = Object(Gt.c)('testBidTimeout', 200);
                    qt.a.dispatch({
                      type: 'RECORD_AAX_REQUEST',
                      data: {
                        bidConfig: t,
                        timeout: a,
                        bidReqID: c,
                        ws: o,
                        url: i,
                        rqTs: Date.now(),
                      },
                    }),
                      (n = t.slots.map(function (t) {
                        var e,
                          n = V(t.sizes),
                          r = 'testDeal'.concat(Object(Ut.e)(), '_').concat(n),
                          i = 'testDealIi-'.concat(Object(Ut.e)()),
                          c = V(t.sizes),
                          o =
                            (oe(
                              (e = {
                                slotID: t.slotID,
                                crid: ''.concat(Qt.m.crid, '-').concat(Object(Ut.e)()),
                                size: c,
                                amzniid: ''.concat(Qt.m.amzniid, '-').concat(Object(Ut.e)()),
                                amznbid: Qt.m.amznbid,
                                amznp: Qt.m.amznp,
                                amznsz: c,
                                amzniid_sp: ''.concat(Qt.m.amzniid, '-').concat(Object(Ut.e)()),
                                amznbid_sp: ''.concat(Qt.m.amznbid, 'SP'),
                                amznp_sp: ''.concat(Qt.m.amznp, 'SP'),
                                amznsz_sp: V(t.sizes),
                                amzndeals: [r],
                              }),
                              ''.concat(r, 'amzniid'),
                              i
                            ),
                            oe(e, 'mediaType', 'd'),
                            oe(e, 'meta', ['slotID', 'mediaType', 'size']),
                            oe(e, 'targeting', [
                              'amzniid',
                              'amznbid',
                              'amznp',
                              'amznsz',
                              'amzniid_sp',
                              'amznbid_sp',
                              'amznp_sp',
                              'amznsz_sp',
                              'amzndeal_sp',
                              'amzndeals',
                              ''.concat(r, 'amzniid'),
                            ]),
                            e);
                        'video' === t.mediaType &&
                          ((o.mediaType = 'video'), (o.amznbid = 'v_'.concat(o.amznbid)));
                        var a = new $t.a(o);
                        return Object($t.g)(qt.a.getState(), Yt.a) ? a.newBidObject : a.bidObject;
                      })),
                      setTimeout(function () {
                        window.apstag.bids({ slots: n, host: r, status: 'ok', cb: c }), e(!0);
                      }, a);
                  } catch (t) {
                    Object(Kt.b)(t, '_doMockBid', !0);
                  }
                }
                function J (t) {
                  try {
                    var e = qt.a.getState().AAXReqs.filter(function (e) {
                      return e.bidReqID === t.cb;
                    })[0];
                    if (e && e.bidConfig && e.bidConfig.slots) {
                      var n = e.bidConfig.slots.filter(Mt.d).map(function (t) {
                          return t.slotID;
                        }),
                        r = Object(Ut.m)(t, 'slots')
                          ? t.slots.map(function (t) {
                              return t.slotID;
                            })
                          : [],
                        i = n.filter(function (t) {
                          return !Object(Ut.j)(r, t);
                        });
                      qt.a.dispatch({ type: 'NO_BID_ON_ADSERVER_SLOTS', slotIDs: i }),
                        Yt.a.hasAdServerObjectLoaded()
                          ? $()
                          : Yt.a.isCommandQueueDefined() &&
                            Yt.a.cmdQueuePush(function () {
                              $();
                            });
                    }
                  } catch (e) {
                    Object(Kt.b)(e, '_determineNoBidStateForAdServerObject');
                  }
                }
                function W (t) {
                  return Object(Ut.j)(
                    qt.a
                      .getState()
                      .AAXReqs.filter(function (t) {
                        return !t.resTs;
                      })
                      .map(function (t) {
                        return t.bidConfig.slots;
                      })
                      .reduce(function (t, e) {
                        return t.concat(e);
                      }, [])
                      .map(Mt.c),
                    t
                  );
                }
                function Y (t) {
                  try {
                    var e = t.getTargeting('amznbid');
                    return 0 < e.length && 2 < e[0].length;
                  } catch (t) {
                    return Object(Kt.b)(t, '_isRealAmznbidTargetingSetOnSlot'), 1;
                  }
                }
                function $ () {
                  try {
                    Yt.a.hasAdServerObjectLoaded() &&
                      '1' === Yt.a.getTargeting('amznbid')[0] &&
                      tt(),
                      Object(Mt.b)(Yt.a).forEach(function (t) {
                        !Object(Ut.j)(qt.a.getState().displayAdServer.noBidSlotIDs, t.slotID) ||
                          W(t.slotID) ||
                          Y(t) ||
                          '2' === t.getTargeting('amznbid')[0] ||
                          Z('noBid', t);
                      });
                  } catch (t) {
                    Object(Kt.b)(t, '_applyNoBidFromAAXState');
                  }
                }
                function Z (t, e) {
                  Qt.t.forEach(function (n) {
                    return e.setTargeting(n, Qt.s[t]);
                  });
                }
                function tt () {
                  Qt.t.forEach(function (t) {
                    return Yt.a.clearTargeting(t);
                  });
                }
                function et (t) {
                  try {
                    var e = { _type: 'dupePixel', dd: Date.now() - t.timing.renderTime };
                    Object(Vt.a)(t.bidConfig.amzniid, e);
                  } catch (t) {
                    Object(Kt.b)(t, '_sendDupeBidPixel');
                  }
                }
                function nt () {
                  try {
                    var t = Object(Ht.c)(window, new RegExp('aax2/apstag.js'));
                    if (null !== t) {
                      var e = {
                          _type: 'libLatency',
                          pid: $t.b,
                          ns: f,
                          fs: Object(Ht.a)(t, 'fetchStart'),
                          re: Object(Ht.a)(t, 'responseEnd'),
                        },
                        n = Object(Ht.f)(t);
                      null !== n && (e.c = n ? 1 : 0), setTimeout(Vt.b, 1000, e);
                    }
                  } catch (t) {
                    Object(Kt.b)(t, '_sendInitLatencyPixel');
                  }
                }
                !(function () {
                  const $___old_780c34880ea23105 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'localStorage'
                  );
                  try {
                    if ($___old_780c34880ea23105)
                      ({}.constructor.defineProperty(
                        window,
                        'localStorage',
                        $___stub_b317e19f866a2da7.localStorage
                      ));
                    return function () {
                      if (Object(Ut.i)()) {
                        var t = localStorage.getItem(Qt.c);
                        if (t) {
                          var e = JSON.parse(t);
                          null !== e && qt.a.dispatch({ type: 'SET_CFG', cfg: e });
                        }
                      }
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_780c34880ea23105)
                      ({}.constructor.defineProperty(
                        window,
                        'localStorage',
                        $___old_780c34880ea23105
                      ));
                  }
                })(),
                  (u = { renderTimes: {} }),
                  window.addEventListener(
                    'message',
                    function (t) {
                      if (Object(Ut.l)(t.data) && Object(Ut.m)(t.data, 'confiantData')) {
                        var e = t.data.confiantData,
                          n = e.id;
                        if (Object(Ut.m)(e, 'renderStart') || Object(Ut.m)(e, 'renderEnd')) {
                          var r = e.renderStart,
                            i = e.renderEnd;
                          if (r) u.renderTimes[n] = r;
                          else if (i && 0 !== u.renderTimes[n]) {
                            var c = i - u.renderTimes[n],
                              o = { _type: 'iframeRender', c: 'dtb', pid: $t.b, crt: c };
                            Object(Vt.b)(o);
                          }
                        } else {
                          var a = t.data.confiantData,
                            s = {
                              _type: 'confiantBlock',
                              c: 'dtb',
                              tpbr: 1,
                              pid: $t.b,
                              bid: a.bid,
                              bt: a.bt,
                              isb: a.isb,
                              propid: a.propid,
                              tagid: a.tagid,
                              impdata: JSON.stringify(a.impdata),
                            };
                          Object(Vt.b)(s);
                        }
                      }
                    },
                    !0
                  );
                var rt = 0,
                  it;
                function ot () {
                  try {
                    if (
                      !Object(Ut.m)(window, 'googletag') ||
                      !Object(Ut.m)(window.googletag, 'cmd')
                    )
                      return void (++rt < 5 && setTimeout(ot, 100));
                    new Wt.a().cmdQueuePush(function () {
                      try {
                        window.googletag.pubads().addEventListener('slotRequested', function (t) {
                          try {
                            var e = t.slot;
                            qt.a.dispatch({
                              type: 'LOG_GAM_EVENT',
                              event: ie(
                                ie({}, new Wt.b(e).slotConfig),
                                {},
                                { ts: Date.now(), targeting: e.getTargetingMap() }
                              ),
                            });
                          } catch (t) {
                            Object(Kt.b)(
                              t,
                              '_initializeSlotRequestedEventListener-cmdQueue-listener'
                            );
                          }
                        });
                      } catch (t) {
                        Object(Kt.b)(t, '_initializeSlotRequestedEventListener-cmdQueue');
                      }
                    });
                  } catch (t) {
                    Object(Kt.b)(t, '_initializeSlotRequestedEventListener');
                  }
                }
                function ct (t) {
                  try {
                    var e = t.AAXReqs.slice(t.gamSlotRenderPixel.aaxReqOffset)
                        .reduce(function (t, e) {
                          return t.concat(e.bidConfig.slots);
                        }, [])
                        .map(function (t) {
                          return ie(ie({}, t), {}, { type: 'a' });
                        })
                        .filter(function (t) {
                          return 'video' !== t.mediaType;
                        }),
                      n = t.gamSlotFetchLog
                        .slice(t.gamSlotRenderPixel.gamSlotFetchLogOffset)
                        .map(function (t) {
                          return ie(ie({}, t), {}, { type: 'g' });
                        }),
                      r = [].concat(re(e), re(n)).reduce(function (t, e) {
                        return (
                          void 0 === t[e.slotID] &&
                            (t[e.slotID] = { sd: e.slotID, a: { c: 0 }, g: { c: 0 } }),
                          t[e.slotID][e.type].c++,
                          (t[e.slotID][e.type].s = e.sizes),
                          (t[e.slotID][e.type].sn = e.slotName || ''),
                          t
                        );
                      }, {});
                    return Object.keys(r)
                      .map(function (t) {
                        return r[t];
                      })
                      .filter(function (t) {
                        return 0 !== t.a.c || 0 !== t.g.c;
                      });
                  } catch (t) {
                    return Object(Kt.b)(t, 'getSlotFetchCounts'), [];
                  }
                }
                function at () {
                  try {
                    var t = qt.a.getState(),
                      e = ct(t);
                    0 < Object.keys(e).length &&
                      (Object(Ut.c)(e, 5).forEach(function (e) {
                        var n = {
                          slots: e,
                          pid: $t.b,
                          url: Object(Ft.f)(window).split('?')[0],
                          ws: Object(Ut.h)(window),
                          pubid: t.config.pubID,
                          _type: 'slotRenders',
                        };
                        Object(Vt.b)(n);
                      }),
                      qt.a.dispatch({
                        type: 'UPDATE_RENDER_OFFSETS',
                        offsets: {
                          aaxReqOffset: t.AAXReqs.length,
                          gamSlotFetchLogOffset: t.gamSlotFetchLog.length,
                        },
                      }));
                  } catch (e) {
                    Object(Kt.b)(e, 'sendDisplayAdServerRenderPixel');
                  }
                }
                function st () {
                  setInterval(function () {
                    at();
                  }, 5000);
                }
                function ut () {
                  try {
                    setTimeout(function () {
                      try {
                        var t = bt().filter(function (t) {
                          return (
                            !Object(Ut.m)(qt.a.getState().bsPixels, t.iid) ||
                            t.state !== qt.a.getState().bsPixels[t.iid]
                          );
                        });
                        t &&
                          t.length &&
                          0 < t.length &&
                          (t.forEach(function (t) {
                            return Object(Vt.a)(t.iid, ft(t));
                          }),
                          dt(t));
                        var e = {
                          fetchStart: 'a',
                          domainLookupStart: 'b',
                          domainLookupEnd: 'c',
                          connectStart: 'd',
                          secureConnectionStart: 'e',
                          connectEnd: 'f',
                          requestStart: 'g',
                          responseStart: 'h',
                          responseEnd: 'i',
                        };
                        Object.keys(qt.a.getState().slotBids).forEach(function (t) {
                          qt.a.getState().slotBids[t].forEach(function (n) {
                            if (Object(Ut.m)(n.bidConfig, 'amzniid') && !n.pixelSent) {
                              var r = qt.a.getState().AAXReqs.filter(function (t) {
                                return t.bidReqID === n.bidReqID;
                              })[0];
                              if ('object' === ce(r) && null !== r) {
                                var i = r.rqTs - Object(Ht.d)(),
                                  c = {
                                    pid: $t.b,
                                    ns: r.bidConfig.slots.length,
                                    fid: n.bidReqID,
                                    fbrq: r.rqTs,
                                    _type: 'latencyBd',
                                  };
                                'object' === ce(r.perf) &&
                                  null !== r.perf &&
                                  Object.keys(e).forEach(function (t) {
                                    Object(Ut.m)(r, 'perf') &&
                                      0 !== Object(Ht.a)(r.perf, t) &&
                                      (c[e[t]] = Object(Ht.a)(r.perf, t) - i);
                                  }),
                                  (c.j = r.resTs - r.rqTs),
                                  Object(Vt.a)(n.bidConfig.amzniid, c),
                                  qt.a.dispatch({
                                    type: 'UPDATE_BID_INFO_PROP',
                                    slotID: t,
                                    iid: n.bidConfig.amzniid,
                                    key: 'pixelSent',
                                    value: !0,
                                  });
                              }
                            }
                          });
                        }),
                          ut();
                      } catch (t) {
                        Object(Kt.b)(t, '_sendBidsSetOnDFPPixel-timeout');
                      }
                    }, 5000);
                  } catch (t) {
                    Object(Kt.b)(t, '_sendBidsSetOnDFPPixel');
                  }
                }
                function dt (t) {
                  t.forEach(function (t) {
                    return qt.a.dispatch({ type: 'RECORD_BID_INFO_SENT', bidInfo: t });
                  });
                }
                function ft (t) {
                  try {
                    var e = lt(t.fid),
                      n = {
                        status: t.state,
                        pubid: qt.a.getState().config.pubID,
                        _type: 'bidSetPixel',
                        toa: Object(Ut.m)(e.req, 'timedOutAt') ? e.req.timedOutAt : 0,
                        fbrq: e.req.rqTs,
                        pto: e.req.timeout,
                        ns: e.req.bidConfig.slots.length,
                        bla: e.req.resTs - e.req.rqTs,
                        reqindex: e.index,
                        fid: t.fid,
                        tbs: 0,
                        c: 'dtb',
                      };
                    qt.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION &&
                      ((n.eid = qt.a.getState().experiments.chunkRequests ? 2 : 1),
                      (n.fbindex = e.fbIndex),
                      (n.fbns = qt.a.getState().bidConfigs[
                        parseInt(t.fid.split('-')[0], 10)
                      ].slots.length));
                    var r = qt.a.getState().experiments;
                    Object(Ut.m)(r, 'shouldUseTestBidEndpoint') &&
                      (n.tbs = r.shouldUseTestBidEndpoint ? 2 : 1),
                      t.delta && (n.delay = t.delta);
                    var i = e.req.perf;
                    void 0 !== i &&
                      ((n.ul = e.req.urlLength), (n.es = Object(Ht.a)(i, 'encodedBodySize')));
                    var c = qt.a.getState().libraryLoadCallLatency;
                    return (
                      0 !== c &&
                        ((n.lcl = c),
                        qt.a.dispatch({ type: 'RECORD_LIBRARY_LOAD_CALL_LATENCY', latency: 0 })),
                      n
                    );
                  } catch (t) {
                    return (
                      Object(Kt.b)(t, '_mapBidInfoToPixel'),
                      {
                        _type: 'bidSetPixel',
                        status: -1,
                        pubid: '',
                        toa: 0,
                        fbrq: 0,
                        pto: 0,
                        ns: 0,
                        bla: 0,
                        reqindex: 0,
                        fid: '',
                        tbs: 0,
                        c: 'dtb',
                      }
                    );
                  }
                }
                function lt (t) {
                  var e = qt.a.getState().AAXReqs.filter(function (e) {
                      return e.bidReqID === t;
                    })[0],
                    n = qt.a.getState().AAXReqs.indexOf(e) + 1,
                    r = { req: e, index: n, fbIndex: n };
                  return (
                    (r.index = qt.a.getState().AAXReqs.indexOf(r.req) + 1),
                    qt.a.getState().experiments.chunkRequests &&
                      (r.fbIndex =
                        qt.a
                          .getState()
                          .AAXReqs.filter(function (t) {
                            return (
                              -1 === t.bidReqID.indexOf('-') || '0' === t.bidReqID.split('-')[1]
                            );
                          })
                          .map(function (t) {
                            return t.bidReqID.split('-')[0];
                          })
                          .indexOf(t.split('-')[0]) + 1),
                    r
                  );
                }
                function bt () {
                  try {
                    var t = ht(),
                      e = [];
                    return (
                      null === t ||
                        Object.keys(qt.a.getState().slotBids).forEach(function (n) {
                          'video' !== qt.a.getState().slotBids[n][0].bidConfig.mediaType &&
                            qt.a
                              .getState()
                              .slotBids[n].filter(function (t) {
                                return Object(Ut.m)(t.bidConfig, 'amzniid');
                              })
                              .forEach(function (r) {
                                if (null !== t) {
                                  var i = {
                                      state: -1,
                                      slotID: n,
                                      iid: r.bidConfig.amzniid,
                                      fid: r.bidReqID,
                                    },
                                    c = [],
                                    o = [];
                                  if (
                                    (n in t &&
                                      ((c = t[n].fetchedAt.filter(function (t) {
                                        return (
                                          t.AAXReqInfo && t.AAXReqInfo.bidReqID === r.bidReqID
                                        );
                                      })),
                                      (o = t[n].targetedAt.filter(function (t) {
                                        return t.targeting === r.bidConfig.amzniid;
                                      }))),
                                    0 < c.length
                                      ? 0 < c.length &&
                                        o.length >= c.length &&
                                        c.slice(c.length - 1)[0].ts > o.slice(c.length - 1)[0].ts
                                        ? 1 ===
                                          t[n].fetchWithIID.filter(function (t) {
                                            return t === r.bidConfig.amzniid;
                                          }).length
                                          ? (i.state = 1)
                                          : (i.state = 4)
                                        : Object(Ut.j)(t[n].fetchWithIID, r.bidConfig.amzniid)
                                        ? (i.state = 3)
                                        : (i.state = 2)
                                      : (i.state = 0),
                                    1 === i.state || 2 === i.state)
                                  ) {
                                    var a = qt.a.getState().AAXReqs.filter(function (t) {
                                        return t.bidReqID === r.bidReqID;
                                      })[0].resTs,
                                      s = pt(a, t[n].fetchedAt, 2 === i.state);
                                    s && Object(Ut.m)(s, 'ts') && (i.delta = a - s.ts);
                                  }
                                  e.push(i);
                                }
                              });
                        }),
                      e
                    );
                  } catch (t) {
                    return Object(Kt.b)(t, '_getBidSetInfo'), [];
                  }
                }
                function pt (t, e, n) {
                  var r = e.map(function (e) {
                    var r = t - e.ts;
                    return !n && r <= 0 ? -r : n && 0 <= r ? r : null;
                  });
                  return e[mt(r)];
                }
                function mt (t) {
                  for (var e = -1, n = -1, r = 0; r < t.length; r++)
                    null !== t[r] && (-1 === n || t[r] < e) && (e = t[(n = r)]);
                  return n;
                }
                function gt (t, e) {
                  return qt.a.getState().AAXReqs.filter(function (t) {
                    return Object(Ut.j)(
                      t.bidConfig.slots.map(function (t) {
                        return t.slotID;
                      }),
                      e
                    );
                  })[t];
                }
                function ht () {
                  try {
                    if (!Yt.a.hasAdServerObjectLoaded()) return null;
                    var t = qt.a.getState().gamSlotFetchLog.reduce(function (t, e) {
                      Object(Ut.m)(t, e.slotID) ||
                        (t[e.slotID] = { fetchedAt: [], targetedAt: [] });
                      var n = t[e.slotID];
                      return (
                        n.fetchedAt.push({
                          ts: e.ts,
                          AAXReqInfo: gt(n.fetchedAt.length, e.slotID),
                        }),
                        Object(Ut.m)(e.targeting, 'amzniid') && 0 < e.targeting.amzniid.length
                          ? n.targetedAt.push({ ts: e.ts - 1, targeting: e.targeting.amzniid[0] })
                          : n.targetedAt.push({ ts: e.ts - 1, targeting: '' }),
                        t
                      );
                    }, {});
                    return (
                      Object.keys(t).forEach(function (e) {
                        if (Object(Ut.m)(t, e)) {
                          var n = t[e];
                          (n.fetchWithIID = n.fetchedAt.map(function (t) {
                            var e = pt(t.ts, n.targetedAt, !0);
                            return e ? e.targeting : 0;
                          })),
                            (t[e] = n);
                        }
                      }),
                      t
                    );
                  } catch (t) {
                    return Object(Kt.b)(t, '_getDFPSlotFetches'), null;
                  }
                }
                function yt () {
                  try {
                    Yt.a.hasAdServerObjectLoaded()
                      ? Z('noRequest', Yt.a)
                      : Yt.a.isCommandQueueDefined() &&
                        Yt.a.cmdQueuePush(function () {
                          Z('noRequest', Yt.a);
                        });
                  } catch (t) {
                    Object(Kt.b)(t, '_applyNoRequestToAAXState');
                  }
                }
                function Ot (t) {
                  try {
                    qt.a.dispatch({ type: 'REQUESTED_BID_FOR_ADSERVER_SLOTS', slotIDs: t }),
                      Yt.a.isCommandQueueDefined() &&
                        Yt.a.cmdQueuePush(function () {
                          try {
                            var e = Object(Mt.b)(Yt.a);
                            '0' === Yt.a.getTargeting('amznbid')[0] && tt(),
                              _(
                                t.filter(function (t) {
                                  return void 0 !== t;
                                }),
                                e.map(function (t) {
                                  return t.slotID;
                                })
                              )
                                ? e.forEach(function (e) {
                                    Object(Ut.j)(t, e.slotID) && !Y(e) && Z('bidInFlight', e);
                                  })
                                : Yt.a.cmdQueuePush(function () {
                                    try {
                                      Z('bidInFlight', Yt.a);
                                    } catch (t) {
                                      Object(Kt.b)(
                                        t,
                                        '_setRequestToAAXInFlightState-cmdQueue-cmdQueue'
                                      );
                                    }
                                  });
                          } catch (e) {
                            Object(Kt.b)(e, '_setRequestToAAXInFlightState-cmdQueue');
                          }
                        });
                  } catch (t) {
                    Object(Kt.b)(t, '_setRequestToAAXInFlightState');
                  }
                }
                function jt () {
                  try {
                    return (
                      Object(Ut.m)(window, 'AMP_CONTEXT_DATA') &&
                      Object(Ut.m)(window.AMP_CONTEXT_DATA, 'tagName') &&
                      'AMP-AD' === window.AMP_CONTEXT_DATA.tagName
                    );
                  } catch (t) {
                    return void Object(Kt.b)(t, '_isInAmpAd');
                  }
                }
                function vt (t) {
                  try {
                    return Object(Ut.m)(t, 'type') && !(t instanceof Document) && 'amp' === t.type;
                  } catch (t) {
                    return Object(Kt.b)(t, '_isLegacyAmpCreative'), !1;
                  }
                }
                function St (t, e) {
                  try {
                    return (void 0 !== e && Object(Ut.m)(e, 'ampEnv') && e.ampEnv) || vt(t);
                  } catch (t) {
                    return void Object(Kt.b)(t, '_isAmpImpression');
                  }
                }
                function _t (t) {
                  return t.split('x');
                }
                function wt (t, e, n) {
                  try {
                    Object(Vt.e)();
                  } catch (t) {
                    Object(Kt.b)(t, '_renderImp-pixels');
                  }
                  try {
                    var r = void 0 === n ? '0.0.0' : n.cv;
                    if (St(t, n) && jt())
                      return (
                        vt(t)
                          ? Object(Vt.c)('renderFootprint', 'amp')
                          : Object(Vt.c)('renderFootprint', 'multi-amp-'.concat(r)),
                        void F(t, n)
                      );
                    if (Object(Xt.c)(window))
                      return Object(Vt.c)('renderFootprint', 'multi-sf-'.concat(r)), void F(t, n);
                    var i = !1;
                    'string' == typeof e &&
                      0 === e.indexOf('sp|') &&
                      ((e = e.substring(3)), (i = !0));
                    var c,
                      o = e || t.amzniid,
                      a = D(o, i),
                      s = a.slotBid,
                      u = a.dealId;
                    if (s) {
                      if (
                        ((c =
                          u && 1 <= u.length
                            ? _t('sp' === u ? s.bidConfig.amznsz_sp : T(o, s, u))
                            : _t(s.bidConfig.amznsz)),
                        1 === arguments.length)
                      )
                        return (
                          Object(Vt.c)('renderFootprint', 'JSONp'),
                          void U({
                            doc: s.doc,
                            bidID: s.bidConfig.amzniid,
                            sizes: c,
                            html: t.html,
                            inheritSize: s.inheritSize || !1,
                          })
                        );
                      Object(Vt.c)('bidRenderState', s.bidState);
                      var d = i ? 'sharedpmp' : 'open';
                      void 0 !== n
                        ? Object(Vt.c)('renderFootprint', 'multi-'.concat(d, '-').concat(r))
                        : Object(Vt.c)('renderFootprint', 'standard-'.concat(d, '-').concat(r)),
                        s.bidState === Qt.b.rendered && et(s),
                        qt.a.dispatch({
                          type: 'BID_STATE_CHANGE',
                          slotID: s.slotID,
                          _targetingSetID: s._targetingSetID,
                          bidState: Qt.b.rendered,
                          ts: Date.now(),
                        });
                      var f = s.host,
                        l = 'amznad'.concat(Math.round(1000000 * Math.random())),
                        b = {
                          bidID: o,
                          doc: t,
                          pp: Et('amznbid', s, u),
                          host: f,
                          adID: l,
                          sizes: c,
                          amznp: Et('amznp', s, u),
                          crID: Et('crid', s, u),
                          fif: !1,
                          dealId: u,
                          isSharedPMP: i,
                          cfe: s.cfe,
                          inheritSize:
                            Object(Ut.l)(n) &&
                            Object(Ut.m)(n, 'inheritSize') &&
                            !0 === n.inheritSize,
                        };
                      '1' === s.bidConfig.fif
                        ? ((b.fif = !0),
                          qt.a.dispatch({
                            type: 'UPDATE_BID_INFO_PROP',
                            slotID: s.slotID,
                            iid: e,
                            key: 'doc',
                            value: t,
                          }),
                          qt.a.dispatch({
                            type: 'UPDATE_BID_INFO_PROP',
                            slotID: s.slotID,
                            iid: e,
                            key: 'inheritSize',
                            value: b.inheritSize,
                          }),
                          Object(Jt.b)(
                            x(b),
                            function () {},
                            document,
                            function () {
                              return Object(Kt.b)(
                                new Error('Error Loading JSONP Render Callback'),
                                'renderImp-fif-callback-load',
                                !0
                              );
                            }
                          ))
                        : qt.a.getState().aaxViewabilityEnabled
                        ? Dt(b, t)
                        : M(b),
                        H(t, b);
                    } else
                      Object(Kt.b)(
                        new Error('Invalid bid ID tried to render'),
                        '_renderImp-invalidId',
                        !0
                      );
                  } catch (t) {
                    Object(Kt.b)(t, '_renderImp', !0);
                  }
                }
                function Et (t, e, n) {
                  try {
                    var r = '';
                    if (void 0 !== n && 1 <= n.length) {
                      var i = ''.concat(t, '_sp');
                      'sp' === n && Object(Ut.m)(e.bidConfig, i) && (r = e.bidConfig[i]);
                    } else Object(Ut.m)(e.bidConfig, t) && (r = e.bidConfig[t]);
                    return r;
                  } catch (t) {
                    return Object(Kt.b)(t, '_getProperBidInfoValue'), '';
                  }
                }
                function Dt (t, e) {
                  try {
                    var n = e.createElement('script');
                    (n.type = 'text/javascript'), (n.async = !0);
                    var r = {
                        doc: e,
                        bidID: t.bidID,
                        states: { csmLoaded: !1, iframeLoaded: !1, shouldRunViewability: !0 },
                      },
                      i = G.bind(null, r);
                    Object(Jt.a)(n, function () {
                      (r.states.csmLoaded = !0), i();
                    });
                    try {
                      n.addEventListener('error', function (t) {
                        return Object(Vt.b)({ _type: 'csm_fail', ts: Date.now(), msg: t.message });
                      });
                    } catch (t) {
                      Object(Kt.b)(t, '_loadViewabilityAd-csm');
                    }
                    M(t, r, i), (n.src = qt.a.getState().cfg.CSM_JS), B(e, n);
                  } catch (t) {
                    Object(Kt.b)(t, '_loadViewabilityAd');
                  }
                }
                function Tt (t) {
                  try {
                    Object($t.h)(t),
                      p(t),
                      Object(Ut.m)(t, 'slots') &&
                        (qt.a.dispatch({ type: 'UPDATE_SLOT_BIDS', bids: A(t) }),
                        Object(Ut.m)(t, 'ev') &&
                          qt.a.dispatch({ type: 'SET_VIEWABILITY', viewability: t.ev }),
                        Object(Ut.m)(t, 'cfn') &&
                          qt.a.dispatch({
                            type: 'SET_CFG',
                            cfg: {
                              CSM_JS:
                                '//' === t.cfn.substring(0, 2)
                                  ? t.cfn
                                  : '//c.amazon-adsystem.com/'.concat(t.cfn),
                            },
                          })),
                      m(t);
                  } catch (t) {
                    Object(Kt.b)(t, '_bids', !0);
                  }
                }
                function It () {
                  return (
                    'number' == typeof qt.a.getState().cfg.MAX_SLOTS_PER_REQUEST &&
                    0 < qt.a.getState().cfg.MAX_SLOTS_PER_REQUEST
                  );
                }
                function At (t, e) {
                  try {
                    var n = Ct.bind(null, t, e);
                    void 0 === qt.a.getState().gdpr || null === qt.a.getState().gdpr
                      ? (qt.a.dispatch({ type: 'ADD_GDPR_QUE_ITEM', func: n }),
                        1 === qt.a.getState().gdprQue.length &&
                          Object(Nt.a)(qt.a.getState().config.gdpr, Rt))
                      : n();
                  } catch (t) {
                    Object(Kt.b)(t, '_checkGdprAndFetchBids', !0);
                  }
                }
                function Rt (t) {
                  try {
                    qt.a.dispatch({ type: 'SET_GDPR_CONFIG', config: t }),
                      qt.a.getState().gdprQue.map(function (t) {
                        return t();
                      }),
                      qt.a.dispatch({ type: 'CLEAR_GDPR_QUE' });
                  } catch (t) {
                    Object(Kt.b)(t, '_gdprCallback');
                  }
                }
                function Ct (t, e) {
                  try {
                    Object(ee.b)(e, ['function', 'undefined']) ||
                      Object(Kt.c)('fetchBids.callback', ce(e), 'function'),
                      'function' != typeof e && (e = function () {}),
                      Object(Ut.l)(t) ||
                        (Object(Kt.c)('fetchBids.bidConfig', ce(t), 'object'), (t = {})),
                      Object(ee.a)(t.timeout) ||
                        ('string' == typeof t.timeout
                          ? Object(Kt.b)(
                              {
                                name: 'string-'.concat(t.timeout),
                                message: "fetchBids.bidConfig.timeout was a non-numeric string '".concat(
                                  t.timeout,
                                  "'"
                                ),
                              },
                              'TypeError-fetchBids.bidConfig.timeout',
                              !0
                            )
                          : Object(Kt.c)('fetchBids.bidConfig.timeout', ce(t.timeout), 'number')),
                      Object(Ut.m)(t, 'params') && !Object(Ut.l)(t.params)
                        ? Object(Kt.c)('fetchBids.bidConfig.params', ce(t.params), 'object')
                        : Object(Ut.m)(t, 'params') &&
                          Object(Ut.l)(t.params) &&
                          Object.keys(t.params).forEach(function (e) {
                            return !(
                              void 0 === t.params ||
                              ('string' != typeof t.params[e] &&
                                'number' != typeof t.params[e] &&
                                (Object(Ut.k)(t.params[e])
                                  ? !t.params[e].reduce(function (t, e) {
                                      return t && ('string' == typeof e || 'number' == typeof e);
                                    }, !0) &&
                                    (Object(Kt.b)(
                                      {
                                        name: 'non-string array item',
                                        message: "'fetchBids.bidConfig.params.".concat(
                                          e,
                                          ' contains a non-string item'
                                        ),
                                      },
                                      'TypeError-fetchBids.bidConfig.params.'.concat(e),
                                      !0
                                    ),
                                    1)
                                  : (Object(Kt.c)(
                                      'fetchBids.bidConfig.params.'.concat(e),
                                      ce(t.params[e]),
                                      "string' or 'array"
                                    ),
                                    1)))
                            );
                          }),
                      Object(Ut.m)(t, 'blockedBidders') && !Object(Ut.k)(t.blockedBidders)
                        ? Object(Kt.c)(
                            'fetchBids.bidConfig.blockedBidders',
                            ce(t.blockedBidders),
                            'array'
                          )
                        : Object(Ut.m)(t, 'blockedBidders') &&
                          Object(Ut.k)(t.blockedBidders) &&
                          (t.blockedBidders.reduce(function (t, e) {
                            return t && ('string' == typeof e || 'number' == typeof e);
                          }, !0) ||
                            Object(Kt.b)(
                              {
                                name: 'non-string array item',
                                message:
                                  "'fetchBids.bidConfig.blockedBidders contains a non-string item",
                              },
                              'TypeError-fetchBids.bidConfig.blockedBidders',
                              !0
                            )),
                      Object(Ut.m)(t, 'blockedBidders')
                        ? Object(Vt.c)('blockedBidders-fetchBids', 'y')
                        : Object(Vt.c)('blockedBidders-fetchBids', 'n'),
                      Object(Ut.m)(t, 'slots') &&
                        !Object(Ut.k)(t.slots) &&
                        Object(Kt.c)('fetchBids.bidConfig.slots', ce(t.slots), 'array');
                  } catch (n) {
                    Object(Kt.b)(n, '_fetchBids-validation', !0);
                  }
                  var n = qt.a.getState().config.simplerGPT,
                    r = ie(
                      ie({}, t),
                      {},
                      {
                        bidReqID: ''.concat(qt.a.getState().AAXReqs.length),
                        slots: [],
                        networkReqs: [],
                      }
                    ),
                    i = !1;
                  try {
                    !0 === n &&
                    (!Object(Ut.m)(t, 'slots') ||
                      (Object(Ut.m)(t, 'slots') &&
                        Object(Ut.k)(t.slots) &&
                        0 < t.slots.length &&
                        Object(Ut.m)(t.slots[0], 'getSlotElementId')))
                      ? 0 === Object(Mt.b)(Yt.a).length
                        ? (Object(Kt.b)(
                            new Error(
                              'fetchBids was called in simplerGPT mode before any slots were defined in GPT'
                            ),
                            '_fetchBids-simplerGpt-NoSlots',
                            !0
                          ),
                          (i = !0),
                          (r.slots = []))
                        : (t.slots
                            ? (Object(Vt.c)('slots', 'gpt-provided'),
                              (r.slots = t.slots.map(function (t) {
                                return new Wt.b(t);
                              })))
                            : (Object(Vt.c)('slots', 'gpt-fetch'), (r.slots = Object(Mt.b)(Yt.a))),
                          (r.slots = r.slots.filter(Mt.a)),
                          0 === r.slots.length &&
                            (Object(Kt.b)(
                              new Error(
                                'No GPT slots provided to apstag.fetchBids() had valid sizes'
                              ),
                              '_fetchBids-simplerGpt-NoValidSizes',
                              !0
                            ),
                            (i = !0)))
                      : Object(Ut.m)(t, 'slots') &&
                        Object(Ut.k)(t.slots) &&
                        (n ? Object(Vt.c)('slots', 'gpt-aps') : Object(Vt.c)('slots', 'aps'),
                        (r.slots = t.slots.map(function (t) {
                          return new Zt.a(t);
                        })));
                  } catch (n) {
                    Object(Kt.b)(n, '_fetchBids-getSlots', !0);
                  }
                  var c,
                    o = Object(Ft.h)(r, qt.a.getState());
                  try {
                    e = Object(Ft.a)(Q(e, r), o);
                  } catch (n) {
                    Object(Kt.b)(n, '_fetchBids-wrapCallback', !0);
                  }
                  try {
                    if (0 === r.slots.length)
                      return (
                        !1 === i &&
                          Object(Kt.b)(
                            new Error('No slots provided to apstag.fetchBids'),
                            '_fetchBids-noSlots',
                            !0
                          ),
                        void setTimeout(e.bind(null, []), 10)
                      );
                    try {
                      var a = 1 === r.slots.length ? 'single' : 'multi',
                        s = Date.now() - f <= Qt.o ? 'onload' : 'ondelay',
                        u = qt.a.getState().AAXReqs.reduce(function (t, e) {
                          return (
                            e.bidConfig.slots.forEach(function (e) {
                              Object(Ut.j)(t, e.slotID) || t.push(e.slotID);
                            }),
                            t
                          );
                        }, []);
                      r.slots
                        .map(function (t) {
                          return t.slotID;
                        })
                        .map(function (t) {
                          return Object(Ut.j)(u, t);
                        })
                        .map(function (t) {
                          return t ? 'refresh' : 'initial';
                        })
                        .filter(function (t, e, n) {
                          return n.indexOf(t) === e;
                        })
                        .forEach(function (t) {
                          return Object(Vt.c)(
                            'fetchBids',
                            ''.concat(a, '-').concat(s, '-').concat(t)
                          );
                        });
                    } catch (n) {
                      Object(Kt.b)(n, '_fetchBids-feature');
                    }
                    if (
                      (Ot(r.slots.filter(Mt.d).map(Mt.c)),
                      qt.a.dispatch({ type: 'NEW_FETCH_BID_REQUEST', fid: r.bidReqID, pto: o }),
                      qt.a.dispatch({ type: 'RECORD_ORIGINAL_BID_CONFIG', bidConfig: r }),
                      Object(Gt.d)('fake_bids'))
                    )
                      K(r, e);
                    else if (Qt.i)
                      if (
                        (qt.a.dispatch({
                          type: 'SHOULD_CHUNK_REQUESTS',
                          value: Object(Ut.n)(qt.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION),
                        }),
                        qt.a.getState().experiments.chunkRequests && It())
                      ) {
                        c = Pt(r);
                        for (var d = 0; d < c.length; d++)
                          c[d].bidReqID = ''.concat(r.bidReqID, '-').concat(d);
                        qt.a.dispatch({
                          type: 'ADD_CHUNKED_REQUESTS',
                          fid: r.bidReqID,
                          numChunks: c.length,
                        }),
                          c.forEach(function (t) {
                            l(Object($t.d)(t, o), e, t.bidReqID);
                          });
                      } else l(Object($t.d)(r, o), e, r.bidReqID);
                    else Object(Jt.b)(Object($t.d)(r, o), e);
                  } catch (n) {
                    Object(Kt.b)(n, '_fetchBids', !0);
                  }
                }
                function Pt (t) {
                  try {
                    for (
                      var e = Math.ceil(
                          t.slots.length / qt.a.getState().cfg.MAX_SLOTS_PER_REQUEST
                        ),
                        n = new Array(e),
                        r = 0;
                      r < e;
                      r++
                    ) {
                      var i = r * qt.a.getState().cfg.MAX_SLOTS_PER_REQUEST;
                      n[r] = {
                        slots: t.slots.slice(i, i + qt.a.getState().cfg.MAX_SLOTS_PER_REQUEST),
                      };
                    }
                    return n.map(function (e) {
                      return ie(ie({}, t), e);
                    });
                  } catch (e) {
                    return Object(Kt.b)(e, 'chunkConfig', !0), [];
                  }
                }
                function zt (t) {
                  try {
                    Object(Ut.m)(qt.a.getState().config, 'adServer')
                      ? Yt.a.isSupported
                        ? (z(t), $())
                        : Object(Kt.b)(
                            new Error(
                              'apstag.setDisplayBids called with unsupported ad server: '.concat(
                                qt.a.getState().config.adServer
                              )
                            ),
                            '_setDisplayBids-invalidAdServer',
                            !0
                          )
                      : Object(Kt.b)(
                          new Error('apstag.setDisplayBids called without specifying ad server'),
                          '_setDisplayBids-noAdServer',
                          !0
                        );
                  } catch (t) {
                    Object(Kt.b)(t, '_setDisplayBids', !0);
                  }
                }
                function kt (t, e) {
                  try {
                    y(t), Object(Yt.b)(t.adServer), yt(), Object(ne.a)(t);
                  } catch (t) {
                    Object(Kt.b)(t, '_init');
                  }
                  'function' == typeof e && e();
                }
                function Bt () {
                  var t =
                      0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'display',
                    e = qt.a.getState();
                  try {
                    switch (t) {
                      case 'display':
                        return (
                          Object(Vt.c)('targeting', 'targetingKeys-display'),
                          e.config.useSafeFrames ? [].concat(re(Qt.g), ['amznhost']) : Qt.g
                        );
                      case 'video':
                        return (
                          Object(Vt.c)('targeting', 'targetingKeys-video'),
                          e.config.useSafeFrames ? [].concat(re(Qt.v), ['amznhost']) : Qt.v
                        );
                      default:
                        if (Object($t.g)(qt.a.getState(), Yt.a)) {
                          if (
                            (Object(Vt.c)('targeting', 'targetingKeys-newBid'),
                            Object(Ut.k)(qt.a.getState().targetingKeys[t]))
                          )
                            return qt.a.getState().targetingKeys[t];
                        } else Object(Vt.c)('targeting', 'targetingKeys-invalid');
                        return [];
                    }
                  } catch (t) {
                    return Object(Kt.b)(t, '_targetingKeys', !0), [];
                  }
                }
                function Lt () {
                  try {
                    return qt.a.getState().AAXReqs.reduce(function (t, e) {
                      return e.bidConfig.slots.reduce(function (t, e) {
                        return (t[e.slotID] = e.slotName), t;
                      }, t);
                    }, {});
                  } catch (t) {
                    return Object(Kt.b)(t, '_getSlotIdToNameMapping', !0), {};
                  }
                }
                function xt (t, e) {
                  var n = e;
                  return function () {
                    return r({ method: t, args: arguments }), n.apply(void 0, arguments);
                  };
                }
                try {
                  Object(Ut.m)(window, 'apstag') &&
                    Object(Ut.m)(window.apstag, '_Q') &&
                    0 < window.apstag._Q.length &&
                    qt.a.dispatch({ type: 'SET_Q', Q: window.apstag._Q });
                } catch (t) {
                  Object(Kt.b)(t, 'apstag-storeQ', !0);
                }
                (window.apstag =
                  ((it = {
                    punt: Tt,
                    init: kt,
                    debug: Gt.a,
                    _getSlotIdToNameMapping: Lt,
                    targetingKeys: Bt,
                    fetchBids: At,
                    setDisplayBids: zt,
                    renderImp: wt,
                    bids: Tt,
                  }),
                  Object.keys(it).forEach(function (t) {
                    (it[t] = xt(t, it[t])), (it[t] = Object(Kt.d)(it[t], t));
                  }),
                  n ? Object(Gt.b)(!0, t) : e && Object(Gt.b)(!1, t),
                  !0 === Object(Gt.c)('exposeApi') &&
                    (it._api = {
                      _getBidSetInfo: bt,
                      _applyTargetingToGPTSlot: R,
                      dispatch: qt.a.dispatch,
                      _clearTargetingFromGPTSlot: v,
                      _clearBidSetOnSlot: S,
                      _doFbSync: k,
                      _getCurrentSlotBids: w,
                      _creativeURL: x,
                      getSlotFetchCounts: ct,
                      buildBidUrl: $t.d,
                    }),
                  it)),
                  (function () {
                    try {
                      if (
                        (qt.a.dispatch({
                          type: 'SHOULD_SAMPLE_FEATURES',
                          value: Object(Ut.n)(qt.a.getState().cfg.FEATURE_SAMPLING_RATE),
                        }),
                        qt.a.dispatch({
                          type: 'SHOULD_CF_ROUTE',
                          value: Object(Ut.n)(qt.a.getState().cfg.CF_ROUTING_RATE),
                        }),
                        qt.a.getState().experiments.shouldCFRoute &&
                          qt.a.dispatch({
                            type: 'SET_HOST',
                            hostName: 'DEFAULT_AAX_BID_HOST',
                            hostValue: 'c.amazon-adsystem.com',
                          }),
                        qt.a.dispatch({
                          type: 'SHOULD_SAMPLE_LATENCY',
                          value: Object(Ut.n)(qt.a.getState().cfg.LATENCY_SAMPLING_RATE),
                        }),
                        null !== qt.a.getState().cfg.TEST_BID_ENDPOINT)
                      ) {
                        var t = Object(Ut.n)(qt.a.getState().cfg.TEST_PATH_FREQUENCY);
                        qt.a.dispatch({ type: 'SHOULD_USE_TEST_BID_ENDPOINT', value: t }),
                          t &&
                            null !== qt.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE &&
                            qt.a.dispatch({
                              type: 'SHOULD_SAMPLE_LATENCY',
                              value: Object(Ut.n)(
                                qt.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE
                              ),
                            });
                      }
                      qt.a.dispatch({
                        type: 'SHOULD_SAMPLE_SLOT_RENDER',
                        value: Object(Ut.n)(qt.a.getState().cfg.SLOT_RENDER_SAMPLING_RATE),
                      });
                      var e = qt.a.getState();
                      (e.experiments.shouldSampleLatency ||
                        e.displayAdServer.shouldSampleRender) &&
                        ot(),
                        e.displayAdServer.shouldSampleRender && st(),
                        e.experiments.shouldSampleLatency && (nt(), ut());
                    } catch (t) {
                      Object(Kt.b)(t, 'apstag-sampleLatency');
                    }
                    try {
                      h();
                    } catch (t) {
                      Object(Kt.b)(t, 'apstag-doLast');
                    }
                    if (!jt())
                      try {
                        var n = function (t) {
                          (t && 'object' !== ce(t)) || (t = 'Request Timeout or Error'),
                            Object(Kt.b)(
                              { message: 'csm-rtb-comm-js loading failed', name: t },
                              '__csm-rtb-comm-js__'
                            );
                        };
                        Object(Jt.d)({
                          url: qt.a.getState().cfg.CSM_RTB_COMMUNICATOR_JS,
                          onload: function t (e) {
                            e.readyState === XMLHttpRequest.DONE && 200 === e.status
                              ? eval(e.responseText)
                              : n(
                                  JSON.stringify({ status: e.statusText, response: e.responseXML })
                                );
                          },
                          onerror: n,
                          ontimeout: n,
                        });
                      } catch (t) {
                        Object(Kt.b)(t, '__load-csm-rtb-comm-js__');
                      }
                    Object(Gt.e)();
                  })();
              })());
        } catch (t) {
          Object(Kt.b)(t, 'apstag');
        }
      },
    ]);
  })();
}
