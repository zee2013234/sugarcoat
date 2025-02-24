var e;
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
  (function () {
    var $___var_960d1395054f44db = (function () {
      'use strict';
      function e (t) {
        return (e =
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
              })(t);
      }
      function t (e, t, n) {
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
      function n () {
        return {
          callbacks: {},
          add: function (e, t) {
            this.callbacks[e] = this.callbacks[e] || [];
            var n = this.callbacks[e].push(t) - 1,
              i = this;
            return function () {
              i.callbacks[e].splice(n, 1);
            };
          },
          execute: function (e, t) {
            if (this.callbacks[e]) {
              (t = void 0 === t ? [] : t), (t = t instanceof Array ? t : [t]);
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
          executeAll: function (e, t) {
            (t || (e && !j.isObjectEmpty(e))) &&
              Object.keys(this.callbacks).forEach(function (t) {
                var n = void 0 !== e[t] ? e[t] : '';
                this.execute(t, n);
              }, this);
          },
          hasCallbacks: function () {
            return Boolean(Object.keys(this.callbacks).length);
          },
        };
      }
      function i (e, t, n) {
        var i = null == e ? void 0 : e[t];
        return void 0 === i ? n : i;
      }
      function r (e) {
        for (var t = /^\d+$/, n = 0, i = e.length; n < i; n++) if (!t.test(e[n])) return !1;
        return !0;
      }
      function a (e, t) {
        for (; e.length < t.length; ) e.push('0');
        for (; t.length < e.length; ) t.push('0');
      }
      function o (e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = parseInt(e[n], 10),
            r = parseInt(t[n], 10);
          if (i > r) return 1;
          if (r > i) return -1;
        }
        return 0;
      }
      function s (e, t) {
        if (e === t) return 0;
        var n = e.toString().split('.'),
          i = t.toString().split('.');
        return r(n.concat(i)) ? (a(n, i), o(n, i)) : NaN;
      }
      function l (e) {
        return e === Object(e) && 0 === Object.keys(e).length;
      }
      function c (e) {
        return 'function' == typeof e || (e instanceof Array && e.length);
      }
      function u () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function () {
                  return !0;
                };
        (this.log = _e('log', e, t)),
          (this.warn = _e('warn', e, t)),
          (this.error = _e('error', e, t));
      }
      function d () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.isEnabled,
          n = e.cookieName,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = i.cookies;
        return t && n && r
          ? {
              remove: function () {
                r.remove(n);
              },
              get: function () {
                var e = r.get(n),
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
                  r.set(n, JSON.stringify(e), {
                    domain: t.optInCookieDomain || '',
                    cookieLifetime: t.optInStorageExpiry || 34190000,
                    expires: !0,
                  });
              },
            }
          : { get: Le, set: Le, remove: Le };
      }
      function f (e) {
        (this.name = this.constructor.name),
          (this.message = e),
          'function' == typeof Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error(e).stack);
      }
      function p () {
        function e (e, t) {
          var n = Se(e);
          return n.length
            ? n.every(function (e) {
                return !!t[e];
              })
            : De(t);
        }
        function t () {
          M(b),
            O(ce.COMPLETE),
            _(h.status, h.permissions),
            m.set(h.permissions, { optInCookieDomain: l, optInStorageExpiry: c }),
            C.execute(xe);
        }
        function n (e) {
          return function (n, i) {
            if (!Ae(n))
              throw new Error(
                '[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.'
              );
            return O(ce.CHANGED), Object.assign(b, ye(Se(n), e)), i || t(), h;
          };
        }
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = i.doesOptInApply,
          a = i.previousPermissions,
          o = i.preOptInApprovals,
          s = i.isOptInStorageEnabled,
          l = i.optInCookieDomain,
          c = i.optInStorageExpiry,
          u = i.isIabContext,
          f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          p = f.cookies,
          g = Pe(a);
        Re(g, 'Invalid `previousPermissions`!'), Re(o, 'Invalid `preOptInApprovals`!');
        var m = d({ isEnabled: !!s, cookieName: 'adobeujs-optin' }, { cookies: p }),
          h = this,
          _ = le(h),
          C = ge(),
          I = Me(g),
          v = Me(o),
          S = m.get(),
          D = {},
          A = (function (e, t) {
            return ke(e) || (t && ke(t)) ? ce.COMPLETE : ce.PENDING;
          })(I, S),
          y = (function (e, t, n) {
            var i = ye(pe, !r);
            return r ? Object.assign({}, i, e, t, n) : i;
          })(v, I, S),
          b = be(y),
          O = function (e) {
            return (A = e);
          },
          M = function (e) {
            return (y = e);
          };
        (h.deny = n(!1)),
          (h.approve = n(!0)),
          (h.denyAll = h.deny.bind(h, pe)),
          (h.approveAll = h.approve.bind(h, pe)),
          (h.isApproved = function (t) {
            return e(t, h.permissions);
          }),
          (h.isPreApproved = function (t) {
            return e(t, v);
          }),
          (h.fetchPermissions = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t ? h.on(ce.COMPLETE, e) : Le;
            return (
              !r || (r && h.isComplete) || !!o
                ? e(h.permissions)
                : t ||
                  C.add(xe, function () {
                    return e(h.permissions);
                  }),
              n
            );
          }),
          (h.complete = function () {
            h.status === ce.CHANGED && t();
          }),
          (h.registerPlugin = function (e) {
            if (!e || !e.name || 'function' != typeof e.onRegister) throw new Error(je);
            D[e.name] || ((D[e.name] = e), e.onRegister.call(e, h));
          }),
          (h.execute = Ne(D)),
          Object.defineProperties(h, {
            permissions: {
              get: function () {
                return y;
              },
            },
            status: {
              get: function () {
                return A;
              },
            },
            Categories: {
              get: function () {
                return ue;
              },
            },
            doesOptInApply: {
              get: function () {
                return !!r;
              },
            },
            isPending: {
              get: function () {
                return h.status === ce.PENDING;
              },
            },
            isComplete: {
              get: function () {
                return h.status === ce.COMPLETE;
              },
            },
            __plugins: {
              get: function () {
                return Object.keys(D);
              },
            },
            isIabContext: {
              get: function () {
                return u;
              },
            },
          });
      }
      function g (e, t) {
        function n () {
          (r = null), e.call(e, new f('The call took longer than you wanted!'));
        }
        function i () {
          r && (clearTimeout(r), e.apply(e, arguments));
        }
        if (void 0 === t) return e;
        var r = setTimeout(n, t);
        return i;
      }
      function m () {
        if (window.__cmp) return window.__cmp;
        var e = window;
        if (e === window.top) return void Ie.error('__cmp not found');
        for (var t; !t; ) {
          e = e.parent;
          try {
            e.frames.__cmpLocator && (t = e);
          } catch (e) {}
          if (e === window.top) break;
        }
        if (!t) return void Ie.error('__cmp not found');
        var n = {};
        return (
          (window.__cmp = function (e, i, r) {
            var a = Math.random() + '',
              o = { __cmpCall: { command: e, parameter: i, callId: a } };
            (n[a] = r), t.postMessage(o, '*');
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
                var i = t.__cmpReturn;
                n[i.callId] && (n[i.callId](i.returnValue, i.success), delete n[i.callId]);
              }
            },
            !1
          ),
          window.__cmp
        );
      }
      function h () {
        var e = this;
        (e.name = 'iabPlugin'), (e.version = '0.0.1');
        var t = ge(),
          n = { allConsentData: null },
          i = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (n[e] = t);
          };
        (e.fetchConsentData = function (e) {
          var t = e.callback,
            n = e.timeout,
            i = g(t, n);
          r({ callback: i });
        }),
          (e.isApproved = function (e) {
            var t = e.callback,
              i = e.category,
              a = e.timeout;
            if (n.allConsentData)
              return t(
                null,
                s(i, n.allConsentData.vendorConsents, n.allConsentData.purposeConsents)
              );
            var o = g(function (e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.vendorConsents,
                a = n.purposeConsents;
              t(e, s(i, r, a));
            }, a);
            r({ category: i, callback: o });
          }),
          (e.onRegister = function (t) {
            var n = Object.keys(de),
              i = function (e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  r = i.purposeConsents,
                  a = i.gdprApplies,
                  o = i.vendorConsents;
                !e &&
                  a &&
                  o &&
                  r &&
                  (n.forEach(function (e) {
                    var n = s(e, o, r);
                    t[n ? 'approve' : 'deny'](e, !0);
                  }),
                  t.complete());
              };
            e.fetchConsentData({ callback: i });
          });
        var r = function (e) {
            var r = e.callback;
            if (n.allConsentData) return r(null, n.allConsentData);
            t.add('FETCH_CONSENT_DATA', r);
            var s = {};
            o(function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = e.purposeConsents,
                o = e.gdprApplies,
                l = e.vendorConsents;
              (arguments.length > 1 ? arguments[1] : void 0) &&
                ((s = { purposeConsents: r, gdprApplies: o, vendorConsents: l }),
                i('allConsentData', s)),
                a(function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (arguments.length > 1 ? arguments[1] : void 0) &&
                    ((s.consentString = e.consentData), i('allConsentData', s)),
                    t.execute('FETCH_CONSENT_DATA', [null, n.allConsentData]);
                });
            });
          },
          a = function (e) {
            var t = m();
            t && t('getConsentData', null, e);
          },
          o = function (e) {
            var t = Fe(de),
              n = m();
            n && n('getVendorConsents', t, e);
          },
          s = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = !!t[de[e]];
            return (
              i &&
              (function () {
                return fe[e].every(function (e) {
                  return n[e];
                });
              })()
            );
          };
      }
      var _ =
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
          for (var t, n, i = 1; i < arguments.length; ++i) {
            n = arguments[i];
            for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          }
          return e;
        };
      var C,
        I,
        v = { HANDSHAKE: 'HANDSHAKE', GETSTATE: 'GETSTATE', PARENTSTATE: 'PARENTSTATE' },
        S = {
          MCMID: 'MCMID',
          MCAID: 'MCAID',
          MCAAMB: 'MCAAMB',
          MCAAMLH: 'MCAAMLH',
          MCOPTOUT: 'MCOPTOUT',
          CUSTOMERIDS: 'CUSTOMERIDS',
        },
        D = {
          MCMID: 'getMarketingCloudVisitorID',
          MCAID: 'getAnalyticsVisitorID',
          MCAAMB: 'getAudienceManagerBlob',
          MCAAMLH: 'getAudienceManagerLocationHint',
          MCOPTOUT: 'isOptedOut',
          ALLFIELDS: 'getVisitorValues',
        },
        A = { CUSTOMERIDS: 'getCustomerIDs' },
        y = {
          MCMID: 'getMarketingCloudVisitorID',
          MCAAMB: 'getAudienceManagerBlob',
          MCAAMLH: 'getAudienceManagerLocationHint',
          MCOPTOUT: 'isOptedOut',
          MCAID: 'getAnalyticsVisitorID',
          CUSTOMERIDS: 'getCustomerIDs',
          ALLFIELDS: 'getVisitorValues',
        },
        b = { MC: 'MCMID', A: 'MCAID', AAM: 'MCAAMB' },
        O = {
          MCMID: 'MCMID',
          MCOPTOUT: 'MCOPTOUT',
          MCAID: 'MCAID',
          MCAAMLH: 'MCAAMLH',
          MCAAMB: 'MCAAMB',
        },
        M = { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 },
        k = { GLOBAL: 'global' },
        E = {
          MESSAGES: v,
          STATE_KEYS_MAP: S,
          ASYNC_API_MAP: D,
          SYNC_API_MAP: A,
          ALL_APIS: y,
          FIELDGROUP_TO_FIELD: b,
          FIELDS: O,
          AUTH_STATE: M,
          OPT_OUT: k,
        },
        T = E.STATE_KEYS_MAP,
        L = function (e) {
          function t () {}
          function n (t, n) {
            var i = this;
            return function () {
              var r = e(0, t),
                a = {};
              return (a[t] = r), i.setStateAndPublish(a), n(r), r;
            };
          }
          (this.getMarketingCloudVisitorID = function (e) {
            e = e || t;
            var i = this.findField(T.MCMID, e),
              r = n.call(this, T.MCMID, e);
            return void 0 !== i ? i : r();
          }),
            (this.getVisitorValues = function (e) {
              this.getMarketingCloudVisitorID(function (t) {
                e({ MCMID: t });
              });
            });
        },
        P = E.MESSAGES,
        R = E.ASYNC_API_MAP,
        w = E.SYNC_API_MAP,
        F = function () {
          function e () {}
          function t (e, t) {
            var n = this;
            return function () {
              return n.callbackRegistry.add(e, t), n.messageParent(P.GETSTATE), '';
            };
          }
          function n (n) {
            this[R[n]] = function (i) {
              i = i || e;
              var r = this.findField(n, i),
                a = t.call(this, n, i);
              return void 0 !== r ? r : a();
            };
          }
          function i (t) {
            this[w[t]] = function () {
              return this.findField(t, e) || {};
            };
          }
          Object.keys(R).forEach(n, this), Object.keys(w).forEach(i, this);
        },
        N = E.ASYNC_API_MAP,
        x = function () {
          Object.keys(N).forEach(function (e) {
            this[N[e]] = function (t) {
              this.callbackRegistry.add(e, t);
            };
          }, this);
        },
        j = (function (e, t) {
          return (t = { exports: {} }), e(t, t.exports), t.exports;
        })(function (t, n) {
          (n.isObjectEmpty = function (e) {
            return e === Object(e) && 0 === Object.keys(e).length;
          }),
            (n.isValueEmpty = function (e) {
              return '' === e || n.isObjectEmpty(e);
            }),
            (n.getIeVersion = function () {
              if (document.documentMode) return document.documentMode;
              for (var e = 7; e > 4; e--) {
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
            (n.encodeAndBuildRequest = function (e, t) {
              return e.map(encodeURIComponent).join(t);
            }),
            (n.isObject = function (t) {
              return null !== t && 'object' === e(t) && !1 === Array.isArray(t);
            }),
            (n.defineGlobalNamespace = function () {
              return (window.adobe = n.isObject(window.adobe) ? window.adobe : {}), window.adobe;
            }),
            (n.pluck = function (e, t) {
              return t.reduce(function (t, n) {
                return e[n] && (t[n] = e[n]), t;
              }, Object.create(null));
            }),
            (n.parseOptOut = function (e, t, n) {
              t ||
                ((t = n), e.d_optout && e.d_optout instanceof Array && (t = e.d_optout.join(',')));
              var i = parseInt(e.d_ottl, 10);
              return isNaN(i) && (i = 7200), { optOut: t, d_ottl: i };
            }),
            (n.normalizeBoolean = function (e) {
              var t = e;
              return 'true' === e ? (t = !0) : 'false' === e && (t = !1), t;
            });
        }),
        V =
          (j.isObjectEmpty,
          j.isValueEmpty,
          j.getIeVersion,
          j.encodeAndBuildRequest,
          j.isObject,
          j.defineGlobalNamespace,
          j.pluck,
          j.parseOptOut,
          j.normalizeBoolean,
          n),
        H = E.MESSAGES,
        U = { 0: 'prefix', 1: 'orgID', 2: 'state' },
        B = function (e, t) {
          (this.parse = function (e) {
            try {
              var t = {};
              return (
                e.data.split('|').forEach(function (e, n) {
                  if (void 0 !== e) {
                    t[U[n]] = 2 !== n ? e : JSON.parse(e);
                  }
                }),
                t
              );
            } catch (e) {}
          }),
            (this.isInvalid = function (n) {
              var i = this.parse(n);
              if (!i || Object.keys(i).length < 2) return !0;
              var r = e !== i.orgID,
                a = !t || n.origin !== t,
                o = -1 === Object.keys(H).indexOf(i.prefix);
              return r || a || o;
            }),
            (this.send = function (n, i, r) {
              var a = i + '|' + e;
              r && r === Object(r) && (a += '|' + JSON.stringify(r));
              try {
                n.postMessage(a, t);
              } catch (e) {}
            });
        },
        G = E.MESSAGES,
        Y = function (e, t, n, i) {
          function r (e) {
            Object.assign(p, e);
          }
          function a (e) {
            Object.assign(p.state, e),
              Object.assign(p.state.ALLFIELDS, e),
              p.callbackRegistry.executeAll(p.state);
          }
          function o (e) {
            if (!h.isInvalid(e)) {
              m = !1;
              var t = h.parse(e);
              p.setStateAndPublish(t.state);
            }
          }
          function s (e) {
            !m && g && ((m = !0), h.send(i, e));
          }
          function l () {
            r(new L(n._generateID)),
              p.getMarketingCloudVisitorID(),
              p.callbackRegistry.executeAll(p.state, !0),
              _.removeEventListener('message', c);
          }
          function c (e) {
            if (!h.isInvalid(e)) {
              var t = h.parse(e);
              (m = !1),
                _.clearTimeout(p._handshakeTimeout),
                _.removeEventListener('message', c),
                r(new F(p)),
                _.addEventListener('message', o),
                p.setStateAndPublish(t.state),
                p.callbackRegistry.hasCallbacks() && s(G.GETSTATE);
            }
          }
          function u () {
            g && postMessage
              ? (_.addEventListener('message', c),
                s(G.HANDSHAKE),
                (p._handshakeTimeout = setTimeout(l, 250)))
              : l();
          }
          function d () {
            _.s_c_in || ((_.s_c_il = []), (_.s_c_in = 0)),
              (p._c = 'Visitor'),
              (p._il = _.s_c_il),
              (p._in = _.s_c_in),
              (p._il[p._in] = p),
              _.s_c_in++;
          }
          function f () {
            function e (e) {
              0 !== e.indexOf('_') && 'function' == typeof n[e] && (p[e] = function () {});
            }
            Object.keys(n).forEach(e),
              (p.getSupplementalDataID = n.getSupplementalDataID),
              (p.isAllowed = function () {
                return !0;
              });
          }
          var p = this,
            g = t.whitelistParentDomain;
          (p.state = { ALLFIELDS: {} }),
            (p.version = n.version),
            (p.marketingCloudOrgID = e),
            (p.cookieDomain = n.cookieDomain || ''),
            (p._instanceType = 'child');
          var m = !1,
            h = new B(e, g);
          (p.callbackRegistry = V()),
            (p.init = function () {
              d(), f(), r(new x(p)), u();
            }),
            (p.findField = function (e, t) {
              if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e];
            }),
            (p.messageParent = s),
            (p.setStateAndPublish = a);
        },
        q = E.MESSAGES,
        X = E.ALL_APIS,
        W = E.ASYNC_API_MAP,
        J = E.FIELDGROUP_TO_FIELD,
        K = function (e, t) {
          function n () {
            var t = {};
            return (
              Object.keys(X).forEach(function (n) {
                var i = X[n],
                  r = e[i]();
                j.isValueEmpty(r) || (t[n] = r);
              }),
              t
            );
          }
          function i () {
            var t = [];
            return (
              e._loading &&
                Object.keys(e._loading).forEach(function (n) {
                  if (e._loading[n]) {
                    var i = J[n];
                    t.push(i);
                  }
                }),
              t.length ? t : null
            );
          }
          function r (t) {
            return function n (r) {
              var a = i();
              if (a) {
                var o = W[a[0]];
                e[o](n, !0);
              } else t();
            };
          }
          function a (e, i) {
            var r = n();
            t.send(e, i, r);
          }
          function o (e) {
            l(e), a(e, q.HANDSHAKE);
          }
          function s (e) {
            r(function () {
              a(e, q.PARENTSTATE);
            })();
          }
          function l (n) {
            function i (i) {
              r.call(e, i), t.send(n, q.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
            }
            var r = e.setCustomerIDs;
            e.setCustomerIDs = i;
          }
          return function (e) {
            if (!t.isInvalid(e)) {
              (t.parse(e).prefix === q.HANDSHAKE ? o : s)(e.source);
            }
          };
        },
        z = function (e, t) {
          function n (e) {
            return function (n) {
              (i[e] = n), r++, r === a && t(i);
            };
          }
          var i = {},
            r = 0,
            a = Object.keys(e).length;
          Object.keys(e).forEach(function (t) {
            var i = e[t];
            if (i.fn) {
              var r = i.args || [];
              r.unshift(n(t)), i.fn.apply(i.context || null, r);
            }
          });
        },
        Q = {
          get: function (e) {
            e = encodeURIComponent(e);
            var t = (';' + document.cookie).split(' ').join(';'),
              n = t.indexOf(';' + e + '='),
              i = n < 0 ? n : t.indexOf(';', n + 1);
            return n < 0
              ? ''
              : decodeURIComponent(t.substring(n + 2 + e.length, i < 0 ? t.length : i));
          },
          set: function (e, t, n) {
            var r = i(n, 'cookieLifetime'),
              a = i(n, 'expires'),
              o = i(n, 'domain'),
              s = i(n, 'secure'),
              l = s ? 'Secure' : '';
            if (a && 'SESSION' !== r && 'NONE' !== r) {
              var c = '' !== t ? parseInt(r || 0, 10) : -60;
              if (c) (a = new Date()), a.setTime(a.getTime() + 1000 * c);
              else if (1 === a) {
                a = new Date();
                var u = a.getYear();
                a.setYear(u + 2 + (u < 1900 ? 1900 : 0));
              }
            } else a = 0;
            return e && 'NONE' !== r
              ? ((document.cookie =
                  encodeURIComponent(e) +
                  '=' +
                  encodeURIComponent(t) +
                  '; path=/;' +
                  (a ? ' expires=' + a.toGMTString() + ';' : '') +
                  (o ? ' domain=' + o + ';' : '') +
                  l),
                this.get(e) === t)
              : 0;
          },
          remove: function (e, t) {
            var n = i(t, 'domain');
            (n = n ? ' domain=' + n + ';' : ''),
              (document.cookie =
                encodeURIComponent(e) + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' + n);
          },
        },
        $ = function (e) {
          var t;
          !e && _.location && (e = _.location.hostname), (t = e);
          var n,
            i = t.split('.');
          for (n = i.length - 2; n >= 0; n--)
            if (((t = i.slice(n).join('.')), Q.set('test', 'cookie', { domain: t })))
              return Q.remove('test', { domain: t }), t;
          return '';
        },
        Z = {
          compare: s,
          isLessThan: function (e, t) {
            return s(e, t) < 0;
          },
          areVersionsDifferent: function (e, t) {
            return 0 !== s(e, t);
          },
          isGreaterThan: function (e, t) {
            return s(e, t) > 0;
          },
          isEqual: function (e, t) {
            return 0 === s(e, t);
          },
        },
        ee = !!_.postMessage,
        te = {
          postMessage: function (e, t, n) {
            var i = 1;
            t &&
              (ee
                ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1'))
                : t && (n.location = t.replace(/#.*$/, '') + '#' + +new Date() + i++ + '&' + e));
          },
          receiveMessage: function (e, t) {
            var n;
            try {
              ee &&
                (e &&
                  (n = function (n) {
                    if (
                      ('string' == typeof t && n.origin !== t) ||
                      ('[object Function]' === Object.prototype.toString.call(t) &&
                        !1 === t(n.origin))
                    )
                      return !1;
                    e(n);
                  }),
                _.addEventListener
                  ? _[e ? 'addEventListener' : 'removeEventListener']('message', n)
                  : _[e ? 'attachEvent' : 'detachEvent']('onmessage', n));
            } catch (e) {}
          },
        },
        ne = function (e) {
          var t,
            n,
            i = '0123456789',
            r = '',
            a = '',
            o = 8,
            s = 10,
            l = 10;
          if (1 == e) {
            for (i += 'ABCDEF', t = 0; 16 > t; t++)
              (n = Math.floor(Math.random() * o)),
                (r += i.substring(n, n + 1)),
                (n = Math.floor(Math.random() * o)),
                (a += i.substring(n, n + 1)),
                (o = 16);
            return r + '-' + a;
          }
          for (t = 0; 19 > t; t++)
            (n = Math.floor(Math.random() * s)),
              (r += i.substring(n, n + 1)),
              0 === t && 9 == n
                ? (s = 3)
                : (1 == t || 2 == t) && 10 != s && 2 > n
                ? (s = 10)
                : 2 < t && (s = 10),
              (n = Math.floor(Math.random() * l)),
              (a += i.substring(n, n + 1)),
              0 === t && 9 == n
                ? (l = 3)
                : (1 == t || 2 == t) && 10 != l && 2 > n
                ? (l = 10)
                : 2 < t && (l = 10);
          return r + a;
        },
        ie = function (e, t) {
          return {
            corsMetadata: (function () {
              const $___old_0b110c4056778668 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                ),
                $___old_bbff302d289c96ee = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                );
              try {
                if ($___old_0b110c4056778668)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_afd3abb015d4d981.XMLHttpRequest
                  ));
                if ($___old_bbff302d289c96ee)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_afd3abb015d4d981.XMLHttpRequest
                  ));
                return function () {
                  var e = 'none',
                    t = !0;
                  return (
                    'undefined' != typeof XMLHttpRequest &&
                      XMLHttpRequest === Object(XMLHttpRequest) &&
                      ('withCredentials' in new XMLHttpRequest()
                        ? (e = 'XMLHttpRequest')
                        : 'undefined' != typeof XDomainRequest &&
                          XDomainRequest === Object(XDomainRequest) &&
                          (t = !1),
                      Object.prototype.toString.call(_.HTMLElement).indexOf('Constructor') > 0 &&
                        (t = !1)),
                    { corsType: e, corsCookiesEnabled: t }
                  );
                }.apply(this, arguments);
              } finally {
                if ($___old_0b110c4056778668)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_0b110c4056778668
                  ));
                if ($___old_bbff302d289c96ee)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_bbff302d289c96ee
                  ));
              }
            })(),
            getCORSInstance: function () {
              const $___old_93356a5534800a6a = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                ),
                $___old_db19aa13429c8845 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                );
              try {
                if ($___old_93356a5534800a6a)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_afd3abb015d4d981.XMLHttpRequest
                  ));
                if ($___old_db19aa13429c8845)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_afd3abb015d4d981.XMLHttpRequest
                  ));
                return function () {
                  return 'none' === this.corsMetadata.corsType
                    ? null
                    : new _[this.corsMetadata.corsType]();
                }.apply(this, arguments);
              } finally {
                if ($___old_93356a5534800a6a)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_93356a5534800a6a
                  ));
                if ($___old_db19aa13429c8845)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_db19aa13429c8845
                  ));
              }
            },
            fireCORS: function (t, n, i) {
              function r (e) {
                var n;
                try {
                  if ((n = JSON.parse(e)) !== Object(n))
                    return void a.handleCORSError(t, null, 'Response is not JSON');
                } catch (e) {
                  return void a.handleCORSError(t, e, 'Error parsing response as JSON');
                }
                try {
                  for (var i = t.callback, r = _, o = 0; o < i.length; o++) r = r[i[o]];
                  r(n);
                } catch (e) {
                  a.handleCORSError(t, e, 'Error forming callback function');
                }
              }
              var a = this;
              n && (t.loadErrorHandler = n);
              try {
                var o = this.getCORSInstance();
                o.open('get', t.corsUrl + '&ts=' + new Date().getTime(), !0),
                  'XMLHttpRequest' === this.corsMetadata.corsType &&
                    ((o.withCredentials = !0),
                    (o.timeout = e.loadTimeout),
                    o.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                    (o.onreadystatechange = function () {
                      4 === this.readyState && 200 === this.status && r(this.responseText);
                    })),
                  (o.onerror = function (e) {
                    a.handleCORSError(t, e, 'onerror');
                  }),
                  (o.ontimeout = function (e) {
                    a.handleCORSError(t, e, 'ontimeout');
                  }),
                  o.send(),
                  e._log.requests.push(t.corsUrl);
              } catch (e) {
                this.handleCORSError(t, e, 'try-catch');
              }
            },
            handleCORSError: function (t, n, i) {
              e.CORSErrors.push({ corsData: t, error: n, description: i }),
                t.loadErrorHandler &&
                  ('ontimeout' === i ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
            },
          };
        },
        re = {
          POST_MESSAGE_ENABLED: !!_.postMessage,
          DAYS_BETWEEN_SYNC_ID_CALLS: 1,
          MILLIS_PER_DAY: 86400000,
          ADOBE_MC: 'adobe_mc',
          ADOBE_MC_SDID: 'adobe_mc_sdid',
          VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
          ADOBE_MC_TTL_IN_MIN: 5,
          VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,
          FIRST_PARTY_SERVER_COOKIE: 's_ecid',
        },
        ae = function (e, t) {
          var n = _.document;
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
              var t,
                i = 'http://fast.',
                r = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(n.location.origin);
              return (
                this.subdomain || (this.subdomain = 'nosubdomainreturned'),
                e.loadSSL && (i = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'),
                (t = i + this.subdomain + '.demdex.net/dest5.html' + r),
                (this.iframeHost = this.getIframeHost(t)),
                (this.id =
                  'destination_publishing_iframe_' + this.subdomain + '_' + e.idSyncContainerID),
                t
              );
            },
            checkDPIframeSrc: function () {
              var t = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(n.location.href);
              'string' == typeof e.dpIframeSrc &&
                e.dpIframeSrc.length &&
                ((this.id =
                  'destination_publishing_iframe_' +
                  (e._subdomain || this.subdomain || new Date().getTime()) +
                  '_' +
                  e.idSyncContainerID),
                (this.iframeHost = this.getIframeHost(e.dpIframeSrc)),
                (this.url = e.dpIframeSrc + t));
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
            messageSendingInterval: re.POST_MESSAGE_ENABLED ? null : 100,
            onPageDestinationsFired: [],
            jsonForComparison: [],
            jsonDuplicates: [],
            jsonWaiting: [],
            jsonProcessed: [],
            canSetThirdPartyCookies: !0,
            receivedThirdPartyCookiesNotification: !1,
            readyToAttachIframePreliminary: function () {
              return !(
                e.idSyncDisableSyncs ||
                e.disableIdSyncs ||
                e.idSyncDisable3rdPartySyncing ||
                e.disableThirdPartyCookies ||
                e.disableThirdPartyCalls
              );
            },
            readyToAttachIframe: function () {
              return (
                this.readyToAttachIframePreliminary() &&
                (this.doAttachIframe || e._doAttachIframe) &&
                ((this.subdomain && 'nosubdomainreturned' !== this.subdomain) || e._subdomain) &&
                this.url &&
                !this.startedAttachingIframe
              );
            },
            attachIframe: function () {
              function e () {
                (r = n.createElement('iframe')),
                  (r.sandbox = 'allow-scripts allow-same-origin'),
                  (r.title = 'Adobe ID Syncing iFrame'),
                  (r.id = i.id),
                  (r.name = i.id + '_name'),
                  (r.style.cssText = 'display: none; width: 0; height: 0;'),
                  (r.src = i.url),
                  (i.newIframeCreated = !0),
                  t(),
                  n.body.appendChild(r);
              }
              function t (e) {
                r.addEventListener('load', function () {
                  (r.className = 'aamIframeLoaded'),
                    (i.iframeHasLoaded = !0),
                    i.fireIframeLoadedCallbacks(e),
                    i.requestToProcess();
                });
              }
              this.startedAttachingIframe = !0;
              var i = this,
                r = n.getElementById(this.id);
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
            fireIframeLoadedCallbacks: function (e) {
              this.iframeLoadedCallbacks.forEach(function (t) {
                'function' == typeof t &&
                  t({
                    message:
                      e ||
                      'The destination publishing iframe was attached and loaded successfully.',
                  });
              }),
                (this.iframeLoadedCallbacks = []);
            },
            requestToProcess: function (t) {
              function n () {
                r.jsonForComparison.push(t), r.jsonWaiting.push(t), r.processSyncOnPage(t);
              }
              var i,
                r = this;
              if (t === Object(t) && t.ibs)
                if (((i = JSON.stringify(t.ibs || [])), this.jsonForComparison.length)) {
                  var a,
                    o,
                    s,
                    l = !1;
                  for (a = 0, o = this.jsonForComparison.length; a < o; a++)
                    if (((s = this.jsonForComparison[a]), i === JSON.stringify(s.ibs || []))) {
                      l = !0;
                      break;
                    }
                  l ? this.jsonDuplicates.push(t) : n();
                } else n();
              if (
                (this.receivedThirdPartyCookiesNotification ||
                  !re.POST_MESSAGE_ENABLED ||
                  this.iframeHasLoaded) &&
                this.jsonWaiting.length
              ) {
                var c = this.jsonWaiting.shift();
                this.process(c), this.requestToProcess();
              }
              e.idSyncDisableSyncs ||
                e.disableIdSyncs ||
                !this.iframeHasLoaded ||
                !this.messages.length ||
                this.sendingMessages ||
                (this.throttleTimerSet ||
                  ((this.throttleTimerSet = !0),
                  setTimeout(function () {
                    r.messageSendingInterval = re.POST_MESSAGE_ENABLED ? null : 150;
                  }, this.THROTTLE_START)),
                (this.sendingMessages = !0),
                this.sendMessages());
            },
            getRegionAndCheckIfChanged: function (t, n) {
              var i = e._getField('MCAAMLH'),
                r = t.d_region || t.dcs_region;
              return (
                i
                  ? r &&
                    (e._setFieldExpire('MCAAMLH', n),
                    e._setField('MCAAMLH', r),
                    parseInt(i, 10) !== r &&
                      ((this.regionChanged = !0),
                      this.timesRegionChanged++,
                      e._setField('MCSYNCSOP', ''),
                      e._setField('MCSYNCS', ''),
                      (i = r)))
                  : (i = r) && (e._setFieldExpire('MCAAMLH', n), e._setField('MCAAMLH', i)),
                i || (i = ''),
                i
              );
            },
            processSyncOnPage: function (e) {
              var t, n, i, r;
              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                for (i = 0; i < n; i++)
                  (r = t[i]), r.syncOnPage && this.checkFirstPartyCookie(r, '', 'syncOnPage');
            },
            process: function (e) {
              var t,
                n,
                i,
                r,
                a,
                o = encodeURIComponent,
                s = !1;
              if ((t = e.ibs) && t instanceof Array && (n = t.length))
                for (s = !0, i = 0; i < n; i++)
                  (r = t[i]),
                    (a = [
                      o('ibs'),
                      o(r.id || ''),
                      o(r.tag || ''),
                      j.encodeAndBuildRequest(r.url || [], ','),
                      o(r.ttl || ''),
                      '',
                      '',
                      r.fireURLSync ? 'true' : 'false',
                    ]),
                    r.syncOnPage ||
                      (this.canSetThirdPartyCookies
                        ? this.addMessage(a.join('|'))
                        : r.fireURLSync && this.checkFirstPartyCookie(r, a.join('|')));
              s && this.jsonProcessed.push(e);
            },
            checkFirstPartyCookie: function (t, n, i) {
              var r = 'syncOnPage' === i,
                a = r ? 'MCSYNCSOP' : 'MCSYNCS';
              e._readVisitor();
              var o,
                s,
                l = e._getField(a),
                c = !1,
                u = !1,
                d = Math.ceil(new Date().getTime() / re.MILLIS_PER_DAY);
              l
                ? ((o = l.split('*')),
                  (s = this.pruneSyncData(o, t.id, d)),
                  (c = s.dataPresent),
                  (u = s.dataValid),
                  (c && u) || this.fireSync(r, t, n, o, a, d))
                : ((o = []), this.fireSync(r, t, n, o, a, d));
            },
            pruneSyncData: function (e, t, n) {
              var i,
                r,
                a,
                o = !1,
                s = !1;
              for (r = 0; r < e.length; r++)
                (i = e[r]),
                  (a = parseInt(i.split('-')[1], 10)),
                  i.match('^' + t + '-')
                    ? ((o = !0), n < a ? (s = !0) : (e.splice(r, 1), r--))
                    : n >= a && (e.splice(r, 1), r--);
              return { dataPresent: o, dataValid: s };
            },
            manageSyncsSize: function (e) {
              if (e.join('*').length > this.MAX_SYNCS_LENGTH)
                for (
                  e.sort(function (e, t) {
                    return parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10);
                  });
                  e.join('*').length > this.MAX_SYNCS_LENGTH;

                )
                  e.shift();
            },
            fireSync: function (t, n, i, r, a, o) {
              var s = this;
              if (t) {
                if ('img' === n.tag) {
                  var l,
                    c,
                    u,
                    d,
                    f = n.url,
                    p = e.loadSSL ? 'https:' : 'http:';
                  for (l = 0, c = f.length; l < c; l++) {
                    (u = f[l]), (d = /^\/\//.test(u));
                    var g = new Image();
                    g.addEventListener(
                      'load',
                      (function (t, n, i, r) {
                        return function () {
                          (s.onPagePixels[t] = null), e._readVisitor();
                          var o,
                            l = e._getField(a),
                            c = [];
                          if (l) {
                            o = l.split('*');
                            var u, d, f;
                            for (u = 0, d = o.length; u < d; u++)
                              (f = o[u]), f.match('^' + n.id + '-') || c.push(f);
                          }
                          s.setSyncTrackingData(c, n, i, r);
                        };
                      })(this.onPagePixels.length, n, a, o)
                    ),
                      (g.src = (d ? p : '') + u),
                      this.onPagePixels.push(g);
                  }
                }
              } else this.addMessage(i), this.setSyncTrackingData(r, n, a, o);
            },
            addMessage: function (t) {
              var n = encodeURIComponent,
                i = n(e._enableErrorReporting ? '---destpub-debug---' : '---destpub---');
              this.messages.push((re.POST_MESSAGE_ENABLED ? '' : i) + t);
            },
            setSyncTrackingData: function (t, n, i, r) {
              t.push(n.id + '-' + (r + Math.ceil(n.ttl / 60 / 24))),
                this.manageSyncsSize(t),
                e._setField(i, t.join('*'));
            },
            sendMessages: function () {
              var e,
                t = this,
                n = '',
                i = encodeURIComponent;
              this.regionChanged &&
                ((n = i('---destpub-clear-dextp---')), (this.regionChanged = !1)),
                this.messages.length
                  ? re.POST_MESSAGE_ENABLED
                    ? ((e = n + i('---destpub-combined---') + this.messages.join('%01')),
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
              te.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e);
            },
            receiveMessage: function (e) {
              var t,
                n = /^---destpub-to-parent---/;
              'string' == typeof e &&
                n.test(e) &&
                ((t = e.replace(n, '').split('|')),
                'canSetThirdPartyCookies' === t[0] &&
                  ((this.canSetThirdPartyCookies = 'true' === t[1]),
                  (this.receivedThirdPartyCookiesNotification = !0),
                  this.requestToProcess()),
                this.messagesReceived.push(e));
            },
            processIDCallData: function (i) {
              (null == this.url || (i.subdomain && 'nosubdomainreturned' === this.subdomain)) &&
                ('string' == typeof e._subdomain && e._subdomain.length
                  ? (this.subdomain = e._subdomain)
                  : (this.subdomain = i.subdomain || ''),
                (this.url = this.getUrl())),
                i.ibs instanceof Array && i.ibs.length && (this.doAttachIframe = !0),
                this.readyToAttachIframe() &&
                  (e.idSyncAttachIframeOnWindowLoad
                    ? (t.windowLoaded ||
                        'complete' === n.readyState ||
                        'loaded' === n.readyState) &&
                      this.attachIframe()
                    : this.attachIframeASAP()),
                'function' == typeof e.idSyncIDCallResult
                  ? e.idSyncIDCallResult(i)
                  : this.requestToProcess(i),
                'function' == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(i);
            },
            canMakeSyncIDCall: function (t, n) {
              return e._forceSyncIDCall || !t || n - t > re.DAYS_BETWEEN_SYNC_ID_CALLS;
            },
            attachIframeASAP: function () {
              function e () {
                t.startedAttachingIframe || (n.body ? t.attachIframe() : setTimeout(e, 30));
              }
              var t = this;
              e();
            },
          };
        },
        oe = {
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
        se = {
          getConfigNames: function () {
            return Object.keys(oe);
          },
          getConfigs: function () {
            return oe;
          },
          normalizeConfig: function (e) {
            return 'function' != typeof e ? e : e();
          },
        },
        le = function (e) {
          var t = {};
          return (
            (e.on = function (e, n, i) {
              if (!n || 'function' != typeof n)
                throw new Error('[ON] Callback should be a function.');
              t.hasOwnProperty(e) || (t[e] = []);
              var r = t[e].push({ callback: n, context: i }) - 1;
              return function () {
                t[e].splice(r, 1), t[e].length || delete t[e];
              };
            }),
            (e.off = function (e, n) {
              t.hasOwnProperty(e) &&
                (t[e] = t[e].filter(function (e) {
                  if (e.callback !== n) return e;
                }));
            }),
            (e.publish = function (e) {
              if (t.hasOwnProperty(e)) {
                var n = [].slice.call(arguments, 1);
                t[e].slice(0).forEach(function (e) {
                  e.callback.apply(e.context, n);
                });
              }
            }),
            e.publish
          );
        },
        ce = { PENDING: 'pending', CHANGED: 'changed', COMPLETE: 'complete' },
        ue = {
          AAM: 'aam',
          ADCLOUD: 'adcloud',
          ANALYTICS: 'aa',
          CAMPAIGN: 'campaign',
          ECID: 'ecid',
          LIVEFYRE: 'livefyre',
          TARGET: 'target',
          VIDEO_ANALYTICS: 'videoaa',
        },
        de = ((C = {}), t(C, ue.AAM, 565), t(C, ue.ECID, 565), C),
        fe = ((I = {}), t(I, ue.AAM, [1, 2, 5]), t(I, ue.ECID, [1, 2, 5]), I),
        pe = (function (e) {
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        })(ue),
        ge = function () {
          var e = {};
          return (
            (e.callbacks = Object.create(null)),
            (e.add = function (t, n) {
              if (!c(n))
                throw new Error(
                  '[callbackRegistryFactory] Make sure callback is a function or an array of functions.'
                );
              e.callbacks[t] = e.callbacks[t] || [];
              var i = e.callbacks[t].push(n) - 1;
              return function () {
                e.callbacks[t].splice(i, 1);
              };
            }),
            (e.execute = function (t, n) {
              if (e.callbacks[t]) {
                (n = void 0 === n ? [] : n), (n = n instanceof Array ? n : [n]);
                try {
                  for (; e.callbacks[t].length; ) {
                    var i = e.callbacks[t].shift();
                    'function' == typeof i
                      ? i.apply(null, n)
                      : i instanceof Array && i[1].apply(i[0], n);
                  }
                  delete e.callbacks[t];
                } catch (e) {}
              }
            }),
            (e.executeAll = function (t, n) {
              (n || (t && !l(t))) &&
                Object.keys(e.callbacks).forEach(function (n) {
                  var i = void 0 !== t[n] ? t[n] : '';
                  e.execute(n, i);
                }, e);
            }),
            (e.hasCallbacks = function () {
              return Boolean(Object.keys(e.callbacks).length);
            }),
            e
          );
        },
        me = function () {},
        he = function (e) {
          var t = window,
            n = t.console;
          return !!n && 'function' == typeof n[e];
        },
        _e = function (e, t, n) {
          return n()
            ? function () {
                if (he(e)) {
                  for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                    i[r] = arguments[r];
                  console[e].apply(console, [t].concat(i));
                }
              }
            : me;
        },
        Ce = u,
        Ie = new Ce('[ADOBE OPT-IN]'),
        ve = function (t, n) {
          return e(t) === n;
        },
        Se = function (e, t) {
          return e instanceof Array ? e : ve(e, 'string') ? [e] : t || [];
        },
        De = function (e) {
          var t = Object.keys(e);
          return (
            !!t.length &&
            t.every(function (t) {
              return !0 === e[t];
            })
          );
        },
        Ae = function (e) {
          return (
            !(!e || Oe(e)) &&
            Se(e).every(function (e) {
              return pe.indexOf(e) > -1;
            })
          );
        },
        ye = function (e, t) {
          return e.reduce(function (e, n) {
            return (e[n] = t), e;
          }, {});
        },
        be = function (e) {
          return JSON.parse(JSON.stringify(e));
        },
        Oe = function (e) {
          return '[object Array]' === Object.prototype.toString.call(e) && !e.length;
        },
        Me = function (e) {
          if (Te(e)) return e;
          try {
            return JSON.parse(e);
          } catch (e) {
            return {};
          }
        },
        ke = function (e) {
          return void 0 === e || (Te(e) ? Ae(Object.keys(e)) : Ee(e));
        },
        Ee = function (e) {
          try {
            var t = JSON.parse(e);
            return !!e && ve(e, 'string') && Ae(Object.keys(t));
          } catch (e) {
            return !1;
          }
        },
        Te = function (e) {
          return null !== e && ve(e, 'object') && !1 === Array.isArray(e);
        },
        Le = function () {},
        Pe = function (e) {
          return ve(e, 'function') ? e() : e;
        },
        Re = function (e, t) {
          ke(e) || Ie.error(''.concat(t));
        },
        we = function (e) {
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        },
        Fe = function (e) {
          return we(e).filter(function (e, t, n) {
            return n.indexOf(e) === t;
          });
        },
        Ne = function (e) {
          return function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = t.command,
              i = t.params,
              r = void 0 === i ? {} : i,
              a = t.callback,
              o = void 0 === a ? Le : a;
            if (!n || -1 === n.indexOf('.'))
              throw new Error('[OptIn.execute] Please provide a valid command.');
            try {
              var s = n.split('.'),
                l = e[s[0]],
                c = s[1];
              if (!l || 'function' != typeof l[c])
                throw new Error('Make sure the plugin and API name exist.');
              var u = Object.assign(r, { callback: o });
              l[c].call(l, u);
            } catch (e) {
              Ie.error('[execute] Something went wrong: ' + e.message);
            }
          };
        };
      (f.prototype = Object.create(Error.prototype)), (f.prototype.constructor = f);
      var xe = 'fetchPermissions',
        je = '[OptIn#registerPlugin] Plugin is invalid.';
      (p.Categories = ue), (p.TimeoutError = f);
      var Ve = Object.freeze({ OptIn: p, IabPlugin: h }),
        He = function (e, t) {
          e.publishDestinations = function (n) {
            var i = arguments[1],
              r = arguments[2];
            try {
              r = 'function' == typeof r ? r : n.callback;
            } catch (e) {
              r = function () {};
            }
            var a = t;
            if (!a.readyToAttachIframePreliminary())
              return void r({
                error: 'The destination publishing iframe is disabled in the Visitor library.',
              });
            if ('string' == typeof n) {
              if (!n.length) return void r({ error: 'subdomain is not a populated string.' });
              if (!(i instanceof Array && i.length))
                return void r({ error: 'messages is not a populated array.' });
              var o = !1;
              if (
                (i.forEach(function (e) {
                  'string' == typeof e && e.length && (a.addMessage(e), (o = !0));
                }),
                !o)
              )
                return void r({ error: 'None of the messages are populated strings.' });
            } else {
              if (!j.isObject(n)) return void r({ error: 'Invalid parameters passed.' });
              var s = n;
              if ('string' != typeof (n = s.subdomain) || !n.length)
                return void r({ error: 'config.subdomain is not a populated string.' });
              var l = s.urlDestinations;
              if (!(l instanceof Array && l.length))
                return void r({ error: 'config.urlDestinations is not a populated array.' });
              var c = [];
              l.forEach(function (e) {
                j.isObject(e) &&
                  (e.hideReferrer ? e.message && a.addMessage(e.message) : c.push(e));
              });
              !(function e () {
                c.length &&
                  setTimeout(function () {
                    var t = new Image(),
                      n = c.shift();
                    (t.src = n.url), a.onPageDestinationsFired.push(n), e();
                  }, 100);
              })();
            }
            a.iframe
              ? (r({
                  message: 'The destination publishing iframe is already attached and loaded.',
                }),
                a.requestToProcess())
              : !e.subdomain && e._getField('MCMID')
              ? ((a.subdomain = n),
                (a.doAttachIframe = !0),
                (a.url = a.getUrl()),
                a.readyToAttachIframe()
                  ? (a.iframeLoadedCallbacks.push(function (e) {
                      r({
                        message:
                          'Attempted to attach and load the destination publishing iframe through this API call. Result: ' +
                          (e.message || 'no result'),
                      });
                    }),
                    a.attachIframe())
                  : r({
                      error:
                        'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.',
                    }))
              : a.iframeLoadedCallbacks.push(function (e) {
                  r({
                    message:
                      'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' +
                      (e.message || 'no result'),
                  });
                });
          };
        },
        Ue = function e (t) {
          function n (e, t) {
            return (e >>> t) | (e << (32 - t));
          }
          for (
            var i,
              r,
              a = Math.pow,
              o = a(2, 32),
              s = '',
              l = [],
              c = 8 * t.length,
              u = (e.h = e.h || []),
              d = (e.k = e.k || []),
              f = d.length,
              p = {},
              g = 2;
            f < 64;
            g++
          )
            if (!p[g]) {
              for (i = 0; i < 313; i += g) p[i] = g;
              (u[f] = (a(g, 0.5) * o) | 0), (d[f++] = (a(g, 1 / 3) * o) | 0);
            }
          for (t += '\x80'; (t.length % 64) - 56; ) t += '\0';
          for (i = 0; i < t.length; i++) {
            if ((r = t.charCodeAt(i)) >> 8) return;
            l[i >> 2] |= r << (((3 - i) % 4) * 8);
          }
          for (l[l.length] = (c / o) | 0, l[l.length] = c, r = 0; r < l.length; ) {
            var m = l.slice(r, (r += 16)),
              h = u;
            for (u = u.slice(0, 8), i = 0; i < 64; i++) {
              var _ = m[i - 15],
                C = m[i - 2],
                I = u[0],
                v = u[4],
                S =
                  u[7] +
                  (n(v, 6) ^ n(v, 11) ^ n(v, 25)) +
                  ((v & u[5]) ^ (~v & u[6])) +
                  d[i] +
                  (m[i] =
                    i < 16
                      ? m[i]
                      : (m[i - 16] +
                          (n(_, 7) ^ n(_, 18) ^ (_ >>> 3)) +
                          m[i - 7] +
                          (n(C, 17) ^ n(C, 19) ^ (C >>> 10))) |
                        0);
              (u = [
                (S +
                  ((n(I, 2) ^ n(I, 13) ^ n(I, 22)) + ((I & u[1]) ^ (I & u[2]) ^ (u[1] & u[2])))) |
                  0,
              ].concat(u)),
                (u[4] = (u[4] + S) | 0);
            }
            for (i = 0; i < 8; i++) u[i] = (u[i] + h[i]) | 0;
          }
          for (i = 0; i < 8; i++)
            for (r = 3; r + 1; r--) {
              var D = (u[i] >> (8 * r)) & 255;
              s += (D < 16 ? 0 : '') + D.toString(16);
            }
          return s;
        },
        Be = function (e, t) {
          return (
            ('SHA-256' !== t && 'SHA256' !== t && 'sha256' !== t && 'sha-256' !== t) ||
              (e = Ue(e)),
            e
          );
        },
        Ge = function (e) {
          return String(e).trim().toLowerCase();
        },
        Ye = Ve.OptIn;
      j.defineGlobalNamespace(), (window.adobe.OptInCategories = Ye.Categories);
      var qe = function (t, n, i) {
        function r (e) {
          var t = e;
          return function (e) {
            var n = e || v.location.href;
            try {
              var i = g._extractParamFromUri(n, t);
              if (i) return w.parsePipeDelimetedKeyValues(i);
            } catch (e) {}
          };
        }
        function a (e) {
          function t (e, t, n) {
            e && e.match(re.VALID_VISITOR_ID_REGEX) && (n === A && (I = !0), t(e));
          }
          t(e[A], g.setMarketingCloudVisitorID, A),
            g._setFieldExpire(k, -1),
            t(e[O], g.setAnalyticsVisitorID);
        }
        function o (e) {
          (e = e || {}),
            (g._supplementalDataIDCurrent = e.supplementalDataIDCurrent || ''),
            (g._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}),
            (g._supplementalDataIDLast = e.supplementalDataIDLast || ''),
            (g._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {});
        }
        function s (e) {
          function t (e, t, n) {
            return (n = n ? (n += '|') : n), (n += e + '=' + encodeURIComponent(t));
          }
          function n (e, n) {
            var i = n[0],
              r = n[1];
            return null != r && r !== T && (e = t(i, r, e)), e;
          }
          var i = e.reduce(n, '');
          return (function (e) {
            var t = w.getTimestampInSeconds();
            return (e = e ? (e += '|') : e), (e += 'TS=' + t);
          })(i);
        }
        function l (e) {
          var t = e.minutesToLive,
            n = '';
          return (
            (g.idSyncDisableSyncs || g.disableIdSyncs) &&
              (n = n || 'Error: id syncs have been disabled'),
            ('string' == typeof e.dpid && e.dpid.length) ||
              (n = n || 'Error: config.dpid is empty'),
            ('string' == typeof e.url && e.url.length) || (n = n || 'Error: config.url is empty'),
            void 0 === t
              ? (t = 20160)
              : ((t = parseInt(t, 10)),
                (isNaN(t) || t <= 0) &&
                  (n = n || 'Error: config.minutesToLive needs to be a positive number')),
            { error: n, ttl: t }
          );
        }
        function c () {
          return !!g.configs.doesOptInApply && !(m.optIn.isComplete && u());
        }
        function u () {
          return g.configs.isIabContext
            ? m.optIn.isApproved(m.optIn.Categories.ECID) && C
            : m.optIn.isApproved(m.optIn.Categories.ECID);
        }
        function d (e, t) {
          if (((C = !0), e)) throw new Error('[IAB plugin] : ' + e);
          t.gdprApplies && (h = t.consentString), g.init(), p();
        }
        function f () {
          m.optIn.isApproved(m.optIn.Categories.ECID) &&
            (g.configs.isIabContext
              ? m.optIn.execute({ command: 'iabPlugin.fetchConsentData', callback: d })
              : (g.init(), p()));
        }
        function p () {
          m.optIn.off('complete', f);
        }
        if (!i || i.split('').reverse().join('') !== t)
          throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
        var g = this,
          m = window.adobe,
          h = '',
          C = !1,
          I = !1;
        g.version = '4.4.0';
        var v = _,
          S = v.Visitor;
        (S.version = g.version),
          (S.AuthState = E.AUTH_STATE),
          (S.OptOut = E.OPT_OUT),
          v.s_c_in || ((v.s_c_il = []), (v.s_c_in = 0)),
          (g._c = 'Visitor'),
          (g._il = v.s_c_il),
          (g._in = v.s_c_in),
          (g._il[g._in] = g),
          v.s_c_in++,
          (g._instanceType = 'regular'),
          (g._log = { requests: [] }),
          (g.marketingCloudOrgID = t),
          (g.cookieName = 'AMCV_' + t),
          (g.sessionCookieName = 'AMCVS_' + t),
          (g.cookieDomain = $()),
          (g.loadSSL = v.location.protocol.toLowerCase().indexOf('https') >= 0),
          (g.loadTimeout = 30000),
          (g.CORSErrors = []),
          (g.marketingCloudServer = g.audienceManagerServer = 'dpm.demdex.net'),
          (g.sdidParamExpiry = 30);
        var D = null,
          A = 'MCMID',
          y = 'MCIDTS',
          b = 'A',
          O = 'MCAID',
          M = 'AAM',
          k = 'MCAAMB',
          T = 'NONE',
          L = function (e) {
            return !Object.prototype[e];
          },
          P = ie(g);
        (g.FIELDS = E.FIELDS),
          (g.cookieRead = function (e) {
            return Q.get(e);
          }),
          (g.cookieWrite = function (e, t, n) {
            var i = g.cookieLifetime ? ('' + g.cookieLifetime).toUpperCase() : '',
              r = !1;
            return (
              g.configs && g.configs.secureCookie && 'https:' === location.protocol && (r = !0),
              Q.set(e, '' + t, {
                expires: n,
                domain: g.cookieDomain,
                cookieLifetime: i,
                secure: r,
              })
            );
          }),
          (g.resetState = function (e) {
            e ? g._mergeServerState(e) : o();
          }),
          (g._isAllowedDone = !1),
          (g._isAllowedFlag = !1),
          (g.isAllowed = function () {
            return (
              g._isAllowedDone ||
                ((g._isAllowedDone = !0),
                (g.cookieRead(g.cookieName) || g.cookieWrite(g.cookieName, 'T', 1)) &&
                  (g._isAllowedFlag = !0)),
              'T' === g.cookieRead(g.cookieName) && g._helpers.removeCookie(g.cookieName),
              g._isAllowedFlag
            );
          }),
          (g.setMarketingCloudVisitorID = function (e) {
            g._setMarketingCloudFields(e);
          }),
          (g._use1stPartyMarketingCloudServer = !1),
          (g.getMarketingCloudVisitorID = function (e, t) {
            g.marketingCloudServer &&
              g.marketingCloudServer.indexOf('.demdex.net') < 0 &&
              (g._use1stPartyMarketingCloudServer = !0);
            var n = g._getAudienceManagerURLData('_setMarketingCloudFields'),
              i = n.url;
            return g._getRemoteField(A, i, e, t, n);
          }),
          (g.getVisitorValues = function (e, t) {
            var n = {
                MCMID: { fn: g.getMarketingCloudVisitorID, args: [!0], context: g },
                MCOPTOUT: { fn: g.isOptedOut, args: [void 0, !0], context: g },
                MCAID: { fn: g.getAnalyticsVisitorID, args: [!0], context: g },
                MCAAMLH: { fn: g.getAudienceManagerLocationHint, args: [!0], context: g },
                MCAAMB: { fn: g.getAudienceManagerBlob, args: [!0], context: g },
              },
              i = t && t.length ? j.pluck(n, t) : n;
            z(i, e);
          }),
          (g._currentCustomerIDs = {}),
          (g._customerIDsHashChanged = !1),
          (g._newCustomerIDsHash = ''),
          (g.setCustomerIDs = function (t, n) {
            function i () {
              g._customerIDsHashChanged = !1;
            }
            if (!g.isOptedOut() && t) {
              if (!j.isObject(t) || j.isObjectEmpty(t)) return !1;
              g._readVisitor();
              var r, a, o;
              for (r in t)
                if (L(r) && ((a = t[r]), (n = a.hasOwnProperty('hashType') ? a.hashType : n), a))
                  if ('object' === e(a)) {
                    var s = {};
                    if (a.id) {
                      if (n) {
                        if (!(o = Be(Ge(a.id), n))) return;
                        (a.id = o), (s.hashType = n);
                      }
                      s.id = a.id;
                    }
                    void 0 != a.authState && (s.authState = a.authState),
                      (g._currentCustomerIDs[r] = s);
                  } else if (n) {
                    if (!(o = Be(Ge(a), n))) return;
                    g._currentCustomerIDs[r] = { id: o, hashType: n };
                  } else g._currentCustomerIDs[r] = { id: a };
              var l = g.getCustomerIDs(),
                c = g._getField('MCCIDH'),
                u = '';
              c || (c = 0);
              for (r in l)
                L(r) &&
                  ((a = l[r]),
                  (u +=
                    (u ? '|' : '') +
                    r +
                    '|' +
                    (a.id ? a.id : '') +
                    (a.authState ? a.authState : '')));
              (g._newCustomerIDsHash = String(g._hash(u))),
                g._newCustomerIDsHash !== c &&
                  ((g._customerIDsHashChanged = !0), g._mapCustomerIDs(i));
            }
          }),
          (g.getCustomerIDs = function () {
            g._readVisitor();
            var e,
              t,
              n = {};
            for (e in g._currentCustomerIDs)
              L(e) &&
                ((t = g._currentCustomerIDs[e]),
                n[e] || (n[e] = {}),
                t.id && (n[e].id = t.id),
                void 0 != t.authState
                  ? (n[e].authState = t.authState)
                  : (n[e].authState = S.AuthState.UNKNOWN),
                t.hashType && (n[e].hashType = t.hashType));
            return n;
          }),
          (g.setAnalyticsVisitorID = function (e) {
            g._setAnalyticsFields(e);
          }),
          (g.getAnalyticsVisitorID = function (e, t, n) {
            if (!w.isTrackingServerPopulated() && !n) return g._callCallback(e, ['']), '';
            var i = '';
            if (
              (n ||
                (i = g.getMarketingCloudVisitorID(function (t) {
                  g.getAnalyticsVisitorID(e, !0);
                })),
              i || n)
            ) {
              var r = n ? g.marketingCloudServer : g.trackingServer,
                a = '';
              g.loadSSL &&
                (n
                  ? g.marketingCloudServerSecure && (r = g.marketingCloudServerSecure)
                  : g.trackingServerSecure && (r = g.trackingServerSecure));
              var o = {};
              if (r) {
                var s = 'http' + (g.loadSSL ? 's' : '') + '://' + r + '/id',
                  l =
                    'd_visid_ver=' +
                    g.version +
                    '&mcorgid=' +
                    encodeURIComponent(g.marketingCloudOrgID) +
                    (i ? '&mid=' + encodeURIComponent(i) : '') +
                    (g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies
                      ? '&d_coppa=true'
                      : ''),
                  c = ['s_c_il', g._in, '_set' + (n ? 'MarketingCloud' : 'Analytics') + 'Fields'];
                (a =
                  s +
                  '?' +
                  l +
                  '&callback=s_c_il%5B' +
                  g._in +
                  '%5D._set' +
                  (n ? 'MarketingCloud' : 'Analytics') +
                  'Fields'),
                  (o.corsUrl = s + '?' + l),
                  (o.callback = c);
              }
              return (o.url = a), g._getRemoteField(n ? A : O, a, e, t, o);
            }
            return '';
          }),
          (g.getAudienceManagerLocationHint = function (e, t) {
            if (
              g.getMarketingCloudVisitorID(function (t) {
                g.getAudienceManagerLocationHint(e, !0);
              })
            ) {
              var n = g._getField(O);
              if (
                (!n &&
                  w.isTrackingServerPopulated() &&
                  (n = g.getAnalyticsVisitorID(function (t) {
                    g.getAudienceManagerLocationHint(e, !0);
                  })),
                n || !w.isTrackingServerPopulated())
              ) {
                var i = g._getAudienceManagerURLData(),
                  r = i.url;
                return g._getRemoteField('MCAAMLH', r, e, t, i);
              }
            }
            return '';
          }),
          (g.getLocationHint = g.getAudienceManagerLocationHint),
          (g.getAudienceManagerBlob = function (e, t) {
            if (
              g.getMarketingCloudVisitorID(function (t) {
                g.getAudienceManagerBlob(e, !0);
              })
            ) {
              var n = g._getField(O);
              if (
                (!n &&
                  w.isTrackingServerPopulated() &&
                  (n = g.getAnalyticsVisitorID(function (t) {
                    g.getAudienceManagerBlob(e, !0);
                  })),
                n || !w.isTrackingServerPopulated())
              ) {
                var i = g._getAudienceManagerURLData(),
                  r = i.url;
                return (
                  g._customerIDsHashChanged && g._setFieldExpire(k, -1),
                  g._getRemoteField(k, r, e, t, i)
                );
              }
            }
            return '';
          }),
          (g._supplementalDataIDCurrent = ''),
          (g._supplementalDataIDCurrentConsumed = {}),
          (g._supplementalDataIDLast = ''),
          (g._supplementalDataIDLastConsumed = {}),
          (g.getSupplementalDataID = function (e, t) {
            g._supplementalDataIDCurrent || t || (g._supplementalDataIDCurrent = g._generateID(1));
            var n = g._supplementalDataIDCurrent;
            return (
              g._supplementalDataIDLast && !g._supplementalDataIDLastConsumed[e]
                ? ((n = g._supplementalDataIDLast), (g._supplementalDataIDLastConsumed[e] = !0))
                : n &&
                  (g._supplementalDataIDCurrentConsumed[e] &&
                    ((g._supplementalDataIDLast = g._supplementalDataIDCurrent),
                    (g._supplementalDataIDLastConsumed = g._supplementalDataIDCurrentConsumed),
                    (g._supplementalDataIDCurrent = n = t ? '' : g._generateID(1)),
                    (g._supplementalDataIDCurrentConsumed = {})),
                  n && (g._supplementalDataIDCurrentConsumed[e] = !0)),
              n
            );
          });
        var R = !1;
        (g._liberatedOptOut = null),
          (g.getOptOut = function (e, t) {
            var n = g._getAudienceManagerURLData('_setMarketingCloudFields'),
              i = n.url;
            if (u()) return g._getRemoteField('MCOPTOUT', i, e, t, n);
            if ((g._registerCallback('liberatedOptOut', e), null !== g._liberatedOptOut))
              return (
                g._callAllCallbacks('liberatedOptOut', [g._liberatedOptOut]),
                (R = !1),
                g._liberatedOptOut
              );
            if (R) return null;
            R = !0;
            var r = 'liberatedGetOptOut';
            return (
              (n.corsUrl = n.corsUrl.replace(
                /dpm\.demdex\.net\/id\?/,
                'dpm.demdex.net/optOutStatus?'
              )),
              (n.callback = [r]),
              (_[r] = function (e) {
                if (e === Object(e)) {
                  var t,
                    n,
                    i = j.parseOptOut(e, t, T);
                  (t = i.optOut),
                    (n = 1000 * i.d_ottl),
                    (g._liberatedOptOut = t),
                    setTimeout(function () {
                      g._liberatedOptOut = null;
                    }, n);
                }
                g._callAllCallbacks('liberatedOptOut', [t]), (R = !1);
              }),
              P.fireCORS(n),
              null
            );
          }),
          (g.isOptedOut = function (e, t, n) {
            t || (t = S.OptOut.GLOBAL);
            var i = g.getOptOut(function (n) {
              var i = n === S.OptOut.GLOBAL || n.indexOf(t) >= 0;
              g._callCallback(e, [i]);
            }, n);
            return i ? i === S.OptOut.GLOBAL || i.indexOf(t) >= 0 : null;
          }),
          (g._fields = null),
          (g._fieldsExpired = null),
          (g._hash = function (e) {
            var t,
              n,
              i = 0;
            if (e)
              for (t = 0; t < e.length; t++)
                (n = e.charCodeAt(t)), (i = (i << 5) - i + n), (i &= i);
            return i;
          }),
          (g._generateID = ne),
          (g._generateLocalMID = function () {
            var e = g._generateID(0);
            return (N.isClientSideMarketingCloudVisitorID = !0), e;
          }),
          (g._callbackList = null),
          (g._callCallback = function (e, t) {
            try {
              'function' == typeof e ? e.apply(v, t) : e[1].apply(e[0], t);
            } catch (e) {}
          }),
          (g._registerCallback = function (e, t) {
            t &&
              (null == g._callbackList && (g._callbackList = {}),
              void 0 == g._callbackList[e] && (g._callbackList[e] = []),
              g._callbackList[e].push(t));
          }),
          (g._callAllCallbacks = function (e, t) {
            if (null != g._callbackList) {
              var n = g._callbackList[e];
              if (n) for (; n.length > 0; ) g._callCallback(n.shift(), t);
            }
          }),
          (g._addQuerystringParam = function (e, t, n, i) {
            var r = encodeURIComponent(t) + '=' + encodeURIComponent(n),
              a = w.parseHash(e),
              o = w.hashlessUrl(e);
            if (-1 === o.indexOf('?')) return o + '?' + r + a;
            var s = o.split('?'),
              l = s[0] + '?',
              c = s[1];
            return l + w.addQueryParamAtLocation(c, r, i) + a;
          }),
          (g._extractParamFromUri = function (e, t) {
            var n = new RegExp('[\\?&#]' + t + '=([^&#]*)'),
              i = n.exec(e);
            if (i && i.length) return decodeURIComponent(i[1]);
          }),
          (g._parseAdobeMcFromUrl = r(re.ADOBE_MC)),
          (g._parseAdobeMcSdidFromUrl = r(re.ADOBE_MC_SDID)),
          (g._attemptToPopulateSdidFromUrl = function (e) {
            var n = g._parseAdobeMcSdidFromUrl(e),
              i = 1000000000;
            n && n.TS && (i = w.getTimestampInSeconds() - n.TS),
              n &&
                n.SDID &&
                n.MCORGID === t &&
                i < g.sdidParamExpiry &&
                ((g._supplementalDataIDCurrent = n.SDID),
                (g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0));
          }),
          (g._attemptToPopulateIdsFromUrl = function () {
            var e = g._parseAdobeMcFromUrl();
            if (e && e.TS) {
              var n = w.getTimestampInSeconds(),
                i = n - e.TS;
              if (Math.floor(i / 60) > re.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== t) return;
              a(e);
            }
          }),
          (g._mergeServerState = function (e) {
            if (e)
              try {
                if (
                  ((e = (function (e) {
                    return w.isObject(e) ? e : JSON.parse(e);
                  })(e)),
                  e[g.marketingCloudOrgID])
                ) {
                  var t = e[g.marketingCloudOrgID];
                  !(function (e) {
                    w.isObject(e) && g.setCustomerIDs(e);
                  })(t.customerIDs),
                    o(t.sdid);
                }
              } catch (e) {
                throw new Error('`serverState` has an invalid format.');
              }
          }),
          (g._timeout = null),
          (g._loadData = function (e, t, n, i) {
            (t = g._addQuerystringParam(t, 'd_fieldgroup', e, 1)),
              (i.url = g._addQuerystringParam(i.url, 'd_fieldgroup', e, 1)),
              (i.corsUrl = g._addQuerystringParam(i.corsUrl, 'd_fieldgroup', e, 1)),
              (N.fieldGroupObj[e] = !0),
              i === Object(i) &&
                i.corsUrl &&
                'XMLHttpRequest' === P.corsMetadata.corsType &&
                P.fireCORS(i, n, e);
          }),
          (g._clearTimeout = function (e) {
            null != g._timeout &&
              g._timeout[e] &&
              (clearTimeout(g._timeout[e]), (g._timeout[e] = 0));
          }),
          (g._settingsDigest = 0),
          (g._getSettingsDigest = function () {
            if (!g._settingsDigest) {
              var e = g.version;
              g.audienceManagerServer && (e += '|' + g.audienceManagerServer),
                g.audienceManagerServerSecure && (e += '|' + g.audienceManagerServerSecure),
                (g._settingsDigest = g._hash(e));
            }
            return g._settingsDigest;
          }),
          (g._readVisitorDone = !1),
          (g._readVisitor = function () {
            if (!g._readVisitorDone) {
              g._readVisitorDone = !0;
              var e,
                t,
                n,
                i,
                r,
                a,
                o = g._getSettingsDigest(),
                s = !1,
                l = g.cookieRead(g.cookieName),
                c = new Date();
              if (
                (l ||
                  I ||
                  g.discardTrackingServerECID ||
                  (l = g.cookieRead(re.FIRST_PARTY_SERVER_COOKIE)),
                null == g._fields && (g._fields = {}),
                l && 'T' !== l)
              )
                for (
                  l = l.split('|'),
                    l[0].match(/^[\-0-9]+$/) && (parseInt(l[0], 10) !== o && (s = !0), l.shift()),
                    l.length % 2 == 1 && l.pop(),
                    e = 0;
                  e < l.length;
                  e += 2
                )
                  (t = l[e].split('-')),
                    (n = t[0]),
                    (i = l[e + 1]),
                    t.length > 1
                      ? ((r = parseInt(t[1], 10)), (a = t[1].indexOf('s') > 0))
                      : ((r = 0), (a = !1)),
                    s && ('MCCIDH' === n && (i = ''), r > 0 && (r = c.getTime() / 1000 - 60)),
                    n &&
                      i &&
                      (g._setField(n, i, 1),
                      r > 0 &&
                        ((g._fields['expire' + n] = r + (a ? 's' : '')),
                        (c.getTime() >= 1000 * r || (a && !g.cookieRead(g.sessionCookieName))) &&
                          (g._fieldsExpired || (g._fieldsExpired = {}),
                          (g._fieldsExpired[n] = !0))));
              !g._getField(O) &&
                w.isTrackingServerPopulated() &&
                (l = g.cookieRead('s_vi')) &&
                ((l = l.split('|')),
                l.length > 1 &&
                  l[0].indexOf('v1') >= 0 &&
                  ((i = l[1]),
                  (e = i.indexOf('[')),
                  e >= 0 && (i = i.substring(0, e)),
                  i && i.match(re.VALID_VISITOR_ID_REGEX) && g._setField(O, i)));
            }
          }),
          (g._appendVersionTo = function (e) {
            var t = 'vVersion|' + g.version,
              n = e ? g._getCookieVersion(e) : null;
            return (
              n
                ? Z.areVersionsDifferent(n, g.version) && (e = e.replace(re.VERSION_REGEX, t))
                : (e += (e ? '|' : '') + t),
              e
            );
          }),
          (g._writeVisitor = function () {
            var e,
              t,
              n = g._getSettingsDigest();
            for (e in g._fields)
              L(e) &&
                g._fields[e] &&
                'expire' !== e.substring(0, 6) &&
                ((t = g._fields[e]),
                (n +=
                  (n ? '|' : '') +
                  e +
                  (g._fields['expire' + e] ? '-' + g._fields['expire' + e] : '') +
                  '|' +
                  t));
            (n = g._appendVersionTo(n)), g.cookieWrite(g.cookieName, n, 1);
          }),
          (g._getField = function (e, t) {
            return null == g._fields || (!t && g._fieldsExpired && g._fieldsExpired[e])
              ? null
              : g._fields[e];
          }),
          (g._setField = function (e, t, n) {
            null == g._fields && (g._fields = {}), (g._fields[e] = t), n || g._writeVisitor();
          }),
          (g._getFieldList = function (e, t) {
            var n = g._getField(e, t);
            return n ? n.split('*') : null;
          }),
          (g._setFieldList = function (e, t, n) {
            g._setField(e, t ? t.join('*') : '', n);
          }),
          (g._getFieldMap = function (e, t) {
            var n = g._getFieldList(e, t);
            if (n) {
              var i,
                r = {};
              for (i = 0; i < n.length; i += 2) r[n[i]] = n[i + 1];
              return r;
            }
            return null;
          }),
          (g._setFieldMap = function (e, t, n) {
            var i,
              r = null;
            if (t) {
              r = [];
              for (i in t) L(i) && (r.push(i), r.push(t[i]));
            }
            g._setFieldList(e, r, n);
          }),
          (g._setFieldExpire = function (e, t, n) {
            var i = new Date();
            i.setTime(i.getTime() + 1000 * t),
              null == g._fields && (g._fields = {}),
              (g._fields['expire' + e] = Math.floor(i.getTime() / 1000) + (n ? 's' : '')),
              t < 0
                ? (g._fieldsExpired || (g._fieldsExpired = {}), (g._fieldsExpired[e] = !0))
                : g._fieldsExpired && (g._fieldsExpired[e] = !1),
              n && (g.cookieRead(g.sessionCookieName) || g.cookieWrite(g.sessionCookieName, '1'));
          }),
          (g._findVisitorID = function (t) {
            return (
              t &&
                ('object' === e(t) &&
                  (t = t.d_mid
                    ? t.d_mid
                    : t.visitorID
                    ? t.visitorID
                    : t.id
                    ? t.id
                    : t.uuid
                    ? t.uuid
                    : '' + t),
                t && 'NOTARGET' === (t = t.toUpperCase()) && (t = T),
                (t && (t === T || t.match(re.VALID_VISITOR_ID_REGEX))) || (t = '')),
              t
            );
          }),
          (g._setFields = function (t, n) {
            if (
              (g._clearTimeout(t),
              null != g._loading && (g._loading[t] = !1),
              N.fieldGroupObj[t] && N.setState(t, !1),
              'MC' === t)
            ) {
              !0 !== N.isClientSideMarketingCloudVisitorID &&
                (N.isClientSideMarketingCloudVisitorID = !1);
              var i = g._getField(A);
              if (!i || g.overwriteCrossDomainMCIDAndAID) {
                if (!(i = 'object' === e(n) && n.mid ? n.mid : g._findVisitorID(n))) {
                  if (g._use1stPartyMarketingCloudServer && !g.tried1stPartyMarketingCloudServer)
                    return (
                      (g.tried1stPartyMarketingCloudServer = !0),
                      void g.getAnalyticsVisitorID(null, !1, !0)
                    );
                  i = g._generateLocalMID();
                }
                g._setField(A, i);
              }
              (i && i !== T) || (i = ''),
                'object' === e(n) &&
                  ((n.d_region || n.dcs_region || n.d_blob || n.blob) && g._setFields(M, n),
                  g._use1stPartyMarketingCloudServer && n.mid && g._setFields(b, { id: n.id })),
                g._callAllCallbacks(A, [i]);
            }
            if (t === M && 'object' === e(n)) {
              var r = 604800;
              void 0 != n.id_sync_ttl && n.id_sync_ttl && (r = parseInt(n.id_sync_ttl, 10));
              var a = F.getRegionAndCheckIfChanged(n, r);
              g._callAllCallbacks('MCAAMLH', [a]);
              var o = g._getField(k);
              (n.d_blob || n.blob) &&
                ((o = n.d_blob), o || (o = n.blob), g._setFieldExpire(k, r), g._setField(k, o)),
                o || (o = ''),
                g._callAllCallbacks(k, [o]),
                !n.error_msg &&
                  g._newCustomerIDsHash &&
                  g._setField('MCCIDH', g._newCustomerIDsHash);
            }
            if (t === b) {
              var s = g._getField(O);
              (s && !g.overwriteCrossDomainMCIDAndAID) ||
                ((s = g._findVisitorID(n)),
                s ? s !== T && g._setFieldExpire(k, -1) : (s = T),
                g._setField(O, s)),
                (s && s !== T) || (s = ''),
                g._callAllCallbacks(O, [s]);
            }
            if (g.idSyncDisableSyncs || g.disableIdSyncs) F.idCallNotProcesssed = !0;
            else {
              F.idCallNotProcesssed = !1;
              var l = {};
              (l.ibs = n.ibs), (l.subdomain = n.subdomain), F.processIDCallData(l);
            }
            if (n === Object(n)) {
              var c, d;
              u() && g.isAllowed() && (c = g._getField('MCOPTOUT'));
              var f = j.parseOptOut(n, c, T);
              (c = f.optOut),
                (d = f.d_ottl),
                g._setFieldExpire('MCOPTOUT', d, !0),
                g._setField('MCOPTOUT', c),
                g._callAllCallbacks('MCOPTOUT', [c]);
            }
          }),
          (g._loading = null),
          (g._getRemoteField = function (e, t, n, i, r) {
            var a,
              o = '',
              s = w.isFirstPartyAnalyticsVisitorIDCall(e),
              l = { MCAAMLH: !0, MCAAMB: !0 };
            if (u() && g.isAllowed()) {
              g._readVisitor(), (o = g._getField(e, !0 === l[e]));
              if (
                (function () {
                  return (
                    (!o || (g._fieldsExpired && g._fieldsExpired[e])) &&
                    (!g.disableThirdPartyCalls || s)
                  );
                })()
              ) {
                if (
                  (e === A || 'MCOPTOUT' === e
                    ? (a = 'MC')
                    : 'MCAAMLH' === e || e === k
                    ? (a = M)
                    : e === O && (a = b),
                  a)
                )
                  return (
                    !t ||
                      (null != g._loading && g._loading[a]) ||
                      (null == g._loading && (g._loading = {}),
                      (g._loading[a] = !0),
                      g._loadData(
                        a,
                        t,
                        function (t) {
                          if (!g._getField(e)) {
                            t && N.setState(a, !0);
                            var n = '';
                            e === A
                              ? (n = g._generateLocalMID())
                              : a === M && (n = { error_msg: 'timeout' }),
                              g._setFields(a, n);
                          }
                        },
                        r
                      )),
                    g._registerCallback(e, n),
                    o || (t || g._setFields(a, { id: T }), '')
                  );
              } else
                o ||
                  (e === A
                    ? (g._registerCallback(e, n),
                      (o = g._generateLocalMID()),
                      g.setMarketingCloudVisitorID(o))
                    : e === O
                    ? (g._registerCallback(e, n), (o = ''), g.setAnalyticsVisitorID(o))
                    : ((o = ''), (i = !0)));
            }
            return (
              (e !== A && e !== O) || o !== T || ((o = ''), (i = !0)),
              n && i && g._callCallback(n, [o]),
              o
            );
          }),
          (g._setMarketingCloudFields = function (e) {
            g._readVisitor(), g._setFields('MC', e);
          }),
          (g._mapCustomerIDs = function (e) {
            g.getAudienceManagerBlob(e, !0);
          }),
          (g._setAnalyticsFields = function (e) {
            g._readVisitor(), g._setFields(b, e);
          }),
          (g._setAudienceManagerFields = function (e) {
            g._readVisitor(), g._setFields(M, e);
          }),
          (g._getAudienceManagerURLData = function (e) {
            var t = g.audienceManagerServer,
              n = '',
              i = g._getField(A),
              r = g._getField(k, !0),
              a = g._getField(O),
              o = a && a !== T ? '&d_cid_ic=AVID%01' + encodeURIComponent(a) : '';
            if (
              (g.loadSSL && g.audienceManagerServerSecure && (t = g.audienceManagerServerSecure),
              t)
            ) {
              var s,
                l,
                c = g.getCustomerIDs();
              if (c)
                for (s in c)
                  L(s) &&
                    ((l = c[s]),
                    (o +=
                      '&d_cid_ic=' +
                      encodeURIComponent(s) +
                      '%01' +
                      encodeURIComponent(l.id ? l.id : '') +
                      (l.authState ? '%01' + l.authState : '')));
              e || (e = '_setAudienceManagerFields');
              var u = 'http' + (g.loadSSL ? 's' : '') + '://' + t + '/id',
                d =
                  'd_visid_ver=' +
                  g.version +
                  (h && -1 !== u.indexOf('demdex.net')
                    ? '&gdpr=1&gdpr_force=1&gdpr_consent=' + h
                    : '') +
                  '&d_rtbd=json&d_ver=2' +
                  (!i && g._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') +
                  '&d_orgid=' +
                  encodeURIComponent(g.marketingCloudOrgID) +
                  '&d_nsid=' +
                  (g.idSyncContainerID || 0) +
                  (i ? '&d_mid=' + encodeURIComponent(i) : '') +
                  (g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies
                    ? '&d_coppa=true'
                    : '') +
                  (!0 === D ? '&d_coop_safe=1' : !1 === D ? '&d_coop_unsafe=1' : '') +
                  (r ? '&d_blob=' + encodeURIComponent(r) : '') +
                  o,
                f = ['s_c_il', g._in, e];
              return (
                (n = u + '?' + d + '&d_cb=s_c_il%5B' + g._in + '%5D.' + e),
                { url: n, corsUrl: u + '?' + d, callback: f }
              );
            }
            return { url: n };
          }),
          (g.appendVisitorIDsTo = function (e) {
            try {
              var t = [
                [A, g._getField(A)],
                [O, g._getField(O)],
                ['MCORGID', g.marketingCloudOrgID],
              ];
              return g._addQuerystringParam(e, re.ADOBE_MC, s(t));
            } catch (t) {
              return e;
            }
          }),
          (g.appendSupplementalDataIDTo = function (e, t) {
            if (!(t = t || g.getSupplementalDataID(w.generateRandomString(), !0))) return e;
            try {
              var n = s([
                ['SDID', t],
                ['MCORGID', g.marketingCloudOrgID],
              ]);
              return g._addQuerystringParam(e, re.ADOBE_MC_SDID, n);
            } catch (t) {
              return e;
            }
          });
        var w = {
          parseHash: function (e) {
            var t = e.indexOf('#');
            return t > 0 ? e.substr(t) : '';
          },
          hashlessUrl: function (e) {
            var t = e.indexOf('#');
            return t > 0 ? e.substr(0, t) : e;
          },
          addQueryParamAtLocation: function (e, t, n) {
            var i = e.split('&');
            return (n = null != n ? n : i.length), i.splice(n, 0, t), i.join('&');
          },
          isFirstPartyAnalyticsVisitorIDCall: function (e, t, n) {
            if (e !== O) return !1;
            var i;
            return (
              t || (t = g.trackingServer),
              n || (n = g.trackingServerSecure),
              !('string' != typeof (i = g.loadSSL ? n : t) || !i.length) &&
                i.indexOf('2o7.net') < 0 &&
                i.indexOf('omtrdc.net') < 0
            );
          },
          isObject: function (e) {
            return Boolean(e && e === Object(e));
          },
          removeCookie: function (e) {
            Q.remove(e, { domain: g.cookieDomain });
          },
          isTrackingServerPopulated: function () {
            return !!g.trackingServer || !!g.trackingServerSecure;
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
            for (var n in e) e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
            return e;
          },
        };
        g._helpers = w;
        var F = ae(g, S);
        (g._destinationPublishing = F), (g.timeoutMetricsLog = []);
        var N = {
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
              case b:
                !1 === t
                  ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1)
                  : (this.AnalyticsIDCallTimedOut = t);
                break;
              case M:
                !1 === t
                  ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1)
                  : (this.AAMIDCallTimedOut = t);
            }
          },
        };
        (g.isClientSideMarketingCloudVisitorID = function () {
          return N.isClientSideMarketingCloudVisitorID;
        }),
          (g.MCIDCallTimedOut = function () {
            return N.MCIDCallTimedOut;
          }),
          (g.AnalyticsIDCallTimedOut = function () {
            return N.AnalyticsIDCallTimedOut;
          }),
          (g.AAMIDCallTimedOut = function () {
            return N.AAMIDCallTimedOut;
          }),
          (g.idSyncGetOnPageSyncInfo = function () {
            return g._readVisitor(), g._getField('MCSYNCSOP');
          }),
          (g.idSyncByURL = function (e) {
            if (!g.isOptedOut()) {
              var t = l(e || {});
              if (t.error) return t.error;
              var n,
                i,
                r = e.url,
                a = encodeURIComponent,
                o = F;
              return (
                (r = r.replace(/^https:/, '').replace(/^http:/, '')),
                (n = j.encodeAndBuildRequest(['', e.dpid, e.dpuuid || ''], ',')),
                (i = ['ibs', a(e.dpid), 'img', a(r), t.ttl, '', n]),
                o.addMessage(i.join('|')),
                o.requestToProcess(),
                'Successfully queued'
              );
            }
          }),
          (g.idSyncByDataSource = function (e) {
            if (!g.isOptedOut())
              return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length
                ? ((e.url = '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid),
                  g.idSyncByURL(e))
                : 'Error: config or config.dpuuid is empty';
          }),
          He(g, F),
          (g._getCookieVersion = function (e) {
            e = e || g.cookieRead(g.cookieName);
            var t = re.VERSION_REGEX.exec(e);
            return t && t.length > 1 ? t[1] : null;
          }),
          (g._resetAmcvCookie = function (e) {
            var t = g._getCookieVersion();
            (t && !Z.isLessThan(t, e)) || w.removeCookie(g.cookieName);
          }),
          (g.setAsCoopSafe = function () {
            D = !0;
          }),
          (g.setAsCoopUnsafe = function () {
            D = !1;
          }),
          (function () {
            if (((g.configs = Object.create(null)), w.isObject(n)))
              for (var e in n) L(e) && ((g[e] = n[e]), (g.configs[e] = n[e]));
          })(),
          (function () {
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
                i = g[t];
              g[t] = function (e) {
                return u() && g.isAllowed()
                  ? i.apply(g, arguments)
                  : ('function' == typeof e && g._callCallback(e, [n]), n);
              };
            });
          })(),
          (g.init = function () {
            if (c()) return m.optIn.fetchPermissions(f, !0);
            !(function () {
              if (w.isObject(n)) {
                (g.idSyncContainerID = g.idSyncContainerID || 0),
                  (D =
                    'boolean' == typeof g.isCoopSafe
                      ? g.isCoopSafe
                      : w.parseBoolean(g.isCoopSafe)),
                  g.resetBeforeVersion && g._resetAmcvCookie(g.resetBeforeVersion),
                  g._attemptToPopulateIdsFromUrl(),
                  g._attemptToPopulateSdidFromUrl(),
                  g._readVisitor();
                var e = g._getField(y),
                  t = Math.ceil(new Date().getTime() / re.MILLIS_PER_DAY);
                g.idSyncDisableSyncs ||
                  g.disableIdSyncs ||
                  !F.canMakeSyncIDCall(e, t) ||
                  (g._setFieldExpire(k, -1), g._setField(y, t)),
                  g.getMarketingCloudVisitorID(),
                  g.getAudienceManagerLocationHint(),
                  g.getAudienceManagerBlob(),
                  g._mergeServerState(g.serverState);
              } else g._attemptToPopulateIdsFromUrl(), g._attemptToPopulateSdidFromUrl();
            })(),
              (function () {
                if (!g.idSyncDisableSyncs && !g.disableIdSyncs) {
                  F.checkDPIframeSrc();
                  var e = function () {
                    var e = F;
                    e.readyToAttachIframe() && e.attachIframe();
                  };
                  v.addEventListener('load', function () {
                    (S.windowLoaded = !0), e();
                  });
                  try {
                    te.receiveMessage(function (e) {
                      F.receiveMessage(e.data);
                    }, F.iframeHost);
                  } catch (e) {}
                }
              })(),
              (function () {
                g.whitelistIframeDomains &&
                  re.POST_MESSAGE_ENABLED &&
                  ((g.whitelistIframeDomains =
                    g.whitelistIframeDomains instanceof Array
                      ? g.whitelistIframeDomains
                      : [g.whitelistIframeDomains]),
                  g.whitelistIframeDomains.forEach(function (e) {
                    var n = new B(t, e),
                      i = K(g, n);
                    te.receiveMessage(i, e);
                  }));
              })();
          });
      };
      (qe.config = se), (_.Visitor = qe);
      var Xe = qe,
        We = function (e) {
          if (j.isObject(e))
            return Object.keys(e)
              .filter(function (t) {
                return '' !== e[t];
              })
              .reduce(function (t, n) {
                var i = 'doesOptInApply' !== n ? e[n] : se.normalizeConfig(e[n]),
                  r = j.normalizeBoolean(i);
                return (t[n] = r), t;
              }, Object.create(null));
        },
        Je = Ve.OptIn,
        Ke = Ve.IabPlugin;
      return (
        (Xe.getInstance = function (e, t) {
          if (!e) throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
          e.indexOf('@') < 0 && (e += '@AdobeOrg');
          var n = (function () {
            var t = _.s_c_il;
            if (t)
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                if (i && 'Visitor' === i._c && i.marketingCloudOrgID === e) return i;
              }
          })();
          if (n) return n;
          var i = We(t);
          !(function (e) {
            _.adobe.optIn =
              _.adobe.optIn ||
              (function () {
                var t = j.pluck(e, [
                    'doesOptInApply',
                    'previousPermissions',
                    'preOptInApprovals',
                    'isOptInStorageEnabled',
                    'optInStorageExpiry',
                    'isIabContext',
                  ]),
                  n = e.optInCookieDomain || e.cookieDomain;
                (n = n || $()),
                  (n = n === window.location.hostname ? '' : n),
                  (t.optInCookieDomain = n);
                var i = new Je(t, { cookies: Q });
                if (t.isIabContext) {
                  var r = new Ke(window.__cmp);
                  i.registerPlugin(r);
                }
                return i;
              })();
          })(i || {});
          var r = e,
            a = r.split('').reverse().join(''),
            o = new Xe(e, null, a);
          j.isObject(i) && i.cookieDomain && (o.cookieDomain = i.cookieDomain),
            (function () {
              _.s_c_il.splice(--_.s_c_in, 1);
            })();
          var s = j.getIeVersion();
          if ('number' == typeof s && s < 10)
            return o._helpers.replaceMethodsWithFunction(o, function () {});
          var l =
            (function () {
              try {
                return _.self !== _.parent;
              } catch (e) {
                return !0;
              }
            })() &&
            !(function (e) {
              return (
                e.cookieWrite('TEST_AMCV_COOKIE', 'T', 1),
                'T' === e.cookieRead('TEST_AMCV_COOKIE') &&
                  (e._helpers.removeCookie('TEST_AMCV_COOKIE'), !0)
              );
            })(o) &&
            _.parent
              ? new Y(e, i, o, _.parent)
              : new Xe(e, i, a);
          return (o = null), l.init(), l;
        }),
        (function () {
          function e () {
            Xe.windowLoaded = !0;
          }
          _.addEventListener
            ? _.addEventListener('load', e)
            : _.attachEvent && _.attachEvent('onload', e),
            (Xe.codeLoadEnd = new Date().getTime());
        })(),
        Xe
      );
    })();
    e = $___var_960d1395054f44db;
    (function (window, document, undefined) {
      var ToString = Object.prototype.toString;
      var Overrides = window._satellite && window._satellite.override;
      function assert (cond, msg) {
        if (!cond) {
          throw new Error(msg || 'Assertion Failure');
        }
      }
      var SL = {
        initialized: false,
        $data: function (elm, prop, val) {
          if (!elm) return;
          var __satellite__ = '__satellite__';
          var cache = SL.dataCache;
          var uuid = elm[__satellite__];
          if (!uuid) uuid = elm[__satellite__] = SL.uuid++;
          var datas = cache[uuid];
          if (!datas) datas = cache[uuid] = {};
          if (val === undefined) return datas[prop];
          else datas[prop] = val;
        },
        uuid: 1,
        dataCache: {},
        keys: function (obj) {
          var ret = [];
          for (var key in obj) if (obj.hasOwnProperty(key)) ret.push(key);
          return ret;
        },
        values: function (obj) {
          var ret = [];
          for (var key in obj) if (obj.hasOwnProperty(key)) ret.push(obj[key]);
          return ret;
        },
        isArray:
          Array.isArray ||
          function (thing) {
            return ToString.apply(thing) === '[object Array]';
          },
        isObject: function (thing) {
          return thing != null && !SL.isArray(thing) && typeof thing === 'object';
        },
        isString: function (thing) {
          return typeof thing === 'string';
        },
        isNumber: function (thing) {
          return ToString.apply(thing) === '[object Number]' && !SL.isNaN(thing);
        },
        isNaN: function (thing) {
          return thing !== thing;
        },
        isRegex: function (thing) {
          return thing instanceof RegExp;
        },
        isLinkTag: function (thing) {
          return !!(thing && thing.nodeName && thing.nodeName.toLowerCase() === 'a');
        },
        each: function (arr, func, context) {
          for (var i = 0, len = arr.length; i < len; i++) func.call(context, arr[i], i, arr);
        },
        map: function (arr, func, context) {
          var ret = [];
          for (var i = 0, len = arr.length; i < len; i++)
            ret.push(func.call(context, arr[i], i, arr));
          return ret;
        },
        filter: function (arr, cond, context) {
          var ret = [];
          for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            if (cond.call(context, item, i, arr)) ret.push(item);
          }
          return ret;
        },
        any: function (arr, cond, context) {
          for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            if (cond.call(context, item, i, arr)) return true;
          }
          return false;
        },
        every: function (arr, cond, context) {
          var retval = true;
          for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            retval = retval && cond.call(context, item, i, arr);
          }
          return retval;
        },
        contains: function (arr, obj) {
          return SL.indexOf(arr, obj) !== -1;
        },
        indexOf: function (arr, obj) {
          if (arr.indexOf) return arr.indexOf(obj);
          for (var i = arr.length; i--; ) if (obj === arr[i]) return i;
          return -1;
        },
        find: function (arr, cond, context) {
          var ret = [];
          if (!arr) return null;
          for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            if (cond.call(context, item, i, arr)) return item;
          }
          return null;
        },
        textMatch: function (str, pattern) {
          if (pattern == null) throw new Error('Illegal Argument: Pattern is not present');
          if (str == null) return false;
          if (typeof pattern === 'string') return str === pattern;
          else if (pattern instanceof RegExp) return pattern.test(str);
          else return false;
        },
        stringify: function (obj, seenValues) {
          seenValues = seenValues || [];
          if (SL.isObject(obj)) {
            if (SL.contains(seenValues, obj)) {
              return '<Cycle>';
            } else {
              seenValues.push(obj);
            }
          }
          if (SL.isArray(obj)) {
            return (
              '[' +
              SL.map(obj, function (value) {
                return SL.stringify(value, seenValues);
              }).join(',') +
              ']'
            );
          } else if (SL.isString(obj)) {
            return '"' + String(obj) + '"';
          }
          if (SL.isObject(obj)) {
            var data = [];
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop))
                data.push(prop + ': ' + SL.stringify(obj[prop], seenValues));
            }
            return '{' + data.join(', ') + '}';
          } else {
            return String(obj);
          }
        },
        trim: function (str) {
          if (str == null) return null;
          if (str.trim) {
            return str.trim();
          } else {
            return str.replace(/^ */, '').replace(/ *$/, '');
          }
        },
        bind: function (func, context) {
          return function () {
            return func.apply(context, arguments);
          };
        },
        throttle: function (fn, delay) {
          var timer = null;
          return function () {
            var context = this,
              args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
              fn.apply(context, args);
            }, delay);
          };
        },
        domReady: (function (ready) {
          var fns = [],
            fn,
            f = false,
            doc = document,
            testEl = doc.documentElement,
            hack = testEl.doScroll,
            domContentLoaded = 'DOMContentLoaded',
            addEventListener = 'addEventListener',
            onreadystatechange = 'onreadystatechange',
            loaded = /^loade|^c/.test(doc.readyState);
          function flush (f) {
            loaded = 1;
            while ((f = fns.shift())) f();
          }
          doc[addEventListener] &&
            doc[addEventListener](
              domContentLoaded,
              (fn = function () {
                doc.removeEventListener(domContentLoaded, fn, f);
                flush();
              }),
              f
            );
          hack &&
            doc.attachEvent(
              onreadystatechange,
              (fn = function () {
                if (/^c/.test(doc.readyState)) {
                  doc.detachEvent(onreadystatechange, fn);
                  flush();
                }
              })
            );
          return (ready = hack
            ? function (fn) {
                self != top
                  ? loaded
                    ? fn()
                    : fns.push(fn)
                  : (function () {
                      try {
                        testEl.doScroll('left');
                      } catch (e) {
                        return setTimeout(function () {
                          ready(fn);
                        }, 50);
                      }
                      fn();
                    })();
              }
            : function (fn) {
                loaded ? fn() : fns.push(fn);
              });
        })(),
        loadScript: function (url, callback) {
          var script = document.createElement('script');
          SL.scriptOnLoad(url, script, callback);
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        },
        scriptOnLoad: function (url, script, callback) {
          function cb (err) {
            if (err) SL.logError(err);
            if (callback) callback(err);
          }
          if ('onload' in script) {
            script.onload = function () {
              cb();
            };
            script.onerror = function () {
              cb(new Error('Failed to load script ' + url));
            };
          } else if ('readyState' in script) {
            script.onreadystatechange = function () {
              var rs = script.readyState;
              if (rs === 'loaded' || rs === 'complete') {
                script.onreadystatechange = null;
                cb();
              }
            };
          }
        },
        loadScriptOnce: function (url, callback) {
          if (SL.loadedScriptRegistry[url]) return;
          SL.loadScript(url, function (err) {
            if (!err) {
              SL.loadedScriptRegistry[url] = true;
            }
            if (callback) callback(err);
          });
        },
        loadedScriptRegistry: {},
        loadScriptSync: function (url) {
          if (!document.write) {
            SL.notify(
              'Cannot load sync the "' +
                url +
                '" script because "document.write" is not available',
              1
            );
            return;
          }
          if (SL.domReadyFired) {
            SL.notify('Cannot load sync the "' + url + '" script after DOM Ready.', 1);
            return;
          }
          if (url.indexOf('"') > -1) {
            url = encodeURI(url);
          }
          document.write('<script src="' + url + '"></scr' + 'ipt>');
        },
        pushAsyncScript: function (cb) {
          SL.tools['default'].pushAsyncScript(cb);
        },
        pushBlockingScript: function (cb) {
          SL.tools['default'].pushBlockingScript(cb);
        },
        addEventHandler: window.addEventListener
          ? function (node, evt, cb) {
              node.addEventListener(evt, cb, false);
            }
          : function (node, evt, cb) {
              node.attachEvent('on' + evt, cb);
            },
        removeEventHandler: window.removeEventListener
          ? function (node, evt, cb) {
              node.removeEventListener(evt, cb, false);
            }
          : function (node, evt, cb) {
              node.detachEvent('on' + evt, cb);
            },
        preventDefault: window.addEventListener
          ? function (e) {
              e.preventDefault();
            }
          : function (e) {
              e.returnValue = false;
            },
        stopPropagation: function (e) {
          e.cancelBubble = true;
          if (e.stopPropagation) e.stopPropagation();
        },
        containsElement: function (container, elm) {
          return container.contains
            ? container.contains(elm)
            : !!(container.compareDocumentPosition(elm) & 16);
        },
        matchesCss: (function (docEl) {
          function simpleTagMatch (selector, elm) {
            var tagName = elm.tagName;
            if (!tagName) return false;
            return selector.toLowerCase() === tagName.toLowerCase();
          }
          var matches =
            docEl.matchesSelector ||
            docEl.mozMatchesSelector ||
            docEl.webkitMatchesSelector ||
            docEl.oMatchesSelector ||
            docEl.msMatchesSelector;
          if (matches) {
            return function (selector, elm) {
              if (elm === document || elm === window) return false;
              try {
                return matches.call(elm, selector);
              } catch (e) {
                return false;
              }
            };
          } else if (docEl.querySelectorAll) {
            return function (selector, elm) {
              var parent = elm.parentNode;
              if (!parent) return false;
              if (selector.match(/^[a-z]+$/i)) {
                return simpleTagMatch(selector, elm);
              }
              try {
                var nodeList = elm.parentNode.querySelectorAll(selector);
                for (var i = nodeList.length; i--; ) if (nodeList[i] === elm) return true;
              } catch (e) {}
              return false;
            };
          } else {
            return function (selector, elm) {
              if (selector.match(/^[a-z]+$/i)) {
                return simpleTagMatch(selector, elm);
              }
              try {
                return SL.Sizzle.matches(selector, [elm]).length > 0;
              } catch (e) {
                return false;
              }
            };
          }
        })(document.documentElement),
        cssQuery: (function (doc) {
          if (doc.querySelectorAll) {
            return function (css, cb) {
              var results;
              try {
                results = doc.querySelectorAll(css);
              } catch (e) {
                results = [];
              }
              cb(results);
            };
          } else {
            return function (css, cb) {
              if (SL.Sizzle) {
                var results;
                try {
                  results = SL.Sizzle(css);
                } catch (e) {
                  results = [];
                }
                cb(results);
              } else SL.sizzleQueue.push([css, cb]);
            };
          }
        })(document),
        hasAttr: function (elem, attrName) {
          return elem.hasAttribute ? elem.hasAttribute(attrName) : elem[attrName] !== undefined;
        },
        inherit: function (subClass, superClass) {
          var f = function () {};
          f.prototype = superClass.prototype;
          subClass.prototype = new f();
          subClass.prototype.constructor = subClass;
        },
        extend: function (dst, src) {
          for (var prop in src) if (src.hasOwnProperty(prop)) dst[prop] = src[prop];
        },
        toArray: (function () {
          try {
            var slice = Array.prototype.slice;
            slice.call(document.documentElement.childNodes, 0)[0].nodeType;
            return function (thing) {
              return slice.call(thing, 0);
            };
          } catch (e) {
            return function (thing) {
              var ret = [];
              for (var i = 0, len = thing.length; i < len; i++) ret.push(thing[i]);
              return ret;
            };
          }
        })(),
        equalsIgnoreCase: function (str1, str2) {
          if (str1 == null) return str2 == null;
          if (str2 == null) return false;
          return String(str1).toLowerCase() === String(str2).toLowerCase();
        },
        poll: function (fn, freq, max_retries) {
          var retries = 0;
          freq = freq || 1000;
          check();
          function check () {
            if (SL.isNumber(max_retries) && retries++ >= max_retries) {
              return;
            }
            if (!fn()) {
              setTimeout(check, freq);
            }
          }
        },
        escapeForHtml: function (str) {
          if (!str) return str;
          return String(str)
            .replace(/\&/g, '&amp;')
            .replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/\'/g, '&#x27;')
            .replace(/\//g, '&#x2F;');
        },
      };
      SL.availableTools = {};
      SL.availableEventEmitters = [];
      SL.fireOnceEvents = ['condition', 'elementexists'];
      SL.initEventEmitters = function () {
        SL.eventEmitters = SL.map(SL.availableEventEmitters, function (ee) {
          return new ee();
        });
      };
      SL.eventEmitterBackgroundTasks = function () {
        SL.each(SL.eventEmitters, function (ee) {
          if ('backgroundTasks' in ee) ee.backgroundTasks();
        });
      };
      SL.initTools = function (toolSpecs) {
        var tools = { default: new DefaultTool() };
        var euCookieName = SL.settings.euCookieName || 'sat_track';
        for (var id in toolSpecs) {
          if (toolSpecs.hasOwnProperty(id)) {
            var toolSpec, ctr, tool;
            toolSpec = toolSpecs[id];
            if (toolSpec.euCookie) {
              var cookieSet = SL.readCookie(euCookieName) !== 'true';
              if (cookieSet) continue;
            }
            ctr = SL.availableTools[toolSpec.engine];
            if (!ctr) {
              var available = [];
              for (var key in SL.availableTools) {
                if (SL.availableTools.hasOwnProperty(key)) {
                  available.push(key);
                }
              }
              throw new Error(
                'No tool engine named ' +
                  toolSpec.engine +
                  ', available: ' +
                  available.join(',') +
                  '.'
              );
            }
            tool = new ctr(toolSpec);
            tool.id = id;
            tools[id] = tool;
          }
        }
        return tools;
      };
      SL.preprocessArguments = function (args, elm, evt, forceLowerCase, escapeHtml) {
        if (!args) return args;
        return preprocessArray(args, forceLowerCase);
        function forceLowerCaseIfNeeded (value) {
          return forceLowerCase && SL.isString(value) ? value.toLowerCase() : value;
        }
        function preprocessObject (obj) {
          var ret = {};
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              var value = obj[key];
              if (SL.isObject(value)) {
                ret[key] = preprocessObject(value);
              } else if (SL.isArray(value)) {
                ret[key] = preprocessArray(value, forceLowerCase);
              } else {
                ret[key] = forceLowerCaseIfNeeded(SL.replace(value, elm, evt, escapeHtml));
              }
            }
          }
          return ret;
        }
        function preprocessArray (args, forceLowerCase) {
          var ret = [];
          for (var i = 0, len = args.length; i < len; i++) {
            var value = args[i];
            if (SL.isString(value)) {
              value = forceLowerCaseIfNeeded(SL.replace(value, elm, evt));
            } else if (value && value.constructor === Object) {
              value = preprocessObject(value);
            }
            ret.push(value);
          }
          return ret;
        }
      };
      SL.execute = function (trig, elm, evt, tools) {
        if (_satellite.settings.hideActivity) return;
        tools = tools || SL.tools;
        function doit (toolName) {
          var tool = tools[toolName || 'default'];
          if (!tool) return;
          try {
            tool.triggerCommand(trig, elm, evt);
          } catch (e) {
            SL.logError(e);
          }
        }
        if (trig.engine) {
          var engine = trig.engine;
          for (var toolName in tools) {
            if (tools.hasOwnProperty(toolName)) {
              var tool = tools[toolName];
              if (tool.settings && tool.settings.engine === engine) doit(toolName);
            }
          }
        } else if (trig.tool instanceof Array)
          SL.each(trig.tool, function (toolName) {
            doit(toolName);
          });
        else doit(trig.tool);
      };
      SL.Logger = {
        outputEnabled: false,
        messages: [],
        keepLimit: 100,
        flushed: false,
        LEVELS: [null, null, 'log', 'info', 'warn', 'error'],
        message: function (msg, lvl) {
          var level = this.LEVELS[lvl] || 'log';
          this.messages.push([level, msg]);
          if (this.messages.length > this.keepLimit) {
            this.messages.shift();
          }
          if (this.outputEnabled) {
            this.echo(level, msg);
          }
        },
        getHistory: function () {
          return this.messages;
        },
        clearHistory: function () {
          this.messages = [];
        },
        setOutputState: function (state) {
          if (this.outputEnabled == state) return;
          this.outputEnabled = state;
          if (state) {
            this.flush();
          } else {
            this.flushed = false;
          }
        },
        echo: function (func, msg) {
          if (!window.console) return;
          window.console[func]('SATELLITE: ' + msg);
        },
        flush: function () {
          if (this.flushed) return;
          SL.each(
            this.messages,
            function (item) {
              if (item[2] === true) return;
              this.echo(item[0], item[1]);
              item[2] = true;
            },
            this
          );
          this.flushed = true;
        },
      };
      SL.notify = SL.bind(SL.Logger.message, SL.Logger);
      SL.cleanText = function (str) {
        if (str == null) return null;
        return SL.trim(str).replace(/\s+/g, ' ');
      };
      SL.cleanText.legacy = function (str) {
        if (str == null) return null;
        return SL.trim(str)
          .replace(/\s{2,}/g, ' ')
          .replace(/[^\000-\177]*/g, '');
      };
      SL.text = function (obj) {
        return obj.textContent || obj.innerText;
      };
      SL.specialProperties = {
        text: SL.text,
        cleanText: function (obj) {
          return SL.cleanText(SL.text(obj));
        },
      };
      SL.getObjectProperty = function (obj, property, supportSpecial) {
        var propChain = property.split('.');
        var currValue = obj;
        var special = SL.specialProperties;
        var attrMatch;
        for (var i = 0, len = propChain.length; i < len; i++) {
          if (currValue == null) return undefined;
          var prop = propChain[i];
          if (supportSpecial && prop.charAt(0) === '@') {
            var specialProp = prop.slice(1);
            currValue = special[specialProp](currValue);
            continue;
          }
          if (currValue.getAttribute && (attrMatch = prop.match(/^getAttribute\((.+)\)$/))) {
            var attr = attrMatch[1];
            currValue = currValue.getAttribute(attr);
            continue;
          }
          currValue = currValue[prop];
        }
        return currValue;
      };
      SL.getToolsByType = function (type) {
        if (!type) {
          throw new Error('Tool type is missing');
        }
        var result = [];
        for (var t in SL.tools) {
          if (SL.tools.hasOwnProperty(t)) {
            var tool = SL.tools[t];
            if (tool.settings && tool.settings.engine === type) {
              result.push(tool);
            }
          }
        }
        return result;
      };
      SL.setVar = function () {
        var customVars = SL.data.customVars;
        if (customVars == null) (SL.data.customVars = {}), (customVars = SL.data.customVars);
        if (typeof arguments[0] === 'string') {
          var prop = arguments[0];
          customVars[prop] = arguments[1];
        } else if (arguments[0]) {
          var mapping = arguments[0];
          for (var key in mapping) if (mapping.hasOwnProperty(key)) customVars[key] = mapping[key];
        }
      };
      SL.dataElementSafe = function (key, length) {
        if (arguments.length > 2) {
          var value = arguments[2];
          if (length === 'pageview') {
            SL.dataElementSafe.pageviewCache[key] = value;
          } else if (length === 'session') {
            SL.setCookie('_sdsat_' + key, value);
          } else if (length === 'visitor') {
            SL.setCookie('_sdsat_' + key, value, 365 * 2);
          }
        } else {
          if (length === 'pageview') {
            return SL.dataElementSafe.pageviewCache[key];
          } else if (length === 'session' || length === 'visitor') {
            return SL.readCookie('_sdsat_' + key);
          }
        }
      };
      SL.dataElementSafe.pageviewCache = {};
      SL.realGetDataElement = function (dataDef) {
        var ret;
        if (dataDef.selector) {
          if (SL.hasSelector) {
            SL.cssQuery(dataDef.selector, function (elms) {
              if (elms.length > 0) {
                var elm = elms[0];
                if (dataDef.property === 'text') {
                  ret = elm.innerText || elm.textContent;
                } else if (dataDef.property in elm) {
                  ret = elm[dataDef.property];
                } else if (SL.hasAttr(elm, dataDef.property)) {
                  ret = elm.getAttribute(dataDef.property);
                }
              }
            });
          }
        } else if (dataDef.queryParam) {
          if (dataDef.ignoreCase) {
            ret = SL.getQueryParamCaseInsensitive(dataDef.queryParam);
          } else {
            ret = SL.getQueryParam(dataDef.queryParam);
          }
        } else if (dataDef.cookie) {
          ret = SL.readCookie(dataDef.cookie);
        } else if (dataDef.jsVariable) {
          ret = SL.getObjectProperty(window, dataDef.jsVariable);
        } else if (dataDef.customJS) {
          ret = dataDef.customJS();
        } else if (dataDef.contextHub) {
          ret = dataDef.contextHub();
        }
        if (SL.isString(ret) && dataDef.cleanText) {
          ret = SL.cleanText(ret);
        }
        return ret;
      };
      SL.getDataElement = function (variable, suppressDefault, dataDef) {
        dataDef = dataDef || SL.dataElements[variable];
        if (dataDef == null) {
          return SL.settings.undefinedVarsReturnEmpty ? '' : null;
        }
        var ret = SL.realGetDataElement(dataDef);
        if (ret === undefined && dataDef.storeLength) {
          ret = SL.dataElementSafe(variable, dataDef.storeLength);
        } else if (ret !== undefined && dataDef.storeLength) {
          SL.dataElementSafe(variable, dataDef.storeLength, ret);
        }
        if (!ret && !suppressDefault) {
          ret = dataDef['default'] || '';
        }
        if (SL.isString(ret) && dataDef.forceLowerCase) {
          ret = ret.toLowerCase();
        }
        return ret;
      };
      SL.getVar = function (variable, elm, evt) {
        var custVars = SL.data.customVars,
          target = evt ? evt.target || evt.srcElement : null,
          randMatch,
          value;
        var map = {
          uri: SL.URI(),
          protocol: document.location.protocol,
          hostname: document.location.hostname,
        };
        if (SL.dataElements && variable in SL.dataElements) {
          return SL.getDataElement(variable);
        }
        value = map[variable.toLowerCase()];
        if (value === undefined) {
          if (variable.substring(0, 5) === 'this.') {
            variable = variable.slice(5);
            value = SL.getObjectProperty(elm, variable, true);
          } else if (variable.substring(0, 6) === 'event.') {
            variable = variable.slice(6);
            value = SL.getObjectProperty(evt, variable);
          } else if (variable.substring(0, 7) === 'target.') {
            variable = variable.slice(7);
            value = SL.getObjectProperty(target, variable);
          } else if (variable.substring(0, 7) === 'window.') {
            variable = variable.slice(7);
            value = SL.getObjectProperty(window, variable);
          } else if (variable.substring(0, 6) === 'param.') {
            variable = variable.slice(6);
            value = SL.getQueryParam(variable);
          } else if ((randMatch = variable.match(/^rand([0-9]+)$/))) {
            var len = Number(randMatch[1]),
              s = (Math.random() * (Math.pow(10, len) - 1)).toFixed(0);
            value = Array(len - s.length + 1).join('0') + s;
          } else {
            value = SL.getObjectProperty(custVars, variable);
          }
        }
        return value;
      };
      SL.getVars = function (variables, elm, evt) {
        var ret = {};
        SL.each(variables, function (variable) {
          ret[variable] = SL.getVar(variable, elm, evt);
        });
        return ret;
      };
      SL.replace = function (str, elm, evt, escapeHtml) {
        if (typeof str !== 'string') return str;
        return str.replace(/%(.*?)%/g, function (m, variable) {
          var val = SL.getVar(variable, elm, evt);
          if (val == null) {
            return SL.settings.undefinedVarsReturnEmpty ? '' : m;
          } else {
            if (escapeHtml) {
              return SL.escapeForHtml(val);
            } else {
              return val;
            }
          }
        });
      };
      SL.escapeHtmlParams = function (fn) {
        fn.escapeHtml = true;
        return fn;
      };
      SL.searchVariables = function (vars, elm, evt) {
        if (!vars || vars.length === 0) return '';
        var qsParts = [];
        for (var i = 0, len = vars.length; i < len; i++) {
          var varr = vars[i],
            value = SL.getVar(varr, elm, evt);
          qsParts.push(varr + '=' + escape(value));
        }
        return '?' + qsParts.join('&');
      };
      SL.fireRule = function (rule, elm, evt) {
        var triggers = rule.trigger;
        if (!triggers) return;
        for (var i = 0, len = triggers.length; i < len; i++) {
          var trig = triggers[i];
          SL.execute(trig, elm, evt);
        }
        if (SL.contains(SL.fireOnceEvents, rule.event)) rule.expired = true;
      };
      SL.isLinked = function (elm) {
        for (var cur = elm; cur; cur = cur.parentNode) {
          if (SL.isLinkTag(cur)) return true;
        }
        return false;
      };
      SL.firePageLoadEvent = function (type) {
        var location = document.location;
        var evt = { type: type, target: location };
        var rules = SL.pageLoadRules;
        var handlers = SL.evtHandlers[evt.type];
        for (var i = rules.length; i--; ) {
          var rule = rules[i];
          if (SL.ruleMatches(rule, evt, location)) {
            SL.notify('Rule "' + rule.name + '" fired.', 1);
            SL.fireRule(rule, location, evt);
          }
        }
        for (var id in SL.tools) {
          if (SL.tools.hasOwnProperty(id)) {
            var tool = SL.tools[id];
            if (tool.endPLPhase) {
              tool.endPLPhase(type);
            }
          }
        }
        if (handlers) {
          SL.each(handlers, function (cb) {
            cb(evt);
          });
        }
      };
      SL.track = function (ruleName) {
        ruleName = ruleName.replace(/^\s*/, '').replace(/\s*$/, '');
        for (var i = 0; i < SL.directCallRules.length; i++) {
          var rule = SL.directCallRules[i];
          if (rule.name === ruleName) {
            SL.notify('Direct call Rule "' + ruleName + '" fired.', 1);
            SL.fireRule(rule, location, { type: ruleName });
            return;
          }
        }
        SL.notify('Direct call Rule "' + ruleName + '" not found.', 1);
      };
      SL.basePath = function () {
        if (SL.data.host)
          return (
            (document.location.protocol === 'https:'
              ? 'https://' + SL.data.host.https
              : 'http://' + SL.data.host.http) + '/'
          );
        else return this.settings.basePath;
      };
      SL.setLocation = function (url) {
        window.location = url;
      };
      SL.parseQueryParams = function (str) {
        var URIDecode = function (str) {
          var result = str;
          try {
            result = decodeURIComponent(str);
          } catch (err) {}
          return result;
        };
        if (str === '' || SL.isString(str) === false) return {};
        if (str.indexOf('?') === 0) {
          str = str.substring(1);
        }
        var ret = {},
          pairs = str.split('&');
        SL.each(pairs, function (pair) {
          pair = pair.split('=');
          if (!pair[1]) {
            return;
          }
          ret[URIDecode(pair[0])] = URIDecode(pair[1]);
        });
        return ret;
      };
      SL.getCaseSensitivityQueryParamsMap = function (str) {
        var normal = SL.parseQueryParams(str);
        var insensitive = {};
        for (var prop in normal)
          if (normal.hasOwnProperty(prop)) insensitive[prop.toLowerCase()] = normal[prop];
        return { normal: normal, caseInsensitive: insensitive };
      };
      SL.updateQueryParams = function () {
        SL.QueryParams = SL.getCaseSensitivityQueryParamsMap(window.location.search);
      };
      SL.updateQueryParams();
      SL.getQueryParam = function (key) {
        return SL.QueryParams.normal[key];
      };
      SL.getQueryParamCaseInsensitive = function (key) {
        return SL.QueryParams.caseInsensitive[key.toLowerCase()];
      };
      SL.encodeObjectToURI = function (obj) {
        if (SL.isObject(obj) === false) {
          return '';
        }
        var uri = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            uri.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
          }
        }
        return uri.join('&');
      };
      SL.readCookie = function (name) {
        var nameEQ = name + '=';
        var parts = document.cookie.split(';');
        for (var i = 0; i < parts.length; i++) {
          var c = parts[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
          }
        }
        return undefined;
      };
      SL.setCookie = function (name, value, days) {
        var expires;
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = '; expires=' + date.toGMTString();
        } else {
          expires = '';
        }
        document.cookie = name + '=' + value + expires + '; path=/';
      };
      SL.removeCookie = function (name) {
        SL.setCookie(name, '', -1);
      };
      SL.getElementProperty = function (elm, prop) {
        if (prop.charAt(0) === '@') {
          var special = SL.specialProperties[prop.substring(1)];
          if (special) {
            return special(elm);
          }
        }
        if (prop === 'innerText') {
          return SL.text(elm);
        }
        if (prop in elm) return elm[prop];
        return elm.getAttribute ? elm.getAttribute(prop) : undefined;
      };
      SL.propertiesMatch = function (property, elm) {
        if (property) {
          for (var prop in property) {
            if (property.hasOwnProperty(prop)) {
              var target = property[prop];
              var value = SL.getElementProperty(elm, prop);
              if (typeof target === 'string' && target !== value) return false;
              if (target instanceof RegExp && !target.test(value)) return false;
            }
          }
        }
        return true;
      };
      SL.isRightClick = function (e) {
        var ret;
        if (e.which) {
          ret = e.which == 3;
        } else if (e.button) {
          ret = e.button == 2;
        }
        return ret;
      };
      SL.ruleMatches = function (rule, evt, elm, eventEntriesFound) {
        var cnd = rule.condition;
        var cnds = rule.conditions;
        var property = rule.property;
        var eventType = evt.type;
        var matchValue = rule.value;
        var target = evt.target || evt.srcElement;
        var initialTarget = elm === target;
        if (
          rule.event !== eventType &&
          (rule.event !== 'custom' || rule.customEvent !== eventType)
        )
          return false;
        if (!SL.ruleInScope(rule)) return false;
        if (rule.event === 'click' && SL.isRightClick(evt)) {
          return false;
        }
        if (rule.isDefault && eventEntriesFound > 0) return false;
        if (rule.expired) return false;
        if (eventType === 'inview' && evt.inviewDelay !== rule.inviewDelay) {
          return false;
        }
        if (
          !(
            initialTarget ||
            (rule.bubbleFireIfParent !== false &&
              (eventEntriesFound === 0 || rule.bubbleFireIfChildFired !== false))
          )
        )
          return false;
        if (rule.selector && !SL.matchesCss(rule.selector, elm)) return false;
        if (!SL.propertiesMatch(property, elm)) return false;
        if (matchValue != null) {
          if (typeof matchValue === 'string') {
            if (matchValue !== elm.value) return false;
          } else if (!matchValue.test(elm.value)) return false;
        }
        if (cnd) {
          try {
            if (!cnd.call(elm, evt, target)) {
              SL.notify('Condition for rule "' + rule.name + '" not met.', 1);
              return false;
            }
          } catch (e) {
            SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1);
            return false;
          }
        }
        if (cnds) {
          var failed = SL.find(cnds, function (cnd) {
            try {
              return !cnd.call(elm, evt, target);
            } catch (e) {
              SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1);
              return true;
            }
          });
          if (failed) {
            SL.notify(
              'Condition ' + failed.toString() + ' for rule "' + rule.name + '" not met.',
              1
            );
            return false;
          }
        }
        return true;
      };
      SL.evtHandlers = {};
      SL.bindEvent = function (evtName, callback) {
        var handlers = SL.evtHandlers;
        if (!handlers[evtName]) handlers[evtName] = [];
        handlers[evtName].push(callback);
      };
      SL.whenEvent = SL.bindEvent;
      SL.unbindEvent = function (evtName, callback) {
        var handlers = SL.evtHandlers;
        if (!handlers[evtName]) return;
        var idx = SL.indexOf(handlers[evtName], callback);
        handlers[evtName].splice(idx, 1);
      };
      SL.bindEventOnce = function (evtName, callback) {
        var wrapped = function () {
          SL.unbindEvent(evtName, wrapped);
          callback.apply(null, arguments);
        };
        SL.bindEvent(evtName, wrapped);
      };
      SL.isVMLPoisoned = function (elm) {
        if (!elm) return false;
        try {
          elm.nodeName;
        } catch (e) {
          if (e.message === 'Attribute only valid on v:image') {
            return true;
          }
        }
        return false;
      };
      SL.handleEvent = function (evt) {
        if (SL.$data(evt, 'eventProcessed')) return;
        var eventType = evt.type.toLowerCase(),
          target = evt.target || evt.srcElement,
          rulesMatched = 0,
          rules = SL.rules,
          tools = SL.tools,
          handlers = SL.evtHandlers[evt.type];
        if (SL.isVMLPoisoned(target)) {
          SL.notify('detected ' + eventType + ' on poisoned VML element, skipping.', 1);
          return;
        }
        if (handlers) {
          SL.each(handlers, function (cb) {
            cb(evt);
          });
        }
        var nodeName = target && target.nodeName;
        if (nodeName) SL.notify('detected ' + eventType + ' on ' + target.nodeName, 1);
        else SL.notify('detected ' + eventType, 1);
        for (var curr = target; curr; curr = curr.parentNode) {
          var bubbleStop = false;
          SL.each(rules, function (rule) {
            if (SL.ruleMatches(rule, evt, curr, rulesMatched)) {
              SL.notify('Rule "' + rule.name + '" fired.', 1);
              SL.fireRule(rule, curr, evt);
              rulesMatched++;
              if (rule.bubbleStop) bubbleStop = true;
            }
          });
          if (bubbleStop) break;
        }
        SL.$data(evt, 'eventProcessed', true);
      };
      SL.onEvent = document.querySelectorAll
        ? function (evt) {
            SL.handleEvent(evt);
          }
        : (function () {
            var q = [];
            var onEvent = function (evt) {
              if (evt.selector) q.push(evt);
              else SL.handleEvent(evt);
            };
            onEvent.pendingEvents = q;
            return onEvent;
          })();
      SL.fireEvent = function (type, target) {
        SL.onEvent({ type: type, target: target });
      };
      SL.registerEvents = function (elm, events) {
        for (var i = events.length - 1; i >= 0; i--) {
          var event = events[i];
          if (!SL.$data(elm, event + '.tracked')) {
            SL.addEventHandler(elm, event, SL.onEvent);
            SL.$data(elm, event + '.tracked', true);
          }
        }
      };
      SL.registerEventsForTags = function (tags, events) {
        for (var i = tags.length - 1; i >= 0; i--) {
          var tag = tags[i];
          var elms = document.getElementsByTagName(tag);
          for (var j = elms.length - 1; j >= 0; j--) SL.registerEvents(elms[j], events);
        }
      };
      SL.setListeners = function () {
        var events = ['click', 'submit'];
        SL.each(SL.rules, function (rule) {
          if (
            rule.event === 'custom' &&
            rule.hasOwnProperty('customEvent') &&
            !SL.contains(events, rule.customEvent)
          ) {
            events.push(rule.customEvent);
          }
        });
        SL.registerEvents(document, events);
      };
      SL.getUniqueRuleEvents = function () {
        if (!SL._uniqueRuleEvents) {
          SL._uniqueRuleEvents = [];
          SL.each(SL.rules, function (rule) {
            if (SL.indexOf(SL._uniqueRuleEvents, rule.event) === -1) {
              SL._uniqueRuleEvents.push(rule.event);
            }
          });
        }
        return SL._uniqueRuleEvents;
      };
      SL.setFormListeners = function () {
        if (!SL._relevantFormEvents) {
          var formEvents = ['change', 'focus', 'blur', 'keypress'];
          SL._relevantFormEvents = SL.filter(SL.getUniqueRuleEvents(), function (event) {
            return SL.indexOf(formEvents, event) !== -1;
          });
        }
        if (SL._relevantFormEvents.length) {
          SL.registerEventsForTags(
            ['input', 'select', 'textarea', 'button'],
            SL._relevantFormEvents
          );
        }
      };
      SL.setVideoListeners = function () {
        if (!SL._relevantVideoEvents) {
          var videoEvents = ['play', 'pause', 'ended', 'volumechange', 'stalled', 'loadeddata'];
          SL._relevantVideoEvents = SL.filter(SL.getUniqueRuleEvents(), function (event) {
            return SL.indexOf(videoEvents, event) !== -1;
          });
        }
        if (SL._relevantVideoEvents.length) {
          SL.registerEventsForTags(['video'], SL._relevantVideoEvents);
        }
      };
      SL.readStoredSetting = function (name) {
        const $___old_d99b18462b41d568 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'localStorage'
        );
        try {
          if ($___old_d99b18462b41d568)
            ({}.constructor.defineProperty(
              window,
              'localStorage',
              $___stub_b317e19f866a2da7.localStorage
            ));
          return function () {
            try {
              name = 'sdsat_' + name;
              return window.localStorage.getItem(name);
            } catch (e) {
              SL.notify('Cannot read stored setting from localStorage: ' + e.message, 2);
              return null;
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_d99b18462b41d568)
            ({}.constructor.defineProperty(window, 'localStorage', $___old_d99b18462b41d568));
        }
      };
      SL.loadStoredSettings = function () {
        var debug = SL.readStoredSetting('debug'),
          hideActivity = SL.readStoredSetting('hide_activity');
        if (debug) SL.settings.notifications = debug === 'true';
        if (hideActivity) SL.settings.hideActivity = hideActivity === 'true';
      };
      SL.isRuleActive = function (rule, date) {
        var schd = rule.schedule;
        if (!schd) return true;
        var utc = schd.utc,
          getDate = utc ? 'getUTCDate' : 'getDate',
          getDay = utc ? 'getUTCDay' : 'getDay',
          getFullYear = utc ? 'getUTCFullYear' : 'getFullYear',
          getMonth = utc ? 'getUTCMonth' : 'getMonth',
          getHours = utc ? 'getUTCHours' : 'getHours',
          getMinutes = utc ? 'getUTCMinutes' : 'getMinutes',
          setHours = utc ? 'setUTCHours' : 'setHours',
          setMinutes = utc ? 'setUTCMinutes' : 'setMinutes',
          setDate = utc ? 'setUTCDate' : 'setDate';
        date = date || new Date();
        function dayDiff (one, other) {
          other = modifyDate(other, { hour: one[getHours](), minute: one[getMinutes]() });
          return Math.floor(Math.abs((one.getTime() - other.getTime()) / (1000 * 60 * 60 * 24)));
        }
        function monthDiff (one, other) {
          function months (date) {
            return date[getFullYear]() * 12 + date[getMonth]();
          }
          return Math.abs(months(one) - months(other));
        }
        function modifyDate (date, fields) {
          var retval = new Date(date.getTime());
          for (var field in fields) {
            if (fields.hasOwnProperty(field)) {
              var val = fields[field];
              switch (field) {
                case 'hour':
                  retval[setHours](val);
                  break;
                case 'minute':
                  retval[setMinutes](val);
                  break;
                case 'date':
                  retval[setDate](val);
                  break;
              }
            }
          }
          return retval;
        }
        function timeGreaterThan (one, other) {
          var h1 = one[getHours](),
            m1 = one[getMinutes](),
            h2 = other[getHours](),
            m2 = other[getMinutes]();
          return h1 * 60 + m1 > h2 * 60 + m2;
        }
        function timeLessThan (one, other) {
          var h1 = one[getHours](),
            m1 = one[getMinutes](),
            h2 = other[getHours](),
            m2 = other[getMinutes]();
          return h1 * 60 + m1 < h2 * 60 + m2;
        }
        if (schd.repeat) {
          if (timeGreaterThan(schd.start, date)) return false;
          if (timeLessThan(schd.end, date)) return false;
          if (date < schd.start) return false;
          if (schd.endRepeat && date >= schd.endRepeat) return false;
          if (schd.repeat === 'daily') {
            if (schd.repeatEvery) {
              var dd = dayDiff(schd.start, date);
              if (dd % schd.repeatEvery !== 0) return false;
            }
          } else if (schd.repeat === 'weekly') {
            if (schd.days) {
              if (!SL.contains(schd.days, date[getDay]())) return false;
            } else if (schd.start[getDay]() !== date[getDay]()) return false;
            if (schd.repeatEvery) {
              var diff = dayDiff(schd.start, date);
              if (diff % (7 * schd.repeatEvery) !== 0) return false;
            }
          } else if (schd.repeat === 'monthly') {
            if (schd.repeatEvery) {
              var md = monthDiff(schd.start, date);
              if (md % schd.repeatEvery !== 0) return false;
            }
            if (schd.nthWeek && schd.mthDay) {
              if (schd.mthDay !== date[getDay]()) return false;
              var nthWeek = Math.floor((date[getDate]() - date[getDay]() + 1) / 7);
              if (schd.nthWeek !== nthWeek) return false;
            } else if (schd.start[getDate]() !== date[getDate]()) return false;
          } else if (schd.repeat === 'yearly') {
            if (schd.start[getMonth]() !== date[getMonth]()) return false;
            if (schd.start[getDate]() !== date[getDate]()) return false;
            if (schd.repeatEvery) {
              var diff = Math.abs(schd.start[getFullYear]() - date[getFullYear]());
              if (diff % schd.repeatEvery !== 0) return false;
            }
          }
        } else {
          if (schd.start > date) return false;
          if (schd.end < date) return false;
        }
        return true;
      };
      SL.isOutboundLink = function (elm) {
        if (!elm.getAttribute('href')) return false;
        var hostname = elm.hostname;
        var href = elm.href;
        var protocol = elm.protocol;
        if (protocol !== 'http:' && protocol !== 'https:') return false;
        var isMyDomain = SL.any(SL.settings.domainList, function (domain) {
          return SL.isSubdomainOf(hostname, domain);
        });
        if (isMyDomain) return false;
        return hostname !== location.hostname;
      };
      SL.isLinkerLink = function (elm) {
        if (!elm.getAttribute || !elm.getAttribute('href')) return false;
        return (
          SL.hasMultipleDomains() &&
          elm.hostname != location.hostname &&
          !elm.href.match(/^javascript/i) &&
          !SL.isOutboundLink(elm)
        );
      };
      SL.isSubdomainOf = function (sub, root) {
        if (sub === root) return true;
        var idx = sub.length - root.length;
        if (idx > 0) return SL.equalsIgnoreCase(sub.substring(idx), root);
        return false;
      };
      SL.getVisitorId = function () {
        var visitorIdTools = SL.getToolsByType('visitor_id');
        if (visitorIdTools.length === 0) {
          return null;
        }
        return visitorIdTools[0].getInstance();
      };
      SL.URI = function () {
        var ret = document.location.pathname + document.location.search;
        if (SL.settings.forceLowerCase) {
          ret = ret.toLowerCase();
        }
        return ret;
      };
      SL.URL = function () {
        var ret = document.location.href;
        if (SL.settings.forceLowerCase) {
          ret = ret.toLowerCase();
        }
        return ret;
      };
      SL.filterRules = function () {
        function matches (rule) {
          if (!SL.isRuleActive(rule)) return false;
          return true;
        }
        SL.rules = SL.filter(SL.rules, matches);
        SL.pageLoadRules = SL.filter(SL.pageLoadRules, matches);
      };
      SL.ruleInScope = function (rule, location) {
        location = location || document.location;
        var scope = rule.scope;
        if (!scope) return true;
        var URI = scope.URI;
        var subdomains = scope.subdomains;
        var domains = scope.domains;
        var protocols = scope.protocols;
        var hashes = scope.hashes;
        if (URI && includeExcludeFails(URI, location.pathname + location.search)) return false;
        if (subdomains && includeExcludeFails(subdomains, location.hostname)) return false;
        if (domains && matchFails(domains, location.hostname)) return false;
        if (protocols && matchFails(protocols, location.protocol)) return false;
        if (hashes && includeExcludeFails(hashes, location.hash)) return false;
        function includeExcludeFails (matcher, matchee) {
          var include = matcher.include;
          var exclude = matcher.exclude;
          if (include && matchFails(include, matchee)) return true;
          if (exclude) {
            if (SL.isString(exclude) && exclude === matchee) return true;
            if (SL.isArray(exclude) && SL.any(exclude, matches)) return true;
            if (SL.isRegex(exclude) && matches(exclude)) return true;
          }
          return false;
          function matches (regex) {
            return matchee.match(regex);
          }
        }
        function matchFails (matcher, matchee) {
          if (SL.isString(matcher) && matcher !== matchee) return true;
          if (SL.isArray(matcher) && !SL.any(matcher, matches)) return true;
          if (SL.isRegex(matcher) && !matches(matcher)) return true;
          return false;
          function matches (regex) {
            return matchee.match(regex);
          }
        }
        return true;
      };
      SL.backgroundTasks = function () {
        var start = +new Date();
        SL.setFormListeners();
        SL.setVideoListeners();
        SL.loadStoredSettings();
        SL.registerNewElementsForDynamicRules();
        SL.eventEmitterBackgroundTasks();
        var end = +new Date();
      };
      SL.registerNewElementsForDynamicRules = function () {
        function cssQuery (selector, callback) {
          var hit = cssQuery.cache[selector];
          if (hit) {
            return callback(hit);
          } else {
            SL.cssQuery(selector, function (elms) {
              cssQuery.cache[selector] = elms;
              callback(elms);
            });
          }
        }
        cssQuery.cache = {};
        SL.each(SL.dynamicRules, function (rule) {
          cssQuery(rule.selector, function (elms) {
            SL.each(elms, function (elm) {
              var event = rule.event === 'custom' ? rule.customEvent : rule.event;
              if (SL.$data(elm, 'dynamicRules.seen.' + event)) return;
              SL.$data(elm, 'dynamicRules.seen.' + event, true);
              if (SL.propertiesMatch(rule.property, elm)) {
                SL.registerEvents(elm, [event]);
              }
            });
          });
        });
      };
      SL.ensureCSSSelector = function () {
        if (document.querySelectorAll) {
          SL.hasSelector = true;
          return;
        }
        SL.loadingSizzle = true;
        SL.sizzleQueue = [];
        SL.loadScript(SL.basePath() + 'selector.js', function () {
          if (!SL.Sizzle) {
            SL.logError(new Error('Failed to load selector.js'));
            return;
          }
          var pending = SL.onEvent.pendingEvents;
          SL.each(
            pending,
            function (evt) {
              SL.handleEvent(evt);
            },
            this
          );
          SL.onEvent = SL.handleEvent;
          SL.hasSelector = true;
          delete SL.loadingSizzle;
          SL.each(SL.sizzleQueue, function (item) {
            SL.cssQuery(item[0], item[1]);
          });
          delete SL.sizzleQueue;
        });
      };
      SL.errors = [];
      SL.logError = function (err) {
        SL.errors.push(err);
        SL.notify(err.name + ' - ' + err.message, 5);
      };
      SL.pageBottom = function () {
        if (!SL.initialized) return;
        SL.pageBottomFired = true;
        SL.firePageLoadEvent('pagebottom');
      };
      SL.stagingLibraryOverride = function () {
        var libraryOverride = SL.readStoredSetting('stagingLibrary') === 'true';
        if (libraryOverride) {
          var scripts = document.getElementsByTagName('script'),
            regex = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/,
            regexStaging = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/,
            match,
            matchStaging,
            src;
          for (var i = 0, len = scripts.length; i < len; i++) {
            src = scripts[i].getAttribute('src');
            if (!src) continue;
            if (!match) match = src.match(regex);
            if (!matchStaging) matchStaging = src.match(regexStaging);
            if (matchStaging) break;
          }
          if (match && !matchStaging) {
            var stagingURL = match[1] + 'satelliteLib-' + match[2] + '-staging.js';
            if (document.write) {
              document.write('<script src="' + stagingURL + '"></script>');
            } else {
              var s = document.createElement('script');
              s.src = stagingURL;
              document.head.appendChild(s);
            }
            return true;
          }
        }
        return false;
      };
      SL.checkAsyncInclude = function () {
        if (window.satellite_asyncLoad)
          SL.notify(
            'You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.',
            5
          );
      };
      SL.hasMultipleDomains = function () {
        return !!SL.settings.domainList && SL.settings.domainList.length > 1;
      };
      SL.handleOverrides = function () {
        if (Overrides) {
          for (var key in Overrides) {
            if (Overrides.hasOwnProperty(key)) {
              SL.data[key] = Overrides[key];
            }
          }
        }
      };
      SL.privacyManagerParams = function () {
        var params = {};
        SL.extend(params, SL.settings.privacyManagement);
        var analyticsTools = [];
        for (var key in SL.tools) {
          if (SL.tools.hasOwnProperty(key)) {
            var tool = SL.tools[key];
            var settings = tool.settings;
            if (!settings) continue;
            if (settings.engine === 'sc') {
              analyticsTools.push(tool);
            }
          }
        }
        var analyticsTrackingServers = SL.filter(
          SL.map(analyticsTools, function (tool) {
            return tool.getTrackingServer();
          }),
          function (s) {
            return s != null;
          }
        );
        params.adobeAnalyticsTrackingServers = analyticsTrackingServers;
        var substitutable = ['bannerText', 'headline', 'introductoryText', 'customCSS'];
        for (var i = 0; i < substitutable.length; i++) {
          var prop = substitutable[i];
          var spec = params[prop];
          if (!spec) continue;
          if (spec.type === 'text') {
            params[prop] = spec.value;
          } else if (spec.type === 'data') {
            params[prop] = SL.getVar(spec.value);
          } else {
            throw new Error('Invalid type: ' + spec.type);
          }
        }
        return params;
      };
      SL.prepareLoadPrivacyManager = function () {
        SL.addEventHandler(window, 'load', function () {
          loadWhenAllSCToolsLoaded(SL.loadPrivacyManager);
        });
        function loadWhenAllSCToolsLoaded (callback) {
          var scTools = SL.filter(SL.values(SL.tools), function (tool) {
            return tool.settings && tool.settings.engine === 'sc';
          });
          if (scTools.length === 0) {
            return callback();
          }
          var numLoaded = 0;
          SL.each(scTools, function (tool) {
            SL.bindEvent(tool.id + '.load', onLoad);
          });
          var tid = setTimeout(onTimeout, 5000);
          function onLoad () {
            numLoaded++;
            if (numLoaded === scTools.length) {
              cleanUp();
              clearTimeout(tid);
              callback();
            }
          }
          function cleanUp () {
            SL.each(scTools, function (tool) {
              SL.unbindEvent(tool.id + '.load', onLoad);
            });
          }
          function onTimeout () {
            cleanUp();
            callback();
          }
        }
      };
      SL.loadPrivacyManager = function () {
        var scriptUrl = SL.basePath() + 'privacy_manager.js';
        SL.loadScript(scriptUrl, function () {
          var pm = SL.privacyManager;
          pm.configure(SL.privacyManagerParams());
          pm.openIfRequired();
        });
      };
      SL.init = function (settings) {
        if (SL.stagingLibraryOverride()) return;
        SL.configurationSettings = settings;
        var tools = settings.tools;
        delete settings.tools;
        for (var key in settings) {
          if (settings.hasOwnProperty(key)) {
            SL[key] = settings[key];
          }
        }
        if (SL.data.customVars === undefined) SL.data.customVars = {};
        SL.data.queryParams = SL.QueryParams.normal;
        SL.handleOverrides();
        SL.detectBrowserInfo();
        if (SL.trackVisitorInfo) SL.trackVisitorInfo();
        SL.loadStoredSettings();
        SL.Logger.setOutputState(SL.settings.notifications);
        SL.checkAsyncInclude();
        SL.ensureCSSSelector();
        SL.filterRules();
        SL.dynamicRules = SL.filter(SL.rules, function (rule) {
          return rule.eventHandlerOnElement;
        });
        SL.tools = SL.initTools(tools);
        SL.initEventEmitters();
        SL.firePageLoadEvent('aftertoolinit');
        if (SL.settings.privacyManagement) {
          SL.prepareLoadPrivacyManager();
        }
        if (SL.hasSelector) SL.domReady(SL.eventEmitterBackgroundTasks);
        SL.setListeners();
        SL.domReady(function () {
          SL.poll(function () {
            SL.backgroundTasks();
          }, SL.settings.recheckEvery || 3000);
        });
        SL.domReady(function () {
          SL.domReadyFired = true;
          if (!SL.pageBottomFired) SL.pageBottom();
          SL.firePageLoadEvent('domready');
        });
        SL.addEventHandler(window, 'load', function () {
          SL.firePageLoadEvent('windowload');
        });
        SL.firePageLoadEvent('pagetop');
        SL.initialized = true;
      };
      SL.pageLoadPhases = ['aftertoolinit', 'pagetop', 'pagebottom', 'domready', 'windowload'];
      SL.loadEventBefore = function (one, other) {
        return SL.indexOf(SL.pageLoadPhases, one) <= SL.indexOf(SL.pageLoadPhases, other);
      };
      SL.flushPendingCalls = function (tool) {
        if (tool.pending) {
          SL.each(tool.pending, function (call) {
            var cmd = call[0],
              elm = call[1],
              evt = call[2],
              args = call[3];
            if (cmd in tool) tool[cmd].apply(tool, [elm, evt].concat(args));
            else if (tool.emit) tool.emit(cmd, elm, evt, args);
            else SL.notify('Failed to trigger ' + cmd + ' for tool ' + tool.id, 1);
          });
          delete tool.pending;
        }
      };
      SL.setDebug = function (debug) {
        try {
          window.localStorage.setItem('sdsat_debug', debug);
        } catch (e) {
          SL.notify('Cannot set debug mode: ' + e.message, 2);
        }
      };
      SL.getUserAgent = function () {
        const $___old_23e9aac2399f9f9b = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_23e9aac2399f9f9b)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_47c01efa79e9f191.userAgent
            ));
          return function () {
            return navigator.userAgent;
          }.apply(this, arguments);
        } finally {
          if ($___old_23e9aac2399f9f9b)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_23e9aac2399f9f9b
            ));
        }
      };
      SL.detectBrowserInfo = function () {
        function matcher (regexs) {
          return function (userAgent) {
            for (var key in regexs) {
              if (regexs.hasOwnProperty(key)) {
                var regex = regexs[key];
                var match = regex.test(userAgent);
                if (match) return key;
              }
            }
            return 'Unknown';
          };
        }
        var getBrowser = matcher({
          'IE Edge Mobile': /Windows Phone.*Edge/,
          'IE Edge': /Edge/,
          OmniWeb: /OmniWeb/,
          'Opera Mini': /Opera Mini/,
          'Opera Mobile': /Opera Mobi/,
          Opera: /Opera/,
          Chrome: /Chrome|CriOS|CrMo/,
          Firefox: /Firefox|FxiOS/,
          'IE Mobile': /IEMobile/,
          IE: /MSIE|Trident/,
          'Mobile Safari': /Mobile(\/[0-9A-z]+)? Safari/,
          Safari: /Safari/,
        });
        var getOS = matcher({
          Blackberry: /BlackBerry|BB10/,
          'Symbian OS': /Symbian|SymbOS/,
          Maemo: /Maemo/,
          Android: /Android/,
          Linux: / Linux /,
          Unix: /FreeBSD|OpenBSD|CrOS/,
          Windows: /[\( ]Windows /,
          iOS: /iPhone|iPad|iPod/,
          MacOS: /Macintosh;/,
        });
        var getDeviceType = matcher({
          Nokia: /Symbian|SymbOS|Maemo/,
          'Windows Phone': /Windows Phone/,
          Blackberry: /BlackBerry|BB10/,
          Android: /Android/,
          iPad: /iPad/,
          iPod: /iPod/,
          iPhone: /iPhone/,
          Desktop: /.*/,
        });
        var userAgent = SL.getUserAgent();
        SL.browserInfo = {
          browser: getBrowser(userAgent),
          os: getOS(userAgent),
          deviceType: getDeviceType(userAgent),
        };
      };
      SL.isHttps = function () {
        return 'https:' == document.location.protocol;
      };
      SL.BaseTool = function (settings) {
        this.settings = settings || {};
        this.forceLowerCase = SL.settings.forceLowerCase;
        if ('forceLowerCase' in this.settings) {
          this.forceLowerCase = this.settings.forceLowerCase;
        }
      };
      SL.BaseTool.prototype = {
        triggerCommand: function (trig, elm, evt) {
          var settings = this.settings || {};
          if (this.initialize && this.isQueueAvailable()) {
            if (this.isQueueable(trig) && evt && SL.loadEventBefore(evt.type, settings.loadOn)) {
              this.queueCommand(trig, elm, evt);
              return;
            }
          }
          var cmd = trig.command;
          var method = this['$' + cmd];
          var escapeHtml = method ? method.escapeHtml : false;
          var args = SL.preprocessArguments(
            trig['arguments'],
            elm,
            evt,
            this.forceLowerCase,
            escapeHtml
          );
          if (method) {
            method.apply(this, [elm, evt].concat(args));
          } else if (this.$missing$) {
            this.$missing$(cmd, elm, evt, args);
          } else SL.notify('Failed to trigger ' + cmd + ' for tool ' + this.id, 1);
        },
        endPLPhase: function (pageLoadEvent) {},
        isQueueable: function (trig) {
          return trig.command !== 'cancelToolInit';
        },
        isQueueAvailable: function () {
          return !this.initialized && !this.initializing;
        },
        flushQueue: function () {
          if (this.pending) {
            SL.each(
              this.pending,
              function (args) {
                this.triggerCommand.apply(this, args);
              },
              this
            );
            this.pending = [];
          }
        },
        queueCommand: function (trig, elm, evt) {
          if (!this.pending) this.pending = [];
          this.pending.push([trig, elm, evt]);
        },
        $cancelToolInit: function () {
          this._cancelToolInit = true;
        },
      };
      window._satellite = SL;
      function DataElementChangeEmitter () {
        var rules = SL.filter(SL.rules, function (rule) {
          return rule.event.indexOf('dataelementchange') === 0;
        });
        this.dataElementsNames = SL.map(
          rules,
          function (rule) {
            var matchedSubstrings = rule.event.match(/dataelementchange\((.*)\)/i);
            return matchedSubstrings[1];
          },
          this
        );
        this.initPolling();
      }
      DataElementChangeEmitter.prototype.getStringifiedValue =
        (window.JSON && window.JSON.stringify) || SL.stringify;
      DataElementChangeEmitter.prototype.initPolling = function () {
        if (this.dataElementsNames.length === 0) {
          return;
        }
        this.dataElementsStore = this.getDataElementsValues();
        SL.poll(SL.bind(this.checkDataElementValues, this), 1000);
      };
      DataElementChangeEmitter.prototype.getDataElementsValues = function () {
        var values = {};
        SL.each(
          this.dataElementsNames,
          function (dataElementName) {
            var value = SL.getVar(dataElementName);
            values[dataElementName] = this.getStringifiedValue(value);
          },
          this
        );
        return values;
      };
      DataElementChangeEmitter.prototype.checkDataElementValues = function () {
        SL.each(
          this.dataElementsNames,
          SL.bind(function (dataElementName) {
            var currentStringifiedValue = this.getStringifiedValue(SL.getVar(dataElementName));
            var previousStringifiedValue = this.dataElementsStore[dataElementName];
            if (currentStringifiedValue !== previousStringifiedValue) {
              this.dataElementsStore[dataElementName] = currentStringifiedValue;
              SL.onEvent({ type: 'dataelementchange(' + dataElementName + ')', target: document });
            }
          }, this)
        );
      };
      SL.availableEventEmitters.push(DataElementChangeEmitter);
      function OrientationChangeEventEmitter () {
        SL.addEventHandler(
          window,
          'orientationchange',
          OrientationChangeEventEmitter.orientationChange
        );
      }
      OrientationChangeEventEmitter.orientationChange = function (e) {
        var orientation = window.orientation === 0 ? 'portrait' : 'landscape';
        e.orientation = orientation;
        SL.onEvent(e);
      };
      SL.availableEventEmitters.push(OrientationChangeEventEmitter);
      function VisibilityEventEmitter () {
        this.defineEvents();
        this.visibilityApiHasPriority = true;
        if (!document.addEventListener) {
          this.attachDetachOlderEventListeners(true, document, 'focusout');
        } else {
          this.setVisibilityApiPriority(false);
        }
        var context = this;
        SL.bindEvent('aftertoolinit', function () {
          SL.fireEvent(SL.visibility.isHidden() ? 'tabblur' : 'tabfocus');
        });
      }
      VisibilityEventEmitter.prototype = {
        defineEvents: function () {
          this.oldBlurClosure = function () {
            SL.fireEvent('tabblur', document);
          };
          this.oldFocusClosure = SL.bind(function () {
            if (this.visibilityApiHasPriority) {
              SL.fireEvent('tabfocus', document);
            } else {
              if (SL.visibility.getHiddenProperty() != null) {
                if (!SL.visibility.isHidden()) {
                  SL.fireEvent('tabfocus', document);
                }
              } else {
                SL.fireEvent('tabfocus', document);
              }
            }
          }, this);
        },
        attachDetachModernEventListeners: function (add) {
          var method = add == false ? 'removeEventHandler' : 'addEventHandler';
          SL[method](document, SL.visibility.getVisibilityEvent(), this.handleVisibilityChange);
        },
        attachDetachOlderEventListeners: function (add, blurTarget, blurEventName) {
          var method = add == false ? 'removeEventHandler' : 'addEventHandler';
          SL[method](blurTarget, blurEventName, this.oldBlurClosure);
          SL[method](window, 'focus', this.oldFocusClosure);
        },
        handleVisibilityChange: function () {
          if (SL.visibility.isHidden()) {
            SL.fireEvent('tabblur', document);
          } else {
            SL.fireEvent('tabfocus', document);
          }
        },
        setVisibilityApiPriority: function (visibilityApiHasPriority) {
          this.visibilityApiHasPriority = visibilityApiHasPriority;
          this.attachDetachOlderEventListeners(false, window, 'blur');
          this.attachDetachModernEventListeners(false);
          if (visibilityApiHasPriority) {
            if (SL.visibility.getHiddenProperty() != null) {
              this.attachDetachModernEventListeners(true);
            } else {
              this.attachDetachOlderEventListeners(true, window, 'blur');
            }
          } else {
            this.attachDetachOlderEventListeners(true, window, 'blur');
            if (SL.visibility.getHiddenProperty() != null) {
              this.attachDetachModernEventListeners(true);
            }
          }
        },
        oldBlurClosure: null,
        oldFocusClosure: null,
        visibilityApiHasPriority: true,
      };
      SL.availableEventEmitters.push(VisibilityEventEmitter);
      function ElementExistsEventEmitter () {
        this.rules = SL.filter(SL.rules, function (rule) {
          return rule.event === 'elementexists';
        });
      }
      ElementExistsEventEmitter.prototype.backgroundTasks = function () {
        SL.each(this.rules, function (rule) {
          SL.cssQuery(rule.selector, function (elms) {
            if (elms.length > 0) {
              var elm = elms[0];
              if (SL.$data(elm, 'elementexists.seen')) return;
              SL.$data(elm, 'elementexists.seen', true);
              SL.onEvent({ type: 'elementexists', target: elm });
            }
          });
        });
      };
      SL.availableEventEmitters.push(ElementExistsEventEmitter);
      function VideoPlayedEventEmitter () {
        this.rules = SL.filter(SL.rules, function (rule) {
          return rule.event.substring(0, 11) === 'videoplayed';
        });
        this.eventHandler = SL.bind(this.onUpdateTime, this);
      }
      VideoPlayedEventEmitter.prototype = {
        backgroundTasks: function () {
          var eventHandler = this.eventHandler;
          SL.each(this.rules, function (rule) {
            SL.cssQuery(rule.selector || 'video', function (elms) {
              SL.each(elms, function (elm) {
                if (SL.$data(elm, 'videoplayed.tracked')) return;
                SL.addEventHandler(elm, 'timeupdate', SL.throttle(eventHandler, 100));
                SL.$data(elm, 'videoplayed.tracked', true);
              });
            });
          });
        },
        evalRule: function (elm, rule) {
          var eventType = rule.event,
            seekable = elm.seekable,
            startTime = seekable.start(0),
            endTime = seekable.end(0),
            currentTime = elm.currentTime,
            m = rule.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
          if (!m) return;
          var unit = m[2],
            amount = Number(m[1]);
          var func =
            unit === '%'
              ? function () {
                  return amount <= (100 * (currentTime - startTime)) / (endTime - startTime);
                }
              : function () {
                  return amount <= currentTime - startTime;
                };
          if (!SL.$data(elm, eventType) && func()) {
            SL.$data(elm, eventType, true);
            SL.onEvent({ type: eventType, target: elm });
          }
        },
        onUpdateTime: function (e) {
          var rules = this.rules,
            elm = e.target;
          if (!elm.seekable || elm.seekable.length === 0) return;
          for (var i = 0, len = rules.length; i < len; i++) this.evalRule(elm, rules[i]);
        },
      };
      SL.availableEventEmitters.push(VideoPlayedEventEmitter);
      function InViewEventEmitter (rules) {
        rules = rules || SL.rules;
        this.rules = SL.filter(rules, function (rule) {
          return rule.event === 'inview';
        });
        this.elements = [];
        this.eventHandler = SL.bind(this.track, this);
        SL.addEventHandler(window, 'scroll', this.eventHandler);
        SL.addEventHandler(window, 'load', this.eventHandler);
      }
      InViewEventEmitter.offset = function (elem) {
        var top = null,
          left = null;
        try {
          var box = elem.getBoundingClientRect(),
            doc = document,
            docElem = doc.documentElement,
            body = doc.body,
            win = window,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            scrollTop = win.pageYOffset || docElem.scrollTop || body.scrollTop,
            scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;
          top = box.top + scrollTop - clientTop;
          left = box.left + scrollLeft - clientLeft;
        } catch (e) {}
        return { top: top, left: left };
      };
      InViewEventEmitter.getViewportHeight = function () {
        var height = window.innerHeight;
        var mode = document.compatMode;
        if (mode) {
          height =
            mode == 'CSS1Compat'
              ? document.documentElement.clientHeight
              : document.body.clientHeight;
        }
        return height;
      };
      InViewEventEmitter.getScrollTop = function () {
        return document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      };
      InViewEventEmitter.isElementInDocument = function (el) {
        return document.body.contains(el);
      };
      InViewEventEmitter.isElementInView = function (el) {
        if (!InViewEventEmitter.isElementInDocument(el)) {
          return false;
        }
        var vpH = InViewEventEmitter.getViewportHeight(),
          scrolltop = InViewEventEmitter.getScrollTop(),
          top = InViewEventEmitter.offset(el).top,
          height = el.offsetHeight;
        if (top !== null) {
          return !(scrolltop > top + height || scrolltop + vpH < top);
        }
        return false;
      };
      InViewEventEmitter.prototype = {
        backgroundTasks: function () {
          var elements = this.elements;
          SL.each(this.rules, function (rule) {
            SL.cssQuery(rule.selector, function (elms) {
              var addCount = 0;
              SL.each(elms, function (elm) {
                if (!SL.contains(elements, elm)) {
                  elements.push(elm);
                  addCount++;
                }
              });
              if (addCount) {
                SL.notify(rule.selector + ' added ' + addCount + ' elements.', 1);
              }
            });
          });
          this.track();
        },
        checkInView: function (el, recheck, delay) {
          var inview = SL.$data(el, 'inview');
          if (InViewEventEmitter.isElementInView(el)) {
            if (!inview) SL.$data(el, 'inview', true);
            var self = this;
            this.processRules(
              el,
              function (rule, viewedProp, timeoutIdProp) {
                if (recheck || !rule.inviewDelay) {
                  SL.$data(el, viewedProp, true);
                  SL.onEvent({ type: 'inview', target: el, inviewDelay: rule.inviewDelay });
                } else if (rule.inviewDelay) {
                  var timeout = SL.$data(el, timeoutIdProp);
                  if (!timeout) {
                    timeout = setTimeout(function () {
                      self.checkInView(el, true, rule.inviewDelay);
                    }, rule.inviewDelay);
                    SL.$data(el, timeoutIdProp, timeout);
                  }
                }
              },
              delay
            );
          } else {
            if (!InViewEventEmitter.isElementInDocument(el)) {
              var idx = SL.indexOf(this.elements, el);
              this.elements.splice(idx, 1);
            }
            if (inview) SL.$data(el, 'inview', false);
            this.processRules(
              el,
              function (rule, viewedProp, timeoutIdProp) {
                var timeout = SL.$data(el, timeoutIdProp);
                if (timeout) {
                  clearTimeout(timeout);
                }
              },
              delay
            );
          }
        },
        track: function () {
          for (var i = this.elements.length - 1; i >= 0; i--) {
            this.checkInView(this.elements[i]);
          }
        },
        processRules: function (elm, callback, delay) {
          var filteredRules = this.rules;
          if (delay) {
            filteredRules = SL.filter(this.rules, function (e) {
              return e.inviewDelay == delay;
            });
          }
          SL.each(filteredRules, function (rule, i) {
            var viewedProp = rule.inviewDelay ? 'viewed_' + rule.inviewDelay : 'viewed';
            var timeoutIdProp = 'inview_timeout_id_' + i;
            if (SL.$data(elm, viewedProp)) return;
            if (SL.matchesCss(rule.selector, elm)) {
              callback(rule, viewedProp, timeoutIdProp);
            }
          });
        },
      };
      SL.availableEventEmitters.push(InViewEventEmitter);
      function LeaveEventEmitter () {
        if (SL.getToolsByType('nielsen').length > 0) {
          SL.domReady(SL.bind(this.initialize, this));
        }
      }
      LeaveEventEmitter.prototype = {
        obue: false,
        initialize: function () {
          this.attachCloseListeners();
        },
        obuePrevUnload: function () {},
        obuePrevBeforeUnload: function () {},
        newObueListener: function () {
          if (!this.obue) {
            this.obue = true;
            this.triggerBeacons();
          }
        },
        attachCloseListeners: function () {
          this.prevUnload = window.onunload;
          this.prevBeforeUnload = window.onbeforeunload;
          window.onunload = SL.bind(function (e) {
            if (this.prevUnload) {
              setTimeout(
                SL.bind(function () {
                  this.prevUnload.call(window, e);
                }, this),
                1
              );
            }
            this.newObueListener();
          }, this);
          window.onbeforeunload = SL.bind(function (e) {
            if (this.prevBeforeUnload) {
              setTimeout(
                SL.bind(function () {
                  this.prevBeforeUnload.call(window, e);
                }, this),
                1
              );
            }
            this.newObueListener();
          }, this);
        },
        triggerBeacons: function () {
          SL.fireEvent('leave', document);
        },
      };
      SL.availableEventEmitters.push(LeaveEventEmitter);
      function HoverEventEmitter () {
        var eventRegex = (this.eventRegex = /^hover\(([0-9]+)\)$/);
        var rules = (this.rules = []);
        SL.each(SL.rules, function (rule) {
          var m = rule.event.match(eventRegex);
          if (m) {
            rules.push([Number(rule.event.match(eventRegex)[1]), rule.selector]);
          }
        });
      }
      HoverEventEmitter.prototype = {
        backgroundTasks: function () {
          var self = this;
          SL.each(
            this.rules,
            function (rule) {
              var selector = rule[1],
                delay = rule[0];
              SL.cssQuery(selector, function (newElms) {
                SL.each(newElms, function (elm) {
                  self.trackElement(elm, delay);
                });
              });
            },
            this
          );
        },
        trackElement: function (elm, delay) {
          var self = this,
            trackDelays = SL.$data(elm, 'hover.delays');
          if (!trackDelays) {
            SL.addEventHandler(elm, 'mouseover', function (e) {
              self.onMouseOver(e, elm);
            });
            SL.addEventHandler(elm, 'mouseout', function (e) {
              self.onMouseOut(e, elm);
            });
            SL.$data(elm, 'hover.delays', [delay]);
          } else if (!SL.contains(trackDelays, delay)) {
            trackDelays.push(delay);
          }
        },
        onMouseOver: function (e, elem) {
          var target = e.target || e.srcElement,
            related = e.relatedTarget || e.fromElement,
            hit =
              (elem === target || SL.containsElement(elem, target)) &&
              !SL.containsElement(elem, related);
          if (hit) this.onMouseEnter(elem);
        },
        onMouseEnter: function (elm) {
          var delays = SL.$data(elm, 'hover.delays');
          var delayTimers = SL.map(delays, function (delay) {
            return setTimeout(function () {
              SL.onEvent({ type: 'hover(' + delay + ')', target: elm });
            }, delay);
          });
          SL.$data(elm, 'hover.delayTimers', delayTimers);
        },
        onMouseOut: function (e, elem) {
          var target = e.target || e.srcElement,
            related = e.relatedTarget || e.toElement,
            hit =
              (elem === target || SL.containsElement(elem, target)) &&
              !SL.containsElement(elem, related);
          if (hit) this.onMouseLeave(elem);
        },
        onMouseLeave: function (elm) {
          var delayTimers = SL.$data(elm, 'hover.delayTimers');
          if (delayTimers)
            SL.each(delayTimers, function (timer) {
              clearTimeout(timer);
            });
        },
      };
      SL.availableEventEmitters.push(HoverEventEmitter);
      function FacebookEventEmitter (FB) {
        this.delay = 250;
        this.FB = FB;
        SL.domReady(
          SL.bind(function () {
            SL.poll(SL.bind(this.initialize, this), this.delay, 8);
          }, this)
        );
      }
      FacebookEventEmitter.prototype = {
        initialize: function () {
          this.FB = this.FB || window.FB;
          if (this.FB && this.FB.Event && this.FB.Event.subscribe) {
            this.bind();
            return true;
          }
        },
        bind: function () {
          this.FB.Event.subscribe('edge.create', function () {
            SL.notify('tracking a facebook like', 1);
            SL.onEvent({ type: 'facebook.like', target: document });
          });
          this.FB.Event.subscribe('edge.remove', function () {
            SL.notify('tracking a facebook unlike', 1);
            SL.onEvent({ type: 'facebook.unlike', target: document });
          });
          this.FB.Event.subscribe('message.send', function () {
            SL.notify('tracking a facebook share', 1);
            SL.onEvent({ type: 'facebook.send', target: document });
          });
        },
      };
      SL.availableEventEmitters.push(FacebookEventEmitter);
      function TwitterEventEmitter (twttr) {
        SL.domReady(
          SL.bind(function () {
            this.twttr = twttr || window.twttr;
            this.initialize();
          }, this)
        );
      }
      TwitterEventEmitter.prototype = {
        initialize: function () {
          var twttr = this.twttr;
          if (twttr && typeof twttr.ready === 'function') {
            twttr.ready(SL.bind(this.bind, this));
          }
        },
        bind: function () {
          this.twttr.events.bind('tweet', function (event) {
            if (event) {
              SL.notify('tracking a tweet button', 1);
              SL.onEvent({ type: 'twitter.tweet', target: document });
            }
          });
        },
      };
      SL.availableEventEmitters.push(TwitterEventEmitter);
      function LocationChangeEventEmitter () {
        this.lastURL = SL.URL();
        this._fireIfURIChanged = SL.bind(this.fireIfURIChanged, this);
        this._onPopState = SL.bind(this.onPopState, this);
        this._onHashChange = SL.bind(this.onHashChange, this);
        this._pushState = SL.bind(this.pushState, this);
        this._replaceState = SL.bind(this.replaceState, this);
        this.initialize();
      }
      LocationChangeEventEmitter.prototype = {
        initialize: function () {
          this.setupHistoryAPI();
          this.setupHashChange();
        },
        fireIfURIChanged: function () {
          var URL = SL.URL();
          if (this.lastURL !== URL) {
            this.fireEvent();
            this.lastURL = URL;
          }
        },
        fireEvent: function () {
          SL.updateQueryParams();
          SL.onEvent({ type: 'locationchange', target: document });
        },
        setupSPASupport: function () {
          this.setupHistoryAPI();
          this.setupHashChange();
        },
        setupHistoryAPI: function () {
          var history = window.history;
          if (history) {
            if (history.pushState) {
              this.originalPushState = history.pushState;
              history.pushState = this._pushState;
            }
            if (history.replaceState) {
              this.originalReplaceState = history.replaceState;
              history.replaceState = this._replaceState;
            }
          }
          SL.addEventHandler(window, 'popstate', this._onPopState);
        },
        pushState: function () {
          var ret = this.originalPushState.apply(history, arguments);
          this.onPushState();
          return ret;
        },
        replaceState: function () {
          var ret = this.originalReplaceState.apply(history, arguments);
          this.onReplaceState();
          return ret;
        },
        setupHashChange: function () {
          SL.addEventHandler(window, 'hashchange', this._onHashChange);
        },
        onReplaceState: function () {
          setTimeout(this._fireIfURIChanged, 0);
        },
        onPushState: function () {
          setTimeout(this._fireIfURIChanged, 0);
        },
        onPopState: function () {
          setTimeout(this._fireIfURIChanged, 0);
        },
        onHashChange: function () {
          setTimeout(this._fireIfURIChanged, 0);
        },
        uninitialize: function () {
          this.cleanUpHistoryAPI();
          this.cleanUpHashChange();
        },
        cleanUpHistoryAPI: function () {
          if (history.pushState === this._pushState) {
            history.pushState = this.originalPushState;
          }
          if (history.replaceState === this._replaceState) {
            history.replaceState = this.originalReplaceState;
          }
          SL.removeEventHandler(window, 'popstate', this._onPopState);
        },
        cleanUpHashChange: function () {
          SL.removeEventHandler(window, 'hashchange', this._onHashChange);
        },
      };
      SL.availableEventEmitters.push(LocationChangeEventEmitter);
      SL.ecommerce = {
        addItem: function () {
          var args = [].slice.call(arguments);
          SL.onEvent({ type: 'ecommerce.additem', target: args });
        },
        addTrans: function () {
          var args = [].slice.call(arguments);
          SL.data.saleData.sale = { orderId: args[0], revenue: args[2] };
          SL.onEvent({ type: 'ecommerce.addtrans', target: args });
        },
        trackTrans: function () {
          SL.onEvent({ type: 'ecommerce.tracktrans', target: [] });
        },
      };
      SL.visibility = {
        isHidden: function () {
          var prop = this.getHiddenProperty();
          if (!prop) return false;
          return document[prop];
        },
        isVisible: function () {
          return !this.isHidden();
        },
        getHiddenProperty: function () {
          var prefixes = ['webkit', 'moz', 'ms', 'o'];
          if ('hidden' in document) return 'hidden';
          for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i] + 'Hidden' in document) return prefixes[i] + 'Hidden';
          }
          return null;
        },
        getVisibilityEvent: function () {
          var ve = this.getHiddenProperty();
          if (!ve) return null;
          return ve.replace(/[H|h]idden/, '') + 'visibilitychange';
        },
      };
      function NielsenTool (settings) {
        SL.BaseTool.call(this, settings);
        this.defineListeners();
        this.beaconMethod = 'plainBeacon';
        this.adapt = new NielsenTool.DataAdapters();
        this.dataProvider = new NielsenTool.DataProvider.Aggregate();
      }
      SL.inherit(NielsenTool, SL.BaseTool);
      SL.extend(NielsenTool.prototype, {
        name: 'Nielsen',
        endPLPhase: function (pageLoadEvent) {
          switch (pageLoadEvent) {
            case 'pagetop':
              this.initialize();
              break;
            case 'pagebottom':
              if (this.enableTracking) {
                this.queueCommand({ command: 'sendFirstBeacon', arguments: [] });
                this.flushQueueWhenReady();
              }
              break;
          }
        },
        defineListeners: function () {
          this.onTabFocus = SL.bind(function () {
            this.notify('Tab visible, sending view beacon when ready', 1);
            this.tabEverVisible = true;
            this.flushQueueWhenReady();
          }, this);
          this.onPageLeave = SL.bind(function () {
            this.notify('isHuman? : ' + this.isHuman(), 1);
            if (this.isHuman()) {
              this.sendDurationBeacon();
            }
          }, this);
          this.onHumanDetectionChange = SL.bind(function (e) {
            if (this == e.target.target) this.human = e.target.isHuman;
          }, this);
        },
        initialize: function () {
          this.initializeTracking();
          this.initializeDataProviders();
          this.initializeNonHumanDetection();
          this.tabEverVisible = SL.visibility.isVisible();
          if (!this.tabEverVisible) {
            SL.bindEventOnce('tabfocus', this.onTabFocus);
          } else {
            this.notify('Tab visible, sending view beacon when ready', 1);
          }
          this.initialized = true;
        },
        initializeTracking: function () {
          if (this.initialized) return;
          this.notify('Initializing tracking', 1);
          this.addRemovePageLeaveEvent(this.enableTracking);
          this.addRemoveHumanDetectionChangeEvent(this.enableTracking);
          this.initialized = true;
        },
        initializeDataProviders: function () {
          var analytics = this.getAnalyticsTool(),
            rsid;
          this.dataProvider.register(new NielsenTool.DataProvider.VisitorID(SL.getVisitorId()));
          if (analytics) {
            rsid = new NielsenTool.DataProvider.Generic('rsid', function () {
              return analytics.settings.account;
            });
            this.dataProvider.register(rsid);
          } else {
            this.notify('Missing integration with Analytics: rsid will not be sent.');
          }
        },
        initializeNonHumanDetection: function () {
          if (SL.nonhumandetection) {
            SL.nonhumandetection.init();
            this.setEnableNonHumanDetection(
              this.settings.enableNonHumanDetection == false ? false : true
            );
            if (this.settings.nonHumanDetectionDelay > 0) {
              this.setNonHumanDetectionDelay(
                parseInt(this.settings.nonHumanDetectionDelay) * 1000
              );
            }
          } else {
            this.notify('NHDM is not available.');
          }
        },
        getAnalyticsTool: function () {
          if (this.settings.integratesWith) {
            return SL.tools[this.settings.integratesWith];
          }
        },
        flushQueueWhenReady: function () {
          if (!this.enableTracking || !this.tabEverVisible) return;
          SL.poll(
            SL.bind(function () {
              if (this.isReadyToTrack()) {
                this.flushQueue();
                return true;
              }
            }, this),
            100,
            20
          );
        },
        isReadyToTrack: function () {
          return this.tabEverVisible && this.dataProvider.isReady();
        },
        $setVars: function (elm, evt, vars) {
          for (var v in vars) {
            var val = vars[v];
            if (typeof val === 'function') val = val();
            this.settings[v] = val;
          }
          this.notify('Set variables done', 2);
          this.prepareContextData();
        },
        $setEnableTracking: function (elm, evt, bool) {
          this.notify('Will' + (!bool ? ' not' : '') + ' track time on page', 1);
          if (this.enableTracking != bool) {
            this.addRemovePageLeaveEvent(bool);
            this.addRemoveHumanDetectionChangeEvent(bool);
            this.enableTracking = bool;
          }
        },
        $sendFirstBeacon: function (elm, evt, settings) {
          this.sendViewBeacon();
        },
        setEnableNonHumanDetection: function (bool) {
          if (bool) {
            SL.nonhumandetection.register(this);
          } else {
            SL.nonhumandetection.unregister(this);
          }
        },
        setNonHumanDetectionDelay: function (delay) {
          SL.nonhumandetection.register(this, delay);
        },
        addRemovePageLeaveEvent: function (add) {
          this.notify((add ? 'Attach onto' : 'Detach from') + ' page leave event', 1);
          var method = add == false ? 'unbindEvent' : 'bindEvent';
          SL[method]('leave', this.onPageLeave);
        },
        addRemoveHumanDetectionChangeEvent: function (add) {
          this.notify((add ? 'Attach onto' : 'Detach from') + ' human detection change event', 1);
          var method = add == false ? 'unbindEvent' : 'bindEvent';
          SL[method]('humandetection.change', this.onHumanDetectionChange);
        },
        sendViewBeacon: function () {
          this.notify('Tracked page view.', 1);
          this.sendBeaconWith();
        },
        sendDurationBeacon: function () {
          if (
            !SL.timetracking ||
            typeof SL.timetracking.timeOnPage != 'function' ||
            SL.timetracking.timeOnPage() == null
          ) {
            this.notify('Could not track close due missing time on page', 5);
            return;
          }
          this.notify('Tracked close', 1);
          this.sendBeaconWith({
            timeOnPage: Math.round(SL.timetracking.timeOnPage() / 1000),
            duration: 'D',
            timer: 'timer',
          });
          var i,
            s = '';
          for (i = 0; i < this.magicConst; i++) {
            s += '0';
          }
        },
        sendBeaconWith: function (params) {
          if (this.enableTracking) {
            this[this.beaconMethod].call(this, this.prepareUrl(params));
          }
        },
        plainBeacon: function (url) {
          var img = new Image();
          img.src = url;
          img.width = 1;
          img.height = 1;
          img.alt = '';
        },
        navigatorSendBeacon: function (url) {
          navigator.sendBeacon(url);
        },
        prepareUrl: function (params) {
          var obj = this.settings;
          SL.extend(obj, this.dataProvider.provide());
          SL.extend(obj, params);
          return (
            this.preparePrefix(this.settings.collectionServer) +
            this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(obj)))
          );
        },
        preparePrefix: function (server) {
          return '//' + encodeURIComponent(server) + '.imrworldwide.com/cgi-bin/gn?';
        },
        substituteVariables: function (hash) {
          var obj = {};
          for (var v in hash) {
            if (hash.hasOwnProperty(v)) {
              obj[v] = SL.replace(hash[v]);
            }
          }
          return obj;
        },
        prepareContextData: function () {
          if (!this.getAnalyticsTool()) {
            this.notify('Adobe Analytics missing.');
            return;
          }
          var obj = this.settings;
          obj.sdkVersion = _satellite.publishDate;
          this.getAnalyticsTool().$setVars(null, null, {
            contextData: this.adapt.toAnalytics(this.substituteVariables(obj)),
          });
        },
        isHuman: function () {
          return this.human;
        },
        onTabFocus: function () {},
        onPageLeave: function () {},
        onHumanDetectionChange: function () {},
        notify: function (msg, lvl) {
          SL.notify(this.logPrefix + msg, lvl);
        },
        beaconMethod: 'plainBeacon',
        adapt: null,
        enableTracking: false,
        logPrefix: 'Nielsen: ',
        tabEverVisible: false,
        human: true,
        magicConst: 2000000,
      });
      NielsenTool.DataProvider = {};
      NielsenTool.DataProvider.Generic = function (key, valueFn) {
        this.key = key;
        this.valueFn = valueFn;
      };
      SL.extend(NielsenTool.DataProvider.Generic.prototype, {
        isReady: function () {
          return true;
        },
        getValue: function () {
          return this.valueFn();
        },
        provide: function () {
          if (!this.isReady()) {
            NielsenTool.prototype.notify('Not yet ready to provide value for: ' + this.key, 5);
          }
          var data = {};
          data[this.key] = this.getValue();
          return data;
        },
      });
      NielsenTool.DataProvider.VisitorID = function (visitorInstance, key, fallbackProvider) {
        this.key = key || 'uuid';
        this.visitorInstance = visitorInstance;
        if (this.visitorInstance) {
          this.visitorId = visitorInstance.getMarketingCloudVisitorID([
            this,
            this._visitorIdCallback,
          ]);
        }
        this.fallbackProvider = fallbackProvider || new NielsenTool.UUID();
      };
      SL.inherit(NielsenTool.DataProvider.VisitorID, NielsenTool.DataProvider.Generic);
      SL.extend(NielsenTool.DataProvider.VisitorID.prototype, {
        isReady: function () {
          if (this.visitorInstance === null) {
            return true;
          }
          return !!this.visitorId;
        },
        getValue: function () {
          return this.visitorId || this.fallbackProvider.get();
        },
        _visitorIdCallback: function (id) {
          this.visitorId = id;
        },
      });
      NielsenTool.DataProvider.Aggregate = function () {
        this.providers = [];
        for (var i = 0; i < arguments.length; i++) {
          this.register(arguments[i]);
        }
      };
      SL.extend(NielsenTool.DataProvider.Aggregate.prototype, {
        register: function (provider) {
          this.providers.push(provider);
        },
        isReady: function () {
          return SL.every(this.providers, function (provider) {
            return provider.isReady();
          });
        },
        provide: function () {
          var data = {};
          SL.each(this.providers, function (provider) {
            SL.extend(data, provider.provide());
          });
          return data;
        },
      });
      NielsenTool.UUID = function () {};
      SL.extend(NielsenTool.UUID.prototype, {
        generate: function () {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
              v = c == 'x' ? r : (r & 3) | 8;
            return v.toString(16);
          });
        },
        get: function () {
          var cookieUUID = SL.readCookie(this.key('uuid'));
          if (cookieUUID) return cookieUUID;
          cookieUUID = this.generate();
          SL.setCookie(this.key('uuid'), cookieUUID);
          return cookieUUID;
        },
        key: function (name) {
          return '_dtm_nielsen_' + name;
        },
      });
      NielsenTool.DataAdapters = function () {};
      SL.extend(NielsenTool.DataAdapters.prototype, {
        toNielsen: function (settings) {
          var cdate = new Date().getTime(),
            nielsenPrefixes = {
              c6: 'vc,',
              c13: 'asid,',
              c15: 'apn,',
              c27: 'cln,',
              c32: 'segA,',
              c33: 'segB,',
              c34: 'segC,',
              c35: 'adrsid,',
              c29: 'plid,',
              c30: 'bldv,',
              c40: 'adbid,',
            },
            nielsenObj = {
              ci: settings.clientId,
              c6: settings.vcid,
              c13: settings.appId,
              c15: settings.appName,
              prv: 1,
              forward: 0,
              ad: 0,
              cr: settings.duration || 'V',
              rt: 'text',
              st: 'dcr',
              prd: 'dcr',
              r: cdate,
              at: settings.timer || 'view',
              c16: settings.sdkVersion,
              c27: settings.timeOnPage || 0,
              c40: settings.uuid,
              c35: settings.rsid,
              ti: cdate,
              sup: 0,
              c32: settings.segmentA,
              c33: settings.segmentB,
              c34: settings.segmentC,
              asn: settings.assetName,
              c29: settings.playerID,
              c30: settings.buildVersion,
            };
          for (key in nielsenObj) {
            if (nielsenObj[key] !== undefined && nielsenObj[key] != null) {
              if (nielsenObj[key] !== undefined && nielsenObj != null && nielsenObj != '') {
                var val = encodeURIComponent(nielsenObj[key]);
                if (nielsenPrefixes.hasOwnProperty(key) && val) {
                  val = nielsenPrefixes[key] + val;
                }
                nielsenObj[key] = val;
              }
            }
          }
          return this.filterObject(nielsenObj);
        },
        toAnalytics: function (settings) {
          return this.filterObject({
            'a.nielsen.clientid': settings.clientId,
            'a.nielsen.vcid': settings.vcid,
            'a.nielsen.appid': settings.appId,
            'a.nielsen.appname': settings.appName,
            'a.nielsen.accmethod': '0',
            'a.nielsen.ctype': 'text',
            'a.nielsen.sega': settings.segmentA,
            'a.nielsen.segb': settings.segmentB,
            'a.nielsen.segc': settings.segmentC,
            'a.nielsen.asset': settings.assetName,
          });
        },
        convertToURI: function (obj) {
          if (SL.isObject(obj) === false) return '';
          var uri = [];
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) uri.push(key + '=' + obj[key]);
          }
          return uri.join('&');
        },
        filterObject: function (obj) {
          for (var k in obj) {
            if (obj.hasOwnProperty(k) && (obj[k] == null || obj[k] === undefined)) {
              delete obj[k];
            }
          }
          return obj;
        },
      });
      SL.availableTools.nielsen = NielsenTool;
      function VisitorIdTool (settings) {
        SL.BaseTool.call(this, settings);
        this.name = settings.name || 'VisitorID';
        this.initialize();
      }
      SL.extend(VisitorIdTool.prototype, {
        getInstance: function () {
          return this.instance;
        },
        initialize: function () {
          var settings = this.settings,
            visitor;
          SL.notify('Visitor ID: Initializing tool', 1);
          visitor = this.createInstance(settings.mcOrgId, settings.initVars);
          if (visitor === null) {
            return;
          }
          if (settings.customerIDs) {
            this.applyCustomerIDs(visitor, settings.customerIDs);
          }
          if (settings.autoRequest) {
            visitor.getMarketingCloudVisitorID();
          }
          this.instance = visitor;
        },
        createInstance: function (mcOrgId, initVars) {
          if (!SL.isString(mcOrgId)) {
            SL.notify('Visitor ID: Cannot create instance using mcOrgId: "' + mcOrgId + '"', 4);
            return null;
          }
          mcOrgId = SL.replace(mcOrgId);
          SL.notify('Visitor ID: Create instance using mcOrgId: "' + mcOrgId + '"', 1);
          initVars = this.parseValues(initVars);
          var instance = Visitor.getInstance(mcOrgId, initVars);
          SL.notify('Visitor ID: Set variables: ' + SL.stringify(initVars), 1);
          return instance;
        },
        applyCustomerIDs: function (instance, ids) {
          var parsedIds = this.parseIds(ids);
          instance.setCustomerIDs(parsedIds);
          SL.notify('Visitor ID: Set Customer IDs: ' + SL.stringify(parsedIds), 1);
        },
        parseValues: function (hash) {
          if (SL.isObject(hash) === false) {
            return {};
          }
          var obj = {};
          for (var v in hash) {
            if (hash.hasOwnProperty(v)) {
              obj[v] = SL.replace(hash[v]);
            }
          }
          return obj;
        },
        parseIds: function (hash) {
          var parsedIds = {};
          if (SL.isObject(hash) === false) {
            return {};
          }
          for (var v in hash) {
            if (hash.hasOwnProperty(v)) {
              var id = SL.replace(hash[v]['id']);
              if (id !== hash[v]['id'] && id) {
                parsedIds[v] = {};
                parsedIds[v]['id'] = id;
                parsedIds[v]['authState'] = Visitor.AuthState[hash[v]['authState']];
              }
            }
          }
          return parsedIds;
        },
      });
      SL.availableTools.visitor_id = VisitorIdTool;
      function SiteCatalystTool (settings) {
        SL.BaseTool.call(this, settings);
        this.varBindings = {};
        this.events = [];
        this.products = [];
        this.customSetupFuns = [];
      }
      SL.inherit(SiteCatalystTool, SL.BaseTool);
      SL.extend(SiteCatalystTool.prototype, {
        name: 'SC',
        endPLPhase: function (pageLoadEvent) {
          var loadOn = this.settings.loadOn;
          if (pageLoadEvent === loadOn) {
            this.initialize(pageLoadEvent);
          }
        },
        initialize: function (pageLoadEvent) {
          if (this._cancelToolInit) return;
          this.settings.initVars = this.substituteVariables(this.settings.initVars, {
            type: pageLoadEvent,
          });
          if (this.settings.initTool !== false) {
            var url = this.settings.sCodeURL || SL.basePath() + 's_code.js';
            if (typeof url === 'object') {
              if (window.location.protocol === 'https:') url = url.https;
              else url = url.http;
            }
            if (!url.match(/^https?:/)) url = SL.basePath() + url;
            if (this.settings.initVars) {
              this.$setVars(null, null, this.settings.initVars);
            }
            SL.loadScript(url, SL.bind(this.onSCodeLoaded, this));
            this.initializing = true;
          } else {
            this.initializing = true;
            this.pollForSC();
          }
        },
        getS: function (s, options) {
          var hostname = (options && options.hostname) || window.location.hostname;
          var varBindings = this.concatWithToolVarBindings(
            (options && options.setVars) || this.varBindings
          );
          var events = (options && options.addEvent) || this.events;
          var acct = this.getAccount(hostname);
          var s_gi = window.s_gi;
          if (!s_gi) return null;
          if (!this.isValidSCInstance(s)) s = null;
          if (!acct && !s) {
            SL.notify('Adobe Analytics: tracker not initialized because account was not found', 1);
            return null;
          }
          var s = s || s_gi(acct);
          var DTMversion = 'D' + SL.appVersion;
          if (typeof s.tagContainerMarker !== 'undefined') {
            s.tagContainerMarker = DTMversion;
          } else {
            if (
              typeof s.version === 'string' &&
              s.version.substring(s.version.length - 5) !== '-' + DTMversion
            ) {
              s.version += '-' + DTMversion;
            }
          }
          if (s.sa && this.settings.skipSetAccount !== true && this.settings.initTool !== false)
            s.sa(this.settings.account);
          this.applyVarBindingsOnTracker(s, varBindings);
          if (events.length > 0) s.events = events.join(',');
          var visitorIdInstance = SL.getVisitorId();
          if (visitorIdInstance) {
            s.visitor = SL.getVisitorId();
          }
          return s;
        },
        onSCodeLoaded: function (loaded_manually) {
          this.initialized = true;
          this.initializing = false;
          var msg = ['Adobe Analytics: loaded', loaded_manually ? ' (manual)' : '', '.'];
          SL.notify(msg.join(''), 1);
          SL.fireEvent(this.id + '.load', this.getS());
          if (!loaded_manually) {
            this.flushQueueExceptTrackLink();
            this.sendBeacon();
          }
          this.flushQueue();
        },
        getAccount: function (hostname) {
          if (window.s_account) {
            return window.s_account;
          }
          if (hostname && this.settings.accountByHost) {
            return this.settings.accountByHost[hostname] || this.settings.account;
          } else {
            return this.settings.account;
          }
        },
        getTrackingServer: function () {
          var tool = this;
          var s = tool.getS();
          if (s) {
            if (s.ssl && s.trackingServerSecure) {
              return s.trackingServerSecure;
            } else if (s.trackingServer) {
              return s.trackingServer;
            }
          }
          var account = tool.getAccount(window.location.hostname);
          if (!account) return null;
          var w;
          var c = '';
          var d = s && s.dc;
          var e;
          var f;
          w = account;
          e = w.indexOf(',');
          e >= 0 && (w = w.gb(0, e));
          w = w.replace(/[^A-Za-z0-9]/g, '');
          c || (c = '2o7.net');
          d = d ? ('' + d).toLowerCase() : 'd1';
          c == '2o7.net' && (d == 'd1' ? (d = '112') : d == 'd2' && (d = '122'), (f = ''));
          e = w + '.' + d + '.' + f + c;
          return e;
        },
        sendBeacon: function () {
          var s = this.getS(window[this.settings.renameS || 's']);
          if (!s) {
            SL.notify('Adobe Analytics: page code not loaded', 1);
            return;
          }
          if (this.settings.customInit) {
            if (this.settings.customInit(s) === false) {
              SL.notify('Adobe Analytics: custom init suppressed beacon', 1);
              return;
            }
          }
          if (this.settings.executeCustomPageCodeFirst) {
            this.applyVarBindingsOnTracker(s, this.varBindings);
          }
          this.executeCustomSetupFuns(s);
          s.t();
          this.clearVarBindings();
          this.clearCustomSetup();
          SL.notify('Adobe Analytics: tracked page view', 1);
        },
        pollForSC: function () {
          SL.poll(
            SL.bind(function () {
              if (typeof window.s_gi === 'function') {
                this.onSCodeLoaded(true);
                return true;
              }
            }, this)
          );
        },
        flushQueueExceptTrackLink: function () {
          if (!this.pending) return;
          var left = [];
          for (var i = 0; i < this.pending.length; i++) {
            var args = this.pending[i];
            var trig = args[0];
            if (trig.command === 'trackLink') {
              left.push(args);
            } else {
              this.triggerCommand.apply(this, args);
            }
          }
          this.pending = left;
        },
        isQueueAvailable: function () {
          return !this.initialized;
        },
        substituteVariables: function (obj, evt) {
          var ret = {};
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              var value = obj[key];
              ret[key] = SL.replace(value, location, evt);
            }
          }
          return ret;
        },
        $setVars: function (elm, evt, vars) {
          for (var v in vars) {
            if (vars.hasOwnProperty(v)) {
              var val = vars[v];
              if (typeof val === 'function') val = val();
              this.varBindings[v] = val;
            }
          }
          SL.notify('Adobe Analytics: set variables.', 2);
        },
        $customSetup: function (elm, evt, setup) {
          this.customSetupFuns.push(function (s) {
            setup.call(elm, evt, s);
          });
        },
        isValidSCInstance: function (s) {
          return !!s && typeof s.t === 'function' && typeof s.tl === 'function';
        },
        concatWithToolVarBindings: function (varBindings) {
          var settingsInitVars = this.settings.initVars || {};
          SL.map(['trackingServer', 'trackingServerSecure'], function (item) {
            if (settingsInitVars[item] && !varBindings[item]) {
              varBindings[item] = settingsInitVars[item];
            }
          });
          return varBindings;
        },
        applyVarBindingsOnTracker: function (s, varBindings) {
          for (var v in varBindings) {
            if (varBindings.hasOwnProperty(v)) {
              s[v] = varBindings[v];
            }
          }
        },
        clearVarBindings: function () {
          this.varBindings = {};
        },
        clearCustomSetup: function () {
          this.customSetupFuns = [];
        },
        executeCustomSetupFuns: function (s) {
          SL.each(this.customSetupFuns, function (fun) {
            fun.call(window, s);
          });
        },
        $trackLink: function (elm, evt, params) {
          params = params || {};
          var type = params.type;
          var linkName = params.linkName;
          if (!linkName && elm && elm.nodeName && elm.nodeName.toLowerCase() === 'a') {
            linkName = elm.innerHTML;
          }
          if (!linkName) {
            linkName = 'link clicked';
          }
          var vars = params && params.setVars;
          var events = (params && params.addEvent) || [];
          var s = this.getS(null, { setVars: vars, addEvent: events });
          if (!s) {
            SL.notify('Adobe Analytics: page code not loaded', 1);
            return;
          }
          var orgLinkTrackVars = s.linkTrackVars;
          var orgLinkTrackEvents = s.linkTrackEvents;
          var definedVarNames = this.definedVarNames(vars);
          if (params && params.customSetup) {
            params.customSetup.call(elm, evt, s);
          }
          if (events.length > 0) definedVarNames.push('events');
          if (s.products) definedVarNames.push('products');
          definedVarNames = this.mergeTrackLinkVars(s.linkTrackVars, definedVarNames);
          events = this.mergeTrackLinkVars(s.linkTrackEvents, events);
          s.linkTrackVars = this.getCustomLinkVarsList(definedVarNames);
          var eventsKeys = SL.map(events, function (item) {
            return item.split(':')[0];
          });
          s.linkTrackEvents = this.getCustomLinkVarsList(eventsKeys);
          s.tl(true, type || 'o', linkName);
          SL.notify(
            [
              'Adobe Analytics: tracked link ',
              'using: linkTrackVars=',
              SL.stringify(s.linkTrackVars),
              '; linkTrackEvents=',
              SL.stringify(s.linkTrackEvents),
            ].join(''),
            1
          );
          s.linkTrackVars = orgLinkTrackVars;
          s.linkTrackEvents = orgLinkTrackEvents;
        },
        mergeTrackLinkVars: function (newVarsStr, varsArr) {
          if (newVarsStr) {
            varsArr = newVarsStr.split(',').concat(varsArr);
          }
          return varsArr;
        },
        getCustomLinkVarsList: function (keysArr) {
          var noneIndex = SL.indexOf(keysArr, 'None');
          if (noneIndex > -1 && keysArr.length > 1) {
            keysArr.splice(noneIndex, 1);
          }
          return keysArr.join(',');
        },
        definedVarNames: function (vars) {
          vars = vars || this.varBindings;
          var ret = [];
          for (var varname in vars) {
            if (
              vars.hasOwnProperty(varname) &&
              /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(
                varname
              )
            )
              ret.push(varname);
          }
          return ret;
        },
        $trackPageView: function (elm, evt, params) {
          var vars = params && params.setVars;
          var events = (params && params.addEvent) || [];
          var s = this.getS(null, { setVars: vars, addEvent: events });
          if (!s) {
            SL.notify('Adobe Analytics: page code not loaded', 1);
            return;
          }
          s.linkTrackVars = '';
          s.linkTrackEvents = '';
          this.executeCustomSetupFuns(s);
          if (params && params.customSetup) {
            params.customSetup.call(elm, evt, s);
          }
          s.t();
          this.clearVarBindings();
          this.clearCustomSetup();
          SL.notify('Adobe Analytics: tracked page view', 1);
        },
        $postTransaction: function (elm, evt, varname) {
          var trans = (SL.data.transaction = window[varname]),
            s = this.varBindings,
            mapping = this.settings.fieldVarMapping;
          SL.each(
            trans.items,
            function (item) {
              this.products.push(item);
            },
            this
          );
          s.products = SL.map(
            this.products,
            function (item) {
              var vars = [];
              if (mapping && mapping.item) {
                for (var field in mapping.item) {
                  if (mapping.item.hasOwnProperty(field)) {
                    var varname = mapping.item[field];
                    vars.push(varname + '=' + item[field]);
                    if (varname.substring(0, 5) === 'event') this.events.push(varname);
                  }
                }
              }
              var arr = ['', item.product, item.quantity, item.unitPrice * item.quantity];
              if (vars.length > 0) arr.push(vars.join('|'));
              return arr.join(';');
            },
            this
          ).join(',');
          if (mapping && mapping.transaction) {
            var topLevelVars = [];
            for (var field in mapping.transaction) {
              if (mapping.transaction.hasOwnProperty(field)) {
                var varname = mapping.transaction[field];
                topLevelVars.push(varname + '=' + trans[field]);
                if (varname.substring(0, 5) === 'event') this.events.push(varname);
              }
            }
            if (s.products.length > 0) s.products += ',';
            s.products += ';;;;' + topLevelVars.join('|');
          }
        },
        $addEvent: function (elm, evt) {
          for (var i = 2, len = arguments.length; i < len; i++) {
            this.events.push(arguments[i]);
          }
        },
        $addProduct: function (elm, evt) {
          for (var i = 2, len = arguments.length; i < len; i++) {
            this.products.push(arguments[i]);
          }
        },
      });
      SL.availableTools.sc = SiteCatalystTool;
      function DefaultTool () {
        SL.BaseTool.call(this);
        this.asyncScriptCallbackQueue = [];
        this.argsForBlockingScripts = [];
      }
      SL.inherit(DefaultTool, SL.BaseTool);
      SL.extend(DefaultTool.prototype, {
        name: 'Default',
        $loadIframe: function (elm, evt, options) {
          var pages = options.pages,
            loadOn = options.loadOn;
          var doit = SL.bind(function () {
            SL.each(
              pages,
              function (page) {
                this.loadIframe(elm, evt, page);
              },
              this
            );
          }, this);
          if (!loadOn) doit();
          if (loadOn === 'domready') SL.domReady(doit);
          if (loadOn === 'load') SL.addEventHandler(window, 'load', doit);
        },
        loadIframe: function (elm, evt, page) {
          var iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          var host = SL.data.host,
            data = page.data,
            src = this.scriptURL(page.src),
            search = SL.searchVariables(data, elm, evt);
          if (host) src = SL.basePath() + src;
          src += search;
          iframe.src = src;
          var body = document.getElementsByTagName('body')[0];
          if (body) body.appendChild(iframe);
          else
            SL.domReady(function () {
              document.getElementsByTagName('body')[0].appendChild(iframe);
            });
        },
        scriptURL: function (url) {
          var scriptDir = SL.settings.scriptDir || '';
          return scriptDir + url;
        },
        $loadScript: function (elm, evt, options) {
          var scripts = options.scripts,
            sequential = options.sequential,
            loadOn = options.loadOn;
          var doit = SL.bind(function () {
            if (sequential) {
              this.loadScripts(elm, evt, scripts);
            } else {
              SL.each(
                scripts,
                function (script) {
                  this.loadScripts(elm, evt, [script]);
                },
                this
              );
            }
          }, this);
          if (!loadOn) doit();
          else if (loadOn === 'domready') SL.domReady(doit);
          else if (loadOn === 'load') SL.addEventHandler(window, 'load', doit);
        },
        loadScripts: function (elm, evt, scripts) {
          try {
            var scripts = scripts.slice(0),
              q = this.asyncScriptCallbackQueue,
              lastScript,
              target = evt.target || evt.srcElement,
              self = this;
          } catch (e) {
            console.error('scripts is', SL.stringify(scripts));
          }
          function loadNext () {
            if (q.length > 0 && lastScript) {
              var callback = q.shift();
              callback.call(elm, evt, target);
            }
            var script = scripts.shift();
            if (script) {
              var host = SL.data.host,
                src = self.scriptURL(script.src);
              if (host) src = SL.basePath() + src;
              lastScript = script;
              SL.loadScript(src, loadNext);
            }
          }
          loadNext();
        },
        $loadBlockingScript: function (elm, evt, options) {
          var scripts = options.scripts,
            loadOn = options.loadOn;
          var doit = SL.bind(function () {
            SL.each(
              scripts,
              function (script) {
                this.loadBlockingScript(elm, evt, script);
              },
              this
            );
          }, this);
          doit();
        },
        loadBlockingScript: function (elm, evt, script) {
          var src = this.scriptURL(script.src),
            host = SL.data.host,
            target = evt.target || evt.srcElement;
          if (host) src = SL.basePath() + src;
          this.argsForBlockingScripts.push([elm, evt, target]);
          SL.loadScriptSync(src);
        },
        pushAsyncScript: function (callback) {
          this.asyncScriptCallbackQueue.push(callback);
        },
        pushBlockingScript: function (callback) {
          var args = this.argsForBlockingScripts.shift();
          var element = args[0];
          callback.apply(element, args.slice(1));
        },
        $writeHTML: SL.escapeHtmlParams(function (elm, evt) {
          if (SL.domReadyFired || !document.write) {
            SL.notify(
              'Command writeHTML failed. You should try appending HTML using the async option.',
              1
            );
            return;
          }
          if (evt.type !== 'pagebottom' && evt.type !== 'pagetop') {
            SL.notify('You can only use writeHTML on the `pagetop` and `pagebottom` events.', 1);
            return;
          }
          for (var i = 2, len = arguments.length; i < len; i++) {
            var html = arguments[i].html;
            html = SL.replace(html, elm, evt);
            document.write(html);
          }
        }),
        linkNeedsDelayActivate: function (a, win) {
          win = win || window;
          var tagName = a.tagName,
            target = a.getAttribute('target'),
            location = a.getAttribute('href');
          if (tagName && tagName.toLowerCase() !== 'a') return false;
          if (!location) return false;
          else if (!target) return true;
          else if (target === '_blank') return false;
          else if (target === '_top') return win.top === win;
          else if (target === '_parent') return false;
          else if (target === '_self') return true;
          else if (win.name) return target === win.name;
          else return true;
        },
        $delayActivateLink: function (elm, evt) {
          if (!this.linkNeedsDelayActivate(elm)) return;
          SL.preventDefault(evt);
          var linkDelay = SL.settings.linkDelay || 100;
          setTimeout(function () {
            SL.setLocation(elm.href);
          }, linkDelay);
        },
        isQueueable: function (trig) {
          return trig.command !== 'writeHTML';
        },
      });
      SL.availableTools['default'] = DefaultTool;
      function Tnt (settings) {
        SL.BaseTool.call(this, settings);
        this.styleElements = {};
        this.targetPageParamsStore = {};
      }
      SL.inherit(Tnt, SL.BaseTool);
      SL.extend(Tnt.prototype, {
        name: 'tnt',
        endPLPhase: function (pageLoadEvent) {
          if (pageLoadEvent === 'aftertoolinit') {
            this.initialize();
          }
        },
        initialize: function () {
          SL.notify('Test & Target: Initializing', 1);
          this.initializeTargetPageParams();
          this.load();
        },
        initializeTargetPageParams: function () {
          if (window.targetPageParams) {
            this.updateTargetPageParams(
              this.parseTargetPageParamsResult(window.targetPageParams())
            );
          }
          this.updateTargetPageParams(this.settings.pageParams);
          this.setTargetPageParamsFunction();
        },
        load: function () {
          var url = this.getMboxURL(this.settings.mboxURL);
          if (this.settings.initTool !== false) {
            if (this.settings.loadSync) {
              SL.loadScriptSync(url);
              this.onScriptLoaded();
            } else {
              SL.loadScript(url, SL.bind(this.onScriptLoaded, this));
              this.initializing = true;
            }
          } else {
            this.initialized = true;
          }
        },
        getMboxURL: function (urlData) {
          var url = urlData;
          if (SL.isObject(urlData)) {
            if (window.location.protocol === 'https:') url = urlData.https;
            else url = urlData.http;
          }
          if (!url.match(/^https?:/)) return SL.basePath() + url;
          else return url;
        },
        onScriptLoaded: function () {
          SL.notify('Test & Target: loaded.', 1);
          this.flushQueue();
          this.initialized = true;
          this.initializing = false;
        },
        $addMbox: function (elm, evt, settings) {
          var mboxGoesAround = settings.mboxGoesAround;
          var styleText = mboxGoesAround + '{visibility: hidden;}';
          var styleElm = this.appendStyle(styleText);
          if (!(mboxGoesAround in this.styleElements)) {
            this.styleElements[mboxGoesAround] = styleElm;
          }
          if (this.initialized) {
            this.$addMBoxStep2(null, null, settings);
          } else if (this.initializing) {
            this.queueCommand({ command: 'addMBoxStep2', arguments: [settings] }, elm, evt);
          }
        },
        $addMBoxStep2: function (elm, evt, settings) {
          var mboxID = this.generateID();
          var self = this;
          SL.addEventHandler(
            window,
            'load',
            SL.bind(function () {
              SL.cssQuery(settings.mboxGoesAround, function (elms) {
                var elem = elms[0];
                if (!elem) return;
                var newDiv = document.createElement('div');
                newDiv.id = mboxID;
                elem.parentNode.replaceChild(newDiv, elem);
                newDiv.appendChild(elem);
                window.mboxDefine(mboxID, settings.mboxName);
                var args = [settings.mboxName];
                if (settings.arguments) {
                  args = args.concat(settings.arguments);
                }
                window.mboxUpdate.apply(null, args);
                self.reappearWhenCallComesBack(elem, mboxID, settings.timeout, settings);
              });
            }, this)
          );
          this.lastMboxID = mboxID;
        },
        $addTargetPageParams: function (elm, evt, pageParams) {
          this.updateTargetPageParams(pageParams);
        },
        generateID: function () {
          var id = '_sdsat_mbox_' + String(Math.random()).substring(2) + '_';
          return id;
        },
        appendStyle: function (css) {
          var head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');
          style.type = 'text/css';
          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }
          head.appendChild(style);
          return style;
        },
        reappearWhenCallComesBack: function (elmGoesAround, mboxID, timeout, settings) {
          var self = this;
          function reappear () {
            var styleElm = self.styleElements[settings.mboxGoesAround];
            if (styleElm) {
              styleElm.parentNode.removeChild(styleElm);
              delete self.styleElements[settings.mboxGoesAround];
            }
          }
          SL.cssQuery('script[src*="omtrdc.net"]', function (results) {
            var script = results[0];
            if (script) {
              SL.scriptOnLoad(script.src, script, function () {
                SL.notify('Test & Target: request complete', 1);
                reappear();
                clearTimeout(timeoutID);
              });
              var timeoutID = setTimeout(function () {
                SL.notify('Test & Target: bailing after ' + timeout + 'ms', 1);
                reappear();
              }, timeout);
            } else {
              SL.notify('Test & Target: failed to find T&T ajax call, bailing', 1);
              reappear();
            }
          });
        },
        updateTargetPageParams: function (obj) {
          var o = {};
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              o[SL.replace(key)] = SL.replace(obj[key]);
            }
          }
          SL.extend(this.targetPageParamsStore, o);
        },
        getTargetPageParams: function () {
          return this.targetPageParamsStore;
        },
        setTargetPageParamsFunction: function () {
          window.targetPageParams = SL.bind(this.getTargetPageParams, this);
        },
        parseTargetPageParamsResult: function (data) {
          var result = data;
          if (SL.isArray(data)) {
            data = data.join('&');
          }
          if (SL.isString(data)) {
            result = SL.parseQueryParams(data);
          }
          return result;
        },
      });
      SL.availableTools.tnt = Tnt;
      function BasicTool (settings) {
        SL.BaseTool.call(this, settings);
        this.name = settings.name || 'Basic';
      }
      SL.inherit(BasicTool, SL.BaseTool);
      SL.extend(BasicTool.prototype, {
        initialize: function () {
          var settings = this.settings;
          if (this.settings.initTool !== false) {
            var url = settings.url;
            if (typeof url === 'string') {
              url = SL.basePath() + url;
            } else {
              url = SL.isHttps() ? url.https : url.http;
            }
            SL.loadScript(url, SL.bind(this.onLoad, this));
            this.initializing = true;
          } else {
            this.initialized = true;
          }
        },
        isQueueAvailable: function () {
          return !this.initialized;
        },
        onLoad: function () {
          this.initialized = true;
          this.initializing = false;
          if (this.settings.initialBeacon) {
            this.settings.initialBeacon();
          }
          this.flushQueue();
        },
        endPLPhase: function (pageLoadEvent) {
          var loadOn = this.settings.loadOn;
          if (pageLoadEvent === loadOn) {
            SL.notify(this.name + ': Initializing at ' + pageLoadEvent, 1);
            this.initialize();
          }
        },
        $fire: function (elm, evt, fun) {
          if (this.initializing) {
            this.queueCommand({ command: 'fire', arguments: [fun] }, elm, evt);
            return;
          }
          fun.call(this.settings, elm, evt);
        },
      });
      SL.availableTools.am = BasicTool;
      SL.availableTools.adlens = BasicTool;
      SL.availableTools.aem = BasicTool;
      SL.availableTools.__basic = BasicTool;
      var GAUtils = {
        allowLinker: function () {
          return SL.hasMultipleDomains();
        },
        cookieDomain: function () {
          var domainList = SL.settings.domainList;
          var domainName = SL.find(domainList, function (domain) {
            var hostname = window.location.hostname;
            return SL.equalsIgnoreCase(hostname.slice(hostname.length - domain.length), domain);
          });
          var cookieDomain = domainName ? '.' + domainName : 'auto';
          return cookieDomain;
        },
      };
      function GAUniversalTool (settings) {
        SL.BaseTool.call(this, settings);
      }
      SL.inherit(GAUniversalTool, SL.BaseTool);
      SL.extend(GAUniversalTool.prototype, {
        name: 'GAUniversal',
        endPLPhase: function (pageLoadEvent) {
          var settings = this.settings;
          var loadOn = settings.loadOn;
          if (pageLoadEvent === loadOn) {
            SL.notify('GAU: Initializing at ' + pageLoadEvent, 1);
            this.initialize();
            this.flushQueue();
            this.trackInitialPageView();
          }
        },
        getTrackerName: function () {
          return this.settings.trackerSettings.name || '';
        },
        isPageCodeLoadSuppressed: function () {
          return this.settings.initTool === false || this._cancelToolInit === true;
        },
        initialize: function () {
          if (this.isPageCodeLoadSuppressed()) {
            this.initialized = true;
            SL.notify('GAU: Page code not loaded (suppressed).', 1);
            return;
          }
          var gaName = 'ga';
          window[gaName] = window[gaName] || this.createGAObject();
          window.GoogleAnalyticsObject = gaName;
          SL.notify('GAU: Page code loaded.', 1);
          SL.loadScriptOnce(this.getToolUrl());
          var settings = this.settings;
          if (GAUtils.allowLinker() && settings.allowLinker !== false) {
            this.createAccountForLinker();
          } else {
            this.createAccount();
          }
          this.executeInitCommands();
          if (settings.customInit) {
            var customInit = settings.customInit;
            var result = customInit(window[gaName], this.getTrackerName());
            if (result === false) {
              this.suppressInitialPageView = true;
            }
          }
          this.initialized = true;
        },
        createGAObject: function () {
          var ga = function () {
            ga.q.push(arguments);
          };
          ga.q = [];
          ga.l = 1 * new Date();
          return ga;
        },
        createAccount: function () {
          this.create();
        },
        createAccountForLinker: function () {
          var options = {};
          if (GAUtils.allowLinker()) options.allowLinker = true;
          this.create(options);
          this.call('require', 'linker');
          this.call('linker:autoLink', this.autoLinkDomains(), false, true);
        },
        create: function (extra) {
          var options = this.settings.trackerSettings;
          options = SL.preprocessArguments([options], location, null, this.forceLowerCase)[0];
          options.trackingId = SL.replace(this.settings.trackerSettings.trackingId, location);
          if (!options.cookieDomain) {
            options.cookieDomain = GAUtils.cookieDomain();
          }
          SL.extend(options, extra || {});
          this.call('create', options);
        },
        autoLinkDomains: function () {
          var ourDomain = location.hostname;
          return SL.filter(SL.settings.domainList, function (domain) {
            return domain !== ourDomain;
          });
        },
        executeInitCommands: function () {
          var settings = this.settings;
          if (settings.initCommands) {
            SL.each(
              settings.initCommands,
              function (command) {
                var args = command.splice(2, command.length - 2);
                command = command.concat(
                  SL.preprocessArguments(args, location, null, this.forceLowerCase)
                );
                this.call.apply(this, command);
              },
              this
            );
          }
        },
        trackInitialPageView: function () {
          if (this.suppressInitialPageView || this.isPageCodeLoadSuppressed()) {
            return;
          }
          this.call('send', 'pageview');
        },
        call: function () {
          if (typeof ga !== 'function') {
            SL.notify('GA Universal function not found!', 4);
            return;
          }
          if (this.isCallSuppressed()) {
            return;
          }
          arguments[0] = this.cmd(arguments[0]);
          this.log(SL.toArray(arguments));
          ga.apply(window, arguments);
        },
        isCallSuppressed: function () {
          return this._cancelToolInit === true;
        },
        $missing$: function (command, elm, evt, args) {
          args = args || [];
          args = [command].concat(args);
          this.call.apply(this, args);
        },
        getToolUrl: function () {
          var settings = this.settings;
          var isHttps = SL.isHttps();
          if (settings.url) {
            return isHttps ? settings.url.https : settings.url.http;
          }
          return (isHttps ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
        },
        cmd: function (command) {
          var trackerCommands = ['send', 'set', 'get'];
          var trackerName = this.getTrackerName();
          if (!trackerName || SL.indexOf(trackerCommands, command) === -1) {
            return command;
          }
          return trackerName + '.' + command;
        },
        log: function (args) {
          var cmd = args[0];
          var tracker = this.getTrackerName() || 'default';
          var msg = 'GA Universal: sent command ' + cmd + ' to tracker ' + tracker;
          if (args.length > 1) {
            var parameters = SL.stringify(args.slice(1));
            msg += ' with parameters ' + SL.stringify(args.slice(1));
          }
          msg += '.';
          SL.notify(msg, 1);
        },
      });
      SL.availableTools.ga_universal = GAUniversalTool;
      function GATool (settings) {
        SL.BaseTool.call(this, settings);
      }
      SL.inherit(GATool, SL.BaseTool);
      SL.extend(GATool.prototype, {
        name: 'GA',
        initialize: function () {
          var settings = this.settings;
          var before = window._gaq,
            initCommands = settings.initCommands || [],
            customInit = settings.customInit;
          if (!before) {
            _gaq = [];
          }
          if (!this.isSuppressed()) {
            if (!before && !GATool.scriptLoaded) {
              var https = SL.isHttps();
              var url = (https ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              if (settings.url) {
                url = https ? settings.url.https : settings.url.http;
              }
              SL.loadScript(url);
              GATool.scriptLoaded = true;
              SL.notify('GA: page code loaded.', 1);
            }
            var domain = settings.domain,
              trackerName = settings.trackerName,
              allowLinker = GAUtils.allowLinker(),
              account = SL.replace(settings.account, location),
              domainList = SL.settings.domainList || [];
            _gaq.push([this.cmd('setAccount'), account]);
            if (allowLinker) _gaq.push([this.cmd('setAllowLinker'), allowLinker]);
            _gaq.push([this.cmd('setDomainName'), GAUtils.cookieDomain()]);
            SL.each(
              initCommands,
              function (cmd) {
                var arr = [this.cmd(cmd[0])].concat(
                  SL.preprocessArguments(cmd.slice(1), location, null, this.forceLowerCase)
                );
                _gaq.push(arr);
              },
              this
            );
            if (customInit) this.suppressInitialPageView = false === customInit(_gaq, trackerName);
            if (settings.pageName) this.$overrideInitialPageView(null, null, settings.pageName);
          } else {
            SL.notify('GA: page code not loaded(suppressed).', 1);
          }
          this.initialized = true;
          SL.fireEvent(this.id + '.configure', _gaq, trackerName);
        },
        isSuppressed: function () {
          return this._cancelToolInit || this.settings.initTool === false;
        },
        tracker: function () {
          return this.settings.trackerName;
        },
        cmd: function (cmd) {
          var tracker = this.tracker();
          return tracker ? tracker + '._' + cmd : '_' + cmd;
        },
        $overrideInitialPageView: function (elm, evt, url) {
          this.urlOverride = url;
        },
        trackInitialPageView: function () {
          if (this.isSuppressed()) return;
          if (this.suppressInitialPageView) return;
          if (this.urlOverride) {
            var args = SL.preprocessArguments(
              [this.urlOverride],
              location,
              null,
              this.forceLowerCase
            );
            this.$missing$('trackPageview', null, null, args);
          } else {
            this.$missing$('trackPageview');
          }
        },
        endPLPhase: function (pageLoadEvent) {
          var loadOn = this.settings.loadOn;
          if (pageLoadEvent === loadOn) {
            SL.notify('GA: Initializing at ' + pageLoadEvent, 1);
            this.initialize();
            this.flushQueue();
            this.trackInitialPageView();
          }
        },
        call: function (cmd, elm, evt, args) {
          if (this._cancelToolInit) return;
          var settings = this.settings,
            tracker = this.tracker(),
            fullCmd = this.cmd(cmd),
            args = args ? [fullCmd].concat(args) : [fullCmd];
          _gaq.push(args);
          if (tracker)
            SL.notify(
              'GA: sent command ' +
                cmd +
                ' to tracker ' +
                tracker +
                (args.length > 1 ? ' with parameters [' + args.slice(1).join(', ') + ']' : '') +
                '.',
              1
            );
          else
            SL.notify(
              'GA: sent command ' +
                cmd +
                (args.length > 1 ? ' with parameters [' + args.slice(1).join(', ') + ']' : '') +
                '.',
              1
            );
        },
        $missing$: function (cmd, elm, evt, args) {
          this.call(cmd, elm, evt, args);
        },
        $postTransaction: function (elm, evt, varname) {
          var trans = (SL.data.customVars.transaction = window[varname]);
          this.call('addTrans', elm, evt, [
            trans.orderID,
            trans.affiliation,
            trans.total,
            trans.tax,
            trans.shipping,
            trans.city,
            trans.state,
            trans.country,
          ]);
          SL.each(
            trans.items,
            function (item) {
              this.call('addItem', elm, evt, [
                item.orderID,
                item.sku,
                item.product,
                item.category,
                item.unitPrice,
                item.quantity,
              ]);
            },
            this
          );
          this.call('trackTrans', elm, evt);
        },
        delayLink: function (elm, evt) {
          var ga = this;
          if (!GAUtils.allowLinker()) return;
          if (!elm.hostname.match(this.settings.linkerDomains)) return;
          if (SL.isSubdomainOf(elm.hostname, location.hostname)) return;
          SL.preventDefault(evt);
          var linkDelay = SL.settings.linkDelay || 100;
          setTimeout(function () {
            ga.call('link', elm, evt, [elm.href]);
          }, linkDelay);
        },
        popupLink: function (elm, evt) {
          if (!window._gat) return;
          SL.preventDefault(evt);
          var account = this.settings.account;
          var tracker = window._gat._createTracker(account);
          var url = tracker._getLinkerUrl(elm.href);
          window.open(url);
        },
        $link: function (elm, evt) {
          if (elm.getAttribute('target') === '_blank') {
            this.popupLink(elm, evt);
          } else {
            this.delayLink(elm, evt);
          }
        },
        $trackEvent: function (elm, evt) {
          var args = Array.prototype.slice.call(arguments, 2);
          if (args.length >= 4 && args[3] != null) {
            var value = parseInt(args[3], 10);
            if (SL.isNaN(value)) {
              value = 1;
            }
            args[3] = value;
          }
          this.call('trackEvent', elm, evt, args);
        },
      });
      SL.availableTools.ga = GATool;
      _satellite.init({
        tools: {
          f37a9cef79d12aaf65bd373bdfc02b82: {
            engine: 'sc',
            loadOn: 'pagebottom',
            account: 'amexpressprod',
            euCookie: false,
            sCodeURL:
              '98caf8fccc463fd7e47088b35e73b27720bb5cc1/s-code-contents-c2febc173aecc05d1ddcd99410f1e3e4171f01de.js',
            renameS: 's',
            initVars: {
              trackingServer: 'omn.americanexpress.com',
              trackingServerSecure: 'omns.americanexpress.com',
              trackInlineStats: true,
              trackDownloadLinks: false,
              trackExternalLinks: false,
              linkLeaveQueryString: false,
              dynamicVariablePrefix: 'D=',
            },
            skipSetAccount: true,
            customInit: function (s) {
              if (typeof s.registerPostTrackCallback === 'function') {
                s.registerPostTrackCallback(function (requestUrl) {
                  if (
                    typeof requestUrl != 'undefined' &&
                    requestUrl.indexOf('pev2=ABTest') != -1 &&
                    typeof omnCampaignTracker === 'function'
                  ) {
                    _satellite.notify('Calling omnCampaignTracker');
                    omnCampaignTracker(requestUrl);
                  }
                  if (
                    typeof requestUrl !== 'undefined' &&
                    requestUrl &&
                    !s.Util.getQueryParam('pe', requestUrl)
                  ) {
                    _satellite.notify('Setting the variable to indicate s.t is completed');
                    window.stCallComplete = true;
                  }
                });
              }
              if (digitalData) {
                if (digitalData.page) {
                  if (digitalData.page.attributes) {
                    if (digitalData.page.attributes.autotrack == false) {
                      setTimeout(function () {
                        s.defaultRequestSuppressed = true;
                      }, 500);
                      return false;
                    }
                  }
                }
              }
              function loadjsfile (filename, callbackFun) {
                var fileref = document.createElement('script');
                fileref.setAttribute('type', 'text/javascript');
                fileref.setAttribute('src', filename);
                if (typeof callbackFun != undefined) {
                  fileref.onload = callbackFun;
                }
                document.getElementsByTagName('head')[0].appendChild(fileref);
              }
            },
          },
          acb2e033c10ade940c4907d2852f42b6f3f846f2: {
            engine: 'visitor_id',
            loadOn: 'pagetop',
            name: 'VisitorID',
            mcOrgId: '5C36123F5245AF470A490D45@AdobeOrg',
            autoRequest: true,
            initVars: {
              trackingServer: 'omn.americanexpress.com',
              trackingServerSecure: 'omns.americanexpress.com',
              marketingCloudServer: 'omn.americanexpress.com',
              marketingCloudServerSecure: 'omns.americanexpress.com',
              loadTimeout: '5000',
              idSyncContainerID: '15',
              disableIdSyncs: '%disable ID sync%',
            },
            customerIDs: {
              amexGuid: { id: '%AMEX GUID - Customer Attribute%', authState: 'UNKNOWN' },
            },
          },
        },
        pageLoadRules: [
          {
            name: 'Amex Customer Demographics',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    s.linkTrackVars = 'eVar39,eVar13,eVar45,prop10,prop34';
                    if (_satellite.getVar('ZipCode')) {
                      s.eVar39 = cn + _satellite.getVar('ZipCode');
                    }
                    s.eVar13 = s.prop34 = _satellite.getVar('AMEX GUID');
                    s.prop10 = s.eVar45 = s.eVar13 != '' ? 'customer' : 'prospect';
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Autofill form',
            trigger: [
              { engine: 'sc', command: 'setVars', arguments: [{ prop29: '%Form Value%' }] },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Blue Box GUID',
            scope: { domains: [/americanexpress\.com$/i] },
            event: 'pagetop',
          },
          {
            name: 'Campaign Tracking - Onsite',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.getValOnce = function (vtc, cn, et, ep) {
                      cn = cn ? cn : 's_gvo';
                      et = et ? et : 0;
                      ep = 'm' === ep ? 60000 : 86400000;
                      if (vtc && vtc !== this.c_r(cn)) {
                        var e = new Date();
                        e.setTime(e.getTime() + et * ep);
                        this.c_w(cn, vtc, 0 === et ? 0 : e);
                        return vtc;
                      }
                      return '';
                    };
                    if (_satellite.getVar('autotrack')) {
                      if (_satellite.getVar('Onsite Promotion - Querystring')) {
                        s.linkTrackVars = 'prop18,eVar1';
                        s.eVar1 = 'intlink=' + _satellite.getVar('Onsite Promotion - Querystring');
                        s.prop18 = _satellite.getVar('Onsite Promotion - Querystring');
                        s.eVar1 = s.getValOnce(s.eVar1, 'acqevar1', 0);
                        s.prop18 = s.getValOnce(s.prop18, 'acqprop18', 0);
                      } else {
                        if (_satellite.getVar('Onsite Promotion')) {
                          s.linkTrackVars = 'prop18,eVar1';
                          s.eVar1 = 'intlink=' + _satellite.getVar('Onsite Promotion');
                          s.prop18 = _satellite.getVar('Onsite Promotion');
                          s.eVar1 = s.getValOnce(s.eVar1, 'acqevar1', 0);
                          s.prop18 = s.getValOnce(s.prop18, 'acqprop18', 0);
                        }
                      }
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Campaign Tracking - Onsite Impressions',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    if (_satellite.getVar('Onsite Promotion Impression')) {
                      s.linkTrackVars = 'prop72,events,list1';
                      s.linkTrackEvents = 'event20';
                      s.prop72 = _satellite.getVar('Onsite Promotion Impression');
                      s.list1 = _satellite.getVar('Onsite Promotion Impression');
                      s.events = s.apl(s.events, 'event20', ',', ',', 2);
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Conversion: Card Application',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.AMEXCFM = function () {
                      var cv,
                        p,
                        el,
                        i,
                        f = 0,
                        f2 = 0,
                        cn = 's_cdfm',
                        a = 'Learn More Page',
                        b = 'Start App Page',
                        c = 'External Campaign:',
                        d = 'Internal Search:',
                        e = 'Browse:',
                        g = ':Previous Page ID Not Set',
                        h = 'no value',
                        j = 'search.americanexpress.com';
                      el = s.split(s.events, ',');
                      for (i in el)
                        if (el[i] == 'event12') {
                          f2 = 1;
                          break;
                        }
                      for (i in el)
                        if (el[i] == 'event1') {
                          f2 = 2;
                          break;
                        }
                      if (f2 == 0) return '';
                      cv = s.c_r(cn);
                      if (cv) {
                        p = s.split(cv, '|');
                        for (i in p)
                          if (p[i] == s.ser1) {
                            f = 1;
                            break;
                          }
                        if (f == 1) return '';
                      }
                      if (f2 == 1) {
                        if (s.campaign) s.eVar15 = c + a;
                        else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + a;
                        else if (s.eVar41)
                          if (s.eVar41 == h) s.eVar15 = e + a + g;
                          else s.eVar15 = e + a + s.eVar41;
                        else s.eVar15 = e + a + g;
                        if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                        else s.c_w(cn, s.ser1, 0);
                        return '';
                      } else if (f2 == 2) {
                        if (s.campaign) s.eVar15 = c + b;
                        else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + b;
                        else if (s.eVar41)
                          if (s.eVar41 == h) s.eVar15 = e + b + g;
                          else s.eVar15 = e + b + s.eVar41;
                        else s.eVar15 = e + b + g;
                        if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                        else s.c_w(cn, s.ser1, 0);
                        return '';
                      }
                    };
                    s.AMEXVisID = function (cn) {
                      var s = this,
                        e = new Date(),
                        ct = e.getTime(),
                        cv;
                      cn = cn ? cn : 's_uvid';
                      e.setTime(ct + 5 * 365 * 24 * 60 * 60 * 1000);
                      cv = s.c_r(cn);
                      if (cv) {
                        s.c_w(cn, cv, e);
                        return '';
                      } else {
                        var t = new Date(),
                          m = t.getTime(),
                          r1 = Math.floor(Math.random() * 10),
                          r2 = Math.floor(Math.random() * 10),
                          r3 = Math.floor(Math.random() * 10),
                          uv;
                        m = m.toString();
                        r1 = r1.toString();
                        r2 = r2.toString();
                        r3 = r3.toString();
                        uv = m + r1 + r2 + r3;
                        s.c_w(cn, uv, e);
                        return '';
                      }
                    };
                    s.AMEXVisNum = function () {
                      var d = this,
                        h = new Date(),
                        g,
                        c,
                        b = h.getTime(),
                        a = 's_vnum',
                        f = 's_invisit';
                      h.setTime(b + 5 * 365 * 24 * 60 * 60 * 1000);
                      visit_num_val = d.c_r(a);
                      g = d.c_r(f);
                      if (g) {
                        if (visit_num_val) {
                          h.setTime(b + 30 * 60 * 1000);
                          d.c_w(f, 'true', h);
                          return visit_num_val;
                        } else {
                          return 1;
                        }
                      } else {
                        if (visit_num_val) {
                          c = visit_num_val.match(/(\d*)&vn=(\d*)/);
                          if (c) {
                            visit_num_val = c[2];
                          }
                          visit_num_val++;
                          d.c_w(a, visit_num_val, h);
                          h.setTime(b + 30 * 60 * 1000);
                          d.c_w(f, 'true', h);
                          return visit_num_val;
                        } else {
                          d.c_w(a, 1, h);
                          h.setTime(b + 30 * 60 * 1000);
                          d.c_w(f, 'true', h);
                          return 1;
                        }
                      }
                    };
                    s.AMEXSerializer = function (f, sn) {
                      var el, fl, i, n;
                      if (!s.events) return '';
                      else {
                        el = s.split(s.events, ',');
                        fl = s.split(f, ',');
                        for (i in el)
                          for (n in fl)
                            if (el[i] == fl[n]) {
                              el[i] = el[i] + ':' + sn;
                              break;
                            }
                        s.events = s.join(el, '', '', ',', '');
                        return '';
                      }
                    };
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    s.getTimeToComplete = function (sos, cn, exp) {
                      sos = sos ? sos.toLowerCase() : 'start';
                      cn = cn ? cn : 's_gttc';
                      exp = exp ? exp : 0;
                      var s = this,
                        d = s.c_r(cn),
                        e = new Date();
                      if ('start' === sos && !d)
                        s.c_w(cn, e.getTime(), exp ? new Date(e.getTime() + 86400000 * exp) : 0);
                      else if ('stop' === sos && d)
                        return (
                          (sos = Math.round((e.getTime() - d) / 1000)),
                          s.c_w(cn, '', 0),
                          s.formatTime(sos)
                        );
                    };
                    s.formatTime = function (ns, tf, bml) {
                      var s = this;
                      if (!('undefined' === typeof ns || isNaN(ns) || 0 > Number(ns))) {
                        if (
                          ('string' === typeof tf && 'd' === tf) ||
                          (('string' !== typeof tf || !s.inList('h,m,s', tf)) && 86400 <= ns)
                        ) {
                          tf = 86400;
                          var d = 'days';
                          bml = isNaN(bml) ? 4 : tf / (bml * tf);
                        } else
                          ('string' === typeof tf && 'h' === tf) ||
                          (('string' !== typeof tf || !s.inList('m,s', tf)) && 3600 <= ns)
                            ? ((tf = 3600),
                              (d = 'hours'),
                              (bml = isNaN(bml) ? 4 : tf / (bml * tf)))
                            : ('string' === typeof tf && 'm' === tf) ||
                              (('string' !== typeof tf || !s.inList('s', tf)) && 60 <= ns)
                            ? ((tf = 60),
                              (d = 'minutes'),
                              (bml = isNaN(bml) ? 2 : tf / (bml * tf)))
                            : ((tf = 1), (d = 'seconds'), (bml = isNaN(bml) ? 0.2 : tf / bml));
                        ns = Math.round((ns * bml) / tf) / bml + ' ' + d;
                        0 === ns.indexOf('1 ') && (ns = ns.substring(0, ns.length - 1));
                        return ns;
                      }
                    };
                    s.split = function (l, d) {
                      var i,
                        x = 0,
                        a = new Array();
                      while (l) {
                        i = l.indexOf(d);
                        i = i > -1 ? i : l.length;
                        a[x++] = l.substring(0, i);
                        l = l.substring(i + d.length);
                      }
                      return a;
                    };
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    s.eVar39 =
                      _satellite.getVar('ZipCode') != '' ? cn + _satellite.getVar('ZipCode') : '';
                    if (_satellite.getVar('Business Unit') == 'AMEX') {
                      bu =
                        _satellite.getVar('Sub Category 1') != ''
                          ? _satellite.getVar('Sub Category 1') + ':'
                          : '';
                    }
                    if (_satellite.getVar('Business Unit') == 'Online') {
                      bu =
                        _satellite.getVar('Sub Category 2') === 'SBS'
                          ? 'OPEN:'
                          : _satellite.getVar('Sub Category 2') === 'CONS'
                          ? 'CCSG:'
                          : bu;
                    }
                    if (_satellite.getVar('applicationid')) {
                      s.eVar25 = _satellite.getVar('applicationid');
                    }
                    var eventArr = [];
                    for (var i = digitalData.event.length; i--; ) {
                      if (typeof digitalData.event[i] != 'undefined') {
                        if (typeof digitalData.event[i].eventInfo != 'undefined') {
                          if (typeof digitalData.event[i].eventInfo.eventType != 'undefined') {
                            if (digitalData.event[i].eventInfo.eventType == 'cardApplication') {
                              if (typeof digitalData.event[i].productInfo != 'undefined')
                                if (
                                  typeof digitalData.event[i].productInfo[
                                    digitalData.event[i].productInfo.length - 1
                                  ].pmc != 'undefined'
                                )
                                  pmc_code =
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].pmc;
                              pdt = ';' + cn + bu + pmc_code;
                              if (digitalData.event[i].eventInfo.eventAction == 'learnMore') {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'event12';
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event12', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                s.linkTrackVars = 'events,products,eVar31';
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event1',
                                  ',',
                                  ',',
                                  2
                                );
                                s.eVar31 = _satellite.getVar('ApplyFlowID');
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event1', ',', ',', 2);
                              }
                              if ((s.events + ',').indexOf('event1,') > -1) {
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event12',
                                  ',',
                                  ',',
                                  2
                                );
                                s.events = s.apl(s.events, 'event12', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'terms') {
                                s.linkTrackVars = 'eVar80,events,products';
                                s.linkTrackEvents = 'event2';
                                s.eVar80 =
                                  _satellite.getVar('Flow Type') != ''
                                    ? _satellite.getVar('Flow Type')
                                    : '';
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event2', ',', ',', 2);
                              }
                              if (
                                digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                'financialinfo'
                              ) {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'event81';
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event81', ',', ',', 2);
                              }
                              if (
                                digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                'counteroffer'
                              ) {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'event104';
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event104', ',', ',', 2);
                              }
                              if (
                                digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                'authentication'
                              ) {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'event108';
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event108', ',', ',', 2);
                              }
                              if (
                                digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                'balancetransfer'
                              ) {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'event109';
                                if (s.products) {
                                  if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event109', ',', ',', 2);
                              }
                              if (
                                digitalData.event[i].eventInfo.eventAction === 'submit' ||
                                digitalData.event[i].eventInfo.eventAction === 'complete' ||
                                digitalData.event[i].eventInfo.eventAction == 'submission'
                              ) {
                                var setevent =
                                  digitalData.event[i].eventInfo.eventAction === 'submission'
                                    ? 'event62'
                                    : 'event5';
                                s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  setevent,
                                  ',',
                                  ',',
                                  2
                                );
                                if (s.events.indexOf('event58') == -1) {
                                  if (s.products) {
                                    if (!s.inList(pdt, s.products)) {
                                      s.products += ',' + pdt;
                                    }
                                  } else {
                                    s.products = pdt;
                                  }
                                }
                                s.events = s.apl(s.events, setevent, ',', ',', 2);
                                s.eVar29 = _satellite.getVar('PCNnumber');
                                s.eVar39 = cn + _satellite.getVar('ZipCode');
                                s.eVar53 =
                                  _satellite.getVar('Conversion Options') != ''
                                    ? cn + bu + _satellite.getVar('Conversion Options')
                                    : '';
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'ian') {
                                s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event58',
                                  ',',
                                  ',',
                                  2
                                );
                                if (!s.inList('event5', s.events)) {
                                  if (s.products) {
                                    if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                                  } else s.products = pdt;
                                }
                                s.events = s.apl(s.events, 'event58', ',', ',', 2);
                                s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'pending') {
                                s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                                s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event9',
                                  ',',
                                  ',',
                                  2
                                );
                                s.events = s.apl(s.events, 'event9', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'approved') {
                                s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                                s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event10',
                                  ',',
                                  ',',
                                  2
                                );
                                s.events = s.apl(s.events, 'event10', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'decline') {
                                s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                                s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event11',
                                  ',',
                                  ',',
                                  2
                                );
                                s.events = s.apl(s.events, 'event11', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'cancelled') {
                                s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                                s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event67',
                                  ',',
                                  ',',
                                  2
                                );
                                s.events = s.apl(s.events, 'event67', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'suppAdd') {
                                s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event3',
                                  ',',
                                  ',',
                                  2
                                );
                                s.events = s.apl(s.events, 'event3', ',', ',', 2);
                              }
                            }
                          }
                        }
                      }
                    }
                    s.ttc = s.c_r('om_ttc');
                    if (s.events) {
                      var _el, _i;
                      _el = s.split(s.events, ',');
                      for (_i in _el) {
                        if (_el[_i] == 'event1') {
                          s.tempevent1 = 1;
                        }
                        if (_el[_i] == 'event5') {
                          s.tempevent5 = 1;
                        }
                      }
                    }
                    if (!s.ttc && s.tempevent1) {
                      s.eVar49 = 'start';
                    }
                    if (s.tempevent5) {
                      s.eVar49 = 'stop';
                    }
                    s.eVar49 = s.getTimeToComplete(s.eVar49, 'om_ttc', 360);
                    if (pmc_code != '') s.ser1 = pmc_code;
                    s.AMEXVisID('s_uvid');
                    s.ser2 = s.AMEXVisNum();
                    s.ser3 = s.c_r('s_uvid');
                    if (s.ser1 && s.ser2 && s.ser3) {
                      s.ser = s.ser1 + s.ser2 + s.ser3;
                      if (s.ser.length > 20) {
                        s.ser = s.ser.substring(0, 20);
                      }
                    }
                    if (s.events && s.ser1) s.AMEXCFM();
                    if (s.ser) {
                      s.AMEXSerializer(
                        'event1,event2,event12,event47,event81,event108,event104',
                        s.ser
                      );
                    }
                    if (s.eVar29 && s.eVar29 !== 'null' && s.eVar29 !== '') {
                      s.AMEXSerializer(
                        'event3,event5,event9,event10,event11,event14,event24,event58,event109',
                        s.eVar29
                      );
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType.toLowerCase() == 'cardapplication')
                    return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Conversion: Lead',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    for (i = 0; i < digitalData.event.length; i++) {
                      if (digitalData.event[i].eventInfo.eventType == 'lead') {
                        if (digitalData.event[i].eventInfo.eventAction == 'start') {
                          s.linkTrackVars = 'events,products';
                          s.linkTrackEvents = 'event96';
                          pdt = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                          if (s.products) {
                            s.products += ',' + pdt;
                          } else s.products = pdt;
                          s.events = s.apl(s.events, 'event96', ',', ',', 2);
                        }
                        if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                          s.linkTrackVars = 'events,products';
                          s.linkTrackEvents = 'event100';
                          pdt = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                          if (s.products) {
                            s.products += ',' + pdt;
                          } else s.products = pdt;
                          s.events = s.apl(s.events, 'event100', ',', ',', 2);
                        }
                      }
                    }
                    if (_satellite.getVar('leadid')) {
                      s.eVar110 = _satellite.getVar('leadid');
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType.toLowerCase() == 'lead')
                    return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Conversion: Non-Card Acquisitions',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    var purID =
                      _satellite.getVar('PurchaseID') != '' ? _satellite.getVar('PurchaseID') : '';
                    var conOpt =
                      _satellite.getVar('Conversion Options') != ''
                        ? _satellite.getVar('Conversion Options')
                        : '';
                    for (i = 0; i < digitalData.event.length; i++) {
                      if (digitalData.event[i].eventInfo.eventType == 'nonCardAcquisition') {
                        if (typeof digitalData.event[i] != 'undefined')
                          if (typeof digitalData.event[i].eventInfo != 'undefined')
                            if (typeof digitalData.event[i].eventInfo.eventAction != 'undefined')
                              if (
                                digitalData.event[i].eventInfo.eventAction.toLowerCase() == 'start'
                              ) {
                                s.linkTrackVars = 'products,events';
                                s.linkTrackEvents = 'scCheckout';
                                if (s.products) {
                                  pdt =
                                    ';' +
                                    cn +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].productName;
                                  s.products += ',' + pdt;
                                } else
                                  s.products =
                                    ';' +
                                    cn +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].productName;
                                s.events = s.apl(s.events, 'scCheckout', ',', ',', 2);
                              }
                        if (digitalData.event[i])
                          if (digitalData.event[i].eventInfo)
                            if (digitalData.event[i].eventInfo.eventAction)
                              if (
                                digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                'complete'
                              ) {
                                s.linkTrackVars =
                                  'products,events,eVar40,eVar34,eVar39,eVar46,eVar53,eVar68';
                                s.linkTrackEvents = 'purchase,event15';
                                if (s.products) {
                                  var pdt =
                                    ';' +
                                    cn +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].productName +
                                    ';' +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].quantity +
                                    ';' +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].revenue;
                                  s.products += ',' + pdt;
                                } else
                                  s.products =
                                    ';' +
                                    cn +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].productName +
                                    ';' +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].quantity +
                                    ';' +
                                    digitalData.event[i].productInfo[
                                      digitalData.event[i].productInfo.length - 1
                                    ].revenue;
                                var pmethod = [];
                                if (_satellite.getVar('Country'))
                                  pmethod.push(_satellite.getVar('Country'));
                                if (_satellite.getVar('Business Unit'))
                                  pmethod.push(_satellite.getVar('Business Unit'));
                                if (_satellite.getVar('PaymentMethod'))
                                  pmethod.push(_satellite.getVar('PaymentMethod'));
                                s.eVar40 =
                                  _satellite.getVar('PaymentMethod') != ''
                                    ? pmethod.join(':')
                                    : '';
                                var appdec = [];
                                if (_satellite.getVar('Country'))
                                  appdec.push(_satellite.getVar('Country'));
                                if (_satellite.getVar('Business Unit'))
                                  appdec.push(_satellite.getVar('Business Unit'));
                                if (_satellite.getVar('Application Decision'))
                                  appdec.push(_satellite.getVar('Application Decision'));
                                s.eVar34 =
                                  _satellite.getVar('Application Decision') != ''
                                    ? appdec.join(':')
                                    : '';
                                var zcode = [];
                                if (_satellite.getVar('Country'))
                                  zcode.push(_satellite.getVar('Country'));
                                if (_satellite.getVar('ZipCode'))
                                  zcode.push(_satellite.getVar('ZipCode'));
                                s.eVar39 =
                                  _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                                s.eVar46 = purID;
                                s.eVar53 =
                                  conOpt != '' ? cn + bu + 'nonCardAcquisition:' + conOpt : '';
                                s.eVar68 = cn + bu + 'nonCardAcquisition';
                                s.events = s.apl(s.events, 'purchase', ',', ',', 2);
                                s.events = s.apl(s.events, 'event15', ',', ',', 2);
                              }
                      }
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType == 'nonCardAcquisition')
                    return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Corporate Card UserID Solution',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.eVar78 = _satellite.getVar('CorpUserID');
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Datalayer',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    if (window.hasOwnProperty('digitalData')) {
                      if (!digitalData.event) {
                        digitalData.event = [{}];
                      }
                      if (!digitalData.page) {
                        digitalData.page = {};
                        if (!digitalData.page.attributes) {
                          digitalData.page.attributes = {};
                        }
                      }
                      if (!digitalData.user) {
                        digitalData.user = {};
                      }
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Digital Signature',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.getValOnce = function (vtc, cn, et, ep) {
                      cn = cn ? cn : 's_gvo';
                      et = et ? et : 0;
                      ep = 'm' === ep ? 60000 : 86400000;
                      if (vtc && vtc !== this.c_r(cn)) {
                        var e = new Date();
                        e.setTime(e.getTime() + et * ep);
                        this.c_w(cn, vtc, 0 === et ? 0 : e);
                        return vtc;
                      }
                      return '';
                    };
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    for (i = 0; i < digitalData.event.length; i++) {
                      if (digitalData.event[i].eventInfo.eventType == 'signature') {
                        if (digitalData.event[i].eventInfo.eventAction == 'attempt') {
                          s.events = s.apl(s.events, 'event105', ',', ',', 2);
                        }
                        if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                          s.events = s.apl(s.events, 'event106', ',', ',', 2);
                        }
                      }
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType.toLowerCase() == 'signature')
                    return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'DnS Visitor Details',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    if (_satellite.getVar('dnsVisitorDetails')) {
                      s.eVar120 = _satellite.getVar('dnsVisitorDetails');
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Experience Type',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    if (_satellite.getVar('Experience Type') != '') {
                      s.linkTrackVars = 'prop56';
                      s.prop56 = s.pageName + ':' + _satellite.getVar('Experience Type');
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Internal Search',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    if (_satellite.getVar('Search Keyword')) {
                      s.linkTrackVars = 'eVar9,prop32';
                      s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event8', ',', ',', 2);
                      s.eVar9 = _satellite.getVar('Search Keyword');
                      s.prop32 = _satellite.getVar('Number of Search Results');
                      s.events = s.apl(s.events, 'event8', ',', ',', 2);
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Internal Search Click-through',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    if (_satellite.getVar('Internal Search clickthrough')) {
                      s.events = s.apl(s.events, 'event19', ',', ',', 2);
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Login Analysis',
            trigger: [
              { engine: 'sc', command: 'setVars', arguments: [{ prop50: '%Login Status%' }] },
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    if (_satellite.getVar('Login')) {
                      s.linkTrackVars = 'eVar69';
                      s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event6', ',', ',', 2);
                      s.eVar69 = _satellite.getVar('Login');
                      s.events = s.apl(s.events, 'event6', ',', ',', 2);
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Login Start',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.getValOnce = function (vtc, cn, et, ep) {
                      cn = cn ? cn : 's_gvo';
                      et = et ? et : 0;
                      ep = 'm' === ep ? 60000 : 86400000;
                      if (vtc && vtc !== this.c_r(cn)) {
                        var e = new Date();
                        e.setTime(e.getTime() + et * ep);
                        this.c_w(cn, vtc, 0 === et ? 0 : e);
                        return vtc;
                      }
                      return '';
                    };
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    s.removeEvent = function (e) {
                      var s = this;
                      var el, a, b, c, a1, b1, c1, d;
                      if (s.events) {
                        el = s.split(s.events, ',');
                        a = e + ',';
                        b = e + ':';
                        c = e + '=';
                        x = 0;
                        while (x < el.length) {
                          a1 = el[x] + ',';
                          b1 = el[x] + ':';
                          c1 = el[x] + '=';
                          if (a1.indexOf(a) > -1 || b1.indexOf(b) > -1 || c1.indexOf(c) > -1);
                          else d ? (d = d + ',' + el[x]) : (d = el[x]);
                          x++;
                        }
                      }
                      d ? (d = d) : (d = '');
                      return d;
                    };
                    for (i = 0; i < digitalData.event.length; i++) {
                      if (digitalData.event[i].eventInfo.eventType == 'login') {
                        if (digitalData.event[i].eventInfo.eventAction == 'attempt') {
                          s.events = s.apl(s.events, 'event107', ',', ',', 2);
                          var tmp = s.getValOnce('event107', 'evt_107', 0);
                          if (!tmp) s.events = s.removeEvent('event107');
                        }
                      }
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType.toLowerCase() == 'login')
                    return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Non-Promotional Link Tracking',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.getValOnce = new Function(
                      'v',
                      'c',
                      'e',
                      '' +
                        'var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime(' +
                        ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"
                    );
                    if (
                      (typeof digitalData !== 'undefined' &&
                        typeof digitalData.page !== 'undefined' &&
                        typeof digitalData.page.attributes !== 'undefined' &&
                        digitalData.page.attributes.autotrack != false) ||
                      typeof digitalData.page.attributes === 'undefined'
                    ) {
                      if (_satellite.getVar('iNav Link')) {
                        s.linkTrackVars = 'eVar8';
                        s.eVar8 = _satellite.getVar('iNav Link');
                        s.eVar8 = s.getValOnce(s.eVar8, 'acqevar8', 0);
                      }
                      if (_satellite.getVar('Non-promotional link')) {
                        s.linkTrackVars = 'prop20';
                        s.prop20 = _satellite.getVar('Non-promotional link');
                      } else if (_satellite.getVar('linknav')) {
                        s.linkTrackVars = 'prop20';
                        s.prop20 = _satellite.getVar('linknav');
                      }
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'NumberOfCards - Card offering page',
            trigger: [
              {
                engine: 'sc',
                command: 'setVars',
                arguments: [{ prop53: '%NumberOfCards - Card offers%' }],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Page ID Number',
            trigger: [
              { engine: 'sc', command: 'setVars', arguments: [{ prop71: '%Page ID Number%' }] },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Page Identification',
            trigger: [
              {
                engine: 'sc',
                command: 'setVars',
                arguments: [
                  {
                    eVar27: '%Country%',
                    eVar74: '%Full Page Name%',
                    eVar83: '%Request ID%',
                    prop19: '%Country%|%Business Unit%|%Primary Category%',
                    prop24: '%Country%|%Business Unit%|%Primary Category%|%Sub Category 1%',
                    prop3: '%Language%',
                    prop30:
                      '%Country%|%Business Unit%|%Primary Category%|%Sub Category 1%|%Sub Category 2%',
                    prop31: '%Country%|%Business Unit%',
                    prop38:
                      '%Country%|%Business Unit%|%Primary Category%|%Sub Category 1%|%Sub Category 2%|%Sub Category 3%',
                    prop4: '%Country%',
                    prop75: '%Npn/fb naming%',
                    pageName: '%Full Page Name%',
                    hier1: '%Hier 1%',
                  },
                ],
              },
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var nme = [];
                    if (_satellite.getVar('Country')) nme.push(_satellite.getVar('Country'));
                    if (_satellite.getVar('Business Unit'))
                      nme.push(_satellite.getVar('Business Unit'));
                    s.prop31 = nme.join('|');
                    if (_satellite.getVar('Primary Category'))
                      nme.push(_satellite.getVar('Primary Category'));
                    s.prop19 = nme.join('|');
                    if (_satellite.getVar('Sub Category 1'))
                      nme.push(_satellite.getVar('Sub Category 1'));
                    s.prop24 = nme.join('|');
                    if (_satellite.getVar('Sub Category 2'))
                      nme.push(_satellite.getVar('Sub Category 2'));
                    s.prop30 = nme.join('|');
                    if (_satellite.getVar('Sub Category 3'))
                      nme.push(_satellite.getVar('Sub Category 3'));
                    s.prop38 = nme.join('|');
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    if (_satellite.getVar('ZipCode') != '') {
                      s.eVar39 = cn + _satellite.getVar('ZipCode');
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Page load error',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    var pnm =
                      _satellite.getVar('Page Name') != ''
                        ? _satellite.getVar('Page Name') + ':'
                        : '';
                    s.linkTrackVars = 'prop26';
                    s.prop26 = cn + bu + pnm + _satellite.getVar('Error code');
                    if (
                      _satellite.getVar('Error code').indexOf('404') != -1 ||
                      _satellite.getVar('Error code').toLowerCase().indexOf('brokenpage') != -1 ||
                      _satellite.getVar('Error code').toLowerCase().indexOf('errorpage') != -1
                    )
                      s.pageType = 'errorPage';
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                return _satellite.getVar('Error code') != '';
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Personal Savings',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    s.eVar39 =
                      _satellite.getVar('ZipCode') != '' ? cn + _satellite.getVar('ZipCode') : '';
                    var eventArr = [];
                    for (var i = digitalData.event.length; i--; ) {
                      if (typeof digitalData.event[i] != 'undefined') {
                        if (typeof digitalData.event[i].eventInfo != 'undefined') {
                          if (typeof digitalData.event[i].eventInfo.eventType != 'undefined') {
                            if (digitalData.event[i].eventInfo.eventType == 'psSignups') {
                              var purID =
                                _satellite.getVar('AppID') != '' ? _satellite.getVar('AppID') : '';
                              var conOpt =
                                _satellite.getVar('Conversion Options') != ''
                                  ? _satellite.getVar('Conversion Options')
                                  : '';
                              var conType =
                                _satellite.getVar('Conversion Type') != '' &&
                                _satellite.getVar('Conversion Type') != 'undefined'
                                  ? _satellite.getVar('Conversion Type')
                                  : '';
                              if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'event50';
                                pdt = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'event50', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                s.linkTrackVars =
                                  'events,products,eVar39,eVar34,eVar46,eVar53,eVar68';
                                s.linkTrackEvents = 'event4';
                                pdt = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                var zcode = [];
                                if (_satellite.getVar('Country'))
                                  zcode.push(_satellite.getVar('Country'));
                                if (_satellite.getVar('ZipCode'))
                                  zcode.push(_satellite.getVar('ZipCode'));
                                s.eVar39 =
                                  _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                                s.eVar34 =
                                  _satellite.getVar('Application Decision') != ''
                                    ? cn + bu + _satellite.getVar('Application Decision')
                                    : '';
                                s.eVar46 = purID;
                                s.eVar53 = conOpt != '' ? cn + bu + conType + ':' + conOpt : '';
                                s.eVar68 = conType != '' ? cn + bu + conType : '';
                                s.events = s.apl(s.events, 'event4', ',', ',', 2);
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType == 'psSignups') return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Prepaid Products',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    if (_satellite.getVar('Business Unit') == 'AMEX') {
                      bu =
                        _satellite.getVar('Sub Category 1') != ''
                          ? _satellite.getVar('Sub Category 1') + ':'
                          : '';
                    }
                    for (var i = digitalData.event.length; i--; ) {
                      if (typeof digitalData.event[i] != 'undefined') {
                        if (typeof digitalData.event[i].eventInfo != 'undefined') {
                          if (typeof digitalData.event[i].eventInfo.eventType != 'undefined') {
                            if (digitalData.event[i].eventInfo.eventType == 'prepaidProduct') {
                              var purID =
                                _satellite.getVar('PurchaseID') != ''
                                  ? _satellite.getVar('PurchaseID')
                                  : '';
                              var conOpt =
                                _satellite.getVar('Conversion Options') != ''
                                  ? _satellite.getVar('Conversion Options')
                                  : '';
                              if (typeof digitalData.event[i].productInfo != 'undefined') {
                                pdt_name =
                                  typeof digitalData.event[i].productInfo[
                                    digitalData.event[i].productInfo.length - 1
                                  ].productName != 'undefined'
                                    ? digitalData.event[i].productInfo[
                                        digitalData.event[i].productInfo.length - 1
                                      ].productName
                                    : '';
                                var preAmt =
                                  typeof digitalData.event[i].productInfo[
                                    digitalData.event[i].productInfo.length - 1
                                  ].prepaidAmount != 'undefined'
                                    ? digitalData.event[i].productInfo[
                                        digitalData.event[i].productInfo.length - 1
                                      ].prepaidAmount
                                    : '';
                                var purFre =
                                  typeof digitalData.event[i].productInfo[
                                    digitalData.event[i].productInfo.length - 1
                                  ].purchaseFrequency != 'undefined'
                                    ? digitalData.event[i].productInfo[
                                        digitalData.event[i].productInfo.length - 1
                                      ].purchaseFrequency
                                    : '';
                                var preQty =
                                  typeof digitalData.event[i].productInfo[
                                    digitalData.event[i].productInfo.length - 1
                                  ].quantity != 'undefined'
                                    ? digitalData.event[i].productInfo[
                                        digitalData.event[i].productInfo.length - 1
                                      ].quantity
                                    : '';
                                var purRev =
                                  typeof digitalData.event[i].productInfo[
                                    digitalData.event[i].productInfo.length - 1
                                  ].revenue != 'undefined'
                                    ? digitalData.event[i].productInfo[
                                        digitalData.event[i].productInfo.length - 1
                                      ].revenue
                                    : '';
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'add') {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'scAdd';
                                pdt = ';' + cn + 'Prepaid:' + pdt_name;
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'scAdd', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'remove') {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'scRemove';
                                pdt = ';' + cn + 'Prepaid:' + pdt_name;
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'scRemove', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                s.linkTrackVars = 'events,products';
                                s.linkTrackEvents = 'scCheckout';
                                pdt = ';' + cn + 'Prepaid:' + pdt_name;
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                s.events = s.apl(s.events, 'scCheckout', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                s.linkTrackVars =
                                  'events,products,eVar39,eVar23,eVar40,eVar46,eVar53,eVar68';
                                s.linkTrackEvents = 'purchase';
                                pdt =
                                  ';' +
                                  cn +
                                  'Prepaid:' +
                                  pdt_name +
                                  ';' +
                                  preQty +
                                  ';' +
                                  purRev +
                                  ';;eVar23=' +
                                  purFre +
                                  ':' +
                                  preAmt;
                                if (s.products) {
                                  s.products += ',' + pdt;
                                } else s.products = pdt;
                                var pmethod = [];
                                if (_satellite.getVar('Country'))
                                  pmethod.push(_satellite.getVar('Country'));
                                if (_satellite.getVar('Business Unit'))
                                  pmethod.push(_satellite.getVar('Business Unit'));
                                if (_satellite.getVar('PaymentMethod'))
                                  pmethod.push(_satellite.getVar('PaymentMethod'));
                                s.eVar40 =
                                  _satellite.getVar('PaymentMethod') != ''
                                    ? pmethod.join(':')
                                    : '';
                                var zcode = [];
                                if (_satellite.getVar('Country'))
                                  zcode.push(_satellite.getVar('Country'));
                                if (_satellite.getVar('ZipCode'))
                                  zcode.push(_satellite.getVar('ZipCode'));
                                s.eVar39 =
                                  _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                                s.eVar46 = s.purchaseID = purID;
                                s.eVar53 = conOpt != '' ? cn + bu + 'Prepaid:' + conOpt : '';
                                s.eVar68 = cn + bu + 'Prepaid';
                                s.events = s.apl(s.events, 'purchase', ',', ',', 2);
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType == 'prepaidProduct') return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Quiz/Survey Tracking',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    if (_satellite.getVar('Survey ID')) s.linkTrackVars = 'eVar52';
                    s.eVar52 = _satellite.getVar('Survey ID');
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'RSVP',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    s.linkTrackVars = 'eVar3,prop26';
                    s.eVar26 =
                      _satellite.getVar('RSVP offer ID') != ''
                        ? cn + bu + _satellite.getVar('RSVP offer ID')
                        : '';
                    s.eVar3 = _satellite.getVar('RSVP ID');
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Self Service Transactions (Enterprise)',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    for (i = 0; i < digitalData.event.length; i++) {
                      console.log(digitalData.event[i].eventInfo.eventType);
                      if (digitalData.event[i].eventInfo.eventType == 'selfService') {
                        if (digitalData.event[i].eventInfo.eventAction.toLowerCase() == 'start') {
                          s.linkTrackVars = 'products,events';
                          s.linkTrackEvents = 'event51';
                          s.events = s.apl(s.events, 'event51', ',', ',', 2);
                          if (s.products) {
                            pdt = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                            s.products += ',' + pdt;
                          } else
                            s.products = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                        }
                        if (
                          digitalData.event[i].eventInfo.eventAction.toLowerCase() == 'complete'
                        ) {
                          s.linkTrackVars = 'products,events,eVar68';
                          s.linkTrackEvents = 'event14';
                          s.events = s.apl(s.events, 'event14', ',', ',', 2);
                          if (s.products) {
                            pdt = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                            s.products += ',' + pdt;
                          } else
                            s.products = ';' + cn + bu + digitalData.event[i].eventInfo.eventName;
                          s.eVar68 = cn + bu + 'SelfServiceComplete';
                        }
                      }
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType == 'selfService') return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Site Tool',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    var pri_cat =
                      _satellite.getVar('Primary Category') != ''
                        ? _satellite.getVar('Primary Category') + ':'
                        : '';
                    if (_satellite.getVar('SiteToolName')) {
                      s.linkTrackVars = 'eVar42,prop35,events';
                      s.linkTrackEvents = 'event13';
                      s.eVar42 = s.prop35 = cn + bu + pri_cat + _satellite.getVar('SiteToolName');
                      s.events = s.apl(s.events, 'event13', ',', ',', 2);
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                return _satellite.getVar('SiteToolName') != '';
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Stand alone Supplementary card applications',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.AMEXCFM = function () {
                      var cv,
                        p,
                        el,
                        i,
                        f = 0,
                        f2 = 0,
                        cn = 's_cdfm',
                        a = 'Learn More Page',
                        b = 'Start App Page',
                        c = 'External Campaign:',
                        d = 'Internal Search:',
                        e = 'Browse:',
                        g = ':Previous Page ID Not Set',
                        h = 'no value',
                        j = 'search.americanexpress.com';
                      el = s.split(s.events, ',');
                      for (i in el)
                        if (el[i] == 'event12') {
                          f2 = 1;
                          break;
                        }
                      for (i in el)
                        if (el[i] == 'event1') {
                          f2 = 2;
                          break;
                        }
                      if (f2 == 0) return '';
                      cv = s.c_r(cn);
                      if (cv) {
                        p = s.split(cv, '|');
                        for (i in p)
                          if (p[i] == s.ser1) {
                            f = 1;
                            break;
                          }
                        if (f == 1) return '';
                      }
                      if (f2 == 1) {
                        if (s.campaign) s.eVar15 = c + a;
                        else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + a;
                        else if (s.eVar41)
                          if (s.eVar41 == h) s.eVar15 = e + a + g;
                          else s.eVar15 = e + a + s.eVar41;
                        else s.eVar15 = e + a + g;
                        if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                        else s.c_w(cn, s.ser1, 0);
                        return '';
                      } else if (f2 == 2) {
                        if (s.campaign) s.eVar15 = c + b;
                        else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + b;
                        else if (s.eVar41)
                          if (s.eVar41 == h) s.eVar15 = e + b + g;
                          else s.eVar15 = e + b + s.eVar41;
                        else s.eVar15 = e + b + g;
                        if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                        else s.c_w(cn, s.ser1, 0);
                        return '';
                      }
                    };
                    s.AMEXVisID = function (cn) {
                      var s = this,
                        e = new Date(),
                        ct = e.getTime(),
                        cv;
                      cn = cn ? cn : 's_uvid';
                      e.setTime(ct + 5 * 365 * 24 * 60 * 60 * 1000);
                      cv = s.c_r(cn);
                      if (cv) {
                        s.c_w(cn, cv, e);
                        return '';
                      } else {
                        var t = new Date(),
                          m = t.getTime(),
                          r1 = Math.floor(Math.random() * 10),
                          r2 = Math.floor(Math.random() * 10),
                          r3 = Math.floor(Math.random() * 10),
                          uv;
                        m = m.toString();
                        r1 = r1.toString();
                        r2 = r2.toString();
                        r3 = r3.toString();
                        uv = m + r1 + r2 + r3;
                        s.c_w(cn, uv, e);
                        return '';
                      }
                    };
                    s.AMEXVisNum = function () {
                      var d = this,
                        h = new Date(),
                        g,
                        c,
                        b = h.getTime(),
                        a = 's_vnum',
                        f = 's_invisit';
                      h.setTime(b + 5 * 365 * 24 * 60 * 60 * 1000);
                      visit_num_val = d.c_r(a);
                      g = d.c_r(f);
                      if (g) {
                        if (visit_num_val) {
                          h.setTime(b + 30 * 60 * 1000);
                          d.c_w(f, 'true', h);
                          return visit_num_val;
                        } else {
                          return 1;
                        }
                      } else {
                        if (visit_num_val) {
                          c = visit_num_val.match(/(\d*)&vn=(\d*)/);
                          if (c) {
                            visit_num_val = c[2];
                          }
                          visit_num_val++;
                          d.c_w(a, visit_num_val, h);
                          h.setTime(b + 30 * 60 * 1000);
                          d.c_w(f, 'true', h);
                          return visit_num_val;
                        } else {
                          d.c_w(a, 1, h);
                          h.setTime(b + 30 * 60 * 1000);
                          d.c_w(f, 'true', h);
                          return 1;
                        }
                      }
                    };
                    s.AMEXSerializer = function (f, sn) {
                      var el, fl, i, n;
                      if (!s.events) return '';
                      else {
                        el = s.split(s.events, ',');
                        fl = s.split(f, ',');
                        for (i in el)
                          for (n in fl)
                            if (el[i] == fl[n]) {
                              el[i] = el[i] + ':' + sn;
                              break;
                            }
                        s.events = s.join(el, '', '', ',', '');
                        return '';
                      }
                    };
                    s.getTimeToComplete = function (sos, cn, exp) {
                      sos = sos ? sos.toLowerCase() : 'start';
                      cn = cn ? cn : 's_gttc';
                      exp = exp ? exp : 0;
                      var s = this,
                        d = s.c_r(cn),
                        e = new Date();
                      if ('start' === sos && !d)
                        s.c_w(cn, e.getTime(), exp ? new Date(e.getTime() + 86400000 * exp) : 0);
                      else if ('stop' === sos && d)
                        return (
                          (sos = Math.round((e.getTime() - d) / 1000)),
                          s.c_w(cn, '', 0),
                          s.formatTime(sos)
                        );
                    };
                    s.formatTime = function (ns, tf, bml) {
                      var s = this;
                      if (!('undefined' === typeof ns || isNaN(ns) || 0 > Number(ns))) {
                        if (
                          ('string' === typeof tf && 'd' === tf) ||
                          (('string' !== typeof tf || !s.inList('h,m,s', tf)) && 86400 <= ns)
                        ) {
                          tf = 86400;
                          var d = 'days';
                          bml = isNaN(bml) ? 4 : tf / (bml * tf);
                        } else
                          ('string' === typeof tf && 'h' === tf) ||
                          (('string' !== typeof tf || !s.inList('m,s', tf)) && 3600 <= ns)
                            ? ((tf = 3600),
                              (d = 'hours'),
                              (bml = isNaN(bml) ? 4 : tf / (bml * tf)))
                            : ('string' === typeof tf && 'm' === tf) ||
                              (('string' !== typeof tf || !s.inList('s', tf)) && 60 <= ns)
                            ? ((tf = 60),
                              (d = 'minutes'),
                              (bml = isNaN(bml) ? 2 : tf / (bml * tf)))
                            : ((tf = 1), (d = 'seconds'), (bml = isNaN(bml) ? 0.2 : tf / bml));
                        ns = Math.round((ns * bml) / tf) / bml + ' ' + d;
                        0 === ns.indexOf('1 ') && (ns = ns.substring(0, ns.length - 1));
                        return ns;
                      }
                    };
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    for (i = 0; i < digitalData.event.length; i++) {
                      if (digitalData.event[i].eventInfo.eventType == 'suppApplication') {
                        var conOpt =
                          _satellite.getVar('Conversion Options') != ''
                            ? _satellite.getVar('Conversion Options')
                            : '';
                        var conType =
                          _satellite.getVar('Conversion Type') != '' &&
                          typeof _satellite.getVar('Conversion Type') != 'undefined'
                            ? _satellite.getVar('Conversion Type')
                            : '';
                        pmc_code = _satellite.getVar('PMC') != '' ? _satellite.getVar('PMC') : '';
                        pdt = ';' + cn + bu + pmc_code;
                        if (digitalData.event[i].eventInfo.eventAction == 'start') {
                          s.linkTrackVars = 'events,products,eVar31';
                          s.linkTrackEvents = 'event47';
                          s.eVar31 = _satellite.getVar('ApplyFlowID');
                          if (s.products) {
                            s.products += ',' + pdt;
                          } else s.products = pdt;
                          s.events = s.apl(s.events, 'event47', ',', ',', 2);
                        }
                        if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                          s.linkTrackVars = 'events,products,eVar39,eVar29,eVar53,eVar68,eVar34';
                          s.linkTrackEvents = 'event24';
                          s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                          if (s.products) {
                            s.products += ',' + pdt;
                          } else s.products = pdt;
                          var zcode = [];
                          if (_satellite.getVar('Country'))
                            zcode.push(_satellite.getVar('Country'));
                          if (_satellite.getVar('ZipCode'))
                            zcode.push(_satellite.getVar('ZipCode'));
                          s.eVar39 = _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                          s.eVar29 = _satellite.getVar('PCNnumber');
                          s.eVar53 = conOpt != '' ? cn + bu + conType + ':' + conOpt : '';
                          s.eVar68 = conType != '' ? cn + bu + conType : '';
                          s.events = s.apl(s.events, 'event24', ',', ',', 2);
                        }
                      }
                    }
                    if (pmc_code != '') s.ser1 = pmc_code;
                    s.AMEXVisID('s_uvid');
                    s.ser2 = s.AMEXVisNum();
                    s.ser3 = s.c_r('s_uvid');
                    if (s.ser1 && s.ser2 && s.ser3) {
                      s.ser = s.ser1 + s.ser2 + s.ser3;
                      if (s.ser.length > 20) {
                        s.ser = s.ser.substring(0, 20);
                      }
                    }
                    if (s.events && s.ser1) s.AMEXCFM();
                    if (s.ser) {
                      s.AMEXSerializer('event1,event2,event12,event47,event81', s.ser);
                    }
                    if (s.eVar29 && s.eVar29 !== 'null' && s.eVar29 !== '') {
                      s.AMEXSerializer(
                        'event3,event5,event9,event10,event11,event14,event24,event58',
                        s.eVar29
                      );
                    }
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType == 'suppApplication') return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Testing',
            trigger: [
              { engine: 'sc', command: 'setVars', arguments: [{ eVar59: '%AB Testing Code%' }] },
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.list2 = _satellite.getVar('AB Testing Code');
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'Working Capital',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.getTimeToComplete = function (sos, cn, exp) {
                      sos = sos ? sos.toLowerCase() : 'start';
                      cn = cn ? cn : 's_gttc';
                      exp = exp ? exp : 0;
                      var s = this,
                        d = s.c_r(cn),
                        e = new Date();
                      if ('start' === sos && !d)
                        s.c_w(cn, e.getTime(), exp ? new Date(e.getTime() + 86400000 * exp) : 0);
                      else if ('stop' === sos && d)
                        return (
                          (sos = Math.round((e.getTime() - d) / 1000)),
                          s.c_w(cn, '', 0),
                          s.formatTime(sos)
                        );
                    };
                    s.formatTime = function (ns, tf, bml) {
                      var s = this;
                      if (!('undefined' === typeof ns || isNaN(ns) || 0 > Number(ns))) {
                        if (
                          ('string' === typeof tf && 'd' === tf) ||
                          (('string' !== typeof tf || !s.inList('h,m,s', tf)) && 86400 <= ns)
                        ) {
                          tf = 86400;
                          var d = 'days';
                          bml = isNaN(bml) ? 4 : tf / (bml * tf);
                        } else
                          ('string' === typeof tf && 'h' === tf) ||
                          (('string' !== typeof tf || !s.inList('m,s', tf)) && 3600 <= ns)
                            ? ((tf = 3600),
                              (d = 'hours'),
                              (bml = isNaN(bml) ? 4 : tf / (bml * tf)))
                            : ('string' === typeof tf && 'm' === tf) ||
                              (('string' !== typeof tf || !s.inList('s', tf)) && 60 <= ns)
                            ? ((tf = 60),
                              (d = 'minutes'),
                              (bml = isNaN(bml) ? 2 : tf / (bml * tf)))
                            : ((tf = 1), (d = 'seconds'), (bml = isNaN(bml) ? 0.2 : tf / bml));
                        ns = Math.round((ns * bml) / tf) / bml + ' ' + d;
                        0 === ns.indexOf('1 ') && (ns = ns.substring(0, ns.length - 1));
                        return ns;
                      }
                    };
                    s.apl = function (lv, vta, d1, d2, cc) {
                      d1 = d1 ? d1 : ',';
                      d2 = d2 ? d2 : d1;
                      if ('undefined' === typeof this.inList)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                          ),
                          lv
                        );
                      if ('undefined' !== typeof lv && 'string' !== typeof lv)
                        return (
                          console.log(
                            'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                          ),
                          ''
                        );
                      if ('string' !== typeof vta) return lv;
                      vta = vta.split(',');
                      for (var g = vta.length, d = 0; d < g; d++)
                        this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                      return lv;
                    };
                    s.inList = function (lv, vtc, d, cc) {
                      if ('string' !== typeof vtc) return !1;
                      if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                      else if ('object' !== typeof lv) return !1;
                      d = 0;
                      for (var e = lv.length; d < e; d++)
                        if (
                          (cc && vtc === lv[d]) ||
                          (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                        )
                          return !0;
                      return !1;
                    };
                    var cn =
                      _satellite.getVar('Country') != ''
                        ? _satellite.getVar('Country').toUpperCase() + ':'
                        : '';
                    var bu =
                      _satellite.getVar('Business Unit') != ''
                        ? _satellite.getVar('Business Unit') + ':'
                        : '';
                    s.eVar39 =
                      _satellite.getVar('ZipCode') != '' ? cn + _satellite.getVar('ZipCode') : '';
                    if (_satellite.getVar('Business Unit') == 'AMEX') {
                      bu =
                        _satellite.getVar('Sub Category 1') != ''
                          ? _satellite.getVar('Sub Category 1') + ':'
                          : '';
                    }
                    var eventArr = [];
                    for (var i = digitalData.event.length; i--; ) {
                      if (typeof digitalData.event[i] != 'undefined') {
                        if (typeof digitalData.event[i].eventInfo != 'undefined') {
                          if (typeof digitalData.event[i].eventInfo.eventType != 'undefined') {
                            if (digitalData.event[i].eventInfo.eventType == 'workingCapital') {
                              if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                s.linkTrackVars = 'events';
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event110',
                                  ',',
                                  ',',
                                  2
                                );
                                s.events = s.apl(s.events, 'event110', ',', ',', 2);
                              }
                              if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                s.linkTrackVars = 'events,eVar34,eVar54';
                                s.linkTrackEvents = s.apl(
                                  s.linkTrackEvents,
                                  'event111',
                                  ',',
                                  ',',
                                  2
                                );
                                s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                                s.events = s.apl(s.events, 'event111', ',', ',', 2);
                              }
                            }
                          }
                        }
                      }
                    }
                    s.ttc = s.c_r('wc_ttc');
                    if (s.events) {
                      var _el, _i;
                      if (s.inList('event110', s.events)) {
                        s.tmpevent110 = 1;
                        s.eVar54 = 'start';
                      }
                      if (s.inList('event111', s.events)) {
                        s.tempevent111 = 1;
                        s.eVar54 = 'stop';
                      }
                    }
                    s.eVar54 = s.getTimeToComplete(s.eVar54, 'wc_ttc', 360);
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                for (i = 0; i < digitalData.event.length; i++) {
                  if (digitalData.event[i].eventInfo.eventType.toLowerCase() == 'workingcapital')
                    return true;
                }
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'iNav Link Tracking',
            trigger: [
              {
                engine: 'sc',
                command: 'customSetup',
                arguments: [
                  function (event, s) {
                    s.getValOnce = function (vtc, cn, et, ep) {
                      cn = cn ? cn : 's_gvo';
                      et = et ? et : 0;
                      ep = 'm' === ep ? 60000 : 86400000;
                      if (vtc && vtc !== this.c_r(cn)) {
                        var e = new Date();
                        e.setTime(e.getTime() + et * ep);
                        this.c_w(cn, vtc, 0 === et ? 0 : e);
                        return vtc;
                      }
                      return '';
                    };
                    if (digitalData) {
                      if (digitalData.page) {
                        if (digitalData.page.attributes) {
                          if (digitalData.page.attributes.autotrack != false) {
                            if (_satellite.getVar('iNav Link')) {
                              s.linkTrackVars = 'eVar8';
                              s.eVar8 = _satellite.getVar('iNav Link');
                              s.eVar8 = s.getValOnce(s.eVar8, 'acqevar8', 0);
                            }
                          }
                        }
                      }
                    }
                  },
                ],
              },
            ],
            event: 'pagebottom',
          },
          {
            name: 'visitor Object',
            conditions: [
              function (event, target) {
                if (typeof visitor == 'undefined' && typeof _satellite != 'undefined') {
                  window.visitor = _satellite.getVisitorId();
                }
                window.excludeOmniture = true;
                return true;
              },
            ],
            event: 'pagetop',
          },
          {
            name: 'Blue Box GUID - (Global Mbox Parameters)',
            event: 'aftertoolinit',
            scope: { domains: [/americanexpress\.com$/i] },
            trigger: [
              {
                engine: 'tnt',
                command: 'addTargetPageParams',
                arguments: [{ guid: '%AMEX GUID%' }],
              },
            ],
          },
        ],
        rules: [
          {
            name: 'Download Link - April 26, 2017 07:16:20 PM',
            trigger: [
              {
                command: 'loadScript',
                arguments: [
                  {
                    sequential: false,
                    scripts: [{ src: 'satellite-5901547464746d2d7e00bdf0.js' }],
                  },
                ],
              },
              { command: 'delayActivateLink' },
            ],
            selector: 'a',
            property: {
              href: /\.(?:doc|docx|eps|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v|ics)($|\&|\?)/i,
            },
            event: 'click',
            bubbleFireIfParent: true,
            bubbleFireIfChildFired: true,
            bubbleStop: false,
          },
          {
            name: 'Outbound Link - April 26, 2017 07:16:20 PM',
            trigger: [
              {
                command: 'loadScript',
                arguments: [
                  {
                    sequential: false,
                    scripts: [{ src: 'satellite-5901547464746d2d7e00be07.js' }],
                  },
                ],
              },
            ],
            conditions: [
              function (event, target) {
                return (
                  _satellite.isOutboundLink(this) &&
                  !this.href.match(
                    /\.(?:doc|docx|eps|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i
                  )
                );
              },
            ],
            selector: 'a',
            event: 'click',
            bubbleFireIfParent: true,
            bubbleFireIfChildFired: true,
            bubbleStop: false,
          },
        ],
        directCallRules: [
          {
            name: 'abtest',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'ABTest',
                    setVars: { eVar59: '%omn_abtest%', eVar74: '%Full Layer Name%' },
                    customSetup: function (event, s) {
                      function ClearVars () {
                        for (var i = 0; i < 75; i++) {
                          s['prop' + i] = '';
                          s['eVar' + i] = '';
                        }
                        svarArr = [
                          'channel',
                          'products',
                          'events',
                          'campaign',
                          'purchaseID',
                          'pageType',
                          'server',
                          'linkName',
                          'list1',
                          'list2',
                        ];
                        for (var i = 0; i < svarArr.length; i++) {
                          s[svarArr[i]] = '';
                        }
                        s.pageType = '';
                      }
                      ClearVars();
                      s.linkTrackVars = 'eVar59,list2,eVar74';
                      s.list2 = s.eVar59 = _satellite.getVar('omn_abtest');
                      s.eVar74 = _satellite.getVar('Full Layer Name');
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'cardCompare',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Add to Compare Cards',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      if (_satellite.getVar('Event Action').toLowerCase() == 'add') {
                        s.linkTrackVars = 'products,events';
                        s.linkTrackEvents = 'event112';
                        s.products = ';' + cn + bu + _satellite.getVar('PMC');
                        s.events = s.apl(s.events, 'event112', ',', ',', 2);
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'call',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Click to call',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      s.linkTrackVars = 'events,prop21,prop22,eVar56,eVar4,eVar5,eVar74';
                      s.linkTrackEvents = 'event75';
                      s.prop21 = s.eVar4 = cn + 'PhoneDial';
                      s.prop22 = s.eVar5 =
                        s.pageName.replace(/\|/gi, ':') +
                        '>>' +
                        _satellite.getVar('Event Action') +
                        '>' +
                        _satellite.getVar('Event Asset');
                      s.eVar56 = _satellite.getVar('Event Description');
                      s.eVar74 = s.pageName;
                      s.events = 'event75';
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'signature',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Digital Signature',
                    customSetup: function (event, s) {
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'events';
                        s.linkTrackEvents = 'event105';
                        s.events = 'event105';
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.linkTrackVars = 'events';
                        s.linkTrackEvents = 'event106';
                        s.events = 'event106';
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'error',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Dynamic Error',
                    setVars: {
                      prop26: '%Country%:%Business Unit%:%Page Name%:%Dynamic Error name%',
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'pageInteraction',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Dynamic Page Action',
                    setVars: {
                      eVar4: '%Country%:%Business Unit%:%Event Asset%',
                      eVar5: '%Country%:%Business Unit%:%Event Asset%>>%Event Action%',
                      prop21: '%Country%:%Business Unit%:%Event Asset%',
                      prop22: '%Country%:%Business Unit%:%Event Asset%>>%Event Action%',
                      prop75: 'DTM',
                    },
                    customSetup: function (event, s) {
                      function ClearVars () {
                        for (var i = 0; i < 75; i++) {
                          s['prop' + i] = '';
                          s['eVar' + i] = '';
                        }
                        svarArr = [
                          'channel',
                          'products',
                          'events',
                          'campaign',
                          'purchaseID',
                          'pageType',
                          'server',
                          'linkName',
                          'list1',
                          'list2',
                        ];
                        for (var i = 0; i < svarArr.length; i++) {
                          s[svarArr[i]] = '';
                        }
                      }
                      ClearVars();
                      var nme = [];
                      if (_satellite.getVar('Country')) {
                        nme.push(_satellite.getVar('Country'));
                      }
                      if (_satellite.getVar('Business Unit')) {
                        nme.push(_satellite.getVar('Business Unit'));
                      }
                      s.prop31 = nme.join('|');
                      if (_satellite.getVar('Primary Category')) {
                        nme.push(_satellite.getVar('Primary Category'));
                      }
                      s.prop19 = nme.join('|');
                      if (_satellite.getVar('Sub Category 1')) {
                        nme.push(_satellite.getVar('Sub Category 1'));
                      }
                      s.prop24 = nme.join('|');
                      if (_satellite.getVar('Sub Category 2')) {
                        nme.push(_satellite.getVar('Sub Category 2'));
                      }
                      s.prop30 = nme.join('|');
                      if (_satellite.getVar('Sub Category 3')) {
                        nme.push(_satellite.getVar('Sub Category 3'));
                      }
                      s.linkTrackVars = 'prop21,prop22,eVar4,eVar5,prop75,eVar78';
                      s.prop21 = s.eVar4 = nme.join(':');
                      s.prop22 = s.eVar5 =
                        nme.join(':') +
                        '>>' +
                        _satellite.getVar('Event Action') +
                        '>' +
                        _satellite.getVar('Event Asset');
                      s.prop75 = 'DTM';
                      s.eVar78 = _satellite.getVar('CorpUserID');
                      if (_satellite.getVar('Login')) {
                        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar69,prop69', ',', ',', 2);
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event6', ',', ',', 2);
                        s.eVar69 = s.prop69 = _satellite.getVar('Login');
                        s.events = s.apl(s.events, 'event6', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action') == 'dynamicSearch') {
                        s.linkTrackVars = 'eVar9,events';
                        s.linkTrackEvents = 'event8';
                        s.eVar9 = _satellite.getVar('Search Keyword');
                        s.events = 'event8';
                      }
                      if (_satellite.getVar('Conversion Options')) {
                        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar53', ',', ',', 2);
                        s.eVar53 = _satellite.getVar('Conversion Options');
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'workingCapital',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'WorkingCapital',
                    setVars: { pageName: '%Full Layer Name%', hier1: '%Layer Hier%' },
                    customSetup: function (event, s) {
                      s.getTimeToComplete = function (sos, cn, exp) {
                        sos = sos ? sos.toLowerCase() : 'start';
                        cn = cn ? cn : 's_gttc';
                        exp = exp ? exp : 0;
                        var s = this,
                          d = s.c_r(cn),
                          e = new Date();
                        if ('start' === sos && !d)
                          s.c_w(cn, e.getTime(), exp ? new Date(e.getTime() + 86400000 * exp) : 0);
                        else if ('stop' === sos && d)
                          return (
                            (sos = Math.round((e.getTime() - d) / 1000)),
                            s.c_w(cn, '', 0),
                            s.formatTime(sos)
                          );
                      };
                      s.formatTime = function (ns, tf, bml) {
                        var s = this;
                        if (!('undefined' === typeof ns || isNaN(ns) || 0 > Number(ns))) {
                          if (
                            ('string' === typeof tf && 'd' === tf) ||
                            (('string' !== typeof tf || !s.inList('h,m,s', tf)) && 86400 <= ns)
                          ) {
                            tf = 86400;
                            var d = 'days';
                            bml = isNaN(bml) ? 4 : tf / (bml * tf);
                          } else
                            ('string' === typeof tf && 'h' === tf) ||
                            (('string' !== typeof tf || !s.inList('m,s', tf)) && 3600 <= ns)
                              ? ((tf = 3600),
                                (d = 'hours'),
                                (bml = isNaN(bml) ? 4 : tf / (bml * tf)))
                              : ('string' === typeof tf && 'm' === tf) ||
                                (('string' !== typeof tf || !s.inList('s', tf)) && 60 <= ns)
                              ? ((tf = 60),
                                (d = 'minutes'),
                                (bml = isNaN(bml) ? 2 : tf / (bml * tf)))
                              : ((tf = 1), (d = 'seconds'), (bml = isNaN(bml) ? 0.2 : tf / bml));
                          ns = Math.round((ns * bml) / tf) / bml + ' ' + d;
                          0 === ns.indexOf('1 ') && (ns = ns.substring(0, ns.length - 1));
                          return ns;
                        }
                      };
                      s.apl = function (lv, vta, d1, d2, cc) {
                        d1 = d1 ? d1 : ',';
                        d2 = d2 ? d2 : d1;
                        if ('undefined' === typeof this.inList)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                            ),
                            lv
                          );
                        if ('undefined' !== typeof lv && 'string' !== typeof lv)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                            ),
                            ''
                          );
                        if ('string' !== typeof vta) return lv;
                        vta = vta.split(',');
                        for (var g = vta.length, d = 0; d < g; d++)
                          this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                        return lv;
                      };
                      s.inList = function (lv, vtc, d, cc) {
                        if ('string' !== typeof vtc) return !1;
                        if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                        else if ('object' !== typeof lv) return !1;
                        d = 0;
                        for (var e = lv.length; d < e; d++)
                          if (
                            (cc && vtc === lv[d]) ||
                            (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                          )
                            return !0;
                        return !1;
                      };
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      if (_satellite.getVar('Business Unit') == 'AMEX') {
                        bu =
                          _satellite.getVar('Sub Category 1') != ''
                            ? _satellite.getVar('Sub Category 1') + ':'
                            : '';
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'events';
                        s.linkTrackEvents = 'event110';
                        s.events = 'event110';
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.linkTrackVars = 'events,eVar54,eVar34';
                        s.linkTrackEvents = 'event111';
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.events = 'event111';
                      }
                      s.ttc = s.c_r('wc_ttc');
                      if (s.events) {
                        if (s.inList('event110', s.events)) {
                          s.tmpevent110 = 1;
                          s.eVar54 = 'start';
                        }
                        if (s.inList('event111', s.events)) {
                          s.tempevent111 = 1;
                          s.eVar54 = 'stop';
                        }
                      }
                      s.eVar54 = s.getTimeToComplete(s.eVar54, 'wc_ttc', 360);
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'cardApplication',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Card Acquisition',
                    setVars: { pageName: '%Full Layer Name%', hier1: '%Layer Hier%' },
                    customSetup: function (event, s) {
                      s.AMEXCFM = function () {
                        var cv,
                          p,
                          el,
                          i,
                          f = 0,
                          f2 = 0,
                          cn = 's_cdfm',
                          a = 'Learn More Page',
                          b = 'Start App Page',
                          c = 'External Campaign:',
                          d = 'Internal Search:',
                          e = 'Browse:',
                          g = ':Previous Page ID Not Set',
                          h = 'no value',
                          j = 'search.americanexpress.com';
                        el = s.split(s.events, ',');
                        for (i in el)
                          if (el[i] == 'event12') {
                            f2 = 1;
                            break;
                          }
                        for (i in el)
                          if (el[i] == 'event1') {
                            f2 = 2;
                            break;
                          }
                        if (f2 == 0) return '';
                        cv = s.c_r(cn);
                        if (cv) {
                          p = s.split(cv, '|');
                          for (i in p)
                            if (p[i] == s.ser1) {
                              f = 1;
                              break;
                            }
                          if (f == 1) return '';
                        }
                        if (f2 == 1) {
                          if (s.campaign) s.eVar15 = c + a;
                          else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + a;
                          else if (s.eVar41)
                            if (s.eVar41 == h) s.eVar15 = e + a + g;
                            else s.eVar15 = e + a + s.eVar41;
                          else s.eVar15 = e + a + g;
                          if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                          else s.c_w(cn, s.ser1, 0);
                          return '';
                        } else if (f2 == 2) {
                          if (s.campaign) s.eVar15 = c + b;
                          else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + b;
                          else if (s.eVar41)
                            if (s.eVar41 == h) s.eVar15 = e + b + g;
                            else s.eVar15 = e + b + s.eVar41;
                          else s.eVar15 = e + b + g;
                          if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                          else s.c_w(cn, s.ser1, 0);
                          return '';
                        }
                      };
                      s.AMEXVisID = function (cn) {
                        var s = this,
                          e = new Date(),
                          ct = e.getTime(),
                          cv;
                        cn = cn ? cn : 's_uvid';
                        e.setTime(ct + 5 * 365 * 24 * 60 * 60 * 1000);
                        cv = s.c_r(cn);
                        if (cv) {
                          s.c_w(cn, cv, e);
                          return '';
                        } else {
                          var t = new Date(),
                            m = t.getTime(),
                            r1 = Math.floor(Math.random() * 10),
                            r2 = Math.floor(Math.random() * 10),
                            r3 = Math.floor(Math.random() * 10),
                            uv;
                          m = m.toString();
                          r1 = r1.toString();
                          r2 = r2.toString();
                          r3 = r3.toString();
                          uv = m + r1 + r2 + r3;
                          s.c_w(cn, uv, e);
                          return '';
                        }
                      };
                      s.AMEXVisNum = function () {
                        var d = this,
                          h = new Date(),
                          g,
                          c,
                          b = h.getTime(),
                          a = 's_vnum',
                          f = 's_invisit';
                        h.setTime(b + 5 * 365 * 24 * 60 * 60 * 1000);
                        visit_num_val = d.c_r(a);
                        g = d.c_r(f);
                        if (g) {
                          if (visit_num_val) {
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return visit_num_val;
                          } else {
                            return 1;
                          }
                        } else {
                          if (visit_num_val) {
                            c = visit_num_val.match(/(\d*)&vn=(\d*)/);
                            if (c) {
                              visit_num_val = c[2];
                            }
                            visit_num_val++;
                            d.c_w(a, visit_num_val, h);
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return visit_num_val;
                          } else {
                            d.c_w(a, 1, h);
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return 1;
                          }
                        }
                      };
                      s.AMEXSerializer = function (f, sn) {
                        var el, fl, i, n;
                        if (!s.events) return '';
                        else {
                          el = s.split(s.events, ',');
                          fl = s.split(f, ',');
                          for (i in el)
                            for (n in fl)
                              if (el[i] == fl[n]) {
                                el[i] = el[i] + ':' + sn;
                                break;
                              }
                          s.events = s.join(el, '', '', ',', '');
                          return '';
                        }
                      };
                      s.apl = function (lv, vta, d1, d2, cc) {
                        d1 = d1 ? d1 : ',';
                        d2 = d2 ? d2 : d1;
                        if ('undefined' === typeof this.inList)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                            ),
                            lv
                          );
                        if ('undefined' !== typeof lv && 'string' !== typeof lv)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                            ),
                            ''
                          );
                        if ('string' !== typeof vta) return lv;
                        vta = vta.split(',');
                        for (var g = vta.length, d = 0; d < g; d++)
                          this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                        return lv;
                      };
                      s.inList = function (lv, vtc, d, cc) {
                        if ('string' !== typeof vtc) return !1;
                        if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                        else if ('object' !== typeof lv) return !1;
                        d = 0;
                        for (var e = lv.length; d < e; d++)
                          if (
                            (cc && vtc === lv[d]) ||
                            (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                          )
                            return !0;
                        return !1;
                      };
                      s.getTimeToComplete = function (sos, cn, exp) {
                        sos = sos ? sos.toLowerCase() : 'start';
                        cn = cn ? cn : 's_gttc';
                        exp = exp ? exp : 0;
                        var s = this,
                          d = s.c_r(cn),
                          e = new Date();
                        if ('start' === sos && !d)
                          s.c_w(cn, e.getTime(), exp ? new Date(e.getTime() + 86400000 * exp) : 0);
                        else if ('stop' === sos && d)
                          return (
                            (sos = Math.round((e.getTime() - d) / 1000)),
                            s.c_w(cn, '', 0),
                            s.formatTime(sos)
                          );
                      };
                      s.formatTime = function (ns, tf, bml) {
                        var s = this;
                        if (!('undefined' === typeof ns || isNaN(ns) || 0 > Number(ns))) {
                          if (
                            ('string' === typeof tf && 'd' === tf) ||
                            (('string' !== typeof tf || !s.inList('h,m,s', tf)) && 86400 <= ns)
                          ) {
                            tf = 86400;
                            var d = 'days';
                            bml = isNaN(bml) ? 4 : tf / (bml * tf);
                          } else
                            ('string' === typeof tf && 'h' === tf) ||
                            (('string' !== typeof tf || !s.inList('m,s', tf)) && 3600 <= ns)
                              ? ((tf = 3600),
                                (d = 'hours'),
                                (bml = isNaN(bml) ? 4 : tf / (bml * tf)))
                              : ('string' === typeof tf && 'm' === tf) ||
                                (('string' !== typeof tf || !s.inList('s', tf)) && 60 <= ns)
                              ? ((tf = 60),
                                (d = 'minutes'),
                                (bml = isNaN(bml) ? 2 : tf / (bml * tf)))
                              : ((tf = 1), (d = 'seconds'), (bml = isNaN(bml) ? 0.2 : tf / bml));
                          ns = Math.round((ns * bml) / tf) / bml + ' ' + d;
                          0 === ns.indexOf('1 ') && (ns = ns.substring(0, ns.length - 1));
                          return ns;
                        }
                      };
                      s.split = function (l, d) {
                        var i,
                          x = 0,
                          a = new Array();
                        while (l) {
                          i = l.indexOf(d);
                          i = i > -1 ? i : l.length;
                          a[x++] = l.substring(0, i);
                          l = l.substring(i + d.length);
                        }
                        return a;
                      };
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      s.eVar39 =
                        _satellite.getVar('ZipCode') != ''
                          ? cn + _satellite.getVar('ZipCode')
                          : '';
                      if (_satellite.getVar('Business Unit') == 'AMEX') {
                        bu =
                          _satellite.getVar('Sub Category 1') != ''
                            ? _satellite.getVar('Sub Category 1') + ':'
                            : '';
                      }
                      pmc_code = _satellite.getVar('PMC') != '' ? _satellite.getVar('PMC') : '';
                      pdt = ';' + cn + bu + pmc_code;
                      if (_satellite.getVar('Event Action').toLowerCase() == 'learnmore') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'event12';
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event12', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'events,products,eVar31';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event1', ',', ',', 2);
                        s.eVar31 = _satellite.getVar('ApplyFlowID');
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event1', ',', ',', 2);
                      }
                      if ((s.events + ',').indexOf('event1,') > -1) {
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event12', ',', ',', 2);
                        s.events = s.apl(s.events, 'event12', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'terms') {
                        s.linkTrackVars = 'eVar80,events,products';
                        s.linkTrackEvents = 'event2';
                        s.eVar80 =
                          _satellite.getVar('Flow Type') != ''
                            ? _satellite.getVar('Flow Type')
                            : '';
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event2', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'financialinfo') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'event81';
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event81', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'counteroffer') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'event104';
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event104', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'authentication') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'event108';
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event108', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'balancetransfer') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'event109';
                        if (s.products) {
                          if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event109', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'submit') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event5', ',', ',', 2);
                        if (s.products) {
                          if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event5', ',', ',', 2);
                        s.eVar29 = _satellite.getVar('PCNnumber');
                        s.eVar39 = cn + _satellite.getVar('ZipCode');
                        s.eVar53 =
                          _satellite.getVar('Conversion Options') != ''
                            ? cn + bu + _satellite.getVar('Conversion Options')
                            : '';
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'ian') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event58', ',', ',', 2);
                        if (s.products) {
                          if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event58', ',', ',', 2);
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'pending') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event9', ',', ',', 2);
                        s.events = s.apl(s.events, 'event9', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'approved') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event10', ',', ',', 2);
                        s.events = s.apl(s.events, 'event10', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'decline') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event11', ',', ',', 2);
                        s.events = s.apl(s.events, 'event11', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'suppadd') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event3', ',', ',', 2);
                        s.events = s.apl(s.events, 'event3', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'crossselloffered') {
                        s.linkTrackVars = 'events,products,eVar74,prop72,list1';
                        s.linkTrackEvents = 'event113,event20';
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event113', ',', ',', 2);
                        s.eVar74 = s.pageName;
                        if (_satellite.getVar('Onsite Promotion Impression')) {
                          s.events = s.apl(s.events, 'event20', ',', ',', 2);
                          s.list1 = s.prop72 = _satellite.getVar('Onsite Promotion Impression');
                        }
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'crosssellaccepted') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event114', ',', ',', 2);
                        if (s.products) {
                          if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event114', ',', ',', 2);
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.eVar29 = _satellite.getVar('PCNnumber');
                        s.eVar39 = cn + _satellite.getVar('ZipCode');
                        s.eVar53 =
                          _satellite.getVar('Conversion Options') != ''
                            ? cn + bu + _satellite.getVar('Conversion Options')
                            : '';
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'counteraccepted') {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event115', ',', ',', 2);
                        if (s.products) {
                          if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event115', ',', ',', 2);
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.eVar29 = _satellite.getVar('PCNnumber');
                        s.eVar39 = cn + _satellite.getVar('ZipCode');
                        s.eVar53 =
                          _satellite.getVar('Conversion Options') != ''
                            ? cn + bu + _satellite.getVar('Conversion Options')
                            : '';
                      }
                      if (
                        _satellite.getVar('Event Action').toLowerCase() == 'creditlimitoffered'
                      ) {
                        s.linkTrackVars = 'events,products,eVar31';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event116', ',', ',', 2);
                        s.eVar31 = _satellite.getVar('ApplyFlowID');
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event116', ',', ',', 2);
                      }
                      if (
                        _satellite.getVar('Event Action').toLowerCase() == 'creditlimitaccepted'
                      ) {
                        s.linkTrackVars = 'events,products,eVar29,eVar34,eVar39,eVar53';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event117', ',', ',', 2);
                        if (s.products) {
                          if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event117', ',', ',', 2);
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.eVar29 = _satellite.getVar('PCNnumber');
                        s.eVar39 = cn + _satellite.getVar('ZipCode');
                        s.eVar53 =
                          _satellite.getVar('Conversion Options') != ''
                            ? cn + bu + _satellite.getVar('Conversion Options')
                            : '';
                      }
                      if (
                        _satellite.getVar('Event Action').toLowerCase() == 'balancetransferoffered'
                      ) {
                        s.linkTrackVars = 'events,products,eVar31';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event118', ',', ',', 2);
                        s.eVar31 = _satellite.getVar('ApplyFlowID');
                        if (s.products) {
                          s.products += ',' + pdt;
                        } else s.products = pdt;
                        s.events = s.apl(s.events, 'event118', ',', ',', 2);
                      }
                      s.ttc = s.c_r('om_ttc');
                      if (s.events) {
                        var _el, _i;
                        _el = s.split(s.events, ',');
                        for (_i in _el) {
                          if (_el[_i] == 'event1') {
                            s.tempevent1 = 1;
                          }
                          if (_el[_i] == 'event5') {
                            s.tempevent5 = 1;
                          }
                        }
                      }
                      if (!s.ttc && s.tempevent1) {
                        s.eVar49 = 'start';
                      }
                      if (s.tempevent5) {
                        s.eVar49 = 'stop';
                      }
                      s.eVar49 = s.getTimeToComplete(s.eVar49, 'om_ttc', 360);
                      if (pmc_code != '') s.ser1 = pmc_code;
                      s.AMEXVisID('s_uvid');
                      s.ser2 = s.AMEXVisNum();
                      s.ser3 = s.c_r('s_uvid');
                      if (s.ser1 && s.ser2 && s.ser3) {
                        s.ser = s.ser1 + s.ser2 + s.ser3;
                        if (s.ser.length > 20) {
                          s.ser = s.ser.substring(0, 20);
                        }
                      }
                      if (s.events && s.ser1) s.AMEXCFM();
                      if (s.ser) {
                        s.AMEXSerializer(
                          'event1,event2,event12,event47,event81,event108,event104,event113,event116,event118',
                          s.ser
                        );
                      }
                      if (s.eVar29 && s.eVar29 !== 'null' && s.eVar29 !== '') {
                        s.AMEXSerializer(
                          'event3,event5,event9,event10,event11,event14,event24,event58,event109,event114,event115,event117',
                          s.eVar29
                        );
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'event',
            trigger: [
              {
                command: 'loadScript',
                arguments: [
                  {
                    sequential: true,
                    scripts: [{ src: 'satellite-5901544164746d77f5009256.js' }],
                  },
                ],
              },
            ],
          },
          {
            name: 'amexAssist',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'FAQ Tracking ',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country') + ':'
                          : '';
                      s.linkTrackVars = 'prop21,prop22,prop62,eVar62,eVar4,eVar5';
                      s.prop21 = s.eVar4 = cn + 'AmexAssist';
                      s.prop22 = s.eVar5 =
                        _satellite.getVar('Event Action') + '>' + _satellite.getVar('Event Asset');
                      s.prop62 = s.eVar62 = _satellite.getVar('FAQ ID');
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'layerLoad',
            trigger: [
              {
                engine: 'sc',
                command: 'trackPageView',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Layer track',
                    setVars: {
                      eVar27: '%Layer Country%',
                      eVar74: '%Full Layer Name%',
                      prop3: '%Language%',
                      prop4: '%Layer Country%',
                      prop75: 'DTM',
                      pageName: '%Full Layer Name%',
                      hier1: '%Layer Hier%',
                    },
                    customSetup: function (event, s) {
                      var name = [];
                      if (_satellite.getVar('Layer Country'))
                        name.push(_satellite.getVar('Layer Country'));
                      if (_satellite.getVar('Layer Business Unit'))
                        name.push(_satellite.getVar('Layer Business Unit'));
                      s.prop31 = name.join('|');
                      if (_satellite.getVar('Layer Primary Category'))
                        name.push(_satellite.getVar('Layer Primary Category'));
                      s.prop19 = name.join('|');
                      if (_satellite.getVar('Layer Sub Category 1'))
                        name.push(_satellite.getVar('Layer Sub Category 1'));
                      s.prop24 = name.join('|');
                      if (_satellite.getVar('Layer Sub Category 2'))
                        name.push(_satellite.getVar('Layer Sub Category 2'));
                      s.prop30 = name.join('|');
                      if (_satellite.getVar('Layer Sub Category 3'))
                        name.push(_satellite.getVar('Layer Sub Category 3'));
                      s.prop38 = name.join('|');
                      s.eVar13 = _satellite.getVar('AMEX GUID');
                      s.prop10 = s.eVar45 = s.eVar13 != '' ? 'customer' : 'prospect';
                      if (_satellite.getVar('Experience Type') != '') {
                        s.linkTrackVars = 'prop56';
                        s.prop56 = s.pageName + ':' + _satellite.getVar('Experience Type');
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'lead',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Lead Transactions',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      if (_satellite.getVar('Business Unit') == 'AMEX') {
                        bu =
                          _satellite.getVar('Sub Category 1') != ''
                            ? _satellite.getVar('Sub Category 1') + ':'
                            : '';
                      }
                      for (var i = digitalData.event.length; i--; ) {
                        if (typeof digitalData.event[i] != 'undefined') {
                          if (typeof digitalData.event[i].eventInfo != 'undefined') {
                            if (typeof digitalData.event[i].eventInfo.eventType != 'undefined') {
                              if (digitalData.event[i].eventInfo.eventType == 'lead') {
                                if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                  s.linkTrackVars = 'events,products';
                                  s.linkTrackEvents = 'event96';
                                  pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                                  s.products = pdt;
                                  s.events = s.apl(s.events, 'event96', ',', ',', 2);
                                }
                                if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                  s.linkTrackVars = 'events,products';
                                  s.linkTrackEvents = 'event100';
                                  pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                                  s.products = pdt;
                                  s.events = s.apl(s.events, 'event100', ',', ',', 2);
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'login',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Login Start',
                    customSetup: function (event, s) {
                      if (_satellite.getVar('Event Action').toLowerCase() == 'attempt') {
                        s.linkTrackVars = 'events';
                        s.linkTrackEvents = 'event107';
                        s.events = s.apl(s.events, 'event107', ',', ',', 2);
                        var tmp = s.getValOnce('event107', 'evt_107', 0);
                        if (!tmp) s.events = s.removeEvent('event107');
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'page',
            trigger: [
              {
                engine: 'sc',
                command: 'trackPageView',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Layer track',
                    setVars: {
                      eVar27: '%Layer Country%',
                      eVar74: '%Full Layer Name%',
                      eVar83: '%Request ID%',
                      prop29: '%Form Value%',
                      prop3: '%Language%',
                      prop4: '%Layer Country%',
                      prop75: 'DTM',
                      pageName: '%Full Layer Name%',
                      hier1: '%Layer Hier%',
                    },
                    customSetup: function (event, s) {
                      function ClearVars () {
                        for (var i = 0; i < 75; i++) {
                          s['prop' + i] = '';
                          s['eVar' + i] = '';
                        }
                        svarArr = [
                          'channel',
                          'products',
                          'events',
                          'campaign',
                          'purchaseID',
                          'pageType',
                          'server',
                          'linkName',
                          'list1',
                          'list2',
                        ];
                        for (var i = 0; i < svarArr.length; i++) {
                          s[svarArr[i]] = '';
                        }
                        s.pageType = '';
                      }
                      ClearVars();
                      if (digitalData) {
                        if (!digitalData.event) {
                          digitalData.event = [{}];
                        }
                        if (!digitalData.page.attributes) {
                          digitalData.page.attributes = {};
                        }
                        if (!digitalData.user) {
                          digitalData.user = {};
                        }
                        if (!digitalData.page) {
                          digitalData.page = {};
                        }
                      }
                      s.removeEvent = function (e) {
                        var s = this;
                        var el, a, b, c, a1, b1, c1, d;
                        if (s.events) {
                          el = s.split(s.events, ',');
                          a = e + ',';
                          b = e + ':';
                          c = e + '=';
                          x = 0;
                          while (x < el.length) {
                            a1 = el[x] + ',';
                            b1 = el[x] + ':';
                            c1 = el[x] + '=';
                            if (a1.indexOf(a) > -1 || b1.indexOf(b) > -1 || c1.indexOf(c) > -1);
                            else d ? (d = d + ',' + el[x]) : (d = el[x]);
                            x++;
                          }
                        }
                        d ? (d = d) : (d = '');
                        return d;
                      };
                      s.AMEXCFM = function () {
                        var cv,
                          p,
                          el,
                          i,
                          f = 0,
                          f2 = 0,
                          cn = 's_cdfm',
                          a = 'Learn More Page',
                          b = 'Start App Page',
                          c = 'External Campaign:',
                          d = 'Internal Search:',
                          e = 'Browse:',
                          g = ':Previous Page ID Not Set',
                          h = 'no value',
                          j = 'search.americanexpress.com';
                        el = s.split(s.events, ',');
                        for (i in el)
                          if (el[i] == 'event12') {
                            f2 = 1;
                            break;
                          }
                        for (i in el)
                          if (el[i] == 'event1') {
                            f2 = 2;
                            break;
                          }
                        if (f2 == 0) return '';
                        cv = s.c_r(cn);
                        if (cv) {
                          p = s.split(cv, '|');
                          for (i in p)
                            if (p[i] == s.ser1) {
                              f = 1;
                              break;
                            }
                          if (f == 1) return '';
                        }
                        if (f2 == 1) {
                          if (s.campaign) s.eVar15 = c + a;
                          else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + a;
                          else if (s.eVar41)
                            if (s.eVar41 == h) s.eVar15 = e + a + g;
                            else s.eVar15 = e + a + s.eVar41;
                          else s.eVar15 = e + a + g;
                          if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                          else s.c_w(cn, s.ser1, 0);
                          return '';
                        } else if (f2 == 2) {
                          if (s.campaign) s.eVar15 = c + b;
                          else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + b;
                          else if (s.eVar41)
                            if (s.eVar41 == h) s.eVar15 = e + b + g;
                            else s.eVar15 = e + b + s.eVar41;
                          else s.eVar15 = e + b + g;
                          if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                          else s.c_w(cn, s.ser1, 0);
                          return '';
                        }
                      };
                      s.AMEXVisID = function (cn) {
                        var s = this,
                          e = new Date(),
                          ct = e.getTime(),
                          cv;
                        cn = cn ? cn : 's_uvid';
                        e.setTime(ct + 5 * 365 * 24 * 60 * 60 * 1000);
                        cv = s.c_r(cn);
                        if (cv) {
                          s.c_w(cn, cv, e);
                          return '';
                        } else {
                          var t = new Date(),
                            m = t.getTime(),
                            r1 = Math.floor(Math.random() * 10),
                            r2 = Math.floor(Math.random() * 10),
                            r3 = Math.floor(Math.random() * 10),
                            uv;
                          m = m.toString();
                          r1 = r1.toString();
                          r2 = r2.toString();
                          r3 = r3.toString();
                          uv = m + r1 + r2 + r3;
                          s.c_w(cn, uv, e);
                          return '';
                        }
                      };
                      s.AMEXVisNum = function () {
                        var d = this,
                          h = new Date(),
                          g,
                          c,
                          b = h.getTime(),
                          a = 's_vnum',
                          f = 's_invisit';
                        h.setTime(b + 5 * 365 * 24 * 60 * 60 * 1000);
                        visit_num_val = d.c_r(a);
                        g = d.c_r(f);
                        if (g) {
                          if (visit_num_val) {
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return visit_num_val;
                          } else {
                            return 1;
                          }
                        } else {
                          if (visit_num_val) {
                            c = visit_num_val.match(/(\d*)&vn=(\d*)/);
                            if (c) {
                              visit_num_val = c[2];
                            }
                            visit_num_val++;
                            d.c_w(a, visit_num_val, h);
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return visit_num_val;
                          } else {
                            d.c_w(a, 1, h);
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return 1;
                          }
                        }
                      };
                      s.AMEXSerializer = function (f, sn) {
                        var el, fl, i, n;
                        if (!s.events) return '';
                        else {
                          el = s.split(s.events, ',');
                          fl = s.split(f, ',');
                          for (i in el)
                            for (n in fl)
                              if (el[i] == fl[n]) {
                                el[i] = el[i] + ':' + sn;
                                break;
                              }
                          s.events = s.join(el, '', '', ',', '');
                          return '';
                        }
                      };
                      s.apl = function (lv, vta, d1, d2, cc) {
                        d1 = d1 ? d1 : ',';
                        d2 = d2 ? d2 : d1;
                        if ('undefined' === typeof this.inList)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                            ),
                            lv
                          );
                        if ('undefined' !== typeof lv && 'string' !== typeof lv)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                            ),
                            ''
                          );
                        if ('string' !== typeof vta) return lv;
                        vta = vta.split(',');
                        for (var g = vta.length, d = 0; d < g; d++)
                          this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                        return lv;
                      };
                      s.inList = function (lv, vtc, d, cc) {
                        if ('string' !== typeof vtc) return !1;
                        if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                        else if ('object' !== typeof lv) return !1;
                        d = 0;
                        for (var e = lv.length; d < e; d++)
                          if (
                            (cc && vtc === lv[d]) ||
                            (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                          )
                            return !0;
                        return !1;
                      };
                      s.getTimeToComplete = function (sos, cn, exp) {
                        sos = sos ? sos.toLowerCase() : 'start';
                        cn = cn ? cn : 's_gttc';
                        exp = exp ? exp : 0;
                        var s = this,
                          d = s.c_r(cn),
                          e = new Date();
                        if ('start' === sos && !d)
                          s.c_w(cn, e.getTime(), exp ? new Date(e.getTime() + 86400000 * exp) : 0);
                        else if ('stop' === sos && d)
                          return (
                            (sos = Math.round((e.getTime() - d) / 1000)),
                            s.c_w(cn, '', 0),
                            s.formatTime(sos)
                          );
                      };
                      s.formatTime = function (ns, tf, bml) {
                        var s = this;
                        if (!('undefined' === typeof ns || isNaN(ns) || 0 > Number(ns))) {
                          if (
                            ('string' === typeof tf && 'd' === tf) ||
                            (('string' !== typeof tf || !s.inList('h,m,s', tf)) && 86400 <= ns)
                          ) {
                            tf = 86400;
                            var d = 'days';
                            bml = isNaN(bml) ? 4 : tf / (bml * tf);
                          } else
                            ('string' === typeof tf && 'h' === tf) ||
                            (('string' !== typeof tf || !s.inList('m,s', tf)) && 3600 <= ns)
                              ? ((tf = 3600),
                                (d = 'hours'),
                                (bml = isNaN(bml) ? 4 : tf / (bml * tf)))
                              : ('string' === typeof tf && 'm' === tf) ||
                                (('string' !== typeof tf || !s.inList('s', tf)) && 60 <= ns)
                              ? ((tf = 60),
                                (d = 'minutes'),
                                (bml = isNaN(bml) ? 2 : tf / (bml * tf)))
                              : ((tf = 1), (d = 'seconds'), (bml = isNaN(bml) ? 0.2 : tf / bml));
                          ns = Math.round((ns * bml) / tf) / bml + ' ' + d;
                          0 === ns.indexOf('1 ') && (ns = ns.substring(0, ns.length - 1));
                          return ns;
                        }
                      };
                      s.getQueryParam = function (qsp, de, url) {
                        var s = this,
                          e = '',
                          l = function (b, c) {
                            -1 < c.indexOf('#') &&
                              (-1 < c.indexOf('?')
                                ? c.indexOf('?') > c.indexOf('#')
                                  ? ((c = c.split('?').join('&')), (c = c.split('#').join('?')))
                                  : (c = c.split('#').join('&'))
                                : (c = c.split('#').join('?')));
                            var h = c.indexOf('?'),
                              de = '';
                            b &&
                              (-1 < h || -1 < c.indexOf('=')) &&
                              ((h = c.substring(h + 1)), (de = s.pt(h, '&', 'gpval', b)));
                            return de;
                          };
                        qsp = qsp.split(',');
                        var m = qsp.length;
                        s.gpval = function (b, c) {
                          if (b) {
                            var de = b.split('='),
                              url = de[0];
                            de = 'string' === typeof de[1] ? de[1] : '';
                            if (c.toLowerCase() == url.toLowerCase())
                              return 'boolean' === typeof de ? de : this.unescape(de);
                          }
                          return '';
                        };
                        de = de ? de : '';
                        url = (url ? url : s.pageURL ? s.pageURL : location.href) + '';
                        if ((4 < de.length || -1 < de.indexOf('=')) && url && 4 > url.length) {
                          var b = de;
                          de = url;
                          url = b;
                        }
                        for (var k = 0; k < m; k++)
                          (b = l(qsp[k], url)),
                            'string' === typeof b
                              ? ((b = -1 < b.indexOf('#') ? b.substring(0, b.indexOf('#')) : b),
                                (e += e ? de + b : b))
                              : (e = '' === e ? b : e + (de + b));
                        return e;
                      };
                      s.pt = function (lv, de, cf, fa) {
                        if (!lv || !de || !this[cf]) return '';
                        lv = lv.split(de ? de : ',');
                        de = lv.length;
                        for (var e = '', c = 0; c < de && !(e = this[cf](lv[c], fa)); c++);
                        return e;
                      };
                      var excludeOmniture = true;
                      var name = [];
                      if (_satellite.getVar('Layer Country'))
                        name.push(_satellite.getVar('Layer Country'));
                      s.eVar27 = s.prop4 = name.join('|');
                      if (_satellite.getVar('Layer Business Unit'))
                        name.push(_satellite.getVar('Layer Business Unit'));
                      s.prop31 = name.join('|');
                      if (_satellite.getVar('Layer Primary Category'))
                        name.push(_satellite.getVar('Layer Primary Category'));
                      s.prop19 = name.join('|');
                      if (_satellite.getVar('Layer Sub Category 1'))
                        name.push(_satellite.getVar('Layer Sub Category 1'));
                      s.prop24 = name.join('|');
                      if (_satellite.getVar('Layer Sub Category 2'))
                        name.push(_satellite.getVar('Layer Sub Category 2'));
                      s.prop30 = name.join('|');
                      if (_satellite.getVar('Layer Sub Category 3'))
                        name.push(_satellite.getVar('Layer Sub Category 3'));
                      s.prop38 = name.join('|');
                      s.pageName = s.eVar74 = _satellite.getVar('Full Layer Name');
                      s.hier1 = _satellite.getVar('Layer Hier');
                      s.prop3 = _satellite.getVar('Language');
                      s.prop75 = 'DTM';
                      if (_satellite.getVar('Form Value')) {
                        s.prop29 = _satellite.getVar('Form Value');
                      }
                      if (_satellite.getVar('applicationid')) {
                        s.eVar25 = _satellite.getVar('applicationid');
                      }
                      if (_satellite.getVar('PZN Indicators')) {
                        s.eVar88 = _satellite.getVar('PZN Indicators');
                      }
                      if (_satellite.getVar('pznid')) {
                        s.eVar88 = _satellite.getVar('pznid');
                      }
                      if (_satellite.getVar('pznrequestid')) {
                        s.eVar83 = _satellite.getVar('pznrequestid');
                      }
                      if (_satellite.getVar('prequaltransactionid')) {
                        s.eVar79 = _satellite.getVar('prequaltransactionid');
                      }
                      s.eVar13 = _satellite.getVar('AMEX GUID');
                      s.prop10 = s.eVar45 = s.eVar13 != '' ? 'customer' : 'prospect';
                      if (_satellite.getVar('Login Status')) {
                        s.prop50 = _satellite.getVar('Login Status');
                      }
                      if (_satellite.getVar('PCNnumber')) {
                        s.eVar29 = _satellite.getVar('PCNnumber');
                      }
                      if (_satellite.getVar('leadid')) {
                        s.eVar110 = _satellite.getVar('leadid');
                      }
                      if (_satellite.getVar('dnsVisitorDetails')) {
                        s.eVar120 = _satellite.getVar('dnsVisitorDetails');
                      }
                      if (_satellite.getVar('Experience Type') != '') {
                        s.linkTrackVars = 'prop56';
                        s.prop56 = s.pageName + ':' + _satellite.getVar('Experience Type');
                      }
                      if (typeof digitalData.page.pageInfo.error != 'undefined') {
                        if (digitalData.page.pageInfo.error != '') {
                          var cn =
                            _satellite.getVar('Country') != ''
                              ? _satellite.getVar('Country').toUpperCase() + ':'
                              : '';
                          var bu =
                            _satellite.getVar('Business Unit') != ''
                              ? _satellite.getVar('Business Unit') + ':'
                              : '';
                          var pnm =
                            _satellite.getVar('Page Name') != ''
                              ? _satellite.getVar('Page Name') + ':'
                              : '';
                          s.linkTrackVars = 'prop26';
                          s.prop26 = cn + bu + pnm + digitalData.page.pageInfo.error;
                          if (
                            digitalData.page.pageInfo.error.indexOf('404') != -1 ||
                            digitalData.page.pageInfo.error.toLowerCase().indexOf('brokenpage') !=
                              -1 ||
                            digitalData.page.pageInfo.error.toLowerCase().indexOf('errorpage') !=
                              -1
                          )
                            s.pageType = 'errorPage';
                        }
                      }
                      if (typeof digitalData.page.attributes.abTest != 'undefined') {
                        if (digitalData.page.attributes.abTest != '') {
                          s.linkTrackVars = 'eVar59,list2';
                          s.eVar59 = s.list2 = digitalData.page.attributes.abTest;
                        }
                      }
                      if (typeof digitalData.page.attributes.experience != 'undefined') {
                        if (digitalData.page.attributes.experience != '') {
                          s.linkTrackVars = 'eVar30';
                          s.eVar30 = digitalData.page.attributes.experience;
                        }
                      }
                      if (typeof digitalData.page.attributes.numOfCards != 'undefined')
                        if (digitalData.page.attributes.numOfCards != '') {
                          s.prop53 = digitalData.page.attributes.numOfCards;
                        }
                      if (_satellite.getVar('CorpUserID')) {
                        s.eVar78 = _satellite.getVar('CorpUserID');
                      }
                      if (typeof digitalData.page.attributes.tool != 'undefined')
                        if (digitalData.page.attributes.tool != '') {
                          var cn =
                            _satellite.getVar('Country') != ''
                              ? _satellite.getVar('Country').toUpperCase() + ':'
                              : '';
                          var bu =
                            _satellite.getVar('Business Unit') != ''
                              ? _satellite.getVar('Business Unit') + ':'
                              : '';
                          var pri_cat =
                            _satellite.getVar('Primary Category') != ''
                              ? _satellite.getVar('Primary Category') + ':'
                              : '';
                          s.linkTrackVars = 'eVar42,prop35,events';
                          s.linkTrackEvents = 'event13';
                          s.eVar42 = s.prop35 =
                            cn + bu + pri_cat + digitalData.page.attributes.tool;
                          s.events = s.apl(s.events, 'event13', ',', ',', 2);
                        }
                      if (typeof digitalData.page.attributes.intlinkimp != 'undefined') {
                        if (digitalData.page.attributes.intlinkimp != '') {
                          s.linkTrackVars = 'prop72,events,list1';
                          s.linkTrackEvents = 'event20';
                          s.prop72 = _satellite.getVar('Onsite Promotion Impression');
                          s.list1 = _satellite.getVar('Onsite Promotion Impression');
                          s.events = s.apl(s.events, 'event20', ',', ',', 2);
                        }
                      }
                      if (typeof digitalData.page.attributes.intlink != 'undefined') {
                        if (digitalData.page.attributes.intlink != '') {
                          s.linkTrackVars = 'prop18,eVar1';
                          s.eVar1 =
                            _satellite.getVar('Onsite Promotion') != ''
                              ? 'intlink=' + _satellite.getVar('Onsite Promotion')
                              : '';
                          s.prop18 = _satellite.getVar('Onsite Promotion');
                          s.eVar1 = s.getValOnce(s.eVar1, 'acqevar1', 0);
                          s.prop18 = s.getValOnce(s.prop18, 'acqprop18', 0);
                        }
                      }
                      if (s.getQueryParam('intlink', '', window.location) != '') {
                        s.linkTrackVars = 'prop18,eVar1';
                        s.eVar1 =
                          _satellite.getVar('Onsite Promotion - Querystring') != ''
                            ? 'intlink=' + _satellite.getVar('Onsite Promotion - Querystring')
                            : '';
                        s.prop18 = _satellite.getVar('Onsite Promotion - Querystring');
                        s.eVar1 = s.getValOnce(s.eVar1, 'acqevar1', 0);
                        s.prop18 = s.getValOnce(s.prop18, 'acqprop18', 0);
                      }
                      if (typeof digitalData.page.attributes.linknav != 'undefined') {
                        if (digitalData.page.attributes.linknav != '') {
                          s.linkTrackVars = 'prop20';
                          s.prop20 = _satellite.getVar('linknav');
                        }
                      } else if (s.getQueryParam('linknav', '', window.location) != '') {
                        s.linkTrackVars = 'prop20';
                        s.prop20 = _satellite.getVar('Non-promotional link');
                      }
                      if (s.getQueryParam('inav', '', window.location) != '') {
                        s.linkTrackVars = 'eVar8';
                        s.eVar8 = _satellite.getVar('iNav Link');
                      }
                      if (typeof digitalData.page.attributes.searchKeyword != 'undefined') {
                        if (digitalData.page.attributes.searchKeyword != '') {
                          s.linkTrackVars = 'eVar9,prop32';
                          s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event8', ',', 2);
                          s.eVar9 = _satellite.getVar('Search Keyword');
                          s.prop32 = _satellite.getVar('Number of Search Results');
                          s.events = s.apl(s.events, 'event8', ',', ',', 2);
                        }
                      }
                      if (
                        s.getQueryParam('searchresult', '', window.location) != '' ||
                        s.getQueryParam('dynamicsearch', '', window.location) != ''
                      ) {
                        s.events = s.apl(s.events, 'event19', ',', ',', 2);
                      }
                      if (typeof digitalData.page.attributes.surveyID != 'undefined') {
                        if (digitalData.page.attributes.surveyID != '') {
                          s.linkTrackVars = 'eVar52';
                          s.eVar52 = _satellite.getVar('Survey ID');
                        }
                      }
                      if (_satellite.getVar('Login')) {
                        s.linkTrackVars = 'eVar69';
                        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event6', ',', ',', 2);
                        s.eVar69 = s.prop69 = _satellite.getVar('Login');
                        s.events = s.apl(s.events, 'event6', ',', ',', 2);
                      }
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      if (_satellite.getVar('ZipCode')) {
                        s.eVar39 = _satellite.getVar('ZipCode');
                      }
                      if (_satellite.getVar('Conversion Options')) {
                        s.eVar53 = cn + bu + _satellite.getVar('Conversion Options');
                      }
                      if (_satellite.getVar('Application Decision')) {
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                      }
                      if (_satellite.getVar('Business Unit') == 'AMEX') {
                        bu =
                          _satellite.getVar('Sub Category 1') != ''
                            ? _satellite.getVar('Sub Category 1') + ':'
                            : '';
                      }
                      var eventArr = [];
                      var pmc_code = '';
                      if (typeof digitalData.event != 'undefined')
                        if (digitalData.event.length > 0)
                          for (var i = digitalData.event.length; i--; ) {
                            if (typeof digitalData.event[i] != 'undefined') {
                              if (typeof digitalData.event[i].eventInfo != 'undefined') {
                                if (
                                  typeof digitalData.event[i].eventInfo.eventType != 'undefined'
                                ) {
                                  if (
                                    digitalData.event[i].eventInfo.eventType == 'cardApplication'
                                  ) {
                                    if (_satellite.getVar('Business Unit') == 'AMEX') {
                                      bu =
                                        _satellite.getVar('Sub Category 1') != ''
                                          ? _satellite.getVar('Sub Category 1') + ':'
                                          : '';
                                    }
                                    if (_satellite.getVar('Business Unit') == 'Partner') {
                                      bu = _satellite.getVar('Sub Category 1') + ':';
                                    }
                                    if (_satellite.getVar('Business Unit') == 'Online') {
                                      bu =
                                        _satellite.getVar('Sub Category 2') === 'SBS'
                                          ? 'OPEN:'
                                          : _satellite.getVar('Sub Category 2') === 'CONS'
                                          ? 'CCSG:'
                                          : _satellite.getVar('Sub Category 1') + ':';
                                    }
                                    pmc_code =
                                      _satellite.getVar('products')(i) != ''
                                        ? _satellite.getVar('products')(i)
                                        : '';
                                    if (pmc_code.length > 0) {
                                      var pd = [];
                                      for (f in pmc_code) {
                                        var p = ';' + cn + bu + pmc_code[f];
                                        if (s.products.search(p) === -1) {
                                          pd.push(p);
                                        }
                                      }
                                      pdt = pd.join(',');
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction == 'learnMore'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event12';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event12', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'prodView') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'prodView';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'prodView', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                      s.linkTrackVars = 'events,products,eVar31';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event1',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.eVar31 = _satellite.getVar('ApplyFlowID');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event1', ',', ',', 2);
                                      if (_satellite.getVar('loanofferamount')) {
                                        s.linkTrackEvents = s.apl(
                                          s.linkTrackEvents,
                                          'event182',
                                          ',',
                                          ',',
                                          2
                                        );
                                        s.events = s.apl(
                                          s.events,
                                          'event182=' + _satellite.getVar('loanofferamount'),
                                          ',',
                                          ',',
                                          2
                                        );
                                      }
                                    }
                                    if ((s.events + ',').indexOf('event1,') > -1) {
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event12',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event12', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'terms') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event2';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event2', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'financialinfo'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event81';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event81', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'counteroffer'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event104';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event104', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'counterdeclined'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event142';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event142', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'suppoffered'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event119';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event119', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'authentication'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event108';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event108', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'balancetransfer'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event109';
                                      if (s.products) {
                                        if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event109', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction === 'submit' ||
                                      digitalData.event[i].eventInfo.eventAction === 'complete' ||
                                      digitalData.event[i].eventInfo.eventAction == 'submission'
                                    ) {
                                      var setevent =
                                        digitalData.event[i].eventInfo.eventAction === 'submission'
                                          ? 'event62'
                                          : 'event5';
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        setevent,
                                        ',',
                                        ',',
                                        2
                                      );
                                      if (s.events.indexOf('event58') == -1) {
                                        if (s.products) {
                                          if (!s.inList(pdt, s.products)) {
                                            s.products += ',' + pdt;
                                          }
                                        } else {
                                          s.products = pdt;
                                        }
                                      }
                                      s.events = s.apl(s.events, setevent, ',', ',', 2);
                                      s.eVar29 = _satellite.getVar('PCNnumber');
                                      s.eVar39 =
                                        _satellite.getVar('ZipCode') != ''
                                          ? cn + _satellite.getVar('ZipCode')
                                          : '';
                                      s.eVar53 =
                                        _satellite.getVar('Conversion Options') != ''
                                          ? cn + bu + _satellite.getVar('Conversion Options')
                                          : '';
                                      if (_satellite.getVar('loansubmissionamount')) {
                                        s.linkTrackEvents = s.apl(
                                          s.linkTrackEvents,
                                          'event183',
                                          ',',
                                          ',',
                                          2
                                        );
                                        s.events = s.apl(
                                          s.events,
                                          'event183=' + _satellite.getVar('loansubmissionamount'),
                                          ',',
                                          ',',
                                          2
                                        );
                                      }
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'ian') {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event58',
                                        ',',
                                        ',',
                                        2
                                      );
                                      if (!s.inList('event5', s.events)) {
                                        if (s.products) {
                                          if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                                        } else s.products = pdt;
                                      }
                                      s.events = s.apl(s.events, 'event58', ',', ',', 2);
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') != ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'pending') {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') != ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event9',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event9', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'approved') {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') != ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event10',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event10', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'decline') {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') != ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event11',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event11', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction == 'cancelled'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') != ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event67',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event67', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'suppAdd') {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event3',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event3', ',', ',', 2);
                                    }
                                    if (
                                      _satellite.getVar('Event Action').toLowerCase() ==
                                      'crossselloffered'
                                    ) {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event113';
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event113', ',', ',', 2);
                                    }
                                    if (
                                      _satellite.getVar('Event Action').toLowerCase() ==
                                      'crosssellaccepted'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event114',
                                        ',',
                                        ',',
                                        2
                                      );
                                      if (s.products) {
                                        if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event114', ',', ',', 2);
                                      s.eVar34 =
                                        cn + bu + _satellite.getVar('Application Decision');
                                      s.eVar29 = _satellite.getVar('PCNnumber');
                                      s.eVar39 = cn + _satellite.getVar('ZipCode');
                                      s.eVar53 =
                                        _satellite.getVar('Conversion Options') != ''
                                          ? cn + bu + _satellite.getVar('Conversion Options')
                                          : '';
                                    }
                                    if (
                                      _satellite.getVar('Event Action').toLowerCase() ==
                                      'counteraccepted'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event115',
                                        ',',
                                        ',',
                                        2
                                      );
                                      if (s.products) {
                                        if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event115', ',', ',', 2);
                                      s.eVar34 =
                                        cn + bu + _satellite.getVar('Application Decision');
                                      s.eVar29 = _satellite.getVar('PCNnumber');
                                      s.eVar39 = cn + _satellite.getVar('ZipCode');
                                      s.eVar53 =
                                        _satellite.getVar('Conversion Options') != ''
                                          ? cn + bu + _satellite.getVar('Conversion Options')
                                          : '';
                                    }
                                    if (
                                      _satellite.getVar('Event Action').toLowerCase() ==
                                      'creditlimitoffered'
                                    ) {
                                      s.linkTrackVars = 'events,products,eVar31';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event116',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.eVar31 = _satellite.getVar('ApplyFlowID');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event116', ',', ',', 2);
                                    }
                                    if (
                                      _satellite.getVar('Event Action').toLowerCase() ==
                                      'creditlimitaccepted'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event117',
                                        ',',
                                        ',',
                                        2
                                      );
                                      if (s.products) {
                                        if (!s.inList(pdt, s.products)) s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event117', ',', ',', 2);
                                      s.eVar34 =
                                        cn + bu + _satellite.getVar('Application Decision');
                                      s.eVar29 = _satellite.getVar('PCNnumber');
                                      s.eVar39 = cn + _satellite.getVar('ZipCode');
                                      s.eVar53 =
                                        _satellite.getVar('Conversion Options') != ''
                                          ? cn + bu + _satellite.getVar('Conversion Options')
                                          : '';
                                    }
                                    if (
                                      _satellite.getVar('Event Action').toLowerCase() ==
                                      'balancetransferoffered'
                                    ) {
                                      s.linkTrackVars = 'events,products,eVar31';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event118',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.eVar31 = _satellite.getVar('ApplyFlowID');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event118', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction === 'restart') {
                                      s.linkTrackVars = 'events,products,eVar31';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event60',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.eVar31 = _satellite.getVar('ApplyFlowID');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else {
                                        s.products = pdt;
                                      }
                                      s.events = s.apl(s.events, 'event60', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction === 'resubmit'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event61',
                                        ',',
                                        ',',
                                        2
                                      );
                                      if (s.events.indexOf('event58') === -1) {
                                        if (s.products) {
                                          if (!s.inList(pdt, s.products)) {
                                            s.products += ',' + pdt;
                                          }
                                        } else {
                                          s.products = pdt;
                                        }
                                      }
                                      s.events = s.apl(s.events, 'event61', ',', ',', 2);
                                      s.eVar29 = _satellite.getVar('PCNnumber');
                                      s.eVar39 =
                                        _satellite.getVar('ZipCode') !== ''
                                          ? cn + _satellite.getVar('ZipCode')
                                          : '';
                                      s.eVar53 =
                                        _satellite.getVar('Conversion Options') !== ''
                                          ? cn + bu + _satellite.getVar('Conversion Options')
                                          : '';
                                    }
                                  }
                                  if (
                                    digitalData.event[i].eventInfo.eventType ==
                                    'nonCardAcquisition'
                                  ) {
                                    var purID =
                                      _satellite.getVar('PurchaseID') != ''
                                        ? _satellite.getVar('PurchaseID')
                                        : '';
                                    var conOpt =
                                      _satellite.getVar('Conversion Options') != ''
                                        ? _satellite.getVar('Conversion Options')
                                        : '';
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'start'
                                    ) {
                                      s.linkTrackVars = 'products,events';
                                      s.linkTrackEvents = 'scCheckout';
                                      if (s.products) {
                                        pdt = ';' + cn + _satellite.getVar('Product Name');
                                        s.products += ',' + pdt;
                                      } else
                                        s.products = ';' + cn + _satellite.getVar('Product Name');
                                      s.events = s.apl(s.events, 'scCheckout', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'complete'
                                    ) {
                                      s.linkTrackVars =
                                        'products,events,eVar40,eVar34,eVar39,eVar46,eVar53,eVar68';
                                      s.linkTrackEvents = 'purchase,event15';
                                      if (s.products) {
                                        var pdt =
                                          ';' +
                                          cn +
                                          _satellite.getVar('Product Name') +
                                          ';' +
                                          _satellite.getVar('ProductUnits') +
                                          ';' +
                                          _satellite.getVar('ProductRevenue');
                                        s.products += ',' + pdt;
                                      } else
                                        s.products =
                                          ';' +
                                          cn +
                                          _satellite.getVar('Product Name') +
                                          ';' +
                                          _satellite.getVar('ProductUnits') +
                                          ';' +
                                          _satellite.getVar('ProductRevenue');
                                      var pmethod = [];
                                      if (_satellite.getVar('Country'))
                                        pmethod.push(_satellite.getVar('Country'));
                                      if (_satellite.getVar('Business Unit'))
                                        pmethod.push(_satellite.getVar('Business Unit'));
                                      if (_satellite.getVar('PaymentMethod'))
                                        pmethod.push(_satellite.getVar('PaymentMethod'));
                                      s.eVar40 =
                                        _satellite.getVar('PaymentMethod') != ''
                                          ? pmethod.join(':')
                                          : '';
                                      var appdec = [];
                                      if (_satellite.getVar('Country'))
                                        appdec.push(_satellite.getVar('Country'));
                                      if (_satellite.getVar('Business Unit'))
                                        appdec.push(_satellite.getVar('Business Unit'));
                                      if (_satellite.getVar('Application Decision'))
                                        appdec.push(_satellite.getVar('Application Decision'));
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') != ''
                                          ? appdec.join(':')
                                          : '';
                                      var zcode = [];
                                      if (_satellite.getVar('Country'))
                                        zcode.push(_satellite.getVar('Country'));
                                      if (_satellite.getVar('ZipCode'))
                                        zcode.push(_satellite.getVar('ZipCode'));
                                      s.eVar39 =
                                        _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                                      s.eVar46 = purID;
                                      s.eVar53 =
                                        conOpt != ''
                                          ? cn + bu + 'nonCardAcquisition:' + conOpt
                                          : '';
                                      s.eVar68 = cn + bu + 'nonCardAcquisition';
                                      s.events = s.apl(s.events, 'purchase', ',', ',', 2);
                                      s.events = s.apl(s.events, 'event15', ',', ',', 2);
                                    }
                                  }
                                  if (digitalData.event[i].eventInfo.eventType == 'lead') {
                                    var cn =
                                      _satellite.getVar('Country') != ''
                                        ? _satellite.getVar('Country').toUpperCase() + ':'
                                        : '';
                                    var bu =
                                      _satellite.getVar('Business Unit') != ''
                                        ? _satellite.getVar('Business Unit') + ':'
                                        : '';
                                    if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event96';
                                      pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event96', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event100';
                                      pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event100', ',', ',', 2);
                                    }
                                  }
                                  if (digitalData.event[i].eventInfo.eventType == 'psSignups') {
                                    var purID =
                                      _satellite.getVar('AppID') != ''
                                        ? _satellite.getVar('AppID')
                                        : '';
                                    var conOpt =
                                      _satellite.getVar('Conversion Options') != ''
                                        ? _satellite.getVar('Conversion Options')
                                        : '';
                                    var conType =
                                      _satellite.getVar('Conversion Type') != '' &&
                                      typeof _satellite.getVar('Conversion Type') != 'undefined'
                                        ? _satellite.getVar('Conversion Type')
                                        : '';
                                    if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event50';
                                      pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event50', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'event4';
                                      pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      var zcode = [];
                                      if (_satellite.getVar('Country'))
                                        zcode.push(_satellite.getVar('Country'));
                                      if (_satellite.getVar('ZipCode'))
                                        zcode.push(_satellite.getVar('ZipCode'));
                                      s.eVar39 =
                                        _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') != ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.eVar46 = purID;
                                      s.eVar53 =
                                        conOpt != '' ? cn + bu + conType + ':' + conOpt : '';
                                      s.eVar68 = conType != '' ? cn + bu + conType : '';
                                      s.events = s.apl(s.events, 'event4', ',', ',', 2);
                                    }
                                  }
                                  if (
                                    digitalData.event[i].eventInfo.eventType == 'prepaidProduct'
                                  ) {
                                    var purID =
                                      _satellite.getVar('PurchaseID') != ''
                                        ? _satellite.getVar('PurchaseID')
                                        : '';
                                    var conOpt =
                                      _satellite.getVar('Conversion Options') != ''
                                        ? _satellite.getVar('Conversion Options')
                                        : '';
                                    var preAmt =
                                      _satellite.getVar('Prepaid Amount') != ''
                                        ? _satellite.getVar('Prepaid Amount')
                                        : '';
                                    var purFre =
                                      _satellite.getVar('Purchase Frequency') != ''
                                        ? _satellite.getVar('Purchase Frequency')
                                        : '';
                                    if (digitalData.event[i].eventInfo.eventAction == 'add') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'scAdd';
                                      pdt =
                                        ';' + cn + 'Prepaid:' + _satellite.getVar('Product Name');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'scAdd', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'remove') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'scRemove';
                                      pdt =
                                        ';' + cn + 'Prepaid:' + _satellite.getVar('Product Name');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'scRemove', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                      s.linkTrackVars = 'events,products';
                                      s.linkTrackEvents = 'scCheckout';
                                      pdt =
                                        ';' + cn + 'Prepaid:' + _satellite.getVar('Product Name');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'scCheckout', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                      s.linkTrackVars =
                                        'events,products,eVar39,eVar23,eVar40,eVar46,eVar53,eVar68';
                                      s.linkTrackEvents = 'purchase';
                                      pdt =
                                        ';' +
                                        cn +
                                        'Prepaid:' +
                                        _satellite.getVar('Product Name') +
                                        ';' +
                                        _satellite.getVar('ProductUnits') +
                                        ';' +
                                        _satellite.getVar('ProductRevenue') +
                                        ';;eVar23=' +
                                        purFre +
                                        ':' +
                                        preAmt;
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      var pmethod = [];
                                      if (_satellite.getVar('Country'))
                                        pmethod.push(_satellite.getVar('Country'));
                                      if (_satellite.getVar('Business Unit'))
                                        pmethod.push(_satellite.getVar('Business Unit'));
                                      if (_satellite.getVar('PaymentMethod'))
                                        pmethod.push(_satellite.getVar('PaymentMethod'));
                                      s.eVar40 =
                                        _satellite.getVar('PaymentMethod') != ''
                                          ? pmethod.join(':')
                                          : '';
                                      var zcode = [];
                                      if (_satellite.getVar('Country'))
                                        zcode.push(_satellite.getVar('Country'));
                                      if (_satellite.getVar('ZipCode'))
                                        zcode.push(_satellite.getVar('ZipCode'));
                                      s.eVar39 =
                                        _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                                      s.eVar46 = s.purchaseID = purID;
                                      s.eVar53 = conOpt != '' ? cn + bu + 'Prepaid:' + conOpt : '';
                                      s.eVar68 = cn + bu + 'Prepaid';
                                      s.events = s.apl(s.events, 'purchase', ',', ',', 2);
                                    }
                                  }
                                  if (
                                    digitalData.event[i].eventInfo.eventType == 'suppApplication'
                                  ) {
                                    var conOpt =
                                      _satellite.getVar('Conversion Options') != ''
                                        ? _satellite.getVar('Conversion Options')
                                        : '';
                                    var conType =
                                      _satellite.getVar('Conversion Type') != '' &&
                                      _satellite.getVar('Conversion Type') != 'undefined'
                                        ? _satellite.getVar('Conversion Type')
                                        : '';
                                    pmc_code =
                                      _satellite.getVar('products')(i) != ''
                                        ? _satellite.getVar('products')(i)
                                        : '';
                                    if (pmc_code.length > 0) {
                                      var pd = [];
                                      for (f in pmc_code) {
                                        var p = ';' + cn + bu + pmc_code[f];
                                        if (s.products.search(p) === -1) {
                                          pd.push(p);
                                        }
                                      }
                                      pdt = pd.join(',');
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                      s.linkTrackVars = 'events,products,eVar31';
                                      s.linkTrackEvents = 'event47';
                                      s.eVar31 = _satellite.getVar('ApplyFlowID');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      s.events = s.apl(s.events, 'event47', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                      s.linkTrackVars =
                                        'events,products,eVar39,eVar29,eVar53,eVar68,eVar34';
                                      s.linkTrackEvents = 'event24';
                                      s.eVar34 =
                                        cn + bu + _satellite.getVar('Application Decision');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else s.products = pdt;
                                      var zcode = [];
                                      if (_satellite.getVar('Country'))
                                        zcode.push(_satellite.getVar('Country'));
                                      if (_satellite.getVar('ZipCode'))
                                        zcode.push(_satellite.getVar('ZipCode'));
                                      s.eVar39 =
                                        _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                                      s.eVar29 = _satellite.getVar('PCNnumber');
                                      s.eVar53 =
                                        conOpt != '' ? cn + bu + conType + ':' + conOpt : '';
                                      s.eVar68 = conType != '' ? cn + bu + conType : '';
                                      s.events = s.apl(s.events, 'event24', ',', ',', 2);
                                    }
                                  }
                                  if (digitalData.event[i].eventInfo.eventType == 'selfService') {
                                    console.log('Into selfService..');
                                    var cn =
                                      _satellite.getVar('Country') != ''
                                        ? _satellite.getVar('Country').toUpperCase() + ':'
                                        : '';
                                    var bu =
                                      _satellite.getVar('Business Unit') != ''
                                        ? _satellite.getVar('Business Unit') + ':'
                                        : '';
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'start'
                                    ) {
                                      console.log('In self service');
                                      s.linkTrackVars = 'products,events';
                                      s.linkTrackEvents = 'event51';
                                      s.events = s.apl(s.events, 'event51', ',', ',', 2);
                                      if (s.products) {
                                        pdt = ';' + cn + _satellite.getVar('Event Name');
                                        s.products += ',' + pdt;
                                      } else {
                                        s.products =
                                          ';' + cn + bu + _satellite.getVar('Event Name');
                                      }
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'complete'
                                    ) {
                                      s.linkTrackVars = 'products,events,eVar68';
                                      s.linkTrackEvents = 'event14';
                                      s.events = s.apl(s.events, 'event14', ',', ',', 2);
                                      if (s.products) {
                                        pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                                        s.products += ',' + pdt;
                                      } else
                                        s.products =
                                          ';' + cn + bu + _satellite.getVar('Event Name');
                                      s.eVar68 = _satellite.getVar('Self Service Name')
                                        ? cn + bu + _satellite.getVar('Self Service Name')
                                        : cn + bu + 'SelfServiceComplete';
                                    }
                                  }
                                  if (digitalData.event[i].eventInfo.eventType == 'signature') {
                                    if (digitalData.event[i].eventInfo.eventAction == 'attempt') {
                                      s.linkTrackVars = 'events';
                                      s.linkTrackEvents = 'event105';
                                      s.events = s.apl(s.events, 'event105', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                      s.linkTrackVars = 'events';
                                      s.linkTrackEvents = 'event106';
                                      s.events = s.apl(s.events, 'event106', ',', ',', 2);
                                    }
                                  }
                                  if (digitalData.event[i].eventInfo.eventType == 'login') {
                                    if (digitalData.event[i].eventInfo.eventAction == 'attempt') {
                                      s.linkTrackVars = 'events';
                                      s.linkTrackEvents = 'event107';
                                      s.events = s.apl(s.events, 'event107', ',', ',', 2);
                                      var tmp = s.getValOnce('event107', 'evt_107', 0);
                                      if (!tmp) s.events = s.removeEvent('event107');
                                    }
                                  }
                                  if (
                                    digitalData.event[i].eventInfo.eventType == 'workingCapital'
                                  ) {
                                    if (digitalData.event[i].eventInfo.eventAction == 'start') {
                                      s.linkTrackVars = 'events';
                                      s.linkTrackEvents = 'event110';
                                      s.events = s.apl(s.events, 'event110', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction == 'complete') {
                                      s.linkTrackVars = 'events,eVar34,eVar54';
                                      s.linkTrackEvents = 'event111';
                                      s.eVar34 =
                                        cn + bu + _satellite.getVar('Application Decision');
                                      s.events = s.apl(s.events, 'event111', ',', ',', 2);
                                    }
                                  }
                                  if (
                                    digitalData.event[i].eventInfo.eventType === 'pzn' &&
                                    digitalData.event[i].eventInfo.eventAction === 'impression'
                                  ) {
                                    var cn =
                                      _satellite.getVar('Country') != ''
                                        ? _satellite.getVar('Country').toUpperCase() + ':'
                                        : '';
                                    var bn =
                                      _satellite.getVar('Business Unit') != ''
                                        ? _satellite.getVar('Business Unit') + ':'
                                        : '';
                                    s.prop21 = s.eVar4 =
                                      cn + bn + digitalData.event[i].eventInfo.eventType;
                                    s.prop22 = s.eVar5 =
                                      cn +
                                      bn +
                                      digitalData.event[i].eventInfo.eventType +
                                      '>>' +
                                      digitalData.event[i].eventInfo.eventAction;
                                    s.products = s.products
                                      ? s.products +
                                        ',' +
                                        _satellite.getVar('merchandisingproduct')(i)
                                      : _satellite.getVar('merchandisingproduct')(i);
                                  }
                                  if (digitalData.event[i].eventInfo.eventType == 'video') {
                                    var cn =
                                      _satellite.getVar('Country') != ''
                                        ? _satellite.getVar('Country').toUpperCase() + ':'
                                        : '';
                                    var bn =
                                      _satellite.getVar('Business Unit') != ''
                                        ? _satellite.getVar('Business Unit') + ':'
                                        : '';
                                    s.linkTrackVars = 'prop21,prop22,eVar4,eVar5,events';
                                    s.linkTrackEvents = 'event55,event56';
                                    s.prop21 = s.eVar4 =
                                      cn +
                                      bn +
                                      _satellite.getVar('Video Player Name') +
                                      ':' +
                                      'Video';
                                    s.prop22 = s.eVar5 =
                                      event[i].eventInfo.eventAction +
                                      ':' +
                                      _satellite.getVar('Event Asset');
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'start'
                                    )
                                      s.events = s.apl(s.events, 'event55', ',', ',', 2);
                                    if (
                                      digitalData.event[i].eventInfo.eventAction.toLowerCase() ==
                                      'complete'
                                    ) {
                                      s.events = s.apl(s.events, 'event56', ',', ',', 2);
                                    }
                                  }
                                  if (
                                    digitalData.event[i].eventInfo.eventType === 'loanApplication'
                                  ) {
                                    if (_satellite.getVar('Business Unit') == 'AMEX') {
                                      bu =
                                        _satellite.getVar('Sub Category 1') !== ''
                                          ? _satellite.getVar('Sub Category 1') + ':'
                                          : '';
                                    }
                                    if (_satellite.getVar('Business Unit') === 'Partner') {
                                      bu = _satellite.getVar('Sub Category 1') + ':';
                                    }
                                    if (_satellite.getVar('Business Unit') === 'Online') {
                                      bu =
                                        _satellite.getVar('Sub Category 2') === 'SBS'
                                          ? 'OPEN:'
                                          : _satellite.getVar('Sub Category 2') === 'CONS'
                                          ? 'CCSG:'
                                          : _satellite.getVar('Sub Category 1') + ':';
                                    }
                                    pmcArray =
                                      _satellite.getVar('products')(i) !== ''
                                        ? _satellite.getVar('products')(i)
                                        : '';
                                    if (pmcArray && pmcArray.lenght > 0) {
                                      var productArray = [];
                                      for (f in pmcArray) {
                                        var productName = ';' + cn + bu + pmcArray[f];
                                        if (s.products.search(productName) === -1) {
                                          productArray.push(productName);
                                        }
                                      }
                                      pdt = productArray.join(',');
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction === 'restart') {
                                      s.linkTrackVars = 'events,products,eVar31';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event60',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.eVar31 = _satellite.getVar('ApplyFlowID');
                                      if (s.products) {
                                        s.products += ',' + pdt;
                                      } else {
                                        s.products = pdt;
                                      }
                                      s.events = s.apl(s.events, 'event60', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction === 'resubmit'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event61',
                                        ',',
                                        ',',
                                        2
                                      );
                                      if (s.events.indexOf('event58') === -1) {
                                        if (s.products) {
                                          if (!s.inList(pdt, s.products)) {
                                            s.products += ',' + pdt;
                                          }
                                        } else {
                                          s.products = pdt;
                                        }
                                      }
                                      s.events = s.apl(s.events, 'event61', ',', ',', 2);
                                      s.eVar29 = _satellite.getVar('PCNnumber');
                                      s.eVar39 =
                                        _satellite.getVar('ZipCode') !== ''
                                          ? cn + _satellite.getVar('ZipCode')
                                          : '';
                                      s.eVar53 =
                                        _satellite.getVar('Conversion Options') !== ''
                                          ? cn + bu + _satellite.getVar('Conversion Options')
                                          : '';
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction === 'pending') {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') !== ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event9',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event9', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction === 'approved'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') !== ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event10',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event10', ',', ',', 2);
                                    }
                                    if (digitalData.event[i].eventInfo.eventAction === 'decline') {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') !== ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event11',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event11', ',', ',', 2);
                                    }
                                    if (
                                      digitalData.event[i].eventInfo.eventAction === 'cancelled'
                                    ) {
                                      s.linkTrackVars =
                                        'events,products,eVar29,eVar34,eVar39,eVar53';
                                      s.eVar34 =
                                        _satellite.getVar('Application Decision') !== ''
                                          ? cn + bu + _satellite.getVar('Application Decision')
                                          : '';
                                      s.linkTrackEvents = s.apl(
                                        s.linkTrackEvents,
                                        'event67',
                                        ',',
                                        ',',
                                        2
                                      );
                                      s.events = s.apl(s.events, 'event67', ',', ',', 2);
                                    }
                                  }
                                }
                              }
                            }
                            eventArr.push(digitalData.event[i]);
                            digitalData.event.pop();
                            console.log(i);
                            console.log(digitalData.event);
                          }
                      digitalData.event = eventArr.slice(0);
                      console.log(digitalData.event);
                      s.ttc = s.c_r('om_ttc');
                      if (s.events) {
                        var _el, _i;
                        _el = s.split(s.events, ',');
                        for (_i in _el) {
                          if (_el[_i] == 'event1') {
                            s.tempevent1 = 1;
                          }
                          if (_el[_i] == 'event5') {
                            s.tempevent5 = 1;
                          }
                        }
                      }
                      if (!s.ttc && s.tempevent1) {
                        s.eVar49 = 'start';
                      }
                      if (s.tempevent5) {
                        s.eVar49 = 'stop';
                      }
                      s.eVar49 = s.getTimeToComplete(s.eVar49, 'om_ttc', 360);
                      s.ttc = s.c_r('wc_ttc');
                      if (s.events) {
                        if (s.inList('event110', s.events)) {
                          s.tmpevent110 = 1;
                          s.eVar54 = 'start';
                        }
                        if (s.inList('event111', s.events)) {
                          s.tempevent111 = 1;
                          s.eVar54 = 'stop';
                        }
                      }
                      s.eVar54 = s.getTimeToComplete(s.eVar54, 'wc_ttc', 0);
                      if (typeof pmc_code != 'undefined' && pmc_code.length > 0) {
                        s.ser1 = pmc_code.shift();
                      }
                      s.AMEXVisID('s_uvid');
                      s.ser2 = s.AMEXVisNum();
                      s.ser3 = s.c_r('s_uvid');
                      if (s.ser1 && s.ser2 && s.ser3) {
                        s.ser = s.ser1 + s.ser2 + s.ser3;
                        if (s.ser.length > 20) {
                          s.ser = s.ser.substring(0, 20);
                        }
                      }
                      if (s.events && s.ser1) s.AMEXCFM();
                      if (s.ser) {
                        s.AMEXSerializer(
                          'event1,event2,event12,event47,event81,event108,event104,event113,event116,event118',
                          s.ser
                        );
                      }
                      if (s.eVar29 && s.eVar29 !== 'null' && s.eVar29 !== '') {
                        s.AMEXSerializer(
                          'event3,event5,event9,event10,event11,event14,event24,event58,event109,event114,event115,event117,event60,event61,event62',
                          s.eVar29
                        );
                      }
                      window.ngamuManualTrack = true;
                      if (
                        typeof icats_obj_us != 'undefined' &&
                        typeof icats_obj_us.getDigitaldata == 'function'
                      ) {
                        console.log('before getDigitaldata function is called');
                        window.isiCATSObjAvailable = true;
                        icats_obj_us.getDigitaldata();
                        console.log('after getDigitaldata function is called');
                      } else {
                        window.isiCATSObjAvailable = false;
                      }
                      s.trackGCT = 1;
                      if (typeof window.scgct != 'undefined') {
                        delete window.scgct;
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'nonCardAcquisition',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Non Card Acquisition Transaction',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      var purID =
                        _satellite.getVar('PurchaseID') != ''
                          ? _satellite.getVar('PurchaseID')
                          : '';
                      var conOpt =
                        _satellite.getVar('Conversion Options') != ''
                          ? _satellite.getVar('Conversion Options')
                          : '';
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'products,events';
                        s.linkTrackEvents = 'scCheckout';
                        s.products = ';' + cn + _satellite.getVar('Product Name');
                        s.events = s.apl(s.events, 'scCheckout', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.linkTrackVars =
                          'products,events,eVar40,eVar34,eVar39,eVar46,eVar53,eVar68';
                        s.linkTrackEvents = 'purchase,event15';
                        s.products =
                          ';' +
                          cn +
                          _satellite.getVar('Product Name') +
                          ';' +
                          _satellite.getVar('ProductUnits') +
                          ';' +
                          _satellite.getVar('ProductRevenue');
                        var pmethod = [];
                        if (_satellite.getVar('Country'))
                          pmethod.push(_satellite.getVar('Country'));
                        if (_satellite.getVar('Business Unit'))
                          pmethod.push(_satellite.getVar('Business Unit'));
                        if (_satellite.getVar('PaymentMethod'))
                          pmethod.push(_satellite.getVar('PaymentMethod'));
                        s.eVar40 =
                          _satellite.getVar('PaymentMethod') != '' ? pmethod.join(':') : '';
                        var appdec = [];
                        if (_satellite.getVar('Country'))
                          appdec.push(_satellite.getVar('Country'));
                        if (_satellite.getVar('Business Unit'))
                          appdec.push(_satellite.getVar('Business Unit'));
                        if (_satellite.getVar('Application Decision'))
                          appdec.push(_satellite.getVar('Application Decision'));
                        s.eVar34 =
                          _satellite.getVar('Application Decision') != '' ? appdec.join(':') : '';
                        var zcode = [];
                        if (_satellite.getVar('Country')) zcode.push(_satellite.getVar('Country'));
                        if (_satellite.getVar('ZipCode')) zcode.push(_satellite.getVar('ZipCode'));
                        s.eVar39 = _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                        s.eVar46 = s.purchaseID = purID;
                        s.eVar53 = conOpt != '' ? cn + bu + 'nonCardAcquisition:' + conOpt : '';
                        s.eVar68 = cn + bu + 'nonCardAcquisition';
                        s.events = s.apl(s.events, 'purchase', ',', ',', 2);
                        s.events = s.apl(s.events, 'event15', ',', ',', 2);
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'psSignups',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Personal Savings Transactions',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      var purID =
                        _satellite.getVar('AppID') != '' ? _satellite.getVar('AppID') : '';
                      var conOpt =
                        _satellite.getVar('Conversion Options') != ''
                          ? _satellite.getVar('Conversion Options')
                          : '';
                      var conType =
                        _satellite.getVar('Conversion Type') != '' &&
                        _satellite.getVar('Conversion Type') != 'undefined'
                          ? _satellite.getVar('Conversion Type')
                          : '';
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'event50';
                        pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                        s.products = pdt;
                        s.events = s.apl(s.events, 'event50', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.linkTrackVars = 'events,products,eVar39,eVar34,eVar46,eVar53,eVar68';
                        s.linkTrackEvents = 'event4';
                        pdt = ';' + cn + bu + _satellite.getVar('Event Name');
                        s.products = pdt;
                        var zcode = [];
                        if (_satellite.getVar('Country')) zcode.push(_satellite.getVar('Country'));
                        if (_satellite.getVar('ZipCode')) zcode.push(_satellite.getVar('ZipCode'));
                        s.eVar39 = _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                        s.eVar34 =
                          _satellite.getVar('Application Decision') != ''
                            ? cn + bu + _satellite.getVar('Application Decision')
                            : '';
                        s.eVar46 = purID;
                        s.eVar53 = conOpt != '' ? cn + bu + conType + ':' + conOpt : '';
                        s.eVar68 = conType != '' ? cn + bu + conType : '';
                        s.events = s.apl(s.events, 'event4', ',', ',', 2);
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'prepaidProduct',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Prepaid Product Application',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      if (_satellite.getVar('Business Unit') == 'AMEX') {
                        bu =
                          _satellite.getVar('Sub Category 1') != ''
                            ? _satellite.getVar('Sub Category 1') + ':'
                            : '';
                      }
                      var purID =
                        _satellite.getVar('PurchaseID') != ''
                          ? _satellite.getVar('PurchaseID')
                          : '';
                      var conOpt =
                        _satellite.getVar('Conversion Options') != ''
                          ? _satellite.getVar('Conversion Options')
                          : '';
                      var preAmt =
                        _satellite.getVar('Prepaid Amount') != ''
                          ? _satellite.getVar('Prepaid Amount')
                          : '';
                      var purFre =
                        _satellite.getVar('Purchase Frequency') != ''
                          ? _satellite.getVar('Purchase Frequency')
                          : '';
                      if (_satellite.getVar('Event Action').toLowerCase() == 'add') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'scAdd';
                        pdt = ';' + cn + 'Prepaid:' + _satellite.getVar('Product Name');
                        s.products = pdt;
                        s.events = s.apl(s.events, 'scAdd', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'remove') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'scRemove';
                        pdt = ';' + cn + 'Prepaid:' + _satellite.getVar('Product Name');
                        s.products = pdt;
                        s.events = s.apl(s.events, 'scRemove', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'events,products';
                        s.linkTrackEvents = 'scCheckout';
                        pdt = ';' + cn + 'Prepaid:' + _satellite.getVar('Product Name');
                        s.products = pdt;
                        s.events = s.apl(s.events, 'scCheckout', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.linkTrackVars =
                          'events,products,eVar39,eVar23,eVar40,eVar46,eVar53,eVar68';
                        s.linkTrackEvents = 'purchase';
                        pdt =
                          ';' +
                          cn +
                          'Prepaid:' +
                          _satellite.getVar('Product Name') +
                          ';' +
                          _satellite.getVar('ProductUnits') +
                          ';' +
                          _satellite.getVar('ProductRevenue') +
                          ';;eVar23=' +
                          purFre +
                          ':' +
                          preAmt;
                        s.products = pdt;
                        var pmethod = [];
                        if (_satellite.getVar('Country'))
                          pmethod.push(_satellite.getVar('Country'));
                        if (_satellite.getVar('Business Unit'))
                          pmethod.push(_satellite.getVar('Business Unit'));
                        if (_satellite.getVar('PaymentMethod'))
                          pmethod.push(_satellite.getVar('PaymentMethod'));
                        s.eVar40 =
                          _satellite.getVar('PaymentMethod') != '' ? pmethod.join(':') : '';
                        var zcode = [];
                        if (_satellite.getVar('Country')) zcode.push(_satellite.getVar('Country'));
                        if (_satellite.getVar('ZipCode')) zcode.push(_satellite.getVar('ZipCode'));
                        s.eVar39 = _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                        s.eVar46 = s.purchaseID = purID;
                        s.eVar53 = conOpt != '' ? cn + bu + 'Prepaid:' + conOpt : '';
                        s.eVar68 = cn + bu + 'Prepaid';
                        s.events = s.apl(s.events, 'purchase', ',', ',', 2);
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'video',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'RM Video tracking',
                    customSetup: function (event, s) {
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bn =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      s.linkTrackVars = 'prop21,prop22,eVar4,eVar5,events';
                      s.linkTrackEvents = 'event55,event56';
                      s.prop21 = s.eVar4 =
                        cn + bn + _satellite.getVar('Video Player Name') + ':' + 'Video';
                      s.prop22 = s.eVar5 =
                        _satellite.getVar('Event Action') + ':' + _satellite.getVar('Event Asset');
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start')
                        s.events = s.apl(s.events, 'event55', ',', ',', 2);
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.events = s.apl(s.events, 'event56', ',', ',', 2);
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'social',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Social Media Interactions',
                    setVars: {
                      eVar4: '%Country%:%Business Unit%:Social',
                      eVar5: '%Event Action%>%Event Asset%',
                      eVar66: '%Country%:%Business Unit%:Social:%Event Action%',
                      prop21: '%Country%:%Business Unit%:Social',
                      prop22: '%Event Action%>%Event Asset%',
                      prop66: '%Country%:%Business Unit%:Social:%Event Action%',
                    },
                    addEvent: ['event97'],
                  },
                ],
              },
            ],
          },
          {
            name: 'selfService',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Self Service Transactions',
                    customSetup: function (event, s) {
                      var s = window.s || s;
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'products,events';
                        s.linkTrackEvents = 'event51';
                        s.events = s.apl(s.events, 'event51', ',', ',', 2);
                        s.products = ';' + cn + bu + _satellite.getVar('Event Name');
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.linkTrackVars = 'products,events,eVar68';
                        s.linkTrackEvents = 'event14';
                        s.events = s.apl(s.events, 'event14', ',', ',', 2);
                        s.products = ';' + cn + bu + _satellite.getVar('Event Name');
                        s.eVar68 = _satellite.getVar('Self Service Name')
                          ? cn + bu + _satellite.getVar('Self Service Name')
                          : cn + bu + 'SelfServiceComplete';
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'suppApplication',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    type: 'o',
                    linkName: 'Stand Alone Card Application',
                    customSetup: function (event, s) {
                      s.AMEXCFM = function () {
                        var cv,
                          p,
                          el,
                          i,
                          f = 0,
                          f2 = 0,
                          cn = 's_cdfm',
                          a = 'Learn More Page',
                          b = 'Start App Page',
                          c = 'External Campaign:',
                          d = 'Internal Search:',
                          e = 'Browse:',
                          g = ':Previous Page ID Not Set',
                          h = 'no value',
                          j = 'search.americanexpress.com';
                        el = s.split(s.events, ',');
                        for (i in el)
                          if (el[i] == 'event12') {
                            f2 = 1;
                            break;
                          }
                        for (i in el)
                          if (el[i] == 'event1') {
                            f2 = 2;
                            break;
                          }
                        if (f2 == 0) return '';
                        cv = s.c_r(cn);
                        if (cv) {
                          p = s.split(cv, '|');
                          for (i in p)
                            if (p[i] == s.ser1) {
                              f = 1;
                              break;
                            }
                          if (f == 1) return '';
                        }
                        if (f2 == 1) {
                          if (s.campaign) s.eVar15 = c + a;
                          else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + a;
                          else if (s.eVar41)
                            if (s.eVar41 == h) s.eVar15 = e + a + g;
                            else s.eVar15 = e + a + s.eVar41;
                          else s.eVar15 = e + a + g;
                          if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                          else s.c_w(cn, s.ser1, 0);
                          return '';
                        } else if (f2 == 2) {
                          if (s.campaign) s.eVar15 = c + b;
                          else if (document.referrer.indexOf(j) > -1) s.eVar15 = d + b;
                          else if (s.eVar41)
                            if (s.eVar41 == h) s.eVar15 = e + b + g;
                            else s.eVar15 = e + b + s.eVar41;
                          else s.eVar15 = e + b + g;
                          if (cv) s.c_w(cn, cv + '|' + s.ser1, 0);
                          else s.c_w(cn, s.ser1, 0);
                          return '';
                        }
                      };
                      s.AMEXVisID = function (cn) {
                        var s = this,
                          e = new Date(),
                          ct = e.getTime(),
                          cv;
                        cn = cn ? cn : 's_uvid';
                        e.setTime(ct + 5 * 365 * 24 * 60 * 60 * 1000);
                        cv = s.c_r(cn);
                        if (cv) {
                          s.c_w(cn, cv, e);
                          return '';
                        } else {
                          var t = new Date(),
                            m = t.getTime(),
                            r1 = Math.floor(Math.random() * 10),
                            r2 = Math.floor(Math.random() * 10),
                            r3 = Math.floor(Math.random() * 10),
                            uv;
                          m = m.toString();
                          r1 = r1.toString();
                          r2 = r2.toString();
                          r3 = r3.toString();
                          uv = m + r1 + r2 + r3;
                          s.c_w(cn, uv, e);
                          return '';
                        }
                      };
                      s.AMEXVisNum = function () {
                        var d = this,
                          h = new Date(),
                          g,
                          c,
                          b = h.getTime(),
                          a = 's_vnum',
                          f = 's_invisit';
                        h.setTime(b + 5 * 365 * 24 * 60 * 60 * 1000);
                        visit_num_val = d.c_r(a);
                        g = d.c_r(f);
                        if (g) {
                          if (visit_num_val) {
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return visit_num_val;
                          } else {
                            return 1;
                          }
                        } else {
                          if (visit_num_val) {
                            c = visit_num_val.match(/(\d*)&vn=(\d*)/);
                            if (c) {
                              visit_num_val = c[2];
                            }
                            visit_num_val++;
                            d.c_w(a, visit_num_val, h);
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return visit_num_val;
                          } else {
                            d.c_w(a, 1, h);
                            h.setTime(b + 30 * 60 * 1000);
                            d.c_w(f, 'true', h);
                            return 1;
                          }
                        }
                      };
                      s.AMEXSerializer = function (f, sn) {
                        var el, fl, i, n;
                        if (!s.events) return '';
                        else {
                          el = s.split(s.events, ',');
                          fl = s.split(f, ',');
                          for (i in el)
                            for (n in fl)
                              if (el[i] == fl[n]) {
                                el[i] = el[i] + ':' + sn;
                                break;
                              }
                          s.events = s.join(el, '', '', ',', '');
                          return '';
                        }
                      };
                      s.apl = function (lv, vta, d1, d2, cc) {
                        d1 = d1 ? d1 : ',';
                        d2 = d2 ? d2 : d1;
                        if ('undefined' === typeof this.inList)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - inList helper function not available'
                            ),
                            lv
                          );
                        if ('undefined' !== typeof lv && 'string' !== typeof lv)
                          return (
                            console.log(
                              'Adobe Analytics: Problem with apl plugin - first passed-in argument is not lv string object'
                            ),
                            ''
                          );
                        if ('string' !== typeof vta) return lv;
                        vta = vta.split(',');
                        for (var g = vta.length, d = 0; d < g; d++)
                          this.inList(lv, vta[d], d1, cc) || (lv = lv ? lv + d2 + vta[d] : vta[d]);
                        return lv;
                      };
                      s.inList = function (lv, vtc, d, cc) {
                        if ('string' !== typeof vtc) return !1;
                        if ('string' === typeof lv) lv = lv.split(d ? d : ',');
                        else if ('object' !== typeof lv) return !1;
                        d = 0;
                        for (var e = lv.length; d < e; d++)
                          if (
                            (cc && vtc === lv[d]) ||
                            (!cc && vtc.toLowerCase() === lv[d].toLowerCase())
                          )
                            return !0;
                        return !1;
                      };
                      s.getTimeToComplete = function (sos, cn, exp) {
                        sos = sos ? sos.toLowerCase() : 'start';
                        cn = cn ? cn : 's_gttc';
                        exp = exp ? exp : 0;
                        var s = this,
                          d = s.c_r(cn),
                          e = new Date();
                        if ('start' === sos && !d)
                          s.c_w(cn, e.getTime(), exp ? new Date(e.getTime() + 86400000 * exp) : 0);
                        else if ('stop' === sos && d)
                          return (
                            (sos = Math.round((e.getTime() - d) / 1000)),
                            s.c_w(cn, '', 0),
                            s.formatTime(sos)
                          );
                      };
                      s.formatTime = function (ns, tf, bml) {
                        var s = this;
                        if (!('undefined' === typeof ns || isNaN(ns) || 0 > Number(ns))) {
                          if (
                            ('string' === typeof tf && 'd' === tf) ||
                            (('string' !== typeof tf || !s.inList('h,m,s', tf)) && 86400 <= ns)
                          ) {
                            tf = 86400;
                            var d = 'days';
                            bml = isNaN(bml) ? 4 : tf / (bml * tf);
                          } else
                            ('string' === typeof tf && 'h' === tf) ||
                            (('string' !== typeof tf || !s.inList('m,s', tf)) && 3600 <= ns)
                              ? ((tf = 3600),
                                (d = 'hours'),
                                (bml = isNaN(bml) ? 4 : tf / (bml * tf)))
                              : ('string' === typeof tf && 'm' === tf) ||
                                (('string' !== typeof tf || !s.inList('s', tf)) && 60 <= ns)
                              ? ((tf = 60),
                                (d = 'minutes'),
                                (bml = isNaN(bml) ? 2 : tf / (bml * tf)))
                              : ((tf = 1), (d = 'seconds'), (bml = isNaN(bml) ? 0.2 : tf / bml));
                          ns = Math.round((ns * bml) / tf) / bml + ' ' + d;
                          0 === ns.indexOf('1 ') && (ns = ns.substring(0, ns.length - 1));
                          return ns;
                        }
                      };
                      var cn =
                        _satellite.getVar('Country') != ''
                          ? _satellite.getVar('Country').toUpperCase() + ':'
                          : '';
                      var bu =
                        _satellite.getVar('Business Unit') != ''
                          ? _satellite.getVar('Business Unit') + ':'
                          : '';
                      var conOpt =
                        _satellite.getVar('Conversion Options') != ''
                          ? _satellite.getVar('Conversion Options')
                          : '';
                      var conType =
                        _satellite.getVar('Conversion Type') != '' &&
                        _satellite.getVar('Conversion Type') != 'undefined'
                          ? _satellite.getVar('Conversion Type')
                          : '';
                      pmc_code = _satellite.getVar('PMC') != '' ? _satellite.getVar('PMC') : '';
                      pdt = ';' + cn + bu + pmc_code;
                      if (_satellite.getVar('Event Action').toLowerCase() == 'start') {
                        s.linkTrackVars = 'events,products,eVar31';
                        s.linkTrackEvents = 'event47';
                        s.eVar31 = _satellite.getVar('ApplyFlowID');
                        s.products = pdt;
                        s.events = s.apl(s.events, 'event47', ',', ',', 2);
                      }
                      if (_satellite.getVar('Event Action').toLowerCase() == 'complete') {
                        s.linkTrackVars = 'events,products,eVar39,eVar29,eVar53,eVar68,eVar34';
                        s.linkTrackEvents = 'event24';
                        s.eVar34 = cn + bu + _satellite.getVar('Application Decision');
                        s.products = pdt;
                        var zcode = [];
                        if (_satellite.getVar('Country')) zcode.push(_satellite.getVar('Country'));
                        if (_satellite.getVar('ZipCode')) zcode.push(_satellite.getVar('ZipCode'));
                        s.eVar39 = _satellite.getVar('ZipCode') != '' ? zcode.join(':') : '';
                        s.eVar29 = _satellite.getVar('PCNnumber');
                        s.eVar53 = conOpt != '' ? cn + bu + conType + ':' + conOpt : '';
                        s.eVar68 = conType != '' ? cn + bu + conType : '';
                        s.events = s.apl(s.events, 'event24', ',', ',', 2);
                      }
                      if (pmc_code != '') s.ser1 = pmc_code;
                      s.AMEXVisID('s_uvid');
                      s.ser2 = s.AMEXVisNum();
                      s.ser3 = s.c_r('s_uvid');
                      if (s.ser1 && s.ser2 && s.ser3) {
                        s.ser = s.ser1 + s.ser2 + s.ser3;
                        if (s.ser.length > 20) {
                          s.ser = s.ser.substring(0, 20);
                        }
                      }
                      if (s.events && s.ser1) s.AMEXCFM();
                      if (s.ser) {
                        s.AMEXSerializer('event1,event2,event12,event47,event81', s.ser);
                      }
                      if (s.eVar29 && s.eVar29 !== 'null' && s.eVar29 !== '') {
                        s.AMEXSerializer(
                          'event3,event5,event9,event10,event11,event14,event24,event58',
                          s.eVar29
                        );
                      }
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'widgetAction',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    setVars: {
                      eVar4: '%Widget Hier1%:%Widget Event Asset%',
                      eVar5: '%Widget Hier1%:%Widget Event Asset%>>%Widget Event Action%',
                      eVar74: '%Widget Hier1%|%Widget Page Name%',
                      eVar89: '%widgetID%',
                      prop21: '%Widget Hier1%:%Widget Event Asset%',
                      prop22: '%Widget Hier1%:%Widget Event Asset%>>%Widget Event Action%',
                    },
                    customSetup: function (event, s) {
                      function ClearVars () {
                        svarArr = [
                          'channel',
                          'products',
                          'events',
                          'campaign',
                          'purchaseID',
                          'pageType',
                          'server',
                          'linkName',
                          'list1',
                          'list2',
                        ];
                        for (var i = 0; i < svarArr.length; i++) {
                          s[svarArr[i]] = '';
                        }
                        s.pageType = '';
                      }
                      ClearVars();
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'widgetError',
            trigger: [
              {
                engine: 'sc',
                command: 'trackLink',
                arguments: [
                  {
                    customSetup: function (event, s) {
                      function ClearVars () {
                        for (var i = 0; i < 75; i++) {
                          s['prop' + i] = '';
                          s['eVar' + i] = '';
                        }
                        svarArr = [
                          'channel',
                          'products',
                          'events',
                          'campaign',
                          'purchaseID',
                          'pageType',
                          'server',
                          'linkName',
                          'list1',
                          'list2',
                        ];
                        for (var i = 75; i <= 100; i++) {
                          s['eVar' + i] = '';
                        }
                        for (var i = 0; i < svarArr.length; i++) {
                          s[svarArr[i]] = '';
                        }
                        s.pageType = '';
                      }
                      ClearVars();
                      s.linkTrackVars = 'prop26';
                      s.prop26 = _satellite.getVar('Widget Error');
                      _satellite.notify(s.prop26);
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'widgetView',
            trigger: [
              {
                engine: 'sc',
                command: 'trackPageView',
                arguments: [
                  {
                    setVars: {
                      pageName: '%Widget Hier1%|%Widget Page Name%',
                      hier1: '%Widget Hier1%',
                    },
                    customSetup: function (event, s) {
                      function ClearVars () {
                        for (var i = 0; i < 75; i++) {
                          s['prop' + i] = '';
                          s['eVar' + i] = '';
                        }
                        svarArr = [
                          'channel',
                          'products',
                          'events',
                          'campaign',
                          'purchaseID',
                          'pageType',
                          'server',
                          'linkName',
                          'list1',
                          'list2',
                        ];
                        for (var i = 75; i <= 100; i++) {
                          s['eVar' + i] = '';
                        }
                        for (var i = 0; i < svarArr.length; i++) {
                          s[svarArr[i]] = '';
                        }
                        s.pageType = '';
                      }
                      ClearVars();
                      _satellite.notify(JSON.stringify(digitalData.widget));
                      _satellite.notify('Tools' + _satellite.getVar('Widget Tools'));
                      s.products = _satellite.getVar('Widget Products');
                      s.events = _satellite.getVar('Widget Events');
                      s.eVar29 = _satellite.getVar('Widget PCN');
                      s.eVar42 = s.prop35 = _satellite.getVar('Widget Tools');
                      s.eVar74 =
                        _satellite.getVar('Widget Hier1') +
                        '|' +
                        _satellite.getVar('Widget Page Name');
                      s.eVar89 = _satellite.getVar('widgetID');
                      if (_satellite.getVar('Widget Onsite Impression')) {
                        s.prop72 = _satellite.getVar('Widget Onsite Impression');
                        s.list1 = _satellite.getVar('Widget Onsite Impression');
                        s.events = s.apl(s.events, 'event20', ',', ',', 2);
                      }
                    },
                  },
                ],
              },
            ],
          },
        ],
        settings: {
          trackInternalLinks: true,
          libraryName: 'satelliteLib-f424e4c1e880782914108fb45b503d9aae8fe034',
          isStaging: false,
          allowGATTcalls: false,
          downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
          notifications: false,
          utilVisible: false,
          domainList: ['americanexpress.com'],
          scriptDir: '98caf8fccc463fd7e47088b35e73b27720bb5cc1/scripts/',
          tagTimeout: 3000,
        },
        data: {
          URI: document.location.pathname + document.location.search,
          browser: {},
          cartItems: [],
          revenue: '',
          host: { http: 'assets.adobedtm.com', https: 'assets.adobedtm.com' },
        },
        dataElements: {
          'AB Testing Code': {
            jsVariable: 'digitalData.page.attributes.abTest',
            storeLength: 'pageview',
          },
          'AMEX GUID': { cookie: 'blueboxpublic', storeLength: 'pageview' },
          'AMEX GUID - Customer Attribute': { cookie: 'blueboxpublic', storeLength: 'pageview' },
          AppID: { jsVariable: 'digitalData.page.attributes.appID', storeLength: 'pageview' },
          'App Length': {
            jsVariable: 'digitalData.page.attributes.appLength',
            storeLength: 'pageview',
          },
          'Application Decision': {
            jsVariable: 'digitalData.page.attributes.appDecision',
            storeLength: 'pageview',
          },
          applicationid: {
            jsVariable: 'digitalData.page.attributes.applicationID',
            storeLength: 'pageview',
            cleanText: true,
          },
          ApplyFlowID: {
            customJS: function () {
              if (typeof digitalData.page.attributes.applyFlowID !== 'undefined') {
                return digitalData.page.attributes.applyFlowID;
              } else {
                var applyflow = [];
                if (_satellite.getVar('Layer Country'))
                  applyflow.push(_satellite.getVar('Layer Country'));
                if (_satellite.getVar('Layer Sub Category 1'))
                  applyflow.push(_satellite.getVar('Layer Sub Category 1'));
                if (_satellite.getVar('App Type')) applyflow.push(_satellite.getVar('App Type'));
                if (_satellite.getVar('Product Name'))
                  applyflow.push(_satellite.getVar('Product Name'));
                if (_satellite.getVar('Channel')) applyflow.push(_satellite.getVar('Channel'));
                if (_satellite.getVar('PreApproval'))
                  applyflow.push(_satellite.getVar('PreApproval'));
                if (_satellite.getVar('App Length'))
                  applyflow.push(_satellite.getVar('App Length'));
                return applyflow.join(':');
              }
            },
            storeLength: 'pageview',
          },
          'App Type': {
            jsVariable: 'digitalData.page.attributes.appType',
            storeLength: 'pageview',
          },
          autotrack: {
            customJS: function () {
              if (
                typeof digitalData !== 'undefined' &&
                typeof digitalData.page != 'undefined' &&
                typeof digitalData.page.attributes != 'undefined' &&
                typeof digitalData.page.attributes.autotrack != 'undefined' &&
                (!digitalData.page.attributes.autotrack ||
                  digitalData.page.attributes.autotrack === 'false')
              ) {
                return false;
              } else {
                return true;
              }
            },
            storeLength: 'pageview',
          },
          buportfolio: { jsVariable: 'digitalData.user.buPortfolio', storeLength: 'pageview' },
          'Business Unit': {
            jsVariable: 'digitalData.page.category.businessUnit',
            storeLength: 'pageview',
          },
          cardportfolio: { jsVariable: 'digitalData.user.cardPortfolio', storeLength: 'pageview' },
          'Conversion Options': {
            jsVariable: 'digitalData.page.attributes.appConfig',
            storeLength: 'pageview',
          },
          'Conversion Type': {
            jsVariable: 'digitalData.page.attributes.conversionType',
            storeLength: 'pageview',
          },
          CorpUserID: { jsVariable: 'digitalData.user.corpUserID', storeLength: 'pageview' },
          Country: {
            customJS: function () {
              if (typeof digitalData != 'undefined') {
                if (typeof digitalData.page != 'undefined') {
                  if (typeof digitalData.page.pageInfo != 'undefined') {
                    if (typeof digitalData.page.pageInfo.country != 'undefined')
                      return digitalData.page.pageInfo.country.toUpperCase();
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'disable ID sync': {
            customJS: function () {
              window.excludeOmniture = true;
              var disableSync = true;
              if (
                typeof digitalData !== 'undefined' &&
                typeof digitalData.page !== 'undefined' &&
                typeof digitalData.page.pageInfo !== 'undefined' &&
                typeof digitalData.page.pageInfo.country !== 'undefined' &&
                digitalData.page.pageInfo.country.toLowerCase() === 'us'
              ) {
                _satellite.notify(digitalData.page.pageInfo.country.toLowerCase());
                _satellite.notify('disable false by DL');
                disableSync = false;
              } else if (
                disableSync &&
                window.location.pathname.substring(1, 3).toLowerCase() === 'us'
              ) {
                _satellite.notify('disable false by url');
                disableSync = false;
              }
              return disableSync;
            },
            storeLength: 'pageview',
          },
          dnsVisitorDetails: {
            jsVariable: 'digitalData.page.attributes.dnsVisitorData',
            storeLength: 'pageview',
          },
          'Dynamic Error name': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event.length > 0) {
                  var x = digitalData.event.length - 1;
                  if (digitalData.event[x].eventInfo) {
                    if (digitalData.event[x].eventInfo.eventName) {
                      return digitalData.event[x].eventInfo.eventName;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Error code': { jsVariable: 'digitalData.page.pageInfo.error', storeLength: 'pageview' },
          'eStatement Action': {
            jsVariable: 'digitalData.page.attributes.eStatementAction',
            storeLength: 'pageview',
          },
          'eStatement Date Range': {
            jsVariable: 'digitalData.page.attributes.eStatementDateRange',
            storeLength: 'pageview',
          },
          'eStatement Filter': {
            jsVariable: 'digitalData.page.attributes.eStatementFilter',
            storeLength: 'pageview',
          },
          'eStatement Sort': {
            jsVariable: 'digitalData.page.attributes.eStatementSort',
            storeLength: 'pageview',
          },
          'eStatement Type': {
            jsVariable: 'digitalData.page.attributes.eStatementType',
            storeLength: 'pageview',
          },
          'eStatement View Format': {
            jsVariable: 'digitalData.page.attributes.eStatementViewFormat',
            storeLength: 'pageview',
          },
          'Event Action': {
            customJS: function () {
              if (typeof digitalData != 'undefined') {
                if (typeof digitalData.event != 'undefined') {
                  if (digitalData.event.length > 0) {
                    var x = digitalData.event.length - 1;
                    if (digitalData.event[x].eventInfo) {
                      if (digitalData.event[x].eventInfo.eventAction) {
                        return digitalData.event[x].eventInfo.eventAction;
                      }
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Event Asset': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event.length > 0) {
                  if (digitalData.event[digitalData.event.length - 1].eventInfo) {
                    if (digitalData.event[digitalData.event.length - 1].eventInfo.eventAsset)
                      return digitalData.event[digitalData.event.length - 1].eventInfo.eventAsset;
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Event Description': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event.length > 0) {
                  var x = digitalData.event.length - 1;
                  if (digitalData.event[x].eventInfo) {
                    if (digitalData.event[x].eventInfo.eventDescription) {
                      return digitalData.event[x].eventInfo.eventDescription;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Event Name': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event.length > 0) {
                  var x = digitalData.event.length - 1;
                  if (digitalData.event[x].eventInfo) {
                    if (digitalData.event[x].eventInfo.eventName) {
                      return digitalData.event[x].eventInfo.eventName;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Event Type': {
            customJS: function () {
              if (typeof digitalData != 'undefined') {
                if (typeof digitalData.event != 'undefined') {
                  if (digitalData.event.length > 0) {
                    if (digitalData.event[digitalData.event.length - 1].eventInfo) {
                      if (digitalData.event[digitalData.event.length - 1].eventInfo.eventType)
                        return digitalData.event[digitalData.event.length - 1].eventInfo.eventType;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Experience Type': {
            jsVariable: 'digitalData.page.attributes.rwd',
            storeLength: 'pageview',
          },
          'FAQ ID': { jsVariable: 'digitalData.page.attributes.faqID', storeLength: 'pageview' },
          'Flow Type': {
            jsVariable: 'digitalData.page.attributes.flowType',
            storeLength: 'pageview',
          },
          'Form Analysis': {
            customJS: function () {
              if (typeof digitalData !== 'undefined') {
                if (typeof digitalData.page !== 'undefined') {
                  if (typeof digitalData.page.attributes !== 'undefined') {
                    if (typeof digitalData.page.attributes.formAnalysis !== 'undefined') {
                      if (digitalData.page.attributes.formAnalysis == 'on') {
                        return digitalData.page.attributes.formList;
                      }
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Form Value': {
            jsVariable: 'digitalData.page.attributes.formValue',
            storeLength: 'pageview',
          },
          'Full Layer Name': {
            customJS: function () {
              var lname = [];
              if (_satellite.getVar('Layer Country'))
                lname.push(_satellite.getVar('Layer Country'));
              if (_satellite.getVar('Layer Business Unit'))
                lname.push(_satellite.getVar('Layer Business Unit'));
              if (_satellite.getVar('Layer Primary Category'))
                lname.push(_satellite.getVar('Layer Primary Category'));
              if (_satellite.getVar('Layer Sub Category 1'))
                lname.push(_satellite.getVar('Layer Sub Category 1'));
              if (_satellite.getVar('Layer Sub Category 2'))
                lname.push(_satellite.getVar('Layer Sub Category 2'));
              if (_satellite.getVar('Layer Sub Category 3'))
                lname.push(_satellite.getVar('Layer Sub Category 3'));
              if (_satellite.getVar('Layer Name')) lname.push(_satellite.getVar('Layer Name'));
              var nameString = lname.join('|');
              return nameString;
            },
            storeLength: 'pageview',
          },
          'Full Page Name': {
            customJS: function () {
              var name = [];
              if (_satellite.getVar('Country')) name.push(_satellite.getVar('Country'));
              if (_satellite.getVar('Business Unit'))
                name.push(_satellite.getVar('Business Unit'));
              if (_satellite.getVar('Primary Category'))
                name.push(_satellite.getVar('Primary Category'));
              if (_satellite.getVar('Sub Category 1'))
                name.push(_satellite.getVar('Sub Category 1'));
              if (_satellite.getVar('Sub Category 2'))
                name.push(_satellite.getVar('Sub Category 2'));
              if (_satellite.getVar('Sub Category 3'))
                name.push(_satellite.getVar('Sub Category 3'));
              if (_satellite.getVar('Page Name')) name.push(_satellite.getVar('Page Name'));
              var nameString = name.join('|');
              return nameString;
            },
            storeLength: 'pageview',
          },
          getQueryParamValue: {
            customJS: function () {
              return function (queryParam, url) {
                var regex = new RegExp('[?&]' + queryParam + '=([^&#]*)', 'i');
                var queryParamValue = regex.exec(url);
                return queryParamValue ? queryParamValue[1] : null;
              };
            },
            storeLength: 'pageview',
          },
          'Hier 1': {
            customJS: function () {
              var name = [];
              if (_satellite.getVar('Country')) name.push(_satellite.getVar('Country'));
              if (_satellite.getVar('Business Unit'))
                name.push(_satellite.getVar('Business Unit'));
              if (_satellite.getVar('Primary Category'))
                name.push(_satellite.getVar('Primary Category'));
              if (_satellite.getVar('Sub Category 1'))
                name.push(_satellite.getVar('Sub Category 1'));
              if (_satellite.getVar('Sub Category 2'))
                name.push(_satellite.getVar('Sub Category 2'));
              if (_satellite.getVar('Sub Category 3'))
                name.push(_satellite.getVar('Sub Category 3'));
              var nameString = name.join('|');
              return nameString;
            },
            storeLength: 'pageview',
          },
          'iNav Link': { queryParam: 'inav', storeLength: 'pageview', ignoreCase: 1 },
          'Internal Search clickthrough': {
            customJS: function () {
              if (
                s.getQueryParam('searchresult', '', window.location) ||
                s.getQueryParam('dynamicsearch', '', window.location)
              )
                return 'True';
            },
            storeLength: 'pageview',
          },
          Language: { jsVariable: 'digitalData.page.pageInfo.language', storeLength: 'pageview' },
          'Layer Business Unit': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event[digitalData.event.length - 1]) {
                  if (digitalData.event[digitalData.event.length - 1].category) {
                    if (digitalData.event[digitalData.event.length - 1].category.businessUnit) {
                      return digitalData.event[digitalData.event.length - 1].category.businessUnit;
                    }
                  }
                }
              }
              return _satellite.getVar('Business Unit');
            },
            storeLength: 'pageview',
          },
          'Layer Country': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event[digitalData.event.length - 1]) {
                  if (digitalData.event[digitalData.event.length - 1].eventInfo) {
                    if (digitalData.event[digitalData.event.length - 1].eventInfo.country) {
                      var cc = digitalData.event[digitalData.event.length - 1].eventInfo.country;
                      return cc.toUpperCase();
                    }
                  }
                }
              }
              return _satellite.getVar('Country');
            },
            storeLength: 'pageview',
          },
          'Layer Hier': {
            customJS: function () {
              var name = [];
              if (_satellite.getVar('Layer Country'))
                name.push(_satellite.getVar('Layer Country'));
              if (_satellite.getVar('Layer Business Unit'))
                name.push(_satellite.getVar('Layer Business Unit'));
              if (_satellite.getVar('Layer Primary Category'))
                name.push(_satellite.getVar('Layer Primary Category'));
              if (_satellite.getVar('Layer Sub Category 1'))
                name.push(_satellite.getVar('Layer Sub Category 1'));
              if (_satellite.getVar('Layer Sub Category 2'))
                name.push(_satellite.getVar('Layer Sub Category 2'));
              if (_satellite.getVar('Layer Sub Category 3'))
                name.push(_satellite.getVar('Layer Sub Category 3'));
              var nameString = name.join('|');
              return nameString;
            },
            storeLength: 'pageview',
          },
          'Layer Name': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event[digitalData.event.length - 1]) {
                  if (digitalData.event[digitalData.event.length - 1].eventInfo) {
                    if (digitalData.event[digitalData.event.length - 1].eventInfo.layerName) {
                      return digitalData.event[digitalData.event.length - 1].eventInfo.layerName;
                    }
                  }
                }
              }
              return _satellite.getVar('Page Name');
            },
            storeLength: 'pageview',
          },
          'Layer Primary Category': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event[digitalData.event.length - 1]) {
                  if (digitalData.event[digitalData.event.length - 1].category) {
                    if (digitalData.event[digitalData.event.length - 1].category.primaryCategory) {
                      return digitalData.event[digitalData.event.length - 1].category
                        .primaryCategory;
                    }
                  }
                }
              }
              return _satellite.getVar('Primary Category');
            },
            storeLength: 'pageview',
          },
          'Layer Sub Category 1': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event[digitalData.event.length - 1]) {
                  if (digitalData.event[digitalData.event.length - 1].category) {
                    if (digitalData.event[digitalData.event.length - 1].category.subCategory1) {
                      return digitalData.event[digitalData.event.length - 1].category.subCategory1;
                    }
                  }
                }
              }
              return _satellite.getVar('Sub Category 1');
            },
            storeLength: 'pageview',
          },
          'Layer Sub Category 2': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event[digitalData.event.length - 1]) {
                  if (digitalData.event[digitalData.event.length - 1].category) {
                    if (digitalData.event[digitalData.event.length - 1].category.subCategory2) {
                      return digitalData.event[digitalData.event.length - 1].category.subCategory2;
                    }
                  }
                }
              }
              return _satellite.getVar('Sub Category 2');
            },
            storeLength: 'pageview',
          },
          'Layer Sub Category 3': {
            customJS: function () {
              if (digitalData.event) {
                if (digitalData.event[digitalData.event.length - 1]) {
                  if (digitalData.event[digitalData.event.length - 1].category) {
                    if (digitalData.event[digitalData.event.length - 1].category.subCategory3) {
                      return digitalData.event[digitalData.event.length - 1].category.subCategory3;
                    }
                  }
                }
              }
              return _satellite.getVar('Sub Category 3');
            },
            storeLength: 'pageview',
          },
          leadid: {
            jsVariable: 'digitalData.page.attributes.leadID',
            storeLength: 'pageview',
            cleanText: true,
          },
          legacynavidentifier: {
            customJS: function () {
              function checkLegacyNavigation (navigationId, isId) {
                var isNavigationExists = false;
                var legacyElement = '';
                if (isId) {
                  legacyElement = document.getElementById(navigationId);
                } else {
                  legacyElement = document.querySelector('[class^=' + navigationId + ']');
                }
                if (typeof legacyElement !== 'undefined' && legacyElement) {
                  isNavigationExists = true;
                }
                return isNavigationExists;
              }
              var navigationIndicator = '';
              try {
                if (
                  checkLegacyNavigation('amex-header', true) ||
                  checkLegacyNavigation('amex-footer', true)
                ) {
                  navigationIndicator = 'DLS Navigation';
                } else if (
                  checkLegacyNavigation('axp-global-header', false) ||
                  checkLegacyNavigation('axp-footer', false)
                ) {
                  navigationIndicator = 'DLS Navigation';
                } else if (
                  checkLegacyNavigation('iNavNGI_Header', true) ||
                  checkLegacyNavigation('iNavNGI_Footer', true)
                ) {
                  navigationIndicator = 'Legacy Navigation';
                }
              } catch (e) {
                console.log('Supress the errors if any while determining the Nav Indicator' + e);
              }
              return navigationIndicator;
            },
            storeLength: 'pageview',
          },
          linknav: { jsVariable: 'digitalData.page.attributes.linknav', storeLength: 'pageview' },
          loanofferamount: {
            customJS: function () {
              var loanAmountOffered = '';
              if (
                typeof digitalData !== 'undefined' &&
                typeof digitalData.page !== 'undefined' &&
                typeof digitalData.page.attributes !== 'undefined' &&
                typeof digitalData.page.attributes.loanOfferAmount !== 'undefined'
              ) {
                loanAmountOffered = digitalData.page.attributes.loanOfferAmount;
              }
              return loanAmountOffered;
            },
            storeLength: 'pageview',
          },
          loansubmissionamount: {
            customJS: function () {
              var loanAmountSubmitted = '';
              if (
                typeof digitalData !== 'undefined' &&
                typeof digitalData.page !== 'undefined' &&
                typeof digitalData.page.attributes !== 'undefined' &&
                typeof digitalData.page.attributes.loanSubmissionAmount !== 'undefined'
              ) {
                loanAmountSubmitted = digitalData.page.attributes.loanSubmissionAmount;
              }
              return loanAmountSubmitted;
            },
            storeLength: 'pageview',
          },
          Login: {
            customJS: function () {
              if (s.getQueryParam('omnlogin', '', window.location) != '') {
                return s.getQueryParam('omnlogin', '', window.location);
              } else {
                if (typeof digitalData != 'undefined') {
                  if (typeof digitalData.page != 'undefined') {
                    if (typeof digitalData.page.attributes != 'undefined') {
                      if (typeof digitalData.page.attributes.logintype != 'undefined') {
                        return digitalData.page.attributes.logintype;
                      }
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'Login Status': {
            customJS: function () {
              if (
                typeof digitalData.user != 'undefined' &&
                typeof digitalData.user.loginStatus != 'undefined'
              ) {
                return digitalData.user.loginStatus ? 'authenticated' : 'non-authenticated';
              } else {
                return;
              }
            },
            storeLength: 'pageview',
          },
          membertenure: { jsVariable: 'digitalData.user.memberTenure', storeLength: 'pageview' },
          merchandisingproduct: {
            customJS: function () {
              return function (key) {
                var pmc = [];
                if (
                  typeof digitalData !== 'undefined' &&
                  typeof digitalData.event != 'undefined' &&
                  typeof digitalData.event[key] != 'undefined'
                ) {
                  var pinfo = digitalData.event[key].productInfo;
                  for (j in pinfo) {
                    var prdstring = ';' + _satellite.getVar('Country') + ':';
                    if (typeof pinfo[j].lineOfBusiness !== 'undefined') {
                      prdstring += pinfo[j].lineOfBusiness + ':';
                    }
                    if (typeof pinfo[j].pmc !== 'undefined') {
                      prdstring += pinfo[j].pmc;
                    }
                    if (
                      typeof pinfo[j].richOfferFlag !== 'undefined' &&
                      pinfo[j].richOfferFlag == true
                    ) {
                      prdstring += ';;;event213=1';
                      s.events = s.apl(s.events, 'event213', ',', ',', 2);
                    }
                    if (
                      typeof pinfo[j].sourceCode !== 'undefined' ||
                      typeof pinfo[j].position !== 'undefined'
                    ) {
                      if (
                        typeof pinfo[j].richOfferFlag !== 'undefined' &&
                        pinfo[j].richOfferFlag == true
                      )
                        prdstring += ';';
                      else prdstring += ';;;;';
                      var merch = [];
                      if (pinfo[j].sourceCode) merch.push('eVar101=' + pinfo[j].sourceCode);
                      if (pinfo[j].position) merch.push('eVar102=' + pinfo[j].position);
                      prdstring += merch.join('|');
                    }
                    pmc.push(prdstring);
                  }
                }
                return pmc.join(',');
              };
            },
            storeLength: 'pageview',
          },
          'Non-promotional link': {
            queryParam: 'linknav',
            storeLength: 'pageview',
            ignoreCase: 1,
          },
          'Npn/fb naming': {
            customJS: function () {
              if (typeof digitalData !== 'undefined') {
                if (typeof digitalData.page !== 'undefined') {
                  if (typeof digitalData.page.pageInfo !== 'undefined') {
                    if (window.digitalData.page.pageInfo.pageName) return 'DTM';
                    else return 'fb';
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          'NumberOfCards - Card offers': {
            jsVariable: 'digitalData.page.attributes.numOfCards',
            storeLength: 'pageview',
          },
          'Number of Search Results': {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (window.digitalData.hasOwnProperty('page')) {
                  if (window.digitalData.page.hasOwnProperty('attributes')) {
                    if (window.digitalData.page.attributes.hasOwnProperty('searchResults')) {
                      if (digitalData.page.attributes.searchResults > 0)
                        return digitalData.page.attributes.searchResults;
                      else return 'zero';
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          omn_abtest: { jsVariable: 'omn_abtest', storeLength: 'pageview' },
          onecmsidentifier: {
            customJS: function () {
              var isMetaAvailable = false;
              const metaTags = document.getElementsByTagName('meta');
              for (let i = 0; i < metaTags.length; i++) {
                if (metaTags[i].getAttribute('name') === 'AEM') {
                  isMetaAvailable = true;
                  break;
                }
              }
              return isMetaAvailable;
            },
            storeLength: 'pageview',
          },
          'Onsite Promotion': {
            customJS: function () {
              if (typeof digitalData != 'undefined') {
                if (typeof digitalData.page != 'undefined') {
                  if (typeof digitalData.page.attributes != 'undefined') {
                    if (digitalData.page.attributes.intlink) {
                      return digitalData.page.attributes.intlink;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
            forceLowerCase: true,
          },
          'Onsite Promotion Impression': {
            jsVariable: 'digitalData.page.attributes.intlinkimp',
            storeLength: 'pageview',
          },
          'Onsite Promotion - Querystring': {
            customJS: function () {
              return s.getQueryParam('intlink', '', window.location);
            },
            storeLength: 'pageview',
            forceLowerCase: true,
          },
          'Page ID Number': {
            jsVariable: 'digitalData.page.pageInfo.pageID',
            storeLength: 'pageview',
          },
          'Page Name': {
            jsVariable: 'digitalData.page.pageInfo.pageName',
            storeLength: 'pageview',
          },
          PaymentMethod: {
            jsVariable: 'digitalData.page.attributes.paymentMethod',
            storeLength: 'pageview',
          },
          PCNnumber: { jsVariable: 'digitalData.user.pcnNumber', storeLength: 'pageview' },
          PMC: {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.event) {
                  if (digitalData.event.length > 0) {
                    var x = digitalData.event.length - 1;
                    if (digitalData.event[x].productInfo) {
                      if (
                        digitalData.event[x].productInfo[
                          digitalData.event[x].productInfo.length - 1
                        ]
                      ) {
                        if (
                          digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].pmc
                        ) {
                          return digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].pmc;
                        }
                      }
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          PreApproval: {
            jsVariable: 'digitalData.page.attributes.preApproval',
            storeLength: 'pageview',
          },
          'Prepaid Amount': {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.event) {
                  if (digitalData.event.length > 0) {
                    var x = digitalData.event.length - 1;
                    if (digitalData.event[x].productInfo) {
                      if (
                        digitalData.event[x].productInfo[
                          digitalData.event[x].productInfo.length - 1
                        ]
                      ) {
                        if (
                          digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].prepaidAmount
                        ) {
                          return digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].prepaidAmount;
                        }
                      }
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          prequaltransactionid: {
            jsVariable: 'digitalData.page.attributes.preQualTransactionId',
            storeLength: 'pageview',
            cleanText: true,
          },
          'Primary Category': {
            jsVariable: 'digitalData.page.category.primaryCategory',
            storeLength: 'pageview',
          },
          'Product Name': {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.event) {
                  if (digitalData.event.length > 0) {
                    var x = digitalData.event.length - 1;
                    if (digitalData.event[x].productInfo) {
                      if (
                        digitalData.event[x].productInfo[
                          digitalData.event[x].productInfo.length - 1
                        ]
                      ) {
                        if (
                          digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].productName
                        ) {
                          return digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].productName;
                        }
                      }
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          ProductRevenue: {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.event) {
                  var x = digitalData.event.length - 1;
                  if (digitalData.event[x].productInfo) {
                    if (
                      digitalData.event[x].productInfo[digitalData.event[x].productInfo.length - 1]
                        .revenue
                    ) {
                      return digitalData.event[x].productInfo[
                        digitalData.event[x].productInfo.length - 1
                      ].revenue.replace('$', '');
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          products: {
            customJS: function () {
              return function (key) {
                var pmc = [];
                if (
                  typeof digitalData !== 'undefined' &&
                  typeof digitalData.event != 'undefined' &&
                  typeof digitalData.event[key] != 'undefined'
                ) {
                  var pinfo = digitalData.event[key].productInfo;
                  for (j in pinfo) {
                    if (typeof pinfo[j].pmc !== 'undefined' && pmc.indexOf(pinfo[j].pmc) == -1) {
                      pmc.push(pinfo[j].pmc);
                    }
                  }
                }
                return pmc;
              };
            },
            storeLength: 'pageview',
          },
          ProductUnits: {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.event) {
                  var x = digitalData.event.length - 1;
                  if (digitalData.event[x].productInfo) {
                    if (
                      digitalData.event[x].productInfo[digitalData.event[x].productInfo.length - 1]
                        .quantity
                    ) {
                      return digitalData.event[x].productInfo[
                        digitalData.event[x].productInfo.length - 1
                      ].quantity;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          publishdate: {
            customJS: function () {
              var publishDate = _satellite.publishDate.match(/^(\d{4}-\d{2}-\d{2})?/g).pop();
              if (publishDate) {
                var pubDate = new Date(publishDate);
                if (typeof pubDate === 'object') {
                  return (
                    pubDate.getMonth() + 1 + '/' + pubDate.getDate() + '/' + pubDate.getFullYear()
                  );
                }
              }
            },
            default: 'NA',
            storeLength: 'pageview',
          },
          'Purchase Frequency': {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.event) {
                  if (digitalData.event.length > 0) {
                    var x = digitalData.event.length - 1;
                    if (digitalData.event[x].productInfo) {
                      if (
                        digitalData.event[x].productInfo[
                          digitalData.event[x].productInfo.length - 1
                        ]
                      ) {
                        if (
                          digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].purchaseFrequency
                        ) {
                          return digitalData.event[x].productInfo[
                            digitalData.event[x].productInfo.length - 1
                          ].purchaseFrequency;
                        }
                      }
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          PurchaseID: {
            jsVariable: 'digitalData.page.attributes.purchaseID',
            storeLength: 'pageview',
          },
          pznid: {
            jsVariable: 'digitalData.page.attributes.pznId',
            storeLength: 'pageview',
            cleanText: true,
          },
          'PZN Indicators': {
            jsVariable: 'digitalData.page.attributes.PZNIndicators',
            storeLength: 'pageview',
          },
          pznrequestid: {
            jsVariable: 'digitalData.page.attributes.pznRequestId',
            storeLength: 'pageview',
            cleanText: true,
          },
          'Request ID': {
            jsVariable: 'digitalData.page.attributes.requestId',
            storeLength: 'pageview',
          },
          'RSVP ID': { jsVariable: 'digitalData.page.attributes.rsvp', storeLength: 'pageview' },
          'RSVP offer ID': {
            jsVariable: 'digitalData.page.attributes.offerID',
            storeLength: 'pageview',
          },
          'Search Keyword': {
            jsVariable: 'digitalData.page.attributes.searchKeyword',
            storeLength: 'pageview',
          },
          'Self Service Name': {
            jsVariable: 'digitalData.page.attributes.selfServiceType',
            storeLength: 'pageview',
          },
          'SE Number': { jsVariable: 'digitalData.user.seNumber', storeLength: 'pageview' },
          SiteToolName: {
            jsVariable: 'digitalData.page.attributes.tool',
            storeLength: 'pageview',
          },
          'Sub Category 1': {
            jsVariable: 'digitalData.page.category.subCategory1',
            storeLength: 'pageview',
          },
          'Sub Category 2': {
            jsVariable: 'digitalData.page.category.subCategory2',
            storeLength: 'pageview',
          },
          'Sub Category 3': {
            jsVariable: 'digitalData.page.category.subCategory3',
            storeLength: 'pageview',
          },
          'Survey ID': {
            jsVariable: 'digitalData.page.attributes.surveyID',
            storeLength: 'pageview',
          },
          TransactionName: {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.transaction) {
                  var x = digitalData.transaction.length - 1;
                  if (digitalData.transaction[x].transactionInfo) {
                    if (digitalData.transaction[x].transactionInfo.transactionName) {
                      return digitalData.transaction[x].transactionInfo.transactionName;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          TransactionStep: {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.transaction) {
                  var x = digitalData.transaction.length - 1;
                  if (digitalData.transaction[x].transactionInfo) {
                    if (digitalData.transaction[x].transactionInfo.transactionStep) {
                      return digitalData.transaction[x].transactionInfo.transactionStep;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          TransactionType: {
            customJS: function () {
              if (window.hasOwnProperty('digitalData')) {
                if (digitalData.transaction) {
                  var x = digitalData.transaction.length - 1;
                  if (digitalData.transaction[x].transactionInfo) {
                    if (digitalData.transaction[x].transactionInfo.transactionType) {
                      return digitalData.transaction[x].transactionInfo.transactionType;
                    }
                  }
                }
              }
            },
            storeLength: 'pageview',
          },
          userconsent: {
            customJS: function () {
              return s.c_r('CookieConsent');
            },
            storeLength: 'pageview',
            cleanText: true,
          },
          'Video Player Name': {
            jsVariable: 'digitalData.page.attributes.videoPlayerName',
            storeLength: 'pageview',
          },
          'Widget Error': { jsVariable: 'digitalData.widget.error', storeLength: 'pageview' },
          'Widget Event Action': {
            jsVariable: 'digitalData.widget.eventAction',
            storeLength: 'pageview',
          },
          'Widget Event Asset': {
            jsVariable: 'digitalData.widget.eventAsset',
            storeLength: 'pageview',
          },
          'Widget Events': { jsVariable: 'digitalData.widget.events', storeLength: 'pageview' },
          'Widget Hier1': { jsVariable: 'digitalData.widget.hierarchy', storeLength: 'pageview' },
          widgetID: { jsVariable: 'digitalData.widget.id', storeLength: 'pageview' },
          'Widget Onsite Impression': {
            jsVariable: 'digitalData.widget.intlinkimp',
            storeLength: 'pageview',
          },
          'Widget Page Name': {
            jsVariable: 'digitalData.widget.pageName',
            storeLength: 'pageview',
          },
          'Widget PCN': { jsVariable: 'digitalData.widget.pcn', storeLength: 'pageview' },
          'Widget Products': {
            jsVariable: 'digitalData.widget.products',
            storeLength: 'pageview',
          },
          'Widget Tools': { jsVariable: 'digitalData.widget.tools', storeLength: 'pageview' },
          ZipCode: { jsVariable: 'digitalData.user.zipCode', storeLength: 'pageview' },
        },
        appVersion: '7QN',
        buildDate: '2020-11-11 03:24:46 UTC',
        publishDate: '2020-11-11 03:24:45 UTC',
      });
    })(window, document);
  })();
}
