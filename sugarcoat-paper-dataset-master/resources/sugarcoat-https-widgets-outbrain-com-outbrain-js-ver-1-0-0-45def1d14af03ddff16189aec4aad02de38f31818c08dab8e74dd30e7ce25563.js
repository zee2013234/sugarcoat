{
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
  (function () {
    window.OBR ||
      (function () {
        const $___old_8b9417066439122e = {}.constructor.getOwnPropertyDescriptor(
          window,
          'performance'
        );
        try {
          if ($___old_8b9417066439122e)
            ({}.constructor.defineProperty(
              window,
              'performance',
              $___stub_2b47892348e4e4b9.performance
            ));
          return function () {
            window.OBR = { _jsc: {} };
            OBR.error = function (a) {
              var b = ['www.vanguardngr.com'];
              if (!0 !== a) {
                var c,
                  d = document,
                  f = window.OB_releaseVer,
                  g = OBR && OBR.env ? OBR.env : 1,
                  h = a.isMonitorRepeated ? '&isMonitorRepeated=true' : '';
                eleErrorURl = a.errorEleUrl
                  ? '&errorEleUrl=' + encodeURIComponent(a.errorEleUrl)
                  : '';
                b =
                  window.location &&
                  window.location.hostname &&
                  -1 < b.indexOf(window.location.hostname);
                if (!d.getElementById('obMntor') && !b) {
                  var e = function () {
                    c = d.createElement('iframe');
                    c.setAttribute('id', 'obMntor');
                    c.style.display = 'none';
                    d.body.appendChild(c);
                    var b =
                      'https://widgets.outbrain.com/widgetMonitor/monitor.html?name=' +
                      encodeURIComponent(a.name) +
                      '&env=' +
                      g +
                      '&message=' +
                      encodeURIComponent(a.message) +
                      h +
                      '&stack=' +
                      encodeURIComponent(a.stack) +
                      '&ver=' +
                      encodeURIComponent(f) +
                      eleErrorURl;
                    OBR &&
                      OBR.monitorData &&
                      (b +=
                        '&sId=' +
                        OBR.monitorData.sourceId +
                        '&dId=' +
                        OBR.monitorData.docId +
                        '&pId=' +
                        OBR.monitorData.pubId);
                    c.src = b;
                  };
                  d.body
                    ? e()
                    : setTimeout(function () {
                        d.body && e();
                      }, 10000);
                }
              }
            };
            try {
              var aa,
                v,
                da,
                ea,
                x,
                fa,
                ha,
                ia,
                ja,
                ka,
                la,
                oa,
                ma,
                na,
                pa,
                qa,
                ra,
                ta,
                ua,
                va,
                xa,
                ya,
                Ba,
                Ca,
                Da,
                Fa,
                Ea,
                Ga,
                Ia,
                Ha,
                Ja,
                Ka,
                La,
                Ma,
                Na,
                Pa,
                Qa,
                Ra,
                Sa,
                nb,
                ob,
                pb,
                qb,
                rb,
                tb,
                sb,
                ub,
                vb,
                yb,
                zb,
                Ab,
                Bb,
                Db,
                Gb,
                Hb,
                Fb,
                Cb,
                Eb,
                Ib,
                Jb,
                Kb,
                Lb,
                Ob,
                Pb,
                Rb,
                Sb,
                Qb,
                Ub,
                Tb,
                Vb,
                Wb,
                bc,
                cc,
                dc,
                fc,
                ec,
                gc,
                jc,
                hc,
                kc,
                ic,
                lc,
                mc,
                nc,
                oc,
                pc,
                qc,
                rc,
                tc,
                sc,
                uc,
                vc,
                wc,
                xc,
                zc,
                Ac,
                yc,
                Cc,
                Gc,
                Fc,
                Dc,
                Bc,
                Hc,
                Jc,
                Kc,
                Lc,
                Mc,
                ca,
                t,
                ba;
              aa = function () {
                aa = function () {};
                t.Symbol || (t.Symbol = ba);
              };
              v = function () {
                aa();
                var a = t.Symbol.iterator;
                a || (a = t.Symbol.iterator = t.Symbol('iterator'));
                'function' != typeof Array.prototype[a] &&
                  ca(Array.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                      return da(this);
                    },
                  });
                v = function () {};
              };
              da = function (a) {
                var b = 0;
                return ea(function () {
                  return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
                });
              };
              ea = function (a) {
                v();
                a = { next: a };
                a[t.Symbol.iterator] = function () {
                  return this;
                };
                return a;
              };
              OBR._jsc.w = function (a) {
                v();
                aa();
                v();
                var b = a[window.Symbol.iterator];
                return b ? b.call(a) : da(a);
              };
              x = function (a, b) {
                if (b) {
                  var c = t;
                  a = a.split('.');
                  for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e];
                  }
                  a = a[a.length - 1];
                  d = c[a];
                  b = b(d);
                  b != d && null != b && ca(c, a, { configurable: !0, writable: !0, value: b });
                }
              };
              fa = function () {
                this.D = !1;
                this.g = null;
                this.B = void 0;
                this.c = 1;
                this.ca = this.u = 0;
                this.o = null;
              };
              ha = function (a) {
                if (a.D) throw new TypeError('Generator is already running');
                a.D = !0;
              };
              ia = function (a, b) {
                a.o = { Wl: b, Av: !0 };
                a.c = a.u || a.ca;
              };
              ja = function (a, b, c) {
                a.c = c;
                return { value: b };
              };
              ka = function (a) {
                a.u = 0;
                var b = a.o.Wl;
                a.o = null;
                return b;
              };
              la = function (a) {
                this.c = new fa();
                this.g = a;
              };
              oa = function (a, b) {
                ha(a.c);
                var c = a.c.g;
                if (c)
                  return ma(
                    a,
                    'return' in c
                      ? c['return']
                      : function (a) {
                          return { value: a, done: !0 };
                        },
                    b,
                    a.c.return
                  );
                a.c.return(b);
                return na(a);
              };
              ma = function (a, b, c, d) {
                try {
                  var e = b.call(a.c.g, c);
                  if (!(e instanceof Object))
                    throw new TypeError('Iterator result ' + e + ' is not an object');
                  if (!e.done) return (a.c.D = !1), e;
                  var f = e.value;
                } catch (g) {
                  return (a.c.g = null), ia(a.c, g), na(a);
                }
                a.c.g = null;
                d.call(a.c, f);
                return na(a);
              };
              na = function (a) {
                for (; a.c.c; )
                  try {
                    var b = a.g(a.c);
                    if (b) return (a.c.D = !1), { value: b.value, done: !1 };
                  } catch (c) {
                    (a.c.B = void 0), ia(a.c, c);
                  }
                a.c.D = !1;
                if (a.c.o) {
                  b = a.c.o;
                  a.c.o = null;
                  if (b.Av) throw b.Wl;
                  return { value: b.return, done: !0 };
                }
                return { value: void 0, done: !0 };
              };
              pa = function (a) {
                this.next = function (b) {
                  ha(a.c);
                  a.c.g ? (b = ma(a, a.c.g.next, b, a.c.M)) : (a.c.M(b), (b = na(a)));
                  return b;
                };
                this.throw = function (b) {
                  ha(a.c);
                  a.c.g ? (b = ma(a, a.c.g['throw'], b, a.c.M)) : (ia(a.c, b), (b = na(a)));
                  return b;
                };
                this.return = function (b) {
                  return oa(a, b);
                };
                v();
                aa();
                v();
                this[window.Symbol.iterator] = function () {
                  return this;
                };
              };
              qa = function (a) {
                function b (b) {
                  return a.next(b);
                }
                function c (b) {
                  return a.throw(b);
                }
                return new window.Promise(function (d, e) {
                  function f (a) {
                    a.done ? d(a.value) : window.Promise.resolve(a.value).then(b, c).then(f, e);
                  }
                  f(a.next());
                });
              };
              ra = function (a) {
                return qa(new pa(new la(a)));
              };
              OBR._jsc.sa = function (a) {
                if (!(a instanceof Array)) {
                  a = OBR._jsc.w(a);
                  for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
                  a = c;
                }
                return a;
              };
              ta = function (a, b) {
                v();
                a instanceof String && (a += '');
                var c = 0,
                  d = {
                    next: function () {
                      if (c < a.length) {
                        var e = c++;
                        return { value: b(e, a[e]), done: !1 };
                      }
                      d.next = function () {
                        return { done: !0, value: void 0 };
                      };
                      return d.next();
                    },
                  };
                d[window.Symbol.iterator] = function () {
                  return d;
                };
                return d;
              };
              ua = function (a, b, c) {
                if (null == a)
                  throw new TypeError(
                    "The 'this' value for String.prototype." + c + ' must not be null or undefined'
                  );
                if (b instanceof RegExp)
                  throw new TypeError(
                    'First argument to String.prototype.' + c + ' must not be a regular expression'
                  );
                return a + '';
              };
              va = function (a) {
                if (a && 'string' === typeof a)
                  return a
                    .split('#')[0]
                    .replace(/\+/g, ' ')
                    .split('&')
                    .reduce(function (a, c) {
                      c = c.split('=');
                      c[0] &&
                        (a[c[0].toLowerCase()] = c[1] ? (0, window.decodeURIComponent)(c[1]) : '');
                      return a;
                    }, {});
              };
              xa = function () {
                var a = window;
                a =
                  (a = (a.OB_amp ? a.context : a).location.href) &&
                  0 < a.length &&
                  0 <= a.indexOf('?')
                    ? a.split('?')[1]
                    : '';
                return va(a);
              };
              ya = function () {
                var a = xa();
                return function (b, c) {
                  try {
                    if (b) {
                      var d = b.toLowerCase();
                      if (d in a) return a[d];
                    }
                  } catch (e) {}
                  return c;
                };
              };
              OBR._jsc.za = function (a) {
                var b = window.document.createElement('div');
                b.innerHTML = a;
                return b.firstChild;
              };
              OBR._jsc.Aa = function (a, b) {
                ['href', 'onmousedown', 'ontouchstart', 'target'].forEach(function (c) {
                  var d = b.getAttribute(c);
                  d && a.setAttribute(c, d);
                });
              };
              Ba = function (a) {
                var b = OBR._jsc.w(a.split(' '));
                a = b.next().value;
                var c = b.next().value,
                  d = b.next().value;
                b = b.next().value;
                return [a, c || a, d || a, b || c || a];
              };
              Ca = function () {
                this.c = [];
              };
              Da = function (a, b) {
                window.OBR.j.log('remove event :' + b);
                for (var c = 0, d = a.c.length; c < d; c += 1)
                  if (a.c[c] && a.c[c].name && a.c[c].name === b)
                    try {
                      a.c.splice(c, 1);
                    } catch (e) {
                      window.OBR.j.log('rm evnt err: ' + e), window.OBR.error(e);
                    }
              };
              Fa = function () {
                this.Ya = window.OBR.b.ba('OB-AD-BLOCKER-STAT', null);
                this.c = window.OBR.b.ba('OB-AD-BLOCKER-WL-STAT', null);
                null !== this.Ya &&
                  window.OBR.j.log('AdBlock - status from local storage is: ' + this.Ya);
                this.ae = window.OBR.f.Uf ? 1500 : 300;
                this.cssText =
                  'display: inline; width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; border:none; padding: 0 0 0 0;visibility:visible !important';
                this.B = !1;
                this.g = this.o = 0;
                this.u = new window.OBR.Qa();
                this.D = { ready: 0, td: 3, Bk: 6, stopped: 7, kn: 8 };
                null === this.Ya && Ea(this);
              };
              Ea = function (a, b) {
                a.B
                  ? window.OBR.j.log('AdBlock - skipped full check detection (called once)')
                  : window.document.body
                  ? Ga(a)
                  : b && b.iw
                  ? (window.OBR.error({
                      name: 'AdBlockNoBody',
                      message: 'Ad block No body element',
                    }),
                    window.addEventListener('DOMContentLoaded', a.ex.bind(a)))
                  : (window.OBR.j.log("AdBlock - Don't have body. skip full check"),
                    (a.Ya = a.Ya ? a.Ya : 'false'),
                    (a.c = a.c ? a.c : 'false'),
                    a.u.G('onAdBlockStatusReady', [a.Ya]));
              };
              Ga = function (a) {
                a.B || (window.OBR.j.log('AdBlock - start detection'), (a.B = !0), Ha(a));
              };
              Ia = function (a, b) {
                var c = window.OBR.Xa;
                return b === c.D.stopped || b === c.D.Bk
                  ? !1
                  : (a = (a = window.OBR.b.v(a)) && Array.from(a.querySelectorAll('.ob-p > a'))) &&
                      a.some(function (a) {
                        return !!a.offsetParent && 10 < a.parentElement.offsetHeight;
                      });
              };
              Ha = function (a) {
                window.Promise.all([Ja(a), Ka(), La(a)]).then(function (b) {
                  var c = OBR._jsc.w(b),
                    d = c.next().value;
                  b = c.next().value;
                  c = c.next().value;
                  var e = d && b;
                  d = [e, d];
                  e = [e && c, !1];
                  a.c = b ? c.toString() : 'false';
                  a.g = window.OBR.b.Kl(d);
                  a.o = window.OBR.b.Kl(e);
                  0 === a.g &&
                    2 === a.o &&
                    window.OBR.error({
                      name: 'adblock',
                      message: 'got 0 2 in ad blocker detection',
                    });
                  a.Ya = (0 < a.g).toString();
                  window.OBR.j.log(
                    'AdBlock - finish long status check. adBlock = ' + a.Ya + ' wl = ' + a.o
                  );
                  window.OBR.b.Ea('OB-AD-BLOCKER-STAT', a.Ya);
                  window.OBR.b.Ea('OB-AD-BLOCKER-WL-STAT', a.c);
                  a.u.G('onAdBlockStatusReady', [a.Ya]);
                });
              };
              Ja = function (a) {
                var b = window.OBR.b.createElement('a', 'ob_ad', a.cssText);
                b.className = 'Ads_4 AD_area ADBox AdsRec';
                b.href = 'https://paid.outbrain.com/network/redir?';
                window.document.body.appendChild(b);
                return new window.Promise(function (c) {
                  (0, window.setTimeout)(function () {
                    c(!b.offsetParent);
                    window.document.body.removeChild(b);
                  }, a.ae);
                });
              };
              Ka = function () {
                return new window.Promise(function (a) {
                  var b = new window.Image();
                  b.onload = function () {
                    a(!1);
                  };
                  b.onerror = function () {
                    a(!0);
                  };
                  b.src =
                    'https://widget-pixels.outbrain.com/widget/detect/px.gif?ch=1&rn=' +
                    11 * Math.random();
                });
              };
              La = function (a) {
                return new window.Promise(function (b) {
                  var c = OBR._jsc.za(
                    '<a style="' +
                      a.cssText +
                      '" onmousedown="this.href=\'http://paid.outbrain.com/network/redir?\'" target="_blank" >ad</a>'
                  );
                  window.document.body.appendChild(c);
                  (0, window.setTimeout)(function () {
                    b(!!c.offsetParent);
                    window.document.body.removeChild(c);
                  }, a.ae);
                });
              };
              Ma = function (a) {
                a = a.i('customFontLinks', null);
                try {
                  var b = a ? JSON.parse(a) : [];
                  if (Array.isArray(b)) return b;
                } catch (c) {}
                return [];
              };
              Na = function (a) {
                var b = window.document.createElement('link');
                b.href = a;
                b.rel = 'stylesheet';
                return b;
              };
              Pa = function (a) {
                Oa.push(a);
              };
              Qa = function (a) {
                var b = window.document.createDocumentFragment();
                a.forEach(function (a) {
                  return b.appendChild(a);
                });
                window.document.head.appendChild(b);
              };
              Ra = function (a) {
                a = Ma(a);
                var b = a
                  .filter(function (a) {
                    return !(0 <= Oa.indexOf(a));
                  })
                  .map(Na);
                a.forEach(Pa);
                Qa(b);
              };
              Sa = function (a) {
                var b = a.v();
                if (b) {
                  var c = b.querySelectorAll('.ob-dynamic-rec-link');
                  if (c)
                    return Array.from(c)
                      .map(function (c) {
                        return {
                          za: b,
                          Kx: c,
                          od: c.querySelector('.ob-grid-button-container'),
                          title: c.querySelector('.ob-rec-text'),
                          Yc: a.Dd(),
                        };
                      })
                      .filter(function (a) {
                        return !!a.od;
                      });
                }
              };
              nb = function (a) {
                return a.od.clientWidth / a.Kx.clientWidth > mb;
              };
              ob = function (a) {
                var b = window.getComputedStyle(a.od);
                var c = window.getComputedStyle(a.title).margin;
                b = Ba(b.margin);
                c = Ba(c);
                c = [b[0], b[1], b[2], c[3]];
                if (a.Yc) {
                  var d = OBR._jsc.w(c);
                  c = d.next().value;
                  b = d.next().value;
                  var e = d.next().value;
                  d = d.next().value;
                  c = [c, d, e, b];
                }
                a.title.style.margin = c.join(' ');
                a.od.setAttribute(
                  'style',
                  'display:block;width:100%;margin:' +
                    c.join(' ') +
                    ';width: calc(100% - ' +
                    ((0, window.parseInt)(c[1]) + (0, window.parseInt)(c[3])) +
                    'px)'
                );
                a.od.parentElement.appendChild(a.od);
              };
              pb = function () {
                try {
                  return window.document.cookie;
                } catch (a) {}
                return '';
              };
              qb = function (a) {
                a = 'OB-USER-TOKEN=' + (0, window.encodeURIComponent)(a);
                for (
                  var b = [
                      a,
                      'max-age=7776000',
                      'expires=' + new Date(Date.now() + 7776000).toUTCString(),
                      'path=/;samesite=lax',
                    ].join(';'),
                    c = window.document.location.hostname.split('.'),
                    d = c.length - 1;
                  0 <= d;
                  d--
                ) {
                  try {
                    window.document.cookie = b + ';domain=.' + c.slice(d).join('.') + ';';
                  } catch (e) {}
                  if (-1 < pb().indexOf(a)) {
                    window.OBR.j.log('pub cookie is set');
                    break;
                  }
                }
              };
              rb = function () {
                var a = pb().match(/OB-USER-TOKEN=([^;]+)(;|$)/),
                  b = '';
                a && 1 < a.length && (b = (0, window.decodeURIComponent)(a[1]));
                return b;
              };
              tb = function () {
                this.Nb = window.OBR;
                this.Ga = { height: 0, width: 0 };
                this.ni = 300;
                this.Xh = null;
                sb(this);
              };
              sb = function (a) {
                window.OBR.b.Da(window, 'resize', function () {
                  ub(a);
                  vb(a);
                });
                ub(a);
                vb(a);
              };
              ub = function (a) {
                a.Ga = {
                  height: Math.max(
                    window.document.documentElement.clientHeight,
                    window.innerHeight || 0
                  ),
                  width: Math.max(
                    window.document.documentElement.clientWidth,
                    window.innerWidth || 0
                  ),
                };
              };
              vb = function (a) {
                window.document &&
                  window.document.body &&
                  (a.ni = Math.max(
                    Math.max(
                      window.document.body.scrollHeight,
                      window.document.documentElement.scrollHeight
                    ),
                    Math.max(
                      window.document.body.offsetHeight,
                      window.document.documentElement.offsetHeight
                    ),
                    Math.max(
                      window.document.body.clientHeight,
                      window.document.documentElement.clientHeight
                    )
                  ));
              };
              OBR._jsc.wb = function () {
                var a = window.OBR.ka;
                return { x: 0, y: 0, width: a.Ga.width, height: a.Ga.height };
              };
              OBR._jsc.xb = function (a) {
                var b = 0;
                if (!a) return 10000;
                try {
                  if (a.offsetParent)
                    for (;;) {
                      b += a.offsetTop;
                      if (!a.offsetParent) break;
                      a = a.offsetParent;
                    }
                  else a.y && (b += a.y);
                } catch (c) {
                  return window.OBR.error(c), 10000;
                }
                return (0, window.parseInt)(b, 10);
              };
              yb = function (a, b) {
                b = b.rootBounds;
                a = {
                  left: Math.max(a.left, b.left),
                  right: Math.min(a.right, b.right),
                  top: Math.max(a.top, b.top),
                  bottom: Math.min(a.bottom, b.bottom),
                };
                a.width = a.right - a.left;
                a.height = a.bottom - a.top;
                return a;
              };
              zb = function (a, b) {
                b = b.boundingClientRect;
                a = a.getBoundingClientRect();
                return {
                  top: a.top + b.top,
                  bottom: a.bottom + b.top,
                  left: a.left + b.left,
                  right: a.right + b.left,
                  width: a.width,
                  height: a.height,
                };
              };
              Ab = function () {};
              Bb = function (a) {
                function b (a, b) {
                  a.map(function (c) {
                    var d = a[c].pixel;
                    d = (c = a[c].contextAware)
                      ? d
                      : 'https://widgets.outbrain.com/nanoWidget/externals/obPixelFrame/obPixelFrame.htm#p=' +
                        (0, window.encodeURIComponent)(d);
                    d = A.createElement({
                      type: c ? 'IMG' : 'IFRAME',
                      id: null,
                      css: 'display:none;height:1px;width:1px;',
                      attributes: { src: d },
                    });
                    b.appendChild(d);
                  });
                }
                var c = a.v();
                a &&
                  c &&
                  ((a = a.La('whenViewedPixels', null)),
                  (c = c.querySelector('.ob-pixels')),
                  a && c && b(a, c));
              };
              Db = function () {
                this.lb = { ready: 0, td: 3, Bk: 6, stopped: 7, kn: 8 };
                this.eb = !1;
                this.c = [];
                this.g = A.zf();
                this.u = !1;
                this.D = 0;
                this.M = 200;
                this.startTime = new Date().getTime();
                Cb(this);
                this.B = this.B.bind(this);
              };
              Gb = function (a, b) {
                A.log('Adding stats for: ' + b.W());
                if (b.i('tracking', !1)) Eb(a, b, a.lb.Bk);
                else if (b.pj()) Eb(a, b, a.lb.stopped);
                else if (Fb(b) || b.Bd()) Eb(a, b, a.lb.ready);
                else {
                  var c = b.na;
                  c && c.reason && c.reason !== window.OBR.pc.Nc.th
                    ? Eb(a, b, a.lb.kn)
                    : Eb(a, b, a.lb.ready);
                  a.B(b);
                }
              };
              Hb = function () {
                var a = window.OBR.sb;
                a.eb ||
                  (a.Ag(),
                  (0, window.setTimeout)(function () {
                    return (a.eb = !1);
                  }, a.M),
                  (a.eb = !0));
              };
              Fb = function (a) {
                a = a.i('recMode', '');
                return a.includes('top-box') || a.includes('bottom-box');
              };
              Cb = function (a) {
                A.log('Starting Statistics');
                A.ug(function () {
                  a.u = !0;
                  Ib(a);
                });
                A.log('AdBlock - Start full check for stats');
                Ea(window.OBR.Xa, { iw: !0 });
              };
              Eb = function (a, b, c) {
                var d = b.La('viewability_actions');
                if (void 0 !== d && null !== d && d.reportViewed && d.reportServed) {
                  d = b.La('viewability_actions');
                  d = ((d && c === a.lb.td && d.reportViewed) || d.reportServed).split('?');
                  var e = A.kg(d[1]);
                  e.tm = new Date().getTime() - a.startTime;
                  e.eT = c;
                  if (c === a.lb.ready) {
                    e = '' + A.Ne(e);
                    if (b) {
                      var f = window.document.body.getBoundingClientRect();
                      var g = b.v();
                      if (g) {
                        var k = g.getBoundingClientRect();
                        f =
                          '&widgetWidth=' +
                          Math.round(k.width || g.clientWidth) +
                          '&widgetHeight=' +
                          Math.round(k.height || g.clientHeight) +
                          '&widgetX=' +
                          Math.round(k.left - f.left) +
                          '&widgetY=' +
                          Math.round(k.top - f.top);
                      } else f = '';
                    } else f = '';
                    g = window.OBR.Pd.qd;
                    !b || -1 === g || window.OBR.Pd.wp
                      ? (g = '')
                      : ((window.OBR.Pd.wp = !0), (g = '&tpcs=' + g));
                    f = e + f + g;
                  } else f = A.Ne(e);
                  e = [];
                  e.push(d[0] + '?' + f);
                  e.push('&wRV=' + window.OBR.f.Kc);
                  a: {
                    try {
                      if (0 === (0, window.parseInt)(b.m('pad', '0'))) {
                        b.hp(!1);
                        var h = !1;
                        break a;
                      }
                      if ('undefined' === typeof b.oj()) {
                        var l = 'undefined' === typeof b.oj() ? Ia(b.W(), c) : !1;
                        b.hp(l);
                        h = l;
                        break a;
                      }
                    } catch (m) {
                      window.OBR.j.log(
                        'updatePaidRecsViewability: in detection of visible paid recs'
                      );
                    }
                    h = b.oj();
                  }
                  e.push('&pVis=' + (h ? '1' : '0'));
                  e.push('&lsd=' + b.m('lsd', -1));
                  e.push('&eIdx=');
                  c === a.lb.td && e.push(a.D++);
                  c !== a.lb.td &&
                    ((c = b.m('cnsnt', '')),
                    (h = b.m('cnsntv2', '')),
                    (b = b.m('ccpa', '')),
                    '' !== c && e.push('&cnsnt=' + c),
                    '' !== b && e.push('&ccpa=' + b),
                    '' !== h && e.push('&cnsntV2=' + h));
                  a.o || (e.push('&cheq=' + window.OBR.ya.Wd), (a.o = !0));
                  b = e.join('');
                  A.log('Stats waiting list: ' + b);
                  a.g.add(b);
                  a.u && Ib(a);
                }
              };
              Ib = function (a) {
                for (; !a.g.Gb(); ) {
                  var b = a.g.top(),
                    c = '&ab=' + A.Ei() + '&wl=' + A.Zi();
                  '&ab=0&wl=2' === c &&
                    window.OBR.error({
                      name: 'adblock',
                      message: 'got 0 2 in ad blocker detection',
                    });
                  b += c;
                  window.OBR.ib.send(window.OBR.f.N.ld, b, {});
                }
              };
              Jb = function (a, b) {
                b &&
                  ((b = a.innerText || a.textContent),
                  (b =
                    0 < b.lastIndexOf(' ')
                      ? b.substring(0, b.lastIndexOf(' '))
                      : b.substring(0, b.length - 3)),
                  -1 < ".,-_' ".indexOf(b.slice(-1)) && (b = b.substring(0, b.length - 1)),
                  (a.innerHTML = b + '&hellip;'));
              };
              Kb = function (a, b) {
                function c () {
                  for (var a = 0; a < e.length; a++) {
                    var b = e[a];
                    b.title = b.innerText || b.textContent;
                    var c = b.title,
                      h = b.clientHeight,
                      l = (0, window.parseInt)(window.OBR.b.ob(b, 'max-height').replace('px', ''));
                    if (!(h < l)) {
                      var m = b.cloneNode(!0);
                      h = window.document.createElement('div');
                      h.style.position = 'absolute';
                      h.style.top = '-1000px';
                      h.style.left = '-1000px';
                      window.document.body.appendChild(h);
                      var n = m.style;
                      n.fontSize = window.OBR.b.ob(b, 'font-size');
                      n.fontWeight = window.OBR.b.ob(b, 'font-weight');
                      n.fontFamily = window.OBR.b.ob(b, 'font-family');
                      n.lineHeight = window.OBR.b.ob(b, 'line-height');
                      n.textTransform = window.OBR.b.ob(b, 'text-transform');
                      n.letterSpacing = window.OBR.b.ob(b, 'letter-spacing');
                      n.display = 'block';
                      n.visibility = 'hidden';
                      var q = window.OBR.b.ob(b, 'padding-right').replace('px', ''),
                        r = window.OBR.b.ob(b, 'padding-left').replace('px', '');
                      n.width = b.clientWidth - r - q + 'px';
                      h.appendChild(m);
                      n = void 0;
                      for (
                        q = m.innerText || m.textContent;
                        0 < l && m.offsetHeight > l && 0 < q.length;

                      )
                        (q = q.substring(0, q.length - 1)), (m.innerHTML = q), (n = !0);
                      0 === q.length
                        ? (n = !1)
                        : ((l = m.offsetHeight),
                          Jb(m, n),
                          l < m.offsetHeight &&
                            ((q = q.substring(0, q.length - 1)), (m.innerHTML = q), Jb(m, n)));
                      l = n;
                      !0 === l
                        ? ((m = m.innerText || m.textContent),
                          d
                            ? ((c = { to: c, Hp: m }),
                              (m = void 0 === c.Hp ? '' : c.Hp),
                              (c =
                                m.length / (void 0 === c.to ? '' : c.to).length <
                                (void 0 === c.threshold ? 0.5 : c.threshold)
                                  ? ''
                                  : m))
                            : (c = m),
                          (b.innerHTML = c))
                        : !1 === l &&
                          window.OBR.j.log(
                            'Truncation - External CSS broke the calculation, truncation is canceled.'
                          );
                      h.parentNode.removeChild(h);
                    }
                  }
                }
                var d = void 0 === d ? !1 : d;
                var e = window.OBR.b.getElementsByClassName(void 0 === b ? 'ob-rec-text' : b, a);
                0 === window.OBR.b.getElementsByClassName('ob-touch-strip-layout', a).length
                  ? c()
                  : (0, window.setTimeout)(c, 1000);
              };
              Lb = function (a) {
                var b = !1;
                (a = a.querySelector('.ob-widget')) &&
                  a.attributes['data-dynamic-truncate'] &&
                  'true' === a.attributes['data-dynamic-truncate'].value &&
                  (b = !0);
                return b;
              };
              OBR._jsc.Mb = function (a, b, c, d, e) {
                c = void 0 === c ? !1 : c;
                d = void 0 === d ? !1 : d;
                e = void 0 === e ? !1 : e;
                var f = window.OBR.b.v(b);
                if (f) {
                  var g = Lb(f);
                  (e && 'undefined' != f.style.webkitLineClamp) ||
                    !(g || c || d) ||
                    (0, window.setTimeout)(
                      function () {
                        var a = window.OBR.b.v(b);
                        g && Kb(a, 'ob-rec-text');
                        c && Kb(a, 'ob-rec-source');
                        d && Kb(a, 'ob-rec-description');
                      }.bind(a),
                      500
                    );
                } else window.OBR.j.log('truncation - no container found for widgetIdx=' + b);
              };
              Ob = function (a) {
                a = Object.assign(
                  {
                    timestamp: +new Date(),
                    sessionId: window.OBR.ya.Di,
                    url: window.OBR.ya.yf,
                    cheqSource: 1,
                  },
                  a
                );
                window.OBR.ib.send(window.OBR.f.N.ld, Nb, a);
              };
              Pb = function () {
                this.timeout = !1;
                this.o = (0, window.parseInt)(window.OBR.b.ba('OB-FD-TO', 500));
                this.ei = function () {};
                this.g = null;
                this.c = !1;
              };
              Rb = function () {
                var a = window.OBR.Xe;
                window.OBR.j.log('FD calling Cheq');
                return new window.Promise(function (b, c) {
                  var d = (0, window.setTimeout)(function () {
                    window.OBR.ya.Yd || ((a.timeout = !0), c({ type: 'timeout', Pw: null }));
                  }, a.o);
                  a.g = Date.now();
                  a.ei = function (c) {
                    c = (0, window.encodeURIComponent)(c);
                    window.OBR.ya.Yd = c;
                    (0, window.clearTimeout)(d);
                    c = Date.now() - a.g;
                    a.timeout
                      ? ((c = Object.assign({ cheqEvent: 2 }, { responseTime: c })), Ob(c))
                      : b({ type: 'success' });
                  };
                  var e = Qb(function (a) {
                    (0, window.clearTimeout)(d);
                    c({ type: 'error', Pw: a.message });
                  });
                  window.document.getElementsByTagName('head')[0].appendChild(e);
                });
              };
              Sb = function () {
                window.OBR.Xe.ei = function (a) {
                  a = (0, window.encodeURIComponent)(a);
                  window.OBR.ya.Yd = a;
                };
                var a = Qb(function () {});
                window.document.getElementsByTagName('head')[0].appendChild(a);
              };
              Qb = function (a) {
                var b = 'https:' === window.location.protocol ? 'https:' : 'http:',
                  c = window.document.createElement('script');
                c.className = 'ct_invocation_65349 ct_invocation_65349_0';
                c.setAttribute('jsonp', 'OBR.extern.onCheqResponse');
                c.src = b + '//ob.cheqzone.com/placement_invocation?id=65349&idx=0';
                c.onerror = a;
                return c;
              };
              Ub = function () {
                window.document && window.document.body
                  ? Tb()
                  : window.addEventListener('DOMContentLoaded', function () {
                      Tb();
                    });
              };
              Tb = function () {
                var a = window.document.createElement('div');
                a.className = 'ctcg_87158';
                a.setAttribute('style', 'width:1px;height:1px');
                window.document.body.appendChild(a);
              };
              Vb = function (a) {
                var b = window.OBR.Xe;
                if (!b.c) {
                  b.c = !0;
                  var c = function (a) {
                      return window.document && a
                        ? window.document.getElementsByClassName
                          ? window.document.getElementsByClassName(a)
                          : window.document.querySelectorAll('.' + a)
                        : null;
                    },
                    d = 'https:' === window.location.protocol ? 'https:' : 'http:',
                    e = window.document.createElement('script'),
                    f = c('ct_invocation_87158');
                  f = f ? f.length : null;
                  null === f
                    ? (b.c = !1)
                    : ((b = c('ctcg_87158')),
                      (e.className = 'ct_invocation_87158 ct_invocation_87158_' + f),
                      b && b[0] && (b[0].className = 'ctcg_87158_' + f),
                      e.setAttribute('tpc', '[ENTER_CLICK_URL_UNESCAPED]'),
                      e.setAttribute('tpi', '[ENTER_IMPRESSION_URL_UNESCAPED]'),
                      e.setAttribute(
                        'ch',
                        (function (a) {
                          a = {
                            Request_id: a.m('req_id', '-1'),
                            publisher_id: a.m('pid', '0'),
                            source_id: a.m('sid', '0'),
                            widget_id: a.m('widgetJsId', a.H()),
                            pv_id: a.m('pvId', '-1'),
                          };
                          try {
                            return JSON.stringify(a);
                          } catch (k) {
                            return '';
                          }
                        })(a)
                      ),
                      (e.src = d + '//ob.cheqzone.com/placement_invocation?id=87158&idx=' + f),
                      window.document.getElementsByTagName('head')[0].appendChild(e));
                }
              };
              Wb = function (a) {
                var b = a.m('req_id', null),
                  c = a.m('pid', null),
                  d = a.m('widgetJsId', null),
                  e = a.m('pvId', null),
                  f = a.m('sid', null),
                  g = window.OBR.b.ga(a.wa());
                d =
                  'https://fqtag.com/implement.js' +
                  ('?rt=display&org=XerMOk8ZaYDInXdxmR4z&s=' +
                    b +
                    '&p=' +
                    c +
                    '&a=' +
                    f +
                    '&cmp=' +
                    d +
                    '&rd=' +
                    g +
                    '&c1=' +
                    e);
                b = window.OBR.b.createElement('script', null, null, { src: d });
                c = window.OBR.b.createElement('noscript', null);
                c.insertAdjacentHTML(
                  'beforeend',
                  '<img src="' + d + '" width="1" height="1" border="0"/>'
                );
                a = a.v();
                d = window.document.createDocumentFragment();
                d.appendChild(b);
                d.appendChild(c);
                a.appendChild(d);
              };
              bc = function () {
                var a = !1,
                  b = null;
                return new window.Promise(function (c, d) {
                  var e = (0, window.btoa)(window.OBR.ya.yf);
                  window.OBR.j.log('FD call TCheck');
                  var f = (0, window.setTimeout)(function () {
                    a = !0;
                    window.OBR.j.log('FD TCheck timeout');
                    d({ type: 'timeout' });
                  }, 200);
                  b = Date.now();
                  window.OBR.ib.send(window.OBR.f.N.ld, Xb + '/' + e, null, function (e) {
                    var g = Date.now() - b;
                    a: {
                      var h = !1;
                      if (e) {
                        try {
                          h = JSON.parse(e).result;
                        } catch (l) {
                          e = null;
                          break a;
                        }
                        e = h;
                      } else e = void 0;
                    }
                    a && Ob({ cheqEvent: 3, responseTime: g });
                    (0, window.clearTimeout)(f);
                    window.OBR.j.log('FD got response from TCheck');
                    null === e && d({ type: 'error' });
                    c(e);
                  });
                });
              };
              cc = function () {
                function a () {
                  return Math.floor(65536 * (1 + Math.random()))
                    .toString(16)
                    .substring(1);
                }
                return a() + a() + '-' + a() + '-' + a() + '-' + a() + '-' + a() + a() + a();
              };
              dc = function () {
                window.OBR.j.log('FD Process started');
                this.Di = cc();
                this.g = new window.OBR.Qa();
                this.um = !1;
                this.Wd = 0;
                this.mb = 100;
                this.c = !1;
                this.Hd = this.gk = this.Yd = null;
                a: {
                  var a = window.document.querySelector('.OUTBRAIN');
                  if (a && (a = a.getAttribute('data-src')))
                    try {
                      var b = (0, window.decodeURIComponent)(a);
                      break a;
                    } catch (c) {}
                  b = void 0;
                }
                b =
                  b ||
                  window.OBR.b.Gf('property', 'og:url', 'meta', 'content') ||
                  window.OBR.b.Gf('rel', 'canonical', 'link', 'href') ||
                  window.location.href;
                a = window.document.createElement('a');
                a.href = b;
                this.yf = a.hostname;
              };
              fc = function (a) {
                var b;
                return ra(function (c) {
                  if (1 == c.c) {
                    b = window.OBR.b.ba('OB-FDE', null);
                    if (null !== b) {
                      '0' === b && (a.mb = 0);
                      c.c = 2;
                      return;
                    }
                    return ja(c, ec(a), 3);
                  }
                  2 != c.c && (b = c.B);
                  return c.return(b);
                });
              };
              ec = function (a) {
                var b;
                return ra(function (c) {
                  if (1 == c.c) return (c.u = 2), ja(c, gc(a), 4);
                  if (2 != c.c) return (b = c.B), c.return(b ? '2' : '0');
                  ka(c);
                  return c.return('0');
                });
              };
              gc = function (a) {
                var b, c;
                return ra(function (d) {
                  if (1 == d.c) return (d.u = 2), ja(d, bc(), 4);
                  if (2 != d.c) return (b = d.B), (a.mb = 2), d.return(b);
                  (c = ka(d)) && 'timeout' === c.type
                    ? (window.OBR.j.log('FD TCheck timeout'), (a.mb = 1))
                    : (a.mb = 7);
                  return d.return(!1);
                });
              };
              jc = function () {
                var a = window.OBR.ya,
                  b;
                ra(function (c) {
                  if (1 == c.c) return ja(c, fc(a), 2);
                  b = c.B;
                  switch (b) {
                    case '2':
                      hc(a);
                      break;
                    case '6':
                      Ub();
                    case '4':
                      a.mb = 6;
                      ic(a);
                      break;
                    case '0':
                      ic(a);
                      break;
                    case '5':
                      hc(a);
                      break;
                    default:
                      ic(a);
                  }
                  c.c = 0;
                });
              };
              hc = function (a) {
                var b;
                ra(function (c) {
                  switch (c.c) {
                    case 1:
                      return (c.u = 2), ja(c, Rb(), 4);
                    case 4:
                      window.OBR.j.log('FD got response from Cheq');
                      a.Wd = 1;
                      a.mb = 4;
                      c.c = 3;
                      c.u = 0;
                      break;
                    case 2:
                      (b = ka(c)),
                        (a.Hd = a.Di),
                        'timeout' === b.type
                          ? ((a.Wd = 2), window.OBR.j.log('FD Cheq timeout'), (a.mb = 3))
                          : ((a.Wd = 5), (a.mb = 5), window.OBR.j.log('FD Cheq error'));
                    case 3:
                      ic(a), (c.c = 0);
                  }
                });
              };
              kc = function (a, b) {
                a.g.add('onFDStatusReady', b);
              };
              ic = function (a) {
                var b = { mb: a.mb },
                  c = { cheqEvent: 0, exitReason: b.mb };
                b.data && b.data.ws && (c.responseTime = b.data.ws);
                Ob(c);
                a.um = !0;
                a.g.G('onFDStatusReady');
                window.OBR.j.log('FD finished');
              };
              lc = function (a) {
                if (a && (a = a.v())) {
                  var b = ['ob-dynamic-rec-container']
                    .map(function (a) {
                      return '.' + a;
                    })
                    .join(',');
                  return [].slice.call(a.querySelectorAll(b));
                }
              };
              mc = function (a) {
                if (!a) return null;
                var b = '.ob-rec-image-container .ob-rec-text .ob-rec-source .ob-rec-description .ob-grid-button-container .ob-rec-logo .ob-rec-date .ob-rec-author'
                  .split(' ')
                  .reduce(function (b, d) {
                    return a.querySelector(d) ? b + '1' : b + '0';
                  }, '');
                return b ? b : null;
              };
              nc = function (a) {
                if (a) return [a.v()];
              };
              oc = function () {
                this.startTime = Date.now();
                this.g = [];
              };
              pc = function () {
                this.u = new oc();
                this.Ob = this.Ob.bind(this);
                this.lj = this.lj.bind(this);
                this.Ac = this.Ac.bind(this);
                this.o = lc;
                this.g = nc;
                this.c = [];
              };
              qc = function () {
                var a = this;
                this.o = this.B = this.D = this.c = this.u = this.g = null;
                window.document.addEventListener(
                  'touchstart',
                  function (b) {
                    a.o = b.target;
                    a.B = Date.now();
                    a.g = b.touches[0].clientX;
                    a.u = b.touches[0].clientY;
                    a.c = 0;
                    a.D = 0;
                  },
                  !1
                );
                window.document.addEventListener(
                  'touchmove',
                  function (b) {
                    if (a.g && a.u) {
                      var c = b.touches[0].clientY;
                      a.c = a.g - b.touches[0].clientX;
                      a.D = a.u - c;
                    }
                  },
                  !1
                );
                window.document.addEventListener(
                  'touchend',
                  function (b) {
                    var c;
                    a.o === b.target &&
                      ((a.M = Date.now() - a.B),
                      (b = b.changedTouches || b.touches || []),
                      Math.abs(a.c) > Math.abs(a.D) &&
                        20 < Math.abs(a.c) &&
                        500 > a.M &&
                        (0 < a.c ? (c = 'swiped-left') : (c = 'swiped-right')),
                      c &&
                        ((b = {
                          dir: c.replace(/swiped-/, ''),
                          FB: (0, window.parseInt)(a.g, 10),
                          EB: (0, window.parseInt)((b[0] || {}).clientX || -1, 10),
                          HB: (0, window.parseInt)(a.ca, 10),
                          GB: (0, window.parseInt)((b[0] || {}).clientY || -1, 10),
                        }),
                        a.o.dispatchEvent(
                          new window.CustomEvent('swiped', {
                            bubbles: !0,
                            cancelable: !0,
                            detail: b,
                          })
                        ),
                        a.o.dispatchEvent(
                          new window.CustomEvent(c, { bubbles: !0, cancelable: !0, detail: b })
                        )),
                      (a.g = null),
                      (a.u = null),
                      (a.B = null));
                  },
                  !1
                );
              };
              rc = function (a) {
                this.s = a;
                a = this.s.i('exploreMoreWidgetId', null);
                var b = window.document.createElement('div');
                a: {
                  switch (this.s.i('exploreMoreAdviseBubbleArrowPosition', 'left')) {
                    case 'left':
                      var c = '26px';
                      break a;
                    case 'right':
                      c = 'calc(100% - 26px)';
                      break a;
                    case 'center':
                      c = '50%';
                      break a;
                  }
                  c = void 0;
                }
                this.options = {
                  Ua: a,
                  K: b,
                  Pc: {
                    text: this.s.i('exploreMoreAdviseBubbleText', null),
                    color: this.s.i('exploreMoreAdviseBubbleFontColor', '#fff'),
                    fontSize: this.s.i('exploreMoreAdviseBubbleFontSize', '13px'),
                    fontFamily: this.s.i('exploreMoreAdviseBubbleFontFamily', 'inherit'),
                    bgColor: this.s.i('exploreMoreAdviseBubbleBackgroundColor', '#2172ce'),
                    vr: c,
                  },
                  Yc: this.s.Dd(),
                };
              };
              tc = function (a) {
                var b = new window.DocumentFragment(),
                  c = a.options.K;
                b.appendChild(c);
                c.id = 'ob-explore-more';
                c.style =
                  'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;background-color:#fff;z-index:2147483647;overflow:auto;display:none;box-sizing:border-box;padding: 18px 12px;';
                c.innerHTML =
                  '<div class="OUTBRAIN" data-widget-id="' +
                  a.options.Ua +
                  '" data-src="' +
                  a.s.wa() +
                  '"></div>';
                (a = sc(a)) && c.insertBefore(a, c.firstChild);
                return b;
              };
              sc = function (a) {
                if (a.options.Pc.text) {
                  var b = window.document.createElement('div');
                  b.className = 'ob-explore-more-advise';
                  b.innerHTML =
                    '<style>.ob-explore-more-advise{--ob-em-bubble-bg-color:#2172ce;--ob-em-bubble-font-color:#fff;--ob-em-bubble-font-size:13px;--ob-em-bubble-font-family:inherit;--ob-em-bubble-arrow-left:26px;background-color:#2172ce;background-color:var(--ob-em-bubble-bg-color);color:#fff;color:var(--ob-em-bubble-font-color);font-size:13px;font-size:var(--ob-em-bubble-font-size);font-family:var(--ob-em-bubble-font-family);display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:4px;padding:8px 8px 8px 10px;position:relative;margin-bottom:12px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.ob-explore-more-advise[dir=rtl]{padding:8px 10px 8px 8px}.ob-explore-more-advise-x{width:20px;height:20px;-webkit-transform:scale(.9);transform:scale(.9);padding:0;border:0;background-color:#fff;background-color:var(--ob-em-bubble-font-color);-webkit-mask-image:url(https://widgets.outbrain.com/images/widgetIcons/icon-x.svg);mask-image:url(https://widgets.outbrain.com/images/widgetIcons/icon-x.svg);-webkit-box-flex:0;-ms-flex:0 0 20px;flex:0 0 20px;opacity:.7}.ob-explore-more-advise-x:hover{opacity:1}.ob-explore-more-advise-text{-webkit-box-flex:0;-ms-flex:0 1 calc(100% - 25px);flex:0 1 calc(100% - 25px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ob-explore-more-advise:after{content:"";display:block;width:0;height:0;border-left:11px solid transparent;border-right:11px solid transparent;border-top:12px solid #2172ce;border-top:12px solid var(--ob-em-bubble-bg-color);position:absolute;bottom:-11px;-webkit-transform-origin:top center;transform-origin:top center;-webkit-transform:translate(-50%);transform:translate(-50%);left:26px;left:var(--ob-em-bubble-arrow-left)}</style><span class="ob-explore-more-advise-text">' +
                    a.options.Pc.text +
                    '</span><button class="ob-explore-more-advise-x" type="button" title="Close"></button>';
                  b.style.setProperty &&
                    (b.style.setProperty('--ob-em-bubble-bg-color', a.options.Pc.bgColor),
                    b.style.setProperty('--ob-em-bubble-font-color', a.options.Pc.color),
                    b.style.setProperty('--ob-em-bubble-font-size', a.options.Pc.fontSize),
                    b.style.setProperty('--ob-em-bubble-font-family', a.options.Pc.fontFamily),
                    b.style.setProperty('--ob-em-bubble-arrow-left', a.options.Pc.vr));
                  a.options.Yc && ((b.style.direction = 'rtl'), b.setAttribute('dir', 'rtl'));
                  b.querySelector('button').addEventListener('click', function (a) {
                    a.preventDefault();
                    b.remove();
                  });
                  return b;
                }
              };
              uc = function (a) {
                0 <= window.OBR.f.lf.search(/fbios/gim)
                  ? (new qc(),
                    window.addEventListener('swiped-right', function () {
                      a.options.K.style.display = 'block';
                      a.options.K && window.OBR.controller.ec();
                    }))
                  : window.addEventListener('popstate', function () {
                      a.options.K.style.display = 'block';
                      a.options.K && window.OBR.controller.ec();
                    });
              };
              vc = function () {
                this.c = [];
                this.bj = this.bj.bind(this);
                this.aj = this.aj.bind(this);
              };
              wc = function (a) {
                a &&
                  window.document &&
                  window.document.body &&
                  a.forEach(function (a) {
                    a = window.OBR.b.createElement(
                      'img',
                      null,
                      'display:none;width:1px;height:1px',
                      { src: a.url, referrerpolicy: 'no-referrer' }
                    );
                    window.document.body.appendChild(a);
                  });
              };
              xc = function (a) {
                a &&
                  window.document &&
                  window.document.head &&
                  a.forEach(function (a) {
                    a = window.OBR.b.Aa('ob-pixel' + window.OBR.b.Qi(), a.url, !0, !0);
                    window.OBR.b.Fa(a);
                  });
              };
              zc = function (a, b, c, d, e) {
                var f = e.filter(function (a) {
                    return 1 === a.event;
                  }),
                  g = e.filter(function (a) {
                    return 2 === a.event;
                  });
                e = e.filter(function (a) {
                  return 3 === a.event;
                });
                a.Bi(b, d, f);
                yc(a, b, c, d, g, e);
              };
              Ac = function (a, b, c) {
                if (b && b.length) {
                  a = a.querySelector('.ob-pixels');
                  var d = window.document.createDocumentFragment(),
                    e = function (a) {
                      a = window.OBR.b.createElement(
                        'iframe',
                        null,
                        'display:none;width:1px;height:1px;',
                        {
                          src:
                            'https://widgets.outbrain.com/nanoWidget/externals/obPixelFrame/obPixelFrame.htm#p=' +
                            a.url,
                          sandbox: 'allow-scripts allow-same-origin',
                        }
                      );
                      d.appendChild(a);
                    },
                    f = function (a) {
                      a = window.OBR.b.createElement(
                        'img',
                        null,
                        'display:none;width:1px;height:1px;',
                        {
                          src: (0, window.decodeURIComponent)(a.url),
                          referrerpolicy: 'no-referrer',
                        }
                      );
                      d.appendChild(a);
                    };
                  b.forEach(c ? f : e);
                  a.appendChild(d);
                }
              };
              yc = function (a, b, c, d, e, f) {
                if ((c = Bc(c, d))) {
                  if (e && e.length) {
                    var g = e.filter(function (a) {
                      return 2 == a.method;
                    });
                    e = e.filter(function (a) {
                      return 1 == a.method;
                    });
                    a.observe(b, c, d, 2, e);
                    Cc(a, b, c, d, g);
                  }
                  f && f.length && a.observe(b, c, d, 3, f);
                }
              };
              Cc = function (a, b, c, d, e) {
                if (e && e.length) {
                  var f = Dc(b);
                  switch (
                    (0, window.parseInt)(b.i('mrc50JsTrackersFiringStrategy', Ec.onWidgetViewd))
                  ) {
                    case Ec.onWidgetViewd:
                      Fc(a, b, f, d, e);
                      break;
                    case Ec.onRecViewd:
                      Fc(a, b, c, d, e);
                      break;
                    case Ec.onRec50Viewed:
                      Fc(a, b, c, d, e, 0.5);
                      break;
                    case Ec.reelMRC50:
                      a.observe(b, c, d, 2, e);
                  }
                }
              };
              Gc = function (a, b, c) {
                if (c && c.length) {
                  (a = Bc(a, b)) ||
                    window.OBR.error({
                      name: 'JsTrackerError',
                      message: 'Missing jsTracker element',
                    });
                  var d = window.document.createDocumentFragment();
                  c.forEach(function (a) {
                    a = window.OBR.b.Aa(0, a.url, !0, !1);
                    d.appendChild(a);
                  });
                  window.OBR.b.yd(d, a);
                }
              };
              Fc = function (a, b, c, d, e, f) {
                b = {
                  threshold: f ? f : 0,
                  unobserve: !0,
                  callback: a.Bi.bind(a),
                  callbackParams: [b, d, e],
                  element: c,
                  checkAbsoluteVisibility: !0,
                };
                b = new window.OBR.IntersectionObserver(b);
                a.c.push(b);
                b.observe();
              };
              Dc = function (a) {
                if (a) return a.v();
              };
              Bc = function (a, b) {
                if (a) return a.querySelector('[data-pos="' + b + '"]');
              };
              Hc = function () {
                this.B = OBR._jsc.wb();
                this.o = 'loading' in window.document.createElement('img');
              };
              Jc = function (a) {
                var b = Ic;
                a &&
                  a.za &&
                  a.za.querySelectorAll('img.ob-lazy-img').forEach(function (a) {
                    a.setAttribute('loading', 'lazy');
                    b.c(a);
                  });
              };
              Kc = function (a, b) {
                var c = Ic;
                b = void 0 === b ? '.ob-lazy-bgimg, .ob-lazy-img' : b;
                [].slice.call(a.za.querySelectorAll(b)).forEach(function (d) {
                  d = {
                    callback: c.g.bind(c),
                    callbackParams: [a, d, b],
                    element: d,
                    rootMargin: '' + a.rootMargin,
                    threshold: [0, 0.5, 1],
                    unobserve: !0,
                  };
                  new window.OBR.IntersectionObserver(d).observe();
                });
              };
              Lc = function (a) {
                if (a) {
                  var b = !1,
                    c = window.NaN,
                    d = window.NaN,
                    e = !1,
                    f = a.querySelectorAll('a');
                  f &&
                    0 !== f.length &&
                    (f.forEach(function (a) {
                      a.addEventListener('click', function (a) {
                        if (e) return a.preventDefault(), !1;
                      });
                    }),
                    a.addEventListener('mousedown', function (f) {
                      b = !0;
                      c = f.clientX;
                      d = a.scrollLeft;
                      e = !1;
                      a && ((a.style.cursor = 'grabbing'), a.classList.add('ob-grabbing'));
                    }),
                    (f = function () {
                      b &&
                        ((b = !1),
                        a && ((a.style.cursor = ''), a.classList.remove('ob-grabbing')),
                        (a.scrollLeft = a.scrollLeft),
                        (e = a.scrollLeft !== d));
                    }),
                    a.addEventListener('mouseup', f),
                    a.addEventListener('mouseleave', f),
                    a.addEventListener('mousemove', function (e) {
                      b && (a.scrollLeft = d + (c - e.clientX));
                    }),
                    window.OBR.b.U(
                      '\n  .ob-grabbing {\n    scroll-behavior: auto !important;\n  }\n  .ob-grabbing a {\n    cursor: grabbing !important;\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing > * {\n    scroll-snap-align: none !important;\n  }\n  .ob-grabbing img {\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n  }\n  '
                    ));
                }
              };
              Mc = function (a, b) {
                this.s = a;
                this.u = b;
                this.o = window.OBR.f.Kj + 'logger/v1/widget/';
                this.g = this.s.m('req_id', -1) + new Date().getTime();
                this.c = !0;
              };
              ca =
                'function' == typeof Object.defineProperties
                  ? Object.defineProperty
                  : function (a, b, c) {
                      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
                    };
              t =
                'undefined' != typeof window && window === this
                  ? this
                  : 'undefined' != typeof window.global && null != window.global
                  ? window.global
                  : this;
              ba = (function () {
                var a = 0;
                return function (b) {
                  return 'jscomp_symbol_' + (b || '') + a++;
                };
              })();
              x('Promise', function (a) {
                function b (a) {
                  this.g = 0;
                  this.B = void 0;
                  this.c = [];
                  var b = this.o();
                  try {
                    a(b.resolve, b.reject);
                  } catch (h) {
                    b.reject(h);
                  }
                }
                function c () {
                  this.c = null;
                }
                function d (a) {
                  return a instanceof b
                    ? a
                    : new b(function (b) {
                        b(a);
                      });
                }
                if (a) return a;
                c.prototype.g = function (a) {
                  null == this.c && ((this.c = []), this.u());
                  this.c.push(a);
                };
                c.prototype.u = function () {
                  var a = this;
                  this.o(function () {
                    a.D();
                  });
                };
                var e = t.setTimeout;
                c.prototype.o = function (a) {
                  e(a, 0);
                };
                c.prototype.D = function () {
                  for (; this.c && this.c.length; ) {
                    var a = this.c;
                    this.c = [];
                    for (var b = 0; b < a.length; ++b) {
                      var c = a[b];
                      a[b] = null;
                      try {
                        c();
                      } catch (l) {
                        this.B(l);
                      }
                    }
                  }
                  this.c = null;
                };
                c.prototype.B = function (a) {
                  this.o(function () {
                    throw a;
                  });
                };
                b.prototype.o = function () {
                  function a (a) {
                    return function (d) {
                      c || ((c = !0), a.call(b, d));
                    };
                  }
                  var b = this,
                    c = !1;
                  return { resolve: a(this.Ha), reject: a(this.u) };
                };
                b.prototype.Ha = function (a) {
                  if (a === this) this.u(new TypeError('A Promise cannot resolve to itself'));
                  else if (a instanceof b) this.Cb(a);
                  else {
                    a: switch (typeof a) {
                      case 'object':
                        var c = null != a;
                        break a;
                      case 'function':
                        c = !0;
                        break a;
                      default:
                        c = !1;
                    }
                    c ? this.pa(a) : this.D(a);
                  }
                };
                b.prototype.pa = function (a) {
                  var b = void 0;
                  try {
                    b = a.then;
                  } catch (h) {
                    this.u(h);
                    return;
                  }
                  'function' == typeof b ? this.md(b, a) : this.D(a);
                };
                b.prototype.u = function (a) {
                  this.M(2, a);
                };
                b.prototype.D = function (a) {
                  this.M(1, a);
                };
                b.prototype.M = function (a, b) {
                  if (0 != this.g)
                    throw Error(
                      'Cannot settle(' +
                        a +
                        ', ' +
                        b +
                        '): Promise already settled in state' +
                        this.g
                    );
                  this.g = a;
                  this.B = b;
                  this.ca();
                };
                b.prototype.ca = function () {
                  if (null != this.c) {
                    for (var a = 0; a < this.c.length; ++a) f.g(this.c[a]);
                    this.c = null;
                  }
                };
                var f = new c();
                b.prototype.Cb = function (a) {
                  var b = this.o();
                  a.mf(b.resolve, b.reject);
                };
                b.prototype.md = function (a, b) {
                  var c = this.o();
                  try {
                    a.call(b, c.resolve, c.reject);
                  } catch (l) {
                    c.reject(l);
                  }
                };
                b.prototype.then = function (a, c) {
                  function d (a, b) {
                    return 'function' == typeof a
                      ? function (b) {
                          try {
                            e(a(b));
                          } catch (z) {
                            f(z);
                          }
                        }
                      : b;
                  }
                  var e,
                    f,
                    g = new b(function (a, b) {
                      e = a;
                      f = b;
                    });
                  this.mf(d(a, e), d(c, f));
                  return g;
                };
                b.prototype.catch = function (a) {
                  return this.then(void 0, a);
                };
                b.prototype.mf = function (a, b) {
                  function c () {
                    switch (d.g) {
                      case 1:
                        a(d.B);
                        break;
                      case 2:
                        b(d.B);
                        break;
                      default:
                        throw Error('Unexpected state: ' + d.g);
                    }
                  }
                  var d = this;
                  null == this.c ? f.g(c) : this.c.push(c);
                };
                b.resolve = d;
                b.reject = function (a) {
                  return new b(function (b, c) {
                    c(a);
                  });
                };
                b.race = function (a) {
                  return new b(function (b, c) {
                    for (var e = OBR._jsc.w(a), f = e.next(); !f.done; f = e.next())
                      d(f.value).mf(b, c);
                  });
                };
                b.all = function (a) {
                  var c = OBR._jsc.w(a),
                    e = c.next();
                  return e.done
                    ? d([])
                    : new b(function (a, b) {
                        function f (b) {
                          return function (c) {
                            g[b] = c;
                            h--;
                            0 == h && a(g);
                          };
                        }
                        var g = [],
                          h = 0;
                        do g.push(void 0), h++, d(e.value).mf(f(g.length - 1), b), (e = c.next());
                        while (!e.done);
                      });
                };
                return b;
              });
              var Nc;
              if ('function' == typeof Object.setPrototypeOf) Nc = Object.setPrototypeOf;
              else {
                var Oc;
                a: {
                  var Pc = { Ja: !0 },
                    Qc = {};
                  try {
                    Qc.__proto__ = Pc;
                    Oc = Qc.Ja;
                    break a;
                  } catch (a) {}
                  Oc = !1;
                }
                Nc = Oc
                  ? function (a, b) {
                      a.__proto__ = b;
                      if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                      return a;
                    }
                  : null;
              }
              OBR._jsc.Rc = Nc;
              fa.prototype.M = function (a) {
                this.B = a;
              };
              fa.prototype.return = function (a) {
                this.o = { return: a };
                this.c = this.ca;
              };
              OBR._jsc.Sc =
                'function' == typeof Object.create
                  ? Object.create
                  : function (a) {
                      function b () {}
                      b.prototype = a;
                      return new b();
                    };
              x('Array.prototype.find', function (a) {
                return a
                  ? a
                  : function (a, c) {
                      a: {
                        var b = this;
                        b instanceof String && (b = String(b));
                        for (var e = b.length, f = 0; f < e; f++) {
                          var g = b[f];
                          if (a.call(c, g, f, b)) {
                            a = g;
                            break a;
                          }
                        }
                        a = void 0;
                      }
                      return a;
                    };
              });
              x('String.prototype.startsWith', function (a) {
                return a
                  ? a
                  : function (a, c) {
                      var b = ua(this, a, 'startsWith'),
                        e = b.length,
                        f = a.length;
                      c = Math.max(0, Math.min(c | 0, b.length));
                      for (var g = 0; g < f && c < e; ) if (b[c++] != a[g++]) return !1;
                      return g >= f;
                    };
              });
              x('Object.is', function (a) {
                return a
                  ? a
                  : function (a, c) {
                      return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c;
                    };
              });
              x('Array.prototype.includes', function (a) {
                return a
                  ? a
                  : function (a, c) {
                      var b = this;
                      b instanceof String && (b = String(b));
                      var e = b.length;
                      c = c || 0;
                      for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                        var f = b[c];
                        if (f === a || Object.is(f, a)) return !0;
                      }
                      return !1;
                    };
              });
              x('String.prototype.includes', function (a) {
                return a
                  ? a
                  : function (a, c) {
                      return -1 !== ua(this, a, 'includes').indexOf(a, c || 0);
                    };
              });
              x('String.prototype.endsWith', function (a) {
                return a
                  ? a
                  : function (a, c) {
                      var b = ua(this, a, 'endsWith');
                      void 0 === c && (c = b.length);
                      c = Math.max(0, Math.min(c | 0, b.length));
                      for (var e = a.length; 0 < e && 0 < c; ) if (b[--c] != a[--e]) return !1;
                      return 0 >= e;
                    };
              });
              x('Array.from', function (a) {
                return a
                  ? a
                  : function (a, c, d) {
                      v();
                      c =
                        null != c
                          ? c
                          : function (a) {
                              return a;
                            };
                      var b = [],
                        f = a[window.Symbol.iterator];
                      if ('function' == typeof f)
                        for (a = f.call(a); !(f = a.next()).done; ) b.push(c.call(d, f.value));
                      else {
                        f = a.length;
                        for (var g = 0; g < f; g++) b.push(c.call(d, a[g]));
                      }
                      return b;
                    };
              });
              var Tc =
                'function' == typeof Object.assign
                  ? Object.assign
                  : function (a, b) {
                      for (var c = 1; c < arguments.length; c++) {
                        var d = arguments[c];
                        if (d)
                          for (var e in d)
                            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
                      }
                      return a;
                    };
              x('Object.assign', function (a) {
                return a || Tc;
              });
              x('Array.prototype.entries', function (a) {
                return a
                  ? a
                  : function () {
                      return ta(this, function (a, c) {
                        return [a, c];
                      });
                    };
              });
              x('Object.entries', function (a) {
                return a
                  ? a
                  : function (a) {
                      var b = [],
                        d;
                      for (d in a) Object.prototype.hasOwnProperty.call(a, d) && b.push([d, a[d]]);
                      return b;
                    };
              });
              Function.prototype.bind ||
                (Function.prototype.bind = function (a) {
                  function b () {
                    return e.apply(
                      this instanceof c ? this : a,
                      d.concat(Array.prototype.slice.call(arguments))
                    );
                  }
                  function c () {}
                  if ('function' !== typeof this)
                    throw new TypeError(
                      'Function.prototype.bind - what is trying to be bound is not callable'
                    );
                  var d = Array.prototype.slice.call(arguments, 1),
                    e = this;
                  this.prototype && (c.prototype = this.prototype);
                  b.prototype = new c();
                  return b;
                });
              window.NodeList &&
                !window.NodeList.prototype.forEach &&
                (window.NodeList.prototype.forEach = function (a, b) {
                  b = b || window;
                  for (var c = 0; c < this.length; c++) a.call(b, this[c], c, this);
                });
              (function () {
                if (!window.btoa) {
                  var a = {
                    gf: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    encode: function (b) {
                      var c = '',
                        d = 0;
                      for (b = a.Wq(b); d < b.length; ) {
                        var e = b.charCodeAt(d++);
                        var f = b.charCodeAt(d++);
                        var g = b.charCodeAt(d++);
                        var k = e >> 2;
                        e = ((e & 3) << 4) | (f >> 4);
                        var h = ((f & 15) << 2) | (g >> 6);
                        var l = g & 63;
                        (0, window.isNaN)(f) ? (h = l = 64) : (0, window.isNaN)(g) && (l = 64);
                        c =
                          c +
                          this.gf.charAt(k) +
                          this.gf.charAt(e) +
                          this.gf.charAt(h) +
                          this.gf.charAt(l);
                      }
                      return c;
                    },
                    Wq: function (a) {
                      a = a.replace(/\r\n/g, '\n');
                      for (var b = '', d = 0; d < a.length; d++) {
                        var e = a.charCodeAt(d);
                        128 > e
                          ? (b += String.fromCharCode(e))
                          : (127 < e && 2048 > e
                              ? (b += String.fromCharCode((e >> 6) | 192))
                              : ((b += String.fromCharCode((e >> 12) | 224)),
                                (b += String.fromCharCode(((e >> 6) & 63) | 128))),
                            (b += String.fromCharCode((e & 63) | 128)));
                      }
                      return b;
                    },
                  };
                  window.btoa = function (b) {
                    return a.encode(b);
                  };
                }
              })();
              (function () {
                const $___old_447c95f6d04eb4a0 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'performance'
                );
                try {
                  if ($___old_447c95f6d04eb4a0)
                    ({}.constructor.defineProperty(
                      window,
                      'performance',
                      $___stub_2b47892348e4e4b9.performance
                    ));
                  return function () {
                    function a (a, b) {
                      for (var c = e.length, d; c--; )
                        (d = e[c]),
                          d.entryType != a || (void 0 !== b && d.name != b) || e.splice(c, 1);
                    }
                    function b (a, b) {
                      for (var c = 0, d = e.length, f = []; c < d; c++)
                        e[c][a] == b && f.push(e[c]);
                      return f;
                    }
                    var c = Date.now ? Date.now() : +new Date(),
                      d = window.performance || {},
                      e = [],
                      f = {};
                    d.now ||
                      (d.now =
                        d.webkitNow ||
                        d.c ||
                        d.g ||
                        function () {
                          return (Date.now ? Date.now() : +new Date()) - c;
                        });
                    d.mark ||
                      (d.mark =
                        d.M ||
                        function (a) {
                          var b = { name: a, entryType: 'mark', startTime: d.now(), duration: 0 };
                          e.push(b);
                          f[a] = b;
                        });
                    d.measure ||
                      (d.measure =
                        d.ca ||
                        function (a, b, c) {
                          var g, h;
                          f[b] ? (g = f[b].startTime) : (g = 0);
                          f[c] ? (h = f[c].startTime) : (h = d.now());
                          e.push({ name: a, entryType: 'measure', startTime: g, duration: h - g });
                        });
                    d.getEntriesByType ||
                      (d.getEntriesByType =
                        d.D ||
                        function (a) {
                          return b('entryType', a);
                        });
                    d.getEntriesByName ||
                      (d.getEntriesByName =
                        d.B ||
                        function (a) {
                          return b('name', a);
                        });
                    d.clearMarks ||
                      (d.clearMarks =
                        d.o ||
                        function (b) {
                          a('mark', b);
                        });
                    d.clearMeasures ||
                      (d.clearMeasures =
                        d.u ||
                        function (b) {
                          a('measure', b);
                        });
                    window.performance = d;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_447c95f6d04eb4a0)
                    ({}.constructor.defineProperty(
                      window,
                      'performance',
                      $___old_447c95f6d04eb4a0
                    ));
                }
              })();
              (function (a) {
                a.forEach(function (a) {
                  a.hasOwnProperty('remove') ||
                    Object.defineProperty(a, 'remove', {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      value: function () {
                        null !== this.parentNode && this.parentNode.removeChild(this);
                      },
                    });
                });
              })(
                [window.Element, window.CharacterData]
                  .filter(function (a) {
                    return !!a;
                  })
                  .map(function (a) {
                    return a.prototype;
                  })
              );
              Array.prototype.indexOf ||
                (Array.prototype.indexOf = (function (a, b, c) {
                  return function (d, e) {
                    if (null === this || void 0 === this)
                      throw TypeError('Array.prototype.indexOf called on null or undefined');
                    var f = a(this),
                      g = f.length >>> 0;
                    e = c(e | 0, g);
                    if (0 > e) e = b(0, g + e);
                    else if (e >= g) return -1;
                    if (void 0 === d)
                      for (; e !== g; ++e) {
                        if (void 0 === f[e] && e in f) return e;
                      }
                    else if (d === d) for (; e !== g; ++e) if (f[e] === d) return e;
                    return -1;
                  };
                })(Object, Math.max, Math.min));
              window.MutationObserver ||
                (window.MutationObserver = (function (a) {
                  function b (a) {
                    this.ej = [];
                    this.rw = a;
                  }
                  function c (a) {
                    (function E () {
                      var c = a.takeRecords();
                      c.length && a.rw(c, a);
                      a.xd = (0, window.setTimeout)(E, b.c);
                    })();
                  }
                  function d (b) {
                    var c = {
                        type: null,
                        target: null,
                        addedNodes: [],
                        removedNodes: [],
                        previousSibling: null,
                        nextSibling: null,
                        attributeName: null,
                        attributeNamespace: null,
                        oldValue: null,
                      },
                      d;
                    for (d in b) c[d] !== a && b[d] !== a && (c[d] = b[d]);
                    return c;
                  }
                  function e (a, b) {
                    var c = l(a, b);
                    return function (e) {
                      var f = e.length;
                      b.Ja &&
                        3 === a.nodeType &&
                        a.nodeValue !== c.Ja &&
                        e.push(new d({ type: 'characterData', target: a, oldValue: c.Ja }));
                      b.kb && c.kb && k(e, a, c.kb, b.ce);
                      if (b.Tb || b.fe) var g = h(e, a, c, b);
                      if (g || e.length !== f) c = l(a, b);
                    };
                  }
                  function f (a, b) {
                    return b.value;
                  }
                  function g (a, b) {
                    return 'style' !== b.name ? b.value : a.style.cssText;
                  }
                  function k (b, c, e, f) {
                    for (var g = {}, h = c.attributes, k, l, n = h.length; n--; )
                      (k = h[n]),
                        (l = k.name),
                        (f && f[l] === a) ||
                          (z(c, k) !== e[l] &&
                            b.push(
                              d({
                                type: 'attributes',
                                target: c,
                                attributeName: l,
                                oldValue: e[l],
                                attributeNamespace: k.namespaceURI,
                              })
                            ),
                          (g[l] = !0));
                    for (l in e)
                      g[l] ||
                        b.push(
                          d({ target: c, type: 'attributes', attributeName: l, oldValue: e[l] })
                        );
                  }
                  function h (b, c, e, f) {
                    function g (a, c, e, g, l) {
                      var n = a.length - 1;
                      l = -~((n - l) / 2);
                      for (var m, q, r; (r = a.pop()); )
                        (m = e[r.rj]),
                          (q = g[r.sj]),
                          f.Tb &&
                            l &&
                            Math.abs(r.rj - r.sj) >= n &&
                            (b.push(
                              d({
                                type: 'childList',
                                target: c,
                                addedNodes: [m],
                                removedNodes: [m],
                                nextSibling: m.nextSibling,
                                previousSibling: m.previousSibling,
                              })
                            ),
                            l--),
                          f.kb && q.kb && k(b, m, q.kb, f.ce),
                          f.Ja &&
                            3 === m.nodeType &&
                            m.nodeValue !== q.Ja &&
                            b.push(d({ type: 'characterData', target: m, oldValue: q.Ja })),
                          f.fe && h(m, q);
                    }
                    function h (c, e) {
                      for (
                        var n = c.childNodes,
                          q = e.Tb,
                          z = n.length,
                          u = q ? q.length : 0,
                          F,
                          B,
                          y,
                          E,
                          K,
                          T = 0,
                          I = 0,
                          L = 0;
                        I < z || L < u;

                      )
                        (E = n[I]),
                          (K = (y = q[L]) && y.node),
                          E === K
                            ? (f.kb && y.kb && k(b, E, y.kb, f.ce),
                              f.Ja &&
                                y.Ja !== a &&
                                E.nodeValue !== y.Ja &&
                                b.push(d({ type: 'characterData', target: E, oldValue: y.Ja })),
                              B && g(B, c, n, q, T),
                              f.fe && (E.childNodes.length || (y.Tb && y.Tb.length)) && h(E, y),
                              I++,
                              L++)
                            : ((l = !0),
                              F || ((F = {}), (B = [])),
                              E &&
                                (F[(y = m(E))] ||
                                  ((F[y] = !0),
                                  -1 === (y = r(q, E, L, 'node'))
                                    ? f.Tb &&
                                      (b.push(
                                        d({
                                          type: 'childList',
                                          target: c,
                                          addedNodes: [E],
                                          nextSibling: E.nextSibling,
                                          previousSibling: E.previousSibling,
                                        })
                                      ),
                                      T++)
                                    : B.push({ rj: I, sj: y })),
                                I++),
                              K &&
                                K !== n[I] &&
                                (F[(y = m(K))] ||
                                  ((F[y] = !0),
                                  -1 === (y = r(n, K, I))
                                    ? f.Tb &&
                                      (b.push(
                                        d({
                                          type: 'childList',
                                          target: e.node,
                                          removedNodes: [K],
                                          nextSibling: q[L + 1],
                                          previousSibling: q[L - 1],
                                        })
                                      ),
                                      T--)
                                    : B.push({ rj: y, sj: L })),
                                L++));
                      B && g(B, c, n, q, T);
                    }
                    var l;
                    h(c, e);
                    return l;
                  }
                  function l (a, b) {
                    var c = !0;
                    return (function I (a) {
                      var d = { node: a };
                      !b.Ja || (3 !== a.nodeType && 8 !== a.nodeType)
                        ? (b.kb &&
                            c &&
                            1 === a.nodeType &&
                            (d.kb = q(
                              a.attributes,
                              function (c, d) {
                                if (!b.ce || b.ce[d.name]) c[d.name] = z(a, d);
                                return c;
                              },
                              {}
                            )),
                          c && (b.Tb || b.Ja || (b.kb && b.fe)) && (d.Tb = n(a.childNodes, I)),
                          (c = b.fe))
                        : (d.Ja = a.nodeValue);
                      return d;
                    })(a);
                  }
                  function m (a) {
                    try {
                      return a.id || (a.Ow = a.Ow || B++);
                    } catch (y) {
                      try {
                        return a.nodeValue;
                      } catch (E) {
                        return B++;
                      }
                    }
                  }
                  function n (a, b) {
                    for (var c = [], d = 0; d < a.length; d++) c[d] = b(a[d], d, a);
                    return c;
                  }
                  function q (a, b, c) {
                    for (var d = 0; d < a.length; d++) c = b(c, a[d], d, a);
                    return c;
                  }
                  function r (a, b, c, d) {
                    for (; c < a.length; c++) if ((d ? a[c][d] : a[c]) === b) return c;
                    return -1;
                  }
                  b.c = 30;
                  b.prototype = {
                    observe: function (a, b) {
                      for (
                        var d = {
                            kb: !!(b.attributes || b.attributeFilter || b.attributeOldValue),
                            Tb: !!b.childList,
                            fe: !!b.subtree,
                            Ja: !(!b.characterData && !b.characterDataOldValue),
                          },
                          f = this.ej,
                          g = 0;
                        g < f.length;
                        g++
                      )
                        f[g].dy === a && f.splice(g, 1);
                      b.attributeFilter &&
                        (d.ce = q(
                          b.attributeFilter,
                          function (a, b) {
                            a[b] = !0;
                            return a;
                          },
                          {}
                        ));
                      f.push({ dy: a, Zw: e(a, d) });
                      this.xd || c(this);
                    },
                    takeRecords: function () {
                      for (var a = [], b = this.ej, c = 0; c < b.length; c++) b[c].Zw(a);
                      return a;
                    },
                    disconnect: function () {
                      this.ej = [];
                      (0, window.clearTimeout)(this.xd);
                      this.xd = null;
                    },
                  };
                  var u = window.document.createElement('i');
                  u.style.top = 0;
                  var z = (u = 'null' != u.attributes.style.value) ? f : g,
                    B = 1;
                  return b;
                })(void 0));
              if (window.OB_releaseVer && '2000129' !== window.OB_releaseVer) throw !0;
              window.OB_releaseVer = '2000129';
              window.OBR = window.OBR || {};
              window.OBR.A = window.OBR.A || [];
              window.OBR.Ed = window.OBR.Ed || {};
              window.OBR$ = function (a) {
                return window.document.getElementById(a);
              };
              OBR._jsc.C = (function (a) {
                var b = 'transform';
                'undefined' === typeof a.style[b] &&
                  ['webkit', 'Moz', 'O', 'ms'].every(function (c) {
                    c += 'Transform';
                    return 'undefined' !== typeof a.style[c] ? ((b = c), !1) : !0;
                  });
                return b;
              })(window.document.createElement('div'));
              window.OBR.b =
                window.OBR.b ||
                (function () {
                  var a = {},
                    b = {},
                    c = window.document,
                    d = window.OBR,
                    e = null;
                  a.NA = 'function' === typeof window.URLSearchParams;
                  b.Ba = function () {
                    a.Nb = d;
                    return a;
                  };
                  b.w = function (a) {
                    d = a;
                  };
                  b.rd = function () {
                    return function () {};
                  };
                  b.Gn = function () {
                    var a = ' -webkit- -moz- -o- -ms- '.split(' ');
                    'ontouchstart' in window ||
                    (window.DocumentTouch && window.document instanceof window.DocumentTouch)
                      ? (a = !0)
                      : ((a = ['(', a.join('touch-enabled),('), 'heartz)'].join('')),
                        (a = window.matchMedia && window.matchMedia(a).matches));
                    return a;
                  };
                  b.ym = function () {
                    var a = window.OBR.ka.Ga;
                    return a.width > a.height ? 'landscape' : 'portrait';
                  };
                  b.Ym = function () {
                    var a = window.jQuery;
                    return void 0 !== a
                      ? !(
                          /1\.(0|1|2|3|4)\.(0|1)/.test(a.fn.jquery) ||
                          /^1\.1/.test(a.fn.jquery) ||
                          /^1\.2/.test(a.fn.jquery) ||
                          /^1\.3/.test(a.fn.jquery)
                        )
                      : !1;
                  };
                  b.v = function (a) {
                    return null === a || (0, window.isNaN)(a)
                      ? null
                      : d.la('outbrain_widget_' + a);
                  };
                  b.Hf = function () {
                    return d.la('ob_holder');
                  };
                  b.Ll = function (a) {
                    var c = b.Hf();
                    null === c &&
                      ((c = d.b.createElement('div', 'ob_holder')),
                      (c.style.display = 'none'),
                      a ? d.b.insertBefore(c, a) : window.document.body.appendChild(c));
                    return c;
                  };
                  b.jn = function (a, c) {
                    var e = d.la(a);
                    e ||
                      ((e = d.b.createElement('iframe', a)),
                      (a = e.style),
                      (a.display = 'none'),
                      (a.width = '1px'),
                      (a.height = '1px'),
                      (e.src = c || 'about:blank'),
                      (c = b.Hf()) || (c = b.vd()),
                      d.b.yd(e, c));
                  };
                  b.vd = function () {
                    if (c.body) return c.body;
                    var a;
                    var b = d.b.bb('', '', 'body', !0);
                    0 >= b.length ? (a = c.lastChild) : (a = b[0]);
                    return a;
                  };
                  b.createElement = function (a, b, d, e) {
                    var f;
                    a = c.createElement(a);
                    'string' === typeof b && a.setAttribute('id', b);
                    'string' === typeof d && (a.style.cssText = d);
                    for (f in e) e.hasOwnProperty(f) && a.setAttribute(f, e[f]);
                    return a;
                  };
                  b.U = function (a) {
                    if (d.f.Sb === d.f.gh)
                      try {
                        c.createStyleSheet().cssText = a;
                      } catch (h) {
                        window.OBR.j.log(h);
                      }
                    else {
                      var b = c.createElement('style'),
                        e = c.body ? 'string' === typeof c.body.style.WebkitAppearance : !1;
                      b.type = 'text/css';
                      c.getElementsByTagName('head')[0].appendChild(b);
                      b[e ? 'innerText' : 'innerHTML'] = a;
                    }
                  };
                  b.Aa = function (a, b, e, h, l, m) {
                    a = c.createElement('script');
                    a.type = d.f.fw;
                    a.src = b;
                    a.charset = 'UTF-8';
                    a.async = !!e;
                    a.defer = !1;
                    if (m) for (var f in m) m.hasOwnProperty(f) && a.setAttribute(f, m[f]);
                    h &&
                      d.b.Da(a, 'load', function (a) {
                        var b = a.target;
                        b &&
                          (0, window.setTimeout)(function () {
                            b.parentNode.removeChild(b);
                          }, 3000);
                      });
                    typeof l === d.f.ud && d.b.Da(a, 'load', l);
                    return a;
                  };
                  b.sA = function (a, b) {
                    a = d.b.createElement('link', a);
                    a.setAttribute('rel', 'stylesheet');
                    a.setAttribute('type', d.f.Ss);
                    b && a.setAttribute('href', b);
                    return a;
                  };
                  b.Wr = function (a) {
                    var b = d.la('ob_iframe');
                    b && (b.src = a);
                  };
                  b.Lr = function (a) {
                    var b = window.OBR.la(d.f.Qf);
                    d.b.Cd(b) && d.b.Cd(b.parentNode) && b.parentNode.removeChild(b);
                    d.b.jn(d.f.Qf);
                    d.b.Wr(a);
                  };
                  b.qg = function (a) {
                    a = (0, window.isNaN)(a) ? 100000 : a;
                    return Math.floor(Math.random() * a);
                  };
                  b.pB = function (a, b, c) {
                    return a.replace(b, c);
                  };
                  b.Fa = function (a) {
                    var b = c.getElementsByTagName('head');
                    try {
                      if (b && 0 < b.length) b[0].appendChild(a);
                      else {
                        var e = c.getElementsByTagName('script');
                        e[0].insertBefore(a, e[0].firstChild);
                      }
                    } catch (h) {
                      d.j.log('Err insertToHead:' + h);
                    }
                  };
                  b.HA = function (a) {
                    a = a || window.OBR;
                    return 'function' !== typeof a.Qa
                      ? (window.OBR.j.log('namespace.EventManager not function'), null)
                      : new a.Qa();
                  };
                  b.ga = function (a) {
                    return (0, window.encodeURIComponent)(a);
                  };
                  b.Cd = function (a) {
                    return null !== a;
                  };
                  b.fc = function (a) {
                    var b = window.document.createElement('div');
                    b.innerHTML = a;
                    return b.firstChild;
                  };
                  b.Ou = function (a) {
                    var b = window;
                    try {
                      return a.split('.').every(function (a) {
                        if ('object' !== typeof b || null === b || !(a in b)) return !1;
                        b = b[a];
                        return !0;
                      });
                    } catch (k) {
                      return !1;
                    }
                  };
                  b.Rv = function (a) {
                    var c = !1;
                    if (b.ue(a)) return !1;
                    var e = a.Wc().recMode || '';
                    a = a.Wc().dynamicWidgetLayout || '';
                    e = d.f.fy[e] || '';
                    '2' === e && '1' === (d.f.gy[a] || '') && (c = !0);
                    c || ('1' !== e && '3' !== e) || (c = !0);
                    return c;
                  };
                  b.ue = function (a) {
                    return void 0 === a || null === a;
                  };
                  b.Yv = function (a) {
                    return b.ue(a) || '' === a;
                  };
                  b.getElementsByClassName = function (a, c) {
                    c || (c = window.document);
                    return c.getElementsByClassName
                      ? c.getElementsByClassName(a)
                      : b.bb('class', a, '*', !0, !0, c);
                  };
                  b.bb = function (a, d, e, h, l, m) {
                    var f;
                    var g = [];
                    e = e || '*';
                    h = !!h;
                    l = !!b.Yv(l);
                    e = m ? m.getElementsByTagName(e) : c.getElementsByTagName(e);
                    m = 0;
                    for (f = e.length; m < f; m += 1) {
                      var k = 'class' === a ? e[m].className : e[m].getAttribute(a);
                      null !== k &&
                        (!1 === l && ((k = k.toLowerCase()), (d = d.toLowerCase())),
                        (k = '' === a ? !0 : h ? -1 < k.indexOf(d) : k === d) && g.push(e[m]));
                    }
                    return g;
                  };
                  b.dc = function (a, b, c) {
                    a.removeEventListener
                      ? a.removeEventListener(b, c, !0)
                      : a.detachEvent && a.detachEvent('on' + b, c);
                  };
                  b.Da = function (a, b, c) {
                    a.addEventListener
                      ? a.addEventListener(b, c, !0)
                      : a.attachEvent &&
                        typeof a.attachEvent === d.f.ud &&
                        a.attachEvent('on' + b, function () {
                          c.call(a);
                        });
                  };
                  b.yd = function (a, b) {
                    try {
                      b.appendChild(a);
                    } catch (k) {
                      d.j.log('Fail insert into Dom:' + k);
                    }
                  };
                  b.Xj = function (a) {
                    a = d.la(a);
                    !b.ue(a) && b.Cd(a.parentNode) && a.parentNode.removeChild(a);
                  };
                  b.ed = function (a) {
                    a && window.OBR.b.Cd(a.parentNode) && a.parentNode.removeChild(a);
                  };
                  b.insertBefore = function (a, b) {
                    return b && b.parentNode ? b.parentNode.insertBefore(a, b) : null;
                  };
                  b.isArray = function (a) {
                    return a instanceof Array
                      ? !0
                      : '[object Array]' === Object.prototype.toString.call(a);
                  };
                  b.Mb = function (a, b) {
                    var c = /^htt(p|ps)?:\/\/127\.0\.0\.1(:\d\d\d\d)?(\/|$)/i,
                      d = /^https?:\/\/simulator\.[\w]*\.service\.[\w]*\.consul/i;
                    return /^htt(p|ps)?:\/\/([\w\-]*|[\w\-]*\.[\w\-]*)\.outbrain\.com(:\d\d\d\d)?(\/|$)/i.test(
                      a
                    ) ||
                      c.test(a) ||
                      d.test(a)
                      ? a
                      : b;
                  };
                  b.sz = function (a) {
                    a = a.replace(/^(\s*)/g, '');
                    var b = c.createElement('div');
                    b.innerHTML = a;
                    return b.childNodes;
                  };
                  b.sa = function (a, b) {
                    return a ? a.getAttribute(b) : null;
                  };
                  b.Ta = function (a, b, c) {
                    a && a.setAttribute(b, c);
                  };
                  b.Sx = function (a) {
                    a && a.removeAttribute('noscroll');
                  };
                  b.Xm = function (a, b) {
                    return new RegExp('(^|\\s)' + b + '(\\s|$)').test(a.className);
                  };
                  b.V = function (a, b) {
                    var c = new RegExp('[ \'"|]' + b + '[ \'"|]');
                    a && !c.test('|' + a.className + '|') && (a.className += ' ' + b);
                  };
                  b.aa = function (a, b) {
                    a &&
                      typeof b === d.f.zp &&
                      (a.classList
                        ? a.classList.remove(b)
                        : (a.className = a.className.replace(
                            new RegExp('(^|\\b)' + b + '(\\b|$)', 'gi'),
                            ' '
                          )));
                  };
                  b.gc = function (a, b) {
                    if (a && typeof b === d.f.zp)
                      if (a.classList) a.classList.toggle(b);
                      else {
                        var c = a.className.split(' '),
                          e = c.indexOf(b);
                        0 <= e ? c.splice(e, 1) : c.push(b);
                        a.className = c.join(' ');
                      }
                  };
                  b.O = ya();
                  b.fc = OBR._jsc.za;
                  b.Nm = function () {
                    var a = null,
                      c = b.ba('OB-PUB-IN', null);
                    if (c)
                      try {
                        c = JSON.parse(c);
                        var d = window.document.querySelector(c.selector);
                        if (d) {
                          var e = c.text;
                          a =
                            d.innerText && d.innerText.toLowerCase() === e.toLowerCase()
                              ? '0'
                              : '1';
                        } else a = '1';
                      } catch (l) {
                        return null;
                      }
                    return a;
                  };
                  b.ys = function (a) {
                    'string' === typeof a &&
                      0 < a.indexOf('#') &&
                      (a = a.substr(0, a.lastIndexOf('#')));
                    return a;
                  };
                  b.Cl = function (a) {
                    var b = d.f.ub + '/strip_default.png';
                    a.src !== b &&
                      ((a.alt = ''),
                      (a.title = ''),
                      (a.src = b),
                      a.parentElement && (a.parentElement.style.overflow = 'hidden'));
                  };
                  b.gt = function () {
                    var a = null,
                      b;
                    if ('string' === typeof window.OB_MP_feed) a = window.OB_MP_feed;
                    else if ((b = c.getElementsByTagName('head')) && 0 < b.length) {
                      var d = b[0].getElementsByTagName('link');
                      for (b = 0; b < d.length; b += 1) {
                        var e = d[b];
                        if (
                          null !== e.type &&
                          ('application/rss+xml' === e.type ||
                            'application/atom+xml' === e.type) &&
                          null !== e.href &&
                          '' !== e.href
                        ) {
                          a = e.href;
                          break;
                        }
                      }
                    }
                    return a;
                  };
                  b.ob = function (a, b) {
                    var c = '';
                    if (!a || !b) return c;
                    window.getComputedStyle
                      ? (a = window.document.defaultView.getComputedStyle(a, null)) &&
                        (c = a.getPropertyValue(b))
                      : a.currentStyle &&
                        ((b = b.replace(/\-(\w)/g, function (a, b) {
                          return b.toUpperCase();
                        })),
                        (c = a.currentStyle[b]));
                    return c;
                  };
                  b.sw = function (a) {
                    if (!a) return null;
                    if (window.getComputedStyle)
                      var b = window.document.defaultView.getComputedStyle(a, null);
                    else if (a.currentStyle) var c = a.currentStyle;
                    return function (d) {
                      var e = null;
                      b
                        ? (e = b.getPropertyValue(d))
                        : c &&
                          ((d = d.replace(/\-(\w)/g, function (a, b) {
                            return b.toUpperCase();
                          })),
                          (e = a.currentStyle[d]));
                      return e;
                    };
                  };
                  b.sy = function () {
                    var a = b.Hf();
                    if (b.Cd(a)) {
                      var c = d.b.createElement('span', 'ob_a');
                      b.insertBefore(c, a);
                      c.innerHTML = '.';
                      var e = b.ob(c, 'color');
                      b.Xj('ob_a');
                      c = d.b.createElement('a', 'ob_a');
                      c.setAttribute('href', 'void(0)');
                      c.innerHTML = '.';
                      b.insertBefore(c, a);
                      a = b.ob(c, 'color');
                      b.Xj('ob_a');
                      e = 'rgb(0, 0, 0)' === e || '#000000' === e ? '#555' : e;
                      b.U(
                        '.ob-tcolor{color:' +
                          e +
                          '} .ob-lcolor{color:' +
                          a +
                          '} .ob-bgtcolor{background-color:' +
                          e +
                          '} .item-link-container:hover .ob-tcolor{border-color:' +
                          e +
                          '} ' +
                          (window.document.addEventListener
                            ? ''
                            : '.odb_li:hover .ob-zapping-icon,.odb_div:hover .ob-zapping-icon,.item-container:hover .ob-zapping-icon,.ob-dynamic-rec-container:hover .ob-zapping-icon,.odb_li:hover .ob-textual-zapping-icon,.odb_div:hover .ob-textual-zapping-icon,.item-container:hover .ob-textual-zapping-icon,.ob-dynamic-rec-container:hover .ob-textual-zapping-icon{display:none !important;}')
                      );
                    }
                  };
                  b.Hm = function (a) {
                    var c = b.Gf('property', 'og:url', 'meta', 'content');
                    null === c && (c = b.Gf('rel', 'canonical', 'link', 'href'));
                    null !== c || a || (c = window.location.href);
                    null === c && (c = '');
                    return c;
                  };
                  b.Gf = function (a, c, d, e) {
                    var f = null;
                    a = b.bb(a, c, d, !1);
                    null !== a && 0 < a.length && (f = a[0].getAttribute(e));
                    return f;
                  };
                  b.ko = function (a) {
                    var c = a.i('isDMPEnabled', !0) && !a.m('oo', !1),
                      e = a.i('tracking', !1),
                      f = a.i('filterDMP', ''),
                      l = a.i('comScoreEnabled', !0),
                      m = a.m('pid', ''),
                      n = a.m('country', ''),
                      q = a.Lf(),
                      r = '',
                      u = a.Vi(''),
                      z = a.m('gdpr', '0') + '',
                      B = null != d.X.rc && '1' === z,
                      F = d.X.nc || '1---',
                      y = window.OBR.Pd.Kt();
                    '' !== a.m('cnsnt', '') && '' !== u && (r = '&obcnsnt=' + u.toString());
                    !1 !== e ||
                      (!0 !== l && (!0 !== c || !0 !== y)) ||
                      !1 !== d.f.jo ||
                      q ||
                      (b.jn(
                        d.f.Qf,
                        d.f.ub +
                          '/widgetOBUserSync/obUserSync.html#pid=' +
                          m +
                          '&dmpenabled=' +
                          (c && y) +
                          '&filterDMP=' +
                          f +
                          '&csenabled=' +
                          l +
                          '&d=' +
                          a.m('enu', '') +
                          r +
                          '&gdpr=' +
                          z +
                          '&cmpNeeded=' +
                          B +
                          '&gdprVer=' +
                          window.OBR.X.rc +
                          '&ccpa=' +
                          F +
                          '&country=' +
                          n
                      ),
                      d.la(d.f.Qf) && (d.f.jo = !0));
                  };
                  b.zu = function () {
                    var a = b.Qi(8);
                    'string' === typeof window.name &&
                    ('' === window.name || -1 < window.name.indexOf('frame'))
                      ? ((window.name = a), (a = window.name))
                      : 'string' === typeof window.name && '' !== window.name && (a = window.name);
                    return (a = d.b.ga(a.substring(0, 9)));
                  };
                  b.Qi = function (a) {
                    var b;
                    var c = [];
                    a = 'number' === typeof a ? a : 8;
                    for (b = 0; b < a; b += 1)
                      c.push(
                        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(
                          Math.floor(61 * Math.random())
                        )
                      );
                    return c.join('');
                  };
                  b.Kl = function (a) {
                    for (var b = '', c = 0; c < a.length; c++) b = b.concat(a[c] ? '1' : '0');
                    return (0, window.parseInt)(b, 2);
                  };
                  b.Tf = function (a) {
                    if (
                      null === a.offsetParent ||
                      0 === a.offsetHeight ||
                      0 === a.offsetWidth ||
                      0 === a.clientHeight ||
                      0 === a.clientWidth
                    )
                      return !1;
                    var c = b.sw(a);
                    if ('none' === c('display') || 'hidden' === c('visibility')) return !1;
                    c =
                      (0, window.parseInt)(c('padding-top'), 10) +
                      (0, window.parseInt)(c('padding-bottom'), 10);
                    return 0 === a.clientHeight - c
                      ? !1
                      : (a = a.getElementsByTagName('a')[0]) && 'none' === b.ob(a, 'display')
                      ? !1
                      : !0;
                  };
                  b.OA = function (a) {
                    a &&
                      a.style &&
                      (a.style.cssText = 'display:none; height:0px; width:0px; border:none;');
                  };
                  b.Pg = function (a) {
                    return a && 70 >= a.length ? a : '';
                  };
                  b.Oi = function (a) {
                    for (var b in d.Ed)
                      if (d.Ed.hasOwnProperty(b) && d.Ed[b].I === a) return d.Ed[b];
                    return null;
                  };
                  b.VA = function (a) {
                    for (var b in a) if (a.hasOwnProperty(b)) return !1;
                    return !0;
                  };
                  b.vv = function (a, b) {
                    for (b = b.parentNode; null !== b; ) {
                      if (b === a) return !0;
                      b = b.parentNode;
                    }
                    return !1;
                  };
                  b.sd = function (a, b) {
                    return 'function' !== typeof a ? null : void 0 === b ? a() : a(b);
                  };
                  b.yb = function () {
                    return 'Microsoft Internet Explorer' === window.navigator.appName;
                  };
                  b.Us = function (a, b) {
                    return a * b;
                  };
                  b.zm = function (a) {
                    if (!a || '' === a) return [];
                    a = a
                      .replace('', '')
                      .replace('http://', '')
                      .replace('https://', '')
                      .replace('www.', '')
                      .replace('www2.', '')
                      .split('/');
                    a.pop();
                    return 0 < a.length ? a : [];
                  };
                  b.Mt = function (a, c) {
                    a = b.zm(a);
                    var d = [],
                      e;
                    if (c >= a.length) c = a.join('.');
                    else {
                      d[0] = a[0];
                      for (e = 1; e <= c; e += 1) d[e] = a[e];
                      c = d.join('.');
                    }
                    return c;
                  };
                  b.iu = function () {
                    return 'http' + ('https:' === c.location.protocol ? 's' : '');
                  };
                  b.hn = function (a, b) {
                    b.parentNode.insertBefore(a, b.nextSibling);
                  };
                  b.gu = function () {
                    var a = c.getElementById('widgetVersionSync');
                    if (null === a) {
                      a = b.createElement('iframe', 'widgetVersionSync');
                      var d = b.createElement(
                        'div',
                        null,
                        'display:none; height:0px; width:0px; border:none;'
                      );
                      d.appendChild(a);
                      b.vd().appendChild(d);
                    }
                    return a;
                  };
                  b.Xz = function (a) {
                    var c = window.OB_releaseVer;
                    (0, window.isNaN)(c) ||
                      (0, window.isNaN)(a) ||
                      c >= a ||
                      ((a =
                        b.iu() +
                        '://widgets.outbrain.com/external/sync/outbrainjs.html?needToBeVer=' +
                        a.toString()),
                      (b.gu().src = a));
                  };
                  b.tr = function (a) {
                    a = a.i('widgetVersionSync', 0);
                    (0, window.isNaN)(a) ||
                      '' === a ||
                      ((a = (0, window.parseInt)(a, 10) || 0), b.Xz(a));
                  };
                  a.Wi = function () {
                    const $___old_913c1c119a9f6215 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_913c1c119a9f6215)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        if (e) return e;
                        try {
                          var a = window.localStorage;
                          a.setItem('OBtst', '');
                          a.removeItem('OBtst');
                          var b = a;
                        } catch (k) {
                          b = {
                            Jg: {},
                            setItem: function (a, b) {
                              this.Jg[a] = b;
                            },
                            removeItem: function (a) {
                              this.Jg[a] = void 0;
                            },
                            getItem: function (a) {
                              return 'undefined' !== typeof this.Jg[a] ? this.Jg[a] : null;
                            },
                          };
                        }
                        return (e = b);
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_913c1c119a9f6215)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_913c1c119a9f6215
                        ));
                    }
                  };
                  b.Ea = function (b, c) {
                    a.Wi().setItem(b, c);
                  };
                  b.lu = function () {
                    var a = Math.round(16777215 * Math.random());
                    return 'rgb(' + (a >> 16) + ', ' + ((a >> 8) & 255) + ', ' + (a & 255) + ')';
                  };
                  b.ba = function (b, c) {
                    b = a.Wi().getItem(b);
                    return null !== b ? b : c;
                  };
                  b.oc = function (b) {
                    a.Wi().removeItem(b);
                  };
                  b.Lz = function (a) {
                    var b = {};
                    b.cpv = a[0];
                    b.convPerc = a[1];
                    b.convPixel = a[2];
                    b.vidId = a[3];
                    b.player = a[4];
                    b.pos = a[5];
                    b.adId = a[6];
                    b.docEncId = a[7];
                    b.origUrl = a[8];
                    b.trafficUrl = a[9];
                    b.duration = a[10];
                    b.widgetIdx = a[11];
                    b.title = a[12];
                    b.sourceName = a[13];
                    b.reqId = a[14];
                    b.platform = a[15];
                    b.lang = a[16];
                    b.uuid = a[17];
                    b.publisherId = a[18];
                    b.sourceId = a[19];
                    b.widgetNumberId = a[20];
                    b.campaignId = a[21];
                    b.location = a[22];
                    b.timestamp = a[23];
                    return b;
                  };
                  b.assign = function (a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a;
                  };
                  b.zv = function (a) {
                    var c = !1;
                    b.ue(a) || (c = a.nodeName && 'span' === a.nodeName.toLowerCase());
                    return c;
                  };
                  b.ut = function (a, b) {
                    if ('_blank' === (b.getAttribute('target') || '_self'))
                      for (var c in a) {
                        d.b.yc(
                          'obm-firePixelBeforeRedirect',
                          'pixel fired before redirect',
                          !1,
                          10
                        );
                        b = window.document.createElement('img');
                        var e = a[c];
                        e = d.b.cr(e);
                        b.setAttribute('src', e);
                        b.setAttribute('height', '1');
                        b.setAttribute('width', '1');
                        window.document.body.appendChild(b);
                      }
                    else
                      d.b.yc(
                        'obm-firePixelBeforeRedirectCancelled',
                        'pixel cancelled redirect on same page ',
                        !1,
                        10
                      );
                  };
                  b.cr = function (a) {
                    if (a && a.length)
                      return (a =
                        -1 < a.indexOf('?') ? a + ('&t=' + Date.now()) : a + ('?t=' + Date.now()));
                  };
                  b.vt = function (a) {
                    a &&
                      window.document &&
                      window.document.body &&
                      a.forEach(function (a) {
                        var b = window.OBR.b.createElement(
                          'img',
                          null,
                          'display:none;width:1px;height:1px'
                        );
                        b.src = a;
                        window.document.body.appendChild(b);
                      });
                  };
                  b.yc = function (a, b, c, e) {
                    ((0, window.isNaN)(e) || 0 === d.b.qg(e)) &&
                      window.OBR.error({ name: a, message: b, UA: !0 === c });
                  };
                  b.kg = function (a) {
                    return (
                      a &&
                      a.split('&').reduce(function (a, b) {
                        b = b.split('=');
                        a[b[0]] = b[1];
                        return a;
                      }, {})
                    );
                  };
                  b.Ne = function (a) {
                    return Object.keys(a)
                      .reduce(function (b, c) {
                        b.push(c + '=' + (0, window.encodeURIComponent)(a[c]));
                        return b;
                      }, [])
                      .join('&');
                  };
                  b.Pj = function (a) {
                    if (a && 'string' === typeof a && (a = a.split('-')) && 2 === a.length)
                      return { xk: a[1], Dk: a[0] };
                  };
                  b.JA = function (a) {
                    return Math.floor(Math.random() * Math.floor(a));
                  };
                  b.w(window.OBR);
                  return b;
                })();
              window.OBR.Jd = function (a, b, c, d, e, f, g, k, h) {
                var l = this;
                var m = 0;
                h = 'function' === typeof h ? h : window.OBR.b.Us;
                l.start = function () {
                  m += 1;
                  if (window.OBR.b.sd(a, m)) window.OBR.b.sd(b, m);
                  else if (window.OBR.b.sd(k, m)) window.OBR.b.sd(d, m);
                  else if (m === f && 1000 !== f) window.OBR.b.sd(d, m);
                  else {
                    window.OBR.b.sd(c, m);
                    var n = g ? h(m, e) : e;
                    (0, window.setTimeout)(function () {
                      l.start();
                    }, n);
                  }
                };
                l.start();
              };
              window.OBR.oi = window.OBR.oi || {
                wv: function () {
                  return 'complete' === window.document.readyState;
                },
                un: function () {
                  return 'interactive' === window.document.readyState || this.wv();
                },
              };
              window.OBR.zf = function () {
                var a = {},
                  b = [];
                a.add = function (a) {
                  b.push(a);
                };
                a.remove = function (a) {
                  b.splice(a, 1);
                };
                a.top = function () {
                  return 0 < b.length ? b.shift() : null;
                };
                a.Gb = function () {
                  return 0 >= b.length;
                };
                a.xb = function () {
                  return b;
                };
                a.Bl = function () {
                  b = [];
                };
                return a;
              };
              window.OBR.Promise = function () {
                function a (a, e) {
                  b.then =
                    'resolve' === a
                      ? function (a) {
                          a && a(e);
                        }
                      : function (a, b) {
                          b && b(e);
                        };
                  b.resolve = b.reject = function () {
                    throw Error('Promise already completed.');
                  };
                  for (var d, g = 0; (d = c[g++]); ) d[a] && d[a](e);
                  c = void 0;
                }
                var b = {},
                  c = [];
                b.then = function (a, b) {
                  c.push({ resolve: a, reject: b });
                };
                b.resolve = function (b) {
                  a('resolve', b);
                };
                b.reject = function (b) {
                  a('reject', b);
                };
                return b;
              };
              window.OBR.fq = function (a) {
                var b = {},
                  c = null,
                  d,
                  e;
                b.onClickOrAutoplay = void 0;
                b.onDisplayReady = void 0;
                b.onError = void 0;
                b.fetch = function (a) {
                  null === c
                    ? ((c = a), e && e(c, this), (e = null))
                    : ((c = a), window.OBR.Xc.Qn([this]));
                };
                b.shown = function (b) {
                  d = b;
                  window.OBR.Xc && window.OBR.Xc.Wz(a.widgetId, a.playerId, d);
                };
                b.stopTimer = function () {
                  if (this.Dp) {
                    window.clearInterval(this.Dp);
                    var b = window.document.querySelector(
                      '[data-ob-player-id="' + a.playerId + '"] .timerNumber'
                    );
                    b && (b.textContent = b.parentElement.getAttribute('data-time'));
                  }
                };
                b.fullscreenChange = function (b) {
                  window.OBR.Xc.Du(b, a.playerId);
                };
                b.placed = function () {
                  window.OBR.Xc.Vz(a.playerId);
                };
                b.aw = function (a) {
                  e = a;
                  c && e(c, this);
                };
                b.Fb = function () {
                  return a;
                };
                b.CA = function () {
                  return d;
                };
                b.MA = function () {
                  return a.when;
                };
                return b;
              };
              window.OBR.dl = function () {
                var a = {},
                  b = '00.000',
                  c = null,
                  d = null,
                  e = 0;
                a.start = function () {
                  null === c && (c = new Date());
                  null !== d && (e += new Date() - d);
                };
                a.stop = function () {
                  var a = new Date(new Date() - c - e),
                    g = a.getUTCSeconds();
                  a = a.getUTCMilliseconds();
                  d = new Date();
                  return (b =
                    (9 < g ? g : '0' + g) + '.' + (99 < a ? a : 9 < a ? '0' + a : '00' + a));
                };
                return a;
              };
              window.OBR.Dl = window.OBR.Dl || {
                copy: function (a) {
                  var b = window.document.createElement('textarea');
                  b.value = a;
                  b.setAttribute('readonly', '');
                  b.style.position = 'absolute';
                  b.style.left = '-9999px';
                  window.document.body.appendChild(b);
                  if (window.navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    b.contentEditable = !0;
                    b.readOnly = !0;
                    a = window.document.createRange();
                    a.selectNodeContents(b);
                    var c = window.getSelection();
                    c.removeAllRanges();
                    c.addRange(a);
                    b.setSelectionRange(0, 999999);
                  } else b.select();
                  window.document.execCommand('copy');
                  window.document.body.removeChild(b);
                },
              };
              window.OBR.pd =
                window.OBR.pd ||
                function (a, b, c) {
                  var d;
                  return function () {
                    var e = this,
                      f = arguments,
                      g = c && !d;
                    (0, window.clearTimeout)(d);
                    d = (0, window.setTimeout)(function () {
                      d = null;
                      c || a.apply(e, f);
                    }, b);
                    g && a.apply(e, f);
                  };
                };
              window.OBR.f =
                window.OBR.f ||
                (function () {
                  const $___old_a395d6f3063d56fa = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'userAgent'
                    ),
                    $___old_290f3b23c0cfb285 = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'platform'
                    );
                  try {
                    if ($___old_a395d6f3063d56fa)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_47c01efa79e9f191.userAgent
                      ));
                    if ($___old_290f3b23c0cfb285)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'platform',
                        $___stub_47c01efa79e9f191.platform
                      ));
                    return function () {
                      var a = {},
                        b = {},
                        c = window.OBR,
                        d = window;
                      b.iq = 'opera';
                      b.gh = 'msie';
                      b.Pk = 'firefox';
                      b.Lk = 'chrome';
                      b.al = 'safari';
                      b.gq = 'mozilla';
                      b.Nk = 'edge';
                      b.ul = 'boolean';
                      b.zp = 'string';
                      b.dB = 'object';
                      b.Bz = 'undefined';
                      b.cB = 'number';
                      b.ud = 'function';
                      b.Qf = 'ob_iframe';
                      b.pn = !0;
                      b.jB = 0;
                      b.Qg = 'outbrain_widget_';
                      b.fw = 'text/javascript';
                      b.Ss = 'text/css';
                      b.Te = d;
                      b.tA = window.document;
                      b.Vv = void 0 !== window.document.createElement('script').async;
                      b.Nx = d.OB_ampReferrer ? d.OB_ampReferrer : window.document.referrer;
                      b.Wj = c.b.ga(b.Nx);
                      b.qw = window.document.location.href;
                      b.XA = c.b.ga(b.qw);
                      b.Sd = !1;
                      b.Oe = '';
                      b.lf = window.navigator.userAgent.toLowerCase();
                      b.Jj = window.navigator.platform.toLowerCase();
                      var e = b.lf;
                      b.Sb = /edge/.test(e)
                        ? b.Nk
                        : /opera/.test(e)
                        ? b.iq
                        : /msie|trident/.test(e)
                        ? b.gh
                        : /firefox/.test(e)
                        ? b.Pk
                        : /chrome/.test(e)
                        ? b.Lk
                        : /safari/.test(e)
                        ? b.al
                        : b.gq;
                      b.te =
                        (/iphone|ipad|ipod/.test(e) && !d.navigator.standalone && b.Sb !== b.al) ||
                        /fbav|fban|gsa|twitter/.test(e);
                      b.Dh = /fbav|fban/.test(e)
                        ? 'facebook'
                        : /gsa/.test(e)
                        ? 'google'
                        : /twitter/.test(e)
                        ? 'twitter'
                        : '';
                      b.ta = !!/(mobi|iphone|ipod|symbian|android|windows ce|blackberry|palm|ipad)/i.test(
                        e
                      );
                      b.sg = '';
                      b.Uf =
                        'Microsoft Internet Explorer' === window.navigator.appName ||
                        ('Netscape' === window.navigator.appName &&
                          null !==
                            /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(
                              window.navigator.userAgent
                            ));
                      b.wn = b.lf.match(/msie 8/) || b.lf.match(/msie 7/);
                      b.sx = window.OB_platformType || null;
                      try {
                        var f = 'loading' in window.HTMLImageElement.prototype || !1;
                      } catch (h) {
                        f = !1;
                      }
                      b.fo = f;
                      b.Yf = 'number' === typeof b.sx;
                      b.$o = null;
                      b.bm = null;
                      b.oz = function () {
                        b.Yf &&
                          b.$o &&
                          b.bm &&
                          (window.OBR.error({ name: 'OutbrainLT', message: window.location.href }),
                          b.$o(),
                          b.bm());
                      };
                      b.du = function () {
                        switch (b.Ul) {
                          case 'prod':
                            return c.b.Mb(c.b.O('wiodb', b.Z + 'odb.' + g), b.Z + 'odb.' + g);
                          case 'sim':
                            return c.b.Mb(b.Z + 'odb-sim.outbrain.com', '');
                          default:
                            return c.b.Mb(c.b.O('wiodb', b.Z + 'odb.' + g), b.Z + 'odb.' + g);
                        }
                      };
                      b.$t = function () {
                        switch (b.Ul) {
                          case 'prod':
                            return c.b.Mb(c.b.O('wiodb', b.Z + 'mv.' + g), b.Z + 'mv.' + g);
                          case 'sim':
                            return c.b.Mb(b.Z + 'mv-sim.outbrain.com', '');
                          default:
                            return c.b.Mb(c.b.O('wiodb', b.Z + 'mv.' + g), b.Z + 'mv.' + g);
                        }
                      };
                      b.Ot = function () {
                        var a = c.b.O('forceWidgets', null);
                        if (a)
                          try {
                            return a
                              .split(',')
                              .map(function (a) {
                                return a.split(':');
                              })
                              .reduce(function (a, b) {
                                var c = OBR._jsc.w(b);
                                b = c.next().value;
                                c = c.next().value;
                                a[b] = c;
                                return a;
                              }, {});
                          } catch (l) {}
                        return null;
                      };
                      b.Kc = 'string' === typeof d.OB_releaseVer ? d.OB_releaseVer : '0';
                      b.bB = !0 === d.OB_disable_odbl;
                      b.ti = d.OB_extId ? d.OB_extId : null;
                      b.ki = d.OB_ContextKeyValue ? d.OB_ContextKeyValue : null;
                      b.dg = 'nanoWidget/';
                      b.ip = function () {
                        b.Z = 'true' === c.b.O('isForceHttp', 'false') ? 'http://' : 'https://';
                        b.Ul = c.b.O('env', 'prod');
                        b.Vu = c.b.Mb(c.b.O('wiodb', b.Z + 'hpr.' + g), b.Z + 'hpr.' + g);
                        b.lo = b.du();
                        b.Qw = b.$t();
                        b.Vr = b.Z + 'storage.outbrain.com/';
                        b.ub = c.b.Mb(c.b.O('wihost', b.Z + 'widgets.' + g), b.Z + 'widgets.' + g);
                        b.ox = c.b.Mb(c.b.O('wiout', b.Z + g), b.Z + g);
                        b.uo = b.Z + 'log.' + k + '/';
                        b.Kj = b.Z + 'eventlog.' + g + '/';
                        b.Sw = b.ub + '/' + b.dg + b.Kc + (b.Yf ? '/moduleLT' : '/module');
                        b.Ej = b.ub + '/' + b.dg + '3rd';
                        b.Rw = b.ub + '/' + b.dg + 'externals';
                        b.Tz = b.ub + '/external';
                        b.Tw = b.ub + '/nativeVideoPlayer';
                        b.aB = b.ub + '/widgetMegaBlocks';
                      };
                      var g = 'outbrain.com';
                      var k = 'outbrainimg.com';
                      b.px = k;
                      b.ip();
                      b.Sr = '/blogutils/ExcludeRec.action?bocr=';
                      b.eB = 'html';
                      b.yo = b.Yf ? 'NANOWDGTLT13' : 'NANOWDGT01';
                      b.uv = 'object' === typeof d.console;
                      b.up = c.b.ys(c.b.gt());
                      b.Hg = null === b.up ? '' : c.b.ga(b.up);
                      b.jo = !1;
                      b.Kg = !(!d.OB_testMode && !window.OBR.b.O('obTestMode', !1));
                      b.nn = 'true' === c.b.O('widebug', 'false');
                      b.nb = b.Ot();
                      b.Dt = 'true' === c.b.O('forceFeed', 'false');
                      b.ui = c.b.O('wixp', null);
                      b.ho = 'true' === c.b.O('obdraft', !1) ? '&obDraft=true' : '';
                      b.Vh =
                        !1 !== c.b.O('obAbtest', !1) ? '&obAbtest=' + c.b.O('obAbtest', '') : '';
                      b.Jl = 'true' === c.b.O('obCrDraft', 'false') ? '&crDraft=true' : '';
                      b.Fj =
                        '0' !== c.b.O('obFakeRTB', '0')
                          ? '&fakeRec=RTB&fakeRecSize=' + c.b.O('obFakeRTB', '0')
                          : '';
                      b.eg = 'true' === window.OBR.b.O('obPerformance', !1);
                      b.io =
                        'true' === c.b.O('obFakeRtb', !1)
                          ? '&fakeRec=RTB-CriteoUS&testMode=true&fakeRecSize=4'
                          : '';
                      b.An =
                        'true' === window.OBR.b.O('rtbDesc', !1)
                          ? '&isRtbDescriptionEnabled=true'
                          : '';
                      b.Ol =
                        'true' === window.OBR.b.O('desc', !1)
                          ? '&descriptionDisplayEnabled=true'
                          : '';
                      b.qk = window.OBR.b.O('skipContextValidation', null);
                      b.Eg = 'true' === window.OBR.b.O('skipFilters', !1) ? !0 : !1;
                      b.Df =
                        '0' !== window.OBR.b.O('forceAd', '0')
                          ? window.OBR.b.O('forceAd', '0')
                          : '';
                      if (b.Df || b.Eg || b.io || b.Fj || b.nb) b.Kg = !0;
                      b.ak = { Op: window.screen.width, xd: window.screen.height };
                      b.Sl = window.devicePixelRatio;
                      b.bg = 0;
                      b.$c = null;
                      b.yj = !1;
                      b.Zo = 'data-obscrollable';
                      b.fy = {
                        touch_strip: '1',
                        odb_dynamic: '2',
                        'odb_dynamic_touch-strip': '3',
                      };
                      b.gy = { 'touch-strip': '1' };
                      b.rr = !!d.OB_ampMode;
                      b.hA = { KALTURA: 'kaltura', BRIGHTCOVE: 'brightcove' };
                      b.N = { ld: 'get', da: 'post', Qk: 'jsonp', nh: 'postJson' };
                      b.Ik = c.b.zu();
                      b.Zf =
                        'true' === c.b.O('widwiz', 'false') ||
                        'true' === c.b.O('widwizinternal', 'false');
                      b.Gv = 'true' === c.b.O('obgallery', 'false');
                      b.cj = 'function' === typeof d.IntersectionObserver;
                      b.wo = !1;
                      b.rm = function (a) {
                        !0 === a.isSecured && 'https://' !== b.Z && (b.ip(), c.h.w(window.OBR));
                      };
                      b.Ad = !1;
                      try {
                        b.Ad = window.self !== window.top;
                      } catch (h) {
                        b.Ad = !0;
                      }
                      b.uk = 'navigator' in window && 'sendBeacon' in window.navigator;
                      b.qv = 'true' === c.b.O('adnginmode', 'false');
                      b.jg =
                        'navigator' in window &&
                        'language' in window.navigator &&
                        window.navigator.language;
                      b.De = c.b.Nm();
                      b.xc = null;
                      b.Jn = !1;
                      b.Xf = !1;
                      b.Zm = 'webkitLineClamp' in window.document.createElement('div').style;
                      b.Ak = window.OBR.b.Gn();
                      b.Uu = !!window.history;
                      b.ha = function () {
                        b.Sd = !1;
                        b.$c = null;
                        b.Xf = !1;
                      };
                      b.Ba = function () {
                        a.Nb = c;
                        return a;
                      };
                      return b;
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_a395d6f3063d56fa)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_a395d6f3063d56fa
                      ));
                    if ($___old_290f3b23c0cfb285)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'platform',
                        $___old_290f3b23c0cfb285
                      ));
                  }
                })();
              (function (a) {
                function b () {
                  this.ca = !this.B();
                }
                b.prototype.B = function () {
                  return !!window.fetch;
                };
                b.prototype.D = function () {
                  const $___old_dbf8741863fba764 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'XMLHttpRequest'
                  );
                  try {
                    if ($___old_dbf8741863fba764)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_afd3abb015d4d981.XMLHttpRequest
                      ));
                    return function () {
                      return 'undefined' !== typeof window.XMLHttpRequest;
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_dbf8741863fba764)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_dbf8741863fba764
                      ));
                  }
                };
                b.prototype.pa = function () {
                  return !this.ca || 'withCredentials' in new window.XMLHttpRequest()
                    ? !0
                    : 'undefined' !== typeof window.XDomainRequest;
                };
                b.prototype.ln = function () {
                  return this.B() || this.D();
                };
                b.prototype.send = function (b, d, e, f, g, k, h, l) {
                  this.ca && !this.pa() && (b = a.f.N.Qk);
                  switch (b) {
                    case a.f.N.ld:
                      this.get(d, e, f, g, k, h, l);
                      break;
                    case a.f.N.da:
                      this.Do(d, e, f, g, l);
                      break;
                    case a.f.N.Qk:
                      this.M(d, e, f);
                      break;
                    case a.f.N.nh:
                      this.Ha(d, e, f, l);
                      break;
                    default:
                      this.M(d, e, f);
                  }
                };
                b.prototype.get = function (a, b, e, f, g, k, h) {
                  b = this.c(b);
                  h
                    ? this.o(a + (b.length ? '?' + b : ''), e, 'GET', null, g, k)
                    : this.u(this.g(), a + (b.length ? '?' + b : ''), e, 'GET', null, f, g, k);
                };
                b.prototype.Do = function (b, d, e, f, g) {
                  d = this.c(d);
                  g ? this.o(b, e, a.f.N.da, d) : this.u(this.g(), b, e, a.f.N.da, d, f);
                };
                b.prototype.Ha = function (a, b, e, f) {
                  b = JSON.stringify(b);
                  f
                    ? this.o(a, e, 'POST', b, 'text/plain; charset=UTF-8')
                    : this.u(this.g(), a, e, 'POST', b, !0, 'text/plain; charset=UTF-8');
                };
                b.prototype.M = function (b, d, e) {
                  d = this.c(d);
                  b = a.b.Aa('dataBI' + a.b.Qi(), b + (d.length ? '?' + d : ''), !0, !0, e);
                  a.b.Fa(b);
                };
                b.prototype.o = function (b, d, e, f, g, k) {
                  var c = { method: e, headers: {}, cache: 'no-cache' };
                  g
                    ? (c.headers['Content-Type'] = g)
                    : e === a.f.N.da &&
                      (c.headers['Content-Type'] = 'application/x-www-form-urlencoded');
                  k && (c.credentials = 'include');
                  f && (c.body = f);
                  (0, window.fetch)(b, c)
                    .then(function (a) {
                      return a.text();
                    })
                    .then(function (b) {
                      typeof d === a.f.ud && d(b);
                    })
                    .catch(function (b) {
                      a.error({
                        name: 'obm-FetchError',
                        message: 'Fetch error failed, method: ' + e + ' With data: ' + f,
                        stack: b,
                      });
                    });
                };
                b.prototype.u = function (b, d, e, f, g, k, h, l) {
                  void 0 === k && (k = !0);
                  var c = '';
                  try {
                    c = 'Url: ' + d + '\n' + Error().stack;
                  } catch (n) {}
                  b.addEventListener('error', function () {
                    0 !== b.status &&
                      a.error({
                        name: 'obm-AjaxError',
                        message: 'Ajax error failed, method: ' + f + ' With data: ' + g,
                        stack: c,
                      });
                  });
                  b.open(f, d, k);
                  b.onreadystatechange = function () {
                    4 === b.readyState && typeof e === a.f.ud && e(b.responseText);
                  };
                  l && (b.withCredentials = !0);
                  h
                    ? b.setRequestHeader('Content-type', h)
                    : f === a.f.N.da &&
                      b.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                  b.send(g);
                };
                b.prototype.c = function (a) {
                  var b = [],
                    c;
                  for (c in a)
                    a.hasOwnProperty(c) &&
                      b.push(
                        (0, window.encodeURIComponent)(c) +
                          '=' +
                          (0, window.encodeURIComponent)(a[c])
                      );
                  return b.join('&');
                };
                b.prototype.g = function () {
                  const $___old_7b7771b230f9bf99 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    ),
                    $___old_66d25c5bdfb80d87 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'XMLHttpRequest'
                    );
                  try {
                    if ($___old_7b7771b230f9bf99)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_afd3abb015d4d981.XMLHttpRequest
                      ));
                    if ($___old_66d25c5bdfb80d87)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___stub_afd3abb015d4d981.XMLHttpRequest
                      ));
                    return function () {
                      if (this.D()) return new window.XMLHttpRequest();
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_7b7771b230f9bf99)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_7b7771b230f9bf99
                      ));
                    if ($___old_66d25c5bdfb80d87)
                      ({}.constructor.defineProperty(
                        window,
                        'XMLHttpRequest',
                        $___old_66d25c5bdfb80d87
                      ));
                  }
                };
                a.ib = new b();
              })(window.OBR);
              var Uc = /^(http[s]{0,1}):\/\/([^\/]*)outbrain(img){0,1}\.com/i,
                D = {
                  Sh: window.performance,
                  marks: [],
                  Nw: [],
                  fl: function (a, b) {
                    a = this.gl(a, b);
                    this.Sh.mark(a);
                    this.marks.push(a);
                    return a;
                  },
                  gl: function (a, b) {
                    return 'ob-mark-' + (b ? '0-' : '1-') + a;
                  },
                  measure: function (a, b, c) {
                    a = 'ob-measure-' + a;
                    this.Nw.push(a);
                    try {
                      return this.Sh.measure(a, b, c);
                    } catch (d) {}
                    return 0;
                  },
                  gd: function (a) {
                    return this.fl(a, !0);
                  },
                  qc: function (a) {
                    return this.fl(a);
                  },
                  Yb: function (a, b) {
                    var c = this.gl(a, b);
                    return this.marks.find(function (a) {
                      return a === c;
                    });
                  },
                  Im: function (a) {
                    return window.performance.getEntriesByType('mark').filter(function (b) {
                      return b.name === a;
                    });
                  },
                  GA: function () {
                    var a = [],
                      b = this.Sh.getEntriesByType('measure');
                    b &&
                      0 < b.length &&
                      (a = b.filter(function (a) {
                        return a.name.startsWith('ob-measure-');
                      }));
                    return a;
                  },
                  Pm: function () {
                    return window.performance.getEntriesByType('resource').filter(function (a) {
                      return Uc.test(a.name);
                    });
                  },
                  Kf: function (a) {
                    var b = [];
                    this.Pm()
                      .filter(function (b) {
                        return b.name.includes(a);
                      })
                      .forEach(function (a) {
                        b.push({ name: a.name, value: a });
                      });
                    return b;
                  },
                };
              window.OBR.Performance = window.OBR.Performance || D;
              var Vc = window.OBR,
                Wc;
              (Wc = window.OBR.Rl) || (Wc = 'true' === window.OBR.b.O('perfTest', 'false'));
              Vc.Rl = Wc || 10000 === Math.floor(10000 * Math.random()) + 1;
              var Xc = {
                Ok: 'https://widgetmonitor.outbrain.com/WidgetErrorMonitor/api/performance',
                oq: 10000,
                pq: 120000,
                fa: {
                  fA: 'ob_resource',
                  cl: 'start',
                  Up: 'c_search',
                  Ve: 'c_found',
                  Tg: 'odb',
                  $g: 'first_odb',
                  Jk: 'mv',
                  Zp: 'first_odb_r',
                  mq: 'odb_r',
                  lq: 'mv_r',
                  Lh: 'render',
                  Aq: 'rendered',
                  Yp: 'fp_rendered',
                  Xp: 'fchunk_rendered',
                  $p: 'fchunk_mv_rendered',
                  qq: 'mv_rendered',
                  Kk: 'card_observed',
                },
                vb: {
                  jq: 100,
                  rq: 110,
                  uq: 120,
                  vq: 130,
                  yq: 140,
                  wq: 150,
                  xq: 160,
                  tq: 170,
                  eq: 180,
                  cq: 190,
                  hq: 200,
                },
                hf: { start: void 0, Hl: void 0 },
                Oc: [],
                pz: function () {
                  this.Jw();
                  var a = (0, window.setInterval)(Xc.Iu.bind(this), this.oq);
                  (0, window.setTimeout)(function () {
                    return (0, window.clearInterval)(a);
                  }, this.pq);
                },
                Iu: function () {
                  if (this.Oc.length)
                    try {
                      this.Iw(), this.ek(this.Oc);
                    } catch (a) {}
                  this.Oc = [];
                },
                ek: function (a) {
                  var b = window.OBR.f.Kc,
                    c = window.OBR.A && window.OBR.A.length && window.OBR.A[0].m('pid', null);
                  b = c ? this.Ok + '/' + b + '/' + c : this.Ok + '/' + b;
                  window.OBR.f.uk
                    ? window.navigator.sendBeacon(b, JSON.stringify(a))
                    : this.$h(b, a);
                },
                $h: function (a, b) {
                  window.OBR.ib.send(window.OBR.f.N.nh, a, b);
                },
                ma: function (a, b, c, d) {
                  return a + '-' + b + '-' + c + (d ? '_' + d : '');
                },
                kc: function (a, b) {
                  b &&
                    b.duration &&
                    ((a = {
                      id: a,
                      value: Math.round(b.duration),
                      protocol: b.nextHopProtocol ? b.nextHopProtocol : 'N/A',
                    }),
                    b.xi && (a.feedVersion = b.xi),
                    this.Oc.push(a));
                },
                LA: function () {
                  return D.Pm();
                },
                Aw: function () {
                  this.hf.start = D.gd(this.fa.cl);
                  this.Kw();
                },
                xw: function () {
                  this.hf.Hl = D.gd(this.fa.Up);
                },
                Fu: function (a) {
                  var b = this,
                    c = a.W();
                  a.v()
                    .querySelectorAll('img.ob-rec-image')
                    .forEach(function (a, e) {
                      e = Date.now() + '-' + c + '-' + e;
                      a = {
                        callback: b.Lw.bind(b),
                        callbackParams: [a, e],
                        element: a,
                        rootMargin: '200px',
                        threshold: [0],
                        unobserve: !0,
                      };
                      new window.OBR.IntersectionObserver(a).observe();
                    });
                },
                Lw: function (a, b) {
                  var c = this,
                    d = D.gd(b);
                  a.addEventListener(
                    'load',
                    function () {
                      var b = D.Kf(a.src),
                        f = D.Im(d);
                      f &&
                        b &&
                        b.length &&
                        f.length &&
                        ((f = f[0].startTime - b[0].value.startTime),
                        (b = b[0].value.nextHopProtocol),
                        0 < f && c.Oc.push({ id: c.vb.eq, value: Math.round(f), protocol: b }));
                    },
                    { once: !0 }
                  );
                },
                ww: function (a, b) {
                  return D.qc(this.ma(this.fa.Ve, a, b));
                },
                Iw: function () {
                  try {
                    var a = D.Kf('images.outbrainimg.com').reduce(
                        function (a, b) {
                          b.name.endsWith('.gif')
                            ? a.Tm.push(b)
                            : b.name.endsWith('.mp4')
                            ? a.El.push(b)
                            : a.images.push(b);
                          return a;
                        },
                        { Tm: [], images: [], El: [] }
                      ),
                      b = a.Tm,
                      c = a.El;
                    this.Gu(a.images);
                    this.Eu(b);
                    this.Ku(c);
                  } catch (d) {}
                },
                Gu: function (a) {
                  var b = a.filter(function (a) {
                    return 'http/1.1' === a.value.nextHopProtocol;
                  });
                  a = a.filter(function (a) {
                    return 'h2' === a.value.nextHopProtocol;
                  });
                  this.ol(b, 'http/1.1');
                  this.ol(a, 'h2');
                },
                Eu: function (a) {
                  var b = this;
                  a.forEach(function (a) {
                    return b.kc(b.vb.cq, a.value);
                  });
                },
                Ku: function (a) {
                  var b = this;
                  a.forEach(function (a) {
                    return b.kc(b.vb.hq, a.value);
                  });
                },
                ol: function (a, b) {
                  a.length &&
                    ((a = a.reduce(function (a, b, e, f) {
                      return a + (b.value.requestStart - b.value.startTime) / f.length;
                    }, 0)),
                    this.Oc.push({ id: this.vb.tq, value: Math.round(a), protocol: b }));
                },
                Jw: function () {
                  var a = D.Kf('outbrain.js');
                  a && a.length && this.kc(this.vb.jq, a[0].value);
                },
                Kw: function () {
                  var a = D.Kf('outbrain.js'),
                    b = D.Im(this.hf.start);
                  a &&
                    a.length &&
                    b &&
                    b.length &&
                    this.Oc.push({
                      id: this.vb.rq,
                      value: Math.round(b[0].startTime - a[0].value.startTime),
                      protocol: a[0].value.nextHopProtocol,
                    });
                  return 0;
                },
                ao: function (a, b) {
                  var c = this.ma(this.fa.Ve, a, b);
                  a = this.ww(a, b);
                  D.measure(c, a);
                },
                Zn: function (a, b) {
                  return D.gd(this.ma(0 === b ? this.fa.$g : this.fa.Tg, a, b));
                },
                yw: function (a, b, c) {
                  return D.gd(this.ma(this.fa.Jk, a, b, c));
                },
                Hw: function (a, b) {
                  if (0 === b) this.Dw(a);
                  else {
                    var c = this.ma(this.fa.Tg, a, b),
                      d = D.Yb(this.ma(this.fa.Ve, a, b));
                    a = this.Zn(a, b);
                    D.measure(c, d, a);
                  }
                },
                Dw: function (a) {
                  var b = this.ma(this.fa.$g, a, 0),
                    c = D.Yb(this.ma(this.fa.Ve, a, 0));
                  a = this.Zn(a, 0);
                  b = D.measure(b, c, a);
                  this.kc(this.vb.uq, b);
                },
                Fw: function (a, b, c) {
                  var d = this.ma(this.fa.lq, a, b, c);
                  a = D.Yb(this.ma(this.fa.Jk, a, b, c), !0);
                  d = D.measure(d, a);
                  if ((b = window.OBR.A[b])) d.xi = b.m('feedVersion', null);
                  this.kc(this.vb.xq, d);
                },
                Gw: function (a, b) {
                  if (0 === b) this.Cw();
                  else {
                    var c = this.ma(this.fa.mq, a, b);
                    a = D.Yb(this.ma(this.fa.Tg, a, b), !0);
                    var d = D.qc(c);
                    c = D.measure(c, a, d);
                    if ((b = window.OBR.A[b])) c.xi = b.m('feedVersion', null);
                    this.kc(this.vb.yq, c);
                  }
                },
                Cw: function (a) {
                  var b = this.ma(this.fa.Zp, a, 0);
                  a = D.Yb(this.ma(this.fa.$g, a, 0), !0);
                  var c = D.qc(b);
                  b = D.measure(b, a, c);
                  this.kc(this.vb.vq, b);
                },
                $n: function (a, b, c) {
                  return D.gd(this.ma(this.fa.Lh, a, b, c));
                },
                Ap: function (a, b, c) {
                  return this.$n(a, b, c);
                },
                Mw: function (a, b, c) {
                  var d = this.ma(this.fa.Aq, a, b, c),
                    e = D.Yb(this.ma(this.fa.Lh, a, b, c), !0),
                    f = D.qc(d);
                  D.measure(d, e, f);
                  0 === b && this.Ew(a, c);
                },
                Ew: function (a, b) {
                  var c = this.ma(this.fa.Yp, a, 0, b);
                  a = D.Yb(this.ma(this.fa.cl, a, 0, b), !0);
                  b = D.qc(c);
                  c = D.measure(c, a, b);
                  this.kc(this.vb.wq, c);
                },
                $A: function (a, b, c) {
                  a = this.ma(this.fa.Xp, a, b, c);
                  b = D.qc(a);
                  D.measure(a, this.hf.Hl, b);
                },
                co: function (a, b, c) {
                  c = this.ma(this.fa.qq, a, b, c);
                  a = D.Yb(this.ma(this.fa.Kk, a, b), !0);
                  b = D.qc(c);
                  D.measure(c, a, b);
                },
                bo: function (a, b, c) {
                  var d = this.ma(this.fa.$p, a, b, c);
                  a = D.Yb(this.ma(this.fa.Lh, a, b, c), !0);
                  b = D.qc(d);
                  D.measure(d, a, b);
                },
                Bw: function (a, b) {
                  a = this.ma(this.fa.Kk, a, b);
                  b = D.gd(a);
                  D.measure(a, b);
                },
              };
              window.OBR.Rl ||
                Object.keys(Xc).forEach(function (a) {
                  return (Xc[a] = function () {});
                });
              var Yc = window.OBR,
                Zc;
              window.OBR.xa ? (Zc = window.OBR.xa) : (Xc.pz(), (Zc = Xc));
              Yc.xa = Zc;
              (function (a) {
                function b () {
                  this.w();
                }
                var c = a,
                  d,
                  e;
                b.prototype.w = function (b) {
                  c = b || a;
                  d = [];
                  e = new Date().getTime();
                };
                b.prototype.startTime = function () {
                  return e;
                };
                b.prototype.log = function (a) {
                  var b = (new Date().getTime() - e) / 1000;
                  1000 > d.length && d.push(b + ' >' + a);
                };
                b.prototype.printLog = function () {
                  if (c.f.uv) window.console.log(d.join('\n'));
                  else {
                    var a = c.b.Hf();
                    a && ((a.innerHTML = d.join('<br>')), (a.style.display = 'block'));
                  }
                  return d.join('\n');
                };
                a.j = a.j || new b();
                a.printLog = a.j.printLog;
              })(window.OBR);
              Ca.prototype.add = function (a, b) {
                if ('string' === typeof a && 'function' === typeof b) {
                  var c = {};
                  c.name = a;
                  c.ud = b;
                  this.c.push(c);
                }
              };
              Ca.prototype.G = function (a, b, c, d) {
                b = b || [];
                c = !!c;
                this.g || window.OBR.$i.rt(a, d);
                window.OBR.j.log('event fire:' + a);
                for (var e = 0, f = this.c.length; e < f; e += 1) {
                  d = this.c && this.c[e] ? this.c[e].name : '';
                  var g = this.c && this.c[e] ? this.c[e].ud : null;
                  if (d === a && g)
                    try {
                      g.apply(this, b);
                    } catch (k) {
                      window.OBR.j.log('fire event *' + a + '* error: ' + k), window.OBR.error(k);
                    }
                }
                !0 === c && Da(this, a);
              };
              Ca.prototype.Rc = function () {
                this.c = [];
              };
              window.OBR.Qa = Ca;
              (function (a, b, c) {
                function d () {
                  l = {};
                  this.c = ['ready'];
                }
                function e (a) {
                  return [
                    {
                      idx: a.W(),
                      widgetId: a.H(),
                      widgetJsId: a.m('widgetJsId', a.H()),
                      container: a.v(),
                      recsNumber: a.m('tcr', -1),
                      variantId: a.m('abTestVal', ''),
                    },
                  ];
                }
                function f () {
                  var a = b.OBREvents;
                  if (a && !(1 > a.length))
                    for (var c = 0, d = a.length; c < d; c += 1) g(a.shift());
                }
                function g (b) {
                  b && b.event && 'function' === typeof b.func
                    ? 'ready' === b.event
                      ? (c.add(b.event, b.func), (l[b.event] = !0))
                      : k(b).forEach(function (a) {
                          c.add(b.event + '_' + a, b.func);
                          l[b.event] = !0;
                        })
                    : a.j.log('Bad global event' + b);
                }
                function k (b) {
                  b = b.widgetId;
                  var c = [];
                  b && ('string' === typeof b ? (c = [b]) : Array.isArray(b) && (c = b));
                  a.j.log('global event widget ids: ' + c);
                  return c;
                }
                var h = { onHtmlReturn: 'widgetDataReturned', afterRender: 'widgetRendered' },
                  l;
                d.prototype.w = function (d, e, f) {
                  a = d;
                  b = e;
                  c = f;
                  c.g = !0;
                  l = {};
                };
                d.prototype.tt = function () {
                  this.c.includes('ready') && (f(), l.ready && c.G('ready'));
                };
                d.prototype.rt = function (a, b) {
                  a = h[a];
                  b && a && (f(), l[a] && c.G(a + '_' + b.H(), e(b)));
                };
                d.prototype.ha = function () {
                  this.w(window.OBR, window, new window.OBR.Qa());
                };
                window.OBR.$i = new d();
              })(window.OBR, window, new window.OBR.Qa());
              (function () {
                function a () {
                  this.g = null;
                  this.wp = !1;
                  this.qd = -1;
                  this.u();
                }
                var b = window.OBR.f.Rw + '/cookie/put.html',
                  c = {
                    SUCCESS: 0,
                    FAILURE: 1,
                    ERROR: 2,
                    TIMEOUT: 3,
                    LS_SUCEESS: 4,
                    LS_FAILURE: 5,
                  };
                a.prototype.u = function () {
                  var a = this.B();
                  null !== a
                    ? (this.c(a), (this.g = a === c.SUCCESS || a === c.LS_SUCEESS ? !0 : !1))
                    : this.start();
                };
                a.prototype.start = function () {
                  var a = this;
                  window.document && window.document.body
                    ? this.o()
                    : window.document.addEventListener('DOMContentLoaded', function () {
                        a.o();
                      });
                };
                a.prototype.Kt = function () {
                  return -1 === this.qd || this.qd === c.SUCCESS || this.qd === c.LS_SUCEESS
                    ? !0
                    : !1;
                };
                a.prototype.o = function () {
                  var a = this;
                  try {
                    var e = null,
                      f = function (a) {
                        'OB:3PC-true' === a.data
                          ? (window.OBR.j.log('third party cookies enabled'), g(!0))
                          : 'OB:3PC-false' === a.data &&
                            (window.OBR.j.log('third party cookies disabled'), g(!1));
                      },
                      g = function (b) {
                        window.removeEventListener('message', f, !1);
                        (0, window.clearTimeout)(e);
                        var d = (a.g = b) ? c.LS_SUCEESS : c.LS_FAILURE;
                        a.c(b ? c.SUCCESS : c.FAILURE);
                        a.D(d);
                        k.parentElement && k.remove();
                      };
                    window.addEventListener('message', f, !1);
                    var k = window.document.createElement('iframe');
                    k.setAttribute('style', 'display:none;width:0;height:0;');
                    k.src = b;
                    k.onerror = function () {
                      a.c(c.ERROR);
                      a.g = !1;
                      k.remove();
                    };
                    window.document.body.appendChild(k);
                    e = (0, window.setTimeout)(function () {
                      a.c(c.TIMEOUT);
                    }, 3000);
                  } catch (h) {
                    this.c(c.ERROR), (this.g = !1);
                  }
                };
                a.prototype.D = function (a) {
                  window.OBR.b.Ea(
                    'OB-TPCS',
                    JSON.stringify({ value: a, expiry: new Date().getTime() + 259200000 })
                  );
                };
                a.prototype.B = function () {
                  var a = window.OBR.b.ba('OB-TPCS', null);
                  if (!a) return null;
                  a = JSON.parse(a);
                  return new Date().getTime() > a.expiry
                    ? (window.OBR.b.oc('OB-TPCS'), null)
                    : a.value;
                };
                a.prototype.c = function (a) {
                  -1 === this.qd && (this.qd = a);
                };
                window.OBR.Pd || (window.OBR.Pd = new a());
              })();
              window.OBR.xc =
                window.OBR.xc ||
                (function () {
                  var a = { key: null };
                  (function () {
                    a: {
                      var a = window.OBR.b.ba('OB_LS_CONTEXT', null);
                      if (a)
                        try {
                          var c = JSON.parse(a);
                          if (c.key) {
                            var d = c;
                            break a;
                          }
                        } catch (f) {
                          window.OBR.j.log('Failed to parse stored value OB_LS_CONTEXT');
                        }
                      d = null;
                    }
                    if (d && 'disabled' !== d.key) {
                      if ((d = d.key)) {
                        c = window.OBR.b.ba(d, null);
                        if (
                          !c &&
                          0 < d.indexOf('.') &&
                          ((a = d.split('.')),
                          (c = a.splice(0, 1)[0]),
                          (c = window.OBR.b.ba(c, null)))
                        )
                          try {
                            for (c = JSON.parse(c); a.length; ) {
                              var e = a.splice(0, 1);
                              c = c[e];
                            }
                          } catch (f) {
                            window.OBR.j.log('Failed to parse local storage value ' + d);
                          }
                        c && 'string' === typeof c && 300 < c.length && (c = c.substring(0, 300));
                        e = c;
                      } else e = null;
                      e && ((e = (0, window.encodeURIComponent)(e)), (window.OBR.f.xc = e));
                    }
                  })();
                  return {
                    update: function (b) {
                      b = b.i('localStoragePathForContextRule', null);
                      b !== a.key &&
                        (b
                          ? ((a.key = b), window.OBR.b.Ea('OB_LS_CONTEXT', JSON.stringify(a)))
                          : window.OBR.b.oc('OB_LS_CONTEXT'));
                    },
                  };
                })();
              (function () {
                function a () {
                  this.g = this.c = this.Za = this.Ka = null;
                  this.Sc = {};
                  this.rc = this.B();
                  this.Gc = null !== this.rc;
                  this.kj = window.__uspapi && 'function' === typeof window.__uspapi;
                  this.nc = null;
                  this.mk = this.kj;
                  this.rf = !1;
                }
                a.prototype.w = function () {
                  this.M();
                  this.D();
                };
                a.prototype.B = function () {
                  return window.__tcfapi && 'function' === typeof window.__tcfapi
                    ? 2
                    : window.__cmp && 'function' === typeof window.__cmp
                    ? 1
                    : this.ca();
                };
                a.prototype.ca = function () {
                  if (window.OBR.f.Ad)
                    for (var a = window, c = 0; a && 10 > c; )
                      try {
                        if (a.frames.__tcfapiLocator) return (this.g = a), 2;
                        if (a.frames.__cmpLocator) return (this.c = a), 1;
                        if (a === window.top) break;
                        a = a.parent;
                        c++;
                      } catch (d) {
                        break;
                      }
                  return null;
                };
                a.prototype.M = function () {
                  if (
                    typeof window.OBR.f.Te.OB_CONSENT === window.OBR.f.ul &&
                    !1 === window.OBR.f.Te.OB_CONSENT
                  )
                    (this.Ka = 'no_consent'), (this.Gc = !0);
                  else if (this.Gc)
                    switch (this.rc) {
                      case 1:
                        this.Ha();
                        break;
                      case 2:
                        this.Cb();
                    }
                };
                a.prototype.D = function () {
                  var a = this;
                  this.mk &&
                    window.__uspapi('getUSPData', 1, function (b, d) {
                      d && b && b.uspString
                        ? (window.OBR.j.log('getCCPAData: ' + b.uspString),
                          window.OBR.b.Ea('OB-CCPA', b.uspString),
                          (a.nc = b.uspString))
                        : window.OBR.b.yc(
                            'obm-ccpa_fail',
                            window.document.location.hostname,
                            !1,
                            100
                          );
                    });
                };
                a.prototype.pa = function () {
                  var a = this;
                  window.__tcfapi('addEventListener', 2, function (b, d) {
                    !d || ('tcloaded' !== b.eventStatus && 'useractioncomplete' !== b.eventStatus)
                      ? window.OBR.b.yc('obm-cmp_fail', window.document.location.hostname, !1, 100)
                      : b.tcString
                      ? ((d = window.OBR.b.ga(b.tcString)),
                        window.OBR.j.log('getConsentData: ' + d),
                        window.OBR.b.Ea('OB-CNSNT-2', d),
                        a.rf || (a.Za = d),
                        window.__tcfapi('removeEventListener', 2, function () {}, b.listenerId))
                      : (a.Gc = !1);
                  });
                };
                a.prototype.Ha = function () {
                  var a = this;
                  this.c && this.o();
                  try {
                    window.__cmp('getConsentData', null, function (b) {
                      b && b.consentData
                        ? ((b = window.OBR.b.ga(b.consentData)),
                          window.OBR.j.log('getConsentData: ' + b),
                          window.OBR.b.Ea('OB-CNSNT', b),
                          a.rf || (a.Ka = b))
                        : window.OBR.b.yc(
                            'obm-cmp_fail',
                            window.document.location.hostname,
                            !1,
                            100
                          );
                    });
                  } catch (c) {
                    window.OBR.b.yc('obm-cmp_fail', window.document.location.hostname, !1, 100),
                      (this.Ka = 'no_consent'),
                      (this.Gc = !0);
                  }
                };
                a.prototype.o = function () {
                  var a = this;
                  window.__cmp = function (b, d, e) {
                    var c = Math.random() + '';
                    b = { __cmpCall: { command: b, parameter: d, callId: c } };
                    a.Sc[c] = e;
                    a.c.postMessage(b, '*');
                  };
                  window.addEventListener(
                    'message',
                    function (b) {
                      try {
                        var c = 'string' === typeof b.data ? JSON.parse(b.data) : b.data;
                        if (c.__cmpReturn) {
                          var e = c.__cmpReturn;
                          a.Sc[e.callId](e.returnValue, e.success);
                          delete a.Sc[e.callId];
                        }
                      } catch (f) {}
                    },
                    !1
                  );
                };
                a.prototype.Cb = function () {
                  var a = this;
                  null != this.g && this.u();
                  try {
                    window.__tcfapi('getTCData', 2, function (b, d) {
                      d && 'loaded' === b.cmpStatus
                        ? b.tcString
                          ? ((b = window.OBR.b.ga(b.tcString)),
                            window.OBR.j.log('getConsentData: ' + b),
                            window.OBR.b.Ea('OB-CNSNT-2', b),
                            a.rf || (a.Za = b))
                          : (window.OBR.b.oc('OB-CNSNT-2'), (a.Gc = !1))
                        : a.pa();
                    });
                  } catch (c) {
                    window.OBR.b.yc('obm-cmp_fail', window.document.location.hostname, !1, 100),
                      (this.Ka = 'no_consent'),
                      (this.Gc = !0);
                  }
                };
                a.prototype.u = function () {
                  var a = this;
                  window.__tcfapi = function (b, d, e, f) {
                    var c = Math.random() + '';
                    b = { __tcfapiCall: { command: b, parameter: f, version: d, callId: c } };
                    a.Sc[c] = e;
                    a.g.postMessage(b, '*');
                  };
                  window.addEventListener(
                    'message',
                    function (a) {
                      var b = {};
                      try {
                        b = 'string' === typeof a.data ? JSON.parse(a.data) : a.data;
                      } catch (e) {
                        return;
                      }
                      (a = b.__tcfapiReturn) &&
                        'function' === typeof this.Sc[a.callId] &&
                        (this.Sc[a.callId](a.returnValue, a.success), (this.Sc[a.callId] = null));
                    }.bind(this),
                    !1
                  );
                };
                a.prototype.ha = function () {
                  if (
                    typeof window.OBR.f.Te.OB_CONSENT !== window.OBR.f.ul ||
                    !1 !== window.OBR.f.Te.OB_CONSENT
                  )
                    '' !== window.OBR.b.ba('OB-CNSNT', '') &&
                      (this.Ka = window.OBR.b.ba('OB-CNSNT', '')),
                      '' !== window.OBR.b.ba('OB-CNSNT-2', '') &&
                        (this.Za = window.OBR.b.ba('OB-CNSNT-2', ''));
                };
                a.prototype.hk = function (a, c) {
                  this.rc = c;
                  1 === c
                    ? ((this.Ka = window.OBR.b.ga(a)), window.OBR.b.Ea('OB-CNSNT', this.Ka))
                    : ((this.Za = window.OBR.b.ga(a)), window.OBR.b.Ea('OB-CNSNT-2', this.Za));
                };
                window.OBR.X || (window.OBR.X = new a());
              })();
              (function () {
                function a () {
                  this.$b = this.tk = !1;
                  this.c = '';
                  this.D();
                  this.o();
                  this.ck = this.Je = null;
                }
                a.prototype.o = function () {
                  window.OBR.b.oc('OB-REQ-MODE');
                  window.OBR.b.oc('OB-REQ-MODE-VER');
                };
                a.prototype.D = function () {
                  'true' === window.OBR.b.O('obPageViewTest', 'false')
                    ? (this.$b = !0)
                    : this.ca()
                    ? ((this.$b = !1), 30 > window.OBR.b.qg(100) && (this.$b = !0))
                    : (this.$b = !1);
                };
                a.prototype.start = function (a) {
                  this.tk || ((this.tk = !0), this.M(a));
                };
                a.prototype.pa = function (a) {
                  var b = window.OBR.ea.uc().xb(),
                    d = [];
                  a.split(',').forEach(function (a) {
                    var c = b.filter(function (b) {
                      return b.H() === a;
                    });
                    c && c.length && (d.push(c[0]), b.splice(b.indexOf(c[0]), 1));
                  });
                  d = d.concat(b);
                  window.OBR.ea.uc().Ny(d);
                };
                a.prototype.M = function (a) {
                  if (a && !a.Gb()) {
                    var b = a.xb().find(function (a) {
                        return a.vn();
                      }),
                      d = b.I,
                      e = b.H();
                    b = window.OBR.ea.vm(b);
                    b = b.replace('&idx=' + d, '&idx=-1');
                    b = b.replace('&widgetJSId=' + e, '&widgetJSId=PO_1');
                    b += '&widgetList=' + this.B(a) + '&sto=' + this.ck;
                    a = window.OBR.b.Aa(0, b, !0);
                    window.OBR.b.Fa(a);
                  }
                };
                a.prototype.B = function (a) {
                  return (this.c = a.xb().reduce(function (a, b) {
                    return a && a.length ? a + ',' + b.H() : b.H();
                  }, ''));
                };
                a.prototype.jx = function (a) {
                  var b = {};
                  a && a.response && a.response.request && (b = a.response.request);
                  a = b.widgetList;
                  this.Je = b.ro;
                  a && (this.pa(a), this.Ha(), this.u(a, this.c), this.g());
                };
                a.prototype.g = function () {
                  window.OBR.ea.uc().top();
                };
                a.prototype.u = function (a, c) {
                  var b = [];
                  if (
                    a &&
                    ((a = a.split(',')), (c = c ? c.split(',') : []), a.length != c.length)
                  ) {
                    var e = a.slice(0);
                    c.forEach(function (a) {
                      -1 < e.indexOf(a) ? e.splice(e.indexOf(a), 1) : b.push(a);
                    });
                  }
                  b &&
                    b.length &&
                    b.forEach(function (a) {
                      var b = window.OBR.ea
                        .uc()
                        .xb()
                        .filter(function (b) {
                          return b.H() === a;
                        });
                      b &&
                        b.length &&
                        window.OBR.ea
                          .uc()
                          .xb()
                          .splice(
                            window.OBR.ea
                              .uc()
                              .xb()
                              .indexOf(b[b.length - 1]),
                            1
                          );
                    });
                };
                a.prototype.Ha = function () {
                  var a = window.OBR.ea.uc().xb(),
                    c = [];
                  a.forEach(function (a) {
                    var b = a.W();
                    c.push(b);
                    a.zs(b);
                    delete window.OBR.A[b];
                  });
                  c.sort();
                  a.forEach(function (a) {
                    var b = a.W(),
                      d = c.shift();
                    a.Iz(b, d);
                    window.OBR.A[d] = a;
                  });
                };
                a.prototype.ca = function () {
                  return (
                    -1 <
                    'us.cnn.com cnn.com www.cnn.com news.sky.com www.hawaiinewsnow.com www.wvlt.tv www.express.co.uk m.focus.de www.focus.de www.mako.co.il mobile.mako.co.il www.newsbreak.com actu.orange.fr www.hawaiinewsnow.com www.dailystar.co.uk www.israelhayom.co.il'
                      .split(' ')
                      .indexOf(window.location.hostname)
                  );
                };
                window.OBR.Ia || (window.OBR.Ia = new a());
              })();
              (function () {
                function a () {
                  this.l = d;
                }
                function b (a, b, c) {
                  this.url = b;
                  this.version = c;
                  this.state = 0;
                  this.nf = [];
                  this.context = this;
                  this.Vl = null;
                }
                var c,
                  d = {
                    $z: 'ADNGIN',
                    mh: 'POPUPDESCRIPTION',
                    ef: 'WHATIS',
                    ah: 'FLYTHROUGH',
                    Gh: 'VIDEO',
                    uh: 'SCROLL',
                    bl: 'SCROLLEXTERNAL',
                    $k: 'REGISTER',
                    Hh: 'VIDGET',
                    sh: 'REFRESHWIDGET',
                    wh: 'SKYLANDER',
                    bf: 'LOADMORE',
                    cA: 'DYNAMICTEXTTRUNCATION',
                    Ch: 'TOPBOX',
                    hh: 'PAGER',
                    Wk: 'PAGEREXTERNAL',
                    Xk: 'PAGEREXTERNALNEW',
                    Fh: 'USERZAPPING',
                    $e: 'INPLAYERWIDGET',
                    ph: 'READMORE',
                    Nd: 'NATIVEVIDEOPLAYER',
                    Kh: 'WIDGETWIZARD',
                    zh: 'SWIPELAYOUT',
                    Eh: 'USERACTIONS',
                    eA: 'MEGABLOCKS',
                    yh: 'STASHRENDERER',
                    Yg: 'EMBEDDEDARTICLES',
                    bA: 'BALCONY',
                    Od: 'STREAMFEED',
                    bh: 'FOLLOWTOPICFEED',
                    Sg: 'ADCAROUSEL',
                    jh: 'PERFORMANCEMONITOR',
                    vh: 'SINGLECARDCAROUSEL',
                    Ug: 'CARDSCAROUSELBOX',
                    oh: 'PUBLISHERTOOLS',
                    kh: 'PLAYABLEAD',
                    lh: 'PODCAST',
                    Bh: 'TIMELINE',
                    Sk: 'LISTORY',
                    Uk: 'OB_LISTORY',
                    dh: 'GRIDCAROUSEL',
                    Jh: 'WIDGETINJECTOR',
                    Xg: 'DISPLAY',
                    rh: 'REEL',
                    ih: 'PARALLAX',
                    Ue: 'CLIP',
                    fh: 'LEAD_FORMS',
                    xh: 'STACK_CARD',
                    qh: 'READ_NEXT',
                  };
                b.prototype.vs = function () {
                  if (2 === this.state) this.Pn();
                  else if (0 === this.state) {
                    var a = window.OBR.b.Aa(0, this.url + this.c(), !0);
                    a.onerror = this.Vl;
                    this.state = 1;
                    window.OBR.b.Fa(a);
                  }
                };
                b.prototype.c = function () {
                  return window.OBR.env ? '?e=' + window.OBR.env : '';
                };
                b.prototype.Pn = function () {
                  this.state = 2;
                  for (var a = 0; a < this.nf.length; a += 1) {
                    var b = this.nf[a];
                    'function' === typeof b.mc && b.mc.call(this.context, b.ur);
                  }
                  this.nf = [];
                };
                b.prototype.Py = function (a) {
                  this.url = this.url.replace('$SUFFIX', a ? a.toString().toLowerCase() : '');
                };
                a.prototype.w = function (a, b) {
                  c = b ? b : this.g();
                };
                a.prototype.g = function () {
                  function a (a) {
                    return window.OBR.f.Sw + '/' + a;
                  }
                  function c (a, c, e) {
                    d[a] || (d[a] = new b(a, c, e));
                  }
                  var d = {};
                  c(this.l.mh, a('popupDescription.js'), -1);
                  c(this.l.ef, a('whatis.js'), -1);
                  c(this.l.Fh, a('userZapping.js'), -1);
                  c(this.l.ah, a('flyThrough.js'), -1);
                  c(this.l.Gh, a('video.js'), -1);
                  c(this.l.$k, a('registration.js'), -1);
                  c(this.l.sh, a('refreshWidget.js'), -1);
                  c(this.l.wh, a('skyLander.js'), -1);
                  c(this.l.Ch, a('topBox.js'), -1);
                  c(this.l.zh, a('swipeLayout.js'), -1);
                  c(this.l.bf, a('loadMore.js'), -1);
                  c(this.l.$e, a('inPlayerWidget.js'), -1);
                  c(this.l.ph, a('readMore.js'), -1);
                  c(this.l.Kh, a('widgetWizard.js'), -1);
                  c(this.l.yh, a('stashRenderer.js'), -1);
                  c(this.l.Yg, a('embeddedArticles.js'), -1);
                  c(this.l.Eh, a('userActions/userActions_$SUFFIX.js'), -1);
                  c(this.l.Hh, window.OBR.f.Z + 'libs.outbrain.com/vidget/vidget.js', -1);
                  c(this.l.uh, a('scroll.js'), -1);
                  c(this.l.bl, window.OBR.f.Ej + '/scroll/scrollExternal.js', -1);
                  c(this.l.hh, a('pager.js'), -1);
                  c(this.l.Wk, window.OBR.f.Ej + '/pager/pagerExternal.js', -1);
                  c(this.l.Xk, window.OBR.f.Ej + '/pager/pagerExternalNew.js', -1);
                  c(this.l.Nd, window.OBR.f.Tw + '/NVPInjector.min.js', -1);
                  c(this.l.Od, a('streamFeed.js'), -1);
                  c(this.l.bh, a('followTopicFeed.js'), -1);
                  c(this.l.Sg, a('adCarousel.js'), -1);
                  c(this.l.jh, a('performanceMonitor.js'), -1);
                  c(this.l.vh, a('singleCardCarousel.js'), -1);
                  c(this.l.Ug, a('cardsCarouselBox.js'), -1);
                  c(this.l.oh, a('publisherTools.js'), -1);
                  c(this.l.kh, a('playableAd.js'), -1);
                  c(this.l.lh, a('podcast.js'), -1);
                  c(this.l.Bh, a('timeline.js'), -1);
                  c(this.l.Sk, window.OBR.f.Z + 'widgets.outbrain.com/listory/listory.js', -1);
                  c(
                    this.l.Uk,
                    window.OBR.f.Z + 'widgets.outbrain.com/listory/outbrain-listory.js',
                    -1
                  );
                  c(this.l.dh, a('gridCarousel.js'), -1);
                  c(this.l.Jh, a('widgetInjector.js'), -1);
                  c(this.l.Xg, a('displayAd.js'), -1);
                  c(this.l.rh, a('reel.js'), -1);
                  c(this.l.ih, a('parallax.js'), -1);
                  c(this.l.Ue, a('clip.js'), -1);
                  c(this.l.fh, a('leadForms.js'), -1);
                  c(this.l.xh, a('stackCard.js'), -1);
                  c(this.l.qh, a('readNext.js'), -1);
                  return d;
                };
                a.prototype.Zt = function (a) {
                  return c[a].state;
                };
                a.prototype.P = function (a) {
                  if ('-1' !== window.OBR.f.Kc)
                    try {
                      c[a].Pn();
                    } catch (g) {
                      throw (
                        (window.OBR.error({
                          name: 'obm-MakeHandShakeError',
                          message: 'Error in module: ' + a + ', Err: ' + g,
                          stack: g.stack || 'None',
                        }),
                        g)
                      );
                    }
                };
                a.prototype.c = function (a) {
                  return c[a];
                };
                a.prototype.J = function (a, b, c, d, e, m) {
                  if ((a = this.c(a)))
                    a.Py(e),
                      a.nf.push({ mc: b || window.OBR.b.rd(), ur: d }),
                      (a.Vl = m),
                      (a.context = c),
                      a.vs();
                };
                a.prototype.Yt = function (a) {
                  for (var b in this.l)
                    if (this.l.hasOwnProperty(b) && this.l[b] === a) return this.l[b];
                  return null;
                };
                if (!window.OBR.h) {
                  var e = new a();
                  e.w();
                  window.OBR.h = e;
                }
              })();
              window.OBR.languageManager =
                window.OBR.languageManager ||
                (function () {
                  var a = window.OBR,
                    b = {},
                    c = {},
                    d = [];
                  b.Kn = function (a) {
                    return d.hasOwnProperty(a);
                  };
                  b.Js = function (a) {
                    d[a] = {};
                  };
                  b.dr = function (b, c) {
                    d[b] = a.b.assign(d[b], c);
                  };
                  c.registerModuleLanguage = function (a, c) {
                    'string' === typeof a &&
                      c &&
                      0 < Object.keys(c).length &&
                      (b.Kn(a) || b.Js(a), b.dr(a, c));
                  };
                  c.Xt = function () {
                    return b.Kn('userActions') ? d.userActions : null;
                  };
                  c.Ba = function () {
                    return b;
                  };
                  return c;
                })();
              window.OBR.w = window.OBR.w || void 0;
              window.OBR.la = function (a) {
                return window.document.getElementById(a);
              };
              window.OBR.Ra =
                window.OBR.Ra ||
                (function () {
                  var a,
                    b = {},
                    c = {},
                    d;
                  b.w = function (c) {
                    a = c = c || window.OBR;
                    d = new a.Qa();
                    b.bk = new window.OBR.Promise();
                  };
                  b.Ba = function () {
                    return c;
                  };
                  c.sf = function (b) {
                    var c;
                    var e = 0;
                    for (c = b.length; e < c; e += 1)
                      a.b.Ta(b[e], 'data-browser', a.f.Sb),
                        a.b.Ta(b[e], 'data-os', a.f.Jj),
                        d.G('find', [b[e]]);
                  };
                  c.wm = function () {
                    return a.b.bb('class', 'OUTBRAIN', 'div', !0);
                  };
                  c.Jt = function (b) {
                    var c,
                      d = [],
                      e = [];
                    for (c = 0; c < b.length; c++) {
                      var h = b[c];
                      if ('string' === typeof h.containerId)
                        if (a.la(h.containerId)) {
                          var l = a.la(h.containerId);
                          window.OBR.Oa.Hs(h, l);
                          e.push(l);
                        } else d.push(b[c]);
                    }
                    window.OB_elements = d;
                    return e;
                  };
                  c.fu = function () {
                    var a = [];
                    'object' === typeof window.OB_elements &&
                      0 < window.OB_elements.length &&
                      (a = window.OB_elements);
                    return a;
                  };
                  c.au = function () {
                    var b = [],
                      d = c.wm(),
                      g;
                    var k = 0;
                    for (g = d.length; k < g; k += 1) {
                      var h = a.b.sa(d[k], 'data-ob-mark');
                      (null !== h && 'true' === h) ||
                        !d[k] ||
                        (b.push(d[k]), a.b.Ta(d[k], 'data-ob-mark', 'true'));
                    }
                    k = c.fu();
                    if (0 < k.length)
                      for (
                        a.j.log('Array of elements found!'), d = c.Jt(k), k = 0, g = d.length;
                        k < g;
                        k += 1
                      )
                        b.push(d[k]);
                    return b;
                  };
                  b.Yq = function (a) {
                    window.OBR.Ra.Af
                      ? window.OBR.Ra.Af.then(function () {
                          return c.yi(a);
                        })
                      : c.yi(a);
                  };
                  c.gr = function (a) {
                    function c () {
                      return e.observe(window.document.body, { subtree: !0, childList: !0 });
                    }
                    function d () {
                      if (window.OBR.oi.un()) {
                        a();
                        window.OBR.j.log(
                          'search containers - dom ready: disconnecting mutation observer'
                        );
                        try {
                          b.bk.resolve();
                        } catch (h) {}
                        e.disconnect();
                        window.document.removeEventListener('readystatechange', d);
                      }
                    }
                    window.OBR.j.log('search containers - mutation observer');
                    var e = new window.MutationObserver(function (b) {
                      (b = b.reduce(function (a, b) {
                        (b = Array.prototype.slice.call(b.addedNodes).filter(function (a) {
                          return 'DIV' === a.tagName;
                        })) &&
                          b.length &&
                          (a = a.concat(b));
                        return a;
                      }, [])) &&
                        b.length &&
                        a();
                    });
                    window.document.addEventListener('readystatechange', d);
                    window.document.body ? c() : window.addEventListener('DOMContentLoaded', c);
                  };
                  c.hy = function () {
                    function a () {
                      window.OBR.j.log('search containers - searching for new containers');
                      var a = c.au();
                      0 < a.length &&
                        (window.OBR.Ra.Af
                          ? window.OBR.Ra.Af.then(function () {
                              return c.sf(a);
                            })
                          : c.sf(a));
                    }
                    if (window.OBR.oi.un()) {
                      a();
                      try {
                        b.bk.resolve();
                      } catch (f) {}
                    } else c.gr(a), a();
                  };
                  c.yi = function (b) {
                    void 0 === b ? (a.xa.xw(), c.hy()) : 0 < (b.length || 0) && c.sf(b);
                  };
                  b.RA = function () {
                    return 0 < c.wm().length;
                  };
                  b.ix = function (a) {
                    d.add('find', a);
                  };
                  b.hB = function (a) {
                    d.add('stopSearch', a);
                  };
                  b.cm = function () {
                    c.yi(void 0);
                  };
                  b.ot = function (b) {
                    var d = [],
                      e;
                    var k = 0;
                    for (e = a.A.length; k < e; k += 1) {
                      var h = a.b.v(k);
                      null !== h &&
                        ('string' === typeof b && a.b.Ta(h, 'data-src', b),
                        a.b.Ta(h, 'data-ob-mark', 'false'),
                        d.push(h));
                    }
                    0 < d.length && ((a.A = []), c.sf(d));
                  };
                  b.Fz = function (b) {
                    a.b.Ta(b, 'data-ob-mark', 'false');
                  };
                  b.ha = function () {
                    d.Rc();
                    a.A = [];
                  };
                  b.w(window.OBR);
                  return b;
                })();
              OBR._jsc.p = Fa.prototype;
              OBR._jsc.p.ug = function (a) {
                this.u.add('onAdBlockStatusReady', a);
              };
              OBR._jsc.p.Zi = function () {
                return this.o;
              };
              OBR._jsc.p.Ei = function () {
                return this.g;
              };
              OBR._jsc.p.pe = function () {
                return this.Ya;
              };
              OBR._jsc.p.Sf = function () {
                return this.c;
              };
              OBR._jsc.p.ex = function () {
                Ga(this);
              };
              window.OBR.Xa = window.OBR.Xa || new Fa();
              OBR._jsc.$c = new (function () {
                this.c = null;
                try {
                  var a = window.OBR.b.ba('_pdfps', null);
                  if (a) {
                    var b = JSON.parse(a || '[]');
                    a = '';
                    for (var c = OBR._jsc.w(b), d = c.next(); !d.done; d = c.next()) {
                      var e = d.value;
                      if (e && 150 > a.length + e.length) a = a.length ? a + ',' + e : e;
                      else break;
                    }
                    this.c = (0, window.encodeURIComponent)(a);
                  }
                } catch (f) {
                  this.c = null;
                }
              })();
              window.OBR.ea =
                window.OBR.ea ||
                (function () {
                  function a () {
                    this.list = [];
                  }
                  var b = {},
                    c = {},
                    d;
                  b.Be = null;
                  a.prototype.add = function (a) {
                    this.list.push(a);
                  };
                  a.prototype.remove = function (a) {
                    this.list.splice(a, 1);
                  };
                  a.prototype.top = function () {
                    return 0 < this.list.length ? this.list.shift() : null;
                  };
                  a.prototype.xb = function () {
                    return this.list;
                  };
                  a.prototype.Bl = function () {
                    this.list = [];
                  };
                  a.prototype.Ny = function (a) {
                    this.list = a;
                  };
                  a.prototype.Gb = function () {
                    return !this.list || !this.list.length;
                  };
                  c.w = function (c) {
                    d = c || window.OBR;
                    b.ac = new a();
                    b.Ae = new d.Qa();
                    b.re = !1;
                    b.oA = null;
                    b.nm = !0;
                    b.om = !0;
                    b.Lj = !1;
                    b.cv();
                  };
                  b.cv = function () {
                    window.OBR.Ia.$b && ((b.Lj = !0), b.Rx());
                  };
                  b.Rx = function () {
                    window.OBR.Ra.bk.then(function () {
                      window.OBR.Ia.ck = 1;
                      b.Kp();
                    });
                    window.setTimeout(function () {
                      window.OBR.Ia.ck = 0;
                      b.Kp();
                    }, 1000);
                  };
                  b.ju = function () {
                    if (b.Be) return b.Be;
                    var a = d.f.jg && d.f.jg.length ? '&osLang=' + d.f.jg : '',
                      c = d.ka.Ga;
                    c = '&winW=' + c.width + '&winH=' + c.height;
                    var g = '&scrW=' + d.f.ak.Op + '&scrH=' + d.f.ak.xd,
                      k = d.f.ui ? '&xp=' + d.b.ga(d.f.ui) : '',
                      h = d.f.nn ? '&wrDebug=true' : '',
                      l = d.f.Dt ? '&forceFeed=true' : '',
                      m = 'https://' === d.f.Z ? '&secured=true' : '',
                      n = d.f.ki ? '&contxtKV=' + d.b.ga(d.f.ki) : '';
                    b.Be =
                      '&settings=true&recs=true&version=' +
                      d.f.Kc +
                      '&sig=' +
                      d.f.Ik +
                      '&apv=' +
                      d.f.Sd +
                      d.f.ho +
                      d.f.io +
                      d.f.Ol +
                      d.f.An +
                      d.f.Vh +
                      d.f.Jl +
                      k +
                      a +
                      c +
                      g +
                      ('&dpr=' + d.f.Sl) +
                      h +
                      l +
                      m +
                      n +
                      (d.X.Za ? '&cnsntv2=' + d.X.Za : '') +
                      (d.X.Ka ? '&cnsnt=' + d.X.Ka : '') +
                      (d.X.rc ? '&cmpStat=1' : '&cmpStat=0') +
                      (d.X.nc ? '&ccpa=' + d.X.nc : '') +
                      (d.X.kj ? '&ccpaStat=1' : '&ccpaStat=0') +
                      (window.OBR.f.Ad ? '&iframe=true' : '') +
                      (window.OBR.f.xc ? '&lscntx=' + window.OBR.f.xc : '') +
                      (null !== window.OBR.f.qk
                        ? '&skipContextValidation=' + window.OBR.f.qk
                        : '') +
                      (window.OBR.f.Eg ? '&skipRecsFilters=' + window.OBR.f.Eg : '') +
                      (window.OBR.f.Df
                        ? '&forceAd=' + window.OBR.f.Df + '&settingLevel=SOURCE'
                        : '') +
                      (d.f.fo ? '&wdr-natlaz=true' : '&wdr-natlaz=false') +
                      (OBR._jsc.$c.c ? '&pmtseg=' + OBR._jsc.$c.c : '') +
                      (d.f.Wj ? '&ref=' + d.f.Wj : '');
                    return b.Be;
                  };
                  b.Ks = function (a) {
                    var c = a.W(),
                      e = d.b.ba('OB-USER-TOKEN', null),
                      k = d.b.ba('OB-USER-TOKEN-CREATION', null),
                      h = window.OBR.pg.get(),
                      l = a.Lm(),
                      m = l && null !== l.x ? '&px=' + l.x : '';
                    l = l && null !== l.y ? '&py=' + l.y : '';
                    var n = a.Lt();
                    n = null !== n ? '&vpd=' + n : '';
                    var q = '' !== d.f.Oe && 0 !== c ? '&t=' + d.f.Oe : '',
                      r = b.Wt(a);
                    r = r ? '&lastPvTs=' + r : '';
                    var u = !0 === d.f.Kg || !0 === a.Lf(),
                      z = a.Yi() ? '&videoId=' + a.Yi() : '',
                      B = a.Km() ? '&playerSrcId=' + a.Km() : '',
                      F = a.Eb() ? '&api_user_id=' + a.Eb() : '',
                      y = 'true' === d.Xa.pe() ? '&adblck=true' : '&adblck=false',
                      E = 'true' === d.Xa.Sf() ? '&abwl=true' : '&abwl=false',
                      K = b.Qt(u),
                      T = a.Xb() ? '&key=' + a.Xb() : '&key=' + d.f.yo,
                      I = b.he(a),
                      Ta = !0 === a.xn() || d.f.Fj ? '&rtbEnabled=true' : '',
                      Ua = !0 === a.Hn() ? '&va=true' : '',
                      Va = 1 == a.Am() ? '&et=true' : '',
                      Wa = d.f.nb && d.f.nb[a.H()] ? '&contextRule=false' : '',
                      Xa = null !== a.Jf() ? '&num=' + a.Jf() : '',
                      Ya = b.uu(a),
                      Za = b.pu(a),
                      $a = a.tc() ? '&installationType=' + a.tc() : '',
                      ab = a.sc() ? '&app_ver=' + a.sc() : '',
                      bb = '&widgetJSId=' + (d.f.nb && d.f.nb[a.H()] ? d.f.nb[a.H()] : a.H()),
                      cb = '&format=' + a.Em(),
                      db = e ? '&lsd=' + d.b.ga(e) : '';
                    k = k ? '&lsdt=' + k : '';
                    e = '&pdobuid=' + b.Et(h, e);
                    h = a.Fm() ? '&lang=' + a.Fm() : '';
                    var wa = a.Mm() ? '&psub=' + a.Mm() : '';
                    u = u ? '&testMode=true' : '';
                    var eb = b.Nt(a),
                      L = a.Cm() ? '&fId=' + a.Cm() : '',
                      fb = a.Ri && a.Ri() ? '&reasonType=' + a.Ri() : '',
                      gb = a.Ti && a.Ti() ? '&reasonValueId=' + a.Ti() : '',
                      hb = a.Si && a.Si() ? '&reasonValue=' + a.Si() : '',
                      ib = a.Ji && a.Ji() ? '&categoryIds=' + d.b.ga(a.Ji()) : '',
                      jb = a.Dm() ? '&feedVersion=' + a.Dm() : '',
                      kb = a.Uc() ? '&fAB=' + a.Uc() : '',
                      lb = a.ie() && '' !== a.ie() ? '&fbk=' + a.ie() : '';
                    return (
                      eb +
                      '?' +
                      Ya +
                      Za +
                      '&idx=' +
                      c +
                      lb +
                      '&rand=' +
                      d.b.qg() +
                      T +
                      $a +
                      ab +
                      r +
                      bb +
                      Ua +
                      Va +
                      cb +
                      Ta +
                      db +
                      k +
                      e +
                      h +
                      wa +
                      q +
                      Wa +
                      F +
                      z +
                      B +
                      y +
                      E +
                      K +
                      I +
                      Xa +
                      u +
                      L +
                      fb +
                      gb +
                      hb +
                      ib +
                      jb +
                      kb +
                      m +
                      l +
                      n +
                      (a.Ni() && '' != a.Ni() ? '&settingLevel=TEMPLATE&' + a.Ni() : '') +
                      (null !== window.OBR.f.De ? '&pubInState=' + window.OBR.f.De : '') +
                      (window.OBR.Ia.$b && null !== window.OBR.Ia.Je
                        ? '&ro=' + window.OBR.Ia.Je
                        : '') +
                      (!a.Ff() || d.X.Ka || d.X.Za
                        ? ''
                        : '1' === a.Li() || 1 === a.Li()
                        ? '&cnsnt=' + a.Ff()
                        : '&cnsntv2=' + a.Ff())
                    );
                  };
                  b.Qt = function (a) {
                    var b = '';
                    a ||
                      ((a = d.ya.Yd || d.ya.gk)
                        ? (b = '&clss=' + a)
                        : d.ya.Hd && (b = '&clid=' + d.ya.Hd + '&fdu=' + d.ya.yf));
                    return b;
                  };
                  c.vm = function (a) {
                    var c = b.Ks(a),
                      e = b.ju();
                    return (a = a.yu()) && 'hp' === a ? d.f.Vu + c + e : d.f.lo + c + e;
                  };
                  b.Et = function (a, b) {
                    return a ? (a === b ? 0 : window.OBR.b.ga(a)) : -1;
                  };
                  b.he = function (a) {
                    var b = '',
                      c = d.b.Pg(d.f.ti);
                    a = d.b.Pg(a.he());
                    if (c || a) b = '&extid=' + (0, window.encodeURIComponent)(a || c);
                    return b;
                  };
                  b.uu = function (a) {
                    var b = a.Hi(),
                      c = a.Mi(),
                      e = a.Pi();
                    return b
                      ? 'bundleUrl=' + d.b.ga(b)
                      : e
                      ? 'portalUrl=' + d.b.ga(e)
                      : c
                      ? 'contentUrl=' + d.b.ga(c)
                      : 'url=' + d.b.ga(a.wa());
                  };
                  b.Nt = function (a) {
                    return a.Hi() || a.Mi() || a.Pi() ? '/utils/platforms' : '/utils/get';
                  };
                  b.pu = function (a) {
                    var b = '&srcUrl=';
                    a = a.Qm();
                    null !== a && 'string' === typeof a && 0 < a.length
                      ? (b += d.b.ga(a))
                      : (b = 0 < d.f.Hg.length ? b + d.f.Hg : '');
                    return b;
                  };
                  b.fv = function (a, c) {
                    var e = c.I,
                      f = c.H(),
                      h = d.b.Aa(0, a, !0);
                    d.b.Da(h, 'error', function () {
                      b.Ae.G('onOdbFail_' + e + '_' + f, [c], !0);
                    });
                    window.OBR.xa.Hw(f, e);
                    d.b.Fa(h);
                    b.Ae.G('onOdbFire_' + e + '_' + f, [c], !0);
                    d.j.log('fire this src ' + a);
                  };
                  b.Uy = function (a) {
                    d.f.Vv &&
                      (0, window.setTimeout)(function () {
                        b.Uo(a.I, a.H());
                      }, 10000);
                  };
                  b.Uo = function (a, b) {
                    d.b.Xj('ob_odbCall_' + a + b);
                  };
                  b.pv = function () {
                    var a = null !== d.Xa.Ya;
                    if (b.nm)
                      if (((b.nm = !1), a)) d.j.log('AdBlock ODB detected immediately');
                      else {
                        var f = new d.dl();
                        d.j.log('AdBlock ODB start stopwatch');
                        f.start();
                        d.Xa.ug(function () {
                          d.j.log('AdBlock ODB detected after ' + f.stop());
                          c.G();
                        });
                      }
                    return a;
                  };
                  b.Ev = function () {
                    var a = window.OBR.ya.um;
                    if (b.om && ((b.om = !1), !a)) {
                      d.j.log('FD start stopwatch');
                      var f = new d.dl();
                      kc(d.ya, function () {
                        d.j.log('FD return after ' + f.stop());
                        c.G();
                      });
                    }
                    return a;
                  };
                  b.Fv = function () {
                    if (!d.X.Gc || null !== d.X.Ka || null != d.X.Za) return !0;
                    b.Ft ||
                      (b.Ft = (0, window.setTimeout)(function () {
                        d.j.log('Second time for consent');
                        if (null === d.X.Ka && null == d.X.Za)
                          if (((d.X.rf = !0), '' !== d.b.ba('OB-CNSNT-2', ''))) {
                            var a = d.b.ba('OB-CNSNT-2', '');
                            a && 'undefined' != a
                              ? ((d.X.Za = d.b.ba('OB-CNSNT-2', '')),
                                d.j.log('Taking consent from LS'))
                              : d.b.oc('OB-CNSNT-2');
                          } else
                            '' !== d.b.ba('OB-CNSNT', '') &&
                              ((d.X.Ka = d.b.ba('OB-CNSNT', '')),
                              d.j.log('Taking consent from LS'));
                        d.X.Gc = !1;
                        c.G();
                      }, 300));
                    return !1;
                  };
                  b.sv = function () {
                    if (!d.X.mk || null !== d.X.nc) return !0;
                    b.Ur ||
                      (b.Ur = (0, window.setTimeout)(function () {
                        d.j.log('Giving a chance for the ccpa data to arrive');
                        null === d.X.nc &&
                          ('' !== d.b.ba('OB-CCPA', '')
                            ? ((d.X.nc = d.b.ba('OB-CCPA', '')),
                              d.j.log('Taking ccpa consent from LS'))
                            : (d.X.mk = !1));
                        c.G();
                      }, 300));
                    return !1;
                  };
                  c.G = function (a) {
                    if (!(!0 !== b.re && !0 !== b.Lj && b.pv() && b.Fv() && b.sv() && b.Ev()))
                      return !1;
                    b.re = !0;
                    if (window.OBR.Ia.$b && !window.OBR.Ia.tk) window.OBR.Ia.start(b.ac);
                    else {
                      if (a) {
                        var e = b.ac.xb().indexOf(a);
                        0 <= e ? b.ac.remove(e) : (a = null);
                      } else if (
                        (a = b.ac.xb().find(function (a) {
                          return a.vn();
                        }))
                      )
                        (e = b.ac.xb().indexOf(a)), b.ac.remove(e);
                      return a
                        ? (d.j.log('fire odb for ' + a.wa()),
                          (e = c.vm(a)),
                          b.fv(e, a),
                          b.Uy(a),
                          !0)
                        : (b.re = !1);
                    }
                  };
                  c.po = function (a, c) {
                    b.Ae.add('onOdbFire_' + a.I + '_' + a.H(), c);
                  };
                  c.oo = function (a, c) {
                    b.Ae.add('onOdbFail_' + a.I + '_' + a.H(), c);
                  };
                  c.unlock = function (a, c) {
                    b.re = !1;
                    b.Uo(a, c);
                  };
                  b.Kp = function () {
                    b.Lj = !1;
                    c.G();
                  };
                  c.my = function (a) {
                    !0 === a && (window.OBR.f.Sd = a);
                  };
                  c.mp = function (a) {
                    a && (d.f.Oe = a);
                  };
                  b.Wt = function (a) {
                    var b = null;
                    if (a && 0 == a.W()) {
                      var c = new Date().getTime();
                      a = d.b.ga(a.wa());
                      var e = d.b.ba('OB-lastPageViewInfo', null);
                      if (e)
                        try {
                          var h = JSON.parse(e);
                          if (h && a === h.url) {
                            var l = c - h.previousRequestTime;
                            7200000 > l && (b = l);
                          }
                        } catch (m) {
                          window.OBR.j('Error parsing last page view info');
                        }
                      d.b.Ea(
                        'OB-lastPageViewInfo',
                        JSON.stringify({ url: a, previousRequestTime: c })
                      );
                    }
                    return b;
                  };
                  c.dv = function () {
                    d.f.Sd = !1;
                  };
                  c.register = function (a) {
                    b.ac.add(a);
                    d.j.log('register odb for ' + a.wa());
                    c.G();
                  };
                  c.uc = function () {
                    return b.ac;
                  };
                  c.Mr = function (a) {
                    c.unlock(a.I, a.H());
                    c.G();
                  };
                  c.ha = function () {
                    b.ac.Bl();
                    b.Ae.Rc();
                    b.re = !1;
                    b.Be = null;
                  };
                  c.Ba = function () {
                    b.Nb = d;
                    return b;
                  };
                  c.w(window.OBR);
                  return c;
                })();
              var Oa = [];
              var mb = 1 / 3;
              window.OBR.controller =
                window.OBR.controller ||
                (function () {
                  var a = this,
                    b,
                    c = {},
                    d = {},
                    e;
                  c.cg = 'manualDataReady';
                  c.Yn = 'manualEditorialDataReady';
                  c.xj = 'manualClickReady';
                  var f = !1,
                    g = [],
                    k = 500;
                  c.w = function (a) {
                    b = a = a || window.OBR;
                    e = new b.Qa();
                    d.Zf();
                    c.$u();
                  };
                  c.Ba = function () {
                    return d;
                  };
                  c.lB = function (a) {
                    e.add('onHtmlReturn', a);
                  };
                  c.Qx = function (a) {
                    e.add('noRecs', a);
                  };
                  d.Ak = function (a) {
                    if (
                      window.OBR.f.Ak &&
                      b.f.Sb !== b.f.Lk &&
                      b.f.Sb !== b.f.Pk &&
                      !b.f.ta &&
                      window.document.querySelectorAll &&
                      a &&
                      (a = a.v())
                    ) {
                      a = a.querySelectorAll(
                        '.ob-dynamic-rec-link,A.item-link-container,DIV.item-container > A:first-child,.odb_li .rec-link'
                      );
                      for (var c = 0; c < a.length; c++) {
                        var d = a[c],
                          e = d.getAttribute('onmousedown');
                        e && d.setAttribute('ontouchstart', e);
                      }
                    }
                  };
                  c.Pb = function (a) {
                    b.j.log('rec ' + a + ' was rendered');
                    var e = b.A[a];
                    e.Id(!0);
                    -1 < e.i('recMode', '').indexOf('dynamic') || f || (b.b.sy(), (f = !0));
                    0 === a && (window.OBR.xc.update(e), d.pw(e));
                    d.Yx(e);
                    Gb(b.sb, e);
                    d.Cu(e);
                    b.b.tr(e);
                    b.display.kv(e);
                    c.xo(e);
                    d.Oz(e);
                    d.Nz(e);
                    d.Ak(e);
                    d.Bx(e);
                    d.kw(e);
                    d.Zu(e);
                    d.cy(e);
                    d.mw(e);
                    d.pt(e);
                    d.$w(e);
                    d.bw(e) && window.OBR.Na.Ob(e);
                    window.OBR.xc.update(e);
                    Ra(e);
                  };
                  d.Yx = function (a) {
                    a.zb() && window.OBR.display.Xx(a);
                  };
                  d.pt = function (a) {
                    try {
                      var b = [a.i('afterRenderCallback', null), 'OBBridge.widgetEvents.rendered']
                          .filter(function (a) {
                            return a;
                          })
                          .filter(function (a, b, c) {
                            return c.indexOf(a) === b;
                          }),
                        c = a.v();
                      b.forEach(function (a) {
                        null !== a &&
                          window.OBR.b.Ou(a) &&
                          (a = a.split('.').reduce(function (a, b) {
                            return a[b];
                          }, window)) &&
                          (0, window.setTimeout)(a.bind(null, c), 0);
                      });
                    } catch (n) {}
                  };
                  d.Cu = function (a) {
                    a.La('eventTrackers') && window.OBR.be.bj(a);
                  };
                  c.yg = function (a, b, c) {
                    window.OBR.proxy.ow(a, b, c);
                  };
                  d.cy = function (a) {
                    if (!a.zb()) {
                      var b = window.OBR.ya;
                      switch (a.i('fraudDetection', '0')) {
                        case '2':
                          1 !== b.mb || b.c || b.c || ((b.c = !0), (b.Hd = b.Di), Sb());
                          break;
                        case '4':
                          Wb(a);
                          break;
                        case '5':
                          Wb(a);
                          break;
                        case '6':
                          Vb(a);
                      }
                    }
                  };
                  d.Nz = function (a) {
                    1 !== a.m('vid', 0) || a.yn() || c.yg(a, window.OBR.h.l.Hh, d.nx);
                  };
                  d.Bx = function (a) {
                    a.La('publisherTools') &&
                      !b.f.Zf &&
                      b.h.J(
                        b.h.l.oh,
                        function (a) {
                          window.OBR.Go.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.bw = function (a) {
                    return !a.qj() && !a.jj() && !a.on() && !a.Fn() && !a.Cn();
                  };
                  d.kw = function (a) {
                    (b.f.Te.OBLISTORY_ON ||
                      (a.Wc().enableListory && !0 === a.Wc().enableListory)) &&
                      c.yg(a, window.OBR.h.l.Sk, function (a) {
                        window.OBLISTORY && window.OBLISTORY.init(a);
                      });
                  };
                  d.ar = function (a) {
                    var b = a.Ki();
                    if (b) {
                      var c = a.v();
                      if (c) {
                        var d = a.Jm();
                        Array.from(c.querySelectorAll('.ob-dynamic-rec-container')).forEach(
                          function (c) {
                            c = c.getAttribute('data-pos');
                            d.listings || (d.listings = {});
                            d.listings[c] || (d.listings[c] = {});
                            d.listings[c].clickPixels || (d.listings[c].clickPixels = []);
                            d.listings[c].clickPixels.push(b);
                            a.Oy(d);
                          }
                        );
                      }
                    }
                  };
                  d.Zu = function (a) {
                    d.ar(a);
                    a.Mu() && c.jf(a);
                  };
                  c.jf = function (a) {
                    var b = this,
                      d = a.v();
                    if (d) {
                      var e = a.W();
                      Array.from(d.querySelectorAll('.ob-dynamic-rec-container')).forEach(
                        function (a) {
                          var d = a.getAttribute('data-pos');
                          (a = a.querySelector('.ob-dynamic-rec-link')) &&
                            a.addEventListener('click', c.Gp.bind(b, a, e, d));
                        }
                      );
                    }
                  };
                  d.mw = function (a) {
                    function c () {
                      window.OB_EXTERNAL_SCRIPT_LOADED && window.OB_EXTERNAL_SCRIPT_LOADED(a.v());
                    }
                    if (a && '' !== a.i('afterRenderScript', '')) {
                      var d = a.i('afterRenderScript', ''),
                        e = function (a) {
                          a = b.b.Aa(0, window.OBR.f.Tz + '/' + a, !0, !1, c, {
                            class: 'ob-after-render-script',
                          });
                          window.OBR.b.Fa(a);
                        };
                      try {
                        0 === d.indexOf('[') && d.indexOf(']') === d.length - 1
                          ? JSON.parse(d).forEach(function (a) {
                              return e(a);
                            })
                          : e(d);
                      } catch (q) {
                        window.OBR.error({
                          name: 'ConversionPixelError',
                          message: 'Could not parse input string',
                        });
                      }
                    }
                  };
                  d.nx = function (a) {
                    window.OB_VIDGET.init(a.currentWidget, a.beforeLoadTime);
                  };
                  d.Oz = function (a) {
                    if ((a = a.La('viewability', null)))
                      for (var b in a)
                        if (a.hasOwnProperty(b))
                          if (window.OBR.la(b)) {
                            var c = window.OBR.b.Aa(0, a[b], !0, !1);
                            window.OBR.b.insertBefore(c, window.OBR.la(b));
                          } else
                            window.OBR.error({
                              name: 'ViewabilityPixelError',
                              message: 'Missing viewabilty pixel placeholder element',
                            });
                  };
                  c.xo = function (a, b) {
                    var c = a.i('recMode', ''),
                      d = a.i('dynamicWidgetLayout', '');
                    ((void 0 === b ? 0 : b) ||
                      (a.cb() && -1 < c.indexOf('top-box')) ||
                      (-1 < c.indexOf('bottom-box') && -1 === c.indexOf('bottom-box-vertical')) ||
                      ('odb_dynamic' === c && -1 < d.indexOf('top-box')) ||
                      -1 < c.indexOf('odb_dynamic_swipe') ||
                      -1 < c.indexOf('odb_dynamic_smartfeed-swipe')) &&
                      window.OBR.h.J(
                        window.OBR.h.l.hh,
                        function (a) {
                          window.OBR.Cc.Cj(a);
                        },
                        this,
                        a
                      );
                  };
                  d.KA = function (a) {
                    return Math.floor(Math.random() * a) + 1;
                  };
                  d.$v = function (a) {
                    a.hasAttribute('data-widget-id') &&
                      (a.getAttribute('data-widget-id').match(/^([A-Z-0-9-_]+)$/) ||
                        window.OBR.error({
                          name: 'obm-IllegalContainerFound',
                          message: 'Widget id bad structure ' + a.getAttribute('data-widget-id'),
                        }));
                    if (a.hasAttribute('data-ob-user-id')) {
                      var b = a.getAttribute('data-ob-user-id');
                      '' === b && ((b = 'null'), a.setAttribute('data-ob-user-id', 'null'));
                      if (-1 < b.indexOf('{') || -1 < b.indexOf('}'))
                        return (
                          window.OBR.error({
                            name: 'obm-IllegalContainerFound',
                            message:
                              'Container was unmarked obUserId: ' +
                              a.getAttribute('data-ob-user-id'),
                          }),
                          !1
                        );
                    }
                    return !0;
                  };
                  d.Uz = function (a) {
                    b.j.log('widget was found');
                    if (d.$v(a)) {
                      var c = b.kd.Rd(a);
                      window.OBR.xa.ao(c.H(), c.W());
                      !0 === c.xv()
                        ? b.j.log('Dynamic loader - stop odb!')
                        : window.OBR.f.Xf && 0 < c.W()
                        ? d.Ln(a, c)
                        : b.ea.register(c);
                    } else window.OBR.Ra.Fz(a);
                  };
                  d.Ln = function (a, b) {
                    a = new window.OBR.IntersectionObserver({
                      callback: function (a) {
                        a.Ty();
                        window.OBR.ea.G(a);
                      },
                      callbackParams: [b],
                      element: a,
                      rootMargin: k + 'px',
                      threshold: [0],
                      unobserve: !0,
                    });
                    a.observe();
                    g.push(a);
                  };
                  d.$w = function (a) {
                    window.OBR.xa.Fu(a);
                  };
                  c.mo = function (a, e) {
                    var f = 'NA',
                      h = a && a.response ? a.response : null;
                    var g = b.b.Oi(e);
                    (g && g.zn()) ||
                      (g && (g.setData(a), g.bp()),
                      h && h.request && h.request.widgetJsId && (f = h.request.widgetJsId),
                      b.ea.mp(g.m('t', null)),
                      b.ea.unlock(e, f),
                      b.b.ko(g),
                      g &&
                        h &&
                        h.documents &&
                        (g.Id(!0),
                        Gb(b.sb, g),
                        g.i('FireImpressionPixelsForJSAPI', !1) &&
                          (h.documents.doc = c.wt(h.documents)),
                        g.mj()
                          ? c.Bf(c.Yn, e, g.H(), a)
                          : ((a = Object.assign({}, h.documents)),
                            'viewability_actions' in h &&
                              (a.reportViewed = h.viewability_actions.reportViewed || ''),
                            c.Bf(c.cg, e, g.H(), a))),
                      0 === e && g.i('widgetLazyLoad', !1) && d.cn(g),
                      b.ea.G());
                  };
                  c.wt = function (a) {
                    return window.OBR.be.aj(a);
                  };
                  c.Bf = function (a, b, c, d) {
                    e.G(a + b + c, [d, b], !0);
                  };
                  c.Ro = function (a, b, c, d) {
                    e.add(a + b + c, d);
                  };
                  c.Aj = function (a, d) {
                    if (null !== a) {
                      var e = a.permalink,
                        f = a.widgetId,
                        h = b.Oa.Rs(a);
                      (a.videoId ||
                        (e && 'string' === typeof e) ||
                        a.contentUrl ||
                        a.bundleUrl ||
                        a.portalUrl) &&
                        f &&
                        'string' === typeof f &&
                        (b.j.log('manual Odb call'),
                        (a = c.uw(a)),
                        (h.idx = a),
                        (h.isManualWidget = !0),
                        (e = b.kd.ji(h)),
                        window.OBR.xa.ao(f, a),
                        b.f.rm(h),
                        e.Gy(),
                        (b.Ed[a] = e),
                        e.mj() && b.pc.Cr(e),
                        c.Ro(c.cg, a, e.H(), d),
                        b.ea.register(e));
                    }
                  };
                  c.uw = function (a) {
                    var c = 0,
                      d = b.f;
                    if (a.videoId) return 0;
                    var e = a.permalink || a.contentUrl || a.bundleUrl || a.portalUrl;
                    d.yj = !0 === a.continuousIdx;
                    if (null !== d.$c || 0 !== b.A.length)
                      if ((null === d.$c && (d.$c = b.A[0].wa()), d.$c === e || !0 === d.yj))
                        0 === d.bg && (d.bg = 100), (c = d.bg + 1);
                    d.$c = e;
                    return (d.bg = c);
                  };
                  c.xe = function (a, d) {
                    'function' === typeof d && e.add(c.xj, d);
                    if (null !== a && a.link) {
                      d = a.link;
                      b.j.log('manual Click');
                      if (null !== d.match(/http(s)?:\/\/.+outbrain.com/i))
                        a.openInWindow
                          ? (window.top.location.href = d)
                          : ((a = d.split('?')),
                            (a = a[0] + '?noRedirect=true&' + a[1]),
                            b.f.uk ? window.navigator.sendBeacon(a) : b.b.Lr(a));
                      else throw 'Wrong redirect link: ' + d;
                      e.G(c.xj);
                      Da(e, c.xj);
                    }
                  };
                  d.cn = function (a) {
                    window.OBR.f.Xf = !0;
                    k = a.i('widgetLazyLoadMargin', 500);
                    (a = window.OBR.ea.uc()) &&
                      a.list &&
                      a.list.forEach(function (a) {
                        if (!a.Bd()) {
                          var b = a.v();
                          b && d.Ln(b, a);
                        }
                      });
                  };
                  d.Dn = function (a) {
                    return a.i('stopRater', !1);
                  };
                  c.gg = function (a, f) {
                    var h;
                    window.OBR.j.log('HTML returned');
                    f = d.ze(f);
                    0 === f && window.OBR.Ia.$b && window.OBR.Ia.jx(a);
                    (h = b.A[f])
                      ? (0 >= h.ou(a) && e.G('noRecs', [h]),
                        h.zn() ||
                          (h.setData(a),
                          h.np(),
                          h.$y(),
                          h.bp(),
                          0 === f && c.Qy(h),
                          b.ea.mp(h.m('t', null)),
                          (b.f.ta = 'mobile' === h.m('readerPlatform', 'desktop') || b.f.Gv),
                          (b.f.sg = h.m('readerPlatform', 'desktop')),
                          0 === f && h.i('widgetLazyLoad', !1) && d.cn(h),
                          window.OBR.xa.Gw(h.H(), h.W()),
                          c.hm(h, f),
                          d.Dn(h) || h.pj() || d.ew(h.If())
                            ? Gb(b.sb, h)
                            : (b.ea.my(h.i('apv', !1)), c.Qv(h) ? c.He(f) : c.Hu(h), c.Wm(h))),
                        c.st(h))
                      : (b.j.log('odbHtmlReturned : Widget not found'),
                        window.OBR.error({
                          name: 'obm-WidgetNotFound',
                          message: 'Widget not found for idx ' + f,
                        }));
                  };
                  c.Qy = function (a) {
                    a &&
                      (window.OBR.monitorData = {
                        pubId: a.m('pid', '0'),
                        sourceId: a.m('sid', '0'),
                        docId: a.m('did', '-1'),
                      });
                  };
                  c.hm = function (a, b) {
                    e.G('odbRtn_' + a.H(), [a]);
                    e.G('odbRtn_' + b, [a]);
                    e.G('onHtmlReturn', [a], !1, a);
                  };
                  c.Wm = function (a) {
                    d.us(a);
                    d.ss(a);
                    d.rs(a);
                    d.ts(a);
                    d.hs(a);
                    d.os(a);
                    d.Yr(a);
                    d.ks(a);
                    d.qs(a);
                    d.ls(a);
                    d.gs(a);
                    d.cs(a);
                    d.fs(a);
                    d.$r(a);
                    d.ns(a);
                    d.Zr(a);
                    d.bs(a);
                    d.ds(a);
                    d.ps(a);
                    d.ms(a);
                    window.OBR.eh.Rd(a);
                    a.jj() || ((a = Sa(a)) && a.filter(nb).forEach(ob));
                  };
                  d.ze = function (a) {
                    return 1000 > a ? a : a % 1000;
                  };
                  d.ew = function (a) {
                    var c = !1;
                    null !== a.match(/(<\/?met|<\/?scr)/i) && ((c = !0), b.j.log('SECURITY'));
                    return c;
                  };
                  c.st = function (a) {
                    d.Dn(a) || (b.ea.unlock(a.I, a.H()), b.ea.G());
                  };
                  d.ss = function (a) {
                    !b.f.ta && a.Xv() && a.Uv()
                      ? b.h.J(
                          b.h.l.wh,
                          function (a) {
                            b.qp.w(a);
                          },
                          this,
                          a
                        )
                      : a.Wv()
                      ? b.h.J(
                          b.h.l.Ch,
                          function (a) {
                            b.Hc.w(a);
                          },
                          this,
                          a
                        )
                      : a.Dv()
                      ? b.h.J(
                          b.h.l.bh,
                          function (a) {
                            window.OBR.Bt.init(a);
                          },
                          this,
                          a
                        )
                      : a.zb() &&
                        b.h.J(
                          b.h.l.Od,
                          function (a) {
                            window.OBR.Me.init({ Oj: a, vi: a.i('feedManualChunkFetch', !1) });
                          },
                          this,
                          a
                        );
                    a.dw() &&
                      b.h.J(
                        b.h.l.Jh,
                        function (a) {
                          window.OBR.Gk.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.rs = function (a) {
                    b.f.ta &&
                      !0 === a.i('isReadMoreEnabled', !1) &&
                      b.h.J(
                        b.h.l.ph,
                        function (a) {
                          b.fb.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.pw = function (a) {
                    if (a && a.i('loadPermiterX', !1) && !window._pxAppId) {
                      a = a.m('pvId', null);
                      var b = window.document.createElement('script');
                      b.type = 'text/javascript';
                      b.innerText =
                        '(function(){ window._pxAppId = "PX7C4UXGxx";' +
                        ('window._pxParam1 = "' + a + '";') +
                        'var p = document.getElementsByTagName("script")[0],s = document.createElement("script");s.async = 1;s.src = "//client.px-cloud.net/PX7C4UXGxx/main.min.js";p.parentNode.insertBefore(s,p);}());';
                      window.document.getElementsByTagName('head')[0].appendChild(b);
                    }
                  };
                  d.us = function (a) {
                    a.cb() &&
                      b.f.ta &&
                      a.qj() &&
                      3 === a.i('dynamicDynamicLayoutVersion', 3) &&
                      b.h.J(
                        b.h.l.zh,
                        function (a) {
                          b.vk.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.ts = function (a) {
                    a.cb() &&
                      a.jj() &&
                      b.h.J(
                        b.h.l.Sg,
                        function (a) {
                          b.ra.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.os = function (a) {
                    a.cb() &&
                      a.Tv() &&
                      b.h.J(
                        b.h.l.vh,
                        function (a) {
                          b.pp.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.Yr = function (a) {
                    a.cb() &&
                      a.tv() &&
                      window.OBR.h.J(
                        window.OBR.h.l.Ug,
                        function (a) {
                          window.OBR.xl.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.hs = function (a) {
                    a.m('obPerformance') && ((window.OBR.f.eg = !0), d.Rn());
                  };
                  d.ks = function (a) {
                    a.cb() &&
                      a.Mv() &&
                      b.h.J(
                        b.h.l.kh,
                        function (a) {
                          b.Ao.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.ls = function (a) {
                    a.cb() &&
                      a.Nv() &&
                      b.h.J(
                        b.h.l.lh,
                        function (a) {
                          b.Bo.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.cs = function (a) {
                    a.cb() &&
                      a.Hv() &&
                      window.OBR.h.J(
                        window.OBR.h.l.dh,
                        function (a) {
                          window.OBR.Um.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.fs = function (a) {
                    a.i('listoryEnabled', !1) &&
                      c.yg(a, window.OBR.h.l.Uk, function (a) {
                        window.OB_LISTORY.init(a.currentWidget);
                        window.OBR.j.log('outbrain-listory loaded');
                      });
                  };
                  d.gs = function (a) {
                    a.cb() &&
                      a.Lv() &&
                      window.OBR.h.J(
                        window.OBR.h.l.ih,
                        function (a) {
                          return window.OBR.Nj.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.qs = function (a) {
                    a.cb() &&
                      a.Fn() &&
                      window.OBR.h.J(
                        window.OBR.h.l.Bh,
                        function (a) {
                          window.OBR.Cp.w(a);
                        },
                        this,
                        a
                      );
                  };
                  d.$r = function (b) {
                    b.cb() &&
                      b.on() &&
                      window.OBR.h.J(
                        window.OBR.h.l.Xg,
                        function (a) {
                          return window.OBR.Ql.w(a);
                        },
                        a,
                        b
                      );
                  };
                  d.ns = function (b) {
                    b.cb() &&
                      b.yn() &&
                      window.OBR.h.J(
                        window.OBR.h.l.rh,
                        function (a) {
                          return window.OBR.No.w(a);
                        },
                        a,
                        b
                      );
                  };
                  d.Zr = function (c) {
                    c.cb() &&
                      c.Nu() &&
                      (c.zb()
                        ? b.h.J(
                            b.h.l.Od,
                            function () {
                              return window.OBR.h.J(
                                window.OBR.h.l.Ue,
                                function (a) {
                                  return window.OBR.clip(a);
                                },
                                a,
                                c
                              );
                            },
                            a
                          )
                        : window.OBR.h.J(
                            window.OBR.h.l.Ue,
                            function (a) {
                              return window.OBR.clip(a);
                            },
                            a,
                            c
                          ));
                  };
                  d.Zv = function (a) {
                    try {
                      var b = JSON.parse(a.i('exploreMoreReferrerDomains', '[]'));
                      if (window.document.referrer)
                        return b.some(function (a) {
                          return 0 <= window.document.referrer.indexOf(a);
                        });
                    } catch (m) {
                      window.OBR.j.log(m);
                    }
                    return !1;
                  };
                  d.bs = function (a) {
                    window.OBR.f.Uu && a.Bv() && d.Zv(a) && window.OBR.Xl(a);
                  };
                  d.ds = function (b) {
                    b.Pu() &&
                      window.OBR.h.J(
                        window.OBR.h.l.fh,
                        function () {
                          return window.OBR.Mn(b);
                        },
                        a
                      );
                  };
                  d.ps = function (b) {
                    b.Cn() &&
                      window.OBR.h.J(
                        window.OBR.h.l.xh,
                        function () {
                          return window.OBR.vp.w(b);
                        },
                        a
                      );
                  };
                  d.ms = function (b) {
                    b.Pv() &&
                      window.OBR.h.J(
                        window.OBR.h.l.qh,
                        function () {
                          return window.OBR.Ho.w(b);
                        },
                        a
                      );
                  };
                  d.Zf = function (a) {
                    b.f.Zf &&
                      b.h.J(
                        b.h.l.Kh,
                        function () {
                          b.Qp.w();
                          b.Rp.w();
                        },
                        this,
                        a
                      );
                  };
                  d.lw = function () {
                    var a = b.b.Aa(0, '//widgets.outbrain.com/adngin/adngin.js', 'true');
                    window.document.head.appendChild(a);
                  };
                  c.Qv = function (a) {
                    var b = !0;
                    if (a.qn() || (a.na && a.na.reason && a.na.reason === window.OBR.pc.Nc.Yk))
                      b = !1;
                    return b;
                  };
                  c.Hu = function (a) {
                    a.qn() && b.display.hv(a);
                  };
                  c.He = function (a) {
                    a = b.A[a];
                    window.OBR.xa.$n(a.H(), a.W());
                    b.display.He(a);
                    b.j.log('HTML - Render');
                    window.OBR.xa.Mw(a.H(), a.W());
                    c.ng(a);
                    c.Ie(a);
                  };
                  c.Ie = function (a) {
                    if (!0 === a.La('inlineNVP', !1)) {
                      var c = {};
                      c.platform = b.f.sg;
                      c.lang = a.m('lang', 'en');
                      c.uuid = a.m('lsd', null);
                      c.publisherId = a.m('pid', null);
                      c.sourceId = a.m('sid', null);
                      c.widgetNumberId = a.m('wnid', null);
                      c.location = a.m('gl', '');
                      c.timestamp = a.Xi();
                      c.widgetID = a.m('widgetJsId', a.H());
                      c.reqID = a.m('req_id', '-1');
                      c.pvId = a.m('pvId', '-1');
                      c.obcnst = a.m('obcnsnt', !0);
                      c.did = a.m('did', null);
                      c.gdpr = a.m('gdpr', 0);
                      c.cnsnt = a.m('cnsnt', null);
                      c.abTestVal = a.Uc() || a.m('abTestVal', 'no_abtest');
                      c.feedVersion = a.m('feedVersion', null);
                      b.h.J(b.h.l.Nd, function () {
                        window.NVPInjector.main.widgetLoad(a.v(), a.Wc(), c);
                      });
                    }
                  };
                  c.ng = function (a) {
                    var c = a.Jv(),
                      d = a.i('dynamicTruncateSource', !1),
                      e = a.i('TruncateDescription', !1);
                    b.b.ko(a);
                    OBR._jsc.Mb(b.vf, a.W(), d, e, c);
                  };
                  c.Lo = function (a) {
                    b.b.V(a, 'ob_clicked');
                    var c = b.b.sa(a, 'data-redirect');
                    null !== c && (a.href = c);
                  };
                  c.Dc = function (a) {
                    d.xs();
                    b.Ra.ot(a);
                    return !0;
                  };
                  c.ha = function () {
                    e.Rc();
                  };
                  c.Wo = function () {
                    b.xa.Aw();
                    b.Ra.ix(d.Uz);
                    b.display.Bc(c.Pb);
                    b.f.qv && d.lw();
                    b.f.Yf ? b.f.oz() : b.Ra.cm();
                    window.OBR.f.eg && d.Rn();
                  };
                  d.Rn = function () {
                    b.h.J(
                      b.h.l.jh,
                      function () {
                        window.OBR.kq.init();
                      },
                      this
                    );
                  };
                  c.Rr = function (a, c, d) {
                    if (
                      window.confirm(
                        'Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?'
                      )
                    ) {
                      var e = 'https://my.outbrain.com/manage/';
                      e =
                        !1 === d
                          ? e + ('add-zapped-document?publisherId=' + c + '&docUrl=' + b.b.ga(a))
                          : e +
                            ('add-rule?publisherId=' +
                              c +
                              '&ruleValue=' +
                              b.b.ga(a) +
                              '&ruleType=' +
                              d);
                      a = b.b.Aa(0, e, !0);
                      b.b.Fa(a);
                    }
                  };
                  c.Qr = function (a) {
                    window.confirm(
                      'Removing this recommendation will remove it permanently for this section and will refresh the recommendations.\n Are you sure you want to remove this recommendation?'
                    ) &&
                      ((a = b.b.Aa(
                        0,
                        b.f.lo + b.f.Sr + a + '&index=1&templateIndex=1&sig=' + b.f.Ik,
                        !0
                      )),
                      b.b.Fa(a));
                  };
                  c.by = function (a) {
                    a &&
                      a.ob_exclude_resp &&
                      'number' === typeof a.ob_exclude_resp.code &&
                      1 !== a.ob_exclude_resp.code &&
                      c.Dc();
                  };
                  c.Px = function (a, c) {
                    if (c && 'function' === typeof c) {
                      var d = 'odbRtn_' + a;
                      e.add(d, c);
                      (a = b.Oa.Sm(a)) && a.mn() && e.G(d, [a]);
                    }
                  };
                  c.Ox = function (a, c) {
                    if (c && 'function' === typeof c) {
                      var d = 'odbRtn_' + a;
                      e.add(d, c);
                      (a = b.Oa.vc(a)) && a.mn() && e.G(d, [a]);
                    }
                  };
                  c.It = function (a) {
                    return (a = b.Oa.Sm(a)) ? a.m('tcr', -1) : null;
                  };
                  c.ec = function () {
                    b.Ra.cm();
                  };
                  c.Rc = function () {
                    b.display.ha();
                    b.ea.ha();
                    this.ha();
                    b.Ra.ha();
                    b.sb.ha();
                    b.$i.ha();
                    b.pc && b.pc.ha();
                    b.Hc && b.Hc.ha();
                    b.Na.ha();
                    b.be.ha();
                    b.f.ha();
                    b.X.ha();
                    g.splice(0).forEach(function (a) {
                      return a.unobserve();
                    });
                  };
                  c.So = function () {
                    this.Rc();
                    this.Wo();
                  };
                  d.xs = function () {
                    b.ea.dv();
                    b.sb.ha();
                    window.OBR.Na.ha();
                    window.OBR.be.ha();
                  };
                  c.Po = function (a, c) {
                    a = window.OBR.Oa.vc(d.ze(a));
                    a = d.og(a, c);
                    b.ea.register(a);
                  };
                  d.og = function (a, b) {
                    a.Oo(b);
                    window.OBR.Dc && window.OBR.Dc.Cg(a);
                    return a;
                  };
                  c.Bj = function (a, b, d, f, g, k) {
                    b &&
                      a &&
                      (c.xe({ link: b, openInWindow: k }, null),
                      e.G('videoClick_' + a, [
                        { videoUrl: d, videoId: f, widgetId: a, widgetIdx: g },
                      ]));
                  };
                  c.Ij = function (a, b) {
                    e.add('videoClick_' + a, b);
                  };
                  c.Sn = function (a, c, e, f) {
                    var g = window.OBR.b.v(a);
                    g
                      ? d.pl(g)
                      : window.OBR.error({
                          name: 'Error',
                          message: 'Cannot find widget element with idx=' + a,
                        });
                    if ((a = window.OBR.Oa.vc(d.ze(a))))
                      (a = d.og(a, null)), a.jp(c), a.lp(e), a.kp(f), d.yp(a), b.ea.register(a);
                  };
                  d.og = function (a, b) {
                    a.Oo(b);
                    window.OBR.Dc && window.OBR.Dc.Cg(a);
                    return a;
                  };
                  c.$u = function () {
                    window.OBR.X.w();
                  };
                  c.Bj = function (a, b, d, f, g, k) {
                    b &&
                      a &&
                      (c.xe({ link: b, iB: k }, null),
                      e.G('videoClick_' + a, [{ BB: d, AB: f, Ua: a, CB: g }]));
                  };
                  c.Ij = function (a, b) {
                    e.add('videoClick_' + a, b);
                  };
                  c.Sn = function (a, c, e, f) {
                    var g = window.OBR.b.v(a);
                    g
                      ? d.pl(g)
                      : window.OBR.error({
                          name: 'Error',
                          message: 'Cannot find widget element with idx=' + a,
                        });
                    (g = window.OBR.Oa.vc(d.ze(a)))
                      ? ((g = d.og(g, null)), g.jp(c), g.lp(e), g.kp(f), d.yp(g), b.ea.register(g))
                      : window.OBR.error({
                          name: 'Error',
                          message: 'Cannot find widget with idx=' + a,
                        });
                  };
                  d.yp = function (a) {
                    a.Vy(a.If());
                  };
                  d.pl = function (a) {
                    b.b.V(a, 'ob_scoped');
                  };
                  c.xr = function (a) {
                    a = window.OBR.Oa.vc(d.ze(a));
                    a.Bg(a.hu());
                    b.display.He(a);
                  };
                  c.Gp = function (a, b, c) {
                    'undefined' !== typeof b && a && 'undefined' !== typeof c
                      ? (b = window.OBR.Oa.vc(b))
                        ? (b = b.La('listings')) && b[c] && b[c].clickPixels
                          ? window.OBR.b.ut(b[c].clickPixels, a)
                          : window.OBR.j.log(
                              'fireClickPixel: empty meta or key not defined in clickPixels meta'
                            )
                        : window.OBR.j.log('triggerClickPixels: widget or rec container not found')
                      : window.OBR.j.log('triggerClickPixels: Missing param to function');
                  };
                  c.zz = function (a, b) {
                    if ('mraid' in window)
                      try {
                        var c = a.getAttribute('href');
                        b.preventDefault();
                        b.stopPropagation();
                        window.mraid.open(c);
                      } catch (n) {
                        window.OBR.error(n);
                      }
                  };
                  c.yz = function (a, b, c, d) {
                    try {
                      if (window.OBR.clickHandler) {
                        var e = a.getAttribute('href');
                        b.preventDefault();
                        b.stopPropagation();
                        if (d)
                          try {
                            var f = (0, window.decodeURIComponent)(d),
                              g = JSON.parse(f);
                            window.OBR.clickHandler.open(e, c, g);
                            return;
                          } catch (z) {}
                        window.OBR.clickHandler.open(e, c);
                      }
                    } catch (z) {
                      window.OBR.error(z);
                    }
                  };
                  c.Pr = function (a) {
                    var c = b.sb.lb.td,
                      d = window.OBR.sb;
                    a = a.split('?');
                    var e = A.kg(a[1]);
                    d.o || ((e.cheq = window.OBR.ya.Wd), (d.o = !0));
                    e.eT = c || d.lb.ready;
                    e.tm = new Date().getTime() - d.startTime;
                    e.wRV = window.OBR.f.Kc;
                    e.pVis = '2';
                    c = A.Ne(e);
                    d.g.add(a[0] + '?' + c);
                    d.u && Ib(d);
                  };
                  c.$q = function (a, c) {
                    c = b.A[c];
                    var d = '';
                    try {
                      d = JSON.stringify({
                        Request_id: c.m('req_id', '-1'),
                        publisher_id: c.m('pid', '0'),
                        pv_id: c.m('pvId', '-1'),
                      });
                    } catch (n) {
                      d = '';
                    }
                    window.OBR.error({
                      name: 'obm-AdCarouselLogoError',
                      message:
                        'Error loading ad carousel logo image: ' + a.src + ' widget data: ' + d,
                    });
                    a.src = a.src + '?t=' + new Date().getTime();
                  };
                  c.$x = function (a, b, d) {
                    if (a) {
                      window.OBR.f.Jn = !0;
                      window.OBR.extern.returnedVacData = c.xg;
                      var e = a.response.request.widgetJsId,
                        f = window.document.createElement('div');
                      f.className = 'OUTBRAIN';
                      f.setAttribute('data-widget-id', e);
                      b ? b.parentNode.insertBefore(f, b) : window.document.body.appendChild(f);
                      window.OBR.kd.Rd(f, d);
                      c.gg(a, d);
                      f.setAttribute('data-ob-mark', 'true');
                      f.setAttribute('data-browser', window.OBR.f.Sb);
                      f.setAttribute('data-os', window.OBR.f.Jj);
                    }
                  };
                  c.xg = function (a) {
                    a && window.OBR.Me.xg(a, a.feedIdx);
                  };
                  c.w(window.OBR);
                  return c;
                })();
              window.OBR.display =
                window.OBR.display ||
                (function () {
                  var a,
                    b = {},
                    c;
                  b.w = function (b) {
                    a = b = b || window.OBR;
                    c = new a.Qa();
                  };
                  b.dn = function (c, e) {
                    c = a.b.sz(c);
                    var d = e.v();
                    d
                      ? d &&
                        c &&
                        0 < c.length &&
                        (0 < e.Ui() ? b.kt(d, c[0], e.I, e) : b.Bg(c[0], d, e.I, e),
                        a.j.log('element inserted'))
                      : (a.j.log('widget container not found'),
                        window.OBR.error({
                          name: 'obm-ContainerNotFound',
                          message: 'Container not found for widget idx ' + e.I,
                        }));
                  };
                  b.kt = function (c, e, f, g) {
                    function d () {
                      b.Ru(c).then(function (a) {
                        b.Ry(a, e, f, g).then(function (a) {
                          b.ht(a);
                        });
                      });
                    }
                    var h = new a.Promise();
                    h.then(function () {
                      b.lt(c).then(d);
                    });
                    h.resolve();
                  };
                  b.lt = function (b) {
                    var c = new a.Promise(),
                      d = 1,
                      g = (0, window.setInterval)(function () {
                        0.1 >= d
                          ? ((0, window.clearInterval)(g), c.resolve(b))
                          : ((b.style.opacity = d),
                            a.f.wn
                              ? (d = 0)
                              : ((b.style.filter = 'alpha(opacity=' + 100 * d + ')'),
                                (d -= 0.1 * d)));
                      }, 10);
                    return c;
                  };
                  b.Ru = function (b) {
                    var c = new a.Promise();
                    b.style.opacity = 0;
                    (0, window.setTimeout)(function () {
                      c.resolve(b);
                    }, 0);
                    return c;
                  };
                  b.Ry = function (c, e, f, g) {
                    var d = new a.Promise();
                    b.Bg(e, c, f, g);
                    (0, window.setTimeout)(function () {
                      d.resolve(c);
                    }, 0);
                    return d;
                  };
                  b.Bg = function (c, e, f, g) {
                    e.innerHTML = '';
                    a.b.yd(c, e);
                    b.ee(g, f);
                  };
                  b.Xx = function (b) {
                    var c = b.v();
                    if (c && c.parentNode) {
                      var d = a.b.fc(
                        '<div class="ob-smartfeed-wrapper">' + c.outerHTML + '</div>'
                      );
                      c.parentNode.replaceChild(d, c);
                      b.v({ sm: !0 });
                    }
                  };
                  b.ee = function (a, b) {
                    c.G('afterRender', [b], !1, a);
                  };
                  b.ht = function (b) {
                    var c = new a.Promise(),
                      d = 0.1,
                      g = (0, window.setInterval)(function () {
                        1 <= d
                          ? ((0, window.clearInterval)(g),
                            b.removeAttribute('style'),
                            c.resolve(b))
                          : ((b.style.opacity = d),
                            a.f.wn
                              ? (d = 1)
                              : ((b.style.filter = 'alpha(opacity=' + 100 * d + ')'),
                                (d += 1.6 * d)));
                      }, 50);
                  };
                  b.gB = function (a) {
                    c.add('beforeRender', a);
                  };
                  b.Bc = function (a) {
                    c.add('afterRender', a);
                  };
                  b.kv = function (b) {
                    a.b.Rv(b) &&
                      window.OBR.h.J(
                        window.OBR.h.l.uh,
                        function (a) {
                          window.OBR.scroll.Cj(a);
                        },
                        this,
                        b
                      );
                  };
                  b.hv = function (c) {
                    window.OBR.h.J(
                      window.OBR.h.l.ah,
                      function () {
                        b.At(c);
                        a.controller.Ie(c);
                      },
                      this
                    );
                  };
                  b.At = function (a) {
                    b.dn(window.OBR.Cf.av(a), a);
                    window.OBR.Cf.w();
                  };
                  b.He = function (c) {
                    a.j.log('HTML - render widget');
                    b.dn(c.If(), c);
                    c.Id(!0);
                  };
                  b.ha = function () {
                    c.Rc();
                  };
                  b.w(window.OBR);
                  return b;
                })();
              window.OBR.pg = window.OBR.pg || { set: qb, get: rb };
              window.OBR.el =
                window.OBR.el ||
                function (a) {
                  var b = {},
                    c = window.OBR,
                    d = {},
                    e = null,
                    f = {},
                    g = {},
                    k = {},
                    h = '',
                    l = null,
                    m = null,
                    n = null,
                    q = null,
                    r = !1,
                    u = 0,
                    z = 'html',
                    B = !1,
                    F = 4000,
                    y = 'nano',
                    E = !1,
                    K = !1,
                    T = !1,
                    I = 0,
                    Ta = !1,
                    Ua = !1,
                    Va = null,
                    Wa = null,
                    Xa = null,
                    Ya = null,
                    Za = null,
                    $a = null,
                    ab = null,
                    bb = !1;
                  new window.OBR.Qa();
                  var cb = !1,
                    db = -1,
                    wa = null,
                    eb = null,
                    L,
                    fb = null,
                    gb = !0,
                    hb = !1,
                    ib = null,
                    jb = null,
                    kb = null,
                    lb = null,
                    md = null,
                    nd = null,
                    od = null,
                    pd = null,
                    Yb = null,
                    Zb = null,
                    $b = null,
                    qd = null,
                    rd = null,
                    sd = null,
                    td = null,
                    ud = null,
                    ac = null,
                    vd = null;
                  b.jA = 0;
                  b.iA = 1000;
                  b.aA = 2;
                  b.I = a;
                  b.xf = '';
                  b.na = {};
                  b.nt = { slow: 7000, normal: 5000, fast: 3000, qa: 5 };
                  b.setData = function (a) {
                    a &&
                      a.response &&
                      ((a = a.response),
                      a.request && (f = a.request),
                      a.settings && (d = a.settings),
                      a.meta && (g = a.meta),
                      a.data && (k = a.data),
                      a.viewability_actions && (g.viewability_actions = a.viewability_actions),
                      a.timestamp && (l = a.timestamp),
                      a.html && (h = a.html),
                      (B = !0));
                  };
                  b.Wc = function () {
                    return d;
                  };
                  b.Jm = function () {
                    return g;
                  };
                  b.Oy = function (a) {
                    a && 'object' === typeof a && (g = a);
                  };
                  b.i = function (a, b) {
                    a = d[a];
                    return 'undefined' !== typeof a && null !== a ? a : b;
                  };
                  b.La = function (a, b) {
                    a = g[a];
                    return 'undefined' !== typeof a && null !== a ? a : b;
                  };
                  b.Fb = function (a, b) {
                    a = k[a];
                    return 'undefined' !== typeof a && null !== a ? a : b;
                  };
                  b.ou = function (a) {
                    return a &&
                      a.response &&
                      a.response.request &&
                      ((a = a.response.request), (a = a.tcr))
                      ? a
                      : -1;
                  };
                  b.m = function (a, b) {
                    return (a = f[a]) ? a : b;
                  };
                  b.Vi = function (a) {
                    var b = f.obcnsnt;
                    return !1 === b ? !1 : !0 === b ? !0 : a;
                  };
                  b.cu = function () {
                    return (0, window.parseInt)(f.pad);
                  };
                  b.bu = function () {
                    return (0, window.parseInt)(f.org);
                  };
                  b.tu = function () {
                    var a = b.cu(),
                      c = b.bu();
                    return (0, window.isNaN)(a) || (0, window.isNaN)(c) ? window.NaN : c + a;
                  };
                  b.cb = function () {
                    return 0 < b.tu();
                  };
                  b.If = function () {
                    return h;
                  };
                  b.Bg = function (a) {
                    h = a;
                  };
                  b.Xi = function () {
                    return l;
                  };
                  b.hz = function (a) {
                    b.Dg(a.permalink);
                    b.kz(a.widgetId);
                    b.yy(a.dynLoad);
                    b.lz(a.widgetType);
                    b.jz(a.fbk);
                    b.Cy(a.timeout);
                    b.dz(a.srcUrl);
                    b.ez(a.testMode);
                    b.iz(a.wizWidget);
                    b.Ay(a.extId);
                    b.Jy(a.installationKey);
                    b.Ky(a.installationType);
                    b.ly(a.appVer);
                    b.ky(a.userId);
                    b.gz(a.videoId);
                    b.Xy(a.playerSrcId);
                    b.Iy(a.inPlayer);
                    b.az(a.rtbEnabled);
                    b.Sy(a.num);
                    b.qy(a.cardIdx);
                    b.Ey(a.feedFatherIdx);
                    b.ap(a.feedFatherIdx);
                    b.ry(a.categoryIds);
                    b.Dy(a.fId);
                    b.ty(a.clickTrackerUrl);
                    b.Fy(a.feedVersion);
                    'boolean' === typeof a.isManualWidget && b.Ly(a.isManualWidget);
                    b.wy(a.contentUrl);
                    b.ny(a.bundleUrl);
                    b.Yy(a.portalUrl);
                    b.uy(a.consentString);
                    b.vy(a.consentVersion);
                    b.My(a.language);
                    b.Zy(a.psub);
                    b.zy(a.et);
                    b.By(a.extraParams);
                  };
                  b.H = function () {
                    return m;
                  };
                  b.kz = function (a) {
                    m = 'string' === typeof a ? a : 'NA';
                  };
                  b.Gy = function () {
                    z = 'vjapi';
                  };
                  b.Em = function () {
                    return z;
                  };
                  b.qB = function (a) {
                    u = a;
                  };
                  b.AA = function () {
                    return u;
                  };
                  b.wa = function () {
                    return n || Yb || Zb || $b;
                  };
                  b.Dg = function (a) {
                    n = a;
                  };
                  b.Yi = function () {
                    return $a;
                  };
                  b.gz = function (a) {
                    $a = a;
                  };
                  b.Km = function () {
                    return ab;
                  };
                  b.qy = function (a) {
                    db = a;
                  };
                  b.Ii = function () {
                    return db;
                  };
                  b.Ey = function (a) {
                    wa = a;
                  };
                  b.EA = function () {
                    return wa;
                  };
                  b.ap = function (a) {
                    void 0 !== a && null !== a && (eb = c.A[a]);
                  };
                  b.Ji = function () {
                    return md;
                  };
                  b.ry = function (a) {
                    md = a;
                  };
                  b.Vc = function () {
                    return eb;
                  };
                  b.Cm = function () {
                    return b.Vc() ? b.Vc().m('wnid', null) : od;
                  };
                  b.Uc = function () {
                    return b.Vc() ? b.Vc().m('abTestVal', null) : null;
                  };
                  b.FA = function () {
                    return wa;
                  };
                  b.jp = function (a) {
                    ib = a;
                  };
                  b.Ri = function () {
                    return ib;
                  };
                  b.lp = function (a) {
                    jb = a;
                  };
                  b.Ti = function () {
                    return jb;
                  };
                  b.kp = function (a) {
                    kb = a;
                  };
                  b.Si = function () {
                    return kb;
                  };
                  b.Vy = function (a) {
                    lb = a;
                  };
                  b.hu = function () {
                    return lb;
                  };
                  b.Cv = function () {
                    return -1 < (0, window.parseInt)(b.Ii(), 10);
                  };
                  b.Xy = function (a) {
                    ab = a;
                  };
                  b.Iy = function (a) {
                    bb = a;
                  };
                  b.sn = function () {
                    return bb;
                  };
                  b.ez = function (a) {
                    Ta = 'true' === a || !0 === a;
                  };
                  b.Lf = function () {
                    return Ta;
                  };
                  b.iz = function (a) {
                    Ua = 'true' === a || !0 === a;
                  };
                  b.cw = function () {
                    return Ua;
                  };
                  b.Ay = function (a) {
                    Va = a;
                  };
                  b.he = function () {
                    return Va;
                  };
                  b.az = function (a) {
                    hb = a;
                  };
                  b.xn = function () {
                    return hb;
                  };
                  b.sB = function (a) {
                    gb = a;
                  };
                  b.Hn = function () {
                    return gb;
                  };
                  b.Sy = function (a) {
                    (0, window.isNaN)(a) || (fb = a);
                  };
                  b.Jf = function () {
                    return fb;
                  };
                  b.Jy = function (a) {
                    Wa = a;
                  };
                  b.Ky = function (a) {
                    Xa = a;
                  };
                  b.ly = function (a) {
                    Ya = a;
                  };
                  b.ky = function (a) {
                    Za = a;
                  };
                  b.Eb = function () {
                    return Za;
                  };
                  b.dz = function (a) {
                    q = a;
                  };
                  b.Qm = function () {
                    return q;
                  };
                  b.xv = function () {
                    return r;
                  };
                  b.yy = function (a) {
                    r = 'true' === a || !0 === a;
                  };
                  b.qn = function () {
                    return 'flyThrough' === b.i('displayMode', '');
                  };
                  b.pj = function () {
                    return !0 === b.i('stopRater', !1) || !0 === b.i('stopWidget', !1);
                  };
                  b.mn = function () {
                    return B;
                  };
                  b.Uv = function () {
                    return !0 === b.i('isSkylandersInjectionEnabled', !1);
                  };
                  b.Wv = function () {
                    return !0 === b.i('isTopBoxInjectionEnabled', !1);
                  };
                  b.qj = function () {
                    return (
                      null !==
                      b.i('recMode', '').match(/(odb_dynamic_swipe|odb_dynamic_smartfeed-swipe)/)
                    );
                  };
                  b.jj = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_ad-carousel)/);
                  };
                  b.Tv = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_single-card-carousel)/);
                  };
                  b.tv = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_cards-carousel-box)/);
                  };
                  b.Mv = function () {
                    return null !== b.i('recMode', '').match(/(odb_playableAd)/);
                  };
                  b.Nv = function () {
                    return null !== b.i('recMode', '').match(/(odb_podcast)/);
                  };
                  b.Lv = function () {
                    return b.i('isParallax', !1);
                  };
                  b.Hv = function () {
                    return b.i('gridCarouselEnabled', !1);
                  };
                  b.Fn = function () {
                    return null !== b.i('recMode', '').match(/(odb_timeline)/);
                  };
                  b.on = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_display)/);
                  };
                  b.yn = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_reel)/);
                  };
                  b.Bv = function () {
                    return null !== b.i('exploreMoreWidgetId', null);
                  };
                  b.Iv = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_grid)/);
                  };
                  b.TA = function () {
                    return !0 === b.i('isMegaBlockInjectionEnabled', !1);
                  };
                  b.dw = function () {
                    return !0 === b.i('IsWidgetInjector', !1);
                  };
                  b.Dv = function () {
                    return (
                      b.zb() && b.i('recReasonType') && -1 < b.i('recReasonType').indexOf('follow')
                    );
                  };
                  b.zb = function () {
                    return !b.cw() && !0 === b.i('isSmartFeedInjectionEnabled', !1);
                  };
                  b.SA = function () {
                    return !0 === b.i('isInfiniteScrollEnabled', !1);
                  };
                  b.Xv = function () {
                    return !0 === b.i('isUIExperimentsEnabled', !1);
                  };
                  b.Sv = function () {
                    return !0 === b.i('isShadowDomEnabled', !1);
                  };
                  b.yu = function () {
                    return y;
                  };
                  b.Xb = function () {
                    return Wa;
                  };
                  b.tc = function () {
                    return Xa;
                  };
                  b.sc = function () {
                    return Ya;
                  };
                  b.lz = function (a) {
                    'string' === typeof a && (y = a.toLowerCase());
                  };
                  b.ty = function (a) {
                    try {
                      var b = window.document.createElement('a');
                      b.href = a;
                      var c = b.host && b.host !== window.location.host;
                      a && c && (nd = a);
                    } catch (yj) {}
                  };
                  b.Ki = function () {
                    return nd;
                  };
                  b.cp = function () {
                    cb = !0;
                  };
                  b.hp = function (a) {
                    L = a;
                  };
                  b.oj = function () {
                    return L;
                  };
                  b.Fy = function (a) {
                    pd = a;
                  };
                  b.Dm = function () {
                    return pd;
                  };
                  b.wy = function (a) {
                    Yb = a;
                  };
                  b.Mi = function () {
                    return Yb;
                  };
                  b.ny = function (a) {
                    Zb = a;
                  };
                  b.Hi = function () {
                    return Zb;
                  };
                  b.Yy = function (a) {
                    $b = a;
                  };
                  b.Pi = function () {
                    return $b;
                  };
                  b.Ff = function () {
                    return qd;
                  };
                  b.uy = function (a) {
                    qd = a;
                  };
                  b.Li = function () {
                    return rd;
                  };
                  b.vy = function (a) {
                    rd = a;
                  };
                  b.Zy = function (a) {
                    td = a;
                  };
                  b.Mm = function () {
                    return td;
                  };
                  b.My = function (a) {
                    sd = a;
                  };
                  b.Fm = function () {
                    return sd;
                  };
                  b.zy = function (a) {
                    ud = b.Bd() ? (a ? !0 : !1) : !0;
                  };
                  b.Am = function () {
                    return ud;
                  };
                  b.Dy = function (a) {
                    od = a;
                  };
                  b.By = function (a) {
                    vd = a;
                  };
                  b.Ni = function () {
                    return vd;
                  };
                  b.PA = function () {
                    return !!cb;
                  };
                  b.jz = function (a) {
                    'string' === typeof a && '' !== a && (b.xf = a);
                  };
                  b.mj = function () {
                    return '' !== b.ie();
                  };
                  b.yv = function () {
                    return !(0, window.isNaN)((0, window.parseInt)(b.xf, 10));
                  };
                  b.ie = function () {
                    var a;
                    var c = (0, window.parseInt)(b.xf, 10);
                    b.yv() && 'number' === typeof c && 0 <= c && 10 > c
                      ? (a = window.OBR.b.Mt(n, c))
                      : (a = b.xf);
                    return a;
                  };
                  b.zn = function () {
                    return E;
                  };
                  b.Id = function (a) {
                    E = !!a;
                  };
                  b.QA = function () {
                    return 'hp' === y;
                  };
                  b.DA = function () {
                    return b.na;
                  };
                  b.rB = function (a) {
                    'object' === typeof a && (b.na = a);
                  };
                  b.Bd = function () {
                    return K;
                  };
                  b.Bm = function () {
                    return F;
                  };
                  b.vn = function () {
                    return 0 === a || K || !window.OBR.f.Xf || T;
                  };
                  b.Ty = function () {
                    T = !0;
                  };
                  b.Cy = function (a) {
                    F = b.nt[a] || 6000;
                  };
                  b.Ly = function (a) {
                    K = !!a;
                  };
                  b.np = function () {
                    var a = b.m('lsd', null),
                      d = !0 === b.m('oo', !1),
                      e = 'string' === typeof a && 0 < a.length,
                      f = !0 === b.i('isUseLocalStorageForUUID', !0),
                      g = c.X.rc && '1' === b.m('gdpr', '0') + '';
                    g = !g || (g && b.Vi(!0));
                    f && !d && e && g
                      ? (c.b.ba('OB-USER-TOKEN', null) !== a &&
                          c.b.Ea('OB-USER-TOKEN-CREATION', new Date().getTime()),
                        c.b.Ea('OB-USER-TOKEN', a),
                        window.OBR.pg.set(a))
                      : (f && g) || (c.b.oc('OB-USER-TOKEN'), c.b.oc('OB-USER-TOKEN-CREATION'));
                  };
                  b.$y = function () {
                    if (0 === b.W()) {
                      var a = b.i('publisherSubscriptionSelector', null),
                        d = b.i('PublisherLoginIndication', '');
                      a &&
                        d &&
                        !1 === b.m('oo', !1) &&
                        (window.OBR.b.Ea('OB-PUB-IN', JSON.stringify({ selector: a, text: d })),
                        null === c.f.De && (c.f.De = c.b.Nm()));
                    }
                  };
                  b.bp = function () {
                    var a = b.m('clss', null);
                    a && (c.ya.gk = (0, window.encodeURIComponent)(a));
                    if (0 === b.W()) {
                      a = b.i('fraudDetection', 0);
                      var d = b.i('cheqCallTimeout', 500);
                      c.b.Ea('OB-FDE', a);
                      a && c.b.Ea('OB-FD-TO', d);
                    }
                  };
                  b.W = function () {
                    return 0 === I ? b.I : 1000 * I + b.I;
                  };
                  b.Oo = function (a) {
                    'string' === typeof a
                      ? (window.OBR.b.Ta(window.OBR.b.v(b.I), 'data-src', a), b.Dg(a), (I = 0))
                      : (I += 1);
                    b.Id(!1);
                  };
                  b.Ui = function () {
                    return I;
                  };
                  b.Ii = function () {
                    var a = b.v();
                    return a ? a.getAttribute('data-card-idx') : null;
                  };
                  b.v = function (b) {
                    b = (void 0 === b ? { sm: !1 } : b).sm;
                    if (!e || b) e = window.OBR.b.v(a);
                    return e;
                  };
                  b.Lt = function () {
                    if (b.Bd()) return null;
                    try {
                      var a = b.v();
                      if (!a) return null;
                      var c = b.getBoundingClientRect();
                      if (
                        0 <= c.top &&
                        0 <= c.left &&
                        c.bottom <=
                          (window.innerHeight || window.document.documentElement.clientHeight) &&
                        c.right <=
                          (window.innerWidth || window.document.documentElement.clientWidth)
                      )
                        return 0;
                      if (c.top >= -a.offsetHeight)
                        return Math.floor(c.top - window.document.documentElement.clientHeight);
                      var d = b.Lm(),
                        e = d && d.height,
                        f = d && d.y;
                      return e && f
                        ? Math.floor(e + f - window.document.documentElement.scrollTop)
                        : null;
                    } catch (zj) {
                      return null;
                    }
                  };
                  b.getBoundingClientRect = function () {
                    if (!ac) {
                      var a = b.v();
                      a && (ac = a.getBoundingClientRect());
                    }
                    return ac;
                  };
                  b.Lm = function () {
                    if (b.Bd()) return null;
                    try {
                      if (b.v()) {
                        var a = b.getBoundingClientRect();
                        return {
                          x: Math.floor(
                            a.left +
                              (window.pageXOffset || window.document.documentElement.scrollLeft)
                          ),
                          y: Math.floor(
                            a.top +
                              (window.pageYOffset || window.document.documentElement.scrollTop)
                          ),
                          height: Math.abs(Math.floor(a.height)),
                          width: Math.abs(Math.floor(a.width)),
                        };
                      }
                      return null;
                    } catch (xj) {
                      return null;
                    }
                  };
                  b.Dd = function () {
                    return 'RTL' === b.i('dynamicWidgetDirection', 'LTR').toUpperCase();
                  };
                  b.Jv = function () {
                    return window.OBR.f.Zm && !b.Dd() && b.Iv();
                  };
                  b.Nu = function () {
                    return 1 === b.La('clips', 0);
                  };
                  b.Iz = function (d, f) {
                    if ((d = window.document.querySelector('[data-orig-idx="' + d + '"]')))
                      (d.id = window.OBR.f.Qg + f),
                        c.b.Ta(d, 'data-idx', f),
                        (a = b.I = f),
                        (e = null);
                  };
                  b.zs = function (a) {
                    var b = window.document.getElementById(window.OBR.f.Qg + a);
                    b &&
                      (b.removeAttribute('id'),
                      b.removeAttribute('data-idx'),
                      b.setAttribute('data-orig-idx', a));
                  };
                  b.Gm = function () {
                    return b.La('leadForms');
                  };
                  b.Pu = function () {
                    return !!b.Gm();
                  };
                  b.Cn = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_stack-card)/);
                  };
                  b.Pv = function () {
                    return null !== b.i('recMode', '').match(/(odb_dynamic_read-next)/);
                  };
                  b.Mu = function () {
                    var a = b.v(),
                      c = b.Jm();
                    if (a && c && c.listings) {
                      a = Array.from(a.querySelectorAll('.ob-dynamic-rec-container'));
                      for (var d = 0; d < a.length; d++) {
                        var e = a[d].getAttribute('data-pos');
                        if (c.listings[e] && c.listings[e].clickPixels) return !0;
                      }
                    }
                    return !1;
                  };
                  return b;
                };
              window.OBR.kd =
                window.OBR.kd ||
                (function () {
                  var a = window.OBR,
                    b = {},
                    c = new a.Qa();
                  b.ji = function (b) {
                    b.idx = b.idx || 0;
                    var c = new a.el(b.idx);
                    c.hz(b);
                    return c;
                  };
                  b.Rd = function (d, e) {
                    var f,
                      g = a.Oa.Qs(d);
                    a.b.Ta(d, 'data-dynLoad', '');
                    g.permalink = a.Oa.zt(g.permalink);
                    e
                      ? (f = e)
                      : (f =
                          0 !== a.A.length || (a.f.$c !== g.permalink && !0 !== a.f.yj)
                            ? a.A.length
                            : 1);
                    g.idx = f;
                    e = b.ji(g);
                    a.A[f] = e;
                    a.b.Ta(d, 'data-idx', f);
                    a.f.rm(g);
                    0 === f && a.b.Ll(d);
                    d.id = a.f.Qg + f;
                    c.G('onWidgetCreate', [e]);
                    return e;
                  };
                  b.so = function (a) {
                    c.add('onWidgetCreate', a);
                  };
                  return b;
                })();
              window.OBR.Oa =
                window.OBR.Oa ||
                (function () {
                  var a = window.OBR,
                    b = {
                      jb: {
                        widgetId: { a: 'data-widget-id', t: 'string' },
                        permalink: { a: 'data-src', t: 'string' },
                        srcUrl: { a: 'data-ob-srcUrl', t: 'string' },
                        dynLoad: { a: 'data-dynLoad', t: 'boolean' },
                        widgetType: { a: 'data-widget-type', t: 'string' },
                        timeout: { a: 'data-timeout', t: 'string' },
                        fbk: { a: 'data-fbk', t: 'string' },
                        testMode: { a: 'data-ob-test', t: 'boolean' },
                        wizWidget: { a: 'data-ob-wiz', t: 'boolean' },
                        installationKey: { a: 'data-ob-installation-key', t: 'string' },
                        userId: { a: 'data-ob-user-id', t: 'string', n: !0 },
                        videoId: { a: 'data-ob-video-id', t: 'string' },
                        playerSrcId: { a: 'data-ob-player-src-id', t: 'string' },
                        inPlayer: { a: 'data-ob-in-player', t: 'boolean' },
                        installationType: { a: 'data-ob-installation-type', t: 'string' },
                        appVer: { a: 'data-ob-app-ver', t: 'string' },
                        isSecured: { a: 'data-is-secured', t: 'boolean' },
                        extId: { a: 'data-external-id', t: 'string' },
                        rtbEnabled: { a: 'data-rtb-enabled', t: 'boolean' },
                        va: { a: 'data-va', t: 'boolean' },
                        num: { a: 'data-num-of-recs', t: 'string' },
                        cardIdx: { a: 'data-card-idx', t: 'string' },
                        feedFatherIdx: { a: 'data-feed-father-idx', t: 'string' },
                        categoryIds: { a: 'data-category-ids', t: 'string' },
                        fId: { a: 'data-fId', t: 'string' },
                        clickTrackerUrl: { a: 'data-click-url', t: 'string' },
                        feedVersion: { a: 'data-feed-version', t: 'string' },
                        contentUrl: { a: 'data-ob-contentUrl', t: 'string' },
                        bundleUrl: { a: 'data-ob-bundleUrl', t: 'string' },
                        portalUrl: { a: 'data-ob-portalUrl', t: 'string' },
                        language: { a: 'data-ob-language', t: 'string' },
                        psub: { a: 'data-ob-psub', t: 'string' },
                        et: { a: 'data-et', t: 'boolean' },
                        extraParams: { a: 'data-extra-params', t: 'string' },
                        consentString: { a: 'data-consent-string', t: 'string' },
                        consentVersion: { a: 'data-consent-version', t: 'string' },
                      },
                      Sm: function (b) {
                        var c, e;
                        if (a.A) {
                          var f = a.A.length;
                          for (c = 0; c < f; c += 1) if ((e = a.A[c]) && e.H() === b) return e;
                        }
                        return null;
                      },
                      vc: function (b) {
                        return a.A[b] ? a.A[b] : null;
                      },
                      Rs: function (a) {
                        var c = {},
                          e;
                        for (e in b.jb)
                          b.jb.hasOwnProperty(e) && typeof a[e] === b.jb[e].t && (c[e] = a[e]);
                        return c;
                      },
                      Qs: function (c) {
                        var d = {},
                          e;
                        for (e in b.jb)
                          if (b.jb.hasOwnProperty(e)) {
                            var f = a.b.sa(c, b.jb[e].a);
                            'true' === f || 'false' === f
                              ? (d[e] = 'true' === f)
                              : typeof f !== b.jb[e].t ||
                                (!0 !== b.jb[e].n && 'null' === f) ||
                                '' === f ||
                                (d[e] = f);
                          }
                        return d;
                      },
                      zt: function (b) {
                        if ('string' !== typeof b || 'null' === b) b = a.b.Hm(!1);
                        else if (
                          0 === b.length ||
                          0 === b.indexOf('DROP') ||
                          0 === b.indexOf('INSERT')
                        ) {
                          if (
                            b &&
                            0 === b.indexOf('DROP') &&
                            'www.msn.com' === window.location.hostname
                          )
                            return (b = window.location.href);
                          b = a.b.Hm(!0);
                        }
                        0 === b.indexOf('//') && (b = a.f.Z.replace('//', '') + b);
                        return b;
                      },
                      Hs: function (c, d) {
                        for (var e in b.jb)
                          b.jb.hasOwnProperty(e) &&
                            typeof c[e] === b.jb[e].t &&
                            a.b.Ta(d, b.jb[e].a, c[e]);
                      },
                      yA: function () {
                        var b,
                          d = [];
                        for (b = 0; b < a.A.length; b++) d.push(a.A[b].H());
                        return d;
                      },
                    };
                  return b;
                })();
              window.OBR.pc =
                window.OBR.pc ||
                (function () {
                  var a = {},
                    b = window.OBR,
                    c = {},
                    d = new b.Qa();
                  a.Nc = { th: 0, TIMEOUT: 1, Wp: 2, Yk: 3 };
                  c.zr = function (a) {
                    a.mj() &&
                      (a.cp(),
                      c.tl(a),
                      window.OBR.ea.oo(a, function () {
                        c.fp(a);
                      }),
                      window.OBR.ea.po(a, function () {
                        c.gp(a);
                      }),
                      window.OBR.controller.Ox(a.W(), c.hx));
                  };
                  a.Cr = function (a) {
                    a.cp();
                    c.tl(a);
                    b.ea.oo(a, function () {
                      c.fp(a);
                    });
                    b.ea.po(a, function () {
                      c.gp(a);
                    });
                    b.controller.Ro(b.controller.Yn, a.W(), a.H(), function (a, b) {
                      c.gx(b, a);
                    });
                  };
                  c.tl = function (b) {
                    b.na = { reason: a.Nc.th, di: !1, no: !1, zl: 0, Al: 0 };
                  };
                  c.fp = function (d) {
                    d &&
                      d.na.reason === a.Nc.th &&
                      (b.j.log('ODB failed - using IronDome '), (d.na.reason = a.Nc.Wp), c.dk(d));
                  };
                  c.hx = function (d) {
                    (0, window.clearTimeout)(d.na.Gj);
                    window.OBR.j.log('Editorial ODB returned for ' + d.W());
                    d.na.di ||
                      (!0 === d.i('ispartialrecs', !1)
                        ? (b.j.log('ODB partial - using IronDome '),
                          (d.na.reason = a.Nc.Yk),
                          c.dk(d))
                        : (d.na.no = !0));
                  };
                  c.dk = function (a) {
                    (0, window.clearTimeout)(a.na.Gj);
                    if (a.pj()) b.j.log('CDN canceled stop setting');
                    else {
                      var d = c.Gt(a);
                      c.gv(d, a);
                    }
                  };
                  c.Gt = function (a) {
                    var c = b.f.Vr;
                    a = a.ie() + '_' + a.H() + '_' + a.I;
                    return c + a;
                  };
                  c.gv = function (a, c) {
                    var d = b.b.Aa(0, a, !1);
                    c.na.Al = new Date().getTime();
                    b.b.Fa(d);
                    b.j.log('Inject CDN call: ' + a);
                  };
                  c.gp = function (a) {
                    a.na.Gj = (0, window.setTimeout)(function () {
                      c.ax(a);
                    }, a.Bm());
                  };
                  c.ax = function (d) {
                    d.na.reason = a.Nc.TIMEOUT;
                    b.j.log('ODB Timeout - using IronDome ');
                    c.dk(d);
                  };
                  a.yl = function (a, d) {
                    if (a && a.response) {
                      window.OBR.j.log('Cdn response returned');
                      var e = b.Oa.vc(d);
                      if (!e && ((e = b.b.Oi(d)), !e)) return;
                      e.na.zl = new Date().getTime() - e.na.Al;
                      b.ea.Mr(e);
                      c.Wx(e, a);
                      c.iv(e);
                    }
                  };
                  c.Wx = function (a, c) {
                    a.na.di = !0;
                    c.response && c.response.request && (c.response.request.req_id = '');
                    a.na.no ||
                      (a.Bd() && c.response.documents
                        ? b.controller.Bf(
                            window.OBR.controller.cg,
                            a.I,
                            a.H(),
                            c.response.documents
                          )
                        : (a.setData(c), (b.A[a.I] = a), window.OBR.controller.He(a.I)),
                      a.Id(!0));
                  };
                  c.iv = function (a) {
                    var c = b.b.ga(a.wa()),
                      d = a.i('irdfb', '');
                    '' !== d &&
                      ((d += '&reason=' + a.na.reason),
                      (d = d + ('&url=' + c) + ('&at=' + a.na.zl)),
                      (d += '&to=' + a.Bm() || ''),
                      (d += '&ir=' + (a.na.di ? 1 : 0)),
                      (a = window.OBR.b.Aa(0, d, !1, !0)),
                      window.OBR.b.Fa(a));
                  };
                  c.gx = function (a, d) {
                    var e = b.b.Oi(a);
                    (0, window.clearTimeout)(e.na.Gj);
                    d && d.settings && !0 === d.settings.ispartialrecs
                      ? c.nB(e)
                      : b.controller.Bf(b.controller.cg, a, e.H(), d.response.documents);
                  };
                  b.kd.so(c.zr);
                  a.ha = function () {
                    d.Rc();
                  };
                  a.Ba = function () {
                    return c;
                  };
                  return a;
                })();
              var ad = 'undefined' !== typeof window.OB_amp;
              tb.prototype.qb = function (a) {
                this.Nb = a;
              };
              tb.prototype.qf = function (a, b, c) {
                if (!a || 0 > b || 100 < b) return !1;
                c || (c = { top: 0, bottom: 0 });
                if (ad) {
                  c = this.Xh;
                  if (!c) return !1;
                  var d = zb(a, c);
                  a = yb(d, c);
                  return (
                    (b =
                      0 <= a.height &&
                      0 <= a.width &&
                      Math.max(
                        1,
                        Math.round((Math.min(d.height, c.rootBounds.height) * b) / 100)
                      )) && a.height >= b
                  );
                }
                a = a.getBoundingClientRect();
                d = this.Ga.height;
                a = {
                  top: a.top - c.top,
                  height: a.height + c.bottom,
                  bottom: a.top + a.height + c.bottom,
                };
                b = Math.round((a.height * b) / 100) || 1;
                b = b > d ? d - 1 : b;
                return a.top + b <= d && 0 <= a.bottom - b;
              };
              tb.prototype.Tf = function (a, b, c, d) {
                if (ad) {
                  d = this.Xh;
                  if (!d) return !1;
                  a = zb(a, d);
                  d = yb(a, d);
                  d = d.width * d.height;
                } else
                  (c = a = a.getBoundingClientRect()),
                    (d = d
                      ? d.getBoundingClientRect()
                      : {
                          top: 0,
                          left: 0,
                          width: Math.max(
                            window.document.documentElement.clientWidth,
                            window.innerWidth || 0
                          ),
                          height: Math.max(
                            window.document.documentElement.clientHeight,
                            window.innerHeight || 0
                          ),
                        }),
                    (d =
                      (Math.min(c.width + c.left, d.width + d.left) - Math.max(c.left, d.left)) *
                      (Math.min(c.height + c.top, d.height + d.top) - Math.max(c.top, d.top)));
                return d / (a.width * a.height) >= b / 100;
              };
              window.OBR.ka = window.OBR.ka || new tb();
              window.OBR.IntersectionObserver =
                window.OBR.IntersectionObserver ||
                (function () {
                  function a (a) {
                    this.eb = null;
                    this.o = !1;
                    this.g = null;
                    this.F = {
                      callback: function () {},
                      callbackParams: [],
                      element: null,
                      intersectPercentage: 0,
                      scrollDimmer: 200,
                      unobserve: !1,
                      threshold: [1],
                      rootMargin: '0px',
                    };
                    this.B(a);
                  }
                  a.prototype.B = function (a) {
                    a &&
                      ((this.F = Object.assign(this.F, a)),
                      (this.F.callbackParams = this.F.callbackParams || []));
                  };
                  a.prototype.D = function () {
                    var a = { rootMargin: this.F.rootMargin, threshold: this.F.threshold };
                    this.F.root && (a.root = this.F.root);
                    this.g = new window.IntersectionObserver(this.M.bind(this), a);
                    this.g.observe(this.F.element);
                    return this.g;
                  };
                  a.prototype.M = function (a, c) {
                    this.F
                      ? this.F.element && window.document.body.contains(this.F.element)
                        ? a &&
                          a[0] &&
                          a[0].intersectionRatio > this.F.intersectPercentage &&
                          (this.F.callback.call.apply(
                            this.F.callback,
                            [this].concat(OBR._jsc.sa(this.F.callbackParams), [a[0]])
                          ),
                          this.F.unobserve && (c.unobserve(a[0].target), c.disconnect()))
                        : (c.unobserve(this.F.element), c.disconnect())
                      : c.disconnect();
                  };
                  a.prototype.ca = function () {
                    var a = this.F.checkAbsoluteVisibility ? window.OBR.ka.Tf : window.OBR.ka.qf;
                    if (this.o) this.o = !1;
                    else {
                      var c = this.F.intersectPercentage;
                      a.call(
                        window.OBR.ka,
                        this.F.element,
                        0 <= c && 1 >= c ? 100 * c : c,
                        this.F.rootMarginObj,
                        this.F.root
                      ) &&
                        ((this.o = !0),
                        this.F.callback.apply(this, this.F.callbackParams),
                        this.F.unobserve && window.OBR.b.dc(window, 'scroll', this.c));
                    }
                  };
                  a.prototype.u = function () {
                    var a = this;
                    this.F && this.F.element && window.document.body.contains(this.F.element)
                      ? this.eb ||
                        (this.ca(),
                        (0, window.setTimeout)(function () {
                          a.eb = !1;
                        }, this.F.scrollDimmer),
                        (this.eb = !0))
                      : window.OBR.b.dc(window, 'scroll', this.c);
                  };
                  a.prototype.pa = function () {
                    var a = this.F.rootMargin.split(' ');
                    this.F.rootMarginObj = {
                      top: (0, window.parseInt)(a[0]),
                      right: (0, window.parseInt)(a[1] || a[0]),
                      bottom: (0, window.parseInt)(a[2] || a[0]),
                      left: (0, window.parseInt)(a[3] || a[0]),
                    };
                  };
                  a.prototype.unobserve = function () {
                    window.OBR.f.cj
                      ? this.g.disconnect()
                      : window.removeEventListener('scroll', this.c);
                    this.F = null;
                  };
                  a.prototype.observe = function () {
                    if (!this.F || !this.F.element) return null;
                    if (window.OBR.f.cj) return this.D();
                    this.pa();
                    this.c = this.u.bind(this);
                    window.OBR.b.Da(window, 'scroll', this.c);
                    this.u();
                    return this;
                  };
                  return a;
                })();
              OBR._jsc.p = Ab.prototype;
              OBR._jsc.p.oe = function (a) {
                return new window.OBR.IntersectionObserver(a);
              };
              OBR._jsc.p.oa = function (a) {
                return window.OBR.A[a];
              };
              OBR._jsc.p.protocol = function () {
                return window.OBR.f.Z;
              };
              OBR._jsc.p.createElement = function (a) {
                return window.OBR.b.createElement(a.type, a.id, a.css, a.attributes);
              };
              OBR._jsc.p.zf = function () {
                return new window.OBR.zf();
              };
              OBR._jsc.p.log = function (a) {
                window.OBR.j.log(a);
              };
              OBR._jsc.p.ug = function (a) {
                window.OBR.Xa.ug(a);
              };
              OBR._jsc.p.Ei = function () {
                return window.OBR.Xa.Ei();
              };
              OBR._jsc.p.Zi = function () {
                return window.OBR.Xa.Zi();
              };
              OBR._jsc.p.kg = function (a) {
                return window.OBR.b.kg(a);
              };
              OBR._jsc.p.Ne = function (a) {
                return window.OBR.b.Ne(a);
              };
              var A = new Ab();
              Db.prototype.B = function (a) {
                if (!a.Qz) {
                  var b = a.W();
                  this.c[b] || (this.c[b] = a.v());
                  window.OBR.f.rr ||
                    ((b = a.W()),
                    A.oe({
                      callback: this.Mf.bind(this),
                      callbackParams: [b],
                      element: a.v(),
                      unobserve: !0,
                      threshold: [0],
                    }).observe());
                }
              };
              Db.prototype.Ag = function () {
                var a = this;
                this.c.forEach(function (b, c) {
                  void 0 !== b && b && window.OBR.ka.qf(b, 0) && a.Mf(c);
                });
              };
              Db.prototype.ha = function () {
                this.eb = !1;
                this.c = [];
                this.g = A.zf();
                this.D = 0;
                this.startTime = new Date().getTime();
                this.o = !1;
              };
              Db.prototype.Mf = function (a) {
                if (this.c[a] || Fb(A.oa(a))) {
                  var b = A.oa(a);
                  Eb(this, b, this.lb.td);
                  b.Qz = !0;
                  Bb(b);
                  this.c[a] = null;
                }
                return a;
              };
              window.OBR.sb = window.OBR.sb || new Db();
              window.OBR.vf = new (function () {})();
              var Nb = window.OBR.f.uo + 'loggerServices/dwce_cheq_events';
              var Xb = 'https://tcheck.' + window.OBR.f.px + '/tcheck/check';
              window.OBR.ya || ((window.OBR.ya = new dc()), (window.OBR.Xe = new Pb()), jc());
              var bd = window.OBR.f.uo + 'api/loggerBatch/log-viewability';
              oc.prototype.log = function (a, b) {
                a = {
                  timeElapsed: Date.now() - this.startTime,
                  requestId: a.m('req_id', null),
                  position: +b.getAttribute('data-pos'),
                  renderables: mc(b),
                };
                var c = b.querySelector('.ob-rec-image-container');
                c && ((a.imageHeight = c.offsetHeight), (a.imageWidth = c.offsetWidth));
                try {
                  var d = b.querySelector('.ob-rec-text'),
                    e = b.querySelector('.ob-rec-source'),
                    f = b.querySelector('.ob-rec-description');
                  d && (a.titleLength = d.innerHTML.length);
                  e && (a.sourceLength = e.innerHTML.length);
                  f && (a.descLength = f.innerHTML.length);
                } catch (g) {}
                this.g.push(a);
                10 <= this.g.length
                  ? (this.c && ((0, window.clearTimeout)(this.c), (this.c = null)), this.o())
                  : this.c || (this.c = (0, window.setTimeout)(this.o.bind(this), 1200));
              };
              oc.prototype.o = function () {
                this.c = null;
                if (this.g.length) {
                  var a = this.g.splice(0);
                  a && a.length
                    ? this.ek(a)
                    : window.OBR.error(Error('Failed to send viewability data'));
                }
              };
              oc.prototype.ek = function (a) {
                window.OBR.f.uk
                  ? window.navigator.sendBeacon(bd, JSON.stringify(a))
                  : this.$h(bd, a);
              };
              oc.prototype.$h = function (a, b) {
                window.OBR.ib.send(window.OBR.f.N.nh, a, b);
              };
              var cd = { gi: !1 };
              OBR._jsc.p = pc.prototype;
              OBR._jsc.p.lj = function (a) {
                return a.i('listingsViewability', !0);
              };
              OBR._jsc.p.Ob = function (a, b) {
                if (this.lj(a)) {
                  var c = Object.assign({}, cd);
                  b && Object.assign(c, b);
                  a.Np = c;
                  c.zj || ((b = a.Np.gi ? this.g(a) : this.o(a)) && 0 < b.length && this.Ac(a, b));
                }
              };
              OBR._jsc.p.observe = function (a, b) {
                a = new window.OBR.IntersectionObserver({
                  threshold: [0.5],
                  unobserve: !0,
                  intersectPercentage: 0.5,
                  callback: this.Cq.bind(this),
                  callbackParams: [a, b],
                  element: b,
                  checkAbsoluteVisibility: !0,
                });
                this.c.push(a);
                a.observe();
              };
              OBR._jsc.p.Ac = function (a, b) {
                var c = this;
                b.forEach(function (b) {
                  return c.observe(a, b);
                });
              };
              OBR._jsc.p.Cq = function (a, b) {
                var c = this;
                (0, window.setTimeout)(function () {
                  if (window.OBR.ka.Tf(b, 50)) {
                    c.u.log(a, b);
                    var d = a.Np;
                    d.qo && d.qo(a, b);
                  } else c.observe(a, b);
                }, 1000);
              };
              OBR._jsc.p.ha = function () {
                this.c.forEach(function (a) {
                  return a.unobserve();
                });
                this.c = [];
              };
              window.OBR.Na || (window.OBR.Na = new pc());
              window.OBR.Xl =
                window.OBR.Xl ||
                (function () {
                  function a (a) {
                    window.OBR.j.log('[ExploreMore] ' + a);
                  }
                  var b;
                  a('loaded');
                  return function (c) {
                    if (!b) {
                      b = new rc(c);
                      var d = function () {
                          a('initializing instance');
                          var c = b;
                          window.document.body.appendChild(tc(c));
                          var d = window.history.state;
                          window.history.replaceState({ obExploreMore: 1 }, '');
                          window.history.pushState({ obExploreMore: 2 }, '');
                          window.history.pushState(d, '');
                          uc(c);
                        },
                        e = function () {
                          'complete' === window.document.readyState
                            ? (a('dom ready'),
                              d(),
                              window.document.removeEventListener('readystatechange', e))
                            : a('dom not ready yet');
                        };
                      'complete' === window.document.readyState
                        ? (a('dom ready'), d())
                        : window.document.addEventListener('readystatechange', e);
                    }
                  };
                })();
              var Ec = { onWidgetViewd: 0, onRecViewd: 1, onRec50Viewed: 2, reelMRC50: 3 };
              OBR._jsc.p = vc.prototype;
              OBR._jsc.p.bj = function (a) {
                var b = a.La('eventTrackers'),
                  c = Dc(a);
                if (b && c) {
                  var d = window.OBR.b.createElement('div');
                  d.classList.add('ob-pixels');
                  c.querySelector('.ob-pixels') || c.appendChild(d);
                  for (var e in b) zc(this, a, c, e, b[e]);
                }
              };
              OBR._jsc.p.aj = function (a) {
                var b = [];
                if (a && a.doc)
                  return (b = a.doc.map(function (a) {
                    var b = a.pixels,
                      c = a.eventTrackers
                        ? a.eventTrackers.filter(function (a) {
                            return 1 === a.event;
                          })
                        : [];
                    b && b.length && (window.OBR.b.vt(b), delete a.pixels);
                    c &&
                      c.length &&
                      ((b = c.filter(function (a) {
                        return 2 == a.method;
                      })),
                      (c = c.filter(function (a) {
                        return 1 == a.method;
                      })),
                      wc(c),
                      xc(b),
                      (a.eventTrackers = a.eventTrackers
                        ? a.eventTrackers.filter(function (a) {
                            return 1 !== a.event;
                          })
                        : []));
                    return a;
                  }));
              };
              OBR._jsc.p.Bi = function (a, b, c) {
                if (c && c.length) {
                  var d = Dc(a);
                  a = a.i('fireImpressionPixelsOutsideIframe', !1);
                  var e = c.filter(function (a) {
                    return 2 == a.method;
                  });
                  c = c.filter(function (a) {
                    return 1 == a.method;
                  });
                  Ac(d, c, a);
                  Gc(d, b, e);
                }
              };
              OBR._jsc.p.observe = function (a, b, c, d, e) {
                a = {
                  threshold: 2 === d ? 0.5 : 1,
                  unobserve: !0,
                  callback: this.Bq.bind(this),
                  callbackParams: [a, b, c, d, e],
                  element: b,
                  checkAbsoluteVisibility: !0,
                };
                a = new window.OBR.IntersectionObserver(a);
                this.c.push(a);
                a.observe();
              };
              OBR._jsc.p.Bq = function (a, b, c, d, e) {
                var f = this,
                  g = 2 === d ? 50 : 100;
                (0, window.setTimeout)(function () {
                  window.OBR.ka.Tf(b, g) ? f.Bi(a, c, e) : f.observe(a, b, c, d, e);
                }, 1000);
              };
              OBR._jsc.p.ha = function () {
                this.c.forEach(function (a) {
                  a && a.unobserve && a.unobserve();
                });
                this.c = [];
              };
              window.OBR.be || (window.OBR.be = new vc());
              Hc.prototype.g = function (a, b, c) {
                c = void 0 === c ? '.ob-lazy-bgimg, .ob-lazy-img' : c;
                var d = a.s.v();
                a.za &&
                  a.za === d &&
                  (b && 0 === a.mode
                    ? (this.c(b), 0 === a.za.querySelectorAll(c).length && (a.s.bn = !0))
                    : ([].slice.call(a.za.querySelectorAll(c)).forEach(this.c), (a.s.bn = !0)));
              };
              Hc.prototype.c = function (a) {
                if ('IMG' === a.tagName.toUpperCase()) {
                  var b = a.getAttribute('data-ob-src');
                  b &&
                    (a.setAttribute('src', b),
                    a.removeAttribute('data-ob-src'),
                    window.OBR.b.aa(a, 'ob-lazy-img'));
                } else window.OBR.b.aa(a, 'ob-lazy-bgimg');
              };
              var Ic = new Hc();
              window.OBR.eh = window.OBR.eh || {
                Rd: function (a, b) {
                  b ||
                    ((b = { On: 0 }),
                    a.i('recMode', '').match(/swipe-strip|touch-strip|carousel|timeline/) &&
                      (b.On = 1));
                  if (a && a.v()) {
                    var c = a.v();
                    var d = c.querySelectorAll('.ob-lazy-bgimg');
                    c = c.querySelectorAll('img.ob-lazy-img').length || d.length;
                  } else c = !1;
                  if (c && !a.bn && a.v())
                    if (
                      ((b = b || {}),
                      (a = {
                        rootMargin: a.i('imagesLazyLoadMargin', 500) + 'px',
                        s: a,
                        za: a.v(),
                        mode: b.On || 0,
                      }),
                      Ic.o)
                    )
                      Kc(a, '.ob-lazy-bgimg'), Jc(a);
                    else {
                      b = Ic;
                      if (a && a.za) {
                        (c = a.za)
                          ? ((c = c.getBoundingClientRect()),
                            (c = { x: c.x, y: c.y, width: c.width, height: c.height }))
                          : (c = {});
                        d = c;
                        var e = a.rootMargin,
                          f = b.B;
                        c = Object.assign({}, d);
                        e = (0, window.parseInt)(e);
                        0 > d.y ? (c.height += e) : d.y > f.height && (c.y -= e);
                        b = b.B;
                        b =
                          0 <
                          (Math.min(c.width + c.x, b.width + b.x) - Math.max(c.x, b.x)) *
                            (Math.min(c.height + c.y, b.height + b.y) - Math.max(c.y, b.y));
                      } else b = !1;
                      b ? Ic.g(a) : Kc(a);
                    }
                },
              };
              window.OBR.eo = window.OBR.eo || Lc;
              Mc.prototype.G = function (a, b, c) {
                if (this.c && 'undefined' !== typeof b && 'undefined' !== typeof c) {
                  var d = c.callback ? c.callback : function () {};
                  b = b ? b : {};
                  c.FIRED = c.FIRED ? c.FIRED : 0;
                  (c.LIMIT && c.FIRED >= c.LIMIT) ||
                    ((c.FIRED += 1),
                    (a = this.Wh(a, b, c.method)),
                    window.OBR.ib.send(c.method, this.o, a, d, !0, null, null, !0));
                }
              };
              Mc.prototype.Wh = function (a, b, c) {
                var d = {},
                  e = this.s.Vc(),
                  f = !this.s.zb() && !!e,
                  g = f ? e.m('wnid', '') : this.s.m('wnid', ''),
                  k = f || this.s.zb() ? this.s.m('wnid', '') : null;
                e = f ? e.m('widgetJsId', '') : this.s.m('widgetJsId', '');
                f = f || this.s.zb() ? this.s.m('widgetJsId', '') : null;
                b.ajaxMethod = c;
                b.clientTimestamp = Date.now();
                b.timestamp = '';
                b.publisherId = this.s.m('pid', '');
                b.sectionId = this.s.m('sid', '');
                b.widgetJsId = e;
                b.widgetId = g;
                b.subWidgetJsId = f;
                b.subWidgetId = k;
                b.cardIdx = this.s.Ii();
                b.docId = this.s.m('did', '');
                b.uuid = this.s.m('lsd', '');
                b.platform = this.s.m('readerPlatform', '');
                b.deviceOs = '';
                b.deviceOrientation = window.OBR.b.ym();
                this.s.Vi(!0) || delete b.uuid;
                d.sessionId = this.g;
                d.eventGroup = this.u;
                d.eventTypeId = a;
                d.requestId = this.s.m('req_id', -1);
                d.attributes = JSON.stringify(b);
                return d;
              };
              Mc.prototype.setActive = function (a) {
                this.c = a;
              };
              window.OBR.L = Mc;
              window.OBR.proxy = window.OBR.proxy || {
                ow: function (a, b, c) {
                  window.OBR.h.J(b, c, this, {
                    currentWidget: a,
                    beforeLoadTime: new Date().getTime(),
                  });
                },
              };
              window.OB_PROXY = window.OB_PROXY || {
                getSet: function (a, b, c) {
                  return a.i(b, c);
                },
                getRequest: function (a, b, c) {
                  return a.m(b, c);
                },
                getWidgetId: function (a) {
                  return a.H();
                },
                makeHandshake: function (a) {
                  window.OBR.h.P(a);
                },
                hasJqueryInstalled: function () {
                  return window.OBR.b.Ym();
                },
                getWidgetIndex: function (a) {
                  return a.W();
                },
                getMeta: function (a, b, c) {
                  return a.La(b, c);
                },
                getFeedParentWidget: function (a) {
                  return a.Vc();
                },
                getFeedFatherAB: function (a) {
                  return a.Uc();
                },
                isFeedCard: function (a) {
                  return a.Cv();
                },
                getUserId: function (a) {
                  return a.Eb();
                },
                getDataSrcFinalUrl: function (a) {
                  return a.wa();
                },
                getAdBlockerStatus: function () {
                  return window.OBR.Xa.pe();
                },
                getExtId: function (a) {
                  var b = '',
                    c = window.OBR.b.Pg(window.OBR.f.ti);
                  a = window.OBR.b.Pg(a.he());
                  if (c || a) b = a || c;
                  return b;
                },
                setConsentData: function (a, b) {
                  a && 'string' === typeof a && window.OBR.X.hk(a, b);
                },
              };
              window.OBR.extern =
                window.OBR.extern ||
                (function () {
                  var a = window.OBR,
                    b = {
                      le: [],
                      getStat: function () {},
                      showDescription: function (b, d) {
                        a.h.J(
                          window.OBR.h.l.mh,
                          function () {
                            window.OBR.Co.nw(b, d);
                          },
                          this
                        );
                      },
                      returnedHtmlData: function (b, d) {
                        a.controller.gg(b, d);
                      },
                      returnedIrdData: function (b, d) {
                        a.pc.yl(b, d);
                      },
                      returnedJsonData: function (b, d) {
                        a.controller.mo(b, d);
                      },
                      returnedError: function (b) {
                        window.OBR.j.log('Call made using extern class');
                        a.j.log('Callback error' + b);
                      },
                      callRecs: function (b, d) {
                        window.OBR.j.log('Call made using extern class');
                        a.controller.Aj(b, function (a) {
                          try {
                            d(a);
                          } catch (f) {
                            window.OBR.j.log(f);
                          }
                        });
                      },
                      callClick: function (b, d) {
                        window.OBR.j.log('Call made using extern class');
                        a.controller.xe(b, d);
                      },
                      callWhatIs: function (a, b, e, f, g, k) {
                        window.OBR.h.J(
                          window.OBR.h.l.ef,
                          function () {
                            window.OBR.Fk.wl(a, b, e, f, g, k);
                          },
                          this
                        );
                        return !1;
                      },
                      callUserZapping: function (a, b, e, f, g) {
                        window.OBR.h.J(
                          window.OBR.h.l.Fh,
                          function () {
                            window.OBR.Ck.Or(a, b, e, f, g);
                          },
                          this
                        );
                        return !1;
                      },
                      zappingFormAction: function (a, b, e, f, g) {
                        window.OBR.Ck.Sp(a, b, e, f, g);
                        return !1;
                      },
                      userZappingMessage: function (a) {
                        window.OBR.j.log(a.message);
                      },
                      recClicked: function (b, d) {
                        window.OBR.j.log('Call made using extern class');
                        a.controller.Lo(d);
                      },
                      imageError: function (b) {
                        window.OBR.j.log('Call made using extern class');
                        window.OBR.error({
                          name: 'obm-ImageError',
                          message: 'Error loading as image: ' + b.src,
                        });
                        a.b.Cl(b);
                      },
                      carouselLogoError: function (b, d) {
                        window.OBR.j.log('Call made using extern class');
                        a.controller.$q(b, d);
                      },
                      logError: function (b, d, e, f) {
                        a.b.yc(b, d, e, f);
                      },
                      openNativeVideoPlayer: function (
                        b,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h,
                        l,
                        m,
                        n,
                        q,
                        r,
                        u,
                        z,
                        B,
                        F,
                        y
                      ) {
                        a.h.J(
                          a.h.l.Nd,
                          function () {
                            y = y ? y : a.A[r].m('req_id', null);
                            window.NVPInjector.main.init(
                              a.b.Lz([
                                b,
                                d,
                                e,
                                f,
                                g,
                                k,
                                h,
                                l,
                                m,
                                n,
                                q,
                                r,
                                u,
                                z,
                                y,
                                a.f.sg,
                                a.A[r].m('lang', 'en'),
                                a.A[r].m('lsd', null),
                                a.A[r].m('pid', null),
                                a.A[r].m('sid', null),
                                a.A[r].m('wnid', null),
                                B,
                                a.A[r].m('gl', ''),
                                a.A[r].Xi(),
                                a.A[r].m('widgetJsId', a.A[r].H()),
                                a.A[r].m('req_id', '-1'),
                                a.A[r].m('pvId', '-1'),
                              ]),
                              a.A[r].Wc(),
                              F
                            );
                          },
                          this
                        );
                        return !1;
                      },
                      openOverlay: function (b) {
                        a.h.J(
                          a.h.l.Nd,
                          function () {
                            var c = b.getAttribute('data-nvp');
                            if (null !== c && 'string' === typeof c) {
                              c = window.JSON.parse(
                                b
                                  .getAttribute('data-nvp')
                                  .replace(/"/g, '#$#')
                                  .replace(/'/g, '"')
                                  .replace(/\\"/g, "'")
                                  .replace('#$#', '\\"')
                              );
                              var e = a.A[c.widgetIdx];
                              c.platform = a.f.sg;
                              c.lang = e.m('lang', 'en');
                              c.uuid = e.m('lsd', null);
                              c.publisherId = e.m('pid', null);
                              c.sourceId = e.m('sid', null);
                              c.widgetNumberId = e.m('wnid', null);
                              c.location = e.m('gl', '');
                              c.timestamp = e.Xi();
                              window.NVPInjector.main.recClicked(c, e.Wc());
                            } else
                              a.error({
                                name: 'obm-nvpError',
                                message: 'Error parsing data-nvp: ' + c,
                                stack: 'None',
                              });
                          },
                          this
                        );
                        return !1;
                      },
                      handshakeNVP: function () {
                        a.h.P(window.OBR.h.l.Nd);
                      },
                      onVideoClick: function (b, d) {
                        a.controller.Ij(b, d);
                      },
                      manualVideoClicked: function (b, d, e, f, g) {
                        a.controller.Bj(b, d, e, f, g);
                      },
                      errorInjectionHandler: function (a) {
                        window.OBR.A[a].wA(a);
                      },
                      reloadWidget: function () {
                        window.OBR.j.log('## Reload widget');
                        a.controller.So();
                      },
                      researchWidget: function () {
                        window.OBR.j.log('## Research widget');
                        a.controller.ec();
                      },
                      renderSpaWidgets: function (b) {
                        window.OBR.j.log(
                          '## renderSpaWidgets - SPA has triggered a widget render'
                        );
                        window.OBR.f.Le && window.OBR.f.Le.Ts !== b
                          ? (window.OBR.j.log(
                              '## renderSpaWidgets - page navigation detected. triggering reload'
                            ),
                            a.controller.So())
                          : (window.OBR.j.log(
                              '## renderSpaWidgets - ' +
                                (window.OBR.f.Le
                                  ? 'still on same page'
                                  : 'first widget mounting detected') +
                                '. researching for new widgets on page'
                            ),
                            a.controller.ec());
                        window.OBR.f.Le = window.OBR.f.Le || {};
                        window.OBR.f.Le.Ts = b;
                      },
                      cancelRecommendation: function (b) {
                        window.OBR.j.log('cancel recommendation with bocr ' + b);
                        a.controller.Qr(b);
                      },
                      cancelRecs: function (b, d, e) {
                        window.OBR.j.log(
                          'cancel recommendation by doc url ' +
                            b +
                            ' publisher id = ' +
                            d +
                            ' isAd = ' +
                            e
                        );
                        a.controller.Rr(b, d, e);
                      },
                      refreshWidget: function (b) {
                        window.OBR.j.log('## Refresh widget');
                        a.controller.Dc(b);
                      },
                      setABtest: function (b) {
                        b && (a.f.Vh = '&obAbtest=' + b);
                      },
                      refreshSpecificWidget: function (b, d) {
                        window.OBR.j.log('## Refresh SPECIFIC widget');
                        'string' !== typeof d
                          ? a.h.J(
                              a.h.l.sh,
                              function () {
                                window.OBR.controller.Po(b, d);
                              },
                              this
                            )
                          : window.OBR.controller.Po(b, d);
                      },
                      getCountOfRecs: function (b) {
                        return a.controller.It(b);
                      },
                      onOdbReturn: function (b, d) {
                        a.controller.Px(b, d);
                      },
                      closeCard: function () {
                        a.Cf.As();
                      },
                      closeModal: function () {
                        try {
                          a.modal.hideModal();
                        } catch (c) {
                          window.OBR.error(c);
                        }
                      },
                      handshakeModule: function (b) {
                        try {
                          var c = window.OBR.h.Yt(b);
                          c
                            ? window.OBR.h.P(c)
                            : a.error({
                                name: 'obm-MakeHandShakeError',
                                message: 'Error in module: ' + b + ', Err: Module not found',
                                stack: 'None',
                              });
                        } catch (e) {
                          window.OBR.error(e);
                        }
                      },
                      callLoadMore: function (a, b) {
                        window.OBR.h.J(
                          window.OBR.h.l.bf,
                          function () {
                            window.OBR.uj.ne(a, b);
                          },
                          this
                        );
                      },
                      enableTbx: function () {
                        window.OBR.Hc ? window.OBR.Hc.gn() : (window.OBR.f.wo = !0);
                      },
                      closeTbx: function () {
                        window.OBR.Hc.Cs();
                      },
                      scrollIntoView: function () {
                        Hb();
                      },
                      ampIntersectionChange: function (a) {
                        window.OBR.ka.Xh = a;
                      },
                      ampUpdateViewportSize: function () {
                        ub(window.OBR.ka);
                      },
                      callUserSentiments: function (b, d) {
                        window.OBR.h.J(
                          window.OBR.h.l.Eh,
                          function () {
                            window.OBR.Mp.Nr(b, d);
                          },
                          this,
                          null,
                          a.A[d.idx].m('lang', 'en')
                        );
                        return !1;
                      },
                      video: {},
                    };
                  b.video.getVideoRecs = function (a, b, e, f, g, k, h) {
                    window.OBR.h.J(
                      window.OBR.h.l.Gh,
                      function () {
                        window.OBR.video.wu(a, b, e, f, g, k, h);
                      },
                      this
                    );
                  };
                  b.video.videoClicked = function (a) {
                    window.OBR.video.Mz(a);
                  };
                  b.video.initInPlayerWidget = function (c) {
                    c = new window.OBR.fq(c);
                    b.le.push(c);
                    1 !== a.h.Zt(a.h.l.$e) &&
                      a.h.J(
                        a.h.l.$e,
                        function () {
                          a.Xc.Qn(b.le);
                        },
                        this
                      );
                    return c;
                  };
                  b.recReasons = {};
                  b.recReasons.loadScopedWidget = function (b, d, e, f) {
                    return a.controller.Sn(b, d, e, f);
                  };
                  b.recReasons.backFromScopedWidget = function (b) {
                    return a.controller.xr(b);
                  };
                  b.recReasons.onRecLinkHover = function (a) {
                    window.OBR.b.V(a.parentElement, 'rec-link-hover');
                  };
                  b.recReasons.onRecLinkHoverOut = function (a) {
                    window.OBR.b.aa(a.parentElement, 'rec-link-hover');
                  };
                  b.truncateText = function (a, b, e) {
                    OBR._jsc.Mb(window.OBR.vf, a, b, e);
                  };
                  b.reloadPager = function (a, b) {
                    (a = window.OBR.A[a]) && window.OBR.controller.xo(a, void 0 === b ? !1 : b);
                  };
                  b.recReasons.onRecFollowClick = function (a, b, e, f) {
                    window.OBR.Tj && window.OBR.Tj.Lx(a, b, e, f);
                  };
                  b.triggerClickPixels = function (b, d, e) {
                    a.controller.Gp(b, d, e);
                  };
                  b.mraidOpen = function (b, d) {
                    a.controller.zz(b, d);
                  };
                  b.customClickHandler = function (b, d, e, f) {
                    a.controller.yz(b, d, e, f);
                  };
                  b.onCheqResponse = function (b) {
                    a.Xe.ei(b);
                  };
                  b.callViewed = function (a) {
                    window.OBR.controller.Pr(a);
                  };
                  b.feed = {};
                  b.feed.loadNextChunk = function (a) {
                    return window.OBR.Me && window.OBR.Me.externalChunkLoad(a);
                  };
                  b.renderJSFormatWidget = function (a, b, e) {
                    window.OBR.controller.$x(a, b, e);
                  };
                  b.renderJSFormatChunk = function (a) {
                    window.OBR.controller.xg(a);
                  };
                  b.clipError = function (a) {
                    var b = a ? a.error : null,
                      c = '',
                      f = '';
                    b && ((c = b.code), (f = c.message));
                    b = 'Error loading as video: ' + a.src;
                    window.OBR.error({
                      name: 'obm-ClipError',
                      message:
                        b + (c ? '; Error code: ' + c : '') + (f ? '; ErrorMessage: ' + f : ''),
                      errorEleUrl: a.src,
                    });
                  };
                  return b;
                })();
              if ('undefined' !== typeof window.OBBridge) {
                var dd = {};
                window.OBR.clickHandler =
                  ((dd.open = function (a, b, c) {
                    return window.OBBridge.clickHandler.open(a, b, c);
                  }),
                  dd);
                var ed = {};
                window.OBR.viewHandler =
                  ((ed.loadMore = function (a) {
                    return window.OBBridge.viewHandler.loadMore(a);
                  }),
                  ed);
              }
              window.outbrain = window.outbrain || {};
              window.outbrain.returnedHtmlData = function (a, b) {
                window.OBR.controller.gg(a, b);
              };
              window.outbrain.returnedIrdJsonData = function (a, b) {
                window.OBR.pc.yl(a, b);
              };
              window.outbrain.returnedJsonData = function (a, b) {
                window.OBR.controller.mo(a, b);
              };
              window.outbrain.returnedError = function (a) {
                window.OBR.j.log('Callback error' + a);
              };
              window.outbrain.callRecs = function (a, b) {
                window.OBR.controller.Aj(a, b);
              };
              window.outbrain.callClick = function (a, b) {
                window.OBR.controller.xe(a, b);
              };
              window.outbrain.callWhatIs = function (a, b, c, d, e, f) {
                window.OBR.h.J(
                  window.OBR.h.l.ef,
                  function () {
                    window.OBR.Fk.wl(a, b, c, d, e, f);
                  },
                  this
                );
              };
              window.outbrain.callLoadMore = function (a, b) {
                window.OBR.h.J(
                  window.OBR.h.l.bf,
                  function () {
                    window.OBR.uj.ne(a, b);
                  },
                  this
                );
              };
              window.outbrain.recClicked = function (a, b) {
                window.OBR.controller.Lo(b);
              };
              window.outbrain.imageError = function (a) {
                window.OBR.b.Cl(a);
              };
              window.outbrain.closeModal = function () {
                try {
                  window.OBR.modal.hideModal();
                } catch (a) {
                  window.OBR.error(a);
                }
              };
              window.outbrain_rater = window.outbrain_rater || {};
              window.outbrain_rater.returnedHtmlData = function (a, b) {
                window.OBR.controller.gg(a, b);
              };
              window.outbrain_rater.returnedCancelOdbData = function (a) {
                window.OBR.controller.by(a);
              };
              !0 === window.OBR.f.pn &&
                (window.OBR.j.log('Widget Start!'),
                (window.OBR.f.pn = !1),
                'boolean' === typeof window.OB_PASSIVE_MODE && !0 === window.OB_PASSIVE_MODE
                  ? window.OBR.j.log('passive')
                  : window.OBR.controller.Wo(),
                (window.OBR.ready = !0),
                window.OBR.$i.tt());
            } catch (ex) {
              window.OBR.error(ex);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_8b9417066439122e)
            ({}.constructor.defineProperty(window, 'performance', $___old_8b9417066439122e));
        }
      })();
    (function () {
      OBR.env = 2;
    })();
  })();
}
