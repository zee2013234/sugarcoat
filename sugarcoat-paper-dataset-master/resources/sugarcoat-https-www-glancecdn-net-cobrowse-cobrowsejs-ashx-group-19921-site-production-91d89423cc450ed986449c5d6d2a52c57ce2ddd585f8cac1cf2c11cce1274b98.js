{
  const $___stub_fb986baf23da602c = {};
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
  })($___stub_fb986baf23da602c);
  const $___stub_053c907fde22f83d = {};
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
  })($___stub_053c907fde22f83d);
  const $___stub_c92db3a21e6ea955 = {};
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
  })($___stub_c92db3a21e6ea955);
  (function () {
    (function () {
      const $___old_733e4aa9bab14b28 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_733e4aa9bab14b28)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_fb986baf23da602c.userAgent
          ));
        return function () {
          var m =
              'function' == typeof Object.defineProperties
                ? Object.defineProperty
                : function (a, c, b) {
                    if (b.get || b.set)
                      throw new TypeError('ES3 does not support getters and setters.');
                    a != Array.prototype && a != Object.prototype && (a[c] = b.value);
                  },
            p =
              'undefined' != typeof window && window === this
                ? this
                : 'undefined' != typeof global && null != global
                ? global
                : this;
          function q () {
            q = function () {};
            p.Symbol || (p.Symbol = ca);
          }
          var da = 0;
          function ca (a) {
            return 'jscomp_symbol_' + (a || '') + da++;
          }
          function t () {
            q();
            var a = p.Symbol.iterator;
            a || (a = p.Symbol.iterator = p.Symbol('iterator'));
            'function' != typeof Array.prototype[a] &&
              m(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                  return ea(this);
                },
              });
            t = function () {};
          }
          function ea (a) {
            var c = 0;
            return fa(function () {
              return c < a.length ? { done: !1, value: a[c++] } : { done: !0 };
            });
          }
          function fa (a) {
            t();
            a = { next: a };
            a[p.Symbol.iterator] = function () {
              return this;
            };
            return a;
          }
          for (var v = p, w = ['Array', 'from'], x = 0; x < w.length - 1; x++) {
            var y = w[x];
            y in v || (v[y] = {});
            v = v[y];
          }
          var A = w[w.length - 1],
            B = v[A],
            C = B
              ? B
              : function (a, c, b) {
                  t();
                  c = c
                    ? c
                    : function (a) {
                        return a;
                      };
                  var d = [],
                    f = a[Symbol.iterator];
                  if ('function' == typeof f)
                    for (a = f.call(a); !(f = a.next()).done; ) d.push(c.call(b, f.value));
                  else for (var f = a.length, u = 0; u < f; u++) d.push(c.call(b, a[u]));
                  return d;
                };
          C != B && null != C && m(v, A, { configurable: !0, writable: !0, value: C });
          var D;
          window.GLANCE = window.GLANCE || {};
          window.GLANCE.VERSION = '4.15.0.9';
          window.GLANCE.PATCH = '';
          var F = navigator.userAgent.toLowerCase(),
            G = F.match(/(edge)[\s\/:]([\w\d\.]+)?/) ||
              F.match(
                /(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/
              ) ||
              F.match(/(rv):([\w\d\.]+)/) || [null, 'unknown', 0];
          'rv' === G[1] && (G[1] = 'ie');
          void 0 === D &&
            (D = function (a) {
              return JSON.stringify(a);
            });
          function H (a, c, b) {
            I('addEventListener', window, a, c, b);
          }
          function J (a, c, b) {
            var d = {};
            d[c] = b;
            a.postMessage(d, '*');
          }
          function K (a, c) {
            window.addEventListener('message', function (b) {
              var d;
              if ('string' === typeof b.data)
                try {
                  d = JSON.parse(b.data);
                } catch (f) {
                  return !1;
                }
              else d = b.data;
              void 0 !== d[a] && c(b.source, d[a]);
            });
          }
          window.Sarissa && Sarissa._SARISSA_IS_IE && new window.XMLHttpRequest();
          function L (a, c) {
            this.name = a;
            var b;
            if (!(b = c)) {
              var d = new P(window);
              b = d.b.location.hostname;
              for (d = d.b; '' === b && d.parent !== d; )
                (b = d.parent.location.hostname), (d = d.parent);
              b = ga(b);
            }
            this.domain = b;
          }
          L.prototype.g = function () {
            var a = this.get();
            return a ? JSON.parse(a) : null;
          };
          L.prototype.get = function () {
            return this.c()
              ? unescape(
                  document.cookie.replace(
                    new RegExp(
                      '(?:^|.*;\\s*)' +
                        escape(this.name).replace(/[\-\.\+\*]/g, '\\$&') +
                        '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
                    ),
                    '$1'
                  )
                )
              : null;
          };
          L.prototype.f = function () {
            var a = new Date();
            a.setDate(a.getDate() - 1);
            document.cookie =
              escape(this.name) +
              '=; expires=' +
              a.toGMTString() +
              '; domain=' +
              this.domain +
              '; path=/';
          };
          L.prototype.c = function () {
            return new RegExp(
              '(?:^|;\\s*)' + escape(this.name).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\='
            ).test(document.cookie);
          };
          function Q (a) {
            this.name = a;
          }
          Q.prototype.g = function () {
            if (!this.c()) return null;
            var a = localStorage.getItem(this.name);
            return JSON.parse(a);
          };
          Q.prototype.get = function () {
            return this.c() ? localStorage.getItem(this.name) : null;
          };
          Q.prototype.f = function () {
            localStorage.removeItem(this.name);
            localStorage.removeItem(this.name + '_exp');
          };
          Q.prototype.c = function () {
            const $___old_85ef3681ee6959db = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_85ef3681ee6959db)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_053c907fde22f83d.localStorage
                ));
              return function () {
                var a = localStorage.getItem(this.name + '_exp');
                if (!a) return !1;
                a = new Date(a);
                return a < new Date() ? (this.f(), !1) : !0;
              }.apply(this, arguments);
            } finally {
              if ($___old_85ef3681ee6959db)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_85ef3681ee6959db));
            }
          };
          function R (a, c) {
            this.a = [new L(a, c), new Q(a)];
          }
          R.prototype.g = function () {
            return this.a[0].g() || this.a[1].g();
          };
          R.prototype.get = function () {
            return this.a[0].get() || this.a[1].get();
          };
          R.prototype.f = function () {
            this.a[0].f();
            this.a[1].f();
          };
          R.prototype.c = function () {
            return this.a[0].c() || this.a[1].c();
          };
          function P (a) {
            this.a = a.document;
            this.b = a;
            var c = [
              ['hidden', 'visibilitychange'],
              ['mozHidden', 'mozvisibilitychange'],
              ['webkitHidden', 'webkitvisibilitychange'],
              ['msHidden', 'msvisibilitychange'],
              ['oHidden', 'ovisibilitychange'],
            ];
            for (a = 0; a < c.length && !(c[a][0] in document); a++);
          }
          function ga (a) {
            var c = new RegExp(/^(?:[a-z]{1,5}:\/\/|)([^\:\?\/]*)/),
              b = a.match(/^\d+\.\d+.\d+.\d+$/),
              c = c.exec(a);
            if (b) return a;
            if (null === c || 2 !== c.length)
              return 'about:' !== a && S('ERR_DOMAINPARSE: ' + a), null;
            b = c[1].split('.');
            return 1 === b.length
              ? (S('ERR_DOMAINPARSE: ' + a), null)
              : 2 === b.length
              ? b.join('.')
              : 3 === b.length
              ? b.slice(1).join('.')
              : 4 >= b[b.length - 2].length
              ? b.slice(b.length - 3).join('.')
              : b.slice(b.length - 2).join('.');
          }
          function T (a, c, b) {
            var d = a.a.createElement('script');
            b && d.addEventListener('load', b);
            d.setAttribute('type', 'text/javascript');
            d.setAttribute('charset', 'UTF-8');
            for (b = 0; b < c.length; b++) d.setAttribute(c[b][0], c[b][1]);
            a.a.head.appendChild(d);
          }
          P.prototype.head = function () {
            return void 0 !== this.a.head
              ? this.a.head
              : I('getElementsByTagName', this.a, 'head')[0];
          };
          function U (a, c) {
            a.b.addEventListener &&
              (document.readyState.match(/complete/)
                ? c()
                : (a.b.addEventListener('load', c),
                  a.a.addEventListener('DOMContentLoaded', c, !1)));
          }
          P.prototype.addEventListener = function (a, c, b) {
            this.a.addEventListener(a, c, b);
          };
          P.prototype.removeEventListener = function (a, c, b) {
            this.a.removeEventListener(a, c, b);
          };
          function S (a) {
            window.console &&
              window.console.log &&
              (window.GLANCE_COBROWSE ? !window.GLANCE_COBROWSE.disableLogging : 1) &&
              window.console.log(a);
          }
          function V (a) {
            this.element = a;
          }
          V.prototype.addEventListener = function (a, c, b) {
            this.element.addEventListener(a, c, b);
          };
          V.prototype.removeEventListener = function (a, c, b) {
            this.element.removeEventListener(a, c, b);
          };
          function I () {
            var a = Array.from(arguments),
              c = a[0],
              b = a[1],
              a = a.slice(2, a.length);
            return V.b && V.a && b.nodeType
              ? '#document' === b.nodeName
                ? V.a.document[c].apply(b, a)
                : '#document-fragment' === b.nodeName
                ? V.a.DocumentFragment.prototype[c].apply(b, a)
                : '[object Window]' === b.toString()
                ? V.a.window[c].apply(b, a)
                : V.a.document.body[c].apply(b, a)
              : b[c].apply(b, a);
          }
          function ha () {
            this.listeners = this.a = {};
          }
          function W (a, c) {
            var b;
            a &&
              ((b = b || Object.keys(a)),
              b.forEach(function (b) {
                void 0 !== a[b] && (c[b] = a[b]);
              }));
          }
          function X (a) {
            var c = {};
            if (!a) return c;
            var b = 0;
            for (a = a.attributes; b < a.length; b++) {
              var d = a[b].nodeName.match(/data-(.*)/);
              d && 2 === d.length && (c[d[1]] = a[b].nodeValue);
            }
            return c;
          }
          function ia () {
            var a = window.GLANCE_COBROWSE ? window.GLANCE_COBROWSE : {},
              c = document.getElementById('glance-cobrowse'),
              b = X(document.getElementById('cobrowsescript')),
              c = X(c);
            W(b, a);
            W(c, a);
            return a;
          }
          var ja = ['4', '15', '0', '9'].slice(0, 3).join('.') + 'M';
          function ka () {
            this.b =
              document.getElementById('cobrowsescript') ||
              document.getElementById('glance-cobrowse');
            if (null !== this.b) {
              var a = ia();
              W(a, this);
              var c = /\/\/(.*)\//.exec(
                'string' === typeof this.b.src ? this.b.src : a.scriptserver + '/'
              );
              this.a = c && 2 === c.length ? c[1] : 'www.glancecdn.net/cobrowse';
              this.a = this.a.replace('/js', '');
              a.cbexperiment && (this.a = this.a.replace('cobrowse', 'cbexperiment'));
              c = (a.oninit || '').split(':');
              this.j = a.groupid || this.b.getAttribute('groupid');
              this.A = a.ws || this.b.getAttribute('ws') || 'www.glance.net';
              this.A.match('\\.glance\\.net$');
              this.w = a.ui;
              this.h = { i: c[0], B: c[1] };
              this.v = a.site || this.b.getAttribute('site') || 'production';
              this.o = JSON.parse(a.inputevents || '{}');
              this.s = a.presence;
              if (!this.j) throw Error('data-groupid missing');
              a = a.additionalgroupids || '';
              this.l = [this.j].concat(a ? a.split(',') : []);
              this.l = this.l.map(function (a) {
                if (!parseInt(a)) throw Error('data-groupid invalid: ' + a);
                return parseInt(a);
              });
              if (!/staging|production/i.test(this.v)) throw Error('data-site invalid');
            }
          }
          function Y () {
            return 0 < window.location.href.indexOf('GlanceSession=1');
          }
          window.GLANCE = window.GLANCE || {};
          window.GLANCE.Cobrowse = window.GLANCE.Cobrowse || {};
          function Z () {
            const $___old_0134afb0f4389c89 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              ),
              $___old_f645a84b063cab26 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
            try {
              if ($___old_0134afb0f4389c89)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_053c907fde22f83d.localStorage
                ));
              if ($___old_f645a84b063cab26)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_c92db3a21e6ea955.XMLHttpRequest
                ));
              return function () {
                function a () {
                  if (g.h.i) {
                    var a = new R('glance_ssn_info');
                    a.g() &&
                      ('abandonsession' === g.h.i
                        ? a.f()
                        : 'continuesession' === g.h.i && g.h.B !== a.g().ssnid && a.f());
                  }
                }
                function c (a) {
                  function b (a, b, c) {
                    return function (e) {
                      if (
                        e.keyCode === b &&
                        e[a + 'Key'] &&
                        ((e = c.match(/showButton|toggleButton|showTerms/)
                          ? 'VisitorUI'
                          : 'Visitor'),
                        !u(e, c))
                      )
                        window.GLANCE.Cobrowse[e][c]();
                    };
                  }
                  for (var c in a)
                    if (a.hasOwnProperty(c)) {
                      var e = c.match(/(ctrl|alt|shift)-(\d*)/);
                      !e || 3 > e.length || H('keydown', b(e[1], parseInt(e[2]), a[c]), !0);
                    }
                }
                function b () {
                  var a = document.body;
                  function b (a) {
                    return function (b) {
                      var c = a.match(/showButton|toggleButton|showTerms/)
                        ? 'VisitorUI'
                        : 'Visitor';
                      b.stopPropagation();
                      b.preventDefault();
                      if (!u(c, a)) h[c][a]();
                    };
                  }
                  ['glance_button', 'data-glancebutton'].forEach(function (c) {
                    for (
                      var e = a.querySelectorAll('[' + c + ']'), d = 0;
                      e && d < e.length;
                      d++
                    ) {
                      var M = e[d].getAttribute(c);
                      'start' === M && (M = 'startSession');
                      e[d].addEventListener('click', b(M));
                    }
                  });
                }
                function d () {
                  return h.Visitor;
                }
                function f (a, b) {
                  h[b][a] = function (c) {
                    l(function () {
                      h[b][a](c);
                    }, b);
                  };
                }
                function u (a, b) {
                  if (!n) return !1;
                  J(window.top, 'forwardevent', { namespace: a, funcname: b });
                  return !0;
                }
                function l (a, b) {
                  b = b || 'Visitor';
                  if (I('getElementById', r.a, ('glance_' + b).toLowerCase()))
                    h[b].loaded ? a && a() : a && S('SCRIPT_NOT_LOADED:' + b);
                  else if (
                    (a && (aa._onload[b] = a),
                    n || 'Visitor' !== b || g.w || l(null, 'VisitorUI'),
                    T(r, [
                      ['id', ('glance_' + b).toLowerCase()],
                      ['src', N + '/GlanceCobrowse' + b + '_' + O + '.js'],
                    ]),
                    'Visitor' === b)
                  ) {
                    var c,
                      e = document.getElementsByTagName('iframe');
                    for (c = 0; c < e.length; c++)
                      e[c].contentWindow && J(e[c].contentWindow, 'glance_load', { m: !0 });
                  }
                }
                window.GLANCE.runDiagnostics = function () {
                  T(r, [['src', 'https://' + g.a + '/js/diagnostics.js']]);
                };
                if (window.localStorage && window.XMLHttpRequest && window.atob) {
                  if (!window.addEventListener) return null;
                  var n = window.parent !== window,
                    r = new P(window),
                    ba = !1,
                    g = new ka(),
                    O = ja,
                    h = window.GLANCE.Cobrowse,
                    N = '//' + g.a + '/js';
                  n || a();
                  var z = new ha();
                  if (h.Loader) S('ERR_DUP_SCRIPTS');
                  else {
                    var aa = {
                      load: function (a) {
                        l(a);
                      },
                      loadScript: function (a, b) {
                        T(r, [['src', N + '/' + a + '_' + O + '.js']], b);
                      },
                      _eventListeners: z,
                      _onload: {},
                      _origpath: window.location.pathname,
                    };
                    K('glance_load', function (a, b) {
                      a !== window.parent && a.parent !== window
                        ? S('UNTRUSTED_LOAD_MSG')
                        : (b.m && l(),
                          b.u &&
                            null !== I('getElementById', r.a, 'glance_visitor') &&
                            J(a, 'glance_load', { m: !0 }));
                    });
                    n && J(window.parent, 'glance_load', { u: !0 });
                    window.addEventListener('message', function (a) {
                      if ('string' !== typeof a.data) {
                        if (d().loaded) return !0;
                        a.data.glance_invoke &&
                          ((a.data.origin = a.origin),
                          l(function () {
                            window.postMessage(a.data, window.location.href);
                          }));
                      }
                    });
                    H('focus', function () {
                      if (d().loaded) return !0;
                      d().inSession() && l();
                    });
                    h.Visitor = {
                      loaded: !1,
                      inSession: function () {
                        return new R('glance_ssn_info').c();
                      },
                      addEventListener: function (a, b) {
                        z.a[a] = z.a[a] || [];
                        z.a[a].push(b);
                      },
                      removeEventListener: function (a, b) {
                        var c,
                          d = z.a[a];
                        void 0 !== d && ((c = d.indexOf(b)), 0 <= c && d.splice(c, 1));
                      },
                    };
                    var E = ['showButton', 'toggleButton', 'showTerms', 'setStyle'];
                    n ||
                      ((h.VisitorUI = {}),
                      E.forEach(function (a) {
                        f(a, 'VisitorUI');
                      }));
                    E = E.concat(['startSession', 'setStartParams']);
                    E.forEach(function (a) {
                      f(a, 'Visitor');
                    });
                    h.Loader = aa;
                    n || Y() || !d().inSession() || l();
                    !n && Y() && l(null, 'XDOM');
                    U(r, function () {
                      document.body &&
                        !ba &&
                        ((ba = !0),
                        b(),
                        c(g.o),
                        g.s && !n && T(r, [['src', N + '/GlancePresenceVisitor_' + O + '.js']]));
                    });
                    K('forwardevent', function (a, b) {
                      if (a.top !== window) S('UNTRUSTED_KEYEVT');
                      else window.GLANCE.Cobrowse[b.namespace][b.funcname]();
                    });
                  }
                } else
                  window.console &&
                    window.console.error &&
                    window.console.error('ERR_COBROWSE_NOT_SUPP');
              }.apply(this, arguments);
            } finally {
              if ($___old_0134afb0f4389c89)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_0134afb0f4389c89));
              if ($___old_f645a84b063cab26)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_f645a84b063cab26
                ));
            }
          }
          document.getElementById('cobrowsescript') || document.getElementById('glance-cobrowse')
            ? Z()
            : (S('LOADER_PAGE_NOT_READY'), U(new P(window), Z));
        }.apply(this, arguments);
      } finally {
        if ($___old_733e4aa9bab14b28)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_733e4aa9bab14b28
          ));
      }
    }.call(window));
  })();
}
