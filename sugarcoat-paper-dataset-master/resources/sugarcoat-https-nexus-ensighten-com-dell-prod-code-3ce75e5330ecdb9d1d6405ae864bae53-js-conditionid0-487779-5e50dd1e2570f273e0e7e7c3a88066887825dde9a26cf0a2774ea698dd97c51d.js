{
  const $___stub_addd751f0eb655f8 = {};
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
  })($___stub_addd751f0eb655f8);
  const $___stub_e71ee3f8b21bfa35 = {};
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
  })($___stub_e71ee3f8b21bfa35);
  const $___stub_cdc5a54489618108 = {};
  (exports => {
    'use strict';
    const cookieJar = {};
    exports.cookie = {
      enumerable: true,
      configurable: true,
      get () {
        return Object.entries(cookieJar)
          .map(([key, value]) => (value == null ? key : `${key}=${value}`))
          .join('; ');
      },
      set (value) {
        const pair = value.split(';')[0];
        const parts = pair.split('=');
        const cookieKey = parts.shift().trim();
        const cookieValue = parts.length > 0 ? parts.join('=').trim() : null;
        cookieJar[cookieKey] = cookieValue;
      },
    };
  })($___stub_cdc5a54489618108);
  const $___stub_aa98dea0755b9294 = {};
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
  })($___stub_aa98dea0755b9294);
  (function () {
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        !(function (t) {
          if ('object' == typeof exports && 'undefined' != typeof module) module.exports = t();
          else {
            var e;
            (e =
              'undefined' != typeof window
                ? window
                : 'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                ? self
                : this),
              (e.pako = t());
          }
        })(function () {
          return (function t (e, a, n) {
            function r (s, h) {
              if (!a[s]) {
                if (!e[s]) {
                  var l = 'function' == typeof require && require;
                  if (!h && l) return l(s, !0);
                  if (i) return i(s, !0);
                  var o = new Error("Cannot find module '" + s + "'");
                  throw ((o.code = 'MODULE_NOT_FOUND'), o);
                }
                var _ = (a[s] = { exports: {} });
                e[s][0].call(
                  _.exports,
                  function (t) {
                    var a = e[s][1][t];
                    return r(a ? a : t);
                  },
                  _,
                  _.exports,
                  t,
                  e,
                  a,
                  n
                );
              }
              return a[s].exports;
            }
            for (var i = 'function' == typeof require && require, s = 0; s < n.length; s++)
              r(n[s]);
            return r;
          })(
            {
              1: [
                function (t, e, a) {
                  var n =
                    'undefined' != typeof Uint8Array &&
                    'undefined' != typeof Uint16Array &&
                    'undefined' != typeof Int32Array;
                  (a.assign = function (t) {
                    for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
                      var a = e.shift();
                      if (a) {
                        if ('object' != typeof a) throw new TypeError(a + 'must be non-object');
                        for (var n in a) a.hasOwnProperty(n) && (t[n] = a[n]);
                      }
                    }
                    return t;
                  }),
                    (a.shrinkBuf = function (t, e) {
                      return t.length === e
                        ? t
                        : t.subarray
                        ? t.subarray(0, e)
                        : ((t.length = e), t);
                    });
                  var r = {
                      arraySet: function (t, e, a, n, r) {
                        if (e.subarray && t.subarray) return void t.set(e.subarray(a, a + n), r);
                        for (var i = 0; i < n; i++) t[r + i] = e[a + i];
                      },
                      flattenChunks: function (t) {
                        var e, a, n, r, i, s;
                        for (n = 0, e = 0, a = t.length; e < a; e++) n += t[e].length;
                        for (s = new Uint8Array(n), r = 0, e = 0, a = t.length; e < a; e++)
                          (i = t[e]), s.set(i, r), (r += i.length);
                        return s;
                      },
                    },
                    i = {
                      arraySet: function (t, e, a, n, r) {
                        for (var i = 0; i < n; i++) t[r + i] = e[a + i];
                      },
                      flattenChunks: function (t) {
                        return [].concat.apply([], t);
                      },
                    };
                  (a.setTyped = function (t) {
                    t
                      ? ((a.Buf8 = Uint8Array),
                        (a.Buf16 = Uint16Array),
                        (a.Buf32 = Int32Array),
                        a.assign(a, r))
                      : ((a.Buf8 = Array), (a.Buf16 = Array), (a.Buf32 = Array), a.assign(a, i));
                  }),
                    a.setTyped(n);
                },
                {},
              ],
              2: [
                function (t, e, a) {
                  function n (t, e) {
                    if (e < 65537 && ((t.subarray && s) || (!t.subarray && i)))
                      return String.fromCharCode.apply(null, r.shrinkBuf(t, e));
                    for (var a = '', n = 0; n < e; n++) a += String.fromCharCode(t[n]);
                    return a;
                  }
                  var r = t('./common'),
                    i = !0,
                    s = !0;
                  try {
                    String.fromCharCode.apply(null, [0]);
                  } catch (t) {
                    i = !1;
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                  } catch (t) {
                    s = !1;
                  }
                  for (var h = new r.Buf8(256), l = 0; l < 256; l++)
                    h[l] =
                      l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
                  (h[254] = h[254] = 1),
                    (a.string2buf = function (t) {
                      var e,
                        a,
                        n,
                        i,
                        s,
                        h = t.length,
                        l = 0;
                      for (i = 0; i < h; i++)
                        (a = t.charCodeAt(i)),
                          55296 === (64512 & a) &&
                            i + 1 < h &&
                            ((n = t.charCodeAt(i + 1)),
                            56320 === (64512 & n) &&
                              ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), i++)),
                          (l += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
                      for (e = new r.Buf8(l), s = 0, i = 0; s < l; i++)
                        (a = t.charCodeAt(i)),
                          55296 === (64512 & a) &&
                            i + 1 < h &&
                            ((n = t.charCodeAt(i + 1)),
                            56320 === (64512 & n) &&
                              ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), i++)),
                          a < 128
                            ? (e[s++] = a)
                            : a < 2048
                            ? ((e[s++] = 192 | (a >>> 6)), (e[s++] = 128 | (63 & a)))
                            : a < 65536
                            ? ((e[s++] = 224 | (a >>> 12)),
                              (e[s++] = 128 | ((a >>> 6) & 63)),
                              (e[s++] = 128 | (63 & a)))
                            : ((e[s++] = 240 | (a >>> 18)),
                              (e[s++] = 128 | ((a >>> 12) & 63)),
                              (e[s++] = 128 | ((a >>> 6) & 63)),
                              (e[s++] = 128 | (63 & a)));
                      return e;
                    }),
                    (a.buf2binstring = function (t) {
                      return n(t, t.length);
                    }),
                    (a.binstring2buf = function (t) {
                      for (var e = new r.Buf8(t.length), a = 0, n = e.length; a < n; a++)
                        e[a] = t.charCodeAt(a);
                      return e;
                    }),
                    (a.buf2string = function (t, e) {
                      var a,
                        r,
                        i,
                        s,
                        l = e || t.length,
                        o = new Array(2 * l);
                      for (r = 0, a = 0; a < l; )
                        if (((i = t[a++]), i < 128)) o[r++] = i;
                        else if (((s = h[i]), s > 4)) (o[r++] = 65533), (a += s - 1);
                        else {
                          for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && a < l; )
                            (i = (i << 6) | (63 & t[a++])), s--;
                          s > 1
                            ? (o[r++] = 65533)
                            : i < 65536
                            ? (o[r++] = i)
                            : ((i -= 65536),
                              (o[r++] = 55296 | ((i >> 10) & 1023)),
                              (o[r++] = 56320 | (1023 & i)));
                        }
                      return n(o, r);
                    }),
                    (a.utf8border = function (t, e) {
                      var a;
                      for (
                        e = e || t.length, e > t.length && (e = t.length), a = e - 1;
                        a >= 0 && 128 === (192 & t[a]);

                      )
                        a--;
                      return a < 0 ? e : 0 === a ? e : a + h[t[a]] > e ? a : e;
                    });
                },
                { './common': 1 },
              ],
              3: [
                function (t, e, a) {
                  function n (t, e, a, n) {
                    for (var r = (65535 & t) | 0, i = ((t >>> 16) & 65535) | 0, s = 0; 0 !== a; ) {
                      (s = a > 2000 ? 2000 : a), (a -= s);
                      do (r = (r + e[n++]) | 0), (i = (i + r) | 0);
                      while (--s);
                      (r %= 65521), (i %= 65521);
                    }
                    return r | (i << 16) | 0;
                  }
                  e.exports = n;
                },
                {},
              ],
              4: [
                function (t, e, a) {
                  function n () {
                    for (var t, e = [], a = 0; a < 256; a++) {
                      t = a;
                      for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                      e[a] = t;
                    }
                    return e;
                  }
                  function r (t, e, a, n) {
                    var r = i,
                      s = n + a;
                    t ^= -1;
                    for (var h = n; h < s; h++) t = (t >>> 8) ^ r[255 & (t ^ e[h])];
                    return t ^ -1;
                  }
                  var i = n();
                  e.exports = r;
                },
                {},
              ],
              5: [
                function (t, e, a) {
                  function n (t, e) {
                    return (t.msg = O[e]), e;
                  }
                  function r (t) {
                    return (t << 1) - (t > 4 ? 9 : 0);
                  }
                  function i (t) {
                    for (var e = t.length; --e >= 0; ) t[e] = 0;
                  }
                  function s (t) {
                    var e = t.state,
                      a = e.pending;
                    a > t.avail_out && (a = t.avail_out),
                      0 !== a &&
                        (j.arraySet(t.output, e.pending_buf, e.pending_out, a, t.next_out),
                        (t.next_out += a),
                        (e.pending_out += a),
                        (t.total_out += a),
                        (t.avail_out -= a),
                        (e.pending -= a),
                        0 === e.pending && (e.pending_out = 0));
                  }
                  function h (t, e) {
                    U._tr_flush_block(
                      t,
                      t.block_start >= 0 ? t.block_start : -1,
                      t.strstart - t.block_start,
                      e
                    ),
                      (t.block_start = t.strstart),
                      s(t.strm);
                  }
                  function l (t, e) {
                    t.pending_buf[t.pending++] = e;
                  }
                  function o (t, e) {
                    (t.pending_buf[t.pending++] = (e >>> 8) & 255),
                      (t.pending_buf[t.pending++] = 255 & e);
                  }
                  function _ (t, e, a, n) {
                    var r = t.avail_in;
                    return (
                      r > n && (r = n),
                      0 === r
                        ? 0
                        : ((t.avail_in -= r),
                          j.arraySet(e, t.input, t.next_in, r, a),
                          1 === t.state.wrap
                            ? (t.adler = D(t.adler, e, r, a))
                            : 2 === t.state.wrap && (t.adler = I(t.adler, e, r, a)),
                          (t.next_in += r),
                          (t.total_in += r),
                          r)
                    );
                  }
                  function d (t, e) {
                    var a,
                      n,
                      r = t.max_chain_length,
                      i = t.strstart,
                      s = t.prev_length,
                      h = t.nice_match,
                      l = t.strstart > t.w_size - dt ? t.strstart - (t.w_size - dt) : 0,
                      o = t.window,
                      _ = t.w_mask,
                      d = t.prev,
                      u = t.strstart + _t,
                      f = o[i + s - 1],
                      c = o[i + s];
                    t.prev_length >= t.good_match && (r >>= 2),
                      h > t.lookahead && (h = t.lookahead);
                    do
                      if (
                        ((a = e),
                        o[a + s] === c &&
                          o[a + s - 1] === f &&
                          o[a] === o[i] &&
                          o[++a] === o[i + 1])
                      ) {
                        (i += 2), a++;
                        do;
                        while (
                          o[++i] === o[++a] &&
                          o[++i] === o[++a] &&
                          o[++i] === o[++a] &&
                          o[++i] === o[++a] &&
                          o[++i] === o[++a] &&
                          o[++i] === o[++a] &&
                          o[++i] === o[++a] &&
                          o[++i] === o[++a] &&
                          i < u
                        );
                        if (((n = _t - (u - i)), (i = u - _t), n > s)) {
                          if (((t.match_start = e), (s = n), n >= h)) break;
                          (f = o[i + s - 1]), (c = o[i + s]);
                        }
                      }
                    while ((e = d[e & _]) > l && 0 !== --r);
                    return s <= t.lookahead ? s : t.lookahead;
                  }
                  function u (t) {
                    var e,
                      a,
                      n,
                      r,
                      i,
                      s = t.w_size;
                    do {
                      if (
                        ((r = t.window_size - t.lookahead - t.strstart),
                        t.strstart >= s + (s - dt))
                      ) {
                        j.arraySet(t.window, t.window, s, s, 0),
                          (t.match_start -= s),
                          (t.strstart -= s),
                          (t.block_start -= s),
                          (a = t.hash_size),
                          (e = a);
                        do (n = t.head[--e]), (t.head[e] = n >= s ? n - s : 0);
                        while (--a);
                        (a = s), (e = a);
                        do (n = t.prev[--e]), (t.prev[e] = n >= s ? n - s : 0);
                        while (--a);
                        r += s;
                      }
                      if (0 === t.strm.avail_in) break;
                      if (
                        ((a = _(t.strm, t.window, t.strstart + t.lookahead, r)),
                        (t.lookahead += a),
                        t.lookahead + t.insert >= ot)
                      )
                        for (
                          i = t.strstart - t.insert,
                            t.ins_h = t.window[i],
                            t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[i + 1]) & t.hash_mask;
                          t.insert &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^ t.window[i + ot - 1]) & t.hash_mask),
                          (t.prev[i & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = i),
                          i++,
                          t.insert--,
                          !(t.lookahead + t.insert < ot));

                        );
                    } while (t.lookahead < dt && 0 !== t.strm.avail_in);
                  }
                  function f (t, e) {
                    var a = 65535;
                    for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5); ; ) {
                      if (t.lookahead <= 1) {
                        if ((u(t), 0 === t.lookahead && e === q)) return vt;
                        if (0 === t.lookahead) break;
                      }
                      (t.strstart += t.lookahead), (t.lookahead = 0);
                      var n = t.block_start + a;
                      if (
                        (0 === t.strstart || t.strstart >= n) &&
                        ((t.lookahead = t.strstart - n),
                        (t.strstart = n),
                        h(t, !1),
                        0 === t.strm.avail_out)
                      )
                        return vt;
                      if (
                        t.strstart - t.block_start >= t.w_size - dt &&
                        (h(t, !1), 0 === t.strm.avail_out)
                      )
                        return vt;
                    }
                    return (
                      (t.insert = 0),
                      e === N
                        ? (h(t, !0), 0 === t.strm.avail_out ? kt : zt)
                        : t.strstart > t.block_start && (h(t, !1), 0 === t.strm.avail_out)
                        ? vt
                        : vt
                    );
                  }
                  function c (t, e) {
                    for (var a, n; ; ) {
                      if (t.lookahead < dt) {
                        if ((u(t), t.lookahead < dt && e === q)) return vt;
                        if (0 === t.lookahead) break;
                      }
                      if (
                        ((a = 0),
                        t.lookahead >= ot &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + ot - 1]) &
                            t.hash_mask),
                          (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = t.strstart)),
                        0 !== a && t.strstart - a <= t.w_size - dt && (t.match_length = d(t, a)),
                        t.match_length >= ot)
                      )
                        if (
                          ((n = U._tr_tally(t, t.strstart - t.match_start, t.match_length - ot)),
                          (t.lookahead -= t.match_length),
                          t.match_length <= t.max_lazy_match && t.lookahead >= ot)
                        ) {
                          t.match_length--;
                          do
                            t.strstart++,
                              (t.ins_h =
                                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + ot - 1]) &
                                t.hash_mask),
                              (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                              (t.head[t.ins_h] = t.strstart);
                          while (0 !== --t.match_length);
                          t.strstart++;
                        } else
                          (t.strstart += t.match_length),
                            (t.match_length = 0),
                            (t.ins_h = t.window[t.strstart]),
                            (t.ins_h =
                              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
                              t.hash_mask);
                      else
                        (n = U._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
                      if (n && (h(t, !1), 0 === t.strm.avail_out)) return vt;
                    }
                    return (
                      (t.insert = t.strstart < ot - 1 ? t.strstart : ot - 1),
                      e === N
                        ? (h(t, !0), 0 === t.strm.avail_out ? kt : zt)
                        : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
                        ? vt
                        : yt
                    );
                  }
                  function p (t, e) {
                    for (var a, n, r; ; ) {
                      if (t.lookahead < dt) {
                        if ((u(t), t.lookahead < dt && e === q)) return vt;
                        if (0 === t.lookahead) break;
                      }
                      if (
                        ((a = 0),
                        t.lookahead >= ot &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + ot - 1]) &
                            t.hash_mask),
                          (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = t.strstart)),
                        (t.prev_length = t.match_length),
                        (t.prev_match = t.match_start),
                        (t.match_length = ot - 1),
                        0 !== a &&
                          t.prev_length < t.max_lazy_match &&
                          t.strstart - a <= t.w_size - dt &&
                          ((t.match_length = d(t, a)),
                          t.match_length <= 5 &&
                            (t.strategy === J ||
                              (t.match_length === ot && t.strstart - t.match_start > 4096)) &&
                            (t.match_length = ot - 1)),
                        t.prev_length >= ot && t.match_length <= t.prev_length)
                      ) {
                        (r = t.strstart + t.lookahead - ot),
                          (n = U._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - ot)),
                          (t.lookahead -= t.prev_length - 1),
                          (t.prev_length -= 2);
                        do
                          ++t.strstart <= r &&
                            ((t.ins_h =
                              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + ot - 1]) &
                              t.hash_mask),
                            (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                            (t.head[t.ins_h] = t.strstart));
                        while (0 !== --t.prev_length);
                        if (
                          ((t.match_available = 0),
                          (t.match_length = ot - 1),
                          t.strstart++,
                          n && (h(t, !1), 0 === t.strm.avail_out))
                        )
                          return vt;
                      } else if (t.match_available) {
                        if (
                          ((n = U._tr_tally(t, 0, t.window[t.strstart - 1])),
                          n && h(t, !1),
                          t.strstart++,
                          t.lookahead--,
                          0 === t.strm.avail_out)
                        )
                          return vt;
                      } else (t.match_available = 1), t.strstart++, t.lookahead--;
                    }
                    return (
                      t.match_available &&
                        ((n = U._tr_tally(t, 0, t.window[t.strstart - 1])),
                        (t.match_available = 0)),
                      (t.insert = t.strstart < ot - 1 ? t.strstart : ot - 1),
                      e === N
                        ? (h(t, !0), 0 === t.strm.avail_out ? kt : zt)
                        : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
                        ? vt
                        : yt
                    );
                  }
                  function g (t, e) {
                    for (var a, n, r, i, s = t.window; ; ) {
                      if (t.lookahead <= _t) {
                        if ((u(t), t.lookahead <= _t && e === q)) return vt;
                        if (0 === t.lookahead) break;
                      }
                      if (
                        ((t.match_length = 0),
                        t.lookahead >= ot &&
                          t.strstart > 0 &&
                          ((r = t.strstart - 1),
                          (n = s[r]),
                          n === s[++r] && n === s[++r] && n === s[++r]))
                      ) {
                        i = t.strstart + _t;
                        do;
                        while (
                          n === s[++r] &&
                          n === s[++r] &&
                          n === s[++r] &&
                          n === s[++r] &&
                          n === s[++r] &&
                          n === s[++r] &&
                          n === s[++r] &&
                          n === s[++r] &&
                          r < i
                        );
                        (t.match_length = _t - (i - r)),
                          t.match_length > t.lookahead && (t.match_length = t.lookahead);
                      }
                      if (
                        (t.match_length >= ot
                          ? ((a = U._tr_tally(t, 1, t.match_length - ot)),
                            (t.lookahead -= t.match_length),
                            (t.strstart += t.match_length),
                            (t.match_length = 0))
                          : ((a = U._tr_tally(t, 0, t.window[t.strstart])),
                            t.lookahead--,
                            t.strstart++),
                        a && (h(t, !1), 0 === t.strm.avail_out))
                      )
                        return vt;
                    }
                    return (
                      (t.insert = 0),
                      e === N
                        ? (h(t, !0), 0 === t.strm.avail_out ? kt : zt)
                        : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
                        ? vt
                        : yt
                    );
                  }
                  function m (t, e) {
                    for (var a; ; ) {
                      if (0 === t.lookahead && (u(t), 0 === t.lookahead)) {
                        if (e === q) return vt;
                        break;
                      }
                      if (
                        ((t.match_length = 0),
                        (a = U._tr_tally(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++,
                        a && (h(t, !1), 0 === t.strm.avail_out))
                      )
                        return vt;
                    }
                    return (
                      (t.insert = 0),
                      e === N
                        ? (h(t, !0), 0 === t.strm.avail_out ? kt : zt)
                        : t.last_lit && (h(t, !1), 0 === t.strm.avail_out)
                        ? vt
                        : yt
                    );
                  }
                  function b (t, e, a, n, r) {
                    (this.good_length = t),
                      (this.max_lazy = e),
                      (this.nice_length = a),
                      (this.max_chain = n),
                      (this.func = r);
                  }
                  function w (t) {
                    (t.window_size = 2 * t.w_size),
                      i(t.head),
                      (t.max_lazy_match = E[t.level].max_lazy),
                      (t.good_match = E[t.level].good_length),
                      (t.nice_match = E[t.level].nice_length),
                      (t.max_chain_length = E[t.level].max_chain),
                      (t.strstart = 0),
                      (t.block_start = 0),
                      (t.lookahead = 0),
                      (t.insert = 0),
                      (t.match_length = t.prev_length = ot - 1),
                      (t.match_available = 0),
                      (t.ins_h = 0);
                  }
                  function v () {
                    (this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = Z),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new j.Buf16(2 * ht)),
                      (this.dyn_dtree = new j.Buf16(2 * (2 * it + 1))),
                      (this.bl_tree = new j.Buf16(2 * (2 * st + 1))),
                      i(this.dyn_ltree),
                      i(this.dyn_dtree),
                      i(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new j.Buf16(lt + 1)),
                      (this.heap = new j.Buf16(2 * rt + 1)),
                      i(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new j.Buf16(2 * rt + 1)),
                      i(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0);
                  }
                  function y (t) {
                    var e;
                    return t && t.state
                      ? ((t.total_in = t.total_out = 0),
                        (t.data_type = Y),
                        (e = t.state),
                        (e.pending = 0),
                        (e.pending_out = 0),
                        e.wrap < 0 && (e.wrap = -e.wrap),
                        (e.status = e.wrap ? ft : bt),
                        (t.adler = 2 === e.wrap ? 0 : 1),
                        (e.last_flush = q),
                        U._tr_init(e),
                        H)
                      : n(t, K);
                  }
                  function k (t) {
                    var e = y(t);
                    return e === H && w(t.state), e;
                  }
                  function z (t, e) {
                    return t && t.state ? (2 !== t.state.wrap ? K : ((t.state.gzhead = e), H)) : K;
                  }
                  function x (t, e, a, r, i, s) {
                    if (!t) return K;
                    var h = 1;
                    if (
                      (e === G && (e = 6),
                      r < 0 ? ((h = 0), (r = -r)) : r > 15 && ((h = 2), (r -= 16)),
                      i < 1 ||
                        i > $ ||
                        a !== Z ||
                        r < 8 ||
                        r > 15 ||
                        e < 0 ||
                        e > 9 ||
                        s < 0 ||
                        s > W)
                    )
                      return n(t, K);
                    8 === r && (r = 9);
                    var l = new v();
                    return (
                      (t.state = l),
                      (l.strm = t),
                      (l.wrap = h),
                      (l.gzhead = null),
                      (l.w_bits = r),
                      (l.w_size = 1 << l.w_bits),
                      (l.w_mask = l.w_size - 1),
                      (l.hash_bits = i + 7),
                      (l.hash_size = 1 << l.hash_bits),
                      (l.hash_mask = l.hash_size - 1),
                      (l.hash_shift = ~~((l.hash_bits + ot - 1) / ot)),
                      (l.window = new j.Buf8(2 * l.w_size)),
                      (l.head = new j.Buf16(l.hash_size)),
                      (l.prev = new j.Buf16(l.w_size)),
                      (l.lit_bufsize = 1 << (i + 6)),
                      (l.pending_buf_size = 4 * l.lit_bufsize),
                      (l.pending_buf = new j.Buf8(l.pending_buf_size)),
                      (l.d_buf = 1 * l.lit_bufsize),
                      (l.l_buf = 3 * l.lit_bufsize),
                      (l.level = e),
                      (l.strategy = s),
                      (l.method = a),
                      k(t)
                    );
                  }
                  function B (t, e) {
                    return x(t, e, Z, tt, et, X);
                  }
                  function A (t, e) {
                    var a, h, _, d;
                    if (!t || !t.state || e > R || e < 0) return t ? n(t, K) : K;
                    if (
                      ((h = t.state),
                      !t.output || (!t.input && 0 !== t.avail_in) || (h.status === wt && e !== N))
                    )
                      return n(t, 0 === t.avail_out ? P : K);
                    if (((h.strm = t), (a = h.last_flush), (h.last_flush = e), h.status === ft))
                      if (2 === h.wrap)
                        (t.adler = 0),
                          l(h, 31),
                          l(h, 139),
                          l(h, 8),
                          h.gzhead
                            ? (l(
                                h,
                                (h.gzhead.text ? 1 : 0) +
                                  (h.gzhead.hcrc ? 2 : 0) +
                                  (h.gzhead.extra ? 4 : 0) +
                                  (h.gzhead.name ? 8 : 0) +
                                  (h.gzhead.comment ? 16 : 0)
                              ),
                              l(h, 255 & h.gzhead.time),
                              l(h, (h.gzhead.time >> 8) & 255),
                              l(h, (h.gzhead.time >> 16) & 255),
                              l(h, (h.gzhead.time >> 24) & 255),
                              l(h, 9 === h.level ? 2 : h.strategy >= Q || h.level < 2 ? 4 : 0),
                              l(h, 255 & h.gzhead.os),
                              h.gzhead.extra &&
                                h.gzhead.extra.length &&
                                (l(h, 255 & h.gzhead.extra.length),
                                l(h, (h.gzhead.extra.length >> 8) & 255)),
                              h.gzhead.hcrc && (t.adler = I(t.adler, h.pending_buf, h.pending, 0)),
                              (h.gzindex = 0),
                              (h.status = ct))
                            : (l(h, 0),
                              l(h, 0),
                              l(h, 0),
                              l(h, 0),
                              l(h, 0),
                              l(h, 9 === h.level ? 2 : h.strategy >= Q || h.level < 2 ? 4 : 0),
                              l(h, xt),
                              (h.status = bt));
                      else {
                        var u = (Z + ((h.w_bits - 8) << 4)) << 8,
                          f = -1;
                        (f =
                          h.strategy >= Q || h.level < 2
                            ? 0
                            : h.level < 6
                            ? 1
                            : 6 === h.level
                            ? 2
                            : 3),
                          (u |= f << 6),
                          0 !== h.strstart && (u |= ut),
                          (u += 31 - (u % 31)),
                          (h.status = bt),
                          o(h, u),
                          0 !== h.strstart && (o(h, t.adler >>> 16), o(h, 65535 & t.adler)),
                          (t.adler = 1);
                      }
                    if (h.status === ct)
                      if (h.gzhead.extra) {
                        for (
                          _ = h.pending;
                          h.gzindex < (65535 & h.gzhead.extra.length) &&
                          (h.pending !== h.pending_buf_size ||
                            (h.gzhead.hcrc &&
                              h.pending > _ &&
                              (t.adler = I(t.adler, h.pending_buf, h.pending - _, _)),
                            s(t),
                            (_ = h.pending),
                            h.pending !== h.pending_buf_size));

                        )
                          l(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
                        h.gzhead.hcrc &&
                          h.pending > _ &&
                          (t.adler = I(t.adler, h.pending_buf, h.pending - _, _)),
                          h.gzindex === h.gzhead.extra.length &&
                            ((h.gzindex = 0), (h.status = pt));
                      } else h.status = pt;
                    if (h.status === pt)
                      if (h.gzhead.name) {
                        _ = h.pending;
                        do {
                          if (
                            h.pending === h.pending_buf_size &&
                            (h.gzhead.hcrc &&
                              h.pending > _ &&
                              (t.adler = I(t.adler, h.pending_buf, h.pending - _, _)),
                            s(t),
                            (_ = h.pending),
                            h.pending === h.pending_buf_size)
                          ) {
                            d = 1;
                            break;
                          }
                          (d =
                            h.gzindex < h.gzhead.name.length
                              ? 255 & h.gzhead.name.charCodeAt(h.gzindex++)
                              : 0),
                            l(h, d);
                        } while (0 !== d);
                        h.gzhead.hcrc &&
                          h.pending > _ &&
                          (t.adler = I(t.adler, h.pending_buf, h.pending - _, _)),
                          0 === d && ((h.gzindex = 0), (h.status = gt));
                      } else h.status = gt;
                    if (h.status === gt)
                      if (h.gzhead.comment) {
                        _ = h.pending;
                        do {
                          if (
                            h.pending === h.pending_buf_size &&
                            (h.gzhead.hcrc &&
                              h.pending > _ &&
                              (t.adler = I(t.adler, h.pending_buf, h.pending - _, _)),
                            s(t),
                            (_ = h.pending),
                            h.pending === h.pending_buf_size)
                          ) {
                            d = 1;
                            break;
                          }
                          (d =
                            h.gzindex < h.gzhead.comment.length
                              ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++)
                              : 0),
                            l(h, d);
                        } while (0 !== d);
                        h.gzhead.hcrc &&
                          h.pending > _ &&
                          (t.adler = I(t.adler, h.pending_buf, h.pending - _, _)),
                          0 === d && (h.status = mt);
                      } else h.status = mt;
                    if (
                      (h.status === mt &&
                        (h.gzhead.hcrc
                          ? (h.pending + 2 > h.pending_buf_size && s(t),
                            h.pending + 2 <= h.pending_buf_size &&
                              (l(h, 255 & t.adler),
                              l(h, (t.adler >> 8) & 255),
                              (t.adler = 0),
                              (h.status = bt)))
                          : (h.status = bt)),
                      0 !== h.pending)
                    ) {
                      if ((s(t), 0 === t.avail_out)) return (h.last_flush = -1), H;
                    } else if (0 === t.avail_in && r(e) <= r(a) && e !== N) return n(t, P);
                    if (h.status === wt && 0 !== t.avail_in) return n(t, P);
                    if (0 !== t.avail_in || 0 !== h.lookahead || (e !== q && h.status !== wt)) {
                      var c =
                        h.strategy === Q
                          ? m(h, e)
                          : h.strategy === V
                          ? g(h, e)
                          : E[h.level].func(h, e);
                      if (((c !== kt && c !== zt) || (h.status = wt), c === vt || c === kt))
                        return 0 === t.avail_out && (h.last_flush = -1), H;
                      if (
                        c === yt &&
                        (e === T
                          ? U._tr_align(h)
                          : e !== R &&
                            (U._tr_stored_block(h, 0, 0, !1),
                            e === L &&
                              (i(h.head),
                              0 === h.lookahead &&
                                ((h.strstart = 0), (h.block_start = 0), (h.insert = 0)))),
                        s(t),
                        0 === t.avail_out)
                      )
                        return (h.last_flush = -1), H;
                    }
                    return e !== N
                      ? H
                      : h.wrap <= 0
                      ? F
                      : (2 === h.wrap
                          ? (l(h, 255 & t.adler),
                            l(h, (t.adler >> 8) & 255),
                            l(h, (t.adler >> 16) & 255),
                            l(h, (t.adler >> 24) & 255),
                            l(h, 255 & t.total_in),
                            l(h, (t.total_in >> 8) & 255),
                            l(h, (t.total_in >> 16) & 255),
                            l(h, (t.total_in >> 24) & 255))
                          : (o(h, t.adler >>> 16), o(h, 65535 & t.adler)),
                        s(t),
                        h.wrap > 0 && (h.wrap = -h.wrap),
                        0 !== h.pending ? H : F);
                  }
                  function C (t) {
                    var e;
                    return t && t.state
                      ? ((e = t.state.status),
                        e !== ft &&
                        e !== ct &&
                        e !== pt &&
                        e !== gt &&
                        e !== mt &&
                        e !== bt &&
                        e !== wt
                          ? n(t, K)
                          : ((t.state = null), e === bt ? n(t, M) : H))
                      : K;
                  }
                  function S (t, e) {
                    var a,
                      n,
                      r,
                      s,
                      h,
                      l,
                      o,
                      _,
                      d = e.length;
                    if (!t || !t.state) return K;
                    if (
                      ((a = t.state),
                      (s = a.wrap),
                      2 === s || (1 === s && a.status !== ft) || a.lookahead)
                    )
                      return K;
                    for (
                      1 === s && (t.adler = D(t.adler, e, d, 0)),
                        a.wrap = 0,
                        d >= a.w_size &&
                          (0 === s &&
                            (i(a.head), (a.strstart = 0), (a.block_start = 0), (a.insert = 0)),
                          (_ = new j.Buf8(a.w_size)),
                          j.arraySet(_, e, d - a.w_size, a.w_size, 0),
                          (e = _),
                          (d = a.w_size)),
                        h = t.avail_in,
                        l = t.next_in,
                        o = t.input,
                        t.avail_in = d,
                        t.next_in = 0,
                        t.input = e,
                        u(a);
                      a.lookahead >= ot;

                    ) {
                      (n = a.strstart), (r = a.lookahead - (ot - 1));
                      do
                        (a.ins_h =
                          ((a.ins_h << a.hash_shift) ^ a.window[n + ot - 1]) & a.hash_mask),
                          (a.prev[n & a.w_mask] = a.head[a.ins_h]),
                          (a.head[a.ins_h] = n),
                          n++;
                      while (--r);
                      (a.strstart = n), (a.lookahead = ot - 1), u(a);
                    }
                    return (
                      (a.strstart += a.lookahead),
                      (a.block_start = a.strstart),
                      (a.insert = a.lookahead),
                      (a.lookahead = 0),
                      (a.match_length = a.prev_length = ot - 1),
                      (a.match_available = 0),
                      (t.next_in = l),
                      (t.input = o),
                      (t.avail_in = h),
                      (a.wrap = s),
                      H
                    );
                  }
                  var E,
                    j = t('../utils/common'),
                    U = t('./trees'),
                    D = t('./adler32'),
                    I = t('./crc32'),
                    O = t('./messages'),
                    q = 0,
                    T = 1,
                    L = 3,
                    N = 4,
                    R = 5,
                    H = 0,
                    F = 1,
                    K = -2,
                    M = -3,
                    P = -5,
                    G = -1,
                    J = 1,
                    Q = 2,
                    V = 3,
                    W = 4,
                    X = 0,
                    Y = 2,
                    Z = 8,
                    $ = 9,
                    tt = 15,
                    et = 8,
                    at = 29,
                    nt = 256,
                    rt = nt + 1 + at,
                    it = 30,
                    st = 19,
                    ht = 2 * rt + 1,
                    lt = 15,
                    ot = 3,
                    _t = 258,
                    dt = _t + ot + 1,
                    ut = 32,
                    ft = 42,
                    ct = 69,
                    pt = 73,
                    gt = 91,
                    mt = 103,
                    bt = 113,
                    wt = 666,
                    vt = 1,
                    yt = 2,
                    kt = 3,
                    zt = 4,
                    xt = 3;
                  (E = [
                    new b(0, 0, 0, 0, f),
                    new b(4, 4, 8, 4, c),
                    new b(4, 5, 16, 8, c),
                    new b(4, 6, 32, 32, c),
                    new b(4, 4, 16, 16, p),
                    new b(8, 16, 32, 32, p),
                    new b(8, 16, 128, 128, p),
                    new b(8, 32, 128, 256, p),
                    new b(32, 128, 258, 1024, p),
                    new b(32, 258, 258, 4096, p),
                  ]),
                    (a.deflateInit = B),
                    (a.deflateInit2 = x),
                    (a.deflateReset = k),
                    (a.deflateResetKeep = y),
                    (a.deflateSetHeader = z),
                    (a.deflate = A),
                    (a.deflateEnd = C),
                    (a.deflateSetDictionary = S),
                    (a.deflateInfo = 'pako deflate (from Nodeca project)');
                },
                {
                  '../utils/common': 1,
                  './adler32': 3,
                  './crc32': 4,
                  './messages': 6,
                  './trees': 7,
                },
              ],
              6: [
                function (t, e, a) {
                  e.exports = {
                    2: 'need dictionary',
                    1: 'stream end',
                    0: '',
                    '-1': 'file error',
                    '-2': 'stream error',
                    '-3': 'data error',
                    '-4': 'insufficient memory',
                    '-5': 'buffer error',
                    '-6': 'incompatible version',
                  };
                },
                {},
              ],
              7: [
                function (t, e, a) {
                  function n (t) {
                    for (var e = t.length; --e >= 0; ) t[e] = 0;
                  }
                  function r (t, e, a, n, r) {
                    (this.static_tree = t),
                      (this.extra_bits = e),
                      (this.extra_base = a),
                      (this.elems = n),
                      (this.max_length = r),
                      (this.has_stree = t && t.length);
                  }
                  function i (t, e) {
                    (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
                  }
                  function s (t) {
                    return t < 256 ? lt[t] : lt[256 + (t >>> 7)];
                  }
                  function h (t, e) {
                    (t.pending_buf[t.pending++] = 255 & e),
                      (t.pending_buf[t.pending++] = (e >>> 8) & 255);
                  }
                  function l (t, e, a) {
                    t.bi_valid > W - a
                      ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                        h(t, t.bi_buf),
                        (t.bi_buf = e >> (W - t.bi_valid)),
                        (t.bi_valid += a - W))
                      : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += a));
                  }
                  function o (t, e, a) {
                    l(t, a[2 * e], a[2 * e + 1]);
                  }
                  function _ (t, e) {
                    var a = 0;
                    do (a |= 1 & t), (t >>>= 1), (a <<= 1);
                    while (--e > 0);
                    return a >>> 1;
                  }
                  function d (t) {
                    16 === t.bi_valid
                      ? (h(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                      : t.bi_valid >= 8 &&
                        ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                        (t.bi_buf >>= 8),
                        (t.bi_valid -= 8));
                  }
                  function u (t, e) {
                    var a,
                      n,
                      r,
                      i,
                      s,
                      h,
                      l = e.dyn_tree,
                      o = e.max_code,
                      _ = e.stat_desc.static_tree,
                      d = e.stat_desc.has_stree,
                      u = e.stat_desc.extra_bits,
                      f = e.stat_desc.extra_base,
                      c = e.stat_desc.max_length,
                      p = 0;
                    for (i = 0; i <= V; i++) t.bl_count[i] = 0;
                    for (l[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; a < Q; a++)
                      (n = t.heap[a]),
                        (i = l[2 * l[2 * n + 1] + 1] + 1),
                        i > c && ((i = c), p++),
                        (l[2 * n + 1] = i),
                        n > o ||
                          (t.bl_count[i]++,
                          (s = 0),
                          n >= f && (s = u[n - f]),
                          (h = l[2 * n]),
                          (t.opt_len += h * (i + s)),
                          d && (t.static_len += h * (_[2 * n + 1] + s)));
                    if (0 !== p) {
                      do {
                        for (i = c - 1; 0 === t.bl_count[i]; ) i--;
                        t.bl_count[i]--, (t.bl_count[i + 1] += 2), t.bl_count[c]--, (p -= 2);
                      } while (p > 0);
                      for (i = c; 0 !== i; i--)
                        for (n = t.bl_count[i]; 0 !== n; )
                          (r = t.heap[--a]),
                            r > o ||
                              (l[2 * r + 1] !== i &&
                                ((t.opt_len += (i - l[2 * r + 1]) * l[2 * r]), (l[2 * r + 1] = i)),
                              n--);
                    }
                  }
                  function f (t, e, a) {
                    var n,
                      r,
                      i = new Array(V + 1),
                      s = 0;
                    for (n = 1; n <= V; n++) i[n] = s = (s + a[n - 1]) << 1;
                    for (r = 0; r <= e; r++) {
                      var h = t[2 * r + 1];
                      0 !== h && (t[2 * r] = _(i[h]++, h));
                    }
                  }
                  function c () {
                    var t,
                      e,
                      a,
                      n,
                      i,
                      s = new Array(V + 1);
                    for (a = 0, n = 0; n < K - 1; n++)
                      for (_t[n] = a, t = 0; t < 1 << et[n]; t++) ot[a++] = n;
                    for (ot[a - 1] = n, i = 0, n = 0; n < 16; n++)
                      for (dt[n] = i, t = 0; t < 1 << at[n]; t++) lt[i++] = n;
                    for (i >>= 7; n < G; n++)
                      for (dt[n] = i << 7, t = 0; t < 1 << (at[n] - 7); t++) lt[256 + i++] = n;
                    for (e = 0; e <= V; e++) s[e] = 0;
                    for (t = 0; t <= 143; ) (st[2 * t + 1] = 8), t++, s[8]++;
                    for (; t <= 255; ) (st[2 * t + 1] = 9), t++, s[9]++;
                    for (; t <= 279; ) (st[2 * t + 1] = 7), t++, s[7]++;
                    for (; t <= 287; ) (st[2 * t + 1] = 8), t++, s[8]++;
                    for (f(st, P + 1, s), t = 0; t < G; t++)
                      (ht[2 * t + 1] = 5), (ht[2 * t] = _(t, 5));
                    (ut = new r(st, et, M + 1, P, V)),
                      (ft = new r(ht, at, 0, G, V)),
                      (ct = new r(new Array(0), nt, 0, J, X));
                  }
                  function p (t) {
                    var e;
                    for (e = 0; e < P; e++) t.dyn_ltree[2 * e] = 0;
                    for (e = 0; e < G; e++) t.dyn_dtree[2 * e] = 0;
                    for (e = 0; e < J; e++) t.bl_tree[2 * e] = 0;
                    (t.dyn_ltree[2 * Y] = 1),
                      (t.opt_len = t.static_len = 0),
                      (t.last_lit = t.matches = 0);
                  }
                  function g (t) {
                    t.bi_valid > 8
                      ? h(t, t.bi_buf)
                      : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
                      (t.bi_buf = 0),
                      (t.bi_valid = 0);
                  }
                  function m (t, e, a, n) {
                    g(t),
                      n && (h(t, a), h(t, ~a)),
                      D.arraySet(t.pending_buf, t.window, e, a, t.pending),
                      (t.pending += a);
                  }
                  function b (t, e, a, n) {
                    var r = 2 * e,
                      i = 2 * a;
                    return t[r] < t[i] || (t[r] === t[i] && n[e] <= n[a]);
                  }
                  function w (t, e, a) {
                    for (
                      var n = t.heap[a], r = a << 1;
                      r <= t.heap_len &&
                      (r < t.heap_len && b(e, t.heap[r + 1], t.heap[r], t.depth) && r++,
                      !b(e, n, t.heap[r], t.depth));

                    )
                      (t.heap[a] = t.heap[r]), (a = r), (r <<= 1);
                    t.heap[a] = n;
                  }
                  function v (t, e, a) {
                    var n,
                      r,
                      i,
                      h,
                      _ = 0;
                    if (0 !== t.last_lit) {
                      do
                        (n =
                          (t.pending_buf[t.d_buf + 2 * _] << 8) |
                          t.pending_buf[t.d_buf + 2 * _ + 1]),
                          (r = t.pending_buf[t.l_buf + _]),
                          _++,
                          0 === n
                            ? o(t, r, e)
                            : ((i = ot[r]),
                              o(t, i + M + 1, e),
                              (h = et[i]),
                              0 !== h && ((r -= _t[i]), l(t, r, h)),
                              n--,
                              (i = s(n)),
                              o(t, i, a),
                              (h = at[i]),
                              0 !== h && ((n -= dt[i]), l(t, n, h)));
                      while (_ < t.last_lit);
                    }
                    o(t, Y, e);
                  }
                  function y (t, e) {
                    var a,
                      n,
                      r,
                      i = e.dyn_tree,
                      s = e.stat_desc.static_tree,
                      h = e.stat_desc.has_stree,
                      l = e.stat_desc.elems,
                      o = -1;
                    for (t.heap_len = 0, t.heap_max = Q, a = 0; a < l; a++)
                      0 !== i[2 * a]
                        ? ((t.heap[++t.heap_len] = o = a), (t.depth[a] = 0))
                        : (i[2 * a + 1] = 0);
                    for (; t.heap_len < 2; )
                      (r = t.heap[++t.heap_len] = o < 2 ? ++o : 0),
                        (i[2 * r] = 1),
                        (t.depth[r] = 0),
                        t.opt_len--,
                        h && (t.static_len -= s[2 * r + 1]);
                    for (e.max_code = o, a = t.heap_len >> 1; a >= 1; a--) w(t, i, a);
                    r = l;
                    do
                      (a = t.heap[1]),
                        (t.heap[1] = t.heap[t.heap_len--]),
                        w(t, i, 1),
                        (n = t.heap[1]),
                        (t.heap[--t.heap_max] = a),
                        (t.heap[--t.heap_max] = n),
                        (i[2 * r] = i[2 * a] + i[2 * n]),
                        (t.depth[r] = (t.depth[a] >= t.depth[n] ? t.depth[a] : t.depth[n]) + 1),
                        (i[2 * a + 1] = i[2 * n + 1] = r),
                        (t.heap[1] = r++),
                        w(t, i, 1);
                    while (t.heap_len >= 2);
                    (t.heap[--t.heap_max] = t.heap[1]), u(t, e), f(i, o, t.bl_count);
                  }
                  function k (t, e, a) {
                    var n,
                      r,
                      i = -1,
                      s = e[1],
                      h = 0,
                      l = 7,
                      o = 4;
                    for (
                      0 === s && ((l = 138), (o = 3)), e[2 * (a + 1) + 1] = 65535, n = 0;
                      n <= a;
                      n++
                    )
                      (r = s),
                        (s = e[2 * (n + 1) + 1]),
                        (++h < l && r === s) ||
                          (h < o
                            ? (t.bl_tree[2 * r] += h)
                            : 0 !== r
                            ? (r !== i && t.bl_tree[2 * r]++, t.bl_tree[2 * Z]++)
                            : h <= 10
                            ? t.bl_tree[2 * $]++
                            : t.bl_tree[2 * tt]++,
                          (h = 0),
                          (i = r),
                          0 === s
                            ? ((l = 138), (o = 3))
                            : r === s
                            ? ((l = 6), (o = 3))
                            : ((l = 7), (o = 4)));
                  }
                  function z (t, e, a) {
                    var n,
                      r,
                      i = -1,
                      s = e[1],
                      h = 0,
                      _ = 7,
                      d = 4;
                    for (0 === s && ((_ = 138), (d = 3)), n = 0; n <= a; n++)
                      if (((r = s), (s = e[2 * (n + 1) + 1]), !(++h < _ && r === s))) {
                        if (h < d) {
                          do o(t, r, t.bl_tree);
                          while (0 !== --h);
                        } else
                          0 !== r
                            ? (r !== i && (o(t, r, t.bl_tree), h--),
                              o(t, Z, t.bl_tree),
                              l(t, h - 3, 2))
                            : h <= 10
                            ? (o(t, $, t.bl_tree), l(t, h - 3, 3))
                            : (o(t, tt, t.bl_tree), l(t, h - 11, 7));
                        (h = 0),
                          (i = r),
                          0 === s
                            ? ((_ = 138), (d = 3))
                            : r === s
                            ? ((_ = 6), (d = 3))
                            : ((_ = 7), (d = 4));
                      }
                  }
                  function x (t) {
                    var e;
                    for (
                      k(t, t.dyn_ltree, t.l_desc.max_code),
                        k(t, t.dyn_dtree, t.d_desc.max_code),
                        y(t, t.bl_desc),
                        e = J - 1;
                      e >= 3 && 0 === t.bl_tree[2 * rt[e] + 1];
                      e--
                    );
                    return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                  }
                  function B (t, e, a, n) {
                    var r;
                    for (l(t, e - 257, 5), l(t, a - 1, 5), l(t, n - 4, 4), r = 0; r < n; r++)
                      l(t, t.bl_tree[2 * rt[r] + 1], 3);
                    z(t, t.dyn_ltree, e - 1), z(t, t.dyn_dtree, a - 1);
                  }
                  function A (t) {
                    var e,
                      a = 4093624447;
                    for (e = 0; e <= 31; e++, a >>>= 1)
                      if (1 & a && 0 !== t.dyn_ltree[2 * e]) return O;
                    if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                      return q;
                    for (e = 32; e < M; e++) if (0 !== t.dyn_ltree[2 * e]) return q;
                    return O;
                  }
                  function C (t) {
                    pt || (c(), (pt = !0)),
                      (t.l_desc = new i(t.dyn_ltree, ut)),
                      (t.d_desc = new i(t.dyn_dtree, ft)),
                      (t.bl_desc = new i(t.bl_tree, ct)),
                      (t.bi_buf = 0),
                      (t.bi_valid = 0),
                      p(t);
                  }
                  function S (t, e, a, n) {
                    l(t, (L << 1) + (n ? 1 : 0), 3), m(t, e, a, !0);
                  }
                  function E (t) {
                    l(t, N << 1, 3), o(t, Y, st), d(t);
                  }
                  function j (t, e, a, n) {
                    var r,
                      i,
                      s = 0;
                    t.level > 0
                      ? (t.strm.data_type === T && (t.strm.data_type = A(t)),
                        y(t, t.l_desc),
                        y(t, t.d_desc),
                        (s = x(t)),
                        (r = (t.opt_len + 3 + 7) >>> 3),
                        (i = (t.static_len + 3 + 7) >>> 3),
                        i <= r && (r = i))
                      : (r = i = a + 5),
                      a + 4 <= r && e !== -1
                        ? S(t, e, a, n)
                        : t.strategy === I || i === r
                        ? (l(t, (N << 1) + (n ? 1 : 0), 3), v(t, st, ht))
                        : (l(t, (R << 1) + (n ? 1 : 0), 3),
                          B(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1),
                          v(t, t.dyn_ltree, t.dyn_dtree)),
                      p(t),
                      n && g(t);
                  }
                  function U (t, e, a) {
                    return (
                      (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
                      (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                      (t.pending_buf[t.l_buf + t.last_lit] = 255 & a),
                      t.last_lit++,
                      0 === e
                        ? t.dyn_ltree[2 * a]++
                        : (t.matches++,
                          e--,
                          t.dyn_ltree[2 * (ot[a] + M + 1)]++,
                          t.dyn_dtree[2 * s(e)]++),
                      t.last_lit === t.lit_bufsize - 1
                    );
                  }
                  var D = t('../utils/common'),
                    I = 4,
                    O = 0,
                    q = 1,
                    T = 2,
                    L = 0,
                    N = 1,
                    R = 2,
                    H = 3,
                    F = 258,
                    K = 29,
                    M = 256,
                    P = M + 1 + K,
                    G = 30,
                    J = 19,
                    Q = 2 * P + 1,
                    V = 15,
                    W = 16,
                    X = 7,
                    Y = 256,
                    Z = 16,
                    $ = 17,
                    tt = 18,
                    et = [
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      1,
                      1,
                      1,
                      2,
                      2,
                      2,
                      2,
                      3,
                      3,
                      3,
                      3,
                      4,
                      4,
                      4,
                      4,
                      5,
                      5,
                      5,
                      5,
                      0,
                    ],
                    at = [
                      0,
                      0,
                      0,
                      0,
                      1,
                      1,
                      2,
                      2,
                      3,
                      3,
                      4,
                      4,
                      5,
                      5,
                      6,
                      6,
                      7,
                      7,
                      8,
                      8,
                      9,
                      9,
                      10,
                      10,
                      11,
                      11,
                      12,
                      12,
                      13,
                      13,
                    ],
                    nt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    rt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    it = 512,
                    st = new Array(2 * (P + 2));
                  n(st);
                  var ht = new Array(2 * G);
                  n(ht);
                  var lt = new Array(it);
                  n(lt);
                  var ot = new Array(F - H + 1);
                  n(ot);
                  var _t = new Array(K);
                  n(_t);
                  var dt = new Array(G);
                  n(dt);
                  var ut,
                    ft,
                    ct,
                    pt = !1;
                  (a._tr_init = C),
                    (a._tr_stored_block = S),
                    (a._tr_flush_block = j),
                    (a._tr_tally = U),
                    (a._tr_align = E);
                },
                { '../utils/common': 1 },
              ],
              8: [
                function (t, e, a) {
                  function n () {
                    (this.input = null),
                      (this.next_in = 0),
                      (this.avail_in = 0),
                      (this.total_in = 0),
                      (this.output = null),
                      (this.next_out = 0),
                      (this.avail_out = 0),
                      (this.total_out = 0),
                      (this.msg = ''),
                      (this.state = null),
                      (this.data_type = 2),
                      (this.adler = 0);
                  }
                  e.exports = n;
                },
                {},
              ],
              '/lib/deflate.js': [
                function (t, e, a) {
                  function n (t) {
                    if (!(this instanceof n)) return new n(t);
                    this.options = l.assign(
                      {
                        level: b,
                        method: v,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: w,
                        to: '',
                      },
                      t || {}
                    );
                    var e = this.options;
                    e.raw && e.windowBits > 0
                      ? (e.windowBits = -e.windowBits)
                      : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new d()),
                      (this.strm.avail_out = 0);
                    var a = h.deflateInit2(
                      this.strm,
                      e.level,
                      e.method,
                      e.windowBits,
                      e.memLevel,
                      e.strategy
                    );
                    if (a !== p) throw new Error(_[a]);
                    if ((e.header && h.deflateSetHeader(this.strm, e.header), e.dictionary)) {
                      var r;
                      if (
                        ((r =
                          'string' == typeof e.dictionary
                            ? o.string2buf(e.dictionary)
                            : '[object ArrayBuffer]' === u.call(e.dictionary)
                            ? new Uint8Array(e.dictionary)
                            : e.dictionary),
                        (a = h.deflateSetDictionary(this.strm, r)),
                        a !== p)
                      )
                        throw new Error(_[a]);
                      this._dict_set = !0;
                    }
                  }
                  function r (t, e) {
                    var a = new n(e);
                    if ((a.push(t, !0), a.err)) throw a.msg || _[a.err];
                    return a.result;
                  }
                  function i (t, e) {
                    return (e = e || {}), (e.raw = !0), r(t, e);
                  }
                  function s (t, e) {
                    return (e = e || {}), (e.gzip = !0), r(t, e);
                  }
                  var h = t('./zlib/deflate'),
                    l = t('./utils/common'),
                    o = t('./utils/strings'),
                    _ = t('./zlib/messages'),
                    d = t('./zlib/zstream'),
                    u = Object.prototype.toString,
                    f = 0,
                    c = 4,
                    p = 0,
                    g = 1,
                    m = 2,
                    b = -1,
                    w = 0,
                    v = 8;
                  (n.prototype.push = function (t, e) {
                    var a,
                      n,
                      r = this.strm,
                      i = this.options.chunkSize;
                    if (this.ended) return !1;
                    (n = e === ~~e ? e : e === !0 ? c : f),
                      'string' == typeof t
                        ? (r.input = o.string2buf(t))
                        : '[object ArrayBuffer]' === u.call(t)
                        ? (r.input = new Uint8Array(t))
                        : (r.input = t),
                      (r.next_in = 0),
                      (r.avail_in = r.input.length);
                    do {
                      if (
                        (0 === r.avail_out &&
                          ((r.output = new l.Buf8(i)), (r.next_out = 0), (r.avail_out = i)),
                        (a = h.deflate(r, n)),
                        a !== g && a !== p)
                      )
                        return this.onEnd(a), (this.ended = !0), !1;
                      (0 !== r.avail_out && (0 !== r.avail_in || (n !== c && n !== m))) ||
                        ('string' === this.options.to
                          ? this.onData(o.buf2binstring(l.shrinkBuf(r.output, r.next_out)))
                          : this.onData(l.shrinkBuf(r.output, r.next_out)));
                    } while ((r.avail_in > 0 || 0 === r.avail_out) && a !== g);
                    return n === c
                      ? ((a = h.deflateEnd(this.strm)), this.onEnd(a), (this.ended = !0), a === p)
                      : n !== m || (this.onEnd(p), (r.avail_out = 0), !0);
                  }),
                    (n.prototype.onData = function (t) {
                      this.chunks.push(t);
                    }),
                    (n.prototype.onEnd = function (t) {
                      t === p &&
                        ('string' === this.options.to
                          ? (this.result = this.chunks.join(''))
                          : (this.result = l.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = t),
                        (this.msg = this.strm.msg);
                    }),
                    (a.Deflate = n),
                    (a.deflate = r),
                    (a.deflateRaw = i),
                    (a.gzip = s);
                },
                {
                  './utils/common': 1,
                  './utils/strings': 2,
                  './zlib/deflate': 5,
                  './zlib/messages': 6,
                  './zlib/zstream': 8,
                },
              ],
            },
            {},
            []
          )('/lib/deflate.js');
        });
        if (window.TLT)
          throw 'Attempting to recreate TLT. Library may be included more than once on the page.';
        window.TLT = (function () {
          function logScreenview (type, name, referrerName, root) {
            var dcid = null,
              screenviewMsg = null,
              queue = TLT.getService('queue'),
              replay = TLT.getModule('replay'),
              cookieModule = TLT.getModule('TLCookie'),
              webEvent = null,
              urlInfo = TLT.utils.getOriginAndPath();
            if (!name || typeof name !== 'string') return;
            if (!referrerName || typeof referrerName !== 'string') referrerName = '';
            screenviewMsg = {
              type: 2,
              screenview: {
                type: type,
                name: name,
                url: urlInfo.path,
                host: urlInfo.origin,
                referrer: referrerName,
              },
            };
            if (type === 'LOAD') webEvent = { type: 'screenview_load', name: name };
            else if (type === 'UNLOAD') webEvent = { type: 'screenview_unload', name: name };
            if (webEvent && replay) dcid = replay.onevent(webEvent);
            if (dcid) screenviewMsg.dcid = dcid;
            if (type === 'LOAD' || type === 'UNLOAD') queue.post('', screenviewMsg, 'DEFAULT');
            if (webEvent && cookieModule) cookieModule.onevent(webEvent);
          }
          function addGeolocationMsg (position) {
            var geolocationMsg,
              queue = TLT.getService('queue');
            if (!position || !position.coords) return;
            geolocationMsg = {
              type: 13,
              geolocation: {
                lat: position.coords.latitude,
                long: position.coords.longitude,
                accuracy: Math.ceil(position.coords.accuracy),
              },
            };
            queue.post('', geolocationMsg, 'DEFAULT');
          }
          function addGeolocationErrorMsg () {
            var geolocationMsg,
              queue = TLT.getService('queue');
            geolocationMsg = {
              type: 13,
              geolocation: { errorCode: 201, error: 'Permission denied.' },
            };
            queue.post('', geolocationMsg, 'DEFAULT');
          }
          var tltStartTime = new Date().getTime(),
            tltPageId,
            modules = {},
            services = {},
            initialized = false,
            state = null,
            isFrameBlacklisted = (function () {
              var blacklistedFrames,
                checkedFrames = [];
              function prepareBlacklistedFrames (scope) {
                var browserService = core.getService('browser'),
                  blacklist = core.getCoreConfig().framesBlacklist,
                  foundFrames,
                  i;
                blacklistedFrames = blacklistedFrames || [];
                scope = scope || null;
                if (typeof blacklist !== 'undefined' && blacklist.length > 0) {
                  for (i = 0; i < blacklist.length; i += 1) {
                    foundFrames = browserService.queryAll(blacklist[i], scope);
                    if (foundFrames && foundFrames.length > 0)
                      blacklistedFrames = blacklistedFrames.concat(foundFrames);
                  }
                  checkedFrames = checkedFrames.concat(browserService.queryAll('iframe', scope));
                }
              }
              function isFrameBlacklisted (iframe) {
                if (core.utils.indexOf(checkedFrames, iframe) < 0)
                  prepareBlacklistedFrames(iframe.ownerDocument);
                return core.utils.indexOf(blacklistedFrames, iframe) > -1;
              }
              isFrameBlacklisted.clearCache = function () {
                blacklistedFrames = null;
              };
              return isFrameBlacklisted;
            })(),
            lastClickedElement = null,
            servicePassthroughs = {
              config: [
                'getConfig',
                'updateConfig',
                'getCoreConfig',
                'updateCoreConfig',
                'getModuleConfig',
                'updateModuleConfig',
                'getServiceConfig',
                'updateServiceConfig',
              ],
              queue: ['post', 'setAutoFlush', 'flushAll'],
              browserBase: ['getXPathFromNode', 'processDOMEvent'],
            },
            loadUnloadHandler = (function () {
              var status = {};
              return {
                normalizeModuleEvents: function (
                  moduleName,
                  moduleEvents,
                  localTop,
                  documentScope
                ) {
                  var modStatus = status[moduleName],
                    load = false,
                    unload = false,
                    browserService = core.getService('browser');
                  localTop = localTop || core._getLocalTop();
                  documentScope = documentScope || localTop.document;
                  if (modStatus) return;
                  status[moduleName] = { loadFired: false, pageHideFired: false };
                  core.utils.forEach(moduleEvents, function (eventConfig) {
                    switch (eventConfig.name) {
                      case 'load':
                        load = true;
                        moduleEvents.push(
                          core.utils.mixin(core.utils.mixin({}, eventConfig), { name: 'pageshow' })
                        );
                        break;
                      case 'unload':
                        unload = true;
                        moduleEvents.push(
                          core.utils.mixin(core.utils.mixin({}, eventConfig), { name: 'pagehide' })
                        );
                        moduleEvents.push(
                          core.utils.mixin(core.utils.mixin({}, eventConfig), {
                            name: 'beforeunload',
                          })
                        );
                        break;
                      case 'change':
                        if (core.utils.isLegacyIE && core.getFlavor() === 'w3c')
                          moduleEvents.push(
                            core.utils.mixin(core.utils.mixin({}, eventConfig), {
                              name: 'propertychange',
                            })
                          );
                        break;
                    }
                  });
                  if (!load && !unload) {
                    delete status[moduleName];
                    return;
                  }
                  status[moduleName].silentLoad = !load;
                  status[moduleName].silentUnload = !unload;
                  if (!load) moduleEvents.push({ name: 'load', target: localTop });
                  if (!unload) moduleEvents.push({ name: 'unload', target: localTop });
                },
                canPublish: function (moduleName, event) {
                  var mod;
                  if (status.hasOwnProperty(moduleName) === false) return true;
                  mod = status[moduleName];
                  switch (event.type) {
                    case 'load':
                      mod.pageHideFired = false;
                      mod.loadFired = true;
                      return !mod.silentLoad;
                    case 'pageshow':
                      mod.pageHideFired = false;
                      event.type = 'load';
                      return !mod.loadFired && !mod.silentLoad;
                    case 'pagehide':
                      event.type = 'unload';
                      mod.loadFired = false;
                      mod.pageHideFired = true;
                      return !mod.silentUnload;
                    case 'unload':
                    case 'beforeunload':
                      event.type = 'unload';
                      mod.loadFired = false;
                      return !mod.pageHideFired && !mod.silentUnload;
                  }
                  return true;
                },
                isUnload: function (event) {
                  return typeof event === 'object'
                    ? event.type === 'unload' ||
                        event.type === 'beforeunload' ||
                        event.type === 'pagehide'
                    : false;
                },
              };
            })(),
            events = {},
            bridgeCallbacks = {},
            _init = function () {},
            _callback = null,
            okToCallInit = true,
            resetInactivityTimer = function () {},
            fullDOMFlushed = false,
            detectScreenviewChange = (function () {
              var location = window.location,
                prevPathname = location.pathname,
                prevHash = location.hash,
                prevScreenview = '';
              return function () {
                var currPathname = location.pathname,
                  currHash = location.hash,
                  currScreenview = prevScreenview;
                if (currPathname !== prevPathname) currScreenview = currPathname + currHash;
                else if (currHash !== prevHash) currScreenview = currHash;
                if (currScreenview !== prevScreenview) {
                  if (prevScreenview) logScreenview('UNLOAD', prevScreenview);
                  logScreenview('LOAD', currScreenview);
                  prevScreenview = currScreenview;
                  prevPathname = currPathname;
                  prevHash = currHash;
                }
              };
            })(),
            isElementBlocked = function (element, scope) {
              var i,
                j,
                len,
                isBlocked = false,
                browserService = core.getService('browser'),
                blockedList = core.getCoreConfig().blockedElements,
                blockedElem,
                blockedElems,
                blockedElemsLen;
              if (!blockedList || !blockedList.length) {
                isElementBlocked = function () {
                  return false;
                };
                return isBlocked;
              }
              if (!element || !element.nodeType) return isBlocked;
              scope = scope || core.utils.getDocument(element);
              for (i = 0, len = blockedList.length; i < len && !isBlocked; i += 1) {
                blockedElems = browserService.queryAll(blockedList[i], scope);
                for (
                  j = 0, blockedElemsLen = blockedElems.length;
                  j < blockedElemsLen && !isBlocked;
                  j += 1
                ) {
                  blockedElem = blockedElems[j];
                  isBlocked = blockedElem.contains
                    ? blockedElem.contains(element)
                    : blockedElem === element;
                }
              }
              return isBlocked;
            },
            core = {
              getStartTime: function () {
                return tltStartTime;
              },
              getPageId: function () {
                return tltPageId || '#';
              },
              getLibraryVersion: function () {
                return '5.5.0.1814';
              },
              init: function (config, callback) {
                var timeoutCallback;
                _callback = callback;
                if (!okToCallInit) throw 'init must only be called once!';
                tltPageId = 'P.' + this.utils.getRandomString(28);
                okToCallInit = false;
                timeoutCallback = function (event) {
                  event = event || window.event || {};
                  if (
                    document.addEventListener ||
                    event.type === 'load' ||
                    document.readyState === 'complete'
                  ) {
                    if (document.removeEventListener) {
                      document.removeEventListener('DOMContentLoaded', timeoutCallback, false);
                      window.removeEventListener('load', timeoutCallback, false);
                    } else {
                      document.detachEvent('onreadystatechange', timeoutCallback);
                      window.detachEvent('onload', timeoutCallback);
                    }
                    _init(config, callback);
                  }
                };
                if (document.readyState === 'complete') setTimeout(timeoutCallback);
                else if (document.addEventListener) {
                  document.addEventListener('DOMContentLoaded', timeoutCallback, false);
                  window.addEventListener('load', timeoutCallback, false);
                } else {
                  document.attachEvent('onreadystatechange', timeoutCallback);
                  window.attachEvent('onload', timeoutCallback);
                }
              },
              isInitialized: function () {
                return initialized;
              },
              getState: function () {
                return state;
              },
              destroy: function (skipEvents) {
                var token = '',
                  eventName = '',
                  target = null,
                  serviceName = null,
                  service = null,
                  browser = null,
                  delegateTarget = false;
                if (okToCallInit) return false;
                this.stopAll();
                if (!skipEvents) {
                  browser = this.getService('browser');
                  for (token in events)
                    if (events.hasOwnProperty(token) && browser !== null) {
                      eventName = token.split('|')[0];
                      target = events[token].target;
                      delegateTarget = events[token].delegateTarget || undefined;
                      browser.unsubscribe(eventName, target, this._publishEvent, delegateTarget);
                    }
                }
                for (serviceName in services)
                  if (services.hasOwnProperty(serviceName)) {
                    service = services[serviceName].instance;
                    if (service && typeof service.destroy === 'function') service.destroy();
                    services[serviceName].instance = null;
                  }
                isFrameBlacklisted.clearCache();
                events = {};
                initialized = false;
                okToCallInit = true;
                state = 'destroyed';
                if (typeof _callback === 'function')
                  try {
                    _callback('destroyed');
                  } catch (e) {}
              },
              _updateModules: function (scope) {
                var config = this.getCoreConfig(),
                  browser = this.getService('browser'),
                  moduleConfig = null,
                  moduleName = null,
                  result = true;
                if (config && browser && config.modules)
                  try {
                    for (moduleName in config.modules)
                      if (config.modules.hasOwnProperty(moduleName)) {
                        moduleConfig = config.modules[moduleName];
                        if (modules.hasOwnProperty(moduleName)) {
                          if (moduleConfig.enabled === false) {
                            this.stop(moduleName);
                            continue;
                          }
                          this.start(moduleName);
                          if (moduleConfig.events)
                            this._registerModuleEvents(moduleName, moduleConfig.events, scope);
                        }
                      }
                    this._registerModuleEvents.clearCache();
                  } catch (e) {
                    core.destroy();
                    result = false;
                  }
                else result = false;
                return result;
              },
              rebind: function (scope) {
                core._updateModules(scope);
              },
              getSessionData: function () {
                if (!core.isInitialized()) return;
                var rv = null,
                  sessionData = null,
                  scName,
                  scValue,
                  config = core.getCoreConfig();
                if (!config || !config.sessionDataEnabled) return null;
                sessionData = config.sessionData || {};
                scName = sessionData.sessionQueryName;
                if (scName)
                  scValue = core.utils.getQueryStringValue(scName, sessionData.sessionQueryDelim);
                else {
                  scName = sessionData.sessionCookieName || 'TLTSID';
                  scValue = core.utils.getCookieValue(scName);
                }
                if (scName && scValue) {
                  rv = rv || {};
                  rv.tltSCN = scName;
                  rv.tltSCV = scValue;
                  rv.tltSCVNeedsHashing = !!sessionData.sessionValueNeedsHashing;
                }
                return rv;
              },
              logGeolocation: function (position) {
                var replayConfig = core.getModuleConfig('replay') || {},
                  geolocationConfigOptions = core.utils.getValue(
                    replayConfig,
                    'geolocation.options',
                    { timeout: 30000, enableHighAccuracy: true, maximumAge: 0 }
                  ),
                  geolocationEnabled = core.utils.getValue(
                    replayConfig,
                    'geolocation.enabled',
                    false
                  ),
                  navigator = window.navigator;
                if (!position) {
                  if (
                    !geolocationEnabled ||
                    !navigator ||
                    !navigator.geolocation ||
                    !navigator.geolocation.getCurrentPosition
                  )
                    return;
                  navigator.geolocation.getCurrentPosition(
                    addGeolocationMsg,
                    addGeolocationErrorMsg,
                    geolocationConfigOptions
                  );
                } else addGeolocationMsg(position);
              },
              logCustomEvent: function (name, customMsgObj) {
                if (!core.isInitialized()) return;
                var customMsg = null,
                  queue = this.getService('queue');
                if (!name || typeof name !== 'string') name = 'CUSTOM';
                customMsgObj = customMsgObj || {};
                customMsg = { type: 5, customEvent: { name: name, data: customMsgObj } };
                queue.post('', customMsg, 'DEFAULT');
              },
              logExceptionEvent: function (msg, url, line) {
                if (!core.isInitialized()) return;
                var exceptionMsg = null,
                  queue = this.getService('queue');
                if (!msg || typeof msg !== 'string') return;
                url = url || '';
                line = line || '';
                exceptionMsg = { type: 6, exception: { description: msg, url: url, line: line } };
                queue.post('', exceptionMsg);
              },
              logFormCompletion: function (submitted, valid) {
                if (!core.isInitialized()) return;
                var queue = this.getService('queue'),
                  formCompletionMsg = {
                    type: 15,
                    formCompletion: {
                      submitted: !!submitted,
                      valid: typeof valid === 'boolean' ? valid : null,
                    },
                  };
                queue.post('', formCompletionMsg);
              },
              logScreenviewLoad: function (name, referrerName, root) {
                if (!core.isInitialized()) return;
                logScreenview('LOAD', name, referrerName, root);
              },
              logScreenviewUnload: function (name) {
                if (!core.isInitialized()) return;
                logScreenview('UNLOAD', name);
              },
              logDOMCapture: function (root, config) {
                var dcid = null,
                  domCaptureData,
                  domCaptureService,
                  domCaptureServiceConfig,
                  msg,
                  queue;
                if (!this.isInitialized()) return dcid;
                if (core.utils.isLegacyIE) return dcid;
                domCaptureService = this.getService('domCapture');
                if (domCaptureService) {
                  root = root || window.document;
                  domCaptureServiceConfig = this.getServiceConfig('domCapture');
                  config = this.utils.mixin({}, domCaptureServiceConfig.options, config);
                  domCaptureData = domCaptureService.captureDOM(root, config);
                  if (domCaptureData) {
                    dcid =
                      config.dcid ||
                      'dcid-' + this.utils.getSerialNumber() + '.' + new Date().getTime();
                    domCaptureData.dcid = dcid;
                    domCaptureData.eventOn = !!config.eventOn;
                    msg = { type: 12, domCapture: domCaptureData };
                    queue = this.getService('queue');
                    queue.post('', msg, 'DEFAULT');
                    if (config.qffd !== false && !fullDOMFlushed && msg.domCapture.fullDOM) {
                      queue.flush();
                      fullDOMFlushed = true;
                    }
                  } else dcid = null;
                }
                return dcid;
              },
              performDOMCapture: function (moduleName, root, config) {
                return this.logDOMCapture(root, config);
              },
              performFormCompletion: function (moduleName, submitted, valid) {
                return this.logFormCompletion(submitted, valid);
              },
              _bridgeCallback: function (cbType) {
                var callBackType = bridgeCallbacks[cbType];
                if (callBackType && callBackType.enabled) return callBackType;
                return null;
              },
              logScreenCapture: function () {
                if (!core.isInitialized()) return;
                var bridgeCallback = core._bridgeCallback('screenCapture');
                if (bridgeCallback !== null) bridgeCallback.cbFunction();
              },
              enableTealeafFramework: function () {
                if (!core.isInitialized()) return;
                var bridgeCallback = core._bridgeCallback('enableTealeafFramework');
                if (bridgeCallback !== null) bridgeCallback.cbFunction();
              },
              disableTealeafFramework: function () {
                if (!core.isInitialized()) return;
                var bridgeCallback = core._bridgeCallback('disableTealeafFramework');
                if (bridgeCallback !== null) bridgeCallback.cbFunction();
              },
              startNewTLFSession: function () {
                if (!core.isInitialized()) return;
                var bridgeCallback = core._bridgeCallback('startNewTLFSession');
                if (bridgeCallback !== null) bridgeCallback.cbFunction();
              },
              currentSessionId: function () {
                if (!core.isInitialized()) return;
                var sessionId,
                  bridgeCallback = core._bridgeCallback('currentSessionId');
                if (bridgeCallback !== null) sessionId = bridgeCallback.cbFunction();
                return sessionId;
              },
              defaultValueForConfigurableItem: function (configItem) {
                if (!core.isInitialized()) return;
                var value,
                  bridgeCallback = core._bridgeCallback('defaultValueForConfigurableItem');
                if (bridgeCallback !== null) value = bridgeCallback.cbFunction(configItem);
                return value;
              },
              valueForConfigurableItem: function (configItem) {
                if (!core.isInitialized()) return;
                var value,
                  bridgeCallback = core._bridgeCallback('valueForConfigurableItem');
                if (bridgeCallback !== null) value = bridgeCallback.cbFunction(configItem);
                return value;
              },
              setConfigurableItem: function (configItem, value) {
                if (!core.isInitialized()) return;
                var result = false,
                  bridgeCallback = core._bridgeCallback('setConfigurableItem');
                if (bridgeCallback !== null) result = bridgeCallback.cbFunction(configItem, value);
                return result;
              },
              addAdditionalHttpHeader: function (key, value) {
                if (!core.isInitialized()) return;
                var result = false,
                  bridgeCallback = core._bridgeCallback('addAdditionalHttpHeader');
                if (bridgeCallback !== null) result = bridgeCallback.cbFunction(key, value);
                return result;
              },
              logCustomEventBridge: function (eventName, jsonData, logLevel) {
                if (!core.isInitialized()) return;
                var result = false,
                  bridgeCallback = core._bridgeCallback('logCustomEventBridge');
                if (bridgeCallback !== null)
                  result = bridgeCallback.cbFunction(eventName, jsonData, logLevel);
                return result;
              },
              registerBridgeCallbacks: function (callbacks) {
                var i,
                  j,
                  len,
                  cb = null,
                  cbEntry,
                  cbList,
                  cbListLen,
                  utils = this.utils;
                if (!callbacks) return false;
                if (callbacks.length === 0) {
                  bridgeCallbacks = {};
                  return false;
                }
                try {
                  for (i = 0, len = callbacks.length; i < len; i += 1) {
                    cb = callbacks[i];
                    if (typeof cb === 'object' && cb.cbType && cb.cbFunction) {
                      cbEntry = {
                        enabled: cb.enabled,
                        cbFunction: cb.cbFunction,
                        cbOrder: cb.order || 0,
                      };
                      if (utils.isUndefOrNull(bridgeCallbacks[cb.cbType]))
                        bridgeCallbacks[cb.cbType] = cbEntry;
                      else {
                        if (!utils.isArray(bridgeCallbacks[cb.cbType]))
                          bridgeCallbacks[cb.cbType] = [bridgeCallbacks[cb.cbType]];
                        cbList = bridgeCallbacks[cb.cbType];
                        for (j = 0, cbListLen = cbList.length; j < cbListLen; j += 1)
                          if (cbList[j].cbOrder > cbEntry.cbOrder) break;
                        cbList.splice(j, 0, cbEntry);
                      }
                    }
                  }
                } catch (e) {
                  return false;
                }
                return true;
              },
              redirectQueue: function (queue) {
                var i,
                  j,
                  len,
                  cb,
                  cbList,
                  cbListLen,
                  retval,
                  utils = this.utils,
                  sS;
                if (!queue || !queue.length) return queue;
                cb = bridgeCallbacks.messageRedirect;
                if (!cb) return queue;
                if (!utils.isArray(cb)) cbList = [cb];
                else cbList = cb;
                sS = core.getService('serializer');
                for (j = 0, cbListLen = cbList.length; j < cbListLen; j += 1) {
                  cb = cbList[j];
                  if (cb && cb.enabled)
                    for (i = 0, len = queue.length; i < len; i += 1) {
                      retval = cb.cbFunction(sS.serialize(queue[i]), queue[i]);
                      if (retval && typeof retval === 'object') queue[i] = retval;
                      else {
                        queue.splice(i, 1);
                        i -= 1;
                        len = queue.length;
                      }
                    }
                }
                return queue;
              },
              _hasSameOrigin: function (iframe) {
                try {
                  return (
                    iframe.document.location.host === document.location.host &&
                    iframe.document.location.protocol === document.location.protocol
                  );
                } catch (e) {}
                return false;
              },
              provideRequestHeaders: function () {
                var headers = null,
                  addHeadersCB = bridgeCallbacks.addRequestHeaders;
                if (addHeadersCB && addHeadersCB.enabled) headers = addHeadersCB.cbFunction();
                return headers;
              },
              _registerModuleEvents: (function () {
                var idCache,
                  frameLoadPending = 0,
                  normalizeToObject = function (prop, localTop, documentScope) {
                    if (prop === 'window') return localTop;
                    if (prop === 'document') return documentScope;
                    return prop;
                  };
                function _registerModuleEventsOnScope (moduleName, moduleEvents, scope) {
                  var browserBase = core.getService('browserBase'),
                    browser = core.getService('browser'),
                    documentScope = core.utils.getDocument(scope),
                    localTop = core._getLocalTop(),
                    isFrame = core.utils.isIFrameDescendant(scope),
                    frameId,
                    e,
                    i;
                  scope = scope || documentScope;
                  loadUnloadHandler.normalizeModuleEvents(
                    moduleName,
                    moduleEvents,
                    localTop,
                    documentScope
                  );
                  if (isFrame) {
                    frameId = browserBase.ElementData.prototype.examineID(scope).id;
                    if (typeof frameId === 'string') {
                      frameId = frameId.slice(0, frameId.length - 1);
                      for (e in events)
                        if (events.hasOwnProperty(e))
                          for (i = 0; i < events[e].length; i += 1)
                            if (moduleName === events[e][i])
                              if (e.indexOf(frameId) !== -1) {
                                delete events[e];
                                break;
                              }
                    }
                  }
                  core.utils.forEach(moduleEvents, function (eventConfig) {
                    var target =
                        normalizeToObject(eventConfig.target, localTop, documentScope) ||
                        documentScope,
                      delegateTarget = normalizeToObject(
                        eventConfig.delegateTarget,
                        localTop,
                        documentScope
                      ),
                      token = '';
                    if (eventConfig.recurseFrames !== true && isFrame) return;
                    if (typeof target === 'string')
                      if (eventConfig.delegateTarget && core.getFlavor() === 'jQuery') {
                        token = core._buildToken4delegateTarget(
                          eventConfig.name,
                          target,
                          eventConfig.delegateTarget
                        );
                        if (!events.hasOwnProperty(token)) {
                          events[token] = [moduleName];
                          events[token].target = target;
                          events[token].delegateTarget = delegateTarget;
                          browser.subscribe(
                            eventConfig.name,
                            target,
                            core._publishEvent,
                            delegateTarget,
                            token
                          );
                        } else events[token].push(moduleName);
                      } else
                        core.utils.forEach(browser.queryAll(target, scope), function (element) {
                          var idData = idCache.get(element);
                          if (!idData) {
                            idData = browserBase.ElementData.prototype.examineID(element);
                            idCache.set(element, idData);
                          }
                          token = eventConfig.name + '|' + idData.id + idData.idType;
                          if (core.utils.indexOf(events[token], moduleName) !== -1) return;
                          events[token] = events[token] || [];
                          events[token].push(moduleName);
                          events[token].target = element;
                          browser.subscribe(eventConfig.name, element, core._publishEvent);
                        });
                    else {
                      token = core._buildToken4bubbleTarget(
                        eventConfig.name,
                        target,
                        typeof eventConfig.target === 'undefined'
                      );
                      if (!events.hasOwnProperty(token)) {
                        events[token] = [moduleName];
                        browser.subscribe(eventConfig.name, target, core._publishEvent);
                      } else if (core.utils.indexOf(events[token], moduleName) === -1)
                        events[token].push(moduleName);
                    }
                    if (token !== '')
                      if (typeof target !== 'string') events[token].target = target;
                  });
                }
                function _isFrameLoaded (hIFrame) {
                  var iFrameWindow = core.utils.getIFrameWindow(hIFrame);
                  return (
                    iFrameWindow !== null &&
                    core._hasSameOrigin(iFrameWindow) &&
                    iFrameWindow.document !== null &&
                    iFrameWindow.document.readyState === 'complete'
                  );
                }
                function registerModuleEvents (moduleName, moduleEvents, scope) {
                  scope = scope || core._getLocalTop().document;
                  idCache = idCache || new core.utils.WeakMap();
                  _registerModuleEventsOnScope(moduleName, moduleEvents, scope);
                  if (moduleName !== 'performance') {
                    var hIFrame = null,
                      hIFrameWindow = null,
                      browserService = core.getService('browser'),
                      dcService = core.getService('domCapture'),
                      cIFrames = browserService.queryAll('iframe, frame', scope),
                      i,
                      iLength;
                    for (i = 0, iLength = cIFrames.length; i < iLength; i += 1) {
                      hIFrame = cIFrames[i];
                      if (isFrameBlacklisted(hIFrame)) continue;
                      if (_isFrameLoaded(hIFrame)) {
                        hIFrameWindow = core.utils.getIFrameWindow(hIFrame);
                        core._registerModuleEvents(
                          moduleName,
                          moduleEvents,
                          hIFrameWindow.document
                        );
                        dcService.observeWindow(hIFrameWindow);
                        continue;
                      }
                      frameLoadPending += 1;
                      (function (moduleName, moduleEvents, hIFrame) {
                        var hIFrameWindow = null,
                          _iframeContext = {
                            moduleName: moduleName,
                            moduleEvents: moduleEvents,
                            hIFrame: hIFrame,
                            _registerModuleEventsDelayed: function () {
                              var hIFrameWindow = null;
                              if (!isFrameBlacklisted(hIFrame)) {
                                hIFrameWindow = core.utils.getIFrameWindow(hIFrame);
                                if (core._hasSameOrigin(hIFrameWindow)) {
                                  core._registerModuleEvents(
                                    moduleName,
                                    moduleEvents,
                                    hIFrameWindow.document
                                  );
                                  dcService.observeWindow(hIFrameWindow);
                                }
                              }
                              frameLoadPending -= 1;
                              if (!frameLoadPending)
                                core._publishEvent({ type: 'loadWithFrames', custom: true });
                            },
                          };
                        core.utils.addEventListener(hIFrame, 'load', function () {
                          _iframeContext._registerModuleEventsDelayed();
                        });
                        if (core.utils.isLegacyIE && _isFrameLoaded(hIFrame)) {
                          hIFrameWindow = core.utils.getIFrameWindow(hIFrame);
                          core.utils.addEventListener(
                            hIFrameWindow.document,
                            'readystatechange',
                            function () {
                              _iframeContext._registerModuleEventsDelayed();
                            }
                          );
                        }
                      })(moduleName, moduleEvents, hIFrame);
                    }
                  }
                }
                registerModuleEvents.clearCache = function () {
                  if (idCache) {
                    idCache.clear();
                    idCache = null;
                  }
                };
                return registerModuleEvents;
              })(),
              _buildToken4currentTarget: function (event) {
                var target = event.nativeEvent ? event.nativeEvent.currentTarget : null,
                  idData = target
                    ? this.getService('browserBase').ElementData.prototype.examineID(target)
                    : {
                        id: event.target ? event.target.id : null,
                        idType: event.target ? event.target.idType : -1,
                      };
                return event.type + '|' + idData.id + idData.idType;
              },
              _buildToken4delegateTarget: function (eventType, target, delegateTarget) {
                return eventType + '|' + target + '|' + delegateTarget;
              },
              _buildToken4bubbleTarget: function (eventType, target, checkIframe, delegateTarget) {
                var localTop = core._getLocalTop(),
                  localWindow,
                  browserService = core.getService('browser'),
                  _getIframeElement = function (documentScope) {
                    var retVal = null;
                    if (core._hasSameOrigin(localWindow.parent))
                      core.utils.forEach(
                        browserService.queryAll('iframe, frame', localWindow.parent.document),
                        function (iframe) {
                          var iFrameWindow = null;
                          if (!isFrameBlacklisted(iframe)) {
                            iFrameWindow = core.utils.getIFrameWindow(iframe);
                            if (
                              core._hasSameOrigin(iFrameWindow) &&
                              iFrameWindow.document === documentScope
                            )
                              retVal = iframe;
                          }
                        }
                      );
                    return retVal;
                  },
                  documentScope = core.utils.getDocument(target),
                  browserBase = this.getService('browserBase'),
                  iframeElement = null,
                  tmpTarget,
                  retVal = eventType,
                  idData;
                if (documentScope)
                  localWindow = documentScope.defaultView || documentScope.parentWindow;
                if (target === window || target === window.window) retVal += '|null-2|window';
                else if (
                  checkIframe &&
                  localWindow &&
                  core._hasSameOrigin(localWindow.parent) &&
                  typeof documentScope !== 'undefined' &&
                  localTop.document !== documentScope
                ) {
                  iframeElement = _getIframeElement(documentScope);
                  if (iframeElement) {
                    tmpTarget = browserBase.ElementData.prototype.examineID(iframeElement);
                    retVal += '|' + tmpTarget.xPath + '-2';
                  }
                } else if (
                  delegateTarget &&
                  delegateTarget !== document &&
                  core.getFlavor() === 'jQuery'
                )
                  retVal +=
                    '|null-2|' +
                    core.utils.getTagName(target) +
                    '|' +
                    core.utils.getTagName(delegateTarget);
                else retVal += '|null-2|document';
                return retVal;
              },
              _reinitConfig: function () {
                core._updateModules();
              },
              _publishEvent: function (event) {
                var moduleName = null,
                  module = null,
                  token =
                    event.delegateTarget && event.data
                      ? event.data
                      : core._buildToken4currentTarget(event),
                  modules = null,
                  i,
                  len,
                  target,
                  modEvent = null,
                  canIgnore = false,
                  canPublish = false,
                  coreConfig = core.getCoreConfig(),
                  browserService = core.getService('browser'),
                  delegateTarget = event.delegateTarget || null,
                  screenviewAutoDetect;
                if (event.type.match(/^(click|change|blur|mouse|touch)/)) resetInactivityTimer();
                screenviewAutoDetect = core.utils.getValue(
                  coreConfig,
                  'screenviewAutoDetect',
                  true
                );
                if (screenviewAutoDetect) detectScreenviewChange();
                if (
                  (event.type === 'load' || event.type === 'pageshow') &&
                  !event.nativeEvent.customLoad
                )
                  return;
                if (core.utils.isIE) {
                  if (event.type === 'click') lastClickedElement = event.target.element;
                  if (event.type === 'beforeunload') {
                    canIgnore = false;
                    core.utils.forEach(coreConfig.ieExcludedLinks, function (selector) {
                      var i,
                        len,
                        el = browserService.queryAll(selector);
                      for (i = 0, len = el ? el.length : 0; i < len; i += 1)
                        if (typeof el[i] !== undefined && el[i] === lastClickedElement) {
                          canIgnore = true;
                          return;
                        }
                    });
                    if (canIgnore) return;
                  }
                }
                if (loadUnloadHandler.isUnload(event)) state = 'unloading';
                if (
                  event.type === 'change' &&
                  core.utils.isLegacyIE &&
                  core.getFlavor() === 'w3c' &&
                  (event.target.element.type === 'checkbox' ||
                    event.target.element.type === 'radio')
                )
                  return;
                if (event.type === 'propertychange')
                  if (
                    event.nativeEvent.propertyName === 'checked' &&
                    (event.target.element.type === 'checkbox' ||
                      (event.target.element.type === 'radio' && event.target.element.checked))
                  ) {
                    event.type = 'change';
                    event.target.type = 'INPUT';
                  } else return;
                if (event.target && isElementBlocked(event.target.element)) return;
                if (!events.hasOwnProperty(token)) {
                  if (event.hasOwnProperty('nativeEvent'))
                    target = event.nativeEvent.currentTarget || event.nativeEvent.target;
                  token = core._buildToken4bubbleTarget(event.type, target, true, delegateTarget);
                }
                if (events.hasOwnProperty(token)) {
                  modules = events[token];
                  for (i = 0, len = modules.length; i < len; i += 1) {
                    moduleName = modules[i];
                    module = core.getModule(moduleName);
                    modEvent = core.utils.mixin({}, event);
                    if (
                      module &&
                      core.isStarted(moduleName) &&
                      typeof module.onevent === 'function'
                    ) {
                      canPublish = loadUnloadHandler.canPublish(moduleName, modEvent);
                      if (canPublish) module.onevent(modEvent);
                    }
                  }
                }
                if (modEvent && modEvent.type === 'unload' && canPublish) core.destroy();
              },
              _getLocalTop: function () {
                return window.window;
              },
              addModule: function (moduleName, creator) {
                modules[moduleName] = {
                  creator: creator,
                  instance: null,
                  context: null,
                  messages: [],
                };
                if (this.isInitialized()) this.start(moduleName);
              },
              getModule: function (moduleName) {
                if (modules[moduleName] && modules[moduleName].instance)
                  return modules[moduleName].instance;
                return null;
              },
              removeModule: function (moduleName) {
                this.stop(moduleName);
                delete modules[moduleName];
              },
              isStarted: function (moduleName) {
                return modules.hasOwnProperty(moduleName) && modules[moduleName].instance !== null;
              },
              start: function (moduleName) {
                var moduleData = modules[moduleName],
                  instance = null;
                if (moduleData && moduleData.instance === null) {
                  moduleData.context = new TLT.ModuleContext(moduleName, this);
                  instance = moduleData.instance = moduleData.creator(moduleData.context);
                  if (typeof instance.init === 'function') instance.init();
                }
              },
              startAll: function () {
                var moduleName = null;
                for (moduleName in modules)
                  if (modules.hasOwnProperty(moduleName)) this.start(moduleName);
              },
              stop: function (moduleName) {
                var moduleData = modules[moduleName],
                  instance = null;
                if (moduleData && moduleData.instance !== null) {
                  instance = moduleData.instance;
                  if (typeof instance.destroy === 'function') instance.destroy();
                  moduleData.instance = moduleData.context = null;
                }
              },
              stopAll: function () {
                var moduleName = null;
                for (moduleName in modules)
                  if (modules.hasOwnProperty(moduleName)) this.stop(moduleName);
              },
              addService: function (serviceName, creator) {
                services[serviceName] = { creator: creator, instance: null };
              },
              getService: function (serviceName) {
                if (services.hasOwnProperty(serviceName)) {
                  if (!services[serviceName].instance) {
                    try {
                      services[serviceName].instance = services[serviceName].creator(this);
                      if (typeof services[serviceName].instance.init === 'function')
                        services[serviceName].instance.init();
                    } catch (e) {
                      return null;
                    }
                    if (typeof services[serviceName].instance.getServiceName !== 'function')
                      services[serviceName].instance.getServiceName = function () {
                        return serviceName;
                      };
                  }
                  return services[serviceName].instance;
                }
                return null;
              },
              removeService: function (serviceName) {
                delete services[serviceName];
              },
              broadcast: function (message) {
                var i = 0,
                  len = 0,
                  prop = null,
                  module = null;
                if (message && typeof message === 'object')
                  for (prop in modules)
                    if (modules.hasOwnProperty(prop)) {
                      module = modules[prop];
                      if (core.utils.indexOf(module.messages, message.type) > -1)
                        if (typeof module.instance.onmessage === 'function')
                          module.instance.onmessage(message);
                    }
              },
              listen: function (moduleName, messageType) {
                var module = null;
                if (this.isStarted(moduleName)) {
                  module = modules[moduleName];
                  if (core.utils.indexOf(module.messages, messageType) === -1)
                    module.messages.push(messageType);
                }
              },
              fail: function (message, failcode, skipEvents) {
                message = 'UIC FAILED. ' + message;
                try {
                  core.destroy(!!skipEvents);
                } finally {
                  core.utils.clog(message);
                  throw new core.UICError(message, failcode);
                }
              },
              UICError: (function () {
                function UICError (message, errorCode) {
                  this.message = message;
                  this.code = errorCode;
                }
                UICError.prototype = new Error();
                UICError.prototype.name = 'UICError';
                UICError.prototype.constructor = UICError;
                return UICError;
              })(),
              getFlavor: function () {
                return 'w3c';
              },
            };
          resetInactivityTimer = function () {
            var coreConfig = core.getCoreConfig(),
              inactivityTimerId = null,
              inactivityTimeout = core.utils.getValue(coreConfig, 'inactivityTimeout', 600000);
            if (!inactivityTimeout) {
              resetInactivityTimer = function () {};
              return;
            }
            function inactivityTimeoutHandler () {
              core.utils.clog('UIC self-terminated due to inactivity timeout.');
              core.destroy();
            }
            resetInactivityTimer = function () {
              if (inactivityTimerId) {
                clearTimeout(inactivityTimerId);
                inactivityTimerId = null;
              }
              inactivityTimerId = setTimeout(inactivityTimeoutHandler, inactivityTimeout);
            };
            resetInactivityTimer();
          };
          _init = function (config, callback) {
            var configService,
              event,
              webEvent,
              baseBrowser,
              browserService,
              cookieModuleConfig,
              queueServiceConfig,
              ajaxService,
              queues,
              sessionCookieName,
              sessionCookieValue,
              endpointURL,
              killswitchURL,
              i;
            if (initialized) {
              core.utils.clog('TLT.init() called more than once. Ignoring.');
              return;
            }
            if (TLT && TLT.replay) return;
            configService = core.getService('config');
            configService.updateConfig(config);
            cookieModuleConfig = configService.getModuleConfig('TLCookie') || {};
            sessionCookieName = cookieModuleConfig.sessionizationCookieName || 'TLTSID';
            sessionCookieValue = core.utils.getCookieValue(sessionCookieName);
            if (sessionCookieValue === 'DND') {
              if (state !== 'destroyed') core.destroy();
              return;
            }
            if (!core._updateModules()) {
              if (state !== 'destroyed') core.destroy();
              return;
            }
            if (configService.subscribe)
              configService.subscribe('configupdated', core._reinitConfig);
            initialized = true;
            state = 'loaded';
            try {
              if (typeof TLFExtensionNotify === 'function') TLFExtensionNotify('Initialized');
            } catch (e1) {}
            event = {
              type: 'load',
              target: window.window,
              srcElement: window.window,
              currentTarget: window.window,
              bubbles: true,
              cancelBubble: false,
              cancelable: true,
              timeStamp: +new Date(),
              customLoad: true,
            };
            baseBrowser = core.getService('browserBase');
            webEvent = new baseBrowser.WebEvent(event);
            core._publishEvent(webEvent);
            ajaxService = core.getService('ajax');
            queueServiceConfig = core.getServiceConfig('queue');
            queues = queueServiceConfig.queues || [];
            for (i = 0; i < queues.length; i += 1) {
              if (!sessionCookieValue && cookieModuleConfig.tlAppKey) {
                endpointURL = queues[i].endpoint;
                killswitchURL =
                  queues[i].killswitchURL ||
                  (endpointURL.match('collectorPost')
                    ? endpointURL.replace('collectorPost', 'switch/' + cookieModuleConfig.tlAppKey)
                    : null);
                if (killswitchURL)
                  ajaxService.sendRequest({
                    type: 'GET',
                    url: killswitchURL,
                    async: true,
                    timeout: 5000,
                    oncomplete: function (result) {
                      if (result.responseText === '0') {
                        core.setAutoFlush(false);
                        core.utils.setCookie(sessionCookieName, 'DND');
                        core.destroy();
                      }
                    },
                  });
              }
              if (queues[i].checkEndpoint)
                ajaxService.sendRequest({
                  oncomplete: function (result) {},
                  timeout: queues[i].endpointCheckTimeout || 3000,
                  url: queues[i].endpoint,
                  headers: {
                    'X-PageId': tltPageId,
                    'X-Tealeaf-SaaS-AppKey': cookieModuleConfig.tlAppKey,
                    'X-Tealeaf-EndpointCheck': true,
                  },
                  async: true,
                  error: function (result) {
                    if (result.success) return;
                    core.setAutoFlush(false);
                    core.destroy();
                  },
                });
            }
            if (typeof _callback === 'function')
              try {
                _callback('initialized');
              } catch (e2) {}
          };
          (function () {
            var name = null,
              i,
              len;
            for (name in servicePassthroughs)
              if (servicePassthroughs.hasOwnProperty(name))
                for (i = 0, len = servicePassthroughs[name].length; i < len; i += 1)
                  (function (serviceName, methodName) {
                    core[methodName] = function () {
                      var service = this.getService(serviceName);
                      if (service) return service[methodName].apply(service, arguments);
                    };
                  })(name, servicePassthroughs[name][i]);
          })();
          return core;
        })();
        (function () {
          const $___old_e18fc1e574207793 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_e18fc1e574207793)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_addd751f0eb655f8.userAgent
              ));
            return function () {
              var ua = window.navigator.userAgent.toLowerCase(),
                _isIE = ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1,
                _isLegacyIE = (function () {
                  const $___old_dc3420a8a2d0c55d = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'performance'
                  );
                  try {
                    if ($___old_dc3420a8a2d0c55d)
                      ({}.constructor.defineProperty(
                        window,
                        'performance',
                        $___stub_e71ee3f8b21bfa35.performance
                      ));
                    return function () {
                      var isNavTimingSupported = !!window.performance;
                      return _isIE && (!isNavTimingSupported || document.documentMode < 9);
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_dc3420a8a2d0c55d)
                      ({}.constructor.defineProperty(
                        window,
                        'performance',
                        $___old_dc3420a8a2d0c55d
                      ));
                  }
                })(),
                _isAndroid = ua.indexOf('android') !== -1,
                _isiOS = /(ipad|iphone|ipod)/.test(ua),
                _isOperaMini = ua.indexOf('opera mini') !== -1,
                tltUniqueIndex = 1,
                tlTypes = {
                  'a:': 'link',
                  'button:button': 'button',
                  'button:submit': 'button',
                  'input:button': 'button',
                  'input:checkbox': 'checkBox',
                  'input:color': 'colorPicker',
                  'input:date': 'datePicker',
                  'input:datetime': 'datetimePicker',
                  'input:datetime-local': 'datetime-local',
                  'input:email': 'emailInput',
                  'input:file': 'fileInput',
                  'input:image': 'button',
                  'input:month': 'month',
                  'input:number': 'numberPicker',
                  'input:password': 'textBox',
                  'input:radio': 'radioButton',
                  'input:range': 'slider',
                  'input:reset': 'button',
                  'input:search': 'searchBox',
                  'input:submit': 'button',
                  'input:tel': 'tel',
                  'input:text': 'textBox',
                  'input:time': 'timePicker',
                  'input:url': 'urlBox',
                  'input:week': 'week',
                  'select:': 'selectList',
                  'select:select-one': 'selectList',
                  'textarea:': 'textBox',
                  'textarea:textarea': 'textBox',
                },
                utils = {
                  isIE: _isIE,
                  isLegacyIE: _isLegacyIE,
                  isAndroid: _isAndroid,
                  isLandscapeZeroDegrees: false,
                  isiOS: _isiOS,
                  isOperaMini: _isOperaMini,
                  isUndefOrNull: function (obj) {
                    return typeof obj === 'undefined' || obj === null;
                  },
                  isArray: function (obj) {
                    return !!(obj && Object.prototype.toString.call(obj) === '[object Array]');
                  },
                  getSerialNumber: function () {
                    var id;
                    id = tltUniqueIndex;
                    tltUniqueIndex += 1;
                    return id;
                  },
                  getRandomString: function (length, dataSet) {
                    var i,
                      dataSetLength,
                      defaultDataSet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
                      randomString = '';
                    if (!length) return randomString;
                    if (typeof dataSet !== 'string') dataSet = defaultDataSet;
                    for (i = 0, dataSetLength = dataSet.length; i < length; i += 1)
                      randomString += dataSet.charAt(Math.floor(Math.random() * dataSetLength));
                    return randomString;
                  },
                  getValue: function (parentObj, propertyAsStr, defaultValue) {
                    var i, len, properties;
                    defaultValue = typeof defaultValue === 'undefined' ? null : defaultValue;
                    if (
                      !parentObj ||
                      typeof parentObj !== 'object' ||
                      typeof propertyAsStr !== 'string'
                    )
                      return defaultValue;
                    properties = propertyAsStr.split('.');
                    for (i = 0, len = properties.length; i < len; i += 1) {
                      if (
                        this.isUndefOrNull(parentObj) ||
                        typeof parentObj[properties[i]] === 'undefined'
                      )
                        return defaultValue;
                      parentObj = parentObj[properties[i]];
                    }
                    return parentObj;
                  },
                  indexOf: function (array, item) {
                    var i, len;
                    if (array && array.indexOf) return array.indexOf(item);
                    if (array && array instanceof Array)
                      for (i = 0, len = array.length; i < len; i += 1)
                        if (array[i] === item) return i;
                    return -1;
                  },
                  forEach: function (array, callback, context) {
                    var i, len;
                    if (!array || !array.length || !callback || !callback.call) return;
                    for (i = 0, len = array.length; i < len; i += 1)
                      callback.call(context, array[i], i, array);
                  },
                  some: function (array, callback) {
                    var i,
                      len,
                      val = false;
                    for (i = 0, len = array.length; i < len; i += 1) {
                      val = callback(array[i], i, array);
                      if (val) return val;
                    }
                    return val;
                  },
                  convertToArray: function (items) {
                    var i = 0,
                      len = items.length,
                      result = [];
                    while (i < len) {
                      result.push(items[i]);
                      i += 1;
                    }
                    return result;
                  },
                  mixin: function (dst) {
                    var prop, src, srcId, len;
                    for (srcId = 1, len = arguments.length; srcId < len; srcId += 1) {
                      src = arguments[srcId];
                      for (prop in src)
                        if (Object.prototype.hasOwnProperty.call(src, prop)) dst[prop] = src[prop];
                    }
                    return dst;
                  },
                  extend: function (deep, target, src) {
                    var prop = '';
                    for (prop in src)
                      if (Object.prototype.hasOwnProperty.call(src, prop))
                        if (
                          deep &&
                          Object.prototype.toString.call(src[prop]) === '[object Object]'
                        ) {
                          if (typeof target[prop] === 'undefined') target[prop] = {};
                          utils.extend(deep, target[prop], src[prop]);
                        } else target[prop] = src[prop];
                    return target;
                  },
                  clone: function (obj) {
                    var copy, attr;
                    if (null === obj || 'object' !== typeof obj) return obj;
                    if (obj instanceof Object) {
                      copy = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
                      for (attr in obj)
                        if (Object.prototype.hasOwnProperty.call(obj, attr))
                          copy[attr] = utils.clone(obj[attr]);
                      return copy;
                    }
                  },
                  parseVersion: function (version) {
                    var i,
                      len,
                      retval = [];
                    if (!version || !version.length) return retval;
                    retval = version.split('.');
                    for (i = 0, len = retval.length; i < len; i += 1)
                      retval[i] = /^[0-9]+$/.test(retval[i]) ? parseInt(retval[i], 10) : retval[i];
                    return retval;
                  },
                  isEqual: function (a, b) {
                    var i, len;
                    if (a === b) return true;
                    if (typeof a !== typeof b) return false;
                    if (a instanceof Object)
                      if (Object.prototype.toString.call(a) === '[object Array]') {
                        if (a.length !== b.length) return false;
                        for (i = 0, len = a.length; i < len; i += 1)
                          if (!this.isEqual(a[i], b[i])) return false;
                        return true;
                      }
                    return false;
                  },
                  createObject: (function () {
                    var fn = null,
                      F = null;
                    if (typeof Object.create === 'function') fn = Object.create;
                    else {
                      F = function () {};
                      fn = function (o) {
                        if (typeof o !== 'object' && typeof o !== 'function')
                          throw new TypeError('Object prototype need to be an object!');
                        F.prototype = o;
                        return new F();
                      };
                    }
                    return fn;
                  })(),
                  access: function (path, rootObj) {
                    var obj = rootObj || window,
                      arr,
                      i,
                      len;
                    if (typeof path !== 'string' || (typeof obj !== 'object' && obj !== null))
                      return;
                    arr = path.split('.');
                    for (i = 0, len = arr.length; i < len; i += 1) {
                      if (i === 0 && arr[i] === 'window') continue;
                      if (!Object.prototype.hasOwnProperty.call(obj, arr[i])) return;
                      obj = obj[arr[i]];
                      if (i < len - 1 && !(obj instanceof Object)) return;
                    }
                    return obj;
                  },
                  isNumeric: function (character) {
                    var retVal = false;
                    if (utils.isUndefOrNull(character) || character === '') return retVal;
                    retVal = !isNaN(character * 2);
                    return retVal;
                  },
                  isUpperCase: function (character) {
                    return (
                      character === character.toUpperCase() &&
                      character !== character.toLowerCase()
                    );
                  },
                  isLowerCase: function (character) {
                    return (
                      character === character.toLowerCase() &&
                      character !== character.toUpperCase()
                    );
                  },
                  extractResponseHeaders: function (headers) {
                    var headersObj = {},
                      i,
                      len,
                      header = null;
                    if (!headers || !headers.length) headers = [];
                    else headers = headers.split('\n');
                    for (i = 0, len = headers.length; i < len; i += 1) {
                      header = headers[i].split(': ');
                      if (header.length === 2) headersObj[header[0]] = header[1];
                    }
                    return headersObj;
                  },
                  getDocument: function (node) {
                    if (node && node.nodeType !== 9)
                      return !utils.isUndefOrNull(node.ownerDocument)
                        ? node.ownerDocument
                        : node.document;
                    return node;
                  },
                  getWindow: function (node) {
                    try {
                      if (node.self !== node) {
                        var ownerDocument = utils.getDocument(node);
                        return !utils.isUndefOrNull(ownerDocument.defaultView)
                          ? ownerDocument.defaultView
                          : ownerDocument.parentWindow;
                      }
                    } catch (e) {
                      node = null;
                    }
                    return node;
                  },
                  getOriginAndPath: function (location) {
                    var retObj = {},
                      temp;
                    location = location || window.location;
                    if (location.origin) retObj.origin = location.origin;
                    else retObj.origin = (location.protocol || '') + '//' + (location.host || '');
                    retObj.path = (location.pathname || '').split(';', 1)[0];
                    if (retObj.origin.indexOf('file://') > -1) {
                      temp = retObj.path.match(/(.*)(\/.*app.*)/);
                      if (temp !== null) retObj.path = temp[2];
                    }
                    return retObj;
                  },
                  getIFrameWindow: function (iFrameElement) {
                    var contentWindow = null;
                    if (!iFrameElement) return contentWindow;
                    try {
                      contentWindow =
                        iFrameElement.contentWindow ||
                        (iFrameElement.contentDocument
                          ? iFrameElement.contentDocument.parentWindow
                          : null);
                    } catch (e) {}
                    return contentWindow;
                  },
                  getTagName: function (node) {
                    var tagName = '';
                    if (utils.isUndefOrNull(node)) return tagName;
                    if (node === document || node.nodeType === 9) tagName = 'document';
                    else if (node === window || node === window.window) tagName = 'window';
                    else if (typeof node === 'string') tagName = node.toLowerCase();
                    else if (node.tagName) tagName = node.tagName.toLowerCase();
                    else if (node.nodeName) tagName = node.nodeName.toLowerCase();
                    else tagName = '';
                    return tagName;
                  },
                  getTlType: function (node) {
                    var elementType,
                      key,
                      tlType = '';
                    if (utils.isUndefOrNull(node) || !node.type) return tlType;
                    elementType = node.type.toLowerCase();
                    key = elementType + ':';
                    if (node.subType) key += node.subType.toLowerCase();
                    tlType = tlTypes[key] || elementType;
                    return tlType;
                  },
                  isIFrameDescendant: function (node) {
                    var nodeWindow = utils.getWindow(node);
                    return nodeWindow ? nodeWindow != TLT._getLocalTop() : false;
                  },
                  getOrientationMode: function (orientation) {
                    var mode = 'INVALID';
                    if (typeof orientation !== 'number') return mode;
                    switch (orientation) {
                      case 0:
                      case 180:
                      case 360:
                        mode = 'PORTRAIT';
                        break;
                      case 90:
                      case -90:
                      case 270:
                        mode = 'LANDSCAPE';
                        break;
                      default:
                        mode = 'UNKNOWN';
                        break;
                    }
                    return mode;
                  },
                  clog: (function (window) {
                    return function () {};
                  })(window),
                  trim: function (str) {
                    if (!str || !str.toString) return str;
                    return str.toString().replace(/^\s+|\s+$/g, '');
                  },
                  ltrim: function (str) {
                    if (!str || !str.toString) return str;
                    return str.toString().replace(/^\s+/, '');
                  },
                  rtrim: function (str) {
                    if (!str || !str.toString) return str;
                    return str.toString().replace(/\s+$/, '');
                  },
                  setCookie: function (cookieName, cookieValue, maxAge, path, domain) {
                    const $___old_8e7f78ef383a65ff = {}.constructor.getOwnPropertyDescriptor(
                      Document.prototype,
                      'cookie'
                    );
                    try {
                      if ($___old_8e7f78ef383a65ff)
                        ({}.constructor.defineProperty(
                          Document.prototype,
                          'cookie',
                          $___stub_cdc5a54489618108.cookie
                        ));
                      return function () {
                        var i,
                          len,
                          domainArray,
                          expiry,
                          maxAgeStr = '',
                          pathStr;
                        if (!cookieName) return;
                        cookieName = encodeURIComponent(cookieName);
                        cookieValue = encodeURIComponent(cookieValue);
                        domainArray = (domain || location.hostname).split('.');
                        pathStr = ';path=' + (path || '/');
                        if (typeof maxAge === 'number')
                          if (this.isIE) {
                            expiry = new Date();
                            expiry.setTime(expiry.getTime() + maxAge * 1000);
                            maxAgeStr = ';expires=' + expiry.toUTCString();
                          } else maxAgeStr = ';max-age=' + maxAge;
                        for (len = domainArray.length, i = len === 1 ? 1 : 2; i <= len; i += 1) {
                          document.cookie =
                            cookieName +
                            '=' +
                            cookieValue +
                            ';domain=' +
                            domainArray.slice(-i).join('.') +
                            pathStr +
                            maxAgeStr;
                          if (this.getCookieValue(cookieName) === cookieValue) break;
                          if (len === 1)
                            document.cookie = cookieName + '=' + cookieValue + pathStr + maxAgeStr;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_8e7f78ef383a65ff)
                        ({}.constructor.defineProperty(
                          Document.prototype,
                          'cookie',
                          $___old_8e7f78ef383a65ff
                        ));
                    }
                  },
                  getCookieValue: function (cookieName, cookieString) {
                    const $___old_fc115cdd6f39a250 = {}.constructor.getOwnPropertyDescriptor(
                      Document.prototype,
                      'cookie'
                    );
                    try {
                      if ($___old_fc115cdd6f39a250)
                        ({}.constructor.defineProperty(
                          Document.prototype,
                          'cookie',
                          $___stub_cdc5a54489618108.cookie
                        ));
                      return function () {
                        var i,
                          len,
                          cookie,
                          cookies,
                          cookieValue = null,
                          cookieNameLen;
                        try {
                          cookieString = cookieString || document.cookie;
                          if (!cookieName || !cookieName.toString) return null;
                          cookieName += '=';
                          cookieNameLen = cookieName.length;
                          cookies = cookieString.split(';');
                          for (i = 0, len = cookies.length; i < len; i += 1) {
                            cookie = cookies[i];
                            cookie = utils.ltrim(cookie);
                            if (cookie.indexOf(cookieName) === 0) {
                              cookieValue = cookie.substring(cookieNameLen, cookie.length);
                              break;
                            }
                          }
                        } catch (e) {
                          cookieValue = null;
                        }
                        return cookieValue;
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_fc115cdd6f39a250)
                        ({}.constructor.defineProperty(
                          Document.prototype,
                          'cookie',
                          $___old_fc115cdd6f39a250
                        ));
                    }
                  },
                  getQueryStringValue: function (paramName, queryDelim, queryString) {
                    var i,
                      j,
                      queryStringLen,
                      paramValue = null,
                      valueStartIndex;
                    try {
                      queryString = queryString || window.location.search;
                      queryStringLen = queryString.length;
                      if (!paramName || !paramName.toString || !queryStringLen) return null;
                      queryDelim = queryDelim || '&';
                      queryString = queryDelim + queryString.substring(1);
                      paramName = queryDelim + paramName + '=';
                      i = queryString.indexOf(paramName);
                      if (i !== -1) {
                        valueStartIndex = i + paramName.length;
                        j = queryString.indexOf(queryDelim, valueStartIndex);
                        if (j === -1) j = queryStringLen;
                        paramValue = decodeURIComponent(queryString.substring(valueStartIndex, j));
                      }
                    } catch (e) {}
                    return paramValue;
                  },
                  addEventListener: (function () {
                    if (window.addEventListener)
                      return function (element, eventName, listener) {
                        element.addEventListener(eventName, listener, false);
                      };
                    return function (element, eventName, listener) {
                      element.attachEvent('on' + eventName, listener);
                    };
                  })(),
                  matchTarget: function (rules, target) {
                    var i,
                      j,
                      domElement,
                      matchIndex = -1,
                      qr,
                      qrLen,
                      qrTarget,
                      len,
                      rule,
                      scope = document;
                    if (!rules || !target) return matchIndex;
                    if (!this.browserService || !this.browserBaseService) {
                      this.browserService = TLT.getService('browser');
                      this.browserBaseService = TLT.getService('browserBase');
                    }
                    if (target.idType === -2) {
                      domElement = this.browserBaseService.getNodeFromID(target.id, target.idType);
                      scope = this.getDocument(domElement);
                    }
                    for (i = 0, len = rules.length; i < len && matchIndex === -1; i += 1) {
                      rule = rules[i];
                      if (typeof rule === 'string') {
                        qr = this.browserService.queryAll(rule, scope);
                        for (j = 0, qrLen = qr ? qr.length : 0; j < qrLen; j += 1)
                          if (qr[j]) {
                            qrTarget = this.browserBaseService.ElementData.prototype.examineID(
                              qr[j]
                            );
                            if (qrTarget.idType === target.idType && qrTarget.id === target.id) {
                              matchIndex = i;
                              break;
                            }
                          }
                      } else if (
                        rule &&
                        rule.id &&
                        rule.idType &&
                        target.idType &&
                        target.idType.toString() === rule.idType.toString()
                      )
                        switch (typeof rule.id) {
                          case 'string':
                            if (rule.id === target.id) matchIndex = i;
                            break;
                          case 'object':
                            if (!rule.cRegex)
                              rule.cRegex = new RegExp(rule.id.regex, rule.id.flags);
                            rule.cRegex.lastIndex = 0;
                            if (rule.cRegex.test(target.id)) matchIndex = i;
                            break;
                        }
                    }
                    return matchIndex;
                  },
                  WeakMap: (function () {
                    function index (data, key) {
                      var i, len;
                      data = data || [];
                      for (i = 0, len = data.length; i < len; i += 1)
                        if (data[i][0] === key) return i;
                      return -1;
                    }
                    return function () {
                      var data = [];
                      this.set = function (key, val) {
                        var idx = index(data, key);
                        data[idx > -1 ? idx : data.length] = [key, val];
                      };
                      this.get = function (key) {
                        var arr = data[index(data, key)];
                        return arr ? arr[1] : undefined;
                      };
                      this.clear = function () {
                        data = [];
                      };
                      this.has = function (key) {
                        return index(data, key) >= 0;
                      };
                      this.remove = function (key) {
                        var idx = index(data, key);
                        if (idx >= 0) data.splice(idx, 1);
                      };
                      this['delete'] = this.remove;
                    };
                  })(),
                };
              if (typeof TLT === 'undefined' || !TLT) window.TLT = {};
              TLT.utils = utils;
            }.apply(this, arguments);
          } finally {
            if ($___old_e18fc1e574207793)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_e18fc1e574207793
              ));
          }
        })();
        (function () {
          TLT.EventTarget = function () {
            this._handlers = {};
          };
          TLT.EventTarget.prototype = {
            constructor: TLT.EventTarget,
            publish: function (name, data) {
              var i = 0,
                len = 0,
                handlers = this._handlers[name],
                event = { type: name, data: data };
              if (typeof handlers !== 'undefined')
                for (len = handlers.length; i < len; i += 1) handlers[i](event);
            },
            subscribe: function (name, handler) {
              if (!this._handlers.hasOwnProperty(name)) this._handlers[name] = [];
              this._handlers[name].push(handler);
            },
            unsubscribe: function (name, handler) {
              var i = 0,
                len = 0,
                handlers = this._handlers[name];
              if (handlers)
                for (len = handlers.length; i < len; i += 1)
                  if (handlers[i] === handler) {
                    handlers.splice(i, 1);
                    return;
                  }
            },
          };
        })();
        TLT.ModuleContext = (function () {
          var methodsToExpose = [
            'broadcast',
            'getConfig:getModuleConfig',
            'listen',
            'post',
            'getXPathFromNode',
            'performDOMCapture',
            'performFormCompletion',
            'isInitialized',
            'getStartTime',
          ];
          return function (moduleName, core) {
            var context = {},
              i = 0,
              len = methodsToExpose.length,
              parts = null,
              coreMethod = null,
              contextMethod = null;
            for (i = 0; i < len; i += 1) {
              parts = methodsToExpose[i].split(':');
              if (parts.length > 1) {
                contextMethod = parts[0];
                coreMethod = parts[1];
              } else {
                contextMethod = parts[0];
                coreMethod = parts[0];
              }
              context[contextMethod] = (function (coreMethod) {
                return function () {
                  var args = core.utils.convertToArray(arguments);
                  args.unshift(moduleName);
                  return core[coreMethod].apply(core, args);
                };
              })(coreMethod);
            }
            context.utils = core.utils;
            return context;
          };
        })();
        TLT.addService('config', function (core) {
          function mergeConfig (oldConf, newConf) {
            core.utils.extend(true, oldConf, newConf);
            configService.publish('configupdated', configService.getConfig());
          }
          var config = { core: {}, modules: {}, services: {} },
            configService = core.utils.extend(
              false,
              core.utils.createObject(new TLT.EventTarget()),
              {
                getConfig: function () {
                  return config;
                },
                updateConfig: function (newConf) {
                  mergeConfig(config, newConf);
                },
                getCoreConfig: function () {
                  return config.core;
                },
                updateCoreConfig: function (newConf) {
                  mergeConfig(config.core, newConf);
                },
                getServiceConfig: function (serviceName) {
                  return config.services[serviceName] || {};
                },
                updateServiceConfig: function (serviceName, newConf) {
                  if (typeof config.services[serviceName] === 'undefined')
                    config.services[serviceName] = {};
                  mergeConfig(config.services[serviceName], newConf);
                },
                getModuleConfig: function (moduleName) {
                  return config.modules[moduleName] || {};
                },
                updateModuleConfig: function (moduleName, newConf) {
                  if (typeof config.modules[moduleName] === 'undefined')
                    config.modules[moduleName] = {};
                  mergeConfig(config.modules[moduleName], newConf);
                },
                destroy: function () {
                  config = { core: {}, modules: {}, services: {} };
                },
              }
            );
          return configService;
        });
        TLT.addService('queue', function (core) {
          var utils = core.utils,
            CONFIG = null,
            coreConfig = {},
            inactivityTimeout = 600000,
            aS = core.getService('ajax'),
            bS = core.getService('browser'),
            eS = core.getService('encoder'),
            sS = core.getService('serializer'),
            cS = core.getService('config'),
            mS = core.getService('message'),
            defaultQueue = null,
            queueTimers = {},
            autoFlushing = true,
            msgCounter = { 5: { limit: 300, count: 0 }, 6: { limit: 400, count: 0 } },
            xhrLog = [],
            isInitialized = false,
            queueManager = (function () {
              var queues = {};
              function queueExists (queueId) {
                return typeof queues[queueId] !== 'undefined';
              }
              function addQueue (queueId, opts) {
                if (!queueExists(queueId))
                  queues[queueId] = {
                    lastOffset: 0,
                    data: [],
                    queueId: queueId,
                    url: opts.url,
                    eventThreshold: opts.eventThreshold,
                    sizeThreshold: opts.sizeThreshold || 0,
                    size: -1,
                    serializer: opts.serializer,
                    encoder: opts.encoder,
                    crossDomainEnabled: !!opts.crossDomainEnabled,
                    crossDomainIFrame: opts.crossDomainIFrame,
                  };
                return queues[queueId];
              }
              function removeQueue (queueId) {
                if (queueExists(queueId)) delete queues[queueId];
              }
              function getQueue (queueId) {
                if (queueExists(queueId)) return queues[queueId];
                return null;
              }
              function clearQueue (queueId) {
                var queue = getQueue(queueId);
                if (queue !== null) queue.data = [];
              }
              function flushQueue (queueId) {
                var data = null;
                if (queueExists(queueId)) {
                  data = getQueue(queueId).data;
                  clearQueue(queueId);
                }
                return data;
              }
              function pushToQueue (queueId, data) {
                var queue = null,
                  dataStr = null,
                  bridgeAndroid = window.tlBridge,
                  bridgeiOS = window.iOSJSONShuttle;
                try {
                  dataStr = sS.serialize(data);
                } catch (e) {
                  dataStr = 'Serialization failed: ' + (e.name ? e.name + ' - ' : '') + e.message;
                  data = { error: dataStr };
                }
                if (
                  typeof bridgeAndroid !== 'undefined' &&
                  typeof bridgeAndroid.addMessage === 'function'
                )
                  bridgeAndroid.addMessage(dataStr);
                else if (typeof bridgeiOS !== 'undefined' && typeof bridgeiOS === 'function')
                  bridgeiOS(dataStr);
                else if (queueExists(queueId)) {
                  queue = getQueue(queueId);
                  queue.data.push(data);
                  queue.data = core.redirectQueue(queue.data);
                  if (queue.sizeThreshold) {
                    dataStr = sS.serialize(queue.data);
                    queue.size = dataStr.length;
                  }
                  return queue.data.length;
                }
                return 0;
              }
              return {
                exists: queueExists,
                add: addQueue,
                remove: removeQueue,
                reset: function () {
                  queues = {};
                },
                get: getQueue,
                clear: clearQueue,
                flush: flushQueue,
                push: pushToQueue,
              };
            })();
          function handleXhrCallback (result) {
            if (result && result.id)
              utils.extend(true, xhrLog[result.id - 1], {
                xhrRspEnd: mS.createMessage({ type: 0 }).offset,
                success: result.success,
                statusCode: result.statusCode,
                statusText: result.statusText,
              });
          }
          function getUrlPath () {
            return window.location.pathname;
          }
          function addHeaderToQueue (queueId, headerName, headerValue, recurring) {
            var queue = queueManager.get(queueId),
              header = { name: headerName, value: headerValue },
              qHeadersList = null;
            if (typeof headerName !== 'string' || typeof headerValue !== 'string') return;
            if (!queue.headers) queue.headers = { once: [], always: [] };
            qHeadersList = !!recurring ? queue.headers.always : queue.headers.once;
            qHeadersList.push(header);
          }
          function copyHeaders (queueId, headerObj) {
            var i = 0,
              len = 0,
              queue = queueManager.get(queueId),
              qHeaders = queue.headers,
              headersList = null;
            headerObj = headerObj || {};
            function copy (l, o) {
              var i = 0,
                len = 0,
                header = null;
              for (i = 0, len = l.length; i < len; i += 1) {
                header = l[i];
                o[header.name] = header.value;
              }
            }
            if (qHeaders) {
              headersList = [qHeaders.always, qHeaders.once];
              for (i = 0, len = headersList.length; i < len; i += 1)
                copy(headersList[i], headerObj);
            }
            return headerObj;
          }
          function clearHeaders (queueId) {
            var queue = null,
              qHeaders = null;
            if (!queueManager.exists(queueId))
              throw new Error('Queue: ' + queueId + ' does not exist!');
            queue = queueManager.get(queueId);
            qHeaders = queue ? queue.headers : null;
            if (qHeaders) qHeaders.once = [];
          }
          function getExternalRequestHeaders () {
            var i = 0,
              len,
              header,
              headers = core.provideRequestHeaders();
            if (headers && headers.length)
              for (i = 0, len = headers.length; i < len; i += 1) {
                header = headers[i];
                addHeaderToQueue('DEFAULT', header.name, header.value, header.recurring);
              }
            return i;
          }
          function getMessageTypes (data) {
            var i,
              len,
              types = [],
              typesString = '';
            if (!data || !data.length) return typesString;
            for (i = 0, len = data.length; i < len; i += 1) types[data[i].type] = true;
            for (i = 0, len = types.length; i < len; i += 1)
              if (types[i]) {
                if (typesString) typesString += ',';
                typesString += i;
              }
            return typesString;
          }
          function flushQueue (queueId, sync) {
            var queue = queueManager.get(queueId),
              data = queue.url ? queueManager.flush(queueId) : null,
              count = data ? data.length : 0,
              httpHeaders = {
                'Content-Type': 'application/json',
                'X-PageId': core.getPageId(),
                'X-Tealeaf': 'device (UIC) Lib/5.5.0.1814',
                'X-TealeafType': 'GUI',
                'X-TeaLeaf-Page-Url': getUrlPath(),
                'X-Tealeaf-SyncXHR': (!!sync).toString(),
              },
              messageId = null,
              currOffset = mS.createMessage({ type: 0 }).offset,
              serializer = queue.serializer || 'json',
              contentEncoder = queue.encoder,
              requestData,
              retObj,
              timeDiff,
              xdomainFrameWindow = null;
            if (!count || !queue) return;
            timeDiff = currOffset - data[count - 1].offset;
            if (timeDiff > inactivityTimeout + 60000) return;
            queue.lastOffset = data[count - 1].offset;
            httpHeaders['X-Tealeaf-MessageTypes'] = getMessageTypes(data);
            data = mS.wrapMessages(data);
            if (CONFIG.xhrLogging) {
              messageId = data.serialNumber;
              xhrLog[messageId - 1] = { serialNumber: messageId, xhrReqStart: currOffset };
              data.log = { xhr: xhrLog };
            }
            if (serializer) data = sS.serialize(data, serializer);
            if (contentEncoder) {
              retObj = eS.encode(data, contentEncoder);
              if (retObj)
                if (retObj.data && !retObj.error) {
                  data = retObj.data;
                  httpHeaders['Content-Encoding'] = retObj.encoding;
                } else data = retObj.error;
            }
            getExternalRequestHeaders();
            copyHeaders(queueId, httpHeaders);
            if (queue.crossDomainEnabled) {
              xdomainFrameWindow = utils.getIFrameWindow(queue.crossDomainIFrame);
              if (!xdomainFrameWindow) return;
              requestData = {
                request: {
                  id: messageId,
                  url: queue.url,
                  async: !sync,
                  headers: httpHeaders,
                  data: data,
                },
              };
              if (!utils.isIE && typeof window.postMessage === 'function')
                xdomainFrameWindow.postMessage(requestData, queue.crossDomainIFrame.src);
              else
                try {
                  xdomainFrameWindow.sendMessage(requestData);
                } catch (e) {
                  return;
                }
            } else aS.sendRequest({ id: messageId, oncomplete: handleXhrCallback, url: queue.url, async: !sync, headers: httpHeaders, data: data });
            clearHeaders(queueId);
          }
          function flushAll (sync) {
            var conf = null,
              queues = CONFIG.queues,
              i = 0;
            for (i = 0; i < queues.length; i += 1) {
              conf = queues[i];
              flushQueue(conf.qid, sync);
            }
            return true;
          }
          function addToQueue (queueId, data) {
            var len,
              msg = mS.createMessage(data),
              queue = queueManager.get(queueId),
              size,
              timeDiff;
            len = queue.data.length;
            if (len) {
              timeDiff = msg.offset - queue.data[len - 1].offset;
              if (timeDiff > inactivityTimeout) {
                queueManager.flush(queueId);
                core.destroy();
                return;
              }
            }
            len = queueManager.push(queueId, msg);
            size = queue.size;
            if (
              (len >= queue.eventThreshold || size >= queue.sizeThreshold) &&
              autoFlushing &&
              core.getState() !== 'unloading'
            )
              flushQueue(queueId);
          }
          function isMsgLimitReached (e) {
            var counter,
              retVal = false;
            if (!e || !e.type) return true;
            counter = msgCounter[e.type];
            if (counter) {
              counter.count += 1;
              if (counter.count > counter.limit) {
                retVal = true;
                if (counter.count === counter.limit + 1)
                  addToQueue('DEFAULT', {
                    type: 16,
                    dataLimit: { messageType: e.type, maxCount: counter.limit },
                  });
              }
            }
            return retVal;
          }
          function getQueueId (moduleName) {
            var conf = null,
              queues = CONFIG.queues,
              module = '',
              i = 0,
              j = 0;
            for (i = 0; i < queues.length; i += 1) {
              conf = queues[i];
              if (conf && conf.modules)
                for (j = 0; j < conf.modules.length; j += 1) {
                  module = conf.modules[j];
                  if (module === moduleName) return conf.qid;
                }
            }
            return defaultQueue.qid;
          }
          function setTimer (qid, interval) {
            queueTimers[qid] = window.setTimeout(function tick () {
              flushQueue(qid);
              queueTimers[qid] = window.setTimeout(tick, interval);
            }, interval);
          }
          function clearTimers () {
            var key = 0;
            for (key in queueTimers)
              if (queueTimers.hasOwnProperty(key)) {
                window.clearTimeout(queueTimers[key]);
                delete queueTimers[key];
              }
            queueTimers = {};
          }
          function handleConfigUpdated (newConf) {}
          function initQueueService (config) {
            CONFIG = config;
            coreConfig = core.getCoreConfig();
            inactivityTimeout = utils.getValue(coreConfig, 'inactivityTimeout', 600000);
            utils.forEach(CONFIG.queues, function (conf, i) {
              var crossDomainIFrame = null;
              if (conf.qid === 'DEFAULT') defaultQueue = conf;
              if (conf.crossDomainEnabled) {
                crossDomainIFrame = bS.query(conf.crossDomainFrameSelector);
                if (!crossDomainIFrame) core.fail('Cross domain iframe not found');
              }
              queueManager.add(conf.qid, {
                url: conf.endpoint,
                eventThreshold: conf.maxEvents,
                sizeThreshold: conf.maxSize || 0,
                serializer: conf.serializer,
                encoder: conf.encoder,
                timerInterval: conf.timerInterval || 0,
                crossDomainEnabled: conf.crossDomainEnabled || false,
                crossDomainIFrame: crossDomainIFrame,
              });
              if (typeof conf.timerInterval !== 'undefined' && conf.timerInterval > 0)
                setTimer(conf.qid, conf.timerInterval);
            });
            cS.subscribe('configupdated', handleConfigUpdated);
            isInitialized = true;
          }
          function destroy () {
            if (autoFlushing) flushAll(!CONFIG.asyncReqOnUnload);
            cS.unsubscribe('configupdated', handleConfigUpdated);
            clearTimers();
            queueManager.reset();
            CONFIG = null;
            defaultQueue = null;
            isInitialized = false;
          }
          return {
            init: function () {
              if (!isInitialized) initQueueService(cS.getServiceConfig('queue') || {});
              else;
            },
            destroy: function () {
              destroy();
            },
            _getQueue: function (qid) {
              return queueManager.get(qid).data;
            },
            setAutoFlush: function (flag) {
              if (flag === true) autoFlushing = true;
              else autoFlushing = false;
            },
            flush: function (queueId) {
              queueId = queueId || defaultQueue.qid;
              if (!queueManager.exists(queueId))
                throw new Error('Queue: ' + queueId + ' does not exist!');
              flushQueue(queueId);
            },
            flushAll: function (sync) {
              return flushAll(!!sync);
            },
            post: function (moduleName, queueEvent, queueId) {
              if (!core.isInitialized()) return;
              queueId = queueId || getQueueId(moduleName);
              if (!queueManager.exists(queueId)) return;
              if (!isMsgLimitReached(queueEvent)) addToQueue(queueId, queueEvent);
            },
          };
        });
        TLT.addService('browserBase', function (core) {
          var customEventList,
            utils = core.utils,
            nonClickableTags = { optgroup: true, option: true, nobr: true },
            queryDom = {},
            configService,
            serializerService = null,
            config,
            blacklist,
            customid,
            getXPathFromNode,
            isInitialized = false;
          function updateConfig () {
            configService = core.getService('config');
            serializerService = core.getService('serializer');
            config = configService ? configService.getServiceConfig('browser') : {};
            blacklist = config.hasOwnProperty('blacklist') ? config.blacklist : [];
            customid = config.hasOwnProperty('customid') ? config.customid : [];
          }
          function initBrowserBase () {
            updateConfig();
            if (configService) configService.subscribe('configupdated', updateConfig);
            isInitialized = true;
          }
          function destroy () {
            if (configService) configService.unsubscribe('configupdated', updateConfig);
            isInitialized = false;
          }
          function checkId (node) {
            var i, len, re;
            if (!node || !node.id || typeof node.id !== 'string') return false;
            for (i = 0, len = blacklist.length; i < len; i += 1)
              if (typeof blacklist[i] === 'string') {
                if (node.id === blacklist[i]) return false;
              } else if (typeof blacklist[i] === 'object') {
                if (!blacklist[i].cRegex)
                  blacklist[i].cRegex = new RegExp(blacklist[i].regex, blacklist[i].flags);
                blacklist[i].cRegex.lastIndex = 0;
                if (blacklist[i].cRegex.test(node.id)) return false;
              }
            return true;
          }
          function getEventType (event, target) {
            var returnObj = { type: null, subType: null },
              type;
            if (!event) return returnObj;
            type = event.type;
            switch (type) {
              case 'focusin':
                type = 'focus';
                break;
              case 'focusout':
                type = 'blur';
                break;
              default:
                break;
            }
            returnObj.type = type;
            return returnObj;
          }
          function getElementType (element) {
            var returnObj = { type: null, subType: null };
            if (!element) return returnObj;
            returnObj.type = utils.getTagName(element);
            returnObj.subType = element.type || null;
            return returnObj;
          }
          function getNodeFromID (selector, type, scope) {
            var idTypes = { HTML_ID: '-1', XPATH_ID: '-2', ATTRIBUTE_ID: '-3' },
              doc,
              node = null,
              parts;
            if (!selector || !type) return node;
            doc = scope || window.document;
            type = type.toString();
            if (type === idTypes.HTML_ID)
              if (doc.getElementById) node = doc.getElementById(selector);
              else {
                if (doc.querySelector) node = doc.querySelector('#' + selector);
              }
            else if (type === idTypes.ATTRIBUTE_ID) {
              parts = selector.split('=');
              if (doc.querySelector)
                node = doc.querySelector('[' + parts[0] + '="' + parts[1] + '"]');
            } else if (type === idTypes.XPATH_ID) node = queryDom.xpath(selector, doc);
            return node;
          }
          getXPathFromNode = (function () {
            var specialChildNodes = { nobr: true, p: true };
            function getXPathArrayFromNode (node, wantFullPath) {
              var i,
                j,
                idValid = false,
                tmp_child = null,
                parent_window = null,
                parent_node = null,
                xpath = [],
                loop = true,
                localTop = core._getLocalTop(),
                tagName = '';
              while (loop) {
                loop = false;
                if (!utils.isUndefOrNull(node)) {
                  tagName = utils.getTagName(node);
                  if (!utils.isUndefOrNull(tagName))
                    if (specialChildNodes.hasOwnProperty(tagName)) {
                      node = node.parentNode;
                      tagName = utils.getTagName(node);
                    }
                  for (
                    idValid = checkId(node);
                    node !== document && (!idValid || wantFullPath);
                    idValid = checkId(node)
                  ) {
                    parent_node = node.parentNode;
                    if (!parent_node) {
                      parent_window = core.utils.getWindow(node);
                      if (!parent_window) return xpath;
                      parent_node =
                        parent_window !== localTop ? parent_window.frameElement : document;
                    }
                    tmp_child = parent_node.firstChild;
                    if (typeof tmp_child === 'undefined') return xpath;
                    for (j = 0; tmp_child; tmp_child = tmp_child.nextSibling)
                      if (tmp_child.nodeType === 1 && utils.getTagName(tmp_child) === tagName) {
                        if (tmp_child === node) {
                          xpath[xpath.length] = [tagName, j];
                          break;
                        }
                        j += 1;
                      }
                    node = parent_node;
                    tagName = utils.getTagName(node);
                  }
                  if (idValid && !wantFullPath) {
                    xpath[xpath.length] = [node.id];
                    if (core.utils.isIFrameDescendant(node)) {
                      loop = true;
                      node = core.utils.getWindow(node).frameElement;
                    }
                  }
                }
              }
              return xpath;
            }
            return function (node, wantFullPath) {
              var xpath = getXPathArrayFromNode(node, !!wantFullPath),
                parts = [],
                i = xpath.length;
              if (i < 1) return 'null';
              while (i) {
                i -= 1;
                if (xpath[i].length > 1)
                  parts[parts.length] = '["' + xpath[i][0] + '",' + xpath[i][1] + ']';
                else
                  parts[parts.length] =
                    '[' + serializerService.serialize(xpath[i][0], 'json') + ']';
              }
              return '[' + parts.join(',') + ']';
            };
          })();
          function getDocScrollPosition (doc) {
            var scrollPos = { left: -1, top: -1 },
              docElement;
            doc = doc || document;
            docElement = doc.documentElement || doc.body.parentNode || doc.body;
            scrollPos.left = Math.round(
              typeof window.pageXOffset === 'number' ? window.pageXOffset : docElement.scrollLeft
            );
            scrollPos.top = Math.round(
              typeof window.pageYOffset === 'number' ? window.pageYOffset : docElement.scrollTop
            );
            return scrollPos;
          }
          function isJQueryEvent (event) {
            return (
              event &&
              typeof event.originalEvent !== 'undefined' &&
              typeof event.isDefaultPrevented !== 'undefined' &&
              !event.isSimulated
            );
          }
          function getEventDetails (event) {
            if (!event) return null;
            if (event.type && event.type.indexOf('touch') === 0) {
              if (isJQueryEvent(event)) event = event.originalEvent;
              if (event.type === 'touchstart') event = event.touches[event.touches.length - 1];
              else if (event.type === 'touchend') event = event.changedTouches[0];
            }
            return event;
          }
          function normalizeEvent (event) {
            var e = event || window.event,
              doc = document.documentElement,
              body = document.body,
              found = false,
              foundElement = null,
              i = 0;
            if (isJQueryEvent(e)) e = e.originalEvent;
            if (typeof event === 'undefined' || typeof e.target === 'undefined') {
              e.target = e.srcElement || window.window;
              e.timeStamp = Number(new Date());
              if (e.pageX === null || typeof e.pageX === 'undefined') {
                e.pageX =
                  e.clientX +
                  ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                  ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
                e.pageY =
                  e.clientY +
                  ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                  ((doc && doc.clientTop) || (body && body.clientTop) || 0);
              }
              e.preventDefault = function () {
                this.returnValue = false;
              };
              e.stopPropagation = function () {
                this.cancelBubble = true;
              };
            }
            if (window.chrome && e.path !== undefined && e.type === 'click') {
              if (e.path.length === undefined) return e;
              for (i = 0; i < e.path.length; i++)
                if (utils.getTagName(e.path[i]) === 'button') {
                  found = true;
                  foundElement = e.path[i];
                  i = e.path.length;
                }
              if (found)
                return {
                  originalEvent: e,
                  target: foundElement,
                  srcElement: foundElement,
                  type: e.type,
                  pageX: document.body.scrollLeft + foundElement.getBoundingClientRect().left,
                  pageY: document.body.scrollTop + foundElement.getBoundingClientRect().top,
                };
            }
            return e;
          }
          function normalizeTarget (event) {
            var itemSource = null;
            if (!event) return null;
            if (event.srcElement) itemSource = event.srcElement;
            else {
              itemSource = event.target;
              if (!itemSource) itemSource = event.explicitOriginalTarget;
              if (!itemSource) itemSource = event.originalTarget;
            }
            if (!itemSource && event.type.indexOf('touch') === 0)
              itemSource = getEventDetails(event).target;
            while (itemSource && nonClickableTags[utils.getTagName(itemSource)])
              itemSource = itemSource.parentNode;
            if (!itemSource && event.srcElement === null) itemSource = window.window;
            return itemSource;
          }
          function getEventPosition (event) {
            var posX = 0,
              posY = 0,
              doc = document.documentElement,
              body = document.body;
            event = getEventDetails(event);
            if (event)
              if (event.pageX || event.pageY) {
                posX = event.pageX;
                posY = event.pageY;
              } else if (event.clientX || event.clientY) {
                posX =
                  event.clientX +
                  (doc ? doc.scrollLeft : body ? body.scrollLeft : 0) -
                  (doc ? doc.clientLeft : body ? body.clientLeft : 0);
                posY =
                  event.clientY +
                  (doc ? doc.scrollTop : body ? body.scrollTop : 0) -
                  (doc ? doc.clientTop : body ? body.clientTop : 0);
              }
            return { x: posX, y: posY };
          }
          queryDom.xpath = function (query, scope) {
            var xpath = null,
              elem,
              pathElem = null,
              tagName,
              i,
              j,
              k,
              len,
              jlen;
            if (!query) return null;
            xpath = serializerService.parse(query);
            scope = scope || document;
            elem = scope;
            if (!xpath) return null;
            for (i = 0, len = xpath.length; i < len && elem; i += 1) {
              pathElem = xpath[i];
              if (pathElem.length === 1)
                if (scope.getElementById) elem = scope.getElementById(pathElem[0]);
                else if (scope.querySelector) elem = scope.querySelector('#' + pathElem[0]);
                else elem = null;
              else {
                for (j = 0, k = -1, jlen = elem.childNodes.length; j < jlen; j += 1)
                  if (
                    elem.childNodes[j].nodeType === 1 &&
                    utils.getTagName(elem.childNodes[j]) === pathElem[0].toLowerCase()
                  ) {
                    k += 1;
                    if (k === pathElem[1]) {
                      elem = elem.childNodes[j];
                      break;
                    }
                  }
                if (k === -1) return null;
              }
              tagName = utils.getTagName(elem);
              if (tagName === 'frame' || tagName === 'iframe') {
                elem = utils.getIFrameWindow(elem).document;
                scope = elem;
              }
            }
            return elem === scope || !elem ? null : elem;
          };
          function Point (x, y) {
            this.x = x || 0;
            this.y = y || 0;
          }
          function Size (width, height) {
            this.width = Math.round(width || 0);
            this.height = Math.round(height || 0);
          }
          function ElementData (event, target) {
            var id, elementType, pos;
            target = normalizeTarget(event);
            id = this.examineID(target);
            elementType = getElementType(target);
            pos = this.examinePosition(event, target);
            this.element = target;
            this.id = id.id;
            this.idType = id.idType;
            this.type = elementType.type;
            this.subType = elementType.subType;
            this.state = this.examineState(target);
            this.position = new Point(pos.x, pos.y);
            this.size = new Size(pos.width, pos.height);
            this.xPath = id.xPath;
            this.name = id.name;
          }
          ElementData.HTML_ID = -1;
          ElementData.XPATH_ID = -2;
          ElementData.ATTRIBUTE_ID = -3;
          ElementData.prototype.examineID = function (target) {
            var id,
              type,
              xPath,
              attribute_id,
              name,
              i = customid.length,
              attrib;
            try {
              xPath = getXPathFromNode(target);
            } catch (e) {}
            name = target.name;
            try {
              if (!core.utils.getWindow(target) || !core.utils.isIFrameDescendant(target))
                if (checkId(target)) {
                  id = target.id;
                  type = ElementData.HTML_ID;
                } else if (customid.length && target.attributes)
                  while (i) {
                    i -= 1;
                    attrib = target.attributes[customid[i]];
                    if (typeof attrib !== 'undefined') {
                      id = customid[i] + '=' + (attrib.value || attrib);
                      type = ElementData.ATTRIBUTE_ID;
                    }
                  }
            } catch (e2) {}
            if (!id) {
              id = xPath;
              type = ElementData.XPATH_ID;
            }
            return { id: id, idType: type, xPath: xPath, name: name };
          };
          ElementData.prototype.examineState = function (target) {
            var tagnames = {
                a: ['innerText', 'href'],
                input: {
                  range: ['maxValue:max', 'value'],
                  checkbox: ['value', 'checked'],
                  radio: ['value', 'checked'],
                  image: ['src'],
                },
                select: ['value'],
                button: ['value', 'innerText'],
                textarea: ['value'],
              },
              tagName = utils.getTagName(target),
              properties = tagnames[tagName] || null,
              selectedOption = null,
              values = null,
              i = 0,
              len = 0,
              alias = null,
              key = '';
            if (properties !== null) {
              if (Object.prototype.toString.call(properties) === '[object Object]')
                properties = properties[target.type] || ['value'];
              values = {};
              for (key in properties)
                if (properties.hasOwnProperty(key))
                  if (properties[key].indexOf(':') !== -1) {
                    alias = properties[key].split(':');
                    values[alias[0]] = target[alias[1]];
                  } else if (properties[key] === 'innerText')
                    values[properties[key]] = core.utils.trim(
                      target.innerText || target.textContent
                    );
                  else values[properties[key]] = target[properties[key]];
            }
            if (tagName === 'select' && target.options && !isNaN(target.selectedIndex)) {
              values.index = target.selectedIndex;
              if (values.index >= 0 && values.index < target.options.length) {
                selectedOption = target.options[target.selectedIndex];
                values.value =
                  selectedOption.getAttribute('value') ||
                  selectedOption.getAttribute('label') ||
                  selectedOption.text ||
                  selectedOption.innerText;
                values.text = selectedOption.text || selectedOption.innerText;
              }
            }
            return values;
          };
          function getZoomValue () {
            var factor = 1,
              rect,
              physicalW,
              logicalW;
            if (document.body.getBoundingClientRect) {
              try {
                rect = document.body.getBoundingClientRect();
              } catch (e) {
                core.utils.clog('getBoundingClientRect failed.', e);
                return factor;
              }
              physicalW = rect.right - rect.left;
              logicalW = document.body.offsetWidth;
              factor = Math.round((physicalW / logicalW) * 100) / 100;
            }
            return factor;
          }
          function getBoundingClientRectNormalized (element) {
            var rect, rectangle, zoom, scrollPos;
            if (!element || !element.getBoundingClientRect)
              return { x: 0, y: 0, width: 0, height: 0 };
            try {
              rect = element.getBoundingClientRect();
              scrollPos = getDocScrollPosition(document);
            } catch (e) {
              core.utils.clog('getBoundingClientRect failed.', e);
              return { x: 0, y: 0, width: 0, height: 0 };
            }
            rectangle = {
              x: rect.left + scrollPos.left,
              y: rect.top + scrollPos.top,
              width: rect.right - rect.left,
              height: rect.bottom - rect.top,
            };
            if (core.utils.isIE) {
              rectangle.x -= document.documentElement.clientLeft;
              rectangle.y -= document.documentElement.clientTop;
              zoom = getZoomValue();
              if (zoom !== 1) {
                rectangle.x = Math.round(rectangle.x / zoom);
                rectangle.y = Math.round(rectangle.y / zoom);
                rectangle.width = Math.round(rectangle.width / zoom);
                rectangle.height = Math.round(rectangle.height / zoom);
              }
            }
            return rectangle;
          }
          ElementData.prototype.examinePosition = function (event, target) {
            var posOnDoc = getEventPosition(event),
              elPos = getBoundingClientRectNormalized(target);
            elPos.x =
              posOnDoc.x || posOnDoc.y
                ? Math.round(Math.abs(posOnDoc.x - elPos.x))
                : elPos.width / 2;
            elPos.y =
              posOnDoc.x || posOnDoc.y
                ? Math.round(Math.abs(posOnDoc.y - elPos.y))
                : elPos.height / 2;
            return elPos;
          };
          function getNormalizedOrientation () {
            var orientation = typeof window.orientation === 'number' ? window.orientation : 0;
            if (core.utils.isLandscapeZeroDegrees)
              if (Math.abs(orientation) === 180 || Math.abs(orientation) === 0) orientation = 90;
              else if (Math.abs(orientation) === 90) orientation = 0;
            return orientation;
          }
          function initCustomEventList (list) {
            var i, len, coreConfig, event, modules, moduleName;
            if (list) return list;
            coreConfig = core.getCoreConfig() || {};
            modules = coreConfig.modules;
            list = {};
            for (moduleName in modules)
              if (modules.hasOwnProperty(moduleName) && modules[moduleName].events)
                for (i = 0, len = modules[moduleName].events.length; i < len; i += 1) {
                  event = modules[moduleName].events[i];
                  if (event.state) list[event.name] = event.state;
                }
            return list;
          }
          function getCustomState (event) {
            var state;
            customEventList = initCustomEventList(customEventList);
            if (customEventList[event.type])
              state = utils.getValue(event, customEventList[event.type], null);
            return state;
          }
          function WebEvent (event) {
            var pos, eventType, state;
            this.data = event.data || null;
            this.delegateTarget = event.delegateTarget || null;
            if (event.gesture || (event.originalEvent && event.originalEvent.gesture)) {
              this.gesture = event.gesture || event.originalEvent.gesture;
              this.gesture.idType = new ElementData(this.gesture, this.gesture.target).idType;
            }
            event = normalizeEvent(event);
            pos = getEventPosition(event);
            this.custom = false;
            this.nativeEvent = this.custom === true ? null : event;
            this.position = new Point(pos.x, pos.y);
            this.target = new ElementData(event, event.target);
            this.orientation = getNormalizedOrientation();
            state = getCustomState(event);
            if (state) this.target.state = state;
            this.timestamp = new Date().getTime();
            eventType = getEventType(event, this.target);
            this.type = eventType.type;
            this.subType = eventType.subType;
          }
          function processDOMEvent (event) {
            if (core.isInitialized()) core._publishEvent(new WebEvent(event));
            else;
          }
          function getXpathListFromNode (node, wantFullPath) {
            var i,
              j,
              idValid = false,
              tmp_child = null,
              parent_window = null,
              parent_node = null,
              xpath = [],
              loop = true,
              localTop = core._getLocalTop(),
              tagName = '';
            while (loop) {
              loop = false;
              if (utils.isUndefOrNull(node)) break;
              tagName = utils.getTagName(node);
              if (!utils.isUndefOrNull(tagName))
                if (getXpathListFromNode.specialChildNodes.hasOwnProperty(tagName)) {
                  node = node.parentNode;
                  loop = true;
                  continue;
                }
              for (
                idValid = checkId(node);
                node !== document && (!idValid || wantFullPath);
                idValid = checkId(node)
              ) {
                parent_node = node.parentNode;
                if (!parent_node) {
                  parent_window = core.utils.getWindow(node);
                  if (!parent_window || node.nodeType !== 9) {
                    xpath.push([tagName, 0]);
                    break;
                  }
                  parent_node = parent_window !== localTop ? parent_window.frameElement : document;
                }
                tmp_child = parent_node.firstChild;
                if (typeof tmp_child === 'undefined') break;
                for (j = 0; tmp_child; tmp_child = tmp_child.nextSibling)
                  if (tmp_child.nodeType === 1 && utils.getTagName(tmp_child) === tagName) {
                    if (tmp_child === node) {
                      xpath[xpath.length] = [tagName, j];
                      break;
                    }
                    j += 1;
                  }
                node = parent_node;
                tagName = utils.getTagName(node);
              }
              if (idValid && !wantFullPath) {
                xpath[xpath.length] = [node.id];
                if (core.utils.isIFrameDescendant(node)) {
                  loop = true;
                  node = core.utils.getWindow(node).frameElement;
                }
              }
            }
            xpath.reverse();
            return xpath;
          }
          getXpathListFromNode.specialChildNodes = { nobr: true, p: true };
          function xpathListToString (list) {
            var str;
            if (!list || !list.length) return null;
            str = serializerService.serialize(list, 'json');
            return str;
          }
          function Xpath (node) {
            var fullXpath = '',
              fullXpathList = [],
              xpath = '',
              xpathList = [];
            if (!(this instanceof Xpath)) return null;
            if (typeof node !== 'object') {
              this.fullXpath = '';
              this.xpath = '';
              this.fullXpathList = [];
              this.xpathList = [];
              return;
            }
            xpathList = getXpathListFromNode(node, false);
            if (xpathList.length && xpathList[0].length === 1)
              fullXpathList = getXpathListFromNode(node, true);
            else fullXpathList = utils.clone(xpathList);
            this.xpath = xpathListToString(xpathList);
            this.xpathList = xpathList;
            this.fullXpath = xpathListToString(fullXpathList);
            this.fullXpathList = fullXpathList;
            this.applyPrefix = function (prefix) {
              var part, lastPrefixPart;
              if (!(prefix instanceof Xpath) || !prefix.fullXpathList.length) return;
              lastPrefixPart = prefix.fullXpathList[prefix.fullXpathList.length - 1];
              part = this.fullXpathList.shift();
              if (utils.isEqual(part[0], lastPrefixPart[0]))
                this.fullXpathList = prefix.fullXpathList.concat(this.fullXpathList);
              else {
                this.fullXpathList.unshift(part);
                return;
              }
              this.fullXpath = xpathListToString(this.fullXpathList);
              part = this.xpathList.shift();
              if (part.length === 1) {
                this.xpathList.unshift(part);
                return;
              }
              this.xpathList = prefix.xpathList.concat(this.xpathList);
              this.xpath = xpathListToString(this.xpathList);
            };
            this.compare = function (xpathB) {
              if (!(xpathB instanceof Xpath)) return 0;
              return this.fullXpathList.length - xpathB.fullXpathList.length;
            };
            this.isSame = function (xpathB) {
              var isEqual = false;
              if (!(xpathB instanceof Xpath)) return isEqual;
              if (this.compare(xpathB) === 0) isEqual = this.fullXpath === xpathB.fullXpath;
              return isEqual;
            };
            this.containedIn = function (parentXpath) {
              var i, len;
              if (!(parentXpath instanceof Xpath)) return false;
              if (parentXpath.fullXpathList.length > this.fullXpathList.length) return false;
              for (i = 0, len = parentXpath.fullXpathList.length; i < len; i += 1)
                if (!utils.isEqual(parentXpath.fullXpathList[i], this.fullXpathList[i]))
                  return false;
              return true;
            };
          }
          Xpath.prototype = (function () {
            return {};
          })();
          return {
            init: function () {
              if (!isInitialized) initBrowserBase();
              else;
            },
            destroy: function () {
              destroy();
            },
            WebEvent: WebEvent,
            ElementData: ElementData,
            Xpath: Xpath,
            processDOMEvent: processDOMEvent,
            getNormalizedOrientation: getNormalizedOrientation,
            getXPathFromNode: function (moduleName, node, wantFullPath, wantObject) {
              return getXPathFromNode(node, wantFullPath, wantObject);
            },
            getNodeFromID: getNodeFromID,
            queryDom: queryDom,
          };
        });
        TLT.addService('browser', function (core) {
          var utils = core.utils,
            configService = core.getService('config'),
            browserBaseService = core.getService('browserBase'),
            ajaxService = core.getService('ajax'),
            addEventListener = null,
            removeEventListener = null,
            serviceConfig = configService ? configService.getServiceConfig('browser') : {},
            useCapture = utils.getValue(serviceConfig, 'useCapture', true),
            isInitialized = false,
            errorCodes = { NO_QUERY_SELECTOR: 'NOQUERYSELECTOR' },
            wrapWebEvent = function (handler) {
              return function (event) {
                var webEvent = new browserBaseService.WebEvent(event);
                if (event.type === 'resize' || event.type === 'hashchange')
                  setTimeout(function () {
                    handler(webEvent);
                  }, 5);
                else handler(webEvent);
              };
            },
            queryDom = {
              list2Array: function (nodeList) {
                var len = nodeList.length,
                  result = [],
                  i;
                if (typeof nodeList.length === 'undefined') return [nodeList];
                for (i = 0; i < len; i += 1) result[i] = nodeList[i];
                return result;
              },
              find: function (query, scope, type) {
                type = type || 'css';
                return this.list2Array(this[type](query, scope));
              },
              css: function (query, scope) {
                var self = this,
                  message = null,
                  bodyEl = document.getElementsByTagName('body')[0],
                  jQuery = serviceConfig.jQueryObject
                    ? utils.access(serviceConfig.jQueryObject)
                    : window.jQuery,
                  sizzle = serviceConfig.sizzleObject
                    ? utils.access(serviceConfig.sizzleObject)
                    : window.Sizzle;
                if (typeof document.querySelectorAll === 'undefined') {
                  self.css = function (query, scope) {
                    scope = scope || document;
                    return self.Sizzle(query, scope);
                  };
                  if (typeof self.Sizzle === 'undefined')
                    try {
                      if (bodyEl === sizzle('html > body', document)[0]) self.Sizzle = sizzle;
                    } catch (e1) {
                      try {
                        if (bodyEl === jQuery(document).find('html > body').get()[0])
                          self.Sizzle = function (query, scope) {
                            return jQuery(scope).find(query).get();
                          };
                      } catch (e2) {
                        core.fail('Sizzle was not found', errorCodes.NO_QUERY_SELECTOR);
                      }
                    }
                } else
                  self.css = function (query, scope) {
                    scope = scope || document;
                    return scope.querySelectorAll(query);
                  };
                return self.css(query, scope);
              },
            },
            handlerMappings = (function () {
              var data = new utils.WeakMap();
              return {
                add: function (originalHandler) {
                  var handlers = data.get(originalHandler) || [wrapWebEvent(originalHandler), 0];
                  handlers[1] += 1;
                  data.set(originalHandler, handlers);
                  return handlers[0];
                },
                find: function (originalHandler) {
                  var handlers = data.get(originalHandler);
                  return handlers ? handlers[0] : null;
                },
                remove: function (originalHandler) {
                  var handlers = data.get(originalHandler);
                  if (handlers) {
                    handlers[1] -= 1;
                    if (handlers[1] <= 0) data.remove(originalHandler);
                  }
                },
              };
            })();
          function initBrowserServiceW3C () {
            queryDom.xpath = browserBaseService.queryDom.xpath;
            if (typeof document.addEventListener === 'function') {
              addEventListener = function (target, eventName, handler) {
                target.addEventListener(eventName, handler, useCapture);
              };
              removeEventListener = function (target, eventName, handler) {
                target.removeEventListener(eventName, handler, useCapture);
              };
            } else if (typeof document.attachEvent !== 'undefined') {
              addEventListener = function (target, eventName, handler) {
                target.attachEvent('on' + eventName, handler);
              };
              removeEventListener = function (target, eventName, handler) {
                target.detachEvent('on' + eventName, handler);
              };
            } else throw new Error('Unsupported browser');
            isInitialized = true;
          }
          return {
            init: function () {
              if (!isInitialized) initBrowserServiceW3C();
              else;
            },
            destroy: function () {
              isInitialized = false;
            },
            getServiceName: function () {
              return 'W3C';
            },
            query: function (query, scope, type) {
              try {
                return queryDom.find(query, scope, type)[0] || null;
              } catch (err) {
                return [];
              }
            },
            queryAll: function (query, scope, type) {
              try {
                return queryDom.find(query, scope, type);
              } catch (err) {
                return [];
              }
            },
            subscribe: function (eventName, target, handler) {
              var wrappedHandler = handlerMappings.add(handler);
              addEventListener(target, eventName, wrappedHandler);
            },
            unsubscribe: function (eventName, target, handler) {
              var wrappedHandler = handlerMappings.find(handler);
              if (wrappedHandler) {
                try {
                  removeEventListener(target, eventName, wrappedHandler);
                } catch (e) {}
                handlerMappings.remove(handler);
              }
            },
          };
        });
        TLT.addService('ajax', function (core) {
          var utils = core.utils,
            getXHRObject,
            useBeacon = false,
            useFetch = false,
            isInitialized = false;
          function convertHeadersToArray (headersObj) {
            var header = '',
              headers = [];
            for (header in headersObj)
              if (headersObj.hasOwnProperty(header)) headers.push([header, headersObj[header]]);
            return headers;
          }
          function convertHeadersToQuery (headersObj) {
            var header = '',
              headers = '?';
            for (header in headersObj)
              if (headersObj.hasOwnProperty(header))
                headers +=
                  encodeURIComponent(header) + '=' + encodeURIComponent(headersObj[header]) + '&';
            return headers.slice(0, -1);
          }
          function makeBeaconCall (message) {
            var data,
              retVal = false,
              query = convertHeadersToQuery(message.headers);
            if (typeof message.data === 'string') data = message.data;
            else data = message.data ? new Uint8Array(message.data) : '';
            retVal = navigator.sendBeacon(message.url + query, data);
            return retVal;
          }
          function makeFetchCall (message) {
            var headers = [['X-Requested-With', 'XMLHttpRequest']],
              header = '',
              i,
              length,
              hdr = {};
            if (message.headers) headers = headers.concat(convertHeadersToArray(message.headers));
            if (message.contentType) headers.push(['Content-Type', message.contentType]);
            for (i = 0, length = headers.length; i < length; i += 1) {
              header = headers[i];
              if (header[0] && header[1]) hdr[header[0]] = header[1];
            }
            hdr['X-Requested-With'] = 'Fetch';
            fetch(message.url, {
              method: 'POST',
              headers: hdr,
              body: message.data,
              cache: 'no-cache',
              credentials: 'same-origin',
            }).catch(function (error) {
              makeAjaxCall(message);
            });
          }
          function wrapAjaxResponse (origCallback) {
            if (typeof origCallback !== 'function') return;
            return function ajaxResponseHandler (event) {
              var xhr,
                status,
                success = false;
              if (!event) return;
              xhr = event.target;
              if (!xhr) return origCallback(event);
              status = xhr.status;
              if (status >= 200 && status < 300) success = true;
              origCallback({
                headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                responseText: xhr.responseText,
                statusCode: status,
                statusText: xhr.statusText,
                id: xhr.id,
                success: success,
              });
            };
          }
          function makeAjaxCall (message) {
            var xhr = getXHRObject(),
              headers = [['X-Requested-With', 'XMLHttpRequest']],
              timeout = 0,
              async = typeof message.async !== 'boolean' ? true : message.async,
              header = '',
              callbackFn = null,
              i,
              length;
            if (message.headers) headers = headers.concat(convertHeadersToArray(message.headers));
            if (message.contentType) headers.push(['Content-Type', message.contentType]);
            xhr.open(message.type.toUpperCase(), message.url, async);
            for (i = 0, length = headers.length; i < length; i += 1) {
              header = headers[i];
              if (header[0] && header[1]) xhr.setRequestHeader(header[0], header[1]);
            }
            if (message.error) {
              message.error = wrapAjaxResponse(message.error);
              xhr.addEventListener('error', message.error);
            }
            xhr.onreadystatechange = callbackFn = function () {
              if (xhr.readyState === 4) {
                xhr.onreadystatechange = callbackFn = function () {};
                if (message.timeout) window.clearTimeout(timeout);
                message.oncomplete({
                  id: message.id,
                  headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                  responseText: xhr.responseText || null,
                  statusCode: xhr.status,
                  statusText: xhr.statusText,
                  success: xhr.status >= 200 && xhr.status < 300,
                });
                xhr = null;
              }
            };
            xhr.send(message.data || null);
            callbackFn();
            if (message.timeout)
              timeout = window.setTimeout(function () {
                if (!xhr) return;
                xhr.onreadystatechange = function () {};
                if (xhr.readyState !== 4) {
                  xhr.abort();
                  if (typeof message.error === 'function')
                    message.error({
                      id: message.id,
                      statusCode: xhr.status,
                      statusText: 'timeout',
                      success: false,
                    });
                }
                message.oncomplete({
                  id: message.id,
                  headers: utils.extractResponseHeaders(xhr.getAllResponseHeaders()),
                  responseText: xhr.responseText || null,
                  statusCode: xhr.status,
                  statusText: 'timeout',
                  success: false,
                });
                xhr = null;
              }, message.timeout);
          }
          function initAjaxService () {
            const $___old_54d83e9127efdf84 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'XMLHttpRequest'
            );
            try {
              if ($___old_54d83e9127efdf84)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_aa98dea0755b9294.XMLHttpRequest
                ));
              return function () {
                var queueServiceConfig = core.getServiceConfig('queue');
                if (typeof window.XMLHttpRequest !== 'undefined')
                  getXHRObject = function () {
                    return new XMLHttpRequest();
                  };
                else
                  getXHRObject = function () {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                  };
                useBeacon =
                  !!queueServiceConfig.useBeacon && typeof navigator.sendBeacon === 'function';
                useFetch =
                  !!queueServiceConfig.useFetch && typeof typeof window.fetch !== 'undefined';
                isInitialized = true;
              }.apply(this, arguments);
            } finally {
              if ($___old_54d83e9127efdf84)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_54d83e9127efdf84
                ));
            }
          }
          return {
            init: function () {
              if (!isInitialized) initAjaxService();
            },
            destroy: function () {
              isInitialized = false;
            },
            sendRequest: function (message) {
              message.type = message.type || 'POST';
              var retVal = false,
                unloading = core.getState() === 'unloading',
                msgType = message.type.toUpperCase();
              if (message.async && useBeacon && msgType !== 'GET' && unloading) {
                retVal = makeBeaconCall(message);
                if (!retVal && useFetch) makeFetchCall(message);
              } else if (message.async && useFetch && msgType !== 'GET' && unloading)
                makeFetchCall(message);
              else makeAjaxCall(message);
            },
          };
        });
        TLT.addService('domCapture', function (core) {
          var configService = core.getService('config'),
            browserBaseService = core.getService('browserBase'),
            messageService,
            dcServiceConfig,
            dcDefaultOptions = { captureFrames: false, removeScripts: true, removeComments: true },
            defaultDiffObserverConfig = {
              childList: true,
              attributes: true,
              attributeOldValue: true,
              characterData: true,
              subtree: true,
            },
            diffEnabled = typeof window.MutationObserver !== 'undefined',
            diffObserver,
            diffObserverConfig = defaultDiffObserverConfig,
            observedWindowList = [],
            mutatedTargets = [],
            mutatedAttrTargets = [],
            mutationCount = 0,
            mutationThreshold = 100,
            forceFullDOM = false,
            fullDOMSent = false,
            isInitialized = false,
            tltUniqueIDIndex = 1,
            dupNode = function () {},
            getDOMCapture = function () {},
            updateConfig = function () {},
            utils = core.utils;
          function clearMutationRecords () {
            mutatedTargets = [];
            mutatedAttrTargets = [];
            mutationCount = 0;
            forceFullDOM = false;
          }
          function consolidateTargets (mutatedTargets) {
            var i, j, parentTarget;
            if (!mutatedTargets || !mutatedTargets.length) return;
            mutatedTargets = mutatedTargets.sort(function (xpathA, xpathB) {
              return xpathA.compare(xpathB);
            });
            for (i = 0; i < mutatedTargets.length; i += 1) {
              parentTarget = mutatedTargets[i];
              for (j = i + 1; j < mutatedTargets.length; j += 0)
                if (mutatedTargets[j].containedIn(parentTarget)) mutatedTargets.splice(j, 1);
                else j += 1;
            }
          }
          function removeOldAttrValues (attrList) {
            var i, len;
            if (!attrList) return attrList;
            for (i = 0, len = attrList.length; i < len; i += 1) delete attrList[i].oldValue;
            return attrList;
          }
          function hasAttr (attrList, attrName) {
            var i,
              len,
              found = false;
            if (!attrList || !attrName) return found;
            for (i = 0, len = attrList.length; i < len; i += 1)
              if (attrList[i].name === attrName) {
                found = true;
                break;
              }
            return found;
          }
          function mergeAttributeChanges (currAttrList, newAttr) {
            var i, len, attr, found;
            for (i = 0, len = currAttrList.length, found = false; i < len; i += 1) {
              attr = currAttrList[i];
              if (attr.name === newAttr.name) {
                if (attr.oldValue === newAttr.value) currAttrList.splice(i, 1);
                else attr.value = newAttr.value;
                found = true;
                break;
              }
            }
            if (!found) currAttrList.push(newAttr);
            return currAttrList;
          }
          function addToMutatedTargets (xpath, mutationRecord) {
            var i, j, k, len, found, target;
            xpath.removedNodes = mutationRecord.removedNodes.length;
            xpath.addedNodes = utils.convertToArray(mutationRecord.addedNodes);
            for (i = 0, len = mutatedTargets.length; i < len; i += 1) {
              target = mutatedTargets[i];
              if (xpath.isSame(target)) {
                if (xpath.removedNodes)
                  for (j = 0; j < mutationRecord.removedNodes.length; j += 1) {
                    k = target.addedNodes.indexOf(mutationRecord.removedNodes[j]);
                    if (k !== -1) {
                      target.addedNodes.splice(k, 1);
                      xpath.removedNodes -= 1;
                    }
                  }
                target.removedNodes += xpath.removedNodes;
                target.addedNodes.concat(xpath.addedNodes);
                if (!target.removedNodes && !target.addedNodes.length) mutatedTargets.splice(i, 1);
                found = true;
                break;
              }
            }
            if (!found) mutatedTargets.push(xpath);
          }
          function isNodePartOfMutatedTargets (xpath, node) {
            var i,
              j,
              len,
              found = false,
              mutatedNodes,
              target;
            for (i = 0, len = mutatedTargets.length; !found && i < len; i += 1) {
              target = mutatedTargets[i];
              if (xpath.containedIn(target)) {
                mutatedNodes = target.addedNodes;
                for (j = 0; j < mutatedNodes.length; j += 1)
                  if (mutatedNodes[j].contains && mutatedNodes[j].contains(node)) {
                    found = true;
                    break;
                  }
              }
            }
            return found;
          }
          function addToMutatedAttributeTargets (xpath, mutationRecord) {
            var i,
              len,
              attributeName,
              currAttributes,
              found,
              target = null;
            attributeName = mutationRecord.attributeName;
            if (attributeName === 'checked' || attributeName === 'selected') {
              target = browserBaseService.ElementData.prototype.examineID(mutationRecord.target);
              if (messageService.isPrivacyMatched(target)) return;
              target = null;
            }
            if (attributeName === 'value') {
              target = browserBaseService.ElementData.prototype.examineID(mutationRecord.target);
              target.currState =
                browserBaseService.ElementData.prototype.examineState(mutationRecord.target) || {};
              if (target.currState.value) messageService.applyPrivacyToTarget(target);
              else target = null;
            }
            xpath.attributes = [
              {
                name: attributeName,
                oldValue: mutationRecord.oldValue,
                value: target
                  ? target.currState.value
                  : mutationRecord.target.getAttribute(attributeName),
              },
            ];
            currAttributes = xpath.attributes[0];
            if (currAttributes.oldValue === currAttributes.value) return;
            for (i = 0, len = mutatedAttrTargets.length, found = false; i < len; i += 1) {
              target = mutatedAttrTargets[i];
              if (xpath.isSame(target)) {
                target.attributes = mergeAttributeChanges(target.attributes, currAttributes);
                if (!target.attributes.length) mutatedAttrTargets.splice(i, 1);
                else if (isNodePartOfMutatedTargets(xpath, mutationRecord.target))
                  mutatedAttrTargets.splice(i, 1);
                found = true;
                break;
              }
            }
            if (!found && !isNodePartOfMutatedTargets(xpath, mutationRecord.target))
              mutatedAttrTargets.push(xpath);
          }
          function processMutationRecords (records) {
            var i, len, fullXpathList, record, xpath;
            if (!records || !records.length) return;
            mutationCount += records.length;
            if (mutationCount >= mutationThreshold) {
              if (!forceFullDOM) forceFullDOM = true;
              return;
            }
            for (i = 0, len = records.length; i < len; i += 1) {
              record = records[i];
              xpath = new browserBaseService.Xpath(record.target);
              if (xpath) {
                fullXpathList = xpath.fullXpathList;
                if (fullXpathList.length && fullXpathList[0][0] === 'html')
                  switch (record.type) {
                    case 'characterData':
                    case 'childList':
                      addToMutatedTargets(xpath, record);
                      break;
                    case 'attributes':
                      addToMutatedAttributeTargets(xpath, record);
                      break;
                    default:
                      utils.clog('Unknown mutation type: ' + record.type);
                      break;
                  }
              }
            }
          }
          function initDOMDiffObserver () {
            var observer;
            observer = new window.MutationObserver(function (records) {
              if (records) {
                processMutationRecords(records);
                utils.clog('Processed [' + records.length + '] mutation records.');
              }
            });
            return observer;
          }
          function initDOMCaptureService (config) {
            var i, len;
            configService.subscribe('configupdated', updateConfig);
            messageService = core.getService('message');
            dcServiceConfig = config;
            dcServiceConfig.options = utils.mixin({}, dcDefaultOptions, dcServiceConfig.options);
            diffEnabled = diffEnabled && utils.getValue(dcServiceConfig, 'diffEnabled', true);
            mutationThreshold = utils.getValue(dcServiceConfig.options, 'maxMutations', 100);
            if (diffEnabled) {
              diffObserverConfig = utils.getValue(
                dcServiceConfig,
                'diffObserverConfig',
                defaultDiffObserverConfig
              );
              diffObserver = initDOMDiffObserver();
              observedWindowList.push(window);
            }
            isInitialized = true;
          }
          function destroyDOMCaptureService () {
            configService.unsubscribe('configupdated', updateConfig);
            if (diffObserver) diffObserver.disconnect();
            isInitialized = false;
          }
          function getUniqueID () {
            var id;
            id = 'tlt-' + utils.getSerialNumber();
            return id;
          }
          function removeTags (node, tagName) {
            var i, nodeList;
            if (!node || !node.getElementsByTagName || !tagName) return;
            nodeList = node.getElementsByTagName(tagName);
            if (nodeList && nodeList.length)
              for (i = nodeList.length - 1; i >= 0; i -= 1)
                nodeList[i].parentNode.removeChild(nodeList[i]);
            return node;
          }
          function removeNodes (node, nodeType) {
            var i, child;
            for (i = 0; node.hasChildNodes() && i < node.childNodes.length; i += 1) {
              child = node.childNodes[i];
              if (child.nodeType === nodeType) {
                node.removeChild(child);
                i -= 1;
              } else if (child.hasChildNodes()) removeNodes(child, nodeType);
            }
            return node;
          }
          function getDoctypeAsString (node) {
            var doctype,
              doctypeStr = null;
            if (!node || !node.doctype) return null;
            doctype = node.doctype;
            if (doctype)
              doctypeStr =
                '<!DOCTYPE ' +
                doctype.name +
                (doctype.publicId ? ' PUBLIC "' + doctype.publicId + '"' : '') +
                (!doctype.publicId && doctype.systemId ? ' SYSTEM' : '') +
                (doctype.systemId ? ' "' + doctype.systemId + '"' : '') +
                '>';
            return doctypeStr;
          }
          function fixInputs (source, target) {
            var i, sourceInputElement, targetInputElement, sourceInputList, targetInputList, len;
            if (!target) return;
            sourceInputList = source.getElementsByTagName('input');
            targetInputList = target.getElementsByTagName('input');
            if (targetInputList)
              for (i = 0, len = targetInputList.length; i < len; i += 1) {
                sourceInputElement = sourceInputList[i];
                targetInputElement = targetInputList[i];
                switch (targetInputElement.type) {
                  case 'checkbox':
                  case 'radio':
                    if (utils.isIE ? sourceInputElement.checked : targetInputElement.checked)
                      targetInputElement.setAttribute('checked', 'checked');
                    else targetInputElement.removeAttribute('checked');
                    break;
                  default:
                    targetInputElement.setAttribute('value', targetInputElement.value);
                    if (!targetInputElement.getAttribute('type'))
                      targetInputElement.setAttribute('type', 'text');
                    break;
                }
              }
          }
          function fixTextareas (source, target) {
            var i,
              len,
              sourceTextareaElement,
              sourceTextareaList,
              targetTextareaElement,
              targetTextareaList;
            if (!source || !source.getElementsByTagName || !target || !target.getElementsByTagName)
              return;
            sourceTextareaList = source.getElementsByTagName('textarea');
            targetTextareaList = target.getElementsByTagName('textarea');
            if (sourceTextareaList && targetTextareaList)
              for (i = 0, len = sourceTextareaList.length; i < len; i += 1) {
                sourceTextareaElement = sourceTextareaList[i];
                targetTextareaElement = targetTextareaList[i];
                targetTextareaElement.setAttribute('value', sourceTextareaElement.value);
                targetTextareaElement.value = targetTextareaElement.textContent =
                  sourceTextareaElement.value;
              }
          }
          function fixSelectLists (source, target) {
            var sourceElem, sourceList, targetElem, targetList, i, j, len;
            if (!source || !source.getElementsByTagName || !target || !target.getElementsByTagName)
              return;
            sourceList = source.getElementsByTagName('select');
            targetList = target.getElementsByTagName('select');
            if (sourceList)
              for (i = 0, len = sourceList.length; i < len; i += 1) {
                sourceElem = sourceList[i];
                targetElem = targetList[i];
                for (j = 0; j < sourceElem.options.length; j += 1)
                  if (j === sourceElem.selectedIndex || sourceElem.options[j].selected)
                    targetElem.options[j].setAttribute('selected', 'selected');
                  else targetElem.options[j].removeAttribute('selected');
              }
          }
          function getHTMLText (node) {
            var nodeType,
              htmlText = null;
            if (node) {
              nodeType = node.nodeType || -1;
              switch (nodeType) {
                case 9:
                  htmlText = node.documentElement ? node.documentElement.outerHTML : '';
                  break;
                case 1:
                  htmlText = node.outerHTML;
                  break;
                default:
                  htmlText = null;
                  break;
              }
            }
            return htmlText;
          }
          function isNodeValidForCapture (node) {
            var nodeType,
              valid = false;
            if (node && typeof node === 'object') {
              nodeType = node.nodeType || -1;
              switch (nodeType) {
                case 9:
                case 1:
                  valid = true;
                  break;
                default:
                  valid = false;
                  break;
              }
            }
            return valid;
          }
          function getFrames (source, target, options) {
            var i,
              j,
              len,
              frameTag,
              frameTags = ['iframe', 'frame'],
              sourceIframe,
              iframeWindow,
              iframeDoc,
              iframeCapture,
              iframeID,
              iframeSrc,
              returnObject = { frames: [] },
              sourceIframeList,
              targetIframeList,
              urlInfo;
            for (j = 0; j < frameTags.length; j += 1) {
              frameTag = frameTags[j];
              sourceIframeList = source.getElementsByTagName(frameTag);
              targetIframeList = target.getElementsByTagName(frameTag);
              if (sourceIframeList)
                for (i = 0, len = sourceIframeList.length; i < len; i += 1)
                  try {
                    sourceIframe = sourceIframeList[i];
                    iframeWindow = utils.getIFrameWindow(sourceIframe);
                    if (
                      iframeWindow &&
                      iframeWindow.document &&
                      iframeWindow.location.href !== 'about:blank'
                    ) {
                      iframeDoc = iframeWindow.document;
                      iframeCapture = getDOMCapture(iframeDoc, iframeDoc, '', options);
                      iframeID = getUniqueID();
                      targetIframeList[i].setAttribute('tltid', iframeID);
                      iframeCapture.tltid = iframeID;
                      urlInfo = utils.getOriginAndPath(iframeDoc.location);
                      iframeCapture.host = urlInfo.origin;
                      iframeCapture.url = urlInfo.path;
                      iframeCapture.charset = iframeDoc.characterSet || iframeDoc.charset;
                      iframeSrc = targetIframeList[i].getAttribute('src');
                      if (!iframeSrc) {
                        iframeSrc = iframeWindow.location.href;
                        targetIframeList[i].setAttribute('src', iframeSrc);
                      }
                      returnObject.frames = returnObject.frames.concat(iframeCapture.frames);
                      delete iframeCapture.frames;
                      returnObject.frames.push(iframeCapture);
                    }
                  } catch (e) {}
            }
            return returnObject;
          }
          function getCapturedLength (captureObj) {
            var i,
              j,
              len,
              attrLen,
              attrRecord,
              diffRecord,
              totalLength = 0;
            if (!captureObj) return totalLength;
            if (captureObj.root) {
              totalLength += captureObj.root.length;
              if (captureObj.frames)
                for (i = 0, len = captureObj.frames.length; i < len; i += 1)
                  if (captureObj.frames[i].root) totalLength += captureObj.frames[i].root.length;
            } else if (captureObj.diffs)
              for (i = 0, len = captureObj.diffs.length; i < len; i += 1) {
                diffRecord = captureObj.diffs[i];
                totalLength += diffRecord.xpath.length;
                if (diffRecord.root) totalLength += diffRecord.root.length;
                else if (diffRecord.attributes)
                  for (j = 0, attrLen = diffRecord.attributes.length; j < attrLen; j += 1) {
                    attrRecord = diffRecord.attributes[j];
                    totalLength += attrRecord.name.length;
                    if (attrRecord.value) totalLength += attrRecord.value.length;
                  }
              }
            return totalLength;
          }
          function consolidateMutationsWithAttributeChanges () {
            var i, j, len, parentTarget;
            for (
              i = 0, len = mutatedTargets.length;
              i < len && mutatedAttrTargets.length;
              i += 1
            ) {
              parentTarget = mutatedTargets[i];
              for (j = 0; j < mutatedAttrTargets.length; j += 1)
                if (mutatedAttrTargets[j].containedIn(parentTarget)) {
                  mutatedAttrTargets.splice(j, 1);
                  j -= 1;
                }
            }
          }
          function getFullDOM (doc, options) {
            var captureObj, urlInfo;
            captureObj = getDOMCapture(doc, doc, null, options);
            if (!captureObj) captureObj = {};
            captureObj.charset = doc.characterSet || doc.charset;
            urlInfo = utils.getOriginAndPath(doc.location);
            captureObj.host = urlInfo.origin;
            captureObj.url = urlInfo.path;
            return captureObj;
          }
          function getDOMDiff (options) {
            var i,
              len,
              returnObj = { fullDOM: false, diffs: [], attributeDiffs: {} },
              diff,
              target,
              targetXpath;
            consolidateTargets(mutatedTargets);
            consolidateMutationsWithAttributeChanges();
            for (i = 0, len = mutatedTargets.length; i < len; i += 1) {
              targetXpath = mutatedTargets[i];
              target = browserBaseService.getNodeFromID(targetXpath.xpath, -2);
              if (target === window.document.body) return getFullDOM(window.document, options);
              diff = getDOMCapture(window.document, target, targetXpath, options);
              diff.xpath = targetXpath.xpath;
              returnObj.diffs.push(diff);
            }
            function addAttributeDiffs (attribute, index) {
              if (!attribute || !attribute.name) return;
              returnObj.attributeDiffs[diff.xpath][attribute.name] = { value: attribute.value };
            }
            for (i = 0, len = mutatedAttrTargets.length; i < len; i += 1) {
              targetXpath = mutatedAttrTargets[i];
              diff = {
                xpath: hasAttr(targetXpath.attributes, 'id')
                  ? targetXpath.fullXpath
                  : targetXpath.xpath,
                attributes: removeOldAttrValues(targetXpath.attributes),
              };
              returnObj.diffs.push(diff);
              returnObj.attributeDiffs[diff.xpath] = {};
              utils.forEach(diff.attributes, addAttributeDiffs);
            }
            return returnObj;
          }
          dupNode = function (node) {
            var dup = null;
            if (isNodeValidForCapture(node)) {
              dup = node.cloneNode(true);
              if (!dup && node.documentElement) dup = node.documentElement.cloneNode(true);
            }
            return dup;
          };
          getDOMCapture = function (doc, root, rootXpath, options) {
            var rootCopy,
              frameCaptureObj,
              captureObj = {},
              serializedDOM,
              urlInfo;
            if (!doc || !root) return captureObj;
            rootCopy = dupNode(root, doc);
            if (!rootCopy) return captureObj;
            if (!!options.removeScripts) {
              removeTags(rootCopy, 'script');
              removeTags(rootCopy, 'noscript');
            }
            if (!!options.removeComments) removeNodes(rootCopy, 8);
            fixSelectLists(root, rootCopy);
            fixInputs(root, rootCopy);
            fixTextareas(root, rootCopy);
            rootCopy = messageService.applyPrivacyToNode(rootCopy, rootXpath, doc);
            if (!!options.captureFrames) frameCaptureObj = getFrames(root, rootCopy, options);
            if (frameCaptureObj) captureObj = utils.mixin(captureObj, frameCaptureObj);
            serializedDOM = (getDoctypeAsString(root) || '') + getHTMLText(rootCopy);
            captureObj.root = messageService.applyPrivacyPatterns(serializedDOM);
            return captureObj;
          };
          updateConfig = function () {
            configService = core.getService('config');
            initDOMCaptureService(configService.getServiceConfig('domCapture') || {});
          };
          return {
            init: function () {
              configService = core.getService('config');
              if (!isInitialized)
                initDOMCaptureService(configService.getServiceConfig('domCapture') || {});
              else;
            },
            destroy: function () {
              destroyDOMCaptureService();
            },
            observeWindow: function (win) {
              var i, len;
              if (!win) return;
              if (
                !utils.getValue(dcServiceConfig, 'options.captureFrames', false) &&
                !(win === window)
              )
                return;
              if (utils.indexOf(observedWindowList, win) === -1) observedWindowList.push(win);
            },
            captureDOM: function (root, options) {
              var i,
                len,
                captureObj = null,
                observedWindow,
                totalLength = 0;
              if (!isInitialized || utils.isLegacyIE) return captureObj;
              options = utils.mixin({}, dcServiceConfig.options, options);
              root = root || window.document;
              if (!fullDOMSent || !diffEnabled || forceFullDOM || options.forceFullDOM) {
                if (diffObserver) diffObserver.disconnect();
                captureObj = getFullDOM(root, options);
                captureObj.fullDOM = true;
                captureObj.forced = !!(forceFullDOM || options.forceFullDOM);
                fullDOMSent = true;
                if (diffObserver)
                  for (i = 0, len = observedWindowList.length; i < len; i += 1) {
                    observedWindow = observedWindowList[i];
                    try {
                      diffObserver.observe(observedWindow.document, diffObserverConfig);
                    } catch (e) {
                      observedWindowList.splice(i, 1);
                      len = observedWindowList.length;
                      i -= 1;
                    }
                  }
              } else {
                captureObj = getDOMDiff(options);
                captureObj.fullDOM = captureObj.diffs ? false : true;
              }
              if (diffEnabled) captureObj.mutationCount = mutationCount;
              clearMutationRecords();
              if (options.maxLength) {
                totalLength = getCapturedLength(captureObj);
                if (totalLength > options.maxLength)
                  captureObj = {
                    errorCode: 101,
                    error:
                      'Captured length (' +
                      totalLength +
                      ') exceeded limit (' +
                      options.maxLength +
                      ').',
                  };
              }
              return captureObj;
            },
          };
        });
        TLT.addService('encoder', function (core) {
          var encoderServiceConfig = {},
            configService = null,
            handleConfigUpdated = null,
            isInitialized = false;
          function getEncoder (type) {
            var encoder = null;
            if (!type) return encoder;
            encoder = encoderServiceConfig[type];
            if (encoder && typeof encoder.encode === 'string')
              encoder.encode = core.utils.access(encoder.encode);
            return encoder;
          }
          function initEncoderService (config) {
            encoderServiceConfig = config;
            configService.subscribe('configupdated', handleConfigUpdated);
            isInitialized = true;
          }
          function destroy () {
            configService.unsubscribe('configupdated', handleConfigUpdated);
            isInitialized = false;
          }
          handleConfigUpdated = function () {
            configService = core.getService('config');
            initEncoderService(configService.getServiceConfig('encoder') || {});
          };
          return {
            init: function () {
              configService = core.getService('config');
              if (!isInitialized)
                initEncoderService(configService.getServiceConfig('encoder') || {});
              else;
            },
            destroy: function () {
              destroy();
            },
            encode: function (data, type) {
              var encoder,
                result,
                returnObj = { data: null, encoding: null, error: null };
              if ((typeof data !== 'string' && !data) || !type) {
                returnObj.error = 'Invalid ' + (!data ? 'data' : 'type') + ' parameter.';
                return returnObj;
              }
              encoder = getEncoder(type);
              if (!encoder) {
                returnObj.error = 'Specified encoder (' + type + ') not found.';
                return returnObj;
              }
              if (typeof encoder.encode !== 'function') {
                returnObj.error =
                  'Configured encoder (' + type + ') encode method is not a function.';
                return returnObj;
              }
              try {
                result = encoder.encode(data);
              } catch (e) {
                returnObj.error = 'Encoding failed: ' + (e.name ? e.name + ' - ' : '') + e.message;
                return returnObj;
              }
              if (!result || core.utils.getValue(result, 'buffer', null) === null) {
                returnObj.error = 'Encoder (' + type + ') returned an invalid result.';
                return returnObj;
              }
              returnObj.data = result.buffer;
              returnObj.encoding = encoder.defaultEncoding;
              return returnObj;
            },
          };
        });
        TLT.addService('message', function (core) {
          var utils = core.utils,
            prevScreenviewOffsetTime = 0,
            screenviewOffsetTime = 0,
            count = 0,
            messageCount = 0,
            sessionStart = new Date(),
            browserBaseService = core.getService('browserBase'),
            browserService = core.getService('browser'),
            configService = core.getService('config'),
            config = configService.getServiceConfig('message') || {},
            windowHref = window.location.href,
            windowHostname = window.location.hostname,
            privacy = config.hasOwnProperty('privacy') ? config.privacy : [],
            privacyPatterns,
            privacyMasks = {},
            maskingCharacters = { lower: 'x', upper: 'X', numeric: '9', symbol: '@' },
            devicePixelRatio = parseFloat((window.devicePixelRatio || 1).toFixed(2)),
            screen = window.screen || {},
            screenWidth = screen.width || 0,
            screenHeight = screen.height || 0,
            deviceOrientation = browserBaseService.getNormalizedOrientation(),
            deviceWidth = !utils.isiOS
              ? screenWidth
              : Math.abs(deviceOrientation) === 90
              ? screenHeight
              : screenWidth,
            deviceHeight = !utils.isiOS
              ? screenHeight
              : Math.abs(deviceOrientation) === 90
              ? screenWidth
              : screenHeight,
            deviceToolbarHeight = window.screen
              ? window.screen.height - window.screen.availHeight
              : 0,
            startWidth = window.innerWidth || document.documentElement.clientWidth,
            startHeight = window.innerHeight || document.documentElement.clientHeight,
            isInitialized = false;
          function Message (event) {
            var key = '',
              timestamp = event.timestamp || new Date().getTime();
            delete event.timestamp;
            this.type = event.type;
            this.offset = timestamp - sessionStart.getTime();
            this.screenviewOffset = 0;
            if (event.type === 2) {
              prevScreenviewOffsetTime = screenviewOffsetTime;
              screenviewOffsetTime = timestamp;
              if (event.screenview.type === 'UNLOAD')
                this.screenviewOffset =
                  timestamp - (prevScreenviewOffsetTime || sessionStart.getTime());
            } else if (screenviewOffsetTime) this.screenviewOffset = timestamp - screenviewOffsetTime;
            if (!this.type) return;
            this.count = messageCount += 1;
            this.fromWeb = true;
            for (key in event) if (event.hasOwnProperty(key)) this[key] = event[key];
          }
          privacyMasks.PVC_MASK_EMPTY = function (value) {
            return '';
          };
          privacyMasks.PVC_MASK_BASIC = function (value) {
            var retMask = 'XXXXX';
            if (typeof value !== 'string') return '';
            return value.length ? retMask : '';
          };
          privacyMasks.PVC_MASK_TYPE = function (value) {
            var characters,
              i = 0,
              len = 0,
              retMask = '';
            if (typeof value !== 'string') return retMask;
            characters = value.split('');
            for (i = 0, len = characters.length; i < len; i += 1)
              if (utils.isNumeric(characters[i])) retMask += maskingCharacters.numeric;
              else if (utils.isUpperCase(characters[i])) retMask += maskingCharacters.upper;
              else if (utils.isLowerCase(characters[i])) retMask += maskingCharacters.lower;
              else retMask += maskingCharacters.symbol;
            return retMask;
          };
          privacyMasks.PVC_MASK_EMPTY.maskType = 1;
          privacyMasks.PVC_MASK_BASIC.maskType = 2;
          privacyMasks.PVC_MASK_TYPE.maskType = 3;
          privacyMasks.PVC_MASK_CUSTOM = { maskType: 4 };
          function maskStr (mask, str) {
            var filter = privacyMasks.PVC_MASK_BASIC;
            if (typeof str !== 'string') return str;
            if (!mask) filter = privacyMasks.PVC_MASK_BASIC;
            else if (mask.maskType === privacyMasks.PVC_MASK_EMPTY.maskType)
              filter = privacyMasks.PVC_MASK_EMPTY;
            else if (mask.maskType === privacyMasks.PVC_MASK_BASIC.maskType)
              filter = privacyMasks.PVC_MASK_BASIC;
            else if (mask.maskType === privacyMasks.PVC_MASK_TYPE.maskType)
              filter = privacyMasks.PVC_MASK_TYPE;
            else if (mask.maskType === privacyMasks.PVC_MASK_CUSTOM.maskType) {
              if (typeof mask.maskFunction === 'string') filter = utils.access(mask.maskFunction);
              else filter = mask.maskFunction;
              if (typeof filter !== 'function') filter = privacyMasks.PVC_MASK_BASIC;
            }
            return filter(str);
          }
          function applyMask (mask, state) {
            var prop;
            if (!mask || !state) return;
            for (prop in state)
              if (state.hasOwnProperty(prop))
                if (prop === 'value') state[prop] = maskStr(mask, state[prop]);
                else delete state[prop];
          }
          function matchesTarget (targets, target) {
            return utils.matchTarget(targets, target) !== -1;
          }
          function applyPrivacyPatterns (str) {
            var i, len, begin, duration, rule;
            if (!str) return '';
            for (i = 0, len = privacyPatterns.length; i < len; i += 1) {
              rule = privacyPatterns[i];
              rule.cRegex.lastIndex = 0;
              str = str.replace(rule.cRegex, rule.replacement);
            }
            return str;
          }
          function privacyFilter (target) {
            var i,
              len,
              exclude,
              mask,
              maskApplied = false,
              prevState,
              currState;
            if (!target || (!target.currState && !target.prevState)) return target;
            prevState = target.prevState;
            currState = target.currState;
            for (i = 0, len = privacy.length; i < len; i += 1) {
              mask = privacy[i];
              exclude = utils.getValue(mask, 'exclude', false);
              if (matchesTarget(mask.targets, target) !== exclude) {
                applyMask(mask, prevState);
                applyMask(mask, currState);
                maskApplied = true;
                break;
              }
            }
            if (!maskApplied) {
              if (prevState && prevState.value)
                prevState.value = applyPrivacyPatterns(prevState.value);
              if (currState && currState.value)
                currState.value = applyPrivacyPatterns(currState.value);
            }
            return target;
          }
          function applyPrivacyToMessage (message) {
            if (!message || !message.target) return message;
            privacyFilter(message.target);
            return message;
          }
          function maskElement (element, mask) {
            var i, len, maskedValue, option;
            if (!mask || !element) return;
            if (element.value) {
              maskedValue = maskStr(mask, element.value);
              element.setAttribute('value', maskedValue);
              element.value = maskedValue;
            }
            if (element.checked) element.removeAttribute('checked');
            if (utils.getTagName(element) === 'select') {
              element.selectedIndex = -1;
              for (i = 0, len = element.options.length; i < len; i += 1) {
                option = element.options[i];
                option.removeAttribute('selected');
                option.selected = false;
              }
            } else if (utils.getTagName(element) === 'textarea') element.textContent = element.value;
          }
          function applyRegexAndXpathPrivacyRules (
            regexAndXpathRules,
            root,
            rootXpath,
            doc,
            excludedElements,
            excludeMask
          ) {
            var i,
              j,
              k,
              len,
              element,
              elementInfo,
              elements = [],
              elementXpath,
              exclude,
              maskedValue,
              rule,
              target,
              qr;
            if (!regexAndXpathRules.length && !excludedElements.length && !excludeMask) return [];
            qr = browserService.queryAll('input, select, textarea', root);
            if (!qr || !qr.length) return [];
            for (i = 0, len = excludedElements.length; i < len; i += 1) {
              j = qr.indexOf(excludedElements[i]);
              if (j !== -1) qr.splice(j, 1);
            }
            if (regexAndXpathRules.length)
              for (i = 0, len = qr.length, elements = []; i < len; i += 1)
                if (qr[i].value) {
                  elementInfo = browserBaseService.ElementData.prototype.examineID(qr[i]);
                  if (elementInfo.idType === -2) {
                    elementXpath = new browserBaseService.Xpath(qr[i]);
                    elementXpath.applyPrefix(rootXpath);
                    elementInfo.id = elementXpath.xpath;
                  }
                  elements.push({
                    id: elementInfo.id,
                    idType: elementInfo.idType,
                    element: qr[i],
                  });
                }
            for (i = 0, len = regexAndXpathRules.length; i < len; i += 1) {
              rule = privacy[regexAndXpathRules[i].ruleIndex];
              exclude = utils.getValue(rule, 'exclude', false);
              target = rule.targets[regexAndXpathRules[i].targetIndex];
              if (typeof target.id === 'string' && target.idType === -2)
                for (j = 0; j < elements.length; j += 1) {
                  if (elements[j].idType === target.idType && elements[j].id === target.id)
                    if (!exclude) {
                      element = elements[j].element;
                      maskElement(element, rule);
                    } else {
                      k = qr.indexOf(element);
                      qr.splice(k, 1);
                    }
                }
              else
                for (j = 0; j < elements.length; j += 1) {
                  target.cRegex.lastIndex = 0;
                  if (elements[j].idType === target.idType && target.cRegex.test(elements[j].id)) {
                    element = elements[j].element;
                    if (!exclude) maskElement(element, rule);
                    else {
                      k = qr.indexOf(element);
                      qr.splice(k, 1);
                    }
                  }
                }
            }
            if (excludeMask)
              for (i = 0, len = qr.length; i < len; i += 1) maskElement(qr[i], excludeMask);
          }
          function applyPrivacyToNode (root, rootXpath, doc) {
            var i,
              j,
              k,
              element,
              exclude,
              excludedElements = [],
              excludeMask,
              len,
              mask,
              maskedValue,
              qr,
              qrLen,
              regexAndXpathRules = [],
              target,
              targets,
              targetsLen;
            if (!root || !doc) return null;
            for (i = 0, len = privacy.length; i < len; i += 1) {
              mask = privacy[i];
              exclude = utils.getValue(mask, 'exclude', false);
              if (exclude) excludeMask = mask;
              targets = mask.targets;
              for (j = 0, targetsLen = targets.length; j < targetsLen; j += 1) {
                target = targets[j];
                if (typeof target === 'string') {
                  qr = browserService.queryAll(target, root);
                  if (!exclude)
                    for (k = 0, qrLen = qr.length; k < qrLen; k += 1) {
                      element = qr[k];
                      maskElement(element, mask);
                    }
                  else excludedElements = excludedElements.concat(qr);
                } else if (typeof target.id === 'string')
                  switch (target.idType) {
                    case -1:
                    case -3:
                      element = browserBaseService.getNodeFromID(target.id, target.idType, root);
                      if (!exclude) maskElement(element, mask);
                      else excludedElements.push(element);
                      break;
                    case -2:
                      regexAndXpathRules.push({ ruleIndex: i, targetIndex: j, exclude: exclude });
                      break;
                    default:
                      break;
                  }
                else regexAndXpathRules.push({ ruleIndex: i, targetIndex: j, exclude: exclude });
              }
            }
            applyRegexAndXpathPrivacyRules(
              regexAndXpathRules,
              root,
              rootXpath,
              doc,
              excludedElements,
              excludeMask
            );
            return root;
          }
          function isPrivacyMatched (target) {
            var i,
              len,
              mask,
              retVal = false;
            if (!target) return retVal;
            for (i = 0, len = privacy.length; i < len; i += 1) {
              mask = privacy[i];
              if (matchesTarget(mask.targets, target)) {
                retVal = true;
                break;
              }
            }
            return retVal;
          }
          function updateConfig () {
            var i, j, len, rule, rulesLen, target, targets, targetsLen;
            configService = core.getService('config');
            config = configService.getServiceConfig('message') || {};
            privacy = config.privacy || [];
            privacyPatterns = config.privacyPatterns || [];
            for (i = 0, rulesLen = privacy.length; i < rulesLen; i += 1) {
              rule = privacy[i];
              targets = rule.targets;
              for (j = 0, targetsLen = targets.length; j < targetsLen; j += 1) {
                target = targets[j];
                if (typeof target === 'object') {
                  if (typeof target.idType === 'string') target.idType = +target.idType;
                  if (typeof target.id === 'object')
                    target.cRegex = new RegExp(target.id.regex, target.id.flags);
                }
              }
            }
            for (len = privacyPatterns.length, i = len - 1; i >= 0; i -= 1) {
              rule = privacyPatterns[i];
              if (typeof rule.pattern === 'object')
                rule.cRegex = new RegExp(rule.pattern.regex, rule.pattern.flags);
              else privacyPatterns.splice(i, 1);
            }
          }
          function initMessageService () {
            if (configService.subscribe) configService.subscribe('configupdated', updateConfig);
            updateConfig();
            isInitialized = true;
          }
          function destroy () {
            configService.unsubscribe('configupdated', updateConfig);
            isInitialized = false;
          }
          return {
            init: function () {
              if (!isInitialized) initMessageService();
              else;
            },
            destroy: function () {
              destroy();
            },
            applyPrivacyToNode: applyPrivacyToNode,
            applyPrivacyToMessage: applyPrivacyToMessage,
            applyPrivacyToTarget: privacyFilter,
            applyPrivacyPatterns: applyPrivacyPatterns,
            isPrivacyMatched: isPrivacyMatched,
            createMessage: function (event) {
              if (typeof event.type === 'undefined')
                throw new TypeError('Invalid queueEvent given!');
              return applyPrivacyToMessage(new Message(event));
            },
            wrapMessages: function (messages) {
              var messagePackage = {
                  messageVersion: '9.0.0.0',
                  serialNumber: (count += 1),
                  sessions: [
                    {
                      id: core.getPageId(),
                      startTime: sessionStart.getTime(),
                      timezoneOffset: sessionStart.getTimezoneOffset(),
                      messages: messages,
                      clientEnvironment: {
                        webEnvironment: {
                          libVersion: '5.5.0.1814',
                          domain: windowHostname,
                          page: windowHref,
                          referrer: document.referrer,
                          screen: {
                            devicePixelRatio: devicePixelRatio,
                            deviceWidth: deviceWidth,
                            deviceHeight: deviceHeight,
                            deviceToolbarHeight: deviceToolbarHeight,
                            width: startWidth,
                            height: startHeight,
                            orientation: deviceOrientation,
                          },
                        },
                      },
                    },
                  ],
                },
                webEnvScreen = messagePackage.sessions[0].clientEnvironment.webEnvironment.screen;
              webEnvScreen.orientationMode = utils.getOrientationMode(webEnvScreen.orientation);
              return messagePackage;
            },
          };
        });
        TLT.addService('serializer', function (core) {
          function serializeToJSON (obj) {
            var str,
              key,
              len = 0;
            if (typeof obj !== 'object' || obj === null)
              switch (typeof obj) {
                case 'function':
                case 'undefined':
                  return 'null';
                case 'string':
                  return '"' + obj.replace(/"/g, '\\"') + '"';
                default:
                  return String(obj);
              }
            else if (Object.prototype.toString.call(obj) === '[object Array]') {
              str = '[';
              for (key = 0, len = obj.length; key < len; key += 1)
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  str += serializeToJSON(obj[key]) + ',';
            } else {
              str = '{';
              for (key in obj)
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  str = str.concat('"', key, '":', serializeToJSON(obj[key]), ',');
                  len += 1;
                }
            }
            if (len > 0) str = str.substring(0, str.length - 1);
            str += String.fromCharCode(str.charCodeAt(0) + 2);
            return str;
          }
          var configService = core.getService('config'),
            serialize = {},
            parse = {},
            defaultSerializers = {
              json: (function () {
                if (typeof window.JSON !== 'undefined')
                  return { serialize: window.JSON.stringify, parse: window.JSON.parse };
                return {
                  serialize: serializeToJSON,
                  parse: function (data) {
                    return eval('(' + data + ')');
                  },
                };
              })(),
            },
            updateConfig = null,
            isInitialized = false;
          function addObjectIfExist (paths, rootObj, propertyName) {
            var i, len, obj;
            paths = paths || [];
            for (i = 0, len = paths.length; i < len; i += 1) {
              obj = paths[i];
              if (typeof obj === 'string') obj = core.utils.access(obj);
              if (typeof obj === 'function') {
                rootObj[propertyName] = obj;
                break;
              }
            }
          }
          function checkParserAndSerializer () {
            var isParserAndSerializerInvalid;
            if (typeof serialize.json !== 'function' || typeof parse.json !== 'function')
              isParserAndSerializerInvalid = true;
            else {
              if (typeof parse.json('{"foo": "bar"}') === 'undefined')
                isParserAndSerializerInvalid = true;
              else isParserAndSerializerInvalid = parse.json('{"foo": "bar"}').foo !== 'bar';
              if (typeof parse.json('[1, 2]') === 'undefined') isParserAndSerializerInvalid = true;
              else {
                isParserAndSerializerInvalid =
                  isParserAndSerializerInvalid || parse.json('[1, 2]')[0] !== 1;
                isParserAndSerializerInvalid =
                  isParserAndSerializerInvalid || parse.json('[1,2]')[1] !== 2;
              }
              isParserAndSerializerInvalid =
                isParserAndSerializerInvalid || serialize.json({ foo: 'bar' }) !== '{"foo":"bar"}';
              isParserAndSerializerInvalid =
                isParserAndSerializerInvalid || serialize.json([1, 2]) !== '[1,2]';
            }
            return isParserAndSerializerInvalid;
          }
          function initSerializerService (config) {
            var format;
            for (format in config)
              if (config.hasOwnProperty(format)) {
                addObjectIfExist(config[format].stringifiers, serialize, format);
                addObjectIfExist(config[format].parsers, parse, format);
              }
            if (
              !(config.json && config.json.hasOwnProperty('defaultToBuiltin')) ||
              config.json.defaultToBuiltin === true
            ) {
              serialize.json = serialize.json || defaultSerializers.json.serialize;
              parse.json = parse.json || defaultSerializers.json.parse;
            }
            if (typeof serialize.json !== 'function' || typeof parse.json !== 'function')
              core.fail(
                "JSON parser and/or serializer not provided in the UIC config. Can't continue."
              );
            if (checkParserAndSerializer())
              core.fail('JSON stringification and parsing are not working as expected');
            if (configService) configService.subscribe('configupdated', updateConfig);
            isInitialized = true;
          }
          function destroy () {
            serialize = {};
            parse = {};
            if (configService) configService.unsubscribe('configupdated', updateConfig);
            isInitialized = false;
          }
          updateConfig = function () {
            configService = core.getService('config');
            initSerializerService(configService.getServiceConfig('serializer'));
          };
          return {
            init: function () {
              var ssConfig;
              if (!isInitialized) {
                ssConfig = configService ? configService.getServiceConfig('serializer') : {};
                initSerializerService(ssConfig);
              } else;
            },
            destroy: function () {
              destroy();
            },
            parse: function (data, type) {
              type = type || 'json';
              return parse[type](data);
            },
            serialize: function (data, type) {
              var serializedData;
              type = type || 'json';
              serializedData = serialize[type](data);
              return serializedData;
            },
          };
        });
        TLT.addModule('TLCookie', function (context) {
          var moduleConfig = {},
            sessionIDStorageTTL = 0,
            wcxCookieName = 'WCXSID',
            tltCookieName = 'TLTSID',
            visitorCookieName = 'CoreID6',
            wcxCookieValue,
            tltCookieValue,
            visitorCookieValue = null,
            tlAppKey,
            utils = context.utils;
          function generateTLTSID () {
            var dataSet = '123456789',
              tltsid =
                utils.getRandomString(1, dataSet) + utils.getRandomString(31, dataSet + '0');
            return tltsid;
          }
          function createTLTSIDCookie () {
            var cookieValue = generateTLTSID();
            utils.setCookie(tltCookieName, cookieValue);
            return utils.getCookieValue(tltCookieName);
          }
          function getVisitorCookie () {
            if (!window.cmRetrieveUserID) return;
            window.cmRetrieveUserID(function (id) {
              visitorCookieValue = id;
            });
          }
          function getSIDFromStorage (sidKey) {
            var expires, items, itemVal, sidValue;
            if (!localStorage || !sidKey) return;
            itemVal = localStorage.getItem(sidKey);
            if (itemVal) {
              items = itemVal.split('|');
              expires = parseInt(items[0], 10);
              if (Date.now() > expires) localStorage.removeItem(sidKey);
              else sidValue = items[1];
            }
            return sidValue;
          }
          function setSIDInStorage (sidKey, sidValue) {
            var expires;
            if (!localStorage || !sidKey) return;
            sidValue = sidValue || generateTLTSID();
            expires = Date.now() + sessionIDStorageTTL;
            localStorage.setItem(sidKey, expires + '|' + sidValue);
            return getSIDFromStorage(sidKey);
          }
          function processConfig (config) {
            var reqHeaders = [],
              sessionIDUsesCookie = utils.getValue(config, 'sessionIDUsesCookie', true),
              sessionIDUsesStorage = utils.getValue(config, 'sessionIDUsesStorage', false);
            if (config.tlAppKey) {
              tlAppKey = config.tlAppKey;
              reqHeaders.push({ name: 'X-Tealeaf-SaaS-AppKey', value: tlAppKey });
            }
            if (config.visitorCookieName) visitorCookieName = config.visitorCookieName;
            if (config.wcxCookieName) wcxCookieName = config.wcxCookieName;
            wcxCookieValue = utils.getCookieValue(wcxCookieName);
            if (wcxCookieValue) reqHeaders.push({ name: 'X-WCXSID', value: wcxCookieValue });
            if (config.sessionizationCookieName) tltCookieName = config.sessionizationCookieName;
            if (sessionIDUsesStorage) {
              sessionIDStorageTTL = utils.getValue(config, 'sessionIDStorageTTL', 600000);
              tltCookieValue = getSIDFromStorage(tltCookieName);
            }
            if (!tltCookieValue && sessionIDUsesCookie)
              tltCookieValue = utils.getCookieValue(tltCookieName);
            if (!tltCookieValue)
              if (wcxCookieValue) tltCookieValue = wcxCookieValue;
              else {
                if (sessionIDUsesStorage) tltCookieValue = setSIDInStorage(tltCookieName);
                if (!tltCookieValue && sessionIDUsesCookie) tltCookieValue = createTLTSIDCookie();
              }
            if (!tltCookieValue) tltCookieValue = 'Check7UIC7Cookie7Configuration77';
            reqHeaders.push({ name: 'X-Tealeaf-SaaS-TLTSID', value: tltCookieValue });
            if (reqHeaders.length)
              TLT.registerBridgeCallbacks([
                {
                  enabled: true,
                  cbType: 'addRequestHeaders',
                  cbFunction: function () {
                    return reqHeaders;
                  },
                },
              ]);
          }
          function isCookieWhitelisted (cookieName) {
            var i,
              len,
              result = false,
              rule,
              whitelist = moduleConfig.appCookieWhitelist;
            if (!whitelist || !whitelist.length) return result;
            for (i = 0, len = whitelist.length; i < len && !result; i += 1) {
              rule = whitelist[i];
              if (rule.regex) {
                if (!rule.cRegex) rule.cRegex = new RegExp(rule.regex, rule.flags);
                rule.cRegex.lastIndex = 0;
                result = rule.cRegex.test(cookieName);
              } else result = rule === cookieName;
            }
            return result;
          }
          function postAppCookies () {
            var i,
              j,
              len,
              appCookies = {},
              cookie,
              cookies = document.cookie,
              cookieList = [],
              cookieName = '',
              cookieValue = '';
            if (!cookies) return;
            cookieList = cookies.split('; ');
            for (i = 0, len = cookieList.length; i < len; i += 1) {
              cookie = cookieList[i];
              j = cookie.indexOf('=');
              if (j >= 0)
                try {
                  cookieName = decodeURIComponent(cookie.substr(0, j));
                } catch (e1) {
                  cookieName = cookie.substr(0, j);
                }
              cookieValue = cookie.substr(j + 1);
              if (isCookieWhitelisted(cookieName))
                try {
                  appCookies[cookieName] = decodeURIComponent(cookieValue);
                } catch (e2) {
                  appCookies[cookieName] = cookieValue;
                }
            }
            if (visitorCookieValue && !appCookies[visitorCookieName])
              appCookies[visitorCookieName] = visitorCookieValue;
            context.post({ type: 14, cookies: appCookies });
          }
          return {
            init: function () {
              moduleConfig = context.getConfig() || {};
              processConfig(moduleConfig);
              getVisitorCookie();
            },
            destroy: function () {
              if (moduleConfig.sessionIDUsesStorage)
                setSIDInStorage(tltCookieName, tltCookieValue);
            },
            onevent: function (webEvent) {
              switch (webEvent.type) {
                case 'screenview_load':
                  if (utils.getValue(moduleConfig, 'appCookieWhitelist.length', 0)) {
                    getVisitorCookie();
                    postAppCookies();
                  }
                  break;
                default:
                  break;
              }
            },
          };
        });
        if (TLT && typeof TLT.addModule === 'function')
          TLT.addModule('overstat', function (context) {
            var utils = context.utils,
              eventMap = {},
              configDefaults = {
                updateInterval: 250,
                hoverThresholdMin: 1000,
                hoverThresholdMax: 2 * 60 * 1000,
                gridCellMaxX: 10,
                gridCellMaxY: 10,
                gridCellMinWidth: 20,
                gridCellMinHeight: 20,
              },
              MAX_ITERATIONS = 50;
            function getConfigValue (key) {
              var overstatConfig = context.getConfig() || {},
                value = overstatConfig[key];
              return typeof value === 'number' ? value : configDefaults[key];
            }
            function postUIEvent (hoverEvent, options) {
              var target = utils.getValue(hoverEvent, 'webEvent.target', {}),
                tagName = utils.getValue(target, 'element.tagName') || '',
                type =
                  tagName.toLowerCase() === 'input' ? utils.getValue(target, 'element.type') : '',
                tlType = utils.getTlType(target),
                uiEvent = {
                  type: 9,
                  event: {
                    hoverDuration: hoverEvent.hoverDuration,
                    hoverToClick: utils.getValue(options, 'hoverToClick'),
                  },
                  target: {
                    id: target.id || '',
                    idType: target.idType || '',
                    name: target.name || '',
                    tlType: tlType,
                    type: tagName,
                    subType: type,
                    position: {
                      width: utils.getValue(target, 'element.offsetWidth', 0),
                      height: utils.getValue(target, 'element.offsetHeight', 0),
                      relXY: hoverEvent.relXY,
                    },
                  },
                };
              if (typeof uiEvent.target.id === undefined || uiEvent.target.id === '') return;
              context.post(uiEvent);
            }
            function getNativeNode (node) {
              if (node && !node.nodeType && node.element) node = node.element;
              return node;
            }
            function stopNode (node) {
              node = getNativeNode(node);
              return (
                !node || node === document.body || node === document.html || node === document
              );
            }
            function getParent (node) {
              node = getNativeNode(node);
              if (!node) return null;
              return node.parentNode;
            }
            function getOffsetParent (node) {
              node = getNativeNode(node);
              if (!node) return null;
              return node.offsetParent || node.parentElement || getParent(node);
            }
            function isChildOf (root, node) {
              var idx = 0;
              if (!node || node === root) return false;
              node = getParent(node);
              while (!stopNode(node) && idx++ < MAX_ITERATIONS) {
                if (node === root) return true;
                node = getParent(node);
              }
              if (idx >= MAX_ITERATIONS) utils.clog('Overstat isChildOf() hit iterations limit');
              return false;
            }
            function getNativeEvent (e) {
              if (e.nativeEvent) e = e.nativeEvent;
              return e;
            }
            function getNativeTarget (e) {
              return getNativeEvent(e).target;
            }
            function getNodeType (node) {
              node = getNativeNode(node);
              if (!node) return -1;
              return node.nodeType || -1;
            }
            function getNodeTagName (node) {
              node = getNativeNode(node);
              if (!node) return '';
              return node.tagName ? node.tagName.toUpperCase() : '';
            }
            function stopEventPropagation (e) {
              if (!e) return;
              if (e.nativeEvent) e = e.nativeEvent;
              if (e.stopPropagation) e.stopPropagation();
              else if (e.cancelBubble) e.cancelBubble();
            }
            function ignoreNode (node) {
              var tagName = getNodeTagName(node);
              return (
                getNodeType(node) !== 1 ||
                tagName === 'TR' ||
                tagName === 'TBODY' ||
                tagName === 'THEAD'
              );
            }
            function getXPathFromNode (node) {
              if (!node) return '';
              if (node.xPath) return node.xPath;
              node = getNativeNode(node);
              return context.getXPathFromNode(node);
            }
            function callHoverEventMethod (key, methodName) {
              var hEvent = eventMap[key];
              if (hEvent && hEvent[methodName]) return hEvent[methodName]();
            }
            function HoverEvent (dm, gx, gy, webEvent) {
              this.xPath = dm !== null ? getXPathFromNode(dm) : '';
              this.domNode = dm;
              this.hoverDuration = 0;
              this.hoverUpdateTime = 0;
              this.gridX = Math.max(gx, 0);
              this.gridY = Math.max(gy, 0);
              this.parentKey = '';
              this.updateTimer = -1;
              this.disposed = false;
              this.childKeys = {};
              this.webEvent = webEvent;
              this.getKey = function () {
                return this.xPath + ':' + this.gridX + ',' + this.gridY;
              };
              this.update = function () {
                var curTime = new Date().getTime(),
                  key = this.getKey();
                if (this.hoverUpdateTime !== 0)
                  this.hoverDuration += curTime - this.hoverUpdateTime;
                this.hoverUpdateTime = curTime;
                clearTimeout(this.updateTimer);
                this.updateTimer = setTimeout(function () {
                  callHoverEventMethod(key, 'update');
                }, getConfigValue('updateInterval'));
              };
              this.dispose = function (leaveClone) {
                clearTimeout(this.updateTimer);
                delete eventMap[this.getKey()];
                this.disposed = true;
                if (leaveClone) {
                  var cloneEvt = this.clone();
                  eventMap[cloneEvt.getKey()] = cloneEvt;
                  cloneEvt.update();
                }
              };
              this.process = function (wasClicked) {
                clearTimeout(this.updateTimer);
                if (this.disposed) return false;
                var addedToQueue = false,
                  hEvent = this,
                  key = null,
                  idx = 0;
                if (this.hoverDuration >= getConfigValue('hoverThresholdMin')) {
                  this.hoverDuration = Math.min(
                    this.hoverDuration,
                    getConfigValue('hoverThresholdMax')
                  );
                  addedToQueue = true;
                  postUIEvent(this, { hoverToClick: !!wasClicked });
                  while (typeof hEvent !== 'undefined' && idx++ < MAX_ITERATIONS) {
                    hEvent.dispose(wasClicked);
                    hEvent = eventMap[hEvent.parentKey];
                  }
                  if (idx >= MAX_ITERATIONS) utils.clog('Overstat process() hit iterations limit');
                } else this.dispose(wasClicked);
                return addedToQueue;
              };
              this.clone = function () {
                var cloneEvent = new HoverEvent(this.domNode, this.gridX, this.gridY);
                cloneEvent.parentKey = this.parentKey;
                return cloneEvent;
              };
            }
            function createHoverEvent (node, x, y, webEvt) {
              return new HoverEvent(node, x, y, webEvt);
            }
            function calculateNodeOffset (node) {
              if (node && node.position) return { x: node.position.x, y: node.position.y };
              node = getNativeNode(node);
              var boundingRect =
                  node && node.getBoundingClientRect ? node.getBoundingClientRect() : null,
                offsetX = boundingRect ? boundingRect.left : node ? node.offsetLeft : 0,
                offsetY = boundingRect ? boundingRect.top : node ? node.offsetHeight : 0,
                lastOffsetX = offsetX,
                lastOffsetY = offsetY,
                offsetDiffX = 0,
                offsetDiffY = 0,
                curNode = getOffsetParent(node),
                idx = 0;
              while (curNode && idx++ < MAX_ITERATIONS) {
                if (stopNode(curNode)) break;
                offsetDiffX = curNode.offsetLeft - (curNode.scrollLeft || 0);
                offsetDiffY = curNode.offsetTop - (curNode.scrollTop || 0);
                if (offsetDiffX !== lastOffsetX || offsetDiffY !== lastOffsetY) {
                  offsetX += offsetDiffX;
                  offsetY += offsetDiffY;
                  lastOffsetX = offsetDiffX;
                  lastOffsetY = offsetDiffY;
                }
                curNode = getOffsetParent(curNode);
              }
              if (idx >= MAX_ITERATIONS)
                utils.clog('Overstat calculateNodeOffset() hit iterations limit');
              if (isNaN(offsetX)) offsetX = 0;
              if (isNaN(offsetY)) offsetY = 0;
              return { x: offsetX, y: offsetY };
            }
            function calculateRelativeCursorPos (node, cursorX, cursorY) {
              node = getNativeNode(node);
              var nodeOffset = calculateNodeOffset(node),
                offsetX = cursorX - nodeOffset.x,
                offsetY = cursorY - nodeOffset.y;
              if (!isFinite(offsetX)) offsetX = 0;
              if (!isFinite(offsetY)) offsetY = 0;
              return { x: offsetX, y: offsetY };
            }
            function formatRelXY (x, y) {
              x = Math.floor(Math.min(Math.max(x, 0), 1) * 100) / 100;
              y = Math.floor(Math.min(Math.max(y, 0), 1) * 100) / 100;
              return x + ',' + y;
            }
            function calculateGridCell (node, offsetX, offsetY) {
              node = getNativeNode(node);
              var boundingRect = node.getBoundingClientRect ? node.getBoundingClientRect() : null,
                oWidth = boundingRect ? boundingRect.width : node.offsetWidth,
                oHeight = boundingRect ? boundingRect.height : node.offsetHeight,
                cellWidth =
                  oWidth && oWidth > 0
                    ? Math.max(
                        oWidth / getConfigValue('gridCellMaxX'),
                        getConfigValue('gridCellMinWidth')
                      )
                    : getConfigValue('gridCellMinWidth'),
                cellHeight =
                  oHeight && oHeight > 0
                    ? Math.max(
                        oHeight / getConfigValue('gridCellMaxY'),
                        getConfigValue('gridCellMinHeight')
                      )
                    : getConfigValue('gridCellMinHeight'),
                cellX = Math.floor(offsetX / cellWidth),
                cellY = Math.floor(offsetY / cellHeight),
                xVal = oWidth > 0 ? offsetX / oWidth : 0,
                yVal = oHeight > 0 ? offsetY / oHeight : 0,
                relXYVal = '';
              if (!isFinite(cellX)) cellX = 0;
              if (!isFinite(cellY)) cellY = 0;
              relXYVal = formatRelXY(xVal, yVal);
              return { x: cellX, y: cellY, relXY: relXYVal };
            }
            function cleanupHoverEvents (curEvent) {
              var hEvent = curEvent,
                curKey = curEvent.getKey(),
                allowedKeyMap = {},
                key = null,
                childKey = null,
                addedToQueue = false,
                idx = 0;
              allowedKeyMap[curKey] = true;
              while (typeof hEvent !== 'undefined' && idx++ < MAX_ITERATIONS) {
                allowedKeyMap[hEvent.parentKey] = true;
                if (hEvent.parentKey === '' || hEvent.parentKey === hEvent.getKey()) break;
                if (idx >= MAX_ITERATIONS)
                  utils.clog('Overstat cleanupHoverEvents() hit iterations limit');
                hEvent = eventMap[hEvent.parentKey];
              }
              for (key in eventMap)
                if (eventMap.hasOwnProperty(key) && !allowedKeyMap[key]) {
                  hEvent = eventMap[key];
                  if (hEvent)
                    if (!addedToQueue) addedToQueue = hEvent.process();
                    else hEvent.dispose();
                }
            }
            function processEventsByDomNode (eventNode, keyToIgnore) {
              var hEvent = null,
                key = null,
                addedToQueue = false;
              for (key in eventMap)
                if (eventMap.hasOwnProperty(key)) {
                  hEvent = eventMap[key];
                  if (hEvent && hEvent.domNode === eventNode && hEvent.getKey() !== keyToIgnore)
                    if (!addedToQueue) addedToQueue = hEvent.process();
                    else hEvent.dispose();
                }
            }
            function hoverHandler (e, node, isParent) {
              if (!node) node = e.target;
              if (stopNode(node)) return null;
              if (utils.isiOS || utils.isAndroid) return null;
              var rPos, gPos, hEvent, key, parentKey, parentEvent, offsetParent;
              if (!ignoreNode(node)) {
                rPos = calculateRelativeCursorPos(node, e.position.x, e.position.y);
                gPos = calculateGridCell(node, rPos.x, rPos.y);
                hEvent = new HoverEvent(node, gPos.x, gPos.y, e);
                hEvent.relXY = gPos.relXY;
                key = hEvent.getKey();
                if (eventMap[key]) hEvent = eventMap[key];
                else eventMap[key] = hEvent;
                hEvent.update();
                if (!isParent) {
                  offsetParent = getOffsetParent(node);
                  if (offsetParent) {
                    parentEvent = hoverHandler(e, offsetParent, true);
                    if (parentEvent !== null) {
                      parentKey = parentEvent.getKey();
                      key = hEvent.getKey();
                      if (key !== parentKey) hEvent.parentKey = parentKey;
                    }
                  }
                  cleanupHoverEvents(hEvent);
                }
              } else hEvent = hoverHandler(e, getOffsetParent(node), isParent);
              return hEvent;
            }
            function leaveHandler (e) {
              e = getNativeEvent(e);
              if (isChildOf(e.target, e.relatedTarget)) return;
              processEventsByDomNode(e.target);
            }
            function clickHandler (e) {
              var hEvent = null,
                key = null,
                addedToQueue = false;
              for (key in eventMap)
                if (eventMap.hasOwnProperty(key)) {
                  hEvent = eventMap[key];
                  if (hEvent)
                    if (!addedToQueue) addedToQueue = hEvent.process(true);
                    else hEvent.dispose();
                }
            }
            function submitHandler (e) {
              context.performFormCompletion(true);
            }
            function handleEvent (e) {
              var targetId = utils.getValue(e, 'target.id');
              if (!targetId) return;
              switch (e.type) {
                case 'mousemove':
                  hoverHandler(e);
                  break;
                case 'mouseout':
                  leaveHandler(e);
                  break;
                case 'click':
                  clickHandler(e);
                  break;
                case 'submit':
                  submitHandler(e);
                  break;
                default:
                  break;
              }
            }
            return {
              init: function () {},
              destroy: function () {
                var key, i;
                for (key in eventMap)
                  if (eventMap.hasOwnProperty(key)) {
                    eventMap[key].dispose();
                    delete eventMap[key];
                  }
              },
              onevent: function (event) {
                if (typeof event !== 'object' || !event.type) return;
                handleEvent(event);
              },
              onmessage: function (msg) {},
              createHoverEvent: createHoverEvent,
              cleanupHoverEvents: cleanupHoverEvents,
              eventMap: eventMap,
            };
          });
        else;
        if (TLT && typeof TLT.addModule === 'function')
          TLT.addModule('performance', function (context) {
            var moduleState = { loadReceived: false, unloadReceived: false, perfEventSent: false },
              calculatedRenderTime = 0,
              config,
              utils = context.utils;
            function isFiltered (prop, filter) {
              if (typeof prop !== 'string') return false;
              if (!filter || typeof filter !== 'object') return false;
              return filter[prop] === true;
            }
            function parseTiming (timing, filter) {
              var epoch = 0,
                normalizedTiming = {},
                prop = '',
                value = 0;
              if (!timing || typeof timing !== 'object' || !timing.navigationStart) return {};
              epoch = timing.navigationStart;
              for (prop in timing)
                if (
                  Object.prototype.hasOwnProperty.call(timing, prop) ||
                  typeof timing[prop] === 'number'
                )
                  if (!isFiltered(prop, filter)) {
                    value = timing[prop];
                    if (typeof value === 'number' && value && prop !== 'navigationStart')
                      normalizedTiming[prop] = value - epoch;
                    else normalizedTiming[prop] = value;
                  }
              return normalizedTiming;
            }
            function getRenderTime (timing) {
              var renderTime = 0,
                startTime,
                endTime;
              if (timing) {
                startTime =
                  timing.responseEnd > 0 && timing.responseEnd < timing.domLoading
                    ? timing.responseEnd
                    : timing.domLoading;
                endTime = timing.loadEventStart;
                if (utils.isNumeric(startTime) && utils.isNumeric(endTime) && endTime > startTime)
                  renderTime = endTime - startTime;
              }
              return renderTime;
            }
            function processLoadEvent (event) {
              var startTime = context.getStartTime();
              if (event.timestamp > startTime && !calculatedRenderTime)
                calculatedRenderTime = event.timestamp - startTime;
            }
            function postPerformanceEvent (window) {
              const $___old_b7f60eb47e1f7f53 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_b7f60eb47e1f7f53)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_e71ee3f8b21bfa35.performance
                  ));
                return function () {
                  var navType = 'UNKNOWN',
                    queueEvent = { type: 7, performance: {} },
                    navigation,
                    performance,
                    timing;
                  if (!window || moduleState.perfEventSent) return;
                  performance = window.performance || {};
                  timing = performance.timing;
                  navigation = performance.navigation;
                  if (timing) {
                    queueEvent.performance.timing = parseTiming(timing, config.filter);
                    queueEvent.performance.timing.renderTime = getRenderTime(timing);
                  } else if (config.calculateRenderTime)
                    queueEvent.performance.timing = {
                      renderTime: calculatedRenderTime,
                      calculated: true,
                    };
                  else return;
                  if (
                    config.renderTimeThreshold &&
                    queueEvent.performance.timing.renderTime > config.renderTimeThreshold
                  ) {
                    queueEvent.performance.timing.invalidRenderTime =
                      queueEvent.performance.timing.renderTime;
                    delete queueEvent.performance.timing.renderTime;
                  }
                  if (navigation) {
                    switch (navigation.type) {
                      case 0:
                        navType = 'NAVIGATE';
                        break;
                      case 1:
                        navType = 'RELOAD';
                        break;
                      case 2:
                        navType = 'BACKFORWARD';
                        break;
                      default:
                        navType = 'UNKNOWN';
                        break;
                    }
                    queueEvent.performance.navigation = {
                      type: navType,
                      redirectCount: navigation.redirectCount,
                    };
                  }
                  context.post(queueEvent);
                  moduleState.perfEventSent = true;
                }.apply(this, arguments);
              } finally {
                if ($___old_b7f60eb47e1f7f53)
                  ({}.constructor.defineProperty(window, 'performance', $___old_b7f60eb47e1f7f53));
              }
            }
            return {
              init: function () {
                config = context.getConfig();
              },
              destroy: function () {
                config = null;
              },
              onevent: function (event) {
                if (typeof event !== 'object' || !event.type) return;
                switch (event.type) {
                  case 'load':
                    moduleState.loadReceived = true;
                    processLoadEvent(event);
                    setTimeout(function () {
                      if (context.isInitialized()) postPerformanceEvent(window);
                    }, utils.getValue(config, 'delay', 2000));
                    break;
                  case 'unload':
                    moduleState.unloadReceived = true;
                    if (!moduleState.perfEventSent) postPerformanceEvent(window);
                    break;
                  default:
                    break;
                }
              },
              onmessage: function (msg) {},
            };
          });
        else;
        TLT.addModule('replay', function (context) {
          var utils = context.utils,
            currOrientation = 0,
            savedTouch = { scale: 0, timestamp: 0 },
            pastEvents = {},
            lastEventId = null,
            tmpQueue = [],
            eventCounter = 0,
            firstDOMCaptureEventFlag = true,
            curClientState = null,
            pastClientState = null,
            onerrorHandled = false,
            errorCount = 0,
            visitOrder = '',
            lastVisit = '',
            pageLoadTime = new Date().getTime(),
            pageDwellTime = 0,
            prevWebEvent = null,
            viewEventStart = null,
            viewTimeStart = null,
            scrollViewStart = null,
            scrollViewEnd = null,
            nextScrollViewStart = null,
            viewPortXStart = 0,
            viewPortYStart = 0,
            inBetweenEvtsTimer = null,
            lastFocusEvent = { inFocus: false },
            lastClickEvent = null,
            replayConfig = context.getConfig() || {},
            viewPortWidthHeightLimit = utils.getValue(
              replayConfig,
              'viewPortWidthHeightLimit',
              10000
            ),
            deviceScale = 1,
            previousDeviceScale = 1,
            extendGetItem,
            gridValues = { cellMaxX: 10, cellMaxY: 10, cellMinWidth: 20, cellMinHeight: 20 };
          function resetVisitedCounts () {
            var control;
            for (control in pastEvents)
              if (pastEvents.hasOwnProperty(control)) pastEvents[control].visitedCount = 0;
          }
          function isTargetClickable (target) {
            var clickable = false,
              clickableInputTypes = '|button|image|submit|reset|',
              subType = null;
            if (typeof target !== 'object' || !target.type) return clickable;
            switch (target.type.toLowerCase()) {
              case 'input':
                subType = '|' + (target.subType || '') + '|';
                if (clickableInputTypes.indexOf(subType.toLowerCase()) === -1) clickable = false;
                else clickable = true;
                break;
              case 'select':
              case 'textarea':
                clickable = false;
                break;
              default:
                clickable = true;
                break;
            }
            return clickable;
          }
          function parentElements (node) {
            var parents = [];
            node = node.parentNode;
            while (node) {
              parents.push(node);
              node = node.parentNode;
            }
            return parents;
          }
          function getParentLink (parents) {
            return utils.some(parents, function (node) {
              var tagName = utils.getTagName(node);
              if (tagName === 'a' || tagName === 'button') return node;
              return null;
            });
          }
          function getTlEvent (webEvent) {
            var tlEvent = webEvent.type,
              target = webEvent.target;
            if (typeof tlEvent === 'string') tlEvent = tlEvent.toLowerCase();
            else tlEvent = 'unknown';
            if (tlEvent === 'blur') tlEvent = 'focusout';
            if (tlEvent === 'change')
              if (target.type === 'INPUT')
                switch (target.subType) {
                  case 'text':
                  case 'date':
                  case 'time':
                    tlEvent = target.subType + 'Change';
                    break;
                  default:
                    tlEvent = 'valueChange';
                    break;
                }
              else if (target.type === 'TEXTAREA') tlEvent = 'textChange';
              else tlEvent = 'valueChange';
            return tlEvent;
          }
          function scheduleDOMCapture (root, config, delay) {
            var dcid = null;
            if (!root) return dcid;
            config = config || {};
            config.eventOn = firstDOMCaptureEventFlag;
            firstDOMCaptureEventFlag = false;
            if (delay) {
              dcid = 'dcid-' + utils.getSerialNumber() + '.' + new Date().getTime() + 's';
              window.setTimeout(function () {
                config.dcid = dcid;
                context.performDOMCapture(root, config);
              }, delay);
            } else {
              delete config.dcid;
              dcid = context.performDOMCapture(root, config);
            }
            return dcid;
          }
          function addDOMCapture (eventType, target, screenviewName) {
            var i,
              j,
              capture = false,
              captureConfig = {},
              dcEnabled = false,
              dcTrigger,
              dcTriggerList,
              dcid = null,
              delay = 0,
              len,
              screenview,
              screenviews,
              screenviewsLen;
            if (!eventType || (!target && !screenviewName)) return dcid;
            if (!target && !(eventType === 'load' || eventType === 'unload')) return dcid;
            replayConfig = context.getConfig() || {};
            dcEnabled = utils.getValue(replayConfig, 'domCapture.enabled', false);
            if (!dcEnabled || utils.isLegacyIE) return dcid;
            dcTriggerList = utils.getValue(replayConfig, 'domCapture.triggers') || [];
            for (i = 0, len = dcTriggerList.length; !capture && i < len; i += 1) {
              dcTrigger = dcTriggerList[i];
              if (dcTrigger.event === eventType)
                if (eventType === 'load' || eventType === 'unload')
                  if (dcTrigger.screenviews) {
                    screenviews = dcTrigger.screenviews;
                    for (
                      j = 0, screenviewsLen = screenviews.length;
                      !capture && j < screenviewsLen;
                      j += 1
                    ) {
                      screenview = screenviews[j];
                      switch (typeof screenview) {
                        case 'object':
                          if (!screenview.cRegex)
                            screenview.cRegex = new RegExp(screenview.regex, screenview.flags);
                          screenview.cRegex.lastIndex = 0;
                          capture = screenview.cRegex.test(screenviewName);
                          break;
                        case 'string':
                          capture = screenview === screenviewName;
                          break;
                        default:
                          break;
                      }
                    }
                  } else capture = true;
                else if (dcTrigger.targets)
                  capture = -1 !== utils.matchTarget(dcTrigger.targets, target);
                else capture = true;
            }
            if (capture) {
              delay = dcTrigger.delay || (dcTrigger.event === 'load' ? 7 : 0);
              captureConfig.forceFullDOM = !!dcTrigger.fullDOMCapture;
              dcid = scheduleDOMCapture(window.document, captureConfig, delay);
            }
            return dcid;
          }
          function createQueueEvent (options) {
            var control,
              dcid,
              target = utils.getValue(options, 'webEvent.target', {}),
              targetType = target.type,
              targetSubtype = target.subType || '',
              tlType = utils.getTlType(target),
              parents = parentElements(utils.getValue(target, 'element')),
              parentLinkNode = null,
              relXY = utils.getValue(target, 'position.relXY'),
              eventSubtype = utils.getValue(options, 'webEvent.subType', null);
            control = {
              timestamp: utils.getValue(options, 'webEvent.timestamp', 0),
              type: 4,
              target: {
                id: target.id || '',
                idType: target.idType,
                name: target.name,
                tlType: tlType,
                type: targetType,
                position: {
                  width: utils.getValue(target, 'size.width'),
                  height: utils.getValue(target, 'size.height'),
                },
                currState: options.currState || null,
              },
              event: {
                tlEvent: getTlEvent(utils.getValue(options, 'webEvent')),
                type: utils.getValue(options, 'webEvent.type', 'UNKNOWN'),
              },
            };
            if (targetSubtype) control.target.subType = targetSubtype;
            if (relXY) control.target.position.relXY = relXY;
            if (typeof options.dwell === 'number' && options.dwell > 0)
              control.target.dwell = options.dwell;
            if (typeof options.visitedCount === 'number')
              control.target.visitedCount = options.visitedCount;
            if (typeof options.prevState !== 'undefined') control.prevState = options.prevState;
            if (eventSubtype) control.event.subType = eventSubtype;
            parentLinkNode = getParentLink(parents);
            control.target.isParentLink = !!parentLinkNode;
            if (parentLinkNode) {
              if (parentLinkNode.href) {
                control.target.currState = control.target.currState || {};
                control.target.currState.href =
                  control.target.currState.href || parentLinkNode.href;
              }
              if (parentLinkNode.value) {
                control.target.currState = control.target.currState || {};
                control.target.currState.value =
                  control.target.currState.value || parentLinkNode.value;
              }
              if (parentLinkNode.innerText || parentLinkNode.textContent) {
                control.target.currState = control.target.currState || {};
                control.target.currState.innerText = utils.trim(
                  control.target.currState.innerText ||
                    parentLinkNode.innerText ||
                    parentLinkNode.textContent
                );
              }
            }
            if (utils.isUndefOrNull(control.target.currState)) delete control.target.currState;
            if (utils.isUndefOrNull(control.target.name)) delete control.target.name;
            if (control.event.type !== 'click' || isTargetClickable(target)) {
              dcid = addDOMCapture(control.event.type, target);
              if (dcid) control.dcid = dcid;
            }
            return control;
          }
          function postUIEvent (queueEvent) {
            context.post(queueEvent);
          }
          function postEventQueue (queue) {
            var i = 0,
              j,
              len = queue.length,
              e1,
              e2,
              tmp,
              ignoredEvents = { mouseout: true, mouseover: true },
              results = [];
            for (i = 0; i < len; i += 1) {
              e1 = queue[i];
              if (!e1) continue;
              if (ignoredEvents[e1.event.type]) results.push(e1);
              else {
                for (j = i + 1; j < len && queue[j]; j += 1)
                  if (!ignoredEvents[queue[j].event.type]) break;
                if (j < len) {
                  e2 = queue[j];
                  if (e2 && e1.target.id === e2.target.id && e1.event.type !== e2.event.type) {
                    if (e1.event.type === 'click') {
                      tmp = e1;
                      e1 = e2;
                      e2 = tmp;
                    }
                    if (e2.event.type === 'click') {
                      e1.target.position = e2.target.position;
                      i += 1;
                    } else if (e2.event.type === 'blur') {
                      e1.target.dwell = e2.target.dwell;
                      e1.target.visitedCount = e2.target.visitedCount;
                      e1.focusInOffset = e2.focusInOffset;
                      e1.target.position = e2.target.position;
                      i += 1;
                    }
                    queue[j] = null;
                    queue[i] = e1;
                  }
                }
                results.push(queue[i]);
              }
            }
            for (e1 = results.shift(); e1; e1 = results.shift()) context.post(e1);
            queue.splice(0, queue.length);
          }
          if (typeof window.onerror !== 'function') {
            window.onerror = function (msg, url, line) {
              var errorMessage = null;
              if (typeof msg !== 'string') return;
              line = line || -1;
              errorMessage = { type: 6, exception: { description: msg, url: url, line: line } };
              errorCount += 1;
              context.post(errorMessage);
            };
            onerrorHandled = true;
          }
          function handleFocus (id, webEvent) {
            lastFocusEvent = webEvent;
            lastFocusEvent.inFocus = true;
            if (typeof pastEvents[id] === 'undefined') pastEvents[id] = {};
            pastEvents[id].focus = lastFocusEvent.dwellStart = Number(new Date());
            pastEvents[id].focusInOffset = viewTimeStart
              ? lastFocusEvent.dwellStart - Number(viewTimeStart)
              : -1;
            pastEvents[id].prevState = utils.getValue(webEvent, 'target.state');
            pastEvents[id].visitedCount = pastEvents[id].visitedCount + 1 || 1;
          }
          function addToTmpQueue (webEvent, id) {
            tmpQueue.push(
              createQueueEvent({
                webEvent: webEvent,
                id: id,
                currState: utils.getValue(webEvent, 'target.state'),
              })
            );
          }
          function handleBlur (id, webEvent) {
            var convertToBlur = false,
              dcid,
              lastQueueEvent,
              i = 0;
            if (
              typeof id === 'undefined' ||
              id === null ||
              typeof webEvent === 'undefined' ||
              webEvent === null
            )
              return;
            if (typeof pastEvents[id] !== 'undefined' && pastEvents[id].hasOwnProperty('focus'))
              pastEvents[id].dwell = Number(new Date()) - pastEvents[id].focus;
            else {
              pastEvents[id] = {};
              pastEvents[id].dwell = 0;
            }
            if (tmpQueue.length === 0) {
              if (!lastFocusEvent.inFocus) return;
              addToTmpQueue(webEvent, id);
            }
            lastFocusEvent.inFocus = false;
            if (tmpQueue[tmpQueue.length - 1])
              for (i = tmpQueue.length - 1; i >= 0; i--)
                tmpQueue[i].target.visitedCount = pastEvents[id].visitedCount;
            lastQueueEvent = tmpQueue[tmpQueue.length - 1];
            if (lastQueueEvent) {
              lastQueueEvent.target.dwell = pastEvents[id].dwell;
              lastQueueEvent.focusInOffset = pastEvents[id].focusInOffset;
              lastQueueEvent.target.visitedCount = pastEvents[id].visitedCount;
              if (lastQueueEvent.event.type === 'click') {
                if (!isTargetClickable(lastQueueEvent.target)) {
                  lastQueueEvent.target.currState =
                    utils.getValue(webEvent, 'target.state') ||
                    utils.getValue(webEvent, 'target.currState');
                  convertToBlur = true;
                }
              } else if (lastQueueEvent.event.type === 'focus') convertToBlur = true;
              if (convertToBlur) {
                lastQueueEvent.event.type = 'blur';
                lastQueueEvent.event.tlEvent = 'focusout';
                dcid = addDOMCapture(lastQueueEvent.event.type, webEvent.target);
                if (dcid) lastQueueEvent.dcid = dcid;
              }
            }
            postEventQueue(tmpQueue);
          }
          function checkQueue (id, webEvent) {
            var hasInQueue = false,
              tmpQueueLength = tmpQueue.length,
              tmpQueueEvent = tmpQueueLength > 0 ? tmpQueue[tmpQueueLength - 1] : null;
            if (!tmpQueueEvent) return hasInQueue;
            if (tmpQueueEvent.target.id !== id && tmpQueueEvent.target.tltype !== 'selectList')
              if (
                webEvent.type === 'focus' ||
                webEvent.type === 'click' ||
                webEvent.type === 'change'
              ) {
                handleBlur(tmpQueueEvent.target.id, tmpQueueEvent);
                hasInQueue = true;
              }
            return hasInQueue;
          }
          function handleChange (id, webEvent) {
            if (typeof pastEvents[id] !== 'undefined' && !pastEvents[id].hasOwnProperty('focus'))
              handleFocus(id, webEvent);
            addToTmpQueue(webEvent, id);
            if (
              typeof pastEvents[id] !== 'undefined' &&
              typeof pastEvents[id].prevState !== 'undefined'
            )
              if (
                tmpQueue[tmpQueue.length - 1].target.tlType === 'textBox' ||
                tmpQueue[tmpQueue.length - 1].target.tlType === 'selectList'
              )
                tmpQueue[tmpQueue.length - 1].target.prevState = pastEvents[id].prevState;
          }
          function getRelativeXY (webEvent) {
            var cellWidth,
              cellHeight,
              cellX,
              cellY,
              node = utils.getValue(webEvent, 'target.element', {}),
              nodeWidth = utils.getValue(webEvent, 'target.size.width', node.offsetWidth),
              nodeHeight = utils.getValue(webEvent, 'target.size.height', node.offsetHeight),
              offsetX = utils.getValue(webEvent, 'target.position.x', 0),
              offsetY = utils.getValue(webEvent, 'target.position.y', 0);
            cellWidth = nodeWidth
              ? Math.max(nodeWidth / gridValues.cellMaxX, gridValues.cellMinWidth)
              : gridValues.cellMinWidth;
            cellHeight = nodeHeight
              ? Math.max(nodeHeight / gridValues.cellMaxY, gridValues.cellMinHeight)
              : gridValues.cellMinHeight;
            cellX = Math.floor(offsetX / cellWidth);
            cellY = Math.floor(offsetY / cellHeight);
            if (!isFinite(cellX)) cellX = 0;
            if (!isFinite(cellY)) cellY = 0;
            return cellX + ',' + cellY;
          }
          function handleClick (id, webEvent) {
            var relXY,
              addRelXY = true,
              tmpQueueLength = 0;
            if (
              webEvent.target.type === 'select' &&
              lastClickEvent &&
              lastClickEvent.target.id === id
            ) {
              lastClickEvent = null;
              return;
            }
            if (!lastFocusEvent.inFocus) handleFocus(id, webEvent);
            tmpQueueLength = tmpQueue.length;
            if (
              tmpQueueLength &&
              utils.getValue(tmpQueue[tmpQueueLength - 1], 'event.type') !== 'change'
            )
              handleChange(id, webEvent);
            relXY = getRelativeXY(webEvent);
            tmpQueueLength = tmpQueue.length;
            if (
              webEvent.position.x === 0 &&
              webEvent.position.y === 0 &&
              tmpQueueLength &&
              utils.getValue(tmpQueue[tmpQueueLength - 1], 'target.tlType') === 'radioButton'
            )
              addRelXY = false;
            else webEvent.target.position.relXY = relXY;
            if (
              tmpQueueLength &&
              utils.getValue(tmpQueue[tmpQueueLength - 1], 'target.id') === id
            ) {
              if (addRelXY) tmpQueue[tmpQueueLength - 1].target.position.relXY = relXY;
            } else {
              addToTmpQueue(webEvent, id);
              if (isTargetClickable(webEvent.target)) handleBlur(id, webEvent);
            }
            lastClickEvent = webEvent;
          }
          function handleOrientationChange (webEvent) {
            var newOrientation = webEvent.orientation,
              orientationChangeEvent = {
                type: 4,
                event: { type: 'orientationchange' },
                target: {
                  prevState: {
                    orientation: currOrientation,
                    orientationMode: utils.getOrientationMode(currOrientation),
                  },
                  currState: {
                    orientation: newOrientation,
                    orientationMode: utils.getOrientationMode(newOrientation),
                  },
                },
              };
            postUIEvent(orientationChangeEvent);
            currOrientation = newOrientation;
          }
          function isDuplicateTouch (touchState) {
            var result = false;
            if (!touchState) return result;
            result =
              savedTouch.scale === touchState.scale &&
              Math.abs(new Date().getTime() - savedTouch.timestamp) < 500;
            return result;
          }
          function saveTouchState (touchState) {
            savedTouch.scale = touchState.scale;
            savedTouch.rotation = touchState.rotation;
            savedTouch.timestamp = new Date().getTime();
          }
          function getPinchType () {
            var s, pinchType;
            s = deviceScale - previousDeviceScale;
            if (isNaN(s)) pinchType = 'INVALID';
            else if (s < 0) pinchType = 'CLOSE';
            else if (s > 0) pinchType = 'OPEN';
            else pinchType = 'NONE';
            return pinchType;
          }
          function getClientStateMessage (webEvent) {
            var documentElement = document.documentElement,
              documentBody = document.body,
              screen = window.screen,
              screenWidth = screen.width,
              screenHeight = screen.height,
              deviceOrientation = utils.getValue(webEvent, 'orientation', 0),
              normalizedScreenWidth = !utils.isiOS
                ? screenWidth
                : Math.abs(deviceOrientation) === 90
                ? screenHeight
                : screenWidth,
              msg = {
                type: 1,
                clientState: {
                  pageWidth:
                    document.width || (!documentElement ? 0 : documentElement.offsetWidth),
                  pageHeight: Math.max(
                    !document.height ? 0 : document.height,
                    !documentElement ? 0 : documentElement.offsetHeight,
                    !documentElement ? 0 : documentElement.scrollHeight
                  ),
                  viewPortWidth: window.innerWidth || documentElement.clientWidth,
                  viewPortHeight: window.innerHeight || documentElement.clientHeight,
                  viewPortX: Math.round(
                    window.pageXOffset ||
                      (!documentElement
                        ? !documentBody
                          ? 0
                          : documentBody.scrollLeft
                        : documentElement.scrollLeft || 0)
                  ),
                  viewPortY: Math.round(
                    window.pageYOffset ||
                      (!documentElement
                        ? !documentBody
                          ? 0
                          : documentBody.scrollTop
                        : documentElement.scrollTop || 0)
                  ),
                  deviceOrientation: deviceOrientation,
                  event: utils.getValue(webEvent, 'type'),
                },
              },
              clientState = msg.clientState,
              scaleWidth;
            pastClientState = pastClientState || msg;
            if (
              clientState.event === 'unload' &&
              clientState.viewPortHeight === clientState.pageHeight &&
              clientState.viewPortWidth === clientState.pageWidth
            )
              if (pastClientState.clientState.viewPortHeight < clientState.viewPortHeight) {
                clientState.viewPortHeight = pastClientState.clientState.viewPortHeight;
                clientState.viewPortWidth = pastClientState.clientState.viewPortWidth;
              }
            if (clientState.viewPortY + clientState.viewPortHeight > clientState.pageHeight)
              clientState.viewPortY = clientState.pageHeight - clientState.viewPortHeight;
            if (clientState.viewPortY < 0) clientState.viewPortY = 0;
            scaleWidth = !clientState.viewPortWidth
              ? 1
              : normalizedScreenWidth / clientState.viewPortWidth;
            clientState.deviceScale = scaleWidth.toFixed(3);
            clientState.viewTime = 0;
            if (scrollViewStart && scrollViewEnd)
              clientState.viewTime = scrollViewEnd.getTime() - scrollViewStart.getTime();
            if (webEvent.type === 'scroll') {
              clientState.viewPortXStart = pastClientState.clientState.viewPortX;
              clientState.viewPortYStart = pastClientState.clientState.viewPortY;
            }
            return msg;
          }
          function sendClientState () {
            var cs;
            if (curClientState) {
              cs = curClientState.clientState;
              if (
                cs.viewPortHeight > 0 &&
                cs.viewPortHeight < viewPortWidthHeightLimit &&
                cs.viewPortWidth > 0 &&
                cs.viewPortWidth < viewPortWidthHeightLimit
              )
                postUIEvent(curClientState);
              pastClientState = curClientState;
              curClientState = null;
              scrollViewStart = nextScrollViewStart || scrollViewStart;
              scrollViewEnd = null;
            }
            sendClientState.timeoutId = 0;
          }
          function handleClientState (webEvent) {
            var attentionMsg = null;
            if (utils.isOperaMini) return;
            curClientState = getClientStateMessage(webEvent);
            if (webEvent.type === 'scroll' || webEvent.type === 'resize') {
              if (sendClientState.timeoutId) window.clearTimeout(sendClientState.timeoutId);
              sendClientState.timeoutId = window.setTimeout(
                sendClientState,
                utils.getValue(replayConfig, 'scrollTimeout', 2000)
              );
            } else if (webEvent.type === 'touchstart' || webEvent.type === 'load') {
              if (curClientState)
                previousDeviceScale = parseFloat(curClientState.clientState.deviceScale);
            } else if (webEvent.type === 'touchend')
              if (curClientState) {
                deviceScale = parseFloat(curClientState.clientState.deviceScale);
                sendClientState();
              }
            if (webEvent.type === 'load' || webEvent.type === 'unload') {
              if (webEvent.type === 'unload' && pageLoadTime) {
                attentionMsg = utils.clone(curClientState);
                attentionMsg.clientState.event = 'attention';
                attentionMsg.clientState.viewTime = new Date().getTime() - pageLoadTime;
              }
              sendClientState();
              if (attentionMsg) {
                curClientState = attentionMsg;
                sendClientState();
              }
            }
            return curClientState;
          }
          function handleTouchStart (webEvent) {
            var fingerCount = utils.getValue(webEvent, 'nativeEvent.touches.length', 0);
            if (fingerCount === 2) handleClientState(webEvent);
          }
          function handleTouchEnd (webEvent) {
            var fingerCount,
              prevTouchState = {},
              rotation =
                utils.getValue(webEvent, 'nativeEvent.rotation', 0) ||
                utils.getValue(webEvent, 'nativeEvent.touches[0].webkitRotationAngle', 0),
              scale = utils.getValue(webEvent, 'nativeEvent.scale', 1),
              touchState = null,
              touchEndEvent = {
                type: 4,
                event: { type: 'touchend' },
                target: {
                  id: utils.getValue(webEvent, 'target.id'),
                  idType: utils.getValue(webEvent, 'target.idType'),
                },
              };
            fingerCount =
              utils.getValue(webEvent, 'nativeEvent.changedTouches.length', 0) +
              utils.getValue(webEvent, 'nativeEvent.touches.length', 0);
            if (fingerCount !== 2) return;
            handleClientState(webEvent);
            touchState = {
              rotation: rotation ? rotation.toFixed(2) : 0,
              scale: deviceScale ? deviceScale.toFixed(2) : 1,
            };
            touchState.pinch = getPinchType();
            prevTouchState.scale = previousDeviceScale ? previousDeviceScale.toFixed(2) : 1;
            touchEndEvent.target.prevState = prevTouchState;
            touchEndEvent.target.currState = touchState;
            postUIEvent(touchEndEvent);
          }
          function isDuplicateEvent (curr, prev) {
            var propsToCompare = ['type', 'name', 'target.id'],
              prop = null,
              i,
              len,
              duplicate = true,
              DUPLICATE_EVENT_THRESHOLD_TIME = 10,
              timeDiff = 0,
              currTimeStamp = 0,
              prevTimeStamp = 0;
            if (!curr || !prev || typeof curr !== 'object' || typeof prev !== 'object')
              return false;
            for (i = 0, len = propsToCompare.length; duplicate && i < len; i += 1) {
              prop = propsToCompare[i];
              if (utils.getValue(curr, prop) !== utils.getValue(prev, prop)) {
                duplicate = false;
                break;
              }
            }
            if (duplicate) {
              currTimeStamp = utils.getValue(curr, 'timestamp');
              prevTimeStamp = utils.getValue(prev, 'timestamp');
              if (!(isNaN(currTimeStamp) && isNaN(prevTimeStamp))) {
                timeDiff = Math.abs(
                  utils.getValue(curr, 'timestamp') - utils.getValue(prev, 'timestamp')
                );
                if (isNaN(timeDiff) || timeDiff > DUPLICATE_EVENT_THRESHOLD_TIME)
                  duplicate = false;
              }
            }
            return duplicate;
          }
          function defaultEventHandler (webEvent) {
            var msg = {
                type: 4,
                event: { type: webEvent.type },
                target: {
                  id: utils.getValue(webEvent, 'target.id'),
                  idType: utils.getValue(webEvent, 'target.idType'),
                  currState: utils.getValue(webEvent, 'target.state'),
                },
              },
              dcid;
            dcid = addDOMCapture(webEvent.type, webEvent.target);
            if (dcid) msg.dcid = dcid;
            postUIEvent(msg);
          }
          function addGeolocationMsg (eventName) {
            var geolocationConfig = utils.getValue(replayConfig, 'geolocation'),
              triggers;
            if (!geolocationConfig || !geolocationConfig.enabled) return;
            triggers = geolocationConfig.triggers || [];
            if (!triggers.length) return;
            if (triggers[0].event === eventName) TLT.logGeolocation();
          }
          return {
            init: function () {
              tmpQueue = [];
            },
            destroy: function () {
              handleBlur(lastEventId);
              tmpQueue = [];
              if (sendClientState.timeoutId) {
                window.clearTimeout(sendClientState.timeoutId);
                sendClientState.timeoutId = 0;
              }
              if (onerrorHandled) {
                window.onerror = null;
                onerrorHandled = false;
              }
            },
            onevent: function (webEvent) {
              var id = null,
                returnObj = null,
                orientation,
                screenOrientation;
              if (typeof webEvent !== 'object' || !webEvent.type) return;
              if (isDuplicateEvent(webEvent, prevWebEvent)) {
                prevWebEvent = webEvent;
                return;
              }
              prevWebEvent = webEvent;
              id = utils.getValue(webEvent, 'target.id');
              if (Object.prototype.toString.call(pastEvents[id]) !== '[object Object]')
                pastEvents[id] = {};
              checkQueue(id, webEvent);
              inBetweenEvtsTimer = new Date();
              switch (webEvent.type) {
                case 'hashchange':
                  break;
                case 'focus':
                  returnObj = handleFocus(id, webEvent);
                  break;
                case 'blur':
                  returnObj = handleBlur(id, webEvent);
                  break;
                case 'click':
                  returnObj = handleClick(id, webEvent);
                  break;
                case 'change':
                  returnObj = handleChange(id, webEvent);
                  break;
                case 'orientationchange':
                  returnObj = handleOrientationChange(webEvent);
                  break;
                case 'touchstart':
                  handleTouchStart(webEvent);
                  break;
                case 'touchend':
                  returnObj = handleTouchEnd(webEvent);
                  break;
                case 'loadWithFrames':
                  TLT.logScreenviewLoad('rootWithFrames');
                  break;
                case 'load':
                  currOrientation = webEvent.orientation;
                  scrollViewStart = new Date();
                  if (typeof window.orientation !== 'number' || utils.isAndroid) {
                    screenOrientation = window.screen.width > window.screen.height ? 90 : 0;
                    orientation = window.orientation;
                    if (
                      Math.abs(orientation) !== screenOrientation &&
                      !(orientation === 180 && screenOrientation === 0)
                    ) {
                      utils.isLandscapeZeroDegrees = true;
                      if (Math.abs(orientation) === 180 || Math.abs(orientation) === 0)
                        currOrientation = 90;
                      else if (Math.abs(orientation) === 90) currOrientation = 0;
                    }
                  }
                  setTimeout(function () {
                    if (context.isInitialized()) handleClientState(webEvent);
                  }, 100);
                  addGeolocationMsg(webEvent.type);
                  TLT.logScreenviewLoad('root');
                  break;
                case 'screenview_load':
                  viewTimeStart = new Date();
                  resetVisitedCounts();
                  returnObj = addDOMCapture('load', null, webEvent.name);
                  break;
                case 'screenview_unload':
                  returnObj = addDOMCapture('unload', null, webEvent.name);
                  break;
                case 'resize':
                case 'scroll':
                  if (!scrollViewEnd) scrollViewEnd = new Date();
                  nextScrollViewStart = new Date();
                  handleClientState(webEvent);
                  break;
                case 'unload':
                  if (tmpQueue !== null) postEventQueue(tmpQueue);
                  scrollViewEnd = new Date();
                  handleClientState(webEvent);
                  TLT.logScreenviewUnload('root');
                  break;
                default:
                  defaultEventHandler(webEvent);
                  break;
              }
              lastEventId = id;
              return returnObj;
            },
            onmessage: function () {},
          };
        });
        (function () {
          var TLT = window.TLT,
            changeTarget;
          if (TLT.getFlavor() === 'w3c' && TLT.utils.isLegacyIE)
            changeTarget = 'input, select, textarea, button';
          var n;
          if (Dell.Metrics.sc.dc)
            if (Dell.Metrics.sc.dc.toLowerCase() === 'az') n = '/aztltarget.aspx';
            else n = '/TLTarget.aspx';
          else n = '/TLTarget.aspx';
          var config = {
            core: {
              blockedElements: [],
              ieExcludedLinks: ['a[href*="javascript:void"]', "input[onclick*='javascript:']"],
              inactivityTimeout: 1000 * 60 * 20,
              modules: {
                replay: {
                  events: [
                    { name: 'change', target: changeTarget, recurseFrames: true },
                    { name: 'click', recurseFrames: true },
                    { name: 'hashchange', target: window },
                    {
                      name: 'focus',
                      target: 'input, select, textarea, button',
                      recurseFrames: true,
                    },
                    {
                      name: 'blur',
                      target: 'input, select, textarea, button',
                      recurseFrames: true,
                    },
                    { name: 'load', target: window },
                    { name: 'lazyload', target: window },
                    { name: 'unload', target: window },
                    { name: 'resize', target: window },
                    { name: 'scroll', target: window },
                    { name: 'orientationchange', target: window },
                    { name: 'touchend' },
                    { name: 'touchstart' },
                    {
                      name: 'change',
                      target: '[ng-change], [data-ng-change]',
                      recurseFrames: true,
                    },
                    {
                      name: 'click',
                      target: '[ng-click], [ng-href], [data-ng-click], [data-ng-href]',
                      recurseFrames: true,
                    },
                  ],
                },
                overstat: {
                  enabled: false,
                  events: [
                    { name: 'click', recurseFrames: true },
                    { name: 'mousemove', recurseFrames: true },
                    { name: 'mouseout', recurseFrames: true },
                    { name: 'submit', recurseFrames: true },
                  ],
                },
                performance: {
                  enabled: true,
                  events: [
                    { name: 'load', target: window },
                    { name: 'unload', target: window },
                  ],
                },
                TLCookie: { enabled: true },
              },
              sessionDataEnabled: false,
              sessionData: {
                sessionValueNeedsHashing: true,
                sessionQueryName: 'SID',
                sessionQueryDelim: ';',
                sessionCookieName: 'jsessionid',
              },
              screenviewAutoDetect: true,
              framesBlacklist: [],
            },
            services: {
              browser: {
                useCapture: true,
                sizzleObject: 'window.Sizzle',
                jQueryObject: 'window.jQuery',
                blacklist: [],
                customid: [],
              },
              queue: {
                queues: [
                  {
                    qid: 'DEFAULT',
                    endpoint: n,
                    maxEvents: 25,
                    maxSize: 300000,
                    timerinterval: 1000 * 60 * 3,
                    checkEndpoint: false,
                    endpointCheckTimeout: 3000,
                    encoder: 'gzip',
                  },
                ],
                asyncReqOnUnload: true,
                useBeacon: false,
                useFetch: true,
              },
              message: {
                privacy: [
                  {
                    targets: [
                      { id: 'DataModel-CardNumber', idType: '-1' },
                      { id: 'DataModel-CardIdentificationNumber', idType: '-1' },
                      { id: 'Password', idType: '-1' },
                      { id: 'NewPassword', idType: '-1' },
                      { id: 'ConfirmNewPassword', idType: '-1' },
                      { id: 'visiblePassword', idType: '-1' },
                      { id: 'SocialSecurityNumber', idType: '-1' },
                      { id: 'cartPayment_ccNumber', idType: '-1' },
                      { id: 'cartPayment_cid', idType: '-1' },
                      { id: 'cardId', idType: '-1' },
                      { id: 'PersonalInformation.IdentificationNumber', idType: '-1' },
                      { id: 'PersonalInformation.MothersMaidenName', idType: '-1' },
                      { id: 'PersonalInformation.SocialSecurityNumber', idType: '-1' },
                      { id: 'dbcAccountNumber', idType: '-1' },
                      { id: 'accountNumber', idType: '-1' },
                      { id: 'mothersMaidenName', idType: '-1' },
                      { id: 'dateOfBirth', idType: '-1' },
                      { id: 'pinNumber', idType: '-1' },
                      { id: 'pin', idType: '-1' },
                      'input[type=password]',
                    ],
                    maskType: 3,
                  },
                ],
              },
              serializer: {
                json: {
                  defaultToBuiltin: true,
                  parsers: ['JSON.parse'],
                  stringifiers: ['JSON.stringify'],
                },
              },
              encoder: { gzip: { encode: 'window.pako.gzip', defaultEncoding: 'gzip' } },
              domCapture: {
                options: {
                  captureFrames: true,
                  removeScripts: true,
                  maxLength: 5000000,
                  maxMutations: 5000,
                },
                diffEnabled: true,
              },
            },
            modules: {
              replay: {
                geolocation: { enabled: false, triggers: [{ event: 'load' }] },
                domCapture: {
                  enabled: false,
                  triggers: [
                    { event: 'load', delay: 100, fullDOMCapture: true },
                    { event: 'click' },
                    { event: 'change' },
                  ],
                },
              },
              overstat: { hoverThreshold: 2000 },
              performance: {
                calculateRenderTime: true,
                renderTimeThreshold: 600000,
                filter: {
                  navigationStart: false,
                  unloadEventStart: false,
                  unloadEventEnd: false,
                  redirectStart: false,
                  redirectEnd: false,
                  fetchStart: false,
                  domainLookupStart: false,
                  domainLookupEnd: false,
                  connectStart: false,
                  connectEnd: false,
                  secureConnectionStart: false,
                  requestStart: false,
                  responseStart: false,
                  responseEnd: false,
                  domLoading: false,
                  domInteractive: false,
                  domContentLoadedEventStart: false,
                  domContentLoadedEventEnd: false,
                  domComplete: false,
                  loadEventStart: false,
                  loadEventEnd: false,
                },
              },
              TLCookie: {
                tlAppKey: '',
                sessionizationCookieName: 'TLTSID',
                visitorCookieEnabled: false,
              },
            },
          };
          var path = window.location.pathname.toLowerCase();
          if (
            path.indexOf('premier') !== -1 ||
            path.indexOf('checkout') !== -1 ||
            path.indexOf('cart') !== -1
          ) {
            config.modules.replay.domCapture.enabled = true;
            config.modules.replay.domCapture.triggers = [
              {
                event: 'load',
                screenviews: [{ regex: 'dom-.*' }],
                fullDOMCapture: true,
                delay: 100,
              },
              { event: 'click' },
              { event: 'change' },
            ];
            var j = 250;
            var d = 20;
            var c = 0;
            var b = true;
            var f;
            var isBoommerFired = false;
            function a () {
              if (typeof BOOMR != 'undefined') {
                if (b) console.log('BOOMR Found! line 762');
                g();
              } else {
                c++;
                if (c > d) {
                  if (b) console.log('BOOMR Not Loaded in time - Mission Aborted!');
                } else {
                  if (b) console.log('Waiting for BOOMR ' + c);
                  f = window.setTimeout(a, j);
                }
              }
            }
            function g () {
              if (b) console.log('Boomerang subscription placed for tealeaf.');
              BOOMR.subscribe('spa_navigation', BoomLogScreenView, null, this, true);
              BOOMR.subscribe('page_ready', BoomLogScreenView, null, this, true);
              BOOMR.subscribe('click', BoomLogScreenView, null, this, true);
            }
            function BoomLogScreenView () {
              var k = location.hash.slice(1) || document.title;
              if (typeof TLT != 'undefined' && !isBoommerFired) {
                isBoommerFired = true;
                if (b) console.log('Screenview Logged : ' + k);
                TLT.logScreenviewLoad('dom-' + k);
              }
            }
            a();
          }
          if (
            (path.indexOf('/accessories/') !== -1 && path.indexOf('/rc') !== -1) ||
            window.location.pathname.indexOf('myaccount') !== -1
          ) {
            config.services.domCapture.options = [
              { captureFrames: true, removeScripts: true, maxLength: 5000000, maxMutations: 1000 },
            ];
            config.modules.replay.domCapture.enabled = true;
            config.modules.replay.domCapture.triggers = [
              {
                event: 'load',
                screenviews: [{ regex: 'dom-.*' }],
                fullDOMCapture: true,
                delay: 150,
              },
              { event: 'click' },
              { event: 'change' },
            ];
            var j = 250;
            var d = 20;
            var c = 0;
            var b = true;
            var f;
            var isBoommerFired = false;
            function a () {
              if (typeof BOOMR != 'undefined') {
                if (b) console.log('BOOMR Found! line 762');
                g();
              } else {
                c++;
                if (c > d) {
                  if (b) console.log('BOOMR Not Loaded in time - Mission Aborted!');
                } else {
                  if (b) console.log('Waiting for BOOMR ' + c);
                  f = window.setTimeout(a, j);
                }
              }
            }
            function g () {
              if (b) console.log('Boomerang subscription placed for tealeaf.');
              BOOMR.subscribe('spa_navigation', BoomLogScreenView, null, this, true);
              BOOMR.subscribe('page_ready', BoomLogScreenView, null, this, true);
              BOOMR.subscribe('click', BoomLogScreenView, null, this, true);
            }
            function BoomLogScreenView () {
              var k = location.hash.slice(1) || document.title;
              if (typeof TLT != 'undefined' && !isBoommerFired) {
                isBoommerFired = true;
                if (b) console.log('Screenview Logged : ' + k);
                TLT.logScreenviewLoad('dom-' + k);
              }
            }
            a();
          }
          var l = Dell.Metrics.sc.country;
          var k = Dell.Metrics.sc.language;
          if (
            path.indexOf('buy') !== -1 ||
            path.indexOf('cart') !== -1 ||
            path.indexOf('financing') !== -1 ||
            path.indexOf('payments') !== -1 ||
            path.indexOf('billing') !== -1 ||
            window.location.pathname.indexOf('Financing') !== -1
          ) {
            config.modules.replay.domCapture.enabled = true;
            config.modules.replay.domCapture.triggers = [
              {
                event: 'load',
                screenviews: [{ regex: 'dom-.*' }],
                fullDOMCapture: true,
                delay: 100,
              },
              { event: 'load' },
              { event: 'click' },
              { event: 'change' },
            ];
          }
          if (Dell.Metrics.sc.dc)
            if (Dell.Metrics.sc.dc.toLowerCase() === 'az') {
              config.modules.replay.domCapture.enabled = true;
              config.modules.replay.domCapture.triggers = [
                { event: 'load', screenviews: [{ regex: 'dom-.*' }], fullDOMCapture: true },
                { event: 'click' },
                { event: 'change' },
              ];
            }
          if (window.location.search.indexOf('moduleId') !== -1)
            (config.core.modules.replay = {
              enabled: true,
              events: [
                { name: 'hashchange', target: window },
                { name: 'click', recurseFrames: true },
                { name: 'focus', target: 'input, select, textarea, button', recurseFrames: true },
                { name: 'blur', target: 'input, select, textarea, button', recurseFrames: true },
                { name: 'change', target: l, recurseFrames: true },
                { name: 'resize', target: window },
                { name: 'scroll', target: window },
                { name: 'orientationchange', target: window },
                { name: 'touchstart', target: document },
                { name: 'touchend', target: document },
                { name: 'change', target: '[ng-change], [data-ng-change]', recurseFrames: true },
                {
                  name: 'click',
                  target: '[ng-click], [ng-href], [data-ng-click], [data-ng-href]',
                  recurseFrames: true,
                },
              ],
            }),
              (config.core.modules.performance = {
                enabled: false,
                events: [
                  { name: 'load', target: window },
                  { name: 'unload', target: window },
                ],
              });
          var legacyIE = false;
          if (document.documentMode === 8) legacyIE = true;
          if (document.documentMode === 9) {
            config.modules.replay.domCapture.enabled = false;
            config.services.domCapture.diffEnabled = false;
          }
          if (document.documentMode === 10) {
            config.services.domCapture.diffEnabled = false;
            config.modules.replay.domCapture.triggers = [
              { event: 'change' },
              { event: 'load', delay: 100 },
            ];
          }
          var disableSDK = false;
          if (
            typeof window.TLT !== 'undefined' &&
            typeof window.TLT.isInitialized === 'function' &&
            !TLT.isInitialized() &&
            typeof config === 'object' &&
            legacyIE === false
          )
            window.TLT.init(config);
        })();
      },
      3264869,
      224828
    );
  })();
}
