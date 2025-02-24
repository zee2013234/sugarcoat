{
  const $___stub_72d79cce1b679685 = {};
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
  })($___stub_72d79cce1b679685);
  const $___stub_0b13ce4eb5645a04 = {};
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
  })($___stub_0b13ce4eb5645a04);
  const $___stub_a0ca823ae553bc43 = {};
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
  })($___stub_a0ca823ae553bc43);
  const $___stub_080f9a0911996704 = {};
  (exports => {
    'use strict';
    exports.doNotTrack = {
      configurable: true,
      enumerable: true,
      get () {
        return '1';
      },
    };
    exports.productSub = {
      configurable: true,
      enumerable: true,
      get () {
        return 20030107;
      },
    };
    exports.vendor = {
      configurable: true,
      enumerable: true,
      get () {
        return '';
      },
    };
  })($___stub_080f9a0911996704);
  const $___stub_28e833aa89da2c4f = {};
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
          handler.call(this, event);
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
  })($___stub_28e833aa89da2c4f);
  const $___stub_e559d91a86a40f7c = {};
  (exports => {
    'use strict';
    const fetch = async (resource, init = null) => {
      throw new TypeError('Failed to fetch');
    };
    exports.fetch = { configurable: true, enumerable: true, value: fetch, writable: true };
  })($___stub_e559d91a86a40f7c);
  (function () {
    (function (_) {
      const $___old_748a23bdf7c745b6 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_748a23bdf7c745b6)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_a0ca823ae553bc43.userAgent
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
            xa,
            za,
            Ca,
            Da,
            Fa,
            Ha,
            Ia,
            Ja,
            Ka,
            Ma,
            Na,
            Ra,
            Xa,
            $a,
            gb,
            kb,
            lb,
            ob,
            pb,
            mb,
            sb,
            tb,
            vb,
            Cb,
            Eb,
            Gb,
            Ib,
            Jb,
            Mb,
            Nb,
            Ob,
            Pb,
            Tb,
            Zb,
            $b,
            cc,
            dc,
            kc,
            pc,
            sc,
            tc,
            uc,
            vc,
            yc,
            Fc,
            Gc,
            Hc,
            Jc,
            Kc,
            Qc,
            L,
            Rc,
            Sc,
            Tc,
            Uc,
            Vc,
            w,
            Wc,
            Xc,
            Yc,
            Zc,
            Vb,
            $c,
            ad,
            ed,
            fd,
            gd,
            wd,
            xd,
            vd,
            ud,
            zd,
            Ad,
            ia,
            Bd,
            Cd,
            Dd,
            Ed,
            Hd,
            Id;
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
          xa = function () {
            var a = 'undefined' !== typeof window ? window.trustedTypes : void 0;
            return null !== a && void 0 !== a ? a : null;
          };
          za = function () {
            var a, b;
            void 0 === ya &&
              (ya =
                null !==
                  (b =
                    null === (a = xa()) || void 0 === a
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
                  : null);
            return ya;
          };
          Ca = function (a, b) {
            return new Aa(null !== b && void 0 !== b ? b : a, va);
          };
          Da = function (a) {
            var b;
            return Ca(a, null === (b = za()) || void 0 === b ? void 0 : b.createHTML(a));
          };
          Fa = function (a, b) {
            return new Ea(null !== b && void 0 !== b ? b : a, va);
          };
          Ha = function (a) {
            var b,
              c = null === (b = za()) || void 0 === b ? void 0 : b.createScriptURL(a);
            return new Ga(null !== c && void 0 !== c ? c : a, va);
          };
          Ia = function (a) {
            var b;
            var c;
            if (null === (c = xa()) || void 0 === c || !c.isScriptURL(a))
              if (a instanceof Ga) a = a.j;
              else throw Error('wrong type');
            return (null === (b = xa()) || void 0 === b ? 0 : b.isScriptURL(a))
              ? TrustedScriptURL.prototype.toString.apply(a)
              : a;
          };
          Ja = function (a, b) {
            const $___old_ccd5629cc60f55fb = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_ccd5629cc60f55fb)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_72d79cce1b679685.localStorage
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
              if ($___old_ccd5629cc60f55fb)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_ccd5629cc60f55fb));
            }
          };
          Ka = function (a, b) {
            const $___old_c00d237104c85d09 = {}.constructor.getOwnPropertyDescriptor(
              Document.prototype,
              'cookie'
            );
            try {
              if ($___old_c00d237104c85d09)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___stub_0b13ce4eb5645a04.cookie
                ));
              return function () {
                b = void 0 === b ? document : b;
                return r(a, 5) ? b.cookie : null;
              }.apply(this, arguments);
            } finally {
              if ($___old_c00d237104c85d09)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___old_c00d237104c85d09
                ));
            }
          };
          Ma = function (a, b, c) {
            c = void 0 === c ? document : c;
            b = Ka(b, c);
            return null === b ? null : new La({ cookie: b }).get(a) || '';
          };
          Na = function (a, b, c, d, e) {
            e = void 0 === e ? document : e;
            r(c, 5) && new La(e).set(a, b, d);
          };
          Ra = function (a, b) {
            var c = _.u(432) ? Oa(a, b) : Pa(a, b) || Oa(a, b);
            1 === _.v(395) &&
              c &&
              !Qa(c) &&
              (a = Oa(a, b).parentElement) &&
              a !== b.body &&
              (c = a);
            return c;
          };
          Xa = function (a, b, c) {
            var d = b.slot,
              e = b.da,
              f = Ra(d, a);
            if (!f) return null;
            b = Sa(f);
            if (!b) return b;
            var g = f === Oa(d, a),
              h = g || 1 === _.v(395),
              k = Ta(function () {
                var m = g ? Oa(d, a) : f;
                return (m && Ua(m, window)) || {};
              });
            e = Va(e)[0];
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
            return b && Qa(f) ? b : new _.Wa(-12245933, -12245933);
          };
          $a = function (a) {
            var b = window,
              c = !0;
            c = void 0 === c ? !1 : c;
            new w.Promise(function (d, e) {
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
              g.src = Ya(a);
              Za(g);
              c && 'complete' !== b.document.readyState
                ? _.x(b, 'load', function () {
                    b.document.body.appendChild(g);
                  })
                : b.document.body.appendChild(g);
            });
          };
          gb = function (a) {
            return ab(this, function c () {
              var d, e, f, g, h;
              return bb(c, function (k) {
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
                          Xc: e.bg_hash_basename,
                          Wc: e.bg_binary,
                          sd: a.j + '_' + a.l,
                          sb: f,
                          eb: a.eb,
                          Kb: g,
                          Nb: h,
                        })
                      : k.return(void 0);
                }
              });
            });
          };
          kb = function (a) {
            ab(this, function c () {
              var d;
              return bb(c, function (e) {
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
                    (k._bgv_ = d.Xc),
                    (k._bgp_ = d.Wc),
                    (k._li_ = d.sd),
                    (k._jk_ = d.sb),
                    (k._st_ = d.eb),
                    (k._rc_ = d.Kb),
                    (k._dl_ = d.Nb),
                    k)
                  );
                  if ((h = g.GoogleDX5YKUSk)) (g.GoogleDX5YKUSk = void 0), h[1]();
                  f = hb(jb, { basename: f });
                  $a(f);
                }
                return e.return(d);
              });
            });
          };
          lb = function (a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            if (!Array.isArray(a) || !Array.isArray(a.raw))
              throw new TypeError(
                'trustedResourceUrl is a template literal tag function that only accepts template literals with or without expressions. For example, trustedResourceUrl`foo`; or trustedResourceUrl`foo${bar}`'
              );
            if (0 === c.length) return Ha(a[0]);
            d = a[0].toLowerCase();
            if (_.y(d, 'startsWith').call(d, 'data:'))
              throw Error('Data URLs cannot have expressions in the template literal input.');
            if (_.y(d, 'startsWith').call(d, 'https://') || _.y(d, 'startsWith').call(d, '//')) {
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
              if (_.y(d, 'startsWith').call(d, '/'))
                if ('/' === d || (1 < d.length && '/' !== d[1] && '\\' !== d[1])) e = !0;
                else throw Error('The path start in the url is invalid.');
              else e = !1;
              e = !e;
            }
            if (e) {
              if (_.y(d, 'startsWith').call(d, 'about:blank')) {
                if ('about:blank' !== d && !_.y(d, 'startsWith').call(d, 'about:blank#'))
                  throw Error('The about url is invalid.');
                d = !0;
              } else d = !1;
              e = !d;
            }
            if (e) throw Error('Trying to interpolate expressions in an unsupported url format.');
            d = [a[0]];
            for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
            return Ha(d.join(''));
          };
          ob = function (a, b, c, d) {
            var e = void 0 === e ? {} : e;
            mb(a, b, c || null, e);
            switch (a) {
              case 0:
              case 9:
              case 12:
                (a = nb()),
                  (c = a.get(b, d).yb)
                    ? ((b = (C(c, 4) || 0) + 1), D(c, 4, b), a.set(c, d))
                    : mb(11, b, null, {});
            }
          };
          pb = function (a, b, c) {
            var d = void 0 === d ? {} : d;
            mb(a, b, c || null, d);
          };
          mb = function (a, b, c, d) {
            Math.random() < _.v(1916, 0.001) &&
              qb(_.y(Object, 'assign').call(Object, { c: String(a), em: c, lid: b }, d), 'esp');
          };
          sb = function (a, b, c, d) {
            var e = function (f) {
              D(b, 2, f);
              f = nb().set(b, d);
              f.errorMessage && pb(f.info, a, f.errorMessage);
            };
            try {
              return c().then(function (f) {
                e(f);
                return b;
              });
            } catch (f) {
              return e(null), ob(1, a, f.message, d), w.Promise.resolve(b);
            }
          };
          tb = function (a) {
            var b = void 0 === b ? function () {} : b;
            return new w.Promise(function (c) {
              setTimeout(function () {
                c(b());
              }, a);
            });
          };
          vb = function () {
            var a = window;
            var b = void 0 === b ? function () {} : b;
            return new w.Promise(function (c) {
              var d = function () {
                c(b());
                _.ub(a, 'load', d);
              };
              _.x(a, 'load', d);
            });
          };
          Cb = function (a, b, c, d) {
            if (c) {
              var e = function (h, k) {
                  if ('function' === typeof k) {
                    h = new wb(h, k, c, d);
                    k = new xb(h.m, h.A, c, d);
                    var l = new yb(k.A, k.C, c, d),
                      m = new zb();
                    Ab(m, [h, k, l]);
                    Bb(m);
                  } else pb(14, h);
                },
                f = {};
              b = _.E(b);
              for (var g = b.next(); !g.done; f = { Cb: f.Cb, La: f.La }, g = b.next())
                (f.La = g.value),
                  /^[a-z0-9]+$/i.test(f.La)
                    ? (g = a[f.La])
                      ? e(f.La, g)
                      : ((f.Cb = !1),
                        Object.defineProperty(a, f.La, {
                          set: (function (h) {
                            return function (k) {
                              h.Cb || ((h.Cb = !0), e(h.La, k));
                            };
                          })(f),
                        }))
                    : pb(13, f.La);
            }
          };
          Eb = function (a, b, c, d) {
            b = G(b, Db, 1);
            b.length &&
              ((a = a.encryptedSignalSource || (a.encryptedSignalSource = {})),
              Cb(
                a,
                b.map(function (e) {
                  return C(e, 1);
                }),
                c,
                d
              ));
          };
          Gb = function (a) {
            a = _.Fb(a.split(/\s+/), function (b) {
              return (b = /^(-?\d+)(px|%)$/.exec(b))
                ? { value: parseFloat(b[1]), type: b[2] }
                : { value: 0, type: 'px' };
            });
            a[1] = a[1] || a[0];
            a[2] = a[2] || a[0];
            a[3] = a[3] || a[1];
            return a;
          };
          Ib = function (a) {
            if (!a) return [0];
            a = 'number' === typeof a ? [a] : a;
            a = _.Hb(a, function (b) {
              return 'number' === typeof b && 0 <= b && 1 >= b ? !0 : !1;
            });
            ja(a);
            la(a, function (b, c) {
              return b - c;
            });
            return a;
          };
          Jb = function (a) {
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
          Mb = function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              k,
              l,
              m,
              n = new Kb(),
              p = '',
              t = function (A) {
                try {
                  var z = 'object' === typeof A.data ? A.data : JSON.parse(A.data);
                  p === z.paw_id && (_.ub(a, 'message', t), n.resolve(d(z)));
                } catch (F) {}
              };
            return 'function' ===
              typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo)
              ? (_.x(a, 'message', t), (p = c(a.gmaSdk)), n.promise)
              : 'function' ===
                  typeof (null ===
                    (h =
                      null ===
                        (g =
                          null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) ||
                      void 0 === g
                        ? void 0
                        : g.getGmaQueryInfo) || void 0 === h
                    ? void 0
                    : h.postMessage) ||
                'function' ===
                  typeof (null ===
                    (m =
                      null ===
                        (l =
                          null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) ||
                      void 0 === l
                        ? void 0
                        : l.getGmaSig) || void 0 === m
                    ? void 0
                    : m.postMessage)
              ? ((p = String(Math.floor(2147483647 * Lb(a)))),
                _.x(a, 'message', t),
                b(a.webkit.messageHandlers, p),
                n.promise)
              : null;
          };
          Nb = function (a) {
            return Mb(
              a,
              function (b, c) {
                var d;
                return void (null !== (d = b.getGmaQueryInfo) && void 0 !== d
                  ? d
                  : b.getGmaSig
                ).postMessage(c);
              },
              function (b) {
                return b.getQueryInfo();
              },
              function (b) {
                return b.signal;
              }
            );
          };
          Ob = function (a) {
            return 'number' === typeof a || 'string' === typeof a;
          };
          Pb = function (a) {
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
          Tb = function () {
            var a = window,
              b = Qb();
            var c = void 0 === c ? Rb : c;
            if (_.u(215) && !a.goog_sdr_l) {
              Object.defineProperty(a, 'goog_sdr_l', { value: !0 });
              var d = function () {
                var e = _.v(37),
                  f = function () {
                    c(a, 'gpt', b, String(Sb(a)));
                  };
                e ? a.setTimeout(f, e) : f();
              };
              'complete' === a.document.readyState ? d() : _.x(a, 'load', d);
            }
          };
          Zb = function (a, b) {
            b = void 0 === b ? Ub : b;
            var c = ia(a),
              d = function (f) {
                f = _.E(f);
                f.next();
                f = Vb(f);
                return b(c, f);
              },
              e = function (f) {
                var g = _.E(f);
                f = g.next().value;
                g = Vb(g);
                return a.apply(f, g);
              };
            return function (f) {
              for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
              h = this || _.I;
              var k = Wb.get(h);
              k || ((k = {}), Wb.set(h, k));
              return Xb(k, [this].concat(_.Yb(g)), e, d);
            };
          };
          $b = function (a, b, c, d) {
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
            a = _.E(a);
            for (var h = a.next(); !h.done; h = a.next()) {
              h = b(h.value);
              var k = c(h);
              g = g || k;
              f.push(String(k ? h : e));
            }
            return g ? f.join(d) : null;
          };
          cc = function (a) {
            a = ac(a);
            var b = [];
            _.bc(a, function (c, d) {
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
          dc = function (a) {
            var b = a.getBoundingClientRect();
            a = b.top;
            var c = b.bottom;
            if (0 === b.height) return !1;
            b = _.I.innerHeight;
            return (0 < c && c < b) || (0 < a && a < b);
          };
          kc = function (a, b, c) {
            var d,
              e = Oa(a, c);
            if (e && (!_.u(434) || !dc(e)))
              if (_.u(399)) {
                var f = a.getSlotId();
                if (!ec.has(f)) {
                  ec.add(f);
                  var g = new (null !== (d = b.IntersectionObserver) && void 0 !== d ? d : fc)(
                    J(755, function (m) {
                      (m = _.E(m).next().value) &&
                        0 === m.intersectionRatio &&
                        ((m = Oa(a, c)) && gc(m, !1), h());
                    }),
                    { threshold: 0 }
                  );
                  g.observe(e);
                  var h = function () {
                      g.disconnect();
                      ec.delete(f);
                      k();
                      l();
                    },
                    k = hc(ic, f, 756, function (m) {
                      m.isEmpty || h();
                    }),
                    l = hc(jc, f, 756, function () {
                      gc(Oa(a, c), !1);
                      h();
                    });
                }
              } else gc(e, !1);
          };
          pc = function (a) {
            return {
              Zc: function (b) {
                return lb(lc, b, a);
              },
              Yc: function (b) {
                return lb(mc, b, a);
              },
              Ed: lb(nc),
              Dd: lb(oc),
            };
          };
          sc = function (a, b, c, d) {
            qc(
              'gpt_sz',
              function (e) {
                K(e, 'r', rc(a));
                K(e, 'w', c.width);
                K(e, 'h', c.height);
                b && K(e, 'f', b);
                null != d && K(e, 'a', Number(d));
              },
              { ya: _.v(28) }
            );
          };
          tc = function (a) {
            var b = { threshold: [0, 0.3, 0.5, 0.75, 1] };
            return window.IntersectionObserver ? new IntersectionObserver(a, b) : new fc(a, b);
          };
          uc = function (a) {
            return new w.Promise(function (b) {
              return void setTimeout(b, a);
            });
          };
          vc = function (a, b) {
            return 'undefined' === typeof IntersectionObserver
              ? new fc(b, { rootMargin: a })
              : new IntersectionObserver(b, { rootMargin: a });
          };
          yc = function (a) {
            var b = wc(a);
            return (
              ((L = [
                'google_debug',
                'dfpdeb',
                'google_console',
                'google_force_console',
                'googfc',
              ]),
              _.y(L, 'find')).call(L, function (c) {
                var d = b.search(xc);
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
          Fc = function () {
            zc('pubadsReady', !0);
            if (_.u(206)) {
              var a = 0;
              Object.defineProperty(Ac(), 'pubadsReady', {
                get: function () {
                  Bc.D().L(Cc());
                  if (5 > a) {
                    var b = _.v(465);
                    qc(
                      'gpt_pubads_ready',
                      function (c) {
                        ++a;
                        Dc(c);
                        var d = Error('pubadsReady');
                        K(c, 'stack', Ec(d.stack, d.message));
                      },
                      { ya: b }
                    );
                  }
                  return !0;
                },
                configurable: !0,
                enumerable: !0,
              });
            }
          };
          Gc = function (a) {
            return (a = a.querySelector('script[nonce]'))
              ? a.nonce || a.getAttribute('nonce') || ''
              : '';
          };
          Hc = function (a, b) {
            return null == b ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
          };
          Jc = function (a) {
            a = a.id;
            return (
              null != a &&
              (Ic.has(a) ||
                _.y(a, 'startsWith').call(a, 'google_ads_iframe_') ||
                _.y(a, 'startsWith').call(a, 'aswift'))
            );
          };
          Kc = function (a, b) {
            b = void 0 === b ? 4 : b;
            if (!a) return !1;
            if (Jc(a)) return !0;
            if (0 >= b) return !1;
            a = _.E(a.childNodes);
            for (var c = a.next(); !c.done; c = a.next()) if (Kc(c.value, b - 1)) return !0;
            return !1;
          };
          Qc = function () {
            var a = window,
              b;
            if (a === a.top) {
              var c = _.v(449);
              if (c)
                for (
                  var d = {}, e = _.E(_.y(Lc, 'entries').call(Lc)), f = e.next();
                  !f.done;
                  d = { fb: d.fb, Pb: d.Pb }, f = e.next()
                )
                  (f = _.E(f.value)),
                    (d.fb = f.next().value),
                    (d.Pb = f.next().value),
                    ((L = null !== (b = a.location.hash) && void 0 !== b ? b : ''),
                    _.y(L, 'includes')).call(L, 'gam' + d.fb + 'Demo') &&
                      Mc(
                        789,
                        (function (g) {
                          return function () {
                            window.console &&
                              window.console.warn &&
                              window.console.warn('GPT - Demo ' + g.fb + ' ENABLED');
                            var h = Nc('/' + c + '/example/' + g.fb.toLowerCase(), g.Pb);
                            h &&
                              (Oc(h).addService(Ac().pubads()),
                              Pc(
                                a.document,
                                J(790, function () {
                                  Ac().enableServices();
                                  Ac().display(Oc(h));
                                })
                              ));
                          };
                        })(d)
                      );
            }
          };
          Rc = function (a) {
            var b = 0;
            return function () {
              return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
          };
          Sc =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (a, b, c) {
                  if (a == Array.prototype || a == Object.prototype) return a;
                  a[b] = c.value;
                  return a;
                };
          Tc = function (a) {
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
          Uc = Tc(this);
          Vc = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
          w = {};
          Wc = {};
          _.y = function (a, b) {
            var c = Wc[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b];
          };
          Xc = function (a, b, c) {
            if (b)
              a: {
                var d = a.split('.');
                a = 1 === d.length;
                var e = d[0],
                  f;
                !a && e in w ? (f = w) : (f = Uc);
                for (e = 0; e < d.length - 1; e++) {
                  var g = d[e];
                  if (!(g in f)) break a;
                  f = f[g];
                }
                d = d[d.length - 1];
                c = Vc && 'es6' === c ? f[d] : null;
                b = b(c);
                null != b &&
                  (a
                    ? Sc(w, d, { configurable: !0, writable: !0, value: b })
                    : b !== c &&
                      ((Wc[d] = Vc ? Uc.Symbol(d) : '$jscp$' + d),
                      (d = Wc[d]),
                      Sc(f, d, { configurable: !0, writable: !0, value: b })));
              }
          };
          Xc(
            'Symbol',
            function (a) {
              if (a) return a;
              var b = function (e, f) {
                this.j = e;
                Sc(this, 'description', { configurable: !0, writable: !0, value: f });
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
          Xc(
            'Symbol.iterator',
            function (a) {
              if (a) return a;
              a = (0, w.Symbol)('Symbol.iterator');
              for (
                var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
                    ' '
                  ),
                  c = 0;
                c < b.length;
                c++
              ) {
                var d = Uc[b[c]];
                'function' === typeof d &&
                  'function' != typeof d.prototype[a] &&
                  Sc(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                      return Yc(Rc(this));
                    },
                  });
              }
              return a;
            },
            'es6'
          );
          Yc = function (a) {
            a = { next: a };
            a[_.y(w.Symbol, 'iterator')] = function () {
              return this;
            };
            return a;
          };
          Zc = function (a) {
            return (a.raw = a);
          };
          _.E = function (a) {
            var b =
              'undefined' != typeof w.Symbol &&
              _.y(w.Symbol, 'iterator') &&
              a[_.y(w.Symbol, 'iterator')];
            return b ? b.call(a) : { next: Rc(a) };
          };
          Vb = function (a) {
            for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
            return c;
          };
          _.Yb = function (a) {
            return a instanceof Array ? a : Vb(_.E(a));
          };
          $c =
            'function' == typeof Object.create
              ? Object.create
              : function (a) {
                  var b = function () {};
                  b.prototype = a;
                  return new b();
                };
          if (Vc && 'function' == typeof _.y(Object, 'setPrototypeOf'))
            ad = _.y(Object, 'setPrototypeOf');
          else {
            var bd;
            a: {
              var cd = { a: !0 },
                dd = {};
              try {
                dd.__proto__ = cd;
                bd = dd.a;
                break a;
              } catch (a) {}
              bd = !1;
            }
            ad = bd
              ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                  return a;
                }
              : null;
          }
          ed = ad;
          _.M = function (a, b) {
            a.prototype = $c(b.prototype);
            a.prototype.constructor = a;
            if (ed) ed(a, b);
            else
              for (var c in b)
                if ('prototype' != c)
                  if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d);
                  } else a[c] = b[c];
            a.Md = b.prototype;
          };
          fd = function () {
            this.m = !1;
            this.B = null;
            this.l = void 0;
            this.j = 1;
            this.F = this.A = 0;
            this.o = null;
          };
          gd = function (a) {
            if (a.m) throw new TypeError('Generator is already running');
            a.m = !0;
          };
          fd.prototype.C = function (a) {
            this.l = a;
          };
          var hd = function (a, b) {
            a.o = { zc: b, od: !0 };
            a.j = a.A || a.F;
          };
          fd.prototype.return = function (a) {
            this.o = { return: a };
            this.j = this.F;
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
              var b = a.o.zc;
              a.o = null;
              return b;
            },
            id = function (a) {
              this.j = new fd();
              this.l = a;
            },
            ld = function (a, b) {
              gd(a.j);
              var c = a.j.B;
              if (c)
                return jd(
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
              return kd(a);
            },
            jd = function (a, b, c, d) {
              try {
                var e = b.call(a.j.B, c);
                if (!(e instanceof Object))
                  throw new TypeError('Iterator result ' + e + ' is not an object');
                if (!e.done) return (a.j.m = !1), e;
                var f = e.value;
              } catch (g) {
                return (a.j.B = null), hd(a.j, g), kd(a);
              }
              a.j.B = null;
              d.call(a.j, f);
              return kd(a);
            },
            kd = function (a) {
              for (; a.j.j; )
                try {
                  var b = a.l(a.j);
                  if (b) return (a.j.m = !1), { value: b.value, done: !1 };
                } catch (c) {
                  (a.j.l = void 0), hd(a.j, c);
                }
              a.j.m = !1;
              if (a.j.o) {
                b = a.j.o;
                a.j.o = null;
                if (b.od) throw b.zc;
                return { value: b.return, done: !0 };
              }
              return { value: void 0, done: !0 };
            },
            md = function (a) {
              this.next = function (b) {
                gd(a.j);
                a.j.B ? (b = jd(a, a.j.B.next, b, a.j.C)) : (a.j.C(b), (b = kd(a)));
                return b;
              };
              this.throw = function (b) {
                gd(a.j);
                a.j.B ? (b = jd(a, a.j.B['throw'], b, a.j.C)) : (hd(a.j, b), (b = kd(a)));
                return b;
              };
              this.return = function (b) {
                return ld(a, b);
              };
              this[_.y(w.Symbol, 'iterator')] = function () {
                return this;
              };
            },
            bb = function (a, b) {
              b = new md(new id(b));
              ed && a.prototype && ed(b, a.prototype);
              return b;
            },
            nd = function (a) {
              function b (d) {
                return a.next(d);
              }
              function c (d) {
                return a.throw(d);
              }
              return new w.Promise(function (d, e) {
                function f (g) {
                  g.done ? d(g.value) : w.Promise.resolve(g.value).then(b, c).then(f, e);
                }
                f(a.next());
              });
            },
            od = function (a) {
              return nd(new md(new id(a)));
            };
          Xc(
            'Reflect.setPrototypeOf',
            function (a) {
              return a
                ? a
                : ed
                ? function (b, c) {
                    try {
                      return ed(b, c), !0;
                    } catch (d) {
                      return !1;
                    }
                  }
                : null;
            },
            'es6'
          );
          Xc(
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
              var d = Uc.setTimeout;
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
                this.F(2, g);
              };
              e.prototype.A = function (g) {
                this.F(1, g);
              };
              e.prototype.F = function (g, h) {
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
                2 === this.l && this.K();
                this.H();
              };
              e.prototype.K = function () {
                var g = this;
                d(function () {
                  if (g.V()) {
                    var h = Uc.console;
                    'undefined' !== typeof h && h.error(g.B);
                  }
                }, 1);
              };
              e.prototype.V = function () {
                if (this.C) return !1;
                var g = Uc.CustomEvent,
                  h = Uc.Event,
                  k = Uc.dispatchEvent;
                if ('undefined' === typeof k) return !0;
                'function' === typeof g
                  ? (g = new g('unhandledrejection', { cancelable: !0 }))
                  : 'function' === typeof h
                  ? (g = new h('unhandledrejection', { cancelable: !0 }))
                  : ((g = Uc.document.createEvent('CustomEvent')),
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
                g.Gb(h.resolve, h.reject);
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
                function k (p, t) {
                  return 'function' == typeof p
                    ? function (A) {
                        try {
                          l(p(A));
                        } catch (z) {
                          m(z);
                        }
                      }
                    : t;
                }
                var l,
                  m,
                  n = new e(function (p, t) {
                    l = p;
                    m = t;
                  });
                this.Gb(k(g, l), k(h, m));
                return n;
              };
              e.prototype.catch = function (g) {
                return this.then(void 0, g);
              };
              e.prototype.Gb = function (g, h) {
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
                  for (var l = _.E(g), m = l.next(); !m.done; m = l.next()) c(m.value).Gb(h, k);
                });
              };
              e.all = function (g) {
                var h = _.E(g),
                  k = h.next();
                return k.done
                  ? c([])
                  : new e(function (l, m) {
                      function n (A) {
                        return function (z) {
                          p[A] = z;
                          t--;
                          0 == t && l(p);
                        };
                      }
                      var p = [],
                        t = 0;
                      do p.push(void 0), t++, c(k.value).Gb(n(p.length - 1), m), (k = h.next());
                      while (!k.done);
                    });
              };
              return e;
            },
            'es6'
          );
          Xc(
            'Object.setPrototypeOf',
            function (a) {
              return a || ed;
            },
            'es6'
          );
          var pd = function (a, b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            },
            qd =
              Vc && 'function' == typeof _.y(Object, 'assign')
                ? _.y(Object, 'assign')
                : function (a, b) {
                    for (var c = 1; c < arguments.length; c++) {
                      var d = arguments[c];
                      if (d) for (var e in d) pd(d, e) && (a[e] = d[e]);
                    }
                    return a;
                  };
          Xc(
            'Object.assign',
            function (a) {
              return a || qd;
            },
            'es6'
          );
          var rd = function (a, b, c) {
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
          Xc(
            'String.prototype.endsWith',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = rd(this, b, 'endsWith');
                    void 0 === c && (c = d.length);
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
                    return 0 >= e;
                  };
            },
            'es6'
          );
          var sd = function (a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
              var f = a[e];
              if (b.call(c, f, e, a)) return { i: e, Vc: f };
            }
            return { i: -1, Vc: void 0 };
          };
          Xc(
            'Array.prototype.find',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return sd(this, b, c).Vc;
                  };
            },
            'es6'
          );
          Xc(
            'String.prototype.startsWith',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = rd(this, b, 'startsWith'),
                      e = d.length,
                      f = b.length;
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
                    return g >= f;
                  };
            },
            'es6'
          );
          Xc(
            'String.prototype.repeat',
            function (a) {
              return a
                ? a
                : function (b) {
                    var c = rd(this, null, 'repeat');
                    if (0 > b || 1342177279 < b) throw new RangeError('Invalid count value');
                    b |= 0;
                    for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
                    return d;
                  };
            },
            'es6'
          );
          var td = function (a, b) {
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
            e[_.y(w.Symbol, 'iterator')] = function () {
              return e;
            };
            return e;
          };
          Xc(
            'Array.prototype.entries',
            function (a) {
              return a
                ? a
                : function () {
                    return td(this, function (b, c) {
                      return [b, c];
                    });
                  };
            },
            'es6'
          );
          Xc(
            'Array.prototype.keys',
            function (a) {
              return a
                ? a
                : function () {
                    return td(this, function (b) {
                      return b;
                    });
                  };
            },
            'es6'
          );
          Xc(
            'Array.prototype.values',
            function (a) {
              return a
                ? a
                : function () {
                    return td(this, function (b, c) {
                      return c;
                    });
                  };
            },
            'es8'
          );
          Xc(
            'Array.prototype.findIndex',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return sd(this, b, c).i;
                  };
            },
            'es6'
          );
          Xc(
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
          Xc(
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
                      if (f === b || _.y(Object, 'is').call(Object, f, b)) return !0;
                    }
                    return !1;
                  };
            },
            'es7'
          );
          Xc(
            'String.prototype.includes',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return -1 !== rd(this, b, 'includes').indexOf(b, c || 0);
                  };
            },
            'es6'
          );
          Xc(
            'Object.entries',
            function (a) {
              return a
                ? a
                : function (b) {
                    var c = [],
                      d;
                    for (d in b) pd(b, d) && c.push([d, b[d]]);
                    return c;
                  };
            },
            'es8'
          );
          Xc(
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
                    g = _.E(g);
                    for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
                  }
                };
              f.prototype.set = function (g, h) {
                if (!c(g)) throw Error('Invalid WeakMap key');
                if (!pd(g, d)) {
                  var k = new b();
                  Sc(g, d, { value: k });
                }
                if (!pd(g, d)) throw Error('WeakMap key fail: ' + g);
                g[d][this.j] = h;
                return this;
              };
              f.prototype.get = function (g) {
                return c(g) && pd(g, d) ? g[d][this.j] : void 0;
              };
              f.prototype.has = function (g) {
                return c(g) && pd(g, d) && pd(g[d], this.j);
              };
              f.prototype.delete = function (g) {
                return c(g) && pd(g, d) && pd(g[d], this.j) ? delete g[d][this.j] : !1;
              };
              return f;
            },
            'es6'
          );
          Xc(
            'Map',
            function (a) {
              if (
                (function () {
                  if (
                    !a ||
                    'function' != typeof a ||
                    !_.y(a.prototype, 'entries') ||
                    'function' != typeof Object.seal
                  )
                    return !1;
                  try {
                    var h = Object.seal({ x: 4 }),
                      k = new a(_.E([[h, 's']]));
                    if (
                      's' != k.get(h) ||
                      1 != k.size ||
                      k.get({ x: 4 }) ||
                      k.set({ x: 4 }, 't') != k ||
                      2 != k.size
                    )
                      return !1;
                    var l = _.y(k, 'entries').call(k),
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
              var b = new w.WeakMap(),
                c = function (h) {
                  this.l = {};
                  this.j = f();
                  this.size = 0;
                  if (h) {
                    h = _.E(h);
                    for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
                  }
                };
              c.prototype.set = function (h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.l[l.id] = []);
                l.na
                  ? (l.na.value = k)
                  : ((l.na = { next: this.j, Ja: this.j.Ja, head: this.j, key: h, value: k }),
                    l.list.push(l.na),
                    (this.j.Ja.next = l.na),
                    (this.j.Ja = l.na),
                    this.size++);
                return this;
              };
              c.prototype.delete = function (h) {
                h = d(this, h);
                return h.na && h.list
                  ? (h.list.splice(h.index, 1),
                    h.list.length || delete this.l[h.id],
                    (h.na.Ja.next = h.na.next),
                    (h.na.next.Ja = h.na.Ja),
                    (h.na.head = null),
                    this.size--,
                    !0)
                  : !1;
              };
              c.prototype.clear = function () {
                this.l = {};
                this.j = this.j.Ja = f();
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
                for (var l = _.y(this, 'entries').call(this), m; !(m = l.next()).done; )
                  (m = m.value), h.call(k, m[1], m[0], this);
              };
              c.prototype[_.y(w.Symbol, 'iterator')] = _.y(c.prototype, 'entries');
              var d = function (h, k) {
                  var l = k && typeof k;
                  'object' == l || 'function' == l
                    ? b.has(k)
                      ? (l = b.get(k))
                      : ((l = '' + ++g), b.set(k, l))
                    : (l = 'p_' + k);
                  var m = h.l[l];
                  if (m && pd(h.l, l))
                    for (h = 0; h < m.length; h++) {
                      var n = m[h];
                      if ((k !== k && n.key !== n.key) || k === n.key)
                        return { id: l, list: m, index: h, na: n };
                    }
                  return { id: l, list: m, index: -1, na: void 0 };
                },
                e = function (h, k) {
                  var l = h.j;
                  return Yc(function () {
                    if (l) {
                      for (; l.head != h.j; ) l = l.Ja;
                      for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
                      l = null;
                    }
                    return { done: !0, value: void 0 };
                  });
                },
                f = function () {
                  var h = {};
                  return (h.Ja = h.next = h.head = h);
                },
                g = 0;
              return c;
            },
            'es6'
          );
          Xc(
            'Set',
            function (a) {
              if (
                (function () {
                  if (
                    !a ||
                    'function' != typeof a ||
                    !_.y(a.prototype, 'entries') ||
                    'function' != typeof Object.seal
                  )
                    return !1;
                  try {
                    var c = Object.seal({ x: 4 }),
                      d = new a(_.E([c]));
                    if (
                      !d.has(c) ||
                      1 != d.size ||
                      d.add(c) != d ||
                      1 != d.size ||
                      d.add({ x: 4 }) != d ||
                      2 != d.size
                    )
                      return !1;
                    var e = _.y(d, 'entries').call(d),
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
                this.j = new w.Map();
                if (c) {
                  c = _.E(c);
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
                return _.y(this.j, 'entries').call(this.j);
              };
              b.prototype.values = function () {
                return _.y(this.j, 'values').call(this.j);
              };
              b.prototype.keys = _.y(b.prototype, 'values');
              b.prototype[_.y(w.Symbol, 'iterator')] = _.y(b.prototype, 'values');
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
          Xc(
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
          Xc(
            'Number.isInteger',
            function (a) {
              return a
                ? a
                : function (b) {
                    return _.y(Number, 'isFinite').call(Number, b) ? b === Math.floor(b) : !1;
                  };
            },
            'es6'
          );
          Xc(
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
                        'undefined' != typeof w.Symbol &&
                        _.y(w.Symbol, 'iterator') &&
                        b[_.y(w.Symbol, 'iterator')];
                    if ('function' == typeof f) {
                      b = f.call(b);
                      for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
                    } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
                    return e;
                  };
            },
            'es6'
          );
          Xc(
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
                    d = _.y(Array, 'from').call(Array, d, function (f) {
                      return e.resolve(f).then(b, c);
                    });
                    return e.all(d);
                  };
            },
            'es_2020'
          );
          Xc(
            'String.prototype.padStart',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = rd(this, null, 'padStart');
                    b -= d.length;
                    c = void 0 !== c ? String(c) : ' ';
                    return (
                      (0 < b && c
                        ? _.y(c, 'repeat')
                            .call(c, Math.ceil(b / c.length))
                            .substring(0, b)
                        : '') + d
                    );
                  };
            },
            'es8'
          );
          _.I = this || self;
          wd = function (a) {
            if (a && a != _.I) return ud(a.document);
            null === vd && (vd = ud(_.I.document));
            return vd;
          };
          xd = /^[\w+/_-]+[=]{0,2}$/;
          vd = null;
          ud = function (a) {
            return (a = a.querySelector && a.querySelector('script[nonce]')) &&
              (a = a.nonce || a.getAttribute('nonce')) &&
              xd.test(a)
              ? a
              : '';
          };
          _.yd = function () {};
          zd = function (a) {
            a.$a = void 0;
            a.D = function () {
              return a.$a ? a.$a : (a.$a = new a());
            };
          };
          Ad = function (a) {
            var b = typeof a;
            b = 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
            return 'array' == b || ('object' == b && 'number' == typeof a.length);
          };
          _.ha = function (a) {
            var b = typeof a;
            return ('object' == b && null != a) || 'function' == b;
          };
          ia = function (a) {
            return (Object.prototype.hasOwnProperty.call(a, Bd) && a[Bd]) || (a[Bd] = ++Cd);
          };
          Bd = 'closure_uid_' + ((1000000000 * Math.random()) >>> 0);
          Cd = 0;
          Dd = function (a, b, c) {
            return a.call.apply(a.bind, arguments);
          };
          Ed = function (a, b, c) {
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
          _.Fd = function (a, b, c) {
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf('native code')
              ? (_.Fd = Dd)
              : (_.Fd = Ed);
            return _.Fd.apply(null, arguments);
          };
          _.Gd = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
              var d = c.slice();
              d.push.apply(d, arguments);
              return a.apply(this, d);
            };
          };
          Hd = function () {
            return Date.now();
          };
          Id = function (a, b) {
            function c () {}
            c.prototype = b.prototype;
            a.Md = b.prototype;
            a.prototype = new c();
            a.prototype.constructor = a;
            a.He = function (d, e, f) {
              for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
              return b.prototype[e].apply(d, g);
            };
          };
          var ab = function (a, b) {
            var c = void 0;
            return new (c || (c = w.Promise))(function (d, e) {
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
          var Jd;
          var Ld;
          _.Kd = function (a, b) {
            Array.prototype.forEach.call(a, b, void 0);
          };
          _.Hb = function (a, b) {
            return Array.prototype.filter.call(a, b, void 0);
          };
          _.Fb = function (a, b) {
            return Array.prototype.map.call(a, b, void 0);
          };
          Ld = function (a, b) {
            return Array.prototype.reduce.call(a, b, 0);
          };
          _.Md = function (a, b) {
            return Array.prototype.some.call(a, b, void 0);
          };
          var Nd, Od, Ta, Qd, Rd;
          Nd = function () {
            return !0;
          };
          Od = function () {
            return null;
          };
          Ta = function (a) {
            var b = !1,
              c;
            return function () {
              b || ((c = a()), (b = !0));
              return c;
            };
          };
          _.Pd = function (a) {
            var b = a;
            return function () {
              if (b) {
                var c = b;
                b = null;
                c();
              }
            };
          };
          Qd = function (a, b, c) {
            var d = 0,
              e = !1,
              f = [],
              g = function () {
                d = 0;
                e && ((e = !1), h());
              },
              h = function () {
                d = _.I.setTimeout(g, b);
                a.apply(c, f);
              };
            return function (k) {
              f = arguments;
              d ? (e = !0) : h();
            };
          };
          Rd = function (a) {
            return 'function' === typeof a;
          };
          var Sd = function (a, b) {
              for (var c in a) b.call(void 0, a[c], c, a);
            },
            Td = function (a, b) {
              return null !== a && b in a;
            },
            Ud = function (a, b) {
              for (var c in a) if (b.call(void 0, a[c], c, a)) return c;
            },
            Vd = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
              ' '
            ),
            Wd = function (a, b) {
              for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Vd.length; f++)
                  (c = Vd[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
              }
            },
            Xd = function (a) {
              var b = arguments.length;
              if (1 == b && Array.isArray(arguments[0])) return Xd.apply(null, arguments[0]);
              for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
              return c;
            };
          var $d = function (a, b) {
            this.j = (a === Yd && b) || '';
            this.l = Zd;
          };
          $d.prototype.qb = !0;
          $d.prototype.pb = function () {
            return this.j;
          };
          var ae = function (a) {
              return a instanceof $d && a.constructor === $d && a.l === Zd
                ? a.j
                : 'type_error:Const';
            },
            be = function (a) {
              return new $d(Yd, a);
            },
            Zd = {},
            Yd = {};
          var de = function (a, b) {
            this.j = b === ce ? a : '';
          };
          de.prototype.qb = !0;
          de.prototype.pb = function () {
            return this.j.toString();
          };
          var he = function (a, b) {
              a = ee.exec(Ya(a).toString());
              var c = a[3] || '';
              return fe(a[1] + ge('?', a[2] || '', b) + ge('#', c, void 0));
            },
            Ya = function (a) {
              return a instanceof de && a.constructor === de
                ? a.j
                : 'type_error:TrustedResourceUrl';
            },
            hb = function (a, b) {
              var c = ae(a);
              if (!je.test(c)) throw Error('Invalid TrustedResourceUrl format: ' + c);
              a = c.replace(ke, function (d, e) {
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
                return d instanceof $d ? ae(d) : encodeURIComponent(String(d));
              });
              return fe(a);
            },
            ke = /%{(\w+)}/g,
            je = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            ee = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
            ce = {},
            fe = function (a) {
              return new de(a, ce);
            },
            ge = function (a, b, c) {
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
          var le = function (a, b) {
              var c = a.length - b.length;
              return 0 <= c && a.indexOf(b, c) == c;
            },
            me = function (a) {
              return /^[\s\xa0]*$/.test(a);
            },
            ne = function (a) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
            },
            oe = /&/g,
            pe = /</g,
            qe = />/g,
            re = /"/g,
            se = /'/g,
            te = /\x00/g,
            ue = /[\x00&<>"']/,
            we = function (a, b) {
              var c = 0;
              a = ne(String(a)).split('.');
              b = ne(String(b)).split('.');
              for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || '',
                  g = b[e] || '';
                do {
                  f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                  g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
                  if (0 == f[0].length && 0 == g[0].length) break;
                  c =
                    ve(
                      0 == f[1].length ? 0 : parseInt(f[1], 10),
                      0 == g[1].length ? 0 : parseInt(g[1], 10)
                    ) ||
                    ve(0 == f[2].length, 0 == g[2].length) ||
                    ve(f[2], g[2]);
                  f = f[3];
                  g = g[3];
                } while (0 == c);
              }
              return c;
            },
            ve = function (a, b) {
              return a < b ? -1 : a > b ? 1 : 0;
            };
          var Ae, xe;
          _.ye = function (a, b) {
            this.j = b === xe ? a : '';
          };
          _.ye.prototype.qb = !0;
          _.ye.prototype.pb = function () {
            return this.j.toString();
          };
          _.ze = function (a) {
            return a instanceof _.ye && a.constructor === _.ye ? a.j : 'type_error:SafeUrl';
          };
          Ae = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
          _.Be = function (a) {
            if (a instanceof _.ye) return a;
            a = 'object' == typeof a && a.qb ? a.pb() : String(a);
            Ae.test(a) || (a = 'about:invalid#zClosurez');
            return new _.ye(a, xe);
          };
          xe = {};
          var Ce;
          a: {
            var De = _.I.navigator;
            if (De) {
              var Ee = De.userAgent;
              if (Ee) {
                Ce = Ee;
                break a;
              }
            }
            Ce = '';
          }
          var N = function (a) {
              return -1 != Ce.indexOf(a);
            },
            Fe = function (a) {
              for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; (d = b.exec(a)); )
                c.push([d[1], d[2], d[3] || void 0]);
              return c;
            };
          var Ge = function () {
              return N('Trident') || N('MSIE');
            },
            He = function () {
              return N('Firefox') || N('FxiOS');
            },
            Je = function () {
              return (
                N('Safari') &&
                !(
                  Ie() ||
                  N('Coast') ||
                  N('Opera') ||
                  N('Edge') ||
                  N('Edg/') ||
                  N('OPR') ||
                  He() ||
                  N('Silk') ||
                  N('Android')
                )
              );
            },
            Ie = function () {
              return (N('Chrome') || N('CriOS')) && !N('Edge');
            },
            Le = function () {
              function a (e) {
                e = ba(e, d);
                return c[e] || '';
              }
              var b = Ce;
              if (Ge()) return Ke(b);
              b = Fe(b);
              var c = {};
              _.Kd(b, function (e) {
                c[e[0]] = e[1];
              });
              var d = _.Gd(Td, c);
              return N('Opera')
                ? a(['Version', 'Opera'])
                : N('Edge')
                ? a(['Edge'])
                : N('Edg/')
                ? a(['Edg'])
                : Ie()
                ? a(['Chrome', 'CriOS', 'HeadlessChrome'])
                : ((b = b[2]) && b[1]) || '';
            },
            Ke = function (a) {
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
          var Pe;
          _.Ne = function (a, b, c) {
            this.j = c === _.Me ? a : '';
          };
          _.Ne.prototype.qb = !0;
          _.Ne.prototype.pb = function () {
            return this.j.toString();
          };
          _.Oe = function (a) {
            return a instanceof _.Ne && a.constructor === _.Ne ? a.j : 'type_error:SafeHtml';
          };
          _.Me = {};
          Pe = new _.Ne((_.I.trustedTypes && _.I.trustedTypes.emptyHTML) || '', 0, _.Me);
          var Za;
          _.Qe = Ta(function () {
            var a = document.createElement('div'),
              b = document.createElement('div');
            b.appendChild(document.createElement('div'));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = _.Oe(Pe);
            return !b.parentElement;
          });
          Za = function (a) {
            var b = wd(a.ownerDocument && a.ownerDocument.defaultView);
            b && a.setAttribute('nonce', b);
          };
          var Re, Se, Te, Ue, Ve, Xe;
          Re = function (a) {
            ue.test(a) &&
              (-1 != a.indexOf('&') && (a = a.replace(oe, '&amp;')),
              -1 != a.indexOf('<') && (a = a.replace(pe, '&lt;')),
              -1 != a.indexOf('>') && (a = a.replace(qe, '&gt;')),
              -1 != a.indexOf('"') && (a = a.replace(re, '&quot;')),
              -1 != a.indexOf("'") && (a = a.replace(se, '&#39;')),
              -1 != a.indexOf('\0') && (a = a.replace(te, '&#0;')));
            return a;
          };
          Se = _.y(String.prototype, 'repeat')
            ? function (a, b) {
                return _.y(a, 'repeat').call(a, b);
              }
            : function (a, b) {
                return Array(b + 1).join(a);
              };
          Te = function (a) {
            a = String(a);
            var b = a.indexOf('.');
            -1 == b && (b = a.length);
            return Se('0', Math.max(0, 2 - b)) + a;
          };
          Ue = function () {
            return (
              Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(Math.floor(2147483648 * Math.random()) ^ Hd()).toString(36)
            );
          };
          Ve = (2147483648 * Math.random()) | 0;
          _.We = function (a) {
            return String(a).replace(/\-([a-z])/g, function (b, c) {
              return c.toUpperCase();
            });
          };
          Xe = function (a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
              return c + d.toUpperCase();
            });
          };
          var qa = 0,
            ra = 0;
          var Ye = function () {
            this.j = [];
          };
          Ye.prototype.length = function () {
            return this.j.length;
          };
          var Ze = function (a) {
              var b = a.j;
              a.j = [];
              return b;
            },
            $e = function (a) {
              for (var b = qa, c = ra; 0 < c || 127 < b; )
                a.j.push((b & 127) | 128), (b = ((b >>> 7) | (c << 25)) >>> 0), (c >>>= 7);
              a.j.push(b);
            },
            af = function (a, b) {
              for (; 127 < b; ) a.j.push((b & 127) | 128), (b >>>= 7);
              a.j.push(b);
            };
          var bf = function () {
            return N('iPhone') && !N('iPod') && !N('iPad');
          };
          var cf = function (a) {
            cf[' '](a);
            return a;
          };
          cf[' '] = _.yd;
          var df = function (a, b) {
              try {
                return cf(a[b]), !0;
              } catch (c) {}
              return !1;
            },
            Xb = function (a, b, c, d) {
              d = d ? d(b) : b;
              return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : (a[d] = c(b));
            };
          var ef, gf, hf, jf, kf, lf, mf, nf, of, pf, qf, rf;
          ef = N('Opera');
          _.ff = Ge();
          gf = N('Edge');
          hf = gf || _.ff;
          jf =
            N('Gecko') &&
            !(-1 != Ce.toLowerCase().indexOf('webkit') && !N('Edge')) &&
            !(N('Trident') || N('MSIE')) &&
            !N('Edge');
          kf = -1 != Ce.toLowerCase().indexOf('webkit') && !N('Edge');
          lf = kf && N('Mobile');
          mf = N('Android');
          nf = bf();
          of = N('iPad');
          pf = N('iPod');
          qf = function () {
            var a = _.I.document;
            return a ? a.documentMode : void 0;
          };
          a: {
            var sf = '',
              tf = (function () {
                var a = Ce;
                if (jf) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (gf) return /Edge\/([\d\.]+)/.exec(a);
                if (_.ff) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (kf) return /WebKit\/(\S+)/.exec(a);
                if (ef) return /(?:Version)[ \/]?(\S+)/.exec(a);
              })();
            tf && (sf = tf ? tf[1] : '');
            if (_.ff) {
              var uf = qf();
              if (null != uf && uf > parseFloat(sf)) {
                rf = String(uf);
                break a;
              }
            }
            rf = sf;
          }
          var vf = rf,
            wf = {},
            xf = function (a) {
              return Xb(wf, a, function () {
                return 0 <= we(vf, a);
              });
            },
            yf;
          if (_.I.document && _.ff) {
            var zf = qf();
            yf = zf ? zf : parseInt(vf, 10) || void 0;
          } else yf = void 0;
          var Af = yf;
          var Bf = Ie(),
            Cf = Je() && !(bf() || N('iPad') || N('iPod'));
          var Df = {},
            Ef = null,
            Ff = jf || (kf && !Cf) || ef || 'function' == typeof _.I.btoa,
            Gf = function (a, b) {
              void 0 === b && (b = 0);
              if (!Ef) {
                Ef = {};
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
                  Df[e] = f;
                  for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Ef[h] && (Ef[h] = g);
                  }
                }
              }
              b = Df[b];
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
            Hf = function (a, b) {
              if (Ff && !b) a = _.I.btoa(a);
              else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                  var f = a.charCodeAt(e);
                  255 < f && ((c[d++] = f & 255), (f >>= 8));
                  c[d++] = f;
                }
                a = Gf(c, b);
              }
              return a;
            };
          var If = function () {
              this.B = [];
              this.l = 0;
              this.j = new Ye();
            },
            Jf = function (a, b) {
              af(a.j, 8 * b + 2);
              b = Ze(a.j);
              a.B.push(b);
              a.l += b.length;
              b.push(a.l);
              return b;
            },
            Kf = function (a, b) {
              var c = b.pop();
              for (c = a.l + a.j.length() - c; 127 < c; )
                b.push((c & 127) | 128), (c >>>= 7), a.l++;
              b.push(c);
              a.l++;
            },
            Lf = function (a) {
              for (
                var b = new Uint8Array(a.l + a.j.length()), c = a.B, d = c.length, e = 0, f = 0;
                f < d;
                f++
              ) {
                var g = c[f];
                b.set(g, e);
                e += g.length;
              }
              c = Ze(a.j);
              b.set(c, e);
              a.B = [b];
              return b;
            },
            Mf = function (a, b, c) {
              if (null != c)
                if ((af(a.j, 8 * b), (a = a.j), 0 <= c)) af(a, c);
                else {
                  for (b = 0; 9 > b; b++) a.j.push((c & 127) | 128), (c >>= 7);
                  a.j.push(1);
                }
            },
            Nf = function (a, b, c) {
              null != c && (af(a.j, 8 * b), (a = a.j), sa(c), $e(a));
            },
            Of = function (a, b, c) {
              null != c && (af(a.j, 8 * b), (a = a.j), sa(c), $e(a));
            },
            Pf = function (a, b, c) {
              if (null != c) {
                b = Jf(a, b);
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
                Kf(a, b);
              }
            },
            Rf = function (a, b, c) {
              var d = Qf;
              null != c && ((b = Jf(a, b)), d(c, a), Kf(a, b));
            },
            Sf = function (a, b, c, d) {
              if (null != c)
                for (var e = 0; e < c.length; e++) {
                  var f = Jf(a, b);
                  d(c[e], a);
                  Kf(a, f);
                }
            };
          var O = function () {},
            Tf = 'function' == typeof Uint8Array,
            Wf = function (a, b, c, d) {
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
                      (Tf && e instanceof Uint8Array)
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
                      ? ((e += a.B), (a.la[e] = a.la[e] || Uf))
                      : (Vf(a), (a.l[e] = a.l[e] || Uf));
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
            Uf = [],
            Vf = function (a) {
              var b = a.o + a.B;
              a.la[b] || (a.l = a.la[b] = {});
            },
            C = function (a, b) {
              if (b < a.o) {
                b += a.B;
                var c = a.la[b];
                return c !== Uf ? c : (a.la[b] = []);
              }
              if (a.l) return (c = a.l[b]), c === Uf ? (a.l[b] = []) : c;
            },
            Xf = function (a, b) {
              return null != C(a, b);
            },
            Yf = function (a, b) {
              a = C(a, b);
              return null == a ? a : +a;
            },
            r = function (a, b) {
              a = C(a, b);
              return null == a ? a : !!a;
            },
            Zf = function (a) {
              return null == a || 'string' === typeof a
                ? a
                : Tf && a instanceof Uint8Array
                ? Gf(a)
                : null;
            },
            $f = function (a, b, c) {
              a = C(a, b);
              return null == a ? c : a;
            },
            ag = function (a) {
              var b = !1;
              b = void 0 === b ? !1 : b;
              a = r(a, 12);
              return null == a ? b : a;
            },
            bg = function (a) {
              var b = 1;
              b = void 0 === b ? 0 : b;
              a = Yf(a, 2);
              return null == a ? b : a;
            },
            D = function (a, b, c) {
              b < a.o ? (a.la[b + a.B] = c) : (Vf(a), (a.l[b] = c));
              return a;
            },
            dg = function (a, b, c) {
              return cg(a, b, c, !1);
            },
            cg = function (a, b, c, d) {
              c !== d ? D(a, b, c) : b < a.o ? (a.la[b + a.B] = null) : (Vf(a), delete a.l[b]);
              return a;
            },
            eg = function (a, b, c) {
              C(a, b).push(c);
            },
            fg = function (a, b, c) {
              a.j || (a.j = {});
              if (!a.j[c]) {
                var d = C(a, c);
                d && (a.j[c] = new b(d));
              }
              return a.j[c];
            },
            G = function (a, b, c) {
              a.j || (a.j = {});
              if (!a.j[c]) {
                for (var d = C(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.j[c] = e;
              }
              b = a.j[c];
              b == Uf && (b = a.j[c] = []);
              return b;
            },
            gg = function (a, b, c) {
              a.j || (a.j = {});
              var d = c ? c.la : c;
              a.j[b] = c;
              return D(a, b, d);
            },
            hg = function (a, b, c) {
              a.j || (a.j = {});
              c = c || [];
              for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].la;
              a.j[b] = c;
              return D(a, b, d);
            },
            ig = function (a, b, c, d) {
              var e = G(a, d, b);
              c = c ? c : new d();
              a = C(a, b);
              e.push(c);
              a.push(c.la);
            };
          O.prototype.m = Tf
            ? function () {
                var a = Uint8Array.prototype.toJSON;
                Uint8Array.prototype.toJSON = function () {
                  return Gf(this);
                };
                try {
                  return JSON.stringify(this.la && this.la, jg);
                } finally {
                  Uint8Array.prototype.toJSON = a;
                }
              }
            : function () {
                return JSON.stringify(this.la && this.la, jg);
              };
          var jg = function (a, b) {
              return 'number' !== typeof b || (!isNaN(b) && Infinity !== b && -Infinity !== b)
                ? b
                : String(b);
            },
            kg = function (a, b) {
              return new a(b ? JSON.parse(b) : null);
            },
            lg = function (a) {
              if (Array.isArray(a)) {
                for (var b = Array(a.length), c = 0; c < a.length; c++) {
                  var d = a[c];
                  null != d && (b[c] = 'object' == typeof d ? lg(d) : d);
                }
                return b;
              }
              if (Tf && a instanceof Uint8Array) return new Uint8Array(a);
              b = {};
              for (c in a) (d = a[c]), null != d && (b[c] = 'object' == typeof d ? lg(d) : d);
              return b;
            };
          var mg = document,
            ng = window;
          var og = function (a) {
            Wf(this, a, null, null);
          };
          Id(og, O);
          var pg = function (a) {
            Wf(this, a, null, null);
          };
          Id(pg, O);
          var La = function (a) {
            this.j = a || { cookie: '' };
          };
          La.prototype.set = function (a, b, c) {
            const $___old_c32c55962dc78b89 = {}.constructor.getOwnPropertyDescriptor(
              Document.prototype,
              'cookie'
            );
            try {
              if ($___old_c32c55962dc78b89)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___stub_0b13ce4eb5645a04.cookie
                ));
              return function () {
                var d = !1;
                if ('object' === typeof c) {
                  var e = c.Ke;
                  d = c.Hd || !1;
                  var f = c.domain || void 0;
                  var g = c.path || void 0;
                  var h = c.Hc;
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
              }.apply(this, arguments);
            } finally {
              if ($___old_c32c55962dc78b89)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___old_c32c55962dc78b89
                ));
            }
          };
          La.prototype.get = function (a, b) {
            const $___old_43836f9f49decbcb = {}.constructor.getOwnPropertyDescriptor(
              Document.prototype,
              'cookie'
            );
            try {
              if ($___old_43836f9f49decbcb)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___stub_0b13ce4eb5645a04.cookie
                ));
              return function () {
                for (
                  var c = a + '=', d = (this.j.cookie || '').split(';'), e = 0, f;
                  e < d.length;
                  e++
                ) {
                  f = ne(d[e]);
                  if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
                  if (f == a) return '';
                }
                return b;
              }.apply(this, arguments);
            } finally {
              if ($___old_43836f9f49decbcb)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___old_43836f9f49decbcb
                ));
            }
          };
          var qg = function (a, b) {
            a.get(b);
            a.set(b, '', { Hc: 0, path: void 0, domain: void 0 });
          };
          La.prototype.isEmpty = function () {
            return !this.j.cookie;
          };
          La.prototype.clear = function () {
            for (
              var a = (this.j.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
              f < a.length;
              f++
            )
              (e = ne(a[f])),
                (d = e.indexOf('=')),
                -1 == d
                  ? (b.push(''), c.push(e))
                  : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            for (a = b.length - 1; 0 <= a; a--) qg(this, b[a]);
          };
          var rg = function (a) {
              return (a = new La(a).get('DATA_USE_CONSENT', '')) ? a : null;
            },
            sg = function (a) {
              var b = (b = new La(a).get('FCCDCF', '')) ? b : null;
              try {
                var c = b ? kg(og, b) : null;
              } catch (d) {
                c = null;
              }
              if (!c) return rg(a);
              c = fg(c, pg, 3);
              if (!c || !Xf(c, 1)) return rg(a);
              a = C(c, 2);
              b = Date.now();
              if (a) {
                if (b < a || b > a + 33696000000) return null;
              } else return null;
              return C(c, 1);
            };
          var ug = function (a) {
            Wf(this, a, tg, null);
          };
          Id(ug, O);
          var tg = [1, 2, 3, 4];
          var vg = function (a, b) {
            var c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || '';
            this.id = b.id || 'jserror';
            this.meta = c;
          };
          var ta;
          ta = Ta(function () {
            var a = !1;
            try {
              var b = Object.defineProperty({}, 'passive', {
                get: function () {
                  a = !0;
                },
              });
              _.I.addEventListener('test', null, b);
            } catch (c) {}
            return a;
          });
          _.x = function (a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, ua(d)), !0) : !1;
          };
          _.ub = function (a, b, c, d) {
            return a.removeEventListener ? (a.removeEventListener(b, c, ua(d)), !0) : !1;
          };
          var wg = !_.ff || 9 <= Number(Af),
            xg = _.ff || ef || kf;
          _.Wa = function (a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0;
          };
          _.Wa.prototype.ceil = function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
          };
          _.Wa.prototype.floor = function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
          };
          _.Wa.prototype.round = function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
          };
          _.yg = function (a, b) {
            this.width = a;
            this.height = b;
          };
          _.q = _.yg.prototype;
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
          var Bg, Dg, Cg, Gg, Hg, Jg, Ng, zg;
          Bg = function (a) {
            return a ? new zg(_.Ag(a)) : Jd || (Jd = new zg());
          };
          Dg = function (a, b) {
            Sd(b, function (c, d) {
              c && 'object' == typeof c && c.qb && (c = c.pb());
              'style' == d
                ? (a.style.cssText = c)
                : 'class' == d
                ? (a.className = c)
                : 'for' == d
                ? (a.htmlFor = c)
                : Cg.hasOwnProperty(d)
                ? a.setAttribute(Cg[d], c)
                : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
                ? a.setAttribute(d, c)
                : (a[d] = c);
            });
          };
          Cg = {
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
          _.Fg = function (a) {
            a = a.document;
            a = _.Eg(a) ? a.documentElement : a.body;
            return new _.yg(a.clientWidth, a.clientHeight);
          };
          Gg = function (a) {
            return a.scrollingElement
              ? a.scrollingElement
              : !kf && _.Eg(a)
              ? a.documentElement
              : a.body || a.documentElement;
          };
          _.Ig = function (a) {
            return a ? Hg(a) : window;
          };
          Hg = function (a) {
            return a.parentWindow || a.defaultView;
          };
          Jg = function (a, b, c, d) {
            function e (h) {
              h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
            }
            for (; d < c.length; d++) {
              var f = c[d];
              if (!Ad(f) || (_.ha(f) && 0 < f.nodeType)) e(f);
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
                _.Kd(g ? ea(f) : f, e);
              }
            }
          };
          _.Kg = function (a, b) {
            b = String(b);
            'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
            return a.createElement(b);
          };
          _.Eg = function (a) {
            return 'CSS1Compat' == a.compatMode;
          };
          _.Lg = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null;
          };
          _.Mg = function (a) {
            var b;
            if (
              xg &&
              !(_.ff && xf('9') && !xf('10') && _.I.SVGElement && a instanceof _.I.SVGElement) &&
              (b = a.parentElement)
            )
              return b;
            b = a.parentNode;
            return _.ha(b) && 1 == b.nodeType ? b : null;
          };
          _.Ag = function (a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document;
          };
          Ng = function (a) {
            try {
              return a.contentWindow || (a.contentDocument ? _.Ig(a.contentDocument) : null);
            } catch (b) {}
            return null;
          };
          zg = function (a) {
            this.j = a || _.I.document || document;
          };
          _.q = zg.prototype;
          _.q.getElementsByTagName = function (a, b) {
            return (b || this.j).getElementsByTagName(String(a));
          };
          _.q.bd = function (a, b, c) {
            var d = this.j,
              e = arguments,
              f = String(e[0]),
              g = e[1];
            if (!wg && g && (g.name || g.type)) {
              f = ['<', f];
              g.name && f.push(' name="', Re(g.name), '"');
              if (g.type) {
                f.push(' type="', Re(g.type), '"');
                var h = {};
                Wd(h, g);
                delete h.type;
                g = h;
              }
              f.push('>');
              f = f.join('');
            }
            f = _.Kg(d, f);
            g &&
              ('string' === typeof g
                ? (f.className = g)
                : Array.isArray(g)
                ? (f.className = g.join(' '))
                : Dg(f, g));
            2 < e.length && Jg(d, f, e, 2);
            return f;
          };
          _.q.createElement = function (a) {
            return _.Kg(this.j, a);
          };
          _.q.createTextNode = function (a) {
            return this.j.createTextNode(String(a));
          };
          _.q.append = function (a, b) {
            Jg(_.Ag(a), a, arguments, 1);
          };
          var Og = function () {
            return N('iPad') || (N('Android') && !N('Mobile')) || N('Silk');
          };
          var Pg, Rg, Sg, xc;
          Pg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
          _.Qg = function (a) {
            return a.match(Pg);
          };
          Rg = function (a) {
            return a ? decodeURI(a) : a;
          };
          Sg = function (a, b, c) {
            if (Array.isArray(b)) for (var d = 0; d < b.length; d++) Sg(a, String(b[d]), c);
            else null != b && c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))));
          };
          xc = /#|$/;
          var Tg,
            Vg,
            Wg,
            Ug,
            Xg,
            Yg,
            Ua,
            $g,
            Lb,
            ah,
            bh,
            dh,
            eh,
            Zg,
            gh,
            hh,
            fh,
            ih,
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
            vh,
            wh,
            yh,
            Ah,
            Ch,
            Eh,
            Fh,
            Dh,
            Gh,
            Hh,
            Ih,
            Jh,
            Kh,
            Mh,
            Nh,
            Oh,
            Sb,
            Pc,
            Ph,
            Qh,
            Rh,
            Sh;
          Tg = function (a) {
            try {
              return !!a && null != a.location.href && df(a, 'foo');
            } catch (b) {
              return !1;
            }
          };
          Vg = function (a, b, c, d) {
            d = d || _.I;
            c && (d = Ug(d));
            for (c = 0; d && 40 > c++ && ((!b && !Tg(d)) || !a(d)); ) d = Ug(d);
          };
          Wg = function () {
            var a = _.I;
            Vg(function (b) {
              a = b;
              return !1;
            });
            return a;
          };
          Ug = function (a) {
            try {
              var b = a.parent;
              if (b && b != a) return b;
            } catch (c) {}
            return null;
          };
          Xg = function (a) {
            return Tg(a.top) ? a.top : null;
          };
          Yg = function (a, b) {
            var c = a.createElement('script');
            c.src = Ya(b);
            Za(c);
            return (a = a.getElementsByTagName('script')[0]) && a.parentNode
              ? (a.parentNode.insertBefore(c, a), c)
              : null;
          };
          Ua = function (a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
          };
          $g = function (a, b) {
            if (!Zg()) {
              var c = Math.random();
              if (c < b) return (c = Lb(_.I)), a[Math.floor(c * a.length)];
            }
            return null;
          };
          Lb = function (a) {
            if (!a.crypto) return Math.random();
            try {
              var b = new Uint32Array(1);
              a.crypto.getRandomValues(b);
              return b[0] / 65536 / 65536;
            } catch (c) {
              return Math.random();
            }
          };
          _.bc = function (a, b, c) {
            if (a)
              for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a);
          };
          ah = function (a) {
            for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
            return !0;
          };
          bh = function (a) {
            var b = [];
            _.bc(a, function (c, d) {
              b.push(d);
            });
            return b;
          };
          _.ch = function (a) {
            var b = [];
            _.bc(a, function (c) {
              b.push(c);
            });
            return b;
          };
          dh = function (a, b) {
            return Ud(a, function (c, d) {
              return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
            });
          };
          eh = function (a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++)
              c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
            return 0 < c ? c : 4294967296 + c;
          };
          Zg = Ta(function () {
            return (
              _.Md(
                [
                  'Google Web Preview',
                  'Mediapartners-Google',
                  'Google-Read-Aloud',
                  'Google-Adwords',
                ],
                fh
              ) || 0.0001 > Math.random()
            );
          });
          gh = function (a) {
            return Zg() ? null : Math.floor(1000 * Lb(a));
          };
          hh = function (a, b) {
            try {
              if (a) return a.setItem('google_experiment_mod', b), b;
            } catch (c) {}
            return null;
          };
          fh = function (a) {
            return -1 != Ce.indexOf(a);
          };
          ih = /^(-?[0-9.]{1,30})$/;
          _.jh = function (a, b) {
            return ih.test(a) && ((a = Number(a)), !isNaN(a)) ? a : void 0 == b ? null : b;
          };
          kh = function () {
            return /^true$/.test('false');
          };
          lh = function (a, b) {
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
          mh = function (a) {
            if (!a) return '';
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
              var c = b.exec(decodeURIComponent(a));
              if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : 'true';
            } catch (d) {}
            return '';
          };
          nh = {
            Wd: 'allow-forms',
            Xd: 'allow-modals',
            Yd: 'allow-orientation-lock',
            Zd: 'allow-pointer-lock',
            $d: 'allow-popups',
            ae: 'allow-popups-to-escape-sandbox',
            be: 'allow-presentation',
            ce: 'allow-same-origin',
            de: 'allow-scripts',
            ee: 'allow-top-navigation',
            fe: 'allow-top-navigation-by-user-activation',
          };
          oh = Ta(function () {
            return _.ch(nh);
          });
          ph = function (a) {
            var b = oh();
            return a.length
              ? _.Hb(b, function (c) {
                  return !_.ca(a, c);
                })
              : b;
          };
          qh = function () {
            var a = _.Kg(document, 'IFRAME'),
              b = {};
            _.Kd(oh(), function (c) {
              a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
            });
            return b;
          };
          rh = function (a) {
            a = a && a.toString && a.toString();
            return 'string' === typeof a && -1 != a.indexOf('[native code]');
          };
          sh = function (a, b) {
            try {
              return !(!a.frames || !a.frames[b]);
            } catch (c) {
              return !1;
            }
          };
          th = function (a, b) {
            for (var c = 0; 50 > c; ++c) {
              if (sh(a, b)) return a;
              if (!(a = Ug(a))) break;
            }
            return null;
          };
          uh = function (a) {
            if (!a || !a.frames) return null;
            if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
            try {
              var b = a.document,
                c = new zg(b),
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
          vh = Ta(function () {
            return !Og() && (N('iPod') || N('iPhone') || N('Android') || N('IEMobile'))
              ? 2
              : Og()
              ? 1
              : 0;
          });
          wh = function (a, b) {
            var c;
            for (c = void 0 === c ? 100 : c; a && c--; ) {
              if (a == b) return !0;
              a = a.parentElement;
            }
            return !1;
          };
          _.Bh = function (a, b) {
            a.style.setProperty
              ? _.bc(b, function (c, d) {
                  a.style.setProperty(d, c, 'important');
                })
              : (a.style.cssText = _.xh(
                  yh(
                    _.zh(a.style.cssText),
                    Ah(b, function (c) {
                      return c + ' !important';
                    })
                  )
                ));
          };
          yh =
            _.y(Object, 'assign') ||
            function (a, b) {
              for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                  for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
              }
              return a;
            };
          Ah = function (a, b) {
            var c = {},
              d;
            for (d in a)
              Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c;
          };
          Ch = function (a, b, c) {
            for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); ) a = a.parentElement;
          };
          Eh = function (a) {
            return Dh(a, function (b) {
              return 'fixed' == b.position || 'sticky' == b.position;
            });
          };
          Fh = function (a) {
            return Dh(a, function (b) {
              return (
                'left' == b['float'] ||
                'right' == b['float'] ||
                'left' == b.cssFloat ||
                'right' == b.cssFloat
              );
            });
          };
          Dh = function (a, b) {
            var c;
            for (c = void 0 === c ? 100 : c; a && c--; ) {
              var d = Ua(a, window);
              if (d) {
                if (b(d)) return !0;
                a = a.parentElement;
              }
            }
            return !1;
          };
          Gh = function (a) {
            if (!a) return null;
            a = a.transform;
            if (!a) return null;
            a = a.replace(/^.*\(([0-9., -]+)\)$/, '$1').split(/, /);
            return 6 != a.length ? null : _.Fb(a, parseFloat);
          };
          _.xh = function (a) {
            var b = [];
            _.bc(a, function (c, d) {
              null != c && '' !== c && b.push(d + ':' + c);
            });
            return b.length ? b.join(';') + ';' : '';
          };
          _.zh = function (a) {
            var b = {};
            if (a) {
              var c = /\s*:\s*/;
              _.Kd((a || '').split(/\s*;\s*/), function (d) {
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
          Hh = function (a) {
            _.I.console && _.I.console.warn && _.I.console.warn(a);
          };
          Ih = function (a, b) {
            b = aa(a, b);
            if (0 <= b) {
              var c = a[b];
              Array.prototype.splice.call(a, b, 1);
              return c;
            }
            return null;
          };
          Jh = [];
          Kh = function () {
            var a = Jh;
            Jh = [];
            a = _.E(a);
            for (var b = a.next(); !b.done; b = a.next()) {
              b = b.value;
              try {
                b();
              } catch (c) {}
            }
          };
          Mh = function (a) {
            Jh.push(a);
            1 == Jh.length &&
              (w.Promise
                ? w.Promise.resolve().then(Kh)
                : window.setImmediate
                ? setImmediate(Kh)
                : setTimeout(Kh, 0));
          };
          Nh = function (a) {
            return a.replace(/\\(n|r|\\)/g, function (b, c) {
              return 'n' == c ? '\n' : 'r' == c ? '\r' : '\\';
            });
          };
          Oh = function () {
            return Math.floor(Math.random() * Math.pow(2, 52));
          };
          Sb = function (a) {
            if ('number' !== typeof a.goog_pvsid)
              try {
                Object.defineProperty(a, 'goog_pvsid', { value: Oh(), configurable: !1 });
              } catch (b) {}
            return Number(a.goog_pvsid) || -1;
          };
          Pc = function (a, b) {
            'complete' === a.readyState || 'interactive' === a.readyState
              ? Mh(b)
              : a.addEventListener('DOMContentLoaded', b);
          };
          Ph = function (a) {
            return 'number' === typeof a && isFinite(a) && 0 == a % 1 && 0 < a;
          };
          Qh = function (a) {
            return 0 === a || Ph(a);
          };
          Rh = function (a, b) {
            var c = document.createElement('div');
            c.id = a;
            c.textContent = b;
            _.Bh(c, {
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
          Sh = function () {
            var a = _.v(462);
            return new w.Promise(function (b) {
              setTimeout(function () {
                return void b('');
              }, a);
            });
          };
          var Th = { re: 0, le: 1, ke: 2, je: 3, ue: 4, ve: 5, pe: 6, me: 7 };
          var Uh = function () {
              return sh(_.I.top, 'googlefcPresent');
            },
            Vh = function (a) {
              var b = document;
              try {
                var c = sg(b);
                var d = c ? kg(ug, c) : null;
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
            Wh = Ta(function () {
              var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
              try {
                return a.test(_.I.top.location.href);
              } catch (b) {
                return a.test(_.I.location.href);
              }
            }),
            Xh = function (a, b, c) {
              for (var d = bh(Th).length, e = [], f = 0; f < d; f++) e[f] = 0;
              Wh() && (a = !0);
              e[0] = a ? 1 : 2;
              d = void 0 !== c ? c : sh(_.I.top, 'GoogleSetNPA') || sh(Wg(), 'GoogleSetNPA');
              e[5] = d ? 1 : 2;
              e[4] = 2;
              c = !!_.I.googlefc || Uh();
              e[1] = c ? 1 : 2;
              f = Vh(b);
              0 != f
                ? (b = { Cc: f, Dc: 3 })
                : ((f = _.I.top),
                  (b = {
                    Cc: sh(f, 'googlefcInactive')
                      ? 4
                      : b && sh(f, 'googlefcPA-' + b)
                      ? 2
                      : sh(f, 'googlefcNPA')
                      ? 3
                      : 0,
                    Dc: 2,
                  }));
              f = b;
              b = f.Cc;
              e[f.Dc] = b;
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
              return { Pe: b, Bd: d, Jd: 0 == b && a && c, ld: e.join('.') };
            },
            Yh = function (a, b, c, d) {
              var e = Xh(a, b, d);
              e.Jd
                ? _.I.setTimeout(function () {
                    Yh(a, b, c, d);
                  }, 1000)
                : c(e);
            };
          var Zh = function (a) {
            Wf(this, a, null, null);
          };
          Id(Zh, O);
          _.Q = function () {
            this.fa = this.fa;
            this.V = this.V;
          };
          _.Q.prototype.fa = !1;
          _.Q.prototype.Aa = function () {
            this.fa || ((this.fa = !0), this.B());
          };
          _.ai = function (a, b) {
            _.R(a, _.Gd($h, b));
          };
          _.R = function (a, b) {
            a.fa ? b() : (a.V || (a.V = []), a.V.push(b));
          };
          _.Q.prototype.B = function () {
            if (this.V) for (; this.V.length; ) this.V.shift()();
          };
          var $h = function (a) {
            a && 'function' == typeof a.Aa && a.Aa();
          };
          var bi = function (a) {
            this.l = 0;
            this.B = a || 100;
            this.j = [];
          };
          _.q = bi.prototype;
          _.q.add = function (a) {
            var b = this.j[this.l];
            this.j[this.l] = a;
            this.l = (this.l + 1) % this.B;
            return b;
          };
          _.q.get = function (a) {
            a = ci(this, a);
            return this.j[a];
          };
          _.q.set = function (a, b) {
            a = ci(this, a);
            this.j[a] = b;
          };
          _.q.isEmpty = function () {
            return 0 == this.j.length;
          };
          _.q.clear = function () {
            this.l = this.j.length = 0;
          };
          var di = function (a) {
              for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++)
                c.push(a.get(d));
              return c;
            },
            ci = function (a, b) {
              if (b >= a.j.length) throw Error('Out of bounds exception');
              return a.j.length < a.B ? b : (a.l + Number(b)) % a.B;
            };
          var ei = function (a, b, c) {
            c =
              void 0 === c
                ? function () {
                    return !0;
                  }
                : c;
            _.Q.call(this);
            var d = this;
            this.o = c;
            this.j = new bi(100);
            this.l = [];
            var e = function (f) {
              return void d.handleEvent(f);
            };
            _.x(a, b, e) &&
              _.R(this, function () {
                _.ub(a, b, e);
              });
          };
          _.M(ei, _.Q);
          var fi = function (a, b) {
              try {
                a(b);
              } catch (c) {
                'undefined' !== typeof console && console.error && console.error(c);
              }
            },
            gi = function (a, b) {
              if (a.fa) return function () {};
              for (var c = {}, d = 0; d < a.j.j.length; c = { Ob: c.Ob }, d++)
                (c.Ob = a.j.get(d)),
                  Mh(
                    (function (e) {
                      return function () {
                        return void fi(b, e.Ob);
                      };
                    })(c)
                  );
              a.l.push(b);
              return function () {
                return void da(a.l, b);
              };
            };
          ei.prototype.handleEvent = function (a) {
            if (this.o(a) && !this.fa) {
              this.j.add(a);
              for (var b = _.E(this.l), c = b.next(); !c.done; c = b.next()) fi(c.value, a);
            }
          };
          ei.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.j.clear();
            this.l.length = 0;
          };
          var ii;
          _.hi = function (a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d;
          };
          ii = function (a) {
            return new _.hi(a.top, a.right, a.bottom, a.left);
          };
          _.hi.prototype.ceil = function () {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this;
          };
          _.hi.prototype.floor = function () {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this;
          };
          _.hi.prototype.round = function () {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this;
          };
          var ji = function (a, b, c, d) {
              this.left = a;
              this.top = b;
              this.width = c;
              this.height = d;
            },
            ki = function (a) {
              return new _.hi(a.top, a.left + a.width, a.top + a.height, a.left);
            },
            li = function (a, b) {
              var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
              if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new ji(c, e, d - c, a - e);
              }
              return null;
            };
          ji.prototype.ceil = function () {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this;
          };
          ji.prototype.floor = function () {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this;
          };
          ji.prototype.round = function () {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this;
          };
          var mi = function (a) {
              a = void 0 === a ? _.I : a;
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
            ni = function (a) {
              return (a = a || mi()) ? (Tg(a.master) ? a.master : null) : null;
            },
            pi = function (a, b, c, d) {
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
                      (a.ampInaboxPendingMessages.push(k), oi(a, l[1]));
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
              c && /^\d{15,20}$/.test(c) && oi(a, c);
              d
                ? (f = gi(d, g))
                : e.google_amp_listener_added ||
                  ((e.google_amp_listener_added = !0),
                  _.x(a, 'message', g),
                  (f = function () {
                    _.ub(a, 'message', g);
                  }));
              return h;
            },
            oi = function (a, b) {
              a.ampInaboxInitialized ||
                (b && !/^\d{15,20}$/.test(b)) ||
                a.document.querySelector('script[src$="amp4ads-host-v0.js"]') ||
                Yg(
                  a.document,
                  b
                    ? hb(be('https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js'), {
                        ampVersion: b,
                      })
                    : fe(ae(be('https://cdn.ampproject.org/amp4ads-host-v0.js')))
                );
            };
          var qb, ri;
          _.qi = function (a, b) {
            a.google_image_requests || (a.google_image_requests = []);
            var c = a.document.createElement('img');
            c.src = b;
            a.google_image_requests.push(c);
          };
          qb = function (a, b) {
            var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
            _.bc(a, function (d, e) {
              d && (c += '&' + e + '=' + encodeURIComponent(d));
            });
            ri(c);
          };
          ri = function (a) {
            var b = window;
            b.fetch
              ? b.fetch(a, {
                  keepalive: !0,
                  credentials: 'include',
                  redirect: 'follow',
                  method: 'get',
                  mode: 'no-cors',
                })
              : _.qi(b, a);
          };
          var va = {};
          var ya;
          var si,
            ti = function () {},
            Aa = function (a, b) {
              wa(b);
              this.j = a;
            };
          _.M(Aa, ti);
          Aa.prototype.toString = function () {
            return this.j.toString();
          };
          Ca('', null === (si = xa()) || void 0 === si ? void 0 : si.emptyHTML);
          var ui,
            vi = function () {},
            Ea = function (a, b) {
              wa(b);
              this.j = a;
            };
          _.M(Ea, vi);
          Ea.prototype.toString = function () {
            return this.j.toString();
          };
          Fa('', null === (ui = xa()) || void 0 === ui ? void 0 : ui.emptyScript);
          var wi = function () {},
            xi = function (a, b) {
              wa(b);
              this.j = a;
            };
          _.M(xi, wi);
          xi.prototype.toString = function () {
            return this.j;
          };
          var yi = function () {},
            Ga = function (a, b) {
              wa(b);
              this.j = a;
            };
          _.M(Ga, yi);
          Ga.prototype.toString = function () {
            return this.j.toString();
          };
          new xi('about:blank', va);
          new xi('about:invalid#zTSz', va);
          var Ai;
          Ai = function (a) {
            (0, _.zi)();
            return fe(a);
          };
          _.zi = _.yd;
          var Di, Fi, Gi, Hi, Ii, Ni, gc;
          _.Ci = function (a, b, c) {
            if ('string' === typeof b) (b = _.Bi(a, b)) && (a.style[b] = c);
            else
              for (var d in b) {
                c = a;
                var e = b[d],
                  f = _.Bi(c, d);
                f && (c.style[f] = e);
              }
          };
          Di = {};
          _.Bi = function (a, b) {
            var c = Di[b];
            if (!c) {
              var d = _.We(b);
              c = d;
              void 0 === a.style[d] &&
                ((d = (kf ? 'Webkit' : jf ? 'Moz' : _.ff ? 'ms' : ef ? 'O' : null) + Xe(d)),
                void 0 !== a.style[d] && (c = d));
              Di[b] = c;
            }
            return c;
          };
          _.Ei = function (a, b) {
            var c = _.Ag(a);
            return c.defaultView &&
              c.defaultView.getComputedStyle &&
              (a = c.defaultView.getComputedStyle(a, null))
              ? a[b] || a.getPropertyValue(b) || ''
              : '';
          };
          Fi = function (a, b) {
            return (
              _.Ei(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b])
            );
          };
          Gi = function (a) {
            try {
              return a.getBoundingClientRect();
            } catch (b) {
              return { left: 0, top: 0, right: 0, bottom: 0 };
            }
          };
          Hi = function (a) {
            if (_.ff && !(8 <= Number(Af))) return a.offsetParent;
            var b = _.Ag(a),
              c = Fi(a, 'position'),
              d = 'fixed' == c || 'absolute' == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
              if (
                (11 == a.nodeType && a.host && (a = a.host),
                (c = Fi(a, 'position')),
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
          Ii = function (a) {
            var b = _.Ag(a),
              c = new _.Wa(0, 0);
            var d = b ? _.Ag(b) : document;
            d = !_.ff || 9 <= Number(Af) || _.Eg(Bg(d).j) ? d.documentElement : d.body;
            if (a == d) return c;
            a = Gi(a);
            d = Bg(b).j;
            b = Gg(d);
            d = Hg(d);
            b =
              _.ff && xf('10') && d.pageYOffset != b.scrollTop
                ? new _.Wa(b.scrollLeft, b.scrollTop)
                : new _.Wa(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c;
          };
          _.Ji = function (a) {
            a = Gi(a);
            return new _.Wa(a.left, a.top);
          };
          _.Ki = function (a, b) {
            'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px');
            return a;
          };
          _.Li = function (a, b) {
            if ('none' != Fi(b, 'display')) return a(b);
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
          _.Mi = function (a) {
            var b = a.offsetWidth,
              c = a.offsetHeight,
              d = kf && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect
              ? ((a = Gi(a)), new _.yg(a.right - a.left, a.bottom - a.top))
              : new _.yg(b, c);
          };
          Ni = function (a) {
            if (!a.getBoundingClientRect) return null;
            a = _.Li(Gi, a);
            return new _.yg(a.right - a.left, a.bottom - a.top);
          };
          gc = function (a, b) {
            a.style.display = b ? '' : 'none';
          };
          var Pi = function () {
              var a = Oi();
              'google_onload_fired' in a ||
                ((a.google_onload_fired = !1),
                _.x(a, 'load', function () {
                  a.google_onload_fired = !0;
                }));
            },
            Qi = function () {
              var a = void 0 === a ? ng : a;
              try {
                return a.history.length;
              } catch (b) {
                return 0;
              }
            },
            Ri = function (a) {
              a = ni(mi(a)) || a;
              a = a.google_unique_id;
              return 'number' === typeof a ? a : 0;
            },
            Si = !!window.google_async_iframe_id,
            Ti = (Si && window.parent) || window,
            Oi = function () {
              if (Si && !Tg(Ti)) {
                var a = '.' + mg.domain;
                try {
                  for (; 2 < a.split('.').length && !Tg(Ti); )
                    (mg.domain = a = a.substr(a.indexOf('.') + 1)), (Ti = window.parent);
                } catch (b) {}
                Tg(Ti) || (Ti = window);
              }
              return Ti;
            },
            Ui = function () {
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
                if (Ge()) {
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
          var Vi = [
              /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i,
              /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i,
              /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i,
              /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i,
              /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i,
              /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i,
            ],
            Wi = function (a) {
              return _.Md(Vi, function (b) {
                return b.test(a);
              });
            },
            Xi = function (a) {
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
            Yi = function (a) {
              if (!a.length) return 0;
              for (var b = [], c = 0; 34 >= c; c++) b[c] = 0;
              for (c = a.length - 1; 0 <= c; c--) {
                var d = Xi(a[c]);
                0 <= d && (b[34 - d] = 1);
              }
              return parseInt(b.join(''), 2);
            };
          var $i = function (a) {
              a = (this.l = a || _.I) || _.I;
              this.B = a.top == a ? 1 : Tg(a.top) ? 2 : 3;
              3 != this.B && Date.parse(_.I.top.document.lastModified);
              var b = this.l,
                c = b || _.I;
              a = [];
              var d = null;
              do {
                var e = c;
                if (Tg(e)) {
                  var f = e.location.href;
                  d = (e.document && e.document.referrer) || null;
                } else (f = d), (d = null);
                a.push(new Zi(f || '', e));
                try {
                  c = e.parent;
                } catch (g) {
                  c = null;
                }
              } while (c && e != c);
              e = 0;
              for (c = a.length - 1; e <= c; ++e) a[e].depth = c - e;
              e = b || _.I;
              if (
                e.location &&
                e.location.ancestorOrigins &&
                e.location.ancestorOrigins.length == a.length - 1
              )
                for (b = 1; b < a.length; ++b)
                  (c = a[b]),
                    c.url || ((c.url = e.location.ancestorOrigins[b - 1] || ''), (c.qd = !0));
              this.j = a;
            },
            bj = function (a) {
              var b = a.l.document && a.l.document.scripts ? a.l.document.scripts : [];
              if (!b) return 0;
              for (var c = [], d = b.length - 1; 0 <= d && 26 > c.length; )
                b[d].src && c.unshift(b[d].src), d--;
              return aj(a, c);
            },
            aj = function (a, b) {
              for (
                var c = 0,
                  d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && Rg(_.Qg(a)[3] || null),
                  e = Math.min(b.length, 26),
                  f = 0;
                f < e;
                f++
              )
                (a = (null != b[f] && Rg(_.Qg(b[f])[3] || null)) || ''),
                  (c *= 4),
                  a &&
                    (d && a == d ? (c += 3) : Wi(b[f]) ? (c += 2) : a && 0 <= Xi(a) && (c += 1));
              return c;
            },
            cj = function (a) {
              a = a.l.document && a.l.document.scripts ? a.l.document.scripts : [];
              if (!a) return 0;
              for (var b = [], c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                d && null != d.src && b.push(Rg(_.Qg(d.src)[3] || null));
              }
              return Yi(b);
            },
            Zi = function (a, b) {
              this.url = a;
              this.M = b;
              this.qd = !1;
              this.depth = null;
            };
          var dj = null,
            ej = function () {
              if (null === dj) {
                dj = '';
                try {
                  var a = '';
                  try {
                    a = _.I.top.location.hash;
                  } catch (c) {
                    a = _.I.location.hash;
                  }
                  if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    dj = b ? b[1] : '';
                  }
                } catch (c) {}
              }
              return dj;
            };
          var hj;
          _.fj = function () {
            var a = _.I.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Hd();
          };
          _.gj = function (a) {
            a = void 0 === a ? _.I : a;
            return (a = a.performance) && a.now ? a.now() : null;
          };
          hj = function (a) {
            var b = _.I.performance;
            return (b && b.timing && b.timing[a]) || 0;
          };
          var ij = function (a, b, c, d, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = void 0 === d ? 0 : d;
            this.uniqueId = Math.random();
            this.slotId = e;
          };
          var jj, kj, lj, mj, oj, qj;
          jj = _.I.performance;
          kj = !!(jj && jj.mark && jj.measure && jj.clearMarks);
          lj = Ta(function () {
            var a;
            if ((a = kj)) (a = ej()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
            return a;
          });
          mj = function (a, b) {
            this.events = [];
            this.B = b || _.I;
            var c = null;
            b &&
              ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
              (this.events = b.google_js_reporting_queue),
              (c = b.google_measure_js_timing));
            this.j = lj() || (null != c ? c : Math.random() < a);
          };
          _.nj = function (a) {
            a &&
              jj &&
              lj() &&
              (jj.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'),
              jj.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
          };
          oj = function (a, b, c, d, e, f) {
            a.j &&
              ((b = new ij(b, c, d, void 0 === e ? 0 : e, f)),
              !a.j || 2048 < a.events.length || a.events.push(b));
          };
          mj.prototype.start = function (a, b) {
            if (!this.j) return null;
            a = new ij(a, b, _.gj() || _.fj());
            b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
            jj && lj() && jj.mark(b);
            return a;
          };
          _.pj = function (a, b) {
            if (a.j && 'number' === typeof b.value) {
              b.duration = (_.gj() || _.fj()) - b.value;
              var c = 'goog_' + b.label + '_' + b.uniqueId + '_end';
              jj && lj() && jj.mark(c);
              !a.j || 2048 < a.events.length || a.events.push(b);
            }
          };
          qj = function (a, b, c) {
            var d = _.gj();
            d && oj(a, b, 9, d, 0, c);
          };
          var Ec = function (a, b) {
            try {
              -1 == a.indexOf(b) && (a = b + '\n' + a);
              for (var c; a != c; )
                (c = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
              return a.replace(/\n */g, '\n');
            } catch (d) {
              return b;
            }
          };
          var rj = kh();
          var sj = function (a) {
              this.methodName = a;
            },
            tj = new sj(1),
            uj = new sj(15),
            vj = new sj(2),
            wj = new sj(3),
            xj = new sj(5),
            yj = new sj(6),
            zj = new sj(7),
            Aj = new sj(8),
            Bj = new sj(14),
            Cj = function (a, b, c) {
              return b[a.methodName] || c || function () {};
            };
          var Dj = function () {
              this.j = function () {};
              this.l = function () {
                return [];
              };
              this.B = function () {
                return [];
              };
            },
            Ej = function (a, b, c) {
              a.j = Cj(tj, b, function () {});
              a.l = function (d) {
                return Cj(vj, b, function () {
                  return [];
                })(d, c);
              };
              a.B = function () {
                return Cj(wj, b, function () {
                  return [];
                })(c);
              };
            };
          zd(Dj);
          var Fj = function (a) {
              Dj.D().j(a);
            },
            Gj = function (a) {
              return Dj.D().l(a);
            },
            Hj = function () {
              return Dj.D().B();
            };
          var Ij = function () {
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
            Jj = function (a, b, c) {
              a.l = function (d, e) {
                return Cj(xj, b)(d, e, c);
              };
              a.B = function (d, e) {
                return Cj(yj, b)(d, e, c);
              };
              a.o = function (d, e) {
                return Cj(zj, b)(d, e, c);
              };
              a.m = function (d, e) {
                return Cj(Aj, b)(d, e, c);
              };
              a.j = function () {
                Cj(uj, b)(c);
              };
            },
            Kj;
          zd(Ij);
          _.u = function (a) {
            var b = void 0 === b ? !1 : b;
            return Ij.D().l(a, b);
          };
          _.v = function (a, b) {
            b = void 0 === b ? 0 : b;
            return Ij.D().B(a, b);
          };
          Kj = function (a) {
            var b = void 0 === b ? '' : b;
            return Ij.D().o(a, b);
          };
          _.Lj = function (a) {
            var b = void 0 === b ? [] : b;
            return Ij.D().m(a, b);
          };
          var Mj = {},
            Nj =
              ((Mj.companion_ads = 'companionAds'),
              (Mj.content = 'content'),
              (Mj.publisher_ads = 'pubads'),
              Mj),
            Oj = function (a) {
              return (
                a +
                'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
              );
            };
          var Ac = function () {
              return _.I.googletag || (_.I.googletag = {});
            },
            zc = function (a, b) {
              var c = Ac();
              c.hasOwnProperty(a) || (c[a] = b);
            },
            Pj = function (a, b) {
              a.addEventListener
                ? a.addEventListener('load', b, !1)
                : a.attachEvent && a.attachEvent('onload', b);
            };
          var Qj = new w.Map(),
            Rj = new w.Map(),
            Sj = function () {},
            Tj = function (a, b) {
              return a instanceof b || (a instanceof Sj && ((a = Qj.get(a)), a instanceof b))
                ? a
                : null;
            },
            Uj = function (a) {
              return (a = Nj[a]) ? Ac()[a]() : null;
            };
          var Vj = function (a) {
              var b = a.split('/');
              return '/' == a.charAt(0) && 2 <= b.length
                ? b[1]
                : '/' != a.charAt(0) && 1 <= b.length
                ? b[0]
                : '';
            },
            Wj = function (a) {
              a = a.map(function (b) {
                return Vj(b.getSlotId().getAdUnitPath());
              });
              ja(a);
              return a;
            };
          var Xj = {
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
            ak,
            bk,
            ck,
            dk,
            ek;
          Xj[6] = lh(window);
          Xj[49] = new Date().getTime();
          Xj[36] = kh();
          Xj[148] = rj;
          Xj[221] = kh();
          Xj[254] = kh();
          Xj[204] = _.jh('-1', -1);
          var Yj = function () {
            for (var a in Xj) this[a] = Xj[a];
          };
          zd(Yj);
          _.Zj = function (a) {
            return Yj.D()[a];
          };
          ak = function (a, b) {
            Yj.D()[a] = b;
          };
          bk = Ac();
          ck = Yj.D();
          dk = bk._vars_;
          for (ek in dk) ck[ek] = dk[ek];
          bk._vars_ = ck;
          var fk = function () {
            var a = _.u(85) || _.u(84);
            _.I.google_measure_js_timing = a || _.I.google_measure_js_timing;
            mj.call(this, a ? 1 : 0, _.I);
            this.l = 0;
          };
          _.M(fk, mj);
          zd(fk);
          var gk = function (a) {
              if (15360 >= a.length) return a;
              var b = _.u(164) && /&supporting_urls=/.test(a),
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
              oj(fk.D(), (9).toString(), 9, a.length - b.length + 8);
              return b;
            },
            hk = function (a) {
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
            ik = Ta(function () {
              return !!mh(_.I.location.href);
            }),
            jk = function (a) {
              var b = a.indexOf('google_preview=', a.lastIndexOf('?')),
                c = a.indexOf('&', b);
              -1 == c && ((c = a.length - 1), --b);
              return a.substring(0, b) + a.substring(c + 1, a.length);
            },
            kk = function (a, b) {
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
            lk = function (a, b) {
              b = void 0 === b ? window : b;
              return !!kk(a, b);
            };
          var Qb = function () {
            var a = Number('2020120101');
            return 1 > a || Math.floor(a) != a
              ? (qb({ v: '2020120101' }, 'gpt_inv_ver'), '1')
              : '2020120101';
          };
          var mk = function (a, b, c) {
              b = void 0 === b ? 'https://pagead2.googlesyndication.com' : b;
              if (null == c || 0 > c || 1 < c) c = _.Zj(23);
              this.B = Math.random();
              this.A = this.B < c;
              this.j = a;
              this.m = Sb(_.I);
              this.o = b;
              this.l = { pvsid: this.m };
            },
            K = function (a, b, c) {
              'string' != typeof c && (c = String(c));
              /^\w+$/.test(b) && c && (a.l[b] = c);
            },
            ok = function (a, b, c) {
              b = void 0 === b ? null : b;
              c = void 0 === c ? !1 : c;
              b = void 0 === b ? null : b;
              c = void 0 === c ? !1 : c;
              if (ik()) b = !0;
              else {
                var d = a.A;
                b && 0 <= b && (d = (c ? a.B : Math.random()) < b);
                b = d && !!a.j;
              }
              b && (_.u(305) ? qb(a.l, a.j) : ((a = nk(a) || ''), _.qi(window, a)));
            },
            nk = function (a) {
              var b = a.o + '/pagead/gen_204?id=' + encodeURIComponent(a.j);
              _.bc(a.l, function (c, d) {
                c && (b += '&' + d + '=' + encodeURIComponent(c));
              });
              return b;
            },
            Dc = function (a, b) {
              b = void 0 === b ? pk : b;
              K(a, 'vrg', Qb());
              var c = Wj(b);
              c.length &&
                (3 >= c.length
                  ? K(a, 'nw_id', c.join())
                  : ((c = c.slice(0, 3)), c.push('__extra__'), K(a, 'nw_id', c.join())));
              K(a, 'nslots', b.length.toString());
              b = Hj();
              b.length && K(a, 'eid', b.join());
              K(a, 'pub_url', document.URL);
            },
            qc = function (a, b, c) {
              c = void 0 === c ? {} : c;
              var d = c.Ie || 'https://pagead2.googlesyndication.com';
              c = c.ya;
              if (void 0 === c || 0 > c || 1 < c) c = _.Zj(23);
              Math.random() < c && ((a = new mk(a, d)), b(a), ok(a, 1, !0));
            },
            pk = [];
          var qk = _.Zj(38),
            rk = function (a, b) {
              a = { methodId: a };
              b.name && (a.name = b.name);
              b.message && (a.message = b.message.substring(0, 512));
              b.fileName && (a.fileName = b.fileName);
              b.lineNumber && (a.lineNumber = b.lineNumber);
              b.stack && (a.stack = Ec(b.stack, ''));
              return a;
            },
            tk = function (a, b, c) {
              c = void 0 === c ? !1 : c;
              sk(a, b);
              if (!c) throw b;
            },
            sk = function (a, b, c) {
              c = void 0 === c ? qk : c;
              if (!b.isReported)
                try {
                  b.isReported = !0;
                  var d = rk(a, b),
                    e = new mk('gpt_exception');
                  try {
                    Dc(e);
                  } catch (f) {}
                  _.bc(d, function (f, g) {
                    return K(e, g, f);
                  });
                  ok(e, c);
                } catch (f) {}
            },
            S = function (a, b, c) {
              return J(a, b, c, _.u(144));
            },
            J = function (a, b, c, d) {
              d = void 0 === d ? !1 : d;
              return function (e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                g = !1;
                var h = null,
                  k = c || tk,
                  l = fk.D();
                try {
                  var m = _.u(85);
                  m && l && (h = l.start(a.toString(), 3));
                  var n = b.apply(this, f);
                  g = !0;
                  m && l && _.pj(l, h);
                } catch (t) {
                  g ? sk(110, t) : (n = k.call(this, a, t)), _.nj(h);
                }
                if (d && 0.1 > Math.random())
                  try {
                    var p = Error();
                    qc(
                      'gpt_api_usage',
                      function (t) {
                        K(t, 'methodId', a);
                        K(t, 'args', f.length);
                        K(t, 'stack', Ec(p.stack, p.message));
                        Dc(t);
                      },
                      { ya: 1 }
                    );
                  } catch (t) {}
                return n;
              };
            },
            Mc = function (a, b, c) {
              J(a, b, c, !1)();
            };
          var uk = function (a) {
            this.push = S(76, function (b) {
              return a.push.apply(a, arguments);
            });
          };
          _.M(uk, Sj);
          var vk = function () {
              this.id = 'goog_' + Ve++;
            },
            wk = function () {
              _.Q.apply(this, arguments);
              this.m = new w.Map();
            };
          _.M(wk, _.Q);
          wk.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.m.clear();
          };
          var xk = function (a, b, c) {
              var d, e;
              if (a.fa) return function () {};
              var f = b.id,
                g =
                  null !== (e = null === (d = a.m.get(f)) || void 0 === d ? void 0 : d.add(c)) &&
                  void 0 !== e
                    ? e
                    : new w.Set([c]);
              a.m.set(f, g);
              return function () {
                var h;
                null === (h = a.m.get(b.id)) || void 0 === h ? void 0 : h.delete(c);
              };
            },
            yk = function (a, b) {
              return new w.Promise(function (c) {
                var d = xk(a, b, function (e) {
                  d();
                  c(e);
                });
              });
            };
          wk.prototype.dispatchEvent = function (a, b, c) {
            var d = a.id,
              e;
            return ab(this, function g () {
              var h = this,
                k,
                l,
                m,
                n,
                p,
                t;
              return bb(g, function (A) {
                1 == A.j &&
                  ((k = h),
                  (l = document.createEvent('CustomEvent')),
                  l.initCustomEvent(d, !0, !0, c),
                  (m = null !== (e = h.m.get(d)) && void 0 !== e ? e : new w.Set()),
                  (n = {}),
                  (p = _.E(m)),
                  (t = p.next()));
                if (5 != A.j) {
                  if (t.done) {
                    A.j = 0;
                    return;
                  }
                  n.Ab = t.value;
                  return cb(A, 0, 5);
                }
                J(
                  b,
                  (function (z) {
                    return function () {
                      k.m.has(d) && m.has(z.Ab) && z.Ab(l);
                    };
                  })(n),
                  function (z, F) {
                    return void tk(z, F, !0);
                  }
                )();
                n = { Ab: n.Ab };
                t = p.next();
                A.j = 2;
              });
            });
          };
          var zk = new vk(),
            Ak = new vk(),
            Bk = new vk(),
            Ck = new vk(),
            Dk = new vk(),
            Ek = new vk(),
            Fk = new vk(),
            Gk = new vk(),
            Hk = new vk(),
            Ik = new vk(),
            Jk = new vk();
          var Kk = function (a, b) {
            b = void 0 === b ? [] : b;
            this.l = a;
            this.j = b;
          };
          Kk.prototype.getMessageId = function () {
            return this.l;
          };
          Kk.prototype.getMessageArgs = function () {
            return this.j;
          };
          var Lk = function (a, b, c) {
            this.B = new Date();
            this.o = c && Oc(c);
            this.j = a;
            this.l = b;
          };
          _.q = Lk.prototype;
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
            return this.B.toTimeString() + ': ' + Mk[this.j] + ': ' + this.l;
          };
          var Mk = ['Debug', 'Info', 'Warning', 'Error', 'Fatal'];
          var Nk = {
              20: function (a) {
                return (
                  'Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: ' +
                  a[0]
                );
              },
              23: function (a) {
                return (
                  'Slot ' + (a[0] + (' does not have a container div with id: ' + (a[1] + '.')))
                );
              },
              34: function (a) {
                return 'Size mapping is null because invalid mappings were added: ' + a[0];
              },
              60: function (a) {
                return (
                  'Ignoring the ' +
                  (a[0] + ('(' + ((a[1] || '') + ') call since the service is already enabled.')))
                );
              },
              66: function (a) {
                return 'Slot ' + (a[0] + ' cannot be refreshed until PubAdsService is enabled.');
              },
              68: function () {
                return 'Slots cannot be cleared until service is enabled.';
              },
              79: function () {
                return 'Ignoring subsequent call to set div collapse mode (already set).';
              },
              80: function (a) {
                return 'Slot object at position ' + (a[0] + ' is of incorrect type.');
              },
              84: function (a) {
                return 'Cannot find targeting attribute "' + (a[0] + ('" for "' + (a[1] + '"')));
              },
              92: function (a) {
                return 'Exception thrown in event listener: "' + (a[0] + '"');
              },
              93: function (a) {
                return 'Failed to register listener. Unknown event type: ' + a[0];
              },
              96: function (a) {
                return 'Invalid arguments: ' + (a[0] + ('(' + (a[1] + ')')));
              },
              122: function (a) {
                return (
                  'Invalid argument: ' + (a[0] + ('(' + (a[1] + ('). Valid values: ' + a[2]))))
                );
              },
              121: function (a) {
                return (
                  'Invalid object passed to ' +
                  (a[0] + ('(' + (a[1] + ('), for ' + (a[2] + (': ' + (a[3] + '}')))))))
                );
              },
              105: function (a) {
                return (
                  'SRA requests may have a maximum of ' +
                  (a[0] +
                    (' slots. ' +
                      (a[1] + (' were requested, but the last ' + (a[2] + ' were ignored.')))))
                );
              },
              106: function (a) {
                return (
                  'Publisher betas ' + (a[0] + ' were declared after enableServices() was called.')
                );
              },
              107: function (a) {
                return (
                  'Publisher betas may only be declared once. ' +
                  (a[0] + ' were added after betas had already been declared.')
                );
              },
              108: function (a) {
                return (
                  'Beta keys cannot be cleared. clearTargeting() was called on ' + (a[0] + '.')
                );
              },
              111: function (a) {
                return (
                  'Refresh was throttled for slot: ' +
                  (a[1] +
                    ('. This slot still has ' +
                      (a[0] + ' seconds remaining until it becomes eligible for refresh.')))
                );
              },
              113: function (a) {
                return 'Rewarded slot ineligible as page is not mobile optimized: ' + a[0];
              },
              116: function (a) {
                return (
                  'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "uniqueDomain" setting passed to the setSafeFrameConfig API. GPT will use uniqueDomain=' +
                  (a[0] + ' based on the API call.')
                );
              },
              114: function () {
                return Oj('set');
              },
              115: function () {
                return Oj('update');
              },
              120: function () {
                return 'Checking googletag.pubadsReady is discouraged. Please use googletag.cmd.push instead.';
              },
            },
            Ok = {
              26: function (a) {
                return (
                  'Div ID passed to googletag.display() does not match any defined slots: ' +
                  (a[0] + '.')
                );
              },
              28: function (a) {
                return 'Div element ' + (a[0] + ' is already associated with another slot.');
              },
              30: function (a) {
                return 'Exception when invoking function: ' + a[0];
              },
            };
          var Bc = function () {
              this.j = new bi(1000);
              this.l = 0;
            },
            Pk = function (a, b) {
              return di(a.j).filter(function (c) {
                return c.getSlot() === b;
              });
            },
            Qk = function (a, b) {
              return di(a.j).filter(function (c) {
                return c.getLevel() >= b;
              });
            };
          Bc.prototype.log = function (a, b, c) {
            var d = this;
            c = new Lk(a, b, void 0 === c ? null : c);
            var e = _.u(504),
              f =
                _.u(503) &&
                _.y(_.I.navigator.userAgent, 'includes').call(
                  _.I.navigator.userAgent,
                  'Lighthouse'
                ),
              g = _.v(488) && 100 > this.l,
              h = 2 === a || 3 === a;
            (f || e) &&
              h &&
              ((e = b.getMessageArgs()),
              (f = b.getMessageId()),
              (2 === a ? _.I.console.warn.bind(console) : _.I.console.error.bind(console))(
                '[GPT] ' + (Nk[f] || Ok[f])(e)
              ));
            if (g && h) {
              var k = b.getMessageArgs(),
                l = b.getMessageId();
              b = _.v(488);
              qc(
                'gpt_eventlog_messages',
                function (m) {
                  ++d.l;
                  Dc(m);
                  K(m, 'level', a);
                  K(m, 'messageId', l);
                  K(m, 'args', k.join('|'));
                  var n = Error();
                  K(m, 'stack', Ec(n.stack, n.message));
                },
                { ya: b }
              );
            }
            this.j.add(c);
            return c;
          };
          Bc.prototype.info = function (a, b) {
            return this.log(1, a, b);
          };
          Bc.prototype.L = function (a, b) {
            return this.log(2, a, b);
          };
          Bc.prototype.error = function (a, b) {
            return this.log(3, a, b);
          };
          zd(Bc);
          var Rk = Ta(function () {
              var a = _.Lj(5),
                b = a.indexOf,
                c = String;
              var d = void 0 === d ? window : d;
              d = Rg(_.Qg(d.location.href)[3] || null);
              a = b.call(a, c(d ? eh(d) : null));
              a = _.Lj(477)[a] || '';
              var e = void 0 === e ? window.document : e;
              a &&
                e.head &&
                ((b = document.createElement('meta')),
                (b.httpEquiv = 'origin-trial'),
                (b.content = a),
                e.head.appendChild(b));
            }),
            Sk = function (a) {
              var b = void 0 === b ? navigator : b;
              Rk();
              b =
                'scheduling' in b &&
                'isInputPending' in b.scheduling &&
                b.scheduling.isInputPending();
              var c = _.v(31);
              b &&
                Math.random() < c &&
                setTimeout(function () {
                  qc(
                    'gpt_input_pending',
                    function (d) {
                      Dc(d);
                      K(d, 'ctx', a);
                      K(d, 'corr', Sb(_.I));
                      var e = Error('inputPending');
                      K(d, 'stack', Ec(e.stack, e.message));
                    },
                    { ya: 1 }
                  );
                }, 1);
              return b;
            };
          var Tk = function () {
            wk.call(this);
          };
          _.M(Tk, wk);
          var Oc = function (a) {
            var b = Rj.get(a);
            if (!b) {
              var c = (b = a.Na());
              Qj.set(c, a);
              Rj.set(a, c);
            }
            return b;
          };
          var T = function (a) {
              return function (b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return new Kk(a, [].concat(_.Yb(c)));
              };
            },
            Uk = function (a) {
              return (
                '[' +
                a
                  .map(function (b) {
                    return 'string' === typeof b
                      ? "'" + b + "'"
                      : Array.isArray(b)
                      ? Uk(b)
                      : String(b);
                  })
                  .join(', ') +
                ']'
              );
            },
            Vk = function (a, b) {
              b = Uk(b);
              b = b.substring(1, b.length - 1);
              return new Kk(96, [a, b]);
            },
            Wk = T(2),
            Xk = T(3),
            Yk = T(4),
            Zk = T(5),
            $k = T(6),
            al = T(12),
            bl = T(14),
            cl = T(16),
            dl = T(19),
            el = T(20),
            fl = T(23),
            gl = T(26),
            hl = T(28),
            il = T(30),
            jl = T(31),
            kl = T(34),
            ll = T(35),
            ml = T(36),
            nl = T(38),
            ol = T(40),
            pl = T(46),
            ql = T(48),
            rl = T(50),
            sl = T(60),
            tl = T(63),
            ul = T(64),
            vl = T(66),
            wl = T(68),
            xl = T(69),
            yl = T(70),
            zl = T(71),
            Al = T(78),
            Bl = T(79),
            Cl = T(80),
            Dl = T(82),
            El = T(84),
            Fl = T(85),
            Gl = T(87),
            Hl = T(88),
            Il = T(92),
            Jl = T(93),
            Kl = T(99),
            Ll = T(103),
            Ml = T(104),
            Nl = T(105),
            Ol = T(106),
            Pl = T(107),
            Ql = T(108),
            Rl = T(111),
            Sl = T(113),
            Tl = T(114),
            Ul = T(115),
            Vl = T(116),
            Wl = T(117),
            Xl = T(118),
            Yl = T(119),
            Cc = T(120),
            Zl = T(121),
            $l = T(122);
          var am = function () {
            wk.call(this);
            this.C = this.j = 0;
          };
          _.M(am, Tk);
          am.prototype.Na = function () {
            return new uk(this);
          };
          am.prototype.push = function (a) {
            const $___old_6ceae3b589c72fde = {}.constructor.getOwnPropertyDescriptor(
                Document.prototype,
                'cookie'
              ),
              $___old_99463278a1f4987c = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'doNotTrack'
              ),
              $___old_611364990c03e5e6 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              ),
              $___old_a924d10e558b9bdf = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              ),
              $___old_9b854337ad3b852c = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
            try {
              if ($___old_6ceae3b589c72fde)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___stub_0b13ce4eb5645a04.cookie
                ));
              if ($___old_99463278a1f4987c)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'doNotTrack',
                  $___stub_080f9a0911996704.doNotTrack
                ));
              if ($___old_611364990c03e5e6)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_a0ca823ae553bc43.userAgent
                ));
              if ($___old_a924d10e558b9bdf)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_28e833aa89da2c4f.XMLHttpRequest
                ));
              if ($___old_9b854337ad3b852c)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_28e833aa89da2c4f.XMLHttpRequest
                ));
              return function () {
                for (var b = Bc.D(), c = 0; c < arguments.length; ++c)
                  try {
                    'function' === typeof arguments[c] && (arguments[c](), this.j++);
                  } catch (d) {
                    this.C++,
                      window.console &&
                        window.console.error &&
                        window.console.error('Exception in queued GPT command', d),
                      b.error(il(String(d.message)));
                  }
                b.info(jl(String(this.j), String(this.C)));
                return this.j;
              }.apply(this, arguments);
            } finally {
              if ($___old_6ceae3b589c72fde)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___old_6ceae3b589c72fde
                ));
              if ($___old_99463278a1f4987c)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'doNotTrack',
                  $___old_99463278a1f4987c
                ));
              if ($___old_611364990c03e5e6)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_611364990c03e5e6
                ));
              if ($___old_a924d10e558b9bdf)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_a924d10e558b9bdf
                ));
              if ($___old_9b854337ad3b852c)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_9b854337ad3b852c
                ));
            }
          };
          var cm = function () {
            am.call(this);
            var a = this;
            this.o = [];
            this.F = !1;
            this.A = this.l = 0;
            this.H = J(635, function () {
              a.l = 0;
              bm(a);
            });
          };
          _.M(cm, am);
          var dm = function (a) {
              return a.F || !a.o.length
                ? 0
                : _.u(171)
                ? 1
                : _.u(170)
                ? Sk(1)
                  ? 1
                  : 0
                : _.u(247) && Sk(1)
                ? 2
                : 0;
            },
            em = function (a) {
              a.l || (a.l = setTimeout(a.H, _.v(479)));
            },
            bm = function (a) {
              if (a.l) {
                if (!a.F) return;
                clearTimeout(a.l);
                a.l = 0;
              }
              for (var b = Bc.D(); a.o.length; ) {
                var c = a.o.shift();
                try {
                  c(), a.j++;
                } catch (e) {
                  a.C++,
                    window.console &&
                      window.console.error &&
                      window.console.error('Exception in queued GPT command', e),
                    b.error(il(String(e.message)));
                }
                c = dm(a);
                if (1 === c) {
                  em(a);
                  break;
                } else 2 === c && (a.A = a.A || _.fj());
              }
              b.info(jl(String(a.j), String(a.C)));
              if (a.A) {
                var d = _.fj() - a.A;
                a.A = 0;
                setTimeout(function () {
                  return void qc(
                    'gpt_input_pending',
                    function (e) {
                      Dc(e);
                      K(e, 'ctx', 4);
                      K(e, 'corr', Sb(_.I));
                      K(e, 'ptr', d);
                    },
                    { ya: 1 }
                  );
                }, 1);
              }
            },
            fm = function (a, b) {
              a.o = [].concat(_.Yb(a.o), _.Yb(b.filter(Rd)));
              _.u(173) && 1 === dm(a) ? em(a) : bm(a);
            };
          cm.prototype.push = function (a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            this.F = _.u(172);
            fm(this, b);
            return this.j;
          };
          var gm = function () {
            if (_.u(176)) {
              var a = Ac().cmd;
              if (!a || Array.isArray(a)) {
                var b = new cm();
                Ac().cmd = Oc(b);
                a && 0 < a.length && fm(b, a);
              }
            } else if (((a = Ac().cmd), !a || Array.isArray(a)))
              (b = new am()), (Ac().cmd = Oc(b)), a && 0 < a.length && b.push.apply(b, a);
          };
          gm = J(77, gm);
          var hm = function (a) {
            Wf(this, a, null, null);
          };
          Id(hm, O);
          var jm = function (a) {
            Wf(this, a, im, null);
          };
          Id(jm, O);
          var im = [13];
          var lm = function (a) {
            Wf(this, a, km, null);
          };
          Id(lm, O);
          var km = [13];
          var mm = function (a) {
            Wf(this, a, null, null);
          };
          Id(mm, O);
          var Db = function (a) {
            Wf(this, a, null, null);
          };
          Id(Db, O);
          var om = function (a) {
            Wf(this, a, nm, null);
          };
          Id(om, O);
          var nm = [1];
          var pm = function (a) {
            Wf(this, a, null, null);
          };
          Id(pm, O);
          var qm = function (a) {
            Wf(this, a, null, null);
          };
          Id(qm, O);
          var rm = function (a) {
            Wf(this, a, null, null);
          };
          Id(rm, O);
          var um = function (a) {
            Wf(this, a, sm, tm);
          };
          Id(um, O);
          var vm = function (a) {
            Wf(this, a, null, null);
          };
          Id(vm, O);
          var sm = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38, 53],
            tm = [
              [4, 41],
              [39, 48],
            ];
          vm.prototype.getHtml = function () {
            return C(this, 1);
          };
          var wm = function (a) {
              return 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
            },
            xm = function (a, b) {
              b = void 0 === b ? _.I : b;
              a = a.scrollingElement || wm(a);
              return new _.Wa(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
            },
            Qa = function (a) {
              try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length));
              } catch (b) {
                return !1;
              }
            };
          var ym = function (a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
              return (void 0 === c ? 0 : c)
                ? new _.yg(b.innerWidth, b.innerHeight).round()
                : _.Fg(b || window).round();
            } catch (d) {
              return new _.yg(-12245933, -12245933);
            }
          };
          var zm = function (a) {
            for (var b = 0, c = a, d = 0; a && a != a.parent; )
              (a = a.parent), d++, Tg(a) && ((c = a), (b = d));
            return { M: c, level: b };
          };
          var Am = function (a) {
              return !!a && a.top == a;
            },
            Bm = function (a, b, c, d) {
              c = c || a.google_ad_width;
              d = d || a.google_ad_height;
              if (Am(a)) return !1;
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
            Cm = function (a) {
              var b = a.location.href;
              if (a == a.top) return { url: b, Zb: !0 };
              var c = !1,
                d = a.document;
              d && d.referrer && ((b = d.referrer), a.parent == a.top && (c = !0));
              (a = a.location.ancestorOrigins) &&
                (a = a[a.length - 1]) &&
                -1 == b.indexOf(a) &&
                ((c = !1), (b = a));
              return { url: b, Zb: c };
            },
            Dm = function () {
              var a = Oi();
              if (a == a.top) return 0;
              for (; a && a != a.top && Tg(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5;
              }
              return 1;
            };
          var Fm = function (a) {
            Wf(this, a, Em, null);
          };
          Id(Fm, O);
          var Gm = function (a) {
            Wf(this, a, null, null);
          };
          Id(Gm, O);
          var Em = [1],
            Hm = function (a) {
              var b = new Gm();
              return cg(b, 1, a, 0);
            },
            Im = function (a, b) {
              return cg(a, 2, b, 0);
            },
            Jm = function (a, b) {
              ig(a, 1, b, Gm);
            };
          var Lm = function (a, b) {
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
                if (((d = kg(Fm, e)), e)) {
                  var f = kg(Fm, e);
                  Jm(f, Im(Hm(1), -1));
                  f.m();
                }
              } catch (h) {
                Km(e), (d = new Fm());
              }
              f = G(d, Gm, 1);
              if (
                (f = ba(f, function (h) {
                  return $f(h, 1, 0) === b;
                }))
              ) {
                var g = $f(f, 2, 0);
                if (null === g || isNaN(g)) Km(e);
                else return g;
              }
              c = gh(c);
              if (null === c) return null;
              f ? Im(f, c) : Jm(d, Im(Hm(b), c));
              return hh(a, d.m()) ? c : null;
            },
            Km = function (a) {
              0.01 > Math.random() && qb({ data: a }, 'ls_tamp');
            };
          var Mm = function () {
              this.j = window;
              this.l = 0;
            },
            Nm = function (a, b) {
              return Ma('__gads', b, a.j.document);
            },
            Om = function (a, b, c) {
              var d = {
                Hc: C(b, 2) - a.j.Date.now() / 1000,
                path: C(b, 3),
                domain: C(b, 4),
                Hd: !1,
              };
              Na('__gads', C(b, 1), c, d, a.j.document);
              r(c, 5) &&
                0.01 > a.j.Math.random() &&
                ((c = Nm(a, c)),
                qb(
                  { domain: C(b, 4), host: a.j.location.host, success: c === C(b, 1) ? '1' : '0' },
                  'gfp_cw_status'
                ));
            };
          var Pm = {},
            Qm =
              ((Pm[3] = 'https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js'), Pm),
            Rm = {},
            Sm =
              ((Rm[3] =
                'https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js'),
              Rm);
          var Tm = function (a) {
              this.j = a;
              this.l = Ue();
            },
            Um = function (a) {
              var b = {};
              _.Kd(a, function (c) {
                b[c.j] = c.l;
              });
              return b;
            };
          var Wm, Xm, Ym;
          Wm = function () {
            return 0 != _.Vm(document);
          };
          _.Vm = function (a) {
            return (
              { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ''
              ] || 0
            );
          };
          Xm = function (a) {
            var b;
            a.visibilityState
              ? (b = 'visibilitychange')
              : a.mozVisibilityState
              ? (b = 'mozvisibilitychange')
              : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
            return b;
          };
          Ym = function (a) {
            return null != a.hidden
              ? a.hidden
              : null != a.mozHidden
              ? a.mozHidden
              : null != a.webkitHidden
              ? a.webkitHidden
              : null;
          };
          var $m, Zm;
          $m = function () {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Zm();
          };
          _.an = function (a) {
            a.google_reactive_ads_global_state
              ? null == a.google_reactive_ads_global_state.floatingAdsStacking &&
                (a.google_reactive_ads_global_state.floatingAdsStacking = new Zm())
              : (a.google_reactive_ads_global_state = new $m());
            return a.google_reactive_ads_global_state;
          };
          Zm = function () {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = [];
          };
          var bn, fn, gn, hn;
          bn = 728 * 1.38;
          _.cn = function (a) {
            return a.innerHeight >= a.innerWidth;
          };
          _.en = function (a) {
            var b = _.dn(a).clientWidth;
            a = a.innerWidth;
            return b && a ? b / a : 0;
          };
          fn = function (a, b) {
            return (a = _.dn(a).clientWidth)
              ? a > (void 0 === b ? 420 : b)
                ? 32768
                : 320 > a
                ? 65536
                : 0
              : 16384;
          };
          gn = function (a) {
            return (a = _.en(a)) ? (1.05 < a ? 262144 : 0.95 > a ? 524288 : 0) : 131072;
          };
          _.dn = function (a) {
            a = a.document;
            var b = {};
            a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
            return b || {};
          };
          hn = function (a) {
            var b = _.an(window);
            b.adCount = b.adCount || {};
            b.adCount[a] = b.adCount[a] + 1 || 1;
          };
          _.jn = function (a) {
            return void 0 === a.pageYOffset
              ? (a.document.documentElement || a.document.body.parentNode || a.document.body)
                  .scrollTop
              : a.pageYOffset;
          };
          var ln = function (a, b) {
              a: {
                b = void 0 === b ? null : b;
                b = void 0 === b ? null : b;
                a = _.E(a);
                for (var c = a.next(); !c.done; c = a.next()) {
                  var d = _.I;
                  var e = c.value;
                  c = b;
                  c = void 0 === c ? null : c;
                  var f = d.document;
                  var g = e.x;
                  e = e.y;
                  f.hasOwnProperty('_goog_efp_called_') ||
                    (f._goog_efp_called_ = f.elementFromPoint(g, e));
                  if ((f = f.elementFromPoint(g, e))) {
                    if (!(g = kn(f, d, c)))
                      b: {
                        c = void 0 === c ? null : c;
                        g = d.document;
                        for (f = f.offsetParent; f && f != g.body; f = f.offsetParent)
                          if ((e = kn(f, d, c))) {
                            g = e;
                            break b;
                          }
                        g = null;
                      }
                    d = g || null;
                  } else d = null;
                  if (d) {
                    b = d;
                    break a;
                  }
                }
                b = null;
              }
              return null != b;
            },
            mn = function (a, b, c) {
              for (var d = [], e = 0; 3 > e; e++)
                for (var f = 0; 3 > f; f++) {
                  var g = d;
                  g.push.call(g, { x: (f / 2) * a, y: b + (e / 2) * (c - b) });
                }
              return d;
            },
            kn = function (a, b, c) {
              c = void 0 === c ? null : c;
              if ('fixed' !== Fi(a, 'position')) return null;
              var d =
                'GoogleActiveViewInnerContainer' == a.getAttribute('class') ||
                (1 >= _.Li(_.Mi, a).width && 1 >= _.Li(_.Mi, a).height)
                  ? !0
                  : !1;
              c &&
                c.j(
                  'ach_evt',
                  {
                    url: b.location.href,
                    tn: a.tagName,
                    id: a.getAttribute('id'),
                    cls: a.getAttribute('class'),
                    ign: d,
                  },
                  1
                );
              return d ? null : a;
            };
          var on, nn;
          _.pn = function (a) {
            var b;
            if (!(b = null == a)) {
              try {
                a.setItem('__storage_test__', '__storage_test__');
                var c = a.getItem('__storage_test__');
                a.removeItem('__storage_test__');
                var d = '__storage_test__' == c;
              } catch (e) {
                d = !1;
              }
              b = !d;
            }
            return b ? null : (a = nn(a)) ? on(a) : null;
          };
          on = function (a) {
            a = void 0 === a ? [] : a;
            var b = Date.now();
            return _.Hb(a, function (c) {
              return 3600000 > b - c;
            });
          };
          _.qn = function (a) {
            return !!a && 1 > a.length;
          };
          nn = function (a) {
            try {
              var b = a.getItem('__lsv__');
              if (!b) return [];
              try {
                var c = JSON.parse(b);
              } catch (d) {}
              return !Array.isArray(c) ||
                _.Md(c, function (d) {
                  return !_.y(Number, 'isInteger').call(Number, d);
                })
                ? (a.removeItem('__lsv__'), [])
                : c;
            } catch (d) {
              return null;
            }
          };
          var rn = function (a, b, c) {
            var d = 0;
            try {
              (d |= a != a.top ? 512 : 0),
                (d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0);
            } catch (g) {
              d |= 32;
            }
            var e = 0;
            try {
              e |= fn(a, 2500);
              if (_.u(309)) {
                var f = _.dn(a).clientHeight;
                e |= f ? (320 > f ? -2147483648 : 0) : 1073741824;
              }
              e |= gn(a);
              b && !_.qn(_.pn(c)) && (e |= 134217728);
            } catch (g) {
              e |= 32;
            }
            return d | e;
          };
          var sn = function () {
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
          var un = function (a) {
            Wf(this, a, tn, null);
          };
          Id(un, O);
          var tn = [2],
            vn = function (a) {
              return C(a, 1);
            },
            wn = function (a, b) {
              return D(a, 1, b);
            },
            xn = function (a, b) {
              return D(a, 2, b || []);
            };
          var yn = function (a) {
            Wf(this, a, null, null);
          };
          Id(yn, O);
          var zn = function (a, b) {
              return D(a, 1, b);
            },
            An = function (a, b) {
              return D(a, 2, b);
            },
            Bn = function () {
              var a = new yn();
              return D(a, 3, !0);
            };
          var Cn = function (a) {
            Wf(this, a, null, null);
          };
          Id(Cn, O);
          var En = function (a) {
            Wf(this, a, Dn, null);
          };
          Id(En, O);
          var Dn = [2];
          var Fn = function (a) {
            Wf(this, a, null, null);
          };
          Id(Fn, O);
          var Hn = function (a) {
            Wf(this, a, Gn, null);
          };
          Id(Hn, O);
          var Gn = [3, 4, 5, 6, 8, 9];
          Hn.prototype.getAdUnitPath = function () {
            return C(this, 1);
          };
          Hn.prototype.getDomId = function () {
            return C(this, 2);
          };
          var In = function (a, b) {
            D(a, 2, b);
          };
          Hn.prototype.getClickUrl = function () {
            return C(this, 7);
          };
          var Jn = function (a) {
            return $f(a, 15, 0);
          };
          var Kn = function (a, b, c, d, e) {
              if ('string' !== typeof c || me(c)) e.L(Vk('Slot.setTargeting', [c, d]), a);
              else {
                var f = [];
                Array.isArray(d)
                  ? (f = d)
                  : Ad(d)
                  ? (f = _.u(437) ? [].concat(_.Yb(d)) : _.y(Array, 'from').call(Array, d))
                  : d && (f = [d]);
                f = f.map(String);
                (d = ((L = G(b, un, 9)), _.y(L, 'find')).call(L, function (g) {
                  return vn(g) === c;
                }))
                  ? xn(d, f)
                  : ((d = xn(wn(new un(), c), f)), ig(b, 9, d, un));
                e.info(Hl(c, f.join(), a.getSlotId().getAdUnitPath()), a);
              }
            },
            Ln = function (a, b, c, d) {
              if (null == c || 'object' !== typeof c)
                d.error(Vk('Slot.updateTargetingFromMap', [c]), a);
              else
                for (
                  var e = _.E(_.y(Object, 'keys').call(Object, c)), f = e.next();
                  !f.done;
                  f = e.next()
                )
                  (f = f.value), Kn(a, b, f, c[f], d);
            };
          var Mn = function (a) {
            Wf(this, a, null, null);
          };
          Id(Mn, O);
          var Nn = function (a) {
            Wf(this, a, null, null);
          };
          Id(Nn, O);
          var Pn = function (a) {
            Wf(this, a, On, null);
          };
          Id(Pn, O);
          var On = [2, 3, 7, 14],
            Qn = function (a) {
              return fg(a, Nn, 25);
            };
          var Rn = function () {};
          Rn.D = function () {
            throw Error('Must be overridden');
          };
          var Sn = function () {
            this.j = new w.Map();
          };
          _.M(Sn, Rn);
          Sn.D = Rn.D;
          zd(Sn);
          var Tn = function () {
              this.l = {};
              this.j = new Pn();
              D(this.j, 26, Oh());
              ((_.u(417) && 2 === vh()) || _.Zj(36)) && D(this.j, 15, !0);
            },
            Un = function (a) {
              var b = Tn.D(),
                c = a.getDomId();
              if (c && !b.l.hasOwnProperty(c)) {
                var d = Sn.D(),
                  e = ++fk.D().l;
                d.j.set(c, e);
                D(a, 20, e);
                b.l[c] = a;
              }
            },
            Vn = function () {
              return Tn.D().l;
            },
            Wn = function (a, b) {
              return a.l[b] || null;
            };
          zd(Tn);
          var Xn = function () {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null;
          };
          var Yn = function (a) {
              return Array.isArray(a) && 2 == a.length
                ? _.u(360)
                  ? Ph(a[0]) && Ph(a[1])
                  : Qh(a[0]) && Qh(a[1])
                : 'string' === typeof a && 'fluid' == a;
            },
            Zn = function (a) {
              return Array.isArray(a) && 2 == a.length && Qh(a[0]) && Qh(a[1]);
            },
            $n = function (a) {
              return Array.isArray(a) ? An(zn(new yn(), a[0]), a[1]) : Bn();
            },
            bo = function (a) {
              var b = [];
              if (ao(a)) b.push($n(a));
              else if (Array.isArray(a))
                for (var c = 0; c < a.length; ++c) {
                  var d = a[c];
                  ao(d) && b.push($n(d));
                  a: {
                    var e = ['fluid'];
                    if (Ad(d) && Ad(e) && d.length == e.length) {
                      for (var f = d.length, g = na, h = 0; h < f; h++)
                        if (!g(d[h], e[h])) {
                          d = !1;
                          break a;
                        }
                      d = !0;
                    } else d = !1;
                  }
                  d && b.push(Bn());
                }
              return b;
            },
            co = function (a) {
              if (!a || !Array.isArray(a) || 2 !== a.length) return null;
              var b = a[0];
              a = a[1];
              if ('number' === typeof b && 0 <= b) b = Math.floor(b);
              else if (null !== b) return null;
              if ('number' === typeof a && 0 <= a) a = Math.floor(a);
              else if (null !== a) return null;
              return An(zn(new yn(), b), a);
            },
            eo = function (a) {
              var b = null,
                c = null;
              var d = a && (Array.isArray(a.fixed) || 'fluid' === a.fixed);
              var e = a && Array.isArray(a.max);
              if (a && !Array.isArray(a) && (d || e)) {
                if (((d = bo(a.fixed)), (c = co(a.max))))
                  a.min
                    ? ((b = co(a.min)) && null === C(b, 1) && zn(b, 0),
                      b && null === C(b, 2) && An(b, 0))
                    : (b = An(zn(new yn(), 0), 0));
              } else d = bo(a);
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
              d.length || c || Hh('Invalid GPT fixed size specification: ' + JSON.stringify(a));
              c && b ? ((a = new Cn()), (c = gg(a, 1, c)), (b = gg(c, 2, b))) : (b = null);
              return { hd: d, Oa: b };
            },
            ao = function (a) {
              if (_.u(361)) return Yn(a);
              if (Array.isArray(a) && 1 < a.length) {
                var b = 'number' === typeof a[0] && 'number' === typeof a[1];
                a = !_.u(360) || (0 < a[0] && 0 < a[1]);
                return b && a;
              }
              return 'string' === typeof a && 'fluid' == a;
            };
          var fo = function (a, b) {
              a = _.y(a, 'find').call(a, function (c) {
                c = fg(c, yn, 1);
                return C(c, 1) <= C(b, 1) && C(c, 2) <= C(b, 2);
              });
              return null == a ? null : G(a, yn, 2);
            },
            go = function (a) {
              if (!Array.isArray(a) || 2 != a.length)
                throw Error('Each mapping entry must be an array of size 2');
              var b = a[0];
              if (!Zn(b)) throw Error('Size must be an array of two non-negative integers');
              b = An(zn(new yn(), b[0]), b[1]);
              if (Array.isArray(a[1]) && 0 == a[1].length) a = [];
              else if (((a = bo(a[1])), 0 == a.length))
                throw Error('At least one slot size must be present');
              var c = new En();
              b = gg(c, 1, b);
              return hg(b, 2, a);
            };
          var ho = function (a, b, c) {
              return 'number' === typeof b && 'number' === typeof c && 0 < G(a, En, 6).length
                ? fo(G(a, En, 6), An(zn(new yn(), b), c))
                : G(a, yn, 5);
            },
            Va = function (a) {
              var b = window,
                c = null;
              b.top == b && ((b = ym(!1, b)), (c = ho(a, b.width, b.height)));
              null == c && (c = ho(a));
              return c.map(function (d) {
                return r(d, 3) ? 'fluid' : [C(d, 1), C(d, 2)];
              });
            },
            rc = function (a) {
              if (0 == Va(a).length && Xf(a, 16)) return '1x1';
              var b = [],
                c = !1;
              a = _.E(Va(a));
              for (var d = a.next(); !d.done; d = a.next())
                (d = d.value),
                  Array.isArray(d) ? b.push(d.join('x')) : 'fluid' == d ? (c = !0) : b.push(d);
              c && b.unshift('320x50');
              return b.join('|');
            },
            io = function (a, b) {
              b = void 0 === b ? null : b;
              var c = 0,
                d = [];
              a && (d.push(a.getAdUnitPath()), d.push(rc(a)), d.push(a.getDomId()));
              if (b) {
                a = [];
                for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
                  9 === b.nodeType ? a.push('') : a.push(b.id);
                (b = a.join()) && d.push(b);
              }
              0 < d.length && (c = eh(d.join(':')));
              return c.toString();
            },
            jo = function (a) {
              return 0 !== a && 1 !== a;
            };
          var lo = function (a, b, c) {
              if (C(b, 18)) return C(b, 18);
              a = c.get(a.getSlotId());
              return null != a ? ko(a) : null;
            },
            mo = function (a, b, c, d) {
              return null != ko(c)
                ? !0
                : a.some(function (e) {
                    return null != lo(e, b[e.getSlotId().getDomId()], d);
                  });
            },
            wc = function (a) {
              var b = a.document;
              return Am(a) ? b.URL : b.referrer;
            },
            Sa = function (a) {
              try {
                var b = window.top,
                  c = new _.Wa(0, 0),
                  d = _.Ig(_.Ag(a));
                if (df(d, 'parent')) {
                  do {
                    var e = d == b ? Ii(a) : _.Ji(a);
                    c.x += e.x;
                    c.y += e.y;
                  } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                }
                var f = c;
              } catch (g) {
                f = new _.Wa(-12245933, -12245933);
              }
              return f;
            },
            no = Ta(function () {
              return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
            }),
            oo = function (a) {
              var b = a.split(/\r\n|\r|\n/).length;
              'Error' == a.slice(0, 5) && b--;
              return b;
            },
            po = function (a) {
              return a ? (a = Ni(a)) && a.floor() : null;
            },
            qo = function (a) {
              return !!a && !!C(a, 1);
            },
            ro = function (a) {
              return !!r(a, 6) || _.u(364);
            },
            so = function (a, b) {
              for (
                var c = {}, d = _.E(_.y(Object, 'keys').call(Object, b)), e = d.next();
                !e.done;
                e = d.next()
              ) {
                e = e.value;
                var f = b[e];
                f = new f.constructor(lg(f.la));
                var g = Sn.D(),
                  h = g.j.get(e);
                null == h ? (h = ++fk.D().l) : g.j.delete(e);
                D(f, 20, h);
                c[e] = f;
              }
              a = new a.constructor(lg(a.la));
              b = new Date(Date.now());
              b = b.getUTCFullYear() + Te(b.getUTCMonth() + 1) + Te(b.getUTCDate());
              return { O: a, P: c, xb: b };
            },
            to = Ta(function () {
              var a = window.crypto || window.msCrypto;
              if (void 0 !== a) {
                var b = new Uint8Array(16);
                a.getRandomValues(b);
              } else for (b = Array(16), a = 0; 16 > a; ++a) b[a] = Math.floor(255 * Math.random());
              a = '';
              b = _.E(b);
              for (var c = b.next(); !c.done; c = b.next())
                (c = c.value), 15 >= c && (a += '0'), (a += c.toString(16));
              return a;
            }),
            uo = function (a, b, c) {
              try {
                var d = xm(top.document, top).y,
                  e = d + b.height * (c + 1);
                return a.y >= d && a.y <= e;
              } catch (f) {
                return !0;
              }
            },
            vo = function (a, b, c) {
              var d = Oa(a.slot, b),
                e = d && 'none' === d.style.display;
              e && (d.style.display = 'block');
              a = Xa(b, a, c);
              e && (d.style.display = 'none');
              return a;
            },
            wo = function (a) {
              return !!a && (Xf(a, 1) || !!r(a, 6));
            },
            xo = function (a, b, c) {
              return wo(b) || 4 == Jn(a) || 5 === Jn(a) || c;
            },
            yo = function (a) {
              return 'google_ads_iframe_' + a.toString();
            },
            zo = function (a) {
              return yo(a) + '__container__';
            },
            Pa = function (a, b) {
              return (
                ((b = Oa(a, b)) && b.querySelector('[id="' + zo(a.getSlotId()) + '"]')) || null
              );
            },
            Ao = function (a, b) {
              return (b = Pa(a, b))
                ? b.querySelector('iframe[id="' + yo(a.getSlotId()) + '"]')
                : null;
            },
            Bo = function (a) {
              try {
                return JSON.stringify(a);
              } catch (b) {}
              return String(a);
            };
          var Co = '',
            Do = null,
            Eo = function () {
              for (
                var a = Kj(2) || '0-0-0',
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
            Fo = function () {
              Co || (Co = Eo());
              return Co;
            },
            Go = function () {
              if (null == Do) {
                for (var a = _.Lj(1), b = [], c = 0; c < a.length; c += 2) Sg(a[c], a[c + 1], b);
                Do = b.join('&');
              }
              return Do;
            },
            Ho = function (a) {
              var b = Bc.D(),
                c = new Fn();
              if (!a || !_.ha(a)) return null;
              var d = !1;
              _.bc(a, function (e, f) {
                var g = !1;
                switch (f) {
                  case 'allowOverlayExpansion':
                    'boolean' === typeof e ? D(c, 1, a.allowOverlayExpansion) : (d = g = !0);
                    break;
                  case 'allowPushExpansion':
                    'boolean' === typeof e ? D(c, 2, a.allowPushExpansion) : (d = g = !0);
                    break;
                  case 'sandbox':
                    !0 === e ? D(c, 3, a.sandbox) : (d = g = !0);
                    break;
                  case 'useUniqueDomain':
                    'boolean' === typeof e
                      ? D(c, 4, a.useUniqueDomain)
                      : null !== e && (d = g = !0);
                    break;
                  default:
                    g = !0;
                }
                g && b.error(Zl('setSafeFrameConfig', Bo(a), f, String(e)));
              });
              return d ? null : c;
            },
            Io = function (a) {
              var b = new Fn();
              a = _.E(a);
              for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value)) {
                  if (Xf(c, 1)) {
                    var d = r(c, 1);
                    D(b, 1, d);
                  }
                  Xf(c, 2) && ((d = r(c, 2)), D(b, 2, d));
                  Xf(c, 3) && ((d = r(c, 3)), D(b, 3, d));
                  Xf(c, 4) && ((c = r(c, 4)), D(b, 4, c));
                }
              return b;
            };
          var Jo = function (a, b) {
            this.l = a;
            this.j = b;
          };
          Jo.prototype.getWidth = function () {
            return this.l;
          };
          Jo.prototype.getHeight = function () {
            return this.j;
          };
          var Ko = function (a) {
            var b = this,
              c = Bc.D(),
              d = Wn(Tn.D(), a.getSlotId().getDomId()),
              e = '',
              f = !1;
            xk(a.getSlotId(), Gk, function (l) {
              var m = l.detail;
              l = m.Sb;
              m = m.isBackfill;
              l && ((e = l), (f = m));
            });
            this.set = S(40, function (l, m) {
              if ('string' !== typeof l || !m || void 0 === sn()[l])
                return c.L(Vk('Slot.set', [l, m]), a), b;
              var n = ((L = G(d, un, 3)), _.y(L, 'find')).call(L, function (p) {
                return vn(p) === l;
              });
              n ? xn(n, [m]) : ((n = wn(new un(), l)), eg(n, 2, m), ig(d, 3, n, un));
              return b;
            });
            this.get = S(41, function (l) {
              if ('string' !== typeof l) return c.L(Vk('Slot.get', [l]), a), null;
              var m = ((L = G(d, un, 3)), _.y(L, 'find')).call(L, function (n) {
                return vn(n) === l;
              });
              return (m = m && C(m, 2)) ? m[0] : null;
            });
            this.getAttributeKeys = S(42, function () {
              return G(d, un, 3).map(function (l) {
                return vn(l);
              });
            });
            this.addService = S(43, function (l) {
              l = Qj.get(l);
              if (!l) return c.L(Vk('Slot.addService', [l]), a), b;
              if (((L = C(d, 4)), _.y(L, 'includes')).call(L, l.aa()))
                return c.info(al(l.aa(), a.getSlotId().toString()), a), b;
              l.Da(a, d);
              return b;
            });
            this.defineSizeMapping = S(
              44,
              function (l) {
                if (!Array.isArray(l)) throw Error('Size mapping must be an array');
                l = l.map(go);
                hg(d, 6, l);
                return b;
              },
              function (l, m) {
                sk(l, m);
                Hh('Incorrect usage of googletag.Slot defineSizeMapping: ' + m.message);
                return b;
              }
            );
            this.setClickUrl = S(45, function (l) {
              if ('string' !== typeof l) return c.L(Vk('Slot.setClickUrl', [l]), a), b;
              D(d, 7, l);
              return b;
            });
            this.setCategoryExclusion = S(46, function (l) {
              'string' !== typeof l || me(l)
                ? c.L(Vk('Slot.setCategoryExclusion', [l]), a)
                : (((L = C(d, 8)), _.y(L, 'includes')).call(L, l) || eg(d, 8, l),
                  c.info(bl(l), a));
              return b;
            });
            this.clearCategoryExclusions = S(47, function () {
              D(d, 8, []);
              c.info(cl(), a);
              return b;
            });
            this.getCategoryExclusions = S(48, function () {
              return C(d, 8).slice();
            });
            this.setTargeting = S(49, function (l, m) {
              Kn(a, d, l, m, c);
              return b;
            });
            this.updateTargetingFromMap = S(649, function (l) {
              Ln(a, d, l, c);
              return b;
            });
            this.clearTargeting = S(50, function (l) {
              if (void 0 === l)
                return hg(d, 9, []), c.info(dl(a.getSlotId().getAdUnitPath()), a), b;
              var m = G(d, un, 9),
                n = _.y(m, 'findIndex').call(m, function (p) {
                  return vn(p) === l;
                });
              if (0 > n) return c.L(El(l, a.getSlotId().getAdUnitPath()), a), b;
              m.splice(n, 1);
              hg(d, 9, m);
              c.info(Ll(l, a.getSlotId().getAdUnitPath()), a);
              return b;
            });
            this.getTargeting = S(51, function (l) {
              if ('string' !== typeof l) return c.L(Vk('Slot.getTargeting', [l]), a), [];
              var m = ((L = G(d, un, 9)), _.y(L, 'find')).call(L, function (n) {
                return vn(n) === l;
              });
              return m ? C(m, 2).slice() : [];
            });
            this.getTargetingKeys = S(52, function () {
              return G(d, un, 9).map(function (l) {
                return vn(l);
              });
            });
            this.setCollapseEmptyDiv = S(53, function (l, m) {
              m = void 0 === m ? !1 : m;
              if ('boolean' !== typeof l || 'boolean' !== typeof m)
                return c.L(Vk('Slot.setCollapseEmptyDiv', [l, m]), a), b;
              D(d, 10, l);
              D(d, 11, l && m);
              qc('gpt_ced', function (n) {
                var p = r(d, 11) ? 't' : 'f';
                K(n, 'sc', p);
                K(n, 'level', 'slot');
                Dc(n);
              });
              m && !l && c.L(el(a.getSlotId().toString()), a);
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
                return c.L(Vk('Slot.setForceSafeFrame', [String(l)]), a), b;
              D(d, 12, l);
              return b;
            });
            this.setSafeFrameConfig = S(56, function (l) {
              var m = Ho(l);
              if (!m) return c.error(Vk('Slot.setSafeFrameConfig', [l]), a), b;
              gg(d, 13, m);
              return b;
            });
            var g = null;
            xk(a.getSlotId(), Fk, function (l) {
              l = l.detail;
              if (r(l, 8)) g = null;
              else {
                g = new Xn();
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
                l = C(l, 45);
                l = l.length && 'string' !== typeof l[0] ? _.Fb(l, Zf) : l;
                l.length && (g.encryptedTroubleshootingInfo = l[0]);
              }
            });
            this.getResponseInformation = S(355, function () {
              return g;
            });
            this.getName = S(170, function () {
              window.console &&
                console.error &&
                console.error(
                  'getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.'
                );
              var l = new mk('slot_get_name');
              Dc(l);
              ok(l);
              return a.getSlotId().getAdUnitPath();
            });
            this.getSlotId = S(579, function () {
              return Oc(a.getSlotId());
            });
            this.getServices = S(580, function () {
              return C(d, 4).map(function (l) {
                return Uj(l);
              });
            });
            this.getSizes = S(581, function (l, m) {
              return (l = ho(d, l, m))
                ? l.map(function (n) {
                    return r(n, 3) ? 'fluid' : new Jo(C(n, 1), C(n, 2));
                  })
                : null;
            });
            this.getClickUrl = S(582, function () {
              return Xf(d, 7) ? d.getClickUrl() : '';
            });
            this.getTargetingMap = S(583, function () {
              for (var l = {}, m = _.E(G(d, un, 9)), n = m.next(); !n.done; n = m.next())
                (n = n.value), (l[vn(n)] = C(n, 2));
              return l;
            });
            this.getOutOfPage = S(584, function (l) {
              return 'number' === typeof l ? Jn(d) === l : 0 != Jn(d);
            });
            this.getCollapseEmptyDiv = S(585, function () {
              return Xf(d, 10) ? r(d, 10) : null;
            });
            this.getDivStartsCollapsed = S(586, function () {
              return Xf(d, 11) ? r(d, 11) : null;
            });
            this.getContentUrl = S(587, function () {
              return _.u(469) ? h() : a.l();
            });
            var h = function () {
              return '';
            };
            _.u(469) &&
              xk(a.getSlotId(), Jk, function (l) {
                h = l.detail.ad;
              });
            this.getFirstLook = S(588, function () {
              Hh(
                'The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.'
              );
              return 0;
            });
            var k = '';
            _.u(473) &&
              xk(a.getSlotId(), Fk, function (l) {
                var m;
                k = null != (m = C(l.detail, 34)) ? m : '';
              });
            this.getEscapedQemQueryId = S(591, function () {
              var l;
              _.u(473) ? (l = k) : (l = (!_.u(473) && a.j && C(a.j, 34)) || '');
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
          _.M(Ko, Sj);
          var Lo = function (a) {
            this.getId = S(593, function () {
              return a.l;
            });
            this.getAdUnitPath = S(594, function () {
              return a.getAdUnitPath();
            });
            this.getName = S(595, function () {
              var b = new mk('slot_id_get_name');
              Dc(b);
              ok(b);
              return a.j;
            });
            this.toString = S(596, function () {
              return a.toString();
            });
            this.getDomId = S(597, function () {
              return a.getDomId();
            });
          };
          _.M(Lo, Sj);
          var Mo = function (a, b, c) {
            wk.call(this);
            this.j = a;
            this.$a = b;
            this.l = this.j + '_' + this.$a;
            this.o = c;
          };
          _.M(Mo, Tk);
          _.q = Mo.prototype;
          _.q.getAdUnitPath = function () {
            return this.j;
          };
          _.q.D = function () {
            return this.$a;
          };
          _.q.toString = function () {
            return this.l;
          };
          _.q.getDomId = function () {
            return this.o;
          };
          _.q.Na = function () {
            return new Lo(this);
          };
          var No = function (a) {
            wk.call(this);
            this.o = a;
            this.l = function () {
              return '';
            };
            this.j = this.yc = null;
          };
          _.M(No, Tk);
          No.prototype.Ia = function () {
            return !_.u(499) && !!this.j;
          };
          No.prototype.Na = function () {
            return new Ko(this);
          };
          var Oa = function (a, b) {
            b = void 0 === b ? document : b;
            return a.yc || b.getElementById(a.o.getDomId());
          };
          No.prototype.getSlotId = function () {
            return this.o;
          };
          No.prototype.isBackfill = function () {
            return this.j ? !!r(this.j, 9) : null;
          };
          No.prototype.B = function () {
            Tk.prototype.B.call(this);
          };
          var Oo = function () {
              this.l = sn();
              this.j = {};
            },
            Po = function (a, b, c, d) {
              b && b in a.l && (void 0 === d || d || !a.j[b]) && (a.j[b] = c || '');
            },
            ko = function (a) {
              return a.j.page_url || null;
            },
            Qo = function (a, b, c, d) {
              var e = [],
                f = b.j;
              _.bc(d, function (g, h) {
                if (g) {
                  g = { Mb: g };
                  var k = f[h],
                    l = [];
                  a.forEach(function (m, n) {
                    (m = c.get(m.getSlotId())) && m.j[h] && (l[n] = m.j[h]);
                  });
                  if (l.length || k) l.length && (g.Kd = l), k && (g.xd = k), e.push(g);
                }
              });
              return e;
            };
          var Ro = function (a) {
              this.id = a;
            },
            ic = new Ro(4),
            So = new Ro(11),
            To = new Ro(14),
            Uo = new Ro(15),
            Vo = new Ro(16),
            Wo = new Ro(17),
            jc = new Ro(18);
          var Xo = function () {
              this.j = new w.Map();
            },
            Zo = function (a, b, c) {
              od(function (d) {
                return cb(d, Yo(a, b, null, c), 0);
              });
            },
            $o = function (a, b, c, d) {
              return od(function (e) {
                return cb(
                  e,
                  _.y(w.Promise, 'allSettled').call(w.Promise, [
                    Yo(a, b, null, d),
                    Yo(a, b, c, d),
                  ]),
                  0
                );
              });
            },
            bp = function (a, b, c, d) {
              return ap(a, b, null, c, d);
            },
            hc = function (a, b, c, d) {
              var e = Xo.D();
              return ap(e, a, b, c, d);
            },
            ap = function (a, b, c, d, e) {
              var f = J(d, e, function (h, k) {
                  tk(h, k, !0);
                }),
                g = cp(b, c);
              b = a.j.get(g);
              b || ((b = []), a.j.set(g, b));
              b.push(f);
              return function () {
                var h = a.j.get(g);
                h && (da(h, f), h.length || a.j.delete(g));
              };
            },
            cp = function (a, b) {
              a = a.id;
              return b ? a + '_' + b : String(a);
            },
            Yo = function (a, b, c, d) {
              var e;
              return od(function (f) {
                e = a.j.get(cp(b, c)) || [];
                return cb(
                  f,
                  _.y(w.Promise, 'allSettled').call(
                    w.Promise,
                    e.map(function (g) {
                      return od(function (h) {
                        if (1 == h.j) return cb(h, 0, 2);
                        _.y(e, 'includes').call(e, g) && g(d);
                        h.j = 0;
                      });
                    })
                  ),
                  0
                );
              });
            };
          zd(Xo);
          var dp, hp, lp, mp, np, op, pp, qp, fp, gp, ep, rp;
          dp = function () {
            this.j = new w.Map();
            this.l = new Oo();
          };
          hp = function (a, b) {
            var c = b.getSlotId();
            if (!a.j.get(c)) {
              a.j.set(c, {
                Va: !0,
                uc: new Oo(),
                xb: null,
                ec: '',
                lb: '',
                Oc: 0,
                Gc: 0,
                ac: [],
                bc: [],
                isBackfill: !1,
                Ia: !1,
              });
              _.R(b, function () {
                a.j.delete(c);
                ep(a, c);
              });
              var d = function () {
                var e = a.j.get(c);
                e.Ac = _.fj();
                fp(a, c, function () {
                  e.Ac = void 0;
                });
              };
              _.u(469) ? xk(c, Jk, d) : _.R(b, hc(So, c, 764, d));
              _.R(
                b,
                hc(ic, c, 765, function () {
                  var e = a.j.get(c);
                  e.Mc = _.fj();
                  fp(a, c, function () {
                    e.Mc = void 0;
                  });
                })
              );
              xk(c, Ik, function (e) {
                var f = a.j.get(c);
                f.Fc = e.timeStamp;
                fp(a, c, function () {
                  f.Fc = void 0;
                });
              });
              xk(b.getSlotId(), Fk, function (e) {
                e = e.detail;
                var f = a.j.get(c);
                f.ec = C(e, 33) || '';
                f.Ia = !0;
                f.isBackfill = !!r(e, 9);
                gp(a, c, function () {
                  f.ec = '';
                });
                fp(a, c, function () {
                  f.isBackfill = !1;
                  f.Ia = !1;
                });
              });
            }
          };
          _.ip = function (a, b) {
            var c, d;
            return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Va) ? d : !1;
          };
          _.jp = function (a, b) {
            a.j.get(b) && (a.j.get(b).Va = !1);
          };
          _.kp = function (a, b) {
            a.j.get(b) && (a.j.get(b).Va = !0);
          };
          lp = function (a, b) {
            return a.j.has(b);
          };
          mp = function (a) {
            var b = new w.Map();
            a = _.E(_.y(a.j, 'entries').call(a.j));
            for (var c = a.next(); !c.done; c = a.next()) {
              var d = _.E(c.value);
              c = d.next().value;
              d = d.next().value;
              b.set(c, d.uc);
            }
            return b;
          };
          np = function (a, b) {
            var c, d;
            return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Mc) ? d : null;
          };
          op = function (a, b) {
            var c, d;
            return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Fc) ? d : null;
          };
          pp = function (a, b) {
            var c, d;
            return null != (d = null == (c = a.j.get(b)) ? void 0 : c.lb) ? d : '';
          };
          qp = function (a, b) {
            return ((a = a.j.get(b)) && a.Oc - 1) || 0;
          };
          fp = function (a, b, c) {
            (a = a.j.get(b)) && a.ac.push(c);
          };
          gp = function (a, b, c) {
            (a = a.j.get(b)) && a.bc.push(c);
          };
          ep = function (a, b) {
            if ((a = a.j.get(b)))
              for (
                b = a.bc.slice(), a.bc.length = 0, a = _.E(b), b = a.next();
                !b.done;
                b = a.next()
              )
                (b = b.value), b();
          };
          rp = function (a, b) {
            if ((a = a.j.get(b)))
              for (
                b = a.ac.slice(), a.ac.length = 0, a = _.E(b), b = a.next();
                !b.done;
                b = a.next()
              )
                (b = b.value), b();
          };
          dp.prototype.isBackfill = function (a) {
            var b, c;
            return null != (c = null == (b = this.j.get(a)) ? void 0 : b.isBackfill) ? c : !1;
          };
          dp.prototype.Ia = function (a) {
            var b, c;
            return null != (c = null == (b = this.j.get(a)) ? void 0 : b.Ia) ? c : !1;
          };
          var sp = function (a, b, c, d, e) {
              if (a.o) return a.o;
              if (!r(c, 5)) return '';
              a: {
                if (d && _.y(e, 'includes').call(e, '.'))
                  for (e = e.replace(/:\d+$/, ''), d = e.split('.'), e = 2; e <= d.length; e++) {
                    var f = d.slice(d.length - e).join('.');
                    Na('gadsTest', 'test', c, { domain: f }, b);
                    if ('test' === Ma('gadsTest', c, b)) {
                      b = f;
                      break a;
                    }
                  }
                b = null;
              }
              return b ? (a.o = b) : '';
            },
            tp = function (a, b, c) {
              if (a.B) return a.B;
              if (
                window.crypto &&
                window.crypto.subtle &&
                window.crypto.subtle.digest &&
                window.TextEncoder &&
                r(c, 5) &&
                (b = Nm(b, c))
              )
                return (
                  (b = new window.TextEncoder().encode(b)),
                  (a.B = window.crypto.subtle.digest('SHA-1', b).then(function (d) {
                    return _.y(Array, 'from')
                      .call(Array, new Uint8Array(d))
                      .map(function (e) {
                        return ((L = e.toString(16)), _.y(L, 'padStart')).call(L, 2, '0');
                      })
                      .join('');
                  })),
                  a.B
                );
              a.B = w.Promise.resolve(to());
              return a.B;
            };
          zd(dp);
          var vp = function (a) {
            var b = this;
            this.addEventListener = S(86, function (c, d) {
              a.addEventListener(c, d);
              return b;
            });
            this.getSlots = S(573, function () {
              return a.l.map(function (c) {
                return Oc(c);
              });
            });
            this.getSlotIdMap = S(574, function () {
              for (var c = {}, d = _.E(a.l), e = d.next(); !e.done; e = d.next())
                (e = e.value), (c[e.getSlotId().toString()] = Oc(e));
              return c;
            });
            this.enable = S(
              87,
              function () {
                return up(a);
              },
              sk
            );
            this.getName = S(575, function () {
              return a.aa();
            });
          };
          _.M(vp, Sj);
          var wp = { REWARDED: 4, TOP_ANCHOR: 2, BOTTOM_ANCHOR: 3, INTERSTITIAL: 5 },
            xp = function (a) {
              switch (a) {
                case 2:
                  return 2;
                case 3:
                  return 1;
                case 5:
                  return 8;
                case 4:
                  if (_.u(474)) return 11;
                default:
                  return null;
              }
            },
            yp = function () {
              var a = Ac();
              a.enums || (a.enums = { OutOfPageFormat: wp });
            };
          var zp = function () {
              this.l = [];
              this.B = [];
              this.j = {};
            },
            Ap = function (a, b) {
              if (!_.y(a.l, 'includes').call(a.l, b))
                switch (b) {
                  case 1:
                  case 2:
                  case 3:
                    var c;
                    if ((c = _.u(116) ? Sm[b] : Qm[b])) {
                      var d = b + '_hostpage_library';
                      if ((c = Yg(document, Ai(c)))) c.id = d;
                    }
                    a.l.push(b);
                    b = new Tm(b);
                    a.B.push(b);
                    a = Ac();
                    a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                    a.hostpageLibraryTokens[b.j] = b.l;
                }
            },
            Bp = function (a, b) {
              return a.j[b] || [];
            };
          zd(zp);
          var Cp = function () {
            var a = this;
            this.l = function () {
              return !1;
            };
            this.B = '';
            this.j = null;
            var b = Tn.D(),
              c = {};
            this[3] =
              ((c[19] = function () {
                return !!r(b.j, 10);
              }),
              (c[14] = no),
              (c[13] = function (d) {
                for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                return e.some(function (g) {
                  return 0 == a.B.lastIndexOf(g, 0);
                });
              }),
              (c[12] = function () {
                return !!r(b.j, 6);
              }),
              (c[11] = Wm),
              (c[15] = function (d) {
                return a.l(d);
              }),
              (c[7] = function () {
                return !(!_.I.crypto || !_.I.crypto.subtle);
              }),
              (c[48] = function () {
                return !!a.j;
              }),
              c);
            c = {};
            this[4] =
              ((c[8] = function (d) {
                return Lm(a.j, d);
              }),
              c);
            this[5] = {};
          };
          zd(Cp);
          var Dp = {
              Ae: 'rewardedSlotReady',
              ze: 'rewardedSlotGranted',
              we: 'rewardedSlotCanceled',
              xe: 'rewardedSlotClosed',
              ye: 'rewardedSlotCompleted',
              Be: 'slotAdded',
              Ee: 'slotRequested',
              Fe: 'slotResponseReceived',
              De: 'slotRenderEnded',
              Ce: 'slotOnload',
              Ge: 'slotVisibilityChanged',
              qe: 'impressionViewable',
            },
            Ep = function (a, b) {
              this.slot = a;
              this.serviceName = b;
            },
            Fp = function (a, b) {
              Ep.call(this, a, b);
              this.isEmpty = !1;
              this.slotContentChanged = !0;
              this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
              this.isBackfill = !1;
              this.companyIds = this.yieldGroupIds = null;
            };
          _.M(Fp, Ep);
          var Gp = function () {
            Ep.apply(this, arguments);
          };
          _.M(Gp, Ep);
          var Hp = function (a, b, c) {
            Ep.call(this, a, b);
            this.inViewPercentage = c;
          };
          _.M(Hp, Ep);
          var Ip = function () {
            Ep.apply(this, arguments);
          };
          _.M(Ip, Ep);
          var Jp = function () {
            Ep.apply(this, arguments);
          };
          _.M(Jp, Ep);
          var Kp = function (a, b, c, d) {
            Ep.call(this, a, b);
            this.makeRewardedVisible = c;
            this.payload = d;
          };
          _.M(Kp, Ep);
          var Lp = function (a, b, c) {
            Ep.call(this, a, b);
            this.payload = c;
          };
          _.M(Lp, Ep);
          var Mp = function () {
            Ep.apply(this, arguments);
          };
          _.M(Mp, Ep);
          var Np = function () {
            Ep.apply(this, arguments);
          };
          _.M(Np, Ep);
          var Op = function () {
            Ep.apply(this, arguments);
          };
          _.M(Op, Ep);
          var Pp = function () {
            Ep.apply(this, arguments);
          };
          _.M(Pp, Ep);
          var Qp = function () {
            Ep.apply(this, arguments);
          };
          _.M(Qp, Ep);
          var Rp = new w.Map(),
            Sp = new w.Set(),
            Tp = function () {
              wk.call(this);
              Sp.add(this);
              this.l = [];
              this.j = !1;
              this.N = new w.Map();
              this.log = Bc.D();
              this.log.info(ll(this.aa()));
              this.C = [];
            };
          _.M(Tp, Tk);
          Tp.prototype.Na = function () {
            return new vp(this);
          };
          var up = function (a) {
              if (!a.j) {
                a.j = !0;
                Gj(6);
                a.Xb();
                for (var b = _.E(a.C), c = b.next(); !c.done; c = b.next()) {
                  c = c.value;
                  try {
                    c();
                  } catch (d) {}
                }
                a.C.length = 0;
              }
            },
            Up = function (a, b) {
              if (a.j)
                try {
                  b();
                } catch (c) {}
              else a.C.push(b);
            };
          Tp.prototype.Da = function (a, b) {
            this.l.push(a);
            var c = new Jp(Oc(a), this.aa());
            Vp(this, 'slotAdded', c);
            this.log.info(ol(this.aa(), a.getSlotId().getAdUnitPath()), a);
            eg(b, 4, this.aa());
          };
          Tp.prototype.destroySlots = function (a) {
            var b = this.l,
              c = b.filter(function (d) {
                return _.y(a, 'includes').call(a, d);
              });
            c.forEach(function (d) {
              da(b, d);
            });
            return c;
          };
          var Wp = function (a, b) {
            qc('gpt_callback_usage', function (c) {
              Dc(c);
              K(c, 'type', b);
              var d = a.l.filter(function (f) {
                  var g = dp.D();
                  f = f.getSlotId();
                  var h, k;
                  return !(null == (k = null == (h = g.j.get(f)) ? void 0 : h.Ac) || !k);
                }).length,
                e = a.l.filter(function (f) {
                  return !!np(dp.D(), f.getSlotId());
                }).length;
              K(c, 'nfetch', d);
              K(c, 'nrend', e);
            });
          };
          Tp.prototype.addEventListener = function (a, b) {
            if ('function' !== typeof b || 'string' !== typeof a)
              return (a = Vk('Service.addEventListener', [a, b])), this.log.L(a), this;
            if (_.u(416) && 'rewardedSlotCanceled' === a) var c = !1;
            else
              a: {
                for (c in Dp)
                  if (Dp[c] == a) {
                    c = !0;
                    break a;
                  }
                c = !1;
              }
            if (!c) return this.log.L(Jl(a)), this;
            c = Xp(this, a);
            (_.u(409) && _.y(c, 'includes').call(c, b)) || c.push(b);
            Wp(this, a);
            return this;
          };
          var Vp = function (a, b, c) {
              var d = Xp(a, b);
              d.length &&
                Mh(function () {
                  for (var e = _.E(d), f = e.next(); !f.done; f = e.next()) {
                    f = f.value;
                    try {
                      f(c);
                    } catch (k) {
                      f = k && 'string' === typeof k.name ? k.name : null;
                      var g = k && 'string' === typeof k.message ? k.message : null,
                        h = '';
                      f && g ? (h = f + ': ' + g) : f ? (h = f) : g && (h = g);
                      a.log.L(Il(h));
                      window.console && console.error && console.error(k);
                    }
                  }
                });
            },
            Xp = function (a, b) {
              a = _.u(409) ? Rp : a.N;
              var c = a.get(b) || [];
              a.set(b, c);
              return c;
            },
            Yp = function (a) {
              for (var b = _.E(Sp), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a);
            };
          var Zp = function (a) {
              return !!dh(wp, function (b) {
                return b == a;
              });
            },
            bq = function (a) {
              return ((L = Wj($p(aq.D()))), _.y(L, 'includes')).call(L, a);
            },
            cq = _.Pd(function () {
              Hh(
                'The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.'
              );
            }),
            dq = function (a) {
              var b = _.I != _.I.top ? 512 : 0;
              if (b) return b;
              var c = _.an(_.I);
              c =
                26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount
                  ? 1 == a || 2 == a
                    ? !(!c.adCount[1] && !c.adCount[2])
                    : (c = c.adCount[a])
                    ? 1 <= c
                    : !1
                  : !1;
              c && (b |= 64);
              c = 0 === vh();
              switch (a) {
                case 2:
                case 1:
                  c && (b |= 536870912);
                  c = _.u(386) ? void 0 : 420;
                  c = void 0 === c ? bn : c;
                  var d = 0;
                  try {
                    d |= _.I != _.I.top ? 512 : 0;
                    var e = Math.min(_.I.screen.width || 0, _.I.screen.height || 0);
                    d |= e ? (320 > e ? 8192 : 0) : 2048;
                    var f;
                    if ((f = _.I.navigator)) {
                      var g = _.I.navigator.userAgent;
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
                    (f |= _.cn(_.I) ? 0 : 8), (f |= fn(_.I, c)), (f |= gn(_.I));
                  } catch (k) {
                    f |= 32;
                  }
                  if (_.an(_.I).tagSpecificState[1])
                    switch (a) {
                      case 2:
                        a = g;
                        a = void 0 === a ? null : a;
                        g = mn(_.I.innerWidth, 0, Math.round((_.I.innerWidth / 320) * 50 + 15));
                        ln(g, a) && (f |= 16777216);
                        break;
                      case 1:
                        a = g;
                        a = void 0 === a ? null : a;
                        g = _.I.innerWidth;
                        c = _.I.innerHeight;
                        d = Math.round((_.I.innerWidth / 320) * 50 + 15);
                        var h = mn(g, c - d, c);
                        25 < d && h.push({ x: g - 25, y: c - 25 });
                        ln(h, a) && (f |= 16777216);
                    }
                  return b | e | f;
                case 8:
                  return !_.u(400) && c && (b |= 536870912), b | rn(_.I, !1, null);
                case 11:
                  return b;
                default:
                  return b | 32;
              }
            },
            aq = function () {
              this.j = new w.Map();
              this.o = new w.Map();
              this.l = new w.Map();
              this.B = Bc.D();
              Cp.D().l = bq;
            };
          aq.prototype.add = function (a, b, c) {
            var d = this,
              e = void 0 === c ? {} : c;
            c = void 0 === e.nb ? void 0 : e.nb;
            var f = void 0 === e.Kc ? !1 : e.Kc,
              g = void 0 === e.instance ? void 0 : e.instance;
            if ('string' !== typeof a || 0 >= a.length || !b) return {};
            e = xp(void 0 === e.format ? 0 : e.format);
            if (null != e) {
              if (dq(e)) return {};
              hn(e);
            }
            f && cq();
            f = void 0 === g ? this.o.get(a) || Number(f) : g;
            var h = c || 'gpt_unit_' + a + '_' + f;
            b = eq(a, f, b, h);
            if (!b) return this.B.error(hl(h)), {};
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
            pk.push(c);
            return { slot: c, Ka: g };
          };
          var $p = function (a) {
              return _.u(437)
                ? [].concat(_.Yb(_.y(a.j, 'values').call(a.j)))
                : _.y(Array, 'from').call(Array, _.y(a.j, 'values').call(a.j));
            },
            fq = function (a) {
              var b = [];
              Bp(zp.D(), a).forEach(function (c) {
                (c = Ao(c, document)) && b.push(c.contentWindow);
              });
              return b;
            },
            gq = function (a) {
              a = _.E(a);
              for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                var c = Tn.D(),
                  d = b.getSlotId().getDomId(),
                  e = c.l[d];
                delete c.l[d];
                c = e;
                $h(b);
                c = xp(Jn(c));
                null != c &&
                  ((d = _.an(window)), (e = d.adCount && d.adCount[c]) && (d.adCount[c] = e - 1));
                da(pk, b);
              }
            },
            hq = function (a, b) {
              if (b && !Array.isArray(b)) return a.B.L(Vk('googletag.destroySlots', [b])), !1;
              b
                ? (ja(b),
                  (a = b.filter(function (c) {
                    return c && !c.fa;
                  })))
                : (a = $p(a));
              if (!a || 0 == a.length) return !1;
              Yp(a);
              gq(a);
              return !0;
            },
            iq = function (a, b) {
              a = _.E(_.y(a.j, 'values').call(a.j));
              for (var c = a.next(); !c.done; c = a.next())
                if (((c = c.value), c.getSlotId().getDomId() === b)) return c;
              return null;
            },
            jq = function (a, b) {
              return a.j.get(b) || null;
            },
            kq = function (a) {
              var b = aq.D();
              a = Tj(a, No);
              return !!a && b.j.has(a.getSlotId());
            },
            lq = function (a, b, c, d) {
              d = void 0 === d ? !1 : d;
              if ('string' === typeof a && (void 0 === c || 'string' === typeof c)) {
                var e = aq.D();
                return e && e.add(a, b, { nb: c, Kc: d });
              }
              return {};
            },
            mq = function (a, b, c) {
              return ((a = lq(a, b, c).slot) && Oc(a)) || null;
            },
            nq = function (a) {
              var b = aq.D();
              return b && null == a
                ? hq(b)
                : b && Array.isArray(a)
                ? ((a = a.map(function (c) {
                    return Tj(c, No);
                  })),
                  hq(b, a))
                : !1;
            },
            Nc = function (a, b, c) {
              c = aq.D().add(a, [1, 1], { nb: c, format: b });
              a = c.slot;
              c = c.Ka;
              if (a && c) {
                if (5 === b && _.u(323)) return null;
                D(c, 15, b);
              }
              return a || null;
            },
            oq = function (a, b) {
              return 'string' === typeof a &&
                (null == b || 'string' === typeof b || ('number' === typeof b && Zp(b)))
                ? (a = Nc(a, 'number' === typeof b ? b : 1, 'string' === typeof b ? b : void 0)) &&
                    Oc(a)
                : null;
            },
            eq = function (a, b, c, d) {
              if (aq.D().l.has(d)) return null;
              var e = new Hn();
              In(D(e, 1, a), d);
              c = eo(c);
              var f = c.Oa;
              hg(e, 5, c.hd);
              null !== f && gg(e, 16, f);
              Un(e);
              var g = new Mo(a, b, d),
                h = new No(g);
              _.ai(h, g);
              Bc.D().info(Wk(g.toString()), h);
              _.R(h, function () {
                Bc.D().info(Kl(g.toString()), h);
              });
              _.u(469)
                ? xk(g, Jk, function (k) {
                    k = k.detail.vb;
                    Bc.D().info(Xk(g.getAdUnitPath()), h);
                    oj(fk.D(), '7', 9, qp(dp.D(), g), 0, k);
                  })
                : _.R(
                    h,
                    hc(So, g, 768, function (k) {
                      Bc.D().info(Xk(g.getAdUnitPath()), h);
                      oj(fk.D(), '7', 9, qp(dp.D(), g), 0, k);
                    })
                  );
              xk(g, Fk, function (k) {
                var l = k.detail;
                Bc.D().info(Yk(g.getAdUnitPath()), h);
                var m;
                k = fk.D();
                var n = C(e, 20);
                l = null != (m = C(l, 34)) ? m : '';
                k.j &&
                  ((_.I.google_timing_params = _.I.google_timing_params || {}),
                  (_.I.google_timing_params['qqid.' + n] = l));
              });
              xk(g, Gk, function () {
                return void Bc.D().info(Zk(g.getAdUnitPath()), h);
              });
              _.R(
                h,
                hc(ic, g, 771, function () {
                  Bc.D().info($k(g.getAdUnitPath()), h);
                })
              );
              return { slot: h, da: e, slotId: g };
            };
          zd(aq);
          mq = J(74, mq);
          nq = J(75, nq);
          oq = J(73, oq);
          var pq = J(95, function (a) {
            var b = Bc.D();
            var c = null;
            var d = '';
            if ('string' === typeof a) {
              d = a;
              var e = iq(aq.D(), d);
            } else _.ha(a) && 1 == a.nodeType ? ((c = a), (d = c.id), (e = iq(aq.D(), d))) : (e = Tj(a, No));
            if (e) {
              if (((a = Tn.D().j), (d = Wn(Tn.D(), e.getSlotId().getDomId()))))
                if (((a = so(a, Vn())), !r(d, 19)))
                  if (((e.yc = c), Oa(e) || jo(Jn(d))))
                    for (D(d, 19, !0), b = _.E(C(d, 4)), c = b.next(); !c.done; c = b.next())
                      (c = Uj(c.value)), (c = Tj(c, Tp)), c.j && c.lc(a, e);
                  else b.L(fl(String(d.getAdUnitPath()), String(d.getDomId())), e);
            } else d ? b.error(gl(d)) : b.error(Vk('googletag.display', [String(a)]));
          });
          var jb = be('https://tpc.googlesyndication.com/sodar/%{basename}.js');
          var db = function (a) {
            return new w.Promise(function (b, c) {
              var d = new XMLHttpRequest();
              d.onreadystatechange = function () {
                d.readyState === d.DONE &&
                  (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
              };
              d.open('GET', a, !0);
              d.send();
            });
          };
          var qq = function (a) {
              this.j = a.j;
              this.l = a.l;
              this.B = a.B;
              this.sb = a.sb;
              this.M = a.M;
              this.eb = a.eb;
              this.Kb = a.Kb;
              this.Nb = a.Nb;
            },
            rq = function (a, b) {
              this.j = a;
              this.l = b;
              this.B = 'pt';
              this.M = window;
              this.eb = 'env';
              this.Kb = 'n';
              this.Nb = '0';
            };
          var tq = function (a) {
            Wf(this, a, sq, null);
          };
          Id(tq, O);
          var uq = function (a) {
            Wf(this, a, null, null);
          };
          Id(uq, O);
          var vq = function (a) {
            Wf(this, a, null, null);
          };
          Id(vq, O);
          var wq = function (a) {
            Wf(this, a, null, null);
          };
          Id(wq, O);
          var sq = [1, 2],
            xq = function (a, b) {
              var c = C(a, 1);
              null != c && null != c && Nf(b, 1, c);
              c = fg(a, vq, 2);
              null != c && Rf(b, 2, c);
              c = fg(a, vq, 3);
              null != c && Rf(b, 3, c);
              c = C(a, 4);
              null != c && Pf(b, 4, c);
              c = C(a, 5);
              null != c && Pf(b, 5, c);
            },
            Qf = function (a, b) {
              var c = C(a, 1);
              null != c && null != c && Nf(b, 1, c);
              c = C(a, 2);
              null != c && null != c && Nf(b, 2, c);
              c = C(a, 3);
              null != c && null != c && Nf(b, 3, c);
            },
            yq = function (a, b) {
              var c = C(a, 1);
              null != c && Pf(b, 1, c);
              c = C(a, 2);
              null != c && Pf(b, 2, c);
              c = C(a, 3);
              null != c && null != c && Of(b, 3, c);
              c = C(a, 4);
              null != c && null != c && Mf(b, 4, c);
              c = C(a, 5);
              null != c && null != c && Mf(b, 5, c);
              c = C(a, 6);
              null != c && null != c && Mf(b, 6, c);
            };
          var zq = navigator,
            Aq = function (a) {
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
            Bq = function (a, b) {
              if (!a || 'none' == a) return 1;
              a = String(a);
              'auto' == a &&
                ((a = b), 'www.' == a.substring(0, 4) && (a = a.substring(4, a.length)));
              return Aq(a.toLowerCase());
            },
            Cq = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
            Dq = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
            Eq = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
          var Gq = function (a) {
            Wf(this, a, Fq, null);
          };
          Id(Gq, O);
          var Fq = [15],
            Hq = function () {
              var a = new Gq(),
                b = _.u(76);
              return dg(a, 7, b);
            };
          var Iq = function (a) {
            Wf(this, a, null, null);
          };
          Id(Iq, O);
          var Jq = function (a) {
            Wf(this, a, null, null);
          };
          Id(Jq, O);
          fe(ae(be('https://pagead2.googlesyndication.com/pagead/osd.js')));
          var Kq = function (a, b) {
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
              else !1 !== c && ((d = $g([0], a)), null == d && ((d = $g([2], b)) || (d = 3)));
              if (!d) return 0;
              window.__google_ad_urls_id = d;
            }
            return window.__google_ad_urls_id;
          };
          var Lq = function () {};
          _.q = Lq.prototype;
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
          var Mq = new mj(1, Oi()),
            Nq = function () {
              var a = Oi();
              a &&
                'undefined' != typeof a.google_measure_js_timing &&
                !a.google_measure_js_timing &&
                ((Mq.j = !1),
                Mq.events != Mq.B.google_js_reporting_queue &&
                  (lj() && _.Kd(Mq.events, _.nj), (Mq.events.length = 0)));
            };
          (function () {
            var a = Oi();
            a &&
              a.document &&
              ('complete' == a.document.readyState
                ? Nq()
                : Mq.j &&
                  _.x(a, 'load', function () {
                    Nq();
                  }));
          })();
          var Pq = function () {
              var a = Oq,
                b = Oi() || _.I;
              return b.google_osd_loaded ? !1 : (Yg(b.document, a), (b.google_osd_loaded = !0));
            },
            Qq = function (a, b, c) {
              a && (c ? _.x(a, 'load', b) : _.ub(a, 'load', b));
            },
            Rq = function () {
              var a = (Oi() || _.I).google_osd_amcb;
              return 'function' === typeof a ? a : null;
            },
            Sq = fe(ae(be('https://www.googletagservices.com/activeview/js/current/osd.js'))),
            Tq = function (a) {
              return he(Sq, { cb: void 0 === a ? '/r20100101' : a });
            };
          var Uq = function (a, b) {
            this.l = b && b.l ? b.l : 0;
            this.B = b ? b.B : '';
            this.j = b && b.j ? b.j : [];
            if (b) for (a = 0; a < this.j.length; ++a) this.j[a].o = !0;
          };
          _.q = Uq.prototype;
          _.q.getNewBlocks = function (a, b) {
            for (var c = this.j.length, d = 0; d < c; d++) {
              var e = this.j[d];
              !e.B && e.j && ((e.B = !0), a(e.j, e.A, e.V, e.l, void 0, e.o, e.C, e.H, e.F));
            }
            b && ((Oi() || _.I).google_osd_amcb = a);
          };
          _.q.setupOse = function (a) {
            if (this.getOseId()) return this.getOseId();
            var b = Kq(Vq, Wq);
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
            c = Rq();
            e = _.fj() || -1;
            f = _.I.pageYOffset;
            0 <= f || (f = -1);
            c && d
              ? c(d, a, b, !1, void 0, !1, g, e, f)
              : ((g = new Xq(a, b, d, g, e, f)),
                this.j.push(g),
                Qq(d, g.m, !0),
                Oq ||
                  (_.qi(
                    _.I,
                    '//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=' +
                      b +
                      ('&req=' + a)
                  ),
                  (Oq = Tq('/r20100101'))),
                Pq() && Pi());
          };
          _.q.unloadAdBlock = function (a, b, c) {
            c = void 0 === c ? !1 : c;
            b = Oi();
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c &&
              (c = Ih(this.j, function (d) {
                return d.j == a;
              })) &&
              Qq(a, c.m, !1);
          };
          var Yq = function () {
              var a = Oi(),
                b = a.__google_ad_urls;
              if (!b) return (a.__google_ad_urls = new Uq(a));
              try {
                if (0 <= b.getOseId()) return b;
              } catch (c) {}
              try {
                return (a.__google_ad_urls = new Uq(a, b));
              } catch (c) {
                return (a.__google_ad_urls = new Uq(a));
              }
            },
            Oq = null,
            Wq = 0,
            Vq = 0,
            Xq = function (a, b, c, d, e, f) {
              var g = this;
              d = void 0 === d ? _.yd : d;
              this.A = a;
              this.V = b;
              this.j = c;
              this.o = this.B = this.l = !1;
              this.C = d;
              this.H = void 0 === e ? -1 : e;
              this.F = void 0 === f ? -1 : f;
              this.m = function () {
                return (g.l = !0);
              };
            };
          window.Goog_AdSense_getAdAdapterInstance = Yq;
          var Zq = ['Goog_AdSense_OsdAdapter'],
            $q = _.I;
          Zq[0] in $q || 'undefined' == typeof $q.execScript || $q.execScript('var ' + Zq[0]);
          for (var ar; Zq.length && (ar = Zq.shift()); )
            Zq.length || void 0 === Uq
              ? $q[ar] && $q[ar] !== Object.prototype[ar]
                ? ($q = $q[ar])
                : ($q = $q[ar] = {})
              : ($q[ar] = Uq);
          var br = ['auto', 'inherit', '100%'],
            cr = br.concat(['none']),
            dr = function (a, b, c, d, e, f) {
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
                  } catch (H) {
                    if (15 == H.code) throw ((H.styleSheet = l), H);
                  }
                  k = m;
                } catch (H) {
                  continue;
                }
                if (k && 0 < k.length)
                  for (m = 0; m < Math.min(k.length, f); ++m) {
                    var n = k[m],
                      p;
                    if ((p = 1 == n.type)) {
                      p = n;
                      var t = c;
                      p = g.call(a, p.selectorText) && t(p);
                    }
                    if (!p && (p = d && 4 == n.type))
                      a: {
                        p = a;
                        t = c;
                        for (var A = f, z = 0; z < Math.min(n.cssRules.length, A); z++) {
                          var F = n.cssRules[z],
                            B = t;
                          if (g.call(p, F.selectorText) && B(F)) {
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
            fr = function (a, b, c) {
              var d = void 0 === d ? 10 : d;
              var e = void 0 === e ? 10 : e;
              if (!a) return !0;
              var f = !0;
              Ch(
                a,
                function (g) {
                  return (f = er(g, b, !1, d, e));
                },
                void 0 === c ? 100 : c
              );
              return f;
            },
            er = function (a, b, c, d, e) {
              var f = a.style;
              return (f && f.height && !_.ca(br, f.height)) ||
                (f && f.maxHeight && !_.ca(cr, f.maxHeight)) ||
                dr(
                  a,
                  b.document,
                  function (g) {
                    var h = g.style.height;
                    g = g.style['max-height'];
                    return (h && !_.ca(br, h)) || (g && !_.ca(cr, g));
                  },
                  c,
                  d,
                  e
                )
                ? !1
                : !0;
            };
          var gr = function (a) {
              a = void 0 === a ? window : a;
              return a._gmptnl
                ? 'afma-gpt-sdk-a'
                : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl
                ? 'afma-gpt-sdk-i'
                : null;
            },
            hr = function (a, b) {
              b = void 0 === b ? window : b;
              var c = gr(b);
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
          var ir = function () {
            this.l = [];
            this.j = -1;
          };
          ir.prototype.set = function (a, b) {
            b = void 0 === b ? !0 : b;
            0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && ((this.l[a] = b), (this.j = -1));
          };
          ir.prototype.get = function (a) {
            return !!this.l[a];
          };
          var jr = function (a) {
            -1 == a.j &&
              (a.j = Ld(a.l, function (b, c, d) {
                return c ? b + Math.pow(2, d) : b;
              }));
            return a.j;
          };
          var kr = function () {
              this.j = [];
              this.l = [];
              this.B = [];
            },
            lr = function (a, b) {
              a.l.push(b);
            };
          kr.prototype.clear = function () {
            this.j.length = 0;
            this.B.length = 0;
            this.l.length = 0;
          };
          var Kb = function () {
            var a = this;
            this.promise = new w.Promise(function (b, c) {
              a.resolve = b;
              a.reject = c;
            });
          };
          var mr = function (a) {
            a = Error.call(this, a);
            this.message = a.message;
            'stack' in a && (this.stack = a.stack);
            _.y(Object, 'setPrototypeOf').call(Object, this, mr.prototype);
            this.name = 'InputError';
          };
          _.M(mr, Error);
          var nr = function () {
              this.l = new Kb();
            },
            or = function () {
              nr.apply(this, arguments);
            };
          _.M(or, nr);
          var U = function (a, b) {
              a.B || ((a.j = b), a.l.resolve(b));
            },
            pr = function (a) {
              a.B || ((a.j = null), a.l.resolve(null));
            };
          Uc.Object.defineProperties(or.prototype, {
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
          var qr = function (a) {
            this.l = new Kb();
            this.B = a;
          };
          _.M(qr, nr);
          var rr = function (a) {
            return null != a.B.j;
          };
          Uc.Object.defineProperties(qr.prototype, {
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
          var sr = function () {
            qr.apply(this, arguments);
          };
          _.M(sr, qr);
          Uc.Object.defineProperties(sr.prototype, {
            value: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return this.B.j;
              },
            },
          });
          var tr = function () {
            or.apply(this, arguments);
          };
          _.M(tr, or);
          tr.prototype.notify = function () {
            pr(this);
          };
          var ur = function () {
            _.Q.call(this);
            var a = this;
            this.o = new kr();
            this.ua = !1;
            _.R(this, function () {
              a.o.clear();
            });
          };
          _.M(ur, _.Q);
          ur.prototype.start = function () {
            return ab(this, function b () {
              var c = this,
                d,
                e;
              return bb(b, function (f) {
                switch (f.j) {
                  case 1:
                    if (c.ua) return f.return();
                    c.ua = !0;
                    d = c.o.l.map(function (g) {
                      return g.promise;
                    });
                    f.A = 2;
                    return cb(f, w.Promise.all(d), 4);
                  case 4:
                    if (c.fa) {
                      f.j = 5;
                      break;
                    }
                    vr(c);
                    return cb(f, c.j(), 5);
                  case 5:
                    eb(f, 0);
                    break;
                  case 2:
                    e = fb(f);
                    if (c.fa) return f.return();
                    e instanceof mr || (c.U(e), c.o.j.length && wr(c, new mr(e.message)));
                    f.j = 0;
                }
              });
            });
          };
          ur.prototype.l = function () {
            var a = new or();
            this.o.j.push(a);
            return a;
          };
          var xr = function (a) {
              var b = new tr();
              a.o.j.push(b);
              return b;
            },
            V = function (a, b) {
              lr(a.o, b);
              b = new sr(b);
              a.o.B.push(b);
              return b;
            },
            W = function (a, b) {
              lr(a.o, b);
              return new qr(b);
            },
            vr = function (a) {
              for (var b = 0, c = _.E(a.o.B), d = c.next(); !d.done; d = c.next()) {
                if (!rr(d.value)) throw Error('missing input: ' + a.id() + '/' + b);
                ++b;
              }
            },
            wr = function (a, b) {
              a = _.E(a.o.j);
              for (var c = a.next(); !c.done; c = a.next())
                if (((c = c.value), !c.B)) {
                  var d = b;
                  c.o = d;
                  c.l.reject(d);
                }
            };
          var yr = function (a) {
            ur.call(this);
            this.I = a;
          };
          _.M(yr, ur);
          yr.prototype.U = function (a) {
            this.I(this.id(), a);
          };
          var zr = function () {
              this.errorMessage = this.info = this.error = this.yb = null;
            },
            Ar = function (a, b) {
              a.yb = b;
              return a;
            };
          zr.prototype.getError = function () {
            return this.error;
          };
          var Br = function (a, b) {
              a.errorMessage = b;
              return a;
            },
            Cr = function () {
              this.cache = {};
            },
            nb = function () {
              Dr || ((Er = _.v(1920, Er)), (Fr = _.v(1921, Fr)), (Dr = new Cr()));
              return Dr;
            },
            Gr = function (a) {
              var b = C(a, 3);
              if (!b) return 3;
              if (!C(a, 2)) return 4;
              a = Date.now();
              return a > b + 3600000 * Fr ? 2 : a > b + 3600000 * Er ? 1 : 0;
            };
          Cr.prototype.get = function (a, b) {
            var c = new zr();
            if (this.cache[a]) return Ar(c, this.cache[a]);
            var d = '';
            try {
              d = b.getItem('_GESPSK-' + a);
            } catch (e) {
              return (c.error = 6), Br(c, e.message);
            }
            if (!d) return new zr();
            b = null;
            try {
              b = kg(wq, d);
            } catch (e) {
              return (a = new zr()), (a.error = 5), Br(a, e.message);
            }
            b && (this.cache[a] = b);
            return Ar(new zr(), b);
          };
          Cr.prototype.set = function (a, b) {
            D(a, 3, Date.now());
            var c = C(a, 1) || '',
              d = '_GESPSK-' + c,
              e = Ar(new zr(), a);
            try {
              b.setItem(d, a.m());
            } catch (f) {
              (e.info = 7), Br(e, f.message);
            }
            this.cache[c] = a;
            return e;
          };
          Cr.prototype.clear = function (a) {
            for (var b = new zr(), c = [], d = 0; d < a.length; d++) {
              var e = a.key(d);
              if (e && _.y(e, 'startsWith').call(e, '_GESPSK')) {
                var f = this.get(e.substring(8), a).yb;
                (f && 2 !== Gr(f)) || c.push(e);
              }
            }
            c = _.E(c);
            for (d = c.next(); !d.done; d = c.next()) {
              d = d.value;
              delete this.cache[d];
              try {
                a.removeItem(d);
              } catch (g) {
                b.info || ((b.info = 8), Br(b, g.message));
              }
            }
            return b;
          };
          var Dr = null,
            Er = 24,
            Fr = 72;
          var wb = function (a, b, c, d) {
            yr.call(this, d);
            this.C = a;
            this.H = b;
            this.F = c;
            this.m = this.l();
            this.A = this.l();
          };
          _.M(wb, yr);
          wb.prototype.j = function () {
            var a = nb().get(this.C, this.F);
            if (a.getError())
              ob(a.getError(), this.C, a.errorMessage, this.F), pr(this.m), pr(this.A);
            else {
              (a = a.yb) ||
                ((a = new wq()),
                (a = D(a, 1, this.C)),
                (a = D(a, 4, 0)),
                (a = D(a, 5, 0)),
                (a = D(a, 6, 0)),
                (a = D(a, 3, Date.now())));
              a: {
                var b = C(a, 4) || 0;
                var c = _.v(1922);
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
              b ? (pr(this.m), pr(this.A)) : (U(this.m, this.H), U(this.A, a));
            }
          };
          wb.prototype.id = function () {
            return 655;
          };
          var xb = function (a, b, c, d) {
            yr.call(this, d);
            this.H = c;
            this.m = this.l();
            this.A = this.l();
            this.C = this.l();
            this.F = W(this, a);
            this.J = W(this, b);
          };
          _.M(xb, yr);
          xb.prototype.j = function () {
            var a = this;
            if (this.F.value) {
              var b = function (g) {
                  var h = C(g, 2);
                  h ? U(a.m, { id: C(g, 1), Je: h }) : pr(a.m);
                },
                c = this.F.value,
                d = this.J.value,
                e = C(d, 1),
                f = Gr(d);
              switch (f) {
                case 0:
                  b(d);
                  Hr(this);
                  break;
                case 1:
                  b(d);
                  U(this.A, c);
                  U(this.C, d);
                  break;
                case 3:
                case 2:
                case 4:
                  3 === f && pb(9, e),
                    D(d, 2, null),
                    (f = _.v(1919)),
                    (0 > f
                      ? sb(e, d, c, this.H)
                      : w.Promise.race([
                          tb(f).then(function () {
                            pb(2, e);
                            return d;
                          }),
                          sb(e, d, c, this.H),
                        ])
                    ).then(b),
                    Hr(this);
              }
            } else pr(this.m), Hr(this);
          };
          var Hr = function (a) {
            pr(a.A);
            pr(a.C);
          };
          xb.prototype.id = function () {
            return 658;
          };
          var yb = function (a, b, c, d) {
            yr.call(this, d);
            this.C = c;
            this.m = W(this, a);
            this.A = W(this, b);
          };
          _.M(yb, yr);
          yb.prototype.j = function () {
            var a = this;
            this.A.value &&
              this.m.value &&
              vb().then(function () {
                var b = a.m.value,
                  c = a.A.value;
                sb(C(c, 1), c, b, a.C);
              });
          };
          yb.prototype.id = function () {
            return 662;
          };
          var zb = function () {
            _.Q.apply(this, arguments);
            this.j = [];
          };
          _.M(zb, _.Q);
          var Ab = function (a, b) {
              b = _.E(b);
              for (var c = b.next(); !c.done; c = b.next()) (c = c.value), _.ai(a, c), a.j.push(c);
            },
            X = function (a, b) {
              Ab(a, [b]);
            },
            Bb = function (a) {
              if (a.j.length) {
                a = _.E(a.j);
                for (var b = a.next(); !b.done; b = a.next()) b.value.start();
              }
            };
          zb.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.j.length = 0;
          };
          var Ir = 0,
            Jr = fe(ae(be('https://pagead2.googlesyndication.com/pagead/expansion_embed.js')));
          var Kr = {};
          var Lr = Ta(function () {
              return !(of || pf || nf) && (Bf || jf || hf);
            }),
            Mr = function (a, b, c, d, e) {
              d = void 0 === d ? '' : d;
              var f = a.createElement('link');
              try {
                (f.rel = c),
                  (f.href =
                    -1 != c.toLowerCase().indexOf('stylesheet')
                      ? Ya(b).toString()
                      : b instanceof de
                      ? Ya(b).toString()
                      : b instanceof _.ye
                      ? _.ze(b)
                      : _.ze(_.Be(b)));
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
          var Nr = /^\.google\.(com?\.)?[a-z]{2,3}$/,
            Or = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
            Pr = _.I,
            Rr = function (a) {
              a = 'https://adservice' + (a + '/adsid/integrator.js');
              var b = ['domain=' + encodeURIComponent(_.I.location.hostname)];
              Qr[3] >= Hd() && b.push('adsid=' + encodeURIComponent(Qr[1]));
              (void 0 == Kr.enable_mustu_exp_behavior ? 0 : Kr.enable_mustu_exp_behavior) &&
                b.push('meb=1');
              return a + '?' + b.join('&');
            },
            Qr,
            Sr,
            Tr = function () {
              Pr = _.I;
              Qr = Pr.googleToken = Pr.googleToken || {};
              var a = Hd();
              (Qr[1] && Qr[3] > a && 0 < Qr[2]) ||
                ((Qr[1] = ''), (Qr[2] = -1), (Qr[3] = -1), (Qr[4] = ''), (Qr[6] = ''));
              Sr = Pr.googleIMState = Pr.googleIMState || {};
              a = Sr[1];
              (Nr.test(a) && !Or.test(a)) || (Sr[1] = '.google.com');
              Array.isArray(Sr[5]) || (Sr[5] = []);
              'boolean' !== typeof Sr[6] && (Sr[6] = !1);
              Array.isArray(Sr[7]) || (Sr[7] = []);
              'number' !== typeof Sr[8] && (Sr[8] = 0);
            },
            Ur = function () {
              Tr();
              return Qr[1];
            },
            Vr = function () {
              Tr();
              return Qr[4];
            },
            Wr = function () {
              Tr();
              return Qr[6];
            },
            Xr = {
              Vb: function () {
                return 0 < Sr[8];
              },
              yd: function () {
                Sr[8]++;
              },
              zd: function () {
                0 < Sr[8] && Sr[8]--;
              },
              Ad: function () {
                Sr[8] = 0;
              },
              Me: function () {
                return !1;
              },
              Bc: function () {
                return Sr[5];
              },
              wc: function (a) {
                try {
                  a();
                } catch (b) {
                  _.I.setTimeout(function () {
                    throw b;
                  }, 0);
                }
              },
              Lc: function () {
                if (!Xr.Vb()) {
                  var a = _.I.document,
                    b = function (e) {
                      e = Rr(e);
                      a: {
                        try {
                          var f = wd();
                          break a;
                        } catch (g) {}
                        f = void 0;
                      }
                      Mr(a, e, 'preload', 'script', f);
                      f = a.createElement('script');
                      f.type = 'text/javascript';
                      f.onerror = function () {
                        return _.I.processGoogleToken({}, 2);
                      };
                      e = Ai(e);
                      f.src = Ya(e);
                      Za(f);
                      try {
                        (a.head || a.body || a.documentElement).appendChild(f), Xr.yd();
                      } catch (g) {}
                    },
                    c = Sr[1];
                  b(c);
                  '.google.com' != c && b('.google.com');
                  b = {};
                  var d = ((b.newToken = 'FBT'), b);
                  _.I.setTimeout(function () {
                    return _.I.processGoogleToken(d, 1);
                  }, 1000);
                }
              },
            },
            Yr = function (a) {
              Tr();
              var b = Pr.googleToken[5] || 0;
              a && (0 != b || Qr[3] >= Hd() ? Xr.wc(a) : (Xr.Bc().push(a), Xr.Lc()));
              (Qr[3] >= Hd() && Qr[2] >= Hd()) || Xr.Lc();
            },
            Zr = function (a) {
              _.I.processGoogleToken =
                _.I.processGoogleToken ||
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
                  Tr();
                  1 == c ? Xr.Ad() : Xr.zd();
                  var k = (Pr.googleToken = Pr.googleToken || {}),
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
                  e = e && !Xr.Vb() && (!(Qr[3] >= Hd()) || 'NT' == Qr[1]);
                  var m = !(Qr[3] >= Hd()) && 0 != c;
                  if (l || e || m)
                    (e = Hd()),
                      (f = e + 1000 * f),
                      (g = e + 1000 * g),
                      0.00001 > Math.random() &&
                        _.qi(
                          _.I,
                          'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c
                        ),
                      (k[5] = c),
                      (k[1] = b),
                      (k[2] = f),
                      (k[3] = g),
                      (k[4] = h),
                      (k[6] = d),
                      Tr();
                  if (l || !Xr.Vb()) {
                    c = Xr.Bc();
                    for (b = 0; b < c.length; b++) Xr.wc(c[b]);
                    c.length = 0;
                  }
                };
              Yr(a);
            };
          var fc = function (a, b) {
              b = void 0 === b ? {} : b;
              this.root = b.root ? b.root : null;
              this.C = b.rootMargin
                ? Gb(b.rootMargin)
                : [
                    { value: 0, type: 'px' },
                    { value: 0, type: 'px' },
                    { value: 0, type: 'px' },
                    { value: 0, type: 'px' },
                  ];
              this.rootMargin = _.Fb(this.C, function (c) {
                return '' + c.value + c.type;
              }).join(' ');
              this.H = Ib(b.threshold);
              this.F = a;
              this.j = [];
              this.o = [];
              this.m = !1;
              this.l = null;
              this.B = Qd(this.A, 100, this);
            },
            $r = function (a) {
              if (a.root) var b = Jb(a.root);
              else {
                var c = _.Fg(window);
                b = {
                  top: 0,
                  right: c.width,
                  bottom: c.height,
                  left: 0,
                  width: c.width,
                  height: c.height,
                };
              }
              a = _.Fb(a.C, function (d, e) {
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
            as = function (a, b, c) {
              if (!b || b.isIntersecting != c.isIntersecting) return !0;
              var d = b.intersectionRatio,
                e = c.intersectionRatio;
              return d == e
                ? !1
                : _.Md(a.H, function (f) {
                    return f < d != f < e;
                  });
            };
          fc.prototype.A = function () {
            var a = this,
              b = $r(this);
            _.Kd(this.j, function (c) {
              var d = c.target,
                e = Jb(d),
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
              as(a, c.na, d) && a.o.push(d);
              c.na = d;
            });
            this.o.length && this.F(bs(this), this);
          };
          fc.prototype.observe = function (a) {
            _.Md(this.j, function (b) {
              return b.target == a;
            }) ||
              (this.j.push({ target: a, na: null }),
              this.A(),
              this.m ||
                ((this.m = !0),
                _.x(_.I, 'scroll', this.B),
                _.x(_.I, 'resize', this.B),
                _.I.MutationObserver &&
                  !this.l &&
                  ((this.l = new MutationObserver(this.B)),
                  this.l.observe(_.I.document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }))));
          };
          fc.prototype.unobserve = function (a) {
            this.j = _.Hb(this.j, function (b) {
              return b.target != a;
            });
            0 == this.j.length && this.disconnect();
          };
          fc.prototype.disconnect = function () {
            this.m = !1;
            this.j.length = 0;
            _.ub(_.I, 'scroll', this.B);
            _.ub(_.I, 'resize', this.B);
            this.l && (this.l.disconnect(), (this.l = null));
          };
          var bs = function (a) {
            var b = [].concat(_.Yb(a.o));
            a.o.length = 0;
            return b;
          };
          _.cs = function (a, b, c) {
            this.j = void 0 === a ? null : a;
            this.o = void 0 === b ? 'jserror' : b;
            this.l = void 0 === c ? 0.01 : c;
            this.m = this.B;
          };
          _.cs.prototype.B = function (a, b, c, d, e) {
            c = void 0 === c ? this.l : c;
            e = void 0 === e ? this.o : e;
            if (Math.random() > c) return !1;
            (b.error && b.meta && b.id) || (b = new vg(b, { context: a, id: e }));
            d && ((b.meta = {}), d && d(b.meta));
            _.I.google_js_errors = _.I.google_js_errors || [];
            _.I.google_js_errors.push(b);
            _.I.error_rep_loaded ||
              (Yg(
                _.I.document,
                Ai(_.I.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js')
              ),
              (_.I.error_rep_loaded = !0));
            return !1;
          };
          var ds = function (a, b, c, d, e, f) {
            _.Q.call(this);
            this.m = a;
            this.status = 1;
            this.l = b;
            this.A = c;
            this.K = d;
            this.rb = !!e;
            this.o = Math.random();
            this.C = {};
            this.j = null;
            this.F = (0, _.Fd)(this.J, this);
            this.H = f;
          };
          _.M(ds, _.Q);
          ds.prototype.J = function (a) {
            if (a.origin === this.A && (this.rb || a.source == this.l)) {
              var b = null;
              try {
                b = JSON.parse(a.data);
              } catch (c) {}
              if (_.ha(b) && ((a = b.i), b.c === this.m && a != this.o)) {
                if (2 !== this.status)
                  try {
                    (this.status = 2), es(this), this.j && (this.j(), (this.j = null));
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
          var es = function (a) {
            var b = {};
            b.c = a.m;
            b.i = a.o;
            a.H && (b.e = a.H);
            a.l.postMessage(JSON.stringify(b), a.A);
          };
          ds.prototype.I = function () {
            if (1 === this.status) {
              try {
                this.l.postMessage && es(this);
              } catch (a) {}
              window.setTimeout((0, _.Fd)(this.I, this), 50);
            }
          };
          ds.prototype.connect = function (a) {
            a && (this.j = a);
            _.x(window, 'message', this.F);
            this.K && this.I();
          };
          var fs = function (a, b, c) {
              a.C[b] = c;
            },
            gs = function (a, b, c) {
              var d = {};
              d.c = a.m;
              d.i = a.o;
              d.s = b;
              d.p = c;
              try {
                a.l.postMessage(JSON.stringify(d), a.A);
              } catch (e) {}
            };
          ds.prototype.B = function () {
            this.status = 3;
            _.ub(window, 'message', this.F);
            _.Q.prototype.B.call(this);
          };
          var hs = function () {
              this.j = [];
            },
            js = function (a, b, c, d, e) {
              a.j.push(new is(b, c, d, e));
            },
            ks = function (a, b, c, d) {
              js(a, b, c, d + 'px', void 0);
            },
            ls = function (a) {
              for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.l
                  ? (c.B.style.removeProperty(c.j), c.B.style.setProperty(c.j, String(c.o), c.m))
                  : (c.B.style[c.j] = c.o);
              }
              a.j.length = 0;
            },
            is = function (a, b, c, d) {
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
          var ms, ns;
          ms = { overflow: 'hidden', position: 'fixed' };
          _.os = function (a, b) {
            if (!a.body) return null;
            var c = new ns();
            c.apply(a, b);
            return function () {
              _.Ci(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.B,
                position: c.o,
                top: c.m,
              });
              b.scrollTo(0, c.l);
            };
          };
          ns = function () {
            this.j = this.m = this.o = this.B = null;
            this.l = 0;
          };
          ns.prototype.apply = function (a, b) {
            this.B = a.body.style.overflow;
            this.o = a.body.style.position;
            this.m = a.body.style.top;
            this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.l = _.jn(b);
            _.Ci(a.body, 'top', -this.l + 'px');
            _.Ci(a.body, ms);
          };
          _.ps = function () {
            this.j = null;
          };
          zd(_.ps);
          var qs = function (a, b) {
            b = void 0 === b ? 500 : b;
            _.Q.call(this);
            this.l = a;
            this.j = null;
            this.m = {};
            this.A = 0;
            this.C = b;
            this.o = null;
          };
          _.M(qs, _.Q);
          qs.prototype.B = function () {
            this.m = {};
            this.o && (_.ub(this.l, 'message', this.o), delete this.o);
            delete this.m;
            delete this.l;
            delete this.j;
            _.Q.prototype.B.call(this);
          };
          var ss = function (a) {
              return 'function' === typeof a.l.__uspapi || null != rs(a);
            },
            us = function (a, b) {
              var c = {};
              if (ss(a)) {
                var d = _.Pd(function () {
                  return b(c);
                });
                ts(a, function (e, f) {
                  f && (c = e);
                  d();
                });
                setTimeout(d, a.C);
              } else b(c);
            },
            ts = function (a, b) {
              if ('function' === typeof a.l.__uspapi) (a = a.l.__uspapi), a('getUSPData', 1, b);
              else if (rs(a)) {
                vs(a);
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
            rs = function (a) {
              if (a.j) return a.j;
              a.j = th(a.l, '__uspapiLocator');
              return a.j;
            },
            vs = function (a) {
              a.o ||
                ((a.o = function (b) {
                  try {
                    var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
                      .__uspapiReturn;
                    a.m[c.callId](c.returnValue, c.success);
                  } catch (d) {}
                }),
                _.x(a.l, 'message', a.o));
            };
          var ws = function (a) {
            Wf(this, a, null, null);
          };
          Id(ws, O);
          var ys = function (a) {
            Wf(this, a, xs, null);
          };
          Id(ys, O);
          var xs = [1, 2];
          var zs = function (a) {
            Wf(this, a, null, null);
          };
          Id(zs, O);
          var As = function (a) {
            Wf(this, a, null, null);
          };
          Id(As, O);
          var Bs = function (a) {
            _.Q.call(this);
            this.l = a;
            this.o = this.j = null;
            this.m = {};
            this.A = 0;
            this.j ||
              (this.l.googlefc ? (this.j = this.l) : (this.j = th(this.l, 'googlefcPresent')));
          };
          _.M(Bs, _.Q);
          var Ds = function (a, b, c) {
              if (a.j)
                if (a.j === a.l)
                  (a = a.l.googlefc || (a.l.googlefc = {})),
                    (a.__fci = a.__fci || []),
                    a.__fci.push(b, function (f) {
                      c(kg(As, f));
                    });
                else {
                  Cs(a);
                  var d = a.A++;
                  a.m[d] = c;
                  var e = {};
                  a.j.postMessage(((e.__fciCall = { command: b, callId: d }), e), '*');
                }
            },
            Es = function (a, b) {
              return new w.Promise(function (c) {
                Ds(a, b, c);
              });
            },
            Cs = function (a) {
              a.o ||
                ((a.o = function (b) {
                  try {
                    var c = kg(As, b.data.__fciReturn);
                    (0, a.m[C(c, 1)])(c);
                  } catch (d) {}
                }),
                _.x(a.l, 'message', a.o));
            },
            Fs = function (a, b, c, d) {
              if (!b) return w.Promise.resolve(null);
              var e = fg(b, ws, 3);
              b = fg(b, zs, 2);
              return e && b && 1 === C(b, 1) && 2 === C(e, 1)
                ? Es(a, 'getM25Consent').then(function (f) {
                    var g = fg(f, ys, 4);
                    if (g) {
                      if (((f = d), c)) {
                        var h = C(g, 1);
                        h && _.y(h, 'includes').call(h, c) && (f = !1);
                        (g = C(g, 2)) && _.y(g, 'includes').call(g, c) && (f = !0);
                      }
                    } else f = null;
                    return f;
                  })
                : w.Promise.resolve(null);
            };
          var Gs = function (a) {
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
            Hs = function (a, b) {
              b = void 0 === b ? 500 : b;
              _.Q.call(this);
              this.l = a;
              this.j = null;
              this.m = {};
              this.C = 0;
              this.A = b;
              this.o = null;
            };
          _.M(Hs, _.Q);
          Hs.prototype.B = function () {
            this.m = {};
            this.o && (_.ub(this.l, 'message', this.o), delete this.o);
            delete this.m;
            delete this.l;
            delete this.j;
            _.Q.prototype.B.call(this);
          };
          var Js = function (a) {
            return 'function' === typeof a.l.__tcfapi || null != Is(a);
          };
          Hs.prototype.addEventListener = function (a) {
            var b = {},
              c = _.Pd(function () {
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
                  (b.internalErrorState = Gs(b)),
                  (g && 0 === b.internalErrorState) ||
                    ((b.tcString = 'tcunavailable'), g || (b.internalErrorState = 3)))
                : ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3));
              a(b);
            };
            try {
              Ks(this, 'addEventListener', e);
            } catch (f) {
              (b.tcString = 'tcunavailable'),
                (b.internalErrorState = 3),
                d && (clearTimeout(d), (d = 0)),
                c();
            }
          };
          Hs.prototype.removeEventListener = function (a) {
            a && a.listenerId && Ks(this, 'removeEventListener', null, a.listenerId);
          };
          var Ms = function (a, b) {
              var c = { internalErrorState: 0 },
                d = _.Pd(function () {
                  return b(c);
                }),
                e = 0;
              -1 !== a.A &&
                (e = setTimeout(function () {
                  c.tcString = 'tcunavailable';
                  c.internalErrorState = 1;
                  d();
                }, a.A));
              Ks(a, 'addEventListener', function (f, g) {
                e && (clearTimeout(e), (e = 0));
                g && (c = f);
                c.internalErrorState = Gs(c);
                0 != c.internalErrorState && (c.tcString = 'tcunavailable');
                if (0 != c.internalErrorState || Ls(c))
                  Ks(a, 'removeEventListener', null, c.listenerId), d();
              });
            },
            Ks = function (a, b, c, d) {
              c || (c = function () {});
              if ('function' === typeof a.l.__tcfapi) (a = a.l.__tcfapi), a(b, 2, c, d);
              else if (Is(a)) {
                Ns(a);
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
            Is = function (a) {
              if (a.j) return a.j;
              a.j = th(a.l, '__tcfapiLocator');
              return a.j;
            },
            Ns = function (a) {
              a.o ||
                ((a.o = function (b) {
                  try {
                    var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
                      .__tcfapiReturn;
                    a.m[c.callId](c.returnValue, c.success);
                  } catch (d) {}
                }),
                _.x(a.l, 'message', a.o));
            },
            Ls = function (a) {
              if (!1 === a.gdprApplies) return !0;
              void 0 === a.internalErrorState && (a.internalErrorState = Gs(a));
              return 'error' === a.cmpStatus ||
                0 !== a.internalErrorState ||
                ('loaded' === a.cmpStatus &&
                  ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus))
                ? !0
                : !1;
            };
          var Os = function (a, b) {
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
          var Ps = function (a, b, c, d, e, f) {
              this.B = ii(a);
              this.l = ii(b);
              this.o = c;
              this.j = ii(d);
              this.m = e;
              this.A = f;
            },
            Qs = function (a) {
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
            Rs = function (a, b) {
              var c = window,
                d = c.screenX || c.screenLeft || 0,
                e = c.screenY || c.screenTop || 0;
              c = new _.hi(
                e,
                d + (c.outerWidth || document.documentElement.clientWidth || 0),
                e + (c.outerHeight || document.documentElement.clientHeight || 0),
                d
              );
              var f = Ii(a);
              d = _.Li(_.Mi, a);
              var g = new ji(f.x, f.y, d.width, d.height);
              d = ki(g);
              e = String(Fi(a, 'zIndex'));
              var h = new _.hi(0, Infinity, Infinity, 0);
              for (
                var k = Bg(a), l = k.j.body, m = k.j.documentElement, n = Gg(k.j);
                (a = Hi(a));

              )
                if (
                  !((_.ff && 0 == a.clientWidth) || (kf && 0 == a.clientHeight && a == l)) &&
                  a != l &&
                  a != m &&
                  'visible' != Fi(a, 'overflow')
                ) {
                  var p = Ii(a),
                    t = new _.Wa(a.clientLeft, a.clientTop);
                  p.x += t.x;
                  p.y += t.y;
                  h.top = Math.max(h.top, p.y);
                  h.right = Math.min(h.right, p.x + a.clientWidth);
                  h.bottom = Math.min(h.bottom, p.y + a.clientHeight);
                  h.left = Math.max(h.left, p.x);
                }
              a = n.scrollLeft;
              n = n.scrollTop;
              h.left = Math.max(h.left, a);
              h.top = Math.max(h.top, n);
              k = _.Fg(Hg(k.j) || window);
              h.right = Math.min(h.right, a + k.width);
              h.bottom = Math.min(h.bottom, n + k.height);
              h = (h =
                0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null)
                ? new ji(h.left, h.top, h.right - h.left, h.bottom - h.top)
                : null;
              b
                ? ((k = b.boundingClientRect),
                  (b = new ji(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)))
                : (b = h);
              k = h ? li(g, h) : null;
              h = f = 0;
              k &&
                !new _.yg(k.width, k.height).isEmpty() &&
                ((f = k.width / g.width), (h = k.height / g.height));
              k = new _.hi(0, 0, 0, 0);
              if ((a = b))
                (g = li(g, b))
                  ? ((n = ki(b)),
                    (l = ki(g)),
                    (a = l.right != n.left && n.right != l.left),
                    (n = l.bottom != n.top && n.bottom != l.top),
                    (a = (0 != g.width || a) && (0 != g.height || n)))
                  : (a = !1);
              a &&
                (k = new _.hi(
                  Math.max(d.top - b.top, 0),
                  Math.max(b.left + b.width - d.right, 0),
                  Math.max(b.top + b.height - d.bottom, 0),
                  Math.max(d.left - b.left, 0)
                ));
              return new Ps(c, d, e, k, f, h);
            };
          var Ss = function (a) {
            this.m = a;
            this.o = null;
            this.I = this.status = 0;
            this.l = null;
            this.ka = 'sfchannel' + a;
          };
          var Ts = !1,
            Us = '',
            Vs = function (a) {
              a = a.match(/[\d]+/g);
              if (!a) return '';
              a.length = 3;
              return a.join('.');
            };
          (function () {
            if (navigator.plugins && navigator.plugins.length) {
              var a = navigator.plugins['Shockwave Flash'];
              if (a && ((Ts = !0), a.description)) {
                Us = Vs(a.description);
                return;
              }
              if (navigator.plugins['Shockwave Flash 2.0']) {
                Ts = !0;
                Us = '2.0.0.11';
                return;
              }
            }
            if (
              navigator.mimeTypes &&
              navigator.mimeTypes.length &&
              ((a = navigator.mimeTypes['application/x-shockwave-flash']),
              (Ts = !(!a || !a.enabledPlugin)))
            ) {
              Us = Vs(a.enabledPlugin.description);
              return;
            }
            if ('undefined' != typeof ActiveXObject) {
              try {
                var b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');
                Ts = !0;
                Us = Vs(b.GetVariable('$version'));
                return;
              } catch (c) {}
              try {
                b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                Ts = !0;
                Us = '6.0.21';
                return;
              } catch (c) {}
              try {
                (b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')),
                  (Ts = !0),
                  (Us = Vs(b.GetVariable('$version')));
              } catch (c) {}
            }
          })();
          var Ws = Ts,
            Xs = Us;
          var Ys = function (a) {
            this.j = a;
          };
          var Zs = function (a, b) {
            this.Hb = a;
            this.Ib = b;
            this.l = this.j = !1;
          };
          var $s = function (a, b, c, d, e, f, g, h, k) {
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
          var at = function (a, b) {
            this.l = a;
            this.o = b;
          };
          at.prototype.j = function (a) {
            this.o && a && (a.sentinel = this.o);
            return JSON.stringify(a);
          };
          var bt = function (a, b, c) {
            at.call(this, a, void 0 === c ? '' : c);
            this.version = b;
          };
          _.M(bt, at);
          bt.prototype.j = function () {
            return at.prototype.j.call(this, { uid: this.l, version: this.version });
          };
          var ct = function (a, b, c, d) {
            at.call(this, a, void 0 === d ? '' : d);
            this.m = b;
            this.B = c;
          };
          _.M(ct, at);
          ct.prototype.j = function () {
            return at.prototype.j.call(this, {
              uid: this.l,
              initialWidth: this.m,
              initialHeight: this.B,
            });
          };
          var dt = function (a, b, c) {
            at.call(this, a, void 0 === c ? '' : c);
            this.B = b;
          };
          _.M(dt, at);
          dt.prototype.j = function () {
            return at.prototype.j.call(this, { uid: this.l, description: this.B });
          };
          var et = function (a, b, c, d) {
            at.call(this, a, void 0 === d ? '' : d);
            this.B = b;
            this.push = c;
          };
          _.M(et, at);
          et.prototype.j = function () {
            return at.prototype.j.call(this, {
              uid: this.l,
              expand_t: this.B.top,
              expand_r: this.B.right,
              expand_b: this.B.bottom,
              expand_l: this.B.left,
              push: this.push,
            });
          };
          var ft = function (a, b) {
            at.call(this, a, void 0 === b ? '' : b);
          };
          _.M(ft, at);
          ft.prototype.j = function () {
            return at.prototype.j.call(this, { uid: this.l });
          };
          var gt = function (a, b, c) {
            at.call(this, a, void 0 === c ? '' : c);
            this.m = b;
          };
          _.M(gt, at);
          gt.prototype.j = function () {
            var a = { uid: this.l, newGeometry: Qs(this.m) };
            return at.prototype.j.call(this, a);
          };
          var ht = function (a, b, c, d, e, f) {
            gt.call(this, a, c, void 0 === f ? '' : f);
            this.success = b;
            this.B = d;
            this.push = e;
          };
          _.M(ht, gt);
          ht.prototype.j = function () {
            var a = {
              uid: this.l,
              success: this.success,
              newGeometry: Qs(this.m),
              expand_t: this.B.top,
              expand_r: this.B.right,
              expand_b: this.B.bottom,
              expand_l: this.B.left,
              push: this.push,
            };
            this.o && (a.sentinel = this.o);
            return JSON.stringify(a);
          };
          var it = function (a, b, c, d) {
            at.call(this, a, void 0 === d ? '' : d);
            this.width = b;
            this.height = c;
          };
          _.M(it, at);
          it.prototype.j = function () {
            return at.prototype.j.call(this, {
              uid: this.l,
              width: this.width,
              height: this.height,
            });
          };
          var jt = function (a, b, c, d, e) {
            var f = c;
            f && (f = '?' + f);
            b =
              (void 0 === e ? '//tpc.googlesyndication.com' : e) +
              ('/safeframe/' + b + '/html/container.html' + f);
            e = a;
            for (f = 0; e != e.parent; ) f++, (e = e.parent);
            (e = f) && (b += (c ? '&' : '?') + 'n=' + e);
            (c = d) || (c = lh(a, !1));
            return (c ? 'https:' : 'http:') + b;
          };
          var kt = function (a, b, c, d) {
              var e = d || window;
              return function () {
                var f = _.gj(),
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
                    ((f = { label: a.toString(), value: f, duration: (_.gj() || 0) - f, type: g }),
                    (g = e.google_js_reporting_queue = e.google_js_reporting_queue || []),
                    2048 > g.length && g.push(f));
                }
                return h;
              };
            },
            lt = function (a, b) {
              return kt(
                a,
                b,
                function (c, d) {
                  new _.cs().B(c, d);
                },
                void 0
              );
            };
          var qt = function (a) {
            Ss.call(this, a.uniqueId);
            var b = this;
            this.F = a.td;
            this.V = 1 == a.size;
            this.W = new Zs(a.permissions.Hb && !this.V, a.permissions.Ib && !this.V);
            this.A = a.hc;
            this.oa = a.hostpageLibraryTokens || [];
            var c = window.location;
            this.ia = 'file:' == c.protocol ? '*' : c.protocol + '//' + c.host;
            this.ja = !!a.rb;
            c = !1 === a.Uc ? 'https:' : window.location.protocol;
            this.T = a.Pc
              ? '//' + a.Pc + '.safeframe.googlesyndication.com'
              : '//tpc.googlesyndication.com';
            this.ha = Pb(a.Za) ? 'https://secureframe.doubleclick.net' : c + this.T;
            this.X = !!a.ed;
            this.ea = mt(a);
            this.B = new hs();
            nt(this, a.hc, a.size);
            this.o = this.ba = Rs(a.hc);
            this.N = a.Fd || '1-0-37';
            this.ga = a.$c || '';
            this.Z = void 0 === a.Za ? null : a.Za;
            ot(this, a);
            this.U = null;
            this.J = kt(
              412,
              function () {
                return pt(b);
              },
              a.ta
            );
            this.K = -1;
            this.C = 0;
            this.H = null;
            !a.Oe ||
              'function' !== typeof IntersectionObserver ||
              mf ||
              lf ||
              (this.H = new IntersectionObserver(
                kt(
                  414,
                  function (e) {
                    b.U = e[e.length - 1];
                    pt(b);
                  },
                  a.ta
                )
              ));
            this.l = new ds(this.ka, this.j.contentWindow, this.ha, !1);
            fs(this.l, 'init_done', (0, _.Fd)(this.Wb, this));
            fs(this.l, 'register_done', (0, _.Fd)(this.kc, this));
            fs(this.l, 'report_error', (0, _.Fd)(this.mc, this));
            fs(this.l, 'expand_request', (0, _.Fd)(this.Ub, this));
            fs(this.l, 'collapse_request', (0, _.Fd)(this.Rb, this));
            fs(this.l, 'creative_geometry_update', (0, _.Fd)(this.R, this));
            this.l.connect((0, _.Fd)(this.$b, this));
            var d = kt(
              415,
              function () {
                b.j && ((b.j.name = ''), a.Jc && a.Jc(), _.ub(b.j, 'load', d));
              },
              a.ta
            );
            _.x(this.j, 'load', d);
            this.Wb = kt(413, this.Wb, a.ta);
            this.kc = kt(417, this.kc, a.ta);
            this.mc = kt(419, this.mc, a.ta);
            this.Ub = kt(411, this.Ub, a.ta);
            this.Rb = kt(409, this.Rb, a.ta);
            this.R = kt(410, this.R, a.ta);
            this.$b = kt(416, this.$b, a.ta);
          };
          _.M(qt, Ss);
          var nt = function (a, b, c) {
              a.V
                ? ((b.style.width = _.Ki('100%', !0)), (b.style.height = _.Ki('auto', !0)))
                : ((b.style.width = _.Ki(c.width, !0)), (b.style.height = _.Ki(c.height, !0)));
            },
            ot = function (a, b) {
              var c = Bg(a.A),
                d = b.content;
              d = a.N + ';' + d.length + ';' + d;
              var e = new $s(
                a.m,
                a.ia,
                a.ba,
                a.W,
                new Ys({
                  shared: {
                    sf_ver: a.N,
                    ck_on: navigator.cookieEnabled ? 1 : 0,
                    flash_ver: Ws ? Xs : '0',
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
              f.initialGeometry = Qs(e.B);
              var g = e.permissions;
              g = JSON.stringify({
                expandByOverlay: g.Hb,
                expandByPush: g.Ib,
                readCookie: g.j,
                writeCookie: g.l,
              });
              f =
                ((f.permissions = g),
                (f.metadata = JSON.stringify(e.o.j)),
                (f.reportCreativeGeometry = e.A),
                (f.isDifferentSourceWindow = e.rb),
                (f.goog_safeframe_hlt = Um(e.hostpageLibraryTokens)),
                (f.encryptionMode = e.Za),
                f);
              e.j && (f.sentinel = e.j);
              e = JSON.stringify(f);
              var h = d + e;
              f = !1 === b.Uc;
              if (a.X && b.size instanceof _.yg) {
                d = Pb(b.Za)
                  ? 'https://secureframe.doubleclick.net'
                  : Hg(c.j).location.protocol + a.T;
                e = b.Ec;
                g = b.size;
                var k = Hg(Bg(a.A).j);
                Ir || Yg(k.document, Jr);
                Ir++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                  a: e,
                  b: d,
                  c: g.width,
                  d: g.height,
                  e: 'sf-gdn-exp-' + Ir,
                  f: void 0,
                  g: void 0,
                  h: void 0,
                  i: void 0,
                });
              }
              e = b.size;
              var l = b.xb,
                m = b.md || '';
              d = e.width;
              g = e.height;
              e = '';
              a.V && ((g = d = 0), (e = 'min-width:100%'));
              k = {};
              k.id = b.Ec;
              k.title = m;
              k.name = h;
              h = Hg(c.j);
              b = Pb(a.Z)
                ? 'https://secureframe.doubleclick.net/container.html?ecs=' + l
                : jt(h, a.N, a.ga, f, a.T);
              f = [];
              a.X &&
                ((l = mh(h.location.href)),
                (h = f.push),
                (l = [
                  0 < l.length ? 'google_debug' + (l ? '=' + l : '') + '&' : '',
                  'xpc=',
                  'sf-gdn-exp-' + a.m,
                  '&p=',
                  encodeURIComponent(_.I.document.location.protocol),
                  '//',
                  encodeURIComponent(_.I.document.location.host),
                ].join('')),
                h.call(f, l));
              f.length && (b += '#' + f.join('&'));
              b =
                ((k.src = b),
                (k.scrolling = 'no'),
                (k.marginWidth = '0'),
                (k.marginHeight = '0'),
                (k.width = String(d)),
                (k.height = String(g)),
                (k['data-is-safeframe'] = 'true'),
                k);
              null !== a.ea && (b.sandbox = a.ea);
              d = e;
              e = {};
              d =
                ((e.frameborder = 0),
                (e.allowTransparency = 'true'),
                (e.style = 'border:0;vertical-align:bottom;' + (void 0 === d ? '' : d)),
                (e.src = 'about:blank'),
                e);
              b && Wd(d, b);
              c = c.bd('IFRAME', d);
              a.A.appendChild(c);
              a.j = c;
            };
          _.q = qt.prototype;
          _.q.$b = function () {
            this.H && this.j
              ? this.H.observe(this.j)
              : (_.x(window, 'resize', this.J), _.x(window, 'scroll', this.J));
          };
          _.q.Wb = function (a) {
            try {
              if (0 != this.status) throw Error('Container already initialized');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (!_.ha(b) || !Ob(b.uid) || 'string' !== typeof b.version)
                throw Error('Cannot parse JSON message');
              var c = new bt(b.uid, b.version, b.sentinel);
              if (this.m != c.l || this.N != c.version) throw Error('Wrong source container');
              this.status = 1;
            } catch (d) {
              this.F.error('Invalid INITIALIZE_DONE message. Reason: ' + d.message);
            }
          };
          _.q.kc = function (a) {
            try {
              if (1 != this.status) throw Error('Container not initialized');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (
                !_.ha(b) ||
                !Ob(b.uid) ||
                'number' !== typeof b.initialWidth ||
                'number' !== typeof b.initialHeight
              )
                throw Error('Cannot parse JSON message');
              if (this.m != new ct(b.uid, b.initialWidth, b.initialHeight, b.sentinel).l)
                throw Error('Wrong source container');
              this.status = 2;
            } catch (c) {
              this.F.error('Invalid REGISTER_DONE message. Reason: ' + c.message);
            }
          };
          _.q.mc = function (a) {
            try {
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (!_.ha(b) || !Ob(b.uid) || 'string' !== typeof b.description)
                throw Error('Cannot parse JSON message');
              var c = new dt(b.uid, b.description, b.sentinel);
              if (this.m != c.l) throw Error('Wrong source container');
              this.F.info('Ext reported an error. Description: ' + c.B);
            } catch (d) {
              this.F.error('Invalid REPORT_ERROR message. Reason: ' + d.message);
            }
          };
          _.q.Ub = function (a) {
            try {
              if (2 != this.status) throw Error('Container is not registered');
              if (0 != this.I) throw Error('Container is not collapsed');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (
                !_.ha(b) ||
                !Ob(b.uid) ||
                'number' !== typeof b.expand_t ||
                'number' !== typeof b.expand_r ||
                'number' !== typeof b.expand_b ||
                'number' !== typeof b.expand_l ||
                'boolean' !== typeof b.push
              )
                throw Error('Cannot parse JSON message');
              var c = new et(
                b.uid,
                new _.hi(b.expand_t, b.expand_r, b.expand_b, b.expand_l),
                b.push,
                b.sentinel
              );
              if (this.m != c.l) throw Error('Wrong source container');
              if (!(0 <= c.B.top && 0 <= c.B.left && 0 <= c.B.bottom && 0 <= c.B.right))
                throw Error('Invalid expansion amounts');
              var d;
              if ((d = (c.push && this.W.Ib) || (!c.push && this.W.Hb))) {
                var e = c.B,
                  f = c.push,
                  g = (this.o = Rs(this.j));
                if (
                  e.top <= g.j.top &&
                  e.right <= g.j.right &&
                  e.bottom <= g.j.bottom &&
                  e.left <= g.j.left
                ) {
                  if (!f)
                    for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                      js(this.B, h, 'overflowX', 'visible', 'important'),
                        js(this.B, h, 'overflowY', 'visible', 'important');
                  var k = this.o.l,
                    l = this.o.l,
                    m = ki(new ji(0, 0, k.right - k.left, l.bottom - l.top));
                  _.ha(e)
                    ? ((m.top -= e.top),
                      (m.right += e.right),
                      (m.bottom += e.bottom),
                      (m.left -= e.left))
                    : ((m.top -= e),
                      (m.right += Number(void 0)),
                      (m.bottom += Number(void 0)),
                      (m.left -= Number(void 0)));
                  js(this.B, this.A, 'position', 'relative');
                  js(this.B, this.j, 'position', 'absolute');
                  f
                    ? (ks(this.B, this.A, 'width', m.right - m.left),
                      ks(this.B, this.A, 'height', m.bottom - m.top))
                    : js(this.B, this.j, 'zIndex', '10000');
                  ks(this.B, this.j, 'width', m.right - m.left);
                  ks(this.B, this.j, 'height', m.bottom - m.top);
                  ks(this.B, this.j, 'left', m.left);
                  ks(this.B, this.j, 'top', m.top);
                  this.I = 2;
                  this.o = Rs(this.j);
                  d = !0;
                } else d = !1;
              }
              a = d;
              gs(this.l, 'expand_response', new ht(this.m, a, this.o, c.B, c.push).j());
              if (!a) throw Error('Viewport or document body not large enough to expand into.');
            } catch (n) {
              this.F.error('Invalid EXPAND_REQUEST message. Reason: ' + n.message);
            }
          };
          _.q.Rb = function (a) {
            try {
              if (2 != this.status) throw Error('Container is not registered');
              if (2 != this.I) throw Error('Container is not expanded');
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (!_.ha(b) || !Ob(b.uid)) throw Error('Cannot parse JSON message');
              if (this.m != new ft(b.uid, b.sentinel).l) throw Error('Wrong source container');
              ls(this.B);
              this.I = 0;
              this.j && (this.o = Rs(this.j));
              gs(this.l, 'collapse_response', new gt(this.m, this.o).j());
            } catch (c) {
              this.F.error('Invalid COLLAPSE_REQUEST message. Reason: ' + c.message);
            }
          };
          var pt = function (a) {
            if (1 == a.status || 2 == a.status)
              switch (a.C) {
                case 0:
                  rt(a);
                  a.K = window.setTimeout((0, _.Fd)(a.$, a), 1000);
                  a.C = 1;
                  break;
                case 1:
                  a.C = 2;
                  break;
                case 2:
                  a.C = 2;
              }
          };
          qt.prototype.R = function (a) {
            try {
              if ('string' !== typeof a) throw Error('Could not parse serialized message');
              var b = JSON.parse(a);
              if (
                !_.ha(b) ||
                !Ob(b.uid) ||
                'number' !== typeof b.width ||
                'number' !== typeof b.height ||
                (b.sentinel && 'string' !== typeof b.sentinel)
              )
                throw Error('Cannot parse JSON message');
              var c = new it(b.uid, b.width, b.height, b.sentinel);
              if (this.m != c.l) throw Error('Wrong source container');
              var d = String(c.height);
              this.V
                ? d != this.j.height && ((this.j.height = d), pt(this))
                : this.F.error(
                    'Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.'
                  );
            } catch (e) {
              this.F.error('Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ' + e.message);
            }
          };
          qt.prototype.$ = function () {
            if (1 == this.status || 2 == this.status)
              switch (this.C) {
                case 1:
                  this.C = 0;
                  break;
                case 2:
                  rt(this),
                    (this.K = window.setTimeout((0, _.Fd)(this.$, this), 1000)),
                    (this.C = 1);
              }
          };
          var rt = function (a) {
              a.o = Rs(a.j, a.U);
              a.U = null;
              gs(a.l, 'geometry_update', new gt(a.m, a.o).j());
            },
            mt = function (a) {
              var b = null;
              a.Qc && (b = a.Qc);
              return null == b ? null : b.join(' ');
            },
            st = [
              'allow-modals',
              'allow-orientation-lock',
              'allow-presentation',
              'allow-pointer-lock',
            ],
            tt = ['allow-top-navigation'],
            ut = ['allow-same-origin'],
            vt = ph([].concat(_.Yb(st), _.Yb(tt)));
          ph([].concat(_.Yb(st), _.Yb(ut)));
          ph([].concat(_.Yb(st), _.Yb(tt), _.Yb(ut)));
          var Rb = function (a, b, c, d) {
            try {
              var e = new rq(b, c);
              e.sb = d;
              e.M = a;
              kb(new qq(e));
            } catch (f) {}
          };
          var wt = function (a) {
            Wf(this, a, null, null);
          };
          Id(wt, O);
          var xt = function () {};
          var yt = [0.05, 0.1, 0.2, 0.5],
            zt = [0, 0.5, 1],
            At = function (a) {
              a = Xg(a);
              if (!a) return -1;
              try {
                var b = wm(a.document);
                var c = new _.yg(b.clientWidth, b.clientHeight);
              } catch (d) {
                c = new _.yg(-12245933, -12245933);
              }
              return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height;
            },
            Bt = function (a, b) {
              return 0 > a
                ? []
                : _.Fb(yt, function (c) {
                    return Math.min((a / b) * c, 1);
                  });
            },
            Et = function (a) {
              this.j = a.M;
              this.l = a.nb;
              this.F = a.zb;
              this.o = null;
              this.m = a.ta;
              this.B = Ct(this);
              this.H = a.Id || !1;
              this.C = a.Le || !1;
              this.A = null;
              this.C && Dt(this);
            };
          Et.prototype.getSlotId = function () {
            return this.o;
          };
          var Gt = function (a, b) {
              if (a.B) {
                if (null != a.o) {
                  try {
                    Ft(a, Math.round(performance.now()), 0, 0, 0, !1);
                  } catch (c) {
                    a.m && a.m(c);
                  }
                  a.B && a.B.unobserve(a.l);
                  a.A = null;
                }
                a.o = b;
                a.B.observe(a.l);
                a.C &&
                  (a.l.getBoundingClientRect(), Ym(a.j.document) || Xg(a.j), (a.A = new xt()));
              }
            },
            Ct = function (a) {
              var b = a.l.offsetWidth * a.l.offsetHeight,
                c = At(a.j);
              b = [].concat(_.Yb(zt), _.Yb(Bt(c, b)));
              ja(b);
              return _.I.IntersectionObserver
                ? new _.I.IntersectionObserver(
                    function (d) {
                      return Ht(a, d);
                    },
                    { threshold: b }
                  )
                : new fc(
                    function (d) {
                      return Ht(a, d);
                    },
                    { threshold: b }
                  );
            },
            Ht = function (a, b) {
              try {
                var c = At(a.j);
                _.Kd(b, function (d) {
                  var e = Math.round(d.time),
                    f = d.boundingClientRect.width * d.boundingClientRect.height,
                    g = d.intersectionRect.width * d.intersectionRect.height;
                  d = d.isIntersecting;
                  a.H && Ft(a, e, f, g, c, d);
                });
              } catch (d) {
                a.m && a.m(d);
              }
            },
            Ft = function (a, b, c, d, e, f) {
              if (null == a.o) throw Error('Not Attached.');
              var g = new wt();
              c = D(g, 1, c);
              d = D(c, 2, d);
              e = D(d, 3, e);
              b = D(e, 4, b);
              b = D(b, 5, f);
              f = new If();
              e = C(b, 4);
              null != e && null != e && Of(f, 4, e);
              e = C(b, 2);
              null != e && null != e && Of(f, 2, e);
              e = C(b, 1);
              null != e && null != e && Of(f, 1, e);
              e = C(b, 3);
              null != e && null != e && Of(f, 3, e);
              e = C(b, 5);
              null != e && ((b = e), null != b && (af(f.j, 40), f.j.j.push(b ? 1 : 0)));
              f = Lf(f);
              f = Gf(f, 4);
              oj(a.F, '1', 10, f, void 0, a.o);
            },
            Dt = function (a) {
              var b = Xm(a.j.document);
              b && _.x(a.j.document, b, function () {});
            };
          var It = function (a, b) {
              this.l = a;
              this.j = b;
            },
            Jt = function (a) {
              var b = uh(a.l);
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
          var Kt = function (a) {
              return a.some(function (b) {
                return 6 === b.state;
              });
            },
            Lt = function (a, b) {
              var c = _.y(a, 'find').call(a, function (d) {
                return 6 === d.state;
              });
              if (!c) return null;
              a = a.map(function (d) {
                return d.issuerOrigin;
              });
              c = {
                type: /Chrome\/8[4-7]/.test(window.navigator.userAgent)
                  ? 'send-srr'
                  : 'send-redemption-record',
                issuer: c.issuerOrigin,
                issuers: a,
                refreshPolicy: 'none',
                signRequestData: 'include',
                includeTimestampHeader: !0,
                additionalSignedHeaders: ['sec-time', 'Sec-Signed-Redemption-Record'],
              };
              b &&
                0 < _.y(Object, 'keys').call(Object, b).length &&
                (c.additionalSigningData = Hf(JSON.stringify(b), 3));
              return c;
            },
            Mt = function (a) {
              var b = _.Zj(250),
                c = _.Zj(252);
              if (a.setTrustToken && Kt(b))
                try {
                  var d = Lt(b, c);
                  d && a.setTrustToken(d);
                } catch (e) {}
            };
          var Nt = function (a, b, c) {
              return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new fc(c, b);
            },
            Ot = function (a, b, c) {
              _.x(a, b, c);
              return function () {
                return _.ub(a, b, c);
              };
            },
            Pt = null,
            Qt = function () {
              Pt = _.fj();
            },
            Rt = function (a, b) {
              return b
                ? null === Pt
                  ? (_.x(a, 'mousemove', Qt, { passive: !0 }),
                    _.x(a, 'scroll', Qt, { passive: !0 }),
                    Qt(),
                    !1)
                  : _.fj() - Pt >= 1000 * b
                : !1;
            },
            St = function (a) {
              var b = a.M,
                c = a.element,
                d = a.Od,
                e = a.Ld,
                f = void 0 === a.Sc ? 0 : a.Sc,
                g = a.Qb,
                h = a.fd,
                k = void 0 === a.Ic ? !0 : a.Ic,
                l = null,
                m = !1,
                n = !1,
                p = [],
                t = (void 0 === a.Jb ? Nt : a.Jb)(
                  b,
                  void 0 === a.options ? {} : a.options,
                  function (A, z) {
                    try {
                      var F = function () {
                        p.length ||
                          (e &&
                            (p.push(
                              Ot(c, 'mouseenter', function () {
                                m = !0;
                                F();
                              })
                            ),
                            p.push(
                              Ot(c, 'mouseleave', function () {
                                m = !1;
                                F();
                              })
                            )),
                          p.push(
                            Ot(b.document, 'visibilitychange', function () {
                              return F();
                            })
                          ));
                        var B = Rt(b, f),
                          H = Ym(b.document);
                        if (n && !m && !B && !H)
                          l =
                            l ||
                            b.setTimeout(function () {
                              Rt(b, f) ? F() : (g(), z.disconnect());
                            }, 1000 * d);
                        else if (k || m || B || H) b.clearTimeout(l), (l = null);
                      };
                      n = A[A.length - 1].isIntersecting;
                      F();
                    } catch (B) {
                      h && h(B);
                    }
                  }
                );
              t.observe(c);
              return function () {
                t.disconnect();
                for (var A = _.E(p), z = A.next(); !z.done; z = A.next()) (z = z.value), z();
                null != l && b.clearTimeout(l);
              };
            };
          var Tt = function () {
              var a = C(Tn.D().j, 26);
              this.j = null;
              this.l = 0;
              this.B = a;
            },
            Ut = function (a) {
              if (!a.j) {
                var b = _.Zj(7);
                Oq = Tq();
                Wq = b;
                Vq = 0;
                if (!Ge() || 0 <= we(Le(), 11)) b = Yq();
                else {
                  b = Oi();
                  var c = b.__google_ad_urls;
                  b = c ? c : (b.__google_ad_urls = new Lq());
                }
                a.j = b;
                a.l = a.j.setupOse(a.B);
              }
              return a.j;
            };
          Tt.prototype.getOseId = function () {
            this.l || (this.l = Kq(0, _.Zj(7)));
            return this.l;
          };
          var Vt = 0,
            Wt = function () {
              this.j = [];
              this.A = NaN;
              this.m = 'json_html';
              this.K = 'fif';
              this.Ca = 1;
              this.F = [];
              this.za = this.Ea = this.Fa = NaN;
              this.B = 0;
              this.I = this.H = this.C = '';
              this.o = [];
              this.l = 0;
              this.J = new w.Map();
              this.N = this.V = null;
            },
            Xt = function (a, b) {
              var c = b.getSlotId();
              b = a.J.get(c);
              b ||
                ((b = window == window.top ? (++Vt).toString(36) : Ue()),
                a.J.set(c, b),
                _.R(c, function () {
                  a.J.delete(c);
                }));
              return b;
            };
          var Yt = function (a) {
            var b = this,
              c = Bc.D(),
              d = Tn.D().j,
              e = Wn(Tn.D(), a.j.getSlotId().getDomId());
            this.set = S(83, function (f, g) {
              a.set(f, g);
              return b;
            });
            this.get = S(84, function (f) {
              return a.get(f);
            });
            this.setClickUrl = S(79, function (f) {
              if ('string' !== typeof f) return c.L(Vk('Slot.setClickUrl', [f]), a.j), b;
              D(e, 7, f);
              return b;
            });
            this.setTargeting = S(81, function (f, g) {
              Kn(a.j, e, f, g, c);
              return b;
            });
            this.updateTargetingFromMap = S(85, function (f) {
              Ln(a.j, e, f, c);
              return b;
            });
            this.display = S(78, function () {
              D(e, 19, !0);
              var f = so(d, Vn());
              a.display(f);
            });
            this.setTagForChildDirectedTreatment = S(80, function (f) {
              if (0 === f || 1 === f) {
                var g = Qn(d) || new Nn();
                D(g, 5, f);
                gg(d, 25, g);
              }
              return b;
            });
            this.setForceSafeFrame = S(567, function (f) {
              if ('boolean' !== typeof f)
                return c.L(Vk('PassbackSlot.setForceSafeFrame', [String(f)]), a.j), b;
              D(e, 12, f);
              return b;
            });
            this.setTagForUnderAgeOfConsent = S(448, function (f) {
              if (0 === f || 1 === f) {
                var g = Qn(d) || new Nn();
                D(g, 6, f);
                gg(d, 25, g);
              }
              return b;
            });
          };
          _.M(Yt, Sj);
          var Zt = function (a, b) {
              return a
                .map(function (c) {
                  return Tj(c, b);
                })
                .filter(function (c) {
                  return !!c;
                });
            },
            $t = function (a) {
              var b = Cp.D(),
                c = [];
              a = _.E(a);
              for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.B = d;
                var e = Gj(9);
                1 === e.length && (c.push(d), c.push(d + '-' + e[0]));
              }
              return c;
            },
            au = _.Pd(function () {
              return Hh(
                'google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.'
              );
            }),
            bu = function () {
              Object.defineProperty(window, 'google_DisableInitialLoad', {
                get: function () {
                  au();
                  return !0;
                },
                set: function () {
                  au();
                },
                configurable: !0,
              });
            },
            hu = function (a, b) {
              vp.call(this, a);
              var c = this,
                d = Bc.D(),
                e = Tn.D().j,
                f = Vn(),
                g = !1;
              this.setTargeting = S(1, function (h, k) {
                var l = null;
                'string' === typeof k
                  ? (l = [k])
                  : Array.isArray(k)
                  ? (l = k)
                  : Ad(k) && (l = _.y(Array, 'from').call(Array, k));
                var m = 'string' === typeof h && !me(h);
                l = _.u(180) ? l : l && pa(l);
                var n =
                  !!l &&
                  l.every(function (p) {
                    return 'string' === typeof p;
                  });
                if (!m || !n) return d.L(Vk('PubAdsService.setTargeting', [h, k])), c;
                k = ((L = G(e, un, 2)), _.y(L, 'find')).call(L, function (p) {
                  return vn(p) === h;
                });
                if ('gpt-beta' === h) {
                  if (a.j) return d.L(Ol(l.join())), c;
                  if (k) return d.L(Pl(l.join())), c;
                  l = $t(l);
                }
                k ? xn(k, l) : ((k = xn(wn(new un(), h), l)), ig(e, 2, k, un));
                d.info(Hl(h, l.join(), a.aa()));
                return c;
              });
              this.clearTargeting = S(2, function (h) {
                if (void 0 === h) return hg(e, 2, []), d.info(Ml(a.aa())), c;
                if ('gpt-beta' === h) return d.L(Ql(h)), c;
                var k = G(e, un, 2),
                  l = _.y(k, 'findIndex').call(k, function (m) {
                    return vn(m) === h;
                  });
                if (0 > l) return d.L(El(h, a.aa())), c;
                k.splice(l, 1);
                hg(e, 2, k);
                d.info(Dl(h, a.aa()));
                return c;
              });
              this.getTargeting = S(38, function (h) {
                if ('string' !== typeof h) return d.L(Vk('PubAdsService.getTargeting', [h])), [];
                var k = ((L = G(e, un, 2)), _.y(L, 'find')).call(L, function (l) {
                  return vn(l) === h;
                });
                return k ? C(k, 2).slice() : [];
              });
              this.getTargetingKeys = S(39, function () {
                return G(e, un, 2).map(function (h) {
                  return vn(h);
                });
              });
              this.setCategoryExclusion = S(3, function (h) {
                if ('string' !== typeof h || me(h))
                  return d.L(Vk('PubAdsService.setCategoryExclusion', [h])), c;
                ((L = C(e, 3)), _.y(L, 'includes')).call(L, h) || eg(e, 3, h);
                d.info(Fl(h));
                return c;
              });
              this.clearCategoryExclusions = S(4, function () {
                D(e, 3, []);
                d.info(Gl());
                return c;
              });
              this.disableInitialLoad = S(5, function () {
                D(e, 4, !0);
                g || ((g = !0), bu());
              });
              this.enableSingleRequest = S(6, function () {
                if (a.j && !r(e, 6)) return d.L(sl('PubAdsService.enableSingleRequest')), !1;
                d.info(tl('single request'));
                D(e, 6, !0);
                return !0;
              });
              this.enableAsyncRendering = S(7, function () {
                return !0;
              });
              this.enableSyncRendering = S(8, function () {
                Hh(
                  'GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.'
                );
                return !1;
              });
              this.enableLazyLoad = S(485, function (h) {
                var k = new Mn();
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
                gg(e, 5, k);
              });
              this.setCentering = S(9, function (h) {
                h = !!h;
                d.info(ul('centering', String(h)));
                D(e, 15, h);
              });
              this.definePassback = S(10, function (h, k) {
                return (h = cu(a, h, k).slot) && Oc(h);
              });
              this.refresh = S(11, function (h, k) {
                k = void 0 === k ? {} : k;
                (h && !Array.isArray(h)) ||
                !_.ha(k) ||
                (k.changeCorrelator && 'boolean' !== typeof k.changeCorrelator)
                  ? d.L(
                      Vk(
                        'PubAdsService.refresh',
                        [h, k].filter(function (l) {
                          return void 0 !== l;
                        })
                      )
                    )
                  : ((k && 0 == k.changeCorrelator) || D(e, 26, Oh()),
                    (h = h ? Zt(h, b) : a.l),
                    du(a, so(e, f), h));
              });
              this.enableVideoAds = S(12, function () {
                D(e, 21, !0);
                eu(a, e);
              });
              this.setVideoContent = S(13, function (h, k) {
                D(e, 21, !0);
                D(e, 22, String(h || ''));
                D(e, 23, String(k || ''));
                eu(a, e);
              });
              this.collapseEmptyDivs = S(14, function (h) {
                h = void 0 === h ? !1 : h;
                r(e, 11) && !_.u(498)
                  ? d.L(Bl())
                  : a.j && !_.u(498)
                  ? d.L(sl('collapseEmptyDivs', String(h)))
                  : (D(e, 11, !0),
                    D(e, 10, !!h),
                    qc('gpt_ced', function (k) {
                      K(k, 'sc', h ? 't' : 'f');
                      K(k, 'level', 'page');
                      Dc(k);
                    }),
                    d.info(Al(String(!!h))));
                return !!r(e, 11);
              });
              this.clear = S(15, function (h) {
                return Array.isArray(h) ? ((h = Zt(h, b)), a.clear(e, f, h)) : a.clear(e, f, h);
              });
              this.setLocation = S(16, function (h) {
                if ('string' !== typeof h) return d.L(Vk('PubAdsService.setLocation', [h])), c;
                D(e, 8, h);
                return c;
              });
              this.setCookieOptions = S(17, function (h) {
                if (0 !== h && 1 !== h)
                  return d.L($l('PubadsService.setTagForUnderAgeOfConsent', String(h), '0,1')), c;
                D(e, 24, h);
                return c;
              });
              this.setTagForChildDirectedTreatment = S(18, function (h) {
                if (1 !== h && 0 !== h)
                  return (
                    d.L($l('PubadsService.setTagForChildDirectedTreatment', String(h), '0,1')), c
                  );
                var k = Qn(e) || new Nn();
                D(k, 5, h);
                gg(e, 25, k);
                return c;
              });
              this.clearTagForChildDirectedTreatment = S(19, function () {
                var h = Qn(e);
                if (!h) return c;
                D(h, 5, void 0);
                gg(e, 25, h);
                return c;
              });
              this.setPublisherProvidedId = S(20, function (h) {
                h = String(h);
                a.j
                  ? d.L(sl('PubAdsService.setPublisherProvidedId', h))
                  : (d.info(ul('PPID', h)), D(e, 16, h));
                return c;
              });
              this.set = S(21, function (h, k) {
                if (
                  'string' !== typeof h ||
                  !h.length ||
                  void 0 === sn()[h] ||
                  'string' !== typeof k
                )
                  return d.L(Vk('PubAdsService.set', [h, k])), c;
                var l = ((L = G(e, un, 14)), _.y(L, 'find')).call(L, function (m) {
                  return vn(m) === h;
                });
                l ? xn(l, [k]) : ((l = wn(new un(), h)), eg(l, 2, k), ig(e, 14, l, un));
                d.info(ml(h, String(k), a.aa()));
                return c;
              });
              this.get = S(22, function (h) {
                if ('string' !== typeof h) return d.L(Vk('PubAdsService.get', [h])), null;
                var k = ((L = G(e, un, 14)), _.y(L, 'find')).call(L, function (l) {
                  return vn(l) === h;
                });
                return (k = k && C(k, 2)) ? k[0] : null;
              });
              this.getAttributeKeys = S(23, function () {
                return G(e, un, 14).map(function (h) {
                  return vn(h);
                });
              });
              this.display = S(24, function (h, k, l, m) {
                return void a.display(h, k, void 0 === l ? '' : l, void 0 === m ? '' : m);
              });
              this.updateCorrelator = S(25, function () {
                Hh(Oj('update'));
                d.L(Ul());
                D(e, 26, Oh());
                return c;
              });
              this.defineOutOfPagePassback = S(35, function (h) {
                var k = cu(a, h, [1, 1]);
                h = k.slot;
                (k = k.Ka) && D(k, 15, 1);
                return h && Oc(h);
              });
              this.setForceSafeFrame = S(36, function (h) {
                if ('boolean' !== typeof h)
                  return d.L(Vk('PubAdsService.setForceSafeFrame', [String(h)])), c;
                D(e, 13, h);
                return c;
              });
              this.setSafeFrameConfig = S(37, function (h) {
                var k = Ho(h);
                if (!k) return d.L(Vk('PubAdsService.setSafeFrameConfig', [h])), c;
                gg(e, 18, k);
                return c;
              });
              this.setRequestNonPersonalizedAds = S(445, function (h) {
                if (0 !== h && 1 !== h)
                  return (
                    d.L($l('PubAdsService.setRequestNonPersonalizedAds', String(h), '0,1')), c
                  );
                var k = Qn(e) || new Nn();
                D(k, 8, !!h);
                gg(e, 25, k);
                return c;
              });
              this.setTagForUnderAgeOfConsent = S(447, function (h) {
                h = void 0 === h ? 2 : h;
                if (2 !== h && 0 !== h && 1 !== h)
                  return (
                    d.L($l('PubadsService.setTagForUnderAgeOfConsent', String(h), '2,0,1')), c
                  );
                var k = Qn(e) || new Nn();
                D(k, 6, h);
                gg(e, 25, k);
                return c;
              });
              this.getCorrelator = S(27, function () {
                return String(C(e, 26));
              });
              this.getTagSessionCorrelator = S(631, function () {
                return fu().U;
              });
              this.getVideoContent = S(30, function () {
                return gu(a, e);
              });
              this.getVersion = S(568, function () {
                if (a.j || _.u(502)) return Qb();
              });
              this.forceExperiment = S(569, function (h) {
                h = parseInt(h, 10);
                0 < h && Fj(h);
              });
              this.setCorrelator = S(28, function (h) {
                Hh(Oj('set'));
                d.L(Tl());
                if (Am(window)) return c;
                if (!Ph(h)) return d.L(Vk('PubadsService.setCorrelator', [String(h)])), c;
                D(e, 26, h);
                D(e, 27, !0);
                return c;
              });
              this.markAsAmp = S(570, function () {
                window.console &&
                  window.console.warn &&
                  window.console.warn('googletag.pubads().markAsAmp() is deprecated and ignored.');
              });
              this.isSRA = S(571, function () {
                return !!r(e, 6);
              });
              this.setImaContent = S(328, function (h, k) {
                Xf(e, 22)
                  ? (D(e, 21, !0), D(e, 22, String(h || '')), D(e, 23, String(k || '')), eu(a, e))
                  : (D(e, 21, !0),
                    eu(a, e),
                    'string' === typeof h && D(e, 19, h),
                    'string' === typeof k && D(e, 20, k));
              });
              this.getImaContent = S(329, function () {
                return Xf(e, 22)
                  ? gu(a, e)
                  : a.j
                  ? { vid: C(e, 19) || '', cmsid: C(e, 20) || '' }
                  : null;
              });
              this.isInitialLoadDisabled = S(572, function () {
                return !!r(e, 4);
              });
              this.addSupportingUrl = S(634, function (h) {
                if ('string' !== typeof h || !_.Qg(h)[1])
                  return d.L(Vk('PubAdsService.addSupportingUrl', [h])), c;
                ((L = C(e, 7)), _.y(L, 'includes')).call(L, h) || eg(e, 7, h);
                return c;
              });
              this.setPrivacySettings = S(648, function (h) {
                if (!_.ha(h)) return d.L(Vk('PubAdsService.setPrivacySettings', [h])), c;
                var k = Qn(e) || new Nn(),
                  l = h.restrictDataProcessing,
                  m = h.childDirectedTreatment,
                  n = h.underAgeOfConsent,
                  p = h.limitedAds;
                'boolean' === typeof l
                  ? D(k, 1, l)
                  : void 0 !== l &&
                    d.L(
                      Zl(
                        'PubAdsService.setPrivacySettings',
                        Bo(h),
                        'restrictDataProcessing',
                        String(l)
                      )
                    );
                _.u(397) ||
                  ('boolean' === typeof p
                    ? D(k, 9, p)
                    : void 0 !== p &&
                      d.L(Zl('PubAdsService.setPrivacySettings', Bo(h), 'limitedAds', String(p))));
                void 0 !== n &&
                  (null === n
                    ? D(k, 6, 2)
                    : !1 === n
                    ? D(k, 6, 0)
                    : !0 === n
                    ? D(k, 6, 1)
                    : d.L(
                        Zl(
                          'PubAdsService.setPrivacySettings',
                          Bo(h),
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
                    : d.L(
                        Zl(
                          'PubAdsService.setPrivacySettings',
                          Bo(h),
                          'childDirectedTreatment',
                          String(m)
                        )
                      ));
                gg(e, 25, k);
                return c;
              });
            };
          _.M(hu, vp);
          var iu = function (a, b, c) {
              for (var d = 100; a && a != b && --d; ) _.Bh(a, c), (a = a.parentElement);
            },
            ju = function (a, b, c, d, e) {
              _.Bh(a, { 'margin-left': '0px', 'margin-right': '0px' });
              var f = { 'z-index': String(_.v(32, 5)) };
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
                _.Bh(a, f),
                (d = d()),
                0 !== d && b !== d && (c((b / (d - b)) * b), _.Bh(a, f)));
              return !0;
            },
            lu = function (a, b, c, d, e, f, g) {
              var h = b.slot,
                k = rc(b.da);
              _.I.setTimeout(
                J(459, function () {
                  return ku(a, h, c, d, e, k, f, g);
                }),
                500
              );
            },
            ku = function (a, b, c, d, e, f, g, h) {
              if (_.I.IntersectionObserver) {
                var k = null,
                  l = Ao(b, a) || Oa(b, a),
                  m = J(459, function (n) {
                    if ((n = n && n[0])) {
                      var p = n.boundingClientRect,
                        t = window.innerWidth,
                        A = Math.round(p.left),
                        z = Math.round(p.right),
                        F = 0 > A + 2,
                        B = 0 < z - (t + 2);
                      if (
                        n.intersectionRatio >=
                          1 -
                            ((0 <= Math.round(p.left) ? 0 : 2) +
                              (Math.round(p.right) <= window.innerWidth ? 0 : 2)) /
                              d ||
                        F ||
                        B
                      )
                        qc(
                          g,
                          function (H) {
                            if (F || B) {
                              var P = new ir();
                              P.set(8);
                              mu(l) && P.set(10);
                              P = jr(P);
                            } else P = nu(a, b);
                            var Ba = ou(b, l, e),
                              rb = Ba.pd;
                            Ba = Ba.rd;
                            Dc(H);
                            K(H, 'qid', h);
                            K(H, 'iu', b.getSlotId().getAdUnitPath());
                            K(H, 'e', String(P));
                            F && K(H, 'ofl', String(A));
                            B && K(H, 'ofr', String(z - t));
                            K(H, 'ret', d + 'x' + e);
                            K(H, 'req', f);
                            K(H, 'bm', String(c));
                            K(H, 'efh', Number(rb));
                            K(H, 'stk', Number(Ba));
                            K(H, 'ifi', Ri(window));
                            _.u(60) && K(H, 'isc', 1);
                          },
                          { ya: _.v(7) }
                        ),
                          k && k.unobserve(l);
                    }
                  });
                l && ((k = new _.I.IntersectionObserver(m, { threshold: [1] })), k.observe(l));
              }
            },
            nu = function (a, b) {
              var c = Ao(b, a) || Oa(b, a),
                d = new ir();
              try {
                var e = function (P, Ba) {
                    return a.elementsFromPoint(P, Ba);
                  },
                  f = c.getBoundingClientRect(),
                  g = f.left,
                  h = f.top,
                  k = f.width,
                  l = f.height,
                  m = Oa(b, a),
                  n = Ua(m, window);
                if ('hidden' == n.visibility || 'none' == n.display) return jr(d);
                var p = parseInt(n['border-top-width'] || 0, 10) + 1;
                b = g + k;
                l = h + l;
                var t = e(g + p + 2, h + p);
                var A = e(b - p - 2, h + p);
                var z = e(b - p - 2, l - p);
                var F = e(g + p + 2, l - p);
                var B = e(b / 2, l - p);
              } catch (P) {
                return d.set(1), jr(d);
              }
              if (
                !(
                  t &&
                  t.length &&
                  A &&
                  A.length &&
                  z &&
                  z.length &&
                  F &&
                  F.length &&
                  B &&
                  B.length
                )
              )
                return d.set(7), jr(d);
              e = function (P, Ba) {
                for (var rb = !1, ib = 0; ib < P.length; ib++) {
                  var ie = P[ib];
                  if (rb) {
                    var Lh = Ua(ie, window);
                    if ('hidden' != Lh.visibility && !Eh(ie) && !H(c, ie)) {
                      d.set(Ba);
                      'absolute' == Lh.position && d.set(11);
                      break;
                    }
                  } else c == ie && (rb = !0);
                }
              };
              Fh(c) && d.set(9);
              var H = function (P, Ba) {
                return wh(P, Ba) || wh(Ba, P);
              };
              g = t[0];
              c == g || H(c, g) || Eh(g) || d.set(2);
              g = A[0];
              c == g || H(c, g) || Eh(g) || d.set(3);
              g = z[0];
              c == g || H(c, g) || Eh(g) || d.set(4);
              g = F[0];
              c == g || H(c, g) || Eh(g) || d.set(5);
              if (Eh(c)) return jr(d);
              e(t, 12);
              e(A, 13);
              e(z, 14);
              e(F, 15);
              e(B, 6);
              return jr(d);
            },
            mu = function (a) {
              var b = !1,
                c = !1,
                d = !1;
              return Dh(a, function (e) {
                'nowrap' == e.whiteSpace && (d = !0);
                if ('scroll' == e.overflowX || 'auto' == e.overflowX) c = !0;
                'flex' == e.display && (b = !0);
                return b && c && d;
              });
            },
            pu = function (a, b) {
              return a && (a = fg(a, yn, 1)) ? C(a, 1) || b.innerWidth : 0;
            },
            qu = function (a, b) {
              return a && (a = fg(a, yn, 1)) ? C(a, 2) || b.innerHeight : 0;
            },
            ru = function (a) {
              return a && (a = fg(a, yn, 2)) ? C(a, 1) || 0 : 0;
            },
            su = function (a) {
              return a && (a = fg(a, yn, 2)) ? C(a, 2) || 0 : 0;
            },
            ou = function (a, b, c) {
              var d = (a = Oa(a)) && Ua(a, window),
                e = d ? 'absolute' != d.position : !0,
                f = !1,
                g = a && a.parentElement,
                h = !1;
              Ch(
                b,
                function (k) {
                  var l = k.style;
                  if (e)
                    if (h || (h = k == g)) e = er(k, _.I, !0, -1, -1);
                    else {
                      l = l && l.height;
                      var m =
                        ((l && _.y(l, 'endsWith').call(l, 'px') && parseInt(l, 10)) || 0) >= c;
                      !l ||
                        m ||
                        ('string' === typeof l && _.y(br, 'includes').call(br, l)) ||
                        (e = !1);
                    }
                  f ||
                    ((k = Ua(k, _.I)), 'sticky' != k.position && 'fixed' != k.position) ||
                    (f = !0);
                  return !(f && !e);
                },
                100
              );
              return { pd: e, rd: f };
            },
            tu = function (a, b) {
              var c = a.slot;
              ((L = Va(a.da)), _.y(L, 'includes')).call(L, 'fluid') &&
                setTimeout(function () {
                  qc('gpt_fluid_sz', function (d) {
                    var e = Ao(c, document);
                    e = e ? Ni(e) : null;
                    K(d, 'sz', e ? e.width + 'x' + e.height : 'null');
                    K(d, 'qqid', b);
                  });
                }, 250);
            };
          var uu = 0;
          var Wb = new w.WeakMap(),
            Ub = function (a, b) {
              a = [a];
              for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
              return a.join('\x0B');
            };
          var vu = Zb(
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
          var wu = null,
            xu = function (a, b, c, d) {
              try {
                var e;
                if (!(e = !b)) {
                  var f;
                  if (!(f = !fr(b, c, void 0 === d ? 100 : d))) {
                    a: {
                      do {
                        var g = Ua(b, c);
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
            ac = function (a) {
              for (var b = {}, c = _.E(G(a, un, 9)), d = c.next(); !d.done; d = c.next())
                (d = d.value), (b[vn(d)] = C(d, 2));
              a = C(a, 8);
              a.length && null == b.excl_cat && (b.excl_cat = a);
              return b;
            },
            yu = function (a) {
              var b = !1,
                c = G(a, un, 2).map(function (d) {
                  var e = vn(d);
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
            zu = function (a) {
              var b = '';
              Vg(
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
            Au = function (a) {
              if (a.location && a.location.ancestorOrigins)
                return a.location.ancestorOrigins.length;
              var b = 0;
              Vg(
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
            Bu = function (a, b, c, d, e, f, g, h) {
              g = void 0 === g ? !1 : g;
              this.l = b;
              this.C = c;
              this.m = a;
              this.model = d;
              this.B = e;
              this.j = f;
              this.F = [];
              this.o = '';
              this.K = sn();
              this.A = [];
              this.H = [];
              this.I = Xd(_.Lj(489));
              this.V = !g || !_.u(294);
              this.J = h;
            },
            Eu = function (a) {
              var b = void 0 === b ? window : b;
              if (_.u(475)) {
                var c = a.J;
                if (!c || !c.length) return '';
              } else {
                c = a.model.j;
                if (a.m)
                  0 == c.length &&
                    (c = $p(aq.D()).filter(function (e) {
                      return lp(a.l, e.getSlotId());
                    }));
                else {
                  if (0 == c.length) return '';
                  1 < c.length && (c = [c[0]]);
                }
                var d = !!gn(_.I);
                c = c.filter(function (e) {
                  var f = a.j.P[e.getSlotId().getDomId()];
                  return d && 4 == Jn(f)
                    ? (Bc.D().L(Sl(String(e.getSlotId().getAdUnitPath()))), !1)
                    : !0;
                });
                if (!c.length) return '';
                30 < c.length &&
                  (Bc.D().L(Nl('30', String(c.length), String(c.length - 30))),
                  (c = c.slice(0, 30)));
              }
              Cu(a, c, b);
              Du(a);
              return a.o;
            },
            Fu = function (a, b) {
              try {
                var c = b.top;
                var d = xm(c.document, c);
              } catch (e) {
                d = new _.Wa(-12245933, -12245933);
              }
              Y(a, 'scr_x', Math.round(d.x), { ma: !0 });
              Y(a, 'scr_y', Math.round(d.y), { ma: !0 });
            },
            Gu = function (a) {
              const $___old_93f89a74b9e63d0f = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'platform'
                ),
                $___old_dd50cd79c285c50a = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
              try {
                if ($___old_93f89a74b9e63d0f)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___stub_a0ca823ae553bc43.platform
                  ));
                if ($___old_dd50cd79c285c50a)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_a0ca823ae553bc43.userAgent
                  ));
                return function () {
                  var b = window,
                    c = Ka(a.B, b.document) || '';
                  var d = b.document.domain;
                  var e = b.history.length,
                    f = b.screen,
                    g = b.document.referrer;
                  if (mi()) d = Oi().gaGlobal || {};
                  else {
                    var h = Math.round(new Date().getTime() / 1000),
                      k = b.google_analytics_domain_name;
                    d = 'undefined' == typeof k ? Bq('auto', d) : Bq(k, d);
                    var l = -1 < c.indexOf('__utma=' + d + '.'),
                      m = -1 < c.indexOf('__utmb=' + d),
                      n;
                    (n = (ni() || Oi()).gaGlobal) || ((n = {}), ((ni() || Oi()).gaGlobal = n));
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
                        l = zq.appName;
                        var t = zq.version,
                          A = zq.language ? zq.language : zq.browserLanguage,
                          z = zq.platform,
                          F = zq.userAgent;
                        try {
                          var B = zq.javaEnabled();
                        } catch (P) {
                          B = !1;
                        }
                        B = [l, t, A, z, F, B ? 1 : 0].join('');
                        f
                          ? (B += f.width + 'x' + f.height + f.colorDepth)
                          : _.I.java &&
                            _.I.java.awt &&
                            ((f = _.I.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
                            (B += f.screen.width + 'x' + f.screen.height));
                        B = B + c + (g || '');
                        for (g = B.length; 0 < e; ) B += e-- ^ g++;
                        n.vid = (m ^ (Aq(B) & 2147483647)) + '.' + h;
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
                        if ((f = Cq.exec(c[g]) || Dq.exec(c[g]) || Eq.exec(c[g]))) {
                          B = f[1] || 0;
                          if (B == h) {
                            var H = f[2];
                            break b;
                          }
                          B < k && ((k = B), (H = f[2]));
                        }
                      p && H && -1 != H.search(/^\d+\.\d+$/)
                        ? ((n.vid = H), (n.from_cookie = !0))
                        : H != n.vid && (n.cid = H);
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
                if ($___old_93f89a74b9e63d0f)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___old_93f89a74b9e63d0f
                  ));
                if ($___old_dd50cd79c285c50a)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_dd50cd79c285c50a
                  ));
              }
            },
            Hu = function (a, b) {
              if (_.u(370))
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
            Cu = function (a, b, c) {
              c = void 0 === c ? window : c;
              var d = c.document,
                e = a.j.O;
              Y(a, 'gdfp_req', 1, { ca: !1 });
              Y(a, 'pvsid', a.model.A);
              Y(a, 'correlator', C(e, 26));
              Y(a, 'output', a.model.m, { ca: !1 });
              'wbn' === a.model.m && (Y(a, 'wbsu', a.model.N), Y(a, 'callback', null));
              Y(a, 'impl', a.model.K, { ca: !1 });
              _.u(200) ||
                (0 == $f(e, 24, 0) && (Y(a, 'adsid', a.model.C), Y(a, 'pucrd', a.model.I)),
                Y(a, 'jar', a.model.H));
              Iu(a);
              isNaN(a.model.Ea) || Y(a, 'pod', a.model.Ea, { ca: !1 });
              isNaN(a.model.Fa) || Y(a, 'ppos', a.model.Fa, { ca: !1 });
              isNaN(a.model.za) || Y(a, 'scor', a.model.za, { ca: !1 });
              Ju(a);
              Ku(a);
              _.u(457) && Y(a, 'ptt', 17);
              Lu(a);
              Mu(a);
              Nu(a, Vj(b[0].getSlotId().getAdUnitPath()));
              Y(a, 'sc', _.Zj(6) ? 1 : 0, { ma: !0 });
              window.postMessage && Y(a, 'sfv', Fo());
              Y(a, 'ecs', a.j.xb);
              Ou(a, b, d);
              Pu(a);
              Qu(a, b);
              Ru(a, b);
              Su(a, c);
              lk('google_preview') && Y(a, 'gct', kk('google_preview'));
              (Tg(c.top) || rh(window.IntersectionObserver)) && Y(a, 'abxe', 1);
              if (_.Zj(253)) {
                var f = Kj(10);
                f && Y(a, 'expflags', f);
              }
              Tu(a, b, c);
              f = {};
              f.u_tz = -new Date().getTimezoneOffset();
              f.u_his = Qi();
              f.u_java =
                !!ng.navigator &&
                'unknown' !== typeof ng.navigator.javaEnabled &&
                !!ng.navigator.javaEnabled &&
                ng.navigator.javaEnabled();
              ng.screen &&
                ((f.u_h = ng.screen.height),
                (f.u_w = ng.screen.width),
                (f.u_ah = ng.screen.availHeight),
                (f.u_aw = ng.screen.availWidth),
                (f.u_cd = ng.screen.colorDepth));
              ng.navigator && ng.navigator.plugins && (f.u_nplug = ng.navigator.plugins.length);
              ng.navigator &&
                ng.navigator.mimeTypes &&
                (f.u_nmime = ng.navigator.mimeTypes.length);
              Uu(a, f);
              Vu(a);
              try {
                var g = Ui();
              } catch (h) {
                g = '0';
              }
              Y(a, 'flash', g, { ca: !1, ma: !0 });
              Wu(a, b, c);
              Xu(a, c);
              (_.u(84) || fk.D().j) && Y(a, 'rumc', a.model.A, { ca: !1 });
              _.u(83) && Y(a, 'rume', 1, { ca: !1 });
              Y(a, 'vis', _.Vm(d), { ca: !1 });
              0 === vu(_.Zj(172)) || Y(a, 'stss', vu(_.Zj(172)));
              Yu(c) && Y(a, 'arp', 1, { ca: !1 });
              _.I.navigator &&
                _.I.navigator.deviceMemory &&
                Y(a, 'dmc', _.I.navigator.deviceMemory);
              Fu(a, c);
              Zu(a, b, c);
              $u(a, b, c);
              0 < a.model.o.length && Y(a, 'psts', a.model.o);
              Gu(a);
              Hu(a, c);
              _.u(23) && (Y(a, 'js', gr(c)), Y(a, 'ms', hr(a.model.A.toString(), c)));
              av(a, c, b);
              bv(a, b, c);
              b = C(e, 7);
              (c = _.Zj(251)) && Y(a, 'uach', Hf(c, 3));
              (_.u(312) || Kj(1923)) &&
                (c = _.Zj(250)) &&
                0 < c.length &&
                Y(a, 'tt_state', Hf(JSON.stringify(c), 3));
              _.u(164) &&
                b.length &&
                Y(
                  a,
                  'supporting_urls',
                  b.map(function (h) {
                    return encodeURIComponent(h);
                  })
                );
              cv(a);
            },
            Zu = function (a, b, c) {
              var d = [],
                e = [];
              b = _.E(b);
              for (var f = b.next(); !f.done; f = b.next()) {
                f = f.value;
                var g = Oa(f);
                g = Gh((g && g.parentElement && Ua(g.parentElement, c)) || null);
                if (!g || (1 == g[0] && 1 == g[3])) {
                  var h = (g = Oa(f)) && g.parentElement,
                    k = po(h) || new _.yg(0, 0);
                  xu(k, h, c);
                  d.push(k.width + 'x' + k.height);
                  f = po(Oa(f)) || new _.yg(0, 0);
                  xu(f, g, c, 1);
                  -1 == k.height && (f.height = -1);
                  e.push(f.width + 'x' + f.height);
                } else d.push('-1x-1'), e.push('-1x-1');
              }
              Y(a, 'psz', d, { wa: '|' });
              Y(a, 'msz', e, { wa: '|' });
            },
            $u = function (a, b, c) {
              var d = a.j.P;
              b = b.map(function (e) {
                return d[e.getSlotId().getDomId()];
              });
              b.some(function (e) {
                return Xf(e, 16);
              }) &&
                (Y(
                  a,
                  'rtgs',
                  b.map(function (e) {
                    return Xf(e, 16) ? (0 != Va(e).length ? '1' : '2') : '0';
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'max_w',
                  b.map(function (e) {
                    return pu(fg(e, Cn, 16), c);
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'max_h',
                  b.map(function (e) {
                    return qu(fg(e, Cn, 16), c);
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'min_w',
                  b.map(function (e) {
                    return ru(fg(e, Cn, 16));
                  }),
                  { wa: '!' }
                ),
                Y(
                  a,
                  'min_h',
                  b.map(function (e) {
                    return su(fg(e, Cn, 16));
                  }),
                  { wa: '!' }
                ));
            },
            dv = function (a, b, c) {
              var d = [];
              if (null !== a && a != a.top) {
                var e = ym(!1, a).width;
                (-12245933 === b || -12245933 === e || e < b) && d.push(8);
              }
              -12245933 != b &&
                ((e = 1 + _.v(45)),
                b * e < a.document.documentElement.scrollWidth
                  ? d.push(10)
                  : c && _.u(413) && ((c = 1 + _.v(414)), a.outerWidth * c < b && d.push(10)));
              return d;
            },
            av = function (a, b, c) {
              var d = 0 !== vh(),
                e = ym(!0, b, d).width,
                f = [],
                g = [],
                h = dv(b, e, d);
              c.forEach(function (k) {
                var l = new ir(),
                  m = Oa(k);
                k = 0;
                if (m)
                  for (var n = 0; m && 100 > n; n++, m = m.parentElement) {
                    var p = Ua(m, b);
                    if (p) {
                      if (p.overflowY && 'visible' !== p.overflowY) {
                        l.set(2);
                        var t = po(m);
                        t && (k = k ? Math.min(k, t.width) : t.width);
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
                f.push(jr(l));
                g.push(k);
              });
              Y(a, 'fws', f);
              Y(a, 'ohw', g);
            },
            fv = function (a, b, c) {
              var d = [],
                e = [],
                f = a.j,
                g = f.P,
                h = !!r(f.O, 15);
              if (a.m)
                b.forEach(function (k) {
                  k = vo({ slot: k, da: g[k.getSlotId().getDomId()] }, c, h) || ev;
                  d.push(Math.round(k.x));
                  e.push(Math.round(k.y));
                });
              else if ((b = vo({ slot: b[0], da: g[b[0].getSlotId().getDomId()] }, c, h)))
                d.push(Math.round(b.x)), e.push(Math.round(b.y));
              Y(a, 'adxs', d);
              Y(a, 'adys', e);
            },
            bv = function (a, b, c) {
              if (!a.m) {
                var d = null,
                  e = null;
                try {
                  d = xm(c.top.document, c.top).y;
                } catch (h) {
                  return;
                }
                var f = a.j,
                  g = f.P;
                f = !!r(f.O, 15);
                (b = vo({ slot: b[0], da: g[b[0].getSlotId().getDomId()] }, c.document, f)) &&
                  (e = Math.round(b.y));
                c = ym(!0, c).height;
                e &&
                  -12245933 !== e &&
                  -12245933 !== c &&
                  (e < d + c
                    ? Y(a, 'btvi', 0, { ma: !0 })
                    : ((d = _.Zj(248) + 1), ak(248, d), Y(a, 'btvi', d)));
              }
            },
            gv = function (a, b) {
              var c = a.j,
                d = c.O,
                e = c.P;
              return _.u(493)
                ? b
                    .map(function (f) {
                      f = e[f.getSlotId().getDomId()];
                      return io(f, null);
                    })
                    .join(',')
                : b
                    .map(
                      a.m
                        ? function (f) {
                            var g = e[f.getSlotId().getDomId()];
                            g = _.u(364)
                              ? pp(a.l, f.getSlotId()) || io(g, r(d, 6) || r(g, 17) ? null : Oa(f))
                              : io(g);
                            f = f.getSlotId();
                            if ((f = a.l.j.get(f))) f.lb = g;
                            return g;
                          }
                        : function (f) {
                            var g = a.j.P[f.getSlotId().getDomId()];
                            g =
                              pp(a.l, f.getSlotId()) ||
                              io(g, r(a.j.O, 6) || r(g, 17) ? null : Oa(f));
                            f = f.getSlotId();
                            if ((f = a.l.j.get(f))) f.lb = g;
                            return g;
                          }
                    )
                    .join(',');
            },
            hv = function (a, b) {
              var c = _.u(364) ? !r(a.j.O, 6) : !a.m;
              if (_.u(495)) {
                var d;
                c &&
                  (d = ((L = G(a.j.P[b[0].getSlotId().getDomId()], un, 3)), _.y(L, 'find')).call(
                    L,
                    function (g) {
                      return 'page_url' === vn(g);
                    }
                  ));
                var e;
                d =
                  null != (e = d)
                    ? e
                    : ((L = G(a.j.O, un, 14)), _.y(L, 'find')).call(L, function (g) {
                        return 'page_url' === vn(g);
                      });
                var f;
                return null == (f = d) ? void 0 : C(f, 2)[0];
              }
              return c
                ? lo(b[0], a.j.P[b[0].getSlotId().getDomId()], mp(a.l)) || ko(a.l.l)
                : ko(a.l.l);
            },
            Wu = function (a, b, c) {
              c = void 0 === c ? window : c;
              var d = c.document;
              b = hv(a, b);
              var e = lk('google_preview'),
                f = e ? jk(d.URL) : d.URL;
              e = e ? jk(d.referrer) : d.referrer;
              d = !1;
              if (null != b) {
                var g = f;
                Am(c) || ((e = ''), (d = !0));
              } else b = f;
              var h = !1;
              f = null;
              if (_.u(455)) (h = Au(c)), Y(a, 'nhd', h || null), (h = !!h);
              else {
                f = new $i(c);
                var k = f.j[0].depth;
                if (k && ((h = !0), Y(a, 'nhd', k), c.location && c.location.ancestorOrigins)) {
                  k = f;
                  for (var l = [], m = Math.min(k.j.length, 27), n = 1; n < m; n++)
                    k.j[n] && k.j[n].url && (l[n - 1] = k.j[n].url);
                  k = aj(k, l.reverse());
                  Y(a, 'iag', k);
                  k = f.j;
                  l = [];
                  for (m = k.length - 1; 0 < m; m--)
                    (n = k[m]) && null != n.url && l.push(Rg(_.Qg(n.url)[3] || null));
                  k = Yi(l);
                  0 < k && Y(a, 'mdo', k);
                }
              }
              Y(a, 'url', b);
              k = b;
              l = _.Zj(252) || {};
              l.url = k;
              ak(252, l);
              null != g && g != b && Y(a, 'loc', g);
              Y(a, 'ref', e);
              h &&
                (_.u(455)
                  ? (c =
                      (Tg(c.top) && c.top.location && c.top.location.href) ||
                      zu(c) ||
                      (c.location &&
                        c.location.ancestorOrigins &&
                        c.location.ancestorOrigins[c.location.ancestorOrigins.length - 1]) ||
                      '') && Y(a, 'top', d ? Rg(_.Qg(c)[3] || null) : c)
                  : (c = f.j[Math.max(f.j.length - 1, 0)].url) &&
                    Y(a, 'top', d ? Rg(_.Qg(c)[3] || null) : c));
              Y(a, 'scar', a.model.V);
            },
            Xu = function (a, b) {
              b = void 0 === b ? window : b;
              if (!_.u(455)) {
                var c = b.document,
                  d = c.scripts;
                d && Y(a, 'dssz', d.length);
                b = new $i(b);
                Y(a, 'icsg', bj(b), { ma: !0 });
                b = cj(b);
                Y(a, 'mso', b);
                b = Error();
                if (b.stack) {
                  d = oo(b.stack);
                  d -= 13;
                  if (0 > d) {
                    d = 0;
                    var e = new mk(
                      'gpt_negative_stack_trace',
                      'https://pagead2.googlesyndication.com',
                      _.Zj(23)
                    );
                    Dc(
                      e,
                      $p(aq.D()).filter(function (f) {
                        return lp(a.l, f.getSlotId());
                      })
                    );
                    K(e, 'stackTrace', b.stack);
                    ok(e);
                  }
                  Y(a, 'std', d, { ma: !0 });
                }
                c.currentScript &&
                  c.currentScript.text &&
                  Y(a, 'csl', c.currentScript.text.length);
              }
            },
            Ku = function (a) {
              var b = Qb();
              Y(a, 'vrg', b);
            },
            Qu = function (a, b) {
              var c = a.j.P,
                d = (b = b.map(function (e) {
                  e = c[e.getSlotId().getDomId()];
                  return cc(e).join('&');
                }));
              d.join('|').length == b.length - 1 && (d = null);
              Y(a, 'prev_scp', d, { wa: '|' });
            },
            Uu = function (a, b) {
              _.bc(b, function (c, d) {
                Y(a, d, c, { ca: !1 });
              });
            },
            Lu = function (a) {
              var b = a.j.O;
              0 != $f(b, 24, 0) && Y(a, 'co', $f(b, 24, 0), { ma: !0 });
            },
            Nu = function (a, b) {
              if (!_.u(367)) {
                var c = _.Zj(221);
                b = Xh(c, b);
                b.Bd && Y(a, 'npa', 1);
                Y(a, 'guci', b.ld);
              }
            },
            Mu = function (a) {
              var b = Qn(a.j.O) || new Nn();
              !0 === r(b, 1) && Y(a, 'rdp', '1');
              !0 === r(b, 9) && Y(a, 'ltd', '1');
              var c = C(a.B, 2);
              c && Y(a, 'gdpr_consent', c);
              Xf(a.B, 3) && ((c = r(a.B, 3)), Y(a, 'gdpr', c ? '1' : '0', { ma: !0 }));
              (c = C(a.B, 4)) && Y(a, 'addtl_consent', c);
              (c = C(a.B, 7)) && Y(a, 'tcfe', c);
              (c = C(a.B, 1)) && Y(a, 'us_privacy', c);
              (r(a.B, 6) || r(b, 8)) && Y(a, 'npa', 1);
              c = $f(b, 6, 2);
              2 !== c && Y(a, 'tfua', c, { ma: !0 });
              Xf(b, 5) && ((b = C(b, 5)), Y(a, 'tfcd', b, { ma: !0 }));
            },
            Pu = function (a) {
              var b = a.j.O;
              1 != $f(b, 24, 0) && Xf(b, 16) && Y(a, 'ppid', C(b, 16), { ma: !0 });
            },
            Ru = function (a, b) {
              var c = a.j,
                d = c.O,
                e = c.P[b[0].getSlotId().getDomId()];
              c = 1 != a.model.Ca;
              e = !!r(e, 17);
              b = _.u(495) ? !!hv(a, b) : mo(b, a.j.P, a.l.l, mp(a.l));
              d = r(d, 27) || !1;
              var f = 3 == a.model.Ca,
                g = new ir();
              g.set(0, c);
              g.set(1, e);
              g.set(2, b);
              g.set(3, d);
              g.set(4, f);
              c = jr(g);
              0 < c && Y(a, 'eri', c);
            },
            Su = function (a, b) {
              var c = a.j.O,
                d = yu(c);
              Y(a, 'cust_params', d, { wa: '&' });
              if (0 == $f(c, 24, 0))
                if (_.u(456))
                  (b = sp(a.l, b.document, a.B, b.navigator.cookieEnabled, b.location.host)),
                    a.C &&
                      ((d = Nm(a.C, a.B)),
                      Y(a, 'cookie', d, { ma: !0 }),
                      !d && b && (Y(a, 'cookie_enabled', '1', { ma: !0 }), Y(a, 'cdm', b)));
                else {
                  if (a.C) {
                    d = Nm(a.C, a.B);
                    Y(a, 'cookie', d, { ma: !0 });
                    if ((d = !d)) {
                      d = a.C;
                      if (0 === d.l) {
                        var e = a.B;
                        if (Nm(d, e)) e = !0;
                        else {
                          Na('GoogleAdServingTest', 'Good', e, void 0, d.j.document);
                          var f = 'Good' === Ma('GoogleAdServingTest', e, d.j.document);
                          if (f) {
                            var g = d.j.document;
                            g = void 0 === g ? document : g;
                            r(e, 5) && qg(new La(g), 'GoogleAdServingTest');
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
                  (b = (ko(a.l.l) || wc(b)) != d.URL ? d.domain : '') && Y(a, 'cdm', b);
                }
              (c = C(c, 8))
                ? (50 < c.length && (c = c.substring(0, 50)),
                  (c = 'a ' + Hf('role:1 producer:12 loc:"' + (c + '"'))))
                : (c = '');
              c && Y(a, 'uule', c);
              _.u(6) ||
                ((c = new ir()),
                _.I.SVGElement && _.I.document.createElementNS && c.set(0),
                (b = qh()),
                b['allow-top-navigation-by-user-activation'] && c.set(1),
                b['allow-popups-to-escape-sandbox'] && c.set(2),
                _.I.crypto && _.I.crypto.subtle && c.set(3),
                _.I.TextDecoder && _.I.TextEncoder && c.set(4),
                (c = jr(c)),
                Y(a, 'bc', c));
            },
            iv = function (a, b) {
              var c = a.j,
                d = c.P,
                e = new w.Map();
              c = _.E(G(c.O, un, 14));
              for (var f = c.next(); !f.done; f = c.next())
                (f = f.value), e.set(vn(f), [C(f, 2)[0]]);
              b.forEach(function (k, l) {
                if ((k = d[k.getSlotId().getDomId()])) {
                  k = _.E(G(k, un, 3));
                  for (var m = k.next(); !m.done; m = k.next()) {
                    var n = m.value;
                    m = vn(n);
                    var p = e.get(m) || [];
                    n = C(n, 2)[0];
                    1 === b.length ? (p[0] = n) : n !== p[0] && (p[l + 1] = n);
                    e.set(m, p);
                  }
                }
              });
              c = [];
              f = _.E(_.y(e, 'keys').call(e));
              for (var g = f.next(); !g.done; g = f.next()) {
                var h = g.value;
                if ((g = sn()[h]))
                  (h = e.get(h)),
                    1 < h.length
                      ? ((h = h
                          .map(function (k) {
                            return encodeURIComponent(k || '');
                          })
                          .join()),
                        c.push(g + ',' + h))
                      : 1 == h.length && 'url' !== g && Y(a, g, h[0]);
              }
              c.length && Y(a, 'sps', c.join('|'));
            },
            Tu = function (a, b, c) {
              const $___old_4ef09a9c73b946a5 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                ),
                $___old_fa951e8748d4950e = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'platform'
                );
              try {
                if ($___old_4ef09a9c73b946a5)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_a0ca823ae553bc43.userAgent
                  ));
                if ($___old_fa951e8748d4950e)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___stub_a0ca823ae553bc43.platform
                  ));
                return function () {
                  var d = c.document;
                  0 < navigator.userAgent.indexOf('MSIE ') &&
                    Po(a.l.l, 'adsense_encoding', d.charset, !1);
                  if (!ko(a.l.l)) {
                    try {
                      var e = Math.round(Date.parse(c.document.lastModified) / 1000) || null;
                    } catch (m) {
                      e = null;
                    }
                    Y(a, 'lmt', e ? e.toString() : null);
                  }
                  e = _.u(43) ? _.fj() : new Date().getTime();
                  Y(a, 'dt', e, { ca: !1 });
                  try {
                    e = uu;
                    var f = Math.min(
                      hj('domLoading') || Infinity,
                      hj('domInteractive') || Infinity
                    );
                    var g = Infinity == f ? Math.max(hj('responseEnd'), hj('navigationStart')) : f;
                    0 < g &&
                      e >= g &&
                      (Y(a, 'dlt', g, { ca: !1 }), Y(a, 'idt', e - g, { ca: !1 }));
                  } catch (m) {
                    Y(a, 'idt', -9, { ca: !1 }), sk(479, m);
                  }
                  if (null == wu) {
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
                    f = Bm(c, c.document, 500, 300);
                    wu = g && !f;
                  }
                  wu || Y(a, 'ea', '0', { ma: !0 });
                  g = zm(Oi()).M;
                  f = Cm(g);
                  g = Bm(Oi(), d, c.google_ad_width, c.google_ad_height);
                  f = f.Zb;
                  e = Oi();
                  e = e.top == e ? 0 : Tg(e.top) ? 1 : 2;
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
                  Dm();
                  Y(a, 'frm', g || null);
                  if ((g = ym(!0, c, _.u(280) && 0 !== vh())))
                    (a.j.pa = g), Y(a, 'biw', g.width), Y(a, 'bih', g.height);
                  !Am(c) && (g = ym(!1, c)) && (Y(a, 'isw', g.width), Y(a, 'ish', g.height));
                  a.model.B && Y(a, 'oid', a.model.B);
                  fv(a, b, d);
                  Y(a, 'adks', gv(a, b));
                  d = 0;
                  void 0 === _.I.postMessage && (d |= 1);
                  0 < d && Y(a, 'osd', d);
                  jv(a);
                  _.u(495)
                    ? iv(a, b)
                    : ((d = Qo(b, a.l.l, mp(a.l), a.K)), Y(a, 'adsenseParameters', d, { ca: !1 }));
                  d = Ri(c);
                  a.V
                    ? (Y(a, 'ifi', d + 1),
                      (d = c),
                      (b = b.length),
                      (b = void 0 === b ? 1 : b),
                      (d = ni(mi(d)) || d),
                      (d.google_unique_id = (d.google_unique_id || 0) + b))
                    : Y(a, 'ifi', d);
                  null !== c && c != c.top
                    ? ((b = [c.document.URL]),
                      c.name && b.push(c.name),
                      (c = ym(!1, c, !1)),
                      b.push(c.width.toString()),
                      b.push(c.height.toString()),
                      (c = eh(b.join(''))))
                    : (c = 0);
                  0 != c && Y(a, 'ifk', c.toString());
                }.apply(this, arguments);
              } finally {
                if ($___old_4ef09a9c73b946a5)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_4ef09a9c73b946a5
                  ));
                if ($___old_fa951e8748d4950e)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'platform',
                    $___old_fa951e8748d4950e
                  ));
              }
            },
            Vu = function (a) {
              var b = _.I.devicePixelRatio;
              (b = 'number' === typeof b ? +b.toFixed(3) : null) && Y(a, 'u_sd', b, { ca: !1 });
            },
            Ju = function (a) {
              Y(a, 'eid', a.model.F);
              var b = ej().split(',');
              b && Y(a, 'debug_experiment_id', b);
            },
            Ou = function (a, b, c) {
              b.forEach(function (l) {
                kv(a, l.getSlotId().getAdUnitPath());
              });
              var d = a.j,
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
                    return rc(l);
                  })
                  .join()
              );
              if (
                d.some(function (l) {
                  return ((L = Va(l)), _.y(L, 'includes')).call(L, 'fluid');
                })
              ) {
                var g = d.map(function (l) {
                  return ((L = Va(l)), _.y(L, 'includes')).call(L, 'fluid') ? 'height' : '0';
                });
                Y(a, 'fluid', g);
              }
              Y(
                a,
                'fsfs',
                $b(b, function (l) {
                  l = (l = f[l.getSlotId().getDomId()]) && r(l, 12);
                  var m = !!r(e, 13);
                  return (null == l ? m : l) ? 1 : 0;
                })
              );
              Y(
                a,
                'fsbs',
                $b(b, function (l) {
                  var m = a.j,
                    n = m.O;
                  l = m.P[l.getSlotId().getDomId()];
                  n = fg(n, Fn, 18);
                  return ((l = l && fg(l, Fn, 13)) && Xf(l, 3) ? r(l, 3) : n && r(n, 3)) ? 1 : 0;
                })
              );
              lv(a, b);
              mv(a, f[b[0].getSlotId().getDomId()]);
              (g = nv(d)) && Y(a, 'ists', g);
              Y(
                a,
                'fas',
                $b(d, function (l) {
                  return xp(Jn(l));
                })
              );
              (g = ov(d, function (l) {
                return 4 == Jn(l);
              })) && Y(a, 'rbvs', g);
              _.u(98) &&
                (b = ov(b, function (l) {
                  var m = f[l.getSlotId().getDomId()],
                    n;
                  if ((n = !xp(Jn(m)))) {
                    n = null;
                    Array.isArray(Va(m)[0]) &&
                      ((n = _.E(Va(m)[0])),
                      (m = n.next().value),
                      (n = n.next().value),
                      (n = { width: m, height: n }));
                    a: {
                      var p = Ra(l, c);
                      l = { Rc: n, xc: !1 };
                      var t = void 0 === l ? {} : l;
                      l = void 0 === t.Rc ? null : t.Rc;
                      m = void 0 === t.ud ? 100 : t.ud;
                      n = void 0 === t.Nd ? 50 : t.Nd;
                      t = void 0 === t.xc ? !0 : t.xc;
                      for (var A = Hd(), z = !1; p; ) {
                        if (!m-- || Hd() - A >= n) {
                          n = !1;
                          break a;
                        }
                        switch (p.nodeType) {
                          case 9:
                            try {
                              var F = p.parentWindow || p.defaultView;
                              if (F) {
                                var B = F.frameElement;
                                if (B && Tg(F.parent)) {
                                  p = B;
                                  break;
                                }
                              }
                            } catch (ib) {}
                            p = null;
                            break;
                          case 1:
                            var H = p,
                              P;
                            if ((P = t)) {
                              b: {
                                try {
                                  if (
                                    0 < H.offsetWidth &&
                                    0 < H.offsetHeight &&
                                    H.style &&
                                    'none' !== H.style.display &&
                                    'hidden' !== H.style.visibility &&
                                    (!H.style.opacity || 0 !== Number(H.style.opacity))
                                  ) {
                                    var Ba = H.getBoundingClientRect();
                                    var rb = 0 < Ba.right && 0 < Ba.bottom;
                                    break b;
                                  }
                                } catch (ib) {}
                                rb = !1;
                              }
                              P = !rb;
                            }
                            if (P) {
                              n = !1;
                              break a;
                            }
                            z ||
                              (/^html|body$/i.test(H.tagName)
                                ? (z = null)
                                : ((z = H.style.position || (Ua(H, window) || {}).position),
                                  (z = /^fixed/i.test(z) ? H : null)),
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
              if (!ah(h)) {
                b = new mk('gpt_sra_setclickurl');
                var k = [];
                _.bc(h, function (l, m) {
                  k.push(m.length + ':' + l);
                });
                K(b, 'lenfreqs', k.join());
                Dc(b);
                ok(b, _.Zj(58));
              }
            },
            mv = function (a, b) {
              (_.u(364) ? r(a.j.O, 6) : a.m) || !b.getClickUrl() || Y(a, 'click', b.getClickUrl());
            },
            pv = function (a, b) {
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
            qv = function (a, b) {
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
            kv = function (a, b) {
              var c = '';
              '' != b &&
                ((b = b.split('/').map(function (d) {
                  return d.replace(/,/g, ':');
                })),
                pv(a, b),
                (c = qv(a, b)));
              a.H.push(c);
            },
            nv = function (a) {
              return ov(a, function (b) {
                return 0 != Jn(b);
              });
            },
            ov = function (a, b) {
              var c = new ir();
              a.forEach(function (d, e) {
                c.set(a.length - e - 1, b(d));
              });
              return jr(c);
            },
            jv = function (a) {
              var b = a.model.j.map(function (c) {
                return Xt(a.model, c);
              });
              Y(a, 'ucis', b, { wa: '|' });
            },
            Iu = function (a) {
              var b = a.j.O;
              r(b, 21) &&
                (Y(a, 'hxva', 1, { ca: !1 }), Y(a, 'cmsid', C(b, 23)), Y(a, 'vid', C(b, 22)));
            },
            lv = function (a, b) {
              var c = $b(
                b,
                function (d) {
                  d = d.getSlotId();
                  var e, f;
                  d = null != (f = null == (e = a.l.j.get(d)) ? void 0 : e.Gc) ? f : 0;
                  e = _.gj();
                  return Math.round(Math.min((d && e ? e - d : 0) / 1000, 1800));
                },
                void 0,
                '~'
              );
              Y(a, 'ris', c);
              b = $b(b, function (d) {
                if (a.V) {
                  var e = d.getSlotId();
                  if ((e = a.l.j.get(e))) (e.Gc = _.gj() || 0), e.Oc++;
                }
                return qp(a.l, d.getSlotId());
              });
              Y(a, 'rcs', b);
            },
            cv = function (a) {
              if (!(_.Zj(221) || _.u(454) || (_.u(446) && !_.Zj(254)))) {
                var b = Ja(a.B, window);
                if (b) {
                  var c = new tq();
                  var d = _.v(1917, -1),
                    e = [],
                    f = /^_GESPSK-(.+)$/;
                  try {
                    for (var g = 0; g < b.length; g++) {
                      var h = (f.exec(b.key(g)) || [])[1];
                      h && e.push(h);
                    }
                  } catch (k) {}
                  e = _.E(e);
                  for (f = e.next(); !f.done; f = e.next())
                    if (((f = f.value), (g = nb().get(f, b)), g.getError()))
                      ob(g.getError(), f, g.errorMessage, b);
                    else if (((g = g.yb), (h = Gr(g)), 0 === h || 1 === h))
                      0 <= d && C(g, 2).length > d ? ob(12, f, null, b) : ig(c, 2, g, wq);
                  G(c, wq, 2).length
                    ? ((b = new If()),
                      (d = G(c, uq, 1)),
                      0 < d.length && Sf(b, 1, d, xq),
                      (d = G(c, wq, 2)),
                      0 < d.length && Sf(b, 2, d, yq),
                      (c = Gf(Lf(b), void 0)))
                    : (c = null);
                } else c = null;
                Y(a, 'a3p', c);
              }
            },
            Y = function (a, b, c, d) {
              d = void 0 === d ? {} : d;
              a.I[b] || void 0 === c || null === c || a.F.push({ Mb: b, value: c, options: d });
            },
            Du = function (a) {
              var b, c;
              var d = (
                null != (c = null == (b = Qn(a.j.O)) ? void 0 : r(b, 9)) && c
                  ? _.u(448)
                  : _.u(387) && !r(a.B, 5)
              )
                ? 'https://pagead2.googlesyndication.com/gampad/ads?'
                : '' + _.Zj(247) + '/gampad/ads?';
              a.o = d;
              for (d = 0; d < a.F.length; d++)
                if (((b = a.F[d]), 'adsenseParameters' !== b.Mb || _.u(495))) {
                  c = a;
                  var e = rv(b);
                  e && ('?' !== c.o[c.o.length - 1] && (c.o += '&'), (c.o += b.Mb + '=' + e));
                } else sv(a, b);
            },
            rv = function (a) {
              var b = a.value,
                c = a.options,
                d = void 0 === c.ca ? !0 : c.ca;
              a = void 0 === c.wa ? ',' : c.wa;
              c = void 0 === c.ma ? !1 : c.ma;
              return _.ha(b)
                ? Array.isArray(b) && b.length
                  ? b
                      .map(function (e) {
                        return tv(e, d);
                      })
                      .join(tv(a, d))
                  : null
                : null == b || (!c && 0 == b)
                ? null
                : tv(b, d);
            },
            sv = function (a, b) {
              var c = [],
                d = [];
              b = _.E(Array.isArray(b.value) ? b.value : []);
              for (var e = b.next(); !e.done; e = b.next()) {
                var f = e.value;
                e = f.Mb;
                var g = f.xd,
                  h = f.Kd;
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
            Yu = function (a) {
              a = Tg(a.top) ? a.top : a;
              return (
                _.ha(a.AMP) &&
                !!dh(a.AMP, function (b, c) {
                  return !/^inabox/i.test(c);
                })
              );
            },
            tv = function (a, b) {
              a = a.toString();
              return b ? encodeURIComponent(a) : a;
            },
            ev = new _.Wa(-9, -9);
          var uv = null,
            xv = function () {
              var a = this;
              this.j = new w.Map();
              this.l = new w.Map();
              this.B = fk.D();
              _.x(
                window,
                'DOMContentLoaded',
                J(334, function () {
                  for (var b = _.E(a.j), c = b.next(); !c.done; c = b.next()) {
                    var d = _.E(c.value);
                    c = d.next().value;
                    d = d.next().value;
                    vv(a, c, d) && a.j.delete(c);
                  }
                })
              );
              bp(Xo.D(), Vo, 724, function (b) {
                wv(a, b.slotId, b.vb);
              });
              bp(Xo.D(), Wo, 725, function (b) {
                var c = b.slotId;
                b = b.vb;
                var d = a.l.get(c);
                null != d ? Gt(d, b) : wv(a, c, b);
              });
            },
            wv = function (a, b, c) {
              vv(a, b, c)
                ? a.j.delete(b)
                : (a.j.set(b, c),
                  _.R(b, function () {
                    a.j.delete(b);
                  }));
            },
            vv = function (a, b, c) {
              var d = jq(aq.D(), b);
              if (!d) return !1;
              if ((d = Oa(d, document)) && 'DIV' == d.nodeName) {
                var e = _.u(84) && _.u(87);
                d = new Et({
                  M: window,
                  zb: a.B,
                  nb: d,
                  ta: function (f) {
                    sk(336, f, 1);
                  },
                  Id: e,
                });
                if (d.B)
                  return (
                    Gt(d, c),
                    a.l.set(b, d),
                    fp(dp.D(), b, function () {
                      return void a.l.delete(b);
                    }),
                    !0
                  );
              }
              return !1;
            };
          var ec = new w.Set();
          var yv = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
          var zv = function (a, b) {
              return (
                Math.max(
                  'string' === typeof a
                    ? _.y(a, 'endsWith').call(a, 'px')
                      ? parseInt(a, 10)
                      : 0
                    : a,
                  b
                ) + 'px'
              );
            },
            Av = function (a, b, c, d, e) {
              a = new zg(a).createElement('DIV');
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
            Cv = function (a, b, c, d, e, f, g, h, k, l, m, n) {
              var p = Bv,
                t = zp.D().B,
                A;
              Array.isArray(d) ? (A = new _.yg(d[0], d[1])) : (A = 1);
              d = h || r(f, 4) || (_.u(242) && !Xf(f, 4)) ? to() : void 0;
              return new qt({
                hc: a,
                Ec: b,
                md: p,
                content: null === l ? Os(c) : '<startguard>' + c + '<endguard>',
                size: A,
                td: { info: function () {}, L: function () {}, error: function () {} },
                ed: k,
                Jc: e,
                Qc: g || void 0,
                permissions: { Hb: Xf(f, 1) ? !!r(f, 1) : !h, Ib: Xf(f, 2) ? !!r(f, 2) : !1 },
                rb: !!Ac().fifWin,
                Fd: Fo(),
                $c: Go(),
                Uc: !1,
                hostpageLibraryTokens: t,
                ta: sk,
                Za: null === l ? void 0 : l,
                uniqueId: n,
                xb: m,
                Pc: d,
              });
            },
            Dv = function (a, b, c) {
              const $___old_833efa302bfe3c6f = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                ),
                $___old_33e348f2774255d8 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'fetch'
                );
              try {
                if ($___old_833efa302bfe3c6f)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_a0ca823ae553bc43.userAgent
                  ));
                if ($___old_33e348f2774255d8)
                  ({}.constructor.defineProperty(
                    window,
                    'fetch',
                    $___stub_e559d91a86a40f7c.fetch
                  ));
                return function () {
                  var d = void 0 === d ? !0 : d;
                  var e = void 0 === e ? !0 : e;
                  b = Os(b, '<script>var inDapIF=true,inGptIF=true;</script>');
                  try {
                    var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                    d && He() && f.open('text/html', 'replace');
                    c();
                    f.write(b);
                    a.contentWindow &&
                      a.contentWindow.history &&
                      a.contentWindow.history.replaceState &&
                      le(a.contentWindow.location.href, '#') &&
                      a.contentWindow.history.replaceState(null, '', '#' + Math.random());
                    e && f.close();
                  } catch (g) {
                    tk(653, g, !0);
                  }
                }.apply(this, arguments);
              } finally {
                if ($___old_833efa302bfe3c6f)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_833efa302bfe3c6f
                  ));
                if ($___old_33e348f2774255d8)
                  ({}.constructor.defineProperty(window, 'fetch', $___old_33e348f2774255d8));
              }
            },
            Ev = function (a, b) {
              var c = b.slot,
                d = Va(b.da);
              if ((b = _.v(470))) {
                c = a = 0;
                d = _.E(d);
                for (var e = d.next(); !e.done; e = d.next())
                  if (((e = e.value), Array.isArray(e))) {
                    var f = _.E(e),
                      g = f.next().value;
                    f = f.next().value;
                    if (!(1 >= g || 1 >= f))
                      switch (b) {
                        case 3:
                          return e.slice();
                        case 4:
                          250 >= f && (c = Math.max(c, f));
                        case 5:
                          a = Math.min(a || Infinity, g);
                          break;
                        case 2:
                          (a = Math.min(a || Infinity, g)), (c = Math.min(c || Infinity, f));
                      }
                  }
                return a || c ? [a, c] : null;
              }
              if (!d.length) return null;
              b = d[0].slice();
              if (1 < d.length) {
                a: if ((a = Oa(c, a)) && a.style.height && a.style.width)
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
            Fv = function (a, b, c) {
              if (!Pa(b, a)) {
                var d = Oa(b, a);
                if (d) {
                  var e = c.O;
                  c = c.P[b.getSlotId().getDomId()];
                  c = Ev(a, { slot: b, da: c });
                  if (_.u(432) || _.u(464)) {
                    if (_.u(432) && Array.isArray(c)) {
                      var f = _.E(c);
                      c = f.next().value;
                      f = f.next().value;
                      d.style.minWidth || (d.style.minWidth = c + 'px');
                      d.style.minHeight || (d.style.minHeight = f + 'px');
                    }
                    _.u(464) && Av(a, d, zo(b.getSlotId()), !!r(e, 15), [0, 0]);
                  } else Av(a, d, zo(b.getSlotId()), !!r(e, 15), c);
                }
              }
            };
          var Gv = function (a) {
              var b =
                'performance' in window && 'now' in performance
                  ? performance.now.bind(performance)
                  : Hd;
              for (a = b() + a; b() < a; );
              b();
            },
            Hv = function (a, b) {
              b >= a.length ||
                (Gv(a[b]),
                window.requestAnimationFrame(function () {
                  return Hv(a, ++b);
                }));
            },
            Iv = function (a) {
              window.requestAnimationFrame(function () {
                return Hv(a, 0);
              });
            },
            Jv = function () {
              if ('function' === typeof window.requestAnimationFrame) {
                var a = _.Lj(480);
                a.length &&
                  ((a = a.map(function (b) {
                    return _.jh(b, 0);
                  })),
                  Iv(a));
              }
            };
          var Kv = function (a) {
              var b = _.v(8, -1);
              return -1 != b
                ? b
                : Xf(a, 1)
                ? Xf(a, 3) && 0 != vh()
                  ? C(a, 1) * Yf(a, 3)
                  : C(a, 1)
                : null;
            },
            Lv = function (a) {
              return Xf(a, 2) ? (Xf(a, 3) && 0 != vh() ? C(a, 2) * Yf(a, 3) : C(a, 2)) : null;
            },
            Mv = function (a) {
              var b = new Mn();
              a = _.E(a);
              for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                if (Xf(c, 1)) {
                  var d = C(c, 1);
                  D(b, 1, d);
                }
                Xf(c, 2) && ((d = C(c, 2)), D(b, 2, d));
                Xf(c, 3) && ((c = Yf(c, 3)), D(b, 3, c));
              }
              return b;
            };
          var Nv = function () {
            this.module = 2;
          };
          Nv.prototype.toString = function () {
            return String(this.module);
          };
          _.Ov = new Nv();
          var lc = Zc(['https://securepubads.g.doubleclick.net/gpt/pubads_impl_', '_', '.js']),
            mc = Zc(['https://pagead2.googlesyndication.com/gpt/pubads_impl_', '_', '.js']),
            nc = Zc(['https://securepubads.g.doubleclick.net/pagead/js/rum.js']),
            oc = Zc(['https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js']);
          var Pv, Qv, Tv;
          Pv = {};
          Qv = ((Pv[2] = { vd: 'page_level_ads' }), Pv);
          _.Rv = function () {
            this.l = {};
            this.j = Qv;
            this.B = null;
          };
          _.Sv = function (a, b) {
            b = b.module;
            a.l[b] = a.l[b] || new Kb();
            return a.l[b];
          };
          Tv = function (a, b) {
            var c = b.module;
            b = '_gpt_js_load_' + c + '_';
            var d = J(340, function (e) {
              if (a.j[c] && 'function' === typeof e) {
                var f = a.j[c];
                f = (void 0 === f.dd ? [] : f.dd).map(function (g) {
                  return _.Sv(a, g).promise;
                });
                w.Promise.all(f).then(function () {
                  e.call(_.I, _);
                });
              }
            });
            Object.defineProperty(Ac(), b, {
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
          _.Rv.prototype.load = function (a) {
            var b = _.Sv(this, a);
            var c = this.j[a.module].vd;
            var d = _.Zj(172);
            d = d && 'pagead2.googlesyndication.com' === Rg(_.Qg(d.src || '')[3] || null);
            var e = this.B;
            c = fe(Ia(d ? e.Yc(c) : e.Zc(c)));
            c = (d = _.v(25)) ? he(c, { cb: d }) : c;
            Tv(this, a);
            Yg(document, c);
            return b.promise;
          };
          zd(_.Rv);
          _.Rv.prototype.load = Zb(_.Rv.prototype.load);
          var Uv = function (a, b, c, d) {
            _.R(
              a,
              gi(
                b,
                J(506, function (e) {
                  e = JSON.parse(e.data);
                  e.message === c && d(e);
                })
              )
            );
          };
          var Z = function () {
            ur.apply(this, arguments);
          };
          _.M(Z, ur);
          Z.prototype.U = function (a) {
            sk(this.id(), a);
            window.console && window.console.error && window.console.error(a);
          };
          var Vv = function (a, b, c, d, e) {
              var f = null,
                g = J(b, e);
              _.x(c, d, g) &&
                ((f = function () {
                  return _.ub(c, d, g);
                }),
                _.R(a, f));
              return f;
            },
            Wv = function (a, b, c, d) {
              d =
                void 0 === d
                  ? function () {
                      return !0;
                    }
                  : d;
              b = new ei(b, c, J(a.id(), d));
              _.ai(a, b);
              return b;
            };
          var Xv = function (a, b, c, d) {
            Z.call(this);
            this.slotId = a;
            this.Y = b;
            this.m = c;
            lr(this.o, d);
          };
          _.M(Xv, Z);
          Xv.prototype.id = function () {
            return 696;
          };
          Xv.prototype.j = function () {
            var a = this;
            Uv(this, this.m, 'closed', function () {
              return void Yv(a);
            });
            _.u(416) ||
              Uv(this, this.m, 'canceled', function () {
                return void Yv(a);
              });
          };
          var Yv = function (a) {
            a.slotId.dispatchEvent(Dk, a.id(), a.Y);
            a.Aa();
          };
          var Zv = function (a, b, c) {
            Z.call(this);
            this.slotId = a;
            this.m = b;
            lr(this.o, c);
          };
          _.M(Zv, Z);
          Zv.prototype.id = function () {
            return 697;
          };
          Zv.prototype.j = function () {
            var a = this;
            Uv(this, this.m, 'completed', function () {
              a.slotId.dispatchEvent(Ek, a.id(), void 0);
              a.Aa();
            });
          };
          var $v = function (a, b, c) {
            Z.call(this);
            this.slotId = a;
            this.m = b;
            lr(this.o, c);
          };
          _.M($v, Z);
          $v.prototype.id = function () {
            return 694;
          };
          $v.prototype.j = function () {
            var a;
            return ab(this, function c () {
              var d = this,
                e,
                f,
                g,
                h,
                k,
                l,
                m;
              return bb(c, function (n) {
                if (1 == n.j)
                  return (
                    (e = d),
                    (f = e.slotId),
                    (g = e.m),
                    (h = new Kb()),
                    (k = h.promise),
                    (l = h.resolve),
                    Uv(d, g, 'granted', l),
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
                            Ck,
                            d.id(),
                            null !== (a = m.payload) && void 0 !== a ? a : null
                          ),
                          3
                        )
                  );
                d.Aa();
                n.j = 0;
              });
            });
          };
          var aw = { width: '100%', height: '100%', left: '0', top: '0' },
            bw = function (a, b, c, d) {
              Z.call(this);
              this.m = a;
              this.Wa = b;
              this.M = c;
              this.G = xr(this);
              lr(this.o, d);
            };
          _.M(bw, Z);
          bw.prototype.id = function () {
            return 693;
          };
          bw.prototype.j = function () {
            var a = this,
              b = 0 === vh() ? 'rgba(1,1,1,0.5)' : 'white';
            _.Bh(
              this.Wa,
              _.y(Object, 'assign').call(
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
                aw
              )
            );
            _.R(this, _.os(this.M.document, this.M));
            Ng(this.m).postMessage(JSON.stringify({ type: 'rewarded', message: 'visible' }), '*');
            this.M === this.M.top &&
              ((this.M.location.hash = 'goog_rewarded'),
              _.R(this, function () {
                'goog_rewarded' === a.M.location.hash && (a.M.location.hash = '');
              }));
            this.G.notify();
          };
          var cw = function (a, b, c) {
            Z.call(this);
            this.m = a;
            this.M = b;
            lr(this.o, c);
          };
          _.M(cw, Z);
          cw.prototype.id = function () {
            return 695;
          };
          cw.prototype.j = function () {
            if (this.M === this.M.top)
              var a = Ng(this.m),
                b = Vv(this, 503, this.M, 'hashchange', function (c) {
                  le(c.oldURL, '#goog_rewarded') &&
                    (a.postMessage(
                      JSON.stringify({ type: 'rewarded', message: 'back_button' }),
                      '*'
                    ),
                    b());
                });
          };
          var dw = function (a, b) {
            Z.call(this);
            this.slotId = a;
            this.G = xr(this);
            this.m = V(this, b);
          };
          _.M(dw, Z);
          dw.prototype.id = function () {
            return 692;
          };
          dw.prototype.j = function () {
            var a;
            return ab(this, function c () {
              var d = this,
                e,
                f,
                g,
                h;
              return bb(c, function (k) {
                if (1 == k.j)
                  return (
                    (e = d.m.value),
                    (f = new Kb()),
                    (g = f.promise),
                    (h = f.resolve),
                    d.slotId.dispatchEvent(Bk, d.id(), {
                      makeRewardedVisible: h,
                      payload: null !== (a = e.payload) && void 0 !== a ? a : null,
                    }),
                    cb(k, g, 2)
                  );
                if (d.fa) return k.return();
                d.G.notify();
                d.Aa();
                k.j = 0;
              });
            });
          };
          var ew = { width: '100%', height: '100%', left: '0', top: '0' },
            fw = {
              width: '60%',
              height: '60%',
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
            },
            gw = function (a, b) {
              Z.call(this);
              this.m = a;
              this.A = b;
              this.G = this.l();
            };
          _.M(gw, Z);
          gw.prototype.id = function () {
            return 691;
          };
          gw.prototype.j = function () {
            var a = this;
            _.Bh(
              this.m,
              _.y(Object, 'assign').call(Object, { position: 'absolute' }, 0 === vh() ? fw : ew)
            );
            Uv(this, this.A, 'prefetched', function (b) {
              return void U(a.G, b);
            });
          };
          var hw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.slotId = a;
            this.Y = b;
            this.format = c;
            this.M = d;
            this.m = V(this, e);
            this.C = W(this, f);
            this.A = V(this, g);
          };
          _.M(hw, Z);
          hw.prototype.id = function () {
            return 688;
          };
          hw.prototype.j = function () {
            if (4 === this.format) {
              var a = this.m.value,
                b = this.C.value,
                c = this.A.value;
              if (!b) throw Error('missing message bus input');
              var d = new zb();
              _.ai(this, d);
              var e = new gw(a, b);
              X(d, e);
              e = new dw(this.slotId, e.G);
              X(d, e);
              c = new bw(a, c, this.M, e.G);
              X(d, c);
              X(d, new cw(a, this.M, c.G));
              X(d, new $v(this.slotId, b, e.G));
              X(d, new Xv(this.slotId, this.Y, b, e.G));
              X(d, new Zv(this.slotId, b, e.G));
              Bb(d);
            }
          };
          var Bv = '3rd party ad content',
            iw = function (a) {
              Bv = a;
            };
          var jw = function (a, b, c) {
            wk.call(this);
            this.l = c;
            D(this.l, 17, !0);
            this.j = a;
            b.Da(this.j, c);
            this.o = b;
          };
          _.M(jw, Tk);
          jw.prototype.Na = function () {
            return new Yt(this);
          };
          jw.prototype.display = function (a) {
            var b = this.j.getSlotId().getDomId();
            document.write('<div id="' + Re(b) + '"></div>');
            Oa(this.j)
              ? kw(this.o, a, this.j)
              : qc('gpt_pb_write', function (c) {
                  Dc(c);
                });
          };
          jw.prototype.set = function (a, b) {
            'page_url' === a &&
              b &&
              (_.u(495)
                ? ((a = [xn(wn(new un(), a), [String(b)])]), hg(this.l, 3, a))
                : D(this.l, 18, String(b)));
            return this;
          };
          jw.prototype.get = function (a) {
            if ('page_url' !== a) return null;
            if (_.u(495)) {
              var b;
              return null ==
                (b = ((L = G(this.l, un, 3)), _.y(L, 'find')).call(L, function (c) {
                  return vn(c) === a;
                }))
                ? void 0
                : C(b, 2)[0];
            }
            return C(this.l, 18);
          };
          var lw = function () {
              this.j = {};
            },
            nw = function (a, b) {
              var c = window,
                d;
              b && (d = '//' + b + '.safeframe.googlesyndication.com');
              b = jt(c, Fo(), Go(), !0, d);
              a.j[b] ||
                ((a.j[b] = 1),
                Lr()
                  ? mw(a, b)
                  : Ac().fifWin ||
                    ((c = c.document),
                    (a = new zg(c).createElement('IFRAME')),
                    (a.src = b),
                    (a.style.visibility = 'hidden'),
                    (a.style.display = 'none'),
                    (c = c.getElementsByTagName('script')),
                    0 < c.length &&
                      ((c = c[c.length - 1]),
                      c.parentNode && c.parentNode.insertBefore(a, c.nextSibling))));
            },
            mw = function (a, b) {
              var c = Mr(document, b, 'prefetch', '');
              c &&
                _.x(c, 'load', function () {
                  a.j[b] = 3;
                  c && _.Lg(c);
                });
            };
          zd(lw);
          var ow = function (a, b, c, d) {
            _.Q.call(this);
            this.slot = b;
            this.Y = d;
            this.j = null;
            this.m = new zg(a);
          };
          _.M(ow, _.Q);
          var pw = function (a, b, c) {
            var d = c.va,
              e = c.Wa,
              f = c.mb,
              g = c.ob,
              h = c.kd,
              k = c.wb,
              l = c.Tb,
              m = c.isBackfill,
              n = c.Yb,
              p = c.qc,
              t = c.rc;
            e && e.setAttribute('data-google-query-id', g || '');
            c = a.slot.getSlotId();
            qj(fk.D(), '5', C(a.Y.P[c.getDomId()], 20));
            c.dispatchEvent(Gk, 801, { Sb: 0 === d.kind ? d.Ba : '', isBackfill: !!m });
            a.j = a.o('height' === h ? 'fluid' : [b.width, b.height], {
              va: d,
              mb: f,
              ob: g,
              wb: k,
              Tb: l,
              isBackfill: m,
              Yb: n,
              qc: p,
              rc: t,
            });
            if (e && !h && b.height && _.u(471)) {
              var A, z, F;
              if (
                (d =
                  null == (A = Ua(e, window))
                    ? void 0
                    : null == (z = A.minHeight)
                    ? void 0
                    : null == (F = z.match(/^([0-9]+)px$/))
                    ? void 0
                    : F[1])
              )
                (A = Math.floor((Number(d) - b.height) / 2)),
                  0 < A && (f.style.paddingTop = A + 'px');
            }
            p && (f = a.j) && f.setAttribute('data-google-container-id', p);
            $o(Xo.D(), ic, c, { size: b });
            return a.j;
          };
          ow.prototype.loaded = function (a) {
            a && a.setAttribute('data-load-complete', !0);
            a = this.slot.getSlotId();
            a.dispatchEvent(Hk, 805, void 0);
            qj(fk.D(), '6', C(this.Y.P[a.getDomId()], 20));
          };
          ow.prototype.B = function () {
            _.Q.prototype.B.call(this);
            var a = Oa(this.slot, this.m.j);
            a && a.removeAttribute('data-google-query-id');
            this.j = null;
          };
          var qw = function () {
            ow.apply(this, arguments);
          };
          _.M(qw, ow);
          qw.prototype.o = function (a, b) {
            var c = this,
              d = b.va,
              e = b.mb,
              f = b.wb,
              g = b.Tb,
              h = b.isBackfill,
              k = b.Yb,
              l = b.qc,
              m = b.rc,
              n = b.ob;
            b = this.slot.getSlotId();
            var p = this.Y,
              t = p.O;
            p = p.P[b.getDomId()];
            var A = new Fn();
            null != m && D(A, 4, m);
            t = Io([A, fg(t, Fn, 18), p && fg(p, Fn, 13)]);
            var z = String(r(t, 4));
            null != m && m !== r(t, 4) && Bc.D().L(Vl(z));
            h ||
              qc('gpt_sf_r', function (H) {
                Dc(H);
                K(H, 'GAM', String(m));
                K(H, 'Final', z);
              });
            g = g ? C(g, 2) : null;
            var F,
              B = Cv(
                e,
                yo(b),
                d.Ba,
                a,
                function () {
                  return c.loaded(B.j, null != (F = n) ? F : '');
                },
                t,
                f || null,
                !!h,
                !!k,
                g,
                this.Y.xb,
                l
              );
            _.R(this, function () {
              try {
                100 != B.status &&
                  (2 == B.I && (ls(B.B), (B.I = 0)),
                  window.clearTimeout(B.K),
                  (B.K = -1),
                  (B.C = 3),
                  B.l && (B.l.Aa(), (B.l = null)),
                  B.H && B.j
                    ? B.H.unobserve(B.j)
                    : (_.ub(window, 'resize', B.J), _.ub(window, 'scroll', B.J)),
                  B.A && B.j && B.A == _.Mg(B.j) && B.A.removeChild(B.j),
                  (B.j = null),
                  (B.A = null),
                  B.H && (B.H.disconnect(), (B.H = null)),
                  (B.status = 100));
              } catch (H) {}
            });
            return B.j;
          };
          qw.prototype.loaded = function (a, b) {
            ow.prototype.loaded.call(this, a, b);
            a = this.Y.P[this.slot.getSlotId().getDomId()];
            tu({ slot: this.slot, da: a }, b);
          };
          qw.prototype.l = function () {
            return !1;
          };
          var rw = function () {
            ow.apply(this, arguments);
          };
          _.M(rw, ow);
          var sw = function (a, b) {
              var c = yo(a.slot.getSlotId()),
                d = a.m.j;
              a = Bv;
              d = void 0 === d ? document : d;
              d = new zg(d).createElement('IFRAME');
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
            tw = function (a, b, c, d, e) {
              d.appendChild(b);
              'string' !== typeof c && ((b.width = String(c[0])), (b.height = String(c[1])));
              var f = J(774, function () {
                a.loaded(b, e);
                _.ub(b, 'load', f);
              });
              _.x(b, 'load', f);
            };
          var uw = function () {
            rw.apply(this, arguments);
          };
          _.M(uw, rw);
          uw.prototype.o = function (a, b) {
            var c = b.va,
              d = b.mb,
              e = b.wb;
            b = b.ob;
            var f = sw(this, a);
            e && f.setAttribute('sandbox', e.join(' '));
            -1 == Ce.indexOf('iPhone') && (f.srcdoc = _.Oe(Pe));
            tw(this, f, a, d, null != b ? b : '');
            Dv(f, c.Ba, function () {});
            return f;
          };
          uw.prototype.l = function () {
            return !0;
          };
          var vw = function () {
            rw.apply(this, arguments);
          };
          _.M(vw, rw);
          vw.prototype.o = function (a, b) {
            var c = b.va,
              d = b.mb,
              e = b.wb;
            b = b.ob;
            var f = sw(this, a);
            e && f.setAttribute('sandbox', e.join(' '));
            try {
              var g = c.url;
              if (/^urn:uuid:[0-9a-f-]*$/.test(g)) {
                var h = fe(g);
                f.src = Ya(h).toString();
              }
            } catch (k) {
              tk(811, k, !0);
            }
            tw(this, f, a, d, null != b ? b : '');
            return f;
          };
          vw.prototype.l = function () {
            return !1;
          };
          var ww = function (a, b, c, d, e) {
            var f = document;
            switch (a) {
              case 5:
                return new vw(f, b, c, d, e);
              case 0:
                return new uw(f, b, c, d, e);
              default:
                return new qw(f, b, c, d, e);
            }
          };
          var xw = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, A, z, F, B, H, P, Ba) {
            Z.call(this);
            this.slot = a;
            this.N = b;
            this.Y = c;
            this.M = d;
            this.m = this.l();
            this.C = this.l();
            this.J = this.l();
            this.F = this.l();
            this.I = this.l();
            this.H = this.l();
            this.A = this.l();
            this.W = V(this, e);
            lr(this.o, f);
            this.ha = V(this, g);
            this.T = V(this, h);
            this.ga = V(this, k);
            this.ea = V(this, l);
            lr(this.o, P);
            this.R = W(this, m);
            this.X = W(this, n);
            this.Z = W(this, p);
            this.$ = W(this, t);
            this.ja = W(this, A);
            this.ba = W(this, z);
            this.K = W(this, F);
            this.ia = W(this, B);
            this.ka = W(this, H);
            lr(this.o, Ba);
          };
          _.M(xw, Z);
          xw.prototype.id = function () {
            return 680;
          };
          xw.prototype.j = function () {
            var a = this.ha.value,
              b = this.T.value,
              c = this.W.value,
              d = ww(this.ea.value, this.slot, this.N, this.Y, rr(this.R));
            _.ai(this, d);
            var e = this.X.value;
            if (0 === c.kind) {
              var f = null === e || void 0 === e ? void 0 : Zf(e.getHtml());
              f && (c.Ba = f);
              if (null == c.Ba) throw Error('invalid html');
            }
            var g = pw(d, this.ga.value, {
              va: c,
              Wa: a,
              mb: b,
              ob: this.Z.value,
              kd: this.$.value,
              wb: this.ja.value,
              Tb: e,
              isBackfill: this.ba.value,
              Yb: this.K.value,
              qc: this.ia.value,
              rc: this.ka.value,
            });
            4 === Jn(this.Y.P[this.slot.getSlotId().getDomId()])
              ? ((a = Wv(this, this.M, 'message', function (h) {
                  if (g.contentWindow !== h.source) var k = !1;
                  else
                    try {
                      k = 'rewarded' === JSON.parse(h.data).type;
                    } catch (l) {
                      k = !1;
                    }
                  return k;
                })),
                U(this.F, a))
              : pr(this.F);
            U(this.m, g);
            U(this.C, d.l());
            d = Wv(this, window, 'message', function (h) {
              return (
                'string' === typeof h.data &&
                -1 !== h.data.indexOf('creative_geometry_update') &&
                h.source === g.contentWindow
              );
            });
            U(this.I, d);
            d = Wv(this, window, 'message', function (h) {
              return (
                'string' === typeof h.data &&
                (0 == h.data.lastIndexOf('visibility-changed-', 0) ||
                  'impression-viewable' === h.data) &&
                h.source === g.contentWindow
              );
            });
            U(this.H, d);
            U(this.A, Wv(this, g, 'load'));
            d = Wv(this, window, 'message', function (h) {
              return (
                'string' === typeof h.data &&
                0 == h.data.lastIndexOf('amp-', 0) &&
                !_.u(111) &&
                h.source === g.contentWindow
              );
            });
            U(this.J, d);
          };
          var yw = function (a, b, c, d, e, f, g, h, k, l, m) {
            Z.call(this);
            this.m = a;
            this.slot = b;
            this.da = c;
            this.pa = d;
            this.G = xr(this);
            this.A = W(this, e);
            this.J = V(this, f);
            this.F = V(this, g);
            this.I = V(this, h);
            this.C = W(this, k);
            this.K = V(this, l);
            this.H = V(this, m);
          };
          _.M(yw, Z);
          yw.prototype.id = function () {
            return 699;
          };
          yw.prototype.j = function () {
            var a,
              b = this.J.value,
              c = this.F.value;
            c.style.width = '';
            c.style.height = '';
            if ('height' !== this.A.value) {
              var d = null !== (a = this.C.value) && void 0 !== a ? a : 0,
                e = this.I.value,
                f = this.K.value,
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
                    t = 0;
                  var A = 0;
                  var z = Va(h.da);
                  z = _.E(z);
                  for (var F = z.next(); !F.done; F = z.next())
                    if (((F = F.value), Array.isArray(F))) {
                      var B = _.E(F);
                      F = B.next().value;
                      B = B.next().value;
                      t < F && (t = F);
                      A < B && (A = B);
                    }
                  A = [t, A];
                  t = A[0] < n;
                  p = A[1] < p;
                  t || p
                    ? ((A = n + 'px'),
                      (z = { 'max-height': 'none', 'max-width': A, padding: '0px', width: A }),
                      p && (z.height = 'auto'),
                      iu(c, b, z),
                      (c = {}),
                      t && n > parseInt(f.width, 10) && ((c.width = A), (c['max-width'] = A)),
                      p && ((c.height = 'auto'), (c['max-height'] = 'none')),
                      ah(c)
                        ? (c = !1)
                        : ((c['padding-' + ('ltr' == f.direction ? 'left' : 'right')] = '0px'),
                          _.Bh(b, c),
                          (c = !0)))
                    : (c = !1);
                  b: switch (((n = e.width), (p = k.defaultView || k.parentWindow || _.I), d)) {
                    case 2:
                      b = ju(b, p, n, f, l);
                      break b;
                    case 1:
                      if ((t = b.parentElement))
                        if ((f = po(t))) {
                          l = f.width;
                          f = Oa(m, p.document);
                          f = Ua(f, p);
                          m = f.position;
                          z = parseInt(f.width, 10) || 0;
                          A = Ua(t, p);
                          B = 'rtl' == A.direction ? 'Right' : 'Left';
                          p = B.toLowerCase();
                          t = 'absolute' == m ? 0 : parseInt(A['padding' + B], 10);
                          A = parseInt(A['border' + B + 'Width'], 10);
                          F = Gh(f);
                          B = ((F && F[4]) || 0) * ('Right' == B ? -1 : 1);
                          l = Math.max(Math.round((l - Math.max(z, n)) / 2), 0);
                          n = {};
                          z = (F && F[3]) || 1;
                          if (1 != ((F && F[0]) || 1) || 1 != z)
                            (F[0] = 1), (F[3] = 1), (n.transform = 'matrix(' + F.join(',') + ')');
                          z = 0;
                          switch (m) {
                            case 'fixed':
                            case 'relative':
                              z = parseFloat(f[p]) || 0;
                              break;
                            case 'absolute':
                              n[p] = '0';
                          }
                          n['margin-' + p] = l - t - A - z - B + 'px';
                          _.Bh(b, n);
                          b = !0;
                        } else b = !1;
                      else b = !1;
                      break b;
                    default:
                      b = !1;
                  }
                  c || b ? (lu(k, h, d, e.width, e.height, 'gpt_slotexp', g), (k = !0)) : (k = !1);
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
                        iu(c, b, f),
                        _.Bh(b, f),
                        lu(k, h, 3, m, l, 'gpt_slotred', g),
                        (k = !0));
              }
              !k && _.u(212) && lu(this.m, h, 0, e.width, e.height, 'gpt_pgbrk', g);
              sc(this.da, this.A.value, e, d);
            }
            this.G.notify();
          };
          var zw = function (a, b, c, d) {
            Z.call(this);
            this.m = null;
            this.H = W(this, a);
            this.F = W(this, b);
            this.C = W(this, c);
            this.A = V(this, d);
          };
          _.M(zw, Z);
          zw.prototype.id = function () {
            return 717;
          };
          zw.prototype.j = function () {
            var a = this;
            if (!_.u(440)) {
              var b = this.F.value,
                c = this.H.value;
              null == this.C.value ||
                b ||
                null == c ||
                ((b = gi(
                  this.A.value,
                  J(504, function (d) {
                    'impression-viewable' === d.data
                      ? Zo(c, Uo, { Ra: !0 })
                      : 0 === d.data.indexOf('visibility-changed-') &&
                        (d = /^visibility-changed-(\d+(\.\d+)?)$/.exec(d.data)) &&
                        ((d = Math.round(100 * Number(d[1]))),
                        0 <= d &&
                          100 >= d &&
                          ((0 !== d && 100 !== d) || d !== a.m) &&
                          (null !== a.m || 0 < d) &&
                          ((a.m = d), Zo(c, Uo, { Ra: !1, inViewPercentage: d })));
                  })
                )),
                _.R(this, b));
            }
          };
          var Aw = function (a, b, c, d, e, f, g, h, k, l) {
            Z.call(this);
            this.J = W(this, a);
            this.K = W(this, b);
            this.I = W(this, c);
            this.H = W(this, d);
            this.R = W(this, e);
            this.A = V(this, f);
            this.m = V(this, g);
            this.C = V(this, h);
            this.F = V(this, k);
            this.N = V(this, l);
          };
          _.M(Aw, Z);
          Aw.prototype.id = function () {
            return 718;
          };
          Aw.prototype.j = function () {
            return ab(this, function b () {
              var c = this,
                d,
                e,
                f,
                g,
                h,
                k,
                l,
                m;
              return bb(b, function (n) {
                if (1 == n.j) {
                  d = c;
                  if (!Bw(c)) return n.return();
                  e = c.C.value;
                  f = c.A.value;
                  g = c.m.value;
                  _.Ci(g, 'visibility', 'hidden');
                  _.Ci(g, 'min-width', '100%');
                  if (!e) {
                    h = c.F.value;
                    k = gi(
                      h,
                      J(504, function (p) {
                        var t = d.A.value,
                          A = d.m.value;
                        if (-1 !== p.data.indexOf('creative_geometry_update'))
                          try {
                            var z = JSON.parse(p.data),
                              F = d.R.value;
                            if (
                              null != F &&
                              'creative_geometry_update' === z.s &&
                              z.c === 'sfchannel' + F &&
                              z.p
                            ) {
                              var B = JSON.parse(z.p);
                              B.uid === F &&
                                'number' === typeof B.width &&
                                'number' === typeof B.height &&
                                Cw(d, t, A, B.width, B.height);
                            }
                          } catch (H) {}
                      })
                    );
                    _.R(c, k);
                    n.j = 0;
                    return;
                  }
                  _.Ci(f, 'min-width', '100%');
                  l = c.N.value;
                  return cb(
                    n,
                    new w.Promise(function (p) {
                      return void gi(l, p);
                    }),
                    3
                  );
                }
                if (c.fa) return n.return();
                m = f.contentDocument;
                if (!m)
                  return (
                    qc('gpt_amp_fluid_no_iframedoc', function (p) {
                      Dc(p);
                    }),
                    n.return()
                  );
                Cw(c, f, g, m.body.offsetWidth, m.body.offsetHeight);
                n.j = 0;
              });
            });
          };
          var Bw = function (a) {
              var b = !a.C.value;
              return null == a.H.value || a.I.value || 'height' !== a.K.value || b ? !1 : !0;
            },
            Cw = function (a, b, c, d, e) {
              b.setAttribute('height', String(e));
              b.setAttribute('width', String(d));
              _.Ci(c, 'visibility', 'visible');
              Dw(a, e, d);
            },
            Dw = function (a, b, c) {
              var d = a.J.value;
              qc('gpt_fluid_sz', function (e) {
                K(e, 'sz', c + 'x' + b);
                K(e, 'qqid', d || '');
                Dc(e);
                K(e, 'ff', 1);
              });
            };
          var Ew = function (a, b, c, d, e) {
            Z.call(this);
            this.M = a;
            this.m = W(this, b);
            this.A = V(this, c);
            this.C = V(this, d);
            this.F = V(this, e);
          };
          _.M(Ew, Z);
          Ew.prototype.id = function () {
            return 685;
          };
          Ew.prototype.j = function () {
            var a, b;
            if (!_.u(111) && !this.C.value) {
              var c = this.F.value,
                d = this.A.value,
                e =
                  null !== (b = null === (a = this.m.value) || void 0 === a ? void 0 : C(a, 1)) &&
                  void 0 !== b
                    ? b
                    : '',
                f = pi(this.M, d, e, c);
              _.R(this, function () {
                try {
                  f();
                } catch (g) {
                  sk(493, g);
                }
              });
            }
          };
          var Fw = /(<head(\s+[^>]*)?>)/i,
            Gw = function (a, b, c, d, e) {
              Z.call(this);
              this.va = a;
              this.m = this.l();
              this.A = W(this, b);
              this.C = W(this, c);
              this.F = W(this, d);
              this.H = W(this, e);
            };
          _.M(Gw, Z);
          Gw.prototype.id = function () {
            return 665;
          };
          Gw.prototype.j = function () {
            if (0 !== this.va.kind || !qo(this.A.value) || rr(this.C)) U(this.m, this.va);
            else {
              var a = this.va.Ba || '',
                b = !!this.F.value,
                c = !!this.H.value;
              c ||
                He() ||
                (a = a.replace(
                  Fw,
                  _.u(223)
                    ? '$1<meta http-equiv=Content-Security-Policy content="script-src https://cdn.ampproject.org/;object-src \'none\';child-src blob:;frame-src https://tpc.googlesyndication.com/b4a/b4a-runner.html">'
                    : "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"
                ));
              b && !c && (a = a.replace(Fw, '$1<meta name="referrer" content="origin">'));
              U(this.m, { kind: 0, Ba: a });
            }
          };
          var Hw = function (a, b, c, d, e, f) {
            Z.call(this);
            this.M = a;
            this.slotId = b;
            this.m = c;
            this.Jb = f;
            this.C = W(this, d);
            this.A = V(this, e);
          };
          _.M(Hw, Z);
          Hw.prototype.id = function () {
            return 686;
          };
          Hw.prototype.j = function () {
            var a, b;
            return ab(this, function d () {
              var e = this,
                f,
                g,
                h,
                k,
                l,
                m,
                n,
                p,
                t,
                A,
                z;
              return bb(d, function (F) {
                if (1 == F.j) {
                  f = e.C.value;
                  g = null === f || void 0 === f ? void 0 : C(f, 1);
                  h = null === f || void 0 === f ? void 0 : bg(f);
                  k =
                    null !== (a = null === f || void 0 === f ? void 0 : C(f, 3)) && void 0 !== a
                      ? a
                      : 0;
                  l =
                    null !== (b = null === f || void 0 === f ? void 0 : r(f, 5)) && void 0 !== b
                      ? b
                      : !1;
                  if (!g || !h) return F.return();
                  m = new Kb();
                  n = m.resolve;
                  p = m.promise;
                  t = e.A.value;
                  A = St({
                    M: e.M,
                    element: t,
                    Ld: 0 === e.m,
                    Sc: k,
                    Od: g,
                    Qb: function () {
                      return void n(!0);
                    },
                    options: { threshold: h },
                    Ic: l,
                    fd: function (B) {
                      tk(615, B, !0);
                    },
                    Jb: e.Jb,
                  });
                  _.R(e, function () {
                    A();
                    n(!1);
                  });
                  return cb(F, p, 2);
                }
                (z = F.l)
                  ? (F = cb(F, e.slotId.dispatchEvent(zk, 614, void 0), 0))
                  : ((F.j = 0), (F = void 0));
                return F;
              });
            });
          };
          var Iw = function (a, b, c, d) {
            Z.call(this);
            this.format = a;
            this.C = b;
            this.G = this.l();
            this.m = W(this, c);
            this.A = W(this, d);
          };
          _.M(Iw, Z);
          Iw.prototype.id = function () {
            return 720;
          };
          Iw.prototype.j = function () {
            var a = this.A.value;
            if (null == a) pr(this.G);
            else {
              var b = Math.round(0.3 * this.C);
              (2 !== this.format && 3 !== this.format) ||
              !rr(this.m) ||
              !ag(this.m.value) ||
              0 >= b ||
              a <= b
                ? U(this.G, a)
                : U(this.G, b);
            }
          };
          var Jw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.slot = a;
            this.O = b;
            this.m = d;
            this.A = e;
            this.G = this.l();
            this.C = 2 === c || 3 === c;
            this.F = V(this, f);
            this.H = V(this, g);
          };
          _.M(Jw, Z);
          Jw.prototype.id = function () {
            return 674;
          };
          Jw.prototype.j = function () {
            var a =
              Pa(this.slot, this.m) ||
              Av(this.m, this.F.value, zo(this.slot.getSlotId()), !!r(this.O, 15));
            this.H.value && !r(this.O, 15) && (a.style.display = 'inline-block');
            this.C
              ? gp(this.A, this.slot.getSlotId(), function () {
                  return void _.Lg(a);
                })
              : _.R(this, function () {
                  return void _.Lg(a);
                });
            U(this.G, a);
          };
          var Kw = function (a, b) {
            Z.call(this);
            this.M = a;
            this.G = this.l();
            this.m = V(this, b);
          };
          _.M(Kw, Z);
          Kw.prototype.id = function () {
            return 698;
          };
          Kw.prototype.j = function () {
            var a = Ua(this.m.value, this.M);
            null == a ? pr(this.G) : U(this.G, a);
          };
          var Lw = function (a, b, c, d, e) {
            Z.call(this);
            this.googletag = a;
            this.A = b;
            this.console = c;
            this.m = this.l();
            this.C = W(this, d);
            this.F = W(this, e);
          };
          _.M(Lw, Z);
          Lw.prototype.id = function () {
            return 813;
          };
          Lw.prototype.j = function () {
            var a = this,
              b;
            if (!_.u(497) || _.u(453)) U(this.m, !1);
            else if (_.u(446) && !_.Zj(254)) U(this.m, !1);
            else {
              var c = this.C.value;
              c &&
                (Mw.has(this.A)
                  ? U(this.m, !1)
                  : (Mw.add(this.A),
                    Eb(
                      this.googletag,
                      c,
                      null !== (b = this.F.value) && void 0 !== b ? b : null,
                      function (d, e) {
                        sk(d, e);
                        a.console && a.console.error && a.console.error(e);
                      }
                    ),
                    U(this.m, !0)));
            }
          };
          var Mw = new w.Set();
          var Nw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.m = a;
            this.format = b;
            this.slot = c;
            this.M = d;
            this.G = xr(this);
            this.A = W(this, e);
            this.C = V(this, f);
            this.F = V(this, g);
          };
          _.M(Nw, Z);
          Nw.prototype.id = function () {
            return 682;
          };
          Nw.prototype.j = function () {
            return ab(this, function b () {
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
                t,
                A;
              return bb(b, function (z) {
                if (1 == z.j)
                  return (
                    (d = c),
                    (2 === c.format || 3 === c.format) && rr(c.A) && ag(c.A.value)
                      ? cb(z, _.Rv.D().load(_.Ov), 2)
                      : z.return()
                  );
                e = z.l;
                f = e.jd;
                if (c.fa) return z.return();
                g = c.slot.getSlotId();
                h = _.ip(c.m, g);
                k = c.F.value;
                l = c.C.value;
                _.Bh(l, { 'max-height': '30vh', overflow: 'hidden' });
                if (Ow) Ow.pc(l);
                else {
                  Ow = new f(c.format, l, c.M, k, c.m, g);
                  m = {};
                  n = _.E(G(c.A.value, hm, 13));
                  for (p = n.next(); !p.done; p = n.next()) (t = p.value), (m[C(t, 1)] = C(t, 2));
                  A = _.v(487);
                  0 < A && (m.bottom_padding = String(A));
                  Ow.Sd(m);
                  Ow.tb();
                  gp(c.m, g, function () {
                    Ow && (Ow.Aa(), (Ow = null));
                    h && _.kp(d.m, g);
                  });
                }
                _.R(c, function () {
                  return _.Lg(l);
                });
                c.G.notify();
                z.j = 0;
              });
            });
          };
          var Ow = null;
          var Pw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.slot = a;
            this.Y = b;
            this.A = c;
            this.zb = d;
            this.F = e;
            this.m = f;
            this.C = W(this, g);
          };
          _.M(Pw, Z);
          Pw.prototype.id = function () {
            return 758;
          };
          Pw.prototype.j = function () {
            return ab(this, function b () {
              var c = this,
                d,
                e;
              return bb(b, function (f) {
                if (1 == f.j) {
                  var g,
                    h = Oa(c.slot, c.m);
                  h &&
                    h.setAttribute(
                      'data-google-query-id',
                      null !== (g = c.C.value) && void 0 !== g ? g : ''
                    );
                  qj(c.zb, '5', C(c.Y.P[c.slot.getSlotId().getDomId()], 20));
                  d = c.slot.getSlotId();
                  return cb(f, d.dispatchEvent(Gk, 801, { Sb: null, isBackfill: !1 }), 2);
                }
                e = _.u(123);
                var k, l, m;
                if (_.ip(c.A, c.slot.getSlotId())) {
                  var n = c.Y;
                  g = n.O;
                  n = n.P[c.slot.getSlotId().getDomId()];
                  var p =
                    null !== (k = null !== (h = r(n, 11)) && void 0 !== h ? h : r(g, 10)) &&
                    void 0 !== k
                      ? k
                      : !1;
                  e &&
                    (p && kc(c.slot, window, c.m), (c.slot.j = null), rp(c.A, c.slot.getSlotId()));
                  (!e && Ao(c.slot, c.m)) ||
                    null === (m = null !== (l = r(n, 10)) && void 0 !== l ? l : r(g, 11)) ||
                    void 0 === m ||
                    !m ||
                    _.u(390) ||
                    kc(c.slot, window, c.m);
                }
                return cb(f, $o(c.F, ic, d, { isEmpty: !0, slotContentChanged: e }), 0);
              });
            });
          };
          var Qw = function (a, b, c, d, e) {
            Z.call(this);
            this.M = a;
            this.m = W(this, b);
            this.C = V(this, c);
            this.A = V(this, d);
            this.F = V(this, e);
          };
          _.M(Qw, Z);
          Qw.prototype.id = function () {
            return 721;
          };
          Qw.prototype.j = function () {
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
                k = this.F.value,
                l = k.style.height,
                m = k.style.width,
                n = k.style.display,
                p = k.style.position,
                t = Rh(g.id + '_top', f),
                A = Rh(g.id + '_bottom', e);
              _.Bh(A, { position: 'relative', top: 'calc(100vh - 48px)' });
              k.appendChild(t);
              k.appendChild(A);
              _.Bh(h, {
                position: 'absolute',
                top: '24px',
                clip: 'rect(0, auto, auto, 0)',
                width: '100vw',
                height: 'calc(100vh - 48px)',
              });
              _.Bh(g, { position: 'fixed', top: '0', height: '100vh' });
              _.Bh(k, {
                position: 'relative',
                display: (null === (d = this.M.screen.orientation) || void 0 === d ? 0 : d.angle)
                  ? 'none'
                  : 'block',
                width: '100vw',
                height: '100vh',
              });
              Vv(this, 722, this.M, 'orientationchange', function () {
                var z;
                (null === (z = a.M.screen.orientation) || void 0 === z ? 0 : z.angle)
                  ? _.Bh(k, { display: 'none' })
                  : _.Bh(k, { display: 'block' });
              });
              _.R(this, function () {
                _.Lg(t);
                _.Lg(A);
                k.style.position = p;
                k.style.height = l;
                k.style.width = m;
                k.style.display = n;
              });
            }
          };
          var Rw = function (a, b, c, d, e) {
            e = void 0 === e ? tc : e;
            Z.call(this);
            this.A = d;
            this.C = e;
            this.Ra = !1;
            this.inViewPercentage = -1;
            this.m = null;
            this.F = V(this, a);
            this.I = W(this, b);
            this.H = V(this, c);
          };
          _.M(Rw, Z);
          Rw.prototype.id = function () {
            return 783;
          };
          Rw.prototype.j = function () {
            return ab(this, function b () {
              var c = this,
                d,
                e,
                f,
                g,
                h,
                k;
              return bb(b, function (l) {
                if (1 == l.j) {
                  d = c;
                  c.m = c.I.value;
                  if (!_.u(440) || !c.m) return l.return();
                  e = c.H.value;
                  return cb(
                    l,
                    new w.Promise(function (m) {
                      return void gi(e, m);
                    }),
                    2
                  );
                }
                f = c.F.value;
                g = function (m) {
                  m = _.E(m);
                  for (var n = m.next(); !n.done; n = m.next())
                    (d.inViewPercentage = 100 * n.value.intersectionRatio),
                      (d.Ra = 50 <= d.inViewPercentage),
                      d.sendMessage();
                };
                h = J(c.id(), g);
                k = c.C(h);
                k.observe(f);
                Vv(c, c.id(), c.A, 'visibilitychange', c.sendMessage.bind(c));
                _.R(c, function () {
                  k.disconnect();
                });
                l.j = 0;
              });
            });
          };
          Rw.prototype.sendMessage = function () {
            Zo(this.m, Uo, {
              Ra: this.Ra && !Ym(this.A),
              inViewPercentage: this.inViewPercentage,
              cd: _.fj(),
            });
          };
          var Sw = function (a, b, c, d, e, f, g) {
            Z.call(this);
            this.format = a;
            this.m = b;
            this.C = c;
            this.G = xr(this);
            this.A = W(this, d);
            this.F = V(this, e);
            this.I = V(this, f);
            this.H = W(this, g);
          };
          _.M(Sw, Z);
          Sw.prototype.id = function () {
            return 683;
          };
          Sw.prototype.j = function () {
            return ab(this, function b () {
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
              return bb(b, function (p) {
                if (1 == p.j) {
                  d = c.A.value;
                  if (!d || 5 !== c.format) return p.return();
                  e = c.I.value;
                  f = c.F.value;
                  return cb(p, _.Rv.D().load(_.Ov), 2);
                }
                g = p.l;
                h = g.nd;
                if (c.fa) return p.return();
                k = new _.cs(null, 'gpt_exception', _.Zj(38));
                l = new h(window, f, e, k, c.m.width > c.m.height, c.C, c.H.value);
                _.ai(c, l);
                l.ab();
                m = G(d, hm, 13);
                for (var t = {}, A = _.E(m), z = A.next(); !z.done; z = A.next())
                  (z = z.value), (t[C(z, 1)] = C(z, 2));
                n = t;
                l.Ga(n);
                c.G.notify();
                p.j = 0;
              });
            });
          };
          var Tw = function () {
            Z.apply(this, arguments);
            this.G = xr(this);
          };
          _.M(Tw, Z);
          Tw.prototype.id = function () {
            return 663;
          };
          Tw.prototype.j = function () {
            return ab(this, function b () {
              var c = this;
              return bb(b, function (d) {
                if (1 == d.j) {
                  var e = Uw ? 0 : _.v(16),
                    f = _.v(17);
                  e = Math.max(e, f);
                  0 < e && ((Uw = !0), Gv(e));
                  return cb(d, Vw(c), 2);
                }
                c.G.notify();
                d.j = 0;
              });
            });
          };
          var Vw = function (a) {
              return ab(a, function c () {
                var d;
                return bb(c, function (e) {
                  d = _.v(18);
                  0 < d
                    ? (e = cb(e, uc(d), 0))
                    : _.u(169) && Sk(2)
                    ? (e = cb(e, uc(0), 0))
                    : ((e.j = 0), (e = void 0));
                  return e;
                });
              });
            },
            Uw = !1;
          var Ww = function (a, b, c, d, e, f, g, h) {
            Z.call(this);
            this.A = a;
            this.pa = b;
            this.m = null;
            this.G = this.l();
            lr(this.o, c);
            this.F = V(this, d);
            this.I = V(this, e);
            this.H = W(this, f);
            this.C = W(this, g);
            this.J = W(this, h);
          };
          _.M(Ww, Z);
          Ww.prototype.id = function () {
            return 666;
          };
          Ww.prototype.j = function () {
            var a = this,
              b,
              c = new Mn();
            rr(this.C) && (D(c, 2, this.C.value), D(c, 3, 1));
            this.A && (c = Mv([this.A, c]));
            c = Lv(c);
            var d = null !== (b = this.J.value) && void 0 !== b ? b : void 0;
            if (null == c || 0 > c || 0 === d) U(this.G, !1);
            else {
              var e = this.F.value,
                f = this.I.value;
              null != f && uo(f, this.pa, c / 100)
                ? (qc(
                    'gpt_er',
                    function (g) {
                      var h;
                      K(g, 'qqid', null !== (h = a.H.value) && void 0 !== h ? h : '');
                    },
                    { ya: _.v(478) }
                  ),
                  U(this.G, !1))
                : _.u(145)
                ? U(this.G, !1)
                : Xw(this, c, d, e);
            }
          };
          var Xw = function (a, b, c, d) {
            Qa(d)
              ? ((a.m = vc(
                  b + '%',
                  J(291, function (e, f) {
                    e = _.E(e);
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
          var Yw = function (a, b) {
            Z.call(this);
            this.M = a;
            this.m = b;
            this.G = this.l();
          };
          _.M(Yw, Z);
          Yw.prototype.id = function () {
            return 706;
          };
          Yw.prototype.j = function () {
            var a = Ja(this.m, this.M);
            a ? U(this.G, a) : pr(this.G);
          };
          var Zw = function (a, b, c, d, e) {
            Z.call(this);
            this.lb = a;
            this.m = b;
            this.A = W(this, c);
            this.C = V(this, d);
            this.F = W(this, e);
          };
          _.M(Zw, Z);
          Zw.prototype.id = function () {
            return 713;
          };
          Zw.prototype.j = function () {
            var a = this.F.value;
            if (!qo(this.A.value) && a && this.m.getOseId()) {
              var b = this.C.value,
                c = Ut(this.m),
                d = _.u(440)
                  ? Od
                  : J(this.id(), function (e, f) {
                      0 <= f && Zo(a, Uo, { Ra: e, inViewPercentage: f });
                      return null;
                    });
              c.registerAdBlock(
                '?eid=' + Hj().join(',') + '&adk=' + this.lb,
                3,
                'ldjh',
                b,
                0,
                0,
                d
              );
              _.R(this, function () {
                try {
                  c.unloadAdBlock(b, !1, _.u(101));
                } catch (e) {}
              });
            }
          };
          var $w = function (a, b, c, d, e) {
            Z.call(this);
            this.slot = a;
            this.pa = b;
            this.m = c;
            this.A = new zg();
            this.G = xr(this);
            lr(this.o, d);
            this.C = W(this, e);
          };
          _.M($w, Z);
          $w.prototype.id = function () {
            return 664;
          };
          $w.prototype.j = function () {
            var a = this;
            if (_.u(20)) {
              var b = this.A.j,
                c = Xm(b),
                d = function () {
                  var g = a.C.value;
                  return null != g && uo(g, a.pa, 0);
                },
                e = qp(this.m, this.slot.getSlotId());
              if (Ym(b) && c && (0 < e || !d()) && c) {
                var f = Vv(this, 324, b, c, function () {
                  Ym(b) || (f && f(), a.G.notify());
                });
                if (f) return;
              }
            }
            this.G.notify();
          };
          var bx = function (a, b, c, d, e, f, g, h) {
            e = void 0 === e ? new um() : e;
            f = void 0 === f ? '' : f;
            g = void 0 === g ? new zp() : g;
            h = void 0 === h ? new Mm() : h;
            Z.call(this);
            this.slot = a;
            this.Y = b;
            this.I = c;
            this.xa = d;
            this.Ha = e;
            this.ra = f;
            this.T = g;
            this.Ga = h;
            this.qa = [];
            ax(this, function (k) {
              return C(k, 4);
            });
            this.ea = ax(this, function (k) {
              return C(k, 6);
            });
            this.R = ax(this, function (k) {
              return C(k, 7);
            });
            this.sa = ax(this, function (k) {
              return r(k, 8);
            });
            this.F = ax(this, function (k) {
              return C(k, 10);
            });
            ax(this, function (k) {
              return C(k, 15);
            });
            this.C = ax(this, function (k) {
              return C(k, 34);
            });
            this.m = ax(this, function (k) {
              return fg(k, pm, 43);
            });
            this.A = ax(this, function (k) {
              return fg(k, vm, 41);
            });
            this.H = ax(this, function (k) {
              return r(k, 9);
            });
            this.N = ax(this, function (k) {
              return r(k, 12);
            });
            this.W = ax(this, function (k) {
              return fg(k, mm, 50);
            });
            this.ba = ax(this, function (k) {
              return fg(k, lm, 48);
            });
            this.J = ax(this, function (k) {
              return fg(k, jm, 39);
            });
            this.X = ax(this, function (k) {
              return C(k, 36);
            });
            this.ia = ax(this, function (k) {
              return r(k, 13);
            });
            this.ha = ax(this, function (k) {
              return r(k, 3);
            });
            this.K = ax(this, function (k) {
              return C(k, 49);
            });
            this.ka = ax(this, function (k) {
              return C(k, 29);
            });
            this.oa = ax(this, function (k) {
              return C(k, 30);
            });
            this.ga = ax(this, function (k) {
              return fg(k, rm, 51);
            });
            this.ja = ax(this, function (k) {
              return r(k, 52);
            });
            this.Z = ax(this, function () {
              return 'encrypted_url';
            });
            this.$ = ax(this, function (k) {
              return fg(k, om, 54);
            });
          };
          _.M(bx, Z);
          var ax = function (a, b) {
            var c = Z.prototype.l.call(a);
            a.qa.push({ G: c, gd: b });
            return c;
          };
          bx.prototype.id = function () {
            return 700;
          };
          bx.prototype.j = function () {
            if (_.u(404)) {
              var a = this.ra;
              var b = this.slot;
              var c = JSON.parse(a);
              c = 'object' === typeof c ? c : null;
              var d = dh(c, Nd);
              if ('string' !== typeof d || null === c || void 0 === c || !c[d])
                throw Error('invalid ad unit path: ' + d);
              if (!b) throw Error('missing slot: ' + d);
              b = c[d];
              if (Array.isArray(b)) a = new um(b.slice());
              else throw Error('dictionary not an array: ' + a);
              C(a, 27).forEach(Fj);
              Gj(4);
              cx(this, a);
              dx(this, a);
            } else dx(this, this.Ha);
          };
          var dx = function (a, b) {
              a = _.E(a.qa);
              for (var c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = d.G;
                d = d.gd;
                d = d(b);
                null != d ? U(c, d) : pr(c);
              }
            },
            cx = function (a, b) {
              var c = a.slot.getSlotId(),
                d = a.Y.P[a.slot.getSlotId().getDomId()];
              d &&
                ((a.slot.j = b),
                c.dispatchEvent(Fk, 800, b),
                null != C(b, 23) &&
                  C(b, 23).forEach(function (e) {
                    Ap(a.T, e);
                    var f = a.T,
                      g = a.slot;
                    f.j[e] || (f.j[e] = []);
                    f.j[e].push(g);
                  }),
                G(b, qm, 14).length && Om(a.Ga, G(b, qm, 14)[0], a.xa),
                xo(d, fg(b, mm, 50), !!r(b, 11)) &&
                  (_.jp(a.I, c),
                  wo(fg(b, mm, 50)) &&
                    gp(a.I, c, function () {
                      _.kp(a.I, c);
                    })));
            };
          var ex = function (a, b, c) {
            Z.call(this);
            this.G = this.l();
            W(this, a);
            this.A = V(this, b);
            this.m = V(this, c);
          };
          _.M(ex, Z);
          ex.prototype.id = function () {
            return 762;
          };
          ex.prototype.j = function () {
            U(this.G, 1 === this.m.value.kind ? 5 : this.A.value ? 1 : 0);
          };
          var fx = function (a, b, c, d, e, f) {
            Z.call(this);
            this.O = a;
            this.P = b;
            this.M = c;
            this.G = this.l();
            this.m = W(this, d);
            this.A = W(this, e);
            this.C = W(this, f);
          };
          _.M(fx, Z);
          fx.prototype.id = function () {
            return 669;
          };
          fx.prototype.j = function () {
            var a;
            if (!(a = rr(this.A))) {
              a = this.P;
              var b = this.M;
              b = void 0 === b ? window : b;
              a = !!(Kj(3) || (a && Xf(a, 16) && lk('google_range_debug', b)));
            }
            a
              ? U(this.G, !0)
              : ((a = (qo(this.m.value) ? r(this.P, 12) || r(this.O, 13) : !1) || !!this.C.value),
                U(this.G, !!a));
          };
          var gx = function (a, b, c, d, e, f) {
            Z.call(this);
            this.O = a;
            this.da = b;
            this.G = this.l();
            this.A = V(this, c);
            this.m = W(this, d);
            W(this, e);
            this.C = W(this, f);
          };
          _.M(gx, Z);
          gx.prototype.id = function () {
            return 719;
          };
          gx.prototype.j = function () {
            var a = this.m.value,
              b = this.A.value;
            if (1 === b) {
              if (
                ((a = this.C.value),
                (b = new Fn()),
                (a = D(b, 3, a)),
                r(Io([a, fg(this.O, Fn, 18), fg(this.da, Fn, 13)]), 3))
              ) {
                U(this.G, vt);
                return;
              }
            } else {
              if ((a = 0 === b && a))
                (a = qh()),
                  (a = !(
                    !a['allow-top-navigation-by-user-activation'] ||
                    !a['allow-popups-to-escape-sandbox']
                  ));
              if (a) {
                U(this.G, vt);
                return;
              }
            }
            pr(this.G);
          };
          var hx = function (a, b, c, d, e, f, g, h, k) {
            Z.call(this);
            this.K = a;
            this.da = b;
            this.J = c;
            this.window = d;
            this.F = this.l();
            this.A = this.l();
            this.C = this.l();
            this.m = Kj(3).split(',');
            this.H = _.Lj(481);
            this.Oa = Xf(b, 16) ? fg(b, Cn, 16) : null;
            this.I = kk('google_range_debug', this.window);
            this.N = W(this, e);
            this.X = W(this, f);
            this.T = W(this, g);
            this.R = V(this, h);
            this.W = V(this, k);
          };
          _.M(hx, Z);
          hx.prototype.id = function () {
            return 681;
          };
          hx.prototype.j = function () {
            var a;
            if ((a = !!(this.m.length || (this.Oa && this.I)))) {
              var b;
              b: if (this.m.length) {
                if (
                  this.H.length &&
                  ((a = this.K.split('/')), !_.y(this.H, 'includes').call(this.H, a[a.length - 1]))
                ) {
                  a = !1;
                  break b;
                }
                a = !0;
              } else a = !1;
              var c = a;
              a = c ? ix(this) : null;
              if (c && a) {
                c = this.W.value;
                var d = po(c.parentElement);
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
                  jx(
                    this,
                    b,
                    e,
                    {
                      kind: 0,
                      Ba: kx(b, e, '<p>Requested size:' + a.width + 'x' + a.height + '</p>'),
                    },
                    b <= d ? 1 : 2,
                    c
                  );
                  a = !0;
                } else a = !1;
              } else a = !1;
              if (!a)
                a: if (this.Oa && this.I) {
                  a = pu(this.Oa, this.window);
                  c = qu(this.Oa, this.window);
                  d = ru(this.Oa);
                  b = su(this.Oa);
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
                  jx(this, e, f, {
                    kind: 0,
                    Ba: kx(
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
              jx(this, a, c, this.R.value);
            }
          };
          var ix = function (a) {
              a = Va(a.da)[0];
              return Array.isArray(a) &&
                a.every(function (b) {
                  return 'number' === typeof b;
                })
                ? new _.yg(a[0], a[1])
                : null;
            },
            kx = function (a, b, c) {
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
            jx = function (a, b, c, d, e, f) {
              e = void 0 === e ? a.N.value : e;
              U(a.A, new _.yg(b, c));
              U(a.F, d);
              null == e ? pr(a.C) : U(a.C, e);
              f && _.Ci(f, 'opacity', 0.5);
            };
          var lx = function (a, b, c, d, e, f, g, h, k) {
            Z.call(this);
            this.slot = a;
            this.Wa = b;
            this.J = c;
            this.F = d;
            this.I = e;
            this.m = f;
            this.H = g;
            this.G = this.l();
            this.C = W(this, h);
            this.A = W(this, k);
          };
          _.M(lx, Z);
          lx.prototype.id = function () {
            return 673;
          };
          lx.prototype.j = function () {
            return ab(this, function b () {
              var c = this,
                d,
                e,
                f;
              return bb(b, function (g) {
                if (1 == g.j) {
                  if (null != c.Wa) {
                    mx(c, c.Wa);
                    U(c.G, c.Wa);
                    g.j = 0;
                    return;
                  }
                  if (jo(c.m)) {
                    U(c.G, nx(c));
                    g.j = 0;
                    return;
                  }
                  d = c.slot.getSlotId();
                  return cb(g, yk(d, Ak), 4);
                }
                e = g.l;
                f = e.detail;
                if (c.fa) return g.return();
                mx(c, f);
                U(c.G, f);
                g.j = 0;
              });
            });
          };
          var nx = function (a) {
              var b = _.Kg(document, 'INS');
              b.id = a.J;
              _.Bh(b, { display: 'none' });
              a.I.documentElement.appendChild(b);
              var c = function () {
                return void _.Lg(b);
              };
              2 === a.m || 3 === a.m
                ? gp(a.H, a.slot.getSlotId(), function () {
                    return void _.Lg(b);
                  })
                : _.R(a, c);
              return b;
            },
            mx = function (a, b) {
              if (2 !== a.m && 3 !== a.m) {
                var c = _.u(437)
                  ? [].concat(_.Yb(b.childNodes))
                  : _.y(Array, 'from').call(Array, b.childNodes);
                c = _.E(c);
                for (var d = c.next(); !d.done; d = c.next())
                  (d = d.value), 1 === d.nodeType && d.id !== a.F && _.Lg(d);
                gc(b, !0);
                _.u(442) &&
                  rr(a.C) &&
                  rr(a.A) &&
                  ((c = a.A.value),
                  (b.style.minWidth = zv(b.style.minWidth, a.C.value)),
                  (b.style.minHeight = zv(b.style.minHeight, c)));
              }
            };
          var ox = function (a) {
            Z.call(this);
            this.G = this.l();
            this.m = V(this, a);
          };
          _.M(ox, Z);
          ox.prototype.id = function () {
            return 676;
          };
          ox.prototype.j = function () {
            var a = Sa(this.m.value);
            U(this.G, a);
          };
          var px = function (a, b) {
            Z.call(this);
            this.M = a;
            this.G = xr(this);
            this.m = W(this, b);
          };
          _.M(px, Z);
          px.prototype.id = function () {
            return 807;
          };
          px.prototype.j = function () {
            if (_.u(468) && this.m.value) {
              var a = zm(this.M).M;
              if (a && a === window.top) {
                var b = Cm(a),
                  c = b.url;
                b.Zb &&
                  (Jt(new It(a, c)) || this.U(Error('Cannot create top window proxy frame.')));
              }
            }
            this.G.notify();
          };
          var qx = function (a, b, c) {
            Z.call(this);
            var d = this;
            this.slot = a;
            this.I = b;
            this.H = c;
            this.G = this.l();
            this.m = null;
            this.F = !1;
            this.A = _.Pd(function () {
              d.slot.getSlotId().dispatchEvent(Ik, d.id(), void 0);
            });
            this.C = Qd(function () {
              var e = d.inViewPercentage;
              $o(d.I, To, d.slot.getSlotId(), e);
            }, 200);
          };
          _.M(qx, Z);
          qx.prototype.id = function () {
            return 714;
          };
          qx.prototype.j = function () {
            var a = this,
              b = new Xo(),
              c = bp(b, Uo, this.id(), function (d) {
                var e = d.Ra,
                  f = d.inViewPercentage;
                d = d.cd;
                _.u(440)
                  ? (rx(a, e, d),
                    e &&
                      _.y(Number, 'isFinite').call(Number, f) &&
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
          var rx = function (a, b, c) {
            a.F ||
              (b
                ? null == a.m
                  ? ((a.m = c),
                    setTimeout(function () {
                      rx(a, !Ym(a.H), _.fj());
                    }, 1000))
                  : 1000 <= c - a.m && ((a.F = !0), a.A())
                : (a.m = null));
          };
          var sx = function (
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
            t,
            A,
            z,
            F,
            B,
            H,
            P,
            Ba,
            rb,
            ib,
            ie,
            Lh,
            jA,
            kA,
            lA,
            mA,
            nA,
            oA,
            pA,
            qA
          ) {
            Z.call(this);
            this.slot = a;
            this.A = b;
            this.Y = c;
            this.va = d;
            this.pa = e;
            this.ga = f;
            this.$ = g;
            this.zb = h;
            this.R = k;
            this.C = l;
            this.M = m;
            this.m = n;
            this.H = p;
            this.F = t;
            this.J = A;
            this.W = z;
            this.sa = F;
            this.xa = B;
            this.ea = H;
            this.X = P;
            this.N = Ba;
            this.I = rb;
            this.qa = ib;
            this.oa = ie;
            this.T = Lh;
            this.ra = jA;
            this.K = kA;
            this.ja = lA;
            this.ba = mA;
            this.ka = nA;
            this.ha = oA;
            this.ia = qA;
            this.Z = V(this, pA);
          };
          _.M(sx, Z);
          sx.prototype.id = function () {
            return 757;
          };
          sx.prototype.j = function () {
            var a = new zb();
            _.ai(this, a);
            var b = this.slot.getSlotId();
            if (this.Z.value || lk('google_norender')) {
              var c = new Pw(this.slot, this.Y, this.A, this.zb, this.R, this.C, this.H);
              X(a, c);
            } else {
              c = this.Y;
              var d = c.O,
                e = c.P;
              c = this.slot.getSlotId().getDomId();
              var f = e[c],
                g = Jn(f),
                h = new Yw(this.M.top, this.ga);
              X(a, h);
              e = new Lw(Ac(), Vj(b.getAdUnitPath()), window.console, this.ia, h.G);
              X(a, e);
              var k = new Tw();
              X(a, k);
              e = new Iw(g, this.pa.height, this.K, this.N);
              X(a, e);
              c = new lx(
                this.slot,
                Oa(this.slot, this.C),
                c,
                zo(this.slot.getSlotId()),
                this.C,
                g,
                this.A,
                this.X,
                e.G
              );
              X(a, c);
              var l = new Gw(this.va, this.m, this.F, this.J, this.W);
              X(a, l);
              var m = new fx(d, f, this.M, this.m, this.F, this.W);
              X(a, m);
              e = new Jw(this.slot, d, g, this.C, this.A, c.G, m.G);
              X(a, e);
              var n = new ox(e.G);
              X(a, n);
              k = new $w(this.slot, this.pa, this.A, k.G, n.G);
              X(a, k);
              k = new Ww(fg(d, Mn, 5), this.pa, k.G, e.G, n.G, this.H, this.sa, this.xa);
              X(a, k);
              n = new hx(
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
              var p = new Kw(this.M, c.G);
              X(a, p);
              p = new yw(this.C, this.slot, f, this.pa, this.I, c.G, e.G, n.A, n.C, p.G, this.H);
              X(a, p);
              l = new ex(this.m, m.G, l.m);
              X(a, l);
              d = new gx(d, f, l.G, this.m, this.J, this.qa);
              X(a, d);
              f = new px(this.M, this.ha);
              X(a, f);
              d = new xw(
                this.slot,
                this.A,
                this.Y,
                this.M,
                n.F,
                k.G,
                c.G,
                e.G,
                n.A,
                l.G,
                this.m,
                this.F,
                this.H,
                this.I,
                d.G,
                this.J,
                this.oa,
                this.T,
                this.ra,
                p.G,
                f.G
              );
              X(a, d);
              f = new Nw(this.A, g, this.slot, this.M, this.K, d.m, c.G);
              X(a, f);
              h = new Sw(g, this.pa, Vj(b.getAdUnitPath()) == _.v(449), this.ja, d.m, c.G, h.G);
              X(a, h);
              h = new Ew(this.M, this.m, d.m, d.C, d.J);
              X(a, h);
              h = new Hw(this.M, b, vh(), this.ba, d.m);
              X(a, h);
              b = new hw(b, this.Y, g, this.M, d.m, d.F, c.G);
              X(a, b);
              b = new qx(this.slot, this.R, this.C);
              X(a, b);
              g = new Rw(d.m, b.G, d.A, this.C);
              X(a, g);
              g = new Zw(pp(this.A, this.slot.getSlotId()), this.$, this.m, d.m, b.G);
              X(a, g);
              g = new Aw(this.H, this.I, this.F, this.m, this.T, d.m, e.G, d.C, d.I, d.A);
              X(a, g);
              b = new zw(b.G, this.F, this.m, d.H);
              X(a, b);
              c = new Qw(this.M, this.ka, d.m, e.G, c.G);
              X(a, c);
            }
            Bb(a);
          };
          var tx = function () {
              this.j = new w.Map();
            },
            ux = function (a, b) {
              var c;
              b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Aa(), a.j.delete(b));
            },
            vx = function (a, b, c, d, e, f, g, h, k) {
              var l = b.getSlotId();
              ux(a, l);
              var m = new zb(),
                n = ym(!0, window),
                p = e.O,
                t = e.P[l.getDomId()];
              f = new bx(b, e, c, k, f);
              X(m, f);
              var A = new Yw(window.top, k);
              X(m, A);
              k = new Lw(Ac(), Vj(l.getAdUnitPath()), window.console, f.$, A.G);
              X(m, k);
              var z = new Tw();
              X(m, z);
              var F = new Iw(Jn(t), n.height, f.J, f.ea);
              X(m, F);
              k = new lx(b, Oa(b, h), l.getDomId(), zo(l), h, Jn(t), c, f.R, F.G);
              X(m, k);
              var B = new Gw(g, f.m, f.A, f.H, f.N);
              X(m, B);
              var H = new fx(p, t, window, f.m, f.A, f.N);
              X(m, H);
              g = new Jw(b, p, Jn(t), h, c, k.G, H.G);
              X(m, g);
              var P = new ox(g.G);
              X(m, P);
              z = new $w(b, n, c, z.G, P.G);
              X(m, z);
              z = new Ww(fg(p, Mn, 5), n, z.G, g.G, P.G, f.C, f.ka, f.oa);
              X(m, z);
              F = new hx(l.getAdUnitPath(), t, n.width, window, f.X, f.R, F.G, B.m, k.G);
              X(m, F);
              B = new Kw(window, k.G);
              X(m, B);
              n = new yw(h, b, t, n, f.F, k.G, g.G, F.A, F.C, B.G, f.C);
              X(m, n);
              H = new ex(f.m, H.G, F.F);
              X(m, H);
              p = new gx(p, t, H.G, f.m, f.H, f.ia);
              X(m, p);
              B = new px(window, f.Z);
              X(m, B);
              p = new xw(
                b,
                c,
                e,
                window,
                F.F,
                z.G,
                k.G,
                g.G,
                F.A,
                H.G,
                f.m,
                f.A,
                f.C,
                f.F,
                p.G,
                f.H,
                f.ha,
                f.K,
                f.ja,
                n.G,
                B.G
              );
              X(m, p);
              n = new Nw(c, Jn(t), b, window, f.J, p.m, k.G);
              X(m, n);
              A = new Sw(Jn(t), e.pa, Vj(l.getAdUnitPath()) == _.v(449), f.ba, p.m, k.G, A.G);
              X(m, A);
              A = new Ew(window, f.m, p.m, p.C, p.J);
              X(m, A);
              A = new Hw(window, l, vh(), f.W, p.m);
              X(m, A);
              e = new hw(l, e, Jn(t), window, p.m, p.F, k.G);
              X(m, e);
              e = new qx(b, Xo.D(), h);
              X(m, e);
              h = new Rw(p.m, e.G, p.A, h);
              X(m, h);
              d = new Zw(pp(c, l), d, f.m, p.m, e.G);
              X(m, d);
              d = new Aw(f.C, f.F, f.A, f.m, f.K, p.m, g.G, p.C, p.I, p.A);
              X(m, d);
              d = new zw(e.G, f.A, f.m, p.H);
              X(m, d);
              f = new Qw(window, f.ga, p.m, g.G, k.G);
              X(m, f);
              a.j.set(l, m);
              _.R(b, function () {
                ux(a, l);
              });
              _.u(336) &&
                fp(c, l, function () {
                  ux(a, l);
                });
              Bb(m);
            },
            wx = function (a, b, c, d, e, f, g, h, k, l, m, n) {
              var p = b.getSlotId();
              ux(a, p);
              l = new zb();
              k = new bx(b, e, c, h, new um(), k, m, n);
              X(l, k);
              d = new sx(
                b,
                c,
                e,
                f,
                ym(!0, window),
                h,
                d,
                fk.D(),
                Xo.D(),
                g,
                window,
                k.m,
                k.C,
                k.A,
                k.H,
                k.N,
                k.ka,
                k.oa,
                k.X,
                k.R,
                k.ea,
                k.F,
                k.ia,
                k.ha,
                k.K,
                k.ja,
                k.J,
                k.ba,
                k.W,
                k.ga,
                k.Z,
                k.sa,
                k.$
              );
              X(l, d);
              Bb(l);
              a.j.set(p, l);
              _.R(b, function () {
                ux(a, p);
              });
              _.u(336) &&
                fp(c, p, function () {
                  ux(a, p);
                });
            };
          var xx = function (a, b, c, d, e) {
            Z.call(this);
            this.F = a;
            this.H = b;
            this.C = c;
            this.Y = d;
            this.A = e;
            this.m = this.l();
          };
          _.M(xx, Z);
          xx.prototype.id = function () {
            return 810;
          };
          xx.prototype.j = function () {
            var a = this;
            _.u(475) || pr(this.m);
            var b = this.F.j;
            this.H
              ? 0 === b.length &&
                (_.u(476) ||
                  (b = $p(aq.D()).filter(function (d) {
                    return lp(a.C, d.getSlotId());
                  })))
              : 0 === b.length
              ? U(this.m, [])
              : 1 < b.length && (b = [b[0]]);
            var c = !!gn(window);
            b = b.filter(function (d) {
              var e = a.Y.P[d.getSlotId().getDomId()];
              return c && 4 == Jn(e) ? (a.A.L(Sl(String(d.getSlotId().getAdUnitPath()))), !1) : !0;
            });
            30 < b.length &&
              (this.A.L(Nl('30', String(b.length), String(b.length - 30))), (b = b.slice(0, 30)));
            U(this.m, b);
          };
          var yx = function (a, b, c, d, e, f, g, h, k, l, m) {
            Z.call(this);
            this.A = a;
            this.K = b;
            this.F = c;
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
          _.M(yx, Z);
          yx.prototype.id = function () {
            return 785;
          };
          yx.prototype.j = function () {
            var a, b, c;
            return ab(this, function e () {
              var f = this,
                g,
                h,
                k;
              return bb(e, function (l) {
                if (1 == l.j) return cb(l, w.Promise.race([f.J, Sh()]), 2);
                g = l.l;
                Gj(2);
                h = !_.u(200);
                var m = f.A,
                  n = Hj(),
                  p = f.N,
                  t = f.R,
                  A = null !== (a = f.m.Ea) && void 0 !== a ? a : NaN,
                  z = null !== (b = f.m.Fa) && void 0 !== b ? b : NaN,
                  F = null !== (c = f.m.za) && void 0 !== c ? c : NaN,
                  B = h ? Ur() : '',
                  H = h ? Vr() : '',
                  P = h ? Wr() : '';
                m.F = n;
                m.B = p;
                m.o = t;
                m.C = B;
                m.H = H;
                m.I = P;
                m.Ea = A;
                m.Fa = z;
                m.za = F;
                m.V = void 0 === g ? null : g;
                k = new Bu(f.K, f.F, f.I, f.A, f.H, f.Y, !1, f.T.value);
                U(f.C, hk(gk(Eu(k))));
                l.j = 0;
              });
            });
          };
          var zx = function (a) {
            Z.call(this);
            this.M = a;
            this.m = this.l();
          };
          _.M(zx, Z);
          zx.prototype.id = function () {
            return 802;
          };
          zx.prototype.j = function () {
            var a = this,
              b = _.v(462);
            if (this.fa || 0 >= b) U(this.m, '');
            else {
              var c = function (e) {
                sk(a.id(), e);
                U(a.m, '');
              };
              try {
                var d = Nb(this.M);
                d
                  ? d
                      .then(function (e) {
                        e.length > _.v(494, 5000) ? c(Error('ML:' + e.length)) : U(a.m, e);
                      })
                      .catch(c)
                  : U(this.m, '');
              } catch (e) {
                c(e);
              }
            }
          };
          var Ax = null,
            Bx = !1,
            Cx = !1,
            Dx = !1,
            Ex = function (a) {
              a = void 0 === a ? _.I : a;
              if (!Cx) {
                var b = new mk('gpt_pubconsole_loaded');
                Dc(b);
                K(b, 'param', String(yc(a)));
                K(b, 'api', String(Dx));
                ok(b, 1);
                b = 'https:' + _.Zj(228) + 'loader.js';
                Yg(a.document, Ai(b));
                Cx = !0;
              }
            },
            Fx = J(94, function (a) {
              a = void 0 === a ? _.I : a;
              Ac()._pubconsole_disable_ || (null !== yc(a) && Ex(a));
            }),
            Gx = function (a, b) {
              !Ac()._pubconsole_disable_ &&
                (a = Ma('google_pubconsole', a, b)) &&
                ((a = a.split('|')), 0 < a.length && ('1' == a[0] || '0' == a[0]) && Ex());
            };
          'complete' === _.I.document.readyState
            ? Fx()
            : Pj(_.I, function () {
                Fx();
              });
          zc(
            'disablePublisherConsole',
            S(93, function () {
              Ac()._pubconsole_disable_ = !0;
            })
          );
          zc(
            'onPubConsoleJsLoad',
            S(731, function () {
              Bx && (Ac().console.openConsole(Ax), (Ax = null), (Bx = !1));
            })
          );
          zc(
            'openConsole',
            S(732, function (a) {
              a = void 0 === a ? '' : a;
              Dx = !0;
              Ac && Ac().console ? Ac().console.openConsole(a) : (a && (Ax = a), (Bx = !0), Ex());
            })
          );
          var Hx = function (a, b, c) {
              const $___old_36f0cb728a70cf8b = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                ),
                $___old_b80c678b8aeda096 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                );
              try {
                if ($___old_36f0cb728a70cf8b)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_28e833aa89da2c4f.XMLHttpRequest
                  ));
                if ($___old_b80c678b8aeda096)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_28e833aa89da2c4f.XMLHttpRequest
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
                if ($___old_36f0cb728a70cf8b)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_36f0cb728a70cf8b
                  ));
                if ($___old_b80c678b8aeda096)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_b80c678b8aeda096
                  ));
              }
            },
            Kx = function (a) {
              a.j.open('GET', a.url);
              a.j.withCredentials = a.withCredentials;
              (_.u(312) || Kj(1923)) && Mt(a.j);
              a.j.onreadystatechange = function () {
                Ix(a, !1);
              };
              a.j.onload = function () {
                Ix(a, !0);
              };
              a.j.onerror = function () {
                Jx(a.l, Error('XHR error'));
              };
              a.j.send();
            },
            Ix = function (a, b) {
              try {
                if (3 === a.j.readyState || 4 === a.j.readyState)
                  if (300 <= a.j.status || (200 > a.j.status && _.u(445)))
                    a.B || Jx(a.l, Error('xhr_err-' + a.j.status)), (a.B = !0);
                  else {
                    var c = a.j.responseText.substr(a.o);
                    if (c) {
                      var d = a.l;
                      if (c)
                        if (1 !== d.j && 2 !== d.j)
                          Jx(d, Error('state err: (' + ([d.j, d.l.length].join() + ')')));
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
                                h.m(h.o, h.B, Nh(k)), (h.B = '');
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
                        ? Jx(l, Error('state err (' + ([l.j, l.l.length].join() + ')')))
                        : ((l.j = 3), l.C());
                    }
                  }
              } catch (m) {
                Jx(a.l, m);
              }
            };
          var Lx = function (a, b, c) {
              this.m = a;
              this.A = b;
              this.C = c;
              this.B = '';
              this.o = -1;
              this.j = 1;
              this.l = '';
            },
            Jx = function (a, b) {
              a.j = 4;
              try {
                a.A(b);
              } catch (c) {}
            };
          var Mx = function () {
              if (Je()) {
                if (_.u(109) && 0 <= we(Le(), 12)) return !1;
                if (0 <= we(Le(), 11)) return !0;
              } else if (He() && 0 <= we(Le(), 65)) return !0;
              return !1;
            },
            Nx = function (a) {
              if (_.u(200)) a();
              else {
                _.u(1911) && (Kr.enable_mustu_exp_behavior = !0);
                if (!_.u(220)) {
                  var b = _.Zj(150);
                  Tr();
                  Nr.test(b) && !Or.test(b) && (Sr[1] = b);
                }
                Mx() ? Zr(J(759, a)) : (Zr(null), a());
              }
            },
            Ox = function (a) {
              var b = function (c) {
                sh(_.I.top, 'googlefcLoaded')
                  ? c()
                  : setTimeout(function () {
                      b(J(678, c));
                    }, 20);
              };
              Uh() ? b(a) : a();
            },
            Px = function (a) {
              var b = Uh();
              _.I.googlefc &&
                !b &&
                qc(
                  'gpt_fc_has_namespace_but_no_iframes',
                  function (c) {
                    Dc(c);
                    K(c, 'networkId', a);
                  },
                  { ya: 1 }
                );
            },
            Qx = function (a, b) {
              var c = _.v(490);
              0 > c && (c = -1);
              a = new Hs(_.Ig(a), c);
              Js(a)
                ? ((c = _.Zj(255)),
                  _.u(467)
                    ? c
                      ? b(c)
                      : (_.Zj(256).push(b),
                        void 0 === c &&
                          (ak(255, null),
                          a.addEventListener(function (d) {
                            Ls(d)
                              ? (ak(255, d),
                                _.Zj(256).forEach(function (e) {
                                  e(d);
                                }),
                                ak(256, []))
                              : ak(255, null);
                          })))
                    : (Bc.D().info(Xl()),
                      Ms(
                        a,
                        J(661, function (d) {
                          b(d);
                        })
                      )))
                : b(null);
            },
            Rx = function (a, b) {
              a = new qs(_.Ig(a));
              if (ss(a)) {
                var c = J(660, function (d) {
                  d && 'string' === typeof d.uspString ? b(d.uspString) : b(null);
                });
                Bc.D().info(Wl());
                us(a, c);
              } else b(null);
            },
            Sx = function (a, b, c, d) {
              var e = 1000 * _.v(47, 1),
                f = function (h) {
                  return Math.max(0, Math.round((e - (a - h)) / 1000));
                },
                g = b.getSlotId();
              d = d.get(g) || null;
              if (null === d) return 0;
              switch (_.v(c.isBackfill(b.getSlotId()) ? 52 : 46)) {
                case 0:
                  return f(d);
                case 1:
                  return (b = np(c, g)) ? f(b) : -1;
                case 2:
                  return (b = op(c, g)) ? f(b) : -1;
              }
              return 0;
            },
            Tx = function (a, b) {
              a.length && ((a = a[0]), qj(fk.D(), '3', C(b.P[a.getSlotId().getDomId()], 20)));
            },
            Ux = function (a) {
              a = a instanceof Error ? a : Error();
              a.message = a.message || 'strm_err';
              tk(289, a, !0);
            },
            Vx = function (a, b) {
              if (_.u(177)) return !1;
              a = r(a, 11);
              null == a && (a = r(b, 10));
              return !!a;
            },
            Wx = null,
            Xx = null,
            Yx = function () {
              var a = dp.D();
              var b = (Xx = Xx || new Mm());
              this.j = a;
              this.B = b;
              this.J = zp.D();
              this.o = new w.Map();
              this.l = new w.Map();
              this.V = new w.Map();
              this.I = Zb(this.I);
              this.F = J(291, this.F);
              this.X = lk('google_nofetch');
              this.Z = lk('google_norender');
              this.A = NaN;
              this.C = new Tt();
              this.$ = 0;
              this.U = Sb(_.I);
              this.T = {};
              this.R = this.N = NaN;
              this.H = {};
              this.m = {};
              this.K = new tx();
              this.W = _.Pd(function () {
                return void performance.mark('gpt-first-ad-request');
              });
            },
            fu = function () {
              return (Wx = Wx || new Yx());
            },
            $x = function (a, b, c, d, e, f) {
              var g = d.slot;
              d = d.da;
              var h = g.getSlotId();
              if (_.ip(a.j, h)) {
                if (e) {
                  var k = {};
                  k[h.getDomId()] = d;
                  Zx(a, [g], f, k);
                }
                if (e || !Ao(g, c))
                  (a = r(d, 10)), null == a && (a = r(f, 11)), a && !_.u(390) && kc(g, b, c);
              }
            },
            ay = function (a, b, c, d, e) {
              var f = b.getSlotId();
              if ((e = e.P[f.getDomId()])) {
                b.j = d;
                f.dispatchEvent(Fk, 800, d);
                null != C(d, 23) &&
                  C(d, 23).forEach(function (k) {
                    Ap(a.J, k);
                    var l = a.J;
                    l.j[k] || (l.j[k] = []);
                    l.j[k].push(b);
                  });
                if (G(d, qm, 14).length)
                  if (_.u(456)) {
                    var g = sp(
                      a.j,
                      window.document,
                      c,
                      window.navigator.cookieEnabled,
                      window.location.host
                    );
                    if (g) {
                      var h = G(d, qm, 14)[0];
                      D(h, 4, g);
                      Om(a.B, h, c);
                    }
                  } else Om(a.B, G(d, qm, 14)[0], c);
                xo(e, fg(d, mm, 50), !!r(d, 11)) &&
                  (_.jp(a.j, f),
                  wo(fg(d, mm, 50)) &&
                    gp(a.j, f, function () {
                      _.kp(a.j, f);
                    }));
              }
            };
          Yx.prototype.I = function (a, b) {
            var c = this;
            b = void 0 === b ? !1 : b;
            return _.I.IntersectionObserver
              ? new _.I.IntersectionObserver(
                  function (d, e) {
                    return c.F(d, e, b);
                  },
                  { rootMargin: a }
                )
              : new fc(
                  function (d, e) {
                    return c.F(d, e, b);
                  },
                  { rootMargin: a }
                );
          };
          Yx.prototype.F = function (a, b, c) {
            var d = this;
            c = void 0 === c ? !1 : c;
            a.forEach(function (e) {
              if (c || !(0 >= e.intersectionRatio)) {
                b.unobserve(e.target);
                e = e.target.id;
                var f = d.o.get(e);
                f && (f.Qb(), d.o.delete(e));
              }
            });
          };
          var by = function (a, b) {
              if (!b.length) return [];
              var c = Vj(b[0].getSlotId().getAdUnitPath());
              return $p(aq.D())
                .map(function (d) {
                  if (Vj(d.getSlotId().getAdUnitPath()) != c || _.y(b, 'includes').call(b, d))
                    d = '';
                  else {
                    d = d.getSlotId();
                    var e, f;
                    d = null != (f = null == (e = a.j.j.get(d)) ? void 0 : e.ec) ? f : '';
                  }
                  return d;
                })
                .filter(function (d) {
                  return !!d;
                });
            },
            cy = function (a, b, c, d) {
              var e = new Wt();
              if (_.u(501)) {
                e.m = 'wbn';
                for (var f = Array(36), g = 0, h, k = 0; 36 > k; k++)
                  8 == k || 13 == k || 18 == k || 23 == k
                    ? (f[k] = '-')
                    : 14 == k
                    ? (f[k] = '4')
                    : (2 >= g && (g = (33554432 + 16777216 * Math.random()) | 0),
                      (h = g & 15),
                      (g >>= 4),
                      (f[k] = yv[19 == k ? (h & 3) | 8 : h]));
                e.N = f.join('').toLowerCase();
              } else e.m = 'ldjh';
              d = ro(d.O) ? 'fifs' : 'fif';
              e.K = d;
              e.A = a.U;
              e.Ca = c;
              e.j = b;
              return e;
            },
            dy = function (a, b, c, d) {
              var e = { Ca: 1, Ea: a.N, Fa: a.R, za: a.A },
                f = a.j,
                g = a.B,
                h = ro(d.O),
                k = a.C.getOseId(),
                l = by(a, b.j);
              a = new zb();
              var m = new zx(window);
              X(a, m);
              var n = new xx(b, h, f, d, Bc.D());
              X(a, n);
              b = new yx(b, h, f, g, c, d, k, l, e, m.m.promise, n.m);
              X(a, b);
              Bb(a);
              return b.C.promise;
            },
            ey = function (a, b) {
              var c = !_.u(200),
                d = Hj(),
                e = a.C.getOseId(),
                f = by(a, b.j),
                g = a.N,
                h = a.R;
              a = a.A;
              var k = c ? Ur() : '',
                l = c ? Vr() : '';
              c = c ? Wr() : '';
              b.F = d;
              b.B = e;
              b.o = f;
              b.C = k;
              b.H = l;
              b.I = c;
              b.Ea = g;
              b.Fa = h;
              b.za = a;
              b.V = null;
            },
            iy = function (a, b, c, d) {
              var e = J(750, function () {
                return fy(a, b, c, d);
              });
              return _.u(491)
                ? gy(a, b)
                    .then(
                      J(812, function (f) {
                        b.j = f;
                        return hy(a, b, d);
                      })
                    )
                    .then(e)
                : hy(a, b, d).then(e);
            },
            gy = function (a, b) {
              var c = Xm(document);
              if (!c || !Ym(document)) return w.Promise.resolve(b.j);
              var d = b.j.slice(),
                e = new Kb(),
                f = function () {
                  Ym(document) || (e.resolve(d), _.ub(document, c, f));
                };
              _.x(document, c, f);
              b = {};
              for (var g = _.E(d), h = g.next(); !h.done; b = { Db: b.Db }, h = g.next())
                (b.Db = h.value),
                  fp(
                    a.j,
                    b.Db.getSlotId(),
                    (function (k) {
                      return function () {
                        da(d, k.Db);
                        d.length || e.resolve([]);
                      };
                    })(b)
                  );
              return e.promise;
            },
            hy = function (a, b, c) {
              b = b.j;
              var d = c.O,
                e = c.P;
              c = fg(d, Mn, 5) || new Mn();
              c = Kv(c);
              if (null == c) return w.Promise.resolve();
              var f = Math.max(c / 100, 0);
              if (
                !b.every(function (l) {
                  var m = e[l.getSlotId().getDomId()],
                    n = Oa(l);
                  if ((n = Qa(n)))
                    (n = window),
                      (l = { slot: l, da: m }),
                      (m = !!r(d, 15)),
                      (l = vo(l, n.document, m)) && -12245933 != l.y
                        ? ((n = ym(!0, n)), (n = uo(l, n, f)))
                        : (n = !0),
                      (n = !n);
                  return n;
                })
              )
                return w.Promise.resolve();
              c = a.I(c + '%');
              var g = new Kb(),
                h = {};
              b = _.E(b);
              for (var k = b.next(); !k.done; h = { jb: h.jb, Fb: h.Fb }, k = b.next())
                (k = k.value),
                  (h.Fb = k.getSlotId().getDomId()),
                  (h.jb = Oa(k)),
                  h.jb &&
                    (a.o.set(h.Fb, {
                      Qb: function () {
                        return void g.resolve();
                      },
                      ub: c,
                    }),
                    c.observe(h.jb),
                    fp(
                      a.j,
                      k.getSlotId(),
                      (function (l) {
                        return function () {
                          jy(a, l.jb, l.Fb);
                        };
                      })(h)
                    ));
              return g.promise;
            },
            fy = function (a, b, c, d) {
              var e = b.j;
              if (e.length)
                return (
                  a.o.get(e[0].getSlotId().getDomId()) &&
                    e.forEach(function (f) {
                      var g = f.getSlotId().getDomId();
                      f = Oa(f);
                      jy(a, f, g);
                    }),
                  _.u(441)
                    ? dy(a, b, c, d).then(function (f) {
                        return ky(a, f, b, c, d);
                      })
                    : ly(a, b, c, d)
                );
            },
            ly = function (a, b, c, d) {
              Gj(2);
              ey(a, b);
              var e = Eu(new Bu(ro(d.O), a.j, a.B, b, c, d));
              ky(a, e, b, c, d);
            },
            ky = function (a, b, c, d, e) {
              var f = ++a.$;
              c.l = f;
              a.T[f] = c.j;
              my(a, b, c, d, e);
              b = c.j;
              _.u(501) ||
                ((e = (e = fg(e.O, Fn, 18)) && Xf(e, 4) ? r(e, 4) : _.u(242)),
                _.u(500)
                  ? tp(a.j, a.B, d).then(function (g) {
                      nw(lw.D(), g);
                    })
                  : nw(lw.D(), to()),
                e || nw(lw.D()));
              d = _.fj();
              e = {};
              b = _.E(b);
              for (c = b.next(); !c.done; e = { Xa: e.Xa }, c = b.next())
                (e.Xa = c.value),
                  a.V.has(e.Xa.getSlotId()) ||
                    _.R(
                      e.Xa,
                      (function (g) {
                        return function () {
                          return void a.V.delete(g.Xa.getSlotId());
                        };
                      })(e)
                    ),
                  a.V.set(e.Xa.getSlotId(), d);
            },
            py = function (a, b, c, d) {
              b = b.filter(function (e) {
                var f = e.getSlotId(),
                  g = a.l.get(f);
                g
                  ? 0 != _.v(46) && _.y(Object, 'assign').call(Object, g, { options: c, Y: d })
                  : (a.l.set(f, { Y: d, options: c, Tc: null }),
                    _.R(f, function () {
                      a.l.delete(f);
                    }));
                fp(a.j, f, function () {
                  ny(a, e);
                });
                return !g;
              });
              b.length && oy(a, b, c, d);
            },
            oy = function (a, b, c, d) {
              var e = _.fj();
              b = oa(b, function (f) {
                return Sx(e, f, a.j, a.V);
              });
              _.bc(b, function (f, g) {
                if ('0' === g) qy(a, f, c, d);
                else if ('-1' === g) ry(a, f);
                else {
                  var h = parseInt(g, 10);
                  f.forEach(function (k) {
                    Bc.D().L(Rl(String(h), k.getSlotId().getAdUnitPath()));
                  });
                  qy(a, f, c, d, 1000 * h);
                }
              });
            },
            ry = function (a, b) {
              var c = {};
              b = _.E(b);
              for (
                var d = b.next();
                !d.done;
                c = { Ma: c.Ma, Eb: c.Eb, Ya: c.Ya, kb: c.kb, gb: c.gb, Bb: c.Bb }, d = b.next()
              ) {
                c.Eb = d.value;
                c.Ma = c.Eb.getSlotId();
                c.Bb = _.v(a.j.isBackfill(c.Ma) ? 52 : 46);
                c.Ya = [];
                c.kb = null;
                c.gb = (function (e) {
                  return function (f) {
                    var g = a.l.get(e.Ma);
                    try {
                      qy(a, [e.Eb], g.options, g.Y, f ? 0 : 1000 * _.v(47, 1));
                    } finally {
                      f = _.E(e.Ya);
                      for (g = f.next(); !g.done; g = f.next()) (g = g.value), g();
                      e.Ya.length = 0;
                      null !== e.kb && clearTimeout(e.kb);
                    }
                  };
                })(c);
                if ((d = 1000 * _.v(a.j.isBackfill(c.Ma) ? 56 : 55)))
                  a.l.get(c.Ma),
                    (c.kb = setTimeout(
                      (function (e) {
                        return function () {
                          return e.gb(!0);
                        };
                      })(c),
                      d
                    ));
                switch (c.Bb) {
                  case 2:
                    c.Ya.push(
                      xk(
                        c.Ma,
                        Ik,
                        (function (e) {
                          return function () {
                            return void e.gb();
                          };
                        })(c)
                      )
                    );
                  case 1:
                    c.Ya.push(
                      hc(
                        ic,
                        c.Ma,
                        684,
                        (function (e) {
                          return function (f) {
                            f = f.isEmpty;
                            (2 !== e.Bb || f) && e.gb();
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
            ny = function (a, b) {
              var c = a.l.get(b.getSlotId());
              c && (_.u(318) && _.I.clearTimeout(c.Tc), a.l.delete(b.getSlotId()));
            },
            qy = function (a, b, c, d, e) {
              e = ((void 0 === e ? 0 : e) || 0) - (_.fj() - _.fj());
              if (0 < e) {
                e = setTimeout(
                  J(375, function () {
                    sy(a, b, c, d);
                  }),
                  e
                );
                for (var f = _.E(b), g = f.next(); !g.done; g = f.next())
                  if ((g = a.l.get(g.value.getSlotId()))) g.Tc = e;
              } else sy(a, b, c, d);
            },
            sy = function (a, b, c, d) {
              var e = d.O,
                f = d.P;
              b.forEach(function (k) {
                ny(a, k);
              });
              var g = oa(b, function (k) {
                k = f[k.getSlotId().getDomId()];
                return 0 != Va(k).length || Xf(k, 16);
              });
              if (g[!1]) {
                var h = _.E(g[!1]);
                for (b = h.next(); !b.done; b = h.next())
                  (b = b.value),
                    $x(a, window, document, { slot: b, da: d.P[b.getSlotId().getDomId()] }, !0, e);
              }
              if ((b = g[!0]))
                if (
                  ((e = c.Ca),
                  b.forEach(function (k) {
                    var l = k.getSlotId();
                    lp(a.j, l) && ((k.j = null), rp(a.j, k.getSlotId()));
                  }),
                  void 0 !== c.za && (a.A = c.za),
                  (a.N = c.Ea || NaN),
                  (a.R = c.Fa || NaN),
                  !a.X)
                )
                  if (ro(d.O))
                    (c = Vj(b[0].getSlotId().getAdUnitPath())), (c = ty(b, c, d)), uy(a, d, c, e);
                  else
                    for (c = _.E(b), b = c.next(); !b.done; b = c.next()) uy(a, d, [[b.value]], e);
            },
            Zx = function (a, b, c, d) {
              var e = void 0 === e ? window : e;
              if (!_.u(336))
                for (var f = _.E(b), g = f.next(); !g.done; g = f.next())
                  ux(a.K, g.value.getSlotId());
              b = _.E(b);
              for (g = b.next(); !g.done; g = b.next())
                (g = g.value),
                  Vx(d[g.getSlotId().getDomId()], c) && kc(g, e, e.document),
                  (g.j = null),
                  rp(a.j, g.getSlotId());
              return !0;
            },
            jy = function (a, b, c) {
              if (b) {
                var d = a.o.get(c);
                d && (d.ub.unobserve(b), a.o.delete(c));
              }
            },
            vy = function (a, b, c, d) {
              d = void 0 === d ? document : d;
              var e,
                f,
                g,
                h = 0,
                k = d,
                l = function () {
                  h++;
                  if (3 === h) {
                    var t = f,
                      A = e,
                      z = g,
                      F = new Zh(),
                      B = Qn(c.O);
                    B = B && r(B, 9);
                    if (_.u(396)) D(F, 5, !1);
                    else if (t) {
                      if ((B = !B)) {
                        var H = void 0 === H ? !1 : H;
                        if (Ls(t))
                          if (
                            !1 === t.gdprApplies ||
                            'tcunavailable' === t.tcString ||
                            (void 0 === t.gdprApplies && !H) ||
                            'string' !== typeof t.tcString ||
                            !t.tcString.length
                          )
                            var P = !0;
                          else {
                            P = void 0 === P ? '755' : P;
                            b: {
                              if (
                                t.publisher &&
                                t.publisher.restrictions &&
                                ((H = t.publisher.restrictions['1']), void 0 !== H)
                              ) {
                                H = H[void 0 === P ? '755' : P];
                                break b;
                              }
                              H = void 0;
                            }
                            0 === H
                              ? (P = !1)
                              : t.purpose && t.vendor
                              ? ((H = t.vendor.consents),
                                (P = !(!H || !H[void 0 === P ? '755' : P])) &&
                                t.purposeOneTreatment &&
                                'DE' === t.publisherCC
                                  ? (P = !0)
                                  : P && ((P = t.purpose.consents), (P = !(!P || !P['1']))))
                              : (P = !0);
                          }
                        else P = !1;
                        B = P;
                      }
                      P = D(F, 5, B);
                      P = D(P, 2, t.tcString);
                      P = D(P, 4, t.addtlConsent || '');
                      D(P, 7, t.internalErrorState);
                      void 0 !== t.gdprApplies && D(F, 3, t.gdprApplies);
                      'tcunavailable' === t.tcString
                        ? Bc.D().info(Yl('failed'))
                        : Bc.D().info(Yl('succeeded'));
                    } else D(F, 5, !B);
                    A && D(F, 1, A);
                    null !== z && D(F, 6, z);
                    b(F);
                  }
                };
              Px(a);
              var m = function () {
                Qx(k, function (t) {
                  f = t;
                  l();
                });
                Rx(k, function (t) {
                  e = t;
                  l();
                });
              };
              if (_.u(367)) {
                var n = new Bs(_.Ig(d)),
                  p = _.Zj(221);
                d = n.j ? Es(n, 'loaded') : w.Promise.resolve();
                d.then(function (t) {
                  return Fs(n, t, a, p);
                }).then(function (t) {
                  g = t;
                  l();
                });
                d.then(m);
              } else
                Ox(function () {
                  var t = Qn(c.O),
                    A = _.Zj(221);
                  t = !(!t || !r(t, 8));
                  Yh(A, a, J(451, l), t);
                  m();
                });
            },
            xy = function (a, b, c, d) {
              d = void 0 === d ? document : d;
              var e = b.j.length ? Vj(b.j[0].getSlotId().getAdUnitPath()) : '';
              vy(
                e,
                function (f) {
                  r(f, 5)
                    ? Nx(function () {
                        wy(a, b, f, c, d);
                      })
                    : wy(a, b, f, c, d);
                  Gx(f, d);
                },
                c,
                d
              );
            },
            wy = function (a, b, c, d, e) {
              e = void 0 === e ? document : e;
              var f = Ja(c);
              Cp.D().j = f;
              var g = d.O,
                h = d.P;
              b.j = b.j.filter(function (m) {
                var n = m.getSlotId().getDomId();
                if (5 === Jn(h[n])) {
                  var p = rn(window, Vj(m.getSlotId().getAdUnitPath()) != _.v(449), f);
                  p &&
                    qc(
                      'gpt_int_ns',
                      function (t) {
                        K(t, 'nsr', p);
                        if (f) {
                          var A = Math.max.apply(Math, _.Yb(nn(f) || []));
                          K(t, 'del', Math.floor((Date.now() - A) / 60000));
                        }
                        Dc(t);
                      },
                      { ya: _.v(492, 0.01) }
                    );
                  return !p;
                }
                return !0;
              });
              if (b.j.length) {
                for (var k = _.E(b.j), l = k.next(); !l.done; l = k.next()) Fv(e, l.value, d);
                iy(a, b, c, d).then(
                  J(751, function () {
                    for (var m = _.E(b.j), n = m.next(); !n.done; n = m.next())
                      (n = n.value), yy(a, n, g, h[n.getSlotId().getDomId()]);
                  })
                );
              }
            },
            ty = function (a, b, c) {
              var d = [];
              a = oa(a, function (e) {
                return Vj(e.getSlotId().getAdUnitPath());
              });
              _.bc(a, function (e, f) {
                e = _.u(482) ? zy(e, c) : e;
                f == b ? d.unshift(e) : d.push(e);
              });
              return d;
            },
            uy = function (a, b, c, d) {
              var e = document;
              if (c) {
                c = _.E(c);
                for (var f = c.next(); !f.done; f = c.next())
                  (f = cy(a, f.value, d, b)), xy(a, f, b, e);
              }
            },
            yy = function (a, b, c, d) {
              var e = void 0 === e ? window : e;
              !Vx(d, c) || (_.u(499) ? a.j.Ia(b.getSlotId()) : b.Ia()) || kc(b, e, e.document);
            },
            zy = function (a, b) {
              var c = b.O,
                d = b.P,
                e = function (g) {
                  g = d[g.getSlotId().getDomId()];
                  return 0 == Jn(g);
                },
                f = [];
              a.forEach(function (g) {
                if (e(g)) {
                  var h = d[g.getSlotId().getDomId()];
                  h = vo({ slot: g, da: h }, document, !!r(c, 15)) || {};
                  f.push({ vc: void 0 === h.y ? Infinity : h.y, slot: g });
                }
              });
              ma(f, function (g, h) {
                return ka(g.vc, h.vc);
              });
              return a.map(function (g) {
                return e(g) ? f.shift().slot : g;
              });
            },
            my = function (a, b, c, d, e) {
              var f = void 0 === f ? _.I.document : f;
              var g = void 0 === g ? Ux : g;
              var h = c.j;
              a.m[c.l] = h.slice();
              var k = J(646, function (p, t, A) {
                  A = { kind: 0, Ba: A };
                  var z = f;
                  z = void 0 === z ? document : z;
                  _.u(404) ? Ay(a, c, d, e, p, t, A, z) : By(a, c, d, e, p, t, A, z);
                }),
                l = J(647, function () {
                  for (var p = c.l, t = a.m[p] || [], A = 0; A < t.length; ++A)
                    if (t[A]) {
                      var z = new um();
                      z = '{"empty":' + D(z, 8, !0).m() + '}';
                      var F = a,
                        B = c,
                        H = d,
                        P = e,
                        Ba = A,
                        rb = { kind: 0, Ba: '' },
                        ib = void 0;
                      ib = void 0 === ib ? document : ib;
                      _.u(404) ? Ay(F, B, H, P, Ba, z, rb, ib) : By(F, B, H, P, Ba, z, rb, ib);
                    }
                  delete a.m[p];
                  Tb();
                });
              g = J(289, g);
              b = hk(gk(b));
              Tx(h, e);
              k = new Lx(k, g, l);
              var m, n;
              l =
                null != (n = null == (m = Qn(e.O)) ? void 0 : r(m, 9)) && n
                  ? !_.u(448)
                  : !_.u(385) || !!r(d, 5);
              Kx(new Hx(b, k, void 0 === l ? !0 : l));
              _.u(469) && a.W();
              h = _.E(h);
              for (m = h.next(); !m.done; m = h.next())
                (m = m.value),
                  (n = C(e.P[m.getSlotId().getDomId()], 20)),
                  (k = J(643, Cy(a, m, b, e))),
                  _.u(469)
                    ? m.getSlotId().dispatchEvent(Jk, 808, { ad: k, vb: n })
                    : ($o(Xo.D(), So, m.getSlotId(), n), (m.l = k));
            },
            Cy = function (a, b, c, d) {
              if (ro(d.O)) {
                b = cy(a, [b], 1, d);
                ey(a, b);
                var e = new Bu(_.u(364), a.j, a.B, b, new Zh(), d, !0);
                return Ta(function () {
                  return gk(Eu(e));
                });
              }
              return function () {
                return c;
              };
            },
            By = function (a, b, c, d, e, f, g, h) {
              h = void 0 === h ? document : h;
              var k = b.l,
                l = a.m[k] || [];
              b = l[e];
              l[e] = null;
              try {
                var m = JSON.parse(f);
                var n = _.ha(m) ? m : null;
              } catch (t) {
                n = null;
              }
              n = (e = n) && dh(e, Nd);
              e = e && e[n];
              e = 'string' === typeof n && Array.isArray(e) ? new um(e.slice()) : null;
              if (b)
                if (
                  ((n = C(d.P[b.getSlotId().getDomId()], 20)),
                  a.H[k] || ((a.H[k] = !0), qj(fk.D(), '4', n)),
                  e)
                ) {
                  f = C(e, 27);
                  f = _.E(f);
                  for (k = f.next(); !k.done; k = f.next()) Fj(k.value);
                  Gj(4);
                  ay(a, b, c, e, d);
                  if (!b.fa)
                    if (r(e, 8) || a.Z) {
                      var p;
                      c = h;
                      g = null != (p = C(e, 34)) ? p : '';
                      (p = Oa(b, c)) && p.setAttribute('data-google-query-id', g);
                      qj(fk.D(), '5', C(d.P[b.getSlotId().getDomId()], 20));
                      b.getSlotId().dispatchEvent(Gk, 801, { Sb: null, isBackfill: !1 });
                      p = _.u(123);
                      $x(a, _.I, c, { slot: b, da: d.P[b.getSlotId().getDomId()] }, p, d.O);
                      $o(Xo.D(), ic, b.getSlotId(), { isEmpty: !0, slotContentChanged: p });
                    } else vx(a.K, b, a.j, a.C, d, e, g, h, c);
                } else sk(646, Error('invalid response: ' + f));
              else sk(646, Error('missing slot: ' + n));
            },
            Ay = function (a, b, c, d, e, f, g, h) {
              h = void 0 === h ? document : h;
              var k = b.l,
                l = a.m[k] || [];
              b = l[e];
              l[e] = null;
              b
                ? (a.H[k] ||
                    ((a.H[k] = !0), qj(fk.D(), '4', C(d.P[b.getSlotId().getDomId()], 20))),
                  b.fa ||
                    ((e = h),
                    (h = d.O),
                    Vx(d.P[b.getSlotId().getDomId()], h),
                    wx(
                      a.K,
                      b,
                      a.j,
                      a.C,
                      d,
                      g,
                      e,
                      c,
                      f,
                      C(d.P[b.getSlotId().getDomId()], 20),
                      a.J,
                      a.B
                    )))
                : sk(646, Error('missing slot: ' + f));
            };
          var Dy = function (a, b, c) {
              this.j = a;
              this.l = b;
              this.options = c;
            },
            Ey = function (a) {
              this.pubads = a;
              this.j = new w.Set();
              this.l = {};
            },
            Fy = function (a, b, c) {
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
                var d = {}, e = _.E(a.pubads.l), f = e.next();
                !f.done;
                d = { Pa: d.Pa }, f = e.next()
              )
                (d.Pa = f.value),
                  a.j.has(d.Pa) ||
                    (a.j.add(d.Pa),
                    _.R(
                      d.Pa,
                      (function (g) {
                        return function () {
                          return void a.j.delete(g.Pa);
                        };
                      })(d)
                    ),
                    b.push(d.Pa));
              return b;
            };
          Ey.prototype.display = function (a, b) {
            var c = Fy(this, a, b);
            Gy(this.pubads, c, a, { Ca: 1 });
            a = b.getSlotId().getAdUnitPath();
            if ((b = this.l[a]) && !_.u(319)) {
              b = _.E(b);
              for (c = b.next(); !c.done; c = b.next())
                (c = c.value), Gy(this.pubads, c.j, c.l, c.options);
              delete this.l[a];
            }
          };
          var Iy = function (a, b, c, d) {
              var e = c[0],
                f = e ? e.getSlotId().getDomId() : '';
              if (_.u(319))
                Hy(a.pubads, xl(f), e),
                  Up(
                    a.pubads,
                    J(690, function () {
                      for (
                        var h = {}, k = _.E(c), l = k.next();
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
                      Gy(a.pubads, c, b, d);
                    })
                  );
              else if (a.pubads.j) {
                e = {};
                f = _.E(c);
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
                Gy(a.pubads, c, b, d);
              } else
                c.length && r(b.O, 6)
                  ? (Hy(a.pubads, xl(f), e),
                    (e = c[0].getSlotId().getAdUnitPath()),
                    (f = a.l[e] || []),
                    f.push(new Dy(c, b, d)),
                    (a.l[e] = f))
                  : Hy(a.pubads, vl(f), e);
            },
            Jy = function () {
              Tp.call(this);
              this.A = !1;
              _.u(84) &&
                _.u(87) &&
                (uv || (window.performance && rh(window.performance.now) && (uv = new xv())));
              this.o = new Ey(this);
            };
          _.M(Jy, Tp);
          _.q = Jy.prototype;
          _.q.Na = function () {
            return new hu(this, No);
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
            up(this);
            b = lq(a, b, e);
            a = b.slot;
            b = b.Ka;
            a &&
              b &&
              (f && !e && (f.id = a.getSlotId().getDomId()),
              this.Da(a, b),
              D(b, 7, d),
              pq(f || a.getSlotId().getDomId()));
          };
          _.q.Xb = function () {
            const $___old_ab91c39177118284 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_ab91c39177118284)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_72d79cce1b679685.localStorage
                ));
              return function () {
                var a = Tn.D().j;
                if (r(a, 6) || _.u(320)) {
                  Ky(this, a);
                  for (var b = _.E(this.l), c = b.next(); !c.done; c = b.next()) Ly(this, c.value);
                }
                eu(this, a);
                if (!(_.u(497) || _.Zj(221) || _.u(453) || (_.u(446) && !_.Zj(254)))) {
                  a = Ac().encryptedSignalSource || (Ac().encryptedSignalSource = {});
                  b = null;
                  try {
                    b = window.localStorage;
                  } catch (d) {}
                  Cb(a, _.Lj(1918), b, function (d, e) {
                    sk(d, e);
                    window.console && window.console.error && window.console.error(e);
                  });
                }
                Fc();
              }.apply(this, arguments);
            } finally {
              if ($___old_ab91c39177118284)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_ab91c39177118284));
            }
          };
          _.q.aa = function () {
            return 'publisher_ads';
          };
          _.q.Da = function (a, b) {
            var c = this;
            r(b, 17) || Ly(this, a);
            var d = a.getSlotId(),
              e = C(b, 20);
            Zo(Xo.D(), Vo, { slotId: d, vb: e });
            yk(d, Bk).then(
              J(701, function (f) {
                var g = f.detail;
                f = g.makeRewardedVisible;
                g = g.payload;
                return void Vp(c, 'rewardedSlotReady', new Kp(Oc(a), c.aa(), f, g));
              })
            );
            yk(d, Ck).then(
              J(702, function (f) {
                f = f.detail;
                return void Vp(c, 'rewardedSlotGranted', new Lp(Oc(a), c.aa(), f));
              })
            );
            yk(d, Dk).then(
              J(703, function (f) {
                f = f.detail;
                _.u(416) || Vp(c, 'rewardedSlotCanceled', new Mp(Oc(a), c.aa()));
                Vp(c, 'rewardedSlotClosed', new Np(Oc(a), c.aa()));
                Zx(fu(), [a], f.O, f.P);
              })
            );
            yk(d, Ek).then(
              J(704, function () {
                return void Vp(c, 'rewardedSlotCompleted', new Op(Oc(a), c.aa()));
              })
            );
            e = function () {
              return Vp(c, 'slotRequested', new Pp(Oc(a), c.aa()));
            };
            _.u(469) ? xk(d, Jk, e) : _.R(a, hc(So, d, 705, e));
            _.R(
              a,
              hc(ic, d, 708, function (f) {
                var g = f.size,
                  h = f.slotContentChanged,
                  k = f.isEmpty;
                f = new Fp(Oc(a), 'publisher_ads');
                k && (f.isEmpty = k);
                h && (f.slotContentChanged = h);
                h = Oc(a).getResponseInformation();
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
                Vp(c, 'slotRenderEnded', f);
              })
            );
            xk(d, Fk, function () {
              return void Vp(c, 'slotResponseReceived', new Qp(Oc(a), c.aa()));
            });
            xk(
              d,
              Hk,
              J(710, function () {
                return void Vp(c, 'slotOnload', new Ip(Oc(a), c.aa()));
              })
            );
            xk(d, Ik, function () {
              return Vp(c, 'impressionViewable', new Gp(Oc(a), c.aa()));
            });
            _.R(
              a,
              hc(To, d, 716, function (f) {
                return Vp(c, 'slotVisibilityChanged', new Hp(Oc(a), c.aa(), f));
              })
            );
            xk(d, zk, function () {
              var f = Tn.D().j;
              f = so(f, Vn());
              py(fu(), [a], { Ca: 2 }, f);
            });
            Tp.prototype.Da.call(this, a, b);
          };
          _.q.lc = function (a, b) {
            up(this);
            Ky(this, a.O);
            Ly(this, b);
            this.log.info(rl());
            var c = r(a.O, 6),
              d = _.u(499) ? dp.D().Ia(b.getSlotId()) : b.Ia();
            !lp(dp.D(), b.getSlotId()) ||
              (!c && d) ||
              (c && (fu(), (c = Oa(b, document)) && b.getSlotId().dispatchEvent(Ak, 778, c)),
              r(a.O, 4) && yy(fu(), b, a.O, a.P[b.getSlotId().getDomId()]),
              this.o.display(a, b));
          };
          var Ly = function (a, b) {
              a.j && hp(dp.D(), b);
              if (a.j && !_.u(495) && ((a = b.getSlotId()), (b = Wn(Tn.D(), a.getDomId())))) {
                b = G(b, un, 3);
                b = _.E(b);
                for (var c = b.next(); !c.done; c = b.next()) {
                  c = c.value;
                  var d = C(c, 2);
                  if ((c = vn(c)) && d && d.length && lp(dp.D(), a)) {
                    var e = dp.D();
                    d = d[0];
                    (e = e.j.get(a)) && Po(e.uc, c, d);
                  }
                }
              }
            },
            Ky = function (a, b) {
              if (!_.u(495) && (_.u(148) || !a.A) && a.j)
                for (a.A = !0, a = G(b, un, 14), a = _.E(a), b = a.next(); !b.done; b = a.next()) {
                  var c = b.value;
                  b = C(c, 2);
                  if ((c = vn(c)) && b && b.length) {
                    var d = dp.D();
                    Po(d.l, c, b[0]);
                  }
                }
            },
            cu = function (a, b, c) {
              if ('string' !== typeof b || 0 >= b.length || !c)
                return (
                  a.log.L(Vk('PubAdsService.definePassback', [b, c])), { slot: null, Ka: null }
                );
              c = lq(b, c, void 0, !0);
              b = c.slot;
              c = c.Ka;
              if (!b || !c) return { slot: null, Ka: null };
              D(c, 17, !0);
              return { slot: new jw(b, a, c), Ka: c };
            },
            kw = function (a, b, c) {
              up(a);
              hp(dp.D(), c);
              a.o.display(b, c);
            },
            du = function (a, b, c, d) {
              var e = My(a, c);
              if (e.length) {
                if (_.u(104)) {
                  up(a);
                  c = _.E(c);
                  for (var f = c.next(); !f.done; f = c.next()) {
                    f = f.value;
                    var g = b.P[f.getSlotId().getDomId()];
                    a.Da(f, g);
                  }
                }
                Iy(a.o, b, e, d || { Ca: 2 });
              } else
                a.log.L(
                  Vk(
                    'PubAdsService.refresh',
                    [c].filter(function (h) {
                      return void 0 !== h;
                    })
                  )
                );
            },
            Gy = function (a, b, c, d) {
              a.log.info(yl());
              if (Ny(b, d, c) && 1 !== d.Ca)
                for (a = _.E(b), b = a.next(); !b.done; b = a.next())
                  (b = b.value.getSlotId()),
                    (d = C(c.P[b.getDomId()], 20)),
                    Zo(Xo.D(), Wo, { slotId: b, vb: d });
            },
            Ny = function (a, b, c) {
              a = a.filter(function (e) {
                return lp(dp.D(), e.getSlotId());
              });
              var d = a.filter(function (e) {
                return _.ip(dp.D(), e.getSlotId());
              });
              if (!d.length) return null;
              py(fu(), d, b, c);
              return a;
            },
            gu = function (a, b) {
              return a.j ? { vid: C(b, 22) || '', cmsid: C(b, 23) || '' } : null;
            },
            eu = function (a, b) {
              r(b, 21) && a.j && (fu().A = Oh());
            },
            Oy = function (a, b, c, d) {
              a = b
                ? My(a, b)
                : $p(aq.D()).filter(function (f) {
                    return lp(dp.D(), f.getSlotId());
                  });
              b = _.E(a);
              for (var e = b.next(); !e.done; e = b.next())
                (e = e.value.getSlotId()), ep(dp.D(), e), $o(Xo.D(), jc, e, e);
              return Zx(fu(), a, c, d);
            };
          Jy.prototype.clear = function (a, b, c) {
            if (!this.j) return (a = c ? c[0] : void 0), this.log.L(wl(), a), !1;
            var d = null;
            if (c && ((d = My(this, c)), 0 == d.length))
              return (
                this.log.L(
                  Vk(
                    'PubAdsService.clear',
                    [c].filter(function (e) {
                      return void 0 !== e;
                    })
                  )
                ),
                !1
              );
            this.log.info(zl());
            return Oy(this, d, a, b);
          };
          var My = function (a, b) {
            var c = [];
            if (!Array.isArray(b)) return c;
            b.forEach(function (d, e) {
              (d = Tj(d, No)) && !d.fa ? c.push(d) : a.log.L(Cl(String(e)));
            });
            return c;
          };
          Jy.prototype.destroySlots = function (a) {
            var b = Tp.prototype.destroySlots.call(this, a);
            if (!b.length) return b;
            if (this.j) {
              var c = Tn.D().j;
              Oy(this, a, c, Vn());
            }
            return b;
          };
          var Hy = function (a, b, c) {
            a.log.L(b, c);
          };
          zd(Jy);
          var Py = function (a, b) {
            if ('script' === a.tagName.toLowerCase())
              throw Error('Use setTextContent with a SafeScript.');
            var c;
            if (null === (c = xa()) || void 0 === c || !c.isHTML(b))
              if (b instanceof Aa) b = b.j;
              else throw Error('wrong type');
            a.innerHTML = b;
          };
          var Qy = void 0;
          var Zy = function (a, b) {
            vp.call(this, a);
            var c = this;
            this.set = S(576, function (d, e) {
              a.set(d, e);
              return c;
            });
            this.get = S(577, function (d) {
              return a.get(d);
            });
            this.getAttributeKeys = S(578, function () {
              return bh(a.A);
            });
            this.display = S(558, function (d, e, f, g) {
              return a.display(d, e, void 0 === f ? '' : f, void 0 === g ? '' : g);
            });
            this.notifyUnfilledSlots = S(69, function (d) {
              a.Va && Ry(a, Sy(a, d));
            });
            this.isRoadblockingSupported = S(111, function () {
              return Ty(a);
            });
            this.refreshAllSlots = S(60, function () {
              a.Va && Ry(a);
            });
            this.setVideoSession = S(61, function (d, e, f) {
              a.I = d;
              a.F = e;
              a.H = f;
            });
            this.getDisplayAdsCorrelator = S(62, function (d) {
              return Uy(a, void 0 === d ? '' : d);
            });
            this.getVideoStreamCorrelator = S(63, function () {
              if (Jy.D().j) {
                var d = fu().A;
                d = isNaN(d) ? 0 : d;
              } else d = 0;
              return d;
            });
            this.isSlotAPersistentRoadblock = S(64, function (d) {
              d = Tj(d, b);
              return !!d && Vy(a, d);
            });
            this.onImplementationLoaded = S(65, function () {
              a.log.info(ql('GPT CompanionAds'));
            });
            this.fillSlot = S(66, function (d, e) {
              d = Tj(d, b);
              var f;
              if ((f = !!d))
                d && kq(d) && e && 'string' === typeof e
                  ? ((Wy(a, d).content = e), (f = Xy(a, d)))
                  : (f = !1);
              return f;
            });
            this.slotRenderEnded = S(67, function (d, e, f) {
              return (d = Tj(d, b)) && Yy(a, d, e, f);
            });
            this.setRefreshUnfilledSlots = S(59, function (d) {
              'boolean' === typeof d && (a.Va = d);
            });
          };
          _.M(Zy, vp);
          var az = function (a, b) {
            vp.call(this, a);
            this.setContent = S(72, function (c, d) {
              return (c = Tj(c, b)) && $y(a, c, d);
            });
            this.display = S(562, function (c, d, e, f) {
              return a.display(c, d, void 0 === e ? '' : e, void 0 === f ? '' : f);
            });
          };
          _.M(az, vp);
          var bz = function () {
            Tp.apply(this, arguments);
          };
          _.M(bz, Tp);
          bz.D = function () {
            throw Error('Must be overridden');
          };
          var cz = function () {
            bz.apply(this, arguments);
            this.o = new w.Map();
            this.A = {};
            this.Va = !1;
            this.I = 0;
            this.H = this.F = void 0;
            this.J = this.K = !1;
          };
          _.M(cz, bz);
          cz.D = bz.D;
          _.q = cz.prototype;
          _.q.Na = function () {
            return new Zy(this, No);
          };
          _.q.set = function (a, b) {
            'string' === typeof a && a.length
              ? ((this.A[a] = b), this.log.info(ml(a, String(b), this.aa())))
              : this.log.L(Vk('CompanionAdsService.set', [a, b]));
            return this;
          };
          _.q.get = function (a) {
            var b;
            return null !== (b = this.A[a]) && void 0 !== b ? b : null;
          };
          _.q.display = function (a, b, c, d) {
            c = void 0 === c ? '' : c;
            d = void 0 === d ? '' : d;
            up(this);
            b = lq(a, b, c);
            a = b.slot;
            b = b.Ka;
            this.Da(a, b);
            D(b, 7, d);
            pq(a.getSlotId().getDomId());
          };
          _.q.Da = function (a, b) {
            var c = this;
            xk(a.getSlotId(), Fk, function (d) {
              r(d.detail, 11) && (Wy(c, a).j = !0);
            });
            bz.prototype.Da.call(this, a, b);
          };
          _.q.Xb = function () {
            dz(this);
          };
          var Ty = function (a) {
              if (!Jy.D().j) return !1;
              var b = Jy.D().l;
              a = a.l;
              return b.length !== a.length
                ? !1
                : !a.some(function (c) {
                    return !_.y(b, 'includes').call(b, c);
                  });
            },
            Uy = function (a, b) {
              (b = void 0 === b ? '' : b) &&
                !a.J &&
                qc('ima_sdk_v', function (d) {
                  a.J = !0;
                  K(d, 'v', b);
                });
              var c = Tn.D().j;
              return String(C(c, 26));
            },
            Ry = function (a, b) {
              var c = Tn.D().j,
                d = Vn();
              if (Jy.D().j) {
                var e = { Ca: 3 };
                void 0 !== a.I && (e.za = a.I);
                a.F && (e.Ea = a.F);
                a.H && (e.Fa = a.H);
                a = null !== b && void 0 !== b ? b : a.l;
                c = so(c, d);
                (e.za && 'number' !== typeof e.za) ||
                  (e.Ea && 'number' !== typeof e.Ea) ||
                  (e.Fa && 'number' !== typeof e.Fa) ||
                  du(Jy.D(), c, a, e);
              } else b && b[0] && a.log.error(vl(b[0].getSlotId().getDomId()));
            },
            Vy = function (a, b) {
              var c;
              return Jy.D().j && kq(b)
                ? ((a = a.o.get(b.getSlotId())),
                  null !== (c = null === a || void 0 === a ? void 0 : a.j) && void 0 !== c
                    ? c
                    : !1)
                : !1;
            },
            Sy = function (a, b) {
              return b
                .map(function (c) {
                  return _.y(a.l, 'find').call(a.l, function (d) {
                    return d.getSlotId().toString() === c;
                  });
                })
                .filter(function (c) {
                  return !!c;
                });
            };
          cz.prototype.aa = function () {
            return 'companion_ads';
          };
          var dz = function (a) {
              Mc(
                70,
                function () {
                  if (!a.K) {
                    var b = document;
                    a.log.info(pl('GPT CompanionAds'));
                    Yg(
                      b,
                      fe(
                        Ia(Ha('https://pagead2.googlesyndication.com/pagead/show_companion_ad.js'))
                      )
                    );
                    a.K = !0;
                  }
                },
                function (b, c) {
                  sk(b, c);
                }
              );
            },
            Xy = function (a, b) {
              if (!a.j || Vy(a, b)) return !1;
              var c = Oa(b);
              if (!c) return !1;
              var d = (a.o.get(b.getSlotId()) || {}).content;
              if (void 0 === d) return !1;
              a.o.delete(b.getSlotId());
              Py(c, Da(d));
              d = c = null;
              var e = Wn(Tn.D(), b.getSlotId().getDomId());
              e &&
                1 === G(e, yn, 5).length &&
                Xf(G(e, yn, 5)[0], 1) &&
                Xf(G(e, yn, 5)[0], 2) &&
                ((c = C(G(e, yn, 5)[0], 1)), (d = C(G(e, yn, 5)[0], 2)));
              Yy(a, b, c, d);
              return !0;
            };
          cz.prototype.lc = function (a, b) {
            Xy(this, b);
          };
          var Yy = function (a, b, c, d) {
              b = new Fp(Oc(b), a.aa());
              null != c && null != d && (b.size = [c, d]);
              Vp(a, 'slotRenderEnded', b);
            },
            Wy = function (a, b) {
              var c = a.o.get(b.getSlotId());
              c ||
                ((c = {}),
                a.o.set(b.getSlotId(), c),
                _.R(b, function () {
                  return a.o.delete(b.getSlotId());
                }));
              return c;
            };
          zd(cz);
          var ez = function () {
            Tp.apply(this, arguments);
          };
          _.M(ez, Tp);
          ez.D = function () {
            throw Error('Must be overridden');
          };
          var fz = function () {
            ez.apply(this, arguments);
            this.o = new w.Map();
          };
          _.M(fz, ez);
          fz.D = ez.D;
          fz.prototype.Na = function () {
            return new az(this, No);
          };
          fz.prototype.aa = function () {
            return 'content';
          };
          fz.prototype.display = function (a, b, c, d) {
            c = void 0 === c ? '' : c;
            d = void 0 === d ? '' : d;
            up(this);
            b = lq(a, b, c);
            a = b.slot;
            b = b.Ka;
            this.Da(a, b);
            D(b, 7, d);
            pq(a.getSlotId().getDomId());
          };
          fz.prototype.destroySlots = function (a) {
            a = ez.prototype.destroySlots.call(this, a);
            for (var b = _.E(a), c = b.next(); !c.done; c = b.next())
              this.o.delete(c.value.getSlotId());
            return a;
          };
          var gz = function (a, b) {
            var c = a.o.get(b.getSlotId()),
              d = Oa(b);
            !(c && void 0 !== c.content && d && a.j) ||
              (c && c.Nc) ||
              ((c.Nc = !0),
              Py(d, Da(c.content)),
              qc('gpt_cont_svc', function (e) {
                var f;
                K(
                  e,
                  'cl',
                  String(
                    null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f
                      ? void 0
                      : f.length
                  )
                );
                Dc(e, [b]);
              }),
              Vp(a, 'slotRenderEnded', new Fp(Oc(b), a.aa())));
          };
          fz.prototype.Xb = function () {};
          fz.prototype.lc = function (a, b) {
            gz(this, b);
          };
          var $y = function (a, b, c) {
            if (kq(b) && 'string' === typeof c && c.length) {
              var d = a.o.get(b.getSlotId());
              d ? (d.content = c) : a.o.set(b.getSlotId(), { content: c, Nc: void 0 });
              _.R(b, function () {
                return void a.o.delete(b.getSlotId());
              });
              gz(a, b);
            }
          };
          zd(fz);
          var hz = function () {
            this.j = function () {};
          };
          zd(hz);
          var iz = function () {
            var a = Cp.D();
            hz.D().j(a);
          };
          var jz = function () {
            var a = void 0,
              b = 2;
            if (void 0 === a) {
              var c = void 0 === c ? _.I : c;
              a = c.ggeac || (c.ggeac = {});
            }
            b = void 0 === b ? 0 : b;
            c = a;
            var d = b;
            d = void 0 === d ? 0 : d;
            Ej(Dj.D(), c, d);
            c = a;
            b = void 0 === b ? 0 : b;
            Jj(Ij.D(), c, b);
            hz.D().j = Cj(Bj, a);
            Ij.D().j();
          };
          var Ic = new w.Set(),
            kz = function () {
              _.Q.call(this);
              this.J = this.N = this.R = this.j = this.F = this.A = this.o = 0;
              this.K = !1;
              this.H = this.m = this.l = 0;
              var a = document.querySelector('[data-google-query-id]');
              this.T = a ? a.getAttribute('data-google-query-id') : null;
              this.C = null;
              this.U = !1;
              this.I = function () {};
            };
          _.M(kz, _.Q);
          var mz = function () {
            var a = new kz();
            if (_.u(203) && !window.google_plmetrics && window.PerformanceObserver) {
              window.google_plmetrics = !0;
              for (
                var b = _.E([
                    'layout-shift',
                    'largest-contentful-paint',
                    'first-input',
                    'longtask',
                  ]),
                  c = b.next();
                !c.done;
                c = b.next()
              )
                (c = c.value), a.ub().observe({ type: c, buffered: !_.u(240) });
              lz(a);
            }
          };
          kz.prototype.ub = function () {
            var a = this;
            this.C ||
              (this.C = new PerformanceObserver(
                lt(640, function (b) {
                  var c = !1;
                  b = _.E(b.getEntries());
                  for (var d = b.next(); !d.done; d = b.next())
                    switch (((d = d.value), d.entryType)) {
                      case 'layout-shift':
                        if (!c) {
                          try {
                            if ('undefined' !== typeof googletag && googletag.pubads) {
                              var e = googletag.pubads();
                              Ic.clear();
                              for (var f = _.E(e.getSlots()), g = f.next(); !g.done; g = f.next())
                                Ic.add(g.value.getSlotId().getDomId());
                            }
                          } catch (l) {}
                          c = !0;
                        }
                        if (!d.hadRecentInput && (!_.u(241) || 0.01 < d.value)) {
                          a.o += Number(d.value);
                          Number(d.value) > a.A && (a.A = Number(d.value));
                          a.F += 1;
                          a: {
                            if (d.sources) {
                              var h = _.E(d.sources);
                              for (var k = h.next(); !k.done; k = h.next())
                                if (Kc(k.value.node)) {
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
                        a.K = !0;
                        break;
                      case 'longtask':
                        (a.l += d.duration), d.duration > a.m && (a.m = d.duration), (a.H += 1);
                    }
                })
              ));
            return this.C;
          };
          var lz = function (a) {
            var b = lt(641, function () {
                2 == _.Vm(document) && nz(a);
              }),
              c = lt(641, function () {
                return void nz(a);
              });
            document.addEventListener('visibilitychange', b);
            document.addEventListener('unload', c);
            var d = _.v(1905),
              e;
            0 < d && (e = setTimeout(c, 1000 * d));
            a.I = function () {
              document.removeEventListener('visibilitychange', b);
              document.removeEventListener('unload', c);
              a.ub().disconnect();
              e && clearTimeout(e);
            };
          };
          kz.prototype.B = function () {
            _.Q.prototype.B.call(this);
            this.I();
          };
          var nz = function (a) {
            if (!a.U) {
              a.U = !0;
              a.ub().takeRecords();
              var b = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
              window.LayoutShift &&
                ((b += '&cls=' + a.o.toFixed(3)),
                (b += '&mls=' + a.A.toFixed(3)),
                (b += Hc('nls', a.F)),
                window.LayoutShiftAttribution &&
                  ((b += '&cas=' + a.j.toFixed(3)), (b += Hc('nas', a.R))));
              window.LargestContentfulPaint && (b += Hc('lcp', a.N));
              window.PerformanceEventTiming && a.K && (b += Hc('fid', a.J));
              window.PerformanceLongTaskTiming &&
                ((b += Hc('cbt', a.l)), (b += Hc('mbt', a.m)), (b += Hc('nlt', a.H)));
              for (
                var c = 0, d = _.E(document.getElementsByTagName('iframe')), e = d.next();
                !e.done;
                e = d.next()
              )
                Jc(e.value) && c++;
              b += Hc('nif', c);
              c = window.google_unique_id;
              b += Hc('ifi', 'number' === typeof c ? c : 0);
              c = Hj();
              b += '&eid=' + encodeURIComponent(c.join());
              b += '&top=' + (_.I === _.I.top ? 1 : 0);
              b += a.T ? '&qqid=' + encodeURIComponent(a.T) : Hc('pvsid', Sb(_.I));
              window.fetch(b, {
                keepalive: !0,
                credentials: 'include',
                redirect: 'follow',
                method: 'get',
                mode: 'no-cors',
              });
              a.Aa();
            }
          };
          var oz = function () {
            var a = Bc.D();
            this.getAllEvents = S(563, function () {
              return Cx ? di(a.j).slice() : [];
            });
            this.getEventsBySlot = S(565, function (b) {
              return Cx ? Pk(a, b).slice() : [];
            });
            this.getEventsByLevel = S(566, function (b) {
              return Cx ? Qk(a, b).slice() : [];
            });
          };
          _.M(oz, Sj);
          var pz = function (a, b) {
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
            qz = function () {
              var a = this,
                b = [],
                c = [],
                d = Bc.D();
              this.addSize = J(88, function (e, f) {
                var g;
                (g = !Zn(e)) || (g = !(Yn(f) || (Array.isArray(f) && f.every(Yn))));
                if (g) return c.push([e, f]), d.L(Vk('SizeMappingBuilder.addSize', [e, f])), a;
                b.push([e, f]);
                return a;
              });
              this.build = J(89, function () {
                if (c.length) return d.L(kl(Bo(c))), null;
                ma(b, pz);
                return b;
              });
            };
          var Lc = new w.Map([
            ['Interstitial', 5],
            ['TopAnchor', 2],
            ['BottomAnchor', 3],
          ]);
          var rz = function () {
            var a = new Iq(),
              b = new Jq(),
              c = Sb(_.I);
            cg(a, 1, c, 0);
            c = Hj().join();
            cg(a, 5, c, '');
            cg(a, 2, 1, 0);
            gg(b, 1, a);
            a = Hq();
            c = _.u(77);
            a = dg(a, 8, c);
            c = _.u(78);
            a = dg(a, 9, c);
            a = dg(a, 10, !0);
            c = _.u(80);
            a = dg(a, 13, c);
            c = _.u(81);
            a = dg(a, 14, c);
            a = dg(a, 16, !0);
            gg(b, 2, a);
            window.google_rum_config = b.la;
          };
          var sz = J(
              297,
              function () {
                var a = _.u(437)
                  ? [].concat(_.Yb(document.getElementsByTagName('script')))
                  : _.y(Array, 'from').call(Array, document.getElementsByTagName('script'));
                a = _.E(a);
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
                    d = void 0;
                    var e = c.textContent;
                    c = void 0;
                    e = Fa(e, null === (d = za()) || void 0 === d ? void 0 : d.createScript(e));
                    if (null === (c = xa()) || void 0 === c ? 0 : c.isScript(e)) d = e;
                    else if (e instanceof Ea) d = e.j;
                    else throw Error('wrong type');
                    b.textContent = d;
                    d = b.ownerDocument && b.ownerDocument.defaultView;
                    !d || ('undefined' !== typeof window && d === window)
                      ? (void 0 === Qy && (Qy = Gc(document)), (d = Qy))
                      : (d = Gc(d.document));
                    d && b.setAttribute('nonce', d);
                    document.head.appendChild(b);
                    document.head.removeChild(b);
                  }
                }
              },
              function (a, b) {
                sk(a, b);
                window.console && window.console.error && window.console.error(b);
              }
            ),
            tz = function () {
              var a = window,
                b = new Bs(a),
                c = new Hs(a),
                d = new qs(a);
              qc(
                'cmpMet',
                function (e) {
                  Dc(e);
                  K(e, 'fc', b.j ? 1 : 0);
                  K(e, 'tcfv1', a.__cmp ? 1 : 0);
                  K(e, 'tcfv2', Js(c) ? 1 : 0);
                  K(e, 'usp', ss(d) ? 1 : 0);
                  K(e, 'ptt', 17);
                },
                { ya: _.v(61) }
              );
            },
            uz = function () {
              var a = Qb();
              uu = _.fj();
              try {
                jz(), iz(), Gj(13), Gj(3);
              } catch (g) {
                tk(408, g, !0);
              }
              if (_.u(430) && window.performance && window.performance.mark) {
                performance.mark('gpt-tag-load');
                if (!_.u(469))
                  var b = bp(
                    Xo.D(),
                    So,
                    776,
                    _.Pd(function () {
                      performance.mark('gpt-first-ad-request');
                      b();
                    })
                  );
                var c = bp(
                  Xo.D(),
                  ic,
                  777,
                  _.Pd(function () {
                    performance.mark('gpt-first-ad-render');
                    c();
                  })
                );
              }
              try {
                var d = pc(a);
                _.Rv.D().B = d;
                _.v(61) && tz();
                Jv();
                zc('defineOutOfPageSlot', oq);
                zc('defineSlot', mq);
                zc('defineUnit', mq);
                zc('destroySlots', nq);
                zc('getWindowsThatCanCommunicateWithHostpageLibrary', fq);
                zc('display', pq);
                yp();
                zc('getVersion', Qb);
                zc(
                  'companionAds',
                  S(816, function () {
                    return Oc(cz.D());
                  })
                );
                zc(
                  'content',
                  S(817, function () {
                    return Oc(fz.D());
                  })
                );
                zc('pubads', function () {
                  return Oc(Jy.D());
                });
                zc('setAdIframeTitle', S(729, iw));
                zc('getEventLog', function () {
                  return new oz();
                });
                zc(
                  'sizeMapping',
                  J(90, function () {
                    return new qz();
                  })
                );
                zc(
                  'enableServices',
                  J(91, function () {
                    for (var g = _.E(Sp), h = g.next(); !h.done; h = g.next())
                      (h = h.value), h.j && Bc.D().info(nl()), up(h);
                  })
                );
                zc('apiReady', !0);
                var e = function () {
                  Qc();
                  gm();
                };
                Ac().fifWin && 'complete' != document.readyState
                  ? Pj(window, function () {
                      window.setTimeout(e, 0);
                    })
                  : e();
                sz();
                if (_.u(84) || fk.D().j) rz(), Yg(document, fe(Ia(_.u(188) ? d.Dd : d.Ed)));
                if (_.u(346) && wd()) {
                  var f = new mk('gpt_nonce_csp');
                  Dc(f);
                  ok(f);
                }
              } catch (g) {
                tk(106, g);
              }
              if (_.u(435))
                try {
                  mz();
                } catch (g) {}
            };
          if (window.googletag.evalScripts) window.googletag.evalScripts();
          else {
            var vz = window,
              wz = _.gj(vz);
            if (wz) {
              var xz = { label: '2', type: 9, value: wz },
                yz = (vz.google_js_reporting_queue = vz.google_js_reporting_queue || []);
              2048 > yz.length && yz.push(xz);
            }
            zc('evalScripts', function () {
              sz();
            });
            uz();
          }
        }.apply(this, arguments);
      } finally {
        if ($___old_748a23bdf7c745b6)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_748a23bdf7c745b6
          ));
      }
    }.call(this, {}));
  })();
}
