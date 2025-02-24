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
    (function (_) {
      const $___old_803be5d9ecbd6908 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        ),
        $___old_107c81fab1efce35 = {}.constructor.getOwnPropertyDescriptor(window, 'performance');
      try {
        if ($___old_803be5d9ecbd6908)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
          ));
        if ($___old_107c81fab1efce35)
          ({}.constructor.defineProperty(
            window,
            'performance',
            $___stub_2b47892348e4e4b9.performance
          ));
        return function () {
          var ba,
            aa,
            da,
            ea,
            fa,
            ja,
            la,
            ma,
            ka,
            na,
            oa,
            pa,
            sa,
            ua,
            wa,
            ya,
            Ba,
            Da,
            Ea,
            Fa,
            Ga,
            Ha,
            Ja,
            Ka,
            Na,
            Qa,
            Wa,
            Za,
            gb,
            jb,
            kb,
            nb,
            ob,
            lb,
            qb,
            rb,
            tb,
            Ab,
            Cb,
            Eb,
            Fb,
            Ib,
            Jb,
            Kb,
            Lb,
            Pb,
            Vb,
            Wb,
            Zb,
            $b,
            gc,
            lc,
            oc,
            pc,
            qc,
            rc,
            uc,
            Ac,
            Bc,
            Cc,
            Ec,
            Fc,
            Lc,
            L,
            Mc,
            Nc,
            Oc,
            Pc,
            Qc,
            x,
            Rc,
            Sc,
            Tc,
            Uc,
            Rb,
            Vc,
            Wc,
            $c,
            ad,
            bd,
            sd,
            td,
            rd,
            qd,
            vd,
            wd,
            ia,
            xd,
            yd,
            zd,
            Ad,
            Dd,
            Ed;
          ba = function (a, b) {
            b = aa(a, b);
            return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
          };
          aa = function (a, b) {
            for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
              if (e in d && b.call(void 0, d[e], e, a)) return e;
            return -1;
          };
          _.ca = function (a, b) {
            return 0 <= Array.prototype.indexOf.call(a, b, void 0);
          };
          da = function (a, b) {
            b = Array.prototype.indexOf.call(a, b, void 0);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c;
          };
          ea = function (a) {
            var b = a.length;
            if (0 < b) {
              for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
              return c;
            }
            return [];
          };
          fa = function (a, b, c) {
            return 2 >= arguments.length
              ? Array.prototype.slice.call(a, b)
              : Array.prototype.slice.call(a, b, c);
          };
          ja = function (a) {
            for (var b = {}, c = 0, d = 0; d < a.length; ) {
              var e = a[d++];
              var f = e;
              f = _.ha(f) ? 'o' + ia(f) : (typeof f).charAt(0) + f;
              Object.prototype.hasOwnProperty.call(b, f) || ((b[f] = !0), (a[c++] = e));
            }
            a.length = c;
          };
          la = function (a, b) {
            a.sort(b || ka);
          };
          ma = function (a, b) {
            for (var c = Array(a.length), d = 0; d < a.length; d++)
              c[d] = { index: d, value: a[d] };
            var e = b || ka;
            la(c, function (f, g) {
              return e(f.value, g.value) || f.index - g.index;
            });
            for (d = 0; d < a.length; d++) a[d] = c[d].value;
          };
          ka = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          };
          na = function (a, b) {
            return a === b;
          };
          oa = function (a, b) {
            for (var c = {}, d = 0; d < a.length; d++) {
              var e = a[d],
                f = b.call(void 0, e, d, a);
              void 0 !== f && (c[f] || (c[f] = [])).push(e);
            }
            return c;
          };
          pa = function (a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
              var d = arguments[c];
              if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                  for (var f = pa.apply(null, fa(d, e, e + 8192)), g = 0; g < f.length; g++)
                    b.push(f[g]);
              else b.push(d);
            }
            return b;
          };
          sa = function (a) {
            var b = 0 > a;
            a = Math.abs(a);
            var c = a >>> 0;
            a = Math.floor((a - c) / 4294967296);
            a >>>= 0;
            b &&
              ((a = ~a >>> 0),
              (c = (~c >>> 0) + 1),
              4294967295 < c && ((c = 0), a++, 4294967295 < a && (a = 0)));
            qa = c;
            ra = a;
          };
          ua = function (a) {
            return a ? (a.passive && ta() ? a : a.capture || !1) : !1;
          };
          wa = function (a) {
            if (a !== va) throw Error('Bad secret');
          };
          ya = function () {
            var a;
            return null !== (a = xa.jd()) && void 0 !== a ? a : null;
          };
          Ba = function () {
            var a, b;
            if (void 0 === za)
              try {
                za =
                  null !==
                    (b =
                      null === (a = ya()) || void 0 === a
                        ? void 0
                        : a.createPolicy('google#safe', {
                            createHTML: function (c) {
                              return c;
                            },
                            createScript: function (c) {
                              return c;
                            },
                            createScriptURL: function (c) {
                              return c;
                            },
                          })) && void 0 !== b
                    ? b
                    : null;
              } catch (c) {
                (za = null), console.log(c);
              }
            return za;
          };
          Da = function (a) {
            var b, c;
            a =
              null !== (c = null === (b = Ba()) || void 0 === b ? void 0 : b.createScriptURL(a)) &&
              void 0 !== c
                ? c
                : a;
            return new Ca(a, va);
          };
          Ea = function (a, b) {
            if (!(a instanceof b)) throw Error('wrong type');
          };
          Fa = function (a) {
            Ea(a, Ca);
            return a.j;
          };
          Ga = function (a, b) {
            const $___old_ca78d19ea11d276d = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_ca78d19ea11d276d)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_b317e19f866a2da7.localStorage
                ));
              return function () {
                b = void 0 === b ? window : b;
                if (r(a, 5))
                  try {
                    return b.localStorage;
                  } catch (c) {}
                return null;
              }.apply(this, arguments);
            } finally {
              if ($___old_ca78d19ea11d276d)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_ca78d19ea11d276d));
            }
          };
          Ha = function (a, b) {
            b = void 0 === b ? document : b;
            return r(a, 5) ? b.cookie : null;
          };
          Ja = function (a, b, c) {
            c = void 0 === c ? document : c;
            b = Ha(b, c);
            return null === b ? null : new Ia({ cookie: b }).get(a) || '';
          };
          Ka = function (a, b, c, d, e) {
            e = void 0 === e ? document : e;
            r(c, 5) && new Ia(e).set(a, b, d);
          };
          Na = function (a) {
            La.F().K(Ma(a));
            return Error(a);
          };
          Qa = function (a, b) {
            var c = _.t(432) ? v(a, b) : Oa(a, b) || v(a, b);
            1 === _.w(395) &&
              c &&
              !Pa(c) &&
              (a = v(a, b).parentElement) &&
              a !== b.body &&
              (c = a);
            return c;
          };
          Wa = function (a, b, c) {
            var d = b.slot,
              e = b.da,
              f = Qa(d, a);
            if (!f) return null;
            b = Ra(f);
            if (!b) return b;
            var g = f === v(d, a),
              h = g || 1 === _.w(395),
              k = Sa(function () {
                var m = g ? v(d, a) : f;
                return (m && Ta(m, window)) || {};
              });
            e = Ua(e)[0];
            var l = !1;
            Array.isArray(e) && (l = c ? h : 0 == b.x && 'center' == k()['text-align']);
            l &&
              (b.x += Math.round(
                Math.max(0, (g ? f.clientWidth : f.parentElement.clientWidth) - e[0]) / 2
              ));
            h &&
              ((b.y += Math.round(
                Math.min(parseInt(k()['padding-top'], 10) || 0, f.clientHeight)
              )),
              l ||
                ((c = f.clientWidth),
                (b.x += Math.round(Math.min(parseInt(k()['padding-left'], 10) || 0, c)))));
            return b && Pa(f) ? b : new _.Va(-12245933, -12245933);
          };
          Za = function (a) {
            var b = window,
              c = !0;
            c = void 0 === c ? !1 : c;
            new x.Promise(function (d, e) {
              function f () {
                g.onload = null;
                g.onerror = null;
                b.document.body.removeChild(g);
              }
              var g = b.document.createElement('script');
              g.onload = function () {
                f();
                d();
              };
              g.onerror = function () {
                f();
                e(void 0);
              };
              g.type = 'text/javascript';
              g.src = Xa(a);
              Ya(g);
              c && 'complete' !== b.document.readyState
                ? _.y(b, 'load', function () {
                    b.document.body.appendChild(g);
                  })
                : b.document.body.appendChild(g);
            });
          };
          gb = function (a) {
            return $a(this, function c () {
              var d, e, f, g, h;
              return ab(c, function (k) {
                switch (k.j) {
                  case 1:
                    return (
                      (d =
                        'https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=' +
                        a.j +
                        ('&tv=' + a.l + '&st=') +
                        a.eb),
                      (e = void 0),
                      (k.A = 2),
                      cb(k, db(d), 4)
                    );
                  case 4:
                    e = k.l;
                    eb(k, 3);
                    break;
                  case 2:
                    fb(k);
                  case 3:
                    if (!e) return k.return(void 0);
                    f = a.sb || e.sodar_query_id;
                    g = void 0 === e.rc_enable ? 'n' : e.rc_enable;
                    h = void 0 === e.bg_snapshot_delay_ms ? '0' : e.bg_snapshot_delay_ms;
                    return f && e.bg_hash_basename && e.bg_binary
                      ? k.return({
                          context: a.B,
                          Vc: e.bg_hash_basename,
                          Uc: e.bg_binary,
                          rd: a.j + '_' + a.l,
                          sb: f,
                          eb: a.eb,
                          Ib: g,
                          Lb: h,
                        })
                      : k.return(void 0);
                }
              });
            });
          };
          jb = function (a) {
            $a(this, function c () {
              var d;
              return ab(c, function (e) {
                if (1 == e.j) return cb(e, gb(a), 2);
                if ((d = e.l)) {
                  var f = 'sodar2';
                  f = void 0 === f ? 'sodar2' : f;
                  var g = window,
                    h = g.GoogleGcLKhOms;
                  (h && 'function' === typeof h.push) || (h = g.GoogleGcLKhOms = []);
                  var k = {};
                  h.push(
                    ((k._ctx_ = d.context),
                    (k._bgv_ = d.Vc),
                    (k._bgp_ = d.Uc),
                    (k._li_ = d.rd),
                    (k._jk_ = d.sb),
                    (k._st_ = d.eb),
                    (k._rc_ = d.Ib),
                    (k._dl_ = d.Lb),
                    k)
                  );
                  if ((h = g.GoogleDX5YKUSk)) (g.GoogleDX5YKUSk = void 0), h[1]();
                  f = hb(ib, { basename: f });
                  Za(f);
                }
                return e.return(d);
              });
            });
          };
          kb = function (a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            if (!Array.isArray(a) || !Array.isArray(a.raw))
              throw new TypeError(
                'trustedResourceUrl is a template literal tag function that only accepts template literals with or without expressions. For example, trustedResourceUrl`foo`; or trustedResourceUrl`foo${bar}`'
              );
            if (0 === c.length) return Da(a[0]);
            d = a[0].toLowerCase();
            if (_.B(d, 'startsWith').call(d, 'data:'))
              throw Error('Data URLs cannot have expressions in the template literal input.');
            if (_.B(d, 'startsWith').call(d, 'https://') || _.B(d, 'startsWith').call(d, '//')) {
              var e = d.indexOf('//') + 2;
              var f = d.indexOf('/', e);
              if (f <= e)
                throw Error(
                  "Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'."
                );
              if (!/^[0-9a-z.:-]+$/i.test(d.substring(e, f)))
                throw Error('The origin contains unsupported characters.');
              e = !0;
            } else e = !1;
            if ((e = !e)) {
              if (_.B(d, 'startsWith').call(d, '/'))
                if ('/' === d || (1 < d.length && '/' !== d[1] && '\\' !== d[1])) e = !0;
                else throw Error('The path start in the url is invalid.');
              else e = !1;
              e = !e;
            }
            if (e) {
              if (_.B(d, 'startsWith').call(d, 'about:blank')) {
                if ('about:blank' !== d && !_.B(d, 'startsWith').call(d, 'about:blank#'))
                  throw Error('The about url is invalid.');
                d = !0;
              } else d = !1;
              e = !d;
            }
            if (e) throw Error('Trying to interpolate expressions in an unsupported url format.');
            d = [a[0]];
            for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
            return Da(d.join(''));
          };
          nb = function (a, b, c, d) {
            var e = void 0 === e ? {} : e;
            lb(a, b, c || null, e);
            switch (a) {
              case 0:
              case 9:
              case 12:
                (a = mb()),
                  (c = a.get(b, d).yb)
                    ? ((b = (C(c, 4) || 0) + 1), D(c, 4, b), a.set(c, d))
                    : lb(11, b, null, {});
            }
          };
          ob = function (a, b, c) {
            var d = void 0 === d ? {} : d;
            lb(a, b, c || null, d);
          };
          lb = function (a, b, c, d) {
            Math.random() < _.w(1916, 0.001) &&
              pb(_.B(Object, 'assign').call(Object, { c: String(a), em: c, lid: b }, d), 'esp');
          };
          qb = function (a, b, c, d) {
            var e = function (f) {
              D(b, 2, f);
              f = mb().set(b, d);
              f.errorMessage && ob(f.info, a, f.errorMessage);
            };
            try {
              return c().then(function (f) {
                e(f);
                return b;
              });
            } catch (f) {
              return e(null), nb(1, a, f.message, d), x.Promise.resolve(b);
            }
          };
          rb = function (a) {
            var b = void 0 === b ? function () {} : b;
            return new x.Promise(function (c) {
              setTimeout(function () {
                c(b());
              }, a);
            });
          };
          tb = function () {
            var a = window;
            var b = void 0 === b ? function () {} : b;
            return new x.Promise(function (c) {
              var d = function () {
                c(b());
                _.sb(a, 'load', d);
              };
              _.y(a, 'load', d);
            });
          };
          Ab = function (a, b, c, d) {
            if (c) {
              var e = function (h, k) {
                  if ('function' === typeof k) {
                    h = new ub(h, k, c, d);
                    k = new vb(h.m, h.A, c, d);
                    var l = new wb(k.A, k.C, c, d),
                      m = new xb();
                    yb(m, [h, k, l]);
                    zb(m);
                  } else ob(14, h);
                },
                f = {};
              b = _.G(b);
              for (var g = b.next(); !g.done; f = { Bb: f.Bb, Ka: f.Ka }, g = b.next())
                (f.Ka = g.value),
                  /^[a-z0-9]+$/i.test(f.Ka)
                    ? (g = a[f.Ka])
                      ? e(f.Ka, g)
                      : ((f.Bb = !1),
                        Object.defineProperty(a, f.Ka, {
                          set: (function (h) {
                            return function (k) {
                              h.Bb || ((h.Bb = !0), e(h.Ka, k));
                            };
                          })(f),
                        }))
                    : ob(13, f.Ka);
            }
          };
          Cb = function (a) {
            a = _.Bb(a.split(/\s+/), function (b) {
              return (b = /^(-?\d+)(px|%)$/.exec(b))
                ? { value: parseFloat(b[1]), type: b[2] }
                : { value: 0, type: 'px' };
            });
            a[1] = a[1] || a[0];
            a[2] = a[2] || a[0];
            a[3] = a[3] || a[1];
            return a;
          };
          Eb = function (a) {
            if (!a) return [0];
            a = 'number' === typeof a ? [a] : a;
            a = _.Db(a, function (b) {
              return 'number' === typeof b && 0 <= b && 1 >= b ? !0 : !1;
            });
            ja(a);
            la(a, function (b, c) {
              return b - c;
            });
            return a;
          };
          Fb = function (a) {
            try {
              var b = a.getBoundingClientRect();
            } catch (c) {}
            return b
              ? {
                  top: b.top,
                  right: b.right,
                  bottom: b.bottom,
                  left: b.left,
                  width: b.width || b.right - b.left,
                  height: b.height || b.bottom - b.top,
                }
              : { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          };
          Ib = function (a, b, c, d) {
            var e = new Gb(),
              f = '',
              g = function (h) {
                try {
                  var k = 'object' === typeof h.data ? h.data : JSON.parse(h.data);
                  f === k.paw_id && (_.sb(a, 'message', g), e.resolve(d(k)));
                } catch (l) {}
              };
            return 'object' === typeof a.gmaSdk && 'function' === typeof a.gmaSdk.getQueryInfo
              ? (_.y(a, 'message', g), (f = c(a.gmaSdk)), e.promise)
              : 'object' === typeof a.webkit &&
                'object' === typeof a.webkit.messageHandlers &&
                'object' === typeof a.webkit.messageHandlers.getGmaQueryInfo &&
                'function' === typeof a.webkit.messageHandlers.getGmaQueryInfo.postMessage
              ? ((f = String(Math.floor(2147483647 * Hb(a)))),
                _.y(a, 'message', g),
                b(a.webkit.messageHandlers, f),
                e.promise)
              : null;
          };
          Jb = function (a) {
            return Ib(
              a,
              function (b, c) {
                return void b.getGmaQueryInfo.postMessage(c);
              },
              function (b) {
                return b.getQueryInfo();
              },
              function (b) {
                return b.signal;
              }
            );
          };
          Kb = function (a) {
            return 'number' === typeof a || 'string' === typeof a;
          };
          Lb = function (a) {
            switch (a) {
              case void 0:
              case null:
              case 2:
                return !1;
              case 0:
              case 1:
                return !0;
              default:
                throw Error('Unexpected encryption mode: ' + a);
            }
          };
          Pb = function () {
            var a = window,
              b = Mb();
            var c = void 0 === c ? Nb : c;
            if (_.t(215) && !a.goog_sdr_l) {
              Object.defineProperty(a, 'goog_sdr_l', { value: !0 });
              var d = function () {
                var e = _.w(37),
                  f = function () {
                    c(a, 'gpt', b, String(Ob(a)));
                  };
                e ? a.setTimeout(f, e) : f();
              };
              'complete' === a.document.readyState ? d() : _.y(a, 'load', d);
            }
          };
          Vb = function (a, b) {
            b = void 0 === b ? Qb : b;
            var c = ia(a),
              d = function (f) {
                f = _.G(f);
                f.next();
                f = Rb(f);
                return b(c, f);
              },
              e = function (f) {
                var g = _.G(f);
                f = g.next().value;
                g = Rb(g);
                return a.apply(f, g);
              };
            return function (f) {
              for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
              h = this || _.H;
              var k = Sb.get(h);
              k || ((k = {}), Sb.set(h, k));
              return Tb(k, [this].concat(_.Ub(g)), e, d);
            };
          };
          Wb = function (a, b, c, d) {
            var e = 0;
            e = void 0 === e ? '' : e;
            c =
              void 0 === c
                ? function (l) {
                    return !!l;
                  }
                : c;
            d = void 0 === d ? ',' : d;
            var f = [],
              g = !1;
            a = _.G(a);
            for (var h = a.next(); !h.done; h = a.next()) {
              h = b(h.value);
              var k = c(h);
              g = g || k;
              f.push(String(k ? h : e));
            }
            return g ? f.join(d) : null;
          };
          Zb = function (a) {
            a = Xb(a);
            var b = [];
            _.Yb(a, function (c, d) {
              c = c.filter(function () {
                return !0;
              });
              c.length &&
                ((c = c.map(encodeURIComponent)),
                (d = encodeURIComponent(d)),
                b.push(d + '=' + c.join()));
            });
            return b;
          };
          $b = function (a) {
            var b = a.getBoundingClientRect();
            a = b.top;
            var c = b.bottom;
            if (0 === b.height) return !1;
            b = _.H.innerHeight;
            return (0 < c && c < b) || (0 < a && a < b);
          };
          gc = function (a, b, c) {
            var d,
              e = v(a, c);
            if (e && (!_.t(434) || !$b(e)))
              if (_.t(399)) {
                var f = a.getSlotId();
                if (!ac.has(f)) {
                  ac.add(f);
                  var g = new (null !== (d = b.IntersectionObserver) && void 0 !== d ? d : bc)(
                    J(755, function (m) {
                      (m = _.G(m).next().value) &&
                        0 === m.intersectionRatio &&
                        ((m = v(a, c)) && cc(m, !1), h());
                    }),
                    { threshold: 0 }
                  );
                  g.observe(e);
                  var h = function () {
                      g.disconnect();
                      ac.delete(f);
                      k();
                      l();
                    },
                    k = dc(ec, f, 756, function (m) {
                      m.isEmpty || h();
                    }),
                    l = dc(fc, f, 756, function () {
                      cc(v(a, c), !1);
                      h();
                    });
                }
              } else cc(e, !1);
          };
          lc = function (a) {
            return {
              Xc: function (b) {
                return kb(hc, b, a);
              },
              Wc: function (b) {
                return kb(ic, b, a);
              },
              Dd: kb(jc),
              Cd: kb(kc),
            };
          };
          oc = function (a, b, c, d) {
            mc(
              'gpt_sz',
              function (e) {
                K(e, 'r', nc(a));
                K(e, 'w', c.width);
                K(e, 'h', c.height);
                b && K(e, 'f', b);
                null != d && K(e, 'a', Number(d));
              },
              { Aa: _.w(28) }
            );
          };
          pc = function (a) {
            var b = { threshold: [0, 0.3, 0.5, 0.75, 1] };
            return window.IntersectionObserver ? new IntersectionObserver(a, b) : new bc(a, b);
          };
          qc = function (a) {
            return new x.Promise(function (b) {
              return void setTimeout(b, a);
            });
          };
          rc = function (a, b) {
            return 'undefined' === typeof IntersectionObserver
              ? new bc(b, { rootMargin: a })
              : new IntersectionObserver(b, { rootMargin: a });
          };
          uc = function (a) {
            var b = sc(a);
            return (
              ((L = [
                'google_debug',
                'dfpdeb',
                'google_console',
                'google_force_console',
                'googfc',
              ]),
              _.B(L, 'find')).call(L, function (c) {
                var d = b.search(tc);
                b: {
                  var e = 0;
                  for (var f = c.length; 0 <= (e = b.indexOf(c, e)) && e < d; ) {
                    var g = b.charCodeAt(e - 1);
                    if (38 == g || 63 == g)
                      if (((g = b.charCodeAt(e + f)), !g || 61 == g || 38 == g || 35 == g))
                        break b;
                    e += f + 1;
                  }
                  e = -1;
                }
                if (0 > e) c = null;
                else {
                  f = b.indexOf('&', e);
                  if (0 > f || f > d) f = d;
                  e += c.length + 1;
                  c = decodeURIComponent(b.substr(e, f - e).replace(/\+/g, ' '));
                }
                return null !== c;
              }) || null
            );
          };
          Ac = function () {
            vc('pubadsReady', !0);
            if (_.t(206)) {
              var a = 0;
              Object.defineProperty(wc(), 'pubadsReady', {
                get: function () {
                  La.F().K(xc());
                  if (5 > a) {
                    var b = _.w(465);
                    mc(
                      'gpt_pubads_ready',
                      function (c) {
                        ++a;
                        yc(c);
                        var d = Error('pubadsReady');
                        K(c, 'stack', zc(d.stack, d.message));
                      },
                      { Aa: b }
                    );
                  }
                  return !0;
                },
                configurable: !0,
                enumerable: !0,
              });
            }
          };
          Bc = function (a) {
            return (a = a.querySelector('script[nonce]'))
              ? a.nonce || a.getAttribute('nonce') || ''
              : '';
          };
          Cc = function (a, b) {
            return null == b ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
          };
          Ec = function (a) {
            a = a.id;
            return (
              null != a &&
              (Dc.has(a) ||
                _.B(a, 'startsWith').call(a, 'google_ads_iframe_') ||
                _.B(a, 'startsWith').call(a, 'aswift'))
            );
          };
          Fc = function (a, b) {
            b = void 0 === b ? 4 : b;
            if (!a) return !1;
            if (Ec(a)) return !0;
            if (0 >= b) return !1;
            a = _.G(a.childNodes);
            for (var c = a.next(); !c.done; c = a.next()) if (Fc(c.value, b - 1)) return !0;
            return !1;
          };
          Lc = function () {
            var a = window,
              b;
            if (a === a.top) {
              var c = _.w(449);
              if (c)
                for (
                  var d = {}, e = _.G(_.B(Gc, 'entries').call(Gc)), f = e.next();
                  !f.done;
                  d = { fb: d.fb, Nb: d.Nb }, f = e.next()
                )
                  (f = _.G(f.value)),
                    (d.fb = f.next().value),
                    (d.Nb = f.next().value),
                    ((L = null !== (b = a.location.hash) && void 0 !== b ? b : ''),
                    _.B(L, 'includes')).call(L, 'gam' + d.fb + 'Demo') &&
                      Hc(
                        789,
                        (function (g) {
                          return function () {
                            window.console &&
                              window.console.warn &&
                              window.console.warn('GPT - Demo ' + g.fb + ' ENABLED');
                            var h = Ic('/' + c + '/example/' + g.fb.toLowerCase(), g.Nb);
                            h &&
                              (Jc(h).addService(wc().pubads()),
                              Kc(
                                a.document,
                                J(790, function () {
                                  wc().enableServices();
                                  wc().display(Jc(h));
                                })
                              ));
                          };
                        })(d)
                      );
            }
          };
          Mc = function (a) {
            var b = 0;
            return function () {
              return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
          };
          Nc =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (a, b, c) {
                  if (a == Array.prototype || a == Object.prototype) return a;
                  a[b] = c.value;
                  return a;
                };
          Oc = function (a) {
            a = [
              'object' == typeof globalThis && globalThis,
              a,
              'object' == typeof window && window,
              'object' == typeof self && self,
              'object' == typeof global && global,
            ];
            for (var b = 0; b < a.length; ++b) {
              var c = a[b];
              if (c && c.Math == Math) return c;
            }
            throw Error('Cannot find global object');
          };
          Pc = Oc(this);
          Qc = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
          x = {};
          Rc = {};
          _.B = function (a, b) {
            var c = Rc[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b];
          };
          Sc = function (a, b, c) {
            if (b)
              a: {
                var d = a.split('.');
                a = 1 === d.length;
                var e = d[0],
                  f;
                !a && e in x ? (f = x) : (f = Pc);
                for (e = 0; e < d.length - 1; e++) {
                  var g = d[e];
                  if (!(g in f)) break a;
                  f = f[g];
                }
                d = d[d.length - 1];
                c = Qc && 'es6' === c ? f[d] : null;
                b = b(c);
                null != b &&
                  (a
                    ? Nc(x, d, { configurable: !0, writable: !0, value: b })
                    : b !== c &&
                      ((Rc[d] = Qc ? Pc.Symbol(d) : '$jscp$' + d),
                      (d = Rc[d]),
                      Nc(f, d, { configurable: !0, writable: !0, value: b })));
              }
          };
          Sc(
            'Symbol',
            function (a) {
              if (a) return a;
              var b = function (e, f) {
                this.j = e;
                Nc(this, 'description', { configurable: !0, writable: !0, value: f });
              };
              b.prototype.toString = function () {
                return this.j;
              };
              var c = 0,
                d = function (e) {
                  if (this instanceof d) throw new TypeError('Symbol is not a constructor');
                  return new b('jscomp_symbol_' + (e || '') + '_' + c++, e);
                };
              return d;
            },
            'es6'
          );
          Sc(
            'Symbol.iterator',
            function (a) {
              if (a) return a;
              a = (0, x.Symbol)('Symbol.iterator');
              for (
                var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
                    ' '
                  ),
                  c = 0;
                c < b.length;
                c++
              ) {
                var d = Pc[b[c]];
                'function' === typeof d &&
                  'function' != typeof d.prototype[a] &&
                  Nc(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                      return Tc(Mc(this));
                    },
                  });
              }
              return a;
            },
            'es6'
          );
          Tc = function (a) {
            a = { next: a };
            a[_.B(x.Symbol, 'iterator')] = function () {
              return this;
            };
            return a;
          };
          Uc = function (a) {
            return (a.raw = a);
          };
          _.G = function (a) {
            var b =
              'undefined' != typeof x.Symbol &&
              _.B(x.Symbol, 'iterator') &&
              a[_.B(x.Symbol, 'iterator')];
            return b ? b.call(a) : { next: Mc(a) };
          };
          Rb = function (a) {
            for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
            return c;
          };
          _.Ub = function (a) {
            return a instanceof Array ? a : Rb(_.G(a));
          };
          Vc =
            'function' == typeof Object.create
              ? Object.create
              : function (a) {
                  var b = function () {};
                  b.prototype = a;
                  return new b();
                };
          if (Qc && 'function' == typeof _.B(Object, 'setPrototypeOf'))
            Wc = _.B(Object, 'setPrototypeOf');
          else {
            var Xc;
            a: {
              var Yc = { a: !0 },
                Zc = {};
              try {
                Zc.__proto__ = Yc;
                Xc = Zc.a;
                break a;
              } catch (a) {}
              Xc = !1;
            }
            Wc = Xc
              ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                  return a;
                }
              : null;
          }
          $c = Wc;
          _.M = function (a, b) {
            a.prototype = Vc(b.prototype);
            a.prototype.constructor = a;
            if ($c) $c(a, b);
            else
              for (var c in b)
                if ('prototype' != c)
                  if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d);
                  } else a[c] = b[c];
            a.Ld = b.prototype;
          };
          ad = function () {
            this.m = !1;
            this.B = null;
            this.l = void 0;
            this.j = 1;
            this.D = this.A = 0;
            this.o = null;
          };
          bd = function (a) {
            if (a.m) throw new TypeError('Generator is already running');
            a.m = !0;
          };
          ad.prototype.C = function (a) {
            this.l = a;
          };
          var cd = function (a, b) {
            a.o = { xc: b, nd: !0 };
            a.j = a.A || a.D;
          };
          ad.prototype.return = function (a) {
            this.o = { return: a };
            this.j = this.D;
          };
          var cb = function (a, b, c) {
              a.j = c;
              return { value: b };
            },
            eb = function (a, b) {
              a.j = b;
              a.A = 0;
            },
            fb = function (a) {
              a.A = 0;
              var b = a.o.xc;
              a.o = null;
              return b;
            },
            dd = function (a) {
              this.j = new ad();
              this.l = a;
            },
            hd = function (a, b) {
              bd(a.j);
              var c = a.j.B;
              if (c)
                return fd(
                  a,
                  'return' in c
                    ? c['return']
                    : function (d) {
                        return { value: d, done: !0 };
                      },
                  b,
                  a.j.return
                );
              a.j.return(b);
              return gd(a);
            },
            fd = function (a, b, c, d) {
              try {
                var e = b.call(a.j.B, c);
                if (!(e instanceof Object))
                  throw new TypeError('Iterator result ' + e + ' is not an object');
                if (!e.done) return (a.j.m = !1), e;
                var f = e.value;
              } catch (g) {
                return (a.j.B = null), cd(a.j, g), gd(a);
              }
              a.j.B = null;
              d.call(a.j, f);
              return gd(a);
            },
            gd = function (a) {
              for (; a.j.j; )
                try {
                  var b = a.l(a.j);
                  if (b) return (a.j.m = !1), { value: b.value, done: !1 };
                } catch (c) {
                  (a.j.l = void 0), cd(a.j, c);
                }
              a.j.m = !1;
              if (a.j.o) {
                b = a.j.o;
                a.j.o = null;
                if (b.nd) throw b.xc;
                return { value: b.return, done: !0 };
              }
              return { value: void 0, done: !0 };
            },
            id = function (a) {
              this.next = function (b) {
                bd(a.j);
                a.j.B ? (b = fd(a, a.j.B.next, b, a.j.C)) : (a.j.C(b), (b = gd(a)));
                return b;
              };
              this.throw = function (b) {
                bd(a.j);
                a.j.B ? (b = fd(a, a.j.B['throw'], b, a.j.C)) : (cd(a.j, b), (b = gd(a)));
                return b;
              };
              this.return = function (b) {
                return hd(a, b);
              };
              this[_.B(x.Symbol, 'iterator')] = function () {
                return this;
              };
            },
            ab = function (a, b) {
              b = new id(new dd(b));
              $c && a.prototype && $c(b, a.prototype);
              return b;
            },
            jd = function (a) {
              function b (d) {
                return a.next(d);
              }
              function c (d) {
                return a.throw(d);
              }
              return new x.Promise(function (d, e) {
                function f (g) {
                  g.done ? d(g.value) : x.Promise.resolve(g.value).then(b, c).then(f, e);
                }
                f(a.next());
              });
            },
            kd = function (a) {
              return jd(new id(new dd(a)));
            };
          Sc(
            'Reflect.setPrototypeOf',
            function (a) {
              return a
                ? a
                : $c
                ? function (b, c) {
                    try {
                      return $c(b, c), !0;
                    } catch (d) {
                      return !1;
                    }
                  }
                : null;
            },
            'es6'
          );
          Sc(
            'Promise',
            function (a) {
              function b () {
                this.j = null;
              }
              function c (g) {
                return g instanceof e
                  ? g
                  : new e(function (h) {
                      h(g);
                    });
              }
              if (a) return a;
              b.prototype.l = function (g) {
                if (null == this.j) {
                  this.j = [];
                  var h = this;
                  this.B(function () {
                    h.m();
                  });
                }
                this.j.push(g);
              };
              var d = Pc.setTimeout;
              b.prototype.B = function (g) {
                d(g, 0);
              };
              b.prototype.m = function () {
                for (; this.j && this.j.length; ) {
                  var g = this.j;
                  this.j = [];
                  for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                      k();
                    } catch (l) {
                      this.o(l);
                    }
                  }
                }
                this.j = null;
              };
              b.prototype.o = function (g) {
                this.B(function () {
                  throw g;
                });
              };
              var e = function (g) {
                this.l = 0;
                this.B = void 0;
                this.j = [];
                this.C = !1;
                var h = this.o();
                try {
                  g(h.resolve, h.reject);
                } catch (k) {
                  h.reject(k);
                }
              };
              e.prototype.o = function () {
                function g (l) {
                  return function (m) {
                    k || ((k = !0), l.call(h, m));
                  };
                }
                var h = this,
                  k = !1;
                return { resolve: g(this.J), reject: g(this.m) };
              };
              e.prototype.J = function (g) {
                if (g === this) this.m(new TypeError('A Promise cannot resolve to itself'));
                else if (g instanceof e) this.N(g);
                else {
                  a: switch (typeof g) {
                    case 'object':
                      var h = null != g;
                      break a;
                    case 'function':
                      h = !0;
                      break a;
                    default:
                      h = !1;
                  }
                  h ? this.I(g) : this.A(g);
                }
              };
              e.prototype.I = function (g) {
                var h = void 0;
                try {
                  h = g.then;
                } catch (k) {
                  this.m(k);
                  return;
                }
                'function' == typeof h ? this.R(h, g) : this.A(g);
              };
              e.prototype.m = function (g) {
                this.D(2, g);
              };
              e.prototype.A = function (g) {
                this.D(1, g);
              };
              e.prototype.D = function (g, h) {
                if (0 != this.l)
                  throw Error(
                    'Cannot settle(' +
                      g +
                      ', ' +
                      h +
                      '): Promise already settled in state' +
                      this.l
                  );
                this.l = g;
                this.B = h;
                2 === this.l && this.L();
                this.H();
              };
              e.prototype.L = function () {
                var g = this;
                d(function () {
                  if (g.V()) {
                    var h = Pc.console;
                    'undefined' !== typeof h && h.error(g.B);
                  }
                }, 1);
              };
              e.prototype.V = function () {
                if (this.C) return !1;
                var g = Pc.CustomEvent,
                  h = Pc.Event,
                  k = Pc.dispatchEvent;
                if ('undefined' === typeof k) return !0;
                'function' === typeof g
                  ? (g = new g('unhandledrejection', { cancelable: !0 }))
                  : 'function' === typeof h
                  ? (g = new h('unhandledrejection', { cancelable: !0 }))
                  : ((g = Pc.document.createEvent('CustomEvent')),
                    g.initCustomEvent('unhandledrejection', !1, !0, g));
                g.promise = this;
                g.reason = this.B;
                return k(g);
              };
              e.prototype.H = function () {
                if (null != this.j) {
                  for (var g = 0; g < this.j.length; ++g) f.l(this.j[g]);
                  this.j = null;
                }
              };
              var f = new b();
              e.prototype.N = function (g) {
                var h = this.o();
                g.Eb(h.resolve, h.reject);
              };
              e.prototype.R = function (g, h) {
                var k = this.o();
                try {
                  g.call(h, k.resolve, k.reject);
                } catch (l) {
                  k.reject(l);
                }
              };
              e.prototype.then = function (g, h) {
                function k (p, u) {
                  return 'function' == typeof p
                    ? function (A) {
                        try {
                          l(p(A));
                        } catch (z) {
                          m(z);
                        }
                      }
                    : u;
                }
                var l,
                  m,
                  n = new e(function (p, u) {
                    l = p;
                    m = u;
                  });
                this.Eb(k(g, l), k(h, m));
                return n;
              };
              e.prototype.catch = function (g) {
                return this.then(void 0, g);
              };
              e.prototype.Eb = function (g, h) {
                function k () {
                  switch (l.l) {
                    case 1:
                      g(l.B);
                      break;
                    case 2:
                      h(l.B);
                      break;
                    default:
                      throw Error('Unexpected state: ' + l.l);
                  }
                }
                var l = this;
                null == this.j ? f.l(k) : this.j.push(k);
                this.C = !0;
              };
              e.resolve = c;
              e.reject = function (g) {
                return new e(function (h, k) {
                  k(g);
                });
              };
              e.race = function (g) {
                return new e(function (h, k) {
                  for (var l = _.G(g), m = l.next(); !m.done; m = l.next()) c(m.value).Eb(h, k);
                });
              };
              e.all = function (g) {
                var h = _.G(g),
                  k = h.next();
                return k.done
                  ? c([])
                  : new e(function (l, m) {
                      function n (A) {
                        return function (z) {
                          p[A] = z;
                          u--;
                          0 == u && l(p);
                        };
                      }
                      var p = [],
                        u = 0;
                      do p.push(void 0), u++, c(k.value).Eb(n(p.length - 1), m), (k = h.next());
                      while (!k.done);
                    });
              };
              return e;
            },
            'es6'
          );
          Sc(
            'Object.setPrototypeOf',
            function (a) {
              return a || $c;
            },
            'es6'
          );
          var ld = function (a, b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            },
            md =
              Qc && 'function' == typeof _.B(Object, 'assign')
                ? _.B(Object, 'assign')
                : function (a, b) {
                    for (var c = 1; c < arguments.length; c++) {
                      var d = arguments[c];
                      if (d) for (var e in d) ld(d, e) && (a[e] = d[e]);
                    }
                    return a;
                  };
          Sc(
            'Object.assign',
            function (a) {
              return a || md;
            },
            'es6'
          );
          var nd = function (a, b, c) {
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
          Sc(
            'String.prototype.endsWith',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = nd(this, b, 'endsWith');
                    void 0 === c && (c = d.length);
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
                    return 0 >= e;
                  };
            },
            'es6'
          );
          var od = function (a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
              var f = a[e];
              if (b.call(c, f, e, a)) return { i: e, Tc: f };
            }
            return { i: -1, Tc: void 0 };
          };
          Sc(
            'Array.prototype.find',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return od(this, b, c).Tc;
                  };
            },
            'es6'
          );
          Sc(
            'String.prototype.startsWith',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = nd(this, b, 'startsWith'),
                      e = d.length,
                      f = b.length;
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
                    return g >= f;
                  };
            },
            'es6'
          );
          var pd = function (a, b) {
            a instanceof String && (a += '');
            var c = 0,
              d = !1,
              e = {
                next: function () {
                  if (!d && c < a.length) {
                    var f = c++;
                    return { value: b(f, a[f]), done: !1 };
                  }
                  d = !0;
                  return { done: !0, value: void 0 };
                },
              };
            e[_.B(x.Symbol, 'iterator')] = function () {
              return e;
            };
            return e;
          };
          Sc(
            'Array.prototype.entries',
            function (a) {
              return a
                ? a
                : function () {
                    return pd(this, function (b, c) {
                      return [b, c];
                    });
                  };
            },
            'es6'
          );
          Sc(
            'Array.prototype.keys',
            function (a) {
              return a
                ? a
                : function () {
                    return pd(this, function (b) {
                      return b;
                    });
                  };
            },
            'es6'
          );
          Sc(
            'Array.prototype.values',
            function (a) {
              return a
                ? a
                : function () {
                    return pd(this, function (b, c) {
                      return c;
                    });
                  };
            },
            'es8'
          );
          Sc(
            'Array.prototype.findIndex',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return od(this, b, c).i;
                  };
            },
            'es6'
          );
          Sc(
            'Object.is',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                  };
            },
            'es6'
          );
          Sc(
            'Array.prototype.includes',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = this;
                    d instanceof String && (d = String(d));
                    var e = d.length;
                    c = c || 0;
                    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                      var f = d[c];
                      if (f === b || _.B(Object, 'is').call(Object, f, b)) return !0;
                    }
                    return !1;
                  };
            },
            'es7'
          );
          Sc(
            'String.prototype.includes',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return -1 !== nd(this, b, 'includes').indexOf(b, c || 0);
                  };
            },
            'es6'
          );
          Sc(
            'Object.entries',
            function (a) {
              return a
                ? a
                : function (b) {
                    var c = [],
                      d;
                    for (d in b) ld(b, d) && c.push([d, b[d]]);
                    return c;
                  };
            },
            'es8'
          );
          Sc(
            'WeakMap',
            function (a) {
              function b () {}
              function c (g) {
                var h = typeof g;
                return ('object' === h && null !== g) || 'function' === h;
              }
              if (
                (function () {
                  if (!a || !Object.seal) return !1;
                  try {
                    var g = Object.seal({}),
                      h = Object.seal({}),
                      k = new a([
                        [g, 2],
                        [h, 3],
                      ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h);
                  } catch (l) {
                    return !1;
                  }
                })()
              )
                return a;
              var d = '$jscomp_hidden_' + Math.random(),
                e = 0,
                f = function (g) {
                  this.j = (e += Math.random() + 1).toString();
                  if (g) {
                    g = _.G(g);
                    for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
                  }
                };
              f.prototype.set = function (g, h) {
                if (!c(g)) throw Error('Invalid WeakMap key');
                if (!ld(g, d)) {
                  var k = new b();
                  Nc(g, d, { value: k });
                }
                if (!ld(g, d)) throw Error('WeakMap key fail: ' + g);
                g[d][this.j] = h;
                return this;
              };
              f.prototype.get = function (g) {
                return c(g) && ld(g, d) ? g[d][this.j] : void 0;
              };
              f.prototype.has = function (g) {
                return c(g) && ld(g, d) && ld(g[d], this.j);
              };
              f.prototype.delete = function (g) {
                return c(g) && ld(g, d) && ld(g[d], this.j) ? delete g[d][this.j] : !1;
              };
              return f;
            },
            'es6'
          );
          Sc(
            'Map',
            function (a) {
              if (
                (function () {
                  if (
                    !a ||
                    'function' != typeof a ||
                    !_.B(a.prototype, 'entries') ||
                    'function' != typeof Object.seal
                  )
                    return !1;
                  try {
                    var h = Object.seal({ x: 4 }),
                      k = new a(_.G([[h, 's']]));
                    if (
                      's' != k.get(h) ||
                      1 != k.size ||
                      k.get({ x: 4 }) ||
                      k.set({ x: 4 }, 't') != k ||
                      2 != k.size
                    )
                      return !1;
                    var l = _.B(k, 'entries').call(k),
                      m = l.next();
                    if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || 't' != m.value[1] || !l.next().done
                      ? !1
                      : !0;
                  } catch (n) {
                    return !1;
                  }
                })()
              )
                return a;
              var b = new x.WeakMap(),
                c = function (h) {
                  this.l = {};
                  this.j = f();
                  this.size = 0;
                  if (h) {
                    h = _.G(h);
                    for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
                  }
                };
              c.prototype.set = function (h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.l[l.id] = []);
                l.na
                  ? (l.na.value = k)
                  : ((l.na = { next: this.j, Ia: this.j.Ia, head: this.j, key: h, value: k }),
                    l.list.push(l.na),
                    (this.j.Ia.next = l.na),
                    (this.j.Ia = l.na),
                    this.size++);
                return this;
              };
              c.prototype.delete = function (h) {
                h = d(this, h);
                return h.na && h.list
                  ? (h.list.splice(h.index, 1),
                    h.list.length || delete this.l[h.id],
                    (h.na.Ia.next = h.na.next),
                    (h.na.next.Ia = h.na.Ia),
                    (h.na.head = null),
                    this.size--,
                    !0)
                  : !1;
              };
              c.prototype.clear = function () {
                this.l = {};
                this.j = this.j.Ia = f();
                this.size = 0;
              };
              c.prototype.has = function (h) {
                return !!d(this, h).na;
              };
              c.prototype.get = function (h) {
                return (h = d(this, h).na) && h.value;
              };
              c.prototype.entries = function () {
                return e(this, function (h) {
                  return [h.key, h.value];
                });
              };
              c.prototype.keys = function () {
                return e(this, function (h) {
                  return h.key;
                });
              };
              c.prototype.values = function () {
                return e(this, function (h) {
                  return h.value;
                });
              };
              c.prototype.forEach = function (h, k) {
                for (var l = _.B(this, 'entries').call(this), m; !(m = l.next()).done; )
                  (m = m.value), h.call(k, m[1], m[0], this);
              };
              c.prototype[_.B(x.Symbol, 'iterator')] = _.B(c.prototype, 'entries');
              var d = function (h, k) {
                  var l = k && typeof k;
                  'object' == l || 'function' == l
                    ? b.has(k)
                      ? (l = b.get(k))
                      : ((l = '' + ++g), b.set(k, l))
                    : (l = 'p_' + k);
                  var m = h.l[l];
                  if (m && ld(h.l, l))
                    for (h = 0; h < m.length; h++) {
                      var n = m[h];
                      if ((k !== k && n.key !== n.key) || k === n.key)
                        return { id: l, list: m, index: h, na: n };
                    }
                  return { id: l, list: m, index: -1, na: void 0 };
                },
                e = function (h, k) {
                  var l = h.j;
                  return Tc(function () {
                    if (l) {
                      for (; l.head != h.j; ) l = l.Ia;
                      for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
                      l = null;
                    }
                    return { done: !0, value: void 0 };
                  });
                },
                f = function () {
                  var h = {};
                  return (h.Ia = h.next = h.head = h);
                },
                g = 0;
              return c;
            },
            'es6'
          );
          Sc(
            'Set',
            function (a) {
              if (
                (function () {
                  if (
                    !a ||
                    'function' != typeof a ||
                    !_.B(a.prototype, 'entries') ||
                    'function' != typeof Object.seal
                  )
                    return !1;
                  try {
                    var c = Object.seal({ x: 4 }),
                      d = new a(_.G([c]));
                    if (
                      !d.has(c) ||
                      1 != d.size ||
                      d.add(c) != d ||
                      1 != d.size ||
                      d.add({ x: 4 }) != d ||
                      2 != d.size
                    )
                      return !1;
                    var e = _.B(d, 'entries').call(d),
                      f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done ||
                      f.value[0] == c ||
                      4 != f.value[0].x ||
                      f.value[1] != f.value[0]
                      ? !1
                      : e.next().done;
                  } catch (g) {
                    return !1;
                  }
                })()
              )
                return a;
              var b = function (c) {
                this.j = new x.Map();
                if (c) {
                  c = _.G(c);
                  for (var d; !(d = c.next()).done; ) this.add(d.value);
                }
                this.size = this.j.size;
              };
              b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.j.set(c, c);
                this.size = this.j.size;
                return this;
              };
              b.prototype.delete = function (c) {
                c = this.j.delete(c);
                this.size = this.j.size;
                return c;
              };
              b.prototype.clear = function () {
                this.j.clear();
                this.size = 0;
              };
              b.prototype.has = function (c) {
                return this.j.has(c);
              };
              b.prototype.entries = function () {
                return _.B(this.j, 'entries').call(this.j);
              };
              b.prototype.values = function () {
                return _.B(this.j, 'values').call(this.j);
              };
              b.prototype.keys = _.B(b.prototype, 'values');
              b.prototype[_.B(x.Symbol, 'iterator')] = _.B(b.prototype, 'values');
              b.prototype.forEach = function (c, d) {
                var e = this;
                this.j.forEach(function (f) {
                  return c.call(d, f, f, e);
                });
              };
              return b;
            },
            'es6'
          );
          Sc(
            'Number.isFinite',
            function (a) {
              return a
                ? a
                : function (b) {
                    return 'number' !== typeof b
                      ? !1
                      : !isNaN(b) && Infinity !== b && -Infinity !== b;
                  };
            },
            'es6'
          );
          Sc(
            'Number.isInteger',
            function (a) {
              return a
                ? a
                : function (b) {
                    return _.B(Number, 'isFinite').call(Number, b) ? b === Math.floor(b) : !1;
                  };
            },
            'es6'
          );
          Sc(
            'Array.from',
            function (a) {
              return a
                ? a
                : function (b, c, d) {
                    c =
                      null != c
                        ? c
                        : function (h) {
                            return h;
                          };
                    var e = [],
                      f =
                        'undefined' != typeof x.Symbol &&
                        _.B(x.Symbol, 'iterator') &&
                        b[_.B(x.Symbol, 'iterator')];
                    if ('function' == typeof f) {
                      b = f.call(b);
                      for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
                    } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
                    return e;
                  };
            },
            'es6'
          );
          Sc(
            'Promise.allSettled',
            function (a) {
              function b (d) {
                return { status: 'fulfilled', value: d };
              }
              function c (d) {
                return { status: 'rejected', reason: d };
              }
              return a
                ? a
                : function (d) {
                    var e = this;
                    d = _.B(Array, 'from').call(Array, d, function (f) {
                      return e.resolve(f).then(b, c);
                    });
                    return e.all(d);
                  };
            },
            'es_2020'
          );
          _.H = this || self;
          sd = function (a) {
            if (a && a != _.H) return qd(a.document);
            null === rd && (rd = qd(_.H.document));
            return rd;
          };
          td = /^[\w+/_-]+[=]{0,2}$/;
          rd = null;
          qd = function (a) {
            return (a = a.querySelector && a.querySelector('script[nonce]')) &&
              (a = a.nonce || a.getAttribute('nonce')) &&
              td.test(a)
              ? a
              : '';
          };
          _.ud = function () {};
          vd = function (a) {
            a.$a = void 0;
            a.F = function () {
              return a.$a ? a.$a : (a.$a = new a());
            };
          };
          wd = function (a) {
            var b = typeof a;
            b = 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
            return 'array' == b || ('object' == b && 'number' == typeof a.length);
          };
          _.ha = function (a) {
            var b = typeof a;
            return ('object' == b && null != a) || 'function' == b;
          };
          ia = function (a) {
            return (Object.prototype.hasOwnProperty.call(a, xd) && a[xd]) || (a[xd] = ++yd);
          };
          xd = 'closure_uid_' + ((1000000000 * Math.random()) >>> 0);
          yd = 0;
          zd = function (a, b, c) {
            return a.call.apply(a.bind, arguments);
          };
          Ad = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
              var d = Array.prototype.slice.call(arguments, 2);
              return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
              };
            }
            return function () {
              return a.apply(b, arguments);
            };
          };
          _.Bd = function (a, b, c) {
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf('native code')
              ? (_.Bd = zd)
              : (_.Bd = Ad);
            return _.Bd.apply(null, arguments);
          };
          _.Cd = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
              var d = c.slice();
              d.push.apply(d, arguments);
              return a.apply(this, d);
            };
          };
          Dd = function () {
            return Date.now();
          };
          Ed = function (a, b) {
            function c () {}
            c.prototype = b.prototype;
            a.Ld = b.prototype;
            a.prototype = new c();
            a.prototype.constructor = a;
            a.Ge = function (d, e, f) {
              for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
              return b.prototype[e].apply(d, g);
            };
          };
          var $a = function (a, b) {
            var c = void 0;
            return new (c || (c = x.Promise))(function (d, e) {
              function f (k) {
                try {
                  h(b.next(k));
                } catch (l) {
                  e(l);
                }
              }
              function g (k) {
                try {
                  h(b['throw'](k));
                } catch (l) {
                  e(l);
                }
              }
              function h (k) {
                k.done
                  ? d(k.value)
                  : new c(function (l) {
                      l(k.value);
                    }).then(f, g);
              }
              h((b = b.apply(a, void 0)).next());
            });
          };
          var Fd;
          var Hd;
          _.Gd = function (a, b) {
            Array.prototype.forEach.call(a, b, void 0);
          };
          _.Db = function (a, b) {
            return Array.prototype.filter.call(a, b, void 0);
          };
          _.Bb = function (a, b) {
            return Array.prototype.map.call(a, b, void 0);
          };
          Hd = function (a, b) {
            return Array.prototype.reduce.call(a, b, 0);
          };
          _.Id = function (a, b) {
            return Array.prototype.some.call(a, b, void 0);
          };
          var Jd, Kd, Sa, Md, Nd;
          Jd = function () {
            return !0;
          };
          Kd = function () {
            return null;
          };
          Sa = function (a) {
            var b = !1,
              c;
            return function () {
              b || ((c = a()), (b = !0));
              return c;
            };
          };
          _.Ld = function (a) {
            var b = a;
            return function () {
              if (b) {
                var c = b;
                b = null;
                c();
              }
            };
          };
          Md = function (a, b, c) {
            var d = 0,
              e = !1,
              f = [],
              g = function () {
                d = 0;
                e && ((e = !1), h());
              },
              h = function () {
                d = _.H.setTimeout(g, b);
                a.apply(c, f);
              };
            return function (k) {
              f = arguments;
              d ? (e = !0) : h();
            };
          };
          Nd = function (a) {
            return 'function' === typeof a;
          };
          var Od = function (a, b) {
              for (var c in a) b.call(void 0, a[c], c, a);
            },
            Pd = function (a, b) {
              return null !== a && b in a;
            },
            Qd = function (a, b) {
              for (var c in a) if (b.call(void 0, a[c], c, a)) return c;
            },
            Rd = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
              ' '
            ),
            Sd = function (a, b) {
              for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Rd.length; f++)
                  (c = Rd[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
              }
            },
            Td = function (a) {
              var b = arguments.length;
              if (1 == b && Array.isArray(arguments[0])) return Td.apply(null, arguments[0]);
              for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
              return c;
            };
          var Wd = function (a, b) {
            this.j = (a === Ud && b) || '';
            this.l = Vd;
          };
          Wd.prototype.qb = !0;
          Wd.prototype.pb = function () {
            return this.j;
          };
          var Xd = function (a) {
              return a instanceof Wd && a.constructor === Wd && a.l === Vd
                ? a.j
                : 'type_error:Const';
            },
            Yd = function (a) {
              return new Wd(Ud, a);
            },
            Vd = {},
            Ud = {};
          var $d = function (a, b) {
            this.j = b === Zd ? a : '';
          };
          $d.prototype.qb = !0;
          $d.prototype.pb = function () {
            return this.j.toString();
          };
          var de = function (a, b) {
              a = ae.exec(Xa(a).toString());
              var c = a[3] || '';
              return be(a[1] + ce('?', a[2] || '', b) + ce('#', c, void 0));
            },
            Xa = function (a) {
              return a instanceof $d && a.constructor === $d
                ? a.j
                : 'type_error:TrustedResourceUrl';
            },
            hb = function (a, b) {
              var c = Xd(a);
              if (!ee.test(c)) throw Error('Invalid TrustedResourceUrl format: ' + c);
              a = c.replace(fe, function (d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e))
                  throw Error(
                    'Found marker, "' +
                      e +
                      '", in format string, "' +
                      c +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(b)
                  );
                d = b[e];
                return d instanceof Wd ? Xd(d) : encodeURIComponent(String(d));
              });
              return be(a);
            },
            fe = /%{(\w+)}/g,
            ee = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            ae = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
            Zd = {},
            be = function (a) {
              return new $d(a, Zd);
            },
            ce = function (a, b, c) {
              if (null == c) return b;
              if ('string' === typeof c) return c ? a + encodeURIComponent(c) : '';
              for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                  var e = c[d];
                  e = Array.isArray(e) ? e : [e];
                  for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g &&
                      (b || (b = a),
                      (b +=
                        (b.length > a.length ? '&' : '') +
                        encodeURIComponent(d) +
                        '=' +
                        encodeURIComponent(String(g))));
                  }
                }
              return b;
            };
          var he = function (a, b) {
              var c = a.length - b.length;
              return 0 <= c && a.indexOf(b, c) == c;
            },
            ie = function (a) {
              return /^[\s\xa0]*$/.test(a);
            },
            je = function (a) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
            },
            ke = /&/g,
            le = /</g,
            me = />/g,
            ne = /"/g,
            oe = /'/g,
            pe = /\x00/g,
            qe = /[\x00&<>"']/,
            se = function (a, b) {
              var c = 0;
              a = je(String(a)).split('.');
              b = je(String(b)).split('.');
              for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || '',
                  g = b[e] || '';
                do {
                  f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                  g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
                  if (0 == f[0].length && 0 == g[0].length) break;
                  c =
                    re(
                      0 == f[1].length ? 0 : parseInt(f[1], 10),
                      0 == g[1].length ? 0 : parseInt(g[1], 10)
                    ) ||
                    re(0 == f[2].length, 0 == g[2].length) ||
                    re(f[2], g[2]);
                  f = f[3];
                  g = g[3];
                } while (0 == c);
              }
              return c;
            },
            re = function (a, b) {
              return a < b ? -1 : a > b ? 1 : 0;
            };
          var we, te;
          _.ue = function (a, b) {
            this.j = b === te ? a : '';
          };
          _.ue.prototype.qb = !0;
          _.ue.prototype.pb = function () {
            return this.j.toString();
          };
          _.ve = function (a) {
            return a instanceof _.ue && a.constructor === _.ue ? a.j : 'type_error:SafeUrl';
          };
          we = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
          _.xe = function (a) {
            if (a instanceof _.ue) return a;
            a = 'object' == typeof a && a.qb ? a.pb() : String(a);
            we.test(a) || (a = 'about:invalid#zClosurez');
            return new _.ue(a, te);
          };
          te = {};
          var ye;
          a: {
            var ze = _.H.navigator;
            if (ze) {
              var Ae = ze.userAgent;
              if (Ae) {
                ye = Ae;
                break a;
              }
            }
            ye = '';
          }
          var N = function (a) {
              return -1 != ye.indexOf(a);
            },
            Be = function (a) {
              for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; (d = b.exec(a)); )
                c.push([d[1], d[2], d[3] || void 0]);
              return c;
            };
          var Ce = function () {
              return N('Trident') || N('MSIE');
            },
            De = function () {
              return N('Firefox') || N('FxiOS');
            },
            Fe = function () {
              return (
                N('Safari') &&
                !(
                  Ee() ||
                  N('Coast') ||
                  N('Opera') ||
                  N('Edge') ||
                  N('Edg/') ||
                  N('OPR') ||
                  De() ||
                  N('Silk') ||
                  N('Android')
                )
              );
            },
            Ee = function () {
              return (N('Chrome') || N('CriOS')) && !N('Edge');
            },
            He = function () {
              function a (e) {
                e = ba(e, d);
                return c[e] || '';
              }
              var b = ye;
              if (Ce()) return Ge(b);
              b = Be(b);
              var c = {};
              _.Gd(b, function (e) {
                c[e[0]] = e[1];
              });
              var d = _.Cd(Pd, c);
              return N('Opera')
                ? a(['Version', 'Opera'])
                : N('Edge')
                ? a(['Edge'])
                : N('Edg/')
                ? a(['Edg'])
                : Ee()
                ? a(['Chrome', 'CriOS', 'HeadlessChrome'])
                : ((b = b[2]) && b[1]) || '';
            },
            Ge = function (a) {
              var b = /rv: *([\d\.]*)/.exec(a);
              if (b && b[1]) return b[1];
              b = '';
              var c = /MSIE +([\d\.]+)/.exec(a);
              if (c && c[1])
                if (((a = /Trident\/(\d.\d)/.exec(a)), '7.0' == c[1]))
                  if (a && a[1])
                    switch (a[1]) {
                      case '4.0':
                        b = '8.0';
                        break;
                      case '5.0':
                        b = '9.0';
                        break;
                      case '6.0':
                        b = '10.0';
                        break;
                      case '7.0':
                        b = '11.0';
                    }
                  else b = '7.0';
                else b = c[1];
              return b;
            };
          var Le;
          _.Je = function (a, b, c) {
            this.j = c === _.Ie ? a : '';
          };
          _.Je.prototype.qb = !0;
          _.Je.prototype.pb = function () {
            return this.j.toString();
          };
          _.Ke = function (a) {
            return a instanceof _.Je && a.constructor === _.Je ? a.j : 'type_error:SafeHtml';
          };
          _.Ie = {};
          Le = new _.Je((_.H.trustedTypes && _.H.trustedTypes.emptyHTML) || '', 0, _.Ie);
          var Ya;
          _.Me = Sa(function () {
            var a = document.createElement('div'),
              b = document.createElement('div');
            b.appendChild(document.createElement('div'));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = _.Ke(Le);
            return !b.parentElement;
          });
          Ya = function (a) {
            var b = sd(a.ownerDocument && a.ownerDocument.defaultView);
            b && a.setAttribute('nonce', b);
          };
          var Ne, Oe, Pe, Qe, Re, Te;
          Ne = function (a) {
            qe.test(a) &&
              (-1 != a.indexOf('&') && (a = a.replace(ke, '&amp;')),
              -1 != a.indexOf('<') && (a = a.replace(le, '&lt;')),
              -1 != a.indexOf('>') && (a = a.replace(me, '&gt;')),
              -1 != a.indexOf('"') && (a = a.replace(ne, '&quot;')),
              -1 != a.indexOf("'") && (a = a.replace(oe, '&#39;')),
              -1 != a.indexOf('\0') && (a = a.replace(pe, '&#0;')));
            return a;
          };
          Oe = String.prototype.repeat
            ? function (a, b) {
                return a.repeat(b);
              }
            : function (a, b) {
                return Array(b + 1).join(a);
              };
          Pe = function (a) {
            a = String(a);
            var b = a.indexOf('.');
            -1 == b && (b = a.length);
            return Oe('0', Math.max(0, 2 - b)) + a;
          };
          Qe = function () {
            return (
              Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(Math.floor(2147483648 * Math.random()) ^ Dd()).toString(36)
            );
          };
          Re = (2147483648 * Math.random()) | 0;
          _.Se = function (a) {
            return String(a).replace(/\-([a-z])/g, function (b, c) {
              return c.toUpperCase();
            });
          };
          Te = function (a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
              return c + d.toUpperCase();
            });
          };
          var qa = 0,
            ra = 0;
          var Ue = function () {
            this.j = [];
          };
          Ue.prototype.length = function () {
            return this.j.length;
          };
          var Ve = function (a) {
              var b = a.j;
              a.j = [];
              return b;
            },
            We = function (a) {
              for (var b = qa, c = ra; 0 < c || 127 < b; )
                a.j.push((b & 127) | 128), (b = ((b >>> 7) | (c << 25)) >>> 0), (c >>>= 7);
              a.j.push(b);
            },
            Xe = function (a, b) {
              for (; 127 < b; ) a.j.push((b & 127) | 128), (b >>>= 7);
              a.j.push(b);
            };
          var Ye = function () {
            return N('iPhone') && !N('iPod') && !N('iPad');
          };
          var Ze = function (a) {
            Ze[' '](a);
            return a;
          };
          Ze[' '] = _.ud;
          var $e = function (a, b) {
              try {
                return Ze(a[b]), !0;
              } catch (c) {}
              return !1;
            },
            Tb = function (a, b, c, d) {
              d = d ? d(b) : b;
              return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : (a[d] = c(b));
            };
          var af, cf, df, ef, ff, gf, hf, jf, kf, lf, mf, nf;
          af = N('Opera');
          _.bf = Ce();
          cf = N('Edge');
          df = cf || _.bf;
          ef =
            N('Gecko') &&
            !(-1 != ye.toLowerCase().indexOf('webkit') && !N('Edge')) &&
            !(N('Trident') || N('MSIE')) &&
            !N('Edge');
          ff = -1 != ye.toLowerCase().indexOf('webkit') && !N('Edge');
          gf = ff && N('Mobile');
          hf = N('Android');
          jf = Ye();
          kf = N('iPad');
          lf = N('iPod');
          mf = function () {
            var a = _.H.document;
            return a ? a.documentMode : void 0;
          };
          a: {
            var of = '',
              pf = (function () {
                var a = ye;
                if (ef) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (cf) return /Edge\/([\d\.]+)/.exec(a);
                if (_.bf) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ff) return /WebKit\/(\S+)/.exec(a);
                if (af) return /(?:Version)[ \/]?(\S+)/.exec(a);
              })();
            pf && (of = pf ? pf[1] : '');
            if (_.bf) {
              var qf = mf();
              if (null != qf && qf > parseFloat(of)) {
                nf = String(qf);
                break a;
              }
            }
            nf = of;
          }
          var rf = nf,
            sf = {},
            tf = function (a) {
              return Tb(sf, a, function () {
                return 0 <= se(rf, a);
              });
            },
            uf;
          if (_.H.document && _.bf) {
            var vf = mf();
            uf = vf ? vf : parseInt(rf, 10) || void 0;
          } else uf = void 0;
          var wf = uf;
          var xf = Ee(),
            yf = Fe() && !(Ye() || N('iPad') || N('iPod'));
          var zf = {},
            Af = null,
            Bf = ef || (ff && !yf) || af || 'function' == typeof _.H.btoa,
            Cf = function (a, b) {
              void 0 === b && (b = 0);
              if (!Af) {
                Af = {};
                for (
                  var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                      ''
                    ),
                    d = ['+/=', '+/', '-_=', '-_.', '-_'],
                    e = 0;
                  5 > e;
                  e++
                ) {
                  var f = c.concat(d[e].split(''));
                  zf[e] = f;
                  for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Af[h] && (Af[h] = g);
                  }
                }
              }
              b = zf[b];
              c = [];
              for (d = 0; d < a.length; d += 3) {
                var k = a[d],
                  l = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f = d + 2 < a.length) ? a[d + 2] : 0;
                g = k >> 2;
                k = ((k & 3) << 4) | (l >> 4);
                l = ((l & 15) << 2) | (h >> 6);
                h &= 63;
                f || ((h = 64), e || (l = 64));
                c.push(b[g], b[k], b[l] || '', b[h] || '');
              }
              return c.join('');
            },
            Df = function (a, b) {
              if (Bf && !b) a = _.H.btoa(a);
              else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                  var f = a.charCodeAt(e);
                  255 < f && ((c[d++] = f & 255), (f >>= 8));
                  c[d++] = f;
                }
                a = Cf(c, b);
              }
              return a;
            };
          var Ef = function () {
              this.B = [];
              this.l = 0;
              this.j = new Ue();
            },
            Ff = function (a, b) {
              Xe(a.j, 8 * b + 2);
              b = Ve(a.j);
              a.B.push(b);
              a.l += b.length;
              b.push(a.l);
              return b;
            },
            Gf = function (a, b) {
              var c = b.pop();
              for (c = a.l + a.j.length() - c; 127 < c; )
                b.push((c & 127) | 128), (c >>>= 7), a.l++;
              b.push(c);
              a.l++;
            },
            Hf = function (a) {
              for (
                var b = new Uint8Array(a.l + a.j.length()), c = a.B, d = c.length, e = 0, f = 0;
                f < d;
                f++
              ) {
                var g = c[f];
                b.set(g, e);
                e += g.length;
              }
              c = Ve(a.j);
              b.set(c, e);
              a.B = [b];
              return b;
            },
            If = function (a, b, c) {
              if (null != c)
                if ((Xe(a.j, 8 * b), (a = a.j), 0 <= c)) Xe(a, c);
                else {
                  for (b = 0; 9 > b; b++) a.j.push((c & 127) | 128), (c >>= 7);
                  a.j.push(1);
                }
            },
            Jf = function (a, b, c) {
              null != c && (Xe(a.j, 8 * b), (a = a.j), sa(c), We(a));
            },
            Kf = function (a, b, c) {
              null != c && (Xe(a.j, 8 * b), (a = a.j), sa(c), We(a));
            },
            Lf = function (a, b, c) {
              if (null != c) {
                b = Ff(a, b);
                for (var d = a.j, e = 0; e < c.length; e++) {
                  var f = c.charCodeAt(e);
                  if (128 > f) d.j.push(f);
                  else if (2048 > f) d.j.push((f >> 6) | 192), d.j.push((f & 63) | 128);
                  else if (65536 > f)
                    if (55296 <= f && 56319 >= f && e + 1 < c.length) {
                      var g = c.charCodeAt(e + 1);
                      56320 <= g &&
                        57343 >= g &&
                        ((f = 1024 * (f - 55296) + g - 56320 + 65536),
                        d.j.push((f >> 18) | 240),
                        d.j.push(((f >> 12) & 63) | 128),
                        d.j.push(((f >> 6) & 63) | 128),
                        d.j.push((f & 63) | 128),
                        e++);
                    } else
                      d.j.push((f >> 12) | 224),
                        d.j.push(((f >> 6) & 63) | 128),
                        d.j.push((f & 63) | 128);
                }
                Gf(a, b);
              }
            },
            Nf = function (a, b, c) {
              var d = Mf;
              null != c && ((b = Ff(a, b)), d(c, a), Gf(a, b));
            },
            Of = function (a, b, c, d) {
              if (null != c)
                for (var e = 0; e < c.length; e++) {
                  var f = Ff(a, b);
                  d(c[e], a);
                  Gf(a, f);
                }
            };
          var Pf = function () {},
            Qf = 'function' == typeof Uint8Array,
            Tf = function (a, b, c, d) {
              a.j = null;
              b || (b = []);
              a.C = void 0;
              a.B = -1;
              a.la = b;
              a: {
                if ((b = a.la.length)) {
                  --b;
                  var e = a.la[b];
                  if (
                    !(
                      null === e ||
                      'object' != typeof e ||
                      Array.isArray(e) ||
                      (Qf && e instanceof Uint8Array)
                    )
                  ) {
                    a.o = b - a.B;
                    a.l = e;
                    break a;
                  }
                }
                a.o = Number.MAX_VALUE;
              }
              a.A = {};
              if (c)
                for (b = 0; b < c.length; b++)
                  (e = c[b]),
                    e < a.o
                      ? ((e += a.B), (a.la[e] = a.la[e] || Rf))
                      : (Sf(a), (a.l[e] = a.l[e] || Rf));
              if (d && d.length)
                for (b = 0; b < d.length; b++) {
                  e = c = void 0;
                  for (var f = a, g = d[b], h = 0; h < g.length; h++) {
                    var k = g[h],
                      l = C(f, k);
                    null != l && ((e = k), (c = l), D(f, k, void 0));
                  }
                  e && D(f, e, c);
                }
            },
            Rf = [],
            Sf = function (a) {
              var b = a.o + a.B;
              a.la[b] || (a.l = a.la[b] = {});
            },
            C = function (a, b) {
              if (b < a.o) {
                b += a.B;
                var c = a.la[b];
                return c !== Rf ? c : (a.la[b] = []);
              }
              if (a.l) return (c = a.l[b]), c === Rf ? (a.l[b] = []) : c;
            },
            Uf = function (a, b) {
              return null != C(a, b);
            },
            Vf = function (a, b) {
              a = C(a, b);
              return null == a ? a : +a;
            },
            r = function (a, b) {
              a = C(a, b);
              return null == a ? a : !!a;
            },
            Wf = function (a) {
              return null == a || 'string' === typeof a
                ? a
                : Qf && a instanceof Uint8Array
                ? Cf(a)
                : null;
            },
            Xf = function (a) {
              return a.length && 'string' !== typeof a[0] ? _.Bb(a, Wf) : a;
            },
            Yf = function (a, b, c) {
              a = C(a, b);
              return null == a ? c : a;
            },
            Zf = function (a) {
              a = r(a, 12);
              return null == a ? !1 : a;
            },
            $f = function (a) {
              a = Vf(a, 2);
              return null == a ? 1 : a;
            },
            D = function (a, b, c) {
              b < a.o ? (a.la[b + a.B] = c) : (Sf(a), (a.l[b] = c));
              return a;
            },
            bg = function (a, b, c) {
              return ag(a, b, c, !1);
            },
            ag = function (a, b, c, d) {
              c !== d ? D(a, b, c) : b < a.o ? (a.la[b + a.B] = null) : (Sf(a), delete a.l[b]);
              return a;
            },
            cg = function (a, b, c) {
              C(a, b).push(c);
            },
            dg = function (a, b, c) {
              a.j || (a.j = {});
              if (!a.j[c]) {
                var d = C(a, c);
                d && (a.j[c] = new b(d));
              }
              return a.j[c];
            },
            P = function (a, b, c) {
              a.j || (a.j = {});
              if (!a.j[c]) {
                for (var d = C(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.j[c] = e;
              }
              b = a.j[c];
              b == Rf && (b = a.j[c] = []);
              return b;
            },
            eg = function (a, b, c) {
              a.j || (a.j = {});
              var d = c ? c.la : c;
              a.j[b] = c;
              return D(a, b, d);
            },
            fg = function (a, b, c) {
              a.j || (a.j = {});
              c = c || [];
              for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].la;
              a.j[b] = c;
              return D(a, b, d);
            },
            gg = function (a, b, c, d) {
              var e = P(a, d, b);
              c = c ? c : new d();
              a = C(a, b);
              e.push(c);
              a.push(c.la);
            };
          Pf.prototype.m = Qf
            ? function () {
                var a = Uint8Array.prototype.toJSON;
                Uint8Array.prototype.toJSON = function () {
                  return Cf(this);
                };
                try {
                  return JSON.stringify(this.la && this.la, hg);
                } finally {
                  Uint8Array.prototype.toJSON = a;
                }
              }
            : function () {
                return JSON.stringify(this.la && this.la, hg);
              };
          var hg = function (a, b) {
              return 'number' !== typeof b || (!isNaN(b) && Infinity !== b && -Infinity !== b)
                ? b
                : String(b);
            },
            ig = function (a, b) {
              return new a(b ? JSON.parse(b) : null);
            },
            jg = function (a) {
              if (Array.isArray(a)) {
                for (var b = Array(a.length), c = 0; c < a.length; c++) {
                  var d = a[c];
                  null != d && (b[c] = 'object' == typeof d ? jg(d) : d);
                }
                return b;
              }
              if (Qf && a instanceof Uint8Array) return new Uint8Array(a);
              b = {};
              for (c in a) (d = a[c]), null != d && (b[c] = 'object' == typeof d ? jg(d) : d);
              return b;
            };
          var kg = document,
            lg = window;
          var mg = function (a) {
            Tf(this, a, null, null);
          };
          Ed(mg, Pf);
          var ng = function (a) {
            Tf(this, a, null, null);
          };
          Ed(ng, Pf);
          var Ia = function (a) {
            this.j = a || { cookie: '' };
          };
          Ia.prototype.set = function (a, b, c) {
            var d = !1;
            if ('object' === typeof c) {
              var e = c.Je;
              d = c.Gd || !1;
              var f = c.domain || void 0;
              var g = c.path || void 0;
              var h = c.Fc;
            }
            if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
            if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
            void 0 === h && (h = -1);
            this.j.cookie =
              a +
              '=' +
              b +
              (f ? ';domain=' + f : '') +
              (g ? ';path=' + g : '') +
              (0 > h
                ? ''
                : 0 == h
                ? ';expires=' + new Date(1970, 1, 1).toUTCString()
                : ';expires=' + new Date(Date.now() + 1000 * h).toUTCString()) +
              (d ? ';secure' : '') +
              (null != e ? ';samesite=' + e : '');
          };
          Ia.prototype.get = function (a, b) {
            for (
              var c = a + '=', d = (this.j.cookie || '').split(';'), e = 0, f;
              e < d.length;
              e++
            ) {
              f = je(d[e]);
              if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
              if (f == a) return '';
            }
            return b;
          };
          var og = function (a, b) {
            a.get(b);
            a.set(b, '', { Fc: 0, path: void 0, domain: void 0 });
          };
          Ia.prototype.isEmpty = function () {
            return !this.j.cookie;
          };
          Ia.prototype.clear = function () {
            for (
              var a = (this.j.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
              f < a.length;
              f++
            )
              (e = je(a[f])),
                (d = e.indexOf('=')),
                -1 == d
                  ? (b.push(''), c.push(e))
                  : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            for (a = b.length - 1; 0 <= a; a--) og(this, b[a]);
          };
          var pg = function (a) {
              return (a = new Ia(a).get('DATA_USE_CONSENT', '')) ? a : null;
            },
            qg = function (a) {
              var b = (b = new Ia(a).get('FCCDCF', '')) ? b : null;
              try {
                var c = b ? ig(mg, b) : null;
              } catch (d) {
                c = null;
              }
              if (!c) return pg(a);
              c = dg(c, ng, 3);
              if (!c || !Uf(c, 1)) return pg(a);
              a = C(c, 2);
              b = Date.now();
              if (a) {
                if (b < a || b > a + 33696000000) return null;
              } else return null;
              return C(c, 1);
            };
          var sg = function (a) {
            Tf(this, a, rg, null);
          };
          Ed(sg, Pf);
          var rg = [1, 2, 3, 4];
          var tg = function (a, b) {
            var c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || '';
            this.id = b.id || 'jserror';
            this.meta = c;
          };
          var ta;
          ta = Sa(function () {
            var a = !1;
            try {
              var b = Object.defineProperty({}, 'passive', {
                get: function () {
                  a = !0;
                },
              });
              _.H.addEventListener('test', null, b);
            } catch (c) {}
            return a;
          });
          _.y = function (a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, ua(d)), !0) : !1;
          };
          _.sb = function (a, b, c, d) {
            return a.removeEventListener ? (a.removeEventListener(b, c, ua(d)), !0) : !1;
          };
          var ug = !_.bf || 9 <= Number(wf),
            vg = _.bf || af || ff;
          _.Va = function (a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0;
          };
          _.Va.prototype.ceil = function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
          };
          _.Va.prototype.floor = function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
          };
          _.Va.prototype.round = function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
          };
          _.wg = function (a, b) {
            this.width = a;
            this.height = b;
          };
          _.q = _.wg.prototype;
          _.q.aspectRatio = function () {
            return this.width / this.height;
          };
          _.q.isEmpty = function () {
            return !(this.width * this.height);
          };
          _.q.ceil = function () {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this;
          };
          _.q.floor = function () {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this;
          };
          _.q.round = function () {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this;
          };
          var zg, Bg, Ag, Eg, Fg, Hg, Lg, xg;
          zg = function (a) {
            return a ? new xg(_.yg(a)) : Fd || (Fd = new xg());
          };
          Bg = function (a, b) {
            Od(b, function (c, d) {
              c && 'object' == typeof c && c.qb && (c = c.pb());
              'style' == d
                ? (a.style.cssText = c)
                : 'class' == d
                ? (a.className = c)
                : 'for' == d
                ? (a.htmlFor = c)
                : Ag.hasOwnProperty(d)
                ? a.setAttribute(Ag[d], c)
                : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
                ? a.setAttribute(d, c)
                : (a[d] = c);
            });
          };
          Ag = {
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            colspan: 'colSpan',
            frameborder: 'frameBorder',
            height: 'height',
            maxlength: 'maxLength',
            nonce: 'nonce',
            role: 'role',
            rowspan: 'rowSpan',
            type: 'type',
            usemap: 'useMap',
            valign: 'vAlign',
            width: 'width',
          };
          _.Dg = function (a) {
            a = a.document;
            a = _.Cg(a) ? a.documentElement : a.body;
            return new _.wg(a.clientWidth, a.clientHeight);
          };
          Eg = function (a) {
            return a.scrollingElement
              ? a.scrollingElement
              : !ff && _.Cg(a)
              ? a.documentElement
              : a.body || a.documentElement;
          };
          _.Gg = function (a) {
            return a ? Fg(a) : window;
          };
          Fg = function (a) {
            return a.parentWindow || a.defaultView;
          };
          Hg = function (a, b, c, d) {
            function e (h) {
              h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
            }
            for (; d < c.length; d++) {
              var f = c[d];
              if (!wd(f) || (_.ha(f) && 0 < f.nodeType)) e(f);
              else {
                a: {
                  if (f && 'number' == typeof f.length) {
                    if (_.ha(f)) {
                      var g = 'function' == typeof f.item || 'string' == typeof f.item;
                      break a;
                    }
                    if ('function' === typeof f) {
                      g = 'function' == typeof f.item;
                      break a;
                    }
                  }
                  g = !1;
                }
                _.Gd(g ? ea(f) : f, e);
              }
            }
          };
          _.Ig = function (a, b) {
            b = String(b);
            'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
            return a.createElement(b);
          };
          _.Cg = function (a) {
            return 'CSS1Compat' == a.compatMode;
          };
          _.Jg = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null;
          };
          _.Kg = function (a) {
            var b;
            if (
              vg &&
              !(_.bf && tf('9') && !tf('10') && _.H.SVGElement && a instanceof _.H.SVGElement) &&
              (b = a.parentElement)
            )
              return b;
            b = a.parentNode;
            return _.ha(b) && 1 == b.nodeType ? b : null;
          };
          _.yg = function (a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document;
          };
          Lg = function (a) {
            try {
              return a.contentWindow || (a.contentDocument ? _.Gg(a.contentDocument) : null);
            } catch (b) {}
            return null;
          };
          xg = function (a) {
            this.j = a || _.H.document || document;
          };
          _.q = xg.prototype;
          _.q.getElementsByTagName = function (a, b) {
            return (b || this.j).getElementsByTagName(String(a));
          };
          _.q.$c = function (a, b, c) {
            var d = this.j,
              e = arguments,
              f = String(e[0]),
              g = e[1];
            if (!ug && g && (g.name || g.type)) {
              f = ['<', f];
              g.name && f.push(' name="', Ne(g.name), '"');
              if (g.type) {
                f.push(' type="', Ne(g.type), '"');
                var h = {};
                Sd(h, g);
                delete h.type;
                g = h;
              }
              f.push('>');
              f = f.join('');
            }
            f = _.Ig(d, f);
            g &&
              ('string' === typeof g
                ? (f.className = g)
                : Array.isArray(g)
                ? (f.className = g.join(' '))
                : Bg(f, g));
            2 < e.length && Hg(d, f, e, 2);
            return f;
          };
          _.q.createElement = function (a) {
            return _.Ig(this.j, a);
          };
          _.q.createTextNode = function (a) {
            return this.j.createTextNode(String(a));
          };
          _.q.append = function (a, b) {
            Hg(_.yg(a), a, arguments, 1);
          };
          var Mg = function () {
            return N('iPad') || (N('Android') && !N('Mobile')) || N('Silk');
          };
          var Ng, Pg, Qg, tc;
          Ng = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
          _.Og = function (a) {
            return a.match(Ng);
          };
          Pg = function (a) {
            return a ? decodeURI(a) : a;
          };
          Qg = function (a, b, c) {
            if (Array.isArray(b)) for (var d = 0; d < b.length; d++) Qg(a, String(b[d]), c);
            else null != b && c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))));
          };
          tc = /#|$/;
          var Rg,
            Tg,
            Ug,
            Sg,
            Vg,
            Wg,
            Ta,
            Yg,
            Hb,
            Zg,
            $g,
            bh,
            ch,
            Xg,
            eh,
            fh,
            dh,
            gh,
            ih,
            jh,
            kh,
            lh,
            mh,
            nh,
            oh,
            ph,
            qh,
            rh,
            sh,
            th,
            uh,
            wh,
            yh,
            Ah,
            Ch,
            Dh,
            Bh,
            Eh,
            Fh,
            Gh,
            Ih,
            Jh,
            Kh,
            Lh,
            Mh,
            Nh,
            Ob,
            Kc,
            Oh,
            Ph,
            Qh,
            Rh;
          Rg = function (a) {
            try {
              return !!a && null != a.location.href && $e(a, 'foo');
            } catch (b) {
              return !1;
            }
          };
          Tg = function (a, b, c, d) {
            d = d || _.H;
            c && (d = Sg(d));
            for (c = 0; d && 40 > c++ && ((!b && !Rg(d)) || !a(d)); ) d = Sg(d);
          };
          Ug = function () {
            var a = _.H;
            Tg(function (b) {
              a = b;
              return !1;
            });
            return a;
          };
          Sg = function (a) {
            try {
              var b = a.parent;
              if (b && b != a) return b;
            } catch (c) {}
            return null;
          };
          Vg = function (a) {
            return Rg(a.top) ? a.top : null;
          };
          Wg = function (a, b) {
            var c = a.createElement('script');
            c.src = Xa(b);
            Ya(c);
            return (a = a.getElementsByTagName('script')[0]) && a.parentNode
              ? (a.parentNode.insertBefore(c, a), c)
              : null;
          };
          Ta = function (a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
          };
          Yg = function (a, b) {
            if (!Xg()) {
              var c = Math.random();
              if (c < b) return (c = Hb(_.H)), a[Math.floor(c * a.length)];
            }
            return null;
          };
          Hb = function (a) {
            if (!a.crypto) return Math.random();
            try {
              var b = new Uint32Array(1);
              a.crypto.getRandomValues(b);
              return b[0] / 65536 / 65536;
            } catch (c) {
              return Math.random();
            }
          };
          _.Yb = function (a, b, c) {
            if (a)
              for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a);
          };
          Zg = function (a) {
            for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
            return !0;
          };
          $g = function (a) {
            var b = [];
            _.Yb(a, function (c, d) {
              b.push(d);
            });
            return b;
          };
          _.ah = function (a) {
            var b = [];
            _.Yb(a, function (c) {
              b.push(c);
            });
            return b;
          };
          bh = function (a, b) {
            return Qd(a, function (c, d) {
              return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
            });
          };
          ch = function (a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++)
              c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
            return 0 < c ? c : 4294967296 + c;
          };
          Xg = Sa(function () {
            return (
              _.Id(
                [
                  'Google Web Preview',
                  'Mediapartners-Google',
                  'Google-Read-Aloud',
                  'Google-Adwords',
                ],
                dh
              ) || 0.0001 > Math.random()
            );
          });
          eh = function (a) {
            return Xg() ? null : Math.floor(1000 * Hb(a));
          };
          fh = function (a, b) {
            try {
              if (a) return a.setItem('google_experiment_mod', b), b;
            } catch (c) {}
            return null;
          };
          dh = function (a) {
            return -1 != ye.indexOf(a);
          };
          gh = /^(-?[0-9.]{1,30})$/;
          _.hh = function (a, b) {
            return gh.test(a) && ((a = Number(a)), !isNaN(a)) ? a : void 0 == b ? null : b;
          };
          ih = function () {
            return /^true$/.test('false');
          };
          jh = function (a, b) {
            b = void 0 === b ? !0 : b;
            try {
              for (var c = null; c != a; c = a, a = a.parent)
                switch (a.location.protocol) {
                  case 'https:':
                    return !0;
                  case 'file:':
                    return b;
                  case 'http:':
                    return !1;
                }
            } catch (d) {}
            return !0;
          };
          kh = function (a) {
            if (!a) return '';
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
              var c = b.exec(decodeURIComponent(a));
              if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : 'true';
            } catch (d) {}
            return '';
          };
          lh = {
            Vd: 'allow-forms',
            Wd: 'allow-modals',
            Xd: 'allow-orientation-lock',
            Yd: 'allow-pointer-lock',
            Zd: 'allow-popups',
            $d: 'allow-popups-to-escape-sandbox',
            ae: 'allow-presentation',
            be: 'allow-same-origin',
            ce: 'allow-scripts',
            de: 'allow-top-navigation',
            ee: 'allow-top-navigation-by-user-activation',
          };
          mh = Sa(function () {
            return _.ah(lh);
          });
          nh = function (a) {
            var b = mh();
            return a.length
              ? _.Db(b, function (c) {
                  return !_.ca(a, c);
                })
              : b;
          };
          oh = function () {
            var a = _.Ig(document, 'IFRAME'),
              b = {};
            _.Gd(mh(), function (c) {
              a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
            });
            return b;
          };
          ph = function (a) {
            a = a && a.toString && a.toString();
            return 'string' === typeof a && -1 != a.indexOf('[native code]');
          };
          qh = function (a, b) {
            try {
              return !(!a.frames || !a.frames[b]);
            } catch (c) {
              return !1;
            }
          };
          rh = function (a, b) {
            for (var c = 0; 50 > c; ++c) {
              if (qh(a, b)) return a;
              if (!(a = Sg(a))) break;
            }
            return null;
          };
          sh = function (a) {
            if (!a || !a.frames) return null;
            if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
            try {
              var b = a.document,
                c = new xg(b),
                d = b.body || (b.head && b.head.parentElement);
              if (d) {
                var e = c.createElement('IFRAME');
                e.name = 'google_ads_top_frame';
                e.id = 'google_ads_top_frame';
                e.setAttribute(
                  'style',
                  'display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;'
                );
                d.appendChild(e);
                return e;
              }
            } catch (f) {}
            return null;
          };
          th = Sa(function () {
            return !Mg() && (N('iPod') || N('iPhone') || N('Android') || N('IEMobile'))
              ? 2
              : Mg()
              ? 1
              : 0;
          });
          uh = function (a, b) {
            var c;
            for (c = void 0 === c ? 100 : c; a && c--; ) {
              if (a == b) return !0;
              a = a.parentElement;
            }
            return !1;
          };
          _.zh = function (a, b) {
            a.style.setProperty
              ? _.Yb(b, function (c, d) {
                  a.style.setProperty(d, c, 'important');
                })
              : (a.style.cssText = _.vh(
                  wh(
                    _.xh(a.style.cssText),
                    yh(b, function (c) {
                      return c + ' !important';
                    })
                  )
                ));
          };
          wh =
            _.B(Object, 'assign') ||
            function (a, b) {
              for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                  for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
              }
              return a;
            };
          yh = function (a, b) {
            var c = {},
              d;
            for (d in a)
              Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c;
          };
          Ah = function (a, b, c) {
            for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); ) a = a.parentElement;
          };
          Ch = function (a) {
            return Bh(a, function (b) {
              return 'fixed' == b.position || 'sticky' == b.position;
            });
          };
          Dh = function (a) {
            return Bh(a, function (b) {
              return (
                'left' == b['float'] ||
                'right' == b['float'] ||
                'left' == b.cssFloat ||
                'right' == b.cssFloat
              );
            });
          };
          Bh = function (a, b) {
            var c;
            for (c = void 0 === c ? 100 : c; a && c--; ) {
              var d = Ta(a, window);
              if (d) {
                if (b(d)) return !0;
                a = a.parentElement;
              }
            }
            return !1;
          };
          Eh = function (a) {
            if (!a) return null;
            a = a.transform;
            if (!a) return null;
            a = a.replace(/^.*\(([0-9., -]+)\)$/, '$1').split(/, /);
            return 6 != a.length ? null : _.Bb(a, parseFloat);
          };
          _.vh = function (a) {
            var b = [];
            _.Yb(a, function (c, d) {
              null != c && '' !== c && b.push(d + ':' + c);
            });
            return b.length ? b.join(';') + ';' : '';
          };
          _.xh = function (a) {
            var b = {};
            if (a) {
              var c = /\s*:\s*/;
              _.Gd((a || '').split(/\s*;\s*/), function (d) {
                if (d) {
                  var e = d.split(c);
                  d = e[0];
                  e = e[1];
                  d && e && (b[d.toLowerCase()] = e);
                }
              });
            }
            return b;
          };
          Fh = function (a) {
            _.H.console && _.H.console.warn && _.H.console.warn(a);
          };
          Gh = function (a, b) {
            b = aa(a, b);
            if (0 <= b) {
              var c = a[b];
              Array.prototype.splice.call(a, b, 1);
              return c;
            }
            return null;
          };
          Ih = [];
          Jh = function () {
            var a = Ih;
            Ih = [];
            a = _.G(a);
            for (var b = a.next(); !b.done; b = a.next()) {
              b = b.value;
              try {
                b();
              } catch (c) {}
            }
          };
          Kh = function (a) {
            Ih.push(a);
            1 == Ih.length &&
              (x.Promise
                ? x.Promise.resolve().then(Jh)
                : window.setImmediate
                ? setImmediate(Jh)
                : setTimeout(Jh, 0));
          };
          Lh = function (a) {
            return a.replace(/\\(n|r|\\)/g, function (b, c) {
              return 'n' == c ? '\n' : 'r' == c ? '\r' : '\\';
            });
          };
          Mh = function () {
            var a = void 0 === a ? window : a;
            return (a = Pg(_.Og(a.location.href)[3] || null)) ? ch(a) : null;
          };
          Nh = function () {
            return Math.floor(Math.random() * Math.pow(2, 52));
          };
          Ob = function (a) {
            if ('number' !== typeof a.goog_pvsid)
              try {
                Object.defineProperty(a, 'goog_pvsid', { value: Nh(), configurable: !1 });
              } catch (b) {}
            return Number(a.goog_pvsid) || -1;
          };
          Kc = function (a, b) {
            'complete' === a.readyState || 'interactive' === a.readyState
              ? Kh(b)
              : a.addEventListener('DOMContentLoaded', b);
          };
          Oh = function (a) {
            return 'number' === typeof a && isFinite(a) && 0 == a % 1 && 0 < a;
          };
          Ph = function (a) {
            return 0 === a || Oh(a);
          };
          Qh = function (a, b) {
            var c = document.createElement('div');
            c.id = a;
            c.textContent = b;
            _.zh(c, {
              height: '24px',
              'line-height': '24px',
              'text-align': 'center',
              'vertical-align': 'middle',
              color: 'white',
              'background-color': 'black',
              margin: '0',
              'font-family': 'Roboto',
              'font-style': 'normal',
              'font-weight': '500',
              'font-size': '11px',
              'letter-spacing': '0.08em',
            });
            return c;
          };
          Rh = function () {
            var a = _.w(462);
            return new x.Promise(function (b) {
              setTimeout(function () {
                return void b('');
              }, a);
            });
          };
          var Sh = { qe: 0, ke: 1, je: 2, ie: 3, te: 4, ue: 5, oe: 6, le: 7 };
          var Th = function () {
              return qh(_.H.top, 'googlefcPresent');
            },
            Uh = function (a) {
              var b = document;
              try {
                var c = qg(b);
                var d = c ? ig(sg, c) : null;
              } catch (e) {
                d = null;
              }
              if (!d) return 0;
              if (r(d, 7)) return 4;
              if (a) {
                if (_.ca(C(d, 3), a)) return 2;
                if (_.ca(C(d, 4), a)) return 3;
              }
              return 1;
            },
            Vh = Sa(function () {
              var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
              try {
                return a.test(_.H.top.location.href);
              } catch (b) {
                return a.test(_.H.location.href);
              }
            }),
            Wh = function (a, b, c) {
              for (var d = $g(Sh).length, e = [], f = 0; f < d; f++) e[f] = 0;
              Vh() && (a = !0);
              e[0] = a ? 1 : 2;
              d = void 0 !== c ? c : qh(_.H.top, 'GoogleSetNPA') || qh(Ug(), 'GoogleSetNPA');
              e[5] = d ? 1 : 2;
              e[4] = 2;
              c = !!_.H.googlefc || Th();
              e[1] = c ? 1 : 2;
              f = Uh(b);
              0 != f
                ? (b = { Ac: f, Bc: 3 })
                : ((f = _.H.top),
                  (b = {
                    Ac: qh(f, 'googlefcInactive')
                      ? 4
                      : b && qh(f, 'googlefcPA-' + b)
                      ? 2
                      : qh(f, 'googlefcNPA')
                      ? 3
                      : 0,
                    Bc: 2,
                  }));
              f = b;
              b = f.Ac;
              e[f.Bc] = b;
              if (!d)
                a: switch (b) {
                  case 2:
                  case 4:
                    d = !1;
                    break a;
                  case 3:
                    d = !0;
                    break a;
                  case 1:
                    d = a;
                    break a;
                  default:
                    d = (void 0 === c ? !1 : c) && a;
                }
              return { Oe: b, Ad: d, Id: 0 == b && a && c, kd: e.join('.') };
            },
            Xh = function (a, b, c, d) {
              var e = Wh(a, b, d);
              e.Id
                ? _.H.setTimeout(function () {
                    Xh(a, b, c, d);
                  }, 1000)
                : c(e);
            };
          var Yh = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Yh, Pf);
          _.Q = function () {
            this.fa = this.fa;
            this.V = this.V;
          };
          _.Q.prototype.fa = !1;
          _.Q.prototype.za = function () {
            this.fa || ((this.fa = !0), this.B());
          };
          _.$h = function (a, b) {
            _.R(a, _.Cd(Zh, b));
          };
          _.R = function (a, b) {
            a.fa ? b() : (a.V || (a.V = []), a.V.push(b));
          };
          _.Q.prototype.B = function () {
            if (this.V) for (; this.V.length; ) this.V.shift()();
          };
          var Zh = function (a) {
            a && 'function' == typeof a.za && a.za();
          };
          var ai = function (a) {
            this.l = 0;
            this.B = a || 100;
            this.j = [];
          };
          _.q = ai.prototype;
          _.q.add = function (a) {
            var b = this.j[this.l];
            this.j[this.l] = a;
            this.l = (this.l + 1) % this.B;
            return b;
          };
          _.q.get = function (a) {
            a = bi(this, a);
            return this.j[a];
          };
          _.q.set = function (a, b) {
            a = bi(this, a);
            this.j[a] = b;
          };
          _.q.isEmpty = function () {
            return 0 == this.j.length;
          };
          _.q.clear = function () {
            this.l = this.j.length = 0;
          };
          var ci = function (a) {
              for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++)
                c.push(a.get(d));
              return c;
            },
            bi = function (a, b) {
              if (b >= a.j.length) throw Error('Out of bounds exception');
              return a.j.length < a.B ? b : (a.l + Number(b)) % a.B;
            };
          var di = function (a, b, c) {
            c =
              void 0 === c
                ? function () {
                    return !0;
                  }
                : c;
            _.Q.call(this);
            var d = this;
            this.o = c;
            this.j = new ai(100);
            this.l = [];
            var e = function (f) {
              return void d.handleEvent(f);
            };
            _.y(a, b, e) &&
              _.R(this, function () {
                _.sb(a, b, e);
              });
          };
          _.M(di, _.Q);
          var ei = function (a, b) {
              try {
                a(b);
              } catch (c) {
                'undefined' !== typeof console && console.error && console.error(c);
              }
            },
            fi = function (a, b) {
              if (a.fa) return function () {};
              for (var c = {}, d = 0; d < a.j.j.length; c = { Mb: c.Mb }, d++)
                (c.Mb = a.j.get(d)),
                  Kh(
                    (function (e) {
                      return function () {
                        return void ei(b, e.Mb);
                      };
                    })(c)
                  );
              a.l.push(b);
              return function () {
                return void da(a.l, b);
              };
            };
          di.prototype.handleEvent = function (a) {
            if (this.o(a) && !this.fa) {
              this.j.add(a);
              for (var b = _.G(this.l), c = b.next(); !c.done; c = b.next()) ei(c.value, a);
            }
          };
          di.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.j.clear();
            this.l.length = 0;
          };
          var hi;
          _.gi = function (a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d;
          };
          hi = function (a) {
            return new _.gi(a.top, a.right, a.bottom, a.left);
          };
          _.gi.prototype.ceil = function () {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this;
          };
          _.gi.prototype.floor = function () {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this;
          };
          _.gi.prototype.round = function () {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this;
          };
          var ii = function (a, b, c, d) {
              this.left = a;
              this.top = b;
              this.width = c;
              this.height = d;
            },
            ji = function (a) {
              return new _.gi(a.top, a.left + a.width, a.top + a.height, a.left);
            },
            ki = function (a, b) {
              var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
              if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new ii(c, e, d - c, a - e);
              }
              return null;
            };
          ii.prototype.ceil = function () {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this;
          };
          ii.prototype.floor = function () {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this;
          };
          ii.prototype.round = function () {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this;
          };
          var li = {
              'AMP-CAROUSEL': 'ac',
              'AMP-FX-FLYING-CARPET': 'fc',
              'AMP-LIGHTBOX': 'lb',
              'AMP-STICKY-AD': 'sa',
            },
            mi = function (a) {
              a = void 0 === a ? _.H : a;
              var b = a.context || a.AMP_CONTEXT_DATA;
              if (!b)
                try {
                  b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
                } catch (c) {}
              try {
                if (b && b.pageViewId && b.canonicalUrl) return b;
              } catch (c) {}
              return null;
            },
            ni = function () {
              var a = mi();
              return a && a.mode ? +a.mode.version || null : null;
            },
            oi = function () {
              var a = mi();
              if (a && a.container) {
                a = a.container.split(',');
                for (var b = [], c = 0; c < a.length; c++) b.push(li[a[c]] || 'x');
                return b.join();
              }
              return null;
            },
            pi = function () {
              var a = mi();
              return a && a.initialIntersection;
            },
            qi = function () {
              var a = mi();
              var b;
              return (a =
                a &&
                (b = a.initialLayoutRect) &&
                'number' === typeof b.top &&
                'number' === typeof b.left &&
                'number' === typeof b.width &&
                'number' === typeof b.height
                  ? new ii(b.left, b.top, b.width, b.height)
                  : null)
                ? new _.Va(a.left, a.top)
                : (b = pi()) && _.ha(b.rootBounds)
                ? new _.Va(
                    b.rootBounds.left + b.boundingClientRect.left,
                    b.rootBounds.top + b.boundingClientRect.top
                  )
                : null;
            },
            ri = function (a) {
              return (a = a || mi()) ? (Rg(a.master) ? a.master : null) : null;
            },
            ti = function (a, b, c, d) {
              var e = (a.ampInaboxIframes = a.ampInaboxIframes || []),
                f = function () {},
                g = function (k) {
                  if (a.ampInaboxInitialized) f();
                  else {
                    var l,
                      m = 'amp-ini-load' === k.data;
                    a.ampInaboxPendingMessages &&
                      !m &&
                      (l = /^amp-(\d{15,20})?/.exec(k.data)) &&
                      (a.ampInaboxPendingMessages.push(k), si(a, l[1]));
                  }
                },
                h = function () {};
              b &&
                (e.push(b),
                (h = function () {
                  a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                  da(e, b);
                  f();
                }));
              if (a.ampInaboxInitialized) return h;
              a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
              c && /^\d{15,20}$/.test(c) && si(a, c);
              d
                ? (f = fi(d, g))
                : e.google_amp_listener_added ||
                  ((e.google_amp_listener_added = !0),
                  _.y(a, 'message', g),
                  (f = function () {
                    _.sb(a, 'message', g);
                  }));
              return h;
            },
            si = function (a, b) {
              a.ampInaboxInitialized ||
                (b && !/^\d{15,20}$/.test(b)) ||
                a.document.querySelector('script[src$="amp4ads-host-v0.js"]') ||
                Wg(
                  a.document,
                  b
                    ? hb(Yd('https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js'), {
                        ampVersion: b,
                      })
                    : be(Xd(Yd('https://cdn.ampproject.org/amp4ads-host-v0.js')))
                );
            },
            ui = !!mi() && _.H != _.H.top,
            vi = function (a) {
              a = mi(a);
              if (!a || !_.ha(a.data) || 'string' !== typeof a.data.type) return null;
              a = a.data.type.toLowerCase();
              return 'doubleclick' == a || 'adsense' == a ? null : a;
            };
          var pb, xi;
          _.wi = function (a, b) {
            a.google_image_requests || (a.google_image_requests = []);
            var c = a.document.createElement('img');
            c.src = b;
            a.google_image_requests.push(c);
          };
          pb = function (a, b) {
            var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
            _.Yb(a, function (d, e) {
              d && (c += '&' + e + '=' + encodeURIComponent(d));
            });
            xi(c);
          };
          xi = function (a) {
            var b = window;
            b.fetch
              ? b.fetch(a, {
                  keepalive: !0,
                  credentials: 'include',
                  redirect: 'follow',
                  method: 'get',
                  mode: 'no-cors',
                })
              : _.wi(b, a);
          };
          var va = {};
          var xa = {
              jd: function () {
                if ('undefined' !== typeof window) return window.trustedTypes;
              },
            },
            za;
          var yi = function () {},
            zi = function (a, b) {
              wa(b);
              this.j = a;
            };
          _.M(zi, yi);
          zi.prototype.toString = function () {
            return this.j.toString();
          };
          var Ai = function () {},
            Bi = function (a, b) {
              wa(b);
              this.j = a;
            };
          _.M(Bi, Ai);
          Bi.prototype.toString = function () {
            return this.j;
          };
          var Ci = function () {},
            Ca = function (a, b) {
              wa(b);
              this.j = a;
            };
          _.M(Ca, Ci);
          Ca.prototype.toString = function () {
            return this.j.toString();
          };
          new Bi('about:blank', va);
          new Bi('about:invalid#zTSz', va);
          var Ei;
          Ei = function (a) {
            (0, _.Di)();
            return be(a);
          };
          _.Di = _.ud;
          var Hi, Ji, Ki, Li, Mi, Ri, cc;
          _.Gi = function (a, b, c) {
            if ('string' === typeof b) (b = _.Fi(a, b)) && (a.style[b] = c);
            else
              for (var d in b) {
                c = a;
                var e = b[d],
                  f = _.Fi(c, d);
                f && (c.style[f] = e);
              }
          };
          Hi = {};
          _.Fi = function (a, b) {
            var c = Hi[b];
            if (!c) {
              var d = _.Se(b);
              c = d;
              void 0 === a.style[d] &&
                ((d = (ff ? 'Webkit' : ef ? 'Moz' : _.bf ? 'ms' : af ? 'O' : null) + Te(d)),
                void 0 !== a.style[d] && (c = d));
              Hi[b] = c;
            }
            return c;
          };
          _.Ii = function (a, b) {
            var c = _.yg(a);
            return c.defaultView &&
              c.defaultView.getComputedStyle &&
              (a = c.defaultView.getComputedStyle(a, null))
              ? a[b] || a.getPropertyValue(b) || ''
              : '';
          };
          Ji = function (a, b) {
            return (
              _.Ii(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b])
            );
          };
          Ki = function (a) {
            try {
              return a.getBoundingClientRect();
            } catch (b) {
              return { left: 0, top: 0, right: 0, bottom: 0 };
            }
          };
          Li = function (a) {
            if (_.bf && !(8 <= Number(wf))) return a.offsetParent;
            var b = _.yg(a),
              c = Ji(a, 'position'),
              d = 'fixed' == c || 'absolute' == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
              if (
                (11 == a.nodeType && a.host && (a = a.host),
                (c = Ji(a, 'position')),
                (d = d && 'static' == c && a != b.documentElement && a != b.body),
                !d &&
                  (a.scrollWidth > a.clientWidth ||
                    a.scrollHeight > a.clientHeight ||
                    'fixed' == c ||
                    'absolute' == c ||
                    'relative' == c))
              )
                return a;
            return null;
          };
          Mi = function (a) {
            var b = _.yg(a),
              c = new _.Va(0, 0);
            var d = b ? _.yg(b) : document;
            d = !_.bf || 9 <= Number(wf) || _.Cg(zg(d).j) ? d.documentElement : d.body;
            if (a == d) return c;
            a = Ki(a);
            d = zg(b).j;
            b = Eg(d);
            d = Fg(d);
            b =
              _.bf && tf('10') && d.pageYOffset != b.scrollTop
                ? new _.Va(b.scrollLeft, b.scrollTop)
                : new _.Va(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c;
          };
          _.Ni = function (a) {
            a = Ki(a);
            return new _.Va(a.left, a.top);
          };
          _.Oi = function (a, b) {
            'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px');
            return a;
          };
          _.Pi = function (a, b) {
            if ('none' != Ji(b, 'display')) return a(b);
            var c = b.style,
              d = c.display,
              e = c.visibility,
              f = c.position;
            c.visibility = 'hidden';
            c.position = 'absolute';
            c.display = 'inline';
            a = a(b);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a;
          };
          _.Qi = function (a) {
            var b = a.offsetWidth,
              c = a.offsetHeight,
              d = ff && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect
              ? ((a = Ki(a)), new _.wg(a.right - a.left, a.bottom - a.top))
              : new _.wg(b, c);
          };
          Ri = function (a) {
            if (!a.getBoundingClientRect) return null;
            a = _.Pi(Ki, a);
            return new _.wg(a.right - a.left, a.bottom - a.top);
          };
          cc = function (a, b) {
            a.style.display = b ? '' : 'none';
          };
          var Ti = function () {
              var a = Si();
              'google_onload_fired' in a ||
                ((a.google_onload_fired = !1),
                _.y(a, 'load', function () {
                  a.google_onload_fired = !0;
                }));
            },
            Ui = function () {
              var a = void 0 === a ? lg : a;
              try {
                return a.history.length;
              } catch (b) {
                return 0;
              }
            },
            Vi = function (a) {
              a = ri(mi(a)) || a;
              a = a.google_unique_id;
              return 'number' === typeof a ? a : 0;
            },
            Wi = !!window.google_async_iframe_id,
            Xi = (Wi && window.parent) || window,
            Si = function () {
              if (Wi && !Rg(Xi)) {
                var a = '.' + kg.domain;
                try {
                  for (; 2 < a.split('.').length && !Rg(Xi); )
                    (kg.domain = a = a.substr(a.indexOf('.') + 1)), (Xi = window.parent);
                } catch (b) {}
                Rg(Xi) || (Xi = window);
              }
              return Xi;
            },
            Yi = function () {
              var a,
                b = window.ActiveXObject;
              if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins['Shockwave Flash']) && a.description)
                  return a.description.replace(/([a-zA-Z]|\s)+/, '').replace(/(\s)+r/, '.');
              } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf('Windows CE')) {
                  var c = 3;
                  for (a = 1; a; )
                    try {
                      (a = new b('ShockwaveFlash.ShockwaveFlash.' + (c + 1))), c++;
                    } catch (d) {
                      a = null;
                    }
                  return c.toString();
                }
                if (Ce()) {
                  a = null;
                  try {
                    a = new b('ShockwaveFlash.ShockwaveFlash.7');
                  } catch (d) {
                    c = 0;
                    try {
                      (a = new b('ShockwaveFlash.ShockwaveFlash.6')),
                        (c = 6),
                        (a.AllowScriptAccess = 'always');
                    } catch (e) {
                      if (6 === c) return c.toString();
                    }
                    try {
                      a = new b('ShockwaveFlash.ShockwaveFlash');
                    } catch (e) {}
                  }
                  if (a)
                    return (c = a.GetVariable('$version').split(' ')[1]), c.replace(/,/g, '.');
                }
              }
              return '0';
            };
          var Zi = [
              /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i,
              /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i,
              /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i,
              /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i,
              /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i,
              /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i,
            ],
            $i = function (a) {
              return _.Id(Zi, function (b) {
                return b.test(a);
              });
            },
            aj = function (a) {
              if ((a = /[-\w]+\.[-\w]+$/.exec(a))) {
                a = a[0].toLowerCase();
                for (var b = 0, c = 0; c < a.length; ++c) b = (31 * b + a.charCodeAt(c)) >>> 0;
                switch (b) {
                  case 1967261364:
                    return 0;
                  case 3147493546:
                    return 1;
                  case 1567346461:
                    return 2;
                  case 2183041838:
                    return 3;
                  case 763236279:
                    return 4;
                  case 1342279801:
                    return 5;
                  case 526831769:
                    return 6;
                  case 352806002:
                    return 7;
                  case 2755048925:
                    return 8;
                  case 3306848407:
                    return 9;
                  case 2207000920:
                    return 10;
                  case 484037040:
                    return 11;
                  case 3506871055:
                    return 12;
                  case 672143848:
                    return 13;
                  case 2528751226:
                    return 14;
                  case 2744854768:
                    return 15;
                  case 3703278665:
                    return 16;
                  case 2014749173:
                    return 17;
                  case 133063824:
                    return 18;
                  case 2749334602:
                    return 19;
                  case 3131239845:
                    return 20;
                  case 2074086763:
                    return 21;
                  case 795772493:
                    return 22;
                  case 290857819:
                    return 23;
                  case 3035947606:
                    return 24;
                  case 2983138003:
                    return 25;
                  case 2197138676:
                    return 26;
                  case 4216016165:
                    return 27;
                  case 239803524:
                    return 28;
                  case 975993579:
                    return 29;
                  case 1794940339:
                    return 30;
                  case 1314429186:
                    return 31;
                  case 1643618937:
                    return 32;
                  case 497159982:
                    return 33;
                  case 3882239661:
                    return 34;
                }
              }
              return -1;
            },
            bj = function (a) {
              if (!a.length) return 0;
              for (var b = [], c = 0; 34 >= c; c++) b[c] = 0;
              for (c = a.length - 1; 0 <= c; c--) {
                var d = aj(a[c]);
                0 <= d && (b[34 - d] = 1);
              }
              return parseInt(b.join(''), 2);
            };
          var dj = function (a) {
              a = (this.l = a || _.H) || _.H;
              this.B = a.top == a ? 1 : Rg(a.top) ? 2 : 3;
              3 != this.B && Date.parse(_.H.top.document.lastModified);
              var b = this.l,
                c = b || _.H;
              a = [];
              var d = null;
              do {
                var e = c;
                if (Rg(e)) {
                  var f = e.location.href;
                  d = (e.document && e.document.referrer) || null;
                } else (f = d), (d = null);
                a.push(new cj(f || '', e));
                try {
                  c = e.parent;
                } catch (g) {
                  c = null;
                }
              } while (c && e != c);
              e = 0;
              for (c = a.length - 1; e <= c; ++e) a[e].depth = c - e;
              e = b || _.H;
              if (
                e.location &&
                e.location.ancestorOrigins &&
                e.location.ancestorOrigins.length == a.length - 1
              )
                for (b = 1; b < a.length; ++b)
                  (c = a[b]),
                    c.url || ((c.url = e.location.ancestorOrigins[b - 1] || ''), (c.pd = !0));
              this.j = a;
            },
            fj = function (a) {
              var b = a.l.document && a.l.document.scripts ? a.l.document.scripts : [];
              if (!b) return 0;
              for (var c = [], d = b.length - 1; 0 <= d && 26 > c.length; )
                b[d].src && c.unshift(b[d].src), d--;
              return ej(a, c);
            },
            ej = function (a, b) {
              for (
                var c = 0,
                  d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && Pg(_.Og(a)[3] || null),
                  e = Math.min(b.length, 26),
                  f = 0;
                f < e;
                f++
              )
                (a = (null != b[f] && Pg(_.Og(b[f])[3] || null)) || ''),
                  (c *= 4),
                  a &&
                    (d && a == d ? (c += 3) : $i(b[f]) ? (c += 2) : a && 0 <= aj(a) && (c += 1));
              return c;
            },
            gj = function (a) {
              a = a.l.document && a.l.document.scripts ? a.l.document.scripts : [];
              if (!a) return 0;
              for (var b = [], c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                d && null != d.src && b.push(Pg(_.Og(d.src)[3] || null));
              }
              return bj(b);
            },
            cj = function (a, b) {
              this.url = a;
              this.M = b;
              this.pd = !1;
              this.depth = null;
            };
          var hj = null,
            ij = function () {
              if (null === hj) {
                hj = '';
                try {
                  var a = '';
                  try {
                    a = _.H.top.location.hash;
                  } catch (c) {
                    a = _.H.location.hash;
                  }
                  if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    hj = b ? b[1] : '';
                  }
                } catch (c) {}
              }
              return hj;
            };
          var lj;
          _.jj = function () {
            const $___old_d6fff59f464328bf = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_d6fff59f464328bf)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_2b47892348e4e4b9.performance
                ));
              return function () {
                var a = _.H.performance;
                return a && a.now && a.timing
                  ? Math.floor(a.now() + a.timing.navigationStart)
                  : Dd();
              }.apply(this, arguments);
            } finally {
              if ($___old_d6fff59f464328bf)
                ({}.constructor.defineProperty(window, 'performance', $___old_d6fff59f464328bf));
            }
          };
          _.kj = function (a) {
            const $___old_a7bd36923c893cf1 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_a7bd36923c893cf1)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_2b47892348e4e4b9.performance
                ));
              return function () {
                a = void 0 === a ? _.H : a;
                return (a = a.performance) && a.now ? a.now() : null;
              }.apply(this, arguments);
            } finally {
              if ($___old_a7bd36923c893cf1)
                ({}.constructor.defineProperty(window, 'performance', $___old_a7bd36923c893cf1));
            }
          };
          lj = function (a) {
            const $___old_cc4f2b554ffa29d4 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_cc4f2b554ffa29d4)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_2b47892348e4e4b9.performance
                ));
              return function () {
                var b = _.H.performance;
                return (b && b.timing && b.timing[a]) || 0;
              }.apply(this, arguments);
            } finally {
              if ($___old_cc4f2b554ffa29d4)
                ({}.constructor.defineProperty(window, 'performance', $___old_cc4f2b554ffa29d4));
            }
          };
          var mj = function (a, b, c, d, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = void 0 === d ? 0 : d;
            this.uniqueId = Math.random();
            this.slotId = e;
          };
          var nj, oj, pj, qj, sj, uj;
          nj = _.H.performance;
          oj = !!(nj && nj.mark && nj.measure && nj.clearMarks);
          pj = Sa(function () {
            var a;
            if ((a = oj)) (a = ij()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
            return a;
          });
          qj = function (a, b) {
            this.events = [];
            this.B = b || _.H;
            var c = null;
            b &&
              ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
              (this.events = b.google_js_reporting_queue),
              (c = b.google_measure_js_timing));
            this.j = pj() || (null != c ? c : Math.random() < a);
          };
          _.rj = function (a) {
            a &&
              nj &&
              pj() &&
              (nj.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'),
              nj.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
          };
          sj = function (a, b, c, d, e, f) {
            a.j &&
              ((b = new mj(b, c, d, void 0 === e ? 0 : e, f)),
              !a.j || 2048 < a.events.length || a.events.push(b));
          };
          qj.prototype.start = function (a, b) {
            if (!this.j) return null;
            a = new mj(a, b, _.kj() || _.jj());
            b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
            nj && pj() && nj.mark(b);
            return a;
          };
          _.tj = function (a, b) {
            if (a.j && 'number' === typeof b.value) {
              b.duration = (_.kj() || _.jj()) - b.value;
              var c = 'goog_' + b.label + '_' + b.uniqueId + '_end';
              nj && pj() && nj.mark(c);
              !a.j || 2048 < a.events.length || a.events.push(b);
            }
          };
          uj = function (a, b, c) {
            var d = _.kj();
            d && sj(a, b, 9, d, 0, c);
          };
          var zc = function (a, b) {
            try {
              -1 == a.indexOf(b) && (a = b + '\n' + a);
              for (var c; a != c; )
                (c = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
              return a.replace(/\n */g, '\n');
            } catch (d) {
              return b;
            }
          };
          var vj = ih();
          var wj = function (a) {
              this.methodName = a;
            },
            xj = new wj(1),
            yj = new wj(15),
            zj = new wj(2),
            Aj = new wj(3),
            Bj = new wj(5),
            Cj = new wj(6),
            Dj = new wj(7),
            Ej = new wj(8),
            Fj = new wj(14),
            Gj = function (a, b, c) {
              return b[a.methodName] || c || function () {};
            };
          var Hj = function () {
              this.j = function () {};
              this.l = function () {
                return [];
              };
              this.B = function () {
                return [];
              };
            },
            Ij = function (a, b, c) {
              a.j = Gj(xj, b, function () {});
              a.l = function (d) {
                return Gj(zj, b, function () {
                  return [];
                })(d, c);
              };
              a.B = function () {
                return Gj(Aj, b, function () {
                  return [];
                })(c);
              };
            };
          vd(Hj);
          var Jj = function (a) {
              Hj.F().j(a);
            },
            Kj = function (a) {
              return Hj.F().l(a);
            },
            Lj = function () {
              return Hj.F().B();
            };
          var Mj = function () {
              this.l = function (a, b) {
                return void 0 === b ? !1 : b;
              };
              this.B = function (a, b) {
                return void 0 === b ? 0 : b;
              };
              this.o = function (a, b) {
                return void 0 === b ? '' : b;
              };
              this.m = function (a, b) {
                return (b = void 0 === b ? [] : b);
              };
              this.j = function () {};
            },
            Nj = function (a, b, c) {
              a.l = function (d, e) {
                return Gj(Bj, b)(d, e, c);
              };
              a.B = function (d, e) {
                return Gj(Cj, b)(d, e, c);
              };
              a.o = function (d, e) {
                return Gj(Dj, b)(d, e, c);
              };
              a.m = function (d, e) {
                return Gj(Ej, b)(d, e, c);
              };
              a.j = function () {
                Gj(yj, b)(c);
              };
            },
            Oj;
          vd(Mj);
          _.t = function (a) {
            var b = void 0 === b ? !1 : b;
            return Mj.F().l(a, b);
          };
          _.w = function (a, b) {
            b = void 0 === b ? 0 : b;
            return Mj.F().B(a, b);
          };
          Oj = function (a) {
            var b = void 0 === b ? '' : b;
            return Mj.F().o(a, b);
          };
          _.Pj = function (a) {
            var b = void 0 === b ? [] : b;
            return Mj.F().m(a, b);
          };
          var Qj = {},
            Rj =
              ((Qj.companion_ads = 'companionAds'),
              (Qj.content = 'content'),
              (Qj.publisher_ads = 'pubads'),
              Qj),
            Sj = function (a) {
              return (
                a +
                'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
              );
            };
          var wc = function () {
              return _.H.googletag || (_.H.googletag = {});
            },
            vc = function (a, b) {
              var c = wc();
              c.hasOwnProperty(a) || (c[a] = b);
            },
            Tj = function (a, b) {
              a.addEventListener
                ? a.addEventListener('load', b, !1)
                : a.attachEvent && a.attachEvent('onload', b);
            };
          var Uj = new x.Map(),
            Vj = new x.Map(),
            Wj = function () {},
            Xj = function (a, b) {
              return a instanceof b || (a instanceof Wj && ((a = Uj.get(a)), a instanceof b))
                ? a
                : null;
            },
            Yj = function (a) {
              return (a = Rj[a]) ? wc()[a]() : null;
            };
          var Zj = function (a) {
              var b = a.split('/');
              return '/' == a.charAt(0) && 2 <= b.length
                ? b[1]
                : '/' != a.charAt(0) && 1 <= b.length
                ? b[0]
                : '';
            },
            ak = function (a) {
              a = a.map(function (b) {
                return Zj(b.getSlotId().getAdUnitPath());
              });
              ja(a);
              return a;
            };
          var bk = {
              247: 'https://securepubads.g.doubleclick.net',
              7: 0.02,
              13: 1500,
              23: 0.001,
              37: 0.01,
              38: 0.001,
              58: 1,
              150: '',
              211: !1,
              253: !1,
              172: null,
              245: {},
              180: null,
              246: [],
              227: {},
              226: [],
              248: 0,
              228: '//www.googletagservices.com/pubconsole/',
              250: null,
              252: null,
              251: null,
              255: void 0,
              256: [],
            },
            ek,
            fk,
            gk,
            hk,
            ik;
          bk[6] = jh(window);
          bk[49] = new Date().getTime();
          bk[36] = ih();
          bk[148] = vj;
          bk[221] = ih();
          bk[254] = ih();
          bk[204] = _.hh('-1', -1);
          var ck = function () {
            for (var a in bk) this[a] = bk[a];
          };
          vd(ck);
          _.dk = function (a) {
            return ck.F()[a];
          };
          ek = function (a, b) {
            ck.F()[a] = b;
          };
          fk = wc();
          gk = ck.F();
          hk = fk._vars_;
          for (ik in hk) gk[ik] = hk[ik];
          fk._vars_ = gk;
          var jk = function () {
            var a = _.t(85) || _.t(84);
            _.H.google_measure_js_timing = a || _.H.google_measure_js_timing;
            qj.call(this, a ? 1 : 0, _.H);
            this.l = 0;
          };
          _.M(jk, qj);
          vd(jk);
          var kk = function (a) {
              if (15360 >= a.length) return a;
              var b = _.t(164) && /&supporting_urls=/.test(a),
                c = a;
              if (15360 < c.length) {
                var d = b ? -1 : c.lastIndexOf('&', 15352);
                -1 !== d
                  ? (c = c.substring(0, d))
                  : ((c = c.substring(0, 15352)),
                    (c = c.replace(/%\w?$/, '')),
                    b && (c = c.replace(/&[^=]*=?$/, '')));
                c += '&trunc=1';
              }
              b = c;
              sj(jk.F(), (9).toString(), 9, a.length - b.length + 8);
              return b;
            },
            lk = function (a) {
              var b = a;
              'about:blank' != a &&
                ((b = b
                  .replace(/</g, '%3C')
                  .replace(/>/g, '%3E')
                  .replace(/"/g, '%22')
                  .replace(/'/g, '%27')),
                /^https?:\/\//.test(b) || (b = 'unknown:' + b));
              return b;
            },
            mk = Sa(function () {
              return !!kh(_.H.location.href);
            }),
            nk = function () {
              return 'https://pagead2.googlesyndication.com';
            },
            ok = function (a) {
              var b = a.indexOf('google_preview=', a.lastIndexOf('?')),
                c = a.indexOf('&', b);
              -1 == c && ((c = a.length - 1), --b);
              return a.substring(0, b) + a.substring(c + 1, a.length);
            },
            pk = function (a, b) {
              b = void 0 === b ? window : b;
              return b.location
                ? b.URLSearchParams
                  ? (a = b.URLSearchParams
                      ? new b.URLSearchParams(b.location.search).get(a)
                      : null) && a.length
                    ? a
                    : null
                  : (a = new RegExp('[?&]' + a + '=([^&]*)').exec(b.location.search))
                  ? decodeURIComponent(a[1])
                  : null
                : null;
            },
            qk = function (a, b) {
              b = void 0 === b ? window : b;
              return !!pk(a, b);
            };
          var Mb = function () {
            var a = Number('2020111901');
            return 1 > a || Math.floor(a) != a
              ? (pb({ v: '2020111901' }, 'gpt_inv_ver'), '1')
              : '2020111901';
          };
          var sk = function (a, b, c) {
              b = void 0 === b ? rk : b;
              if (null == c || 0 > c || 1 < c) c = _.dk(23);
              this.B = Math.random();
              this.A = this.B < c;
              this.j = a;
              this.m = Ob(_.H);
              this.o = b;
              this.l = { pvsid: this.m };
            },
            K = function (a, b, c) {
              'string' != typeof c && (c = String(c));
              /^\w+$/.test(b) && c && (a.l[b] = c);
            },
            uk = function (a, b, c) {
              b = void 0 === b ? null : b;
              c = void 0 === c ? !1 : c;
              b = void 0 === b ? null : b;
              c = void 0 === c ? !1 : c;
              if (mk()) b = !0;
              else {
                var d = a.A;
                b && 0 <= b && (d = (c ? a.B : Math.random()) < b);
                b = d && !!a.j;
              }
              b && (_.t(305) ? pb(a.l, a.j) : ((a = tk(a) || ''), _.wi(window, a)));
            },
            tk = function (a) {
              var b = a.o + '/pagead/gen_204?id=' + encodeURIComponent(a.j);
              _.Yb(a.l, function (c, d) {
                c && (b += '&' + d + '=' + encodeURIComponent(c));
              });
              return b;
            },
            yc = function (a, b) {
              b = void 0 === b ? vk : b;
              K(a, 'vrg', Mb());
              var c = ak(b);
              c.length &&
                (3 >= c.length
                  ? K(a, 'nw_id', c.join())
                  : ((c = c.slice(0, 3)), c.push('__extra__'), K(a, 'nw_id', c.join())));
              K(a, 'nslots', b.length.toString());
              b = Lj();
              b.length && K(a, 'eid', b.join());
              K(a, 'pub_url', document.URL);
            },
            mc = function (a, b, c) {
              c = void 0 === c ? {} : c;
              var d = c.He || rk;
              c = c.Aa;
              if (void 0 === c || 0 > c || 1 < c) c = _.dk(23);
              Math.random() < c && ((a = new sk(a, d)), b(a), uk(a, 1, !0));
            },
            vk = [],
            rk = nk();
          var wk = _.dk(38),
            xk = function (a, b) {
              a = { methodId: a };
              b.name && (a.name = b.name);
              b.message && (a.message = b.message.substring(0, 512));
              b.fileName && (a.fileName = b.fileName);
              b.lineNumber && (a.lineNumber = b.lineNumber);
              b.stack && (a.stack = zc(b.stack, ''));
              return a;
            },
            zk = function (a, b, c) {
              c = void 0 === c ? !1 : c;
              yk(a, b);
              if (!c) throw b;
            },
            yk = function (a, b, c) {
              c = void 0 === c ? wk : c;
              if (!b.isReported)
                try {
                  b.isReported = !0;
                  var d = xk(a, b),
                    e = new sk('gpt_exception');
                  try {
                    yc(e);
                  } catch (f) {}
                  _.Yb(d, function (f, g) {
                    return K(e, g, f);
                  });
                  uk(e, c);
                } catch (f) {}
            },
            S = function (a, b, c) {
              return J(a, b, c, _.t(144));
            },
            J = function (a, b, c, d) {
              d = void 0 === d ? !1 : d;
              return function (e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                g = !1;
                var h = null,
                  k = c || zk,
                  l = jk.F();
                try {
                  var m = _.t(85);
                  m && l && (h = l.start(a.toString(), 3));
                  var n = b.apply(this, f);
                  g = !0;
                  m && l && _.tj(l, h);
                } catch (u) {
                  g ? yk(110, u) : (n = k.call(this, a, u)), _.rj(h);
                }
                if (d && 0.1 > Math.random())
                  try {
                    var p = Error();
                    mc(
                      'gpt_api_usage',
                      function (u) {
                        K(u, 'methodId', a);
                        K(u, 'args', f.length);
                        K(u, 'stack', zc(p.stack, p.message));
                        yc(u);
                      },
                      { Aa: 1 }
                    );
                  } catch (u) {}
                return n;
              };
            },
            Hc = function (a, b, c) {
              J(a, b, c, !1)();
            };
          var Ak = function (a) {
            this.push = S(76, function (b) {
              return a.push.apply(a, arguments);
            });
          };
          _.M(Ak, Wj);
          var Bk = function () {
              this.id = 'goog_' + Re++;
            },
            Ck = function () {
              _.Q.apply(this, arguments);
              this.m = new x.Map();
            };
          _.M(Ck, _.Q);
          Ck.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.m.clear();
          };
          var Dk = function (a, b, c) {
              var d, e;
              if (a.fa) return function () {};
              var f = b.id,
                g =
                  null !== (e = null === (d = a.m.get(f)) || void 0 === d ? void 0 : d.add(c)) &&
                  void 0 !== e
                    ? e
                    : new x.Set([c]);
              a.m.set(f, g);
              return function () {
                var h;
                null === (h = a.m.get(b.id)) || void 0 === h ? void 0 : h.delete(c);
              };
            },
            Ek = function (a, b) {
              return new x.Promise(function (c) {
                var d = Dk(a, b, function (e) {
                  d();
                  c(e);
                });
              });
            };
          Ck.prototype.dispatchEvent = function (a, b, c) {
            var d = a.id,
              e;
            return $a(this, function g () {
              var h = this,
                k,
                l,
                m,
                n,
                p,
                u;
              return ab(g, function (A) {
                1 == A.j &&
                  ((k = h),
                  (l = document.createEvent('CustomEvent')),
                  l.initCustomEvent(d, !0, !0, c),
                  (m = null !== (e = h.m.get(d)) && void 0 !== e ? e : new x.Set()),
                  (n = {}),
                  (p = _.G(m)),
                  (u = p.next()));
                if (5 != A.j) {
                  if (u.done) {
                    A.j = 0;
                    return;
                  }
                  n.zb = u.value;
                  return cb(A, 0, 5);
                }
                J(
                  b,
                  (function (z) {
                    return function () {
                      k.m.has(d) && m.has(z.zb) && z.zb(l);
                    };
                  })(n),
                  function (z, E) {
                    return void zk(z, E, !0);
                  }
                )();
                n = { zb: n.zb };
                u = p.next();
                A.j = 2;
              });
            });
          };
          var Fk = new Bk(),
            Gk = new Bk(),
            Hk = new Bk(),
            Ik = new Bk(),
            Jk = new Bk(),
            Kk = new Bk(),
            Lk = new Bk(),
            Mk = new Bk(),
            Nk = new Bk(),
            Ok = new Bk(),
            Pk = new Bk();
          var Qk = function (a, b) {
            b = void 0 === b ? [] : b;
            this.l = a;
            this.j = b;
          };
          Qk.prototype.getMessageId = function () {
            return this.l;
          };
          Qk.prototype.getMessageArgs = function () {
            return this.j;
          };
          var Rk = function (a, b, c) {
            this.B = new Date();
            this.o = c && Jc(c);
            this.j = a;
            this.l = b;
          };
          _.q = Rk.prototype;
          _.q.getSlot = function () {
            return this.o;
          };
          _.q.getLevel = function () {
            return this.j;
          };
          _.q.getTimestamp = function () {
            return this.B;
          };
          _.q.getMessage = function () {
            return this.l;
          };
          _.q.toString = function () {
            return this.B.toTimeString() + ': ' + Sk[this.j] + ': ' + this.l;
          };
          var Sk = ['Debug', 'Info', 'Warning', 'Error', 'Fatal'];
          var La = function () {
              this.j = new ai(1000);
              this.l = 0;
            },
            Tk = function (a, b) {
              return ci(a.j).filter(function (c) {
                return c.getSlot() === b;
              });
            },
            Uk = function (a, b) {
              return ci(a.j).filter(function (c) {
                return c.getLevel() >= b;
              });
            };
          La.prototype.log = function (a, b, c) {
            var d = this;
            c = new Rk(a, b, void 0 === c ? null : c);
            if (_.w(488) && 100 > this.l && (2 === a || 3 === a)) {
              var e = b.getMessageId(),
                f = b.getMessageArgs();
              b = _.w(488);
              mc(
                'gpt_eventlog_messages',
                function (g) {
                  ++d.l;
                  yc(g);
                  K(g, 'level', a);
                  K(g, 'messageId', e);
                  K(g, 'args', f.join('|'));
                  var h = Error();
                  K(g, 'stack', zc(h.stack, h.message));
                },
                { Aa: b }
              );
            }
            this.j.add(c);
            return c;
          };
          La.prototype.info = function (a, b) {
            return this.log(1, a, b);
          };
          La.prototype.K = function (a, b) {
            return this.log(2, a, b);
          };
          La.prototype.error = function (a, b) {
            return this.log(3, a, b);
          };
          vd(La);
          var Vk = Sa(function () {
              var a = _.Pj(5).indexOf(String(Mh()));
              a = _.Pj(477)[a] || '';
              var b = void 0 === b ? window.document : b;
              if (a && b.head) {
                var c = document.createElement('meta');
                c.httpEquiv = 'origin-trial';
                c.content = a;
                b.head.appendChild(c);
              }
            }),
            Wk = function (a) {
              var b = void 0 === b ? navigator : b;
              Vk();
              b =
                'scheduling' in b &&
                'isInputPending' in b.scheduling &&
                b.scheduling.isInputPending();
              var c = _.w(31);
              b &&
                Math.random() < c &&
                setTimeout(function () {
                  mc(
                    'gpt_input_pending',
                    function (d) {
                      yc(d);
                      K(d, 'ctx', a);
                      K(d, 'corr', Ob(_.H));
                      var e = Error('inputPending');
                      K(d, 'stack', zc(e.stack, e.message));
                    },
                    { Aa: 1 }
                  );
                }, 1);
              return b;
            };
          var Xk = function () {
            Ck.call(this);
          };
          _.M(Xk, Ck);
          var Jc = function (a) {
            var b = Vj.get(a);
            if (!b) {
              var c = (b = a.La());
              Uj.set(c, a);
              Vj.set(a, c);
            }
            return b;
          };
          var T = function (a) {
              return function (b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return new Qk(a, [].concat(_.Ub(c)));
              };
            },
            Yk = function (a) {
              return (
                '[' +
                a
                  .map(function (b) {
                    return 'string' === typeof b
                      ? "'" + b + "'"
                      : Array.isArray(b)
                      ? Yk(b)
                      : String(b);
                  })
                  .join(', ') +
                ']'
              );
            },
            Zk = function (a, b) {
              b = Yk(b);
              b = b.substring(1, b.length - 1);
              return new Qk(96, [a, b]);
            },
            $k = T(2),
            al = T(3),
            bl = T(4),
            cl = T(5),
            dl = T(6),
            el = T(12),
            Ma = T(13),
            fl = T(14),
            gl = T(16),
            hl = T(17),
            il = T(19),
            jl = T(20),
            kl = T(23),
            ll = T(26),
            ml = T(28),
            nl = T(30),
            ol = T(31),
            pl = T(34),
            ql = T(35),
            rl = T(36),
            sl = T(38),
            tl = T(40),
            ul = T(44),
            vl = T(46),
            wl = T(47),
            xl = T(48),
            yl = T(50),
            zl = T(57),
            Al = T(58),
            Bl = T(60),
            Cl = T(63),
            Dl = T(64),
            El = T(66),
            Fl = T(68),
            Gl = T(69),
            Hl = T(70),
            Il = T(71),
            Jl = T(78),
            Kl = T(79),
            Ll = T(80),
            Ml = T(82),
            Nl = T(84),
            Ol = T(85),
            Pl = T(87),
            Ql = T(88),
            Rl = T(92),
            Sl = T(93),
            Tl = T(99),
            Ul = T(100),
            Vl = T(101),
            Wl = T(102),
            Xl = T(103),
            Yl = T(104),
            Zl = T(105),
            $l = T(106),
            am = T(107),
            bm = T(108),
            cm = T(111),
            dm = T(113),
            em = T(114),
            fm = T(115),
            gm = T(116),
            hm = T(117),
            im = T(118),
            jm = T(119),
            xc = T(120),
            km = T(121),
            lm = T(122);
          var mm = function () {
            Ck.call(this);
            this.C = this.j = 0;
          };
          _.M(mm, Xk);
          mm.prototype.La = function () {
            return new Ak(this);
          };
          mm.prototype.push = function (a) {
            const $___old_1136eda5143ca1d7 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'sessionStorage'
            );
            try {
              if ($___old_1136eda5143ca1d7)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___stub_b317e19f866a2da7.sessionStorage
                ));
              return function () {
                for (var b = La.F(), c = 0; c < arguments.length; ++c)
                  try {
                    'function' === typeof arguments[c] && (arguments[c](), this.j++);
                  } catch (d) {
                    this.C++,
                      window.console &&
                        window.console.error &&
                        window.console.error('Exception in queued GPT command', d),
                      b.error(nl(String(d.message)));
                  }
                b.info(ol(String(this.j), String(this.C)));
                return this.j;
              }.apply(this, arguments);
            } finally {
              if ($___old_1136eda5143ca1d7)
                ({}.constructor.defineProperty(
                  window,
                  'sessionStorage',
                  $___old_1136eda5143ca1d7
                ));
            }
          };
          var om = function () {
            mm.call(this);
            var a = this;
            this.o = [];
            this.D = !1;
            this.A = this.l = 0;
            this.H = J(635, function () {
              a.l = 0;
              nm(a);
            });
          };
          _.M(om, mm);
          var pm = function (a) {
              return a.D || !a.o.length
                ? 0
                : _.t(171)
                ? 1
                : _.t(170)
                ? Wk(1)
                  ? 1
                  : 0
                : _.t(247) && Wk(1)
                ? 2
                : 0;
            },
            qm = function (a) {
              a.l || (a.l = setTimeout(a.H, _.w(479)));
            },
            nm = function (a) {
              if (a.l) {
                if (!a.D) return;
                clearTimeout(a.l);
                a.l = 0;
              }
              for (var b = La.F(); a.o.length; ) {
                var c = a.o.shift();
                try {
                  c(), a.j++;
                } catch (e) {
                  a.C++,
                    window.console &&
                      window.console.error &&
                      window.console.error('Exception in queued GPT command', e),
                    b.error(nl(String(e.message)));
                }
                c = pm(a);
                if (1 === c) {
                  qm(a);
                  break;
                } else 2 === c && (a.A = a.A || _.jj());
              }
              b.info(ol(String(a.j), String(a.C)));
              if (a.A) {
                var d = _.jj() - a.A;
                a.A = 0;
                setTimeout(function () {
                  return void mc(
                    'gpt_input_pending',
                    function (e) {
                      yc(e);
                      K(e, 'ctx', 4);
                      K(e, 'corr', Ob(_.H));
                      K(e, 'ptr', d);
                    },
                    { Aa: 1 }
                  );
                }, 1);
              }
            },
            rm = function (a, b) {
              a.o = [].concat(_.Ub(a.o), _.Ub(b.filter(Nd)));
              _.t(173) && 1 === pm(a) ? qm(a) : nm(a);
            };
          om.prototype.push = function (a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            this.D = _.t(172);
            rm(this, b);
            return this.j;
          };
          var sm = function () {
            if (_.t(176)) {
              var a = wc().cmd;
              if (!a || Array.isArray(a)) {
                var b = new om();
                wc().cmd = Jc(b);
                a && 0 < a.length && rm(b, a);
              }
            } else if (((a = wc().cmd), !a || Array.isArray(a)))
              (b = new mm()), (wc().cmd = Jc(b)), a && 0 < a.length && b.push.apply(b, a);
          };
          sm = J(77, sm);
          var tm = function (a) {
            Tf(this, a, null, null);
          };
          Ed(tm, Pf);
          var vm = function (a) {
            Tf(this, a, um, null);
          };
          Ed(vm, Pf);
          var um = [13];
          var xm = function (a) {
            Tf(this, a, wm, null);
          };
          Ed(xm, Pf);
          var wm = [13];
          var ym = function (a) {
            Tf(this, a, null, null);
          };
          Ed(ym, Pf);
          var zm = function (a) {
            Tf(this, a, null, null);
          };
          Ed(zm, Pf);
          var Am = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Am, Pf);
          var Bm = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Bm, Pf);
          var Em = function (a) {
            Tf(this, a, Cm, Dm);
          };
          Ed(Em, Pf);
          var Fm = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Fm, Pf);
          var Cm = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38, 53],
            Dm = [
              [4, 41],
              [39, 48],
            ];
          Fm.prototype.getHtml = function () {
            return C(this, 1);
          };
          var Gm = function (a) {
              return 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
            },
            Hm = function (a, b) {
              b = void 0 === b ? _.H : b;
              a = a.scrollingElement || Gm(a);
              return new _.Va(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
            },
            Pa = function (a) {
              try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length));
              } catch (b) {
                return !1;
              }
            };
          var Im = function (a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
              return (void 0 === c ? 0 : c)
                ? new _.wg(b.innerWidth, b.innerHeight).round()
                : _.Dg(b || window).round();
            } catch (d) {
              return new _.wg(-12245933, -12245933);
            }
          };
          var Jm = function (a) {
            for (var b = 0, c = a, d = 0; a && a != a.parent; )
              (a = a.parent), d++, Rg(a) && ((c = a), (b = d));
            return { M: c, level: b };
          };
          var Km = function (a) {
              return !!a && a.top == a;
            },
            Lm = function (a, b, c, d) {
              c = c || a.google_ad_width;
              d = d || a.google_ad_height;
              if (Km(a)) return !1;
              var e = b.documentElement;
              if (c && d) {
                var f = 1,
                  g = 1;
                a.innerHeight
                  ? ((f = a.innerWidth), (g = a.innerHeight))
                  : e && e.clientHeight
                  ? ((f = e.clientWidth), (g = e.clientHeight))
                  : b.body && ((f = b.body.clientWidth), (g = b.body.clientHeight));
                if (g > 2 * d || f > 2 * c) return !1;
              }
              return !0;
            },
            Mm = function (a) {
              var b = a.location.href;
              if (a == a.top) return { url: b, Xb: !0 };
              var c = !1,
                d = a.document;
              d && d.referrer && ((b = d.referrer), a.parent == a.top && (c = !0));
              (a = a.location.ancestorOrigins) &&
                (a = a[a.length - 1]) &&
                -1 == b.indexOf(a) &&
                ((c = !1), (b = a));
              return { url: b, Xb: c };
            },
            Nm = function () {
              var a = Si();
              if (a == a.top) return 0;
              for (; a && a != a.top && Rg(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5;
              }
              return 1;
            };
          var Pm = function (a) {
            Tf(this, a, Om, null);
          };
          Ed(Pm, Pf);
          var Qm = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Qm, Pf);
          var Om = [1],
            Rm = function (a) {
              var b = new Qm();
              return ag(b, 1, a, 0);
            },
            Sm = function (a, b) {
              return ag(a, 2, b, 0);
            },
            Tm = function (a, b) {
              gg(a, 1, b, Qm);
            };
          var Vm = function (a, b) {
              var c = window;
              a: {
                try {
                  if (a) {
                    var d = a.getItem('google_experiment_mod');
                    break a;
                  }
                } catch (h) {}
                d = null;
              }
              var e = d || '';
              d = null;
              try {
                if (((d = ig(Pm, e)), e)) {
                  var f = ig(Pm, e);
                  Tm(f, Sm(Rm(1), -1));
                  f.m();
                }
              } catch (h) {
                Um(e), (d = new Pm());
              }
              f = P(d, Qm, 1);
              if (
                (f = ba(f, function (h) {
                  return Yf(h, 1, 0) === b;
                }))
              ) {
                var g = Yf(f, 2, 0);
                if (null === g || isNaN(g)) Um(e);
                else return g;
              }
              c = eh(c);
              if (null === c) return null;
              f ? Sm(f, c) : Tm(d, Sm(Rm(b), c));
              return fh(a, d.m()) ? c : null;
            },
            Um = function (a) {
              0.01 > Math.random() && pb({ data: a }, 'ls_tamp');
            };
          var Wm = {},
            Xm =
              ((Wm[3] = 'https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js'), Wm),
            Ym = {},
            Zm =
              ((Ym[3] =
                'https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js'),
              Ym);
          var $m = function (a) {
              this.j = a;
              this.l = Qe();
            },
            an = function (a) {
              var b = {};
              _.Gd(a, function (c) {
                b[c.j] = c.l;
              });
              return b;
            };
          var cn, dn, en;
          cn = function () {
            return 0 != _.bn(document);
          };
          _.bn = function (a) {
            return (
              { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ''
              ] || 0
            );
          };
          dn = function (a) {
            var b;
            a.visibilityState
              ? (b = 'visibilitychange')
              : a.mozVisibilityState
              ? (b = 'mozvisibilitychange')
              : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
            return b;
          };
          en = function (a) {
            return null != a.hidden
              ? a.hidden
              : null != a.mozHidden
              ? a.mozHidden
              : null != a.webkitHidden
              ? a.webkitHidden
              : null;
          };
          var gn, fn;
          gn = function () {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new fn();
          };
          _.hn = function (a) {
            a.google_reactive_ads_global_state
              ? null == a.google_reactive_ads_global_state.floatingAdsStacking &&
                (a.google_reactive_ads_global_state.floatingAdsStacking = new fn())
              : (a.google_reactive_ads_global_state = new gn());
            return a.google_reactive_ads_global_state;
          };
          fn = function () {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = [];
          };
          var jn, nn, on, pn;
          jn = 728 * 1.38;
          _.kn = function (a) {
            return a.innerHeight >= a.innerWidth;
          };
          _.mn = function (a) {
            var b = _.ln(a).clientWidth;
            a = a.innerWidth;
            return b && a ? b / a : 0;
          };
          nn = function (a, b) {
            return (a = _.ln(a).clientWidth)
              ? a > (void 0 === b ? 420 : b)
                ? 32768
                : 320 > a
                ? 65536
                : 0
              : 16384;
          };
          on = function (a) {
            return (a = _.mn(a)) ? (1.05 < a ? 262144 : 0.95 > a ? 524288 : 0) : 131072;
          };
          _.ln = function (a) {
            a = a.document;
            var b = {};
            a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
            return b || {};
          };
          pn = function (a) {
            var b = _.hn(window);
            b.adCount = b.adCount || {};
            b.adCount[a] = b.adCount[a] + 1 || 1;
          };
          _.qn = function (a) {
            return void 0 === a.pageYOffset
              ? (a.document.documentElement || a.document.body.parentNode || a.document.body)
                  .scrollTop
              : a.pageYOffset;
          };
          var sn = function (a, b, c) {
              a: {
                c = void 0 === c ? null : c;
                c = void 0 === c ? null : c;
                a = _.G(a);
                for (var d = a.next(); !d.done; d = a.next()) {
                  var e = _.H;
                  var f = d.value;
                  d = b;
                  var g = c;
                  g = void 0 === g ? null : g;
                  var h = e.document;
                  var k = f.x;
                  f = f.y;
                  h.hasOwnProperty('_goog_efp_called_') ||
                    (h._goog_efp_called_ = h.elementFromPoint(k, f));
                  if ((h = h.elementFromPoint(k, f))) {
                    if (!(k = rn(h, e, d, g)))
                      b: {
                        g = void 0 === g ? null : g;
                        k = e.document;
                        for (h = h.offsetParent; h && h != k.body; h = h.offsetParent)
                          if ((f = rn(h, e, d, g))) {
                            k = f;
                            break b;
                          }
                        k = null;
                      }
                    e = k || null;
                  } else e = null;
                  if (e) {
                    b = e;
                    break a;
                  }
                }
                b = null;
              }
              return null != b;
            },
            tn = function (a, b, c) {
              for (var d = [], e = 0; 3 > e; e++)
                for (var f = 0; 3 > f; f++) d.push({ x: (f / 2) * a, y: b + (e / 2) * (c - b) });
              return d;
            },
            rn = function (a, b, c, d) {
              d = void 0 === d ? null : d;
              if ('fixed' !== Ji(a, 'position')) return null;
              var e = _.w(1904);
              if ((1 === e && 'bottom' === c) || (2 === e && 'top' === c) || 3 === e) {
                if (
                  ((c =
                    'GoogleActiveViewInnerContainer' == a.getAttribute('class') ||
                    (1 >= _.Pi(_.Qi, a).width && 1 >= _.Pi(_.Qi, a).height)
                      ? !0
                      : !1),
                  d &&
                    d.j(
                      'ach_evt',
                      {
                        url: b.location.href,
                        tn: a.tagName,
                        id: a.getAttribute('id'),
                        cls: a.getAttribute('class'),
                        ign: c,
                      },
                      1
                    ),
                  !c)
                )
                  return a;
              } else return a;
              return null;
            };
          var un, vn;
          un = function (a) {
            try {
              a.setItem('__storage_test__', '__storage_test__');
              var b = a.getItem('__storage_test__');
              a.removeItem('__storage_test__');
              return '__storage_test__' == b;
            } catch (c) {
              return !1;
            }
          };
          _.wn = function (a) {
            try {
              if (null == a || !un(a)) return null;
              var b = a.getItem('__lsv__');
              if (!b) return [];
              try {
                var c = JSON.parse(b);
              } catch (d) {}
              return !Array.isArray(c) ||
                _.Id(c, function (d) {
                  return !_.B(Number, 'isInteger').call(Number, d);
                })
                ? (a.removeItem('__lsv__'), [])
                : vn(c);
            } catch (d) {
              return null;
            }
          };
          vn = function (a) {
            a = void 0 === a ? [] : a;
            var b = Date.now();
            return _.Db(a, function (c) {
              return 3600000 > b - c;
            });
          };
          _.xn = function (a) {
            return !!a && 1 > a.length;
          };
          var yn = function (a, b, c) {
            var d = 0;
            try {
              (d |= a != a.top ? 512 : 0),
                (d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0);
            } catch (g) {
              d |= 32;
            }
            var e = 0;
            try {
              e |= nn(a, 2500);
              if (_.t(309)) {
                var f = _.ln(a).clientHeight;
                e |= f ? (320 > f ? -2147483648 : 0) : 1073741824;
              }
              e |= on(a);
              b && !_.xn(_.wn(c)) && (e |= 134217728);
            } catch (g) {
              e |= 32;
            }
            return d | e;
          };
          var zn = function () {
            var a = {};
            return (
              (a.adsense_channel_ids = 'channel'),
              (a.adsense_ad_types = 'ad_type'),
              (a.adsense_ad_format = 'format'),
              (a.adsense_background_color = 'color_bg'),
              (a.adsense_border_color = 'color_border'),
              (a.adsense_link_color = 'color_link'),
              (a.adsense_text_color = 'color_text'),
              (a.adsense_url_color = 'color_url'),
              (a.page_url = 'url'),
              (a.adsense_allow_expandable_ads = 'ea'),
              (a.adsense_encoding = 'oe'),
              (a.adsense_family_safe = 'adsafe'),
              (a.adsense_flash_version = 'flash'),
              (a.adsense_font_face = 'f'),
              (a.adsense_hints = 'hints'),
              (a.adsense_keyword_type = 'kw_type'),
              (a.adsense_keywords = 'kw'),
              (a.adsense_test_mode = 'adtest'),
              (a.alternate_ad_iframe_color = 'alt_color'),
              (a.alternate_ad_url = 'alternate_ad_url'),
              (a.demographic_age = 'cust_age'),
              (a.demographic_gender = 'cust_gender'),
              (a.document_language = 'hl'),
              a
            );
          };
          var Bn = function (a) {
            Tf(this, a, An, null);
          };
          Ed(Bn, Pf);
          var An = [2],
            Cn = function (a) {
              return C(a, 1);
            },
            Dn = function (a, b) {
              return D(a, 1, b);
            },
            En = function (a, b) {
              return D(a, 2, b || []);
            };
          var Fn = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Fn, Pf);
          var Gn = function (a, b) {
              return D(a, 1, b);
            },
            Hn = function (a, b) {
              return D(a, 2, b);
            },
            In = function () {
              var a = new Fn();
              return D(a, 3, !0);
            };
          var Jn = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Jn, Pf);
          var Ln = function (a) {
            Tf(this, a, Kn, null);
          };
          Ed(Ln, Pf);
          var Kn = [2];
          var Mn = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Mn, Pf);
          var On = function (a) {
            Tf(this, a, Nn, null);
          };
          Ed(On, Pf);
          var Nn = [3, 4, 5, 6, 8, 9];
          On.prototype.getAdUnitPath = function () {
            return C(this, 1);
          };
          On.prototype.getDomId = function () {
            return C(this, 2);
          };
          var Pn = function (a, b) {
            D(a, 2, b);
          };
          On.prototype.getClickUrl = function () {
            return C(this, 7);
          };
          var Qn = function (a, b) {
              fg(a, 9, b);
            },
            Rn = function (a) {
              return Yf(a, 15, 0);
            };
          var Sn = function (a, b, c, d, e) {
              if ('string' !== typeof c || ie(c)) e.K(Zk('Slot.setTargeting', [c, d]), a);
              else {
                var f = [];
                Array.isArray(d)
                  ? (f = d)
                  : wd(d)
                  ? (f = _.t(437) ? [].concat(_.Ub(d)) : _.B(Array, 'from').call(Array, d))
                  : d && (f = [d]);
                f = f.map(String);
                (d = ((L = P(b, Bn, 9)), _.B(L, 'find')).call(L, function (g) {
                  return Cn(g) === c;
                }))
                  ? En(d, f)
                  : ((d = En(Dn(new Bn(), c), f)), gg(b, 9, d, Bn));
                e.info(hl(c, f.join(), a.getSlotId().getAdUnitPath()), a);
              }
            },
            Tn = function (a, b, c, d) {
              if (null == c || 'object' !== typeof c)
                d.error(Zk('Slot.updateTargetingFromMap', [c]), a);
              else
                for (
                  var e = _.G(_.B(Object, 'keys').call(Object, c)), f = e.next();
                  !f.done;
                  f = e.next()
                )
                  (f = f.value), Sn(a, b, f, c[f], d);
            };
          var Un = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Un, Pf);
          var Vn = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Vn, Pf);
          var Xn = function (a) {
            Tf(this, a, Wn, null);
          };
          Ed(Xn, Pf);
          var Wn = [2, 3, 7, 14],
            Yn = function (a, b) {
              fg(a, 2, b);
            },
            Zn = function (a) {
              return dg(a, Vn, 25);
            };
          var $n = function () {};
          $n.F = function () {
            throw Error('Must be overridden');
          };
          var ao = function () {
            this.j = new x.Map();
          };
          _.M(ao, $n);
          ao.F = $n.F;
          vd(ao);
          var bo = function () {
              this.l = {};
              this.j = new Xn();
              D(this.j, 26, Nh());
              ((_.t(417) && 2 === th()) || _.dk(36)) && D(this.j, 15, !0);
            },
            co = function (a) {
              var b = bo.F(),
                c = a.getDomId();
              if (c && !b.l.hasOwnProperty(c)) {
                var d = ao.F(),
                  e = ++jk.F().l;
                d.j.set(c, e);
                D(a, 20, e);
                b.l[c] = a;
              }
            },
            eo = function () {
              return bo.F().l;
            },
            fo = function (a, b) {
              return a.l[b] || null;
            };
          vd(bo);
          var go = function () {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null;
          };
          var ho = '',
            io = null,
            jo = function () {
              for (
                var a = Oj(2) || '0-0-0',
                  b = a.split('-').map(function (e) {
                    return Number(e);
                  }),
                  c = ['1', '0', '37'].map(function (e) {
                    return Number(e);
                  }),
                  d = 0;
                d < b.length;
                d++
              ) {
                if (b[d] > c[d]) return a;
                if (b[d] < c[d]) break;
              }
              return '1-0-37';
            },
            ko = function () {
              ho || (ho = jo());
              return ho;
            },
            lo = function () {
              if (null == io) {
                for (var a = _.Pj(1), b = [], c = 0; c < a.length; c += 2) Qg(a[c], a[c + 1], b);
                io = b.join('&');
              }
              return io;
            },
            mo = function (a) {
              var b = La.F(),
                c = new Mn();
              if (!a || !_.ha(a)) return null;
              var d = !1;
              _.Yb(a, function (e, f) {
                switch (f) {
                  case 'allowOverlayExpansion':
                    'boolean' === typeof e
                      ? D(c, 1, a.allowOverlayExpansion)
                      : (b.error(Vl('allowOverlayExpansion', String(a.allowOverlayExpansion))),
                        (d = !0));
                    break;
                  case 'allowPushExpansion':
                    'boolean' === typeof e
                      ? D(c, 2, a.allowPushExpansion)
                      : (b.error(Vl('allowPushExpansion', String(a.allowPushExpansion))),
                        (d = !0));
                    break;
                  case 'sandbox':
                    !0 === e
                      ? D(c, 3, a.sandbox)
                      : (b.error(Vl('sandbox', String(a.sandbox))), (d = !0));
                    break;
                  case 'useUniqueDomain':
                    'boolean' === typeof e
                      ? D(c, 4, a.useUniqueDomain)
                      : null !== e &&
                        (b.error(Vl('useUniqueDomain', String(a.useUniqueDomain))), (d = !0));
                    break;
                  default:
                    b.K(Ul(f));
                }
              });
              return d ? null : c;
            },
            no = function (a) {
              var b = new Mn();
              a = _.G(a);
              for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value)) {
                  if (Uf(c, 1)) {
                    var d = r(c, 1);
                    D(b, 1, d);
                  }
                  Uf(c, 2) && ((d = r(c, 2)), D(b, 2, d));
                  Uf(c, 3) && ((d = r(c, 3)), D(b, 3, d));
                  Uf(c, 4) && ((c = r(c, 4)), D(b, 4, c));
                }
              return b;
            };
          var oo = function (a, b) {
            this.l = a;
            this.j = b;
          };
          oo.prototype.getWidth = function () {
            return this.l;
          };
          oo.prototype.getHeight = function () {
            return this.j;
          };
          var po = function (a) {
              return Array.isArray(a) && 2 == a.length
                ? _.t(360)
                  ? Oh(a[0]) && Oh(a[1])
                  : Ph(a[0]) && Ph(a[1])
                : 'string' === typeof a && 'fluid' == a;
            },
            qo = function (a) {
              return Array.isArray(a) && 2 == a.length && Ph(a[0]) && Ph(a[1]);
            },
            ro = function (a) {
              return Array.isArray(a) ? Hn(Gn(new Fn(), a[0]), a[1]) : In();
            },
            to = function (a) {
              var b = [];
              if (so(a)) b.push(ro(a));
              else if (Array.isArray(a))
                for (var c = 0; c < a.length; ++c) {
                  var d = a[c];
                  so(d) && b.push(ro(d));
                  a: {
                    var e = ['fluid'];
                    if (wd(d) && wd(e) && d.length == e.length) {
                      for (var f = d.length, g = na, h = 0; h < f; h++)
                        if (!g(d[h], e[h])) {
                          d = !1;
                          break a;
                        }
                      d = !0;
                    } else d = !1;
                  }
                  d && b.push(In());
                }
              return b;
            },
            uo = function (a) {
              if (!a || !Array.isArray(a) || 2 !== a.length) return null;
              var b = a[0];
              a = a[1];
              if ('number' === typeof b && 0 <= b) b = Math.floor(b);
              else if (null !== b) return null;
              if ('number' === typeof a && 0 <= a) a = Math.floor(a);
              else if (null !== a) return null;
              return Hn(Gn(new Fn(), b), a);
            },
            vo = function (a) {
              var b = null,
                c = null;
              var d = a && (Array.isArray(a.fixed) || 'fluid' === a.fixed);
              var e = a && Array.isArray(a.max);
              if (a && !Array.isArray(a) && (d || e)) {
                if (((d = to(a.fixed)), (c = uo(a.max))))
                  a.min
                    ? ((b = uo(a.min)) && null === C(b, 1) && Gn(b, 0),
                      b && null === C(b, 2) && Hn(b, 0))
                    : (b = Hn(Gn(new Fn(), 0), 0));
              } else d = to(a);
              if (a && !Array.isArray(a)) {
                if (a.max && !c) throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
                if (a.min && !b) throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
              }
              if (c) {
                if (0 === C(c, 1) || 0 === C(c, 2))
                  throw Error('Invalid GPT size, maximums cannot be zero: ' + JSON.stringify(a));
                if (b) {
                  e = C(b, 1);
                  var f = C(c, 1);
                  if (null != e && null != f && e > f)
                    throw Error(
                      'Invalid GPT size: minimum width larger than maximum width: ' +
                        JSON.stringify(a)
                    );
                  e = C(b, 2);
                  f = C(c, 2);
                  if (null != e && null != f && e > f)
                    throw Error(
                      'Invalid GPT size: minimum height larger than maximum height: ' +
                        JSON.stringify(a)
                    );
                }
              }
              d.length || c || Fh('Invalid GPT fixed size specification: ' + JSON.stringify(a));
              c && b ? ((a = new Jn()), (c = eg(a, 1, c)), (b = eg(c, 2, b))) : (b = null);
              return { fd: d, Ma: b };
            },
            so = function (a) {
              if (_.t(361)) return po(a);
              if (Array.isArray(a) && 1 < a.length) {
                var b = 'number' === typeof a[0] && 'number' === typeof a[1];
                a = !_.t(360) || (0 < a[0] && 0 < a[1]);
                return b && a;
              }
              return 'string' === typeof a && 'fluid' == a;
            };
          var wo = function (a, b) {
              a = _.B(a, 'find').call(a, function (c) {
                c = dg(c, Fn, 1);
                return C(c, 1) <= C(b, 1) && C(c, 2) <= C(b, 2);
              });
              return null == a ? null : P(a, Fn, 2);
            },
            xo = function (a) {
              if (!Array.isArray(a) || 2 != a.length)
                throw Na('Each mapping entry has to be an array of size 2');
              var b = a[0];
              if (!qo(b)) throw Na('Size has to be an array of two non-negative integers');
              b = Hn(Gn(new Fn(), b[0]), b[1]);
              if (Array.isArray(a[1]) && 0 == a[1].length) a = [];
              else if (((a = to(a[1])), 0 == a.length))
                throw Na('At least one slot size must be present');
              var c = new Ln();
              b = eg(c, 1, b);
              return fg(b, 2, a);
            };
          var yo = function (a, b, c) {
              return 'number' === typeof b && 'number' === typeof c && 0 < P(a, Ln, 6).length
                ? wo(P(a, Ln, 6), Hn(Gn(new Fn(), b), c))
                : P(a, Fn, 5);
            },
            Ua = function (a) {
              var b = window,
                c = null;
              b.top == b && ((b = Im(!1, b)), (c = yo(a, b.width, b.height)));
              null == c && (c = yo(a));
              return c.map(function (d) {
                return r(d, 3) ? 'fluid' : [C(d, 1), C(d, 2)];
              });
            },
            nc = function (a) {
              if (0 == Ua(a).length && Uf(a, 16)) return '1x1';
              var b = [],
                c = !1;
              a = _.G(Ua(a));
              for (var d = a.next(); !d.done; d = a.next())
                (d = d.value),
                  Array.isArray(d) ? b.push(d.join('x')) : 'fluid' == d ? (c = !0) : b.push(d);
              c && b.unshift('320x50');
              return b.join('|');
            },
            zo = function (a, b) {
              b = void 0 === b ? null : b;
              var c = 0,
                d = [];
              a && (d.push(a.getAdUnitPath()), d.push(nc(a)), d.push(a.getDomId()));
              if (b) {
                a = [];
                for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
                  9 === b.nodeType ? a.push('') : a.push(b.id);
                (b = a.join()) && d.push(b);
              }
              0 < d.length && (c = ch(d.join(':')));
              return c.toString();
            },
            Ao = function (a) {
              return 0 !== a && 1 !== a;
            };
          var Co = function (a) {
            var b = this,
              c = La.F(),
              d = fo(bo.F(), a.getSlotId().getDomId()),
              e = '',
              f = !1;
            Dk(a.getSlotId(), Mk, function (l) {
              var m = l.detail;
              l = m.Qb;
              m = m.isBackfill;
              l && ((e = l), (f = m));
            });
            this.set = S(40, function (l, m) {
              if ('string' !== typeof l || !m || void 0 === zn()[l])
                return c.K(Zk('Slot.set', [l, m]), a), b;
              var n = ((L = P(d, Bn, 3)), _.B(L, 'find')).call(L, function (p) {
                return Cn(p) === l;
              });
              n ? En(n, [m]) : ((n = Dn(new Bn(), l)), cg(n, 2, m), gg(d, 3, n, Bn));
              return b;
            });
            this.get = S(41, function (l) {
              if ('string' !== typeof l) return c.K(Zk('Slot.get', [l]), a), null;
              var m = ((L = P(d, Bn, 3)), _.B(L, 'find')).call(L, function (n) {
                return Cn(n) === l;
              });
              return (m = m && C(m, 2)) ? m[0] : null;
            });
            this.getAttributeKeys = S(42, function () {
              return P(d, Bn, 3).map(function (l) {
                return Cn(l);
              });
            });
            this.addService = S(43, function (l) {
              l = Uj.get(l);
              if (!l) return c.K(Zk('Slot.addService', [l]), a), b;
              if (((L = C(d, 4)), _.B(L, 'includes')).call(L, l.aa()))
                return c.K(el(l.aa(), a.getSlotId().toString()), a), b;
              l.Ca(a, d);
              return b;
            });
            this.defineSizeMapping = S(
              44,
              function (l) {
                if (!Array.isArray(l)) throw Na('Size mapping has to be an array');
                l = l.map(xo);
                fg(d, 6, l);
                return b;
              },
              function (l, m) {
                yk(l, m);
                Fh('Incorrect usage of googletag.Slot defineSizeMapping: ' + m.message);
                return b;
              }
            );
            this.setClickUrl = S(45, function (l) {
              if ('string' !== typeof l) return c.K(Zk('Slot.setClickUrl', [l]), a), b;
              D(d, 7, l);
              return b;
            });
            this.setCategoryExclusion = S(46, function (l) {
              'string' !== typeof l || ie(l)
                ? c.K(Zk('Slot.setCategoryExclusion', [l]), a)
                : (((L = C(d, 8)), _.B(L, 'includes')).call(L, l) || cg(d, 8, l),
                  c.info(fl(l), a));
              return b;
            });
            this.clearCategoryExclusions = S(47, function () {
              D(d, 8, []);
              c.info(gl(), a);
              return b;
            });
            this.getCategoryExclusions = S(48, function () {
              return C(d, 8).slice();
            });
            this.setTargeting = S(49, function (l, m) {
              Sn(a, d, l, m, c);
              return b;
            });
            this.updateTargetingFromMap = S(649, function (l) {
              Tn(a, d, l, c);
              return b;
            });
            this.clearTargeting = S(50, function (l) {
              if (void 0 === l) return Qn(d, []), c.info(il(a.getSlotId().getAdUnitPath()), a), b;
              var m = P(d, Bn, 9),
                n = _.B(m, 'findIndex').call(m, function (p) {
                  return Cn(p) === l;
                });
              if (0 > n) return c.K(Wl(l, a.getSlotId().getAdUnitPath()), a), b;
              m.splice(n, 1);
              Qn(d, m);
              c.info(Xl(l, a.getSlotId().getAdUnitPath()), a);
              return b;
            });
            this.getTargeting = S(51, function (l) {
              if ('string' !== typeof l) return c.K(Zk('Slot.getTargeting', [l]), a), [];
              var m = ((L = P(d, Bn, 9)), _.B(L, 'find')).call(L, function (n) {
                return Cn(n) === l;
              });
              return m ? C(m, 2).slice() : [];
            });
            this.getTargetingKeys = S(52, function () {
              return P(d, Bn, 9).map(function (l) {
                return Cn(l);
              });
            });
            this.setCollapseEmptyDiv = S(53, function (l, m) {
              m = void 0 === m ? !1 : m;
              if ('boolean' !== typeof l || 'boolean' !== typeof m)
                return c.K(Zk('Slot.setCollapseEmptyDiv', [l, m]), a), b;
              D(d, 10, l);
              D(d, 11, l && m);
              mc('gpt_ced', function (n) {
                var p = r(d, 11) ? 't' : 'f';
                K(n, 'sc', p);
                K(n, 'level', 'slot');
                yc(n);
              });
              m && !l && c.K(jl(a.getSlotId().toString()), a);
              return b;
            });
            this.getAdUnitPath = S(54, function () {
              return a.getSlotId().getAdUnitPath();
            });
            this.getSlotElementId = S(598, function () {
              return a.getSlotId().getDomId();
            });
            this.setForceSafeFrame = S(55, function (l) {
              if ('boolean' !== typeof l)
                return c.K(Zk('Slot.setForceSafeFrame', [String(l)]), a), b;
              D(d, 12, l);
              return b;
            });
            this.setSafeFrameConfig = S(56, function (l) {
              var m = mo(l);
              if (!m) return c.error(Zk('Slot.setSafeFrameConfig', [l]), a), b;
              eg(d, 13, m);
              return b;
            });
            var g = null;
            _.t(472) &&
              Dk(a.getSlotId(), Lk, function (l) {
                l = l.detail;
                if (r(l, 8)) g = null;
                else {
                  g = new go();
                  var m = !!r(l, 9);
                  g.isBackfill = m;
                  var n = C(l, 15),
                    p = C(l, 16);
                  n.length &&
                    p.length &&
                    ((g.sourceAgnosticCreativeId = n[0]),
                    (g.sourceAgnosticLineItemId = p[0]),
                    m ||
                      ((g.creativeId = n[0]),
                      (g.lineItemId = p[0]),
                      (m = C(l, 22)) && m.length && (g.creativeTemplateId = m[0])));
                  C(l, 17).length && ((m = C(l, 17)[0]), (g.advertiserId = m));
                  C(l, 18).length && ((m = C(l, 18)[0]), (g.campaignId = m));
                  C(l, 19).length && ((m = C(l, 19)), (g.yieldGroupIds = m));
                  C(l, 20).length && ((m = C(l, 20)), (g.companyIds = m));
                  l = Xf(C(l, 45));
                  l.length && (g.encryptedTroubleshootingInfo = l[0]);
                }
              });
            this.getResponseInformation = S(355, function () {
              return _.t(472) ? g : Bo(a);
            });
            this.getName = S(170, function () {
              window.console &&
                console.error &&
                console.error(
                  'getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.'
                );
              var l = new sk('slot_get_name');
              yc(l);
              uk(l);
              return a.getSlotId().getAdUnitPath();
            });
            this.getSlotId = S(579, function () {
              return Jc(a.getSlotId());
            });
            this.getServices = S(580, function () {
              return C(d, 4).map(function (l) {
                return Yj(l);
              });
            });
            this.getSizes = S(581, function (l, m) {
              return (l = yo(d, l, m))
                ? l.map(function (n) {
                    return r(n, 3) ? 'fluid' : new oo(C(n, 1), C(n, 2));
                  })
                : null;
            });
            this.getClickUrl = S(582, function () {
              return Uf(d, 7) ? d.getClickUrl() : '';
            });
            this.getTargetingMap = S(583, function () {
              for (var l = {}, m = _.G(P(d, Bn, 9)), n = m.next(); !n.done; n = m.next())
                (n = n.value), (l[Cn(n)] = C(n, 2));
              return l;
            });
            this.getOutOfPage = S(584, function (l) {
              return 'number' === typeof l ? Rn(d) === l : 0 != Rn(d);
            });
            this.getCollapseEmptyDiv = S(585, function () {
              return Uf(d, 10) ? r(d, 10) : null;
            });
            this.getDivStartsCollapsed = S(586, function () {
              return Uf(d, 11) ? r(d, 11) : null;
            });
            this.getContentUrl = S(587, function () {
              return _.t(469) ? h() : a.C();
            });
            var h = function () {
              return '';
            };
            _.t(469) &&
              Dk(a.getSlotId(), Pk, function (l) {
                h = l.detail.Zc;
              });
            this.getFirstLook = S(588, function () {
              Fh(
                'The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.'
              );
              return 0;
            });
            var k = '';
            _.t(473) &&
              Dk(a.getSlotId(), Lk, function (l) {
                var m;
                k = null != (m = C(l.detail, 34)) ? m : '';
              });
            this.getEscapedQemQueryId = S(591, function () {
              var l;
              _.t(473) ? (l = k) : (l = (!_.t(473) && a.j && C(a.j, 34)) || '');
              return l;
            });
            this.getHtml = S(592, function () {
              return f
                ? (window.console &&
                    console.warn &&
                    console.warn(
                      "This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."
                    ),
                  '')
                : e;
            });
          };
          _.M(Co, Wj);
          var Do = function (a) {
            this.getId = S(593, function () {
              return a.l;
            });
            this.getAdUnitPath = S(594, function () {
              return a.getAdUnitPath();
            });
            this.getName = S(595, function () {
              var b = new sk('slot_id_get_name');
              yc(b);
              uk(b);
              return a.j;
            });
            this.toString = S(596, function () {
              return a.toString();
            });
            this.getDomId = S(597, function () {
              return a.getDomId();
            });
          };
          _.M(Do, Wj);
          var Eo = function (a, b, c) {
            Ck.call(this);
            this.j = a;
            this.$a = b;
            this.l = this.j + '_' + this.$a;
            this.o = c;
          };
          _.M(Eo, Xk);
          _.q = Eo.prototype;
          _.q.getAdUnitPath = function () {
            return this.j;
          };
          _.q.F = function () {
            return this.$a;
          };
          _.q.toString = function () {
            return this.l;
          };
          _.q.getDomId = function () {
            return this.o;
          };
          _.q.La = function () {
            return new Do(this);
          };
          var Fo = function (a) {
            Ck.call(this);
            this.D = a;
            this.C = function () {
              return '';
            };
            this.j = this.wc = this.A = null;
            this.o = [];
            this.l = [];
          };
          _.M(Fo, Xk);
          var Go = function (a, b) {
            a.o.push(b);
          };
          Fo.prototype.La = function () {
            return new Co(this);
          };
          var v = function (a, b) {
            b = void 0 === b ? document : b;
            return a.wc || b.getElementById(a.D.getDomId());
          };
          Fo.prototype.getSlotId = function () {
            return this.D;
          };
          var Bo = function (a) {
              return _.t(472) ? null : a.A;
            },
            Ho = function (a) {
              a.A = null;
              a.j = null;
              if (!_.t(450)) {
                for (var b = _.G(a.o), c = b.next(); !c.done; c = b.next()) (c = c.value), c();
                a.o.length = 0;
              }
            },
            Io = function (a) {
              for (var b = _.G(a.l), c = b.next(); !c.done; c = b.next()) (c = c.value), c();
              a.l.length = 0;
            },
            Jo = function (a, b) {
              a.j = b;
              if (!_.t(472)) {
                if (_.t(472) || !a.j || r(a.j, 8)) b = null;
                else {
                  b = new go();
                  var c = !!r(a.j, 9);
                  b.isBackfill = c;
                  var d = C(a.j, 15),
                    e = C(a.j, 16);
                  d.length &&
                    e.length &&
                    ((b.sourceAgnosticCreativeId = d[0]),
                    (b.sourceAgnosticLineItemId = e[0]),
                    c ||
                      ((b.creativeId = d[0]),
                      (b.lineItemId = e[0]),
                      (c = C(a.j, 22)) && c.length && (b.creativeTemplateId = c[0])));
                  C(a.j, 17).length && ((c = C(a.j, 17)[0]), (b.advertiserId = c));
                  C(a.j, 18).length && ((c = C(a.j, 18)[0]), (b.campaignId = c));
                  C(a.j, 19).length && ((c = C(a.j, 19)), (b.yieldGroupIds = c));
                  C(a.j, 20).length && ((c = C(a.j, 20)), (b.companyIds = c));
                  c = Xf(C(a.j, 45));
                  c.length && (b.encryptedTroubleshootingInfo = c[0]);
                }
                a.A = b;
              }
            };
          Fo.prototype.isBackfill = function () {
            return this.j ? !!r(this.j, 9) : null;
          };
          Fo.prototype.B = function () {
            Xk.prototype.B.call(this);
            _.t(450) || Io(this);
          };
          var Ko = function (a) {
              a = void 0 === a ? {} : a;
              var b = void 0 === b ? {} : b;
              this.l = a;
              this.j = b;
            },
            Lo = function (a, b, c, d) {
              if (!(b && b in a.l)) return !1;
              if (void 0 === d || d || !a.j[b]) a.j[b] = c || '';
              return !0;
            },
            Mo = function (a) {
              return a.j.page_url || null;
            },
            No = function (a, b, c, d) {
              var e = [],
                f = b.j;
              _.Yb(d, function (g, h) {
                if (g) {
                  g = { Kb: g };
                  var k = f[h],
                    l = [];
                  a.forEach(function (m, n) {
                    (m = c.get(m.getSlotId())) && m.j[h] && (l[n] = m.j[h]);
                  });
                  if (l.length || k) l.length && (g.Jd = l), k && (g.wd = k), e.push(g);
                }
              });
              return e;
            };
          var Oo = function (a) {
              this.id = a;
            },
            ec = new Oo(4),
            Po = new Oo(11),
            Qo = new Oo(14),
            Ro = new Oo(15),
            So = new Oo(16),
            To = new Oo(17),
            fc = new Oo(18);
          var Uo = function () {
              this.j = new x.Map();
            },
            Wo = function (a, b, c) {
              kd(function (d) {
                return cb(d, Vo(a, b, null, c), 0);
              });
            },
            Xo = function (a, b, c, d) {
              return kd(function (e) {
                return cb(
                  e,
                  _.B(x.Promise, 'allSettled').call(x.Promise, [
                    Vo(a, b, null, d),
                    Vo(a, b, c, d),
                  ]),
                  0
                );
              });
            },
            Zo = function (a, b, c, d) {
              return Yo(a, b, null, c, d);
            },
            dc = function (a, b, c, d) {
              var e = Uo.F();
              return Yo(e, a, b, c, d);
            },
            Yo = function (a, b, c, d, e) {
              var f = J(d, e, function (h, k) {
                  zk(h, k, !0);
                }),
                g = $o(b, c);
              b = a.j.get(g);
              b || ((b = []), a.j.set(g, b));
              b.push(f);
              return function () {
                var h = a.j.get(g);
                h && (da(h, f), h.length || a.j.delete(g));
              };
            },
            $o = function (a, b) {
              a = a.id;
              return b ? a + '_' + b : String(a);
            },
            Vo = function (a, b, c, d) {
              var e;
              return kd(function (f) {
                e = a.j.get($o(b, c)) || [];
                return cb(
                  f,
                  _.B(x.Promise, 'allSettled').call(
                    x.Promise,
                    e.map(function (g) {
                      return kd(function (h) {
                        if (1 == h.j) return cb(h, 0, 2);
                        _.B(e, 'includes').call(e, g) && g(d);
                        h.j = 0;
                      });
                    })
                  ),
                  0
                );
              });
            };
          vd(Uo);
          var ap = function (a, b, c) {
              if (C(b, 18)) return C(b, 18);
              a = c.get(a.getSlotId());
              return null != a ? Mo(a) : null;
            },
            bp = function (a, b, c, d) {
              return null != Mo(c)
                ? !0
                : a.some(function (e) {
                    return null != ap(e, b[e.getSlotId().getDomId()], d);
                  });
            },
            sc = function (a) {
              var b = a.document;
              return Km(a) ? b.URL : b.referrer;
            },
            Ra = function (a) {
              try {
                var b = window.top,
                  c = new _.Va(0, 0),
                  d = _.Gg(_.yg(a));
                if ($e(d, 'parent')) {
                  do {
                    var e = d == b ? Mi(a) : _.Ni(a);
                    c.x += e.x;
                    c.y += e.y;
                  } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                }
                var f = c;
              } catch (g) {
                f = new _.Va(-12245933, -12245933);
              }
              return f;
            },
            cp = Sa(function () {
              return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
            }),
            dp = function (a) {
              var b = a.split(/\r\n|\r|\n/).length;
              'Error' == a.slice(0, 5) && b--;
              return b;
            },
            ep = function (a) {
              return a ? (a = Ri(a)) && a.floor() : null;
            },
            fp = function (a) {
              return !!a && !!C(a, 1);
            },
            gp = function (a) {
              return !!r(a, 6) || _.t(364);
            },
            hp = function (a, b) {
              for (
                var c = {}, d = _.G(_.B(Object, 'keys').call(Object, b)), e = d.next();
                !e.done;
                e = d.next()
              ) {
                e = e.value;
                var f = b[e];
                f = new f.constructor(jg(f.la));
                var g = ao.F(),
                  h = g.j.get(e);
                null == h ? (h = ++jk.F().l) : g.j.delete(e);
                D(f, 20, h);
                c[e] = f;
              }
              a = new a.constructor(jg(a.la));
              b = new Date(Date.now());
              b = b.getUTCFullYear() + Pe(b.getUTCMonth() + 1) + Pe(b.getUTCDate());
              return { O: a, P: c, xb: b };
            },
            ip = Sa(function () {
              var a = window.crypto || window.msCrypto;
              if (void 0 !== a) {
                var b = new Uint8Array(16);
                a.getRandomValues(b);
              } else for (b = Array(16), a = 0; 16 > a; ++a) b[a] = Math.floor(255 * Math.random());
              a = '';
              b = _.G(b);
              for (var c = b.next(); !c.done; c = b.next())
                (c = c.value), 15 >= c && (a += '0'), (a += c.toString(16));
              return a;
            }),
            jp = function (a, b, c) {
              try {
                var d = Hm(top.document, top).y,
                  e = d + b.height * (c + 1);
                return a.y >= d && a.y <= e;
              } catch (f) {
                return !0;
              }
            },
            kp = function (a, b, c) {
              var d = v(a.slot, b),
                e = d && 'none' === d.style.display;
              e && (d.style.display = 'block');
              a = Wa(b, a, c);
              e && (d.style.display = 'none');
              return a;
            },
            lp = function (a) {
              return !!a && (Uf(a, 1) || !!r(a, 6));
            },
            mp = function (a, b, c) {
              return lp(b) || 4 == Rn(a) || 5 === Rn(a) || c;
            },
            np = function (a) {
              return 'google_ads_iframe_' + a.toString();
            },
            op = function (a) {
              return np(a) + '__container__';
            },
            Oa = function (a, b) {
              return (
                ((b = v(a, b)) && b.querySelector('[id="' + op(a.getSlotId()) + '"]')) || null
              );
            },
            pp = function (a, b) {
              return (b = Oa(a, b))
                ? b.querySelector('iframe[id="' + np(a.getSlotId()) + '"]')
                : null;
            };
          var qp, rp, sp, wp, Ap, Bp, Cp, Dp, Ep, Fp, up, vp, tp, Gp, Hp;
          qp = null;
          rp = function () {
            var a = zn();
            this.j = new x.Map();
            this.m = a;
            this.l = new Ko(a);
            this.B = !1;
          };
          sp = function () {
            return (qp = qp || new rp());
          };
          wp = function (a, b) {
            var c = b.getSlotId();
            if (!a.j.get(c)) {
              a.j.set(c, {
                Ua: !0,
                rc: new Ko(a.m),
                xb: null,
                bc: '',
                lb: '',
                Mc: 0,
                Ec: 0,
                Zb: [],
                $b: [],
              });
              _.R(b, function () {
                a.j.delete(c);
                _.t(450) && tp(a, c);
              });
              var d = function (f) {
                  _.t(450) ? up(a, c, f) : Go(b, f);
                },
                e = function () {
                  var f = a.j.get(c);
                  f.yc = _.jj();
                  d(function () {
                    f.yc = void 0;
                  });
                };
              _.t(469) ? Dk(c, Pk, e) : _.R(b, dc(Po, c, 764, e));
              _.R(
                b,
                dc(ec, c, 765, function () {
                  var f = a.j.get(c);
                  f.Kc = _.jj();
                  d(function () {
                    f.Kc = void 0;
                  });
                })
              );
              Dk(c, Ok, function (f) {
                var g = a.j.get(c);
                g.Dc = f.timeStamp;
                d(function () {
                  g.Dc = void 0;
                });
              });
              Dk(b.getSlotId(), Lk, function (f) {
                f = f.detail;
                var g = a.j.get(c);
                g.bc = C(f, 33) || '';
                f = function () {
                  g.bc = '';
                };
                _.t(450) ? vp(a, c, f) : b.l.push(f);
              });
            }
          };
          _.xp = function (a, b) {
            return a.j.get(b) && a.j.get(b).Ua;
          };
          _.yp = function (a, b) {
            a.j.get(b) && (a.j.get(b).Ua = !1);
          };
          _.zp = function (a, b) {
            a.j.get(b) && (a.j.get(b).Ua = !0);
          };
          Ap = function (a, b) {
            return a.j.has(b);
          };
          Bp = function (a) {
            var b = new x.Map();
            a = _.G(_.B(a.j, 'entries').call(a.j));
            for (var c = a.next(); !c.done; c = a.next()) {
              var d = _.G(c.value);
              c = d.next().value;
              d = d.next().value;
              b.set(c, d.rc);
            }
            return b;
          };
          Cp = function (a, b) {
            return ((a = a.j.get(b)) && a.Kc) || null;
          };
          Dp = function (a, b) {
            return ((a = a.j.get(b)) && a.Dc) || null;
          };
          Ep = function (a, b) {
            return ((a = a.j.get(b)) && a.lb) || '';
          };
          Fp = function (a, b) {
            return ((a = a.j.get(b)) && a.Mc - 1) || 0;
          };
          up = function (a, b, c) {
            (a = a.j.get(b)) && a.Zb.push(c);
          };
          vp = function (a, b, c) {
            (a = a.j.get(b)) && a.$b.push(c);
          };
          tp = function (a, b) {
            if ((a = a.j.get(b)))
              for (
                b = a.$b.slice(), a.$b.length = 0, a = _.G(b), b = a.next();
                !b.done;
                b = a.next()
              )
                (b = b.value), b();
          };
          Gp = function (a, b) {
            if ((a = a.j.get(b)))
              for (
                b = a.Zb.slice(), a.Zb.length = 0, a = _.G(b), b = a.next();
                !b.done;
                b = a.next()
              )
                (b = b.value), b();
          };
          Hp = function (a, b, c, d, e) {
            if (a.o) return a.o;
            if (!r(c, 5)) return '';
            a: {
              if (d && _.B(e, 'includes').call(e, '.'))
                for (d = e.split('.'), e = 2; e <= d.length; e++) {
                  var f = d.slice(d.length - e).join('.');
                  Ka('gadsTest', 'test', c, { domain: f }, b);
                  if ('test' === Ja('gadsTest', c, b)) {
                    b = f;
                    break a;
                  }
                }
              b = null;
            }
            return b ? (a.o = b) : '';
          };
          var Jp = function (a) {
            var b = this;
            this.addEventListener = S(86, function (c, d) {
              a.addEventListener(c, d);
              return b;
            });
            this.getSlots = S(573, function () {
              return a.l.map(function (c) {
                return Jc(c);
              });
            });
            this.getSlotIdMap = S(574, function () {
              for (var c = {}, d = _.G(a.l), e = d.next(); !e.done; e = d.next())
                (e = e.value), (c[e.getSlotId().toString()] = Jc(e));
              return c;
            });
            this.enable = S(
              87,
              function () {
                return Ip(a);
              },
              yk
            );
            this.getName = S(575, function () {
              return a.aa();
            });
          };
          _.M(Jp, Wj);
          var Kp = { REWARDED: 4, TOP_ANCHOR: 2, BOTTOM_ANCHOR: 3, INTERSTITIAL: 5 },
            Lp = function (a) {
              switch (a) {
                case 2:
                  return 2;
                case 3:
                  return 1;
                case 5:
                  return 8;
                case 4:
                  if (_.t(474)) return 11;
                default:
                  return null;
              }
            },
            Mp = function () {
              var a = wc();
              a.enums || (a.enums = { OutOfPageFormat: Kp });
            };
          var Np = function () {
              this.l = [];
              this.B = [];
              this.j = {};
            },
            Op = function (a, b) {
              if (!_.B(a.l, 'includes').call(a.l, b))
                switch (b) {
                  case 1:
                  case 2:
                  case 3:
                    var c;
                    if ((c = _.t(116) ? Zm[b] : Xm[b])) {
                      var d = b + '_hostpage_library';
                      if ((c = Wg(document, Ei(c)))) c.id = d;
                    }
                    a.l.push(b);
                    b = new $m(b);
                    a.B.push(b);
                    a = wc();
                    a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                    a.hostpageLibraryTokens[b.j] = b.l;
                }
            },
            Pp = function (a, b) {
              return a.j[b] || [];
            };
          vd(Np);
          var Qp = function () {
            var a = this;
            this.l = function () {
              return !1;
            };
            this.B = '';
            this.j = null;
            var b = bo.F(),
              c = {};
            this[3] =
              ((c[19] = function () {
                return !!r(b.j, 10);
              }),
              (c[14] = cp),
              (c[13] = function (d) {
                for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                return e.some(function (g) {
                  return 0 == a.B.lastIndexOf(g, 0);
                });
              }),
              (c[12] = function () {
                return !!r(b.j, 6);
              }),
              (c[11] = cn),
              (c[15] = function (d) {
                return a.l(d);
              }),
              (c[7] = function () {
                return !(!_.H.crypto || !_.H.crypto.subtle);
              }),
              (c[48] = function () {
                return !!a.j;
              }),
              c);
            c = {};
            this[4] =
              ((c[8] = function (d) {
                return Vm(a.j, d);
              }),
              c);
            this[5] = {};
          };
          vd(Qp);
          var Rp = {
              ze: 'rewardedSlotReady',
              ye: 'rewardedSlotGranted',
              ve: 'rewardedSlotCanceled',
              we: 'rewardedSlotClosed',
              xe: 'rewardedSlotCompleted',
              Ae: 'slotAdded',
              De: 'slotRequested',
              Ee: 'slotResponseReceived',
              Ce: 'slotRenderEnded',
              Be: 'slotOnload',
              Fe: 'slotVisibilityChanged',
              pe: 'impressionViewable',
            },
            Sp = function (a, b) {
              this.slot = a;
              this.serviceName = b;
            },
            Tp = function (a, b) {
              Sp.call(this, a, b);
              this.isEmpty = !1;
              this.slotContentChanged = !0;
              this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
              this.isBackfill = !1;
              this.companyIds = this.yieldGroupIds = null;
            };
          _.M(Tp, Sp);
          var Up = function () {
            Sp.apply(this, arguments);
          };
          _.M(Up, Sp);
          var Vp = function (a, b, c) {
            Sp.call(this, a, b);
            this.inViewPercentage = c;
          };
          _.M(Vp, Sp);
          var Wp = function () {
            Sp.apply(this, arguments);
          };
          _.M(Wp, Sp);
          var Xp = function () {
            Sp.apply(this, arguments);
          };
          _.M(Xp, Sp);
          var Yp = function (a, b, c, d) {
            Sp.call(this, a, b);
            this.makeRewardedVisible = c;
            this.payload = d;
          };
          _.M(Yp, Sp);
          var Zp = function (a, b, c) {
            Sp.call(this, a, b);
            this.payload = c;
          };
          _.M(Zp, Sp);
          var $p = function () {
            Sp.apply(this, arguments);
          };
          _.M($p, Sp);
          var aq = function () {
            Sp.apply(this, arguments);
          };
          _.M(aq, Sp);
          var bq = function () {
            Sp.apply(this, arguments);
          };
          _.M(bq, Sp);
          var cq = function () {
            Sp.apply(this, arguments);
          };
          _.M(cq, Sp);
          var dq = function () {
            Sp.apply(this, arguments);
          };
          _.M(dq, Sp);
          var eq = new x.Map(),
            fq = new x.Set(),
            gq = function () {
              Ck.call(this);
              fq.add(this);
              this.l = [];
              this.j = !1;
              this.N = new x.Map();
              this.log = La.F();
              this.log.info(ql(this.aa()));
              this.C = [];
            };
          _.M(gq, Xk);
          gq.prototype.La = function () {
            return new Jp(this);
          };
          gq.prototype.getVersion = function () {
            return 'unversioned';
          };
          var Ip = function (a) {
              if (!a.j) {
                a.j = !0;
                Kj(6);
                a.Vb();
                for (var b = _.G(a.C), c = b.next(); !c.done; c = b.next()) {
                  c = c.value;
                  try {
                    c();
                  } catch (d) {}
                }
                a.C.length = 0;
              }
            },
            hq = function (a, b) {
              if (a.j)
                try {
                  b();
                } catch (c) {}
              else a.C.push(b);
            };
          gq.prototype.Ca = function (a, b) {
            this.l.push(a);
            var c = new Xp(Jc(a), this.aa());
            iq(this, 'slotAdded', c);
            this.log.info(tl(this.aa(), a.getSlotId().getAdUnitPath()), a);
            cg(b, 4, this.aa());
          };
          gq.prototype.destroySlots = function (a) {
            var b = this.l,
              c = b.filter(function (d) {
                return _.B(a, 'includes').call(a, d);
              });
            c.forEach(function (d) {
              da(b, d);
            });
            return c;
          };
          var jq = function (a, b) {
            mc('gpt_callback_usage', function (c) {
              yc(c);
              K(c, 'type', b);
              var d = a.l.filter(function (f) {
                  var g = sp();
                  f = f.getSlotId();
                  g = g.j.get(f);
                  return !(!g || !g.yc);
                }).length,
                e = a.l.filter(function (f) {
                  return !!Cp(sp(), f.getSlotId());
                }).length;
              K(c, 'nfetch', d);
              K(c, 'nrend', e);
            });
          };
          gq.prototype.addEventListener = function (a, b) {
            if ('function' !== typeof b || 'string' !== typeof a)
              return (a = Zk('Service.addEventListener', [a, b])), this.log.K(a), this;
            if (_.t(416) && 'rewardedSlotCanceled' === a) var c = !1;
            else
              a: {
                for (c in Rp)
                  if (Rp[c] == a) {
                    c = !0;
                    break a;
                  }
                c = !1;
              }
            if (!c) return this.log.K(Sl(a)), this;
            c = kq(this, a);
            (_.t(409) && _.B(c, 'includes').call(c, b)) || c.push(b);
            jq(this, a);
            return this;
          };
          var iq = function (a, b, c) {
              var d = kq(a, b);
              d.length &&
                Kh(function () {
                  for (var e = _.G(d), f = e.next(); !f.done; f = e.next()) {
                    f = f.value;
                    try {
                      f(c);
                    } catch (k) {
                      f = k && 'string' === typeof k.name ? k.name : null;
                      var g = k && 'string' === typeof k.message ? k.message : null,
                        h = '';
                      f && g ? (h = f + ': ' + g) : f ? (h = f) : g && (h = g);
                      a.log.K(Rl(h));
                      window.console && console.error && console.error(k);
                    }
                  }
                });
            },
            kq = function (a, b) {
              a = _.t(409) ? eq : a.N;
              var c = a.get(b) || [];
              a.set(b, c);
              return c;
            },
            lq = function (a) {
              for (var b = _.G(fq), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a);
            };
          var mq = function (a) {
              return !!bh(Kp, function (b) {
                return b == a;
              });
            },
            pq = function (a) {
              return ((L = ak(nq(oq.F()))), _.B(L, 'includes')).call(L, a);
            },
            qq = _.Ld(function () {
              Fh(
                'The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.'
              );
            }),
            rq = function (a) {
              var b = _.H != _.H.top ? 512 : 0;
              if (b) return b;
              var c = _.hn(_.H);
              var d = c.adCount
                ? 1 == a || 2 == a
                  ? !(!c.adCount[1] && !c.adCount[2])
                  : (d = c.adCount[a]) && 27 !== a && 26 !== a && 10 !== a && 40 !== a
                  ? 1 <= d
                  : !1
                : !1;
              d && (b |= 64);
              c.improveCollisionDetection = 1;
              c = 0 === th();
              switch (a) {
                case 2:
                case 1:
                  c && (b |= 536870912);
                  c = _.t(386) ? void 0 : 420;
                  c = void 0 === c ? jn : c;
                  d = 0;
                  try {
                    d |= _.H != _.H.top ? 512 : 0;
                    var e = Math.min(_.H.screen.width || 0, _.H.screen.height || 0);
                    d |= e ? (320 > e ? 8192 : 0) : 2048;
                    var f;
                    if ((f = _.H.navigator)) {
                      var g = _.H.navigator.userAgent;
                      f =
                        /Firefox/.test(g) ||
                        /Android 2/.test(g) ||
                        /iPhone OS [34]_/.test(g) ||
                        /Windows Phone (?:OS )?[67]/.test(g);
                    }
                    d |= f ? 1048576 : 0;
                  } catch (k) {
                    d |= 32;
                  }
                  e = d;
                  g = null;
                  g = void 0 === g ? null : g;
                  f = 0;
                  try {
                    (f |= _.kn(_.H) ? 0 : 8), (f |= nn(_.H, c)), (f |= on(_.H));
                  } catch (k) {
                    f |= 32;
                  }
                  c = !1;
                  if (!_.t(269)) {
                    switch (a) {
                      case 2:
                        a = g;
                        a = void 0 === a ? null : a;
                        g = tn(_.H.innerWidth, 0, Math.round((_.H.innerWidth / 320) * 50 + 15));
                        c = sn(g, 'top', a);
                        break;
                      case 1:
                        if ((a = 0 != _.w(1904))) {
                          a = g;
                          a = void 0 === a ? null : a;
                          g = _.H.innerWidth;
                          c = _.H.innerHeight;
                          d = Math.round((_.H.innerWidth / 320) * 50 + 15);
                          var h = tn(g, c - d, c);
                          25 < d && h.push({ x: g - 25, y: c - 25 });
                          a = sn(h, 'bottom', a);
                        }
                        c = a;
                    }
                    c && (f |= 16777216);
                  }
                  return b | e | f;
                case 8:
                  return !_.t(400) && c && (b |= 536870912), b | yn(_.H, !1, null);
                case 11:
                  return b;
                default:
                  return b | 32;
              }
            },
            oq = function () {
              this.j = new x.Map();
              this.o = new x.Map();
              this.l = new x.Map();
              this.B = La.F();
              Qp.F().l = pq;
            };
          oq.prototype.add = function (a, b, c) {
            var d = this,
              e = void 0 === c ? {} : c;
            c = void 0 === e.nb ? void 0 : e.nb;
            var f = void 0 === e.Ic ? !1 : e.Ic,
              g = void 0 === e.instance ? void 0 : e.instance;
            if ('string' !== typeof a || 0 >= a.length || !b) return {};
            e = Lp(void 0 === e.format ? 0 : e.format);
            if (null != e) {
              if (rq(e)) return {};
              pn(e);
            }
            f && qq();
            f = void 0 === g ? this.o.get(a) || Number(f) : g;
            var h = c || 'gpt_unit_' + a + '_' + f;
            b = sq(a, f, b, h);
            if (!b) return this.B.error(ml(h)), {};
            c = b.slot;
            g = b.da;
            var k = b.slotId;
            this.o.set(a, f + 1);
            this.j.set(k, c);
            this.l.set(h, k);
            _.R(k, function () {
              d.j.delete(k);
              d.l.delete(h);
            });
            vk.push(c);
            return { slot: c, Ja: g };
          };
          var nq = function (a) {
              return _.t(437)
                ? [].concat(_.Ub(_.B(a.j, 'values').call(a.j)))
                : _.B(Array, 'from').call(Array, _.B(a.j, 'values').call(a.j));
            },
            tq = function (a) {
              var b = [];
              Pp(Np.F(), a).forEach(function (c) {
                (c = pp(c, document)) && b.push(c.contentWindow);
              });
              return b;
            },
            uq = function (a) {
              a = _.G(a);
              for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                var c = bo.F(),
                  d = b.getSlotId().getDomId(),
                  e = c.l[d];
                delete c.l[d];
                c = e;
                Zh(b);
                c = Lp(Rn(c));
                null != c &&
                  ((d = _.hn(window)), (e = d.adCount && d.adCount[c]) && (d.adCount[c] = e - 1));
                da(vk, b);
              }
            },
            vq = function (a, b) {
              if (b && !Array.isArray(b)) return a.B.K(Zk('googletag.destroySlots', [b])), !1;
              b
                ? (ja(b),
                  (a = b.filter(function (c) {
                    return c && !c.fa;
                  })))
                : (a = nq(a));
              if (!a || 0 == a.length) return !1;
              lq(a);
              uq(a);
              return !0;
            },
            wq = function (a, b) {
              a = _.G(_.B(a.j, 'values').call(a.j));
              for (var c = a.next(); !c.done; c = a.next())
                if (((c = c.value), c.getSlotId().getDomId() === b)) return c;
              return null;
            },
            xq = function (a, b) {
              return a.j.get(b) || null;
            },
            yq = function (a) {
              var b = oq.F();
              a = Xj(a, Fo);
              return !!a && b.j.has(a.getSlotId());
            },
            zq = function (a, b, c, d) {
              d = void 0 === d ? !1 : d;
              if ('string' === typeof a && (void 0 === c || 'string' === typeof c)) {
                var e = oq.F();
                return e && e.add(a, b, { nb: c, Ic: d });
              }
              return {};
            },
            Aq = function (a, b, c) {
              return ((a = zq(a, b, c).slot) && Jc(a)) || null;
            },
            Bq = function (a) {
              var b = oq.F();
              return b && null == a
                ? vq(b)
                : b && Array.isArray(a)
                ? ((a = a.map(function (c) {
                    return Xj(c, Fo);
                  })),
                  vq(b, a))
                : !1;
            },
            Ic = function (a, b, c) {
              c = oq.F().add(a, [1, 1], { nb: c, format: b });
              a = c.slot;
              c = c.Ja;
              if (a && c) {
                if (5 === b && _.t(323)) return null;
                D(c, 15, b);
              }
              return a || null;
            },
            Cq = function (a, b) {
              return 'string' === typeof a &&
                (null == b || 'string' === typeof b || ('number' === typeof b && mq(b)))
                ? (a = Ic(a, 'number' === typeof b ? b : 1, 'string' === typeof b ? b : void 0)) &&
                    Jc(a)
                : null;
            },
            sq = function (a, b, c, d) {
              if (oq.F().l.has(d)) return null;
              var e = new On();
              Pn(D(e, 1, a), d);
              c = vo(c);
              var f = c.Ma;
              fg(e, 5, c.fd);
              null !== f && eg(e, 16, f);
              co(e);
              var g = new Eo(a, b, d),
                h = new Fo(g);
              _.$h(h, g);
              La.F().info($k(g.toString()), h);
              _.R(h, function () {
                La.F().info(Tl(g.toString()), h);
              });
              _.t(469)
                ? Dk(g, Pk, function (k) {
                    k = k.detail.vb;
                    La.F().info(al(g.getAdUnitPath()), h);
                    sj(jk.F(), '7', 9, Fp(sp(), g), 0, k);
                  })
                : _.R(
                    h,
                    dc(Po, g, 768, function (k) {
                      La.F().info(al(g.getAdUnitPath()), h);
                      sj(jk.F(), '7', 9, Fp(sp(), g), 0, k);
                    })
                  );
              Dk(g, Lk, function () {
                return void La.F().info(bl(g.getAdUnitPath()), h);
              });
              Dk(g, Mk, function () {
                return void La.F().info(cl(g.getAdUnitPath()), h);
              });
              _.R(
                h,
                dc(ec, g, 771, function () {
                  La.F().info(dl(g.getAdUnitPath()), h);
                })
              );
              return { slot: h, da: e, slotId: g };
            };
          vd(oq);
          Aq = J(74, Aq);
          Bq = J(75, Bq);
          Cq = J(73, Cq);
          var Dq = J(95, function (a) {
            var b = La.F();
            var c = null;
            var d = '';
            if ('string' === typeof a) {
              d = a;
              var e = wq(oq.F(), d);
            } else _.ha(a) && 1 == a.nodeType ? ((c = a), (d = c.id), (e = wq(oq.F(), d))) : (e = Xj(a, Fo));
            if (e) {
              if (((a = bo.F().j), (d = fo(bo.F(), e.getSlotId().getDomId()))))
                if (((a = hp(a, eo())), !r(d, 19)))
                  if (((e.wc = c), v(e) || Ao(Rn(d))))
                    for (D(d, 19, !0), b = _.G(C(d, 4)), c = b.next(); !c.done; c = b.next())
                      (c = Yj(c.value)), (c = Xj(c, gq)), c.j && c.jc(a, e);
                  else b.K(kl(String(d.getAdUnitPath()), String(d.getDomId())), e);
            } else d ? b.error(ll(d)) : b.error(Zk('googletag.display', [String(a)]));
          });
          var ib = Yd('https://tpc.googlesyndication.com/sodar/%{basename}.js');
          var db = function (a) {
            return new x.Promise(function (b, c) {
              var d = new XMLHttpRequest();
              d.onreadystatechange = function () {
                d.readyState === d.DONE &&
                  (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
              };
              d.open('GET', a, !0);
              d.send();
            });
          };
          var Eq = function (a) {
              this.j = a.j;
              this.l = a.l;
              this.B = a.B;
              this.sb = a.sb;
              this.M = a.M;
              this.eb = a.eb;
              this.Ib = a.Ib;
              this.Lb = a.Lb;
            },
            Fq = function (a, b) {
              this.j = a;
              this.l = b;
              this.B = 'pt';
              this.M = window;
              this.eb = 'env';
              this.Ib = 'n';
              this.Lb = '0';
            };
          var Hq = function (a) {
            Tf(this, a, Gq, null);
          };
          Ed(Hq, Pf);
          var Iq = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Iq, Pf);
          var Jq = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Jq, Pf);
          var Kq = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Kq, Pf);
          var Gq = [1, 2],
            Lq = function (a, b) {
              var c = C(a, 1);
              null != c && null != c && Jf(b, 1, c);
              c = dg(a, Jq, 2);
              null != c && Nf(b, 2, c);
              c = dg(a, Jq, 3);
              null != c && Nf(b, 3, c);
              c = C(a, 4);
              null != c && Lf(b, 4, c);
              c = C(a, 5);
              null != c && Lf(b, 5, c);
            },
            Mf = function (a, b) {
              var c = C(a, 1);
              null != c && null != c && Jf(b, 1, c);
              c = C(a, 2);
              null != c && null != c && Jf(b, 2, c);
              c = C(a, 3);
              null != c && null != c && Jf(b, 3, c);
            },
            Mq = function (a, b) {
              var c = C(a, 1);
              null != c && Lf(b, 1, c);
              c = C(a, 2);
              null != c && Lf(b, 2, c);
              c = C(a, 3);
              null != c && null != c && Kf(b, 3, c);
              c = C(a, 4);
              null != c && null != c && If(b, 4, c);
              c = C(a, 5);
              null != c && null != c && If(b, 5, c);
              c = C(a, 6);
              null != c && null != c && If(b, 6, c);
            };
          var Nq = navigator,
            Oq = function () {
              try {
                return Nq.javaEnabled();
              } catch (a) {
                return !1;
              }
            },
            Pq = function (a) {
              var b = 1,
                c;
              if (void 0 != a && '' != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                  var d = a.charCodeAt(c);
                  b = ((b << 6) & 268435455) + d + (d << 14);
                  d = b & 266338304;
                  b = 0 != d ? b ^ (d >> 21) : b;
                }
              return b;
            },
            Qq = function (a, b) {
              if (!a || 'none' == a) return 1;
              a = String(a);
              'auto' == a &&
                ((a = b), 'www.' == a.substring(0, 4) && (a = a.substring(4, a.length)));
              return Pq(a.toLowerCase());
            },
            Rq = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
            Sq = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
            Tq = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
          var Vq = function (a) {
            Tf(this, a, Uq, null);
          };
          Ed(Vq, Pf);
          var Uq = [15],
            Wq = function () {
              var a = new Vq(),
                b = _.t(76);
              return bg(a, 7, b);
            };
          var Xq = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Xq, Pf);
          var Yq = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Yq, Pf);
          be(Xd(Yd('https://pagead2.googlesyndication.com/pagead/osd.js')));
          var Zq = function (a, b) {
            if (!(window && Math.random && navigator)) return -1;
            if (window.__google_ad_urls) {
              var c = window.__google_ad_urls;
              try {
                if (c && c.getOseId()) return c.getOseId();
              } catch (e) {}
            }
            if (!window.__google_ad_urls_id) {
              c = window.google_enable_ose;
              if (!0 === c) var d = 2;
              else !1 !== c && ((d = Yg([0], a)), null == d && ((d = Yg([2], b)) || (d = 3)));
              if (!d) return 0;
              window.__google_ad_urls_id = d;
            }
            return window.__google_ad_urls_id;
          };
          var $q = function () {};
          _.q = $q.prototype;
          _.q.getNewBlocks = function () {};
          _.q.setupOse = function () {};
          _.q.getOseId = function () {
            return -1;
          };
          _.q.getCorrelator = function () {
            return '';
          };
          _.q.numBlocks = function () {
            return 0;
          };
          _.q.registerAdBlock = function () {};
          _.q.unloadAdBlock = function () {};
          var ar = new qj(1, Si()),
            br = function () {
              var a = Si();
              a &&
                'undefined' != typeof a.google_measure_js_timing &&
                !a.google_measure_js_timing &&
                ((ar.j = !1),
                ar.events != ar.B.google_js_reporting_queue &&
                  (pj() && _.Gd(ar.events, _.rj), (ar.events.length = 0)));
            };
          (function () {
            var a = Si();
            a &&
              a.document &&
              ('complete' == a.document.readyState
                ? br()
                : ar.j &&
                  _.y(a, 'load', function () {
                    br();
                  }));
          })();
          var dr = function () {
              var a = cr,
                b = Si() || _.H;
              return b.google_osd_loaded ? !1 : (Wg(b.document, a), (b.google_osd_loaded = !0));
            },
            er = function (a, b, c) {
              a && (c ? _.y(a, 'load', b) : _.sb(a, 'load', b));
            },
            fr = function () {
              var a = (Si() || _.H).google_osd_amcb;
              return 'function' === typeof a ? a : null;
            },
            gr = be(Xd(Yd('https://www.googletagservices.com/activeview/js/current/osd.js'))),
            hr = function (a) {
              return de(gr, { cb: void 0 === a ? '/r20100101' : a });
            };
          var ir = function (a, b) {
            this.l = b && b.l ? b.l : 0;
            this.B = b ? b.B : '';
            this.j = b && b.j ? b.j : [];
            if (b) for (a = 0; a < this.j.length; ++a) this.j[a].o = !0;
          };
          _.q = ir.prototype;
          _.q.getNewBlocks = function (a, b) {
            for (var c = this.j.length, d = 0; d < c; d++) {
              var e = this.j[d];
              !e.B && e.j && ((e.B = !0), a(e.j, e.A, e.V, e.l, void 0, e.o, e.C, e.H, e.D));
            }
            b && ((Si() || _.H).google_osd_amcb = a);
          };
          _.q.setupOse = function (a) {
            if (this.getOseId()) return this.getOseId();
            var b = Zq(jr, kr);
            if (!b) return 0;
            this.l = b;
            this.B = String(a || 0);
            return this.getOseId();
          };
          _.q.getOseId = function () {
            return window && Math.random && navigator ? this.l : -1;
          };
          _.q.getCorrelator = function () {
            return this.B;
          };
          _.q.numBlocks = function () {
            return this.j.length;
          };
          _.q.registerAdBlock = function (a, b, c, d, e, f, g) {
            g = void 0 === g ? function () {} : g;
            c = fr();
            e = _.jj() || -1;
            f = _.H.pageYOffset;
            0 <= f || (f = -1);
            c && d
              ? c(d, a, b, !1, void 0, !1, g, e, f)
              : ((g = new lr(a, b, d, g, e, f)),
                this.j.push(g),
                er(d, g.m, !0),
                cr ||
                  (_.wi(
                    _.H,
                    '//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=' +
                      b +
                      ('&req=' + a)
                  ),
                  (cr = hr('/r20100101'))),
                dr() && Ti());
          };
          _.q.unloadAdBlock = function (a, b, c) {
            c = void 0 === c ? !1 : c;
            b = Si();
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c &&
              (c = Gh(this.j, function (d) {
                return d.j == a;
              })) &&
              er(a, c.m, !1);
          };
          var mr = function () {
              var a = Si(),
                b = a.__google_ad_urls;
              if (!b) return (a.__google_ad_urls = new ir(a));
              try {
                if (0 <= b.getOseId()) return b;
              } catch (c) {}
              try {
                return (a.__google_ad_urls = new ir(a, b));
              } catch (c) {
                return (a.__google_ad_urls = new ir(a));
              }
            },
            cr = null,
            kr = 0,
            jr = 0,
            lr = function (a, b, c, d, e, f) {
              var g = this;
              d = void 0 === d ? _.ud : d;
              this.A = a;
              this.V = b;
              this.j = c;
              this.o = this.B = this.l = !1;
              this.C = d;
              this.H = void 0 === e ? -1 : e;
              this.D = void 0 === f ? -1 : f;
              this.m = function () {
                return (g.l = !0);
              };
            };
          window.Goog_AdSense_getAdAdapterInstance = mr;
          var nr = ['Goog_AdSense_OsdAdapter'],
            or = _.H;
          nr[0] in or || 'undefined' == typeof or.execScript || or.execScript('var ' + nr[0]);
          for (var pr; nr.length && (pr = nr.shift()); )
            nr.length || void 0 === ir
              ? or[pr] && or[pr] !== Object.prototype[pr]
                ? (or = or[pr])
                : (or = or[pr] = {})
              : (or[pr] = ir);
          var qr = ['auto', 'inherit', '100%'],
            rr = qr.concat(['none']),
            sr = function (a, b, c, d, e, f) {
              e = void 0 === e ? 10 : e;
              f = void 0 === f ? 10 : f;
              b = b.styleSheets;
              if (!b) return !1;
              var g =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.msMatchesSelector ||
                a.oMatchesSelector;
              e = -1 == e ? Infinity : e;
              f = -1 == f ? Infinity : f;
              for (var h = 0; h < Math.min(b.length, e); ++h) {
                var k = void 0;
                try {
                  var l = b[h],
                    m = null;
                  try {
                    m = l.cssRules || l.rules;
                  } catch (I) {
                    if (15 == I.code) throw ((I.styleSheet = l), I);
                  }
                  k = m;
                } catch (I) {
                  continue;
                }
                if (k && 0 < k.length)
                  for (m = 0; m < Math.min(k.length, f); ++m) {
                    var n = k[m],
                      p;
                    if ((p = 1 == n.type)) {
                      p = n;
                      var u = c;
                      p = g.call(a, p.selectorText) && u(p);
                    }
                    if (!p && (p = d && 4 == n.type))
                      a: {
                        p = a;
                        u = c;
                        for (var A = f, z = 0; z < Math.min(n.cssRules.length, A); z++) {
                          var E = n.cssRules[z],
                            F = u;
                          if (g.call(p, E.selectorText) && F(E)) {
                            p = !0;
                            break a;
                          }
                        }
                        p = !1;
                      }
                    if (p) return !0;
                  }
              }
              return !1;
            },
            ur = function (a, b, c) {
              var d = void 0 === d ? 10 : d;
              var e = void 0 === e ? 10 : e;
              if (!a) return !0;
              var f = !0;
              Ah(
                a,
                function (g) {
                  return (f = tr(g, b, !1, d, e));
                },
                void 0 === c ? 100 : c
              );
              return f;
            },
            tr = function (a, b, c, d, e) {
              var f = a.style;
              return (f && f.height && !_.ca(qr, f.height)) ||
                (f && f.maxHeight && !_.ca(rr, f.maxHeight)) ||
                sr(
                  a,
                  b.document,
                  function (g) {
                    var h = g.style.height;
                    g = g.style['max-height'];
                    return (h && !_.ca(qr, h)) || (g && !_.ca(rr, g));
                  },
                  c,
                  d,
                  e
                )
                ? !1
                : !0;
            };
          var vr = function (a) {
              a = void 0 === a ? window : a;
              return a._gmptnl
                ? 'afma-gpt-sdk-a'
                : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl
                ? 'afma-gpt-sdk-i'
                : null;
            },
            wr = function (a, b) {
              b = void 0 === b ? window : b;
              var c = vr(b);
              if (!c) return null;
              var d = null;
              try {
                'afma-gpt-sdk-a' == c
                  ? (d = b._gmptnl.pm('GAM=', a) || '5')
                  : ((d = b.__gmptnl_n || '5'),
                    b.webkit.messageHandlers._gmptnl.postMessage('GAM='));
              } catch (e) {
                return '3';
              }
              return 'string' === typeof d ? d : '3';
            };
          var xr = function () {
            this.l = [];
            this.j = -1;
          };
          xr.prototype.set = function (a, b) {
            b = void 0 === b ? !0 : b;
            0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && ((this.l[a] = b), (this.j = -1));
          };
          xr.prototype.get = function (a) {
            return !!this.l[a];
          };
          var yr = function (a) {
            -1 == a.j &&
              (a.j = Hd(a.l, function (b, c, d) {
                return c ? b + Math.pow(2, d) : b;
              }));
            return a.j;
          };
          var zr = function () {
              this.j = [];
              this.l = [];
              this.B = [];
            },
            Ar = function (a, b) {
              a.l.push(b);
            };
          zr.prototype.clear = function () {
            this.j.length = 0;
            this.B.length = 0;
            this.l.length = 0;
          };
          var Gb = function () {
            var a = this;
            this.promise = new x.Promise(function (b, c) {
              a.resolve = b;
              a.reject = c;
            });
          };
          var Br = function (a) {
            a = Error.call(this, a);
            this.message = a.message;
            'stack' in a && (this.stack = a.stack);
            _.B(Object, 'setPrototypeOf').call(Object, this, Br.prototype);
            this.name = 'InputError';
          };
          _.M(Br, Error);
          var Cr = function () {
              this.l = new Gb();
            },
            Dr = function () {
              Cr.apply(this, arguments);
            };
          _.M(Dr, Cr);
          var U = function (a, b) {
              a.B || ((a.j = b), a.l.resolve(b));
            },
            Er = function (a) {
              a.B || ((a.j = null), a.l.resolve(null));
            };
          Pc.Object.defineProperties(Dr.prototype, {
            promise: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this.l.promise;
              },
            },
            B: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return !!this.o || void 0 !== this.j;
              },
            },
          });
          var Fr = function (a) {
            this.l = new Gb();
            this.B = a;
          };
          _.M(Fr, Cr);
          var Gr = function (a) {
            return null != a.B.j;
          };
          Pc.Object.defineProperties(Fr.prototype, {
            value: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this.B.j;
              },
            },
            error: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this.B.o;
              },
            },
          });
          var Hr = function () {
            Fr.apply(this, arguments);
          };
          _.M(Hr, Fr);
          Pc.Object.defineProperties(Hr.prototype, {
            value: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this.B.j;
              },
            },
          });
          var Ir = function () {
            Dr.apply(this, arguments);
          };
          _.M(Ir, Dr);
          Ir.prototype.notify = function () {
            Er(this);
          };
          var Jr = function () {
            _.Q.call(this);
            var a = this;
            this.o = new zr();
            this.va = !1;
            _.R(this, function () {
              a.o.clear();
            });
          };
          _.M(Jr, _.Q);
          Jr.prototype.start = function () {
            return $a(this, function b () {
              var c = this,
                d,
                e;
              return ab(b, function (f) {
                switch (f.j) {
                  case 1:
                    if (c.va) return f.return();
                    c.va = !0;
                    d = c.o.l.map(function (g) {
                      return g.promise;
                    });
                    f.A = 2;
                    return cb(f, x.Promise.all(d), 4);
                  case 4:
                    if (c.fa) {
                      f.j = 5;
                      break;
                    }
                    Kr(c);
                    return cb(f, c.j(), 5);
                  case 5:
                    eb(f, 0);
                    break;
                  case 2:
                    e = fb(f);
                    if (c.fa) return f.return();
                    e instanceof Br || (c.U(e), c.o.j.length && Lr(c, new Br(e.message)));
                    f.j = 0;
                }
              });
            });
          };
          Jr.prototype.l = function () {
            var a = new Dr();
            this.o.j.push(a);
            return a;
          };
          var Mr = function (a) {
              var b = new Ir();
              a.o.j.push(b);
              return b;
            },
            V = function (a, b) {
              Ar(a.o, b);
              b = new Hr(b);
              a.o.B.push(b);
              return b;
            },
            W = function (a, b) {
              Ar(a.o, b);
              return new Fr(b);
            },
            Kr = function (a) {
              for (var b = 0, c = _.G(a.o.B), d = c.next(); !d.done; d = c.next()) {
                if (!Gr(d.value)) throw Error('missing input: ' + a.id() + '/' + b);
                ++b;
              }
            },
            Lr = function (a, b) {
              a = _.G(a.o.j);
              for (var c = a.next(); !c.done; c = a.next())
                if (((c = c.value), !c.B)) {
                  var d = b;
                  c.o = d;
                  c.l.reject(d);
                }
            };
          var Nr = function (a) {
            Jr.call(this);
            this.I = a;
          };
          _.M(Nr, Jr);
          Nr.prototype.U = function (a) {
            this.I(this.id(), a);
          };
          var Or = function () {
              this.errorMessage = this.info = this.error = this.yb = null;
            },
            Pr = function (a, b) {
              a.yb = b;
              return a;
            };
          Or.prototype.getError = function () {
            return this.error;
          };
          var Qr = function (a, b) {
              a.errorMessage = b;
              return a;
            },
            Rr = function () {
              this.cache = {};
            },
            mb = function () {
              Sr || ((Tr = _.w(1920, Tr)), (Ur = _.w(1921, Ur)), (Sr = new Rr()));
              return Sr;
            },
            Vr = function (a) {
              var b = C(a, 3);
              if (!b) return 3;
              if (!C(a, 2)) return 4;
              a = Date.now();
              return a > b + 3600000 * Ur ? 2 : a > b + 3600000 * Tr ? 1 : 0;
            };
          Rr.prototype.get = function (a, b) {
            var c = new Or();
            if (this.cache[a]) return Pr(c, this.cache[a]);
            var d = '';
            try {
              d = b.getItem('_GESPSK-' + a);
            } catch (e) {
              return (c.error = 6), Qr(c, e.message);
            }
            if (!d) return new Or();
            b = null;
            try {
              b = ig(Kq, d);
            } catch (e) {
              return (a = new Or()), (a.error = 5), Qr(a, e.message);
            }
            b && (this.cache[a] = b);
            return Pr(new Or(), b);
          };
          Rr.prototype.set = function (a, b) {
            D(a, 3, Date.now());
            var c = C(a, 1) || '',
              d = '_GESPSK-' + c,
              e = Pr(new Or(), a);
            try {
              b.setItem(d, a.m());
            } catch (f) {
              (e.info = 7), Qr(e, f.message);
            }
            this.cache[c] = a;
            return e;
          };
          Rr.prototype.clear = function (a) {
            for (var b = new Or(), c = [], d = 0; d < a.length; d++) {
              var e = a.key(d);
              if (e && _.B(e, 'startsWith').call(e, '_GESPSK')) {
                var f = this.get(e.substring(8), a).yb;
                (f && 2 !== Vr(f)) || c.push(e);
              }
            }
            c = _.G(c);
            for (d = c.next(); !d.done; d = c.next()) {
              d = d.value;
              delete this.cache[d];
              try {
                a.removeItem(d);
              } catch (g) {
                b.info || ((b.info = 8), Qr(b, g.message));
              }
            }
            return b;
          };
          var Sr = null,
            Tr = 24,
            Ur = 72;
          var ub = function (a, b, c, d) {
            Nr.call(this, d);
            this.C = a;
            this.H = b;
            this.D = c;
            this.m = this.l();
            this.A = this.l();
          };
          _.M(ub, Nr);
          ub.prototype.j = function () {
            var a = mb().get(this.C, this.D);
            if (a.getError())
              nb(a.getError(), this.C, a.errorMessage, this.D), Er(this.m), Er(this.A);
            else {
              (a = a.yb) ||
                ((a = new Kq()),
                (a = D(a, 1, this.C)),
                (a = D(a, 4, 0)),
                (a = D(a, 5, 0)),
                (a = D(a, 6, 0)),
                (a = D(a, 3, Date.now())));
              a: {
                var b = C(a, 4) || 0;
                var c = _.w(1922);
                if (0 < c && b >= c) {
                  b = C(a, 6) || 0;
                  c = Math.pow(2, b);
                  var d = C(a, 5) || 0;
                  if (d >= c) D(a, 5, 0), D(a, 4, 0), D(a, 6, b + 1);
                  else {
                    D(a, 5, d + 1);
                    b = !0;
                    break a;
                  }
                }
                b = !1;
              }
              b ? (Er(this.m), Er(this.A)) : (U(this.m, this.H), U(this.A, a));
            }
          };
          ub.prototype.id = function () {
            return 655;
          };
          var vb = function (a, b, c, d) {
            Nr.call(this, d);
            this.H = c;
            this.m = this.l();
            this.A = this.l();
            this.C = this.l();
            this.D = W(this, a);
            this.J = W(this, b);
          };
          _.M(vb, Nr);
          vb.prototype.j = function () {
            var a = this;
            if (this.D.value) {
              var b = function (g) {
                  var h = C(g, 2);
                  h ? U(a.m, { id: C(g, 1), Ie: h }) : Er(a.m);
                },
                c = this.D.value,
                d = this.J.value,
                e = C(d, 1),
                f = Vr(d);
              switch (f) {
                case 0:
                  b(d);
                  Wr(this);
                  break;
                case 1:
                  b(d);
                  U(this.A, c);
                  U(this.C, d);
                  break;
                case 3:
                case 2:
                case 4:
                  3 === f && ob(9, e),
                    D(d, 2, null),
                    (f = _.w(1919)),
                    (0 > f
                      ? qb(e, d, c, this.H)
                      : x.Promise.race([
                          rb(f).then(function () {
                            ob(2, e);
                            return d;
                          }),
                          qb(e, d, c, this.H),
                        ])
                    ).then(b),
                    Wr(this);
              }
            } else Er(this.m), Wr(this);
          };
          var Wr = function (a) {
            Er(a.A);
            Er(a.C);
          };
          vb.prototype.id = function () {
            return 658;
          };
          var wb = function (a, b, c, d) {
            Nr.call(this, d);
            this.C = c;
            this.m = W(this, a);
            this.A = W(this, b);
          };
          _.M(wb, Nr);
          wb.prototype.j = function () {
            var a = this;
            this.A.value &&
              this.m.value &&
              tb().then(function () {
                var b = a.m.value,
                  c = a.A.value;
                qb(C(c, 1), c, b, a.C);
              });
          };
          wb.prototype.id = function () {
            return 662;
          };
          var xb = function () {
            _.Q.apply(this, arguments);
            this.j = [];
          };
          _.M(xb, _.Q);
          var yb = function (a, b) {
              b = _.G(b);
              for (var c = b.next(); !c.done; c = b.next()) (c = c.value), _.$h(a, c), a.j.push(c);
            },
            X = function (a, b) {
              yb(a, [b]);
            },
            zb = function (a) {
              if (a.j.length) {
                a = _.G(a.j);
                for (var b = a.next(); !b.done; b = a.next()) b.value.start();
              }
            };
          xb.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.j.length = 0;
          };
          var Xr = 0,
            Yr = be(Xd(Yd('https://pagead2.googlesyndication.com/pagead/expansion_embed.js')));
          var Zr = {};
          var $r = function () {
              this.j = window;
              this.l = 0;
            },
            as = function (a, b) {
              return Ja('__gads', b, a.j.document);
            },
            bs = function (a, b, c) {
              var d = {
                Fc: C(b, 2) - a.j.Date.now() / 1000,
                path: C(b, 3),
                domain: C(b, 4),
                Gd: !1,
              };
              Ka('__gads', C(b, 1), c, d, a.j.document);
              r(c, 5) &&
                0.01 > a.j.Math.random() &&
                ((c = as(a, c)),
                pb(
                  { domain: C(b, 4), host: a.j.location.host, success: c === C(b, 1) ? '1' : '0' },
                  'gfp_cw_status'
                ));
            };
          var cs = Sa(function () {
              return !(kf || lf || jf) && (xf || ef || df);
            }),
            ds = function (a, b, c, d, e) {
              d = void 0 === d ? '' : d;
              var f = a.createElement('link');
              try {
                (f.rel = c),
                  (f.href =
                    -1 != c.toLowerCase().indexOf('stylesheet')
                      ? Xa(b).toString()
                      : b instanceof $d
                      ? Xa(b).toString()
                      : b instanceof _.ue
                      ? _.ve(b)
                      : _.ve(_.xe(b)));
              } catch (g) {
                return null;
              }
              d && 'preload' == c && (f.as = d);
              e && f.setAttribute('nonce', e);
              a = a.getElementsByTagName('head')[0];
              if (!a) return null;
              try {
                a.appendChild(f);
              } catch (g) {}
              return f;
            };
          var es = /^\.google\.(com?\.)?[a-z]{2,3}$/,
            fs = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
            gs = _.H,
            is = function (a) {
              a = 'https://adservice' + (a + '/adsid/integrator.js');
              var b = ['domain=' + encodeURIComponent(_.H.location.hostname)];
              hs[3] >= Dd() && b.push('adsid=' + encodeURIComponent(hs[1]));
              (void 0 == Zr.enable_mustu_exp_behavior ? 0 : Zr.enable_mustu_exp_behavior) &&
                b.push('meb=1');
              return a + '?' + b.join('&');
            },
            hs,
            js,
            ks = function () {
              gs = _.H;
              hs = gs.googleToken = gs.googleToken || {};
              var a = Dd();
              (hs[1] && hs[3] > a && 0 < hs[2]) ||
                ((hs[1] = ''), (hs[2] = -1), (hs[3] = -1), (hs[4] = ''), (hs[6] = ''));
              js = gs.googleIMState = gs.googleIMState || {};
              a = js[1];
              (es.test(a) && !fs.test(a)) || (js[1] = '.google.com');
              Array.isArray(js[5]) || (js[5] = []);
              'boolean' !== typeof js[6] && (js[6] = !1);
              Array.isArray(js[7]) || (js[7] = []);
              'number' !== typeof js[8] && (js[8] = 0);
            },
            ls = function () {
              ks();
              return hs[1];
            },
            ms = function () {
              ks();
              return hs[4];
            },
            ns = function () {
              ks();
              return hs[6];
            },
            os = {
              Tb: function () {
                return 0 < js[8];
              },
              xd: function () {
                js[8]++;
              },
              yd: function () {
                0 < js[8] && js[8]--;
              },
              zd: function () {
                js[8] = 0;
              },
              Le: function () {
                return !1;
              },
              zc: function () {
                return js[5];
              },
              uc: function (a) {
                try {
                  a();
                } catch (b) {
                  _.H.setTimeout(function () {
                    throw b;
                  }, 0);
                }
              },
              Jc: function () {
                if (!os.Tb()) {
                  var a = _.H.document,
                    b = function (e) {
                      e = is(e);
                      a: {
                        try {
                          var f = sd();
                          break a;
                        } catch (g) {}
                        f = void 0;
                      }
                      ds(a, e, 'preload', 'script', f);
                      f = a.createElement('script');
                      f.type = 'text/javascript';
                      f.onerror = function () {
                        return _.H.processGoogleToken({}, 2);
                      };
                      e = Ei(e);
                      f.src = Xa(e);
                      Ya(f);
                      try {
                        (a.head || a.body || a.documentElement).appendChild(f), os.xd();
                      } catch (g) {}
                    },
                    c = js[1];
                  b(c);
                  '.google.com' != c && b('.google.com');
                  b = {};
                  var d = ((b.newToken = 'FBT'), b);
                  _.H.setTimeout(function () {
                    return _.H.processGoogleToken(d, 1);
                  }, 1000);
                }
              },
            },
            ps = function (a) {
              ks();
              var b = gs.googleToken[5] || 0;
              a && (0 != b || hs[3] >= Dd() ? os.uc(a) : (os.zc().push(a), os.Jc()));
              (hs[3] >= Dd() && hs[2] >= Dd()) || os.Jc();
            },
            qs = function (a) {
              _.H.processGoogleToken =
                _.H.processGoogleToken ||
                function (b, c) {
                  var d = b;
                  d = void 0 === d ? {} : d;
                  c = void 0 === c ? 0 : c;
                  b = d.newToken || '';
                  var e = 'NT' == b,
                    f = parseInt(d.freshLifetimeSecs || '', 10),
                    g = parseInt(d.validLifetimeSecs || '', 10),
                    h = d['1p_jar'] || '';
                  d = d.pucrd || '';
                  ks();
                  1 == c ? os.zd() : os.yd();
                  var k = (gs.googleToken = gs.googleToken || {}),
                    l =
                      0 == c &&
                      b &&
                      'string' === typeof b &&
                      !e &&
                      'number' === typeof f &&
                      0 < f &&
                      'number' === typeof g &&
                      0 < g &&
                      'string' === typeof h;
                  e = e && !os.Tb() && (!(hs[3] >= Dd()) || 'NT' == hs[1]);
                  var m = !(hs[3] >= Dd()) && 0 != c;
                  if (l || e || m)
                    (e = Dd()),
                      (f = e + 1000 * f),
                      (g = e + 1000 * g),
                      0.00001 > Math.random() &&
                        _.wi(
                          _.H,
                          'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c
                        ),
                      (k[5] = c),
                      (k[1] = b),
                      (k[2] = f),
                      (k[3] = g),
                      (k[4] = h),
                      (k[6] = d),
                      ks();
                  if (l || !os.Tb()) {
                    c = os.zc();
                    for (b = 0; b < c.length; b++) os.uc(c[b]);
                    c.length = 0;
                  }
                };
              ps(a);
            };
          var bc = function (a, b) {
              b = void 0 === b ? {} : b;
              this.root = b.root ? b.root : null;
              this.C = b.rootMargin
                ? Cb(b.rootMargin)
                : [
                    { value: 0, type: 'px' },
                    { value: 0, type: 'px' },
                    { value: 0, type: 'px' },
                    { value: 0, type: 'px' },
                  ];
              this.rootMargin = _.Bb(this.C, function (c) {
                return '' + c.value + c.type;
              }).join(' ');
              this.H = Eb(b.threshold);
              this.D = a;
              this.j = [];
              this.o = [];
              this.m = !1;
              this.l = null;
              this.B = Md(this.A, 100, this);
            },
            rs = function (a) {
              if (a.root) var b = Fb(a.root);
              else {
                var c = _.Dg(window);
                b = {
                  top: 0,
                  right: c.width,
                  bottom: c.height,
                  left: 0,
                  width: c.width,
                  height: c.height,
                };
              }
              a = _.Bb(a.C, function (d, e) {
                return 'px' == d.type ? d.value : (d.value * (e % 2 ? b.width : b.height)) / 100;
              });
              return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2],
              };
            },
            ss = function (a, b, c) {
              if (!b || b.isIntersecting != c.isIntersecting) return !0;
              var d = b.intersectionRatio,
                e = c.intersectionRatio;
              return d == e
                ? !1
                : _.Id(a.H, function (f) {
                    return f < d != f < e;
                  });
            };
          bc.prototype.A = function () {
            var a = this,
              b = rs(this);
            _.Gd(this.j, function (c) {
              var d = c.target,
                e = Fb(d),
                f = e.width * e.height;
              var g = Math.max(b.top, e.top);
              var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                n = k - g;
              g =
                0 <= m && 0 <= n
                  ? { top: g, right: h, bottom: k, left: l, width: m, height: n }
                  : null;
              h = !!g;
              k = g ? g.width * g.height : 0;
              l = window.performance;
              d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0,
              };
              ss(a, c.na, d) && a.o.push(d);
              c.na = d;
            });
            this.o.length && this.D(ts(this), this);
          };
          bc.prototype.observe = function (a) {
            _.Id(this.j, function (b) {
              return b.target == a;
            }) ||
              (this.j.push({ target: a, na: null }),
              this.A(),
              this.m ||
                ((this.m = !0),
                _.y(_.H, 'scroll', this.B),
                _.y(_.H, 'resize', this.B),
                _.H.MutationObserver &&
                  !this.l &&
                  ((this.l = new MutationObserver(this.B)),
                  this.l.observe(_.H.document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }))));
          };
          bc.prototype.unobserve = function (a) {
            this.j = _.Db(this.j, function (b) {
              return b.target != a;
            });
            0 == this.j.length && this.disconnect();
          };
          bc.prototype.disconnect = function () {
            this.m = !1;
            this.j.length = 0;
            _.sb(_.H, 'scroll', this.B);
            _.sb(_.H, 'resize', this.B);
            this.l && (this.l.disconnect(), (this.l = null));
          };
          var ts = function (a) {
            var b = [].concat(_.Ub(a.o));
            a.o.length = 0;
            return b;
          };
          _.us = function (a, b, c) {
            this.j = void 0 === a ? null : a;
            this.o = void 0 === b ? 'jserror' : b;
            this.l = void 0 === c ? 0.01 : c;
            this.m = this.B;
          };
          _.us.prototype.B = function (a, b, c, d, e) {
            c = void 0 === c ? this.l : c;
            e = void 0 === e ? this.o : e;
            if (Math.random() > c) return !1;
            (b.error && b.meta && b.id) || (b = new tg(b, { context: a, id: e }));
            d && ((b.meta = {}), d && d(b.meta));
            _.H.google_js_errors = _.H.google_js_errors || [];
            _.H.google_js_errors.push(b);
            _.H.error_rep_loaded ||
              (Wg(
                _.H.document,
                Ei(_.H.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js')
              ),
              (_.H.error_rep_loaded = !0));
            return !1;
          };
          var vs = function (a, b, c, d, e, f) {
            _.Q.call(this);
            this.m = a;
            this.status = 1;
            this.l = b;
            this.A = c;
            this.L = d;
            this.rb = !!e;
            this.o = Math.random();
            this.C = {};
            this.j = null;
            this.D = (0, _.Bd)(this.J, this);
            this.H = f;
          };
          _.M(vs, _.Q);
          vs.prototype.J = function (a) {
            if (a.origin === this.A && (this.rb || a.source == this.l)) {
              var b = null;
              try {
                b = JSON.parse(a.data);
              } catch (c) {}
              if (_.ha(b) && ((a = b.i), b.c === this.m && a != this.o)) {
                if (2 !== this.status)
                  try {
                    (this.status = 2), ws(this), this.j && (this.j(), (this.j = null));
                  } catch (c) {}
                a = b.s;
                b = b.p;
                if (
                  'string' === typeof a &&
                  ('string' === typeof b || _.ha(b)) &&
                  this.C.hasOwnProperty(a)
                )
                  this.C[a](b);
              }
            }
          };
          var ws = function (a) {
            var b = {};
            b.c = a.m;
            b.i = a.o;
            a.H && (b.e = a.H);
            a.l.postMessage(JSON.stringify(b), a.A);
          };
          vs.prototype.I = function () {
            if (1 === this.status) {
              try {
                this.l.postMessage && ws(this);
              } catch (a) {}
              window.setTimeout((0, _.Bd)(this.I, this), 50);
            }
          };
          vs.prototype.connect = function (a) {
            a && (this.j = a);
            _.y(window, 'message', this.D);
            this.L && this.I();
          };
          var xs = function (a, b, c) {
              a.C[b] = c;
            },
            ys = function (a, b, c) {
              var d = {};
              d.c = a.m;
              d.i = a.o;
              d.s = b;
              d.p = c;
              try {
                a.l.postMessage(JSON.stringify(d), a.A);
              } catch (e) {}
            };
          vs.prototype.B = function () {
            this.status = 3;
            _.sb(window, 'message', this.D);
            _.Q.prototype.B.call(this);
          };
          var zs = function () {
              this.j = [];
            },
            Bs = function (a, b, c, d, e) {
              a.j.push(new As(b, c, d, e));
            },
            Cs = function (a, b, c, d) {
              Bs(a, b, c, d + 'px', void 0);
            },
            Ds = function (a) {
              for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.l
                  ? (c.B.style.removeProperty(c.j), c.B.style.setProperty(c.j, String(c.o), c.m))
                  : (c.B.style[c.j] = c.o);
              }
              a.j.length = 0;
            },
            As = function (a, b, c, d) {
              this.B = a;
              this.j = (this.l = !(void 0 === d || !a.style || !a.style.getPropertyPriority))
                ? String(b)
                    .replace(/([A-Z])/g, '-$1')
                    .toLowerCase()
                : b;
              this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
              this.m = this.l ? a.style.getPropertyPriority(this.j) : void 0;
              this.l
                ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d))
                : (a.style[this.j] = String(c));
            };
          var Es, Fs;
          Es = { overflow: 'hidden', position: 'fixed' };
          _.Gs = function (a, b) {
            if (!a.body) return null;
            var c = new Fs();
            c.apply(a, b);
            return function () {
              _.Gi(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.B,
                position: c.o,
                top: c.m,
              });
              b.scrollTo(0, c.l);
            };
          };
          Fs = function () {
            this.j = this.m = this.o = this.B = null;
            this.l = 0;
          };
          Fs.prototype.apply = function (a, b) {
            this.B = a.body.style.overflow;
            this.o = a.body.style.position;
            this.m = a.body.style.top;
            this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.l = _.qn(b);
            _.Gi(a.body, 'top', -this.l + 'px');
            _.Gi(a.body, Es);
          };
          _.Hs = function () {
            this.j = null;
          };
          vd(_.Hs);
          var Is = function (a, b) {
            b = void 0 === b ? 500 : b;
            _.Q.call(this);
            this.l = a;
            this.j = null;
            this.m = {};
            this.A = 0;
            this.C = b;
            this.o = null;
          };
          _.M(Is, _.Q);
          Is.prototype.B = function () {
            this.m = {};
            this.o && (_.sb(this.l, 'message', this.o), delete this.o);
            delete this.m;
            delete this.l;
            delete this.j;
            _.Q.prototype.B.call(this);
          };
          var Ks = function (a) {
              return 'function' === typeof a.l.__uspapi || null != Js(a);
            },
            Ms = function (a, b) {
              var c = {};
              if (Ks(a)) {
                var d = _.Ld(function () {
                  return b(c);
                });
                Ls(a, function (e, f) {
                  f && (c = e);
                  d();
                });
                setTimeout(d, a.C);
              } else b(c);
            },
            Ls = function (a, b) {
              if ('function' === typeof a.l.__uspapi) (a = a.l.__uspapi), a('getUSPData', 1, b);
              else if (Js(a)) {
                Ns(a);
                var c = ++a.A;
                a.m[c] = b;
                a.j &&
                  ((b = {}),
                  a.j.postMessage(
                    ((b.__uspapiCall = { command: 'getUSPData', version: 1, callId: c }), b),
                    '*'
                  ));
              }
            },
            Js = function (a) {
              if (a.j) return a.j;
              a.j = rh(a.l, '__uspapiLocator');
              return a.j;
            },
            Ns = function (a) {
              a.o ||
                ((a.o = function (b) {
                  try {
                    var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
                      .__uspapiReturn;
                    a.m[c.callId](c.returnValue, c.success);
                  } catch (d) {}
                }),
                _.y(a.l, 'message', a.o));
            };
          var Os = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Os, Pf);
          var Qs = function (a) {
            Tf(this, a, Ps, null);
          };
          Ed(Qs, Pf);
          var Ps = [1, 2];
          var Rs = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Rs, Pf);
          var Ss = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Ss, Pf);
          var Ts = function (a) {
            _.Q.call(this);
            this.l = a;
            this.o = this.j = null;
            this.m = {};
            this.A = 0;
            this.j ||
              (this.l.googlefc ? (this.j = this.l) : (this.j = rh(this.l, 'googlefcPresent')));
          };
          _.M(Ts, _.Q);
          var Vs = function (a, b, c) {
              if (a.j)
                if (a.j === a.l)
                  (a = a.l.googlefc || (a.l.googlefc = {})),
                    (a.__fci = a.__fci || []),
                    a.__fci.push(b, function (f) {
                      c(ig(Ss, f));
                    });
                else {
                  Us(a);
                  var d = a.A++;
                  a.m[d] = c;
                  var e = {};
                  a.j.postMessage(((e.__fciCall = { command: b, callId: d }), e), '*');
                }
            },
            Ws = function (a, b) {
              return new x.Promise(function (c) {
                Vs(a, b, c);
              });
            },
            Us = function (a) {
              a.o ||
                ((a.o = function (b) {
                  try {
                    var c = ig(Ss, b.data.__fciReturn);
                    (0, a.m[C(c, 1)])(c);
                  } catch (d) {}
                }),
                _.y(a.l, 'message', a.o));
            },
            Xs = function (a, b, c, d) {
              if (!b) return x.Promise.resolve(null);
              var e = dg(b, Os, 3);
              b = dg(b, Rs, 2);
              return e && b && 1 === C(b, 1) && 2 === C(e, 1)
                ? Ws(a, 'getM25Consent').then(function (f) {
                    var g = dg(f, Qs, 4);
                    if (g) {
                      if (((f = d), c)) {
                        var h = C(g, 1);
                        h && _.B(h, 'includes').call(h, c) && (f = !1);
                        (g = C(g, 2)) && _.B(g, 'includes').call(g, c) && (f = !0);
                      }
                    } else f = null;
                    return f;
                  })
                : x.Promise.resolve(null);
            };
          var Ys = function (a) {
              void 0 !== a.addtlConsent &&
                'string' !== typeof a.addtlConsent &&
                (a.addtlConsent = void 0);
              void 0 !== a.gdprApplies &&
                'boolean' !== typeof a.gdprApplies &&
                (a.gdprApplies = void 0);
              return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
                (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
                ? 2
                : a.cmpStatus && 'error' !== a.cmpStatus
                ? 0
                : 3;
            },
            Zs = function (a, b) {
              b = void 0 === b ? 500 : b;
              _.Q.call(this);
              this.l = a;
              this.j = null;
              this.m = {};
              this.C = 0;
              this.A = b;
              this.o = null;
            };
          _.M(Zs, _.Q);
          Zs.prototype.B = function () {
            this.m = {};
            this.o && (_.sb(this.l, 'message', this.o), delete this.o);
            delete this.m;
            delete this.l;
            delete this.j;
            _.Q.prototype.B.call(this);
          };
          var at = function (a) {
            return 'function' === typeof a.l.__tcfapi || null != $s(a);
          };
          Zs.prototype.addEventListener = function (a) {
            var b = {},
              c = _.Ld(function () {
                return a(b);
              }),
              d = 0;
            -1 !== this.A &&
              (d = setTimeout(function () {
                b.tcString = 'tcunavailable';
                b.internalErrorState = 1;
                c();
              }, this.A));
            var e = function (f, g) {
              clearTimeout(d);
              f
                ? ((b = f),
                  (b.internalErrorState = Ys(b)),
                  (g && 0 === b.internalErrorState) ||
                    ((b.tcString = 'tcunavailable'), g || (b.internalErrorState = 3)))
                : ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3));
              a(b);
            };
            try {
              bt(this, 'addEventListener', e);
            } catch (f) {
              (b.tcString = 'tcunavailable'),
                (b.internalErrorState = 3),
                d && (clearTimeout(d), (d = 0)),
                c();
            }
          };
          Zs.prototype.removeEventListener = function (a) {
            a && a.listenerId && bt(this, 'removeEventListener', null, a.listenerId);
          };
          var dt = function (a, b) {
              var c = { internalErrorState: 0 },
                d = _.Ld(function () {
                  return b(c);
                }),
                e = 0;
              -1 !== a.A &&
                (e = setTimeout(function () {
                  c.tcString = 'tcunavailable';
                  c.internalErrorState = 1;
                  d();
                }, a.A));
              bt(a, 'addEventListener', function (f, g) {
                e && (clearTimeout(e), (e = 0));
                g && (c = f);
                c.internalErrorState = Ys(c);
                0 != c.internalErrorState && (c.tcString = 'tcunavailable');
                if (0 != c.internalErrorState || ct(c))
                  bt(a, 'removeEventListener', null, c.listenerId), d();
              });
            },
            bt = function (a, b, c, d) {
              c || (c = function () {});
              if ('function' === typeof a.l.__tcfapi) (a = a.l.__tcfapi), a(b, 2, c, d);
              else if ($s(a)) {
                et(a);
                var e = ++a.C;
                a.m[e] = c;
                a.j &&
                  ((c = {}),
                  a.j.postMessage(
                    ((c.__tcfapiCall = { command: b, version: 2, callId: e, parameter: d }), c),
                    '*'
                  ));
              } else c({}, !1);
            },
            $s = function (a) {
              if (a.j) return a.j;
              a.j = rh(a.l, '__tcfapiLocator');
              return a.j;
            },
            et = function (a) {
              a.o ||
                ((a.o = function (b) {
                  try {
                    var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
                      .__tcfapiReturn;
                    a.m[c.callId](c.returnValue, c.success);
                  } catch (d) {}
                }),
                _.y(a.l, 'message', a.o));
            },
            ct = function (a) {
              if (!1 === a.gdprApplies) return !0;
              void 0 === a.internalErrorState && (a.internalErrorState = Ys(a));
              return 'error' === a.cmpStatus ||
                0 !== a.internalErrorState ||
                ('loaded' === a.cmpStatus &&
                  ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus))
                ? !0
                : !1;
            };
          var ft = function (a, b) {
            if (!a) return a;
            var c = a.toLowerCase();
            return -1 < c.indexOf('<!doctype') || -1 < c.indexOf('<html')
              ? a
              : '<!doctype html><html><head>' +
                  (void 0 === b ? '' : b) +
                  '</head><body>' +
                  a +
                  '</body></html>';
          };
          var gt = function (a, b, c, d, e, f) {
              this.B = hi(a);
              this.l = hi(b);
              this.o = c;
              this.j = hi(d);
              this.m = e;
              this.A = f;
            },
            ht = function (a) {
              return JSON.stringify({
                windowCoords_t: a.B.top,
                windowCoords_r: a.B.right,
                windowCoords_b: a.B.bottom,
                windowCoords_l: a.B.left,
                frameCoords_t: a.l.top,
                frameCoords_r: a.l.right,
                frameCoords_b: a.l.bottom,
                frameCoords_l: a.l.left,
                styleZIndex: a.o,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.m,
                yInView: a.A,
              });
            },
            it = function (a, b) {
              var c = window,
                d = c.screenX || c.screenLeft || 0,
                e = c.screenY || c.screenTop || 0;
              c = new _.gi(
                e,
                d + (c.outerWidth || document.documentElement.clientWidth || 0),
                e + (c.outerHeight || document.documentElement.clientHeight || 0),
                d
              );
              var f = Mi(a);
              d = _.Pi(_.Qi, a);
              var g = new ii(f.x, f.y, d.width, d.height);
              d = ji(g);
              e = String(Ji(a, 'zIndex'));
              var h = new _.gi(0, Infinity, Infinity, 0);
              for (
                var k = zg(a), l = k.j.body, m = k.j.documentElement, n = Eg(k.j);
                (a = Li(a));

              )
                if (
                  !((_.bf && 0 == a.clientWidth) || (ff && 0 == a.clientHeight && a == l)) &&
                  a != l &&
                  a != m &&
                  'visible' != Ji(a, 'overflow')
                ) {
                  var p = Mi(a),
                    u = new _.Va(a.clientLeft, a.clientTop);
                  p.x += u.x;
                  p.y += u.y;
                  h.top = Math.max(h.top, p.y);
                  h.right = Math.min(h.right, p.x + a.clientWidth);
                  h.bottom = Math.min(h.bottom, p.y + a.clientHeight);
                  h.left = Math.max(h.left, p.x);
                }
              a = n.scrollLeft;
              n = n.scrollTop;
              h.left = Math.max(h.left, a);
              h.top = Math.max(h.top, n);
              k = _.Dg(Fg(k.j) || window);
              h.right = Math.min(h.right, a + k.width);
              h.bottom = Math.min(h.bottom, n + k.height);
              h = (h =
                0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null)
                ? new ii(h.left, h.top, h.right - h.left, h.bottom - h.top)
                : null;
              b
                ? ((k = b.boundingClientRect),
                  (b = new ii(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)))
                : (b = h);
              k = h ? ki(g, h) : null;
              h = f = 0;
              k &&
                !new _.wg(k.width, k.height).isEmpty() &&
                ((f = k.width / g.width), (h = k.height / g.height));
              k = new _.gi(0, 0, 0, 0);
              if ((a = b))
                (g = ki(g, b))
                  ? ((n = ji(b)),
                    (l = ji(g)),
                    (a = l.right != n.left && n.right != l.left),
                    (n = l.bottom != n.top && n.bottom != l.top),
                    (a = (0 != g.width || a) && (0 != g.height || n)))
                  : (a = !1);
              a &&
                (k = new _.gi(
                  Math.max(d.top - b.top, 0),
                  Math.max(b.left + b.width - d.right, 0),
                  Math.max(b.top + b.height - d.bottom, 0),
                  Math.max(d.left - b.left, 0)
                ));
              return new gt(c, d, e, k, f, h);
            };
          var jt = function (a) {
            this.m = a;
            this.o = null;
            this.I = this.status = 0;
            this.l = null;
            this.ka = 'sfchannel' + a;
          };
          var kt = !1,
            lt = '',
            mt = function (a) {
              a = a.match(/[\d]+/g);
              if (!a) return '';
              a.length = 3;
              return a.join('.');
            };
          (function () {
            if (navigator.plugins && navigator.plugins.length) {
              var a = navigator.plugins['Shockwave Flash'];
              if (a && ((kt = !0), a.description)) {
                lt = mt(a.description);
                return;
              }
              if (navigator.plugins['Shockwave Flash 2.0']) {
                kt = !0;
                lt = '2.0.0.11';
                return;
              }
            }
            if (
              navigator.mimeTypes &&
              navigator.mimeTypes.length &&
              ((a = navigator.mimeTypes['application/x-shockwave-flash']),
              (kt = !(!a || !a.enabledPlugin)))
            ) {
              lt = mt(a.enabledPlugin.description);
              return;
            }
            if ('undefined' != typeof ActiveXObject) {
              try {
                var b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');
                kt = !0;
                lt = mt(b.GetVariable('$version'));
                return;
              } catch (c) {}
              try {
                b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                kt = !0;
                lt = '6.0.21';
                return;
              } catch (c) {}
              try {
                (b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')),
                  (kt = !0),
                  (lt = mt(b.GetVariable('$version')));
              } catch (c) {}
            }
          })();
          var nt = kt,
            ot = lt;
          var pt = function (a) {
            this.j = a;
          };
          var qt = function (a, b) {
            this.Fb = a;
            this.Gb = b;
            this.l = this.j = !1;
          };
          var rt = function (a, b, c, d, e, f, g, h, k) {
            k = void 0 === k ? [] : k;
            this.m = a;
            this.l = b;
            this.B = c;
            this.permissions = d;
            this.o = e;
            this.A = f;
            this.rb = g;
            this.hostpageLibraryTokens = k;
            this.j = '';
            this.Za = h;
          };
          var st = function (a, b) {
            this.l = a;
            this.o = b;
          };
          st.prototype.j = function (a) {
            this.o && a && (a.sentinel = this.o);
            return JSON.stringify(a);
          };
          var tt = function (a, b, c) {
            st.call(this, a, void 0 === c ? '' : c);
            this.version = b;
          };
          _.M(tt, st);
          tt.prototype.j = function () {
            return st.prototype.j.call(this, { uid: this.l, version: this.version });
          };
          var ut = function (a, b, c, d) {
            st.call(this, a, void 0 === d ? '' : d);
            this.m = b;
            this.B = c;
          };
          _.M(ut, st);
          ut.prototype.j = function () {
            return st.prototype.j.call(this, {
              uid: this.l,
              initialWidth: this.m,
              initialHeight: this.B,
            });
          };
          var vt = function (a, b, c) {
            st.call(this, a, void 0 === c ? '' : c);
            this.B = b;
          };
          _.M(vt, st);
          vt.prototype.j = function () {
            return st.prototype.j.call(this, { uid: this.l, description: this.B });
          };
          var wt = function (a, b, c, d) {
            st.call(this, a, void 0 === d ? '' : d);
            this.B = b;
            this.push = c;
          };
          _.M(wt, st);
          wt.prototype.j = function () {
            return st.prototype.j.call(this, {
              uid: this.l,
              expand_t: this.B.top,
              expand_r: this.B.right,
              expand_b: this.B.bottom,
              expand_l: this.B.left,
              push: this.push,
            });
          };
          var xt = function (a, b) {
            st.call(this, a, void 0 === b ? '' : b);
          };
          _.M(xt, st);
          xt.prototype.j = function () {
            return st.prototype.j.call(this, { uid: this.l });
          };
          var yt = function (a, b, c) {
            st.call(this, a, void 0 === c ? '' : c);
            this.m = b;
          };
          _.M(yt, st);
          yt.prototype.j = function () {
            var a = { uid: this.l, newGeometry: ht(this.m) };
            return st.prototype.j.call(this, a);
          };
          var zt = function (a, b, c, d, e, f) {
            yt.call(this, a, c, void 0 === f ? '' : f);
            this.success = b;
            this.B = d;
            this.push = e;
          };
          _.M(zt, yt);
          zt.prototype.j = function () {
            var a = {
              uid: this.l,
              success: this.success,
              newGeometry: ht(this.m),
              expand_t: this.B.top,
              expand_r: this.B.right,
              expand_b: this.B.bottom,
              expand_l: this.B.left,
              push: this.push,
            };
            this.o && (a.sentinel = this.o);
            return JSON.stringify(a);
          };
          var At = function (a, b, c, d) {
            st.call(this, a, void 0 === d ? '' : d);
            this.width = b;
            this.height = c;
          };
          _.M(At, st);
          At.prototype.j = function () {
            return st.prototype.j.call(this, {
              uid: this.l,
              width: this.width,
              height: this.height,
            });
          };
          var Bt = function (a, b, c, d, e) {
            var f = c;
            f && (f = '?' + f);
            b =
              (void 0 === e ? '//tpc.googlesyndication.com' : e) +
              ('/safeframe/' + b + '/html/container.html' + f);
            e = a;
            for (f = 0; e != e.parent; ) f++, (e = e.parent);
            (e = f) && (b += (c ? '&' : '?') + 'n=' + e);
            (c = d) || (c = jh(a, !1));
            return (c ? 'https:' : 'http:') + b;
          };
          var Ct = function (a, b, c, d) {
              var e = d || window;
              return function () {
                var f = _.kj(),
                  g = 3;
                try {
                  var h = b.apply(this, arguments);
                } catch (k) {
                  g = 13;
                  if (c) return c(a, k), h;
                  throw k;
                } finally {
                  e.google_measure_js_timing &&
                    f &&
                    ((f = { label: a.toString(), value: f, duration: (_.kj() || 0) - f, type: g }),
                    (g = e.google_js_reporting_queue = e.google_js_reporting_queue || []),
                    2048 > g.length && g.push(f));
                }
                return h;
              };
            },
            Dt = function (a, b) {
              return Ct(
                a,
                b,
                function (c, d) {
                  new _.us().B(c, d);
                },
                void 0
              );
            };
          var It = function (a) {
            jt.call(this, a.uniqueId);
            var b = this;
            this.D = a.sd;
            this.V = 1 == a.size;
            this.W = new qt(a.permissions.Fb && !this.V, a.permissions.Gb && !this.V);
            this.A = a.cc;
            this.oa = a.hostpageLibraryTokens || [];
            var c = window.location;
            this.ia = 'file:' == c.protocol ? '*' : c.protocol + '//' + c.host;
            this.ja = !!a.rb;
            c = !1 === a.Sc ? 'https:' : window.location.protocol;
            this.T = a.Nc
              ? '//' + a.Nc + '.safeframe.googlesyndication.com'
              : '//tpc.googlesyndication.com';
            this.ha = Lb(a.Za) ? 'https://secureframe.doubleclick.net' : c + this.T;
            this.X = !!a.cd;
            this.ea = Et(a);
            this.B = new zs();
            Ft(this, a.cc, a.size);
            this.o = this.ba = it(a.cc);
            this.N = a.Ed || '1-0-37';
            this.ga = a.Yc || '';
            this.Z = void 0 === a.Za ? null : a.Za;
            Gt(this, a);
            this.U = null;
            this.J = Ct(
              412,
              function () {
                return Ht(b);
              },
              a.ta
            );
            this.L = -1;
            this.C = 0;
            this.H = null;
            !a.Ne ||
              'function' !== typeof IntersectionObserver ||
              hf ||
              gf ||
              (this.H = new IntersectionObserver(
                Ct(
                  414,
                  function (e) {
                    b.U = e[e.length - 1];
                    Ht(b);
                  },
                  a.ta
                )
              ));
            this.l = new vs(this.ka, this.j.contentWindow, this.ha, !1);
            xs(this.l, 'init_done', (0, _.Bd)(this.Ub, this));
            xs(this.l, 'register_done', (0, _.Bd)(this.ic, this));
            xs(this.l, 'report_error', (0, _.Bd)(this.kc, this));
            xs(this.l, 'expand_request', (0, _.Bd)(this.Sb, this));
            xs(this.l, 'collapse_request', (0, _.Bd)(this.Pb, this));
            xs(this.l, 'creative_geometry_update', (0, _.Bd)(this.R, this));
            this.l.connect((0, _.Bd)(this.Yb, this));
            var d = Ct(
              415,
              function () {
                b.j && ((b.j.name = ''), a.Hc && a.Hc(), _.sb(b.j, 'load', d));
              },
              a.ta
            );
            _.y(this.j, 'load', d);
            this.Ub = Ct(413, this.Ub, a.ta);
            this.ic = Ct(417, this.ic, a.ta);
            this.kc = Ct(419, this.kc, a.ta);
            this.Sb = Ct(411, this.Sb, a.ta);
            this.Pb = Ct(409, this.Pb, a.ta);
            this.R = Ct(410, this.R, a.ta);
            this.Yb = Ct(416, this.Yb, a.ta);
          };
          _.M(It, jt);
          var Ft = function (a, b, c) {
              a.V
                ? ((b.style.width = _.Oi('100%', !0)), (b.style.height = _.Oi('auto', !0)))
                : ((b.style.width = _.Oi(c.width, !0)), (b.style.height = _.Oi(c.height, !0)));
            },
            Gt = function (a, b) {
              var c = zg(a.A),
                d = b.content;
              d = a.N + ';' + d.length + ';' + d;
              var e = new rt(
                a.m,
                a.ia,
                a.ba,
                a.W,
                new pt({
                  shared: {
                    sf_ver: a.N,
                    ck_on: navigator.cookieEnabled ? 1 : 0,
                    flash_ver: nt ? ot : '0',
                  },
                }),
                a.V,
                a.ja,
                a.Z,
                a.oa
              );
              var f = {};
              f.uid = e.m;
              f.hostPeerName = e.l;
              f.initialGeometry = ht(e.B);
              var g = e.permissions;
              g = JSON.stringify({
                expandByOverlay: g.Fb,
                expandByPush: g.Gb,
                readCookie: g.j,
                writeCookie: g.l,
              });
              f =
                ((f.permissions = g),
                (f.metadata = JSON.stringify(e.o.j)),
                (f.reportCreativeGeometry = e.A),
                (f.isDifferentSourceWindow = e.rb),
                (f.goog_safeframe_hlt = an(e.hostpageLibraryTokens)),
                (f.encryptionMode = e.Za),
                f);
              e.j && (f.sentinel = e.j);
              e = JSON.stringify(f);
              e = d + e;
              d = !1 === b.Sc;
              if (a.X && b.size instanceof _.wg) {
                f = Lb(b.Za)
                  ? 'https://secureframe.doubleclick.net'
                  : Fg(c.j).location.protocol + a.T;
                g = b.Cc;
                var h = b.size,
                  k = Fg(zg(a.A).j);
                Xr || Wg(k.document, Yr);
                Xr++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                  a: g,
                  b: f,
                  c: h.width,
                  d: h.height,
                  e: 'sf-gdn-exp-' + Xr,
                  f: void 0,
                  g: void 0,
                  h: void 0,
                  i: void 0,
                });
              }
              g = b.size;
              var l = b.xb,
                m = b.ld || '';
              f = g.width;
              h = g.height;
              g = '';
              a.V && ((h = f = 0), (g = 'min-width:100%'));
              k = {};
              k.id = b.Cc;
              k.title = m;
              k.name = e;
              b = Fg(c.j);
              d = Lb(a.Z)
                ? 'https://secureframe.doubleclick.net/container.html?ecs=' + l
                : Bt(b, a.N, a.ga, d, a.T);
              e = [];
              a.X &&
                ((b = kh(b.location.href)),
                e.push(
                  [
                    0 < b.length ? 'google_debug' + (b ? '=' + b : '') + '&' : '',
                    'xpc=',
                    'sf-gdn-exp-' + a.m,
                    '&p=',
                    encodeURIComponent(_.H.document.location.protocol),
                    '//',
                    encodeURIComponent(_.H.document.location.host),
                  ].join('')
                ));
              e.length && (d += '#' + e.join('&'));
              b =
                ((k.src = d),
                (k.scrolling = 'no'),
                (k.marginWidth = '0'),
                (k.marginHeight = '0'),
                (k.width = String(f)),
                (k.height = String(h)),
                (k['data-is-safeframe'] = 'true'),
                k);
              null !== a.ea && (b.sandbox = a.ea);
              d = g;
              e = {};
              d =
                ((e.frameborder = 0),
                (e.allowTransparency = 'true'),
                (e.style = 'border:0;vertical-align:bottom;' + (void 0 === d ? '' : d)),
                (e.src = 'about:blank'),
                e);
              b && Sd(d, b);
              c = c.$c('IFRAME', d);
              a.A.appendChild(c);
              a.j = c;
            };
          _.q = It.prototype;
          _.q.Yb = function () {
            this.H && this.j
              ? this.H.observe(this.j)
              : (_.y(window, 'resize', this.J), _.y(window, 'scroll', this.J));
          };
          _.q.Ub = function (a) {
            try {
              if (0 != this.status) throw Error('Container already initialized');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (!_.ha(b) || !Kb(b.uid) || 'string' !== typeof b.version)
                throw Error('Cannot parse JSON message');
              var c = new tt(b.uid, b.version, b.sentinel);
              if (this.m != c.l || this.N != c.version) throw Error('Wrong source container');
              this.status = 1;
            } catch (d) {
              this.D.error('Invalid INITIALIZE_DONE message. Reason: ' + d.message);
            }
          };
          _.q.ic = function (a) {
            try {
              if (1 != this.status) throw Error('Container not initialized');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (
                !_.ha(b) ||
                !Kb(b.uid) ||
                'number' !== typeof b.initialWidth ||
                'number' !== typeof b.initialHeight
              )
                throw Error('Cannot parse JSON message');
              if (this.m != new ut(b.uid, b.initialWidth, b.initialHeight, b.sentinel).l)
                throw Error('Wrong source container');
              this.status = 2;
            } catch (c) {
              this.D.error('Invalid REGISTER_DONE message. Reason: ' + c.message);
            }
          };
          _.q.kc = function (a) {
            try {
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (!_.ha(b) || !Kb(b.uid) || 'string' !== typeof b.description)
                throw Error('Cannot parse JSON message');
              var c = new vt(b.uid, b.description, b.sentinel);
              if (this.m != c.l) throw Error('Wrong source container');
              this.D.info('Ext reported an error. Description: ' + c.B);
            } catch (d) {
              this.D.error('Invalid REPORT_ERROR message. Reason: ' + d.message);
            }
          };
          _.q.Sb = function (a) {
            try {
              if (2 != this.status) throw Error('Container is not registered');
              if (0 != this.I) throw Error('Container is not collapsed');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (
                !_.ha(b) ||
                !Kb(b.uid) ||
                'number' !== typeof b.expand_t ||
                'number' !== typeof b.expand_r ||
                'number' !== typeof b.expand_b ||
                'number' !== typeof b.expand_l ||
                'boolean' !== typeof b.push
              )
                throw Error('Cannot parse JSON message');
              var c = new wt(
                b.uid,
                new _.gi(b.expand_t, b.expand_r, b.expand_b, b.expand_l),
                b.push,
                b.sentinel
              );
              if (this.m != c.l) throw Error('Wrong source container');
              if (!(0 <= c.B.top && 0 <= c.B.left && 0 <= c.B.bottom && 0 <= c.B.right))
                throw Error('Invalid expansion amounts');
              var d;
              if ((d = (c.push && this.W.Gb) || (!c.push && this.W.Fb))) {
                var e = c.B,
                  f = c.push,
                  g = (this.o = it(this.j));
                if (
                  e.top <= g.j.top &&
                  e.right <= g.j.right &&
                  e.bottom <= g.j.bottom &&
                  e.left <= g.j.left
                ) {
                  if (!f)
                    for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                      Bs(this.B, h, 'overflowX', 'visible', 'important'),
                        Bs(this.B, h, 'overflowY', 'visible', 'important');
                  var k = this.o.l,
                    l = this.o.l,
                    m = ji(new ii(0, 0, k.right - k.left, l.bottom - l.top));
                  _.ha(e)
                    ? ((m.top -= e.top),
                      (m.right += e.right),
                      (m.bottom += e.bottom),
                      (m.left -= e.left))
                    : ((m.top -= e),
                      (m.right += Number(void 0)),
                      (m.bottom += Number(void 0)),
                      (m.left -= Number(void 0)));
                  Bs(this.B, this.A, 'position', 'relative');
                  Bs(this.B, this.j, 'position', 'absolute');
                  f
                    ? (Cs(this.B, this.A, 'width', m.right - m.left),
                      Cs(this.B, this.A, 'height', m.bottom - m.top))
                    : Bs(this.B, this.j, 'zIndex', '10000');
                  Cs(this.B, this.j, 'width', m.right - m.left);
                  Cs(this.B, this.j, 'height', m.bottom - m.top);
                  Cs(this.B, this.j, 'left', m.left);
                  Cs(this.B, this.j, 'top', m.top);
                  this.I = 2;
                  this.o = it(this.j);
                  d = !0;
                } else d = !1;
              }
              a = d;
              ys(this.l, 'expand_response', new zt(this.m, a, this.o, c.B, c.push).j());
              if (!a) throw Error('Viewport or document body not large enough to expand into.');
            } catch (n) {
              this.D.error('Invalid EXPAND_REQUEST message. Reason: ' + n.message);
            }
          };
          _.q.Pb = function (a) {
            try {
              if (2 != this.status) throw Error('Container is not registered');
              if (2 != this.I) throw Error('Container is not expanded');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (!_.ha(b) || !Kb(b.uid)) throw Error('Cannot parse JSON message');
              if (this.m != new xt(b.uid, b.sentinel).l) throw Error('Wrong source container');
              Ds(this.B);
              this.I = 0;
              this.j && (this.o = it(this.j));
              ys(this.l, 'collapse_response', new yt(this.m, this.o).j());
            } catch (c) {
              this.D.error('Invalid COLLAPSE_REQUEST message. Reason: ' + c.message);
            }
          };
          var Ht = function (a) {
            if (1 == a.status || 2 == a.status)
              switch (a.C) {
                case 0:
                  Jt(a);
                  a.L = window.setTimeout((0, _.Bd)(a.$, a), 1000);
                  a.C = 1;
                  break;
                case 1:
                  a.C = 2;
                  break;
                case 2:
                  a.C = 2;
              }
          };
          It.prototype.R = function (a) {
            try {
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (
                !_.ha(b) ||
                !Kb(b.uid) ||
                'number' !== typeof b.width ||
                'number' !== typeof b.height ||
                (b.sentinel && 'string' !== typeof b.sentinel)
              )
                throw Error('Cannot parse JSON message');
              var c = new At(b.uid, b.width, b.height, b.sentinel);
              if (this.m != c.l) throw Error('Wrong source container');
              var d = String(c.height);
              this.V
                ? d != this.j.height && ((this.j.height = d), Ht(this))
                : this.D.error(
                    'Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.'
                  );
            } catch (e) {
              this.D.error('Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ' + e.message);
            }
          };
          It.prototype.$ = function () {
            if (1 == this.status || 2 == this.status)
              switch (this.C) {
                case 1:
                  this.C = 0;
                  break;
                case 2:
                  Jt(this),
                    (this.L = window.setTimeout((0, _.Bd)(this.$, this), 1000)),
                    (this.C = 1);
              }
          };
          var Jt = function (a) {
              a.o = it(a.j, a.U);
              a.U = null;
              ys(a.l, 'geometry_update', new yt(a.m, a.o).j());
            },
            Et = function (a) {
              var b = null;
              a.Oc && (b = a.Oc);
              return null == b ? null : b.join(' ');
            },
            Kt = [
              'allow-modals',
              'allow-orientation-lock',
              'allow-presentation',
              'allow-pointer-lock',
            ],
            Lt = ['allow-top-navigation'],
            Mt = ['allow-same-origin'],
            Nt = nh([].concat(_.Ub(Kt), _.Ub(Lt)));
          nh([].concat(_.Ub(Kt), _.Ub(Mt)));
          nh([].concat(_.Ub(Kt), _.Ub(Lt), _.Ub(Mt)));
          var Nb = function (a, b, c, d) {
            try {
              var e = new Fq(b, c);
              e.sb = d;
              e.M = a;
              jb(new Eq(e));
            } catch (f) {}
          };
          var Ot = function (a) {
            Tf(this, a, null, null);
          };
          Ed(Ot, Pf);
          var Pt = function () {};
          var Qt = [0.05, 0.1, 0.2, 0.5],
            Rt = [0, 0.5, 1],
            St = function (a) {
              a = Vg(a);
              if (!a) return -1;
              try {
                var b = Gm(a.document);
                var c = new _.wg(b.clientWidth, b.clientHeight);
              } catch (d) {
                c = new _.wg(-12245933, -12245933);
              }
              return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height;
            },
            Tt = function (a, b) {
              return 0 > a
                ? []
                : _.Bb(Qt, function (c) {
                    return Math.min((a / b) * c, 1);
                  });
            },
            Wt = function (a) {
              this.j = a.M;
              this.l = a.nb;
              this.D = a.Wa;
              this.o = null;
              this.m = a.ta;
              this.B = Ut(this);
              this.H = a.Hd || !1;
              this.C = a.Ke || !1;
              this.A = null;
              this.C && Vt(this);
            };
          Wt.prototype.getSlotId = function () {
            return this.o;
          };
          var Yt = function (a, b) {
              if (a.B) {
                if (null != a.o) {
                  try {
                    Xt(a, Math.round(performance.now()), 0, 0, 0, !1);
                  } catch (c) {
                    a.m && a.m(c);
                  }
                  a.B && a.B.unobserve(a.l);
                  a.A = null;
                }
                a.o = b;
                a.B.observe(a.l);
                a.C &&
                  (a.l.getBoundingClientRect(), en(a.j.document) || Vg(a.j), (a.A = new Pt()));
              }
            },
            Ut = function (a) {
              var b = a.l.offsetWidth * a.l.offsetHeight,
                c = St(a.j);
              b = [].concat(_.Ub(Rt), _.Ub(Tt(c, b)));
              ja(b);
              return _.H.IntersectionObserver
                ? new _.H.IntersectionObserver(
                    function (d) {
                      return Zt(a, d);
                    },
                    { threshold: b }
                  )
                : new bc(
                    function (d) {
                      return Zt(a, d);
                    },
                    { threshold: b }
                  );
            },
            Zt = function (a, b) {
              try {
                var c = St(a.j);
                _.Gd(b, function (d) {
                  var e = Math.round(d.time),
                    f = d.boundingClientRect.width * d.boundingClientRect.height,
                    g = d.intersectionRect.width * d.intersectionRect.height;
                  d = d.isIntersecting;
                  a.H && Xt(a, e, f, g, c, d);
                });
              } catch (d) {
                a.m && a.m(d);
              }
            },
            Xt = function (a, b, c, d, e, f) {
              if (null == a.o) throw Error('Not Attached.');
              var g = new Ot();
              c = D(g, 1, c);
              d = D(c, 2, d);
              e = D(d, 3, e);
              b = D(e, 4, b);
              b = D(b, 5, f);
              f = new Ef();
              e = C(b, 4);
              null != e && null != e && Kf(f, 4, e);
              e = C(b, 2);
              null != e && null != e && Kf(f, 2, e);
              e = C(b, 1);
              null != e && null != e && Kf(f, 1, e);
              e = C(b, 3);
              null != e && null != e && Kf(f, 3, e);
              e = C(b, 5);
              null != e && ((b = e), null != b && (Xe(f.j, 40), f.j.j.push(b ? 1 : 0)));
              f = Hf(f);
              f = Cf(f, 4);
              sj(a.D, '1', 10, f, void 0, a.o);
            },
            Vt = function (a) {
              var b = dn(a.j.document);
              b && _.y(a.j.document, b, function () {});
            };
          var $t = function (a, b) {
              this.l = a;
              this.j = b;
            },
            au = function (a) {
              var b = sh(a.l);
              b = b && b.contentWindow;
              if (!b) return !1;
              b.addEventListener(
                'message',
                function (c) {
                  var d = c.ports;
                  '__goog_top_url_req' === c.data.msg_type &&
                    d.length &&
                    d[0].postMessage({ msg_type: '__goog_top_url_resp', top_url: a.j });
                },
                !1
              );
              return !0;
            };
          var bu = function (a) {
              return a.some(function (b) {
                return 6 === b.state;
              });
            },
            cu = function (a, b) {
              var c = _.B(a, 'find').call(a, function (d) {
                return 6 === d.state;
              });
              if (!c) return null;
              a = a.map(function (d) {
                return d.issuerOrigin;
              });
              c = {
                type: 'send-srr',
                issuer: c.issuerOrigin,
                issuers: a,
                refreshPolicy: 'none',
                signRequestData: 'include',
                includeTimestampHeader: !0,
                additionalSignedHeaders: ['sec-time', 'Sec-Signed-Redemption-Record'],
              };
              b &&
                0 < _.B(Object, 'keys').call(Object, b).length &&
                (c.additionalSigningData = Df(JSON.stringify(b), 3));
              return c;
            },
            du = function (a) {
              var b = _.dk(250),
                c = _.dk(252);
              if (a.setTrustToken && bu(b))
                try {
                  var d = cu(b, c);
                  d && a.setTrustToken(d);
                } catch (e) {}
            };
          var eu = function (a, b, c) {
              return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new bc(c, b);
            },
            fu = function (a, b, c) {
              _.y(a, b, c);
              return function () {
                return _.sb(a, b, c);
              };
            },
            gu = null,
            hu = function () {
              gu = _.jj();
            },
            iu = function (a, b) {
              return b
                ? null === gu
                  ? (_.y(a, 'mousemove', hu, { passive: !0 }),
                    _.y(a, 'scroll', hu, { passive: !0 }),
                    hu(),
                    !1)
                  : _.jj() - gu >= 1000 * b
                : !1;
            },
            ju = function (a) {
              var b = a.M,
                c = a.element,
                d = a.Nd,
                e = a.Kd,
                f = void 0 === a.Qc ? 0 : a.Qc,
                g = a.Ob,
                h = a.dd,
                k = void 0 === a.Gc ? !0 : a.Gc,
                l = null,
                m = !1,
                n = !1,
                p = [],
                u = (void 0 === a.Hb ? eu : a.Hb)(
                  b,
                  void 0 === a.options ? {} : a.options,
                  function (A, z) {
                    try {
                      var E = function () {
                        p.length ||
                          (e &&
                            (p.push(
                              fu(c, 'mouseenter', function () {
                                m = !0;
                                E();
                              })
                            ),
                            p.push(
                              fu(c, 'mouseleave', function () {
                                m = !1;
                                E();
                              })
                            )),
                          p.push(
                            fu(b.document, 'visibilitychange', function () {
                              return E();
                            })
                          ));
                        var F = iu(b, f),
                          I = en(b.document);
                        if (n && !m && !F && !I)
                          l =
                            l ||
                            b.setTimeout(function () {
                              iu(b, f) ? E() : (g(), z.disconnect());
                            }, 1000 * d);
                        else if (k || m || F || I) b.clearTimeout(l), (l = null);
                      };
                      n = A[A.length - 1].isIntersecting;
                      E();
                    } catch (F) {
                      h && h(F);
                    }
                  }
                );
              u.observe(c);
              return function () {
                u.disconnect();
                for (var A = _.G(p), z = A.next(); !z.done; z = A.next()) (z = z.value), z();
                null != l && b.clearTimeout(l);
              };
            };
          var ku = function () {
              var a = C(bo.F().j, 26);
              this.j = null;
              this.l = 0;
              this.B = a;
            },
            lu = function (a) {
              if (!a.j) {
                var b = _.dk(7);
                cr = hr();
                kr = b;
                jr = 0;
                if (!Ce() || 0 <= se(He(), 11)) b = mr();
                else {
                  b = Si();
                  var c = b.__google_ad_urls;
                  b = c ? c : (b.__google_ad_urls = new $q());
                }
                a.j = b;
                a.l = a.j.setupOse(a.B);
              }
              return a.j;
            };
          ku.prototype.getOseId = function () {
            this.l || (this.l = Zq(0, _.dk(7)));
            return this.l;
          };
          var mu = 0,
            nu = function () {
              this.j = [];
              this.m = NaN;
              this.L = 'json_html';
              this.J = 'fif';
              this.Ba = 1;
              this.C = [];
              this.ya = this.Da = this.Ea = NaN;
              this.B = 0;
              this.V = this.D = this.A = '';
              this.o = [];
              this.l = 0;
              this.I = new x.Map();
              this.H = null;
            },
            ou = function (a, b) {
              var c = b.getSlotId();
              b = a.I.get(c);
              b ||
                ((b = window == window.top ? (++mu).toString(36) : Qe()),
                a.I.set(c, b),
                _.R(c, function () {
                  a.I.delete(c);
                }));
              return b;
            };
          var pu = function (a) {
            var b = this,
              c = La.F(),
              d = bo.F().j,
              e = fo(bo.F(), a.j.getSlotId().getDomId());
            this.set = S(83, function (f, g) {
              a.set(f, g);
              return b;
            });
            this.get = S(84, function (f) {
              return a.get(f);
            });
            this.setClickUrl = S(79, function (f) {
              if ('string' !== typeof f) return c.K(Zk('Slot.setClickUrl', [f]), a.j), b;
              D(e, 7, f);
              return b;
            });
            this.setTargeting = S(81, function (f, g) {
              Sn(a.j, e, f, g, c);
              return b;
            });
            this.updateTargetingFromMap = S(85, function (f) {
              Tn(a.j, e, f, c);
              return b;
            });
            this.display = S(78, function () {
              D(e, 19, !0);
              var f = hp(d, eo());
              a.display(f);
            });
            this.setTagForChildDirectedTreatment = S(80, function (f) {
              if (0 === f || 1 === f) {
                var g = Zn(d) || new Vn();
                D(g, 5, f);
                eg(d, 25, g);
              }
              return b;
            });
            this.setForceSafeFrame = S(567, function (f) {
              if ('boolean' !== typeof f)
                return c.K(Zk('PassbackSlot.setForceSafeFrame', [String(f)]), a.j), b;
              D(e, 12, f);
              return b;
            });
            this.setTagForUnderAgeOfConsent = S(448, function (f) {
              if (0 === f || 1 === f) {
                var g = Zn(d) || new Vn();
                D(g, 6, f);
                eg(d, 25, g);
              }
              return b;
            });
          };
          _.M(pu, Wj);
          var qu = function (a, b) {
              return a
                .map(function (c) {
                  return Xj(c, b);
                })
                .filter(function (c) {
                  return !!c;
                });
            },
            ru = function (a) {
              var b = Qp.F(),
                c = [];
              a = _.G(a);
              for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.B = d;
                var e = Kj(9);
                1 === e.length && (c.push(d), c.push(d + '-' + e[0]));
              }
              return c;
            },
            su = _.Ld(function () {
              return Fh(
                'google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.'
              );
            }),
            tu = function () {
              Object.defineProperty(window, 'google_DisableInitialLoad', {
                get: function () {
                  su();
                  return !0;
                },
                set: function () {
                  su();
                },
                configurable: !0,
              });
            },
            Au = function (a, b) {
              Jp.call(this, a);
              var c = this,
                d = La.F(),
                e = bo.F().j,
                f = eo(),
                g = !1;
              this.setTargeting = S(1, function (h, k) {
                var l = null;
                'string' === typeof k
                  ? (l = [k])
                  : Array.isArray(k)
                  ? (l = k)
                  : wd(k) && (l = _.B(Array, 'from').call(Array, k));
                var m = 'string' === typeof h && !ie(h);
                l = _.t(180) ? l : l && pa(l);
                var n =
                  !!l &&
                  l.every(function (p) {
                    return 'string' === typeof p;
                  });
                if (!m || !n) return d.K(Zk('PubAdsService.setTargeting', [h, k])), c;
                k = ((L = P(e, Bn, 2)), _.B(L, 'find')).call(L, function (p) {
                  return Cn(p) === h;
                });
                if ('gpt-beta' === h) {
                  if (a.j) return d.K($l(l.join())), c;
                  if (k) return d.K(am(l.join())), c;
                  l = ru(l);
                }
                k ? En(k, l) : ((k = En(Dn(new Bn(), h), l)), gg(e, 2, k, Bn));
                d.info(Ql(h, l.join(), a.aa()));
                return c;
              });
              this.clearTargeting = S(2, function (h) {
                if (void 0 === h) return Yn(e, []), d.info(Yl(a.aa())), c;
                if ('gpt-beta' === h) return d.K(bm(h)), c;
                var k = P(e, Bn, 2),
                  l = _.B(k, 'findIndex').call(k, function (m) {
                    return Cn(m) === h;
                  });
                if (0 > l) return d.K(Nl(h, a.aa())), c;
                k.splice(l, 1);
                Yn(e, k);
                d.info(Ml(h, a.aa()));
                return c;
              });
              this.getTargeting = S(38, function (h) {
                if ('string' !== typeof h) return d.K(Zk('PubAdsService.getTargeting', [h])), [];
                var k = ((L = P(e, Bn, 2)), _.B(L, 'find')).call(L, function (l) {
                  return Cn(l) === h;
                });
                return k ? C(k, 2).slice() : [];
              });
              this.getTargetingKeys = S(39, function () {
                return P(e, Bn, 2).map(function (h) {
                  return Cn(h);
                });
              });
              this.setCategoryExclusion = S(3, function (h) {
                if ('string' !== typeof h || ie(h))
                  return d.K(Zk('PubAdsService.setCategoryExclusion', [h])), c;
                ((L = C(e, 3)), _.B(L, 'includes')).call(L, h) || cg(e, 3, h);
                d.info(Ol(h));
                return c;
              });
              this.clearCategoryExclusions = S(4, function () {
                D(e, 3, []);
                d.info(Pl());
                return c;
              });
              this.disableInitialLoad = S(5, function () {
                D(e, 4, !0);
                g || ((g = !0), tu());
              });
              this.enableSingleRequest = S(6, function () {
                if (a.j && !r(e, 6)) return d.K(Bl('PubAdsService.enableSingleRequest')), !1;
                d.info(Cl('single request'));
                D(e, 6, !0);
                return !0;
              });
              this.enableAsyncRendering = S(7, function () {
                return !0;
              });
              this.enableSyncRendering = S(8, function () {
                Fh(
                  'GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.'
                );
                return !1;
              });
              this.enableLazyLoad = S(485, function (h) {
                var k = new Un();
                D(k, 1, 800);
                D(k, 2, 400);
                D(k, 3, 3);
                if (_.ha(h)) {
                  var l = h.fetchMarginPercent;
                  'number' === typeof l && (0 <= l ? D(k, 1, l) : -1 == l && D(k, 1, void 0));
                  l = h.renderMarginPercent;
                  'number' === typeof l && (0 <= l ? D(k, 2, l) : -1 == l && D(k, 2, void 0));
                  h = h.mobileScaling;
                  'number' === typeof h && (0 < h ? D(k, 3, h) : -1 == h && D(k, 3, 1));
                }
                eg(e, 5, k);
              });
              this.setCentering = S(9, function (h) {
                h = !!h;
                d.info(Dl('centering', String(h)));
                D(e, 15, h);
              });
              this.definePassback = S(10, function (h, k) {
                return (h = uu(a, h, k).slot) && Jc(h);
              });
              this.refresh = S(11, function (h, k) {
                k = void 0 === k ? {} : k;
                (h && !Array.isArray(h)) ||
                !_.ha(k) ||
                (k.changeCorrelator && 'boolean' !== typeof k.changeCorrelator)
                  ? d.K(
                      Zk(
                        'PubAdsService.refresh',
                        [h, k].filter(function (l) {
                          return void 0 !== l;
                        })
                      )
                    )
                  : ((k && 0 == k.changeCorrelator) || D(e, 26, Nh()),
                    (h = h ? qu(h, b) : a.l),
                    vu(a, hp(e, f), h));
              });
              this.enableVideoAds = S(12, function () {
                D(e, 21, !0);
                wu(a, e);
              });
              this.setVideoContent = S(13, function (h, k) {
                D(e, 21, !0);
                D(e, 22, String(h || ''));
                D(e, 23, String(k || ''));
                wu(a, e);
              });
              this.collapseEmptyDivs = S(14, function (h) {
                h = void 0 === h ? !1 : h;
                r(e, 11)
                  ? d.K(Kl())
                  : a.j
                  ? d.K(Bl('collapseEmptyDivs', String(h)))
                  : (h && D(e, 10, !0),
                    mc('gpt_ced', function (k) {
                      K(k, 'sc', h ? 't' : 'f');
                      K(k, 'level', 'page');
                      yc(k);
                    }),
                    d.info(Jl(String(!!h))),
                    D(e, 11, !0));
                return !!r(e, 11);
              });
              this.clear = S(15, function (h) {
                return Array.isArray(h) ? ((h = qu(h, b)), a.clear(e, f, h)) : a.clear(e, f, h);
              });
              this.setLocation = S(16, function (h) {
                if ('string' !== typeof h) return d.K(Zk('PubAdsService.setLocation', [h])), c;
                D(e, 8, h);
                return c;
              });
              this.setCookieOptions = S(17, function (h) {
                if (0 !== h && 1 !== h)
                  return d.K(lm('PubadsService.setTagForUnderAgeOfConsent', String(h), '0,1')), c;
                D(e, 24, h);
                return c;
              });
              this.setTagForChildDirectedTreatment = S(18, function (h) {
                if (1 !== h && 0 !== h)
                  return (
                    d.K(lm('PubadsService.setTagForChildDirectedTreatment', String(h), '0,1')), c
                  );
                var k = Zn(e) || new Vn();
                D(k, 5, h);
                eg(e, 25, k);
                return c;
              });
              this.clearTagForChildDirectedTreatment = S(19, function () {
                var h = Zn(e);
                if (!h) return c;
                D(h, 5, void 0);
                eg(e, 25, h);
                return c;
              });
              this.setPublisherProvidedId = S(20, function (h) {
                h = String(h);
                a.j
                  ? d.K(Bl('PubAdsService.setPublisherProvidedId', h))
                  : (d.info(Dl('PPID', h)), D(e, 16, h));
                return c;
              });
              this.set = S(21, function (h, k) {
                if (
                  'string' !== typeof h ||
                  !h.length ||
                  void 0 === zn()[h] ||
                  'string' !== typeof k
                )
                  return d.K(Zk('PubAdsService.set', [h, k])), c;
                var l = ((L = P(e, Bn, 14)), _.B(L, 'find')).call(L, function (m) {
                  return Cn(m) === h;
                });
                l ? En(l, [k]) : ((l = Dn(new Bn(), h)), cg(l, 2, k), gg(e, 14, l, Bn));
                d.info(rl(h, String(k), a.aa()));
                return c;
              });
              this.get = S(22, function (h) {
                if ('string' !== typeof h) return d.K(Zk('PubAdsService.get', [h])), null;
                var k = ((L = P(e, Bn, 14)), _.B(L, 'find')).call(L, function (l) {
                  return Cn(l) === h;
                });
                return (k = k && C(k, 2)) ? k[0] : null;
              });
              this.getAttributeKeys = S(23, function () {
                return P(e, Bn, 14).map(function (h) {
                  return Cn(h);
                });
              });
              this.display = S(24, function (h, k, l, m) {
                return void a.display(h, k, void 0 === l ? '' : l, void 0 === m ? '' : m);
              });
              this.updateCorrelator = S(25, function () {
                Fh(Sj('update'));
                d.K(fm());
                D(e, 26, Nh());
                return c;
              });
              this.defineOutOfPagePassback = S(35, function (h) {
                var k = uu(a, h, [1, 1]);
                h = k.slot;
                (k = k.Ja) && D(k, 15, 1);
                return h && Jc(h);
              });
              this.setForceSafeFrame = S(36, function (h) {
                if ('boolean' !== typeof h)
                  return d.K(Zk('PubAdsService.setForceSafeFrame', [String(h)])), c;
                D(e, 13, h);
                return c;
              });
              this.setSafeFrameConfig = S(37, function (h) {
                var k = mo(h);
                if (!k) return d.K(Zk('PubAdsService.setSafeFrameConfig', [h])), c;
                eg(e, 18, k);
                return c;
              });
              this.setRequestNonPersonalizedAds = S(445, function (h) {
                if (0 !== h && 1 !== h)
                  a.log.K(lm('PubadsService.setRequestNonPersonalizedAds', String(h), '0,1'));
                else {
                  var k = bo.F().j;
                  if (!Zn(k)) {
                    var l = new Vn();
                    eg(k, 25, l);
                  }
                  k = Zn(k);
                  D(k, 8, !!h);
                }
                return c;
              });
              this.setTagForUnderAgeOfConsent = S(447, function (h) {
                h = void 0 === h ? 2 : h;
                if (2 !== h && 0 !== h && 1 !== h)
                  return (
                    d.K(lm('PubadsService.setTagForUnderAgeOfConsent', String(h), '2,0,1')), c
                  );
                var k = Zn(e) || new Vn();
                D(k, 6, h);
                eg(e, 25, k);
                return c;
              });
              this.getCorrelator = S(27, function () {
                return String(C(e, 26));
              });
              this.getTagSessionCorrelator = S(631, function () {
                return xu().U;
              });
              this.getVideoContent = S(30, function () {
                return yu(a, e);
              });
              this.getVersion = S(568, function () {
                return a.getVersion();
              });
              this.forceExperiment = S(569, function (h) {
                h = parseInt(h, 10);
                0 < h && Jj(h);
              });
              this.setCorrelator = S(28, function (h) {
                Fh(Sj('set'));
                d.K(em());
                if (Km(window)) return c;
                if (!Oh(h)) return d.K(Zk('PubadsService.setCorrelator', [String(h)])), c;
                D(e, 26, h);
                D(e, 27, !0);
                return c;
              });
              this.markAsAmp = S(570, function () {
                _.t(463) && window.console && window.console.warn
                  ? window.console.warn(
                      'googletag.pubads().markAsAmp() is deprecated and ignored.'
                    )
                  : zu(a);
              });
              this.isSRA = S(571, function () {
                return !!r(e, 6);
              });
              this.setImaContent = S(328, function (h, k) {
                Uf(e, 22)
                  ? (D(e, 21, !0), D(e, 22, String(h || '')), D(e, 23, String(k || '')), wu(a, e))
                  : (D(e, 21, !0),
                    wu(a, e),
                    'string' === typeof h && D(e, 19, h),
                    'string' === typeof k && D(e, 20, k));
              });
              this.getImaContent = S(329, function () {
                return Uf(e, 22)
                  ? yu(a, e)
                  : a.j
                  ? { vid: C(e, 19) || '', cmsid: C(e, 20) || '' }
                  : null;
              });
              this.isInitialLoadDisabled = S(572, function () {
                return !!r(e, 4);
              });
              this.addSupportingUrl = S(634, function (h) {
                if ('string' !== typeof h || !_.Og(h)[1])
                  return d.K(Zk('PubAdsService.addSupportingUrl', [h])), c;
                ((L = C(e, 7)), _.B(L, 'includes')).call(L, h) || cg(e, 7, h);
                return c;
              });
              this.setPrivacySettings = S(648, function (h) {
                if (!_.ha(h)) return d.K(Zk('PubAdsService.setPrivacySettings', [h])), c;
                var k = Zn(e) || new Vn(),
                  l = h.restrictDataProcessing,
                  m = h.childDirectedTreatment,
                  n = h.underAgeOfConsent,
                  p = h.limitedAds;
                'boolean' === typeof l
                  ? D(k, 1, l)
                  : void 0 !== l &&
                    d.K(
                      km(
                        'PubAdsService.setPrivacySettings',
                        String(h),
                        'restrictDataProcessing',
                        String(l)
                      )
                    );
                _.t(397) ||
                  ('boolean' === typeof p
                    ? D(k, 9, p)
                    : void 0 !== p &&
                      d.K(
                        km('PubAdsService.setPrivacySettings', String(h), 'limitedAds', String(p))
                      ));
                void 0 !== n &&
                  (null === n
                    ? D(k, 6, 2)
                    : !1 === n
                    ? D(k, 6, 0)
                    : !0 === n
                    ? D(k, 6, 1)
                    : d.K(
                        km(
                          'PubAdsService.setPrivacySettings',
                          String(h),
                          'underAgeOfConsent',
                          String(n)
                        )
                      ));
                void 0 !== m &&
                  (null === m
                    ? D(k, 5, void 0)
                    : !1 === m
                    ? D(k, 5, 0)
                    : !0 === m
                    ? D(k, 5, 1)
                    : d.K(
                        km(
                          'PubAdsService.setPrivacySettings',
                          String(h),
                          'childDirectedTreatment',
                          String(m)
                        )
                      ));
                eg(e, 25, k);
                return c;
              });
            };
          _.M(Au, Jp);
          var Bu = function (a, b, c) {
              for (var d = 100; a && a != b && --d; ) _.zh(a, c), (a = a.parentElement);
            },
            Cu = function (a, b, c, d, e) {
              _.zh(a, { 'margin-left': '0px', 'margin-right': '0px' });
              var f = { 'z-index': String(_.w(32, 5)) };
              'absolute' !== d.position &&
                'fixed' !== d.position &&
                'relative' !== d.position &&
                (f.position = 'relative');
              var g = 'rtl' == d.direction,
                h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
              d = function () {
                var k = a.getBoundingClientRect().left;
                return g ? h - k : k - h;
              };
              b = d();
              0 !== b &&
                ((c = function (k) {
                  g ? (f['margin-right'] = k + 'px') : (f['margin-left'] = k + 'px');
                }),
                c(-b),
                _.zh(a, f),
                (d = d()),
                0 !== d && b !== d && (c((b / (d - b)) * b), _.zh(a, f)));
              return !0;
            },
            Eu = function (a, b, c, d, e, f, g) {
              var h = b.slot,
                k = nc(b.da);
              _.H.setTimeout(
                J(459, function () {
                  return Du(a, h, c, d, e, k, f, g);
                }),
                500
              );
            },
            Du = function (a, b, c, d, e, f, g, h) {
              if (_.H.IntersectionObserver) {
                var k = null,
                  l = pp(b, a) || v(b, a),
                  m = J(459, function (n) {
                    if ((n = n && n[0])) {
                      var p = n.boundingClientRect,
                        u = window.innerWidth,
                        A = Math.round(p.left),
                        z = Math.round(p.right),
                        E = 0 > A + 2,
                        F = 0 < z - (u + 2);
                      if (
                        n.intersectionRatio >=
                          1 -
                            ((0 <= Math.round(p.left) ? 0 : 2) +
                              (Math.round(p.right) <= window.innerWidth ? 0 : 2)) /
                              d ||
                        E ||
                        F
                      )
                        mc(
                          g,
                          function (I) {
                            if (E || F) {
                              var O = new xr();
                              O.set(8);
                              Fu(l) && O.set(10);
                              O = yr(O);
                            } else O = Gu(a, b);
                            var Aa = Hu(b, l, e),
                              bb = Aa.od;
                            Aa = Aa.qd;
                            yc(I);
                            K(I, 'qid', h);
                            K(I, 'iu', b.getSlotId().getAdUnitPath());
                            K(I, 'e', String(O));
                            E && K(I, 'ofl', String(A));
                            F && K(I, 'ofr', String(z - u));
                            K(I, 'ret', d + 'x' + e);
                            K(I, 'req', f);
                            K(I, 'bm', String(c));
                            K(I, 'efh', Number(bb));
                            K(I, 'stk', Number(Aa));
                            K(I, 'ifi', Vi(window));
                            _.t(60) && K(I, 'isc', 1);
                          },
                          { Aa: _.w(7) }
                        ),
                          k && k.unobserve(l);
                    }
                  });
                l && ((k = new _.H.IntersectionObserver(m, { threshold: [1] })), k.observe(l));
              }
            },
            Gu = function (a, b) {
              var c = pp(b, a) || v(b, a),
                d = new xr();
              try {
                var e = function (O, Aa) {
                    return a.elementsFromPoint(O, Aa);
                  },
                  f = c.getBoundingClientRect(),
                  g = f.left,
                  h = f.top,
                  k = f.width,
                  l = f.height,
                  m = v(b, a),
                  n = Ta(m, window);
                if ('hidden' == n.visibility || 'none' == n.display) return yr(d);
                var p = parseInt(n['border-top-width'] || 0, 10) + 1;
                b = g + k;
                l = h + l;
                var u = e(g + p + 2, h + p);
                var A = e(b - p - 2, h + p);
                var z = e(b - p - 2, l - p);
                var E = e(g + p + 2, l - p);
                var F = e(b / 2, l - p);
              } catch (O) {
                return d.set(1), yr(d);
              }
              if (
                !(
                  u &&
                  u.length &&
                  A &&
                  A.length &&
                  z &&
                  z.length &&
                  E &&
                  E.length &&
                  F &&
                  F.length
                )
              )
                return d.set(7), yr(d);
              e = function (O, Aa) {
                for (var bb = !1, ed = 0; ed < O.length; ed++) {
                  var ge = O[ed];
                  if (bb) {
                    var Hh = Ta(ge, window);
                    if ('hidden' != Hh.visibility && !Ch(ge) && !I(c, ge)) {
                      d.set(Aa);
                      'absolute' == Hh.position && d.set(11);
                      break;
                    }
                  } else c == ge && (bb = !0);
                }
              };
              Dh(c) && d.set(9);
              var I = function (O, Aa) {
                return uh(O, Aa) || uh(Aa, O);
              };
              g = u[0];
              c == g || I(c, g) || Ch(g) || d.set(2);
              g = A[0];
              c == g || I(c, g) || Ch(g) || d.set(3);
              g = z[0];
              c == g || I(c, g) || Ch(g) || d.set(4);
              g = E[0];
              c == g || I(c, g) || Ch(g) || d.set(5);
              if (Ch(c)) return yr(d);
              e(u, 12);
              e(A, 13);
              e(z, 14);
              e(E, 15);
              e(F, 6);
              return yr(d);
            },
            Fu = function (a) {
              var b = !1,
                c = !1,
                d = !1;
              return Bh(a, function (e) {
                'nowrap' == e.whiteSpace && (d = !0);
                if ('scroll' == e.overflowX || 'auto' == e.overflowX) c = !0;
                'flex' == e.display && (b = !0);
                return b && c && d;
              });
            },
            Iu = function (a, b) {
              return a && (a = dg(a, Fn, 1)) ? C(a, 1) || b.innerWidth : 0;
            },
            Ju = function (a, b) {
              return a && (a = dg(a, Fn, 1)) ? C(a, 2) || b.innerHeight : 0;
            },
            Ku = function (a) {
              return a && (a = dg(a, Fn, 2)) ? C(a, 1) || 0 : 0;
            },
            Lu = function (a) {
              return a && (a = dg(a, Fn, 2)) ? C(a, 2) || 0 : 0;
            },
            Hu = function (a, b, c) {
              var d = (a = v(a)) && Ta(a, window),
                e = d ? 'absolute' != d.position : !0,
                f = !1,
                g = a && a.parentElement,
                h = !1;
              Ah(
                b,
                function (k) {
                  var l = k.style;
                  if (e)
                    if (h || (h = k == g)) e = tr(k, _.H, !0, -1, -1);
                    else {
                      l = l && l.height;
                      var m =
                        ((l && _.B(l, 'endsWith').call(l, 'px') && parseInt(l, 10)) || 0) >= c;
                      !l ||
                        m ||
                        ('string' === typeof l && _.B(qr, 'includes').call(qr, l)) ||
                        (e = !1);
                    }
                  f ||
                    ((k = Ta(k, _.H)), 'sticky' != k.position && 'fixed' != k.position) ||
                    (f = !0);
                  return !(f && !e);
                },
                100
              );
              return { od: e, qd: f };
            },
            Mu = function (a, b) {
              var c = a.slot;
              ((L = Ua(a.da)), _.B(L, 'includes')).call(L, 'fluid') &&
                setTimeout(function () {
                  mc('gpt_fluid_sz', function (d) {
                    var e = pp(c, document);
                    e = e ? Ri(e) : null;
                    K(d, 'sz', e ? e.width + 'x' + e.height : 'null');
                    K(d, 'qqid', b);
                  });
                }, 250);
            };
          var Nu = 0;
          var Sb = new x.WeakMap(),
            Qb = function (a, b) {
              a = [a];
              for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
              return a.join('\x0B');
            };
          var Ou = Vb(
            function (a) {
              return a && a.src
                ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
                    a.src
                  )
                  ? 0
                  : 1
                : 2;
            },
            function (a, b) {
              return a + '\x0B' + (b && b[0] && b[0].src);
            }
          );
          var Pu = null,
            Qu = function (a, b, c, d) {
              try {
                var e;
                if (!(e = !b)) {
                  var f;
                  if (!(f = !ur(b, c, void 0 === d ? 100 : d))) {
                    a: {
                      do {
                        var g = Ta(b, c);
                        if (g && 'fixed' == g.position) {
                          var h = !1;
                          break a;
                        }
                      } while ((b = b.parentElement));
                      h = !0;
                    }
                    f = !h;
                  }
                  e = f;
                }
                e && (a.height = -1);
              } catch (k) {
                (a.width = -1), (a.height = -1);
              }
            },
            Xb = function (a) {
              for (var b = {}, c = _.G(P(a, Bn, 9)), d = c.next(); !d.done; d = c.next())
                (d = d.value), (b[Cn(d)] = C(d, 2));
              a = C(a, 8);
              a.length && null == b.excl_cat && (b.excl_cat = a);
              return b;
            },
            Ru = function (a) {
              var b = !1,
                c = P(a, Bn, 2).map(function (d) {
                  var e = Cn(d);
                  b = 'excl_cat' === e;
                  d = C(d, 2);
                  return encodeURIComponent(e) + '=' + encodeURIComponent(d.join());
                });
              a = C(a, 3);
              !b &&
                a.length &&
                c.push(encodeURIComponent('excl_cat') + '=' + encodeURIComponent(a.join()));
              return c;
            },
            Su = function (a) {
              var b = '';
              Tg(
                function (c) {
                  if (c === c.top) return !0;
                  c.document && c.document.referrer && (b = c.document.referrer);
                  return !1;
                },
                !1,
                !1,
                a
              );
              return b;
            },
            Tu = function (a) {
              if (a.location && a.location.ancestorOrigins)
                return a.location.ancestorOrigins.length;
              var b = 0;
              Tg(
                function () {
                  b++;
                  return !1;
                },
                !0,
                !0,
                a
              );
              return b;
            },
            Uu = function (a, b, c, d, e, f, g, h) {
              g = void 0 === g ? !1 : g;
              this.j = b;
              this.C = c;
              this.m = a;
              this.model = d;
              this.B = e;
              this.l = f;
              this.D = [];
              this.o = '';
              this.L = zn();
              this.A = [];
              this.H = [];
              this.I = Td(_.Pj(489));
              this.V = !g || !_.t(294);
              this.J = h;
            },
            Xu = function (a) {
              var b = void 0 === b ? window : b;
              if (_.t(475)) {
                var c = a.J;
                if (!c || !c.length) return '';
              } else {
                c = a.model.j;
                if (a.m)
                  0 == c.length &&
                    (c = nq(oq.F()).filter(function (e) {
                      return Ap(a.j, e.getSlotId());
                    }));
                else {
                  if (0 == c.length) return '';
                  1 < c.length && (c = [c[0]]);
                }
                var d = !!on(_.H);
                c = c.filter(function (e) {
                  var f = a.l.P[e.getSlotId().getDomId()];
                  return d && 4 == Rn(f)
                    ? (La.F().K(dm(String(e.getSlotId().getAdUnitPath()))), !1)
                    : !0;
                });
                if (!c.length) return '';
                30 < c.length &&
                  (La.F().K(Zl('30', String(c.length), String(c.length - 30))),
                  (c = c.slice(0, 30)));
              }
              Vu(a, c, b);
              Wu(a);
              return a.o;
            },
            Yu = function (a, b) {
              try {
                var c = b.top;
                var d = Hm(c.document, c);
              } catch (e) {
                d = new _.Va(-12245933, -12245933);
              }
              Y(a, 'scr_x', Math.round(d.x), { ma: !0 });
              Y(a, 'scr_y', Math.round(d.y), { ma: !0 });
            },
            Zu = function (a) {
              const $___old_7db9439865717d63 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'platform'
                ),
                $___old_827fda496be97ddd = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
              try {
                if ($___old_7db9439865717d63)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___stub_47c01efa79e9f191.platform
                  ));
                if ($___old_827fda496be97ddd)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_47c01efa79e9f191.userAgent
                  ));
                return function () {
                  var b = window,
                    c = Ha(a.B, b.document) || '';
                  var d = b.document.domain;
                  var e = b.history.length,
                    f = b.screen,
                    g = b.document.referrer;
                  if (mi()) d = Si().gaGlobal || {};
                  else {
                    var h = Math.round(new Date().getTime() / 1000),
                      k = b.google_analytics_domain_name;
                    d = 'undefined' == typeof k ? Qq('auto', d) : Qq(k, d);
                    var l = -1 < c.indexOf('__utma=' + d + '.'),
                      m = -1 < c.indexOf('__utmb=' + d),
                      n;
                    (n = (ri() || Si()).gaGlobal) || ((n = {}), ((ri() || Si()).gaGlobal = n));
                    var p = !1;
                    if (l)
                      (g = c
                        .split('__utma=' + d + '.')[1]
                        .split(';')[0]
                        .split('.')),
                        m ? (n.sid = g[3]) : n.sid || (n.sid = h + ''),
                        (n.vid = g[0] + '.' + g[1]),
                        (n.from_cookie = !0);
                    else {
                      n.sid || (n.sid = h + '');
                      if (!n.vid) {
                        p = !0;
                        m = Math.round(2147483647 * Math.random());
                        l = [
                          Nq.appName,
                          Nq.version,
                          Nq.language ? Nq.language : Nq.browserLanguage,
                          Nq.platform,
                          Nq.userAgent,
                          Oq() ? 1 : 0,
                        ].join('');
                        f
                          ? (l += f.width + 'x' + f.height + f.colorDepth)
                          : _.H.java &&
                            _.H.java.awt &&
                            ((f = _.H.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
                            (l += f.screen.width + 'x' + f.screen.height));
                        l = l + c + (g || '');
                        for (g = l.length; 0 < e; ) l += e-- ^ g++;
                        n.vid = (m ^ (Pq(l) & 2147483647)) + '.' + h;
                      }
                      n.from_cookie = !1;
                    }
                    if (!n.cid) {
                      b: for (
                        h = 999,
                          k &&
                            ((k = 0 == k.indexOf('.') ? k.substr(1) : k),
                            (h = k.split('.').length)),
                          k = 999,
                          c = c.split(';'),
                          g = 0;
                        g < c.length;
                        g++
                      )
                        if ((f = Rq.exec(c[g]) || Sq.exec(c[g]) || Tq.exec(c[g]))) {
                          e = f[1] || 0;
                          if (e == h) {
                            var u = f[2];
                            break b;
                          }
                          e < k && ((k = e), (u = f[2]));
                        }
                      p && u && -1 != u.search(/^\d+\.\d+$/)
                        ? ((n.vid = u), (n.from_cookie = !0))
                        : u != n.vid && (n.cid = u);
                    }
                    n.dh = d;
                    n.hid || (n.hid = Math.round(2147483647 * Math.random()));
                    d = n;
                  }
                  Y(a, 'ga_vid', d.vid, { ca: !1 });
                  Y(a, 'ga_sid', d.sid, { ca: !1 });
                  Y(a, 'ga_hid', d.hid, { ca: !1 });
                  Y(a, 'ga_fc', d.from_cookie, { ca: !1 });
                  Y(a, 'ga_cid', d.cid, { ca: !1 });
                  Y(a, 'ga_wpids', b.google_analytics_uacct);
                }.apply(this, arguments);
              } finally {
                if ($___old_7db9439865717d63)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___old_7db9439865717d63
                  ));
                if ($___old_827fda496be97ddd)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_827fda496be97ddd
                  ));
              }
            },
            $u = function (a, b) {
              if (_.t(370))
                try {
                  var c =
                    b.external &&
                    b.external.getHostEnvironmentValue &&
                    b.external.getHostEnvironmentValue.bind(b.external);
                  if (c) {
                    var d = parseInt(JSON.parse(c('os-mode'))['os-mode'], 10);
                    0 <= d && Y(a, 'wsm', d + 1);
                  }
                } catch (e) {}
            },
            Vu = function (a, b, c) {
              c = void 0 === c ? window : c;
              var d = c.document,
                e = a.l.O;
              Y(a, 'gdfp_req', 1, { ca: !1 });
              Y(a, 'pvsid', a.model.m);
              Y(a, 'correlator', C(e, 26));
              Y(a, 'output', a.model.L, { ca: !1 });
              Y(a, 'impl', a.model.J, { ca: !1 });
              _.t(200) ||
                (0 == Yf(e, 24, 0) && (Y(a, 'adsid', a.model.A), Y(a, 'pucrd', a.model.V)),
                Y(a, 'jar', a.model.D));
              av(a);
              isNaN(a.model.Da) || Y(a, 'pod', a.model.Da, { ca: !1 });
              isNaN(a.model.Ea) || Y(a, 'ppos', a.model.Ea, { ca: !1 });
              isNaN(a.model.ya) || Y(a, 'scor', a.model.ya, { ca: !1 });
              bv(a);
              cv(a);
              _.t(457) && Y(a, 'ptt', 17);
              dv(a);
              ev(a);
              fv(a, Zj(b[0].getSlotId().getAdUnitPath()));
              Y(a, 'sc', _.dk(6) ? 1 : 0, { ma: !0 });
              window.postMessage && Y(a, 'sfv', ko());
              Y(a, 'ecs', a.l.xb);
              gv(a, b, d);
              hv(a);
              iv(a, b);
              jv(a, b);
              kv(a, c);
              qk('google_preview') && Y(a, 'gct', pk('google_preview'));
              if (a.j.B) {
                Y(a, 'is_amp', '1');
                Y(a, 'amp_v', ni());
                Y(a, 'act', oi());
                ui &&
                  !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(c.location.href) &&
                  Y(a, 'ati', 1);
                var f = vi(c);
                f && Y(a, 'apn', f.substr(0, 10));
                try {
                  var g = JSON.parse(c.context.cachedFrameName_);
                  g.attributes &&
                    g.attributes.useSameDomainRenderingUntilDeprecated &&
                    Y(a, 'asd', 1);
                } catch (k) {}
              }
              (Rg(c.top) || ph(window.IntersectionObserver)) && Y(a, 'abxe', 1);
              _.dk(253) && (f = Oj(10)) && Y(a, 'expflags', f);
              lv(a, b, c);
              f = {};
              f.u_tz = -new Date().getTimezoneOffset();
              f.u_his = Ui();
              f.u_java =
                !!lg.navigator &&
                'unknown' !== typeof lg.navigator.javaEnabled &&
                !!lg.navigator.javaEnabled &&
                lg.navigator.javaEnabled();
              lg.screen &&
                ((f.u_h = lg.screen.height),
                (f.u_w = lg.screen.width),
                (f.u_ah = lg.screen.availHeight),
                (f.u_aw = lg.screen.availWidth),
                (f.u_cd = lg.screen.colorDepth));
              lg.navigator && lg.navigator.plugins && (f.u_nplug = lg.navigator.plugins.length);
              lg.navigator &&
                lg.navigator.mimeTypes &&
                (f.u_nmime = lg.navigator.mimeTypes.length);
              mv(a, f);
              nv(a);
              try {
                var h = Yi();
              } catch (k) {
                h = '0';
              }
              Y(a, 'flash', h, { ca: !1, ma: !0 });
              ov(a, b, c);
              pv(a, c);
              (_.t(84) || jk.F().j) && Y(a, 'rumc', a.model.m, { ca: !1 });
              _.t(83) && Y(a, 'rume', 1, { ca: !1 });
              Y(a, 'vis', _.bn(d), { ca: !1 });
              0 === Ou(_.dk(172)) || Y(a, 'stss', Ou(_.dk(172)));
              !a.j.B && qv(c) && Y(a, 'arp', 1, { ca: !1 });
              _.H.navigator &&
                _.H.navigator.deviceMemory &&
                Y(a, 'dmc', _.H.navigator.deviceMemory);
              Yu(a, c);
              rv(a, b, c);
              sv(a, b, c);
              0 < a.model.o.length && Y(a, 'psts', a.model.o);
              Zu(a);
              $u(a, c);
              _.t(23) && (Y(a, 'js', vr(c)), Y(a, 'ms', wr(a.model.m.toString(), c)));
              tv(a, c, b);
              uv(a, b, c);
              b = C(e, 7);
              (c = _.dk(251)) && Y(a, 'uach', Df(c, 3));
              (_.t(312) || Oj(1923)) &&
                (c = _.dk(250)) &&
                0 < c.length &&
                Y(a, 'tt_state', Df(JSON.stringify(c), 3));
              _.t(164) &&
                b.length &&
                Y(
                  a,
                  'supporting_urls',
                  b.map(function (k) {
                    return encodeURIComponent(k);
                  })
                );
              vv(a);
            },
            rv = function (a, b, c) {
              var d = [],
                e = [];
              b = _.G(b);
              for (var f = b.next(); !f.done; f = b.next()) {
                f = f.value;
                var g = v(f);
                g = Eh((g && g.parentElement && Ta(g.parentElement, c)) || null);
                if (!g || (1 == g[0] && 1 == g[3])) {
                  var h = (g = v(f)) && g.parentElement,
                    k = ep(h) || new _.wg(0, 0);
                  Qu(k, h, c);
                  d.push(k.width + 'x' + k.height);
                  f = ep(v(f)) || new _.wg(0, 0);
                  Qu(f, g, c, 1);
                  -1 == k.height && (f.height = -1);
                  e.push(f.width + 'x' + f.height);
                } else d.push('-1x-1'), e.push('-1x-1');
              }
              Y(a, 'psz', d, { wa: '|' });
              Y(a, 'msz', e, { wa: '|' });
            },
            sv = function (a, b, c) {
              var d = a.l.P;
              b = b.map(function (e) {
                return d[e.getSlotId().getDomId()];
              });
              b.some(function (e) {
                return Uf(e, 16);
              }) &&
                (Y(
                  a,
                  'rtgs',
                  b.map(function (e) {
                    return Uf(e, 16) ? (0 != Ua(e).length ? '1' : '2') : '0';
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'max_w',
                  b.map(function (e) {
                    return Iu(dg(e, Jn, 16), c);
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'max_h',
                  b.map(function (e) {
                    return Ju(dg(e, Jn, 16), c);
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'min_w',
                  b.map(function (e) {
                    return Ku(dg(e, Jn, 16));
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'min_h',
                  b.map(function (e) {
                    return Lu(dg(e, Jn, 16));
                  }),
                  { wa: '!' }
                ));
            },
            wv = function (a, b, c) {
              var d = [];
              if (null !== a && a != a.top) {
                var e = Im(!1, a).width;
                (-12245933 === b || -12245933 === e || e < b) && d.push(8);
              }
              -12245933 != b &&
                ((e = 1 + _.w(45)),
                b * e < a.document.documentElement.scrollWidth
                  ? d.push(10)
                  : c && _.t(413) && ((c = 1 + _.w(414)), a.outerWidth * c < b && d.push(10)));
              return d;
            },
            tv = function (a, b, c) {
              var d = 0 !== th(),
                e = Im(!0, b, d).width,
                f = [],
                g = [],
                h = wv(b, e, d);
              c.forEach(function (k) {
                var l = new xr(),
                  m = v(k);
                k = 0;
                if (m)
                  for (var n = 0; m && 100 > n; n++, m = m.parentElement) {
                    var p = Ta(m, b);
                    if (p) {
                      if (p.overflowY && 'visible' !== p.overflowY) {
                        l.set(2);
                        var u = ep(m);
                        u && (k = k ? Math.min(k, u.width) : u.width);
                        if (l.get(9)) break;
                      }
                      ('sticky' !== p.position && 'fixed' !== p.position) || l.set(9);
                      'none' === p.display && l.set(7);
                      'IFRAME' === m.nodeName &&
                        ((p = parseInt(p.width, 10)),
                        p < e && (l.set(8), (k = k ? Math.min(p, k) : p)));
                    } else l.set(3);
                  }
                else l.set(1);
                h.forEach(function (A) {
                  return l.set(A);
                });
                f.push(yr(l));
                g.push(k);
              });
              Y(a, 'fws', f);
              Y(a, 'ohw', g);
            },
            yv = function (a, b, c) {
              var d = [],
                e = [],
                f = a.l,
                g = f.P,
                h = !!r(f.O, 15);
              if (a.m)
                b.forEach(function (k) {
                  k = kp({ slot: k, da: g[k.getSlotId().getDomId()] }, c, h) || xv;
                  d.push(Math.round(k.x));
                  e.push(Math.round(k.y));
                });
              else if (
                (b =
                  (a.j.B ? qi() : null) ||
                  kp({ slot: b[0], da: g[b[0].getSlotId().getDomId()] }, c, h))
              )
                d.push(Math.round(b.x)), e.push(Math.round(b.y));
              Y(a, 'adxs', d);
              Y(a, 'adys', e);
            },
            uv = function (a, b, c) {
              if (!a.m) {
                var d = null,
                  e = null;
                try {
                  d = Hm(c.top.document, c.top).y;
                } catch (h) {
                  return;
                }
                var f = a.l,
                  g = f.P;
                f = !!r(f.O, 15);
                (b = kp({ slot: b[0], da: g[b[0].getSlotId().getDomId()] }, c.document, f)) &&
                  (e = Math.round(b.y));
                c = Im(!0, c).height;
                e &&
                  -12245933 !== e &&
                  -12245933 !== c &&
                  (e < d + c
                    ? Y(a, 'btvi', 0, { ma: !0 })
                    : ((d = _.dk(248) + 1), ek(248, d), Y(a, 'btvi', d)));
              }
            },
            zv = function (a, b) {
              var c = a.l,
                d = c.O,
                e = c.P;
              return b
                .map(
                  a.m
                    ? function (f) {
                        var g = e[f.getSlotId().getDomId()];
                        g = _.t(364)
                          ? Ep(a.j, f.getSlotId()) || zo(g, r(d, 6) || r(g, 17) ? null : v(f))
                          : zo(g);
                        f = f.getSlotId();
                        if ((f = a.j.j.get(f))) f.lb = g;
                        return g;
                      }
                    : function (f) {
                        var g = a.l.P[f.getSlotId().getDomId()];
                        g = Ep(a.j, f.getSlotId()) || zo(g, r(a.l.O, 6) || r(g, 17) ? null : v(f));
                        f = f.getSlotId();
                        if ((f = a.j.j.get(f))) f.lb = g;
                        return g;
                      }
                )
                .join(',');
            },
            ov = function (a, b, c) {
              c = void 0 === c ? window : c;
              var d = c.document;
              b = (_.t(364) ? r(a.l.O, 6) : a.m)
                ? Mo(a.j.l)
                : ap(b[0], a.l.P[b[0].getSlotId().getDomId()], Bp(a.j)) || Mo(a.j.l);
              var e = qk('google_preview'),
                f = e ? ok(d.URL) : d.URL;
              e = e ? ok(d.referrer) : d.referrer;
              d = !1;
              if (null != b) {
                var g = f;
                Km(c) || ((e = ''), (d = !0));
              } else b = f;
              a.j.B && (e = (e = mi()) && e.referrer);
              var h = !1;
              f = null;
              if (_.t(455)) (h = Tu(c)), Y(a, 'nhd', h || null), (h = !!h);
              else {
                f = new dj(c);
                var k = f.j[0].depth;
                if (k && ((h = !0), Y(a, 'nhd', k), c.location && c.location.ancestorOrigins)) {
                  k = f;
                  for (var l = [], m = Math.min(k.j.length, 27), n = 1; n < m; n++)
                    k.j[n] && k.j[n].url && (l[n - 1] = k.j[n].url);
                  k = ej(k, l.reverse());
                  Y(a, 'iag', k);
                  k = f.j;
                  l = [];
                  for (m = k.length - 1; 0 < m; m--)
                    (n = k[m]) && null != n.url && l.push(Pg(_.Og(n.url)[3] || null));
                  k = bj(l);
                  0 < k && Y(a, 'mdo', k);
                }
              }
              Y(a, 'url', b);
              k = b;
              l = _.dk(252) || {};
              l.url = k;
              ek(252, l);
              null != g && g != b && Y(a, 'loc', g);
              Y(a, 'ref', e);
              h &&
                (_.t(455)
                  ? (c =
                      (Rg(c.top) && c.top.location && c.top.location.href) ||
                      Su(c) ||
                      (c.location &&
                        c.location.ancestorOrigins &&
                        c.location.ancestorOrigins[c.location.ancestorOrigins.length - 1]) ||
                      '') && Y(a, 'top', d ? Pg(_.Og(c)[3] || null) : c)
                  : (c = f.j[Math.max(f.j.length - 1, 0)].url) &&
                    Y(a, 'top', d ? Pg(_.Og(c)[3] || null) : c));
              Y(a, 'scar', a.model.H);
            },
            pv = function (a, b) {
              b = void 0 === b ? window : b;
              if (!_.t(455)) {
                var c = b.document,
                  d = c.scripts;
                d && Y(a, 'dssz', d.length);
                b = new dj(b);
                Y(a, 'icsg', fj(b), { ma: !0 });
                b = gj(b);
                Y(a, 'mso', b);
                b = Error();
                if (b.stack) {
                  d = dp(b.stack);
                  d -= 13;
                  if (0 > d) {
                    d = 0;
                    var e = new sk(
                      'gpt_negative_stack_trace',
                      'https://pagead2.googlesyndication.com',
                      _.dk(23)
                    );
                    yc(
                      e,
                      nq(oq.F()).filter(function (f) {
                        return Ap(a.j, f.getSlotId());
                      })
                    );
                    K(e, 'stackTrace', b.stack);
                    uk(e);
                  }
                  Y(a, 'std', d, { ma: !0 });
                }
                c.currentScript &&
                  c.currentScript.text &&
                  Y(a, 'csl', c.currentScript.text.length);
              }
            },
            cv = function (a) {
              var b = Mb();
              Y(a, 'vrg', b);
            },
            iv = function (a, b) {
              var c = a.l.P,
                d = (b = b.map(function (e) {
                  e = c[e.getSlotId().getDomId()];
                  return Zb(e).join('&');
                }));
              d.join('|').length == b.length - 1 && (d = null);
              Y(a, 'prev_scp', d, { wa: '|' });
            },
            mv = function (a, b) {
              _.Yb(b, function (c, d) {
                Y(a, d, c, { ca: !1 });
              });
            },
            dv = function (a) {
              var b = a.l.O;
              0 != Yf(b, 24, 0) && Y(a, 'co', Yf(b, 24, 0), { ma: !0 });
            },
            fv = function (a, b) {
              if (!_.t(367)) {
                var c = _.dk(221);
                b = Wh(c, b);
                b.Ad && Y(a, 'npa', 1);
                Y(a, 'guci', b.kd);
              }
            },
            ev = function (a) {
              var b = Zn(a.l.O) || new Vn();
              !0 === r(b, 1) && Y(a, 'rdp', '1');
              !0 === r(b, 9) && Y(a, 'ltd', '1');
              var c = C(a.B, 2);
              c && Y(a, 'gdpr_consent', c);
              Uf(a.B, 3) && ((c = r(a.B, 3)), Y(a, 'gdpr', c ? '1' : '0', { ma: !0 }));
              (c = C(a.B, 4)) && Y(a, 'addtl_consent', c);
              (c = C(a.B, 7)) && Y(a, 'tcfe', c);
              (c = C(a.B, 1)) && Y(a, 'us_privacy', c);
              (r(a.B, 6) || r(b, 8)) && Y(a, 'npa', 1);
              c = Yf(b, 6, 2);
              2 !== c && Y(a, 'tfua', c, { ma: !0 });
              Uf(b, 5) && ((b = C(b, 5)), Y(a, 'tfcd', b, { ma: !0 }));
            },
            hv = function (a) {
              var b = a.l.O;
              1 != Yf(b, 24, 0) && Uf(b, 16) && Y(a, 'ppid', C(b, 16), { ma: !0 });
            },
            jv = function (a, b) {
              var c = a.l,
                d = c.O,
                e = c.P[b[0].getSlotId().getDomId()];
              c = 1 != a.model.Ba;
              e = !!r(e, 17);
              b = bp(b, a.l.P, a.j.l, Bp(a.j));
              d = r(d, 27) || !1;
              var f = 3 == a.model.Ba,
                g = new xr();
              g.set(0, c);
              g.set(1, e);
              g.set(2, b);
              g.set(3, d);
              g.set(4, f);
              c = yr(g);
              0 < c && Y(a, 'eri', c);
            },
            kv = function (a, b) {
              var c = a.l.O,
                d = Ru(c);
              Y(a, 'cust_params', d, { wa: '&' });
              if (0 == Yf(c, 24, 0))
                if (_.t(456))
                  (b = Hp(a.j, b.document, a.B, b.navigator.cookieEnabled, b.location.host)),
                    a.C &&
                      ((d = as(a.C, a.B)),
                      Y(a, 'cookie', d, { ma: !0 }),
                      !d && b && (Y(a, 'cookie_enabled', '1', { ma: !0 }), Y(a, 'cdm', b)));
                else {
                  if (a.C) {
                    d = as(a.C, a.B);
                    Y(a, 'cookie', d, { ma: !0 });
                    if ((d = !d)) {
                      d = a.C;
                      if (0 === d.l) {
                        var e = a.B;
                        if (as(d, e)) e = !0;
                        else {
                          Ka('GoogleAdServingTest', 'Good', e, void 0, d.j.document);
                          var f = 'Good' === Ja('GoogleAdServingTest', e, d.j.document);
                          if (f) {
                            var g = d.j.document;
                            g = void 0 === g ? document : g;
                            r(e, 5) && og(new Ia(g), 'GoogleAdServingTest');
                          }
                          e = f;
                        }
                        d.l = e ? 2 : 1;
                      }
                      d = 2 === d.l;
                    }
                    d && Y(a, 'cookie_enabled', '1', { ma: !0 });
                  }
                  d = b.document;
                  (b = (Mo(a.j.l) || sc(b)) != d.URL ? d.domain : '') && Y(a, 'cdm', b);
                }
              (c = C(c, 8))
                ? (50 < c.length && (c = c.substring(0, 50)),
                  (c = 'a ' + Df('role:1 producer:12 loc:"' + (c + '"'))))
                : (c = '');
              c && Y(a, 'uule', c);
              _.t(6) ||
                ((c = new xr()),
                _.H.SVGElement && _.H.document.createElementNS && c.set(0),
                (b = oh()),
                b['allow-top-navigation-by-user-activation'] && c.set(1),
                b['allow-popups-to-escape-sandbox'] && c.set(2),
                _.H.crypto && _.H.crypto.subtle && c.set(3),
                _.H.TextDecoder && _.H.TextEncoder && c.set(4),
                (c = yr(c)),
                Y(a, 'bc', c));
            },
            lv = function (a, b, c) {
              const $___old_cce6603e97caf62c = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                ),
                $___old_0c30572062238a37 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'platform'
                );
              try {
                if ($___old_cce6603e97caf62c)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_47c01efa79e9f191.userAgent
                  ));
                if ($___old_0c30572062238a37)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___stub_47c01efa79e9f191.platform
                  ));
                return function () {
                  var d = c.document;
                  0 < navigator.userAgent.indexOf('MSIE ') &&
                    Lo(a.j.l, 'adsense_encoding', d.charset, !1);
                  if (!Mo(a.j.l)) {
                    try {
                      var e = Math.round(Date.parse(c.document.lastModified) / 1000) || null;
                    } catch (m) {
                      e = null;
                    }
                    Y(a, 'lmt', e ? e.toString() : null);
                  }
                  e = _.t(43) ? _.jj() : new Date().getTime();
                  Y(a, 'dt', e, { ca: !1 });
                  try {
                    e = Nu;
                    var f = Math.min(
                      lj('domLoading') || Infinity,
                      lj('domInteractive') || Infinity
                    );
                    var g = Infinity == f ? Math.max(lj('responseEnd'), lj('navigationStart')) : f;
                    0 < g &&
                      e >= g &&
                      (Y(a, 'dlt', g, { ca: !1 }), Y(a, 'idt', e - g, { ca: !1 }));
                  } catch (m) {
                    Y(a, 'idt', -9, { ca: !1 }), yk(479, m);
                  }
                  if (null == Pu) {
                    a: {
                      g = c.navigator;
                      f = g.userAgent;
                      e = g.platform;
                      var h = /WebKit\/(\d+)/,
                        k = /rv:(\d+\.\d+)/,
                        l = /rv:1\.8([^.]|\.0)/;
                      if (
                        /Win|Mac|Linux|iPad|iPod|iPhone/.test(e) &&
                        !/^Opera/.test(f) &&
                        ((h = (h.exec(f) || [0, 0])[1]),
                        (k = (k.exec(f) || [0, 0])[1]),
                        (/Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode) ||
                          (!h && 'Gecko' === g.product && 27 <= k && !l.test(f)) ||
                          536 <= h)
                      ) {
                        g = !0;
                        break a;
                      }
                      g = !1;
                    }
                    f = Lm(c, c.document, 500, 300);
                    Pu = g && !f;
                  }
                  Pu || Y(a, 'ea', '0', { ma: !0 });
                  g = Jm(Si()).M;
                  f = Mm(g);
                  g = Lm(Si(), d, c.google_ad_width, c.google_ad_height);
                  f = f.Xb;
                  e = Si();
                  e = e.top == e ? 0 : Rg(e.top) ? 1 : 2;
                  l = 4;
                  g || 1 != e
                    ? g || 2 != e
                      ? g && 1 == e
                        ? (l = 7)
                        : g && 2 == e && (l = 8)
                      : (l = 6)
                    : (l = 5);
                  f && (l |= 16);
                  g = '' + l;
                  Nm();
                  Y(a, 'frm', g || null);
                  a.j.B
                    ? (g =
                        (g = pi()) && _.ha(g.rootBounds)
                          ? new _.wg(g.rootBounds.width, g.rootBounds.height)
                          : null)
                    : (g = Im(!0, c, _.t(280) && 0 !== th()));
                  g && ((a.l.pa = g), Y(a, 'biw', g.width), Y(a, 'bih', g.height));
                  !Km(c) && (g = Im(!1, c)) && (Y(a, 'isw', g.width), Y(a, 'ish', g.height));
                  a.model.B && Y(a, 'oid', a.model.B);
                  yv(a, b, d);
                  Y(a, 'adks', zv(a, b));
                  d = 0;
                  void 0 === _.H.postMessage && (d |= 1);
                  0 < d && Y(a, 'osd', d);
                  Av(a);
                  d = No(b, a.j.l, Bp(a.j), a.L);
                  Y(a, 'adsenseParameters', d, { ca: !1 });
                  d = Vi(c);
                  a.V
                    ? (Y(a, 'ifi', d + 1),
                      (d = c),
                      (b = b.length),
                      (b = void 0 === b ? 1 : b),
                      (d = ri(mi(d)) || d),
                      (d.google_unique_id = (d.google_unique_id || 0) + b))
                    : Y(a, 'ifi', d);
                  null !== c && c != c.top
                    ? ((b = [c.document.URL]),
                      c.name && b.push(c.name),
                      (c = Im(!1, c, !1)),
                      b.push(c.width.toString()),
                      b.push(c.height.toString()),
                      (c = ch(b.join(''))))
                    : (c = 0);
                  0 != c && Y(a, 'ifk', c.toString());
                }.apply(this, arguments);
              } finally {
                if ($___old_cce6603e97caf62c)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_cce6603e97caf62c
                  ));
                if ($___old_0c30572062238a37)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___old_0c30572062238a37
                  ));
              }
            },
            nv = function (a) {
              var b = _.H.devicePixelRatio;
              (b = 'number' === typeof b ? +b.toFixed(3) : null) && Y(a, 'u_sd', b, { ca: !1 });
            },
            bv = function (a) {
              Y(a, 'eid', a.model.C);
              var b = ij().split(',');
              b && Y(a, 'debug_experiment_id', b);
            },
            gv = function (a, b, c) {
              b.forEach(function (l) {
                Bv(a, l.getSlotId().getAdUnitPath());
              });
              var d = a.l,
                e = d.O,
                f = d.P;
              d = b.map(function (l) {
                return f[l.getSlotId().getDomId()];
              });
              Y(a, 'iu_parts', a.A);
              Y(a, 'enc_prev_ius', a.H);
              Y(
                a,
                'prev_iu_szs',
                d
                  .map(function (l) {
                    return nc(l);
                  })
                  .join()
              );
              if (
                d.some(function (l) {
                  return ((L = Ua(l)), _.B(L, 'includes')).call(L, 'fluid');
                })
              ) {
                var g = d.map(function (l) {
                  return ((L = Ua(l)), _.B(L, 'includes')).call(L, 'fluid') ? 'height' : '0';
                });
                Y(a, 'fluid', g);
              }
              Y(
                a,
                'fsfs',
                Wb(b, function (l) {
                  l = (l = f[l.getSlotId().getDomId()]) && r(l, 12);
                  var m = !!r(e, 13);
                  return (null == l ? m : l) ? 1 : 0;
                })
              );
              Y(
                a,
                'fsbs',
                Wb(b, function (l) {
                  var m = a.l,
                    n = m.O;
                  l = m.P[l.getSlotId().getDomId()];
                  n = dg(n, Mn, 18);
                  return ((l = l && dg(l, Mn, 13)) && Uf(l, 3) ? r(l, 3) : n && r(n, 3)) ? 1 : 0;
                })
              );
              Cv(a, b);
              Dv(a, f[b[0].getSlotId().getDomId()]);
              (g = Ev(d)) && Y(a, 'ists', g);
              Y(
                a,
                'fas',
                Wb(d, function (l) {
                  return Lp(Rn(l));
                })
              );
              (g = Fv(d, function (l) {
                return 4 == Rn(l);
              })) && Y(a, 'rbvs', g);
              _.t(98) &&
                (b = Fv(b, function (l) {
                  var m = f[l.getSlotId().getDomId()],
                    n;
                  if ((n = !Lp(Rn(m)))) {
                    n = null;
                    Array.isArray(Ua(m)[0]) &&
                      ((n = _.G(Ua(m)[0])),
                      (m = n.next().value),
                      (n = n.next().value),
                      (n = { width: m, height: n }));
                    a: {
                      var p = Qa(l, c);
                      l = { Pc: n, vc: !1 };
                      var u = void 0 === l ? {} : l;
                      l = void 0 === u.Pc ? null : u.Pc;
                      m = void 0 === u.td ? 100 : u.td;
                      n = void 0 === u.Md ? 50 : u.Md;
                      u = void 0 === u.vc ? !0 : u.vc;
                      for (var A = Dd(), z = !1; p; ) {
                        if (!m-- || Dd() - A >= n) {
                          n = !1;
                          break a;
                        }
                        switch (p.nodeType) {
                          case 9:
                            try {
                              var E = p.parentWindow || p.defaultView;
                              if (E) {
                                var F = E.frameElement;
                                if (F && Rg(E.parent)) {
                                  p = F;
                                  break;
                                }
                              }
                            } catch (ed) {}
                            p = null;
                            break;
                          case 1:
                            var I = p,
                              O;
                            if ((O = u)) {
                              b: {
                                try {
                                  if (
                                    0 < I.offsetWidth &&
                                    0 < I.offsetHeight &&
                                    I.style &&
                                    'none' !== I.style.display &&
                                    'hidden' !== I.style.visibility &&
                                    (!I.style.opacity || 0 !== Number(I.style.opacity))
                                  ) {
                                    var Aa = I.getBoundingClientRect();
                                    var bb = 0 < Aa.right && 0 < Aa.bottom;
                                    break b;
                                  }
                                } catch (ed) {}
                                bb = !1;
                              }
                              O = !bb;
                            }
                            if (O) {
                              n = !1;
                              break a;
                            }
                            z ||
                              (/^html|body$/i.test(I.tagName)
                                ? (z = null)
                                : ((z = I.style.position || (Ta(I, window) || {}).position),
                                  (z = /^fixed/i.test(z) ? I : null)),
                              (z =
                                !!z &&
                                (!l || z.offsetWidth * z.offsetHeight <= 4 * l.width * l.height)));
                            p = p.parentNode;
                        }
                      }
                      n = z;
                    }
                  }
                  return n;
                })) &&
                Y(a, 'pfxs', b);
              var h = {};
              d.forEach(function (l) {
                (l = l.getClickUrl()) && (h[l] = (h[l] || 0) + 1);
              });
              if (!Zg(h)) {
                b = new sk('gpt_sra_setclickurl');
                var k = [];
                _.Yb(h, function (l, m) {
                  k.push(m.length + ':' + l);
                });
                K(b, 'lenfreqs', k.join());
                yc(b);
                uk(b, _.dk(58));
              }
            },
            Dv = function (a, b) {
              (_.t(364) ? r(a.l.O, 6) : a.m) || !b.getClickUrl() || Y(a, 'click', b.getClickUrl());
            },
            Gv = function (a, b) {
              for (var c = 0; c < b.length; c++)
                if ('' != b[c]) {
                  for (var d = !1, e = 0; e < a.A.length; e++)
                    if (b[c] == a.A[e]) {
                      d = !0;
                      break;
                    }
                  d || a.A.push(b[c]);
                }
            },
            Hv = function (a, b) {
              for (var c = '', d = 0; d < b.length; d++) {
                if (0 < d) c += '/';
                else if ('' == b[0]) continue;
                for (var e = 0; e < a.A.length; e++)
                  if (b[d] == a.A[e]) {
                    c += e;
                    break;
                  }
              }
              return c;
            },
            Bv = function (a, b) {
              var c = '';
              '' != b &&
                ((b = b.split('/').map(function (d) {
                  return d.replace(/,/g, ':');
                })),
                Gv(a, b),
                (c = Hv(a, b)));
              a.H.push(c);
            },
            Ev = function (a) {
              return Fv(a, function (b) {
                return 0 != Rn(b);
              });
            },
            Fv = function (a, b) {
              var c = new xr();
              a.forEach(function (d, e) {
                c.set(a.length - e - 1, b(d));
              });
              return yr(c);
            },
            Av = function (a) {
              var b = a.model.j.map(function (c) {
                return ou(a.model, c);
              });
              Y(a, 'ucis', b, { wa: '|' });
            },
            av = function (a) {
              var b = a.l.O;
              r(b, 21) &&
                (Y(a, 'hxva', 1, { ca: !1 }), Y(a, 'cmsid', C(b, 23)), Y(a, 'vid', C(b, 22)));
            },
            Cv = function (a, b) {
              var c = Wb(
                b,
                function (d) {
                  d = d.getSlotId();
                  d = ((d = a.j.j.get(d)) && d.Ec) || 0;
                  var e = _.kj();
                  return Math.round(Math.min((d && e ? e - d : 0) / 1000, 1800));
                },
                void 0,
                '~'
              );
              Y(a, 'ris', c);
              b = Wb(b, function (d) {
                if (a.V) {
                  var e = d.getSlotId();
                  if ((e = a.j.j.get(e))) (e.Ec = _.kj() || 0), e.Mc++;
                }
                return Fp(a.j, d.getSlotId());
              });
              Y(a, 'rcs', b);
            },
            vv = function (a) {
              if (!(_.dk(221) || _.t(454) || (_.t(446) && !_.dk(254)))) {
                var b = Ga(a.B, window);
                if (b) {
                  var c = new Hq();
                  var d = _.w(1917, -1),
                    e = [],
                    f = /^_GESPSK-(.+)$/;
                  try {
                    for (var g = 0; g < b.length; g++) {
                      var h = (f.exec(b.key(g)) || [])[1];
                      h && e.push(h);
                    }
                  } catch (k) {}
                  e = _.G(e);
                  for (f = e.next(); !f.done; f = e.next())
                    if (((f = f.value), (g = mb().get(f, b)), g.getError()))
                      nb(g.getError(), f, g.errorMessage, b);
                    else if (((g = g.yb), (h = Vr(g)), 0 === h || 1 === h))
                      0 <= d && C(g, 2).length > d ? nb(12, f, null, b) : gg(c, 2, g, Kq);
                  P(c, Kq, 2).length
                    ? ((b = new Ef()),
                      (d = P(c, Iq, 1)),
                      0 < d.length && Of(b, 1, d, Lq),
                      (d = P(c, Kq, 2)),
                      0 < d.length && Of(b, 2, d, Mq),
                      (c = Cf(Hf(b), void 0)))
                    : (c = null);
                } else c = null;
                Y(a, 'a3p', c);
              }
            },
            Y = function (a, b, c, d) {
              d = void 0 === d ? {} : d;
              a.I[b] || void 0 === c || null === c || a.D.push({ Kb: b, value: c, options: d });
            },
            Wu = function (a) {
              var b, c;
              var d = (
                null != (c = null == (b = Zn(a.l.O)) ? void 0 : r(b, 9)) && c
                  ? _.t(448)
                  : _.t(387) && !r(a.B, 5)
              )
                ? 'https://pagead2.googlesyndication.com/gampad/ads?'
                : '' + _.dk(247) + '/gampad/ads?';
              a.o = d;
              for (d = 0; d < a.D.length; d++)
                if (((b = a.D[d]), 'adsenseParameters' === b.Kb)) Iv(a, b);
                else {
                  c = a;
                  var e = Jv(b);
                  e && ('?' !== c.o[c.o.length - 1] && (c.o += '&'), (c.o += b.Kb + '=' + e));
                }
            },
            Jv = function (a) {
              var b = a.value,
                c = a.options,
                d = void 0 === c.ca ? !0 : c.ca;
              a = void 0 === c.wa ? ',' : c.wa;
              c = void 0 === c.ma ? !1 : c.ma;
              return _.ha(b)
                ? Array.isArray(b) && b.length
                  ? b
                      .map(function (e) {
                        return Kv(e, d);
                      })
                      .join(Kv(a, d))
                  : null
                : null == b || (!c && 0 == b)
                ? null
                : Kv(b, d);
            },
            Iv = function (a, b) {
              var c = [],
                d = [];
              b = _.G(Array.isArray(b.value) ? b.value : []);
              for (var e = b.next(); !e.done; e = b.next()) {
                var f = e.value;
                e = f.Kb;
                var g = f.wd,
                  h = f.Jd;
                f = g ? encodeURIComponent(g.toString()) : '';
                h
                  ? ((g = h
                      .map(function (k) {
                        return k ? encodeURIComponent(encodeURIComponent(k)) : '';
                      })
                      .join(',')),
                    d.push(e + ',' + encodeURIComponent(f) + ',' + g))
                  : g && 'url' != e && c.push(e + '=' + f);
              }
              c.length && (a.o += '&' + c.join('&'));
              d.length && (a.o += '&sps=' + d.join('|'));
            },
            qv = function (a) {
              a = Rg(a.top) ? a.top : a;
              return (
                _.ha(a.AMP) &&
                !!bh(a.AMP, function (b, c) {
                  return !/^inabox/i.test(c);
                })
              );
            },
            Kv = function (a, b) {
              a = a.toString();
              return b ? encodeURIComponent(a) : a;
            },
            xv = new _.Va(-9, -9);
          var Lv = null,
            Ov = function () {
              var a = this;
              this.j = new x.Map();
              this.l = new x.Map();
              this.B = jk.F();
              _.y(
                window,
                'DOMContentLoaded',
                J(334, function () {
                  for (var b = _.G(a.j), c = b.next(); !c.done; c = b.next()) {
                    var d = _.G(c.value);
                    c = d.next().value;
                    d = d.next().value;
                    Mv(a, c, d) && a.j.delete(c);
                  }
                })
              );
              Zo(Uo.F(), So, 724, function (b) {
                Nv(a, b.slotId, b.vb);
              });
              Zo(Uo.F(), To, 725, function (b) {
                var c = b.slotId;
                b = b.vb;
                var d = a.l.get(c);
                null != d ? Yt(d, b) : Nv(a, c, b);
              });
            },
            Nv = function (a, b, c) {
              Mv(a, b, c)
                ? a.j.delete(b)
                : (a.j.set(b, c),
                  _.R(b, function () {
                    a.j.delete(b);
                  }));
            },
            Mv = function (a, b, c) {
              var d = xq(oq.F(), b);
              if (!d) return !1;
              var e = v(d, document);
              if (e && 'DIV' == e.nodeName) {
                var f = _.t(84) && _.t(87);
                e = new Wt({
                  M: window,
                  Wa: a.B,
                  nb: e,
                  ta: function (g) {
                    yk(336, g, 1);
                  },
                  Hd: f,
                });
                if (e.B)
                  return (
                    Yt(e, c),
                    a.l.set(b, e),
                    (c = function () {
                      return void a.l.delete(b);
                    }),
                    _.t(450) ? up(sp(), b, c) : Go(d, c),
                    !0
                  );
              }
              return !1;
            };
          var ac = new x.Set();
          var Pv = function (a, b) {
              return (
                Math.max(
                  'string' === typeof a
                    ? _.B(a, 'endsWith').call(a, 'px')
                      ? parseInt(a, 10)
                      : 0
                    : a,
                  b
                ) + 'px'
              );
            },
            Qv = function (a, b, c, d, e) {
              a = new xg(a).createElement('DIV');
              a.id = c;
              a.name = c;
              c = a.style;
              c.border = '0pt none';
              d && ((c.margin = 'auto'), (c.textAlign = 'center'));
              e &&
                ((d = Array.isArray(e)),
                (c.width = d ? e[0] + 'px' : '100%'),
                (c.height = d ? e[1] + 'px' : '0%'));
              b.appendChild(a);
              return a;
            },
            Sv = function (a, b, c, d, e, f, g, h, k, l, m, n) {
              var p = Rv,
                u = Np.F().B,
                A;
              Array.isArray(d) ? (A = new _.wg(d[0], d[1])) : (A = 1);
              d = h || r(f, 4) || (_.t(242) && !Uf(f, 4)) ? ip() : void 0;
              return new It({
                cc: a,
                Cc: b,
                ld: p,
                content: null === l ? ft(c) : '<startguard>' + c + '<endguard>',
                size: A,
                sd: { info: function () {}, K: function () {}, error: function () {} },
                cd: k,
                Hc: e,
                Oc: g || void 0,
                permissions: { Fb: Uf(f, 1) ? !!r(f, 1) : !h, Gb: Uf(f, 2) ? !!r(f, 2) : !1 },
                rb: !!wc().fifWin,
                Ed: ko(),
                Yc: lo(),
                Sc: !1,
                hostpageLibraryTokens: u,
                ta: yk,
                Za: null === l ? void 0 : l,
                uniqueId: n,
                xb: m,
                Nc: d,
              });
            },
            Tv = function (a, b, c) {
              var d = void 0 === d ? !0 : d;
              var e = void 0 === e ? !0 : e;
              b = ft(b, '<script>var inDapIF=true,inGptIF=true;</script>');
              try {
                var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                d && De() && f.open('text/html', 'replace');
                c();
                f.write(b);
                a.contentWindow &&
                  a.contentWindow.history &&
                  a.contentWindow.history.replaceState &&
                  he(a.contentWindow.location.href, '#') &&
                  a.contentWindow.history.replaceState(null, '', '#' + Math.random());
                e && f.close();
              } catch (g) {
                zk(653, g, !0);
              }
            },
            Uv = function (a, b) {
              var c = b.slot,
                d = Ua(b.da);
              if ((b = _.w(470))) {
                c = a = 0;
                d = _.G(d);
                for (var e = d.next(); !e.done; e = d.next())
                  if (((e = e.value), Array.isArray(e))) {
                    var f = _.G(e),
                      g = f.next().value;
                    f = f.next().value;
                    if (!(1 >= g || 1 >= f)) {
                      var h = null;
                      switch (b) {
                        case 3:
                          return e.slice();
                        case 1:
                          h = h || Im(!1, window);
                          g <= h.width && (a = Math.max(a, g));
                          f <= h.height && (c = Math.max(c, f));
                          break;
                        case 2:
                          (a = Math.min(a || Infinity, g)), (c = Math.min(c || Infinity, f));
                      }
                    }
                  }
                return a && c ? [a, c] : null;
              }
              if (!d.length) return null;
              b = d[0].slice();
              if (1 < d.length) {
                a: if ((a = v(c, a)) && a.style.height && a.style.width)
                  for (a = [a.style.width, a.style.height], c = 0; c < a.length; ++c)
                    if (2 < a[c].length && 'px' == a[c].substring(a[c].length - 2))
                      a[c] = parseInt(a[c], 10);
                    else {
                      a = null;
                      break a;
                    }
                else a = null;
                b = a || b;
              }
              return b;
            },
            Vv = function (a, b, c) {
              if (!Oa(b, a)) {
                var d = v(b, a);
                if (d) {
                  var e = c.O;
                  c = c.P[b.getSlotId().getDomId()];
                  c = Uv(a, { slot: b, da: c });
                  if (_.t(432) || _.t(464)) {
                    if (_.t(432) && Array.isArray(c)) {
                      var f = _.G(c);
                      c = f.next().value;
                      f = f.next().value;
                      d.style.minWidth || (d.style.minWidth = c + 'px');
                      d.style.minHeight || (d.style.minHeight = f + 'px');
                    }
                    _.t(464) && Qv(a, d, op(b.getSlotId()), !!r(e, 15), [0, 0]);
                  } else Qv(a, d, op(b.getSlotId()), !!r(e, 15), c);
                }
              }
            };
          var Wv = function (a) {
              var b =
                'performance' in window && 'now' in performance
                  ? performance.now.bind(performance)
                  : Dd;
              for (a = b() + a; b() < a; );
              b();
            },
            Xv = function (a, b) {
              b >= a.length ||
                (Wv(a[b]),
                window.requestAnimationFrame(function () {
                  return Xv(a, ++b);
                }));
            },
            Yv = function (a) {
              window.requestAnimationFrame(function () {
                return Xv(a, 0);
              });
            },
            Zv = function () {
              if ('function' === typeof window.requestAnimationFrame) {
                var a = _.Pj(480);
                a.length &&
                  ((a = a.map(function (b) {
                    return _.hh(b, 0);
                  })),
                  Yv(a));
              }
            };
          var $v = function (a) {
              var b = _.w(8, -1);
              return -1 != b
                ? b
                : Uf(a, 1)
                ? Uf(a, 3) && 0 != th()
                  ? C(a, 1) * Vf(a, 3)
                  : C(a, 1)
                : null;
            },
            aw = function (a) {
              return Uf(a, 2) ? (Uf(a, 3) && 0 != th() ? C(a, 2) * Vf(a, 3) : C(a, 2)) : null;
            },
            bw = function (a) {
              var b = new Un();
              a = _.G(a);
              for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                if (Uf(c, 1)) {
                  var d = C(c, 1);
                  D(b, 1, d);
                }
                Uf(c, 2) && ((d = C(c, 2)), D(b, 2, d));
                Uf(c, 3) && ((c = Vf(c, 3)), D(b, 3, c));
              }
              return b;
            };
          var cw = function () {
            this.module = 2;
          };
          cw.prototype.toString = function () {
            return String(this.module);
          };
          _.dw = new cw();
          var hc = Uc(['https://securepubads.g.doubleclick.net/gpt/pubads_impl_', '_', '.js']),
            ic = Uc(['https://pagead2.googlesyndication.com/gpt/pubads_impl_', '_', '.js']),
            jc = Uc(['https://securepubads.g.doubleclick.net/pagead/js/rum.js']),
            kc = Uc(['https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js']);
          var ew, fw, iw;
          ew = {};
          fw = ((ew[2] = { ud: 'page_level_ads' }), ew);
          _.gw = function () {
            this.l = {};
            this.j = fw;
            this.B = null;
          };
          _.hw = function (a, b) {
            b = b.module;
            a.l[b] = a.l[b] || new Gb();
            return a.l[b];
          };
          iw = function (a, b) {
            var c = b.module;
            b = '_gpt_js_load_' + c + '_';
            var d = J(340, function (e) {
              if (a.j[c] && 'function' === typeof e) {
                var f = a.j[c];
                f = (void 0 === f.bd ? [] : f.bd).map(function (g) {
                  return _.hw(a, g).promise;
                });
                x.Promise.all(f).then(function () {
                  e.call(_.H, _);
                });
              }
            });
            Object.defineProperty(wc(), b, {
              value: function (e) {
                if (d) {
                  var f = d;
                  d = null;
                  f(e);
                }
              },
              writable: !1,
              enumerable: !1,
            });
          };
          _.gw.prototype.load = function (a) {
            var b = _.hw(this, a);
            var c = this.j[a.module].ud;
            var d = _.dk(172);
            d = d && 'pagead2.googlesyndication.com' === Pg(_.Og(d.src || '')[3] || null);
            var e = this.B;
            c = be(Fa(d ? e.Wc(c) : e.Xc(c)).toString());
            c = (d = _.w(25)) ? de(c, { cb: d }) : c;
            iw(this, a);
            Wg(document, c);
            return b.promise;
          };
          vd(_.gw);
          _.gw.prototype.load = Vb(_.gw.prototype.load);
          var Rv = '3rd party ad content',
            jw = function (a) {
              Rv = a;
            };
          var kw = function (a, b, c) {
            Ck.call(this);
            this.l = c;
            D(this.l, 17, !0);
            this.j = a;
            b.Ca(this.j, c);
            this.o = b;
          };
          _.M(kw, Xk);
          kw.prototype.La = function () {
            return new pu(this);
          };
          kw.prototype.display = function (a) {
            var b = this.j.getSlotId().getDomId();
            document.write('<div id="' + Ne(b) + '"></div>');
            v(this.j)
              ? lw(this.o, a, this.j)
              : mc('gpt_pb_write', function (c) {
                  yc(c);
                });
          };
          kw.prototype.set = function (a, b) {
            'page_url' == a && b && D(this.l, 18, String(b));
            return this;
          };
          kw.prototype.get = function (a) {
            return 'page_url' !== a ? null : C(this.l, 18);
          };
          var mw = function () {
              this.j = {};
            },
            ow = function (a, b, c) {
              var d;
              c && (d = '//' + c + '.safeframe.googlesyndication.com');
              c = Bt(b, ko(), lo(), !0, d);
              a.j[c] ||
                ((a.j[c] = 1),
                cs()
                  ? nw(a, c)
                  : wc().fifWin ||
                    ((b = b.document),
                    (a = new xg(b).createElement('IFRAME')),
                    (a.src = c),
                    (a.style.visibility = 'hidden'),
                    (a.style.display = 'none'),
                    (b = b.getElementsByTagName('script')),
                    0 < b.length &&
                      ((b = b[b.length - 1]),
                      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))));
            },
            nw = function (a, b) {
              var c = ds(document, b, 'prefetch', '');
              c &&
                _.y(c, 'load', function () {
                  a.j[b] = 3;
                  c && _.Jg(c);
                });
            };
          vd(mw);
          var Z = function () {
            Jr.apply(this, arguments);
          };
          _.M(Z, Jr);
          Z.prototype.U = function (a) {
            yk(this.id(), a);
            window.console && window.console.error && window.console.error(a);
          };
          var pw = function (a, b, c, d, e) {
              var f = null,
                g = J(b, e);
              _.y(c, d, g) &&
                ((f = function () {
                  return _.sb(c, d, g);
                }),
                _.R(a, f));
              return f;
            },
            qw = function (a, b, c, d) {
              d =
                void 0 === d
                  ? function () {
                      return !0;
                    }
                  : d;
              b = new di(b, c, J(a.id(), d));
              _.$h(a, b);
              return b;
            };
          var rw = function (a, b, c, d) {
            _.R(
              a,
              fi(
                b,
                J(506, function (e) {
                  e = JSON.parse(e.data);
                  e.message === c && d(e);
                })
              )
            );
          };
          var sw = function (a, b, c, d) {
            _.Q.call(this);
            this.slot = b;
            this.Y = d;
            this.j = null;
            this.m = new xg(a);
          };
          _.M(sw, _.Q);
          var tw = function (a, b, c) {
            var d = c.Ga,
              e = c.Va,
              f = c.mb,
              g = c.ob,
              h = c.hd,
              k = c.wb,
              l = c.Rb,
              m = c.isBackfill,
              n = c.Wb,
              p = c.oc,
              u = c.pc;
            e && e.setAttribute('data-google-query-id', g || '');
            c = a.slot.getSlotId();
            uj(jk.F(), '5', C(a.Y.P[c.getDomId()], 20));
            c.dispatchEvent(Mk, 801, { Qb: 0 === d.kind ? d.ua : '', isBackfill: !!m });
            a.j = a.o('height' === h ? 'fluid' : [b.width, b.height], {
              Ga: d,
              mb: f,
              ob: g,
              wb: k,
              Rb: l,
              isBackfill: m,
              Wb: n,
              oc: p,
              pc: u,
            });
            if (e && !h && b.height && _.t(471)) {
              var A, z, E;
              if (
                (d =
                  null == (A = Ta(e, window))
                    ? void 0
                    : null == (z = A.minHeight)
                    ? void 0
                    : null == (E = z.match(/^([0-9]+)px$/))
                    ? void 0
                    : E[1])
              )
                (A = Math.floor((Number(d) - b.height) / 2)),
                  0 < A && (f.style.paddingTop = A + 'px');
            }
            p && (f = a.j) && f.setAttribute('data-google-container-id', p);
            Xo(Uo.F(), ec, c, { size: b });
            return a.j;
          };
          sw.prototype.loaded = function (a) {
            a && a.setAttribute('data-load-complete', !0);
            a = this.slot.getSlotId();
            a.dispatchEvent(Nk, 805, void 0);
            uj(jk.F(), '6', C(this.Y.P[a.getDomId()], 20));
          };
          sw.prototype.B = function () {
            _.Q.prototype.B.call(this);
            var a = v(this.slot, this.m.j);
            a && a.removeAttribute('data-google-query-id');
            this.j = null;
          };
          var uw = function () {
            sw.apply(this, arguments);
          };
          _.M(uw, sw);
          uw.prototype.o = function (a, b) {
            var c = this,
              d = b.Ga,
              e = b.mb,
              f = b.wb,
              g = b.Rb,
              h = b.isBackfill,
              k = b.Wb,
              l = b.oc,
              m = b.pc,
              n = b.ob;
            b = this.slot.getSlotId();
            var p = this.Y,
              u = p.O;
            p = p.P[b.getDomId()];
            var A = new Mn();
            null != m && D(A, 4, m);
            u = no([A, dg(u, Mn, 18), p && dg(p, Mn, 13)]);
            var z = String(r(u, 4));
            null != m && m !== r(u, 4) && La.F().K(gm(z, String(m)));
            h ||
              mc('gpt_sf_r', function (I) {
                yc(I);
                K(I, 'GAM', String(m));
                K(I, 'Final', z);
              });
            g = g ? C(g, 2) : null;
            var E,
              F = Sv(
                e,
                np(b),
                d.ua,
                a,
                function () {
                  return c.loaded(F.j, null != (E = n) ? E : '');
                },
                u,
                f || null,
                !!h,
                !!k,
                g,
                this.Y.xb,
                l
              );
            _.R(this, function () {
              try {
                100 != F.status &&
                  (2 == F.I && (Ds(F.B), (F.I = 0)),
                  window.clearTimeout(F.L),
                  (F.L = -1),
                  (F.C = 3),
                  F.l && (F.l.za(), (F.l = null)),
                  F.H && F.j
                    ? F.H.unobserve(F.j)
                    : (_.sb(window, 'resize', F.J), _.sb(window, 'scroll', F.J)),
                  F.A && F.j && F.A == _.Kg(F.j) && F.A.removeChild(F.j),
                  (F.j = null),
                  (F.A = null),
                  F.H && (F.H.disconnect(), (F.H = null)),
                  (F.status = 100));
              } catch (I) {}
            });
            return F.j;
          };
          uw.prototype.loaded = function (a, b) {
            sw.prototype.loaded.call(this, a, b);
            a = this.Y.P[this.slot.getSlotId().getDomId()];
            Mu({ slot: this.slot, da: a }, b);
          };
          uw.prototype.l = function () {
            return !1;
          };
          var vw = function () {
            sw.apply(this, arguments);
          };
          _.M(vw, sw);
          var ww = function (a, b) {
              var c = np(a.slot.getSlotId()),
                d = a.m.j;
              a = Rv;
              d = void 0 === d ? document : d;
              d = new xg(d).createElement('IFRAME');
              d.id = c;
              d.title = a;
              d.name = c;
              Array.isArray(b)
                ? null != b[0] &&
                  null != b[1] &&
                  ((d.width = String(b[0])), (d.height = String(b[1])))
                : ((d.width = '100%'), (d.height = '0'));
              d.allowTransparency = 'true';
              d.scrolling = 'no';
              d.marginWidth = '0';
              d.marginHeight = '0';
              d.frameBorder = '0';
              d.style.border = '0';
              d.style.verticalAlign = 'bottom';
              return d;
            },
            xw = function (a, b, c, d, e) {
              d.appendChild(b);
              'string' !== typeof c && ((b.width = String(c[0])), (b.height = String(c[1])));
              var f = J(774, function () {
                a.loaded(b, e);
                _.sb(b, 'load', f);
              });
              _.y(b, 'load', f);
            };
          var yw = function () {
            vw.apply(this, arguments);
          };
          _.M(yw, vw);
          yw.prototype.o = function (a, b) {
            var c = b.Ga,
              d = b.mb,
              e = b.wb;
            b = b.ob;
            var f = ww(this, a);
            e && f.setAttribute('sandbox', e.join(' '));
            -1 == ye.indexOf('iPhone') && (f.srcdoc = _.Ke(Le));
            xw(this, f, a, d, null != b ? b : '');
            Tv(f, c.ua, function () {});
            return f;
          };
          yw.prototype.l = function () {
            return !0;
          };
          var zw = function () {
            vw.apply(this, arguments);
          };
          _.M(zw, vw);
          zw.prototype.o = function (a, b) {
            var c = b.Ga,
              d = b.mb,
              e = b.wb;
            b = b.ob;
            var f = ww(this, a);
            e && f.setAttribute('sandbox', e.join(' '));
            try {
              var g = c.url;
              if (/^urn:uuid:[0-9a-f-]*$/.test(g)) {
                var h = be(g);
                f.src = Xa(h).toString();
              }
            } catch (k) {
              zk(811, k, !0);
            }
            xw(this, f, a, d, null != b ? b : '');
            return f;
          };
          zw.prototype.l = function () {
            return !1;
          };
          var Aw = function (a, b, c, d, e) {
            var f = document;
            switch (a) {
              case 5:
                return new zw(f, b, c, d, e);
              case 0:
                return new yw(f, b, c, d, e);
              default:
                return new uw(f, b, c, d, e);
            }
          };
          var Bw = function (a, b, c, d, e, f, g, h, k, l, m, n, p, u, A, z, E, F, I, O, Aa) {
            Z.call(this);
            this.slot = a;
            this.N = b;
            this.Y = c;
            this.M = d;
            this.m = this.l();
            this.C = this.l();
            this.J = this.l();
            this.D = this.l();
            this.I = this.l();
            this.H = this.l();
            this.A = this.l();
            this.W = V(this, e);
            Ar(this.o, f);
            this.ha = V(this, g);
            this.T = V(this, h);
            this.ga = V(this, k);
            this.ea = V(this, l);
            Ar(this.o, O);
            this.R = W(this, m);
            this.X = W(this, n);
            this.Z = W(this, p);
            this.$ = W(this, u);
            this.ja = W(this, A);
            this.ba = W(this, z);
            this.L = W(this, E);
            this.ia = W(this, F);
            this.ka = W(this, I);
            Ar(this.o, Aa);
          };
          _.M(Bw, Z);
          Bw.prototype.id = function () {
            return 680;
          };
          Bw.prototype.j = function () {
            var a = this.ha.value,
              b = this.T.value,
              c = this.W.value,
              d = Aw(this.ea.value, this.slot, this.N, this.Y, Gr(this.R));
            _.$h(this, d);
            var e = this.X.value;
            if (0 === c.kind) {
              var f = null === e || void 0 === e ? void 0 : Wf(e.getHtml());
              f && (c.ua = f);
              if (null == c.ua) throw Error('invalid html');
            }
            var g = tw(d, this.ga.value, {
              Ga: c,
              Va: a,
              mb: b,
              ob: this.Z.value,
              hd: this.$.value,
              wb: this.ja.value,
              Rb: e,
              isBackfill: this.ba.value,
              Wb: this.L.value,
              oc: this.ia.value,
              pc: this.ka.value,
            });
            4 === Rn(this.Y.P[this.slot.getSlotId().getDomId()])
              ? ((a = qw(this, this.M, 'message', function (h) {
                  if (g.contentWindow !== h.source) var k = !1;
                  else
                    try {
                      k = 'rewarded' === JSON.parse(h.data).type;
                    } catch (l) {
                      k = !1;
                    }
                  return k;
                })),
                U(this.D, a))
              : Er(this.D);
            U(this.m, g);
            U(this.C, d.l());
            d = qw(this, window, 'message', function (h) {
              return (
                'string' === typeof h.data &&
                -1 !== h.data.indexOf('creative_geometry_update') &&
                h.source === g.contentWindow
              );
            });
            U(this.I, d);
            d = qw(this, window, 'message', function (h) {
              return (
                'string' === typeof h.data &&
                (0 == h.data.lastIndexOf('visibility-changed-', 0) ||
                  'impression-viewable' === h.data) &&
                h.source === g.contentWindow
              );
            });
            U(this.H, d);
            U(this.A, qw(this, g, 'load'));
            d = qw(this, window, 'message', function (h) {
              return (
                'string' === typeof h.data &&
                0 == h.data.lastIndexOf('amp-', 0) &&
                !_.t(111) &&
                h.source === g.contentWindow
              );
            });
            U(this.J, d);
          };
          var Cw = function (a, b, c, d, e, f, g, h, k, l, m) {
            Z.call(this);
            this.m = a;
            this.slot = b;
            this.da = c;
            this.pa = d;
            this.G = Mr(this);
            this.A = W(this, e);
            this.J = V(this, f);
            this.D = V(this, g);
            this.I = V(this, h);
            this.C = W(this, k);
            this.L = V(this, l);
            this.H = V(this, m);
          };
          _.M(Cw, Z);
          Cw.prototype.id = function () {
            return 699;
          };
          Cw.prototype.j = function () {
            var a,
              b = this.J.value,
              c = this.D.value;
            c.style.width = '';
            c.style.height = '';
            if ('height' !== this.A.value) {
              var d = null !== (a = this.C.value) && void 0 !== a ? a : 0,
                e = this.I.value,
                f = this.L.value,
                g = this.H.value,
                h = { slot: this.slot, da: this.da },
                k = !1;
              switch (d) {
                case 1:
                case 2:
                  k = this.m;
                  var l = this.pa,
                    m = h.slot;
                  var n = e.width,
                    p = e.height,
                    u = 0;
                  var A = 0;
                  var z = Ua(h.da);
                  z = _.G(z);
                  for (var E = z.next(); !E.done; E = z.next())
                    if (((E = E.value), Array.isArray(E))) {
                      var F = _.G(E);
                      E = F.next().value;
                      F = F.next().value;
                      u < E && (u = E);
                      A < F && (A = F);
                    }
                  A = [u, A];
                  u = A[0] < n;
                  p = A[1] < p;
                  u || p
                    ? ((A = n + 'px'),
                      (z = { 'max-height': 'none', 'max-width': A, padding: '0px', width: A }),
                      p && (z.height = 'auto'),
                      Bu(c, b, z),
                      (c = {}),
                      u && n > parseInt(f.width, 10) && ((c.width = A), (c['max-width'] = A)),
                      p && ((c.height = 'auto'), (c['max-height'] = 'none')),
                      Zg(c)
                        ? (c = !1)
                        : ((c['padding-' + ('ltr' == f.direction ? 'left' : 'right')] = '0px'),
                          _.zh(b, c),
                          (c = !0)))
                    : (c = !1);
                  b: switch (((n = e.width), (p = k.defaultView || k.parentWindow || _.H), d)) {
                    case 2:
                      b = Cu(b, p, n, f, l);
                      break b;
                    case 1:
                      if ((u = b.parentElement))
                        if ((f = ep(u))) {
                          l = f.width;
                          f = v(m, p.document);
                          f = Ta(f, p);
                          m = f.position;
                          z = parseInt(f.width, 10) || 0;
                          A = Ta(u, p);
                          F = 'rtl' == A.direction ? 'Right' : 'Left';
                          p = F.toLowerCase();
                          u = 'absolute' == m ? 0 : parseInt(A['padding' + F], 10);
                          A = parseInt(A['border' + F + 'Width'], 10);
                          E = Eh(f);
                          F = ((E && E[4]) || 0) * ('Right' == F ? -1 : 1);
                          l = Math.max(Math.round((l - Math.max(z, n)) / 2), 0);
                          n = {};
                          z = (E && E[3]) || 1;
                          if (1 != ((E && E[0]) || 1) || 1 != z)
                            (E[0] = 1), (E[3] = 1), (n.transform = 'matrix(' + E.join(',') + ')');
                          z = 0;
                          switch (m) {
                            case 'fixed':
                            case 'relative':
                              z = parseFloat(f[p]) || 0;
                              break;
                            case 'absolute':
                              n[p] = '0';
                          }
                          n['margin-' + p] = l - u - A - z - F + 'px';
                          _.zh(b, n);
                          b = !0;
                        } else b = !1;
                      else b = !1;
                      break b;
                    default:
                      b = !1;
                  }
                  c || b ? (Eu(k, h, d, e.width, e.height, 'gpt_slotexp', g), (k = !0)) : (k = !1);
                  break;
                case 3:
                  (k = this.m),
                    (n = this.pa),
                    (m = e.width),
                    (l = e.height),
                    l >= (parseInt(f.height, 10) || 0) ||
                    'none' == f.display ||
                    'hidden' == f.visibility ||
                    !n ||
                    -12245933 === n.width ||
                    b.getBoundingClientRect().bottom <= n.height
                      ? (k = !1)
                      : ((f = { height: l + 'px' }),
                        Bu(c, b, f),
                        _.zh(b, f),
                        Eu(k, h, 3, m, l, 'gpt_slotred', g),
                        (k = !0));
              }
              !k && _.t(212) && Eu(this.m, h, 0, e.width, e.height, 'gpt_pgbrk', g);
              oc(this.da, this.A.value, e, d);
            }
            this.G.notify();
          };
          var Dw = function (a, b, c, d) {
            Z.call(this);
            this.m = null;
            this.H = W(this, a);
            this.D = W(this, b);
            this.C = W(this, c);
            this.A = V(this, d);
          };
          _.M(Dw, Z);
          Dw.prototype.id = function () {
            return 717;
          };
          Dw.prototype.j = function () {
            var a = this;
            if (!_.t(440)) {
              var b = this.D.value,
                c = this.H.value;
              null == this.C.value ||
                b ||
                null == c ||
                ((b = fi(
                  this.A.value,
                  J(504, function (d) {
                    'impression-viewable' === d.data
                      ? Wo(c, Ro, { Qa: !0 })
                      : 0 === d.data.indexOf('visibility-changed-') &&
                        (d = /^visibility-changed-(\d+(\.\d+)?)$/.exec(d.data)) &&
                        ((d = Math.round(100 * Number(d[1]))),
                        0 <= d &&
                          100 >= d &&
                          ((0 !== d && 100 !== d) || d !== a.m) &&
                          (null !== a.m || 0 < d) &&
                          ((a.m = d), Wo(c, Ro, { Qa: !1, inViewPercentage: d })));
                  })
                )),
                _.R(this, b));
            }
          };
          var Ew = function (a, b, c, d, e, f, g, h, k, l) {
            Z.call(this);
            this.J = W(this, a);
            this.L = W(this, b);
            this.I = W(this, c);
            this.H = W(this, d);
            this.R = W(this, e);
            this.A = V(this, f);
            this.m = V(this, g);
            this.C = V(this, h);
            this.D = V(this, k);
            this.N = V(this, l);
          };
          _.M(Ew, Z);
          Ew.prototype.id = function () {
            return 718;
          };
          Ew.prototype.j = function () {
            var a = this;
            if (Fw(this)) {
              var b = this.C.value,
                c = this.A.value,
                d = this.m.value;
              _.Gi(d, 'visibility', 'hidden');
              _.Gi(d, 'min-width', '100%');
              b
                ? (_.Gi(c, 'min-width', '100%'),
                  (b = fi(
                    this.N.value,
                    J(505, function () {
                      var e = c.contentDocument;
                      e
                        ? Gw(a, c, d, e.body.offsetWidth, e.body.offsetHeight)
                        : mc('gpt_amp_fluid_no_iframedoc', function (f) {
                            yc(f);
                          });
                    })
                  )),
                  _.R(this, b))
                : ((b = fi(
                    this.D.value,
                    J(504, function (e) {
                      var f = a.A.value,
                        g = a.m.value;
                      if (-1 !== e.data.indexOf('creative_geometry_update'))
                        try {
                          var h = JSON.parse(e.data),
                            k = a.R.value;
                          if (
                            null != k &&
                            'creative_geometry_update' === h.s &&
                            h.c === 'sfchannel' + k &&
                            h.p
                          ) {
                            var l = JSON.parse(h.p);
                            l.uid === k &&
                              'number' === typeof l.width &&
                              'number' === typeof l.height &&
                              Gw(a, f, g, l.width, l.height);
                          }
                        } catch (m) {}
                    })
                  )),
                  _.R(this, b));
            }
          };
          var Fw = function (a) {
              var b = !a.C.value;
              return null == a.H.value || a.I.value || 'height' !== a.L.value || b ? !1 : !0;
            },
            Gw = function (a, b, c, d, e) {
              b.setAttribute('height', String(e));
              b.setAttribute('width', String(d));
              _.Gi(c, 'visibility', 'visible');
              Hw(a, e, d);
            },
            Hw = function (a, b, c) {
              var d = a.J.value;
              mc('gpt_fluid_sz', function (e) {
                K(e, 'sz', c + 'x' + b);
                K(e, 'qqid', d || '');
                yc(e);
                K(e, 'ff', 1);
              });
            };
          var Iw = function (a, b, c, d, e) {
            Z.call(this);
            this.M = a;
            this.m = W(this, b);
            this.A = V(this, c);
            this.C = V(this, d);
            this.D = V(this, e);
          };
          _.M(Iw, Z);
          Iw.prototype.id = function () {
            return 685;
          };
          Iw.prototype.j = function () {
            var a, b;
            if (!_.t(111) && !this.C.value) {
              var c = this.D.value,
                d = this.A.value,
                e =
                  null !== (b = null === (a = this.m.value) || void 0 === a ? void 0 : C(a, 1)) &&
                  void 0 !== b
                    ? b
                    : '',
                f = ti(this.M, d, e, c);
              _.R(this, function () {
                try {
                  f();
                } catch (g) {
                  yk(493, g);
                }
              });
            }
          };
          var Jw = /(<head(\s+[^>]*)?>)/i,
            Kw = function (a, b, c, d, e) {
              Z.call(this);
              this.Ga = a;
              this.m = this.l();
              this.A = W(this, b);
              this.C = W(this, c);
              this.D = W(this, d);
              this.H = W(this, e);
            };
          _.M(Kw, Z);
          Kw.prototype.id = function () {
            return 665;
          };
          Kw.prototype.j = function () {
            if (0 !== this.Ga.kind || !fp(this.A.value) || Gr(this.C)) U(this.m, this.Ga);
            else {
              var a = this.Ga.ua || '',
                b = !!this.D.value,
                c = !!this.H.value;
              c ||
                De() ||
                (a = a.replace(
                  Jw,
                  _.t(223)
                    ? '$1<meta http-equiv=Content-Security-Policy content="script-src https://cdn.ampproject.org/;object-src \'none\';child-src blob:;frame-src https://tpc.googlesyndication.com/b4a/b4a-runner.html">'
                    : "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"
                ));
              b && !c && (a = a.replace(Jw, '$1<meta name="referrer" content="origin">'));
              U(this.m, { kind: 0, ua: a });
            }
          };
          var Lw = function (a, b, c, d, e, f) {
            Z.call(this);
            this.M = a;
            this.slotId = b;
            this.m = c;
            this.Hb = f;
            this.C = W(this, d);
            this.A = V(this, e);
          };
          _.M(Lw, Z);
          Lw.prototype.id = function () {
            return 686;
          };
          Lw.prototype.j = function () {
            var a, b;
            return $a(this, function d () {
              var e = this,
                f,
                g,
                h,
                k,
                l,
                m,
                n,
                p,
                u,
                A,
                z;
              return ab(d, function (E) {
                if (1 == E.j) {
                  f = e.C.value;
                  g = null === f || void 0 === f ? void 0 : C(f, 1);
                  h = null === f || void 0 === f ? void 0 : $f(f);
                  k =
                    null !== (a = null === f || void 0 === f ? void 0 : C(f, 3)) && void 0 !== a
                      ? a
                      : 0;
                  l =
                    null !== (b = null === f || void 0 === f ? void 0 : r(f, 5)) && void 0 !== b
                      ? b
                      : !1;
                  if (!g || !h) return E.return();
                  m = new Gb();
                  n = m.resolve;
                  p = m.promise;
                  u = e.A.value;
                  A = ju({
                    M: e.M,
                    element: u,
                    Kd: 0 === e.m,
                    Qc: k,
                    Nd: g,
                    Ob: function () {
                      return void n(!0);
                    },
                    options: { threshold: h },
                    Gc: l,
                    dd: function (F) {
                      zk(615, F, !0);
                    },
                    Hb: e.Hb,
                  });
                  _.R(e, function () {
                    A();
                    n(!1);
                  });
                  return cb(E, p, 2);
                }
                (z = E.l)
                  ? (E = cb(E, e.slotId.dispatchEvent(Fk, 614, void 0), 0))
                  : ((E.j = 0), (E = void 0));
                return E;
              });
            });
          };
          var Mw = function (a, b, c, d) {
            Z.call(this);
            this.format = a;
            this.C = b;
            this.G = this.l();
            this.m = W(this, c);
            this.A = W(this, d);
          };
          _.M(Mw, Z);
          Mw.prototype.id = function () {
            return 720;
          };
          Mw.prototype.j = function () {
            var a = this.A.value;
            if (null == a) Er(this.G);
            else {
              var b = Math.round(0.3 * this.C);
              (2 !== this.format && 3 !== this.format) ||
              !Gr(this.m) ||
              !Zf(this.m.value) ||
              0 >= b ||
              a <= b
                ? U(this.G, a)
                : U(this.G, b);
            }
          };
          var Nw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.slot = a;
            this.O = b;
            this.m = d;
            this.A = e;
            this.G = this.l();
            this.C = 2 === c || 3 === c;
            this.D = V(this, f);
            this.H = V(this, g);
          };
          _.M(Nw, Z);
          Nw.prototype.id = function () {
            return 674;
          };
          Nw.prototype.j = function () {
            var a =
              Oa(this.slot, this.m) ||
              Qv(this.m, this.D.value, op(this.slot.getSlotId()), !!r(this.O, 15));
            this.H.value && !r(this.O, 15) && (a.style.display = 'inline-block');
            if (this.C) {
              var b = function () {
                return void _.Jg(a);
              };
              _.t(450) ? vp(this.A, this.slot.getSlotId(), b) : this.slot.l.push(b);
            } else
              _.R(this, function () {
                return void _.Jg(a);
              });
            U(this.G, a);
          };
          var Ow = function (a, b) {
            Z.call(this);
            this.M = a;
            this.G = this.l();
            this.m = V(this, b);
          };
          _.M(Ow, Z);
          Ow.prototype.id = function () {
            return 698;
          };
          Ow.prototype.j = function () {
            var a = Ta(this.m.value, this.M);
            null == a ? Er(this.G) : U(this.G, a);
          };
          var Pw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.m = a;
            this.format = b;
            this.slot = c;
            this.M = d;
            this.G = Mr(this);
            this.A = W(this, e);
            this.C = V(this, f);
            this.D = V(this, g);
          };
          _.M(Pw, Z);
          Pw.prototype.id = function () {
            return 682;
          };
          Pw.prototype.j = function () {
            return $a(this, function b () {
              var c = this,
                d,
                e,
                f,
                g,
                h,
                k,
                l,
                m,
                n,
                p,
                u,
                A,
                z;
              return ab(b, function (E) {
                if (1 == E.j)
                  return (
                    (d = c),
                    (2 === c.format || 3 === c.format) && Gr(c.A) && Zf(c.A.value)
                      ? cb(E, _.gw.F().load(_.dw), 2)
                      : E.return()
                  );
                e = E.l;
                f = e.gd;
                if (c.fa) return E.return();
                g = c.slot.getSlotId();
                h = _.xp(c.m, g);
                k = c.D.value;
                l = c.C.value;
                _.zh(l, { 'max-height': '30vh', overflow: 'hidden' });
                if (Qw) Qw.nc(l);
                else {
                  Qw = new f(c.format, l, c.M, k, c.m, g);
                  m = {};
                  n = _.G(P(c.A.value, tm, 13));
                  for (p = n.next(); !p.done; p = n.next()) (u = p.value), (m[C(u, 1)] = C(u, 2));
                  A = _.w(487);
                  0 < A && (m.bottom_padding = String(A));
                  Qw.Rd(m);
                  Qw.tb();
                  z = function () {
                    Qw && (Qw.za(), (Qw = null));
                    h && _.zp(d.m, g);
                  };
                  _.t(450) ? vp(c.m, c.slot.getSlotId(), z) : c.slot.l.push(z);
                }
                _.R(c, function () {
                  return _.Jg(l);
                });
                c.G.notify();
                E.j = 0;
              });
            });
          };
          var Qw = null;
          var Rw = function (a, b, c, d, e, f, g, h) {
            Z.call(this);
            this.slot = a;
            this.Y = b;
            this.A = c;
            this.H = d;
            this.Wa = e;
            this.D = f;
            this.m = g;
            this.C = W(this, h);
          };
          _.M(Rw, Z);
          Rw.prototype.id = function () {
            return 758;
          };
          Rw.prototype.j = function () {
            return $a(this, function b () {
              var c = this,
                d,
                e;
              return ab(b, function (f) {
                if (1 == f.j) {
                  var g,
                    h = v(c.slot, c.m);
                  h &&
                    h.setAttribute(
                      'data-google-query-id',
                      null !== (g = c.C.value) && void 0 !== g ? g : ''
                    );
                  uj(c.Wa, '5', C(c.Y.P[c.slot.getSlotId().getDomId()], 20));
                  d = c.slot.getSlotId();
                  return cb(f, d.dispatchEvent(Mk, 801, { Qb: null, isBackfill: !1 }), 2);
                }
                e = _.t(123);
                if (_.xp(c.A, c.slot.getSlotId())) {
                  var k = c.Y;
                  g = k.O;
                  k = k.P[c.slot.getSlotId().getDomId()];
                  e &&
                    (c.H && gc(c.slot, window, c.m),
                    Ho(c.slot),
                    _.t(450) && Gp(c.A, c.slot.getSlotId()));
                  (e || !pp(c.slot, c.m)) &&
                    (null !== (h = r(k, 10)) && void 0 !== h ? h : r(g, 11)) &&
                    !_.t(390) &&
                    gc(c.slot, window, c.m);
                }
                return cb(f, Xo(c.D, ec, d, { isEmpty: !0, slotContentChanged: e }), 0);
              });
            });
          };
          var Sw = function (a, b, c, d, e) {
            Z.call(this);
            this.M = a;
            this.m = W(this, b);
            this.C = V(this, c);
            this.A = V(this, d);
            this.D = V(this, e);
          };
          _.M(Sw, Z);
          Sw.prototype.id = function () {
            return 721;
          };
          Sw.prototype.j = function () {
            var a = this,
              b,
              c,
              d,
              e = this.m.value,
              f =
                null === (b = null === e || void 0 === e ? void 0 : C(e, 1)) || void 0 === b
                  ? void 0
                  : b.toUpperCase();
            e =
              null === (c = null === e || void 0 === e ? void 0 : C(e, 2)) || void 0 === c
                ? void 0
                : c.toUpperCase();
            if (f && e) {
              var g = this.C.value,
                h = this.A.value,
                k = this.D.value,
                l = k.style.height,
                m = k.style.width,
                n = k.style.display,
                p = k.style.position,
                u = Qh(g.id + '_top', f),
                A = Qh(g.id + '_bottom', e);
              _.zh(A, { position: 'relative', top: 'calc(100vh - 48px)' });
              k.appendChild(u);
              k.appendChild(A);
              _.zh(h, {
                position: 'absolute',
                top: '24px',
                clip: 'rect(0, auto, auto, 0)',
                width: '100vw',
                height: 'calc(100vh - 48px)',
              });
              _.zh(g, { position: 'fixed', top: '0', height: '100vh' });
              _.zh(k, {
                position: 'relative',
                display: (null === (d = this.M.screen.orientation) || void 0 === d ? 0 : d.angle)
                  ? 'none'
                  : 'block',
                width: '100vw',
                height: '100vh',
              });
              pw(this, 722, this.M, 'orientationchange', function () {
                var z;
                (null === (z = a.M.screen.orientation) || void 0 === z ? 0 : z.angle)
                  ? _.zh(k, { display: 'none' })
                  : _.zh(k, { display: 'block' });
              });
              _.R(this, function () {
                _.Jg(u);
                _.Jg(A);
                k.style.position = p;
                k.style.height = l;
                k.style.width = m;
                k.style.display = n;
              });
            }
          };
          var Tw = function (a, b, c, d, e) {
            e = void 0 === e ? pc : e;
            Z.call(this);
            this.A = d;
            this.C = e;
            this.Qa = !1;
            this.inViewPercentage = -1;
            this.m = null;
            this.D = V(this, a);
            this.I = W(this, b);
            this.H = V(this, c);
          };
          _.M(Tw, Z);
          Tw.prototype.id = function () {
            return 783;
          };
          Tw.prototype.j = function () {
            return $a(this, function b () {
              var c = this,
                d,
                e,
                f,
                g,
                h,
                k;
              return ab(b, function (l) {
                if (1 == l.j) {
                  d = c;
                  c.m = c.I.value;
                  if (!_.t(440) || !c.m) return l.return();
                  e = c.H.value;
                  return cb(
                    l,
                    new x.Promise(function (m) {
                      return void fi(e, m);
                    }),
                    2
                  );
                }
                f = c.D.value;
                g = function (m) {
                  m = _.G(m);
                  for (var n = m.next(); !n.done; n = m.next())
                    (d.inViewPercentage = 100 * n.value.intersectionRatio),
                      (d.Qa = 50 <= d.inViewPercentage),
                      d.sendMessage();
                };
                h = J(c.id(), g);
                k = c.C(h);
                k.observe(f);
                pw(c, c.id(), c.A, 'visibilitychange', c.sendMessage.bind(c));
                _.R(c, function () {
                  k.disconnect();
                });
                l.j = 0;
              });
            });
          };
          Tw.prototype.sendMessage = function () {
            Wo(this.m, Ro, {
              Qa: this.Qa && !en(this.A),
              inViewPercentage: this.inViewPercentage,
              ad: _.jj(),
            });
          };
          var Uw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.format = a;
            this.m = b;
            this.D = c;
            this.G = Mr(this);
            this.A = W(this, d);
            this.H = V(this, e);
            this.I = V(this, f);
            this.C = W(this, g);
          };
          _.M(Uw, Z);
          Uw.prototype.id = function () {
            return 683;
          };
          Uw.prototype.j = function () {
            return $a(this, function b () {
              var c = this,
                d,
                e,
                f,
                g,
                h,
                k,
                l,
                m,
                n;
              return ab(b, function (p) {
                if (1 == p.j) {
                  d = c.A.value;
                  if (!d || 5 !== c.format) return p.return();
                  e = c.I.value;
                  f = c.H.value;
                  return cb(p, _.gw.F().load(_.dw), 2);
                }
                g = p.l;
                h = g.md;
                if (c.fa) return p.return();
                k = new _.us(null, 'gpt_exception', _.dk(38));
                l = new h(window, f, e, k, c.m.width > c.m.height, c.D, c.C.value);
                _.$h(c, l);
                l.ab();
                m = P(d, tm, 13);
                for (var u = {}, A = _.G(m), z = A.next(); !z.done; z = A.next())
                  (z = z.value), (u[C(z, 1)] = C(z, 2));
                n = u;
                l.Ha(n);
                c.G.notify();
                p.j = 0;
              });
            });
          };
          var Vw = function () {
            Z.apply(this, arguments);
            this.G = Mr(this);
          };
          _.M(Vw, Z);
          Vw.prototype.id = function () {
            return 663;
          };
          Vw.prototype.j = function () {
            return $a(this, function b () {
              var c = this;
              return ab(b, function (d) {
                if (1 == d.j) {
                  var e = Ww ? 0 : _.w(16),
                    f = _.w(17);
                  e = Math.max(e, f);
                  0 < e && ((Ww = !0), Wv(e));
                  return cb(d, Xw(c), 2);
                }
                c.G.notify();
                d.j = 0;
              });
            });
          };
          var Xw = function (a) {
              return $a(a, function c () {
                var d;
                return ab(c, function (e) {
                  d = _.w(18);
                  0 < d
                    ? (e = cb(e, qc(d), 0))
                    : _.t(169) && Wk(2)
                    ? (e = cb(e, qc(0), 0))
                    : ((e.j = 0), (e = void 0));
                  return e;
                });
              });
            },
            Ww = !1;
          var Yw = function (a, b, c, d, e, f, g, h) {
            Z.call(this);
            this.A = a;
            this.pa = b;
            this.m = null;
            this.G = this.l();
            Ar(this.o, c);
            this.D = V(this, d);
            this.I = V(this, e);
            this.H = W(this, f);
            this.C = W(this, g);
            this.J = W(this, h);
          };
          _.M(Yw, Z);
          Yw.prototype.id = function () {
            return 666;
          };
          Yw.prototype.j = function () {
            var a = this,
              b,
              c = new Un();
            Gr(this.C) && (D(c, 2, this.C.value), D(c, 3, 1));
            this.A && (c = bw([this.A, c]));
            c = aw(c);
            var d = null !== (b = this.J.value) && void 0 !== b ? b : void 0;
            if (null == c || 0 > c || 0 === d) U(this.G, !1);
            else {
              var e = this.D.value,
                f = this.I.value;
              null != f && jp(f, this.pa, c / 100)
                ? (mc(
                    'gpt_er',
                    function (g) {
                      var h;
                      K(g, 'qqid', null !== (h = a.H.value) && void 0 !== h ? h : '');
                    },
                    { Aa: _.w(478) }
                  ),
                  U(this.G, !1))
                : _.t(145)
                ? U(this.G, !1)
                : Zw(this, c, d, e);
            }
          };
          var Zw = function (a, b, c, d) {
            Pa(d)
              ? ((a.m = rc(
                  b + '%',
                  J(291, function (e, f) {
                    e = _.G(e);
                    for (var g = e.next(); !g.done; g = e.next())
                      if (((g = g.value), !(0 >= g.intersectionRatio))) {
                        f.unobserve(g.target);
                        U(a.G, !0);
                        break;
                      }
                  })
                )),
                null != c &&
                  setTimeout(function () {
                    U(a.G, !0);
                    a.m && a.m.disconnect();
                  }, c),
                a.m.observe(d),
                _.R(a, function () {
                  a.m && a.m.disconnect();
                }))
              : U(a.G, !1);
          };
          var $w = function (a, b) {
            Z.call(this);
            this.M = a;
            this.m = b;
            this.G = this.l();
          };
          _.M($w, Z);
          $w.prototype.id = function () {
            return 706;
          };
          $w.prototype.j = function () {
            var a = Ga(this.m, this.M);
            a ? U(this.G, a) : Er(this.G);
          };
          var ax = function (a, b, c, d, e) {
            Z.call(this);
            this.lb = a;
            this.m = b;
            this.A = W(this, c);
            this.C = V(this, d);
            this.D = W(this, e);
          };
          _.M(ax, Z);
          ax.prototype.id = function () {
            return 713;
          };
          ax.prototype.j = function () {
            var a = this.D.value;
            if (!fp(this.A.value) && a && this.m.getOseId()) {
              var b = this.C.value,
                c = lu(this.m),
                d = _.t(440)
                  ? Kd
                  : J(this.id(), function (e, f) {
                      0 <= f && Wo(a, Ro, { Qa: e, inViewPercentage: f });
                      return null;
                    });
              c.registerAdBlock(
                '?eid=' + Lj().join(',') + '&adk=' + this.lb,
                3,
                'ldjh',
                b,
                0,
                0,
                d
              );
              _.R(this, function () {
                try {
                  c.unloadAdBlock(b, !1, _.t(101));
                } catch (e) {}
              });
            }
          };
          var bx = function (a, b, c, d, e) {
            Z.call(this);
            this.slot = a;
            this.pa = b;
            this.m = c;
            this.A = new xg();
            this.G = Mr(this);
            Ar(this.o, d);
            this.C = W(this, e);
          };
          _.M(bx, Z);
          bx.prototype.id = function () {
            return 664;
          };
          bx.prototype.j = function () {
            var a = this;
            if (_.t(20)) {
              var b = this.A.j,
                c = dn(b),
                d = function () {
                  var g = a.C.value;
                  return null != g && jp(g, a.pa, 0);
                },
                e = Fp(this.m, this.slot.getSlotId());
              if (en(b) && c && (0 < e || !d()) && c) {
                var f = pw(this, 324, b, c, function () {
                  en(b) || (f && f(), a.G.notify());
                });
                if (f) return;
              }
            }
            this.G.notify();
          };
          var dx = function (a, b, c, d, e, f, g, h, k) {
            e = void 0 === e ? new Em() : e;
            f = void 0 === f ? '' : f;
            g = void 0 === g ? new jk() : g;
            h = void 0 === h ? new Np() : h;
            k = void 0 === k ? new $r() : k;
            Z.call(this);
            this.slot = a;
            this.Y = b;
            this.I = c;
            this.sa = d;
            this.Ha = e;
            this.qa = f;
            this.Wa = g;
            this.T = h;
            this.xa = k;
            this.oa = [];
            cx(this, function (l) {
              return C(l, 4);
            });
            this.ba = cx(this, function (l) {
              return C(l, 6);
            });
            this.R = cx(this, function (l) {
              return C(l, 7);
            });
            this.ra = cx(this, function (l) {
              return r(l, 8);
            });
            this.D = cx(this, function (l) {
              return C(l, 10);
            });
            cx(this, function (l) {
              return C(l, 15);
            });
            this.C = cx(this, function (l) {
              return C(l, 34);
            });
            this.m = cx(this, function (l) {
              return dg(l, zm, 43);
            });
            this.A = cx(this, function (l) {
              return dg(l, Fm, 41);
            });
            this.H = cx(this, function (l) {
              return r(l, 9);
            });
            this.N = cx(this, function (l) {
              return r(l, 12);
            });
            this.W = cx(this, function (l) {
              return dg(l, ym, 50);
            });
            this.$ = cx(this, function (l) {
              return dg(l, xm, 48);
            });
            this.J = cx(this, function (l) {
              return dg(l, vm, 39);
            });
            this.X = cx(this, function (l) {
              return C(l, 36);
            });
            this.ha = cx(this, function (l) {
              return r(l, 13);
            });
            this.ga = cx(this, function (l) {
              return r(l, 3);
            });
            this.L = cx(this, function (l) {
              return C(l, 49);
            });
            this.ja = cx(this, function (l) {
              return C(l, 29);
            });
            this.ka = cx(this, function (l) {
              return C(l, 30);
            });
            this.ea = cx(this, function (l) {
              return dg(l, Bm, 51);
            });
            this.ia = cx(this, function (l) {
              return r(l, 52);
            });
            this.Z = cx(this, function () {
              return 'encrypted_url';
            });
          };
          _.M(dx, Z);
          var cx = function (a, b) {
            var c = Z.prototype.l.call(a);
            a.oa.push({ G: c, ed: b });
            return c;
          };
          dx.prototype.id = function () {
            return 700;
          };
          dx.prototype.j = function () {
            if (_.t(404)) {
              var a = this.qa;
              var b = this.slot;
              var c = JSON.parse(a);
              c = 'object' === typeof c ? c : null;
              var d = bh(c, Jd);
              if ('string' !== typeof d || null === c || void 0 === c || !c[d])
                throw Error('invalid ad unit path: ' + d);
              if (!b) throw Error('missing slot: ' + d);
              b = c[d];
              if (Array.isArray(b)) a = new Em(b.slice());
              else throw Error('dictionary not an array: ' + a);
              b = C(this.Y.P[this.slot.getSlotId().getDomId()], 20);
              c = C(a, 34) || '';
              this.Wa.j &&
                ((_.H.google_timing_params = _.H.google_timing_params || {}),
                (_.H.google_timing_params['qqid.' + b] = c));
              C(a, 27).forEach(Jj);
              Kj(4);
              ex(this, a);
              fx(this, a);
            } else fx(this, this.Ha);
          };
          var fx = function (a, b) {
              a = _.G(a.oa);
              for (var c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = d.G;
                d = d.ed;
                d = d(b);
                null != d ? U(c, d) : Er(c);
              }
            },
            ex = function (a, b) {
              var c = a.slot.getSlotId(),
                d = a.Y.P[a.slot.getSlotId().getDomId()];
              d &&
                (Jo(a.slot, b),
                c.dispatchEvent(Lk, 800, b),
                null != C(b, 23) &&
                  C(b, 23).forEach(function (e) {
                    Op(a.T, e);
                    var f = a.T,
                      g = a.slot;
                    f.j[e] || (f.j[e] = []);
                    f.j[e].push(g);
                  }),
                P(b, Am, 14).length && bs(a.xa, P(b, Am, 14)[0], a.sa),
                mp(d, dg(b, ym, 50), !!r(b, 11)) &&
                  (_.yp(a.I, c),
                  lp(dg(b, ym, 50)) &&
                    ((b = function () {
                      _.zp(a.I, c);
                    }),
                    _.t(450) ? vp(a.I, a.slot.getSlotId(), b) : a.slot.l.push(b))));
            };
          var gx = function (a, b, c) {
            Z.call(this);
            this.G = this.l();
            W(this, a);
            this.A = V(this, b);
            this.m = V(this, c);
          };
          _.M(gx, Z);
          gx.prototype.id = function () {
            return 762;
          };
          gx.prototype.j = function () {
            U(this.G, 1 === this.m.value.kind ? 5 : this.A.value ? 1 : 0);
          };
          var hx = function (a, b, c, d) {
            Z.call(this);
            this.slotId = a;
            this.Y = b;
            this.m = c;
            Ar(this.o, d);
          };
          _.M(hx, Z);
          hx.prototype.id = function () {
            return 696;
          };
          hx.prototype.j = function () {
            var a = this;
            rw(this, this.m, 'closed', function () {
              return void ix(a);
            });
            _.t(416) ||
              rw(this, this.m, 'canceled', function () {
                return void ix(a);
              });
          };
          var ix = function (a) {
            a.slotId.dispatchEvent(Jk, a.id(), a.Y);
            a.za();
          };
          var jx = function (a, b, c) {
            Z.call(this);
            this.slotId = a;
            this.m = b;
            Ar(this.o, c);
          };
          _.M(jx, Z);
          jx.prototype.id = function () {
            return 697;
          };
          jx.prototype.j = function () {
            var a = this;
            rw(this, this.m, 'completed', function () {
              a.slotId.dispatchEvent(Kk, a.id(), void 0);
              a.za();
            });
          };
          var kx = function (a, b, c) {
            Z.call(this);
            this.slotId = a;
            this.m = b;
            Ar(this.o, c);
          };
          _.M(kx, Z);
          kx.prototype.id = function () {
            return 694;
          };
          kx.prototype.j = function () {
            var a;
            return $a(this, function c () {
              var d = this,
                e,
                f,
                g,
                h,
                k,
                l,
                m;
              return ab(c, function (n) {
                if (1 == n.j)
                  return (
                    (e = d),
                    (f = e.slotId),
                    (g = e.m),
                    (h = new Gb()),
                    (k = h.promise),
                    (l = h.resolve),
                    rw(d, g, 'granted', l),
                    cb(n, k, 2)
                  );
                if (3 != n.j)
                  return (
                    (m = n.l),
                    d.fa
                      ? n.return()
                      : cb(
                          n,
                          f.dispatchEvent(
                            Ik,
                            d.id(),
                            null !== (a = m.payload) && void 0 !== a ? a : null
                          ),
                          3
                        )
                  );
                d.za();
                n.j = 0;
              });
            });
          };
          var lx = { width: '100%', height: '100%', left: '0', top: '0' },
            mx = function (a, b, c, d) {
              Z.call(this);
              this.m = a;
              this.Va = b;
              this.M = c;
              this.G = Mr(this);
              Ar(this.o, d);
            };
          _.M(mx, Z);
          mx.prototype.id = function () {
            return 693;
          };
          mx.prototype.j = function () {
            var a = this,
              b = 0 === th() ? 'rgba(1,1,1,0.5)' : 'white';
            _.zh(
              this.Va,
              _.B(Object, 'assign').call(
                Object,
                {
                  'background-color': b,
                  opacity: '1',
                  position: 'fixed',
                  margin: '0',
                  padding: '0',
                  'z-index': '2147483647',
                  display: 'block',
                },
                lx
              )
            );
            _.R(this, _.Gs(this.M.document, this.M));
            Lg(this.m).postMessage(JSON.stringify({ type: 'rewarded', message: 'visible' }), '*');
            this.M === this.M.top &&
              ((this.M.location.hash = 'goog_rewarded'),
              _.R(this, function () {
                'goog_rewarded' === a.M.location.hash && (a.M.location.hash = '');
              }));
            this.G.notify();
          };
          var nx = function (a, b, c) {
            Z.call(this);
            this.m = a;
            this.M = b;
            Ar(this.o, c);
          };
          _.M(nx, Z);
          nx.prototype.id = function () {
            return 695;
          };
          nx.prototype.j = function () {
            if (this.M === this.M.top)
              var a = Lg(this.m),
                b = pw(this, 503, this.M, 'hashchange', function (c) {
                  he(c.oldURL, '#goog_rewarded') &&
                    (a.postMessage(
                      JSON.stringify({ type: 'rewarded', message: 'back_button' }),
                      '*'
                    ),
                    b());
                });
          };
          var ox = function (a, b) {
            Z.call(this);
            this.slotId = a;
            this.G = Mr(this);
            this.m = V(this, b);
          };
          _.M(ox, Z);
          ox.prototype.id = function () {
            return 692;
          };
          ox.prototype.j = function () {
            var a;
            return $a(this, function c () {
              var d = this,
                e,
                f,
                g,
                h;
              return ab(c, function (k) {
                if (1 == k.j)
                  return (
                    (e = d.m.value),
                    (f = new Gb()),
                    (g = f.promise),
                    (h = f.resolve),
                    d.slotId.dispatchEvent(Hk, d.id(), {
                      makeRewardedVisible: h,
                      payload: null !== (a = e.payload) && void 0 !== a ? a : null,
                    }),
                    cb(k, g, 2)
                  );
                if (d.fa) return k.return();
                d.G.notify();
                d.za();
                k.j = 0;
              });
            });
          };
          var px = { width: '100%', height: '100%', left: '0', top: '0' },
            qx = {
              width: '60%',
              height: '60%',
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
            },
            rx = function (a, b) {
              Z.call(this);
              this.m = a;
              this.A = b;
              this.G = this.l();
            };
          _.M(rx, Z);
          rx.prototype.id = function () {
            return 691;
          };
          rx.prototype.j = function () {
            var a = this;
            _.zh(
              this.m,
              _.B(Object, 'assign').call(Object, { position: 'absolute' }, 0 === th() ? qx : px)
            );
            rw(this, this.A, 'prefetched', function (b) {
              return void U(a.G, b);
            });
          };
          var sx = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.slotId = a;
            this.Y = b;
            this.format = c;
            this.M = d;
            this.m = V(this, e);
            this.C = W(this, f);
            this.A = V(this, g);
          };
          _.M(sx, Z);
          sx.prototype.id = function () {
            return 688;
          };
          sx.prototype.j = function () {
            if (4 === this.format) {
              var a = this.m.value,
                b = this.C.value,
                c = this.A.value;
              if (!b) throw Error('missing message bus input');
              var d = new xb();
              _.$h(this, d);
              var e = new rx(a, b);
              X(d, e);
              e = new ox(this.slotId, e.G);
              X(d, e);
              c = new mx(a, c, this.M, e.G);
              X(d, c);
              X(d, new nx(a, this.M, c.G));
              X(d, new kx(this.slotId, b, e.G));
              X(d, new hx(this.slotId, this.Y, b, e.G));
              X(d, new jx(this.slotId, b, e.G));
              zb(d);
            }
          };
          var tx = function (a, b, c, d, e, f) {
            Z.call(this);
            this.O = a;
            this.P = b;
            this.M = c;
            this.G = this.l();
            this.m = W(this, d);
            this.A = W(this, e);
            this.C = W(this, f);
          };
          _.M(tx, Z);
          tx.prototype.id = function () {
            return 669;
          };
          tx.prototype.j = function () {
            var a;
            if (!(a = Gr(this.A))) {
              a = this.P;
              var b = this.M;
              b = void 0 === b ? window : b;
              a = !!(Oj(3) || (a && Uf(a, 16) && qk('google_range_debug', b)));
            }
            a
              ? U(this.G, !0)
              : ((a = (fp(this.m.value) ? r(this.P, 12) || r(this.O, 13) : !1) || !!this.C.value),
                U(this.G, !!a));
          };
          var ux = function (a, b, c, d, e, f) {
            Z.call(this);
            this.O = a;
            this.da = b;
            this.G = this.l();
            this.A = V(this, c);
            this.m = W(this, d);
            W(this, e);
            this.C = W(this, f);
          };
          _.M(ux, Z);
          ux.prototype.id = function () {
            return 719;
          };
          ux.prototype.j = function () {
            var a = this.m.value,
              b = this.A.value;
            if (1 === b) {
              if (
                ((a = this.C.value),
                (b = new Mn()),
                (a = D(b, 3, a)),
                r(no([a, dg(this.O, Mn, 18), dg(this.da, Mn, 13)]), 3))
              ) {
                U(this.G, Nt);
                return;
              }
            } else {
              if ((a = 0 === b && a))
                (a = oh()),
                  (a = !(
                    !a['allow-top-navigation-by-user-activation'] ||
                    !a['allow-popups-to-escape-sandbox']
                  ));
              if (a) {
                U(this.G, Nt);
                return;
              }
            }
            Er(this.G);
          };
          var vx = function (a, b, c, d, e, f, g, h, k) {
            Z.call(this);
            this.L = a;
            this.da = b;
            this.J = c;
            this.window = d;
            this.D = this.l();
            this.A = this.l();
            this.C = this.l();
            this.m = Oj(3).split(',');
            this.H = _.Pj(481);
            this.Ma = Uf(b, 16) ? dg(b, Jn, 16) : null;
            this.I = pk('google_range_debug', this.window);
            this.N = W(this, e);
            this.X = W(this, f);
            this.T = W(this, g);
            this.R = V(this, h);
            this.W = V(this, k);
          };
          _.M(vx, Z);
          vx.prototype.id = function () {
            return 681;
          };
          vx.prototype.j = function () {
            var a;
            if ((a = !!(this.m.length || (this.Ma && this.I)))) {
              var b;
              b: if (this.m.length) {
                if (
                  this.H.length &&
                  ((a = this.L.split('/')), !_.B(this.H, 'includes').call(this.H, a[a.length - 1]))
                ) {
                  a = !1;
                  break b;
                }
                a = !0;
              } else a = !1;
              var c = a;
              a = c ? wx(this) : null;
              if (c && a) {
                c = this.W.value;
                var d = ep(c.parentElement);
                d =
                  null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b
                    ? b
                    : 0;
                b = 'p' === this.m[0];
                var e = Number(this.m[0]);
                if (
                  (b =
                    'f' === this.m[0] ? this.J : e && 0 < e ? e : b ? Math.min(d, this.J) : null)
                ) {
                  e = a.width;
                  var f = a.height,
                    g = this.m[1],
                    h = Number(g);
                  e = 'ratio' === g && e ? Math.floor((f / e) * b) : h && 0 < h ? f * h : f;
                  xx(
                    this,
                    b,
                    e,
                    {
                      kind: 0,
                      ua: yx(b, e, '<p>Requested size:' + a.width + 'x' + a.height + '</p>'),
                    },
                    b <= d ? 1 : 2,
                    c
                  );
                  a = !0;
                } else a = !1;
              } else a = !1;
              if (!a)
                a: if (this.Ma && this.I) {
                  a = Iu(this.Ma, this.window);
                  c = Ju(this.Ma, this.window);
                  d = Ku(this.Ma);
                  b = Lu(this.Ma);
                  switch (this.I) {
                    case 'max':
                      e = a;
                      f = c;
                      break;
                    case 'min':
                      e = d;
                      f = b;
                      break;
                    case 'banner':
                      e = a;
                      f = 90 > c ? c : 90 < b ? b : 90;
                      break;
                    case 'skyscraper':
                      e = 90 > a ? a : 90 < d ? d : 90;
                      f = c;
                      break;
                    default:
                      a = !1;
                      break a;
                  }
                  xx(this, e, f, {
                    kind: 0,
                    ua: yx(
                      e,
                      f,
                      '<p>Minimum size:' +
                        d +
                        'x' +
                        b +
                        '</p><p>Maximum size:' +
                        (a +
                          'x' +
                          c +
                          "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);</script></div>")
                    ),
                  });
                  a = !0;
                } else a = !1;
            }
            if (!a) {
              a = this.X.value;
              if (null == a) throw Error("Missing 'width'.");
              c = this.T.value;
              if (null == c) throw Error("Missing 'height'.");
              xx(this, a, c, this.R.value);
            }
          };
          var wx = function (a) {
              a = Ua(a.da)[0];
              return Array.isArray(a) &&
                a.every(function (b) {
                  return 'number' === typeof b;
                })
                ? new _.wg(a[0], a[1])
                : null;
            },
            yx = function (a, b, c) {
              return (
                '<html><body style="height:' +
                (b -
                  2 +
                  'px;width:' +
                  (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) +
                c +
                ('<p>Rendered size:' + a + 'x' + b + '</p></body></html>')
              );
            },
            xx = function (a, b, c, d, e, f) {
              e = void 0 === e ? a.N.value : e;
              U(a.A, new _.wg(b, c));
              U(a.D, d);
              null == e ? Er(a.C) : U(a.C, e);
              f && _.Gi(f, 'opacity', 0.5);
            };
          var zx = function (a, b, c, d, e, f, g, h, k) {
            Z.call(this);
            this.slot = a;
            this.Va = b;
            this.J = c;
            this.D = d;
            this.I = e;
            this.m = f;
            this.H = g;
            this.G = this.l();
            this.C = W(this, h);
            this.A = W(this, k);
          };
          _.M(zx, Z);
          zx.prototype.id = function () {
            return 673;
          };
          zx.prototype.j = function () {
            return $a(this, function b () {
              var c = this,
                d,
                e,
                f;
              return ab(b, function (g) {
                if (1 == g.j) {
                  if (null != c.Va) {
                    Ax(c, c.Va);
                    U(c.G, c.Va);
                    g.j = 0;
                    return;
                  }
                  if (Ao(c.m)) {
                    U(c.G, Bx(c));
                    g.j = 0;
                    return;
                  }
                  d = c.slot.getSlotId();
                  return cb(g, Ek(d, Gk), 4);
                }
                e = g.l;
                f = e.detail;
                if (c.fa) return g.return();
                Ax(c, f);
                U(c.G, f);
                g.j = 0;
              });
            });
          };
          var Bx = function (a) {
              var b = _.Ig(document, 'INS');
              b.id = a.J;
              _.zh(b, { display: 'none' });
              a.I.documentElement.appendChild(b);
              var c = function () {
                return void _.Jg(b);
              };
              2 === a.m || 3 === a.m
                ? _.t(450)
                  ? vp(a.H, a.slot.getSlotId(), c)
                  : a.slot.l.push(c)
                : _.R(a, c);
              return b;
            },
            Ax = function (a, b) {
              if (2 !== a.m && 3 !== a.m) {
                var c = _.t(437)
                  ? [].concat(_.Ub(b.childNodes))
                  : _.B(Array, 'from').call(Array, b.childNodes);
                c = _.G(c);
                for (var d = c.next(); !d.done; d = c.next())
                  (d = d.value), 1 === d.nodeType && d.id !== a.D && _.Jg(d);
                cc(b, !0);
                _.t(442) &&
                  Gr(a.C) &&
                  Gr(a.A) &&
                  ((c = a.A.value),
                  (b.style.minWidth = Pv(b.style.minWidth, a.C.value)),
                  (b.style.minHeight = Pv(b.style.minHeight, c)));
              }
            };
          var Cx = function (a) {
            Z.call(this);
            this.G = this.l();
            this.m = V(this, a);
          };
          _.M(Cx, Z);
          Cx.prototype.id = function () {
            return 676;
          };
          Cx.prototype.j = function () {
            var a = Ra(this.m.value);
            U(this.G, a);
          };
          var Dx = function (a, b) {
            Z.call(this);
            this.M = a;
            this.G = Mr(this);
            this.m = W(this, b);
          };
          _.M(Dx, Z);
          Dx.prototype.id = function () {
            return 807;
          };
          Dx.prototype.j = function () {
            if (_.t(468) && this.m.value) {
              var a = Jm(this.M).M;
              if (a && a === window.top) {
                var b = Mm(a),
                  c = b.url;
                b.Xb &&
                  (au(new $t(a, c)) || this.U(Error('Cannot create top window proxy frame.')));
              }
            }
            this.G.notify();
          };
          var Ex = function (a, b, c) {
            Z.call(this);
            var d = this;
            this.slot = a;
            this.I = b;
            this.H = c;
            this.G = this.l();
            this.m = null;
            this.D = !1;
            this.A = _.Ld(function () {
              d.slot.getSlotId().dispatchEvent(Ok, d.id(), void 0);
            });
            this.C = Md(function () {
              var e = d.inViewPercentage;
              Xo(d.I, Qo, d.slot.getSlotId(), e);
            }, 200);
          };
          _.M(Ex, Z);
          Ex.prototype.id = function () {
            return 714;
          };
          Ex.prototype.j = function () {
            var a = this,
              b = new Uo(),
              c = Zo(b, Ro, this.id(), function (d) {
                var e = d.Qa,
                  f = d.inViewPercentage;
                d = d.ad;
                _.t(440)
                  ? (Fx(a, e, d),
                    e &&
                      _.B(Number, 'isFinite').call(Number, f) &&
                      ((e = Math.floor(f)),
                      (0 < e || null != a.inViewPercentage) &&
                        a.inViewPercentage !== e &&
                        ((a.inViewPercentage = e), a.C())))
                  : (e && a.A(),
                    void 0 === f ||
                      isNaN(f) ||
                      ((f = Math.floor(f)),
                      a.inViewPercentage !== f && ((a.inViewPercentage = f), a.C())));
              });
            _.R(this, c);
            U(this.G, b);
          };
          var Fx = function (a, b, c) {
            a.D ||
              (b
                ? null == a.m
                  ? ((a.m = c),
                    setTimeout(function () {
                      Fx(a, !en(a.H), _.jj());
                    }, 1000))
                  : 1000 <= c - a.m && ((a.D = !0), a.A())
                : (a.m = null));
          };
          var Gx = function (
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            k,
            l,
            m,
            n,
            p,
            u,
            A,
            z,
            E,
            F,
            I,
            O,
            Aa,
            bb,
            ed,
            ge,
            Hh,
            wA,
            xA,
            yA,
            zA,
            AA,
            BA,
            CA,
            DA
          ) {
            Z.call(this);
            this.slot = a;
            this.A = b;
            this.Y = c;
            this.ua = d;
            this.oa = e;
            this.pa = f;
            this.ga = g;
            this.$ = h;
            this.Wa = k;
            this.R = l;
            this.C = m;
            this.M = n;
            this.m = p;
            this.H = u;
            this.D = A;
            this.J = z;
            this.W = E;
            this.sa = F;
            this.xa = I;
            this.ea = O;
            this.X = Aa;
            this.N = bb;
            this.I = ed;
            this.qa = ge;
            this.ka = Hh;
            this.T = wA;
            this.ra = xA;
            this.L = yA;
            this.ia = zA;
            this.ba = AA;
            this.ja = BA;
            this.ha = CA;
            this.Z = V(this, DA);
          };
          _.M(Gx, Z);
          Gx.prototype.id = function () {
            return 757;
          };
          Gx.prototype.j = function () {
            var a = new xb();
            _.$h(this, a);
            var b = this.slot.getSlotId();
            if (this.Z.value || qk('google_norender')) {
              var c = new Rw(this.slot, this.Y, this.A, this.oa, this.Wa, this.R, this.C, this.H);
              X(a, c);
            } else {
              c = this.Y;
              var d = c.O,
                e = c.P;
              c = this.slot.getSlotId().getDomId();
              var f = e[c],
                g = Rn(f),
                h = new $w(this.M.top, this.ga);
              X(a, h);
              var k = new Vw();
              X(a, k);
              e = new Mw(g, this.pa.height, this.L, this.N);
              X(a, e);
              c = new zx(
                this.slot,
                v(this.slot, this.C),
                c,
                op(this.slot.getSlotId()),
                this.C,
                g,
                this.A,
                this.X,
                e.G
              );
              X(a, c);
              var l = new Kw({ kind: 0, ua: this.ua }, this.m, this.D, this.J, this.W);
              X(a, l);
              var m = new tx(d, f, this.M, this.m, this.D, this.W);
              X(a, m);
              e = new Nw(this.slot, d, g, this.C, this.A, c.G, m.G);
              X(a, e);
              var n = new Cx(e.G);
              X(a, n);
              k = new bx(this.slot, this.pa, this.A, k.G, n.G);
              X(a, k);
              k = new Yw(dg(d, Un, 5), this.pa, k.G, e.G, n.G, this.H, this.sa, this.xa);
              X(a, k);
              n = new vx(
                this.slot.getSlotId().getAdUnitPath(),
                f,
                this.pa.width,
                this.M,
                this.ea,
                this.X,
                this.N,
                l.m,
                c.G
              );
              X(a, n);
              var p = new Ow(this.M, c.G);
              X(a, p);
              p = new Cw(this.C, this.slot, f, this.pa, this.I, c.G, e.G, n.A, n.C, p.G, this.H);
              X(a, p);
              l = new gx(this.m, m.G, l.m);
              X(a, l);
              d = new ux(d, f, l.G, this.m, this.J, this.qa);
              X(a, d);
              f = new Dx(this.M, this.ha);
              X(a, f);
              d = new Bw(
                this.slot,
                this.A,
                this.Y,
                this.M,
                n.D,
                k.G,
                c.G,
                e.G,
                n.A,
                l.G,
                this.m,
                this.D,
                this.H,
                this.I,
                d.G,
                this.J,
                this.ka,
                this.T,
                this.ra,
                p.G,
                f.G
              );
              X(a, d);
              f = new Pw(this.A, g, this.slot, this.M, this.L, d.m, c.G);
              X(a, f);
              h = new Uw(g, this.pa, Zj(b.getAdUnitPath()) == _.w(449), this.ia, d.m, c.G, h.G);
              X(a, h);
              h = new Iw(this.M, this.m, d.m, d.C, d.J);
              X(a, h);
              h = new Lw(this.M, b, th(), this.ba, d.m);
              X(a, h);
              b = new sx(b, this.Y, g, this.M, d.m, d.D, c.G);
              X(a, b);
              b = new Ex(this.slot, this.R, this.C);
              X(a, b);
              g = new Tw(d.m, b.G, d.A, this.C);
              X(a, g);
              g = new ax(Ep(this.A, this.slot.getSlotId()), this.$, this.m, d.m, b.G);
              X(a, g);
              g = new Ew(this.H, this.I, this.D, this.m, this.T, d.m, e.G, d.C, d.I, d.A);
              X(a, g);
              b = new Dw(b.G, this.D, this.m, d.H);
              X(a, b);
              c = new Sw(this.M, this.ja, d.m, e.G, c.G);
              X(a, c);
            }
            zb(a);
          };
          var Hx = function () {
              this.j = new x.Map();
            },
            Ix = function (a, b) {
              var c;
              b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.za(), a.j.delete(b));
            },
            Jx = function (a, b, c, d, e, f, g, h, k) {
              var l = b.getSlotId();
              Ix(a, l);
              var m = new xb(),
                n = Im(!0, window),
                p = e.O,
                u = e.P[l.getDomId()];
              f = new dx(b, e, c, k, f);
              X(m, f);
              var A = new $w(window.top, k);
              X(m, A);
              var z = new Vw();
              X(m, z);
              var E = new Mw(Rn(u), n.height, f.J, f.ba);
              X(m, E);
              k = new zx(b, v(b, h), l.getDomId(), op(l), h, Rn(u), c, f.R, E.G);
              X(m, k);
              var F = new Kw({ kind: 0, ua: g }, f.m, f.A, f.H, f.N);
              X(m, F);
              var I = new tx(p, u, window, f.m, f.A, f.N);
              X(m, I);
              g = new Nw(b, p, Rn(u), h, c, k.G, I.G);
              X(m, g);
              var O = new Cx(g.G);
              X(m, O);
              z = new bx(b, n, c, z.G, O.G);
              X(m, z);
              z = new Yw(dg(p, Un, 5), n, z.G, g.G, O.G, f.C, f.ja, f.ka);
              X(m, z);
              E = new vx(l.getAdUnitPath(), u, n.width, window, f.X, f.R, E.G, F.m, k.G);
              X(m, E);
              F = new Ow(window, k.G);
              X(m, F);
              n = new Cw(h, b, u, n, f.D, k.G, g.G, E.A, E.C, F.G, f.C);
              X(m, n);
              I = new gx(f.m, I.G, E.D);
              X(m, I);
              p = new ux(p, u, I.G, f.m, f.H, f.ha);
              X(m, p);
              F = new Dx(window, f.Z);
              X(m, F);
              p = new Bw(
                b,
                c,
                e,
                window,
                E.D,
                z.G,
                k.G,
                g.G,
                E.A,
                I.G,
                f.m,
                f.A,
                f.C,
                f.D,
                p.G,
                f.H,
                f.ga,
                f.L,
                f.ia,
                n.G,
                F.G
              );
              X(m, p);
              n = new Pw(c, Rn(u), b, window, f.J, p.m, k.G);
              X(m, n);
              A = new Uw(Rn(u), e.pa, Zj(l.getAdUnitPath()) == _.w(449), f.$, p.m, k.G, A.G);
              X(m, A);
              A = new Iw(window, f.m, p.m, p.C, p.J);
              X(m, A);
              A = new Lw(window, l, th(), f.W, p.m);
              X(m, A);
              e = new sx(l, e, Rn(u), window, p.m, p.D, k.G);
              X(m, e);
              e = new Ex(b, Uo.F(), h);
              X(m, e);
              h = new Tw(p.m, e.G, p.A, h);
              X(m, h);
              d = new ax(Ep(c, l), d, f.m, p.m, e.G);
              X(m, d);
              d = new Ew(f.C, f.D, f.A, f.m, f.L, p.m, g.G, p.C, p.I, p.A);
              X(m, d);
              d = new Dw(e.G, f.A, f.m, p.H);
              X(m, d);
              f = new Sw(window, f.ea, p.m, g.G, k.G);
              X(m, f);
              a.j.set(l, m);
              _.R(b, function () {
                Ix(a, l);
              });
              _.t(336) &&
                (_.t(450)
                  ? up(c, l, function () {
                      Ix(a, l);
                    })
                  : Go(b, function () {
                      Ix(a, l);
                    }));
              zb(m);
            },
            Kx = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
              var u = b.getSlotId();
              Ix(a, u);
              l = new xb();
              k = new dx(b, e, c, h, new Em(), k, jk.F(), n, p);
              X(l, k);
              d = new Gx(
                b,
                c,
                e,
                f,
                m,
                Im(!0, window),
                h,
                d,
                jk.F(),
                Uo.F(),
                g,
                window,
                k.m,
                k.C,
                k.A,
                k.H,
                k.N,
                k.ja,
                k.ka,
                k.X,
                k.R,
                k.ba,
                k.D,
                k.ha,
                k.ga,
                k.L,
                k.ia,
                k.J,
                k.$,
                k.W,
                k.ea,
                k.Z,
                k.ra
              );
              X(l, d);
              zb(l);
              a.j.set(u, l);
              _.R(b, function () {
                Ix(a, u);
              });
              _.t(336) &&
                (_.t(450)
                  ? up(c, u, function () {
                      Ix(a, u);
                    })
                  : Go(b, function () {
                      Ix(a, u);
                    }));
            };
          var Lx = function (a, b, c, d, e) {
            Z.call(this);
            this.D = a;
            this.H = b;
            this.C = c;
            this.Y = d;
            this.A = e;
            this.m = this.l();
          };
          _.M(Lx, Z);
          Lx.prototype.id = function () {
            return 810;
          };
          Lx.prototype.j = function () {
            var a = this;
            _.t(475) || Er(this.m);
            var b = this.D.j;
            this.H
              ? 0 === b.length &&
                (_.t(476) ||
                  (b = nq(oq.F()).filter(function (d) {
                    return Ap(a.C, d.getSlotId());
                  })))
              : 0 === b.length
              ? U(this.m, [])
              : 1 < b.length && (b = [b[0]]);
            var c = !!on(window);
            b = b.filter(function (d) {
              var e = a.Y.P[d.getSlotId().getDomId()];
              return c && 4 == Rn(e) ? (a.A.K(dm(String(d.getSlotId().getAdUnitPath()))), !1) : !0;
            });
            30 < b.length &&
              (this.A.K(Zl('30', String(b.length), String(b.length - 30))), (b = b.slice(0, 30)));
            U(this.m, b);
          };
          var Mx = function (a, b, c, d, e, f, g, h, k, l, m) {
            Z.call(this);
            this.A = a;
            this.L = b;
            this.D = c;
            this.I = d;
            this.H = e;
            this.Y = f;
            this.N = g;
            this.R = h;
            this.m = k;
            this.J = l;
            this.C = this.l();
            this.T = W(this, m);
          };
          _.M(Mx, Z);
          Mx.prototype.id = function () {
            return 785;
          };
          Mx.prototype.j = function () {
            var a, b, c;
            return $a(this, function e () {
              var f = this,
                g,
                h,
                k;
              return ab(e, function (l) {
                if (1 == l.j) return cb(l, x.Promise.race([f.J, Rh()]), 2);
                g = l.l;
                Kj(2);
                h = !_.t(200);
                var m = f.A,
                  n = Lj(),
                  p = f.N,
                  u = f.R,
                  A = null !== (a = f.m.Da) && void 0 !== a ? a : NaN,
                  z = null !== (b = f.m.Ea) && void 0 !== b ? b : NaN,
                  E = null !== (c = f.m.ya) && void 0 !== c ? c : NaN,
                  F = h ? ls() : '',
                  I = h ? ms() : '',
                  O = h ? ns() : '';
                m.C = n;
                m.B = p;
                m.o = u;
                m.A = F;
                m.D = I;
                m.V = O;
                m.Da = A;
                m.Ea = z;
                m.ya = E;
                m.H = void 0 === g ? null : g;
                k = new Uu(f.L, f.D, f.I, f.A, f.H, f.Y, !1, f.T.value);
                U(f.C, lk(kk(Xu(k))));
                l.j = 0;
              });
            });
          };
          var Nx = function (a) {
            Z.call(this);
            this.M = a;
            this.m = this.l();
          };
          _.M(Nx, Z);
          Nx.prototype.id = function () {
            return 802;
          };
          Nx.prototype.j = function () {
            var a = this,
              b = _.w(462);
            if (this.fa || 0 >= b) U(this.m, '');
            else {
              b = function (d) {
                yk(a.id(), d);
                U(a.m, '');
              };
              try {
                var c = Jb(this.M);
                c
                  ? c
                      .then(function (d) {
                        return void U(a.m, d);
                      })
                      .catch(b)
                  : U(this.m, '');
              } catch (d) {
                b(d);
              }
            }
          };
          var Ox = null,
            Px = !1,
            Qx = !1,
            Rx = !1,
            Sx = function (a) {
              a = void 0 === a ? _.H : a;
              if (!Qx) {
                var b = new sk('gpt_pubconsole_loaded');
                yc(b);
                K(b, 'param', String(uc(a)));
                K(b, 'api', String(Rx));
                uk(b, 1);
                b = 'https:' + _.dk(228) + 'loader.js';
                Wg(a.document, Ei(b));
                Qx = !0;
              }
            },
            Tx = J(94, function (a) {
              a = void 0 === a ? _.H : a;
              wc()._pubconsole_disable_ || (null !== uc(a) && Sx(a));
            }),
            Ux = function (a, b) {
              !wc()._pubconsole_disable_ &&
                (a = Ja('google_pubconsole', a, b)) &&
                ((a = a.split('|')), 0 < a.length && ('1' == a[0] || '0' == a[0]) && Sx());
            };
          'complete' === _.H.document.readyState
            ? Tx()
            : Tj(_.H, function () {
                Tx();
              });
          vc(
            'disablePublisherConsole',
            S(93, function () {
              wc()._pubconsole_disable_ = !0;
            })
          );
          vc(
            'onPubConsoleJsLoad',
            S(731, function () {
              Px && (wc().console.openConsole(Ox), (Ox = null), (Px = !1));
            })
          );
          vc(
            'openConsole',
            S(732, function (a) {
              a = void 0 === a ? '' : a;
              Rx = !0;
              wc && wc().console ? wc().console.openConsole(a) : (a && (Ox = a), (Px = !0), Sx());
            })
          );
          var Vx = function (a, b, c) {
              const $___old_154dfadd3a71291a = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                ),
                $___old_67f3e05166ba9603 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                );
              try {
                if ($___old_154dfadd3a71291a)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_afd3abb015d4d981.XMLHttpRequest
                  ));
                if ($___old_67f3e05166ba9603)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_afd3abb015d4d981.XMLHttpRequest
                  ));
                return function () {
                  this.url = a;
                  this.l = b;
                  this.withCredentials = c;
                  this.o = 0;
                  this.B = !1;
                  this.j = new XMLHttpRequest();
                }.apply(this, arguments);
              } finally {
                if ($___old_154dfadd3a71291a)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_154dfadd3a71291a
                  ));
                if ($___old_67f3e05166ba9603)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_67f3e05166ba9603
                  ));
              }
            },
            Yx = function (a) {
              a.j.open('GET', a.url);
              a.j.withCredentials = a.withCredentials;
              (_.t(312) || Oj(1923)) && du(a.j);
              a.j.onreadystatechange = function () {
                Wx(a, !1);
              };
              a.j.onload = function () {
                Wx(a, !0);
              };
              a.j.onerror = function () {
                Xx(a.l, Error('XHR error'));
              };
              a.j.send();
            },
            Wx = function (a, b) {
              try {
                if (3 === a.j.readyState || 4 === a.j.readyState)
                  if (300 <= a.j.status || (200 > a.j.status && _.t(445)))
                    a.B || Xx(a.l, Error('xhr_err-' + a.j.status)), (a.B = !0);
                  else {
                    var c = a.j.responseText.substr(a.o);
                    if (c) {
                      var d = a.l;
                      if (c)
                        if (1 !== d.j && 2 !== d.j)
                          Xx(d, Error('state err: (' + ([d.j, d.l.length].join() + ')')));
                        else {
                          d.l && (c = d.l + c);
                          var e = 0,
                            f = !1;
                          do {
                            var g = c.indexOf('\n', e);
                            f = -1 !== g;
                            if (!f) break;
                            var h = d,
                              k = c.substr(e, g - e);
                            if (1 === h.j) (h.B = k), ++h.o, (h.j = 2);
                            else {
                              try {
                                h.m(h.o, h.B, Lh(k)), (h.B = '');
                              } catch (m) {}
                              h.j = 1;
                            }
                            e = g + 1;
                          } while (f && e < c.length);
                          d.l = c.substr(e);
                        }
                    }
                    a.o = a.j.responseText.length;
                    if (b && 4 === a.j.readyState) {
                      var l = a.l;
                      1 !== l.j || l.l
                        ? Xx(l, Error('state err (' + ([l.j, l.l.length].join() + ')')))
                        : ((l.j = 3), l.C());
                    }
                  }
              } catch (m) {
                Xx(a.l, m);
              }
            };
          var Zx = function (a, b, c) {
              this.m = a;
              this.A = b;
              this.C = c;
              this.B = '';
              this.o = -1;
              this.j = 1;
              this.l = '';
            },
            Xx = function (a, b) {
              a.j = 4;
              try {
                a.A(b);
              } catch (c) {}
            };
          var $x = function () {
              if (Fe()) {
                if (_.t(109) && 0 <= se(He(), 12)) return !1;
                if (0 <= se(He(), 11)) return !0;
              } else if (De() && 0 <= se(He(), 65)) return !0;
              return !1;
            },
            ay = function (a) {
              if (_.t(200)) a();
              else {
                _.t(1911) && (Zr.enable_mustu_exp_behavior = !0);
                if (!_.t(220)) {
                  var b = _.dk(150);
                  ks();
                  es.test(b) && !fs.test(b) && (js[1] = b);
                }
                $x() ? qs(J(759, a)) : (qs(null), a());
              }
            },
            by = function (a) {
              var b = function (c) {
                qh(_.H.top, 'googlefcLoaded')
                  ? c()
                  : setTimeout(function () {
                      b(J(678, c));
                    }, 20);
              };
              Th() ? b(a) : a();
            },
            cy = function (a) {
              var b = Th();
              _.H.googlefc &&
                !b &&
                mc(
                  'gpt_fc_has_namespace_but_no_iframes',
                  function (c) {
                    yc(c);
                    K(c, 'networkId', a);
                  },
                  { Aa: 1 }
                );
            },
            dy = function (a, b) {
              var c = _.w(490);
              0 > c && (c = -1);
              a = new Zs(_.Gg(a), c);
              at(a)
                ? ((c = _.dk(255)),
                  _.t(467)
                    ? c
                      ? b(c)
                      : (_.dk(256).push(b),
                        void 0 === c &&
                          (ek(255, null),
                          a.addEventListener(function (d) {
                            ct(d)
                              ? (ek(255, d),
                                _.dk(256).forEach(function (e) {
                                  e(d);
                                }),
                                ek(256, []))
                              : ek(255, null);
                          })))
                    : (La.F().info(im()),
                      dt(
                        a,
                        J(661, function (d) {
                          b(d);
                        })
                      )))
                : b(null);
            },
            ey = function (a, b) {
              a = new Is(_.Gg(a));
              if (Ks(a)) {
                var c = J(660, function (d) {
                  d && 'string' === typeof d.uspString ? b(d.uspString) : b(null);
                });
                La.F().info(hm());
                Ms(a, c);
              } else b(null);
            },
            fy = function (a, b, c, d) {
              var e = 1000 * _.w(47, 1),
                f = function (h) {
                  return Math.max(0, Math.round((e - (a - h)) / 1000));
                },
                g = b.getSlotId();
              d = d.get(g) || null;
              if (null === d) return 0;
              switch (_.w(b.isBackfill() ? 52 : 46)) {
                case 0:
                  return f(d);
                case 1:
                  return (b = Cp(c, g)) ? f(b) : -1;
                case 2:
                  return (b = Dp(c, g)) ? f(b) : -1;
              }
              return 0;
            },
            gy = function (a, b) {
              a.length && ((a = a[0]), uj(jk.F(), '3', C(b.P[a.getSlotId().getDomId()], 20)));
            },
            hy = function (a) {
              a = a instanceof Error ? a : Error();
              a.message = a.message || 'strm_err';
              zk(289, a, !0);
            },
            iy = function (a, b) {
              if (_.t(177)) return !1;
              a = r(a, 11);
              null == a && (a = r(b, 10));
              return !!a;
            },
            jy = null,
            ky = null,
            ly = function () {
              var a = sp();
              var b = (ky = ky || new $r());
              this.j = a;
              this.B = b;
              this.J = Np.F();
              this.o = new x.Map();
              this.l = new x.Map();
              this.V = new x.Map();
              this.I = Vb(this.I);
              this.D = J(291, this.D);
              this.X = qk('google_nofetch');
              this.Z = qk('google_norender');
              this.A = NaN;
              this.C = new ku();
              this.$ = 0;
              this.U = Ob(_.H);
              this.T = {};
              this.R = this.N = NaN;
              this.H = {};
              this.m = {};
              this.L = new Hx();
              this.W = _.Ld(function () {
                return void performance.mark('gpt-first-ad-request');
              });
            },
            xu = function () {
              return (jy = jy || new ly());
            },
            ny = function (a, b, c, d, e, f) {
              var g = d.slot;
              d = d.da;
              var h = g.getSlotId();
              if (_.xp(a.j, h)) {
                if (e) {
                  var k = {};
                  k[h.getDomId()] = d;
                  my(a, [g], f, k);
                }
                if (e || !pp(g, c))
                  (a = r(d, 10)), null == a && (a = r(f, 11)), a && !_.t(390) && gc(g, b, c);
              }
            },
            oy = function (a, b, c, d, e) {
              var f = b.getSlotId();
              if ((e = e.P[f.getDomId()])) {
                Jo(b, d);
                f.dispatchEvent(Lk, 800, d);
                null != C(d, 23) &&
                  C(d, 23).forEach(function (k) {
                    Op(a.J, k);
                    var l = a.J;
                    l.j[k] || (l.j[k] = []);
                    l.j[k].push(b);
                  });
                if (P(d, Am, 14).length)
                  if (_.t(456)) {
                    var g = Hp(
                      a.j,
                      window.document,
                      c,
                      window.navigator.cookieEnabled,
                      window.location.host
                    );
                    if (g) {
                      var h = P(d, Am, 14)[0];
                      D(h, 4, g);
                      bs(a.B, h, c);
                    }
                  } else bs(a.B, P(d, Am, 14)[0], c);
                mp(e, dg(d, ym, 50), !!r(d, 11)) &&
                  (_.yp(a.j, f),
                  lp(dg(d, ym, 50)) &&
                    ((c = function () {
                      _.zp(a.j, f);
                    }),
                    _.t(450) ? vp(a.j, f, c) : b.l.push(c)));
              }
            };
          ly.prototype.I = function (a, b) {
            var c = this;
            b = void 0 === b ? !1 : b;
            return _.H.IntersectionObserver
              ? new _.H.IntersectionObserver(
                  function (d, e) {
                    return c.D(d, e, b);
                  },
                  { rootMargin: a }
                )
              : new bc(
                  function (d, e) {
                    return c.D(d, e, b);
                  },
                  { rootMargin: a }
                );
          };
          ly.prototype.D = function (a, b, c) {
            var d = this;
            c = void 0 === c ? !1 : c;
            a.forEach(function (e) {
              if (c || !(0 >= e.intersectionRatio)) {
                b.unobserve(e.target);
                e = e.target.id;
                var f = d.o.get(e);
                f && (f.Ob(), d.o.delete(e));
              }
            });
          };
          var py = function (a, b) {
              if (!b.length) return [];
              var c = Zj(b[0].getSlotId().getAdUnitPath());
              return nq(oq.F())
                .map(function (d) {
                  Zj(d.getSlotId().getAdUnitPath()) != c || _.B(b, 'includes').call(b, d)
                    ? (d = '')
                    : ((d = d.getSlotId()), (d = ((d = a.j.j.get(d)) && d.bc) || ''));
                  return d;
                })
                .filter(function (d) {
                  return !!d;
                });
            },
            qy = function (a, b, c, d) {
              var e = new nu();
              e.L = 'ldjh';
              d = gp(d.O) ? 'fifs' : 'fif';
              e.J = d;
              e.m = a.U;
              e.Ba = c;
              e.j = b;
              return e;
            },
            ry = function (a, b, c, d) {
              var e = { Ba: 1, Da: a.N, Ea: a.R, ya: a.A },
                f = a.j,
                g = a.B,
                h = gp(d.O),
                k = a.C.getOseId(),
                l = py(a, b.j);
              a = new xb();
              var m = new Nx(window);
              X(a, m);
              var n = new Lx(b, h, f, d, La.F());
              X(a, n);
              b = new Mx(b, h, f, g, c, d, k, l, e, m.m.promise, n.m);
              X(a, b);
              zb(a);
              return b.C.promise;
            },
            sy = function (a, b) {
              var c = !_.t(200),
                d = Lj(),
                e = a.C.getOseId(),
                f = py(a, b.j),
                g = a.N,
                h = a.R;
              a = a.A;
              var k = c ? ls() : '',
                l = c ? ms() : '';
              c = c ? ns() : '';
              b.C = d;
              b.B = e;
              b.o = f;
              b.A = k;
              b.D = l;
              b.V = c;
              b.Da = g;
              b.Ea = h;
              b.ya = a;
              b.H = null;
            },
            wy = function (a, b, c, d) {
              var e = J(750, function () {
                return ty(a, b, c, d);
              });
              return _.t(491)
                ? uy(a, b)
                    .then(
                      J(812, function (f) {
                        b.j = f;
                        return vy(a, b, d);
                      })
                    )
                    .then(e)
                : vy(a, b, d).then(e);
            },
            uy = function (a, b) {
              var c = dn(document);
              if (!c || !en(document)) return x.Promise.resolve(b.j);
              var d = b.j.slice(),
                e = new Gb(),
                f = function () {
                  en(document) || (e.resolve(d), _.sb(document, c, f));
                };
              _.y(document, c, f);
              b = {};
              for (var g = _.G(d), h = g.next(); !h.done; b = { Cb: b.Cb }, h = g.next())
                (b.Cb = h.value),
                  up(
                    a.j,
                    b.Cb.getSlotId(),
                    (function (k) {
                      return function () {
                        da(d, k.Cb);
                        d.length || e.resolve([]);
                      };
                    })(b)
                  );
              return e.promise;
            },
            vy = function (a, b, c) {
              var d = b.j,
                e = c.O,
                f = c.P;
              c = dg(e, Un, 5) || new Un();
              c = $v(c);
              if (null == c) return x.Promise.resolve();
              var g = Math.max(c / 100, 0);
              if (
                !d.every(function (m) {
                  var n = f[m.getSlotId().getDomId()],
                    p = v(m);
                  if ((p = Pa(p)))
                    (p = window),
                      (m = { slot: m, da: n }),
                      (n = !!r(e, 15)),
                      (m = kp(m, p.document, n)) && -12245933 != m.y
                        ? ((p = Im(!0, p)), (p = jp(m, p, g)))
                        : (p = !0),
                      (p = !p);
                  return p;
                })
              )
                return x.Promise.resolve();
              c = a.I(c + '%');
              var h = new Gb();
              b = {};
              d = _.G(d);
              for (var k = d.next(); !k.done; b = { jb: b.jb, Db: b.Db }, k = d.next())
                if (((k = k.value), (b.Db = k.getSlotId().getDomId()), (b.jb = v(k)), b.jb)) {
                  a.o.set(b.Db, {
                    Ob: function () {
                      return void h.resolve();
                    },
                    ub: c,
                  });
                  c.observe(b.jb);
                  var l = (function (m) {
                    return function () {
                      xy(a, m.jb, m.Db);
                    };
                  })(b);
                  _.t(450) ? up(a.j, k.getSlotId(), l) : Go(k, l);
                }
              return h.promise;
            },
            ty = function (a, b, c, d) {
              var e = b.j;
              if (e.length)
                return (
                  a.o.get(e[0].getSlotId().getDomId()) &&
                    e.forEach(function (f) {
                      var g = f.getSlotId().getDomId();
                      f = v(f);
                      xy(a, f, g);
                    }),
                  _.t(441)
                    ? ry(a, b, c, d).then(function (f) {
                        return yy(a, f, b, c, d);
                      })
                    : zy(a, b, c, d)
                );
            },
            zy = function (a, b, c, d) {
              Kj(2);
              sy(a, b);
              var e = Xu(new Uu(gp(d.O), a.j, a.B, b, c, d));
              yy(a, e, b, c, d);
            },
            yy = function (a, b, c, d, e) {
              var f = ++a.$;
              c.l = f;
              a.T[f] = c.j;
              Ay(a, b, c, d, e);
              b = c.j;
              e = (e = dg(e.O, Mn, 18)) && Uf(e, 4) ? r(e, 4) : _.t(242);
              ow(mw.F(), window, ip());
              e || ow(mw.F(), window);
              e = _.jj();
              c = {};
              b = _.G(b);
              for (d = b.next(); !d.done; c = { Xa: c.Xa }, d = b.next())
                (c.Xa = d.value),
                  a.V.has(c.Xa.getSlotId()) ||
                    _.R(
                      c.Xa,
                      (function (g) {
                        return function () {
                          return void a.V.delete(g.Xa.getSlotId());
                        };
                      })(c)
                    ),
                  a.V.set(c.Xa.getSlotId(), e);
            },
            Dy = function (a, b, c, d) {
              b = b.filter(function (e) {
                var f = e.getSlotId(),
                  g = a.l.get(f);
                g
                  ? 0 != _.w(46) && _.B(Object, 'assign').call(Object, g, { options: c, Y: d })
                  : (a.l.set(f, { Y: d, options: c, Rc: null }),
                    _.R(f, function () {
                      a.l.delete(f);
                    }));
                var h = function () {
                  By(a, e);
                };
                _.t(450) ? up(a.j, f, h) : Go(e, h);
                return !g;
              });
              b.length && Cy(a, b, c, d);
            },
            Cy = function (a, b, c, d) {
              var e = _.jj();
              b = oa(b, function (f) {
                return fy(e, f, a.j, a.V);
              });
              _.Yb(b, function (f, g) {
                if ('0' === g) Ey(a, f, c, d);
                else if ('-1' === g) Fy(a, f);
                else {
                  var h = parseInt(g, 10);
                  f.forEach(function (k) {
                    La.F().K(cm(String(h), k.getSlotId().getAdUnitPath()));
                  });
                  Ey(a, f, c, d, 1000 * h);
                }
              });
            },
            Fy = function (a, b) {
              var c = {};
              b = _.G(b);
              for (
                var d = b.next();
                !d.done;
                c = { Fa: c.Fa, Ya: c.Ya, kb: c.kb, gb: c.gb, Ab: c.Ab }, d = b.next()
              ) {
                c.Fa = d.value;
                c.Ab = _.w(c.Fa.isBackfill() ? 52 : 46);
                c.Ya = [];
                c.kb = null;
                c.gb = (function (e) {
                  return function (f) {
                    var g = a.l.get(e.Fa.getSlotId());
                    try {
                      Ey(a, [e.Fa], g.options, g.Y, f ? 0 : 1000 * _.w(47, 1));
                    } finally {
                      f = _.G(e.Ya);
                      for (g = f.next(); !g.done; g = f.next()) (g = g.value), g();
                      e.Ya.length = 0;
                      null !== e.kb && clearTimeout(e.kb);
                    }
                  };
                })(c);
                if ((d = 1000 * _.w(c.Fa.isBackfill() ? 56 : 55)))
                  a.l.get(c.Fa.getSlotId()),
                    (c.kb = setTimeout(
                      (function (e) {
                        return function () {
                          return e.gb(!0);
                        };
                      })(c),
                      d
                    ));
                switch (c.Ab) {
                  case 2:
                    c.Ya.push(
                      Dk(
                        c.Fa.getSlotId(),
                        Ok,
                        (function (e) {
                          return function () {
                            return void e.gb();
                          };
                        })(c)
                      )
                    );
                  case 1:
                    c.Ya.push(
                      dc(
                        ec,
                        c.Fa.getSlotId(),
                        684,
                        (function (e) {
                          return function (f) {
                            f = f.isEmpty;
                            (2 !== e.Ab || f) && e.gb();
                          };
                        })(c)
                      )
                    );
                    break;
                  default:
                    return;
                }
              }
            },
            By = function (a, b) {
              var c = a.l.get(b.getSlotId());
              c && (_.t(318) && _.H.clearTimeout(c.Rc), a.l.delete(b.getSlotId()));
            },
            Ey = function (a, b, c, d, e) {
              e = ((void 0 === e ? 0 : e) || 0) - (_.jj() - _.jj());
              if (0 < e) {
                e = setTimeout(
                  J(375, function () {
                    Gy(a, b, c, d);
                  }),
                  e
                );
                for (var f = _.G(b), g = f.next(); !g.done; g = f.next())
                  if ((g = a.l.get(g.value.getSlotId()))) g.Rc = e;
              } else Gy(a, b, c, d);
            },
            Gy = function (a, b, c, d) {
              var e = d.O,
                f = d.P;
              b.forEach(function (k) {
                By(a, k);
              });
              var g = oa(b, function (k) {
                k = f[k.getSlotId().getDomId()];
                return 0 != Ua(k).length || Uf(k, 16);
              });
              if (g[!1]) {
                var h = _.G(g[!1]);
                for (b = h.next(); !b.done; b = h.next())
                  (b = b.value),
                    ny(a, window, document, { slot: b, da: d.P[b.getSlotId().getDomId()] }, !0, e);
              }
              if ((b = g[!0]))
                if (
                  ((e = c.Ba),
                  b.forEach(function (k) {
                    var l = k.getSlotId();
                    Ap(a.j, l) && (Ho(k), _.t(450) && Gp(a.j, k.getSlotId()));
                  }),
                  void 0 !== c.ya && (a.A = c.ya),
                  (a.N = c.Da || NaN),
                  (a.R = c.Ea || NaN),
                  !a.X)
                )
                  if (gp(d.O))
                    (c = Zj(b[0].getSlotId().getAdUnitPath())), (c = Hy(b, c, d)), Iy(a, d, c, e);
                  else
                    for (c = _.G(b), b = c.next(); !b.done; b = c.next()) Iy(a, d, [[b.value]], e);
            },
            my = function (a, b, c, d) {
              var e = void 0 === e ? window : e;
              if (!_.t(336))
                for (var f = _.G(b), g = f.next(); !g.done; g = f.next())
                  Ix(a.L, g.value.getSlotId());
              b = _.G(b);
              for (g = b.next(); !g.done; g = b.next())
                (g = g.value),
                  iy(d[g.getSlotId().getDomId()], c) && gc(g, e, e.document),
                  Ho(g),
                  _.t(450) && Gp(a.j, g.getSlotId());
              return !0;
            },
            xy = function (a, b, c) {
              if (b) {
                var d = a.o.get(c);
                d && (d.ub.unobserve(b), a.o.delete(c));
              }
            },
            Jy = function (a, b, c, d) {
              d = void 0 === d ? document : d;
              var e,
                f,
                g,
                h = 0,
                k = d,
                l = function () {
                  h++;
                  if (3 === h) {
                    var u = f,
                      A = e,
                      z = g,
                      E = new Yh(),
                      F = Zn(c.O);
                    F = F && r(F, 9);
                    if (_.t(396)) D(E, 5, !1);
                    else if (u) {
                      if ((F = !F)) {
                        var I = void 0 === I ? !1 : I;
                        if (ct(u))
                          if (
                            !1 === u.gdprApplies ||
                            'tcunavailable' === u.tcString ||
                            (void 0 === u.gdprApplies && !I) ||
                            'string' !== typeof u.tcString ||
                            !u.tcString.length
                          )
                            var O = !0;
                          else {
                            O = void 0 === O ? '755' : O;
                            b: {
                              if (
                                u.publisher &&
                                u.publisher.restrictions &&
                                ((I = u.publisher.restrictions['1']), void 0 !== I)
                              ) {
                                I = I[void 0 === O ? '755' : O];
                                break b;
                              }
                              I = void 0;
                            }
                            0 === I
                              ? (O = !1)
                              : u.purpose && u.vendor
                              ? ((I = u.vendor.consents),
                                (O = !(!I || !I[void 0 === O ? '755' : O])) &&
                                u.purposeOneTreatment &&
                                'DE' === u.publisherCC
                                  ? (O = !0)
                                  : O && ((O = u.purpose.consents), (O = !(!O || !O['1']))))
                              : (O = !0);
                          }
                        else O = !1;
                        F = O;
                      }
                      O = D(E, 5, F);
                      O = D(O, 2, u.tcString);
                      O = D(O, 4, u.addtlConsent || '');
                      D(O, 7, u.internalErrorState);
                      void 0 !== u.gdprApplies && D(E, 3, u.gdprApplies);
                      'tcunavailable' === u.tcString
                        ? La.F().info(jm('failed'))
                        : La.F().info(jm('succeeded'));
                    } else D(E, 5, !F);
                    A && D(E, 1, A);
                    null !== z && D(E, 6, z);
                    b(E);
                  }
                };
              cy(a);
              var m = function () {
                dy(k, function (u) {
                  f = u;
                  l();
                });
                ey(k, function (u) {
                  e = u;
                  l();
                });
              };
              if (_.t(367)) {
                var n = new Ts(_.Gg(d)),
                  p = _.dk(221);
                d = n.j ? Ws(n, 'loaded') : x.Promise.resolve();
                d.then(function (u) {
                  return Xs(n, u, a, p);
                }).then(function (u) {
                  g = u;
                  l();
                });
                d.then(m);
              } else
                by(function () {
                  var u = Zn(c.O),
                    A = _.dk(221);
                  u = !(!u || !r(u, 8));
                  Xh(A, a, J(451, l), u);
                  m();
                });
            },
            Ly = function (a, b, c, d) {
              d = void 0 === d ? document : d;
              var e = b.j.length ? Zj(b.j[0].getSlotId().getAdUnitPath()) : '';
              Jy(
                e,
                function (f) {
                  r(f, 5)
                    ? ay(function () {
                        Ky(a, b, f, c, d);
                      })
                    : Ky(a, b, f, c, d);
                  Ux(f, d);
                },
                c,
                d
              );
            },
            Ky = function (a, b, c, d, e) {
              e = void 0 === e ? document : e;
              var f = Ga(c);
              Qp.F().j = f;
              var g = d.O,
                h = d.P;
              b.j = b.j.filter(function (m) {
                var n = m.getSlotId().getDomId();
                (n = 5 !== Rn(h[n])) ||
                  ((m = Zj(m.getSlotId().getAdUnitPath()) != _.w(449)),
                  (n = 0 == yn(window, m, f)));
                return n;
              });
              if (b.j.length) {
                for (var k = _.G(b.j), l = k.next(); !l.done; l = k.next()) Vv(e, l.value, d);
                wy(a, b, c, d).then(
                  J(751, function () {
                    for (var m = _.G(b.j), n = m.next(); !n.done; n = m.next())
                      (n = n.value), My(0, n, g, h[n.getSlotId().getDomId()]);
                  })
                );
              }
            },
            Hy = function (a, b, c) {
              var d = [];
              a = oa(a, function (e) {
                return Zj(e.getSlotId().getAdUnitPath());
              });
              _.Yb(a, function (e, f) {
                e = _.t(482) ? Ny(e, c) : e;
                f == b ? d.unshift(e) : d.push(e);
              });
              return d;
            },
            Iy = function (a, b, c, d) {
              var e = document;
              if (c) {
                c = _.G(c);
                for (var f = c.next(); !f.done; f = c.next())
                  (f = qy(a, f.value, d, b)), Ly(a, f, b, e);
              }
            },
            My = function (a, b, c, d) {
              var e = void 0 === e ? window : e;
              iy(d, c) && !b.j && gc(b, e, e.document);
            },
            Ny = function (a, b) {
              var c = b.O,
                d = b.P,
                e = function (g) {
                  g = d[g.getSlotId().getDomId()];
                  return 0 == Rn(g);
                },
                f = [];
              a.forEach(function (g) {
                if (e(g)) {
                  var h = d[g.getSlotId().getDomId()];
                  h = kp({ slot: g, da: h }, document, !!r(c, 15)) || {};
                  f.push({ tc: void 0 === h.y ? Infinity : h.y, slot: g });
                }
              });
              ma(f, function (g, h) {
                return ka(g.tc, h.tc);
              });
              return a.map(function (g) {
                return e(g) ? f.shift().slot : g;
              });
            },
            Ay = function (a, b, c, d, e) {
              var f = void 0 === f ? _.H.document : f;
              var g = void 0 === g ? hy : g;
              var h = c.j;
              a.m[c.l] = h.slice();
              var k = J(646, function (p, u, A) {
                  var z = f;
                  z = void 0 === z ? document : z;
                  _.t(404) ? Oy(a, c, d, e, p, u, A, z) : Py(a, c, d, e, p, u, A, z);
                }),
                l = J(647, function () {
                  for (var p = c.l, u = a.m[p] || [], A = 0; A < u.length; ++A)
                    if (u[A]) {
                      var z = new Em();
                      z = '{"empty":' + D(z, 8, !0).m() + '}';
                      var E = a,
                        F = c,
                        I = d,
                        O = e,
                        Aa = A,
                        bb = void 0;
                      bb = void 0 === bb ? document : bb;
                      _.t(404) ? Oy(E, F, I, O, Aa, z, '', bb) : Py(E, F, I, O, Aa, z, '', bb);
                    }
                  delete a.m[p];
                  Pb();
                });
              g = J(289, g);
              b = lk(kk(b));
              gy(h, e);
              k = new Zx(k, g, l);
              var m, n;
              l =
                null != (n = null == (m = Zn(e.O)) ? void 0 : r(m, 9)) && n
                  ? !_.t(448)
                  : !_.t(385) || !!r(d, 5);
              Yx(new Vx(b, k, void 0 === l ? !0 : l));
              _.t(469) && a.W();
              h = _.G(h);
              for (m = h.next(); !m.done; m = h.next())
                (m = m.value),
                  (n = C(e.P[m.getSlotId().getDomId()], 20)),
                  (k = J(643, Qy(a, m, b, e))),
                  _.t(469)
                    ? m.getSlotId().dispatchEvent(Pk, 808, { Zc: k, vb: n })
                    : (Xo(Uo.F(), Po, m.getSlotId(), n), (m.C = k));
            },
            Qy = function (a, b, c, d) {
              if (gp(d.O)) {
                b = qy(a, [b], 1, d);
                sy(a, b);
                var e = new Uu(_.t(364), a.j, a.B, b, new Yh(), d, !0);
                return Sa(function () {
                  return kk(Xu(e));
                });
              }
              return function () {
                return c;
              };
            },
            Py = function (a, b, c, d, e, f, g, h) {
              h = void 0 === h ? document : h;
              var k = b.l,
                l = a.m[k] || [];
              b = l[e];
              l[e] = null;
              try {
                var m = JSON.parse(f);
                var n = _.ha(m) ? m : null;
              } catch (u) {
                n = null;
              }
              n = (e = n) && bh(e, Jd);
              e = e && e[n];
              e = 'string' === typeof n && Array.isArray(e) ? new Em(e.slice()) : null;
              if (b)
                if (
                  ((n = C(d.P[b.getSlotId().getDomId()], 20)),
                  a.H[k] || ((a.H[k] = !0), uj(jk.F(), '4', n)),
                  e)
                ) {
                  f = jk.F();
                  k = C(e, 34) || '';
                  f.j &&
                    ((_.H.google_timing_params = _.H.google_timing_params || {}),
                    (_.H.google_timing_params['qqid.' + n] = k));
                  f = C(e, 27);
                  f = _.G(f);
                  for (k = f.next(); !k.done; k = f.next()) Jj(k.value);
                  Kj(4);
                  oy(a, b, c, e, d);
                  if (!b.fa)
                    if (r(e, 8) || a.Z) {
                      var p;
                      c = h;
                      g = null != (p = C(e, 34)) ? p : '';
                      (p = v(b, c)) && p.setAttribute('data-google-query-id', g);
                      uj(jk.F(), '5', C(d.P[b.getSlotId().getDomId()], 20));
                      b.getSlotId().dispatchEvent(Mk, 801, { Qb: null, isBackfill: !1 });
                      p = _.t(123);
                      ny(a, _.H, c, { slot: b, da: d.P[b.getSlotId().getDomId()] }, p, d.O);
                      Xo(Uo.F(), ec, b.getSlotId(), { isEmpty: !0, slotContentChanged: p });
                    } else Jx(a.L, b, a.j, a.C, d, e, g, h, c);
                } else yk(646, Error('invalid response: ' + f));
              else yk(646, Error('missing slot: ' + n));
            },
            Oy = function (a, b, c, d, e, f, g, h) {
              h = void 0 === h ? document : h;
              var k = b.l,
                l = a.m[k] || [];
              b = l[e];
              l[e] = null;
              b
                ? (a.H[k] ||
                    ((a.H[k] = !0), uj(jk.F(), '4', C(d.P[b.getSlotId().getDomId()], 20))),
                  b.fa ||
                    ((e = h),
                    (h = d.O),
                    (h = iy(d.P[b.getSlotId().getDomId()], h)),
                    Kx(
                      a.L,
                      b,
                      a.j,
                      a.C,
                      d,
                      g,
                      e,
                      c,
                      f,
                      C(d.P[b.getSlotId().getDomId()], 20),
                      h,
                      a.J,
                      a.B
                    )))
                : yk(646, Error('missing slot: ' + f));
            };
          var Ry = function (a, b, c) {
              this.j = a;
              this.l = b;
              this.options = c;
            },
            Sy = function (a) {
              this.pubads = a;
              this.j = new x.Set();
              this.l = {};
            },
            Ty = function (a, b, c) {
              if (r(b.O, 4)) return [];
              if (
                !r(b.O, 6) ||
                (b.P[c.getSlotId().getDomId()] && r(b.P[c.getSlotId().getDomId()], 17))
              )
                return (
                  a.j.add(c),
                  _.R(c, function () {
                    return void a.j.delete(c);
                  }),
                  [c]
                );
              b = [];
              for (
                var d = {}, e = _.G(a.pubads.l), f = e.next();
                !f.done;
                d = { Na: d.Na }, f = e.next()
              )
                (d.Na = f.value),
                  a.j.has(d.Na) ||
                    (a.j.add(d.Na),
                    _.R(
                      d.Na,
                      (function (g) {
                        return function () {
                          return void a.j.delete(g.Na);
                        };
                      })(d)
                    ),
                    b.push(d.Na));
              return b;
            };
          Sy.prototype.display = function (a, b) {
            var c = Ty(this, a, b);
            Uy(this.pubads, c, a, { Ba: 1 });
            a = b.getSlotId().getAdUnitPath();
            if ((b = this.l[a]) && !_.t(319)) {
              b = _.G(b);
              for (c = b.next(); !c.done; c = b.next())
                (c = c.value), Uy(this.pubads, c.j, c.l, c.options);
              delete this.l[a];
            }
          };
          var Wy = function (a, b, c, d) {
              var e = c[0],
                f = e ? e.getSlotId().getDomId() : '';
              if (_.t(319))
                Vy(a.pubads, Gl(f), e),
                  hq(
                    a.pubads,
                    J(690, function () {
                      for (
                        var h = {}, k = _.G(c), l = k.next();
                        !l.done;
                        h = { hb: h.hb }, l = k.next()
                      )
                        (h.hb = l.value),
                          a.j.add(h.hb),
                          _.R(
                            h.hb,
                            (function (m) {
                              return function () {
                                return void a.j.delete(m.hb);
                              };
                            })(h)
                          );
                      Uy(a.pubads, c, b, d);
                    })
                  );
              else if (a.pubads.j) {
                e = {};
                f = _.G(c);
                for (var g = f.next(); !g.done; e = { ib: e.ib }, g = f.next())
                  (e.ib = g.value),
                    a.j.add(e.ib),
                    _.R(
                      e.ib,
                      (function (h) {
                        return function () {
                          return void a.j.delete(h.ib);
                        };
                      })(e)
                    );
                Uy(a.pubads, c, b, d);
              } else
                c.length && r(b.O, 6)
                  ? (Vy(a.pubads, Gl(f), e),
                    (e = c[0].getSlotId().getAdUnitPath()),
                    (f = a.l[e] || []),
                    f.push(new Ry(c, b, d)),
                    (a.l[e] = f))
                  : Vy(a.pubads, El(f), e);
            },
            Xy = function () {
              gq.call(this);
              this.A = this.D = !1;
              _.t(84) &&
                _.t(87) &&
                (Lv || (window.performance && ph(window.performance.now) && (Lv = new Ov())));
              this.o = new Sy(this);
            };
          _.M(Xy, gq);
          _.q = Xy.prototype;
          _.q.La = function () {
            return new Au(this, Fo);
          };
          _.q.display = function (a, b, c, d) {
            c = void 0 === c ? '' : c;
            d = void 0 === d ? '' : d;
            var e = '';
            if (c)
              if (_.ha(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id;
              } else e = c;
            Ip(this);
            b = zq(a, b, e);
            a = b.slot;
            b = b.Ja;
            a &&
              b &&
              (f && !e && (f.id = a.getSlotId().getDomId()),
              this.Ca(a, b),
              D(b, 7, d),
              Dq(f || a.getSlotId().getDomId()));
          };
          _.q.Vb = function () {
            const $___old_f48e8db415bb5cfd = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_f48e8db415bb5cfd)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_b317e19f866a2da7.localStorage
                ));
              return function () {
                var a = bo.F().j;
                if (r(a, 6) || _.t(320)) {
                  Yy(this, a);
                  for (var b = _.G(this.l), c = b.next(); !c.done; c = b.next()) Zy(this, c.value);
                }
                wu(this, a);
                this.A && zu(this);
                if (!(_.dk(221) || _.t(453) || (_.t(446) && !_.dk(254)))) {
                  a = wc().encryptedSignalSource || (wc().encryptedSignalSource = {});
                  b = null;
                  try {
                    b = window.localStorage;
                  } catch (d) {}
                  Ab(a, _.Pj(1918), b, function (d, e) {
                    yk(d, e);
                    window.console && window.console.error && window.console.error(e);
                  });
                }
                Ac();
              }.apply(this, arguments);
            } finally {
              if ($___old_f48e8db415bb5cfd)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_f48e8db415bb5cfd));
            }
          };
          _.q.aa = function () {
            return 'publisher_ads';
          };
          _.q.Ca = function (a, b) {
            var c = this;
            r(b, 17) || Zy(this, a);
            var d = a.getSlotId(),
              e = C(b, 20);
            Wo(Uo.F(), So, { slotId: d, vb: e });
            Ek(d, Hk).then(
              J(701, function (f) {
                var g = f.detail;
                f = g.makeRewardedVisible;
                g = g.payload;
                return void iq(c, 'rewardedSlotReady', new Yp(Jc(a), c.aa(), f, g));
              })
            );
            Ek(d, Ik).then(
              J(702, function (f) {
                f = f.detail;
                return void iq(c, 'rewardedSlotGranted', new Zp(Jc(a), c.aa(), f));
              })
            );
            Ek(d, Jk).then(
              J(703, function (f) {
                f = f.detail;
                _.t(416) || iq(c, 'rewardedSlotCanceled', new $p(Jc(a), c.aa()));
                iq(c, 'rewardedSlotClosed', new aq(Jc(a), c.aa()));
                my(xu(), [a], f.O, f.P);
              })
            );
            Ek(d, Kk).then(
              J(704, function () {
                return void iq(c, 'rewardedSlotCompleted', new bq(Jc(a), c.aa()));
              })
            );
            e = function () {
              return iq(c, 'slotRequested', new cq(Jc(a), c.aa()));
            };
            _.t(469) ? Dk(d, Pk, e) : _.R(a, dc(Po, d, 705, e));
            _.R(
              a,
              dc(ec, d, 708, function (f) {
                var g = f.size,
                  h = f.slotContentChanged,
                  k = f.isEmpty;
                f = new Tp(Jc(a), 'publisher_ads');
                k && (f.isEmpty = k);
                h && (f.slotContentChanged = h);
                h = _.t(472) ? Jc(a).getResponseInformation() : Bo(a);
                g &&
                  h &&
                  ((f.size = [g.width, g.height]),
                  (f.sourceAgnosticCreativeId = h.sourceAgnosticCreativeId),
                  (f.sourceAgnosticLineItemId = h.sourceAgnosticLineItemId),
                  (f.isBackfill = h.isBackfill),
                  (f.creativeId = h.creativeId),
                  (f.lineItemId = h.lineItemId),
                  (f.creativeTemplateId = h.creativeTemplateId),
                  (f.advertiserId = h.advertiserId),
                  (f.campaignId = h.campaignId),
                  (f.yieldGroupIds = h.yieldGroupIds),
                  (f.companyIds = h.companyIds));
                iq(c, 'slotRenderEnded', f);
              })
            );
            Dk(d, Lk, function () {
              return void iq(c, 'slotResponseReceived', new dq(Jc(a), c.aa()));
            });
            Dk(
              d,
              Nk,
              J(710, function () {
                return void iq(c, 'slotOnload', new Wp(Jc(a), c.aa()));
              })
            );
            Dk(d, Ok, function () {
              return iq(c, 'impressionViewable', new Up(Jc(a), c.aa()));
            });
            _.R(
              a,
              dc(Qo, d, 716, function (f) {
                return iq(c, 'slotVisibilityChanged', new Vp(Jc(a), c.aa(), f));
              })
            );
            Dk(d, Fk, function () {
              var f = bo.F().j;
              f = hp(f, eo());
              Dy(xu(), [a], { Ba: 2 }, f);
            });
            gq.prototype.Ca.call(this, a, b);
          };
          _.q.jc = function (a, b) {
            Ip(this);
            Yy(this, a.O);
            Zy(this, b);
            this.log.info(yl());
            var c = r(a.O, 6);
            !Ap(sp(), b.getSlotId()) ||
              (!c && b.j) ||
              (c && (xu(), (c = v(b, document)) && b.getSlotId().dispatchEvent(Gk, 778, c)),
              r(a.O, 4) && My(xu(), b, a.O, a.P[b.getSlotId().getDomId()]),
              this.o.display(a, b));
          };
          var Zy = function (a, b) {
              a.j && wp(sp(), b);
              if (a.j) {
                var c = b.getSlotId(),
                  d = fo(bo.F(), c.getDomId());
                if (d) {
                  d = P(d, Bn, 3);
                  d = _.G(d);
                  for (var e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    e = C(f, 2);
                    if ((f = Cn(f)) && e && e.length) {
                      var g;
                      if ((g = Ap(sp(), c))) {
                        var h = sp();
                        g = e[0];
                        g = (h = h.j.get(c)) && Lo(h.rc, f, g);
                      }
                      g || a.log.K(Al(f, e[0], c.getAdUnitPath()), b);
                    }
                  }
                }
              }
            },
            Yy = function (a, b) {
              if ((_.t(148) || !a.D) && a.j) {
                a.D = !0;
                b = P(b, Bn, 14);
                b = _.G(b);
                for (var c = b.next(); !c.done; c = b.next()) {
                  var d = c.value;
                  c = C(d, 2);
                  if ((d = Cn(d)) && c && c.length) {
                    var e = sp();
                    Lo(e.l, d, c[0]) || a.log.K(zl(d, c[0]));
                  }
                }
              }
            },
            uu = function (a, b, c) {
              if ('string' !== typeof b || 0 >= b.length || !c)
                return (
                  a.log.K(Zk('PubAdsService.definePassback', [b, c])), { slot: null, Ja: null }
                );
              c = zq(b, c, void 0, !0);
              b = c.slot;
              c = c.Ja;
              if (!b || !c) return { slot: null, Ja: null };
              D(c, 17, !0);
              return { slot: new kw(b, a, c), Ja: c };
            },
            lw = function (a, b, c) {
              Ip(a);
              wp(sp(), c);
              a.o.display(b, c);
            },
            vu = function (a, b, c, d) {
              var e = $y(a, c);
              if (e.length) {
                if (_.t(104)) {
                  Ip(a);
                  c = _.G(c);
                  for (var f = c.next(); !f.done; f = c.next()) {
                    f = f.value;
                    var g = b.P[f.getSlotId().getDomId()];
                    a.Ca(f, g);
                  }
                }
                Wy(a.o, b, e, d || { Ba: 2 });
              } else
                a.log.K(
                  Zk(
                    'PubAdsService.refresh',
                    [c].filter(function (h) {
                      return void 0 !== h;
                    })
                  )
                );
            },
            Uy = function (a, b, c, d) {
              a.log.info(Hl());
              if (az(b, d, c) && 1 !== d.Ba)
                for (a = _.G(b), b = a.next(); !b.done; b = a.next())
                  (b = b.value.getSlotId()),
                    (d = C(c.P[b.getDomId()], 20)),
                    Wo(Uo.F(), To, { slotId: b, vb: d });
            },
            az = function (a, b, c) {
              a = a.filter(function (e) {
                return Ap(sp(), e.getSlotId());
              });
              var d = a.filter(function (e) {
                return _.xp(sp(), e.getSlotId());
              });
              if (!d.length) return null;
              Dy(xu(), d, b, c);
              return a;
            },
            yu = function (a, b) {
              return a.j ? { vid: C(b, 22) || '', cmsid: C(b, 23) || '' } : null;
            },
            wu = function (a, b) {
              r(b, 21) && a.j && (xu().A = Nh());
            },
            bz = function (a, b, c, d) {
              a = b
                ? $y(a, b)
                : nq(oq.F()).filter(function (g) {
                    return Ap(sp(), g.getSlotId());
                  });
              b = _.G(a);
              for (var e = b.next(); !e.done; e = b.next()) {
                e = e.value;
                var f = e.getSlotId();
                _.t(450) ? tp(sp(), f) : Io(e);
                Xo(Uo.F(), fc, f, f);
              }
              return my(xu(), a, c, d);
            };
          Xy.prototype.clear = function (a, b, c) {
            if (!this.j) return (a = c ? c[0] : void 0), this.log.K(Fl(), a), !1;
            var d = null;
            if (c && ((d = $y(this, c)), 0 == d.length))
              return (
                this.log.K(
                  Zk(
                    'PubAdsService.clear',
                    [c].filter(function (e) {
                      return void 0 !== e;
                    })
                  )
                ),
                !1
              );
            this.log.info(Il());
            return bz(this, d, a, b);
          };
          Xy.prototype.getVersion = function () {
            if (this.j) return Mb();
          };
          var $y = function (a, b) {
              var c = [];
              if (!Array.isArray(b)) return c;
              b.forEach(function (d, e) {
                (d = Xj(d, Fo)) && !d.fa ? c.push(d) : a.log.K(Ll(String(e)));
              });
              return c;
            },
            zu = function (a) {
              a.A = !0;
              if (a.j) {
                sp().B = !0;
                a = new sk('gpt_markAsAmp', nk(), _.dk(23));
                yc(
                  a,
                  nq(oq.F()).filter(function (e) {
                    return Ap(sp(), e.getSlotId());
                  })
                );
                try {
                  var b = vi(_.H);
                  b && K(a, 'ntype', b);
                  var c = _.H.location.ancestorOrigins;
                  b = [];
                  if (null != c)
                    if (_.t(437)) for (var d = 0; d < c.length; d++) b.push(c[d]);
                    else b = _.B(Array, 'from').call(Array, c);
                  K(
                    a,
                    'ost',
                    b
                      .map(function (e) {
                        return ((/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(e) || [])[1] || e).substr(
                          0,
                          20
                        );
                      })
                      .slice(0, 10)
                      .join()
                  );
                } catch (e) {}
                uk(a);
              }
            };
          Xy.prototype.destroySlots = function (a) {
            var b = gq.prototype.destroySlots.call(this, a);
            if (!b.length) return b;
            if (this.j) {
              var c = bo.F().j;
              bz(this, a, c, eo());
            }
            return b;
          };
          var Vy = function (a, b, c) {
            a.log.K(b, c);
          };
          vd(Xy);
          var kz = function (a, b) {
            Jp.call(this, a);
            var c = this;
            this.set = S(576, function (d, e) {
              a.set(d, e);
              return c;
            });
            this.get = S(577, function (d) {
              return a.get(d);
            });
            this.getAttributeKeys = S(578, function () {
              return $g(a.A);
            });
            this.display = S(558, function (d, e, f, g) {
              return a.display(d, e, void 0 === f ? '' : f, void 0 === g ? '' : g);
            });
            this.notifyUnfilledSlots = S(69, function (d) {
              a.Ua && cz(a, dz(a, d));
            });
            this.isRoadblockingSupported = S(111, function () {
              return ez(a);
            });
            this.refreshAllSlots = S(60, function () {
              a.Ua && cz(a);
            });
            this.setVideoSession = S(61, function (d, e, f) {
              a.I = d;
              a.D = e;
              a.H = f;
            });
            this.getDisplayAdsCorrelator = S(62, function (d) {
              return fz(a, void 0 === d ? '' : d);
            });
            this.getVideoStreamCorrelator = S(63, function () {
              if (Xy.F().j) {
                var d = xu().A;
                d = isNaN(d) ? 0 : d;
              } else d = 0;
              return d;
            });
            this.isSlotAPersistentRoadblock = S(64, function (d) {
              d = Xj(d, b);
              return !!d && gz(a, d);
            });
            this.onImplementationLoaded = S(65, function () {
              a.log.info(xl('GPT CompanionAds'));
            });
            this.fillSlot = S(66, function (d, e) {
              d = Xj(d, b);
              var f;
              if ((f = !!d))
                d && yq(d) && e && 'string' === typeof e
                  ? ((hz(a, d).content = e), (f = iz(a, d)))
                  : (f = !1);
              return f;
            });
            this.slotRenderEnded = S(67, function (d, e, f) {
              return (d = Xj(d, b)) && jz(a, d, e, f);
            });
            this.setRefreshUnfilledSlots = S(59, function (d) {
              'boolean' === typeof d && (a.Ua = d);
            });
          };
          _.M(kz, Jp);
          var mz = function (a, b) {
            Jp.call(this, a);
            this.setContent = S(72, function (c, d) {
              return (c = Xj(c, b)) && lz(a, c, d);
            });
            this.display = S(562, function (c, d, e, f) {
              return a.display(c, d, void 0 === e ? '' : e, void 0 === f ? '' : f);
            });
          };
          _.M(mz, Jp);
          var nz = function () {
            gq.apply(this, arguments);
          };
          _.M(nz, gq);
          nz.F = function () {
            throw Error('Must be overridden');
          };
          var oz = function () {
            nz.apply(this, arguments);
            this.o = new x.Map();
            this.A = {};
            this.Ua = !1;
            this.I = 0;
            this.H = this.D = void 0;
            this.J = this.L = !1;
          };
          _.M(oz, nz);
          oz.F = nz.F;
          _.q = oz.prototype;
          _.q.La = function () {
            return new kz(this, Fo);
          };
          _.q.set = function (a, b) {
            'string' === typeof a && a.length
              ? ((this.A[a] = b), this.log.info(rl(a, String(b), this.aa())))
              : this.log.K(Zk('CompanionAdsService.set', [a, b]));
            return this;
          };
          _.q.get = function (a) {
            var b;
            return null !== (b = this.A[a]) && void 0 !== b ? b : null;
          };
          _.q.display = function (a, b, c, d) {
            c = void 0 === c ? '' : c;
            d = void 0 === d ? '' : d;
            Ip(this);
            b = zq(a, b, c);
            a = b.slot;
            b = b.Ja;
            this.Ca(a, b);
            D(b, 7, d);
            Dq(a.getSlotId().getDomId());
          };
          _.q.Ca = function (a, b) {
            var c = this;
            Dk(a.getSlotId(), Lk, function (d) {
              r(d.detail, 11) && (hz(c, a).j = !0);
            });
            nz.prototype.Ca.call(this, a, b);
          };
          _.q.Vb = function () {
            pz(this);
          };
          var ez = function (a) {
              if (!Xy.F().j) return !1;
              var b = Xy.F().l;
              a = a.l;
              return b.length !== a.length
                ? !1
                : !a.some(function (c) {
                    return !_.B(b, 'includes').call(b, c);
                  });
            },
            fz = function (a, b) {
              (b = void 0 === b ? '' : b) &&
                !a.J &&
                mc('ima_sdk_v', function (d) {
                  a.J = !0;
                  K(d, 'v', b);
                });
              var c = bo.F().j;
              return String(C(c, 26));
            },
            cz = function (a, b) {
              var c = bo.F().j,
                d = eo();
              if (Xy.F().j) {
                var e = { Ba: 3 };
                void 0 !== a.I && (e.ya = a.I);
                a.D && (e.Da = a.D);
                a.H && (e.Ea = a.H);
                a = null !== b && void 0 !== b ? b : a.l;
                c = hp(c, d);
                (e.ya && 'number' !== typeof e.ya) ||
                  (e.Da && 'number' !== typeof e.Da) ||
                  (e.Ea && 'number' !== typeof e.Ea) ||
                  vu(Xy.F(), c, a, e);
              } else b && b[0] && a.log.error(El(b[0].getSlotId().getDomId()));
            },
            gz = function (a, b) {
              var c;
              if (Xy.F().j && yq(b))
                return (
                  (a = a.o.get(b.getSlotId())),
                  null !== (c = null === a || void 0 === a ? void 0 : a.j) && void 0 !== c ? c : !1
                );
              a.log.error(ul());
              return !1;
            },
            dz = function (a, b) {
              return b
                .map(function (c) {
                  return _.B(a.l, 'find').call(a.l, function (d) {
                    return d.getSlotId().toString() === c;
                  });
                })
                .filter(function (c) {
                  return !!c;
                });
            };
          oz.prototype.aa = function () {
            return 'companion_ads';
          };
          var pz = function (a) {
              Hc(
                70,
                function () {
                  if (!a.L) {
                    var b = document;
                    a.log.info(vl('GPT CompanionAds'));
                    Wg(
                      b,
                      be(
                        Fa(
                          Da('https://pagead2.googlesyndication.com/pagead/show_companion_ad.js')
                        ).toString()
                      )
                    );
                    a.L = !0;
                  }
                },
                function (b, c) {
                  yk(b, c);
                  a.log.error(wl('GPT CompanionAds'));
                }
              );
            },
            iz = function (a, b) {
              if (!a.j || gz(a, b)) return !1;
              var c = v(b);
              if (!c) return !1;
              var d = (a.o.get(b.getSlotId()) || {}).content;
              if (void 0 === d) return !1;
              a.o.delete(b.getSlotId());
              c.innerHTML = d;
              d = c = null;
              var e = fo(bo.F(), b.getSlotId().getDomId());
              e &&
                1 === P(e, Fn, 5).length &&
                Uf(P(e, Fn, 5)[0], 1) &&
                Uf(P(e, Fn, 5)[0], 2) &&
                ((c = C(P(e, Fn, 5)[0], 1)), (d = C(P(e, Fn, 5)[0], 2)));
              jz(a, b, c, d);
              return !0;
            };
          oz.prototype.jc = function (a, b) {
            iz(this, b);
          };
          var jz = function (a, b, c, d) {
              b = new Tp(Jc(b), a.aa());
              null != c && null != d && (b.size = [c, d]);
              iq(a, 'slotRenderEnded', b);
            },
            hz = function (a, b) {
              var c = a.o.get(b.getSlotId());
              c ||
                ((c = {}),
                a.o.set(b.getSlotId(), c),
                _.R(b, function () {
                  return a.o.delete(b.getSlotId());
                }));
              return c;
            };
          vd(oz);
          var qz = function () {
            gq.apply(this, arguments);
          };
          _.M(qz, gq);
          qz.F = function () {
            throw Error('Must be overridden');
          };
          var rz = function () {
            qz.apply(this, arguments);
            this.o = new x.Map();
          };
          _.M(rz, qz);
          rz.F = qz.F;
          rz.prototype.La = function () {
            return new mz(this, Fo);
          };
          rz.prototype.aa = function () {
            return 'content';
          };
          rz.prototype.display = function (a, b, c, d) {
            c = void 0 === c ? '' : c;
            d = void 0 === d ? '' : d;
            Ip(this);
            b = zq(a, b, c);
            a = b.slot;
            b = b.Ja;
            this.Ca(a, b);
            D(b, 7, d);
            Dq(a.getSlotId().getDomId());
          };
          rz.prototype.destroySlots = function (a) {
            a = qz.prototype.destroySlots.call(this, a);
            for (var b = _.G(a), c = b.next(); !c.done; c = b.next())
              this.o.delete(c.value.getSlotId());
            return a;
          };
          var sz = function (a, b) {
            var c = a.o.get(b.getSlotId()),
              d = v(b);
            !(c && void 0 !== c.content && d && a.j) ||
              (c && c.Lc) ||
              ((c.Lc = !0),
              (d.innerHTML = c.content),
              iq(a, 'slotRenderEnded', new Tp(Jc(b), a.aa())));
          };
          rz.prototype.Vb = function () {};
          rz.prototype.jc = function (a, b) {
            sz(this, b);
          };
          var lz = function (a, b, c) {
            if (yq(b) && 'string' === typeof c && c.length) {
              var d = a.o.get(b.getSlotId());
              d ? (d.content = c) : a.o.set(b.getSlotId(), { content: c, Lc: void 0 });
              _.R(b, function () {
                return void a.o.delete(b.getSlotId());
              });
              sz(a, b);
            }
          };
          vd(rz);
          var tz = void 0;
          var uz = function () {
            this.j = function () {};
          };
          vd(uz);
          var vz = function () {
            var a = Qp.F();
            uz.F().j(a);
          };
          var wz = function () {
            var a = void 0,
              b = 2;
            if (void 0 === a) {
              var c = void 0 === c ? _.H : c;
              a = c.ggeac || (c.ggeac = {});
            }
            b = void 0 === b ? 0 : b;
            c = a;
            var d = b;
            d = void 0 === d ? 0 : d;
            Ij(Hj.F(), c, d);
            c = a;
            b = void 0 === b ? 0 : b;
            Nj(Mj.F(), c, b);
            uz.F().j = Gj(Fj, a);
            Mj.F().j();
          };
          var Dc = new x.Set(),
            xz = function () {
              _.Q.call(this);
              this.J = this.N = this.R = this.j = this.D = this.A = this.o = 0;
              this.L = !1;
              this.H = this.m = this.l = 0;
              var a = document.querySelector('[data-google-query-id]');
              this.T = a ? a.getAttribute('data-google-query-id') : null;
              this.C = null;
              this.U = !1;
              this.I = function () {};
            };
          _.M(xz, _.Q);
          var zz = function () {
            var a = new xz();
            if (_.t(203) && !window.google_plmetrics && window.PerformanceObserver) {
              window.google_plmetrics = !0;
              for (
                var b = _.G([
                    'layout-shift',
                    'largest-contentful-paint',
                    'first-input',
                    'longtask',
                  ]),
                  c = b.next();
                !c.done;
                c = b.next()
              )
                (c = c.value), a.ub().observe({ type: c, buffered: !_.t(240) });
              yz(a);
            }
          };
          xz.prototype.ub = function () {
            var a = this;
            this.C ||
              (this.C = new PerformanceObserver(
                Dt(640, function (b) {
                  var c = !1;
                  b = _.G(b.getEntries());
                  for (var d = b.next(); !d.done; d = b.next())
                    switch (((d = d.value), d.entryType)) {
                      case 'layout-shift':
                        if (!c) {
                          try {
                            if ('undefined' !== typeof googletag && googletag.pubads) {
                              var e = googletag.pubads();
                              Dc.clear();
                              for (var f = _.G(e.getSlots()), g = f.next(); !g.done; g = f.next())
                                Dc.add(g.value.getSlotId().getDomId());
                            }
                          } catch (l) {}
                          c = !0;
                        }
                        if (!d.hadRecentInput && (!_.t(241) || 0.01 < d.value)) {
                          a.o += Number(d.value);
                          Number(d.value) > a.A && (a.A = Number(d.value));
                          a.D += 1;
                          a: {
                            if (d.sources) {
                              var h = _.G(d.sources);
                              for (var k = h.next(); !k.done; k = h.next())
                                if (Fc(k.value.node)) {
                                  h = !0;
                                  break a;
                                }
                            }
                            h = !1;
                          }
                          h && ((a.j += d.value), a.R++);
                        }
                        break;
                      case 'largest-contentful-paint':
                        a.N = Math.floor(d.renderTime || d.loadTime);
                        break;
                      case 'first-input':
                        a.J = Number((d.processingStart - d.startTime).toFixed(3));
                        a.L = !0;
                        break;
                      case 'longtask':
                        (a.l += d.duration), d.duration > a.m && (a.m = d.duration), (a.H += 1);
                    }
                })
              ));
            return this.C;
          };
          var yz = function (a) {
            var b = Dt(641, function () {
                2 == _.bn(document) && Az(a);
              }),
              c = Dt(641, function () {
                return void Az(a);
              });
            document.addEventListener('visibilitychange', b);
            document.addEventListener('unload', c);
            var d = _.w(1905),
              e;
            0 < d && (e = setTimeout(c, 1000 * d));
            a.I = function () {
              document.removeEventListener('visibilitychange', b);
              document.removeEventListener('unload', c);
              a.ub().disconnect();
              e && clearTimeout(e);
            };
          };
          xz.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.I();
          };
          var Az = function (a) {
            if (!a.U) {
              a.U = !0;
              a.ub().takeRecords();
              var b = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
              window.LayoutShift &&
                ((b += '&cls=' + a.o.toFixed(3)),
                (b += '&mls=' + a.A.toFixed(3)),
                (b += Cc('nls', a.D)),
                window.LayoutShiftAttribution &&
                  ((b += '&cas=' + a.j.toFixed(3)), (b += Cc('nas', a.R))));
              window.LargestContentfulPaint && (b += Cc('lcp', a.N));
              window.PerformanceEventTiming && a.L && (b += Cc('fid', a.J));
              window.PerformanceLongTaskTiming &&
                ((b += Cc('cbt', a.l)), (b += Cc('mbt', a.m)), (b += Cc('nlt', a.H)));
              for (
                var c = 0, d = _.G(document.getElementsByTagName('iframe')), e = d.next();
                !e.done;
                e = d.next()
              )
                Ec(e.value) && c++;
              b += Cc('nif', c);
              c = window.google_unique_id;
              b += Cc('ifi', 'number' === typeof c ? c : 0);
              c = Lj();
              b += '&eid=' + encodeURIComponent(c.join());
              b += '&top=' + (_.H === _.H.top ? 1 : 0);
              b += a.T ? '&qqid=' + encodeURIComponent(a.T) : Cc('pvsid', Ob(_.H));
              window.fetch(b, {
                keepalive: !0,
                credentials: 'include',
                redirect: 'follow',
                method: 'get',
                mode: 'no-cors',
              });
              a.za();
            }
          };
          var Bz = function () {
            var a = La.F();
            this.getAllEvents = S(563, function () {
              return Qx ? ci(a.j).slice() : [];
            });
            this.getEventsBySlot = S(565, function (b) {
              return Qx ? Tk(a, b).slice() : [];
            });
            this.getEventsByLevel = S(566, function (b) {
              return Qx ? Uk(a, b).slice() : [];
            });
          };
          _.M(Bz, Wj);
          var Cz = function (a, b) {
              a: {
                b = b[0];
                a = a[0];
                for (var c = ka, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                  var f = c(b[e], a[e]);
                  if (0 != f) {
                    b = f;
                    break a;
                  }
                }
                b = ka(b.length, a.length);
              }
              return b;
            },
            Dz = function () {
              var a = this,
                b = [],
                c = !1,
                d = La.F();
              this.addSize = J(88, function (e, f) {
                var g;
                (g = !qo(e)) || (g = !(po(f) || (Array.isArray(f) && f.every(po))));
                if (g) return (c = !0), d.K(Zk('SizeMappingBuilder.addSize', [e, f])), a;
                b.push([e, f]);
                return a;
              });
              this.build = J(89, function () {
                if (c) return d.K(pl()), null;
                ma(b, Cz);
                return b;
              });
            };
          var Gc = new x.Map([
            ['Interstitial', 5],
            ['TopAnchor', 2],
            ['BottomAnchor', 3],
          ]);
          var Ez = function () {
            var a = new Xq(),
              b = new Yq(),
              c = Ob(_.H);
            ag(a, 1, c, 0);
            c = Lj().join();
            ag(a, 5, c, '');
            ag(a, 2, 1, 0);
            eg(b, 1, a);
            a = Wq();
            c = _.t(77);
            a = bg(a, 8, c);
            c = _.t(78);
            a = bg(a, 9, c);
            a = bg(a, 10, !0);
            c = _.t(80);
            a = bg(a, 13, c);
            c = _.t(81);
            a = bg(a, 14, c);
            a = bg(a, 16, !0);
            eg(b, 2, a);
            window.google_rum_config = b.la;
          };
          var Fz = J(
              297,
              function () {
                var a = _.t(437)
                  ? [].concat(_.Ub(document.getElementsByTagName('script')))
                  : _.B(Array, 'from').call(Array, document.getElementsByTagName('script'));
                a = _.G(a);
                for (var b = a.next(); !b.done; b = a.next()) {
                  var c = b.value;
                  b = c;
                  var d = c.src;
                  if (
                    d &&
                    (-1 != d.indexOf('/tag/js/gpt.js') ||
                      -1 != d.indexOf('/tag/js/gpt_mobile.js')) &&
                    !b.googletag_executed &&
                    c.textContent
                  ) {
                    b.googletag_executed = !0;
                    b = document.createElement('script');
                    var e = (d = void 0);
                    c = c.textContent;
                    c =
                      null !==
                        (d = null === (e = Ba()) || void 0 === e ? void 0 : e.createScript(c)) &&
                      void 0 !== d
                        ? d
                        : c;
                    c = new zi(c, va);
                    Ea(c, zi);
                    b.textContent = c.j;
                    (c = b.ownerDocument && b.ownerDocument.defaultView) && c !== window
                      ? (c = Bc(c.document))
                      : (void 0 === tz && (tz = Bc(document)), (c = tz));
                    c && b.setAttribute('nonce', c);
                    document.head.appendChild(b);
                    document.head.removeChild(b);
                  }
                }
              },
              function (a, b) {
                yk(a, b);
                window.console && window.console.error && window.console.error(b);
              }
            ),
            Gz = function () {
              var a = window,
                b = new Ts(a),
                c = new Zs(a),
                d = new Is(a);
              mc(
                'cmpMet',
                function (e) {
                  yc(e);
                  K(e, 'fc', b.j ? 1 : 0);
                  K(e, 'tcfv1', a.__cmp ? 1 : 0);
                  K(e, 'tcfv2', at(c) ? 1 : 0);
                  K(e, 'usp', Ks(d) ? 1 : 0);
                  K(e, 'ptt', 17);
                },
                { Aa: _.w(61) }
              );
            },
            Hz = function () {
              const $___old_e1c9307d2c56c499 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_e1c9307d2c56c499)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_2b47892348e4e4b9.performance
                  ));
                return function () {
                  var a = Mb();
                  Nu = _.jj();
                  try {
                    wz(), vz(), Kj(13), Kj(3);
                  } catch (g) {
                    zk(408, g, !0);
                  }
                  if (_.t(430) && window.performance && window.performance.mark) {
                    performance.mark('gpt-tag-load');
                    if (!_.t(469))
                      var b = Zo(
                        Uo.F(),
                        Po,
                        776,
                        _.Ld(function () {
                          const $___old_bb434d477076fb8f = {}.constructor.getOwnPropertyDescriptor(
                            window,
                            'performance'
                          );
                          try {
                            if ($___old_bb434d477076fb8f)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___stub_2b47892348e4e4b9.performance
                              ));
                            return function () {
                              performance.mark('gpt-first-ad-request');
                              b();
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_bb434d477076fb8f)
                              ({}.constructor.defineProperty(
                                window,
                                'performance',
                                $___old_bb434d477076fb8f
                              ));
                          }
                        })
                      );
                    var c = Zo(
                      Uo.F(),
                      ec,
                      777,
                      _.Ld(function () {
                        performance.mark('gpt-first-ad-render');
                        c();
                      })
                    );
                  }
                  try {
                    var d = lc(a);
                    _.gw.F().B = d;
                    _.w(61) && Gz();
                    Zv();
                    vc('defineOutOfPageSlot', Cq);
                    vc('defineSlot', Aq);
                    vc('defineUnit', Aq);
                    vc('destroySlots', Bq);
                    vc('getWindowsThatCanCommunicateWithHostpageLibrary', tq);
                    vc('display', Dq);
                    Mp();
                    vc('getVersion', Mb);
                    vc('companionAds', function () {
                      return Jc(oz.F());
                    });
                    vc('content', function () {
                      return Jc(rz.F());
                    });
                    vc('pubads', function () {
                      return Jc(Xy.F());
                    });
                    vc('setAdIframeTitle', S(729, jw));
                    vc('getEventLog', function () {
                      return new Bz();
                    });
                    vc(
                      'sizeMapping',
                      J(90, function () {
                        return new Dz();
                      })
                    );
                    vc(
                      'enableServices',
                      J(91, function () {
                        for (var g = _.G(fq), h = g.next(); !h.done; h = g.next())
                          (h = h.value), h.j && La.F().info(sl()), Ip(h);
                      })
                    );
                    vc('apiReady', !0);
                    var e = function () {
                      Lc();
                      sm();
                    };
                    wc().fifWin && 'complete' != document.readyState
                      ? Tj(window, function () {
                          window.setTimeout(e, 0);
                        })
                      : e();
                    Fz();
                    if (_.t(84) || jk.F().j)
                      Ez(), Wg(document, be(Fa(_.t(188) ? d.Cd : d.Dd).toString()));
                    if (_.t(346) && sd()) {
                      var f = new sk('gpt_nonce_csp');
                      yc(f);
                      uk(f);
                    }
                  } catch (g) {
                    zk(106, g);
                  }
                  if (_.t(435))
                    try {
                      zz();
                    } catch (g) {}
                }.apply(this, arguments);
              } finally {
                if ($___old_e1c9307d2c56c499)
                  ({}.constructor.defineProperty(window, 'performance', $___old_e1c9307d2c56c499));
              }
            };
          if (window.googletag.evalScripts) window.googletag.evalScripts();
          else {
            var Iz = window,
              Jz = _.kj(Iz);
            if (Jz) {
              var Kz = { label: '2', type: 9, value: Jz },
                Lz = (Iz.google_js_reporting_queue = Iz.google_js_reporting_queue || []);
              2048 > Lz.length && Lz.push(Kz);
            }
            vc('evalScripts', function () {
              Fz();
            });
            Hz();
          }
        }.apply(this, arguments);
      } finally {
        if ($___old_803be5d9ecbd6908)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_803be5d9ecbd6908
          ));
        if ($___old_107c81fab1efce35)
          ({}.constructor.defineProperty(window, 'performance', $___old_107c81fab1efce35));
      }
    }.call(this, {}));
  })();
}
